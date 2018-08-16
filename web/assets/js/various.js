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


function requireOne(sVal, sName, sID) {
  var isValid = true;
  if('<$client.env.serversidevalidation>' == '1'){return isValid;}
  if ($('[data-checkbox-group="' + $(document.getElementById(sID)).data('checkbox-group') + '"]:checked').length < 1) {
    isValid = false;
    return eFormRequiredField(sVal, sName, sID);
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

function requireWhenEnabled(sValue, sName, sField) {
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var field = $(document.getElementsByName(sName)[0]).is(':visible') ? $(document.getElementsByName(sName)[0]) : $(document.getElementsByName(sName  + "_display")[0]);
  if (!field.prop('disabled') && field.val().length < 1) {
    return eFormRequiredField(sValue, sName, sField);
  }
  return true;
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
