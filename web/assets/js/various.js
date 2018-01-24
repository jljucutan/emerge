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
