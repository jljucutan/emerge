// get job code index base on job code
const getJobCodeIdx = function(jobCode) {
    "use strict";
    return JOB_CODE_MAP.map(function(item) {
        return item.jobCode;
    }).indexOf(jobCode);
}

const getJobMap = function(jobCode, jobFuncCode) {
    "use strict";
    let jobCodeMap = {};
    if (isNaN(jobCode)) {
        return jobCodeMap;
    }
    JOB_CODE_MAP.forEach(function(item) {
        if(jobCode && item.jobCode == jobCode) {
            jobCodeMap = item;
            if (item.jobFunctionCode == jobFuncCode) {
                jobCodeMap = item;
            }
        }

    });
    return jobCodeMap;
}
const JOB_CODE_INDEX = getJobCodeIdx(parseInt($('#job-code').val()));

const focusInputLabel = function(obj, isFocused) {
    "use strict";
    obj.each(function(k, v) {
        const el = $(v);
        let label = el.closest('.input_wrapper')
            .find('span.floating-label')
            .removeClass('label-focus')
            .css({"color": "#1C1C1C"});
        if (el.is('select') && el.val() === null) {
            return;
        }
        if (el.val().trim().length > 0 || isFocused) {
            label.addClass('label-focus');
        }
        if (isFocused === true) {
            label.css({"color": "#1C1C1C"});
        }
    });
}
const fieldHasVal = function(el) {
    "use strict";
    let hasVal = false;
    $.each(el, function(k, v) {
        if ($(v).is(':radio') || $(v).is(':checkbox')) {
            hasVal = isCheckboxChecked($(v));
            return;
        }
        if ($(v).val().length) {
            hasVal = true;
            return;
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

const hideSection = function(section) {
    "use strict";
    if (fieldHasVal(section)) {
        section.hide().find('input').val('');
    }
}

const validateDOB = function(date, formats) {
    'use strict'
    let isValid = true
    let message = ''
    if (!date.length && role != 'newhire') {
        return { 
            'isValid': true,
            'message': message
        }
    }
    if (!date.length) {
        return { 
            'isValid': false,
            'message': 'Date of Birth is required'
        }
    }
    let dit = date.split('/')
    if (!formats[OFFICE_LOCATION_COUNTRY] || !formats[OFFICE_LOCATION_COUNTRY].dateFormat || dit.length != 3) {
        return { 
            isValid: false,
            message: 'Date is invalid. Must be in ' + formats[OFFICE_LOCATION_COUNTRY].dateFormat + ' format.'
        } 
    }
    if (!moment(date, formats[OFFICE_LOCATION_COUNTRY].dateFormat, true).isValid()) {
        isValid = false;
        message = 'Date is invalid. Must be in ' + formats[OFFICE_LOCATION_COUNTRY].dateFormat + ' format.';
    }
    return { 
        "isValid": isValid, 
        "message": message 
    } 
}

const COUNTRY_TO_TYPE_MAP = new Map();
COUNTRY_TO_TYPE_MAP.set('National_ID_Country-1', 'National_ID_Type_1');
COUNTRY_TO_TYPE_MAP.set('National_ID_Country-2', 'National_ID_Type_2');
COUNTRY_TO_TYPE_MAP.set('National_ID_Country-3', 'National_ID_Type_3');
COUNTRY_TO_TYPE_MAP.set('National_ID_Country-4', 'National_ID_Type_4');

const extractCountryFromCode = function(countryCodes, code, noDefault) {
    "use strict";
    for (let i = 0; i < countryCodes.length; i++) {
        if (countryCodes[i].codes.indexOf(code) > -1) {
            return countryCodes[i].country;
        }
    }
 
  if (noDefault) {
        return "";
    }
    return "USA";
}

const updateIDTypes = function() {
    "use strict";
    COUNTRY_TO_TYPE_MAP.forEach(function(v, k) {
        const idTypeSelection = $('[name$=".' + v + '"]');
        let idType = idTypeSelection.val();
        idTypeSelection.html("");
        let countryCode = $('[name$=".' + k + '"]').val();
        ID_TYPES.forEach(function(vv, kk) {
            idTypeSelection.append($('<option/>').val(kk).text(vv));
        });
        idTypeSelection.val(idType);
        if ( !NATIONAL_ID_MAP.has(countryCode) ) {
            return;
        }
        idTypeSelection.find('option').each(function(kk, vv) {
            if ( $(vv).val() == "" || ($(vv).val() in NATIONAL_ID_MAP.get(countryCode)) ) {
                return;
            }
            $(vv).remove();
        });
    });
};

const toggleRecruiterDisplayComment = function(dateField, commentField, role) {
    "use strict";
    if (dateField.val() != 'Other' && role == 'recruiter') {
        focusInputLabel(commentField.val(''));
    }
    if (dateField.val() != 'Other' || role != 'recruiter') {
        commentField.closest('.input_wrapper').hide();
        return;
    }
    commentField.closest('.input_wrapper').show();
}

const validateAddressEqual = function() {
    "use strict"; 
    let isValid = true; 
    let message = ""; 
    const ADDRESS_FIELDS = {
        "Address1": $('[name="Current_Address1"]:visible', currentAddressContext).val(),
        "Address2": $('[name="Current_Address2"]:visible', currentAddressContext).val(),
        "Address3": $('[name="Current_Address3"]:visible', currentAddressContext).val(),
        "Address4": $('[name="Current_Address4"]:visible', currentAddressContext).val(),
        "City": $('[name="Current_City"]:visible', currentAddressContext).val(),
        "State": $('[name="Current_State"]:visible', currentAddressContext).val(),
        "County": $('[name="Great_Britain_County"]:visible', currentAddressContext).val(),
        "Postal_Code": $('[name="Current_Postal_Code"]:visible', currentAddressContext).val(),
    }
    const MAIL_FIELDS = {
        "Address1": $('[name="Mail_Address1"]:visible', currentMailContext).val(),
        "Address2": $('[name="Mail_Address2"]:visible', currentMailContext).val(),
        "Address3": $('[name="Mail_Address3"]:visible', currentMailContext).val(),
        "Address4": $('[name="Mail_Address4"]:visible', currentMailContext).val(),
        "City": $('[name="Mail_City"]:visible', currentMailContext).val(),
        "State": $('[name="Mail_State"]:visible', currentMailContext).val(),
        "County": $('[name="Mailing_Address_County"]:visible', currentMailContext).val(),
        "Postal_Code": $('[name="Mail_Postal_Code"]:visible', currentMailContext).val(),
    }
    if (JSON.stringify(ADDRESS_FIELDS) == JSON.stringify(MAIL_FIELDS) && $('[name$=".Mailing_Address_Same"]:checked').val() == 'N') {
        isValid = false;
        message = "Home and Mailing Address should not be equal.";
    }
    return { 
        "isValid": isValid, 
        "message": message 
    } 
}

const validateEmergencyPrimary = function() {
    "use strict"; 
    let isValid = true; 
    let message = ""; 
    let hasPrimary = false;
    $('[name$=".Emergency_Contact_Primary_1"], [name$=".Emergency_Contact_Primary_2"], [name$=".Emergency_Contact_Primary_3"]').each(function(k,v) {
        if ($(v).is(':checked') && $(v).val() == 'Y') {
            hasPrimary = true;
        }
    });
    if (!hasPrimary) {
        isValid = false;
        message = 'At least one must be marked as Primary Emergency Contact';
    }
    return {
        "inlineError": false,
        "isValid": isValid, 
        "message": message 
    } 
}

const updateIDNumberFormat = function(nem) {
    "use strict";
    let id = nem[nem.length -1];
    const typeSelection  = $('[name$=".National_ID_Type_' + id + '"]');
    const idField = $('[name$=".National_ID_Number_' + id + '"]');
    let countrySelected = NATIONAL_ID_MAP.get($('[name$=".National_ID_Country-' + id + '"]').val());
    if ( typeSelection.val().length > 0 && countrySelected != undefined ) {
        idField
            .data({
                "validation": "required,regex-optional",
                "regex": countrySelected[typeSelection.val()].regex,
                "message": "in format of " + countrySelected[typeSelection.val()].messageFormat
            })
            .prop('readonly', null)
            .mask(countrySelected[typeSelection.val()].format);
        focusInputLabel(idField);
        validateField(idField, true);
        return;
    }
    if (!typeSelection.val().length) {
        focusInputLabel(
            idField.data('validation', null).mask('SSS-SSS-SSSS').val('xxx-xxx-xxxx').prop('readonly', 'readonly')
        );
        validateField(idField, true);
    }
}

const updateStatesList = function(country, stateField) {
    "use strict";
    let stateValue = stateField.val();
    stateField.html('');
    ALL_STATES.forEach(function(v,k) {
        // no country selected at all
        if (country.length < 1) {
            (stateField.find('option').length < 1) && stateField.append($('<option value="" selected/>'));
            return;
        }
        // country is chosen but no corresponding state
        if (country.length && k.indexOf(country) >= 0 && stateField.find('option').length < 1) {
            stateField.append($('<option value="" selected/>'));
            return;
        }
        if ( k == "" || k.indexOf(country) == 0 ) {
            stateField.append($('<option/>').val(k).text(v));
        }
        stateField.val(stateValue);
        if (stateField.val() == null) {
            stateField.find('option').first().prop('selected', 'selected')
        }
    });
}

const getCompanyMapping = function(jobCode, regRegion) {
    "use strict";
    let company = "";
    COMPANY_MAPPING.forEach(function(cm) {
        // any reg regions
        if (cm.in && cm.in.indexOf(jobCode) >= 0) {
            company = cm.company;
        }
        // not included in job code and has the reg region
        if (cm.notIn && cm.notIn.indexOf(jobCode) < 0 && cm.regRegion.indexOf(regRegion) >= 0) {
            company = cm.company;
        }
    });
    return company
}

const setDefaultCountry = function() {
    "use strict";
    if ($(this).is(':hidden') || $(this).val().length > 0) {
        return;
    }
    $(this).val(extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val()));
}

const toggleAwaitingNationalID = function(nem) {
    "use strict";
    let id = nem[nem.length -1];
    const countryIDField = $('[name$=".National_ID_Country-' + id + '"]');
    const countryIDTypeField = $('[name$=".National_ID_Type_' + id + '"]');
    let isShown = false;
    switch(countryIDField.val()) {
        case "USA":
        // PR is SSN
        isShown = countryIDTypeField.val() == 'PR';
        break;
        case "GBR":
        // PR_9 is Nat Ins
        isShown = countryIDTypeField.val() == 'PR_9';
        break;
    }
    if (!!isShown) {
        $('[name$=".Awaiting_National_ID_Number' + id + '"]').closest('.input_wrapper').show();
        return;
    }
    countryIDTypeField.prop('readonly', false);
    $('[name$=".Awaiting_National_ID_Number' + id + '"]').prop('checked', false).closest('.input_wrapper').hide();
    return false;
}

const toggleNationalIDPlaceholder = function(field) {
    "use strict";
    let nem = field.prop('name');
    let id = nem[nem.length -1];
    const idField = $('[name$=".National_ID_Number_' + id + '"]');
    if (field.is(':checked')) {
        focusInputLabel(idField.data('validation', null).unmask().val('xxx-xx-xxxx').prop('readonly', 'readonly'));
        validateField(idField, true);
        return true;
    }
    if ($('[name$=".National_ID_Type_' + id + '"]').val().length < 1) {
        focusInputLabel(idField.data('validation', null).mask('SSS-SSS-SSSS').val('xxx-xxx-xxxx').prop('readonly', 'readonly'));
        return;
    }
    updateIDNumberFormat(field.prop('name'));
    return false;
}

const updatePrimaryEmergency = function() {
    "use strict";
    const emergencyPrimary1 = $('[name$=".Emergency_Contact_Primary_1"]:checked');
    const emergencyPrimary2 = $('[name$=".Emergency_Contact_Primary_2"]:checked');
    const emergencyPrimary3 = $('[name$=".Emergency_Contact_Primary_3"]');
    $('[name$=".Emergency_Contact_Primary_2"], [name$=".Emergency_Contact_Primary_3"]').closest('.input_wrapper').show();
    if ($('[name$=".Emergency_Contact_Name_2"]').val().length < 1 || emergencyPrimary1.val() == 'Y') {
        $('[name$=".Emergency_Contact_Primary_2"]').prop('checked', false).closest('.input_wrapper').hide();
    }
    if ($('[name$=".Emergency_Contact_Name_3"]').val().length < 1 || emergencyPrimary1.val() == 'Y' || emergencyPrimary2.val() == 'Y') {
        $('[name$=".Emergency_Contact_Primary_3"]').prop('checked', false).closest('.input_wrapper').hide();
    }
}

const populateBonus = function(target, options) {
    "use strict";
    BONUS_MAPPING_CONFIG.forEach(function(cfg) {
        // weed out not in bonus code
        if (!options.has(cfg.bonusCode)) {
            return;
        }
        if (cfg.regRegion == 'USA' && REGULATORY_REGION != 'USA') {
            target.val('');
            return;
        }
        // skip non-us config on us event
        if (extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val()) == 'USA' && Array.isArray(cfg.regRegion)) {
            return;
        }
        // non us
        if (Array.isArray(cfg.regRegion) && cfg.regRegion.indexOf(REGULATORY_REGION) < 0) {
            return;
        }
        switch(cfg.jobCodeLogic) {
            case 'includes':
            if (Array.isArray(cfg.jobCode) && cfg.jobCode.indexOf(JOB_CODE) >= 0) {
                target.val(cfg.bonusCode);
            }
            break;
            case 'excludes':
            if (Array.isArray(cfg.jobCode) && cfg.jobCode.indexOf(JOB_CODE) < 0) {
                target.val(cfg.bonusCode);
            }
            break;
            case 'equals':
            if (cfg.jobCode == JOB_CODE) {
                target.val(cfg.bonusCode);
            }
            break;
        }
    });
    if (target.val() == null) {
        target.val('');
    }
    focusInputLabel(target);
}

const populateInternationalBonus = function(field) {
    "use strict";
    // UK specific
    let country = extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val());
    if (['GBR'].indexOf(country) < 0) {
        return;
    }
    let opts = new Map();
    field.find('option').each(function() {
        opts.set(this.value, this.innerText);
    });
    populateBonus(field, opts);
}

// only show options that are in event location
const filterBonusesByLocation = function(bonusField, config) {
    "use strict";
    let country = extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val());
    let v = (config && config.defaultVal) ? config.defaultVal : bonusField.val();
    let filtered = [];
    let nem = bonusField.prop('name').split('.');
    (config && !config.isUS) && INTERNATIONAL_BONUS_CONFIG.forEach(function(cfg) {
        // non uk filter remove all international options
        if (country != "GBR") {
            bonusField.find('option[value="' + cfg.bonusCode + '"]').remove();
        }
        // uk filter
        if (country == "GBR") {
            bonusField.find('option').each(function() {
                if (cfg.regRegion.indexOf(country) < 0) {
                    return;
                }
                if (this.value != cfg.bonusCode) {
                    return;
                }
                if (cfg.bonusFlagFields && cfg.bonusFlagFields.indexOf(nem[nem.length-1]) < 0) {
                    return;
                }
                filtered.push(this.value);
            });
        }
    });
    (config && config.isUS) && BONUS_MAPPING_CONFIG.forEach(function(cfg) {
        // non USA filter remove all non-USA options
        if (country != "USA") {
            bonusField.find('option[value="' + cfg.bonusCode + '"]').remove();
        }
        // USA filter
        if (country == "USA") {
            bonusField.find('option').each(function() {
                if (cfg.regRegion.indexOf(country) >= 0 && this.value == cfg.bonusCode) {
                    filtered.push(this.value);
                }
            });
        }
    });
    // filter options if anything to be filtered
    if (filtered.length > 0) {
        // keep the filtered
        bonusField.find('option').each(function() {
            if (this.value == "") {
                return;
            }
            if (filtered.indexOf($(this).val()) < 0) {
                $(this).remove();
            }
        });
    }
    setTimeout(function() {
        bonusField.val(v);
        if (bonusField.val() == null) {
            bonusField.find('option').first().prop('selected', 'selected');
        }
        focusInputLabel(bonusField);
    }, 1000);
}

const renderAddresses = function(target, config) {
    "use strict";
    target.html('');
    config.forEach(function(field) {
        const realField = $('[name$=".' + field.name + '"]');
        // store initial value for later use
        if (!realField.data('initial-value')) {
            realField.data('initial-value', realField.val());
        }
        if (!field.visible) {
            realField.val('');
            return;
        }
        let pseudoField;
        switch (realField.prop('type')) {
            case 'select-one':
            let options = realField.find('option').clone();
            pseudoField = $('<select class="has-target" />').html(options);
            break;
            default:
            pseudoField = $('<input class="has-target" type="text" />');
            break;
        }
        pseudoField.prop({
            'name': field.name,
            'value': realField.data('initial-value'),
        });
        if (realField.data('validation') != undefined) {
            pseudoField.data({
                'validation': realField.data('validation'),
                'title': field.label
            });
        }
        // require for UK and US 
        if (role == 'newhire' && field.name == 'Mail_City' && ['USA', 'GBR'].indexOf($('[name$=".Mail_Country"]').val()) >= 0) {
            pseudoField.data({
                'validation': 'required',
                'title': field.label
            });
        }
        let row = $('<div class="input_wrapper"/>').prop('data-title', field.label)
            .append(
                $('<span class="floating-label"/>').append(field.label),
                pseudoField
            )
        target.append(row);
    });
}

const populateStandardHours = function(officeField, standardHoursField) {
    "use strict";
    let cfg = STANDARD_HOURS_CONFIG[officeField.val()];
    if (officeField.val() == "") {
        standardHoursField.val(0);
    }
    if (cfg == undefined) {
        return;
    }
    let ePracticeGroup = $('#event-practice-group').val()
    if ("includeAll" in cfg) {
        standardHoursField.val(cfg.includeAll.standardHours);
        return;
    }
    if ("equals" in cfg && cfg.equals.practiceGroups.indexOf(ePracticeGroup) >= 0) {
        standardHoursField.val(cfg.equals.standardHours);
        return;
    }
    if ("notEquals" in cfg && cfg.notEquals.practiceGroups.indexOf(ePracticeGroup) < 0) {
        standardHoursField.val(cfg.notEquals.standardHours);
        return;
    }
}

/**
 * @param controller, obj - target depends on this
 * @param target, obj - change state depends on requiredVal
 * @param requireeVal, string - controller's value that control's target
 */
const requireTargetByVal = function(controller, target, requiredVal) {
    "use strict";
    let val = '';
    let required = false;
    if (controller.is(':radio')) {
        controller.each(function() {
            if (isCheckboxChecked($(this))) {
                val = $(this).val();
            }
        })
    }
    if (['select-one', 'text'].indexOf(controller.prop('type')) >= 0) {
        val = controller.val();
    }
    if (val != requiredVal) {
        validateField(target.data('validation', ''), true);
        return;
    }
    target.data('validation', 'required');
}

const requireOneFilled = function(fields) {
    "use strict";
    let isRequired = false;
    fields.each(function() {
        if(this.value.length > 0) {
            isRequired = true;
        }
    });
    fields.each(function() {
        if(!!isRequired) {
            $(this).data('validation', 'required');
            return;
        }
        validateField($(this).data('validation', ''), true);
    });
}

/**
 * @param controller, obj - target depends on this
 * @param target, obj - change state depends on controller val
 */
const requireTargetIfNotEmpty = function(controller, targets) {
    "use strict";
    if (controller.val().length <= 0) {
        targets.each(function() {
            validateField($(this).data('validation', ''), true);
        });
        return;
    }
    targets.data('validation', 'required');
}

const toggleDisplayByValue = function(controller, target, toggleVal) {
    "use strict";
    let display = false;
    if (controller.prop('type') == 'radio') {
        controller.each(function() {
            if ($(this).is(':checked') && toggleVal.indexOf($(this).val()) >= 0) {
                display = true;
            }
        });
    }
    if (['text', 'select-one'].indexOf(controller.prop('type')) >= 0 && toggleVal.indexOf(controller.val()) >= 0) {
        display = true;
    }
    if (!!display) {
        target.closest('.input_wrapper').show();
        return true;
    }
    target.closest('.input_wrapper').hide();
    if (['text', 'select-one'].indexOf(target.prop('type')) >= 0) {
        // clear values and reset fields
        focusInputLabel(target.val(''));
    }
    // reset validation errors
    target.each(function() {
        validateField($(this), true);
    });
    return false;
}

if (Number.EPSILON === undefined) {
    Number.EPSILON = Math.pow(2, -52);
}

// returns rounded up decimal
const roundUpDec = function(val, isRoundedUp) {
    "use strict";
    if (isRoundedUp) {
        return Math.ceil(val * Math.pow(10, 2)) / Math.pow(10, 2);
    }
    return Math.round((val + Number.EPSILON) * 100) / 100;
}

// update country codes on load if not set
const populateCountryCodes = function(countryCodeFields, countryCode, override) {
    "use strict";
    countryCodeFields.each(function() {
        const field = $(this);
        if (field.val() == null) {
            field.val('');
        }
        PHONE_COUNTRY_CODE.forEach(function(v) {
            if (countryCode == '') {
                field.val('');
                return;
            }
            if (v.countryCode == countryCode) {
                if (!!override || field.val().length < 1) {
                    field.val(v.phoneCountryCode);
                }
            }
        });
        focusInputLabel(field);
    });
}

const requireTargetByController = function(controller, target) {
    "use strict";
    let isValid = true;
    let message = '';
    if (controller.val().length > 0 && target.val().length < 1) {
        isValid = false;
        message = target.data('title') + ' is required.';
    }
    return function() {
        return {
            isValid: isValid,
            message: message,
        }
    }
}

const updateCitizenshipStatusList = function(country, citizenshipStatusField) {
    "use strict";
    let citizenshipStatusValue = citizenshipStatusField.val();
    citizenshipStatusField.html('');
    ALL_CITIZENSHIP_STATUS.forEach(function(v, k) {
        // no country selected at all
        if (country.length < 1) {
            (citizenshipStatusField.find('option').length < 1) && citizenshipStatusField.append($('<option value="" selected/>'));
            return;
        }
        // country is chosen but no corresponding citizenship status
        if (country.length && k.indexOf(country) >= 0 && citizenshipStatusField.find('option').length < 1) {
            citizenshipStatusField.append($('<option value="" selected/>'));
            return;
        }
        if ( k == "" || k.indexOf(country) == 0 ) {
            citizenshipStatusField.append($('<option/>').val(k).text(v));
        }
        citizenshipStatusField.val(citizenshipStatusValue);
    });
}
const filterVisaType = function(countryVal, visaTypeField) {
    let visaTypeVal = visaTypeField.val();
    visaTypeField.find('option').remove().end().append(new Option("", ""));
    VISA_TYPE_MAP.forEach(function(v, k) {
        if (v.country == countryVal) {
            visaTypeField.append(new Option(ALL_VISA_TYPE.get(v.visaTypeCode), v.visaTypeCode));
        }
    });
    // sort all visa type by description
    visaTypeField.html(visaTypeField.find('option').sort(function(x, y) {
        return $(x).text() > $(y).text() ? 1 : -1;
    }));
    visaTypeField.val(visaTypeVal);
    if (visaTypeField.val() == null) {
        visaTypeField.val('');
    }
}

const triggerEvents = function(el, val) {
    el.trigger("change");
}

// set another default if UK
const DEFAULT_SALARY = extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val()) == 'GBR' ? UK_SALARY_AMOUNT_DESCRIPTION : DEFAULT_SALARY_AMOUNT_DESCRIPTION;

vex.defaultOptions.className = 'vex-theme-top';

$(window).on('load', function() {
    $('.floating-label span').css('color', 'rgb(102, 102, 102)');
    $('.cal_and_button').prop({'cellpadding': 0, 'cellspacing': 0});
    let isProfileCompleted = sTaskComplete;
    // replace default submit button with paypal styled
    $('#TaskSummary_ButtonCancel').appendTo('#cancel').show();
    if (!isProfileCompleted) {
        $('#TaskSummary_ButtonSave').appendTo('#saveandcomplete').prop('onclick', null).show().text('Continue');
        $('#EUPDefaultSaveButton').appendTo('#save').show();
    }
    $('textarea').addClass('lifesuite__textarea-input');

    // remove unused fields
    $('input[type="radio"][value=""]').closest('div').remove();

    // select fields workaround
    $('select').each(function() {
        if ($(this).val() == null) {
            $(this).val($(this).children().first().val());
        }
    });

    $('[name$=".Visa_Type_1"] option').each(function() {
        ALL_VISA_TYPE.set($(this).val(), $(this).text());
    });

    $('[name$=".Citizenship_Status_1"] option').each(function() {
        ALL_CITIZENSHIP_STATUS.set($(this).val(), $(this).text());
    });

    // storage for dropdowns, etc
    // store id types
    $('[name$=".National_ID_Type_1"] option').each(function() {
        ID_TYPES.set($(this).val(), $(this).text());
    });
    // store additional bonus types
    $('[name$=".Additional_Bonus_Code_1"] option').each(function() {
        ADDITIONAL_BONUSES.set(this.value, this.innerText);
    });
    // filter additional bonus types to show only allowed options
    $('option', '[name$=".Additional_Bonus_Code_1"], [name$=".Additional_Bonus_Code_2"], [name$=".Additional_Bonus_Code_3"], [name$=".Additional_Bonus_Code_4"], [name$=".Additional_Bonus_Code_5"], [name$=".Additional_Bonus_Code_6"], [name$=".Additional_Bonus_Code_7"]').each(function() {
        if (this.value == 'FEL' && EVENT_NAME != 'Summer Associates') {
            $(this).remove()
        }
        if ((this.value == 'JMB' || this.value == 'REL' || this.value == 'Forgivable Loan') && EVENT_NAME == 'Summer Associates') {
            $(this).remove()
        }
    })
    // store action reasons
    $('[name$=".Action_Reason"] option').each(function() {
        ACTION_REASONS.set($(this).val(), $(this).text());
    });
    // sort states
    let currentStateInitial = $('[name$=".Current_State"]').val();
    $('[name$=".Current_State"]').html($('[name$=".Current_State"] option').sort(function(a,b) {
        return a.text == b.text ? 0 : a.text < b.text ? -1 : 1;
    }));
    $('[name$=".Current_State"]').val(currentStateInitial);
    // store all global states
    $('[name$=".Current_State"] option').each(function() {
        // filter out us territory but non us state
        if ( $(this).val().indexOf('USA') >= 0 && US_STATES_LIST.indexOf($(this).val()) < 0 ) {
            return;
        }
        ALL_STATES.set($(this).val(), $(this).text());
    });
    // store all practice areas
    $('[name$=".Practice_Area"] option').each(function(k,v) {
        PRACTICE_AREA.set(v.value, v.innerText);
    });
    // store all practice groups
    $('[name$=".Practice_Group"] option').each(function(k,v) {
        PRACTICE_GROUP.set(v.value, v.innerText);
    });
    // store all signing bonus
    $('[name$=".Signing_Bonus_Description"] option').each(function(k,v) {
        SIGNING_BONUSES.set(v.value, v.innerText);
    });
    // store all clerkship bonus
    $('[name$=".Clerkship_Bonus_Code_1"] option').each(function(k,v) {
        CLERKSHIP_BONUSES.set(v.value, v.innerText);
    });
    // store all relocation bonus
    $('[name$=".Relocation_Bonus_Code"] option').each(function(k,v) {
        RELOCATION_BONUSES.set(v.value, v.innerText);
    });
    // store all guaranteed bonus
    $('[name$=".Guaranteed_Bonus_Type"] option').each(function(k,v) {
        GUARANTEED_BONUSES.set(v.value, v.innerText);
    });
    // store all referral bonus
    $('[name$=".Referral_Bonus_Code_1"] option').each(function(k,v) {
        REFERRAL_BONUSES.set(v.value, v.innerText);
    });


    // set office defaults
    if ($('[name$=".Office"]').val().length < 1) {
        $('[name$=".Office"]').val(DEFAULT_OFFICE);
    }
    // prepopulate standard hours
    let standardHoursNum = new Number($('[name$=".Standard_Hours"]').val());
    if (standardHoursNum && standardHoursNum <= 0) {
        populateStandardHours($('[name$=".Office"]'), $('[name$=".Standard_Hours"]'));
    }
    // always populate standard hours pseudo field
    populateStandardHours($('[name$=".Office"]'), $('#pseudo-standard'));
    populateStandardHours($('[name$=".Office"]'), $('[name$=".Standard_Hours"]'));
    // update standard hours on office change
    $('[name$=".Office"]').on('change', function() {
        populateStandardHours($('[name$=".Office"]'), $('#pseudo-standard'));
        populateStandardHours($('[name$=".Office"]'), $('[name$=".Standard_Hours"]'));
    })

    // calculate and prepopulate FTE
    $('[name$=".Standard_Hours"]').on('keyup blur paste', function() {
        let standardHours = Number($('[name$=".Standard_Hours"]').val());
        let pseudoStandardHours = Number($('#pseudo-standard').val());
        if (isNaN(standardHours) || isNaN(pseudoStandardHours)) {
            $('[name$=".FTE"]').val(0);
            return;
        }
        let fte = standardHours / pseudoStandardHours;
        if (isNaN(fte) || fte == Infinity) {
            fte = 0;
        }
        $('[name$=".FTE"]').val(fte.toFixed(2)).prop('readonly', 'readonly');
        // make part timeer if less then 1 (by default)
        focusInputLabel($('[name$=".Full_Part"]').val('P'));
        validateField($('[name$=".Full_Part"]'));
        // make full time if fte is 1
        if (fte >= 1) {
            focusInputLabel($('[name$=".Full_Part"]').val('F'));
            validateField($('[name$=".Full_Part"]'));
        }
        // trigger FTE validation
        validateField($('[name$=".FTE"]'));
    });
    $('[name$=".Standard_Hours"]').trigger('blur');

    // regular shift default value
    if ($('[name$=".Regular_Shift"]').val().length < 1) {
        $('[name$=".Regular_Shift"]').val(1);
    }
    // set default value for HIGHEST_EDUC_LVL
    if ($('[name$=".HIGHEST_EDUC_LVL"]').val().length < 1 && ['GBR'].indexOf(extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val())) >= 0) {
        $('[name$=".HIGHEST_EDUC_LVL"]').val("A")
    }
    // set legal name defaults
    if ($('[name$=".Legal_First_Name"]').val().length < 1) {
        $('[name$=".Legal_First_Name"]').val(DEFAULT_FIRST_NAME);
    }
    if ($('[name$=".Legal_Middle_Name"]').val().length < 1) {
        $('[name$=".Legal_Middle_Name"]').val(DEFAULT_MIDDLE_NAME );
    }
    if ($('[name$=".Legal_Last_Name"]').val().length < 1) {
        $('[name$=".Legal_Last_Name"]').val(DEFAULT_LAST_NAME);
    }
    // pre-populate with event job title
    if ($('[name$=".Position_Job_Title_Code"]').val().length < 1) {
        $('[name$=".Position_Job_Title_Code"]').val(document.getElementById('job-code').value);
        // event job and eup job mismatch workaround
        if ($('[name$=".Position_Job_Title_Code"]').val() == null) {
            $('[name$=".Position_Job_Title_Code"]').val('');
        }
    }
    
    // job title change event
    $('[name$=".Position_Job_Title_Code"]').on('change', function() {
        let idx = getJobCodeIdx(parseInt(this.value));
        $('[name$=".Job_Function"], #Job_Function').val('');
        if (idx >= 0) {
            $('[name$=".Job_Function"]').val(JOB_CODE_MAP[idx].jobFunctionCode);
            $('#Job_Function').val($('[name$=".Job_Function"] option:selected').text());
        }
        if ($('[name$=".Job_Function"]').val() == undefined) {
            $('[name$=".Job_Function"]').val('');
        }
        // Update Officer code based on job function
        // @TODO to be transferred to a config file if this grows to be unmanageable
        switch ($('[name$=".Job_Function"]').val()) {
        case '101':
        case '104':
        case '105':
            $('[name$=".Officer_Code"]').val('A')
        break;
        case '102':
        case '103':
        case '106':
        case '107':
            $('[name$=".Officer_Code"]').val('Y')
        break;
        default:
            $('[name$=".Officer_Code"]').val('S')
        break;
        }

        // hide supervisor section if in job code mapping
        if (getJobMap(parseInt(this.value), parseInt($('[name$=".Job_Function"]').val())).supervisor) {
            $('#supervisor-id-section').show();
        } else {
            $('#supervisor-id-section').hide('fast', function() {
                focusInputLabel($(this).find('input').val(''));
            });
        }
        focusInputLabel($('#Job_Function'));
    });
    $('[name$=".Position_Job_Title_Code"]').trigger('change');

    // load form when all set and ready
    $('#EditProfile_wrapper').fadeIn();

    MULTIPART_CONFIG.forEach(function(v,k) {
        const field =  $('[name="i' + instanceID + '.' + v.name + '"]');
        // hide fields not suppose to be visible to current role
        if (v.viewedBy.indexOf(role) < 0) {
            field.closest('.input_wrapper') && field.closest('.input_wrapper').hide();
        }
        if (v.readOnlyTo.indexOf(role) >= 0) {
            field.parent().append($('<div class="cover"/>'));
        }
        if (v.hideOnOfficeLocation && EVENT_OFFICE_LOCATIONS[v.hideOnOfficeLocation].indexOf(OFFICE_LOCATION) >= 0) {
            field.closest('.input_wrapper') && field.val('').closest('.input_wrapper').hide();
        }
        // require only to required role
        if (v.requiredBy.indexOf(role) >= 0) {
            field.data('validation', 'required');
        }
        // add radio labels
        if (v.targetlabel) {
            field.data('targetlabel', v.targetlabel);
        }
        // classes
        if (v.class) {
            field.addClass(v.class)
        }
        // pseudo fields
        if (role == 'newhire') {
            // hide static sections like headers, etc.
            $('.recruiter-section').hide();
            $('[name$=".Action"], #Action').closest('.input_wrapper').hide();
            $('.us-recruiter').hide();
            // todo
            (extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val()) == 'GBR') && $('[name$=".Prefix"]').data('validation', 'required');
        }
        if (role == 'recruiter') {
            $('.us-recruiter').hide();
            extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val()) == 'USA' && $('.us-recruiter').show();
        }
        if (v.name == 'FTE' && role != 'newhire') {
            field.data({
                'validation': 'required,regex-optional',
                'message': 'should not be greater than 1 but not equal to 0',
                'regex': '^((1(\.00)?)|(0\.[1-9][0-9])|(0\.[0-9][1-9]))$'
            })
        }
        
    });

    // currency masking
    $('.currency-field').each(function() {
        let num = new Number($(this).val().replace(/[^0-9.-]+/g,""));
        if ($(this).val().length) {
            $(this).val(num.toFixed(2));
        }
        $(this).mask('#,##0.00', {reverse: true});
    });

    // hide by event
    if (EVENT_NAME != 'Summer Associates') {
        $('[name$=".Summer_Associate_End_Date"]').closest('.input_wrapper').hide();
    }
    // make Summer Associate End Date datepicker
    $('[name$=".Summer_Associate_End_Date"]').data('date-enabled', 'false')
        .formatDatePicker(dateConfig, extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val()))
        .datepicker("option", "onSelect", function(dateText, instance) {
            validateField($(this)); 
            focusInputLabel($(this));
        });

    // hide fields that are not relevant
    $('[data-hide-for]').each(function() {
        // fields that shouldn't hide under certain conditions
        // Expected Job End Date should display when summer assoc event
        if ($(this).find('input[name$=".Expected_Job_End_Date"]').length && EVENT_NAME != 'Summer Associates') {
            return;
        }
        // proceed to hide fields
        if ($(this).data('hide-for').indexOf(extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val())) >= 0 ) {
            $(this).closest('.input_wrapper').hide().find('input[type="text"], select').each(function(_, f) {
                try {
                    f.val('')
                }
                catch(e) {
                    console.warn('Field ' + f.name + ': ' + e)
                }
            });
            $(this).find('input[type="radio"], input[type="checkbox"]').prop('checked', false);
        }
    });
    // hide fields not in country
    $('[data-only-display-for]').each(function() {
        if ($(this).data('only-display-for').indexOf(extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val())) < 0 ) {
            $(this).closest('.input_wrapper').hide().find('input').val('');
        }
    });
    // hide field in country
    $('[data-only-hide-for]').each(function() {
        if ($(this).data('only-hide-for').indexOf(extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val())) >= 0 ) {
            $(this).closest('.input_wrapper').hide().find('input').val('');
        }
    });
    // hide for regions
    $('[data-hide-for-regregions]').each(function() {
        if ($(this).data('hide-for-regregions').indexOf($('[name$=".Regulatory_Region"]').val()) >= 0 ) {
            $(this).closest('.input_wrapper').hide().find('input,select').val('');
        }
    });
    // hide for regions but not cleared
    $('[data-hide-for-regregions-noclear]').each(function() {
        if ($(this).data('hide-for-regregions-noclear').indexOf($('[name$=".Regulatory_Region"]').val()) >= 0 ) {
            $(this).closest('.input_wrapper').hide();
        }
    });
    // show for regions
    $('[data-only-show-for-regregions]').each(function() {
        if ($(this).data('only-show-for-regregions').indexOf($('[name$=".Regulatory_Region"]').val()) < 0 ) {
            $(this).closest('.input_wrapper').hide().find('input,select').val('');
        }
    });
    // show job only to job concerning it
    $('[data-job-for]').each(function() {
        if ($(this).data('job-for').indexOf($('#job-code').val()) < 0 ) {
            $(this).closest('.input_wrapper').hide().find('input').val('');
        }
    });

    // hide officer code if attorney in job code map
    if (JOB_CODE_INDEX >= 0 && JOB_CODE_MAP[JOB_CODE_INDEX].hierarchy == 'Attorney') {
        $('#officer-code-section').hide();
    }
    // hide work schedule field for attorney*
    if (JOB_CODE_INDEX >= 0 && /^Attorney/.test(JOB_CODE_MAP[JOB_CODE_INDEX].hierarchy)) {
        $('[name$=".Work_Schedule"]', psProviderContext).closest('.input_wrapper').hide();
    }

    // hide location for 101, 102, 103, 104, 105, 106, 107
    if ([101, 102, 103, 104, 105, 106, 107].indexOf(parseInt($('[name$=".Job_Function"]').val())) >= 0) {
        $('#location-section').hide().find('input').val('');
    }
    let filteredOfficeLocations = [];
    OFFICE_LOCATION_MAP.forEach(function(item) {
        if(item.officeCode == $('#event-location-code', psProviderContext).val()) {
            filteredOfficeLocations.push(item.location);
        }
    });
    let locationVal = $('[name$=".Location"]', psProviderContext).val();
    $('[name$=".Location"] option', psProviderContext).each(function(k,v) {
        if (v.value == "") {
            return;
        }
        if (filteredOfficeLocations.indexOf(v.value) < 0) {
            $(v).remove();
        }
        if (v.value == filteredOfficeLocations[0]) {
            $(v).prop('selected', true);
        }
    });
    if (filteredOfficeLocations.indexOf(locationVal) >= 0) {
        $('[name$=".Location"]', psProviderContext).val(locationVal);
    }
    
    // set default values
    $('[name$=".Preferred_Email"]').prop('checked', 'checked');
    // details email pre-pop -> personal email
    if ($('[name$=".Personal_Email_Address"]').val().length < 1) {
        $('[name$=".Personal_Email_Address"]').val(DEFAULT_EMAIL);
    }
    // name type default to primary
    $('[name$=".Name_Type"]').val('PRI');
    // second name type default to primary
    $('[name$=".Name_Type2"]').val('PRF');
    // default of of National Identification Country
    $('[name$=".Address_Type"]').val('HOME');
    // default for Offer Letter Annual Compensation with Salary Amount
    if($('[name$=".Offer_Letter_Annual_Compensation"]').val() == "") {
        $('[name$=".Offer_Letter_Annual_Compensation"]').val(DEFAULT_SALARY)
    }
    if (EVENT_NAME == 'Summer Associates') {
        $('[name$=".Offer_Letter_Annual_Compensation"]').val('215,000')
        // pre-populate for summer assoc event
        if (!$('[name$=".Salary_Amount_Currency_Code"]').val().length) {
            $('[name$=".Salary_Amount_Currency_Code"]').val('USD')
        }
    }
    // set default business cell publish
    $('[name$=".Publish_mobile_Business"][value="Y"]').prop('checked', true);
    // set default for classes
    if ([100118, 100001, 100704].indexOf(parseInt($('#job-code').val())) >= 0) {
        $('[name$=".Share_Partner_Class"], [name$=".Of_Counsel_Class"]').each(function(k,v) {
            if ($(v).val().length < 1) {
                $(v).val(moment().format('Y'));
            }
        });
    }
    // set default regulatory region
    $('#EditProfile [name$=".Regulatory_Region"]').val(REGULATORY_REGION)
    if (REGULATORY_REGION.length < 1) {
        $('#EditProfile [name$=".Regulatory_Region"]').val(extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val(), true));
    }
    // set default company to office they are joining
    $('#EditProfile [name$=".Company"]').val(getCompanyMapping(JOB_CODE, REGULATORY_REGION));
    // set Work Period to 'W' on all country except Germany
    $('[name$=".Work_Period"]').val('W');
    if (extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val()) == 'DEU') {
        $('[name$=".Work_Period"]').val('GW');
    }
    // set probation date to 6 months afer hire date
    if (REGULATORY_REGION == 'GBR') {
        $('[name$=".Probation_Date"]', psProviderContext).val(moment($('[name$="Start_Date"]').val()).add(6, 'months').subtract(1, 'days').format('M/DD/YYYY')).prop('readonly', true);
    }
    // set job function default value
    if (JOB_CODE_INDEX >= 0 && $('[name$=".Job_Function"]').val().length < 0) {
        $('[name$=".Job_Function"]').val(JOB_CODE_MAP[JOB_CODE_INDEX].jobFunctionCode);
    }
    $('#Job_Function').val($('[name$=".Job_Function"] option:selected').text());


    // set time reporter base on exempt value in job codes
    if (JOB_CODE_INDEX >= 0) {
        document.querySelector('[name$=".Time_Reporter"]', psProviderContext).value = JOB_CODE_MAP[JOB_CODE_INDEX].exempt ? 'E' : 'P';
    }
    // set timezone value based on joining location
    $('[name$=".Time_Zone"]', psProviderContext).val(TIMEZONE_MAP.get($('#event-location-code').val()));

    // set associate class initial value
    if ($('[name$=".Associate_Class"]').val().length < 1) {
        $('[name$=".Associate_Class"]').val(CLASS_YEAR);
    }

    // dependent field value manipulation depending on control field event
    // previous kirkland employee
    $('[name$=".Previous_KE"]', psProviderContext).on('change', function() {
        const previousKEChecked = $('[name$=".Previous_KE"]:checked');
        if ( !previousKEChecked ) {
            return;
        }
        if ( previousKEChecked.val() == 'Y' )  {
            focusInputLabel($('[name="Action"]').val('Rehire'));
            focusInputLabel($('[name$=".Action"]').val('REH'));
        }
        if ( previousKEChecked.val() == 'N' )  {
            focusInputLabel($('[name="Action"]').val('Hire'));
            focusInputLabel($('[name$=".Action"]').val('HIR'));
        }
        validateField($('#Action'), true);
        $('[name$=".Action"]').trigger('change');
    });
    $('#EditProfile [name$=".Previous_KE"]').trigger('change');

    // fields filtrations
    // filter BGR state dropdown onload
    updateStatesList("GBR", $('[name$=".Great_Britain_County"]'));
    updateStatesList("GBR", $('[name$=".Mailing_Address_County"]'));
    // filter practice area based on job function
    let practiceAreaFilterDone = false;
    PRACTICE_AREA_JOB_FUNCTION.forEach(function(entry) {
        if (practiceAreaFilterDone) {
            return;
        }
        let practiceAreaVal = $('[name$=".Practice_Area"]').val();
        let filtered = [];
        $('[name$=".Practice_Area"]').html(
            $('<option value="" selected/>')
        );
        if (JOB_CODE_INDEX < 0) {
            return;
        }
        let jobFunctionCode = JOB_CODE_MAP[JOB_CODE_INDEX] ? JOB_CODE_MAP[JOB_CODE_INDEX].jobFunctionCode + '' : null;
        if (entry.jobFunctionSet.indexOf(jobFunctionCode) >= 0 && entry.clause == 'including') {
            filtered = filtered.concat(entry.practiceCodeSet);
            practiceAreaFilterDone = true;
        }
        if (entry.jobFunctionSet.indexOf(jobFunctionCode) < 0 && entry.clause == 'excluding') {
            filtered = filtered.concat(entry.practiceCodeSet);
            practiceAreaFilterDone = true;
        }
        filtered.forEach(function(v) {
            $('[name$=".Practice_Area"]').append($('<option/>').val(v).text(PRACTICE_AREA.get(v)));
        });
        $('[name$=".Practice_Area"]').val(practiceAreaVal);
        if ($('[name$=".Practice_Area"]').val() == null) {
            $('[name$=".Practice_Area"] option').first().prop('selected', 'selected');
        }
    });
    // set practice area value
    $('[name$=".Practice_Area"] option').each(function() {
        if (this.value == $('#event-practice-area').val()) {
            $(this).prop('selected', true);
        }
    });
    // practice area -> practice group
    $('[name$=".Practice_Area"]').on('change', function() {
        const practiceArea = $(this);
        let practiceGroupVal = $('[name$=".Practice_Group"]').val()
        let filtered = [];
        if ($(this).val().length < 1 || $(this).val() == null) {
            return;
        }
        const practiceGroup = $('[name$=".Practice_Group"]').html('');
        PRACTICE_AREA_GROUP.forEach(function(item) {
            if (item.practiceAreaCode == practiceArea.val()) {
                filtered = filtered.concat(item.practiceGroups)
            }
        });
        PRACTICE_GROUP.forEach(function(v, k) {
            if (v == "" || filtered.indexOf(parseInt(k)) >= 0) {
                practiceGroup.append($('<option/>').val(k).text(v))
            }
        });
        practiceGroup.val(practiceGroupVal);
        if (practiceGroup.val() == null) {
            practiceGroup.find('option').first().prop('selected', 'selected');
        }
    });
    $('[name$=".Practice_Area"]').trigger('change');
    // set default value of practice group after populating from practice area
    $('[name$=".Practice_Group"] option').each(function() {
        if (this.value == $('#event-practice-group').val()) {
            $(this).prop('selected', true)
        }
    });
    
    // update action reasons based on action field
    $('[name$=".Action"]', psProviderContext).on('change', function() {
        const actionField = $(this);
        let filtered = [];
        ACTION_REASON_MAP.forEach(function(v, k) {
            if (v.actionCode != actionField.val() ) {
                return;
            }
            filtered.push(v.reasonCode);
        });
        // reset action reason options
        let actionReasonVal = $('[name$=".Action_Reason"]').val();
        const actionReason = $('[name$=".Action_Reason"]').html("");
        ACTION_REASONS.forEach(function(v, k) {
            actionReason.append($('<option/>').val(k).text(v));
        });
        // filter out action reason based on action reason map
        actionReason.find('option').each(function(k,v) {
            if ($(v).val() != "" && filtered.indexOf($(v).val()) < 0 ) {
                $(v).remove();
            }
        });
        actionReason.val(actionReasonVal);
        if (actionReason.val() == null) {
            actionReason.find('option').first().prop('selected', 'selected');
        }
    });
    $('[name$=".Action"]').trigger('change');

    const reloadAddressByCountry = function(country) {
        "use strict";
        // dynamic address display and labels
        let addressCountryConfig = ADDRESS_COUNTRY_CFG[country];
        if (addressCountryConfig == undefined) {
            addressCountryConfig = ADDRESS_COUNTRY_CFG["USA"];
        }
        renderAddresses(currentAddressContext, addressCountryConfig);
        const currentState = $('[name="Current_State"]', currentAddressContext);
        updateStatesList(country, currentState);
        $('input, select', currentAddressContext).each(function() {
            focusInputLabel($(this));
            $(this).on('keyup change focus', function(e) {
                // no option
                if (e.target.type == 'select-one' && $('option', e.target).length < 2) {
                    validateField($(e.target), true)
                    return;
                }
                const targetField = $('[name="i' + instanceID + '.' + $(this).prop('name') + '"]');
                targetField.val(this.value);
                (role != 'recruiter') && validateField($(this));
                focusInputLabel($(this), true);
            });
            $(this).on('blur', function() {
                focusInputLabel($(this));
            });
        });
    }
    // filter state by country (home address)
    $('#EditProfile').on('change', '[name$=".Current_Country"]', function() {
        let currentCountry = this.value;
        // if ($('[name$=".Current_Country"]').val() == 'GBR' || extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val()) == 'GBR') {
            // currentCountry = '';
        // }
        // update country codes
        // disable country code population for now as per andy
        // populateCountryCodes($('[name$=".Cell_business_Country_code"], [name$=".Mobile_Phone_Country_Code"], [name$=".Home_Phone_Country_Code"]'), currentCountry, true);
        reloadAddressByCountry(currentCountry);
    });
    reloadAddressByCountry($('[name$=".Current_Country"]').val());

    // filter state by country (mailing address)
    $('#EditProfile').on('change', '[name$=".Mail_Country"]', function() {
        // dynamic address rendering
        let mailCountryConfig = MAIL_COUNTRY_CFG[this.value];
        if (mailCountryConfig == undefined) {
            mailCountryConfig = MAIL_COUNTRY_CFG["USA"];
        }
        renderAddresses(currentMailContext, mailCountryConfig);
        const currentState = $('[name="Mail_State"]', currentMailContext);
        updateStatesList($(this).val(), currentState);
        $('input, select', currentMailContext).each(function() {
            focusInputLabel($(this));
            $(this).on('change keyup focus', function() {
                const targetField = $('[name="i' + instanceID + '.' + $(this).prop('name') + '"]');
                targetField.val(this.value);
                if (role != 'recruiter') {
                    // validate required field and all
                    validateField($(this));
                    // validate addresses comparison
                    if (this.value.length > 0) {
                        validateField($('[name$=".Mailing_Address_Same"]'), false, validateAddressEqual);
                    }
                }
                focusInputLabel($(this), true);
            });
            $(this).on('blur', function() {
                focusInputLabel($(this));
            });
        });
        // validate new hires
        (role != 'recruiter') && validateField($('[name$=".Mailing_Address_Same"]'), false, validateAddressEqual);
    });
    $('#EditProfile [name$=".Mail_Country"]').trigger('change');

    // update real mailing fields
    const updateTargetField = function() {
        "use strict";
    }
    $('.has-target', currentAddressContext).on('change keyup', updateTargetField);
    $('.has-target', currentMailContext).on('change keyup', updateTargetField);

    // field values calculation
    // factor of comp rate and comp frequecy in annual comp field
    const calculateCompen = function(numStr, operation, isRoundedUp) {
        "use strict";
        let compRate = new Number(numStr.replace(/,/g,''));
        compRate = !compRate.isNaN ? compRate : 0;
        const compFreq = $('[name$=".Comp_Frequency"] option:selected');
        switch (compFreq.text()) {
            case 'Semi-Monthly':
            if (operation == 'multiply') {
                return roundUpDec(compRate * 24, isRoundedUp).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            return roundUpDec(compRate / 24, isRoundedUp).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            break;
            case 'Monthly':
            if (operation == 'multiply') {
                return roundUpDec(compRate * 12, isRoundedUp).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            return roundUpDec(compRate / 12, isRoundedUp).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            break;
            default:
            return (compRate * 0).toFixed(2);
        }
    }
    $('[name$=".Comp_Rate"]').on('keyup paste', function() {
        focusInputLabel($('[name$=".Annual_Compensation"]').val(calculateCompen($('[name$=".Comp_Rate"]').val(), 'multiply')));
        validateField($('[name$=".Annual_Compensation"]'), true);
    });

    $('[name$=".Comp_Frequency"]').on('change keyup paste', function() {
        focusInputLabel($('[name$=".Comp_Rate"]').val(calculateCompen($('[name$=".Offer_Letter_Annual_Compensation"]').val(), null, true)));
        focusInputLabel($('[name$=".Annual_Compensation"]').val(calculateCompen($('[name$=".Comp_Rate"]').val(), 'multiply')));
        validateField($('[name$=".Annual_Compensation"]'), true);
        validateField($('[name$=".Comp_Rate"]'), true);
    });

    $('[name$=".Offer_Letter_Annual_Compensation"]').on('keyup paste blur', function(e) {
        $('[name$=".Comp_Rate"]').val(calculateCompen($(this).val(), null, true));
        $('[name$=".Annual_Compensation"]').val(calculateCompen($('[name$=".Comp_Rate"]').val(), 'multiply'));
    });

    // calculate comp rate is no value
    if ($('[name$=".Comp_Rate"]').val().length < 1) {
        focusInputLabel($('[name$=".Comp_Rate"]').val(calculateCompen(DEFAULT_SALARY)));
        validateField($('[name$=".Comp_Rate"]'), true);
    }
    // calculate annual comp is no value
    if($('[name$=".Annual_Compensation"]').val().length < 1 || $('[name$=".Annual_Compensation"]').val() == '0.00') {
        focusInputLabel($('[name$=".Annual_Compensation"]').val(calculateCompen($('[name$=".Comp_Rate"]').val(), 'multiply')));
        validateField($('[name$=".Annual_Compensation"]'), true);
    }

    // compensation calculation on load
    $('[name$=".Comp_Rate"]').val(calculateCompen($('[name$=".Offer_Letter_Annual_Compensation"]').val(), null, true));
    $('[name$=".Annual_Compensation"]').val(calculateCompen($('[name$=".Comp_Rate"]').val(), 'multiply'));

    // signging bonus toggle comment
    $('[name$=".Signing_Bonus_Date"]').on('change', function() {
        toggleRecruiterDisplayComment($(this), $('[name$=".Signing_Bonus_Comment"]'), role);
    });
    $('[name$=".Signing_Bonus_Date"]').trigger('change');

    // clerkship bonus toggle comment
    $('[name$=".Clerkship_Bonus_Date_1"]').on('change', function() {
        toggleRecruiterDisplayComment($(this), $('[name$=".Clerkship_Bonus_Comment"]'), role);
    });
    $('[name$=".Clerkship_Bonus_Date_1"]').trigger('change');

    // relocation bonus toggle comment
    $('[name$=".Relocation_Bonus_Date"]').on('change', function() {
        toggleRecruiterDisplayComment($(this), $('[name$=".Relocation_Bonus_Comment"]'), role);
    });
    $('[name$=".Relocation_Bonus_Date"]').trigger('change');

    // additional bonus 1 toggle comment
    $('[name$=".Additional_Bonus_Date_1"]').on('change', function() {
        toggleRecruiterDisplayComment($(this), $('[name$=".Additional_Bonus_Comment_1"]'), role);
    });
    $('[name$=".Additional_Bonus_Date_1"]').trigger('change');
    // additional bonus 2 toggle comment
    $('[name$=".Additional_Bonus_Date_2"]').on('change', function() {
        toggleRecruiterDisplayComment($(this), $('[name$=".Additional_Bonus_Comment_2"]'), role);
    });
    $('[name$=".Additional_Bonus_Date_2"]').trigger('change');
    // additional bonus 3 toggle comment
    $('[name$=".Additional_Bonus_Date_3"]').on('change', function() {
        toggleRecruiterDisplayComment($(this), $('[name$=".Additional_Bonus_Comment_3"]'), role);
    });
    $('[name$=".Additional_Bonus_Date_3"]').trigger('change');
    // additional bonus 4 toggle comment
    $('[name$=".Additional_Bonus_Date_4"]').on('change', function() {
        toggleRecruiterDisplayComment($(this), $('[name$=".Additional_Bonus_Comment_4"]'), role);
    });
    $('[name$=".Additional_Bonus_Date_4"]').trigger('change');
    // additional bonus 5 toggle comment
    $('[name$=".Additional_Bonus_Date_5"]').on('change', function() {
        toggleRecruiterDisplayComment($(this), $('[name$=".Additional_Bonus_Comment_5"]'), role);
    });
    $('[name$=".Additional_Bonus_Date_5"]').trigger('change');
    // additional bonus 6 toggle comment
    $('[name$=".Additional_Bonus_Date_6"]').on('change', function() {
        toggleRecruiterDisplayComment($(this), $('[name$=".Additional_Bonus_Comment_6"]'), role);
    });
    $('[name$=".Additional_Bonus_Date_6"]').trigger('change');
    // additional bonus 7 toggle comment
    $('[name$=".Additional_Bonus_Date_7"]').on('change', function() {
        toggleRecruiterDisplayComment($(this), $('[name$=".Additional_Bonus_Comment_7"]'), role);
    });
    $('[name$=".Additional_Bonus_Date_7"]').trigger('change');

    $('.national-id', psProviderContext).each(function(k, v) {
        // if no national id country selected
        // clear and disable proceeding fields
        if (!fieldHasVal($(v).find('select').first())) {
            $(v).find('select:not(:first), input:not(:checkbox)').val('').prop('disabled', 'disabled');
        }
    });
    // hide show fields/sections that has contents
    $.each($('.national-id', psProviderContext).find('input[type="text"],select'), function(k, v) {
        if (fieldHasVal($(v))) {
            $(v).closest('.national-id').show();
        }
    });
    const nationalIdSections = $('.national-id:visible', psProviderContext);
    if (nationalIdSections.length < 1) {
        $('.national-id').first().show();
        $('.remove-section').hide();
    }
    if (nationalIdSections.length == 1) {
        $('.remove-section').hide();
    }
    if (nationalIdSections.length == 4) {
        $('#add-additional-citizenship').hide();
    }

    // hide show clerkship sections that has contents
    $.each($('.clerkship-section', psProviderContext).find('input[type="text"],select'), function(k, v) {
        if (extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val()) == 'GBR') {
            return;
        }
        if (fieldHasVal($(v))) {
            $(v).closest('.clerkship-section').show();
        }
    });
    const clerkshipSections = $('.clerkship-section:visible', psProviderContext);
    if (clerkshipSections.length < 1) {
        $('.clerkship-section').first().show();
        $('.remove-clerkship-section').hide();
    }
    if (clerkshipSections.length == 1) {
        $('.remove-clerkship-section').hide();
    }
    if (clerkshipSections.length == 2) {
        $('#add-additional-clerkship').hide();
    }

    // hide show bonus sections that has contents
    $.each($('.additional-bonus-section', psProviderContext).find('input[type="text"],select'), function(k, v) {
        if (fieldHasVal($(v))) {
            $(v).closest('.additional-bonus-section').show();
        }
    });
    const bonusSections = $('.additional-bonus-section:visible', psProviderContext);
    if (bonusSections.length < 1) {
        $('.additional-bonus-section').first().show();
        $('.remove-bonus-section').hide();
    }
    if (bonusSections.length == 1) {
        $('.remove-bonus-section').hide();
    }
    if (bonusSections.length == 7) {
        $('#add-additional-bonus').hide();
    }

    // hide show referral sections that has contents
    $.each($('.referral-bonus-section', psProviderContext).find('input[type="text"],select'), function(k, v) {
        if (fieldHasVal($(v))) {
            $(v).closest('.referral-bonus-section').show();
        }
    });
    const referralSections = $('.referral-bonus-section:visible', psProviderContext);
    if (referralSections.length < 1) {
        $('.referral-bonus-section').first().show();
        $('remove-referral-section').hide();
    }
    if (referralSections.length == 1) {
        $('.remove-referral-section').hide();
    }
    if (referralSections.length == 3) {
        $('#add-additional-referral').hide();
    }

    // set default once appeared
    $('[name$=".National_ID_Country-1"]').each(setDefaultCountry);

    // show citizenship ssections by event triggers
    $('#add-additional-citizenship').on('click', function() {
        $('.national-id:hidden').first().show('fast', function() {
            validateField($(this).find('select').first().trigger('change'), true);
        });
        if ($('.national-id:hidden').length < 1) {
            $(this).hide();
            return;
        }
        $('.remove-section').show();
    });

    // filter Citizenship Status by Citizenship Country
    // Country 1
    $('[name$="Citizenship_Country_1"]').change(function() {
        updateCitizenshipStatusList($(this).val(), $('#EditProfile [name$=".Citizenship_Status_1"]'));
        if ($('#EditProfile [name$=".Citizenship_Status_1"] option').length <= 1 && $('#EditProfile [name$=".Citizenship_Status_1"] option')[0].value == "") {
            validateField($('[name$=".Citizenship_Status_1"]').data('validation', null), true);
        }
        else {
            $('[name$=".Citizenship_Status_1"]').data('validation', 'required');
        }
    });
    $('[name$="Citizenship_Country_1"]').trigger("change");
    // Country 2
    $('[name$="Citizenship_Country_2"]').change(function() {
        updateCitizenshipStatusList($(this).val(), $('#EditProfile [name$=".Citizenship_Status_2"]'));
        if ($('#EditProfile [name$=".Citizenship_Status_2"] option').length <= 1 && $('#EditProfile [name$=".Citizenship_Status_2"] option')[0].value == "") {
            validateField($('[name$=".Citizenship_Status_2"]').data('validation', null), true);
        }
        else {
            $('[name$=".Citizenship_Status_2"]').data('validation', 'required');
        }
    });
    $('[name$="Citizenship_Country_2"]').trigger("change");
    // Country 3
    $('[name$="Citizenship_Country_3"]').change(function() {
        updateCitizenshipStatusList($(this).val(), $('#EditProfile [name$=".Citizenship_Status_3"]'));
        if ($('#EditProfile [name$=".Citizenship_Status_3"] option').length <= 1 && $('#EditProfile [name$=".Citizenship_Status_3"] option')[0].value == "") {
            validateField($('[name$=".Citizenship_Status_3"]').data('validation', null), true);
        }
        else {
            $('[name$=".Citizenship_Status_3"]').data('validation', 'required');
        }
    });
    $('[name$="Citizenship_Country_3"]').trigger("change");
    // Country 4
    $('[name$="Citizenship_Country_4"]').change(function() {
        updateCitizenshipStatusList($(this).val(), $('#EditProfile [name$=".Citizenship_Status_4"]'));
        if ($('#EditProfile [name$=".Citizenship_Status_4"] option').length <= 1 && $('#EditProfile [name$=".Citizenship_Status_4"] option')[0].value == "") {
            validateField($('[name$=".Citizenship_Status_4"]').data('validation', null), true);
        }
        else {
            $('[name$=".Citizenship_Status_4"]').data('validation', 'required');
        }
    });
    $('[name$="Citizenship_Country_4"]').trigger("change");


    // show citizenship that are filled
    $('.citizenship input:not([type="hidden"]), .citizenship select').each(function(k,v) {
        if (fieldHasVal($(v))) {
            $(v).closest('.citizenship').show();
        }
    });

    // show first if none is filled
    const citizenshipSections = $('.citizenship:visible');
    if (citizenshipSections.length < 1) {
        $('.citizenship').first().show();
    }
    if (citizenshipSections.length <= 1) {
        $('.remove-citizenship').hide();
    }
    if (citizenshipSections.length == 4) {
        $('#add-citizenship').hide();
    }

    // show citizenship visa that are filled
    $('.citizenship-visa input:not([type="hidden"]), .citizenship-visa select').each(function(k,v) {
        if (fieldHasVal($(v))) {
            $(v).closest('.citizenship-visa').show();
        }
    });
    // show first if none is filled
    const citizenshipVisaSections = $('.citizenship-visa:visible');
    if (citizenshipVisaSections.length < 1) {
        $('.citizenship-visa').first().show();
    }
    if (citizenshipVisaSections.length <= 1) {
        $('.remove-citizenship-visa').hide();
    }
    if (citizenshipVisaSections.length == 4) {
        $('#add-citizenship-visa').hide();
    }


    // show citizenship fields
    $('#add-citizenship').on('click', function() {
        const section = $('.citizenship:hidden').first();
        section.show();
        switch (section.find('[name*="Citizenship_Country"]').prop('name').split('.')[1]) {
            case "Citizenship_Country_1":
                triggerEvents($('[name$=".Citizenship_Country_1"]'));
                break;
            case "Citizenship_Country_2":
                triggerEvents($('[name$=".Citizenship_Country_2"]'));
                break;
            case "Citizenship_Country_3":
                triggerEvents($('[name$=".Citizenship_Country_3"]'));
                break;
            case "Citizenship_Country_4":
                triggerEvents($('[name$=".Citizenship_Country_4"]'));;
                break;
        }
        if ($('.citizenship:visible').length <= 1) {
            $(this).show();
            $('.remove-citizenship').hide();
            return;
        }
        if ($('.citizenship:visible').length == 4) {
            $(this).hide();
            $('.remove-citizenship').show();
            return;
        }
        $(this).show();
        $('.remove-citizenship').show();
    });

    // show citizenship visa fields
    $('#add-citizenship-visa').on('click', function() {
        const section = $('.citizenship-visa:hidden').first();
        section.show();
        switch (section.find('[name*="Visa_Country"]').prop('name').split('.')[1]) {
            case "Visa_Country_1":
                triggerEvents($('[name$=".Visa_Country_1"]'));
                break;
            case "Visa_Country_2":
                triggerEvents($('[name$=".Visa_Country_2"]'));
                break;
            case "Visa_Country_3":
                triggerEvents($('[name$=".Visa_Country_3"]'));
                break;
            case "Visa_Country_4":
                triggerEvents($('[name$=".Visa_Country_4"]'));;
                break;
        }
        if ($('.citizenship-visa:visible').length <= 1) {
            $(this).show();
            $('.remove-citizenship-visa').hide();
            return;
        }
        if ($('.citizenship-visa:visible').length == 4) {
            $(this).hide();
            $('.remove-citizenship-visa').show();
            return;
        }
        $(this).show();
        $('.remove-citizenship-visa').show();
    });

    // initiate datepickers
    const dateFields = $('.date-field').formatDatePicker(dateConfig, extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val()))
        .datepicker("option", "onSelect", function(dateText, instance) {
            // pass value from static fields to eup dates EUPDATE_display will get from EUPDATE_pseudo
            $('[name$=".' + $(this).prop('name').replace('_pseudo', '_display') + '"]')
                .datepicker('setDate', $(this).datepicker('getDate'));
            validateField($(this)); 
            focusInputLabel($(this));
        });

    // assign back the values from eup to static datepicker fields on load
    dateFields.each(function() {
        if ($('[name$=".' + $(this).prop('name').replace('_pseudo', '_display') + '"]').datepicker('getDate')) {
            $(this).datepicker('setDate', $('[name$=".' + $(this).prop('name').replace('_pseudo', '_display') + '"]').datepicker('getDate'));
        }
    });

    // show passport dates that are filled
    $('input', '.passport-dates').each(function(_,v) {
        if (fieldHasVal($(v))) {
            $(v).parent().parent().find('.passport-dates').show()
        }
    });

    
    // hide citizenship fields
    $('.remove-citizenship').on('click', function() {
        const section = $(this).closest('section').hide();
        const hiddenFields = section.find('input:not([type="hidden"]), select');
        section.find('input:not([type="hidden"]):not(:radio), select').val('');
        section.find('.date-field').trigger("change");
        section.find('input:radio').prop('checked', false);
        focusInputLabel(hiddenFields);
        hiddenFields.each(function(k,v) {
            validateField($(v), true);
        });
        if ($('.citizenship:visible').length <= 1) {
            $('.remove-citizenship').hide();
        }
        if ($('.citizenship:visible').length < 4) {
            $('#add-citizenship').show();
        }
    });

    // hide citizenship visa fields
    $('.remove-citizenship-visa').on('click', function() {
        const section = $(this).closest('section').hide();
        const hiddenFields = section.find('input:not([type="hidden"]), select');
        section.find('input:not([type="hidden"]):not(:radio), select').val('');
        section.find('.date-field').trigger("change");
        section.find('input:radio').prop('checked', false);
        focusInputLabel(hiddenFields);
        hiddenFields.each(function(k,v) {
            validateField($(v), true);
        });
        if ($('.citizenship-visa:visible').length <= 1) {
            $('.remove-citizenship-visa').hide();
        }
        if ($('.citizenship-visa:visible').length < 4) {
            $('#add-citizenship-visa').show();
        }
    });

    // hide show passport info
    $('[name$="Passport"]').change(function() {
        if ($('[name$="Passport"][value="Y"]').prop("checked")) {
            $('.passport-info').show();
        }
        else {
            const section = $('.passport-info').hide();
            const hiddenFields = section.find('input:not([type="hidden"]), select');
            section.find('input:not([type="hidden"]):not(:radio), select').val('');
            section.find('.date-field').trigger("change");
            section.find('input:radio').prop('checked', false);
            focusInputLabel(hiddenFields);
            hiddenFields.each(function(k,v) {
                validateField($(v), true);
            });
        }
    });
    $('[name$="Passport"]').trigger("change");
    $('[name$="Passport_2"]').change(function() {
        if ($('[name$="Passport_2"][value="Y"]').prop("checked")) {
            $('.passport-info-2').show();
        }
        else {
            const section = $('.passport-info-2').hide();
            const hiddenFields = section.find('input:not([type="hidden"]), select');
            section.find('input:not([type="hidden"]):not(:radio), select').val('');
            section.find('.date-field').trigger("change");
            section.find('input:radio').prop('checked', false);
            focusInputLabel(hiddenFields);
            hiddenFields.each(function(k,v) {
                validateField($(v), true);
            });
        }
    });
    $('[name$="Passport_2"]').trigger("change");
    $('[name$="Passport_3"]').change(function() {
        if ($('[name$="Passport_3"][value="Y"]').prop("checked")) {
            $('.passport-info-3').show();
        }
        else {
            const section = $('.passport-info-3').hide();
            const hiddenFields = section.find('input:not([type="hidden"]), select');
            section.find('input:not([type="hidden"]):not(:radio), select').val('');
            section.find('.date-field').trigger("change");
            section.find('input:radio').prop('checked', false);
            focusInputLabel(hiddenFields);
            hiddenFields.each(function(k,v) {
                validateField($(v), true);
            });
        }
    });
    $('[name$="Passport_3"]').trigger("change");
    $('[name$="Passport_4"]').change(function() {
        if ($('[name$="Passport_4"][value="Y"]').prop("checked")) {
            $('.passport-info-4').show();
        }
        else {
            const section = $('.passport-info-4').hide();
            const hiddenFields = section.find('input:not([type="hidden"]), select');
            section.find('input:not([type="hidden"]):not(:radio), select').val('');
            section.find('.date-field').trigger("change");
            section.find('input:radio').prop('checked', false);
            focusInputLabel(hiddenFields);
            hiddenFields.each(function(k,v) {
                validateField($(v), true);
            });
        }
    });
    $('[name$="Passport_4"]').trigger("change");

    $('[name$=".Passport_Number_1"], [name$=".Passport_Number_2"], [name$=".Passport_Number_3"], [name$=".Passport_Number_4"]').on("keyup paste", function() {
        const passportNum = $(this);
        const pseudoDates = $('.passport-dates', passportNum.closest('.input_wrapper').parent())
        if (!passportNum.val().length) {
            pseudoDates.hide()
            const pseudoInput = pseudoDates.find('input')
            pseudoInput.val('')
            $('[name$=".' + pseudoInput.prop('name').replace('_pseudo', '_display') + ']').datepicker('setDate', null);
            return
        }
        pseudoDates.show()
    });


    // hide show visa info
    const visaUpdate = function() {
        if ($('[name$="Visa_1"][value="Y"]').prop("checked")) {
            $('.visa-info').find('citizenship-visa')
            $('.visa-info').show();
            if ($('.citizenship-visa:visible').length < 1) {
                $('#add-citizenship-visa').trigger("click");
            }
        }
        else {
            const section = $('.visa-info').hide();
            const hiddenFields = section.find('input:not([type="hidden"]), select');
            section.find('input:not([type="hidden"]):not(:radio), select').val('');
            section.find('.date-field').trigger("change");
            section.find('input:radio').prop('checked', false);
            focusInputLabel(hiddenFields);
            hiddenFields.each(function(k,v) {
                validateField($(v), true);
            });
            $('.remove-citizenship-visa').trigger("click");
        }
    }
    $('[name$="Visa_1"]').change(visaUpdate);
    visaUpdate();

    // filter Visa Type by Visa Country
    // Country 1
    $('[name$="Visa_Country_1"]').change(function() {
        filterVisaType($(this).val(), $('#EditProfile [name$=".Visa_Type_1"]'));
        if ($('#EditProfile [name$=".Visa_Type_1"] option').length <= 1 && $('#EditProfile [name$=".Visa_Type_1"] option')[0].value == "") {
            validateField($('[name$=".Visa_Type_1"]').data('validation', null), true);
        }
        else {
            $('[name$=".Visa_Type_1"]').data('validation', 'required');
        }
    });
    $('[name$="Visa_Country_1"]').trigger("change");
    // Country 2
    $('[name$="Visa_Country_2"]').change(function() {
        filterVisaType($(this).val(), $('#EditProfile [name$=".Visa_Type_2"]'));
        if ($('#EditProfile [name$=".Visa_Type_2"] option').length <= 1 && $('#EditProfile [name$=".Visa_Type_2"] option')[0].value == "") {
            validateField($('[name$=".Visa_Type_2"]').data('validation', null), true);
        }
        else {
            $('[name$=".Visa_Type_2"]').data('validation', 'required');
        }
    });
    $('[name$="Visa_Country_2"]').trigger("change");
    // Country 3
    $('[name$="Visa_Country_3"]').change(function() {
        filterVisaType($(this).val(), $('#EditProfile [name$=".Visa_Type_3"]'));
        if ($('#EditProfile [name$=".Visa_Type_3"] option').length <= 1 && $('#EditProfile [name$=".Visa_Type_3"] option')[0].value == "") {
            validateField($('[name$=".Visa_Type_3"]').data('validation', null), true);
        }
        else {
            $('[name$=".Visa_Type_3"]').data('validation', 'required');
        }
    });
    $('[name$="Visa_Country_3"]').trigger("change");
    // Country 4
    $('[name$="Visa_Country_4"]').change(function() {

        filterVisaType($(this).val(), $('#EditProfile [name$=".Visa_Type_4"]'));
        if ($('#EditProfile [name$=".Visa_Type_4"] option').length <= 1 && $('#EditProfile [name$=".Visa_Type_3"] option')[0].value == "") {
            validateField($('[name$=".Visa_Type_4"]').data('validation', null), true);
        }
        else {
            $('[name$=".Visa_Type_4"]').data('validation', 'required');
        }
    });
    $('[name$="Visa_Country_4"]').trigger("change");

    // show emergency contact sections by event triggers
    $('#add-emergency-contact').on('click', function() {
        $('.emergency-section:hidden').first().show();
        if ($('.emergency-section:hidden').length < 1) {
            $(this).hide();
            return;
        }
        $('.remove-emergency-contact').show();
    });

    // show clerkship sections by event triggers
    $('#add-additional-clerkship').on('click', function() {
        $('.clerkship-section:hidden').first().show();
        if ($('.clerkship-section:hidden').length < 1) {
            $(this).hide();
        }
        $('.remove-clerkship-section').show();
    });

    // show bonus sections by event triggers
    $('#add-additional-bonus').on('click', function() {
        $('.additional-bonus-section:hidden').first().show();
        if ($('.additional-bonus-section:hidden').length < 1) {
            $(this).hide();
        }
        $('.remove-bonus-section').show();
    });

    // show referral bonus sections by event triggers
    $('#add-additional-referral').on('click', function() {
        $('.referral-bonus-section:hidden').first().show();
        if ($('.referral-bonus-section:hidden').length < 1) {
            $(this).hide();
            return;
        }
        $('.remove-referral-section').show();
    });

    // show emergency contacts that are filled
    $('.emergency-section input:not([type="hidden"]), .emergency-section select', psProviderContext).each(function(k,v) {
        if (fieldHasVal($(v))) {
            $(v).closest('.emergency-section').show();
        }
    });
    // show first if none is filled
    const visibleEmergencySections = $('.emergency-section:visible', psProviderContext);
    // is no emergency sections are shown, show first
    if (visibleEmergencySections.length < 1) {
        $('.emergency-section:hidden', psProviderContext).first().show();
    }
    // is at least not 1 emergency sections are shown, hide remove button
    if (visibleEmergencySections.length <= 1) {
        $('.remove-emergency-contact', psProviderContext).hide();
    }
    // is all emergency sections are shown, hide add button
    if (visibleEmergencySections.length == 3) {
        $('#add-emergency-contact', psProviderContext).hide();
    }

    // hide sections by event triggers
    // hide national id fields
    $('.remove-section', psProviderContext).on('click', function() {
        const section = $(this).closest('section')
        const hiddenFields = section.find('input[type="text"]:not(:hidden), select').val('');
        section.find('input[type="checkbox"]').prop('checked', false);
        section.hide();
        focusInputLabel(hiddenFields);
        hiddenFields.each(function(k,v) {
            validateField($(v), true);
        });
        if ($('.national-id:visible').length <= 1) {
            $('.remove-section').hide();
        }
        if ($('.national-id:hidden').length > 0) {
            $('#add-additional-citizenship').show();
        }
        hiddenFields.first().trigger('change')
        hiddenFields.prop('disabled', false);
    });
    // hide emergency contacts
    $('.remove-emergency-contact').on('click', function() {
        const section = $(this).closest('section').hide();
        const hiddenFields = section.find('input:not([type="hidden"]), select');
        section.find('input:not([type="hidden"]):not(:radio), select').val('');
        section.find('input:radio').prop('checked', false);
        focusInputLabel(hiddenFields);
        hiddenFields.each(function(k,v) {
            validateField($(v), true);
        });
        if ($('.emergency-section:visible').length <= 1) {
            $('.remove-emergency-contact').hide();
        }
        if ($('.emergency-section:visible').length < 3) {
            $('#add-emergency-contact').show();
        }
        hiddenFields.first().trigger('keyup');
    });
    // hide bonus sections
    $('.remove-bonus-section').on('click', function() {
        const section = $(this).closest('section').hide();
        const hiddenFields = section.find('input:not([type="hidden"]), select');
        section.find('input:not([type="hidden"]):not(:radio), select').val('');
        // hide comment fields
        section.find('select').trigger('change');
        section.find('input:radio').prop('checked', false);
        focusInputLabel(hiddenFields);
        hiddenFields.each(function(k,v) {
            validateField($(v), true);
        });
        if ($('.additional-bonus-section:visible').length <= 1) {
            $('.remove-bonus-section').hide();
        }
        if ($('.additional-bonus-section:visible').length < 7) {
            $('#add-additional-bonus').show();
        }
    });
    // hide clerkship sections
    $('.remove-clerkship-section').on('click', function() {
        const section = $(this).closest('section').hide();
        const hiddenFields = section.find('input:not([type="hidden"]), select');
        section.find('input:not([type="hidden"]):not(:radio), select').val('');
        section.find('input:radio').prop('checked', false);
        focusInputLabel(hiddenFields);
        hiddenFields.each(function(k,v) {
            validateField($(v), true);
        });
        if ($('.clerkship-section:visible').length <= 1) {
            $('.remove-clerkship-section').hide();
        }
        if ($('.clerkship-section:visible').length < 2) {
            $('#add-additional-clerkship').show();
        }
    });
    // hide referral bonus sections
    $('.remove-referral-section').on('click', function() {
        const section = $(this).closest('section').hide();
        const hiddenFields = section.find('input:not([type="hidden"]), select');
        section.find('input:not([type="hidden"]):not(:radio), select').val('');
        section.find('input:radio').prop('checked', false);
        focusInputLabel(hiddenFields);
        hiddenFields.each(function(k,v) {
            validateField($(v), true);
        });
        if ($('.referral-bonus-section:visible').length <= 1) {
            $('.remove-referral-section').hide();
        }
        if ($('.referral-bonus-section:visible').length < 3) {
            $('#add-additional-referral').show();
        }
        hiddenFields.first().trigger('keyup');
    });
    // hide mailing address field
    $('input[name$=".Mailing_Address_Same"]', psProviderContext).on('change', function() {
        let shouldShow = false;
        $('#EditProfile input[name$=".Mailing_Address_Same"]').each(function(k,v) {
            if (isCheckboxChecked($(this)) && $(this).val() == 'N') {
                shouldShow = true;
            }
        });
        // set aside mail country for later use
        if (!$('[name$=".Mail_Country"]').data('initial-value')) {
            $('[name$=".Mail_Country"]').data('initial-value', $('[name$=".Mail_Country"]').val());
        }

        // set aside mail address1 for later use
        if (!$('[name$=".Mail_Address1"]').data('initial-value')) {
            $('[name$=".Mail_Address1"]').data('initial-value', $('[name$=".Mail_Address1"]').val());
        }
        
        // set aside mail address2 for later use
        if (!$('[name$=".Mail_Address2"]').data('initial-value')) {
            $('[name$=".Mail_Address2"]').data('initial-value', $('[name$=".Mail_Address2"]').val());
        }
        
        // set aside mail address3 for later use
        if (!$('[name$=".Mail_Address3"]').data('initial-value')) {
            $('[name$=".Mail_Address3"]').data('initial-value', $('[name$=".Mail_Address3"]').val());
        }
        
        // set aside mail address4 for later use
        if (!$('[name$=".Mail_Address4"]').data('initial-value')) {
            $('[name$=".Mail_Address4"]').data('initial-value', $('[name$=".Mail_Address4"]').val());
        }
        
        // set aside mail city for later use
        if (!$('[name$=".Mail_City"]').data('initial-value')) {
            $('[name$=".Mail_City"]').data('initial-value', $('[name$=".Mail_City"]').val());
        }
        
        // set aside mail state for later use
        if (!$('[name$=".Mail_State"]').data('initial-value')) {
            $('[name$=".Mail_State"]').data('initial-value', $('[name$=".Mail_State"]').val());
        }
        
        // set aside mail postal for later use
        if (!$('[name$=".Mail_Postal_Code"]').data('initial-value')) {
            $('[name$=".Mail_Postal_Code"]').data('initial-value', $('[name$=".Mail_Postal_Code"]').val());
        }
        
        // set aside mail address county for later use
        if (!$('[name$=".Mailing_Address_County"]').data('initial-value')) {
            $('[name$=".Mailing_Address_County"]').data('initial-value', $('[name$=".Mailing_Address_County"]').val());
        }
        
        // set aside mail publish for later use
        if (!$('[name$=".Mail_Publish"]').data('initial-value')) {
            $('[name$=".Mail_Publish"]').data('initial-value', $('[name$=".Mail_Publish"]:checked').val());
        }

        if (shouldShow) {
            $('.mailing-address').show();
            $('[name$=".Mail_Country"]').val($('[name$=".Mail_Country"]').data('initial-value'));
            focusInputLabel($('[name$=".Mail_Country"]').trigger('change'));
            $('[name$=".Mail_Address1"]').val($('[name$=".Mail_Address1"]').data('initial-value'));
            $('[name$=".Mail_Address2"]').val($('[name$=".Mail_Address2"]').data('initial-value'));
            $('[name$=".Mail_Address3"]').val($('[name$=".Mail_Address3"]').data('initial-value'));
            $('[name$=".Mail_Address4"]').val($('[name$=".Mail_Address4"]').data('initial-value'));
            $('[name$=".Mail_City"]').val($('[name$=".Mail_City"]').data('initial-value'));
            $('[name$=".Mail_State"]').val($('[name$=".Mail_State"]').data('initial-value'));
            $('[name$=".Mail_Postal_Code"]').val($('[name$=".Mail_Postal_Code"]').data('initial-value'));
            $('[name$=".Mailing_Address_County"]').val($('[name$=".Mailing_Address_County"]').data('initial-value'));
        $('input[name$=".Mail_Publish"][value="'+$('[name$=".Mail_Publish"]').data('initial-value')+'"]').prop('checked', 'checked');
            return;
        }
        // clear real input fields
        $('[name$=".Mail_Address1"], [name$=".Mail_Address2"], [name$=".Mail_Address3"], [name$=".Mail_Address4"], [name$=".Mail_City"], [name$=".Mail_State"], [name$=".Mail_Postal_Code"], [name$=".Mailing_Address_County"]').val('');
        $('[name$=".Mail_Publish"]').prop('checked', false);
        // clear pseudo fields
        const inputFields = $('.mailing-address').hide().find('input:not([name$=".Mail_Publish"]), select').val('');
        focusInputLabel(inputFields);
        inputFields.each(function() {
            validateField($(this), true);
        });
        validateField($('[name$=".Mailing_Address_Same"]'), false, validateAddressEqual);
    });
    $('#EditProfile input[name$=".Mailing_Address_Same"]').trigger('change');

    // hide publish selection if phone fields are empty
    const phones = $('[name$=".mobile_business"], [name$=".Mobile"], [name$=".Home_Phone"]');
    phones.on('keyup paste', function() {
        let filledField = '';
        let totalFilled = 0;
        phones.each(function(k,v) {
            if (v.value.length > 0) {
                totalFilled++;
                filledField = $(v).prop('name').split('.')[1];
            }
        });
        // if only one if filled then it is what it is
        if (totalFilled == 1) {
            switch(filledField) {
                case 'Home_Phone':
                $('[name$=".Preferred_Phone"]').val('Home');
                break;
                case 'Mobile':
                $('[name$=".Preferred_Phone"]').val('CEL1');
                break;
                default:
                $('[name$=".Preferred_Phone"]').val('CELN');
            }
        }
        // if more than one is filled then default to business
        if (totalFilled == 0 || totalFilled > 1) {
            $('[name$=".Preferred_Phone"]').val('CELN');
        }

        // toggle publish sections
        let publishName = $(this).prop('name').split('.')[1];
        if (publishName == 'mobile_business') {
            return;
        }
        if ($(this).val().length > 0) {
            $('[data-publish-group="' + publishName + '"]').show();
            return;
        }
        focusInputLabel($('[data-publish-group="' + publishName + '"]').hide());
    });
    $('[name$=".mobile_business"], [name$=".Mobile"], [name$=".Home_Phone"]').trigger('paste');

    // remove options that does not belong to event country
    // remove countries not in event for nation IDs; only needed this once
    $('[name$=".National_ID_Country-1"] option, [name$=".National_ID_Country-2"] option, [name$=".National_ID_Country-3"] option, [name$=".National_ID_Country-4"] option').each(function() {
        let optionsToRetain = [""];
        COUNTRY_CODES.forEach(function(v,k) {
            optionsToRetain.push(v.country);
        });
        if ($.inArray($(this).val(), optionsToRetain) == -1) {
            ($(this).val().length > 0) && $(this).remove();
        }
    });
    // remove id types not in country selected
    const nationalIDEvents = function() {
        updateIDTypes(); 
        toggleAwaitingNationalID($(this).prop('name'));
        const nationalID = $(this);
        // id national id isn't selected
        if (nationalID.val().length < 1) {
            $(this).closest('.national-id').find('select, input[type="text"]').each(function(k, v) {
                // disable national id type and id number
                if (k == 1 || k == 2) {
                    validateField($(v), true);
                    $(v).val('').prop('disabled', 'disabled');
                }
                $(v).unmask();
                focusInputLabel($(v));
            });
            return false;
        }
        focusInputLabel(nationalID);
        // dont't
        $(this).closest('.national-id').find('select, input[type="text"]').each(function(k, v) {
            if (k == 1 || k == 2) {
                $(v).prop('disabled', false);
            }
            if ($(v).prop('name') != nationalID.prop('name')) {
                validateField($(v), true);
            }
            $(v).unmask();
            focusInputLabel($(v));
        });
        focusInputLabel(nationalID);
    };
    $('[name$=".National_ID_Country-1"], [name$=".National_ID_Country-2"], [name$=".National_ID_Country-3"], [name$=".National_ID_Country-4"]', psProviderContext).on('change', nationalIDEvents);
    $('[name$=".National_ID_Country-1"], [name$=".National_ID_Country-2"], [name$=".National_ID_Country-3"], [name$=".National_ID_Country-4"]', psProviderContext).trigger('change');

    // update field format based on id types field
    $('[name$=".National_ID_Type_1"], [name$=".National_ID_Type_2"], [name$=".National_ID_Type_3"], [name$=".National_ID_Type_4"]', psProviderContext).on('change', function() {
        toggleAwaitingNationalID($(this).prop('name'));
        updateIDNumberFormat($(this).prop('name'));
    });
    $('[name$=".National_ID_Type_1"], [name$=".National_ID_Type_2"], [name$=".National_ID_Type_3"], [name$=".National_ID_Type_4"]', psProviderContext).each(function() {
        toggleAwaitingNationalID($(this).prop('name'));
        updateIDNumberFormat($(this).prop('name'));
    });

    // toggle field placeholder and masking if awaiting id is checked
    $('[name$=".Awaiting_National_ID_Number1"], [name$=".Awaiting_National_ID_Number2"], [name$=".Awaiting_National_ID_Number3"], [name$=".Awaiting_National_ID_Number4"]').on('change', function() {
        toggleNationalIDPlaceholder($(this));
    });
    // trigger on load
    $('[name$=".Awaiting_National_ID_Number1"], [name$=".Awaiting_National_ID_Number2"], [name$=".Awaiting_National_ID_Number3"], [name$=".Awaiting_National_ID_Number4"]').each(function() {
        toggleNationalIDPlaceholder($(this));
    });

    // update name from legal name
    $('[name$=".Legal_Last_Name"]').on('keyup paste', function(e) {
        $('#Last_Name').val(e.target.value)
    });
    $('[name$=".Legal_First_Name"]').on('keyup paste', function(e) {
        $('#First_Name').val(e.target.value)
    });

    // toggle fields dependencies
    // emergency fields
    $('[name$=".Emergency_Contact_Name_1"]', psProviderContext).on('keyup paste', function() {
        if (role != 'newhire') {
            return;
        }
        updatePrimaryEmergency();
        requireTargetIfNotEmpty($(this), $('[name$=".Emergency_Contact_Phone_1"], [name$=".Emergency_Contact_Phone_Country_Code_1"], [name$=".Emergency_Contact_Relationship_1"], [name$=".Emergency_Contact_Primary_1"]'));
        let additionalPhoneFields = $('[name$=".Emergency_Contact_Phone_Add_1"], [name$=".Additional_Phone_Type_1"], [name$=".Emergency_Contact_Phone_Add_Country_Code_1"]');
        if (this.value.length <= 0) {
            additionalPhoneFields.each(function() {
                validateField($(this).data('validation', ''), true);
            });
            return;
        }
        requireOneFilled(additionalPhoneFields);
    });
    $('#EditProfile [name$=".Emergency_Contact_Name_1"]').trigger('keyup');
    $('[name$=".Emergency_Contact_Name_2"]', psProviderContext).on('keyup paste', function() {
        if (role != 'newhire') {
            return;
        }
        updatePrimaryEmergency();
        requireTargetIfNotEmpty($(this), $('[name$=".Emergency_Contact_Phone_2"], [name$=".Emergency_Contact_Phone_Country_Code_2"], [name$=".Emergency_Contact_Relationship_2"], [name$=".Emergency_Contact_Primary_2"]'));
        let additionalPhoneFields = $('[name$=".Emergency_Contact_Phone_Add_2"], [name$=".Additional_Phone_Type_2"], [name$=".Emergency_Contact_Phone_Add_Country_Code_2"]');
        if (this.value.length <= 0) {
            additionalPhoneFields.each(function() {
                validateField($(this).data('validation', ''), true);
            });
            return;
        }
        requireOneFilled(additionalPhoneFields);
    });
    $('#EditProfile [name$=".Emergency_Contact_Name_2"]').trigger('keyup');
    $('[name$=".Emergency_Contact_Name_3"]', psProviderContext).on('keyup paste', function() {
        if (role != 'newhire') {
            return;
        }
        updatePrimaryEmergency();
        requireTargetIfNotEmpty($(this), $('[name$=".Emergency_Contact_Phone_3"], [name$=".Emergency_Contact_Phone_Country_Code_3"], [name$=".Emergency_Contact_Relationship_3"], [name$=".Emergency_Contact_Primary_3"]'));
        let additionalPhoneFields = $('[name$=".Emergency_Contact_Phone_Add_3"], [name$=".Additional_Phone_Type_3"], [name$=".Emergency_Contact_Phone_Add_Country_Code_3"]');
        if (this.value.length <= 0) {
            additionalPhoneFields.each(function() {
                validateField($(this).data('validation', ''), true);
            });
            return;
        }
        requireOneFilled(additionalPhoneFields);
    });
    $('#EditProfile [name$=".Emergency_Contact_Name_3"]').trigger('keyup');

    // primary emergency toggling
    $('[name$=".Emergency_Contact_Primary_1"], [name$=".Emergency_Contact_Primary_2"], [name$=".Emergency_Contact_Primary_3"]').on('change', function() {
        updatePrimaryEmergency();
    });

    // require additional phone type 1 if phone number 1 is filled
    $('[name$=".Emergency_Contact_Phone_Add_1"], [name$=".Additional_Phone_Type_1"], [name$=".Emergency_Contact_Phone_Add_Country_Code_1"]').on('keyup paste change', function() {
        if ($('[name$=".Emergency_Contact_Name_1"]').val().length <= 0 || role == 'recruiter') {
            return;
        }
        requireOneFilled($('[name$=".Emergency_Contact_Phone_Add_1"], [name$=".Additional_Phone_Type_1"], [name$=".Emergency_Contact_Phone_Add_Country_Code_1"]'));
    });
    role != 'recruiter' && $('[name$=".Emergency_Contact_Phone_Add_1"], [name$=".Additional_Phone_Type_1"], [name$=".Emergency_Contact_Phone_Add_Country_Code_1"]').trigger('keyup');

    // require additional phone type 2 if phone number 2 is filled
    $('[name$=".Emergency_Contact_Phone_Add_2"], [name$=".Additional_Phone_Type_2"], [name$=".Emergency_Contact_Phone_Add_Country_Code_2"]').on('keyup paste change', function() {
        if ($('[name$=".Emergency_Contact_Name_2"]').val().length <= 0 || role == 'recruiter') {
            return;
        }
        requireOneFilled($('[name$=".Emergency_Contact_Phone_Add_2"], [name$=".Additional_Phone_Type_2"], [name$=".Emergency_Contact_Phone_Add_Country_Code_2"]'));
    });
    role != 'recruiter' && $('[name$=".Emergency_Contact_Phone_Add_2"], [name$=".Additional_Phone_Type_2"], [name$=".Emergency_Contact_Phone_Add_Country_Code_2"]').trigger('keyup');

    // require additional phone type 3 if phone number 3 is filled
    $('[name$=".Emergency_Contact_Phone_Add_3"], [name$=".Additional_Phone_Type_3"], [name$=".Emergency_Contact_Phone_Add_Country_Code_3"]').on('keyup paste change', function() {
        if ($('[name$=".Emergency_Contact_Name_3"]').val().length <= 0 || role == 'recruiter') {
            return;
        }
        requireOneFilled($('[name$=".Emergency_Contact_Phone_Add_3"], [name$=".Additional_Phone_Type_3"], [name$=".Emergency_Contact_Phone_Add_Country_Code_3"]'));
    });
    role != 'recruiter' && $('[name$=".Emergency_Contact_Phone_Add_3"], [name$=".Additional_Phone_Type_3"], [name$=".Emergency_Contact_Phone_Add_Country_Code_3"]').trigger('keyup');

    // datepickers
    $('[name$=".Expected_Job_End_Date"], [name$=".Referral_Eligibility_Date_1"], [name$=".Referral_Eligibility_Date_2"], [name$=".Referral_Eligibility_Date_3"]', psProviderContext) 
        .data('date-enabled', 'false')
        .formatDatePicker(dateConfig, extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val()))
        .datepicker("option", "onSelect", function(dateText, instance) {
            validateField($(this)); 
            focusInputLabel($(this));
        });
    $('[name$=".DOB"]').on('keyup paste blur focus', function(e) {
        let val = e.target.value
        validateField($(this), false, function() {
            return validateDOB(val, COUNTRY_DATE_FORMAT)
        })
    });

    // filter signing bonus by reg region
    filterBonusesByLocation($('[name$=".Signing_Bonus_Description"]'), {isUS: false});
    // populate signing bonus description if it has no value yet
    setTimeout(function() {
        if ($('[name$=".Signing_Bonus_Eligible"]:checked', psProviderContext).val() == 'Y' && $('[name$=".Signing_Bonus_Description"]').val().length < 1) {
            if (extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val()) == 'USA') {
                populateBonus($('[name$=".Signing_Bonus_Description"]'), SIGNING_BONUSES);
            } else {
                populateInternationalBonus($('[name$=".Signing_Bonus_Description"]'));
            }
        }
    }, 1000)
    // toggle signing bonuses fields
    const toggleSigning = function() {
        let toShow = toggleDisplayByValue(
            $('[name$=".Signing_Bonus_Eligible"]'),
            $('[name$=".Signing_Bonus_Description"], [name$=".Signing_Bonus_Amount"], [name$=".Signing_Bonus_Currency_Code"], [name$=".Signing_Bonus_Date"], [name$=".Signing_Bonus_Comment"]'),
            'Y'
        )
        if (!!toShow) {
            $('[name$=".Signing_Bonus_Date"]').trigger('change');
            validateField($('[name$=".Signing_Bonus_Date"]'), true);
        }
    }
    role == 'recruiter' && toggleSigning();
    // bonus sections populate on change event
    // signing bonus section
    $('[name$=".Signing_Bonus_Eligible"]', psProviderContext).on('change', function() {
        if ($('[name$=".Signing_Bonus_Eligible"]:checked', psProviderContext).val() == 'Y') {
            if (extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val()) == 'USA') {
                populateBonus($('[name$=".Signing_Bonus_Description"]'), SIGNING_BONUSES);
            } else {
                populateInternationalBonus($('[name$=".Signing_Bonus_Description"]'));
            }
        }
        role == 'recruiter' && toggleSigning();
    });

    // filter clerkship bonuses by region
    filterBonusesByLocation($('[name$=".Clerkship_Bonus_Code_1"]'), {isUS: false});
    // clerkship bonus sections
    $('[name$=".Clerkship_Bonus_Eligible_1"]', psProviderContext).on('change', function() {
        if (extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val()) == 'GBR') {
            return;
        }
        if ($('[name$=".Clerkship_Bonus_Eligible_1"][value="Y"]').is(':checked')) {
            populateBonus($('[name$=".Clerkship_Bonus_Code_1"]'), CLERKSHIP_BONUSES);
        }
        let toShow = toggleDisplayByValue(
            $('[name$=".Clerkship_Bonus_Eligible_1"]'),
            $('[name$=".Clerkship_Bonus_Code_1"], [name$=".Clerkship_Bonus_Amount_1"], [name$=".Clerkship_Bonus_Currency_Code_1"], [name$=".Clerkship_Bonus_Date_1"], [name$=".Clerkship_Bonus_Comment"]'),
            'Y'
        )
        if (!!toShow) {
            $('[name$=".Clerkship_Bonus_Date_1"]').trigger('change');
        }
        focusInputLabel($('[name$=".Clerkship_Bonus_Code_1"], [name$=".Clerkship_Bonus_Amount_1"], [name$=".Clerkship_Bonus_Currency_Code_1"], [name$=".Clerkship_Bonus_Date_1"], [name$=".Clerkship_Bonus_Comment"]'));
        $('[name$=".Clerkship_Bonus_Code_1"], [name$=".Clerkship_Bonus_Amount_1"], [name$=".Clerkship_Bonus_Currency_Code_1"], [name$=".Clerkship_Bonus_Date_1"], [name$=".Clerkship_Bonus_Comment"]').each(function(k, v) {
            validateField($(v), true);
        });
    });
    setTimeout(function() {
        role == 'recruiter' && $('[name$=".Clerkship_Bonus_Eligible_1"]', psProviderContext).trigger('change');
    }, 1500);
    
    // filter relocation bonus by region
    filterBonusesByLocation($('[name$=".Relocation_Bonus_Code"]'), {isUS: false});
    // populate relocation bonus description if no value yet
    setTimeout(function() {
        if ($('[name$=".Relocation"][value="Y"]').is(':checked') && $('[name$=".Relocation_Bonus_Code"]').val().length < 1) {
            if (extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val()) != 'GBR') {
                populateBonus($('[name$=".Relocation_Bonus_Code"]'), RELOCATION_BONUSES);
            } else {
                    populateInternationalBonus($('[name$=".Relocation_Bonus_Code"]'));
            }
        }
    }, 1000);
    // show/display relocation fields on load
    const toggleRelocations = function() {
        let toShow = toggleDisplayByValue(
            $('[name$=".Relocation"]'),
            $('[name$=".Relocation_Bonus_Code"], [name$=".Relocation_Bonus_Amount"], [name$=".Relocation_Bonus_Currency_Code"], [name$=".Relocation_Bonus_Date"], [name$=".Relocation_Bonus_Comment"]'),
            'Y'
        )
        if (!!toShow) {
            $('[name$=".Relocation_Bonus_Date"]').trigger('change');
            validateField($('[name$=".Relocation_Bonus_Date"]'), true);
        }
    }
    role == 'recruiter' && toggleRelocations();
    // relocation bonus section
    $('[name$=".Relocation"]', psProviderContext).on('change', function() {
        if (!$('[name$=".Relocation"][value="Y"]').is(':checked')) {
            toggleRelocations();
            return;
        }
        if (extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val()) != 'GBR') {
            populateBonus($('[name$=".Relocation_Bonus_Code"]'), RELOCATION_BONUSES);
        } else {
            populateInternationalBonus($('[name$=".Relocation_Bonus_Code"]'));
        }
        toggleRelocations();
    });

    // filter referral bonus section by region
    filterBonusesByLocation($('[name$=".Referral_Bonus_Code_1"]'), {isUS: false});
    filterBonusesByLocation($('[name$=".Referral_Bonus_Code_2"]'), {isUS: false});
    filterBonusesByLocation($('[name$=".Referral_Bonus_Code_3"]'), {isUS: false});
    // referral bonus section
    $('[name$=".Referral_Bonus_Eligible_1"]', psProviderContext).on('change', function() {
        const dummyReferral = $('<input id="pseudo-referral" type="text" disabled/>');
        const referralField = $('[name$=".Referral_Bonus_Code_1"]');
        const referralContainer = referralField.parent();
        if (referralContainer.find('#pseudo-referral').length < 1) {
            referralContainer.append(dummyReferral);
        }
        let toShow = toggleDisplayByValue(
            $('[name$=".Referral_Bonus_Eligible_1"]'),
            $('#add-additional-referral, [name$=".Referral_Bonus_Code_1"], [name$=".Attorney_Referral_1"], [name$=".Referral_Bonus_Amount_1"]'),
            ['100']
        );
        !toShow && $('.remove-referral-section').trigger('click');
        toShow && $('.referral-bonus-section').first().show();

        if (this.value == '100') {
            if (JOB_CODE == 100118) {
                focusInputLabel(referralField.val('').hide());
                referralContainer.find(dummyReferral).show();
                return;
            }
            setTimeout(function() {
                populateBonus($('[name$=".Referral_Bonus_Code_1"]'), REFERRAL_BONUSES);
            }, 1000);
        }
        referralContainer.find(dummyReferral).hide();
        $('[name$=".Referral_Bonus_Code_1"]').show();
        setTimeout(function() {
            focusInputLabel($('[name$=".Referral_Bonus_Code_1"]'));
        });
    });
    role == 'recruiter' && $('[name$=".Referral_Bonus_Eligible_1"]', psProviderContext).trigger('change');
    if (REFERRAL_BONUS_CODE_1.length > 0) {
        $('[name$=".Referral_Bonus_Code_1"]').val(REFERRAL_BONUS_CODE_1);
    }

    // filter additional bonuses by region
    let additionalBonusConfig = {};
    if (extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val()) == "USA"){
        additionalBonusConfig.isUS = true;
    }
    filterBonusesByLocation($('[name$=".Additional_Bonus_Code_1"]'), additionalBonusConfig);
    filterBonusesByLocation($('[name$=".Additional_Bonus_Code_2"]'), additionalBonusConfig);
    filterBonusesByLocation($('[name$=".Additional_Bonus_Code_3"]'), additionalBonusConfig);
    filterBonusesByLocation($('[name$=".Additional_Bonus_Code_4"]'), additionalBonusConfig);
    filterBonusesByLocation($('[name$=".Additional_Bonus_Code_5"]'), additionalBonusConfig);
    filterBonusesByLocation($('[name$=".Additional_Bonus_Code_6"]'), additionalBonusConfig);
    filterBonusesByLocation($('[name$=".Additional_Bonus_Code_7"]'), additionalBonusConfig);
    // additional bonus eligible
    $('[name$=".Additional_Bonus_Eligible"]').on('change', function() {
        let toShow = toggleDisplayByValue(
            $('[name$=".Additional_Bonus_Eligible"]'),
            $('#add-additional-bonus, [name$=".Additional_Bonus_Code_1"], [name$=".Additional_Bonus_Amount_1"], [name$=".Additional_Bonus_Currency_Code_1"], [name$=".Additional_Bonus_Date_1"]'), 
            'Y'
        ) 
        if (!toShow) {
            $('.remove-bonus-section').trigger('click');
            return;
        }
        $('.additional-bonus-section', psProviderContext).first().show();
    });
    role == 'recruiter' && $('[name$=".Additional_Bonus_Eligible"]').trigger('change');

    // Guaranteed bonus section
    // toggle guarateed bonus eliginle dependent fields
    $('[name$=".Guaranteed_Bonus_Eligible"]', psProviderContext).on('change', function() {
        if (extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val()) == 'GBR') {
            return false;
        }
        if (!$('[name$=".Guaranteed_Bonus_Eligible"][value="Y"]').is(':checked')) {
            let toHideFields = $('[name$=".Guaranteed_Bonus_Type"], [name$=".GB_Year_Paid"], [name$=".GB_Paid_Class_Year"], [name$=".Guaranteed_Bonus_Amount"], [name$=".Guaranteed_Bonus_Amount_Currency"]', psProviderContext).val('').closest('.input_wrapper').hide();
            validateField($('[name$=".Guaranteed_Bonus_Type"]', psProviderContext).trigger('change'), true);
            focusInputLabel(toHideFields);
            toHideFields.each(function(k, v) {
                validateField($(v), true);
            });
            return
        }
        if($('[name$=".Guaranteed_Bonus_Type"]').val().length < 1) {
            focusInputLabel($('[name$=".Guaranteed_Bonus_Type"]').val('The Greater of'));
        }
        // bonus type and paid class year show
        $('[name$=".Guaranteed_Bonus_Type"], [name$=".GB_Year_Paid"]', psProviderContext)
            .closest('.input_wrapper')
            .show();
    });
    // trigger guaranteed bonus eligible
    role == 'recruiter' && $('[name$=".Guaranteed_Bonus_Eligible"]', psProviderContext).trigger('change');
    // toggle guarateed bonus type dependent field
    $('[name$=".Guaranteed_Bonus_Type"]', psProviderContext).on('change', function() {
        // this depends on guaranteed bonus eligibile
        // so do nothing if not for bonus eligible
        if ($(this).is(':hidden')) {
            return false;
        }
        let toHideFields = $('[name$=".GB_Year_Paid"], [name$=".GB_Paid_Class_Year"], [name$=".Guaranteed_Bonus_Amount"], [name$=".Guaranteed_Bonus_Amount_Currency"]', psProviderContext).prop('disabled', false);
        focusInputLabel(toHideFields);
        toHideFields.each(function(k, v) {
            validateField($(v), true);
        });
        toHideFields.closest('.input_wrapper').hide();
        switch(this.value) {
            case 'The Greater of':
            $('[name$=".GB_Year_Paid"]', psProviderContext).prop('disabled', null).closest('.input_wrapper').show();
            $('[name$=".Guaranteed_Bonus_Amount"], [name$=".Guaranteed_Bonus_Amount_Currency"]', psProviderContext).val('');
            break;
            case 'NY Market':
            $('[name$=".GB_Year_Paid"], [name$=".GB_Paid_Class_Year"]', psProviderContext).prop('disabled', null).closest('.input_wrapper').show();
            let nyFields = $('[name$=".Guaranteed_Bonus_Amount"]', psProviderContext);
            nyFields.prop('disabled', 'disabled').closest('.input_wrapper').show();
            $('[name$=".Guaranteed_Bonus_Amount_Currency"]', psProviderContext).val('');
            focusInputLabel(nyFields);
            break;
            case 'Annualized (no proration)':
            $('[name$=".GB_Year_Paid"]', psProviderContext).prop('disabled', null).closest('.input_wrapper').show();
            let annualizeFields = $('[name$=".Guaranteed_Bonus_Amount"]', psProviderContext).val('')
            annualizeFields.prop('disabled', 'disabled').closest('.input_wrapper').show();
            $('[name$=".Guaranteed_Bonus_Amount_Currency"]', psProviderContext).val('');
            focusInputLabel(annualizeFields);
            break;
            case 'Specific Amount':
            $('[name$=".GB_Year_Paid"], [name$=".Guaranteed_Bonus_Amount"], [name$=".Guaranteed_Bonus_Amount_Currency"]', psProviderContext).prop('disabled', null).closest('.input_wrapper').show();
            $('[name$=".GB_Paid_Class_Year"]', psProviderContext).prop('disabled', 'disabled').closest('.input_wrapper').show();
            break;
            default:
            toHideFields = $('[name$=".GB_Year_Paid"], [name$=".GB_Paid_Class_Year"], [name$=".Guaranteed_Bonus_Amount"], [name$=".Guaranteed_Bonus_Amount_Currency"]', psProviderContext).prop('disabled', null);
            focusInputLabel(toHideFields);
            toHideFields.each(function(k, v) {
                validateField($(v), true);
            });
            toHideFields.val('').closest('.input_wrapper').hide();
            break;
        }
    });
    if($('[name$=".Guaranteed_Bonus_Type"]').is(':visible')) {
        role == 'recruiter' && $('[name$=".Guaranteed_Bonus_Type"]', psProviderContext).trigger('change');
    }
    // then trigger guarateed bonus type

    // class fields section
    switch($('#job-code').val()) {
        case '100326':
        case '101173':
        $('[name$=".Non_share_Partner_Class"], [name$=".Share_Partner_Class"], [name$=".Of_Counsel_Class"]').val('').closest('.input_wrapper').hide();
        break;
        case '100000':
        role == 'recruiter' && $('[name$=".Non_share_Partner_Class"]').closest('.input_wrapper').show();
        $('[name$=".Share_Partner_Class"], [name$=".Of_Counsel_Class"]').val('').closest('.input_wrapper').hide();
        break;
        case '100118':
        role == 'recruiter' && $('[name$=".Share_Partner_Class"]').closest('.input_wrapper').show();
        $('[name$=".Non_share_Partner_Class"], [name$=".Of_Counsel_Class"]').val('').closest('.input_wrapper').hide();
        break;
        case '100001':
        case '100704':
        role == 'recruiter' && $('[name$=".Of_Counsel_Class"]').closest('.input_wrapper').show();
        $('[name$=".Non_share_Partner_Class"], [name$=".Share_Partner_Class"]').val('').closest('.input_wrapper').hide();
        break;
        default:
        $('[name$=".Non_share_Partner_Class"], [name$=".Share_Partner_Class"], [name$=".Of_Counsel_Class"]').closest('.input_wrapper').hide();
    }

    // focus style text and select fields
    $('input[type="text"], select, textarea', psProviderContext).on('focus', function() {
        focusInputLabel($(this), true);
    }).on('blur', function() {
        focusInputLabel($(this));
    });
    // focus field labels
    $.each($('input[type="text"], select, textarea', psProviderContext),function(k,v) {
        focusInputLabel($(v));
    });

    // pass validation data to each fields
    $.each($('[data-fieldgroup-validation]'), function(k,v) {
        $(v).find('input, select, textarea').data('validation', $(v).data('fieldgroup-validation'));
    });
    // pass regex data to each fields
    $.each($('[data-fieldgroup-regex]'), function(k,v) {
        $(v).find('input, textarea').data('regex', $(v).data('fieldgroup-regex'));
    });
    // pass regex message to each fields
    $.each($('[data-fieldgroup-message]'), function(k,v) {
        $(v).find('input, textarea').data('message', $(v).data('fieldgroup-message'));
    });
    // pass validation data length to each fields
    $.each($('[data-fieldgroup-minlength]'), function(k,v) {
        $(v).find('input, textarea').data('minlength', $(v).data('fieldgroup-minlength'));
    });
    $.each($('[data-fieldgroup-maxlength]'), function(k,v) {
        $(v).find('input, textarea').data('maxlength', $(v).data('fieldgroup-maxlength'));
    });
    // pass target label to each radio or checkbox fields
    $.each($('[data-fieldgroup-targetlabel]'), function(k,v) {
        $(v).find('input[type="checkbox"], input[type="radio"]').data('label', $(v).data('fieldgroup-targetlabel'));
    });
    // pass title data to each fields
    $.each($('[data-fieldgroup-title]'), function(k,v) {
        $(v).find('input, select, textarea').data('title', $(v).data('fieldgroup-title'));
    });

    // validate each field by event and field type
    $('input[type="text"]:not(.hasDatepicker):not([name$=".DOB"]), textarea, select', psProviderContext).on('focus blur', function(e) {
        if ($(this).hasClass('has-target')) {
            return false;
        }

        const name = $(this).prop('name');
        const nem = name.split('.');

        // select not required if no options
        if (e.target.type == 'select-one') {
            if ($('option', e.target).length < 2) {
                validateField($(e.target), true)
                return;
            }
        }
        
        switch(nem[nem.length-1]) {
            case "Cell_business_Country_code":
                if (validateField($(this), false, requireTargetByController($('[name$=".mobile_business"]'), $(this)))) {
                    validateField($(this), true);
                }
                if (this.value.length < 1) {
                    validateField($('[name$=".mobile_business"]'), true);
                }
                return;
            break;
            case "Mobile_Phone_Country_Code":
                if (validateField($(this), false, requireTargetByController($('[name$=".Mobile"]'), $(this)))) {
                    validateField($(this), true);
                }
                if (this.value.length < 1) {
                    validateField($('[name$=".Mobile"]'), true);
                }
                return;
            break;
            case "Cell_business_Country_code":
                if (validateField($(this), false, requireTargetByController($('[name$=".Home_Phone"]'), $(this)))) {
                    validateField($(this), true);
                }
                if (this.value.length < 1) {
                    validateField($('[name$=".Home_Phone"]'), true);
                }
                return;
            break;
            case "mobile_business":
                if (validateField($(this), false, requireTargetByController($('[name$=".Cell_business_Country_code"]'), $(this)))) {
                    validateField($(this), true);
                }
                if (this.value.length < 1) {
                    validateField($('[name$=".Cell_business_Country_code"]'), true);
                }
                return;
            break;
            case "Mobile":
                if (validateField($(this), false, requireTargetByController($('[name$=".Mobile_Phone_Country_Code"]'), $(this)))) {
                    validateField($(this), true);
                }
                if (this.value.length < 1) {
                    validateField($('[name$=".Mobile_Phone_Country_Code"]'), true);
                }
                return;
            break;
            case "Home_Phone":
                if (validateField($(this), false, requireTargetByController($('[name$=".Home_Phone_Country_Code"]'), $(this)))) {
                    validateField($(this), true);
                }
                if (this.value.length < 1) {
                    validateField($('[name$=".Home_Phone_Country_Code"]'), true);
                }
                return;
            break;
            case "Home_Phone_Country_Code":
                if (validateField($(this), false, requireTargetByController($('[name$=".Home_Phone"]'), $(this)))) {
                    validateField($(this), true);
                }
                if (this.value.length < 1) {
                    validateField($('[name$=".Home_Phone"]'), true);
                }
                return;
            break;
        }
        if($(this).is(':visible') && !$(this).is(':disabled') && !validateField($(this))) {
            $(this).parent().find('.text-error').css({'display': 'inline-block', 'margin-bottom': '-2px'}); // style hack since IE is such a reliable browser ;-) // changed block to inline-block
        }
    });

    $('input[type="checkbox"], select, input[type="radio"]:not([name$=".Mailing_Address_Same"]):not(.hasDatepicker)', psProviderContext).on('change', function(e) {
        if ($(this).hasClass('.has-target')) {
            return false;
        }
        // select not required if no options
        if (e.target.type == 'select-one') {
            if ($('option', e.target).length < 2) {
                validateField($(e.target), true)
                return;
            }
        }
        
        validateField($(this));
        // validate emergency primary
        $('[name$=".Emergency_Contact_Primary_1"], [name$=".Emergency_Contact_Primary_2"], [name$=".Emergency_Contact_Primary_3"]').each(function(k,v) {
            (role != 'recruiter') && validateField($(v), false, validateEmergencyPrimary)
        });
    });
    $('.hasDatepicker', psProviderContext).on('change blur click', function() {
        validateField($(this));
    });

    // submit the form if no errors
    $('#TaskSummary_ButtonSave', psProviderContext).on('click', function(e) {
        e.preventDefault();
        let formIsValid = true;
        errorMapping.clear();
        $.each($('input:not(".datepicker_button"):not(:disabled):not(:hidden), select:not(:disabled):not(:hidden), textarea', psProviderContext), function(k,v) {
            if(v.type != 'select-one' && $(v).is(':visible') && !validateField($(v))) {
                formIsValid = false;
            }
            if ($(v).prop('name').indexOf('Mailing_Address_Same') >= 0 && role != 'recruiter' && !validateField($(v), false, validateAddressEqual)) {
                formIsValid = false;
            }
            // validate emergency primary
            let nem = $(v).prop('name').split('.');
            if (['Emergency_Contact_Primary_1', 'Emergency_Contact_Primary_2', 'Emergency_Contact_Primary_3'].indexOf(nem[nem.length-1]) >= 0 && role != 'recruiter' && !validateField($(v), false, validateEmergencyPrimary)) {
                formIsValid = false;
            }
            // pop emergency error 2 and 3
            if (['Emergency_Contact_Primary_2', 'Emergency_Contact_Primary_3'].indexOf(nem[nem.length-1]) >= 0) {
                errorMapping.delete($(v).prop('name'));
            }
            // no option
            if (v.type == 'select-one') {
                if ($('option', $(v)).length < 2) {
                    formIsValid = true
                }
                else if($(v).is(':visible') && !validateField($(v))) {
                    formIsValid = false;
                }
            }
            switch(nem[nem.length-1]) {
                case "DOB":
                    let dobVal = $(this).val()
                    if (!validateField($(this), false, function() {
                        return validateDOB(dobVal, COUNTRY_DATE_FORMAT)
                    })) {
                        formIsValid = false;
                    }
                break;
                case "Cell_business_Country_code":
                    if (validateField($(this), false, requireTargetByController($('[name$=".mobile_business"]'), $(this)))) {
                        validateField($(this), true);
                    }
                    if (this.value.length < 1) {
                        validateField($('[name$=".mobile_business"]'), true);
                    }
                    formIsValid = false;
                break;
                case "Mobile_Phone_Country_Code":
                    if (validateField($(this), false, requireTargetByController($('[name$=".Mobile"]'), $(this)))) {
                        validateField($(this), true);
                    }
                    if (this.value.length < 1) {
                        validateField($('[name$=".Mobile"]'), true);
                    }
                    formIsValid = false;
                break;
                case "Cell_business_Country_code":
                    if (validateField($(this), false, requireTargetByController($('[name$=".Home_Phone"]'), $(this)))) {
                        validateField($(this), true);
                    }
                    if (this.value.length < 1) {
                        validateField($('[name$=".Home_Phone"]'), true);
                    }
                    formIsValid = false;
                break;
                case "mobile_business":
                    if (validateField($(this), false, requireTargetByController($('[name$=".Cell_business_Country_code"]'), $(this)))) {
                        validateField($(this), true);
                    }
                    if (this.value.length < 1) {
                        validateField($('[name$=".Cell_business_Country_code"]'), true);
                    }
                    formIsValid = false;
                break;
                case "Mobile":
                    if (validateField($(this), false, requireTargetByController($('[name$=".Mobile_Phone_Country_Code"]'), $(this)))) {
                        validateField($(this), true);
                    }
                    if (this.value.length < 1) {
                        validateField($('[name$=".Mobile_Phone_Country_Code"]'), true);
                    }
                    formIsValid = false;
                break;
                case "Home_Phone":
                    if (validateField($(this), false, requireTargetByController($('[name$=".Home_Phone_Country_Code"]'), $(this)))) {
                        validateField($(this), true);
                    }
                    if (this.value.length < 1) {
                        validateField($('[name$=".Home_Phone_Country_Code"]'), true);
                    }
                    formIsValid = false;
                break;
                case "Home_Phone_Country_Code":
                    if (validateField($(this), false, requireTargetByController($('[name$=".Home_Phone"]'), $(this)))) {
                        validateField($(this), true);
                    }
                    if (this.value.length < 1) {
                        validateField($('[name$=".Home_Phone"]'), true);
                    }
                    formIsValid = false;
                break;
            }
        });
        if (formIsValid || errorMapping.size==0) {
            doSave_Custom('refer-Complete');
            return;
        }
        let errorMessages = '<strong><small>Found ' + errorMapping.size + ' error(s):</small></strong><br>';
        errorMapping.forEach(function(v,k) {
            errorMessages += '<small style="color: #861F41;">' + v + '</small><br>';
        });
        vex.dialog.alert({ 
            unsafeMessage: errorMessages,
            callback: function() {
                $("html, body").animate({ scrollTop: 0 }, "slow");
            }
        });
    });
    if (isProfileCompleted) {
        // disable all form fields and button when form is completed
        $('input, select, textarea, button', '.input_wrapper').removeClass('bg-ignite').prop('disabled', 'disabled');
    }

});

//
