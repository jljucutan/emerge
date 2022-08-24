$(document).ready(function() {
  $('input.dateField[readonly]')
    .closest('.cal_and_button')
    .find('.calendar_button')
    .prop('disabled', true);
});


function hasLengthLimit(sValue, sName, sField) {
  var isValid = true;
  if('<$client.env.serversidevalidation>' == '1'){return isValid;}
  var strVal = sValue.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  if (strVal.length == 0) {
    eFormRequiredField(sValue, sName, sField);
  }
  var maxlength = document.getElementById(sField).getAttribute('maxlength');
  if (strVal.length != maxlength) {
    AddError(sField, 'Error in validation, it should have ' + maxlength + ' digits in', '');
    isValid = false;
  }
  return isValid;
}

function getDateByUTCDiff(offset) {
    today = new Date();
    d = new Date(today);
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    nd = new Date(utc + (3600000 * offset));
    return nd;
}

function validateTimezone(sValue,sName,sField){
  var isValid = true;
  if ('<$client.env.serversidevalidation>'=='1') return true;
  if (sValue.length < 1) {
    eFormRequiredDate(sValue,sName,sField);
  }
  var datePST = getDateByUTCDiff('-8');
  var inputDate = new Date(sValue);
  if (datePST.valueOf() !== inputDate.valueOf()) {
    AddError(sField, 'Error in validation, Pacific Standard Time should be input in', '');
    isValid = false;
  }
  return isValid;
}

function isValidNumeric(sVal,sName,sID){
  var isValid = true;
  if('<$client.env.serversidevalidation>'=='1'){ return isValid; }
  if (sVal.length < 1) {
    return eFormRequiredField(sVal,sName,sID);
  }
  var reg = /^[0-9]+$/;
  if (!sVal.match(reg)) {
    AddError(sID, 'Error in validation, numbers should be input in', '');
    isValid = false;
  }
  return isValid;
}

$(document).ready(function() {
    $('.autoWidth_text input[type=text]').each(function(index) {

        var valueInit = $(this).val();

        var inputResize = function(id, pad) {
            var valueCur = $(id).val();
            var valueId = valueCur.split(' ').join('_').replace(/[^a-zA-Z 0-9]+/g, '');
            $('p').after('<div class="fake_form" id="fake_form_' + valueId + '">' + valueCur + '</div>');
            var valueInitW = $('#fake_form_' + valueId).width() + 2 + pad;
            $('#fake_form_' + valueId).remove();
            $(id).css('width', valueInitW);
        }
        inputResize(this, 0);

        $(this).focus(function() {
            var valueCur = $(this).val();
            if (valueCur == valueInit) {
                $(this).val('');
            }
            if ($(this).width() < 50) {
                $(this).width(50);
            }
            $(this).removeClass('inputted');
        });

        $(this).blur(function() {
            var valueCur = $(this).val();
            if (valueCur == '') {
                $(this).val(valueInit);
            } else {
                $(this).addClass('inputted');
            }
            inputResize(this, 0);
        });

        $(this).keydown(function() {
            inputResize(this, 30);
        });

    });
});

$(document).ready(function() {
  function resizeElem(inputElem) {
    if (inputElem.val().length > 0) {
      if (!inputElem.parent().find('.virtual-elem').length) {
        inputElem.after('<div class="virtual-elem"/>');
      }
      inputElem.parent().find('.virtual-elem').text(inputElem.val());
      inputElem.css('width', inputElem.parent().find('.virtual-elem').width() + 5);
    }
  }
  $('.autoWidth_text').on('propertychange change click keyup input paste focus', 'input[type="text"]', function() {
    resizeElem($(this));
  });
  $('.autoWidth_text input').each(function(k, v) {
    resizeElem($(v));
  });
});


function validateTimezone(sVal,sName,sID,sFormat){

  if('<$client.env.serversidevalidation>' == '1'){return true;}

  if(eFormRequiredField(sVal,sName,sID)==false){ return false; }
  if(eFormValidDate(sVal,sName,sID,sFormat)==false){ return false; }
  // var todayDate = new Date();

	var todate = new Date();
	var pacific = moment.tz(todate, "America/Los_Angeles");

  if((pacific.format('YYYY-MM-DD') == '2018-01-22') < 0){
      AddError(sID,'Error in validation, future date is not allowed in','');
      return false;
  }
  return true;
}


function validateTimezone(sValue,sName,sField){
  var isValid = true;
  if ('<$client.env.serversidevalidation>'=='1') return true;
  if (sValue.length < 1) {
    eFormRequiredDate(sValue,sName,sField);
  }
	var todate = new Date();
	var pacific = moment.tz(todate, "America/Los_Angeles");

  if (pacific.format('YYYY-MM-DD') != sValue) {
    AddError(sField, 'Error in validation, Pacific Standard Time should be input in', '');
    isValid = false;
  }
  return isValid;
}

function isFirstSignee(elemId) {
  if ($(document.getElementById(elemId)).attr('id') != 'a26_First_Level_Supervisors_Signature') {
    return false;
  }
  return true;
}

function validateSignatureLevel(sValue,sName,sField) {
  var isValid = true;
  if ('<$client.env.serversidevalidation>'=='1') return true;
  if (isFirstSignee(sField) && sValue.length < 1) {
    eFormRequiredDate(sValue,sName,sField);
  }
  var target = $(document.getElementById(sField)).data('target-level'),
      targetLevel = $(target);
  if (targetLevel.val().length) {
    return isValid;
  }
  targetLevel.val('<$client.env.eval(client.account.loginID)>');
  return isValid;
}

function stampSign(elemId) {
  document.getElementById(elemId).value = '<$client.account.loginID>';
}



        $.fn.disableDate = function() {
          $(this).parent().find('input[type="button"]').prop("disabled", true);
          return $(this);
        }
        $.fn.disableField = function() {
          $(this).prop('disabled', true).css({'background': '#ccc', 'border': '1px solid #707070'});
          return $(this);
        }

$(document).ready(function() {
  if ($('#lv1').val().length > 0 &&  $('#lv1').val() != '<$client.env.eval(client.account.loginID)>') {
    $('[data-group="comments"], [data-group="evaluation"]').disableField();
  }
  if ($('#lv1').val().length < 1 || $('#lv1').val() == '<$client.env.eval(client.account.loginID)>') {
    $('[data-target-level="#lv2"], [data-target-level="#lv3"], [data-target-level="#lv4"]').disableField();
    $('[data-date-id="#lv2"], [data-date-id="#lv3"], [data-date-id="#lv4"]').disableField().disableDate();
  } else {
    $('[data-target-level]').each(function(k, v) {
      if ($($(v).data('target-level')).val().length < 1) {
        return true;
      }
      if ($($(v).data('target-level')).val() != '<$client.env.eval(client.account.loginID)>') {
        $(v).disableField();
        $('[data-date-id="' + $(v).data('target-level') + '"]').disableField().disableDate();
      }
    });
  }
});

  $(document).ready(function() {
    $.getJSON('<$link;/main/RedCarpet/FormTemplates/Orientation_Instructions_New_Test/Orientation_Instructions_New_Test.json>', function(data) {
      $('#orientation-location').val(data.locations["<$client.tEventCategories_26.Code>"])
    })
  });

function sumOf(arr) {
  return (arr.length === 0) ? 0 : arr[0] + sumOf(arr.slice(1));
}

function isRequiredPercentFull(sVal,sName,sID) {
  var isValid = true;
  if ('<$client.env.serversidevalidation>'=='1') return true;
  var deps = document
                .getElementById(sID)
                .getAttribute('data-percent-requires')
                .toString()
                .replace(/\s/g, '')
                .split(',');
  var percentages = [];
  for (i = 0; i < deps.length; i++) {
    var percVal = $(deps[i]).val().length ? $(deps[i]).val() : 0;
    percentages.push(parseInt(percVal));
  }
  if (sumOf(percentages) < 100) {
    console.log(sumOf(percentages));
    return eFormRequiredField(sVal,sName,sID);
  }
  return isValid;
}

function isFullPercentOnly(sVal,sName,sID) {
  var isValid = true;
  if ('<$client.env.serversidevalidation>'=='1') return true;
  var total = 0;
  $.each($('[data-percentage]'), function(k, v) {
    var percent = $(v).val().length ? $(v).val() : 0;
    total += parseInt(percent);
  });
  if (total < 100) {
    AddError(sID, 'Error in validation, percentages must add up to 100%', '');
    isValid = false;
  }
  if (total > 100) {
    AddError(sID, 'Error in validation, percentages must not exceed 100%', '');
    isValid = false;
  }
  return isValid;
}

$(document).ready(function() {
  $('[data-checkbox-group]').on('click', function() {
    var groupId = $(this).data('checkbox-group');
    $('[data-checkbox-group="' + groupId + '"]').prop('checked', false);
    $(this).prop('checked', true);
  });
});

$(function() {
  if ($('#lv1').val().length < 1 || $('#lv1').val() == '<$client.env.eval(client.account.loginID)>') {
    $('[data-target-level="#lv2"], [data-target-level="#lv3"], [data-target-level="#lv4"]').disableField();
    $('[data-date-id="#lv2"], [data-date-id="#lv3"], [data-date-id="#lv4"]').disableField().disableDate();
  } else if ($('#lv2').val().length < 1 && $('#lv3').val().length < 1) {
    $('[data-target-level="#lv3"]').disableField();
    $('[data-date-id="#lv3"]').disableField().disableDate();
  } else {
    $('[data-target-level]').each(function(k, v) {
      if ($($(v).data('target-level')).val().length < 1) {
        return true;
      }
      if ($($(v).data('target-level')).val() != '<$client.env.eval(client.account.loginID)>') {
        $(v).disableField();
        $('[data-date-id="' + $(v).data('target-level') + '"]').disableField().disableDate();
      }
      if (<$client.env.eval((client.role.HR)?1:0)> == 1) {
        $('[data-date-id="#lv3"],[data-date-id="#lv2"],[data-date-id="#lv1"]').disableField().disableDate();
      }
    });
  }
});

function isNumeric(sVal,sName,sID){
  var isValid = true;
  if('<$client.env.serversidevalidation>'=='1'){ return isValid; }

  var reg = /^[0-9]+$/;
  if (!sVal.match(reg) && sVal.length > 1) {
    AddError(sID, 'Error in validation, only numbers are allowed in', '');
    isValid = false;
  }
  return isValid;
}

function isRequiredNumeric(sVal,sName,sID){
  var isValid = true;
  if ('<$client.env.serversidevalidation>'=='1'){ return isValid; }
  if (sVal.length < 1) {
    return eFormRequiredField(sVal,sName,sID);
  }
  if (!isNumeric(sVal,sName,sID)) {
    isValid = false;
  }
  return isValid;
}

function makeTimeStamp(target) {
  var targetElem = document.getElementsByClassName(target);
  var i = 0;
  var curDate = new Date();
  for (i; i < targetElem.length; i++) {
    var year = curDate.getFullYear(),
        month = curDate.getMonth() + 1,
        day = curDate.getDate();

    targetElem[i].value =  year + '/' + month + '/' + day;
  }
}

function isRequireOne(sVal, sName, sField) {
  var isValid = true;
  if ('<$client.env.serversidevalidation>'=='1'){ return isValid;}
  if (!$('[data-checkbox-group]:checked').length) {
    return eFormRequiredField(sVal, sName, sField);
  }
  return isValid;
}

function PromptRole() {
  var isAuthorized = app.alert ("Are you a member of a Payroll or Support Team?", 2, 2, "Payroll Team Privilage");

  if (isAuthorized != 4) {
    HideSSNDOB();
    return true;
  }
  PromptAccess();
}

function HideSSNDOB() {
  getField("a17_dateOfBirth").display = display.hidden;
  getField("a15_gender").display = display.hidden;
  getField("a14_ssn").display = display.hidden;
}

function PromptAccess() {
  var response = app.response({
      cQuestion: "Please enter the assigned Password.",
      cTitle: "Enter password",
      bPassword: true,
      cLabel: "Password"
  });


  var paramDob = getField("a17_dateOfBirth").value;
  var paramGender = getField("a15_gender").value;
  var paramSsn = getField("a14_ssn").value;


  switch (response) {
    case "PayrollTeam": // Your password goes here
        getField("a17_dateOfBirth").display = display.visible;
        getField("a17_dateOfBirth").value = paramDob +" ";

        getField("a15_gender").display = display.visible;
        getField("a15_gender").value = paramGender +" ";

        getField("a14_ssn").display = display.visible;
        getField("a14_ssn").value = paramSsn +" ";

        break;
    case null: // Your password goes here
      HideSSNDOB();
      break;
    default:
      HideSSNDOB();
      app.alert("Incorrect password.", 1);
      break;
  }
}

function hasDependency(sVal, sName, sID) {
  var isValid = true;
  if('<$client.env.serversidevalidation>' == '1'){return isValid;}

  var field = $(document.getElementsByName(sName)[0]).parent().find('[data-depends]');

  if ($($(field).data('depends')).val().length > 0) {
    isValid = false;
    if ($(field).hasClass('dateField')) {
      return eFormRequiredDate(sVal, sName, sID);
    }
    return eFormRequiredField(sVal, sName, sID);
  }
  return isValid;
}

$(document).ready(function() {
  function clearDependents(targets) {
    $.each(targets, function(k, v) {
      $(v).val("")
      $(v).prop('checked', false);
    });
  }
  function disableDependents(elem, disable) {
    elem.prop('disabled', disable);
  }
  function checkDependents(elem) {
    var disable = true;
    if (elem.val().length > 0) {
      disable = false;
    } else {
      disable = true;
    }
    var dependent = $('[data-depends="' + '#' + elem.attr('id') + '"]');
    if (dependent.hasClass('dateField')) {
      disableDependents(dependent.parent().find('input'), disable);
    }
    disableDependents(dependent, disable);
  }
  $('#Spouse_Name').on('keyup blur paste change', function() {
    checkDependents($(this));
    if ($(this).val().length < 1) {
      clearDependents($('[data-depends="' + '#' + $(this).attr('id') + '"]'));
    }
  });
  setTimeout(function() {
    var readonly = $('#Spouse_Name').attr('readonly');
    if (typeof readonly === typeof undefined && readonly === false) {
      checkDependents($('#Spouse_Name'));
    }
  }, 500);
});

$(document).ready(function() {
  setTimeout(function() {
    $('input[disabled].dateField').parent().find('input').prop('disabled', true);
  }, 500);
});

$(document).ready(function() {
  function populateCities(state_code) {
    if (state_code === undefined) {return false;}
    $('#spinner').fadeIn();
    $.getJSON('<$link;/main/SiteGen/Onboarding/Admin/ContentSnippets/br_cities.json>', function(data) {
      var cities = data.br_cities[state_code];
      $('#br_city').html("");
      $('#br_city').append($('<option/>'));
      $.each(cities, function(k, v) {
        $('#br_city').append(
          $('<option/>').val(v).append(v)
        );
      });
    });
    $('#spinner').fadeOut();
  }
  populateCities($('#br_region1').val());
  $('#br_region1').on('change', function() {
    var state_code = $(this).val();
    populateCities(state_code);
  })
});






/* This script is used to validate the First, Middle, and Last names and Email address. */
/* Custom Callback validator for Frist Name, it can be used for both on load and submit */
function Custom_Callback_First_Name(formobject){
 if(self.eFormRequiredField){
   if(eFormRequiredField(GetValue(formobject["First_Name"]),'First_Name','First_Name')==false)
     bRet = false;
 }else{
  if(self.IsValidationEnabled){
    if (IsValidationEnabled()){
       var sMessage = 'Error trying to validate against function eFormRequiredField\nFunction not found for validation of';
       if (self.AddError)
          AddError('First_Name',sMessage,'');
       else
          alert(sMessage);
       bRet=false;
    }
  }
 }
}
/* Custom Callback validator for Middle Name, it can be used for both on load and submit */
function Custom_Callback_Middle_Name(formobject){
 if(self.eFormRequiredField){
   if(eFormRequiredField(GetValue(formobject["Middle_Name"]),'Middle_Name','Middle_Name')==false)
     bRet = false;
 }else{
  if(self.IsValidationEnabled){
    if (IsValidationEnabled()){
       var sMessage = 'Error trying to validate against function eFormRequiredField\nFunction not found for validation of';
       if (self.AddError)
          AddError('Middle_Name',sMessage,'');
       else
          alert(sMessage);
       bRet=false;
    }
  }
 }
}
/* Custom Callback validator for Last Name, it can be used for both on load and submit */
function Custom_Callback_Last_Name(formobject){
 if(self.eFormRequiredField){
   if(eFormRequiredField(GetValue(formobject["Last_Name"]),'Last_Name','Last_Name')==false)
     bRet = false;
 }else{
  if(self.IsValidationEnabled){
    if (IsValidationEnabled()){
       var sMessage = 'Error trying to validate against function eFormRequiredField\nFunction not found for validation of';
       if (self.AddError)
          AddError('Last_Name',sMessage,'');
       else
          alert(sMessage);
       bRet=false;
    }
  }
 }
}
/*Custom Callback validator for Email Name, it can be used for both on load and submit.*/
function Custom_Callback_Email(formobject){
 if(self.eFormRequiredField){
   if(eFormRequiredField(GetValue(formobject["Email"]),'Email','Email')==false)
     bRet = false;
 }else{
  if(self.IsValidationEnabled){
    if (IsValidationEnabled()){
       var sMessage = 'Error trying to validate against function eFormRequiredField\nFunction not found for validation of';
       if (self.AddError)
          AddError('Email',sMessage,'');
       else
          alert(sMessage);
       bRet=false;
    }
  }
 }
}

/* Use this function to run the validation on load... if used with LoadCallback(), labels will turn red. */
/* Uncomment to use. The if checks to ensure the function exsits before calling it.
function funcCustomOnLoadCallback(formobject){
    if(self.Custom_Callback_First_Name){Custom_Callback_First_Name(formobject);}
    //if(self.Custom_Callback_Middle_Name){Custom_Callback_Middle_Name(formobject);}
    if(self.Custom_Callback_Last_Name){Custom_Callback_Last_Name(formobject);}
    if(self.Custom_Callback_Email){Custom_Callback_Email(formobject);}
}
*/
/* Use this function to run the validation on submit*/
function funcCustomOnSubmitCallback(formobject){
    if(self.Custom_Callback_First_Name){Custom_Callback_First_Name(formobject);}
    //if(self.Custom_Callback_Middle_Name){Custom_Callback_Middle_Name(formobject);}
    if(self.Custom_Callback_Last_Name){Custom_Callback_Last_Name(formobject);}
    if(self.Custom_Callback_Email){Custom_Callback_Email(formobject);}
}

function isValidDOB(sVal, sName, sID) {
  var isValid = true;
  if('<$client.env.serversidevalidation>' == '1'){return isValid;}
  if ($('#real_DOB').val() !== sVal) {
    AddError(sID, 'Error in validation, Data did not match on profile in', '');
    isValid = false;
  }
  return isValid;
}

$(document).ready(function() {
  function hideTarget(targeter, target) {
    if (targeter.val() == 3) {
      target.show();
    } else {
      target.hide();
    }
  }

  $('#choose_one input').on('change', function() {
    hideTarget($(this), $('#citizen-other'));
  });
  hideTarget($('#choose_one input'), $('#citizen-other'));
});

(function($) {
  $.fn.checkOne = function() {
    var checkbox = $(this),
        group = checkbox.data('checkbox-group');
    $.each($('[data-checkbox-group="' + group + '"]'), function(k, v) {
      $(v).prop('checked', false);
    });
    checkbox.prop('checked', true);
  }
}(jQuery));
$(function() {
  $('[data-checkbox-group]').on('click change', function() {
    $(this).checkOne();
  });
});

function checkOnlyOne(sVal, sName, sID) {
  var isValid = true;
  if('<$client.env.serversidevalidation>' == '1'){return isValid;}
  if ($('[data-checkbox-group="' + $(document.getElementById(sID)).data('group') + '"]:checked').length > 1) {
    AddError(sID, 'Error in validation, only one option should be selected in', '');
    isValid = false;
  }
  return isValid;
}

function concatAddr() {
  var addr = '';
  var addrFull = [];
  if (!arguments.length) {
    return addr;
  }
  for (i = 0; i < arguments.length; i++) {
    if(arguments[i]) {
      addrFull.push(arguments[i]);
    }
  }
  if (addrFull.length <= 1) {
    addr += addrFull[0];
    return addr;
  }
  for (j = 0; j < addrFull.length; j++) {
    addr += addrFull[j];
    if (j < addrFull.length) {
      addr += ', ';
    }
  }
  return addr;
}

function isRequiredIfActive(sVal, sName, sID) {
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  var lang = $(document.getElementById(sID)).data('lang');
  if(lang == $('#lang').val())
  {
    return eFormRequiredField(sVal, sName, sID);
  }
  return true;
}

function isRequiredBySiblings(sVal, sName, sID) {
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  var siblingsGroup = $(document.getElementById(sID)).data('siblings'),
      siblings = $('[data-siblings="' + siblingsGroup + '"]'),
      isRequired = true;
  $.each(siblings, function(k, v) {
    if ($(v).is(':checked')) {
      isRequired = false;
    }
  });
  if (!isRequired) {
    return eFormRequiredField(sVal, sName, sID);
  }
  return true;
}

$(function() {
  $('[data-checkbox-group]').on('click change', function() {
    $(this).checkOne();
  });
  $('a[data-target-lang]').on('click', function(e) {
      e.preventDefault();
      $('[data-target-lang]').removeClass('active');
      toggleActiveLink($(this));
      hideSection($(this).data('target-lang'));
      $('#lang').val($(this).data('target-lang'));
    });
  $(document).ready(function() {
    hideSection($('#lang').val());
    toggleActiveLink($('[data-target-lang="' + $('#lang').val() + '"]'));
  });
});

function syncFullName(firstName, middleInitial, lastName, target) {
  target.val($.trim(firstName) + ' ' + $.trim(middleInitial) + ' ' + $.trim(lastName))
}

function isRequiredOneCheckbox(sVal, sName, sID) {
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  var checkboxGroup = $(document.getElementById(sID)).data('checkbox-group'),
      isRequired = true;
  $.each($('[data-checkbox-group="' + checkboxGroup + '"]:checked'), function(k, v) {
    if($(v).length) {
      isRequired = false;
    }
  });
  if (isRequired) {
    return eFormRequiredField(sVal, sName, sID);
  }
  return isRequired;
}

function isValidPhoneNumber(sVal, sName, sID) {
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  var regStr = /^(\d+-?)+\d+$/,
      isValid = true;
  if (sVal.length < 1) {
    return isValid;
  }
  if (!sVal.match(regStr)) {
    AddError(sID, 'Error in validation, only valid phone numbers (numbers and dashes) should be input in', '');
    isValid = false;
  }
  if (sVal.replace(/-/g, "").length > 10) {
    AddError(sID, 'Error in validation, only 10 digits (excluding dashes) should be input in', '');
    isValid = false;
  }
  return isValid;
}

  function isValidPhoneInput(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
     if (charCode != 45  && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
     }
     return true;
  }

  $('#a31_Primary_Phone, #a33_Secondary_Phone').on('keyup keypress blur change', function(e) {
    var isValid = $(this).val().match(/^\d+(-\d+)*$/);
    if(!isValid){
      return false;
    }
    return true;
  });
  $("#a31_Primary_Phone, #a33_Secondary_Phone").bind({
    keydown: function(e) {
      var charCode = (e.which) ? e.which : event.keyCode;
      if (charCode >= 48 && charCode <= 57 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
      return true;
    }
  });

    function isValidPhoneInput(ev){
      var $this = $(this);

      $this.data('value', $this.val());
      $this.val(function(idx, val){
          var mask = val.match(/^(.*?)(\d{4})$/);

          return (mask[1] ? mask[1].replace(/\d/g, '*') : '') + (mask[2] ? mask[2] : '')
      });
    };


function ValidateDCDateSigned_Custom(sVal,sName,sID){
    var initToday = function(sName) {
        var dateFields = document.getElementsByName(sName);
        for (i = 0; i < dateFields.length; i++) {
            dateFields[i].value = '<$client.env.eval(date.now('%m/%d/%Y'))>';
        }
    };
    if(sVal.length < 1) {
        setTimeout(function() {
            initToday(sName);
            initToday(sName + "_display");
        }, 500);
    }
    if('<$client.env.serversidevalidation>'=='1'){ return eFormRequiredDate(sVal,sName,sID); }
    else{ return eFormRequiredTodayDate(sVal,sName,sID); }
}

function getDateFieldsByPseudoID(pseudoID) {
  getElementsByName()
}

function initDay() {
  var elems = document.getElementsByTagName(input);
  for (i = 0; i < elems.length; i++) {
    if(elems[i].id && elems[i].id != undefined) {
      if (elems[i].id.match(/DateSigned/g)) {
        document.getElementById(elems[i].id).value = '<$client.env.eval(date.now("%m/%d/%Y"))>';
      }
    }
  }
}

function getElementsByClassName_Custom(myClassName){
   var myTagNameArray = document.getElementsByTagName('input');
   var singleClass = "";
   var myClassArray = new Array;
   var i = 0;
   var j = 0;
   while(i<myTagNameArray.length){
      singleClass = myTagNameArray[i].name.split(".");
      while(j<singleClass.length){
         if(singleClass[j]==myClassName){
            myClassArray.push(myTagNameArray[i]);
         }
         j++;
      }
      j=0;
      i++;
   }
   return myClassArray;
}

if(DateSigned[0].value.length < 1) {
  DateSigned[0].value = "<$client.env.eval(date.now("%m/%d/%Y"))>";
}

(function($) {
  $.fn.disableDate = function() {
    $(this).parent().find('input[type="button"]').prop("disabled", true);
    return $(this);
  }
}(jQuery));

$(document).ready(function() {
  var compRate = <$client.env.eval((client.tForWhomUserInfo.COMPRATE != '') ? client.tForWhomUserInfo.COMPRATE : 0)>,
      dailyRate = '<$client.tForWhomUserInfo.Daily_Rate>',
      hourlyRate = '<$client.tForWhomUserInfo.Hourly_Rate>',
      salaryAmount = '<$client.tForWhomUserInfo.Salary_Amount>',
      FLSAStatus = '<$client.tForWhomUserInfo.FLSA_Status>';
  $('#para-1, #para-2, #para-3').hide();
  if (compRate > 0 && FLSAStatus == 'E' && hourlyRate.length > 0) {
    $('#para-1').show()
  }
  if (compRate > 0 && FLSAStatus == 'N' && hourlyRate.length > 0) {
    $('#para-2').show()
  }
  if (compRate == 0 && dailyRate.length > 0) {
    $('#para-3').show()
  }
});

function eFormIsRequiredNumeric(sVal,sName,sID) {
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  if (sVal.length < 1) {
    return eFormRequiredField(sVal,sName,sID)
  }
  var reg = /^\d+$/;
  if (!reg.test(sVal)) {
    AddError(sID, 'Error in validation, only numeric values permitted in', '');
    return false;
  }
  return true;
}

$(document).ready(function() {
  var countries = {
    'ARG'   : 'Argentina',
    'AUS'   : 'Australia',
    'AUT'   : 'Austria',
    'BEL'   : 'Belgium',
    'BRA'   : 'Brazil',
    'CAN'   : 'Canada',
    'CHN'   : 'China',
    'HRV'   : 'Croatia',
    'CZE'   : 'Czech Republic',
    'DNK'   : 'Denmark',
    'EST'   : 'Estonia',
    'FRA'   : 'France',
    'DEU'   : 'Germany',
    'HKG'   : 'Hong Kong',
    'IND'   : 'India',
    'IDN'   : 'Indonesia',
    'IRL'   : 'Ireland',
    'ISR'   : 'Israel',
    'ITA'   : 'Italy',
    'JPN'   : 'Japan',
    'LUX'   : 'Luxembourg',
    'MYS'   : 'Malaysia',
    'MEX'   : 'Mexico',
    'NLD'   : 'Netherlands',
    'NOR'   : 'Norway',
    'PHL'   : 'Philippines',
    'POL'   : 'Poland',
    'RUS'   : 'Russia',
    'SGP'   : 'Singapore',
    'ZAF'   : 'South Africa',
    'KOR'   : 'South Korea',
    'ESP'   : 'Spain',
    'SWE'   : 'Sweden',
    'CHE'   : 'Switzerland',
    'TWN'   : 'Taiwan',
    'THA'   : 'Thailand',
    'TUR'   : 'Turkey',
    'UKR'   : 'Ukraine',
    'GBR'   : 'United Kingdom',
    'USA'   : 'USA'
  }

  var eventLocation = (strFormCompleted == "") ? "<$client.env.eval(client.tEventCategories_Category_11.Code.subString(0,2))>" : $('#event-location').val();
  $('[data-html="event-country"]').html(countries[eventLocation]);
  $('[data-val="event-country"]').val(countries[eventLocation]);
  $('#Country1').val(countries[eventLocation] + " prior to commencing employment.");
  $('#Country2').val(countries[eventLocation] + "?");

  $('#nid_type')
    .find('option')
    .not('[value^=' + eventLocation + ']')
    .remove();

  var toggleHideTarget = function(hideElem, target) {
    if (hideElem()) {
      target.addClass('hide');
    } else {
      target.removeClass('hide');
    }
  }

  var validateDate = function(field, errorContainer) {
    if (field.data('accepts-date')) {
      var d = new Date(),
        fieldArr = field.val().split('/'),
        fieldDate = new Date(fieldArr[2] + "-" + fieldArr[1] + "-" + fieldArr[0]);
      switch(field.data('accepts-date')) {
        case 'future':
          if (fieldDate < d) {
            field.addClass('input-error');
            errorContainer.html('This field accepts only future date.');
            return false;
          }
        break;
        case 'past':
          if (fieldDate >= d) {
            field.addClass('input-error');
            errorContainer.html('This field accepts only past date.');
            return false;
          }
        break;
        default:
          return true;
      }
    }
  }

  var validateForm = function (fields, clear) {
    var formIsValid = true;
    $.each(fields, function(k, v) {
      var field = $(v), 
        isRequired = false,
        dep = $(field.data('dependency')).data('checkbox-group');

      if (field.data('dependency') != undefined && $("[data-checkbox-group=" + dep + "]:checked").val() == field.data('wants-val')) {
        isRequired = true;
      }

      if (field.prop('required')) {
        isRequired = true;
      }

      if (clear) {
        isRequired = false;
      }

      if (field.is(':visible')) {

        if (field.hasClass('dateField')) {
          var target = field.closest('table.cal_and_button').parent().find('span.help-block');
          toggleHideTarget(function() {
            if (isRequired && field.val().length < 1) {
              field.addClass('input-error');
              target.html(field.data('field-label') + ' is required.');
              formIsValid = false;
              return false;
            }
            var dateIsValid = validateDate(field, target);
            if (false == dateIsValid) {
              formIsValid = false;
              return false
            }

            field.removeClass('input-error');
            return true;
          }, target)
        }

        if (field.is(':checkbox') || field.is(':radio')) {
          var checkboxGroup = $('[data-checkbox-group="' + field.data('checkbox-group') + '"]'),
            checked = false;
          $.each(checkboxGroup, function(key, val) {
            if (isRequired && $(val).is(':checked')) {
              checked = true;
            }
          });
          if (!checked) {
            field.closest('table').parent().prev().addClass('text-danger');
          } else {
            field.closest('table').parent().prev().removeClass('text-danger');
          }
        }

        toggleHideTarget(function() {
          if (isRequired && field.val().length < 1) {
            field.addClass('input-error');
            formIsValid = false;
            return false;
          }
          field.removeClass('input-error');
          return true;
          }, field.parent().find('span.help-block'));
      } 

    });
    return formIsValid;
  }

  var toggleRequiredLabel = function(els, requires) {
    $.each(els, function(k, v) {
      var el = $(v);
      toggleHideTarget(function() {
        if (el.data('label-citizenship-requires') == requires) {
          return false;
        }
        return true;
      }, el.find('span.text-danger'));
    });
  }

  toggleHideTarget(function(){
    var visa = $('#visa_country');
    if (eventLocation == 'MYS') {
      return false;
    }
    return true;
  },$('#malaysia-specific-information'));

  $('[data-checkbox-group]:checkbox').on('click', function() {
    var groupId = $(this).data('checkbox-group');
    $('[data-checkbox-group="' + groupId + '"]').prop('checked', false);
    $(this).prop('checked', true);
  });

  $('[data-checkbox-group="citizenship"]').on('change', function() {
    var checkbox = $(this);
    $('#visa-information input, #visa-information select').val('');
    toggleHideTarget(function(){
      if (checkbox.is(':checked') && checkbox.val() == 'No') {
        return false;
      } else if (checkbox.is(':checked') && checkbox.val() == 'Yes') {
        $('#visa_country').val(eventLocation);
      }
      return true;
    },$($(this).data('target')));
    if (checkbox.is(':checked')) {
      toggleRequiredLabel($('[data-label-citizenship-requires]'), checkbox.val());
    }
    validateForm($('#form-apac input, #form-apac select'), true);
  });

  var citizenship = $('[data-checkbox-group="citizenship"]');
  toggleHideTarget(function(){
    var noCitizenship = true;
    $.each(citizenship, function(k, v) {
      if ($(v).is(':checked')) {
        toggleRequiredLabel($('[data-label-citizenship-requires]'), $(v).val());
      }
      if ($(v).is(':checked') && $(v).val() == 'No') {
        noCitizenship = false;
      } else if ($(v).is(':checked') && $(v).val() == 'Yes' && strFormCompleted == "") {
        $('select#visa_country option[value="' + eventLocation + '"]').attr("selected","selected");
      }
    })
    return noCitizenship;
  },$(citizenship.data('target')));

  $('#ButtonPrint, #buttonPrint, #ButtonSaveAndComplete, #buttonSaveAndComplete').on('click', function(e) {
    e.preventDefault();
    var fields = $('#form-apac input, #form-apac select'),
      btn = $(this),
      formIsValid = true;
    var formIsValid = validateForm(fields);
    if (formIsValid) {
      switch (btn.attr('id')) {
        case 'ButtonPrint':
          funcPrint();
        break;
        case 'ButtonSaveAndComplete':
          funcSaveAndComplete();
        break;
      }
    }
  });

  $('#form-apac input, #form-apac select').on('blur change paste keyup', function() {
    validateForm($(this));
  });

  $('#modal').on('click', 'input.lifesuite__button', function() {
    validateForm($('#signature-container input'));
  });

});

function requireByDeps(sVal,sName,sID) {
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  var field = (document.getElementsByName(sName)[0].getAttribute('type') == 'hidden') ? $(document.getElementsByName(document.getElementsByName(sName)[0].getAttribute('name') + '_display')[0]) : $(document.getElementsByName(sName)[0]),
    isRequired = false,
    deps = $('[data-checkbox-group="' + field.data('checkbox-group') + '"]');

  $.each(deps, function(k, v) {
    if ($(v).is(':checked') && $(v).val() == field.data('wants-val')) {
      isRequired = true;
    }
  });

  if (isRequired && field.is(':visible')) {
    if (field.hasClass('dateField')) {
      return eFormRequiredDate(sVal,sName,sID)
    }
    return eFormRequiredField(sVal,sName,sID)
  }
}

function eFormRequireDeps(sVal,sName,sID) {
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  var dep = $(document.getElementById(sID)).data('depends-on'),
    siblings = $('[data-siblings="' + $(document.getElementById(sID)).data('siblings') + '"]'),
    checkboxes = $('[data-checkbox-group="' + dep + '"]'),
    requireDeps = false,
    satisfied = true;

  $.each(checkboxes, function(k, c) {
    if($(c).is(':checked')) {
      requireDeps = true;
      satisfied = false;
    }
  });

  if (requireDeps) {
    $.each(siblings, function(k, sibling) {
      if ($(sibling).find('option:selected').val() == $(sibling).data('required-val')) {
        satisfied = true;
      }
    })
  }
  if (!satisfied) {
    AddError('', 'Error in validation, please select disability request for accomodation or disabled veteran', '');
    return false;
  }
}

var disableCalButton = function(elClass) {
  $(elClass).parent().find('input').prop('disabled', true);
}

$(document).ready(function() {
  $('#buttonCancel').before(
      $('<button/>').prop({
        'id': 'buttonPrint',
        'type': 'button', 
        'class': 'lifesuite__button primary',
      }).html('<i class="fa fa-print"></i>&nbsp;Print')
    );
  $('#buttonPrint').on('click', function(e) {
    e.preventDefault();
    OfferLetterPrint();
  });
});

$(document).ready(function() {
  var countries = {
    'ARG'   : 'Argentina',
    'AUS'   : 'Australia',
    'AUT'   : 'Austria',
    'BEL'   : 'Belgium',
    'BRA'   : 'Brazil',
    'CAN'   : 'Canada',
    'CHN'   : 'China',
    'HRV'   : 'Croatia',
    'CZE'   : 'Czech Republic',
    'DNK'   : 'Denmark',
    'EST'   : 'Estonia',
    'FRA'   : 'France',
    'DEU'   : 'Germany',
    'HKG'   : 'Hong Kong',
    'IND'   : 'India',
    'IDN'   : 'Indonesia',
    'IRL'   : 'Ireland',
    'ISR'   : 'Israel',
    'ITA'   : 'Italy',
    'JPN'   : 'Japan',
    'LUX'   : 'Luxembourg',
    'MYS'   : 'Malaysia',
    'MEX'   : 'Mexico',
    'NLD'   : 'Netherlands',
    'NOR'   : 'Norway',
    'PHL'   : 'Philippines',
    'POL'   : 'Poland',
    'RUS'   : 'Russia',
    'SGP'   : 'Singapore',
    'ZAF'   : 'South Africa',
    'KOR'   : 'South Korea',
    'ESP'   : 'Spain',
    'SWE'   : 'Sweden',
    'CHE'   : 'Switzerland',
    'TWN'   : 'Taiwan',
    'THA'   : 'Thailand',
    'TUR'   : 'Turkey',
    'UKR'   : 'Ukraine',
    'GBR'   : 'United Kingdom',
    'USA'   : 'USA'
  }

  var eventLocation = (strFormCompleted == "") ? "<$client.env.eval(client.tEventCategories_Category_11.Code.subString(0,2))>" : $('#EventLocation').val();
  $('[data-text="country"]').html(countries[eventLocation] + "?");
  $('#Country').val(countries[eventLocation] + "?");

  // populate countries
  var removeCountriesWithNoOption = function(allOptionsObj, countryOptionsObj) {
    var existingOptions = [];
    allOptionsObj.each(function(k,v) {
      if ($(v).val().length < 1) {
        return true;
      }
      var countryCode = $(v).val().substring(0, 3);
      if (existingOptions.indexOf(countryCode) < 0) {
        existingOptions.push(countryCode);
      }
    });
    $.each(countryOptionsObj, function(k,v) {
      if($(v).val().length > 0 && existingOptions.indexOf($(v).val()) < 0 ) {
        $(v).remove();
      }
    });
  }

  var sectionToggler = new SectionToggler({"config": "<$link;/main/RedCarpet/FormTemplates/Global_New_Hire_form/toggler_config.json>"});
  // display allowed form input groups based on selected citizen status
  setTimeout(function() {
    sectionToggler.run();
  }, 500);

  var populateByLocation = function(targetObj, source, loc) {
    var location = (loc && loc.length > 0) ? loc : eventLocation;
    var optionVal = targetObj.val();
    targetObj.html(source.clone());
    targetObj.find('option').not('[value^="' + location + '"]').remove();
    targetObj.prepend($('<option value=""/>'));
    targetObj.val([]);

    setTimeout(function() {
      if (targetObj.is(':visible')) {
        targetObj.val(optionVal)
      }
    }, 1000);
  }

  var setDefaultCountry = function(obj) {
    if (obj && obj.val().length < 1) {
      obj.val(eventLocation);
    }
  }

  // show only countries with option
  removeCountriesWithNoOption($('#visa_permit_type option'), $('#visa_country option'));
  removeCountriesWithNoOption($('#fid_type option'), $('#fid_country option'));

  // show only list of permits per country by default
  populateByLocation($('#visa_permit_type'), $('#Work_Permit_Type_Global option'), $('#visa_country').val());

  // show only list of id types per country by default
  populateByLocation($('#fid_type'), $('#National_ID_Type option'), $('#fid_country').val());

  // set default country
  setDefaultCountry($('#passport_country'));
  setDefaultCountry($('#visa_country'));
  setDefaultCountry($('#fid_country'));

  $('#global-new-hire-form').on('change', '#fid_country', function() {
    populateByLocation($('#fid_type'), $('#National_ID_Type option'), $(this).val());
    $('#National_ID_Type').val($(this)).val();
  });

  $('#global-new-hire-form').on('change', '#visa_country', function() {
    populateByLocation($('#visa_permit_type'), $('#Work_Permit_Type_Global option'), $(this).val());
    $('#Work_Permit_Type_Global').val($(this)).val();
  });


  $('#global-new-hire-form').on('click', 'input:radio:visible', function() {
    sectionToggler.run();
    $('#global-new-hire-form input[type="text"]:hidden, #global-new-hire-form select:hidden').val('');
    if ($('#visa_permit_type').is(':visible')) {
      populateByLocation($('#visa_permit_type'), $('#Work_Permit_Type_Global option'), $('#visa_country').val());
    }
    if ($('#fid_type').is(':visible')) {
      populateByLocation($('#fid_type'), $('#National_ID_Type option'), $('#fid_country').val());
    }
    setDefaultCountry($('#passport_country'));
    setDefaultCountry($('#visa_country'));
    setDefaultCountry($('#fid_country'));
    console.log($('#national-identification-container').hasClass('hide'));
    console.log($('#passport-information-container').hasClass('hide'));
    console.log($('#noncitizen-identification-container').hasClass('hide'));
    console.log($('#visa-identification-container').hasClass('hide'));


    setTimeout(function() {

    if ($('#national-identification-container').hasClass('hide')) {
      $('#national-identification-container').find('input:radio:checked').prop('checked', false);
      $('#national-identification-container').find('input').val('');
    }
    if ($('#passport-information-container').hasClass('hide')) {
      $('#passport-information-container').find('input:radio:checked').prop('checked', false);
      $('#passport-information-container').find('input').val('');
    }
    if ($('#noncitizen-identification-container').hasClass('hide')) {
      $('#noncitizen-identification-container').find('input:radio:checked').prop('checked', false);
      $('#noncitizen-identification-container').find('input').val('');
      $('#fid_type').find('select').val('');
    }
    if ($('#visa-identification-container').hasClass('hide')) {
      $('#visa-identification-container').find('input:radio:checked').prop('checked', false);
      $('#visa-identification-container').find('input').val('');
      $('#visa_permit_type').find('select').val('');
    }
    }, 1000);

  });

  $('#global-new-hire-form').on('click change blur', 'input:visible[type="radio"]', function() {
    if ($(this).attr('id') == 'test1') {
      if ($('#radio-button').val() = 'yes') {
        $(this).data('title', 'dynamic title')
      }
    }
    validateField($(this));
  });

  $('#global-new-hire-form').on('change', 'input:visible:not(#signature):not(:button), select:visible', function() {
    validateField($(this));
  });

  $('#modal').on('click', 'input.lifesuite__button', function() {
    validateField($('#signature'));
  });

  $('#ButtonPrint, #buttonPrint, #ButtonSaveAndComplete, #buttonSaveAndComplete').on('click', function(e) {
    var formIsValid = true, btn = $(this);
    e.preventDefault();
    $.each($('#global-new-hire-form input:visible:not(:button), #global-new-hire-form select:visible'), function(k, v) {
      if(false == validateField($(v)) && $(v).is(':visible')) {
        formIsValid = false;
      }
    });
    if (formIsValid) {
      switch (btn.attr('id')) {
        case 'ButtonPrint':
          funcPrint();
        break;
        case 'ButtonSaveAndComplete':
          funcSaveAndComplete();
        break;
      }
    }
  });

  // Style modifiers
  $('.cal_and_button td').prepend($('<span class="calendar-btn-container"/>').append($('<i class="fa fa-calendar"></i>')));

});


$(document).ready(function() {
  $('#toggle-additional-account').on('click', 'button:not("disabled")', function(e) {
    e.preventDefault();
    if ($('#additional-account').is(':visible')) {
      $('#additional-account input').each(function(k,v) {
        $(v).val('');
      });
    }
    $('#additional-account, #toggle-additional-account button').toggleClass('hide');
  });
  var hasSecondAccount = false;
  $('#additional-account input').each(function(k,v) {
    if($(v).val().length) {
      hasSecondAccount = true;
    }
  });
  if (hasSecondAccount) {
    $('#additional-account, #toggle-additional-account button').toggleClass('hide');
  }
  if (strFormCompleted != "") {
    $('#toggle-additional-account button').prop('disabled', true);
  }
});

$(document).ready(function() {
  var empData = {
    "a01_First_name": "<$client.tForWhomUserInfo.First_Name>",
    "a02_Middle_Initial": "<$client.tForWhomUserInfo.Middle_Initial>",
    "a03_Last_Name": "<$client.tForWhomUserInfo.Last_Name>",
    "fullName": "<$client.tForWhomUserInfo.First_Name> <$client.tForWhomUserInfo.Last_Name>",
    "a04_Preferred_First_Name": "<$client.tForWhomUserInfo.Preferred_Name>",
    "a05_Gender": "<$client.tForWhomUserInfo.Gender>",
    "a06_Home_Phone_Number": "<$client.tForWhomUserInfo.Phone>",
    "a08_Email_Address": "<$client.tForWhomUserInfo.Email>",
    "a09_Social_Insurance_Number": "<$client.tForWhomUserInfo.SSNO>",
    "a10_Date_of_Birth": "<$client.tForWhomUserInfo.DOB>",
    "a12_Street_Address": "<$client.tForWhomUserInfo.Address1>",
    "a14_City": "<$client.tForWhomUserInfo.City>",
    "a16_Post_Code": "<$client.tForWhomUserInfo.Zip>"
  }
  if (strFormCompleted == "") {
    $.each(empData, function(k,v) {
      var field = $(document.getElementById(k));
      if ($(document.getElementById(k)).length < 1)  {
        setTimeout(function() {
          var d = new Date(v);
          var mm = d.getMonth() + 1;
          $(document.querySelector('[id$="' + k + '_display' + '"]')).val(mm + '/' + ("0" + d.getDate()).slice(-2) + '/' + d.getFullYear());
        }, 500);
      }
      field.val(v);
    })
  }
});

function requireWhenEnabled(sValue, sName, sID) {
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var field = $(document.querySelector('[name="' + sName + '"]'));
  if (!field.prop('disabled') && field.is(':visible') && field.val().length < 1) {
    return eFormRequiredField(sValue, sName, sID);
  }
}

$(document).on('ready', function() {
  var reopened = false;
  var signed = 0;
  var signStamps = $('[data-group="levels"]');
  var isHR = <$client.env.eval((client.role.HR_Directors==1) ? 'true': 'false')>;
  $.each(signStamps, function(k,v) {
    if ($(v).val().length > 0) {
      signed++;
    }
  });
  if (signStamps.length <= signed) {
    reopened = true;
  }
  if (signed > 0 && $('#lv1').val() != '<$client.account.loginID>') {
    $('#evaluation-container input, #evaluation-container textarea').disableField();
  }
  if (!reopened) {
    var disableRest = false;
    $.each($('#a26_First_Level_Supervisors_Signature, #a28_Second_Level_Supervisors_Signature, #a30_Third_Level_Supervisors_Signature, #a32_Human_Resources_Signature'), function(k,v) {
      if ($($(v).data('target-level')).val() == '<$client.account.loginID>') {
        disableRest = true;
        return true;
      }
      if (isHR && $(v).prop('id') == 'a32_Human_Resources_Signature') {
        return true;
      }
      else if (isHR || disableRest || k !== signed) {
        $(v).disableField();
        $('[data-date-id="' + $(v).data('target-level') + '"]').disableDate().disableField();
      }
    })
  }
  else {
    $.each(signStamps, function(k,v) {
      if ($(v).val() !== '<$client.account.loginID>') {
        $('[data-target-level="#' + $(v).prop('id') + '"]').disableField();
        $('[data-date-id="#' + $(v).prop('id') + '"]').disableDate().disableField();
      }
    })
  }
});

function eFormRequiredNumeric(sValue,sName,sField) {
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (sValue.length < 1) {
    eFormRequiredField(sValue,sName,sField);
  }
  if (false === /[0-9]+/.test(sValue)) {
    eFormIsNumeric(sValue,sName,sField);
    return false;
  }
  return true;
}

function eFormAUTaxValidate(sValue,sName,sField) {
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  // remove spaces and hyphens
  var val = sValue.trim().replace(/[-]/g, '');
  if (val.length < 1) {
    return eFormRequiredField(sValue,sName,sField);
  }
  if (val.length !== 9) {
    AddError(sField, 'Error in validation, value should be exactly 9 digits in', '');
    return false;
  }
  if (false === /^\d+$/.test(val)) {
    return eFormIsNumeric(sValue,sName,sField);
  }
  var sum = 0;
  var entry = val.split('');
  var weights = [1, 4, 3, 7, 5, 8, 6, 9, 10]; // Constant - do not change
  for (i = 0; i < weights.length; i++) {
    sum += (weights[i] * entry[i]);
  }
  if ((sum % 11) !== 0) {
    AddError(sField, 'Error in validation, tax number not valid in', '');
    return false;
  }
  return true;
}

// require if not local nationality = NZ
function eFormRequireForeign(sValue,sName,sField) {
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var dep = $($(document.getElementsByName(sName)[0]).data('depends'));
  var nationalityRequired = 'NZ';
  if (dep.val() !== nationalityRequired) {
    return eFormRequiredField(sValue,sName,sField);
  }
  return true;
}
$('.lifesuite__button.ng-scope:not(.active)').trigger('click').hide();
if ($('[id^="btnSigDrawnClear"]').length) {
  $('.lifesuite__button.ng-scope').hide();
}

$(document).on('ready', function() {
  var populateDate = function(el) {
    $('[data-id="' + el.data('target-id') + '"]').val(el.val());
  }
  $('.dateField').on('change', function() {
    populateDate($(this));
  });
  $.each($('.dateField'), function(k, v) {
    populateDate($(v));
  })

  $('.ng-scope').on('keyup change', '.lifesuite__text-input', function() {
    var input = $(this);
    var btn = input.closest('.lifesuite__module').find('button.lifesuite__button.primary');
    if (input.val().trim().length > 0) {
      btn.prop('disabled', null);
    } else {
      btn.prop('disabled', 'disabled');
    }
  });


});

// require if not local nationality = NZfunction eFormRequireForeign(sValue,sName,sField) {
  if ('<$client.env.serversidevalidation>' == '1') {return true;}

  var field = $(document.getElementsByName(sName)[0]);
  var dep = field.is(':visible') ? $($(field).data('depends')) : $($(document.getElementsByName(sName + '_display')[0]).data('depends'));
  var nationalityRequired = 'NZ';
  if (dep.val() !== nationalityRequired) {
    return (sName.indexOf("_display") >= 0) ? eFormRequiredDate(sValue,sName,sField) : eFormRequiredField(sValue,sName,sField);
  }
  return true;
}

function eFormTodayFormatted(sValue,sName,sField) {
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var field = $(document.getElementsByName(sName)[0]);
  if (field.data('realdate') === undefined || sValue.length < 1) {
    return eFormRequiredField("", sName, sField);
  }
  var d = new Date();
  if (field.data('realdate') !== d.toLocaleDateString()) {
    AddError(sField, 'Error in validation, current date must be set on', '');
    return false;
  }
  return true;
}

function eFormRequireByDep(sValue,sName,sField) {
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var dep = $(document.getElementsByName(sName)[0]).data('dep');
  var validation = $(document.getElementsByName(sName)[0]).data('validation');
  if (validation && sValue.length > 0) {
    switch(validation) {
      case "numeric":
        if (!/^[0-9]+$/.test(sValue)) {
          AddError(sField, 'Error in validation, only numbers are allowed in', '');
          return false;
        }
      break;
    }
  }
  if (!$(dep).is(':checked')) {
    return eFormRequiredField(sValue,sName,sField);
  }
  return true;
}

// data-checkbox-group='worked-at-apple'
(function($){
  $.fn.checkOne = function() {
    var checkboxes = $('[data-checkbox-group="' + $(this).data('checkbox-group') + '"]')
    $.each(checkboxes, function(k,v){
      $(v).prop('checked', false);
    });
    $(this).prop('checked', true)
  }
})(jQuery);
  $('[data-checkbox-group="worked-at-apple"]').on('change', function() {
    $(this).checkOne();
  });

$(document).on('ready', function() {
  var assignee = "<$client.account.username_first> <$client.account.username>";
  var recruiter = "<$client.tEventManagers_16.First_Name> <$client.tEventManagers_16.Last_Name>";
  var asignatory = "<$client.account.username_first> <$client.account.username>";
  var recruiter_signature = document.getElementById('recruiter_signature');
  var recruiter_name = document.getElementById('recruiter_name');
  var rec_name =  document.getElementById('name2');
  var finalval = "";
  if(recruiter_signature.readOnly == false){
    if(assignee == recruiter){
      finalval = recruiter;
    }
    else{
      finalval = assignee + ' (on behalf of ' + recruiter +')';
    }

    recruiter_signature.value = finalval;
    recruiter_name.value = <$client.env.eval((client.role.rc_canada_company_signatory==1)?'asignatory':'assignee')>;
    rec_name.value = <$client.env.eval((client.role.rc_canada_company_signatory==1)?'asignatory':'assignee')>;
  }
  if(!$('#signature2').val().length) {
    recruiter_name.value = <$client.env.eval((client.role.rc_canada_company_signatory==1)?'assignee':'recruiter')>;
    rec_name.value = <$client.env.eval((client.role.rc_canada_company_signatory==1)?'assignee':'recruiter')>;
  }
  var sigholder = document.getElementsByClassName('signDisplay2');
  sigholder[0].innerHTML = recruiter_signature.value;
  disableCalButton("signDate");
});

$(document).on('ready', function() {
  var keepIndPan = function(el) {
    if (el.val() === "IND") {
      $('#NationalID_Type option:not([value="IND-PAN"])').remove();
    }
  }
  keepIndPan($('#NationalID_Country'));
  $('#NationalID_Country').on('change', function() {
    keepIndPan($(this));
  });
});

/**
 * SERVICES-35248 | jjucutan | LOREAL NZ - Please create custom EXIT INTERVIEW EFORM
 */
function eFormRequireByDep(sValue,sName,sField) {
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var depName = $($(document.getElementsByName(sName)[0]).data('requires')).prop('name');
  var deps = $(document.getElementsByName(depName));
  var requires = $(document.getElementsByName(sName)[0]).data('require-value');
  $.each(deps, function(k,v) {
    if($(v).is(':checked') && $(v).val() === requires) {
      return eFormRequiredField(sValue,sName,sField);
    }
  });
  return true;
}

var isHr = <$client.env.eval((url.forWhom!=account.userguid)?'true':'false')>;
if (isHr) {
  $('#hr').removeClass('hide');
}

  var isSignatory = <$client.env.eval((client.role.rc_canada_company_signatory==1)?'true':'false')>;
  if (!isSignatory && !$('.startDate').is(':disabled')) {
    setTimeout(function() {
      $('#signature2, #signature, #sv1, #sv2, #recruiter_name, #recruiter_signature, #name1, #name2, .signDate').val('')
    },500);
  }

  var completeStamp = function(id) {
    if(id.length) {
      document.getElementById(id).value = 0;console.log(document.getElementById(id).value);
    }
  }

  var isSignatory = <$client.env.eval((client.role.rc_canada_company_signatory==1)?'true':'false')>;
  var isEmployee = <$client.env.eval((url.forWhom==account.userguid)?'true':'false')>;
  var init = function() {
    if(FORM_COMPLETED.length) {
      return false;
    }
    if (isSignatory && parseInt($('#SignatoryStamp').val()) === 0) {
      $('#signature2').val('');
      $('#SignatoryStamp').val(1);
      setTimeout(function() {
        $('.signDate2').val('');
      }, 400);
    }
    if (isEmployee &&  parseInt($('#EmployeeStamp').val()) === 0) {
      $('#signature').val('');
      $('#EmployeeStamp').val(1);
      setTimeout(function() {
        $('.signDate').val('');
      }, 400);
    }
    if(!isEmployee && !isSignatory) {
      $('#signature2, #signature, #name2').val('');
      setTimeout(function() {
        $('.signDate, .signDate2').val('');
      }, 400);
    }
  }
  setTimeout(init(),400);
  $('form').on('click', '#ButtonSaveAndComplete', function() {
      completeStamp("<$client.env.eval((client.role.rc_canada_company_signatory==1)?'SignatoryStamp':'')>");
      completeStamp("<$client.env.eval((url.forWhom==account.userguid)?'EmployeeStamp':'')>");
      void(funcSaveAndComplete());
  });




  if (!reopened) {
    var disableRest = false;
    $.each($('#a26_First_Level_Supervisors_Signature, #a28_Second_Level_Supervisors_Signature, #a30_Third_Level_Supervisors_Signature, #a32_Human_Resources_Signature'), function(k,v) {
      if ($('[data-date-id="' + $(v).data('target-level') + '"]')) {
        $(v).disableDate().disableField();
      }
      if ($($(v).data('target-level')).val() == '<$client.account.loginID>') {
        disableRest = true;
        return true;
      }
      if (isHR && $(v).prop('id') == 'a32_Human_Resources_Signature') {
        return true;
      }
      else if (isHR || disableRest || k !== signed) {
        $(v).disableField();
        $('[data-date-id="' + $(v).data('target-level') + '"]').disableDate().disableField();
      }
    })
  }

$(document).on('ready', function() {
  var numerify = function(el, disable) {console.log(el);
    if (disable !== false) {
      el.addClass('remove-alpha');
      return el;
    }
    el.removeClass('remove-alpha');
    return el;
  }
  $('form').on('keyup paste change', '.remove-alpha', function () {
      if (!$(this).val().match(/^[0-9]$/)) {
          $(this).val($(this).val().replace(/[^0-9]/g, ''));
      }
  });
  $('#nid_type').on('change', function() {
    if ($(this).val() === "MYS-SOSCO") {
      numerify($('[name$="nid_number"]'));
      $('[name$="nid_number"]').trigger('change');
    }
    else {
      numerify($('[name$="nid_number"]'), false);
    }
  });
  if ($('#nid_type').val() === "MYS-SOSCO") {
    $('[name$="nid_number"]').trigger('change');
  }
});


function eFormValidateMaxFloat(sValue,sName,sField) { // SERVICES-35563 | Avery Dennison: JS Validation
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var isValid = true;
  if (!sValue.trim().match(/^-?\d*(\.\d+)?$/)){
    AddError(sField, 'Error in validation, input value should be valid number in', '');
    isValid = false;
  }
  var MAX_CHARS = 4; // set this to whatever maximum characters you like
  if (sValue.trim().length > MAX_CHARS){
    AddError(sField, 'Error in validation, input value should not exceed ' + MAX_CHARS + ' characters in', '');
    isValid = false;
  }
  var MAX_VALUE = 1.00; // set this to whatever maximum value you like
  if (parseFloat(sValue) > parseFloat(MAX_VALUE)) {
    AddError(sField, 'Error in validation, input value should not exceed ' + MAX_VALUE + ' in', '');
    isValid = false;
  }
  return isValid;
}

////////////////////////////////////////////////////
//  ValidateW4Allowances Custom
//  SERVICES-35347 | jjucutan | Seattle Children's Hospital - Research Foundation -RC- W-4 Validation
////////////////////////////////////////////////////
function ValidateW4Allowances_Custom(sVal,sName,sID) {
    if('<$client.env.serversidevalidation>'=='1'){ return true; }
    if(!sVal.trim().length) {
      return eFormRequiredField(sVal,sName,sID)
    }
    if(!/^[0-9]+$/.test(sVal)) { 
      AddError(sID, 'Error in validation, only whole numbers are allowed in', ''); 
      return false; 
    }
    if(parseInt(sVal) < 1) {
      AddError(sID, 'Error in validation, input value should greater than 0 in', ''); 
      return false; 
    }
    if(document.getElementById('exempt').value.length>0) {
      return true; 
    }
    return true;
}

var toggleBrazilFields = function(nationalID) {
  switch (nationalID) {
    case "BRA-CTPS":
      $('#toggleable-merge').removeClass().addClass('merge');
      $('#Series_Number, #Issuing_Agency').parent().show();
    break;
    case "BRA-VRN":
      $('#toggleable-merge').removeClass().addClass('merge');
      $('#Series_Number').parent().show();
      $('#Issuing_Agency').val('').parent().hide();
    break;
    case "BRA-RNE":
    case "BRA-RG":
      $('#toggleable-merge').removeClass().addClass('input_wrapper');
      $('#Series_Number').val('').parent().hide();
      $('#Issuing_Agency').parent().show();
    break;
    default:
    $('#toggleable-merge').removeClass().addClass('input_wrapper');
    $('#Series_Number, #Issuing_Agency').val('').removeClass("input-error").parent().hide();
    $(".issuing-agency-error, .series-number-error").removeClass("error-message"); 
  }
}

  var toggleBrazilFields = function(nationalID) {
    switch (nationalID) {
      case "BRA-CTPS":
        $('#nid_series_number, #nid_issuing_agency').closest('.row').show();
      break;
      case "BRA-VRN":
        validateField($('#nid_issuing_agency'), true);
        $('#nid_series_number').closest('.row').show();
        $('#nid_issuing_agency').val('').closest('.row').hide();
      break;
      case "BRA-RNE":
      case "BRA-RG":
        validateField($('#nid_series_number'), true);
        $('#nid_series_number').val('').closest('.row').hide();
        $('#nid_issuing_agency').closest('.row').show();
      break;
      default:
      validateField($('#nid_series_number'), true);
      validateField($('#nid_issuing_agency'), true);
      $('#nid_series_number, #nid_issuing_agency').val('').closest('.row').hide();
    }
  }

$('#NationalID_Type').on('change', function() {
});

$(document).on('ready', function() {
  var todaysDate = new Date();
  var months = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
  $('.modal').on('click', '#hr-sign', function() {
    if (validateSignature('signature','eSignature1','','modal','over','sv')) {
      $('[data-date-day="hr-date"]').val(todaysDate.getDate());
      $('[data-date-month="hr-date"]').val(months[todaysDate.getMonth()]);
      $('#hidden_pg2').val('<p>Date signed: this ' + todaysDate.getDate() + ' of ' + months[todaysDate.getMonth()]  + ', ' + todaysDate.getFullYear() + '</p>');
    }
    xbObj('eSignature1').value='';
  });
  $('.modal').on('click', '#hr-clear', function() {
    xbObj('signature').value='';
    showHide('modal');
    showHide('over');
    xbObj('eSignature1').value='';
    $('[data-date-day="hr-date"],[data-date-month="hr-date"], #hidden_pg2').val('');
  });
  $('.modal').on('click', '#nh-sign', function() {
    if(validateSignature('signature2','eSignature2','nh-name','modal2','over','sv2')) {
      $('[data-date-day="nh-date"]').val(todaysDate.getDate());
      $('[data-date-month="nh-date"]').val(months[todaysDate.getMonth()]);
      $('#hidden_pg3').val('<p>Date signed: this ' + todaysDate.getDate() + ' of ' + months[todaysDate.getMonth()]  + ', ' + todaysDate.getFullYear() + '</p>');
    }
    xbObj('eSignature2').value='';
  });
  $('.modal').on('click', '#nh-clear', function() {
    xbObj('signature2').value='';
    showHide('modal2');showHide('over');
    xbObj('eSignature2').value='';
    $('[data-date-day="nh-date"],[data-date-month="nh-date"], #hidden_pg3').val('');
  });
  $(".modal").hide();
});

  $('#united-kingdom-onboarding-application').on('click', '.fancybox', function() {
    window.open($(this).data('document'));
    $(this).find('img.invisible').removeClass('invisible');
    $(this).find('input[type="checkbox"]').prop('checked', true);
  });
  $.each($('.fancybox input[type="checkbox"]'), function(k,v) {
    if($(v).is(':checked')) {
      $(v).closest('.fancybox').find('img.invisible').removeClass('invisible');
    }
  });

function eFormValidTaxID(sValue,sName,sField) {
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if(sValue.trim().length < 1) {
    return true;
  }
  if(!/^[0-9]+$/.test(sValue.trim())) {
    AddError(sField, 'Error in validation, only numeric input allowed in', '');
    return false;
  }
  if(sValue.trim().length !== 11) {
    AddError(sField, 'Error in validation, input length must be 11 numeric digits in', '');
    return false;
  }
  return true;
}
function eFormValidSSNO(sValue,sName,sField) {
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if(sValue.trim().length < 1) {
    return true;
  }
  if(!/^[a-z0-9]+$/.test(sValue.trim())) {
    AddError(sField, 'Error in validation, only alphanumeric input allowed in', '');
    return false;
  }
  if(sValue.trim().length !== 12) {
    AddError(sField, 'Error in validation, input length must be 12 alphanumeric characters in', '');
    return false;
  }
  return true;
}

function isDependentOnLevel(sVal, sName, sID) {
    var isValid = true;
    if('<$client.env.serversidevalidation>'=='1'){return isValid;}
    var levelSource =  $('[data-level="source"]').val(),
        level = $("#" + sID).data('level');
    if (levelSource < 1) {
        return isValid;
    }
    switch (parseInt(levelSource)) {
        case '1':
            if (level == 1) {return eFormRequiredField(sVal, sName, sID);}
            break;
        case '2':
            if (level <= 2) {return eFormRequiredField(sVal, sName, sID);}
            break;
        case '3':
            if (level <= 3) {return eFormRequiredField(sVal, sName, sID);}
            break;
        case '4':
            if (level <= 4) {return eFormRequiredField(sVal, sName, sID);}
            break;
        case '5':
            if (level <= 5) {return eFormRequiredField(sVal, sName, sID);}
            break;
        default:
            if (level <= 6) {return eFormRequiredField(sVal, sName, sID);}
    }
}

function eFormMonthYearFormat(sVal, sName, sID) {
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (sVal.length < 1) {
      return true;
    }
    if (/^[0-9]{2}\/[0-9]{4}$/.test(sVal) || /^[0-9]{2}\/[0-9]{2}$/.test(sVal)) {
      return true;
    }
    AddError(sID, 'Error in validation, date format should be MM/YYYY or MM/YY in', '');
    return false;
}

function eFormRequireByController(sVal, sName, sID) {
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    if (sVal.length > 0) {
      return true;
    }
    var controller = $($(document.getElementsByName(sName)).data('controller'));
    if (controller.val().trim().length > 0) {
      return eFormRequiredField(sVal, sName, sID);
    }
    return true;
}

function eFormRequireEnabled(sVal, sName, sID) {
  "use strict";
  if('<$client.env.serversidevalidation>'=='1'){return true;}
  var field = document.querySelector('[name="' + sName + '"]');
  if (field.disabled) {
    return true;
  }
  return eFormRequiredField(sVal, sName, sID);
}

function eFormRequireDateEnabled(sVal, sName, sID) {
    if('<$client.env.serversidevalidation>'=='1'){return true;}
    var field = $(document.getElementsByName(sName + '_display')[0]);
    if (!field.prop('disabled')) {
      return eFormRequiredDate(sVal, sName, sID);
    }
    return true;
}

$(document).on('ready', function() {
  var enableTargetByValue = function(parent, target, val){
    if(parent.is(':checked') && parent.val() === val) {
      target.removeAttr('disabled');
      return;
    }
    target.prop('disabled', 'disabled').val('');
  };
  $('[data-target-require]').on('change', function() {
    enableTargetByValue($(this), $($(this).data('target-require')), 'Other');
  });
  $.each($('[data-target-require]:checked'), function(k, v) {
    setTimeout(function() {
      enableTargetByValue($(v), $($(v).data('target-require')), 'Other');
    }, 500);
  });
});

function phoneDashesRequired(sVal, sName, sID) {
  var iSS = <$client.env.eval(client.env.serversidevalidation==1?true:false)>;
    if(iSS){return true;}
    if(sVal.length < 1) {
      return eFormRequiredField(sVal, sName, sID);
    }
    return phoneDashesRequired(sVal, sName, sID);
}
     $("#intlDate")
        .formatDatePicker(dateConfig, "<$client.env.eval(client.tEventCategories_Category_11.Code.subString(0,2))>")
        .datepicker('setDate', $('[name$="DOB_display"]').datepicker('getDate'))
        .datepicker('option', 'onSelect', function(dateText, instance) {
          $('[name$="DOB_display"]').datepicker('setDate', $(this).datepicker('getDate'));
          $(this).trigger('change');
      });
      $('#date-format').text(dateConfig.regions[dateConfig.countries["<$client.env.eval(client.tEventCategories_Category_11.Code.subString(0,2))>"]].replace('yy', 'yyyy'));

	  
var toggleAttributesByRequirement = function(el, requiredVal, target, attrs) {
	target
	if (el.val() === requiredVal) {
		
	}
}


/**
 * SERVICES-36588 | jjucutan | Forms Library - New Version - State_Withholding_MT
 */
var disableField = function(fieldId) {
  var targetField = document.getElementById(fieldId);
  if (targetField) {
    targetField.disabled = true;
    targetField.className = "readonlygray";
  }
}
if ('<$client.account.userguid>'=='<$client.url.forwhom>') {
  disableField("EmployerName");
  disableField("employernameaddress");
  disableField("ein1");
  disableField("ein2");
  disableField("employer_mt_account_id");
  disableField("EmployerAddress");
  disableField("EmployerCity");
  disableField("EmployerState");
  disableField("EmployerZip");
}


function ValidateMTPAWorksheetG(sVal,sName,sID){
  if('<$client.env.serversidevalidation>'=='1'){ return true; }  
  var sum = 0;
  var fields = $('#paworksheeta, #paworksheetb, #paworksheetc, #paworksheetd, #paworksheete, #paworksheetf');
  $.each(fields, function() {
    var fieldVal = parseInt($(this).val())
    if (fieldVal) {
      sum += fieldVal;
    }
  });
  $('#paworksheetg').val(sum);
  return eFormIsInteger(sVal,sName,sID);
}

function onBlurAllowance(el){
  var sum = 0;
  var fields = $('#paworksheeta, #paworksheetb, #paworksheetc, #paworksheetd, #paworksheete, #paworksheetf');
  $.each(fields, function() {
    var fieldVal = parseInt($(this).val())
    if (fieldVal) {
      sum += fieldVal;
    }
  });
  $('#paworksheetg').val(sum);
}

function ValidateIDFilingStatusA(sVal,sName,sID){
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  var siblings = $('[data-checkbox-group="filingstatus"]');
  var checked = false;
  $.each(siblings, function(k,v) {
    if ($(v).is(':checked')) {
      checked = true;
    }
  });
  if (!checked) {
    return eFormRequiredField(sVal,sName,sID);
  }
  return true;
}

/**
 * SERVICES-37026 | 02.22.2019 | Accenture - Add Validation to date field
 */
function allowOnlyFutureDateDependent(sVal,sName,sID) {
  if('<$client.env.serversidevalidation>'=='1'){ return true; }

  let field = $(document.getElementsByName(sName + '_display')[0]);
  if (field.hasClass('ng-disabled')) {
    return true;
  }

  if (sVal.length < 1 && field.hasClass('ng-invalid')) {
    eFormRequiredDate(sVal,sName,sID);
  }

  let depName = field.data('dep');
  let dep = $('[name$="' + depName + '"]');
  let depDate = new Date(dep.val()).setHours(0,0,0);
  let endDate = new Date(sVal).setHours(0,0,0);
  if (depDate >= endDate) {
    AddError(sID, 'Error in validation, only greater than start date are accepted in', '');
    return false;
  }
  return true;
}

/**
 * SERVICES-37421 | Tenet: Edits to Emergency Contact eform
 */
function validatePhoneDigits(sValue,sName,sField){
  "use strict";
  if ('<$client.env.serversidevalidation>'=='1') return true;
  if (sValue.length < 1) {
    return true;
  }
  if (!/^\d{10}$/.test(sValue)) {
    AddError(sField, 'Error in validation, input value should be 10 digits in', '');
    return false;
  }
  return true;
}
function validateRequiredPhoneDigits(sValue,sName,sField){
  "use strict";
  if ('<$client.env.serversidevalidation>'=='1') return true;
  if (sValue.length < 1) {
    eFormRequiredField(sValue,sName,sField);
  }
  return validatePhoneDigits(sValue,sName,sField);
}


function validateRequiredNumeric(sValue,sName,sField){
  "use strict";
  if ('<$client.env.serversidevalidation>'=='1') return true;
  if (sValue.length < 1) {
    return eFormRequiredField(sValue,sName,sField);
  }
  if (!/^\d{5}$/.test(sValue)) {
    AddError(sField, 'Error in validation, input value should be 5 digits in', '');
    return false;
  }
  return true;
}
 
/**
 * SERVICES-37701 | LW - RC - Validation Request
 */
function requireWhenVisible(sValue,sName,sField){
  "use strict";
  if ('<$client.env.serversidevalidation>'=='1') return true;
  let el = document.getElementsByName(sName)[0];
  if (el.offsetParent !== null) {
    return eFormRequiredField(sValue,sName,sField);
  }
  return true;
}

function allowFutureDateOfDepOnly(sVal,sName,sID) {
  if('<$client.env.serversidevalidation>'=='1'){ return true; }

  var dateField = $('[id$="' + sID + '_display"]');
  if (!dateField || dateField.hasClass('ng-disabled')) {
    return true;
  }

  if (sVal.length < 1 && dateField.hasClass('ng-invalid')) {
    eFormRequiredDate(sVal,sName,sID);
  }

  var depName = dateField.data('dep');
  var dep = $('[name$="' + depName + '"]');
  var depDate = new Date(dep.val()).setHours(0,0,0);
  var endDate = new Date(sVal).setHours(0,0,0);
  if (depDate >= endDate) {
    AddError(sID, 'Error in validation, only greater than start date are accepted in', '');
    return false;
  }
  return true;
}

function requiredOneSibling(sVal,sName,sID) {
  if('<$client.env.serversidevalidation>'=='1') { return true;}
  var siblings = $('[data-checkbox-group="' + sID + '"]');
  var checked = false;
  $.each(siblings, function(k,v) {
    if ($(v).prop('checked')) {
      checked = true;
    }
  });
  if (!checked) {
    return eFormRequiredField(sVal,sName,sID);
  }
  return true;
}

function requiredPhoneDashes(sVal,sName,sID) {
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  if (sVal.length <= 0) {
    return eFormRequiredField(sVal,sName,sID);
  }
  return phoneDashes(sVal,sName,sID);
}

function requiredZipCode(sVal,sName,sID) {
  "use strict";
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  if (sVal.length <= 0) {
    return eFormRequiredField(sVal,sName,sID);
  }
  return zipCode(sVal,sName,sID);
}

/**
 * SERVICES-38212 | do not require if employee is not application
 */
function requiredApplicable(sVal,sName,sID) {
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  var NOT_APPLICABLE = ('<$client.account.username_first> <$client.account.username>'.toLowerCase()=='not applicable')?true:false;
  if (!!NOT_APPLICABLE) {
    return true;
  }
  return eFormRequiredField(sVal,sName,sID);
}
function requiredApplicableDate(sVal,sName,sID) {
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  var NOT_APPLICABLE = ('<$client.account.username_first> <$client.account.username>'.toLowerCase()=='not applicable')?true:false;
  if (!!NOT_APPLICABLE) {
    return true;
  }
  return eFormRequiredDate(sVal,sName,sID);
}

function requireMatchSiblings(sVal,sName,sID) {
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  if (sVal.length < 1) {
    return eFormRequiredDate(sVal,sName,sID);
  }
  var siblingsId = document.querySelector('[name="' + sName + '"]').getAttribute('data-validation-siblings');
  var siblings = document.querySelectorAll('[data-validation-siblings="' + siblingsId + '"]');
  var isMatched = true;
  $.each(siblings, function(k,v) {
    if (sVal !== $(v).val()) {
      isMatched = false;
    }
  });
  if (!isMatched) {
    AddError(sID, 'Error in validation, values does not match in', '');
    return false;
  }
  return true;
}

// SERVICES-37831 | to date should be greater than from date
function acceptFutureDateOnly(sVal,sName,sID) {
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  if (sVal.length < 1) {
    return true;
  }
  var toFieldId = $('[name="' + sName + '_display"]').data('date-from');
  var fromFieldValue = new Date($('[name$=".' + toFieldId + '"]').val());
  var toDate = new Date(sVal);
  if (toDate.getFullYear() > fromFieldValue.getFullYear()) {
    return true;
  }
  if (toDate.getFullYear() === fromFieldValue.getFullYear() && toDate.getMonth() > fromFieldValue.getMonth()) {
    return true;
  }
  AddError(sID, 'Error in validation, please select date greater than From Month in', '');
  return false;
}
function acceptFutureDateRequired(sVal,sName,sID) {
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  if (sVal.length < 1) {
    return eFormRequiredDate(sVal,sName,sID);
  }
  return acceptFutureDateOnly(sVal,sName,sID);
}

// SERVICES-37831 | Require if added from hidden rows

function requireWhenVisibleDate(sVal,sName,sID) {
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  if (document.querySelector('[name="' + sName + '_display"]').offsetParent === null) {
    return true;
  }
  return eFormRequiredDate(sVal,sName,sID);
}

function requiredOneSiblingWithExplanation(sVal,sName,sID) {
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  if (!requiredOneSibling(sVal,sName,sID)) {
    return true;
  }
  var field = document.querySelector('[name="' + sName + '"]');
  if (!field.checked) {
    return true;
  }
  var explanationGroup = field.getAttribute('data-target-explanation');
  var explanations = document.querySelectorAll('[data-explanation-group="' + explanationGroup + '"]');
  var hasExplanation = false;
  for (i = 0; i < explanations.length; i++) {
    if(explanations[i].offsetParent !== null) {
      hasExplanation = true;
    }
  }
  if (!hasExplanation) {
    AddError(sID, 'Error in validation, explanation required once \"Yes\" is selected in', '');
    return false;
  }
  return true;
}

// SERVICES-37831 | match initials of user full name
function requiredInitials(sVal,sName,sID) {
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  if (sVal.length < 1) {
    return eFormRequiredField(sVal,sName,sID);
  }
  var targetInitials = document
    .querySelector('[name="' + sName + '"]')
    .getAttribute('data-target-initials');
  var targetField = document.querySelector(targetInitials);
  if (targetField.value.match(/\b(\w)/g).join('')!==sVal) {
    AddError(sID, 'Error in validation, please use you name initials in', '');
    return false;
  }
  return true;
}

// SERVICES-38174 | hide fields values
function eFormMaskField(sVal,sName,sID) {
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  var field = document.querySelector('[name="' + sName + '"]');
  if (field.getAttribute('type')==='hidden') {
    field = document.querySelector('[name="' + sName + '_display"]');
  }
  field.setAttribute('type', 'password');
}

  $('[data-checkbox-group]:checkbox').on('change', function() {
    let groupId = $(this).data('checkbox-group');
    let checked = $(this).is(':checked');
    $('[data-checkbox-group="' + groupId + '"]').prop('checked', false);
    $(this).prop('checked', !checked);
  });

$(document).on('ready', function() {
  if (<$client.env.eval(url.forWhom!=account.userguid)>) {
    $('[name$=".DateOfBirth_display"], [name$=".SocialSecurityNumber"]').prop('type', 'password');
  }
});

// SERVICES-38613 | Kirkland & Ellis - Direct Deposit E-Form
function eFormValidateRouting(sVal,sName,sID) {
  "use strict";
  if('<$client.env.serversidevalidation>'=='1'){ return true;}
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
function disallowPercentExcess(sVal,sName,sID) {
  "use strict";
  if('<$client.env.serversidevalidation>'=='1'){ return true;}
  if (!requireEnabled(sVal,sName,sID)) {
    return false;
  }
  var totalPercentage = 0;
  $.each($('.is-percent'), function(k,v) {
    totalPercentage += parseFloat($(v).val());
  });
  var MAX_PERCENTAGE = 100;
  if (totalPercentage > MAX_PERCENTAGE) {
    AddError(sID, 'Error in validation, deposit percentage should not exceed ' + MAX_PERCENTAGE + ' in', '');
    return false;
  }
}

// SERVICES-38642 | Experis: RC - New eForm (UPS Consent Documents)
function requireSSNSections(sVal,sName,sID) {
  "use strict";
  if('<$client.env.serversidevalidation>'=='1'){ return true;}
  var ssnFieldGroupID = document.querySelector('[name="' + sName + '"]').getAttribute('data-ssn-group');
  var ssnFieldGroup = document.querySelectorAll('[data-ssn-group="' + ssnFieldGroupID + '"]');
  for (var i = 0; i < ssnFieldGroup.length; i++) {
    if (ssnFieldGroup[i].value.length < 1) {
      AddError(sID, 'Error in validation, please complete value input in', '');
      return false;
    }
  }
  return true;
}

// SERVICES-38636 | Enterprise Products: eForm scope request
function requireWhenDoesNotMeet(sVal,sName,sID) {
  "use strict";
  if('<$client.env.serversidevalidation>'=='1'){return true;}
  var checkboxGroups = document.getElementById(sID).getAttribute('data-depends-on');
  var fieldGroups = checkboxGroups.split(',');
  var required = false;
  for (var i = 0; i < fieldGroups.length; i++) {
    if (document.querySelector('[data-checkbox-group="' + fieldGroups[i] + '"][value="No"]').checked) {
      required = true;
    }
  }
  if (required) {
    return eFormRequiredField(sVal,sName,sID);
  }
  return required;
}

function requireWhenRequired(sVal,sName,sID) {
  "use strict";
  if('<$client.env.serversidevalidation>'=='1'){return true;}
  if (sVal.length < 1) {
    AddError('How were you referred to Carter\'s', 'Error in validation, required information missing in', '');
    return false;
  }
  return true;
}

// SERVICES-38928 | WoodGroup Test- Canada event
function requireStaticFields(sVal,sName,sID) {
  "use strict";
  if('<$client.env.serversidevalidation>'=='1'){return true;}
  var requiredFields = [
    ['First_Name', 'Legal First Name /Forename'],
    ['Last_Name', 'Legal Last Name / Surname'],
    ['Address1', 'Home address 1'],
    ['City', 'Home City/Town'],
    ['county_parish', 'Home County/District'],
    ['State', 'State/Province'],
    ['Zip', 'Home Zip/Postal Code'],
    ['Country', 'Home Country']
  ];
  // require sin only if country is canada
  var optionalCountry = (document.querySelector('[name$=".Country"]')!==null)?document.querySelector('[name$=".Country"]').value:"";
  if (optionalCountry === "Canada") {
    requiredFields.push(['national_identification', 'SIN']);
  }
  var valid = true;
  for (var i = 0; i < requiredFields.length; i++) {
    if (document.querySelector('[name$="' + requiredFields[i][0] + '"]').value.length < 1) {
      AddError(requiredFields[i][1], 'Error in validation, required information missing in', '');
      valid = false;
    }
  }
  return valid;
}

function requireOneCheckboxGroup(sVal, sName, sID) {
  "use strict";
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  var checkboxes = document.querySelectorAll('[data-checkbox-group="' + document.querySelector('[name="' + sName + '"]').getAttribute('data-checkbox-group') + '"]');
  var required = true;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === true) {
      required = false;
    }
  }
  if (required) {
    return eFormRequiredField(sVal, sName, sID);
  }
  return true;
}

// SERVICES-39177 | Kirkland & Ellis Policy Acknowledgement Form
function requireWhenVisibleField(sVal,sName,sID) {
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  if (document.querySelector('[name="' + sName + '"]').offsetParent === null) {
    return true;
  }
  return eFormRequiredField(sVal,sName,sID);
}

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

// SERVICES-39749 | Wesfarmers Industrial and Safety - Request to update LifeSuite Onboarding eForm - Bank Account Amount ($) field to be required
function requireBySiblings(siblings) {
  "use strict";
  var required = false;
  siblings.forEach(function(v) {
    if (document.querySelector('[name$=".' + v + '"]').value.length > 0) {
      required = true;
    }
  }); 
  return required;
}

/**
 * ValidateNHOIntlEmpID
 */
function ValidateNHOIntlSecondary_Branch_EC_CD_Custom(sVal, sName, sID) {
  "use strict";
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  var secondaryBank = ['Secondary_Bank_CD', 'Secondary_Branch_EC_CD', 'Secondary_Branch_Suburb', 'Secondary_Account_EC_ID', 'Secondary_Account_Name', 'Secondary_Account_Amount'];
  if (requireBySiblings(secondaryBank)) {
    secondaryBank.forEach(function(v) {
      var field = document.querySelector('[name$=".' + v + '"]');
      eFormRequiredField(field.value, field.getAttribute('name'), v);
    });
    return eFormRequiredField(sVal, sName, sID);
  }
  return false;
}

/**
 * ValidateNHOIntlTertiary_Account_Amount_Custom
 */
function ValidateNHOIntlTertiary_Account_Amount_Custom(sVal, sName, sID) {
  "use strict";
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  var tertiaryBank = ['Tertiary_Bank_CD', 'Tertiary_Branch_EC_CD', 'Tertiary_Branch_Suburb', 'Tertiary_Account_EC_ID', 'Tertiary_Account_Name', 'Tertiary_Account_Amount'];
  if (requireBySiblings(tertiaryBank)) {
    tertiaryBank.forEach(function(v) {
      var field = document.querySelector('[name$=".' + v + '"]');
      eFormRequiredField(field.value, field.getAttribute('name'), v);
    });
    return eFormRequiredField(sVal, sName, sID);
  }
  return false;
}

// SERVICES-39469 | jjucutan | https://jira.silkroadtech.com/browse/SERVICES-39469?focusedCommentId=1443606&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-1443606
function requireByController(sVal, sName, sID) {
  "use strict";
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  var isDate = false;
  var fieldName = sName;
  if (document.querySelector('[name="' + fieldName + '_display"]')) {
    isDate = true;
    fieldName += '_display';
  }
  var controller = document.querySelector('[name="' + fieldName + '"]').dataset.controller;
  document.querySelectorAll('[name$=".' + controller + '"]').forEach(function(el,k) {
    if (el.checked && el.value == 'Yes') {
      if (isDate) {
        return eFormRequiredDate(sVal, sName, sID);
      }
      return eFormRequiredField(sVal, sName, sID);
    }
  });
  return true;
}


function mustMatchConfirmation(sVal, sName, sID) {
  "use strict"; // SERVICES-39901 | jjucutan |  Tenneco Automotive add routing confirmation validation
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  if (sVal.length < 1) {
    return;
  }
  var field = document.querySelector('[name="' + sName + '"]')
  var targetConfirmation = field.dataset.confirmation;
  if (document.querySelector('[name$=".' + targetConfirmation + '"]').value != field.value) {
    AddError(sID, 'Error in validation, entry should match confirmation in', '');
    return false;
  }
}

function toggleNonExemptFields(enable) {
  "use strict";
  const nonExemptFields = ['MultiplyChildren', 'TwoJobs', 'MultiplyDependents', 'ChildrenDependentsTotal', 'OtherIncome', 'Deductions', 'ExtraWithholding', 'MJWorksheet1',  'MJWorksheet2A', 'MJWorksheet2B', 'MJWorksheet2C', 'MJWorksheet3', 'MJWorksheet4', 'DAWorksheet1', 'DAWorksheet2', 'DAWorksheet3', 'DAWorksheet4', 'DAWorksheet5'];
  for (let i = 0; i < nonExemptFields.length; i++) {
    const field = document.querySelector('[name$="' + nonExemptFields[i] + '"]');
    if (!enable) {
      field.disabled = true;
      continue;
    }
    field.disabled = false;
  }
}

function exemptChanged(el){
  "use strict";
  const EXEMPT_MESSAGE = "You have selected Exempt, certifying that you had no federal income tax liability in 2019 and you expect to have no federal income tax liability in 2020. Based on this selection, you should only complete steps 1a, 1b, and 5. Values from other steps have been removed. Remove your Exempt selection if you would like tax withheld.";
  if(el.selectedIndex==1){
    W4EnableDisableForAllowance('allowances',true);
    W4EnableDisable('additionalwithholding',true);
    alert(EXEMPT_MESSAGE);
    toggleNonExemptFields(false);
    return false;
  }
  toggleNonExemptFields(true);
  W4EnableDisableForAllowance('allowances',false);
  W4EnableDisable('additionalwithholding',false);
  onBlurW4Allowance(el);
  return true;
}

function eFormRequiredFieldByRole(sVal, sName, sID) {
  "use strict"; 
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  if ( document.querySelector('[name="' + sName + '"]').dataset.approver == 1 ) {
    return eFormRequiredField(sVal, sName, sID);
  }
  return true;
}

console.log('<$client.tEventManagers_17.UserGuid>');
console.log('<$client.tEventManagers_2.UserGuid>');
console.log('<$account.userguid>');

if ( <$client.env.eval(client.tEventManagers_17.UserGuid==account.userguid?'true':'false')> || <$client.env.eval(client.tEventManagers_2.UserGuid==account.userguid?'true':'false')> ) {
  const approverSignature = document.querySelector('#approver_signature');
  document.getElementById('approver_name').value = '<$client.account.username_first> <$client.account.username>';
  approverSignature.dataset.approver = 1;
  approverSignature.classList.add('ng-invalid');
  approverSignature.disabled = false;
  approverSignature.addEventListener('change', function() {
    signatureVerification('sv2')
  });
  approverSignature.addEventListener('focus', function() {
    openESig('modal2','over',this);
    document.getElementById('eSignature2').focus();
  });
}


function eFormValidateHyphenedSSN(sVal, sName, sID) {
  "use strict"; 
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  if (sVal.length < 1) {
    return eFormRequiredField(sVal, sName, sID);
  }
  if (!/^(?!000|666)[0-9]{3}([-]?)(?!00)[0-9]{2}\1(?!0000)[0-9]{4}$/.test(sVal)) {
    AddError(sID, 'Error in validation, should have ###-##-#### or ######### format in', '');
    return false;
  }
  return true;
}

var HOURLY_TITLES = ["administrative assistant", "intern", "accountant"];
var NON_PAID = ["intern coop engineer", "intern coop non engineer"];
function validateSalaryRate(sVal,sName,sID){
  "use strict"; 
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  if ( $.inArray($.trim(sVal).toLowerCase(), NON_PAID) >= 0) {
      var hourlyField = $('[data-salary-rate="hourly"]');
      return eFormRequiredField(hourlyField.val(),hourlyField.prop('name'),hourlyField.prop('id'));
  }

  if ( $.inArray($.trim(sVal).toLowerCase(), HOURLY_TITLES) < 0) {
      var annualField = $('[data-salary-rate="annual"]');
      return eFormRequiredField(annualField.val(),annualField.prop('name'),annualField.prop('id'));
  } else {
      var hourlyField = $('[data-salary-rate="hourly"]');
      return eFormRequiredField(hourlyField.val(),hourlyField.prop('name'),hourlyField.prop('id'));
  }
}

function validateInitials(sVal,sName,sID) {
  "use strict"; 
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  var target = document.querySelector('[name$=".Approver_' + sID.slice(-1) + '"]');
  if (sVal.length < 1) {
    return eFormRequiredField(sVal,sName,sID);
  }
  if (sVal != target.value.match(/\b(\w)/g).join('').toUpperCase()) {
    AddError(sID, 'Error in validation, Approver Name should match the', '');
    return false;
  }
  return true;
}

function requireTodayDate(sVal,sName,sID) {
  "use strict"; 
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  if (sVal.length < 1) {
    return eFormRequiredDate(sVal,sName,sID);
  }
  if (!moment().isSame(sVal, 'day')) {
    AddError(sID, 'Error in validation, please select today\'s date in', '');
    return false;
  }
  return true;
}
function requireZip(sVal,sName,sID) {
  "use strict"; 
  if('<$client.env.serversidevalidation>'=='1'){ return true; }
  if (sVal.length < 1) {
    return eFormRequiredDate(sVal,sName,sID);
  }
  return eFormPositiveCurrency(sVal,sName,sID);
}


function requireVisible(sValue, sName, sID) {
  "use strict";
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var field = document.querySelector('[name="' + sName + '"]');
  if (field.offsetParent != null) {
    return eFormRequiredField(sValue, sName, sID);
  }
  return true;
}

function requiredOptionalDate(sValue, sName, sID) {
  "use strict";
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var field = document.querySelector('[name="' + sName + '_display"]');
  var controller = document.querySelectorAll('[name$=".' + field.dataset.dependsOn + '"]');
  controller.forEach(function(entry) {
    if (!entry.checked) {
      return;
    }
    if (entry.value == field.dataset.requiredOn) {
      return eFormRequiredDate(sValue, sName, sID);
    }
  });
}

function requireAnyOfSiblings(sValue, sName, sID) {
  "use strict";
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var field = document.querySelector('[name="' + sName + '"]');
  var siblings = document.querySelectorAll('[data-siblings="' + field.dataset.siblings + '"]');
  var hasVal = false;
  siblings.forEach(function(entry) {
    if (entry.value.length > 0) {
      hasVal = true;
    }
  });
  if (hasVal) {
    return eFormPositiveCurrency(sValue, sName, sID)
  }
  AddError('', 'Error in validation, fill at least one of Exempt or Non-Exempt', '');
  return false;
}

function toggleableRequired(sValue, sName, sID) {
  "use strict";
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var controller = document.querySelector('[name="'+ sName + '"]');
  if (document.querySelector('[name$=".' + controller.dataset.dependsOn + '"]').checked) {
    return true;
  }
  return requireEnabled(sValue, sName, sID);
}

function requireEnabled(sValue, sName, sID) {
  "use strict";
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var field = thisForm.querySelector('[name="' + sName + '"]');
  if (!field.disabled) {
    return eFormRequiredField(sValue, sName, sID);
  }
}

function adminSASRequiredDate(sValue, sName, sID) {
  "use strict"; // SERVICES-40249 | Cleveland Clinic - RC - Badge Expiration Validation 
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var field = document.querySelector('[name="' + sName + '_display"]');
  if (!field.disabled) {
    return eFormRequiredDate(sValue, sName, sID);
  }
  if (field.disabled) {
    field.parentElement.querySelectorAll('input').forEach(function(input) {
      input.disabled = true;
    });
  }
}

const getInstance = function() {
  "use strict";
  return thisForm.querySelector('[name$=".display_version"]').getAttribute('name').split('.')[0];
}

console.log(getInstance());

function eFormAlphaNumeric(sValue, sName, sID) {
  "use strict";
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (sValue.length < 1) {
    return true;
  }
  if (!/^[a-zA-Z0-9]+$/.test(sValue)) {
    AddError(sID, 'Error in validation, only alphanumeric characters are allowed in', '');
    return false;
  }
  return false;
}

function eFormRequiredAlphaNumeric(sValue, sName, sID) {
  "use strict"; 
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (sValue.length < 1) {
    return eFormRequiredField(sValue, sName, sID);
  }
  return eFormAlphaNumeric(sValue, sName, sID);
}

function eFormRequireRequired(sValue, sName, sID) {
  "use strict"; 
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (document.querySelector('[name="' + sName +'"]').hasAttribute('required')) {
    return eFormRequiredField(sValue, sName, sID);
  }
  return false;
}

function ABI_eFormSSNFormat(sValue, sName, sField) {
  "use strict";
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (sValue.length < 1) {
    return true;
  }
  if (/^[0-9]{3}-[0-9]{2}-[0-9]{4}$/.test(sValue)) {
    return true;
  }
  if (/^[0-9]{9}$/.test(sValue)) {
    return true;
  }
  if (!/^([0-9]{9})|()$/.test(sValue)) {
    return false;
  }
  AddError(sField, 'Error in validation, only 9 or 11 digits with dashes eg.123456789 or 111-11-1111 are allowed in', '');
  return false;
}

function adminSASRequiredDate(sValue, sName, sID) {
  "use strict"; // SERVICES-40249 | Cleveland Clinic - RC - Badge Expiration Validation 
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var field = document.querySelector('[name="' + sName + '_display"]');
  if (!field.disabled) {
    return eFormRequiredDate(sValue, sName, sID);
  }
  if (field.disabled) {
    field.parentElement.querySelectorAll('input').forEach(function(input) {
      input.disabled = true;
    });
  }
}

(function enableFieldRole() {
  "use strict"; // SERVICES-40249 | Cleveland Clinic - RC - Badge Expiration Validation 
  const fields = document.querySelectorAll('[data-field-role]');
  fields.forEach(function(f) {
    let fieldRole = Number(f.dataset.fieldRole);
    if (!isNaN(fieldRole) && fieldRole > 0) {
      f.parentElement.querySelectorAll('input').forEach(function(i) {
        i.disabled = false;
      });
    }
  });
})();

function eFormRequireVisible(sValue, sName, sID) {
  "use strict"; // SERVICES-40858 | Wiley - RC - New Employee Profile Page
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var field = document.querySelector('[name="' + sName + '"]');
  var fieldDate = jQuery('[name="' + sName + '_display"]');
  if (fieldDate) {
    field = fieldDate;
  }
  if (!field.offsetParent) {
    return true;
  }
  if (fieldDate) {
    return eFormRequiredDate(sValue, sName, sID);
  }
  return eFormRequiredField(sValue, sName, sID);
}

function eFormRequireDepends(sValue, sName, sID) {
  "use strict";
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var field = document.querySelector('[name$="' + sName + '"]');
  var controller = document.getElementById(field.dataset.requirefield)
  if (controller.value != field.dataset.requirevalue) {
    return true;
  }
  return eFormRequiredField(sValue, sName, sID);
}

function eFormRequirePastDate(sValue, sName, sID) {
  "use strict"; // SERVICES-40858 | Wiley - RC - New Employee Profile Page
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var field = document.querySelector('[name="' + sName + '"]');
  if (!sValue.length) {
    return eFormRequiredField(sValue, sName, sID);
  }
  if (jQuery('[name="' + sName + '_display"]').length) {
    return eFormPastDate(sValue, sName, sID);
  }
}

function eFormValidatePhoneFormat(sValue, sName, sID) {
  "use strict"; // SERVICES-40989 | Old Republic Title- RC- Validations for EUP
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (sValue.length > 0 && !/^[1-9][0-9]{2}-[0-9]{3}-[0-9]{4}$/.test(sValue)) {
    AddError(sID, 'Error in validation, only 999-999-9999 is allowed in', '');
  }
}

function eFormValidatePhoneFormatRequried(sValue, sName, sID) {
  "use strict"; // SERVICES-40989 | Old Republic Title- RC- Validations for EUP
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (sValue.length < 1) {
    return eFormRequiredField(sValue, sName, sID);
  }
  eFormValidatePhoneFormat(sValue, sName, sID);
}

function eFormValidateRateFormat(sValue, sName, sID) {
  "use strict"; // SERVICES-40989 | Old Republic Title- RC- Validations for EUP
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (sValue.length > 0 && !/^[1-9][0-9]{1,7}\.[0-9]{2}$/.test(sValue)) {
    AddError(sID, 'Error in validation, only 99999999.99 format is allowed in', '');
  }
}

function eFormValidateCompRateFormat(sValue, sName, sID) {
  "use strict"; // SERVICES-40989 | Old Republic Title- RC- Validations for EUP
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (sValue.length > 0 && !/^[0-9]{1,8}\.[0-9]{4}$/.test(sValue)) {
    AddError(sID, 'Error in validation, only 99999999.9999 format is allowed in', '');
  }
}

function eFormValidateSSNO(sValue, sName, sID) {
  "use strict"; // SERVICES-40989 | Old Republic Title- RC- Validations for EUP
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (sValue.length < 1) {
    return true;
  }
  if (!/^[0-9]+$/.test(sValue)) {
    AddError(sID, 'Error in validation, non-numeric values not allowed in', '');
    return false;
  }
  if (!/[0-9]{9}/.test(sValue)) {
    AddError(sID, 'Error in validation, should be exactly 9 digits in', '');
    return false;
  }
  if (/^9/.test(sValue) || /^000/.test(sValue) || /^666/.test(sValue)) {
    AddError(sID, 'Error in validation, should not start at 9, 000, or 666 in', '');
    return false;
  }
  if (/^[0-9]{3}00/.test(sValue) || /^[0-9]{5}0000/.test(sValue)) {
    AddError(sID, 'Error in validation, should not have 00 in the middle or 0000 at the end in', '');
    return false;
  }
  if (/^123456789$/.test(sValue) || /^111111111/.test(sValue) || /^333333333/.test(sValue)) {
    AddError(sID, 'Error in validation, should not have value of 123456789, 111111111, or 3333333333 in', '');
    return false;
  }
}

function eFormValidateDeductons(sValue, sName, sID) {
  "use strict"; // SERVICES-40989 | Old Republic Title- RC- Validations for EUP
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (sValue.length > 0 && !/^[0-9]{1,11}$/.test(sValue)) {
    AddError(sID, 'Error in validation, only 99999999999 format is allowed in', '');
  }
}

function eFormNumericRequired(sValue, sName, sID) {
  "use strict"; // SERVICES-41156 | Ohmstede LTD - Custom Dispatch eForm
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (sValue.trim().length < 0) {
    return eFormRequiredField(sValue, sName, sID);
  }
  return eFormIsNumeric(sValue, sName, sID);
}

function eFormCurrencyRequired(sValue, sName, sID) {
  "use strict"; // SERVICES-41156 | Ohmstede LTD - Custom Dispatch eForm
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (sValue.trim().length < 0) {
    return eFormRequiredField(sValue, sName, sID);
  }
  return eFormPositiveCurrency(sValue, sName, sID);
}

function eFormRequiredTodate(sValue, sName, sID) {
  "use strict"; // SERVICES-39042 | Precise - Offer Letter Creation (Primary Offer Letter)
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (sValue.trim().length < 0) {
    return eFormRequiredDate(sValue, sName, sID);
  }
  var val = new Date(sValue).setUTCHours(0,0,0,0);
  var todate = new Date().setUTCHours(0,0,0,0);
  if (val != todate) {
    AddError(sID, 'Error in validation, please select today\'s date in', '');
    return false;
  }
  return true;
}

function requiredPhoneDigits(sValue, sName, sID) {
  "use strict"; // SERVICES-41070 | Bendix Commercial Vehicle Systems LLC - RC - Update eForm
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (sValue.trim().length < 0) {
    return eFormRequiredDate(sValue, sName, sID);
  }
  return phoneDigits(sValue, sName, sID);
}

function modifiedRequiredField(sValue, sName, sID) {
  "use strict"; // SERVICES-41070 | Bendix Commercial Vehicle Systems LLC - RC - Update eForm
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (eFormRequiredField(sValue, sName, sID)) {
    populateContents(fieldsConfig)
  }
}

function eFormNonHRRequired(sValue, sName, sID) {
  "use strict"; // SERVICES-41533 | JHUAPL: Edit Profile Page Assistance
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  // make optional for LeasedWorker_HR page
  if (!!document.getElementById('LeasedWorker_HR')) {
    return true;
  }
  return eFormRequiredField(sValue, sName, sID);
}

function eFormRequireByMiddleName(sValue, sName, sID) {
  "use strict"; // SERVICES-41533 | JHUAPL: Edit Profile Page Assistance
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (!!document.querySelector('[name="Middle_Name"]') && !!document.querySelector('[name="Middle_Name"]').value.length) {
    return true;
  }
  if (!document.querySelector('[name="' + sName + '"]').checked) {
    AddError('', 'Error in validation, please check \'No legal middle name\' if you have no Middle Name', '');
    return false;
  }
  return true;
}

function eFormRequireVisibleNumeric(sValue, sName, sID) {
  "use strict"; // SERVICES-41387
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if(eFormRequiredField(sValue, sName, sID) && !/\d/.test(sValue)) {
    AddError(sID, 'Error in validation, only numeric values are allowed in', '');
    return false;
  }
  return true;
}

function eFormValidateCarloan(sValue, sName, sID) {
  "use strict"; // SERVICES-41675
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if(sValue.length && !/\d/.test(sValue)) {
    AddError('', 'Error in validation, only numeric values are allowed in Monthly Auto Allowance Amount', '');
    return false;
  }
  var amount = Number(sValue)
  var MAX_LOAN = 550;
  if(amount >= MAX_LOAN) {
    AddError('', 'Error in validation, amount should not exceed ' + MAX_LOAN + ' in Monthly Auto Allowance Amount', '');
    return false;
  }
  return true;
}

(function() {
  "use strict";
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.msMatchesSelector || 
      Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
      var el = this;
      do {
        if (Element.prototype.matches.call(el, s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }
  // SERVICES-41996 | disallow Attorney Recruiting and Development Team from editing SSN field
  var ssnField = document.querySelector('[name$=".SSNO"]')
  if (!!Number(ssnField.dataset.ard)) {
    document.querySelector('[name$=".SSNO"]').closest('.trEUPField').style.display = 'none';
  }
})();

function ValidateKKOORa01_IRD(sVal, sName, sID) {
    if ('<$client.env.serversidevalidation>' == '1') {  return true; }
    document.querySelector('[name="' + sName + '"]').classList.add('ng-invalid');
    eFormRequiredField(sVal,sName,sID);
    eFormIsNumeric(sVal,sName,sID);
}

function validate_Hosp_Emp_ID_Clock(sVal, sName, sID){
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  if(document.querySelector('[name$=".Hire_Custom_Field5"]') && document.querySelector('[name$=".Hire_Custom_Field5"]').value == "Yes"){
   return eFormRequiredField(sVal, sName, sID);
 }
 return true;
}
function validate_Hire_Offer_Custom_Field9(sVal, sName, sID){
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  if(!document.querySelector('[name$=".Job_Custom_Field18"]') || document.querySelector('[name$=".Job_Custom_Field18"]').value != "5"){
    return true;
 }
 if (!eFormRequiredField(sVal, sName, sID)) {
  return false;
 }
 if (!/^[0-9]+$/.test(sVal) || sVal.length > 2) {
  AddError(sID, 'Error in validation, only allowed values are 2 digits in', '');
  return false;
 }
 return true;
}

function validateRequireByRadio(sVal, sName, sID) {
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  var field = document.querySelector('[name="' + sName + '"]')
  var radioChecked;
  document.querySelectorAll('[name$=".' + field.dataset.requireByRadio + '"]').forEach(function(r) {
    if (r.checked) {
      radioChecked = r;
    }
  });
  if (!radioChecked) {
    return true;
  }
  if (radioChecked.value != field.dataset.requireByRadioValue) {
    return true;
  }
  return eFormRequiredField(sVal, sName, sID);
}

function validateRequireByDep(sVal, sName, sID) {
  if ('<$client.env.serversidevalidation>' == '1') {  return true; }
  var field = document.querySelector('[name="' + sName + '"]')
  var dep = document.querySelector('[name$=".' + field.dataset.requireBy + '"]')
  if (!dep) {
    return true;
  }
  if (field.dataset.requireByValue.indexOf(dep.value) >= 0) {
    field.classList.add('ng-invalid');
    return true;
  }
  field.classList.remove('ng-invalid');
  return eFormRequiredField(sVal, sName, sID);
}

function eFormRequiredTodayDate_Custom(sValue,sName,sField){
    if('<$client.env.serversidevalidation>' == '1'){return true;}
    var dval = ''; 
    if (sValue.length) {
      dval = moment($('[name="' + sName + '_display"]').datepicker('getDate')).format('YYYY-MM-DD'); // set to readable date
    }
    if (!eFormRequiredDate(dval,sName,sField)) {
        return false;
    }
    if (!moment().isSame(dval,'day')) {
        AddError(sField, 'Please select today\'s date in', '');
        return false;
    }
    return true;
}

function eFormValid8Digits(sValue,sName,sField){
    if('<$client.env.serversidevalidation>' == '1'){return true;}
    if (!sValue.length) {
      return true;
    }
    if (!eFormIsNumeric(sValue,sName,sField)) {
        return false;
    }
    if (sValue.length != 8) {
        AddError(sField, 'Please type in 8 digits in', '');
        return false;
    }
    return true;
}

function requireOnePrimary(sValue,sName,sField){
    if('<$client.env.serversidevalidation>' == '1'){return true;}
    var hasChecked = false;
    document.querySelectorAll('[name$=".contact_primary_1"], [name$=".contact_primary_2"]').forEach(function(c) {
      if (c.checked) {
        hasChecked = true;
      }
    });
    if (!hasChecked) {
      AddError(sField, 'Error in validation, please select primary contact in', '');
      return false;
    }
    return true;
}

function validateName(sValue,sName,sField){
    if('<$client.env.serversidevalidation>' == '1'){return true;}
    if (!/^[A-Za-z ]+$/.test(sValue)) {
      AddError(sField, 'Error in validation, only upper and lowercase letters are allowed in', '');
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

function nameValidation(sValue,sName,sField){
    if('<$client.env.serversidevalidation>' == '1'){return true;}
    if (sValue.length < 1) {
      return true;
    }
    if (!/^[-A-Z ',]+$/.test(sValue)) {
      AddError(sField, 'Error in validation, only uppercase letters, hyphen, apostrophy, and comma are allowed in', '');
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
      AddError(sField, 'Error in validation, only uppercase letters, numbers, hyphen, apostrophy, and comma are allowed in', '');
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


function requireWhenVisible(sValue,sName,sField){
    if('<$client.env.serversidevalidation>' == '1'){return true;}
    var dateField = document.querySelector('[name="' + sName + '_display"]');
    if (dateField && dateField.offsetParent != null) {
      return eFormRequiredDate(sValue,sName,sField);
    }
    if (document.querySelector('[name="' + sName + '"]').offsetParent == null) {
      return true;
    }
    return eFormRequiredField(sValue,sName,sField);
}


function requireSendFrom(sValue,sName,sField){
  'use strict';
    if('<$client.env.serversidevalidation>' == '1'){return true;}
    if (!document.querySelector('[name="' + sName + '"]').checked) {
      return true;
    }
    var sendFrom = ['z02_check', 'z03_check'];
    var checked = false;
    sendFrom.forEach(function(cbx) {
      if (document.querySelector('[name$=".' + cbx + '"]').checked) {
        checked = true;
      }
    })
    if (checked) {
      return true;
    }
    AddError('', 'Error in validation, please select from one of "Send From" emails', '');
    return false;
}

function eFormRequiredFieldFrench(sValue,sName,sField){
  'use strict';
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  if (sValue.length > 0) {
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

const el = document.getElementById('uploadfile');
const file = el.files[0];
console.log(file)

setInterval(function() {
  document.querySelectorAll('.appGenTxt').forEach(function(title) {
    if (!title.value != 'Proof of COVID-19 Vaccination') {
      title.value = 'Proof of COVID-19 Vaccination';
    }
  });
}, 1000);

function uploadRequiredVisible(){
  'use strict';
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  var field = document.querySelector('[name$=".UploadDocument"]');
  if (field.offsetParent == null) {
    return true;
  }
  return eFormRequiredField(field.value, field.name, 'UploadDocument');
}

function eFormNameValidCase(sVal,sName,sID){
  'use strict';
  if('<$client.env.serversidevalidation>' == '1'){return true;}
  if(/\b[a-z]/.test(sVal)) {
    AddError(sID, 'Error in validation, should start with uppercase in', '');
    return false;
  }
  if (/\b[A-Z]{2,}/.test(sVal)) {
    AddError(sID, 'Error in validation, multiple uppercase not allowed in', '');
    return false;
  }
  return true;
}