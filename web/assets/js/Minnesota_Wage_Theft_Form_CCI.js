//=================================================================
//  Do not customize this block. It will be overwritten.
//=================================================================
////////////////////////////////////////////////////
//  ValidateWTF
////////////////////////////////////////////////////
function ValidateWTF(sVal,sName,sID){
    return eFormRunValidator('ValidateWTF',null,sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_Legal_name_of_employer
////////////////////////////////////////////////////
function ValidateWTFWTF_Legal_name_of_employer(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (!IS_NEW_HIRE) {
      return eFormRequiredField(sVal,sName,sID);
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_business_address
////////////////////////////////////////////////////
function ValidateWTFWTF_business_address(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (!IS_NEW_HIRE) {
      return eFormRequiredField(sVal,sName,sID);
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_Employer_Phone_number
////////////////////////////////////////////////////
function ValidateWTFWTF_Employer_Phone_number(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (!IS_NEW_HIRE) {
      return eFormRequiredField(sVal,sName,sID);
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_Employer_Email_Address
////////////////////////////////////////////////////
function ValidateWTFWTF_Employer_Email_Address(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (!IS_NEW_HIRE && eFormRequiredField(sVal,sName,sID)) {
      return CheckEmailFormat(sVal,sName,sID);
    }
    return CheckEmailFormat(sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_Operating_name_of_employer
////////////////////////////////////////////////////
function ValidateWTFWTF_Operating_name_of_employer(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (!IS_NEW_HIRE) {
      return eFormRequiredField(sVal,sName,sID);
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_Employee_Status_exempt
////////////////////////////////////////////////////
function ValidateWTFWTF_Employee_Status_exempt(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (!IS_NEW_HIRE) {
      var field = document.querySelector('[name="' + sName + '"]')
      var siblings = document.querySelectorAll('[data-checkbox-group="' + field.dataset.checkboxGroup + '"]');
      if (!oneOfSiblingsChecked(siblings)) {
        AddError(sID, 'Error in validation, please select at least one of', '');
        return false;
      }
      return true;
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_Employee_Exempt_From_minimum_wage
////////////////////////////////////////////////////
function ValidateWTFWTF_Employee_Exempt_From_minimum_wage(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (!IS_NEW_HIRE && !document.querySelector('[name="' + sName + '"]').disabled) {
      var siblings = document.querySelectorAll('[name$=".WTF_Employee_Exempt_From_minimum_wage"], [name$=".WTF_Employee_Exempt_From_overtime"], [name$=".WTF_Employee_Exempt_From_other"]');
      if (!oneOfSiblingsChecked(siblings)) {
        AddError('\'exempt from\'', 'Error in validation, please select at least one of ', '');
      }
      return true;
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTF
////////////////////////////////////////////////////
function ValidateWTFWTF_Paid_by_Hour(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (!IS_NEW_HIRE) {
      var field = document.querySelector('[name="' + sName + '"]')
      var siblings = document.querySelectorAll('[data-checkbox-group="' + field.dataset.checkboxGroup + '"]');
      if (!oneOfSiblingsChecked(siblings)) {
        AddError(sID, 'Error in validation, please select at least one of', '');
        return false;
      }
      return true;
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_Overtime
////////////////////////////////////////////////////
function ValidateWTFWTF_Overtime(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (!IS_NEW_HIRE) {
      return eFormRequiredField(sVal,sName,sID);
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTF
////////////////////////////////////////////////////
function ValidateWTFWTF_Allowances_claimed(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (!IS_NEW_HIRE) {
      return eFormRequiredField(sVal,sName,sID);
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_Overtime_per_meal
////////////////////////////////////////////////////
function ValidateWTFWTF_Overtime_per_meal(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (!IS_NEW_HIRE) {
      return eFormRequiredField(sVal,sName,sID);
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_Overtime_per_day
////////////////////////////////////////////////////
function ValidateWTFWTF_Overtime_per_day(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (!IS_NEW_HIRE) {
      return eFormRequiredField(sVal,sName,sID);
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_fair_market_value
////////////////////////////////////////////////////
function ValidateWTFWTF_fair_market_value(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (!IS_NEW_HIRE) {
      return eFormRequiredField(sVal,sName,sID);
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_Leave_benefits_Sick_Leave
////////////////////////////////////////////////////
function ValidateWTFWTF_Leave_benefits_Sick_Leave(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (!IS_NEW_HIRE) {
      var field = document.querySelector('[name="' + sName + '"]')
      var siblings = document.querySelectorAll('[name$=".WTF_Leave_benefits_Sick_Leave"], [name$=".WTF_Leave_benefits_Paid_vacation"], [name$=".WTF_Leave_benefits_Other_paid_time_off"]');
      if (!oneOfSiblingsChecked(siblings)) {
        AddError(sID, 'Error in validation, please select at least one of', '');
        return false;
      }
      return true;
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_hours_benefits_accrued
////////////////////////////////////////////////////
function ValidateWTFWTF_hours_benefits_accrued(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (!IS_NEW_HIRE) {
      var filled = false;
      document.querySelectorAll('[name$=".WTF_hours_benefits_accrued"], [name$=".WTF_days_benefits_accrued"]').forEach(function(f) {
        if (f.value.trim().length > 0) {
          filled = true;
        }
      });
      if (!filled) {
        AddError(sID, 'Error in validation, please fill one of', '');
        return false;
      }
      return true;
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_Other_Method
////////////////////////////////////////////////////
function ValidateWTFWTF_Other_Method(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    const field = document.querySelector('[name="' + sName + '"]');
    if (!IS_NEW_HIRE && !field.disabled) {
      return eFormRequiredField(sVal,sName,sID);
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_Deductions_Other_text
////////////////////////////////////////////////////
function ValidateWTFWTF_Deductions_Other_text(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    const field = document.querySelector('[name="' + sName + '"]');
    if (!IS_NEW_HIRE && !field.disabled) {
      return eFormRequiredField(sVal,sName,sID);
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_benefits_accrued_Per_year
////////////////////////////////////////////////////
function ValidateWTFWTF_benefits_accrued_Per_year(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (!IS_NEW_HIRE) {
      var field = document.querySelector('[name="' + sName + '"]')
      var siblings = document.querySelectorAll('[data-checkbox-group="' + field.dataset.checkboxGroup + '"]');
      if (!oneOfSiblingsChecked(siblings)) {
        AddError(sID, 'Error in validation, please select at least one of', '');
        return false;
      }
      return true;
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_Terms_of_use
////////////////////////////////////////////////////
function ValidateWTFWTF_Terms_of_use(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (!IS_NEW_HIRE) {
      return eFormRequiredField(sVal,sName,sID);
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_Legal_basis_for_exemption
////////////////////////////////////////////////////
function ValidateWTFWTF_Legal_basis_for_exemption(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    const field = document.querySelector('[name="' + sName + '"]');
    if (!IS_NEW_HIRE && !field.disabled) {
      return eFormRequiredField(sVal,sName,sID);
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_Rate
////////////////////////////////////////////////////
function ValidateWTFWTF_Rate(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    const field = document.querySelector('[name="' + sName + '"]');
    if (!IS_NEW_HIRE) {
      return eFormRequiredField(sVal,sName,sID);
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_Deductions_Federal_Taxes
////////////////////////////////////////////////////
function ValidateWTFWTF_Deductions_Federal_Taxes(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (!IS_NEW_HIRE) {
      var field = document.querySelector('[name="' + sName + '"]')
      var siblings = document.querySelectorAll('[data-epp-group="' + field.dataset.eppGroup + '"]');
      if (!oneOfSiblingsChecked(siblings) && siblings.length) {
        AddError('Deductions', 'Error in validation, please select at least one of', '');
        return false;
      }
      return true;
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_days_in_pay_period
////////////////////////////////////////////////////
function ValidateWTFWTF_days_in_pay_period(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (!IS_NEW_HIRE) {
      return eFormRequiredField(sVal,sName,sID);
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_Regularly_scheduled_payday
////////////////////////////////////////////////////
function ValidateWTFWTF_Regularly_scheduled_payday(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (!IS_NEW_HIRE) {
      return eFormRequiredField(sVal,sName,sID);
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_Employer_signature
////////////////////////////////////////////////////
function ValidateWTFWTF_Employer_signature(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (document.querySelector('[name="' + sName + '"]').disabled === false) {
      return eFormRequiredField(sVal,sName,sID);
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_Employer_Date
////////////////////////////////////////////////////
function ValidateWTFWTF_Employer_Date(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (document.querySelector('[name="' + sName + '_display"]').disabled === true) {
      return true;
    }
    if (sVal.length < 1) {
      return eFormRequiredDate(sVal,sName,sID);
    }
    return eFormRequiredTodayDate(sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateWTFWTFEmployee_signature
////////////////////////////////////////////////////
function ValidateWTFWTF_Employee_signature(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (document.querySelector('[name="' + sName + '"]').disabled === false) {
      return eFormRequiredField(sVal,sName,sID);
    }
    return true;
}

////////////////////////////////////////////////////
//  ValidateWTFWTF_Employee_Date
////////////////////////////////////////////////////
function ValidateWTFWTF_Employee_Date(sVal,sName,sID){
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (document.querySelector('[name="' + sName + '_display"]').disabled === true) {
      return true;
    }
    if (sVal.length < 1) {
      return eFormRequiredDate(sVal,sName,sID);
    }
    return eFormRequiredTodayDate(sVal,sName,sID);
}

const oneOfSiblingsChecked = function(fields) {
  "use strict";
  if('<$client.env.serversidevalidation>'=='1'){return true;}
  let checked = false;
  fields.forEach(function(chckbx) {
    if (!!chckbx.checked && chckbx.offsetParent != null && chckbx.type == 'checkbox') {
      checked = true;
    }
  });
  return checked;
}
