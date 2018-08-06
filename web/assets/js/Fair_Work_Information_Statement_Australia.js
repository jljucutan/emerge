$(window).on('load', function() {
    $("#buttonCancel").removeClass().addClass("lifesuite__button").prop('id','ButtonCancel');
    $("#buttonSave").removeClass().addClass("lifesuite__button primary").prop('id','ButtonSave');
    $("#buttonSaveAndComplete").removeClass().addClass("lifesuite__button primary").removeAttr('onclick').prop('id','ButtonSaveAndComplete');
    $("#buttonPrint").removeClass().addClass("lifesuite__button primary").removeAttr('onclick').prop('id','ButtonPrint');
    $("#buttonPreviewDelete").removeClass().addClass("lifesuite__button").prop('id','ButtonPreviewDelete');
    $("#buttonPreviewSave").removeClass().addClass("lifesuite__button primary").prop('id','ButtonPreviewSave');
    $("#buttonComplete").removeClass().addClass("lifesuite__button primary").prop('id','ButtonComplete');
    /*document.getElementById('formButtons').style.display = "block";*/
    $("input[type=text]").addClass('lifesuite__text-input');
    $("input[type=text].hasDatepicker").addClass('dateField');
    $("select").addClass('lifesuite__select-input');
    $("input[type=radio]").addClass('lifesuite__radio');
    $("input[type=checkbox]").addClass('lifesuite__checkbox');
    $("textarea").addClass('lifesuite__textarea-input');
    $('label').addClass('lifesuite__input-label lifesuite__input—block');
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var groupField2 = document.getElementsByClassName('groupField2');
// if(isFilled(groupField2)){
//     sectionToggle('AdditionalAccounts,Account1,deleteAccount','block');
// }

var groupField3 = document.getElementsByClassName('groupField3');
// if(isFilled(groupField3)){
//     sectionToggle('Account2','block');
//     sectionToggle('addAccount','none');
// }

if(strFormCompleted!=''){
    document.getElementById('actionButtons').style.display = 'none';
}

$(function() {

    $('#fair-work-information-statement').on('click', '.fancyBox', function() {
        validateField($('#Ack1'));
    });

    $('#fair-work-information-statement').on('change blur', 'input:visible:not(#signature):not(:button), select:visible', function() {
        validateField($(this));
    });

    $('#modal').on('click', '#signature-sign', function() {
        validateSignature('signature','eSignature1','full_name','modal','over','sv','Date');
        xbObj('eSignature1').value='';
        validateField($('#signature'));
    });
    $('#modal').on('click', '#signature-clear', function() {
        xbObj('signature').value='';showHide('modal');showHide('over');xbObj('eSignature1').value='';
        if (typeof targetdatecheckCLEAR == 'function' ){targetdatecheckCLEAR('signature','Date');}
        validateField($('#signature'));
    });

    $('#fair-work-information-statement').on('click', '#ButtonPrint, #buttonPrint, #ButtonSaveAndComplete, #buttonSaveAndComplete', function(e) {
        e.preventDefault();
        var formIsValid = true, btn = $(this); 
        $.each($('#fair-work-information-statement input[type="text"]:visible:not(:button), #fair-work-information-statement input[type="checkbox"]'), function(k, v) { 
          if(false == validateField($(v)) && $(v).is(':visible')) { // we are validating only visible fields 
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
