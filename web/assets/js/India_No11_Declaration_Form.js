function IN11DF_RequiredFields (sValue, sName, sField) {
  if ("<$client.env.serversidevalidation>" == "1") { return true; }

  switch (sField) {
    case "A002_Father":
      if (!($("[name$='A002_Father'][value='Father']:checked").length || $("[name$='A002_Spouse'][value='Spouse']:checked").length)) {
        AddError('', 'Error in validation, required information is missing in Father/Spouse', '');
        return false;
      }
      break;
    case "A009_AP":
      if ($("[name$='A007_Provident_Fund_Scheme'][value='Yes']:checked").length || $("[name$='A008_Pension_Scheme'][value='Yes']:checked").length) {
        if (eFormRequiredField(sValue, sName, sField) == false) { return false; }
        return IN11DF_TwoAlphaFormat(sValue, sName, sField);
      }
      else {
        return IN11DF_TwoAlphaFormat(sValue, sName, sField);
      }
      break;
    case "A009_HYD":
      if ($("[name$='A007_Provident_Fund_Scheme'][value='Yes']:checked").length || $("[name$='A008_Pension_Scheme'][value='Yes']:checked").length) {
        if (eFormRequiredField(sValue, sName, sField) == false) { return false; }
        return IN11DF_ThreeAlphaFormat(sValue, sName, sField);
      }
      else {
        return IN11DF_ThreeAlphaFormat(sValue, sName, sField);
      }
      break;
    case "A009_EST_CODE":
    case "A009_PF_NO":
      if ($("[name$='A007_Provident_Fund_Scheme'][value='Yes']:checked").length || $("[name$='A008_Pension_Scheme'][value='Yes']:checked").length) {
        if (eFormRequiredField(sValue, sName, sField) == false) { return false; }
        return IN11DF_SevenMaxNumericFormat(sValue, sName, sField);
      }
      else {
        return IN11DF_SevenMaxNumericFormat(sValue, sName, sField);
      }
      break;
    case "A009_UAN":
    case "A009_Scheme_Certificate_No":
    case "A009_Pension_Payment_Order":
      if ($("[name$='A007_Provident_Fund_Scheme'][value='Yes']:checked").length || $("[name$='A008_Pension_Scheme'][value='Yes']:checked").length) {
        return eFormRequiredField(sValue, sName, sField);
      }
      break;
    case "A009_Date_of_Exit":
      if ($("[name$='A007_Provident_Fund_Scheme'][value='Yes']:checked").length || $("[name$='A008_Pension_Scheme'][value='Yes']:checked").length) {
        return eFormRequiredDate(sValue, sName, sField);
      }
      break;
    case "A010_Country_of_Origin":
    case "A010_Passport_Number":
      if ($("[name$='A010_International_Worker'][value='Yes']:checked").length) {
        return eFormRequiredField(sValue, sName, sField);
      }
      break;
    case "A010_Validity_of_Passport_From":
    case "A010_Validity_of_Passport_To":
      if ($("[name$='A010_International_Worker'][value='Yes']:checked").length) {
        return eFormRequiredDate(sValue, sName, sField);
      }
      break;
    case "A011_AADHAR_Number":
        return IN11DF_TwelveDigitFormat(sValue, sName, sField);
      break;
    default:
      break;
  }
}

function IN11DF_TwoAlphaFormat (sValue, sName, sField) {
  if (sValue) {
    var pattern = /^[A-Za-z]{2}$/i;
    if (!pattern.test(sValue)) {
      AddError(sField, 'Error in validation, must be in two alpha format in', '');
      return false;
    }
  }
  return true;
}

function IN11DF_ThreeAlphaFormat (sValue, sName, sField) {
  if (sValue) {
    var pattern = /^[A-Za-z]{3}$/i;
    if (!pattern.test(sValue)) {
      AddError(sField, 'Error in validation, must be in three alpha format in', '');
      return false;
    }
  }
  return true;
}

function IN11DF_SevenMaxNumericFormat (sValue, sName, sField) {
  if (sValue) {
    var pattern = /^[0-9]{1,7}$/g;
    if (!pattern.test(sValue)) {
      AddError(sField, 'Error in validation, must be in up to seven numeric format in', '');
      return false;
    }
  }
  return true;
}

function IN11DF_ThreeOptionalAlphaNumericFormat (sValue, sName, sField) {
  if (sValue) {
    var pattern = /^[A-Za-z0-9]{3}$/g;
    if (!pattern.test(sValue)) {
      AddError(sField, 'Error in validation, must be in three alpha or numeric format in', '');
      return false;
    }
  }
  return true;
}

function IN11DF_TwelveDigitFormat (sValue, sName, sField) {
  if (sValue) {
    var pattern = /^[0-9]{12}$/g;
    if (!pattern.test(sValue)) {
      AddError(sField, 'Error in validation, must be in twelve digit format in', '');
      return false;
    }
  }
  return true;
}
