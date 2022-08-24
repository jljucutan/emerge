function requireOnePrimary(sValue,sName,sField){
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

function validateDepends(sValue,sName,sField){
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
        return eFormRequiredDate(sValue,sName,sField);
      }
      return eFormRequiredField(sValue,sName,sField);
    }
    return true;
}

function optionalDepends(sValue,sName,sField){
    if('<$client.env.serversidevalidation>' == '1'){return true;}
    var isRequired = true;
    var config = <$include;/main/RedCarpet/FormTemplates/Fiche_Profil_-_SELIA/js/config.json>;
    config.fieldAttrs.forEach(function(f) {
      if (f.name != sField) {
        return true;
      }
      if (!f.optionalWhenNoValueOn) {
        return true;
      }
      f.optionalWhenNoValueOn.forEach(function(dep) {
        if (document.querySelector('[name$=".' + dep + '"]').value.length) {
          isRequired = false;
        }
      })
    });
    if (isRequired) {
      if (document.querySelector('[name="' + sName + '"]').type == 'hidden') {
        return eFormRequiredDate(sValue,sName,sField);
      }
      return eFormRequiredField(sValue,sName,sField);
    }
    return true;
}

function requireOnePrimaryDepends(sValue,sName,sField){
    if('<$client.env.serversidevalidation>' == '1'){return true;}
    // optional if no filled noms
    if (validateDepends(sValue,sName,sField)) {
      return true;
    }
    return requireOnePrimary(sValue,sName,sField)
}

function nameValidation(sValue,sName,sField){
    if('<$client.env.serversidevalidation>' == '1'){return true;}
    if (sValue.length < 1) {
      return true;
    }
    if (!/^[-A-Z ',]+$/.test(sValue)) {
      AddError(sField, 'Erreur de validation, seules les majuscules, les tirets, les apostrophes et les virgules sont autorisés dans', '');
      return false;
    }
    return true;
}

function nameValidationRequired(sValue,sName,sField){
    if('<$client.env.serversidevalidation>' == '1'){return true;}
    if (!eFormRequiredField(sValue,sName,sField)) {
      return false;
    }
    return nameValidation(sValue,sName,sField);
}

function addressValidation(sValue,sName,sField){
    if('<$client.env.serversidevalidation>' == '1'){return true;}
    if (sValue.length < 1) {
      return true;
    }
    if (!/^[-A-Z0-9 ,']+$/.test(sValue)) {
      AddError(sField, 'Erreur de validation, seuls les majuscules, les chiffres, le trait d\'union, l\'apostrophe et la virgule sont autorisés dans', '');
      return false;
    }
    return true;
}

function addressValidationRequired(sValue,sName,sField){
    if('<$client.env.serversidevalidation>' == '1'){return true;}
    if (!eFormRequiredField(sValue,sName,sField)) {
      return false;
    }
    return addressValidation(sValue,sName,sField);
}

function requireByAddressFR(sValue,sName,sField) {
    if('<$client.env.serversidevalidation>' == '1'){return true;}
    var addressFR = ['Tax_Address_Pays','No_de_la_voie','Bis_Ter','Type_de_voie','Nom_de_la_voie','Complement_dadresse','Code_postal','Bureau_distributeur','No_INSEE_commune'];
    var isRequired = true;
    addressFR.forEach(function(addr) {
        if (!document.querySelector('[name$=".' + addr + '"]').value.length) {
            isRequired = false;
        }
    })
    if (isRequired) {
        return eFormRequiredField(sValue,sName,sField);
    }
}

function requiredByAddressFRAddress(sValue,sName,sField) {
    if('<$client.env.serversidevalidation>' == '1'){return true;}
    if (addressValidation(sValue,sName,sField)) {
        return requireByAddressFR(sValue,sName,sField);
    }
    return true;
}
