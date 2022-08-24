function eFormRequireWhenVisible(sVal, sName, sID) {
    'use strict'
    if('<$client.env.serversidevalidation>' == '1'){return true;}
    var dateField = document.querySelector('[name="' + sName + '_display"]');
    // do not validate hidden fields
    if (document.querySelector('[name="' + sName + '"]').offsetParent == null && !dateField) {
        return true;
    }
    // require visible date fields
    if (!!dateField) {
        if (!!dateField.offsetParent) {
            return eFormRequiredDate(sVal, sName, sID);
        }
        return true;
    }
    // require all fields not date type
    return eFormRequiredField(sVal, sName, sID);
}