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
