//=================================================================
//  Do not customize this block. It will be overwritten. 
//=================================================================

////////////////////////////////////////////////////
//  ValidateSDD
////////////////////////////////////////////////////
function ValidateSDD(sVal,sName,sID){
  return eFormRunValidator('ValidateSDD',null,sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateSDDLastName
////////////////////////////////////////////////////
function ValidateSDDLastName(sVal,sName,sID){
  //
}

////////////////////////////////////////////////////
//  ValidateSDDEmployeeName
////////////////////////////////////////////////////
function ValidateSDDEmployeeName(sVal,sName,sID){
  //
}

////////////////////////////////////////////////////
//  ValidateSDDEmployeeSignature
////////////////////////////////////////////////////
function ValidateSDDEmployeeSignature(sVal,sName,sID){
  //
}

////////////////////////////////////////////////////
//  ValidateSDDSignatureDate
////////////////////////////////////////////////////
function ValidateSDDSignatureDate(sVal,sName,sID){
  //
}

////////////////////////////////////////////////////
//  ValidateSDDSignatureVerification
////////////////////////////////////////////////////
function ValidateSDDSignatureVerification(sVal,sName,sID){
  //
}

////////////////////////////////////////////////////
//  ValidateSDDa01_bank_name
////////////////////////////////////////////////////
function ValidateSDDa01_bank_name(sVal,sName,sID){
  return eFormRequiredField(sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateSDDa02_bank_routing_number
////////////////////////////////////////////////////
function ValidateSDDa02_bank_routing_number(sVal,sName,sID){
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  if(!eFormRequiredField(sVal,sName,sID)) {
    return false;
  }
  return validateRoutingNumber(sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateSDDa03_bank_account_number
////////////////////////////////////////////////////
function ValidateSDDa03_bank_account_number(sVal,sName,sID){
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  if(!eFormRequiredField(sVal,sName,sID)) {
    return false;
  }
  return validateAccountNumber(sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateSDDa04_account_type
////////////////////////////////////////////////////
function ValidateSDDa04_account_type(sVal,sName,sID){
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  return eFormRequiredField(sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateSDDa04_deposit_amount
////////////////////////////////////////////////////
function ValidateSDDa04_deposit_amount(sVal,sName,sID){
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  if (!isFillable(sName)) {
    return false;
  }
  return eFormRequiredField(sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateSDDa04_net_amount
////////////////////////////////////////////////////
function ValidateSDDa04_net_amount(sVal,sName,sID){
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  var visibleNetAmounts = 0;
  var checked = 0;
  document
    .querySelectorAll('[name$=".a04_net_amount"], [name$=".a10_net_amount"], [name$=".a16_net_amount"]')
    .forEach(function(nAmt) {
      if (nAmt.offsetParent != null) {
        visibleNetAmounts++;
      }
      if (!!nAmt.checked) {
        checked++;
      }
    });
  if (visibleNetAmounts > 1 && checked == 0) {
    AddError('', 'Error in validation, at least 1 \'OR Net Amount\' should be selected.', '');
    return false;
  }
  return true;
}

////////////////////////////////////////////////////
//  ValidateSDDa05_bank_name
////////////////////////////////////////////////////
function ValidateSDDa05_bank_name(sVal,sName,sID){
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  if (!isFillable(sName)) {
    return false;
  }
  return eFormRequiredField(sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateSDDa06_bank_routing_number
////////////////////////////////////////////////////
function ValidateSDDa06_bank_routing_number(sVal,sName,sID){
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  if (!isFillable(sName)) {
    return false;
  }
  if(!eFormRequiredField(sVal,sName,sID)) {
    return false;
  }
  return validateRoutingNumber(sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateSDDa07_bank_account_number
////////////////////////////////////////////////////
function ValidateSDDa07_bank_account_number(sVal,sName,sID){
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  if (!isFillable(sName)) {
    return false;
  }
  if(!eFormRequiredField(sVal,sName,sID)) {
    return false;
  }
  return validateAccountNumber(sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateSDDa08_account_type
////////////////////////////////////////////////////
function ValidateSDDa08_account_type(sVal,sName,sID){
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  if (!isFillable(sName)) {
    return false;
  }
  return eFormRequiredField(sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateSDDa09_deposit_amount
////////////////////////////////////////////////////
function ValidateSDDa09_deposit_amount(sVal,sName,sID){
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  if (!isFillable(sName)) {
    return false;
  }
  return eFormRequiredField(sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateSDDa10_net_amount
////////////////////////////////////////////////////
function ValidateSDDa10_net_amount(sVal,sName,sID){
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  if (!isFillable(sName)) {
    return false;
  }
  // do not require this if partner input field is filled
  if (!!document.getElementById('a09_deposit_amount').value.length) {
    return false;
  }
  return eFormRequiredField(sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateSDDa11_bank_name
////////////////////////////////////////////////////
function ValidateSDDa11_bank_name(sVal,sName,sID){
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  if (!isFillable(sName)) {
    return false;
  }
  return eFormRequiredField(sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateSDDa12_bank_routing_number
////////////////////////////////////////////////////
function ValidateSDDa12_bank_routing_number(sVal,sName,sID){
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  if (!isFillable(sName)) {
    return false;
  }
  if(!eFormRequiredField(sVal,sName,sID)) {
    return false;
  }
  return validateRoutingNumber(sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateSDDa13_bank_account_number
////////////////////////////////////////////////////
function ValidateSDDa13_bank_account_number(sVal,sName,sID){
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  if (!isFillable(sName)) {
    return false;
  }
  if(!eFormRequiredField(sVal,sName,sID)) {
    return false;
  }
  return validateAccountNumber(sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateSDDa14_account_type
////////////////////////////////////////////////////
function ValidateSDDa14_account_type(sVal,sName,sID){
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  if (!isFillable(sName)) {
    return false;
  }
  return eFormRequiredField(sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateSDDa15_deposit_amount
////////////////////////////////////////////////////
function ValidateSDDa15_deposit_amount(sVal,sName,sID){
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  if (!isFillable(sName)) {
    return false;
  }
  return eFormRequiredField(sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateSDDa16_net_amount
////////////////////////////////////////////////////
function ValidateSDDa16_net_amount(sVal,sName,sID){
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  if (!isFillable(sName)) {
    return false;
  }
  // do not require this if partner input field is filled
  if (!!document.getElementById('a15_deposit_amount').value.length) {
    return false;
  }
  return eFormRequiredField(sVal,sName,sID);
}

////////////////////////////////////////////////////
//  ValidateSDDa17_authorization
////////////////////////////////////////////////////
function ValidateSDDa17_authorization(sVal,sName,sID){
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  //
}

function validateRoutingNumber(sVal,sName,sID) {
  "use strict";
  if (!/^[0-9]{9}$/.test(sVal)) {
    AddError(sID, 'Error in validation, input should be exactly 9 digits in', '');
    return false;
  }
  return true;
}

function validateAccountNumber(sVal,sName,sID) {
  "use strict";
  if (!/^[a-zA-Z0-9-]+$/.test(sVal)) {
    AddError(sID, 'Error in validation, input should be exactly alphanumeric and dashes in', '');
    return false;
  }
  if (sVal.length > 17) {
    AddError(sID, 'Error in validation, input should be maximum of 17 digits in', '');
    return false;
  }
  return true;
}

function isFillable(sName) {
  "use strict";
  var field = document.querySelector('[name="' + sName + '"]');
  if (!!field.disabled) {
    return false;
  }
  if (field.offsetParent == null) {
    return false;
  }
  return true;
}
