$(window).load(function() { 
        $("#buttonCancel").removeClass("appInputButton RCappInputButtonOrange RCappInputButtonBlue"); 
        $("#buttonCancel").addClass("lifesuite__button"); 
        $('#buttonCancel').attr('id','ButtonCancel'); 
        $("#buttonSave").removeClass("appInputButton RCappInputButtonBlue"); 
        $("#buttonSave").addClass("lifesuite__button primary"); 
        $('#buttonSave').attr('id','ButtonSave'); 
        $("#buttonSaveAndComplete").removeClass("appInputButton RCappInputButtonBlue"); 
        $("#buttonSaveAndComplete").addClass("lifesuite__button primary"); 
        $('#buttonSaveAndComplete').attr('id','ButtonSaveAndComplete'); 
        $("#buttonPrint").removeClass("appInputButton RCappInputButtonOrange RCappInputButtonBlue"); 
        $("#buttonPrint").addClass("lifesuite__button"); 
        $('#buttonPrint').attr('id','ButtonPrint'); 
        $("#buttonPreviewDelete").removeClass("appInputButton RCappInputButtonRed"); 
        $("#buttonPreviewDelete").addClass("lifesuite__button"); 
        $('#buttonPreviewDelete').attr('id','ButtonPreviewDelete'); 
        $("#buttonPreviewSave").removeClass("appInputButton RCappInputButtonBlue"); 
        $("#buttonPreviewSave").addClass("lifesuite__button primary"); 
        $('#buttonPreviewSave').attr('id','ButtonPreviewSave'); 
        $("#buttonComplete").removeClass("appInputButton RCappInputButtonBlue"); 
        $("#buttonComplete").addClass("lifesuite__button primary"); 
        $('#buttonComplete').attr('id','ButtonComplete'); 
       document.getElementById('formButtons').style.display = "block"; 
        $("input[type=text]").addClass('lifesuite__text-input'); 
        $("input[type=text].hasDatepicker").addClass('dateField'); 
        $("select").addClass('lifesuite__select-input'); 
        $("input[type=radio]").addClass('lifesuite__radio'); 
        $("input[type=checkbox]").addClass('lifesuite__checkbox'); 
        $("textarea").addClass('lifesuite__textarea-input'); 
        $('label').addClass('lifesuite__input-label lifesuite__input—block'); 
}); 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
$(document).on('ready', function() {
    (function($) {
        $.fn.disableDate = function() {
          $(this).parent().find('input[type="button"]').prop("disabled", true);
          return $(this);
        }
        $.fn.disableField = function() {
          $(this).prop('disabled', true).css({'background': '#ccc', 'border': '1px solid #707070'});
          return $(this);
        }
        $.fn.radioSelectOne = function() {
            var radioDataName = $(this).attr('data-radio'),
                hasOne = false;
            $.each($('[data-radio="' + radioDataName + '"]'), function(k, v) {
                if ($(v).is(":checked")) {
                    hasOne = true;
                }
                $(v).prop('checked', false);
            });
            if (hasOne) {
                $(this).prop('checked', true);
            }
        };
    } (jQuery));
    $('[data-radio]').click(function() {
        $(this).radioSelectOne();
    });
    $('#current_user').val("<$client.account.username_first> <$client.account.username>");

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
