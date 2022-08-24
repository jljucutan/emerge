//=================================================================
//  Do not customize this block. It will be overwritten.
//=================================================================

/****
 * ValidateWIECT
 */
function ValidateWIECT(sVal, sName, sID) {
  return eFormRunValidator('WIECT', null, sVal, sName, sID);
}

/****
 * WIECTa1_EmployeeFullName
 */
function WIECTa1_EmployeeFullName(sVal, sName, sID) {
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  return eFormRequiredField(sVal,sName,sID);
} 
  
/****
 * WIECTa2_SSN
 */
function WIECTa2_SSN(sVal, sName, sID) {
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  return eFormRequiredField(sVal,sName,sID);
}

/****
 * WIECTa3_EmployeeAddress
 */
function WIECTa3_EmployeeAddress(sVal, sName, sID) {
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  return eFormRequiredField(sVal,sName,sID);
}

/****
 * WIECTa4_City
 */
function WIECTa4_City(sVal, sName, sID) {
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  return eFormRequiredField(sVal,sName,sID);
}

/****
 * WIECTa5_State
 */
function WIECTa5_State(sVal, sName, sID) {
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  return eFormRequiredField(sVal,sName,sID);
}

/****
 * WIECTa6_Zip
 */
function WIECTa6_Zip(sVal, sName, sID) {
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  return eFormRequiredField(sVal,sName,sID);
}

/****
 * WIECTa7_TexarkanaExemption
 */
function WIECTa7_TexarkanaExemption(sVal, sName, sID) {
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  var exemptionFields = document.querySelectorAll('.exemptions');
  var ticked = false;
  exemptionFields.forEach(function(c) {
    if (c.checked) {
      ticked = true;
    }
  });
  if (!ticked) {
    AddError(sID, 'Error in validation, required information is missing in', '');
    return false;
  }
  return true;
}

/****
 * WIECTa7_TexarkanaExemption2
 */
function WIECTa7_TexarkanaExemption2(sVal, sName, sID) {
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  // 
}

/****
 * WIECTa8_TexarkanaExemptionDate
 */
function WIECTa8_TexarkanaExemptionDate(sVal, sName, sID) {
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  return eFormRequiredDate(sVal,sName,sID);
}
