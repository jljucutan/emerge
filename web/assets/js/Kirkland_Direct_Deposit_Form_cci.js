// SERVICES-38613 | Kirkland & Ellis - Direct Deposit E-Form

function eFormValidateRouting(sVal,sName,sID) {
  "use strict";
  if('<$client.env.serversidevalidation>'=='1') { return true;}
  if (sVal.length < 1) {
    return false;
  }
  var ALLOWED_ROUTING = 9;
  if (sVal.length < ALLOWED_ROUTING || sVal.length < ALLOWED_ROUTING) {
    AddError(sID, 'Error in validation, it should have exactly ' + ALLOWED_ROUTING + ' digits in', '');
    return false;
  }
  if (!/^[0-9]+$/.test(sVal)) {
    return eFormIsNumeric(sVal,sName,sID);
  }
  var ABA_ALGO = [3, 7, 1, 3, 7, 1, 3, 7, 1];
  var digits = sVal.split('');
  var sum = 0;
  for (var i = 0; i < digits.length; i++) {
    sum += (parseInt(digits[i]) * ABA_ALGO[i]);
  }
  if ((sum%10) !== 0) {
    AddError(sID, 'Error in validation, invalid ABA Routing Number in', '');
    return false;
  }
}


// SERVICES-38613 | Kirkland & Ellis - Direct Deposit E-Form
function disallowDuplicateCategories(sVal,sName,sID) {
  "use strict";
  if('<$client.env.serversidevalidation>'=='1'){ return true;}
  if (!requireEnabled(sVal,sName,sID)) {
    return false;
  }
  var selectedCategories = [];
  var hasDuplicate = false;
  $.each($('.account-category'), function(k,v) {
    if (selectedCategories.indexOf($(v).val()) >= 0) {
      hasDuplicate = true;
    }
    if ($(v).val().length > 0) {
      selectedCategories.push($(v).val());
    }
  });
  if (hasDuplicate) {
    AddError(sID, 'Error in validation, only one of each category are allowed in', '');
    return false;
  }
}


// SERVICES-38613 | Kirkland & Ellis - Direct Deposit E-Form
function requireEnabled(sValue, sName, sID) {
  "use strict";
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var field = $(document.querySelector('[name="' + sName + '"]'));
  if (!field.prop('disabled') && field.is(':visible') && field.val().length < 1) {
    return eFormRequiredField(sValue, sName, sID);
  }
  return true;
}


// as requested in https://jira.silkroadtech.com/browse/SERVICES-38613?focusedCommentId=1456021&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-1456021
function requireVisible(sValue, sName, sID) {
  "use strict";
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var field = document.querySelector('[name="' + sName + '"]');
  if (field.offsetParent != null) {
    return eFormRequiredField(sValue, sName, sID);
  }
  return true;
}


// as requested in https://jira.silkroadtech.com/browse/SERVICES-38613?focusedCommentId=1482401&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-1482401
function validateMaxSecondaryPercentage(sVal, sName, sID) {
  "use strict";
  if('<$client.env.serversidevalidation>'=='1'){ return true;}
  if (!requireEnabled(sVal,sName,sID)) {
    return false;
  }
  var MIN_PERCENTAGE = 1;
  var MAX_PERCENTAGE = 99;
  var percentVal = new Number(sVal);
  if (percentVal < MIN_PERCENTAGE) {
    AddError(sID, 'Error in validation, deposit percentage should not be less than ' + MIN_PERCENTAGE + ' in', '');
    return false;
  }
  if (percentVal > MAX_PERCENTAGE) {
    AddError(sID, 'Error in validation, deposit percentage should not exceed ' + MAX_PERCENTAGE + ' in', '');
    return false;
  }
}


// SERVICES-38613 | https://jira.silkroadtech.com/browse/SERVICES-38613?focusedCommentId=1427763&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-1427763
function shouldPairValues(sVal, sName, sID) {
  "use strict";
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  if (!requireEnabled(sVal,sName,sID)) {
    return false;
  }
  var pairGroup = document.querySelector('[name="' + sName + '"]').getAttribute('data-pairs');
  var pairs = document.querySelectorAll('[data-pairs="' + pairGroup + '"]');
  var firstVal = '';
  for (var i = 0; i < pairs.length; i++) {
    firstVal = pairs[0].value;
    if (pairs[1].value.length > 0 && pairs[i].value != firstVal) {
      AddError(sID, 'Error in validation, retyped values doesn\'t match in', '');
    }
  }
}


// SERVICES-38613 | https://jira.silkroadtech.com/browse/SERVICES-38613?focusedCommentId=1457593&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-1457593
function toggleableRequired(sValue, sName, sID) {
  "use strict";
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var field = document.querySelector('[name="'+ sName + '"]');
  var controller = document.querySelector('[name$=".' + field.dataset.dependsOn + '"]');
  // check if siblings has primary and require expense
  if (field.hasAttribute('validation-entrypoint')) {
    var hasPrimary = false;
    var hasExpense = false;
    document.querySelectorAll('.account-category').forEach(function(ac) {
      if (ac.value == 'PRI') {
        hasPrimary = true
      }
      if (ac.value == 'EXP') {
        hasExpense = true
      }
    });
    if (hasPrimary && !hasExpense) {
      AddError('', 'Error in validation, Expense Account is required if a Primary account is entered', '');
    }
    if (!hasPrimary && hasExpense) {
      AddError('', 'Error in validation, Primary Account is required if a Expense account is entered', '');
    }
  }
  if (controller.checked && (controller.offsetWidth > 0 && controller.offsetHeight)) {
    return true;
  }
  if (field.dataset.hasOwnProperty('pairs')) {
    return shouldPairValues(sValue, sName, sID);
  }
  if (!field.disabled && field.className.indexOf('secondary-percentage') >= 0) {
    return validateMaxSecondaryPercentage(sValue, sName, sID);
  }
  if (field.className.indexOf('account-category') >= 0) {
    return disallowDuplicateCategories(sValue, sName, sID);
  }
  return requireEnabled(sValue, sName, sID);
}

function eFormRequireDepends(sValue, sName, sID) {
  'use strict';
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var field = document.querySelector('[name="' + sName + '"]')
  var controller = document.querySelector('[name$=".' + field.dataset.dependsOn + '"]')
  if (!controller.value.length) {
      return true
  }
  return eFormRequiredField(sValue, sName, sID);
}

function requiredDependsRouting(sValue, sName, sID) {
  'use strict';
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (!eFormRequireDepends(sValue, sName, sID)) {
    return false;
  }
  return eFormValidateRouting(sValue, sName, sID);
}