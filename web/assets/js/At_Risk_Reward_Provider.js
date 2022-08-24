/**
 * SERVICES-42773 | jjucutan | PayPal - Offboarding - At Risk Wizard
 */

let fields_config = '';
let fieldsPromise = $.getJSON(FIELDS_CONFIG, function(data) {
  fields_config = data.fields;
});
const focusInputLabel = function(el, isFocused) {
    "use strict";
    try {
        let label = el.closest('.input_wrapper')
            .find('span.floating-label')
            .removeClass('label-focus')
            .css({"color": "#666666"});
        if (el[0].value.trim().length > 0 || isFocused) {
            label.addClass('label-focus');
        }
        if (isFocused === true) {
            label.css({"color": "#0070BA"});
        }
    }
    catch(err) {
        console.error(el)
        console.error(err);
    }
}
const fieldHasVal = function(el) {
    "use strict";
    let hasVal = false;
    $.each(el, function(k, v) {
        if ($(v).val().length) {
            hasVal = true;
        }
    });
    return hasVal;
}
const isCheckboxChecked = function(el) {
    "use strict";
    let hasChecked = false;
    $.each(el, function(k,v){
        if ($(v).is(':checked')) {
            hasChecked = true;
        }
    });
    return hasChecked;
}
const setDefaultValue = function(el, defaultValue) {
    "use strict";
    if (el.is('input[type="checkbox"]') || el.is('input[type="radio"]')) {
        if (isCheckboxChecked(el) === false) {
            $.each(el, function(k,v) {
                if ($(v).val() === defaultValue) {
                    $(v).prop('checked', 'checked');
                }
            });
        }
    }
    if (el.is('select') && el.val().length < 1 && el.find('option[value="' + defaultValue + '"]').length > 0) {
        el.val(defaultValue);
    }
    if (el.is('select') && el.val().length < 1 && el.find('option:contains(' + defaultValue + ')').length > 0) {
        el.val(el.find('option:contains(' + defaultValue + ')').prop('value'));
    }
    if (el.is('input[type="text"]') && el.val().trim().length < 1) {
        el.val(defaultValue);
    }
}
// email validator
const EMAIL_REG = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const emailFormatValidator = function() {
  "use strict";
  let isValid = true;
  let message = '';
  if (!EMAIL_REG.test($('#Email').val())) {
    isValid = false;
    message = 'Please enter a valid email address.';
  }
  return {
    "isValid": isValid,
    "message": message
  }
}
const separationValidator = function() {
  "use strict";
  let isValid = true;
  let message = '';
  let notificationDate = NOTIFICATION_DATE;
  let separationDate = $('#Separation_Date').datepicker('getDate');
  if (moment(separationDate).diff(notificationDate, 'days') <= 15) {
    isValid = false;
    message = 'Separation Date must be at least 15 days past the Notification Date.';
  }
  return {
    "isValid": isValid,
    "message": message
  }
}

const getRetentionAmount = function(specialEventRetentionDate) {
    "use strict";
    const offboarding_RetentionBonusAmtField = $('[name$=".Offboarding_RetentionBonusAmt"]');
    const YEAR_WEEKS = 52;
    const MIN_WEEKS = 4;
    const retentionDate = $('#Special_Event_Retention_Date_pseudo').datepicker('getDate');
    let weeksDiff = moment(retentionDate).diff(NOTIFICATION_DATE, 'weeks');
    if (weeksDiff <= MIN_WEEKS) {
        offboarding_RetentionBonusAmtField.val('0.00')
        return;
    }
    console.log(weeksDiff)
    let standardBonus = (Number($('[name$=".BaseMonthly70"]').val()) / YEAR_WEEKS) * ((weeksDiff - MIN_WEEKS) / 2);
    offboarding_RetentionBonusAmtField.val(new Intl.NumberFormat().format(standardBonus.toFixed(2)));
}    

$(window).on('load', function() {
    $('.floating-label span').css('color', 'rgb(102, 102, 102)');
    $('.cal_and_button').prop('cellpadding', 0).prop('cellspacing', 0);
    let isProfileCompleted = sTaskComplete;
    // replace default submit button with paypal styled
    $('#TaskSummary_ButtonCancel').detach().appendTo('#cancel').show();
    if (!isProfileCompleted) {
        $('#TaskSummary_ButtonSave').prop('onclick', null).unbind('click').detach().appendTo('#saveandcomplete').show().text('Continue');
        $('#EUPDefaultSaveButton').prop('onclick', null).unbind('click').detach().appendTo('#save').show();
    }

    // set notification date
    $('#Notification_Date_pseudo').val(moment(NOTIFICATION_DATE).format('DD-MMM-YYYY'))
    $('[name$=".Notification_Date_display"]').datepicker('setDate', new Date(NOTIFICATION_DATE))

    // additional severage default value
    setDefaultValue($('[name$=".Special_Event_Override_Severance_Weeks"]'), (SPECIAL_EVENT_OVERRIDE_SEVERANCE_WEEKS || 4));
    setDefaultValue($('#Special_Event_Override_Severance_Weeks_pseudo'), (SPECIAL_EVENT_OVERRIDE_SEVERANCE_WEEKS || 4));
    // set default Cobra Eligibility value
    setDefaultValue($('[name$=".Cobra_Eligibility_Special_Event_Override"]'), 12);
    // prepend 00 to employee id
    if ($('[name$=".Employee_ID"]').length && !/^00/.test($('[name$=".Employee_ID"]').val())) {
        $('[name$=".Employee_ID"]')
            .val($('[name$=".Employee_ID"]').val().replace(/^0+/, ''))
            .val('00' + $('[name$=".Employee_ID"]').val());
    }

    // force default value for event name
    $('[name$=".Event_Name"]').val(EVENT_NAME);
    // force salary level value override persistnet field value due to caching
    $('[name$=".SalaryGradeLvl"]').val(SALARY_GRADE_LVL);

    // toggle warn eligible on work location change
    const toggleWarn = function(location) {
        if (location.indexOf('USA-CA') < 0) {
            $('[name$=".Warn_Eligible"]').closest('.input_wrapper').hide();
            return;
        }
        $('[name$=".Warn_Eligible"]').closest('.input_wrapper').show();
    }
    toggleWarn($('[name$=".Work_Location"]').val());
    $('[name$=".Work_Location"]').on('change', function() {
        toggleWarn(this.value);
        $('[name$=".Warn_Eligible"][value="N"]').prop('checked', true);
        validateField($('[name$=".Warn_Eligible"]'), true);
    });        

    const toggleCollectiveDeps = function() {
        "use strict";
        switch(REDUNDANCY_TYPE) {
            case 'CompCollective':
            $('[name$=".Reps_Appointed_Date_display"], [name$=".Selection_Criteria_Text"], [name$=".Selection_Criteria"]').closest('.input_wrapper').show();
            break;
            case 'CompGroup':
            $('[name$=".Selection_Criteria_Text"], [name$=".Selection_Criteria"]').closest('.input_wrapper').show();
            break;
            default:
            $('[name$=".Reps_Appointed_Date_display"], [name$=".Selection_Criteria_Text"], [name$=".Selection_Criteria"]').val('').closest('.input_wrapper').hide();
            validateField($('[name$=".Reps_Appointed_Date_display"]'), true);
            validateField($('[name$=".Selection_Criteria_Text"]'), true);
            break;
        }
    }
    toggleCollectiveDeps();
    if (REDUNDANCY_TYPE == 'CompCollective' ) {
        $('[name$=".Reps_Appointed_Date_display"]').data('validation', 'required');
    }
    
    $('[name$=".I_Separation_Policy_Ack_Docs"]').on('change', function() {
        validateField($(this), false, separationPolicy);
    });
    $('[name$=".IE_Enhanced_Separation_Policy_Ack_Documents"]').on('change', function() {
        validateField($(this), false, enhancedSeparationPolicy);
    });
    // toggles selection criteria field required validation
    const toggleSelectionCriteriaTextValidation = function(val) {
        'use strict'
        if (val && val == 'Y') {
            $('[name$=".Selection_Criteria_Text"]').closest('.input_wrapper').show(); // 2022_07_28 | psaludares | SERVICES-45034
            $('[name$=".Selection_Criteria_Text"]').data('validation', 'required')
            return
        }
        $('[name$=".Selection_Criteria_Text"]').data('validation', null)
        $('[name$=".Selection_Criteria_Text"]').val('').closest('.input_wrapper').hide() // 2022_07_28 | psaludares | SERVICES-45034
        validateField($('[name$=".Selection_Criteria_Text"]'), true)
    }
    // toggles selection criteria field required validation on load
    toggleSelectionCriteriaTextValidation($('[name$=".Selection_Criteria"]:checked').val()) 
    $('[name$=".Selection_Criteria"]').on('change', function(e) {
        // toggles selection criteria field required validation on change
        toggleSelectionCriteriaTextValidation(e.target.value)
    });
    // toggle display AIP separation date
    const toggleAIPSeparationDateDisplay = function(val) {
        'use strict'
        if (val && val == 'AIP') {
            $('[name$=".AIP_Separation_Date_display"]').closest('.input_wrapper').show()
            return
        }
        // clear AIP separation date and hide section
        $('[name$=".AIP_Separation_Date_display"]').val('').closest('.input_wrapper').hide()
        validateField($('[name$=".AIP_Separation_Date_display"]'), true)
    }
    // filter bonus types list
    $('[name$=".Bonus"] option').each(function(_, opt) {
        const ALLOWED_BONUSES = ['', 'AIP', 'None']
        if (ALLOWED_BONUSES.indexOf(opt.value) < 0) {
            $(opt).remove()
        }
    })
    // toggle aip separation date on load
    toggleAIPSeparationDateDisplay($('[name$=".Bonus"]').val())
    $('[name$=".Bonus"]').on('change', function(e) {
        // toggle aip separation date on change
        toggleAIPSeparationDateDisplay(e.target.value)
    });

    const separationPolicy = function() { 
        "use strict";
        let isValid = true; 
        let message = ""; 
        let checkedBoxes = $('[name$=".I_Separation_Policy_Ack_Docs"]:visible').filter(":checked").length;
        if(checkedBoxes<1){                
                isValid = false;
                $('[id$="I_Separation_Policy_Ack_Docs_label"]:visible').addClass('label-has-error');
        }
        else
                $('[id$="I_Separation_Policy_Ack_Docs_label"]:visible').removeClass();
        return { 
                "isValid": isValid,
                "message": message
        } 
    }; 

    const enhancedSeparationPolicy = function() { 
        "use strict";
        let isValid = true; 
        let message = ""; 
        let checkedBoxes = $('[name$=".IE_Enhanced_Separation_Policy_Ack_Documents"]:visible').filter(":checked").length;
        if(checkedBoxes<1){                
                isValid = false;
                $('[id$="IE_Enhanced_Separation_Policy_Ack_Documents_label"]:visible').addClass('label-has-error');
        }
        else
                $('[id$="IE_Enhanced_Separation_Policy_Ack_Documents_label"]:visible').removeClass();
        return { 
                "isValid": isValid,
                "message": message
        } 
    }; 

    // load form when all set
    $('#EditProfile_wrapper').fadeIn();

    // show retention
    if (RETENTION != "Retention Eligible - Yes") {
        $('[name$="Retention"], [name$="Retention_Eligible"]').val('').closest('.input_wrapper').hide();
    }

    const toggleRetentionDate = function(v) {
        if (v != 'Retention Eligible - Yes') {
            $('#Special_Event_Retention_Date_pseudo').closest('.input_wrapper').hide();
            // update hidden retention date
            $('[name$=".Special_Event_Retention_Date"]').val('');
            return;
        }
        focusInputLabel($('#Special_Event_Retention_Date_pseudo'));
        $('#Special_Event_Retention_Date_pseudo').closest('.input_wrapper').show();
        // update hidden retention date
        $('[name$=".Special_Event_Retention_Date"]').val(SPECIAL_EVENT_RETENTION_DATE);
    }
    const retentionEligibleField = $('[name="Retention_Eligible"]');
    retentionEligibleField.on('change', function(e) {
        toggleRetentionDate(e.target.value);
    });
    toggleRetentionDate(retentionEligibleField.val());

    const toggleEnhancedPolicyDocuments = function(eventBased) {
        "use strict";
        // separation policy that depends on salary grade
        $('[name$=".I_Separation_Policy_Ack_Docs"]').each(function() {
            if (this.value == 4 && (SALARY_GRADE_LVL < 28 || SALARY_GRADE_LVL > 29)) {
                $(this).prop('checked', false).closest('.checkbox_item').hide();
            }
            if (this.value == 5 && SALARY_GRADE_LVL > 27) {
                $(this).prop('checked', false).closest('.checkbox_item').hide();
            }
        });
        // hide Bright Horizons Care Solutions Support for ireland events
        if (EVENT_NAME == "Ireland Offboarding") {
            $('[name$=".IE_Enhanced_Separation_Policy_Ack_Documents"][value="11"], [name$=".IE_Enhanced_Separation_Policy_Ack_Documents"][value="6"]').prop('checked', false)
                .closest('.checkbox_item')
                .hide();
        }
        if ($('#Enhanced_Program_Eligible_pseudo').val() == 'Y') {
            if (eventBased) {
                $('#IE_Enhanced_Separation_Policy_Ack_Documents').find('input[type="checkbox"]').each(function() {
                    if ( this.value == '6') {
                        return;
                    }
                    if (EVENT_NAME == "Ireland Offboarding" && this.value == '11') {
                        return;
                    }
                    $(this).prop('checked', 'checked');
                });
                setDefaultValue($('[name$=".Special_Event_Override_Severance_Weeks"]'), (SPECIAL_EVENT_OVERRIDE_SEVERANCE_WEEKS || 4));
                setDefaultValue($('#Special_Event_Override_Severance_Weeks_pseudo'), (SPECIAL_EVENT_OVERRIDE_SEVERANCE_WEEKS || 4));
            }
            $('#Special_Event_Override_Severance_Weeks_pseudo, #Additional_Severance_Pay_pseudo').closest('.input_wrapper').show();
            $('[id$="IE_Enhanced_Separation_Policy_Ack_Documents_label"]').removeClass('label-has-error');
            $('#IE_Enhanced_Separation_Policy_Ack_Documents').show();
            $('#Special_Event_Override_Severance_Weeks_pseudo').closest('.input_wrapper').show();
            focusInputLabel($('#Special_Event_Override_Severance_Weeks_pseudo'));
            focusInputLabel($('#Additional_Severance_Pay_pseudo'));
            validateField($('#Special_Event_Override_Severance_Weeks_pseudo'), true);
            return;
        }
        $('#Special_Event_Override_Severance_Weeks_pseudo, #Additional_Severance_Pay_pseudo').closest('.input_wrapper').hide();
        $('#IE_Enhanced_Separation_Policy_Ack_Documents').hide().find('input[type="checkbox"]').prop('checked', false);
    }
    toggleEnhancedPolicyDocuments();
    $('#Enhanced_Program_Eligible_pseudo').on('change', function() {
        toggleEnhancedPolicyDocuments(true);
        // check real Enhanced_Program_Eligible field hidden
        $('[name$=".Enhanced_Program_Eligible"][value="' + this.value + '"]').prop('checked', true);
    });

    // datepickers
    $('#Separation_Date, #Business_Case_Approval_Date_pseudo, [name$=".AIP_Separation_Date"]')
      .datepicker({
        dateFormat: 'dd-M-yy',
        changeMonth: true,
        changeYear: true,
        yearRange: "-100:+100",
        onSelect: function(dateText, instance) {
            validateField($(this)); 
            focusInputLabel($(this));
        }
      });
    // datepickers default value

    (EVENT_NAME == 'US Enhanced Offboarding' && $('[name$=".Bonus"]').val() == 'AIP') && !$('[name$=".AIP_Separation_Date"]').datepicker('getDate') && $('[name$=".AIP_Separation_Date"]').datepicker('setDate', new Date(SEPARATION_DATE));
    $('#Separation_Date').datepicker('setDate', new Date(SEPARATION_DATE)).on('change', function() {
        $('[name$=".Retention"]').trigger('change');
    });

    if (BUSINESS_CASE_APPROVAL_DATE.length) {
      $('#Business_Case_Approval_Date_pseudo').datepicker('setDate', BUSINESS_CASE_APPROVAL_DATE)
    }
    $('#Business_Case_Approval_Date_pseudo').datepicker("option", "onSelect", function(dateText, instance) {
      $('[name$=".Business_Case_Approval_Date_display"]', providerContext).datepicker('setDate', $(this).datepicker('getDate'));
      validateField($(this)); 
      focusInputLabel($(this));
    });

    // concatenated date
    // removed offboarding business unit <$client.tEventCategories_Category_44.Value>_
    let businessCase = "USA_" + moment(NOTIFICATION_DATE).format('MM/DD/YYYY');
    $('#HR_Business_Case').val(businessCase);
    $('[name$=".HR_Business_Case"]').val(businessCase);

    $('#Special_Event_Retention_Date_pseudo').data('date-enabled', false)
        .datepicker({
            changeMonth: true,
            changeYear: true,
            yearRange: "-100:+100",
            dateFormat: 'dd-M-yy',
            onSelect: function(dateText, instance) {
                let dt = $(this).datepicker('getDate');
                let dtObj = null;
                let dtStr = '';
                if (!!dt) {
                    let yyyy = '' + dt.getFullYear();
                    let mm = '' + (dt.getMonth() + 1);
                    let dd = '' + dt.getDate();
                    if (mm.length < 2) {
                        mm = ('0' + mm);
                    }
                    if (dd.length < 2) {
                        dd = ('0' + dd)
                    }
                    dtObj = dt;
                    dtStr = yyyy + '-' + mm + '-' + dd;
                }
                $('[name$=".Special_Event_Retention_Date_display"]').datepicker('setDate', dtObj);
                $('[name$=".Special_Event_Retention_Date"]').val(dtStr);
                if ($('[name$=".Retention"]').val() == 'Standard') {
                    getRetentionAmount($(this));
                }
                focusInputLabel($(this));
                validateField($(this));
            }
        });
    if (SPECIAL_EVENT_RETENTION_DATE.length) {
        $('#Special_Event_Retention_Date_pseudo').datepicker('setDate', new Date(SPECIAL_EVENT_RETENTION_DATE));
    }

    // retention bonus amount calculation
    $('[name$=".Retention"]').val() != 'Customized' && getRetentionAmount($('#Special_Event_Retention_Date_pseudo'));
    // retention change 
    const toggleRetentionAmt = function(e) {
        if (e && $('[name$=".Retention"]').val() != "Standard") {
            // event should trigger blank
            $('[name$=".Offboarding_RetentionBonusAmt"]').val('');
        }
        if ($('[name$=".Retention"]').val() == "Customized") {
            $('[name$=".Offboarding_RetentionBonusAmt"]').val(OFFBOARDING_RETENTIONBONUSAMT).closest('.input_wrapper').show();
            focusInputLabel($('[name$=".Offboarding_RetentionBonusAmt"]'));
            return;
        }
        if ($('[name$=".Retention"]').val() == "Standard") {
            getRetentionAmount($('#Special_Event_Retention_Date_pseudo'));
        }
        $('[name$=".Offboarding_RetentionBonusAmt"]').closest('.input_wrapper').hide();
        validateField($('[name$=".Offboarding_RetentionBonusAmt"]'), true);
    }
    toggleRetentionAmt();
    $('[name$=".Retention"]').on('change', toggleRetentionAmt);

    // focus style text and select fields
    $('form').on('focus', 'input[type="text"]:visible, select:visible, textarea:visible', function() {
        focusInputLabel($(this), true);
    }).on('blur', 'input[type="text"], select, textarea', function() {
        focusInputLabel($(this));
    });
    // focus style date fields
    $('form').on('focus change', 'input.hasDatepicker', function() {
        focusInputLabel($(this), true);
    }).on('blur change', 'input.hasDatepicker', function() {
        focusInputLabel($(this));
    });
    $('form').on('focus change', '.datepicker_button', function() {
        focusInputLabel($(this).closest('.cal_and_button').find('input[type="text"]'), true);
    }).on('blur change', '.datepicker_button', function() {
        focusInputLabel($(this).closest('.cal_and_button').find('input[type="text"]'));
        $(this).parent().find('.hasDatepicker').trigger('change'); 
    });

    $.when(fieldsPromise).done(function() {
      fields_config.forEach(function(fieldConf) {
        const field = providerContext.find('[name$="' + fieldConf.name + '"]');
        if (field.length) {
          field.data({
            'validation': fieldConf.validation,
            'title': fieldConf.title
          });
          if (fieldConf.label) {
            field.data('label', fieldConf.label);
          }
          if (fieldConf.readonly) {
            field.parent().append($('<div class="cover"/>'));
          }
          if (fieldConf.disabled) {
            field.prop('disabled', fieldConf.disabled);
          }
          if (fieldConf.regex) {
            field.data('regex', fieldConf.regex);
          }
          if (fieldConf.message) {
            field.data('message', fieldConf.message);
          }
        }
      });
    });

    // limit option of Individual_or_Group is not rc admin
    if (!IS_RC_ADMIN) {
        // disable bulk load option
        $('[name$=".Individual_or_Group"] option').each(function() {
            if (this.value == 'Bulk Load (Silkroad Only)') {
                $(this).prop('disabled', 'disabled');
            }
        });
    }
    // dob calculation for age / individual group field update and update OWBPA
    $('[name$=".Individual_or_Group"]').on('change', function() {
        let ageYears = moment().diff($('#DOB').val(), 'years');
        if (ageYears >= 40) {
            $('[name$=".Age_Over_40"][value="Y"]').prop('checked', true);
            switch($(this).val()) {
                case "Group":
                $('[name$=".OWBPA_Eligible"][value="Y"]').prop('checked', true);
                break;
                case "Individual":
                $('[name$=".OWBPA_Eligible"][value="N"]').prop('checked', true);
                break;
                case "Bulk Load (Silkroad Only)":
                $('[name$=".OWBPA_Eligible"][value="L"]').prop('checked', true);
                break;
            }
        }
        // less than 40 Y.O.
        if (ageYears <= 39) {
            $('[name$=".Age_Over_40"][value="N"]').prop('checked', true);
            $('[name$=".OWBPA_Eligible"][value="N"]').prop('checked', true);
        }
        if (!this.value.length || (ageYears <= 39 && this.value == 'Bulk Load (Silkroad Only)')) {
            $('[name$=".OWBPA_Eligible"]').prop('checked', false);
        }
        // populate age
        $('[name$="OWBPA_Age"]').val(ageYears);
        if ($(this).val() == 'Group') {
            $('[name$=".Decisional_Unit"]').closest('.input_wrapper').show();
            return;
        }
        $('[name$=".Decisional_Unit"]').val('').closest('.input_wrapper').hide();
    });
    $('[name$=".Individual_or_Group"]').trigger('change');

    // focus field labels
    $('input[type="text"]:visible, textarea:visible, select:visible', providerContext).each(function(k,v) {
        focusInputLabel($(v));
    });
    // validate each field
    providerContext.on('blur click paste keyup', 'input[type="text"]:not(".hasDatepicker"), select, textarea', function() {
      if($(this).is(':visible') && !validateField($(this))) {
        $(this).parent().find('.text-error').css({'display': 'inline-block', 'margin-bottom': '-2px'}); 
      }
    });

    // validate each date fields
    providerContext.on('change blur paste', 'input[name$="_display"]:not(":hidden"), input.hasDatepicker:not(:hidden)', function() {
      validateField($(this)); 
    });

    // validate radio and checkboxes
    providerContext.on('change', 'input[type="radio"]:visible, input[type="checkbox"]:visible', function() {
      validateField($(this)); 
    });

    // save and complete later
    providerContext.on('click', '#EUPDefaultSaveButton', function(e) {
        e.preventDefault();
        DisableValidation();doSave_Custom('refer-Save');
    });

    // submit the form if no errors
    providerContext.on('click', '#TaskSummary_ButtonSave', function(e) {
        e.preventDefault();
        let formIsValid = true;
        $.each($('input:visible, select:visible, textarea:visible', providerContext), function(k,v) {
          // all other fields
          if($(v).is(':visible') && !validateField($(v))) {
            formIsValid = false;
          }
          let nem = $(v).prop('name').split('.');
          let name = nem[nem.length-1];
          if(name == 'IE_Enhanced_Separation_Policy_Ack_Documents' && !validateField($('[name$=".IE_Enhanced_Separation_Policy_Ack_Documents"]'), false, enhancedSeparationPolicy)){
            formIsValid = false;
          }
        })
        if (formIsValid) {
            doSave_Custom('refer-Complete');
        }
        else {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        }
    });

    if (isProfileCompleted) {
      $('input, select', providerContext).prop('disabled', true);
    }

});
