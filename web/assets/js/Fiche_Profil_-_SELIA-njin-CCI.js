function eFormRequiredFieldFrench(sValue,sName,sField){
  'use strict';
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  if (sValue.length > 0) {
    return false;
  }
  AddError(sField,'Erreur de validation, informations obligatoires manquantes dans','');
  return true;
}

function eFormRequiredNonZeroFrench(sValue,sName,sField){
  'use strict';
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  var v = new Number(sValue);
  if (sValue > 0) {
    return false;
  }
  AddError(sField,'Erreur de validation, informations obligatoires manquantes dans','');
  return true;
}

function eFormValidDateFr(sVal,sName,sID,sFormat) {
  'use strict';
  if (CheckDate(sVal)){
    return true;
  }
  if (sFormat == null) { 
    sFormat = 'mm/dd/yyyy'; 
  }
  AddError(sID,'Erreur de validation, date ou format invalide (' + sFormat + ') dans','');
  return false;
}

function eFormRequiredDateFrench(sVal,sName,sID,sFormat){
  'use strict';
  if(eFormRequiredFieldFrench(sVal,sName,sID)) { 
    return true; 
  }
  return eFormValidDate(sVal,sName,sID,sFormat);
}

function requireOnePrimary(sValue,sName,sField){
  'use strict';
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  var hasChecked = false;
  document.querySelectorAll('[name$=".contact_primary_1"], [name$=".contact_primary_2"]').forEach(function(c) {
    if (c.checked) {
      hasChecked = true;
    }
  });
  if (!hasChecked) {
    AddError(sField, 'Erreur de validation, veuillez sélectionner le contact principal dans', '');
    return false;
  }
  return true;
}

function requireDepends(sValue,sName,sField){
  'use strict';
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  var isRequired = false;
  var config = <$include;/main/RedCarpet/FormTemplates/Fiche_Profil_-_SELIA/js/config.json>;
  config.fieldAttrs.forEach(function(f) {
    if (f.name != sField) {
      return true;
    }
    if (!f.dependsOnAnyOf) {
      return true;
    }
    f.dependsOnAnyOf.forEach(function(dep) {
      if (document.querySelector('[name$=".' + dep + '"]').value.length) {
        isRequired = true;
      }
    })
  });
  if (isRequired) {
    if (document.querySelector('[name="' + sName + '"]').type == 'hidden') {
      return eFormRequiredDateFrench(sValue,sName,sField);
    }
    return eFormRequiredFieldFrench(sValue,sName,sField);
  }
  return true;
}

function optionalDepends(sValue,sName,sField){
  'use strict';
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  var isRequired = false;
  var config = <$include;/main/RedCarpet/FormTemplates/Fiche_Profil_-_SELIA/js/config.json>;
  config.fieldAttrs.forEach(function(f) {
    if (f.name != sField) {
      return true;
    }
    if (!f.dependsOnAnyOf) {
      return true;
    }
    f.dependsOnAnyOf.forEach(function(dep) {
      if (!document.querySelector('[name$=".' + dep + '"]').value.length) {
        isRequired = true;
      }
    })
  });
  if (!isRequired) {
    return true;
  }
  if (document.querySelector('[name="' + sName + '"]').type == 'hidden') {
    return eFormRequiredDateFrench(sValue,sName,sField);
  }
  return eFormRequiredFieldFrench(sValue,sName,sField);
}

function requireOnePrimaryDepends(sValue,sName,sField){
  'use strict';
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  // optional if no filled noms
  if (requireDepends(sValue,sName,sField)) {
    return true;
  }
  return requireOnePrimary(sValue,sName,sField)
}

function nameValidation(sValue,sName,sField){
  'use strict';
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  if (sValue.length < 1) {
    return true;
  }
  if (!/^[-a-zA-Z ']+$/.test(sValue)) {
    AddError(sField, 'Erreur de validation, autoriser uniquement les lettres majuscules ou minuscules, les traits d\'union ou les apostrophes, et aucun symbole, caractère accentué, étranger ou spécial n\'est autorisé dans', '');
    return false;
  }
  return true;
}

function nameValidationRequired(sValue,sName,sField){
  'use strict';
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  if (!eFormRequiredFieldFrench(sValue,sName,sField)) {
    return false;
  }
  return nameValidation(sValue,sName,sField);
}

function addressValidation(sValue,sName,sField){
  'use strict';
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  if (sValue.length < 1) {
    return true;
  }
  if (!/^[-A-Z0-9 .,']+$/.test(sValue)) {
    AddError(sField, 'Erreur de validation, seuls les majuscules, les chiffres, le trait d\'union, l\'apostrophe et la virgule sont autorisés dans', '');
    return false;
  }
  return true;
}

function addressValidationRequired(sValue,sName,sField){
  'use strict';
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  if (!addressValidation(sValue,sName,sField)) {
    return false;
  }
  return eFormRequiredFieldFrench(sValue,sName,sField);
}

function requireDependsAddress(sValue,sName,sField){
  'use strict';
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  if (!addressValidation(sValue,sName,sField)) {
    return false;
  }
  return requireDepends(sValue,sName,sField);
}

function optionalDependsName(sValue,sName,sField){
  'use strict';
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  if (!nameValidation(sValue,sName,sField)) {
    return false;
  }
  return optionalDepends(sValue,sName,sField);
}

function optionalDependsAddress(sValue,sName,sField){
  'use strict';
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  if (!addressValidation(sValue,sName,sField)) {
    return false;
  }
  return optionalDepends(sValue,sName,sField);
}

function validateSSNRequired(sValue,sName,sField){
  'use strict';
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  if (sValue && sValue.length != 15) {
    AddError(sField,'Erreur de validation, seuls 15 caractères exactement sont autorisés dans','');
    return false;
  }
  return eFormRequiredFieldFrench(sValue,sName,sField);
}
