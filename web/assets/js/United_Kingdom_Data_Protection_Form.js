$(function() {
    $('#formButtons button:not(#ButtonSave)').removeAttr('onclick');
    $('#modal').on('click', '#signature-clear', function() {
        xbObj('signature').value='';showHide('modal');showHide('over');xbObj('eSignature1').value='';
        if (typeof targetdatecheckCLEAR == 'function' ){targetdatecheckCLEAR('signature','date');}
        $('#date_mapped').val($('[data-date-mapped="#date_mapped"]').val());
        validateField($('#signature'));
    });

    $('#ButtonPrint, #buttonPrint, #ButtonSaveAndComplete, #buttonSaveAndComplete').on('click', function(e) {
    var formIsValid = true, btn = $(this);
    e.preventDefault();
    $.each($('#uk-data-protection-form input:visible:not(:button):not([disabled])'), function(k, v) {
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

});
