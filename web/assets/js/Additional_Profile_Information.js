const ID_TYPES = new Map(); // store id types 
const ALL_STATES = new Map(); // store all states list
const US_STATES_LIST = ['USA-AL', 'USA-AK', 'USA-AZ', 'USA-AR', 'USA-CA', 'USA-CO', 'USA-CT', 'USA-DE', 'USA-DC', 'USA-FL', 'USA-GA', 'USA-ID', 'USA-IL', 'USA-IN', 'USA-IA', 'USA-KS', 'USA-KY', 'USA-LA', 'USA-ME', 'USA-MD', 'USA-MA', 'USA-MI', 'USA-MN', 'USA-MS', 'USA-MO', 'USA-MT', 'USA-NE', 'USA-NV', 'USA-NH', 'USA-NJ', 'USA-NM', 'USA-NY', 'USA-NC', 'USA-ND', 'USA-OH', 'USA-OK', 'USA-OR', 'USA-PA', 'USA-RI', 'USA-SC', 'USA-SD', 'USA-TN', 'USA-TX', 'USA-UT', 'USA-VT', 'USA-VA', 'USA-WA', 'USA-WV', 'USA-WI', 'USA-WY'];
// const ALL_CITIZENSHIP_STATUS = new Map(); // store all citizenship status list
const ALL_SCHOOLS = new Map(); // store all school code and description
const ALL_VISA_TYPE = new Map(); // store all visa type code and description
const providerContext = document.getElementById('#EditProfile');
const EVENT_NAME = '<$client.url.event_name>';

const MONTH_DATES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
        if ($(v).is(':radio')) {
            hasVal = isCheckboxChecked($(v));
            return;
        }
        if ($(v).is(':checkbox')) {
            hasVal = isCheckboxChecked($(v));
            return;
        }
        if ($(v).is('select')) {
            if ($(v).find('option:selected').length) {
                hasVal = $(v).find('option:selected').val().length;
            }
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

const extractCountryFromCode = function(countryCodes, code) {
    "use strict";
    for (let i = 0; i < countryCodes.length; i++) {
        if (countryCodes[i].codes.indexOf(code) > -1) {
            return countryCodes[i].country;
        }
    }
    return "USA";
}

const updateStatesList = function(country, stateField) {
    "use strict";
    let stateValue = stateField.val();
    stateField.html('');
    ALL_STATES.forEach(function(v, k) {
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
    });
}

/*const updateCitizenshipStatusList = function(country, citizenshipStatusField) {
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
}*/

const filterSchool = function(countryVal, schoolField) {
    let schoolVal = schoolField.val();
    schoolField.find('option').remove().end().append(new Option("", "", true, true));
    SCHOOL_MAP.forEach(function(v, k) {
        if (v.country == countryVal) {
            schoolField.append(new Option(ALL_SCHOOLS.get(v.schoolCode), v.schoolCode));
        }
    });
    // sort all school codes by description
    schoolField.html(schoolField.find('option').sort(function(x, y) {
        return $(x).text() > $(y).text() ? 1 : -1;
    }));
    schoolField.val(schoolVal);
    if (schoolField.val() == null) {
        schoolField.val('');
    }
}

const filterBarReasons = function(barStatusVal, barReasonField) {
    let barReasonVal = barReasonField.val();
    barReasonField.find('option').remove().end().append(new Option("", ""));
    BAR_REASON_MAP.forEach(function(v, k) {
        if (v.barStatus == barStatusVal) {
            barReasonField.append(new Option(v.barReasonDesc, v.barReasonCode));
        }
    });
    barReasonField.val(barReasonVal);
    if (barReasonField.val() == null) {
        barReasonField.val('');
    }
}

// toggle require bar section if bar section is not empty
const requireBarIfNotEmpty = function() {
    "use strict";
    const section = $(this).closest('.bar-section');
    let filled = false;
    section.find('input, select').each(function(k,v) {
        if (fieldHasVal($(v))) {
            filled = true;
        }
    });
    if (!filled) {
        section.find('input, select').each(function(k,v) {
            validateField($(v).data('validation', null), true);
        });
        return;
    }
    section.find('input, select').each(function(k,v) {
        $(v).data('validation', 'required');
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

async function setDefaultPostSecondaryEducation1() {
    // post secondary education 1
    setDefaultValue($('[name$=".Country_Code_Post_Secondary_Education_DEG_1"]'), $('[name$=".Education_1_Graduation_Country"]').val());
    await triggerEvents($('[name$=".Country_Code_Post_Secondary_Education_DEG_1"]'));
    setDefaultValue($('[name$=".Degree_Post_Secondary_Education_DEG_1"]'), $('[name$=".Education_1_Degree_Code"]').val());
    await triggerEvents($('[name$=".Degree_Post_Secondary_Education_DEG_1"]'));
    setDefaultValue($('[name$=".GPA_Post_Secondary_Education_DEG_1"]'), $('[name$=".Education_1_GPA"]').val());
    setDefaultValue($('[name$="School_Code_Post_Secondary_Education_DEG_1_pseudo"]'), $('[name$=".Education_1_Code"]').val());

    // pre-populate Honor or Awards ID
    setDefaultValue($('[name$=".ID_JPM_Profiles_Honor_Awards"]'), $('[name$=".Education_1_Law_Review"]').val());
    await triggerEvents($('[name$=".ID_JPM_Profiles_Honor_Awards"]'));
    forceDefaultValue($('[name$=".Country_JPM_Profiles_Honor_Awards"]'), $('[name$=".Country_Code_Post_Secondary_Education_DEG_1"]').val());
    forceDefaultValue($('[name$="School_JPM_Profiles_Honor_Awards_pseudo"]'), $('[name$="School_Code_Post_Secondary_Education_DEG_1_pseudo"]').val());

    // post secondary education - date acquired 1
    setDefaultDateValue($('[name$="Date_Acquired_Post_Secondary_Education_DEG_1_pseudo"]'), $('[name$=".Education_1_Graduation_Year_display"]').datepicker("getDate"));

    // update hidden fields of post secondary education - school 1
    $("[name$='.School_Code_Post_Secondary_Education_DEG_1']").val($("[name$='School_Code_Post_Secondary_Education_DEG_1_pseudo']").val());
    $("[name$='.School_JPM_Profiles_Honor_Awards']").val($("[name$='School_JPM_Profiles_Honor_Awards_pseudo']").val());

    // update hidden fields of post secondary education - date acquired 1
    $("[name$='.Date_Acquired_Post_Secondary_Education_DEG_1_display']").datepicker("setDate", $("[name$='Date_Acquired_Post_Secondary_Education_DEG_1_pseudo']").datepicker("getDate"));

    $('.post-secondary-education:eq(0) input:not([type="hidden"]), .post-secondary-education:eq(0) select').each(function(k,v) {
        focusInputLabel($(v));
    });

    return true;
}

async function setDefaultPostSecondaryEducation2() {
    // post secondary education 2
    setDefaultValue($('[name$=".Country_Code_Post_Secondary_Education_DEG_2"]'), $('[name$=".Education_2_Graduation_Country"]').val());
    await triggerEvents($('[name$=".Country_Code_Post_Secondary_Education_DEG_2"]'));
    setDefaultValue($('[name$=".Degree_Post_Secondary_Education_DEG_2"]'), $('[name$=".Education_2_Degree_Code"]').val());
    await triggerEvents($('[name$=".Degree_Post_Secondary_Education_DEG_2"]'));
    setDefaultValue($('[name$=".GPA_Post_Secondary_Education_DEG_2"]'), $('[name$=".Education_2_GPA"]').val());
    setDefaultValue($('[name$="School_Code_Post_Secondary_Education_DEG_2_pseudo"]'), $('[name$=".Education_2_Code"]').val());

    // pre-populate Honor or Awards ID
    setDefaultValue($('[name$=".ID_JPM_Profiles_Honor_Awards_2"]'), $('[name$=".Education_1_Law_Review"]').val());
    await triggerEvents($('[name$=".ID_JPM_Profiles_Honor_Awards_2"]'));
    forceDefaultValue($('[name$=".Country_JPM_Profiles_Honor_Awards_2"]'), $('[name$=".Country_Code_Post_Secondary_Education_DEG_2"]').val());
    forceDefaultValue($('[name$="School_JPM_Profiles_Honor_Awards_2_pseudo"]'), $('[name$="School_Code_Post_Secondary_Education_DEG_1_pseudo"]').val());

    // post secondary education - date acquired 2
    setDefaultDateValue($('[name$="Date_Acquired_Post_Secondary_Education_DEG_2_pseudo"]'), $('[name$=".Education_2_Graduation_Year_display"]').datepicker("getDate"));

    // update hidden fields of post secondary education - school 2
    $("[name$='.School_Code_Post_Secondary_Education_DEG_2']").val($("[name$='School_Code_Post_Secondary_Education_DEG_2_pseudo']").val());
    $("[name$='.School_JPM_Profiles_Honor_Awards_2']").val($("[name$='School_JPM_Profiles_Honor_Awards_2_pseudo']").val());

    // update hidden fields of post secondary education - date acquired 2
    $("[name$='.Date_Acquired_Post_Secondary_Education_DEG_2_display']").datepicker("setDate", $("[name$='Date_Acquired_Post_Secondary_Education_DEG_2_pseudo']").datepicker("getDate"));

    $('.post-secondary-education:eq(1) input:not([type="hidden"]), .post-secondary-education:eq(1) select').each(function(k,v) {
        focusInputLabel($(v));
    });

    return true;
}

async function setDefaultPostSecondaryEducation3() {
    // post secondary education 3
    setDefaultValue($('[name$=".Country_Code_Post_Secondary_Education_DEG_3"]'), $('[name$=".Education_3_Graduation_Country"]').val());
    await triggerEvents($('[name$=".Country_Code_Post_Secondary_Education_DEG_3"]'));
    setDefaultValue($('[name$=".Degree_Post_Secondary_Education_DEG_3"]'), $('[name$=".Education_3_Degree_Code"]').val());
    await triggerEvents($('[name$=".Degree_Post_Secondary_Education_DEG_3"]'));
    setDefaultValue($('[name$=".GPA_Post_Secondary_Education_DEG_3"]'), $('[name$=".Education_3_GPA"]').val());
    setDefaultValue($('[name$="School_Code_Post_Secondary_Education_DEG_3_pseudo"]'), $('[name$=".Education_3_Code"]').val());

    // post secondary education - date acquired 3
    setDefaultDateValue($('[name$="Date_Acquired_Post_Secondary_Education_DEG_3_pseudo"]'), $('[name$=".Education_3_Graduation_Year_display"]').datepicker("getDate"));

    // update hidden fields of post secondary education - school 3
    $("[name$='.School_Code_Post_Secondary_Education_DEG_3']").val($("[name$='School_Code_Post_Secondary_Education_DEG_3_pseudo']").val());

    // update hidden fields of post secondary education - date acquired 3
    $("[name$='.Date_Acquired_Post_Secondary_Education_DEG_3_display']").datepicker("setDate", $("[name$='Date_Acquired_Post_Secondary_Education_DEG_3_pseudo']").datepicker("getDate"));

    $('.post-secondary-education:eq(2) input:not([type="hidden"]), .post-secondary-education:eq(2) select').each(function(k,v) {
        focusInputLabel($(v));
    });

    return true;
}

async function setDefaultPostSecondaryEducation4() {
    // post secondary education 4
    setDefaultValue($('[name$=".Country_Code_Post_Secondary_Education_DEG_4"]'), $('[name$=".Education_4_Graduation_Country"]').val());
    await triggerEvents($('[name$=".Country_Code_Post_Secondary_Education_DEG_4"]'));
    setDefaultValue($('[name$=".Degree_Post_Secondary_Education_DEG_4"]'), $('[name$=".Education_4_Degree_Code"]').val());
    await triggerEvents($('[name$=".Degree_Post_Secondary_Education_DEG_4"]'));
    setDefaultValue($('[name$=".GPA_Post_Secondary_Education_DEG_4"]'), $('[name$=".Education_4_GPA"]').val());
    setDefaultValue($('[name$="School_Code_Post_Secondary_Education_DEG_4_pseudo"]'), $('[name$=".Education_4_Code"]').val());

    // post secondary education - date acquired 4
    setDefaultDateValue($('[name$="Date_Acquired_Post_Secondary_Education_DEG_4_pseudo"]'), $('[name$=".Education_4_Graduation_Year_display"]').datepicker("getDate"));

    // update hidden fields of post secondary education - school 4
    $("[name$='.School_Code_Post_Secondary_Education_DEG_4']").val($("[name$='School_Code_Post_Secondary_Education_DEG_4_pseudo']").val());

    // update hidden fields of post secondary education - date acquired 4
    $("[name$='.Date_Acquired_Post_Secondary_Education_DEG_4_display']").datepicker("setDate", $("[name$='Date_Acquired_Post_Secondary_Education_DEG_4_pseudo']").datepicker("getDate"));

    $('.post-secondary-education:eq(3) input:not([type="hidden"]), .post-secondary-education:eq(3) select').each(function(k,v) {
        focusInputLabel($(v));
    });

    return true;
}

const forceDefaultValue = function(el, val) {
    if (el.is(':radio')) {
        el.filter('[value="' + val + '"]').prop('checked', true);
    }
    else if (el.is(':checkbox')) {
        el.filter('[value="' + val + '"]').prop('checked', true);
    }
    else if (el.is(':text')) {
        el.val(val);
    }
    else if (el.is('select')) {
        el.val(val);
    }
}

const setDefaultValue = function(el, val) {
    if (val) {
        if (el.is(':radio') && !el.is(':checked')) {
            el.filter('[value="' + val + '"]').prop('checked', true);
        }
        else if (el.is(':checkbox') && !el.is(':checked')) {
            el.filter('[value="' + val + '"]').prop('checked', true);
        }
        else if (el.is(':text') && el.val().length < 1) {
            el.val(val);
        }
        else if (el.is('select') && el.val().length < 1) {
            el.val(val);
        }
    }
}

const setDefaultDateValue = function(el, val) {
    if (val) {
        if (el.val().length < 1) {
            el.datepicker("setDate", val);
        }
    }
}

const triggerEvents = function(el, val) {
    el.trigger("change");
}

var noFutureMonth = function(el) { 
    var isValid = true;
    var message = ""; 

    var d = new Date();
    var mm = (((d.getMonth() + 1) < 10) ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1)); // getMonth() returns 0 to 11
    let yyyy = d.getFullYear();

    switch (el.prop('name').split('.')[1]) {
        case "Clerkship_ID_1_From_Month":
            if ($("[name$='Clerkship_ID_1_From_year']").val() > yyyy || ($("[name$='Clerkship_ID_1_From_year']").val() >= yyyy && parseInt(el.val()) > mm)) {
                isValid = false;
                message = $(el).data("title") + " cannot be a future month";  
            }
            break;
        case "Clerkship_ID_2_From_Month":
            if ($("[name$='Clerkship_ID_2_From_year']").val() > yyyy || ($("[name$='Clerkship_ID_2_From_year']").val() >= yyyy && parseInt(el.val()) > mm)) {
                isValid = false;
                message = $(el).data("title") + " cannot be a future month"; 
            }
            break;
        case "Clerkship_ID_3_From_Month":
            if ($("[name$='Clerkship_ID_3_From_year']").val() > yyyy || ($("[name$='Clerkship_ID_3_From_year']").val() >= yyyy && parseInt(el.val()) > mm)) {
                isValid = false;
                message = $(el).data("title") + " cannot be a future month"; 
            }
            break;
        case "Clerkship_ID_4_From_Month":
            if ($("[name$='Clerkship_ID_4_From_year']").val() > yyyy || ($("[name$='Clerkship_ID_4_From_year']").val() >= yyyy && parseInt(el.val()) > mm)) {
                isValid = false;
                message = $(el).data("title") + " cannot be a future month"; 
            }
            break;
        case "Clerkship_ID_5_From_Month":
            if ($("[name$='Clerkship_ID_5_From_year']").val() > yyyy || ($("[name$='Clerkship_ID_5_From_year']").val() >= yyyy && parseInt(el.val()) > mm)) {
                isValid = false;
                message = $(el).data("title") + " cannot be a future month";  
            }
            break;
    }

    return { 
        "isValid": isValid, 
        "message": message 
    } 
}; 

vex.defaultOptions.className = 'vex-theme-top';

$(window).on('load', function() {
    let tx1 = performance.now();
    $('.floating-label span').css('color', 'rgb(102, 102, 102)');
    $('.cal_and_button').prop({'cellpadding': 0, 'cellspacing': 0});
    let isProfileCompleted = sTaskComplete;
    // replace default submit button with paypal styled
    $('#TaskSummary_ButtonCancel').appendTo('#cancel').show();
    if (!isProfileCompleted) {
        $('#TaskSummary_ButtonSave').appendTo('#saveandcomplete').prop('onclick', null).show().text('Continue');
        $('#EUPDefaultSaveButton').appendTo('#save').prop('onclick', null).show();
    }
    $('textarea').addClass('lifesuite__textarea-input');

    // remove unused fields
    $('input[type="radio"][value=""]').closest('div').remove();

    // add blank option to post secondary education degree
    $("[name*='.Degree_Post_Secondary_Education_DEG']").prepend("<option value=''></option>");

    // sort all global states
    var EDUCATION_STATE_SELECT = $('[name$=".StateList"]');
    var EDUCATION_STATE_SELECTED_VALUE = $('[name$=".StateList"]').val();
    EDUCATION_STATE_SELECT.html(EDUCATION_STATE_SELECT.find('option').sort(function(x, y) {
        return $(x).text() > $(y).text() ? 1 : -1;
    }));
    EDUCATION_STATE_SELECT.val(EDUCATION_STATE_SELECTED_VALUE);

    // store all global states
    $('[name$=".StateList"] option').each(function() {
        // filter out us territory but non us state
        if ( $(this).val().indexOf('USA') >= 0 && US_STATES_LIST.indexOf($(this).val()) < 0 ) {
            return;
        }
        ALL_STATES.set($(this).val(), $(this).text());
    });

    // store all citizenship status
    /*$('[name$=".Citizenship_Status_1"] option').each(function() {
        ALL_CITIZENSHIP_STATUS.set($(this).val(), $(this).text());
    });*/

    // store all school code and description
    $('[name$=".SchoolList"] option').each(function() {
        ALL_SCHOOLS.set($(this).val(), $(this).text());
    });

    // store all visa type code and description
    $('[name$=".Visa_Type_1"] option').each(function() {
        ALL_VISA_TYPE.set($(this).val(), $(this).text());
    });

    // load form when all set
    $('#EditProfile_wrapper').fadeIn();

    // hide fields based on country
    // hide fields not in country
    $('[data-only-display-for]').each(function() {
        if ($(this).data('only-display-for').indexOf(extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val())) < 0 ) {
            //$(this).hide().find('input').val('');
            $(this).hide();
            $(this).find('input:not([type="hidden"]):not(:radio), select').val('');
            $(this).find('input:radio').prop('checked', false);
        }
    });
    // hide field in country
    $('[data-only-hide-for]').each(function() {
        if ($(this).data('only-hide-for').indexOf(extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val())) >= 0 ) {
            //$(this).hide().find('input').val('');
            $(this).hide();
            $(this).find('input:not([type="hidden"]):not(:radio), select').val('');
            $(this).find('input:radio').prop('checked', false);
        }
    });

    // hide sections per event attributes
    if (EVENT_NAME == 'Summer Associates') {
        $('#clerkship-information').hide();
    }

    // rename fields based on country
    $('[data-only-rename-for]').each(function() {
        if ($(this).data('only-rename-for').indexOf(extractCountryFromCode(COUNTRY_CODES, $('#event-location-code').val())) >= 0 ) {
            if ($(this).find('select').prop('name').indexOf('School_Code_Post_Secondary_Education_DEG') >= 0) {
                $(this).data('fieldgroup-title', 'University Name');
                $(this).find('span.floating-label').html('University Name');
            }
            if ($(this).find('select').prop('name').indexOf('School_JPM_Profiles_Honor_Awards_pseudo') >= 0) {
                $(this).data('fieldgroup-title', 'University Name');
                $(this).find('span.floating-label').html('University Name');
            }
        }
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

    // initiate dropdowns
    const selectFields = $('.select-field').change(function() {
        $('[name$=".' + $(this).prop('name').replace('_pseudo', '') + '"]').val($(this).val());
        focusInputLabel($(this));
    });

    // assign back the values from eup to static select fields on load
    selectFields.each(function() {
        if ($(this).prop('name').indexOf('State_Post_Secondary_Education') >= 0) {
            updateStatesList($(this).closest('section').find('[name*=".Country_Code_Post_Secondary_Education_DEG"]').val(), $(this));
        }
        else if ($(this).prop('name').indexOf('School') >= 0) {
            filterSchool($(this).closest('section').find('[name*=".Country_Code_Post_Secondary_Education_DEG"]').val(), $(this));
        }
        else if ($(this).prop('name').indexOf('Legal_State') >= 0) {
            updateStatesList($(this).closest('section').find('[name*=".Legal_Country"]').val(), $(this));
        }
        if ($('[name$=".' + $(this).prop('name').replace('_pseudo', '') + '"]').val().length) {
            $(this).val($('[name$=".' + $(this).prop('name').replace('_pseudo', '') + '"]').val());
        }
    });

    // set default values
    // pre-populate Post Secondary Education
    setDefaultPostSecondaryEducation1();
    setDefaultPostSecondaryEducation2();
    setDefaultPostSecondaryEducation3();
    setDefaultPostSecondaryEducation4();

    // hide show fields/sections that has contents
    setTimeout(function() {
        // show post secondary education that are filled
        $('.post-secondary-education input:not([type="hidden"]), .post-secondary-education select').each(function(k,v) {
            if (fieldHasVal($(v))) {
                $(v).closest('.post-secondary-education').show();
            }
        });
        // show first if none is filled
        const postSecondaryEducationSections = $('.post-secondary-education:visible');
        if (postSecondaryEducationSections.length < 2) {
            $('.post-secondary-education').first().show();
            $('.post-secondary-education:eq(1)').show();
        }
        if (postSecondaryEducationSections.length <= 2) {
            $('.remove-post-secondary-education').hide();
        }
        if (postSecondaryEducationSections.length == 4) {
            $('#add-post-secondary-education').hide();
        }
    }, 2000);
    
    // show additional language information that are filled
    $('.additional-language-information input:not([type="hidden"]), .additional-language-information select').each(function(k,v) {
        if (fieldHasVal($(v))) {
            $(v).closest('.additional-language-information').show();
        }
    });
    // show first if none is filled
    const additionalLanguageInformationSections = $('.additional-language-information:visible');
    if (additionalLanguageInformationSections.length == 9) {
        $('#add-additional-language-information').hide();
    }

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

    // show previous legal experience that are filled
    $('.previous-legal-experience input:not([type="hidden"]), .previous-legal-experience select').each(function(k,v) {
        if (fieldHasVal($(v))) {
            $(v).closest('.previous-legal-experience').show();
        }
    });
    // show first if none is filled
    const previousLegalExperienceSections = $('.previous-legal-experience:visible');
    if (previousLegalExperienceSections.length < 1) {
        $('.previous-legal-experience').first().show();
    }
    if (previousLegalExperienceSections.length <= 1) {
        $('.remove-previous-legal-experience').hide();
    }
    if (previousLegalExperienceSections.length == 4) {
        $('#add-previous-legal-experience').hide();
    }

    // show sections by event triggers
    // show post secondary education fields
    $('#add-post-secondary-education').on('click', function() {
        const section = $('.post-secondary-education:hidden').first();
        section.show();
        switch (section.find('[name*="Country_Code_Post_Secondary_Education_DEG"]').prop('name').split('.')[1]) {
            case "Country_Code_Post_Secondary_Education_DEG_1":
                setDefaultPostSecondaryEducation1();
                break;
            case "Country_Code_Post_Secondary_Education_DEG_2":
                setDefaultPostSecondaryEducation2();
                break;
            case "Country_Code_Post_Secondary_Education_DEG_3":
                setDefaultPostSecondaryEducation3();
                break;
            case "Country_Code_Post_Secondary_Education_DEG_4":
                setDefaultPostSecondaryEducation4();
                break;
        }
        $('.post-secondary-education:visible input:not([type="hidden"]), .post-secondary-education select').each(function(k,v) {
            focusInputLabel($(v));
        });
        if ($('.post-secondary-education:hidden').length < 1) {
            $(this).hide();
            return;
        }
        $('.remove-post-secondary-education').show();
    });

    // show additional language information fields
    $('#add-additional-language-information').on('click', function() {
        $('.additional-language-information:hidden').first().show();
        if ($('.additional-language-information:hidden').length < 1) {
            $(this).hide();
            return;
        }
        $('.remove-additional-language-information').show();
    });

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

    // show previous legal experience fields
    $('#add-previous-legal-experience').on('click', function() {
        const section = $('.previous-legal-experience:hidden').first();
        section.show();
        switch (section.find('[name*="Legal_Country"]').prop('name').split('.')[1]) {
            case "Legal_Country_1":
                updateStatesList($('[name$=".Legal_Country_1"]').val(), $('#EditProfile [name$="Legal_State_1_pseudo"]'));
                break;
            case "Legal_Country_2":
                updateStatesList($('[name$=".Legal_Country_2"]').val(), $('#EditProfile [name$="Legal_State_2_pseudo"]'));
                break;
            case "Legal_Country_3":
                updateStatesList($('[name$=".Legal_Country_3"]').val(), $('#EditProfile [name$="Legal_State_3_pseudo"]'));
                break;
            case "Legal_Country_4":
                updateStatesList($('[name$=".Legal_Country_4"]').val(), $('#EditProfile [name$="Legal_State_4_pseudo"]'));
                break;
        }
        if ($('.previous-legal-experience:visible').length <= 1) {
            $(this).show();
            $('.remove-previous-legal-experience').hide();
            return;
        }
        if ($('.previous-legal-experience:visible').length == 4) {
            $(this).hide();
            $('.remove-previous-legal-experience').show();
            return;
        }
        $(this).show();
        $('.remove-previous-legal-experience').show();
    });

    // hide sections by event triggers
    // hide post secondary education fields
    $('.remove-post-secondary-education').on('click', function() {
        const section = $(this).closest('section').hide();
        const hiddenFields = section.find('input:not([type="hidden"]), select');
        section.find('input:not([type="hidden"]):not(:radio), select').val('');
        section.find('.date-field').trigger("change");
        section.find('.select-field').trigger("change");
        section.find('input:radio').prop('checked', false);
        focusInputLabel(hiddenFields);
        hiddenFields.each(function(k,v) {
            validateField($(v), true);
        });
        if ($('.post-secondary-education:visible').length < 4) {
            $('#add-post-secondary-education').show();
        }
    });

    // hide additional language information fields
    $('.remove-additional-language-information').on('click', function() {
        const section = $(this).closest('section').hide();
        const hiddenFields = section.find('input:not([type="hidden"]), select');
        section.find('input:not([type="hidden"]):not(:radio), select').val('');
        section.find('input:radio').prop('checked', false);
        focusInputLabel(hiddenFields);
        hiddenFields.each(function(k,v) {
            validateField($(v), true);
        });
        if ($('.additional-language-information:visible').length < 9) {
            $('#add-additional-language-information').show();
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

    // hide previous legal experience fields
    $('.remove-previous-legal-experience').on('click', function() {
        const section = $(this).closest('section').hide();
        const hiddenFields = section.find('input:not([type="hidden"]), select');
        section.find('input:not([type="hidden"]):not(:radio), select').val('');
        section.find('.date-field').trigger("change");
        section.find('.select-field').trigger("change");
        section.find('input:radio').prop('checked', false);
        focusInputLabel(hiddenFields);
        hiddenFields.data('validation', null).each(function(k,v) {
            validateField($(v), true);
        });
        if ($('.previous-legal-experience:visible').length <= 1) {
            $('.remove-previous-legal-experience').hide();
        }
        if ($('.previous-legal-experience:visible').length < 4) {
            $('#add-previous-legal-experience').show();
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

    // hide show visa info
    $('[name$="Visa_1"]').change(function() {
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
    });
    $('[name$="Visa_1"]').trigger("change");

    // filter Citizenship Status by Citizenship Country
    // Country 1
    /*$('[name$="Citizenship_Country_1"]').change(function() {
        updateCitizenshipStatusList($(this).val(), $('#EditProfile [name$=".Citizenship_Status_1"]'));
        if ($('#EditProfile [name$=".Citizenship_Status_1"] option').length <= 1 && $('#EditProfile [name$=".Citizenship_Status_1"] option')[0].value == "") {
            validateField($('[name$=".Citizenship_Status_1"]').data('validation', null), true);
        }
        else {
            $('[name$=".Citizenship_Status_1"]').data('validation', 'required');
        }
    });
    $('[name$="Citizenship_Country_1"]').trigger("change");*/
    // Country 2
    /*$('[name$="Citizenship_Country_2"]').change(function() {
        updateCitizenshipStatusList($(this).val(), $('#EditProfile [name$=".Citizenship_Status_2"]'));
        if ($('#EditProfile [name$=".Citizenship_Status_2"] option').length <= 1 && $('#EditProfile [name$=".Citizenship_Status_2"] option')[0].value == "") {
            validateField($('[name$=".Citizenship_Status_2"]').data('validation', null), true);
        }
        else {
            $('[name$=".Citizenship_Status_2"]').data('validation', 'required');
        }
    });
    $('[name$="Citizenship_Country_2"]').trigger("change");*/
    // Country 3
    /*$('[name$="Citizenship_Country_3"]').change(function() {
        updateCitizenshipStatusList($(this).val(), $('#EditProfile [name$=".Citizenship_Status_3"]'));
        if ($('#EditProfile [name$=".Citizenship_Status_3"] option').length <= 1 && $('#EditProfile [name$=".Citizenship_Status_3"] option')[0].value == "") {
            validateField($('[name$=".Citizenship_Status_3"]').data('validation', null), true);
        }
        else {
            $('[name$=".Citizenship_Status_3"]').data('validation', 'required');
        }
    });
    $('[name$="Citizenship_Country_3"]').trigger("change");*/
    // Country 4
    /*$('[name$="Citizenship_Country_4"]').change(function() {
        updateCitizenshipStatusList($(this).val(), $('#EditProfile [name$=".Citizenship_Status_4"]'));
        if ($('#EditProfile [name$=".Citizenship_Status_4"] option').length <= 1 && $('#EditProfile [name$=".Citizenship_Status_4"] option')[0].value == "") {
            validateField($('[name$=".Citizenship_Status_4"]').data('validation', null), true);
        }
        else {
            $('[name$=".Citizenship_Status_4"]').data('validation', 'required');
        }
    });
    $('[name$="Citizenship_Country_4"]').trigger("change");*/

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

    $('.date-field').change(function() {
        $('[name$=".' + $(this).prop('name').replace('_pseudo', '_display') + '"]')
                .datepicker('setDate', $(this).datepicker('getDate'));
    });

    // require Post Secondary Education Major/Area of Study by Degree
    // show or hide Post Secondary Education Honor or Awards ID by Degree
    // Degree 1
    $('[name$="Degree_Post_Secondary_Education_DEG_1"]').change(function() {
        // Major by Degree 1
        if ($('[name$="Degree_Post_Secondary_Education_DEG_1"]').val() == "CER" || $('[name$="Degree_Post_Secondary_Education_DEG_1"]').val() == "DIP") {
            $('[name$="Education_1_Major_Code"]').prop("disabled", false);
            $('[name$="Education_1_Second_Major"]').prop("disabled", false);
            $('[name$="Education_1_Major_Code"]').data('validation', 'required');
        }
        else if ($('[name$="Degree_Post_Secondary_Education_DEG_1"]').val() == "JDMBA" || $('[name$="Degree_Post_Secondary_Education_DEG_1"]').val() == "JD") {
            $('[name$="Education_1_Major_Code"]').val("").prop("disabled", true);
            $('[name$="Education_1_Second_Major"]').val("").prop("disabled", true);
            validateField($('[name$="Education_1_Major_Code"]').data('validation', null), true);
        }
        else {
            $('[name$="Education_1_Major_Code"]').prop("disabled", false);
            $('[name$="Education_1_Second_Major"]').prop("disabled", false);
            validateField($('[name$="Education_1_Major_Code"]').data('validation', null), true);
        }
        // Honor or Awards ID by Degree 1
        if ($('[name$="Degree_Post_Secondary_Education_DEG_1"]').val() == "JDMBA" || $('[name$="Degree_Post_Secondary_Education_DEG_1"]').val() == "JD" || $('[name$="Degree_Post_Secondary_Education_DEG_1"]').val() == "LLM") {
            $('[name$="ID_JPM_Profiles_Honor_Awards"]').closest('.input_wrapper').show();
            setDefaultValue($('[name$=".ID_JPM_Profiles_Honor_Awards"]'), $('[name$=".Education_1_Law_Review"]').val());
            focusInputLabel($('[name$="ID_JPM_Profiles_Honor_Awards"]'));
        }
        else {
            $('[name$="ID_JPM_Profiles_Honor_Awards"]').val("").closest('.input_wrapper').hide();
        }
        $('[name$="ID_JPM_Profiles_Honor_Awards"]').trigger("change");
    });
    $('[name$="Degree_Post_Secondary_Education_DEG_1"]').trigger("change");
    // Degree 1
    $('[name$="Degree_Post_Secondary_Education_DEG_2"]').change(function() {
        // Major by Degree 2
        if ($('[name$="Degree_Post_Secondary_Education_DEG_2"]').val() == "CER" || $('[name$="Degree_Post_Secondary_Education_DEG_2"]').val() == "DIP") {
            $('[name$="Education_2_Major_Code"]').prop("disabled", false);
            $('[name$="Education_2_Second_Major"]').prop("disabled", false);
            $('[name$="Education_2_Major_Code"]').data('validation', 'required');
        }
        else if ($('[name$="Degree_Post_Secondary_Education_DEG_2"]').val() == "JDMBA" || $('[name$="Degree_Post_Secondary_Education_DEG_2"]').val() == "JD") {
            $('[name$="Education_2_Major_Code"]').val("").prop("disabled", true);
            $('[name$="Education_2_Second_Major"]').val("").prop("disabled", true);
            validateField($('[name$="Education_2_Major_Code"]').data('validation', null), true);
        }
        else {
            $('[name$="Education_2_Major_Code"]').prop("disabled", false);
            $('[name$="Education_2_Second_Major"]').prop("disabled", false);
            validateField($('[name$="Education_2_Major_Code"]').data('validation', null), true);
        }
        // Honor or Awards ID by Degree 2
        if ($('[name$="Degree_Post_Secondary_Education_DEG_2"]').val() == "JDMBA" || $('[name$="Degree_Post_Secondary_Education_DEG_2"]').val() == "JD" || $('[name$="Degree_Post_Secondary_Education_DEG_2"]').val() == "LLM") {
            $('[name$="ID_JPM_Profiles_Honor_Awards_2"]').closest('.input_wrapper').show();
            setDefaultValue($('[name$=".ID_JPM_Profiles_Honor_Awards_2"]'), $('[name$=".Education_1_Law_Review"]').val());
            focusInputLabel($('[name$="ID_JPM_Profiles_Honor_Awards_2"]'));
        }
        else {
            $('[name$="ID_JPM_Profiles_Honor_Awards_2"]').val("").closest('.input_wrapper').hide();
        }
        $('[name$="ID_JPM_Profiles_Honor_Awards_2"]').trigger("change");
    });
    $('[name$="Degree_Post_Secondary_Education_DEG_2"]').trigger("change");
    // Degree 3
    $('[name$="Degree_Post_Secondary_Education_DEG_3"]').change(function() {
        // Major by Degree 3
        if ($('[name$="Degree_Post_Secondary_Education_DEG_3"]').val() == "CER" || $('[name$="Degree_Post_Secondary_Education_DEG_3"]').val() == "DIP") {
            $('[name$="Education_3_Major_Code"]').prop("disabled", false);
            $('[name$="Education_3_Second_Major"]').prop("disabled", false);
            $('[name$="Education_3_Major_Code"]').data('validation', 'required');
        }
        else if ($('[name$="Degree_Post_Secondary_Education_DEG_3"]').val() == "JDMBA" || $('[name$="Degree_Post_Secondary_Education_DEG_3"]').val() == "JD") {
            $('[name$="Education_3_Major_Code"]').val("").prop("disabled", true);
            $('[name$="Education_3_Second_Major"]').val("").prop("disabled", true);
            validateField($('[name$="Education_3_Major_Code"]').data('validation', null), true);
        }
        else {
            $('[name$="Education_3_Major_Code"]').prop("disabled", false);
            $('[name$="Education_3_Second_Major"]').prop("disabled", false);
            validateField($('[name$="Education_3_Major_Code"]').data('validation', null), true);
        }
        // Honor or Awards ID by Degree 3
        /*if ($('[name$="Degree_Post_Secondary_Education_DEG_3"]').val() == "JDMBA" || $('[name$="Degree_Post_Secondary_Education_DEG_3"]').val() == "JD" || $('[name$="Degree_Post_Secondary_Education_DEG_3"]').val() == "LLM") {
            $('[name$="ID_JPM_Profiles_Honor_Awards_3"]').closest('.input_wrapper').show();
        }
        else {
            $('[name$="ID_JPM_Profiles_Honor_Awards_3"]').closest('.input_wrapper').hide();
        }*/
    });
    $('[name$="Degree_Post_Secondary_Education_DEG_3"]').trigger("change");
    // Degree 4
    $('[name$="Degree_Post_Secondary_Education_DEG_4"]').change(function() {
        // Major by Degree 4
        if ($('[name$="Degree_Post_Secondary_Education_DEG_4"]').val() == "CER" || $('[name$="Degree_Post_Secondary_Education_DEG_4"]').val() == "DIP") {
            $('[name$="Education_4_Major_Code"]').prop("disabled", false);
            $('[name$="Education_4_Second_Major"]').prop("disabled", false);
            $('[name$="Education_4_Major_Code"]').data('validation', 'required');
        }
        else if ($('[name$="Degree_Post_Secondary_Education_DEG_4"]').val() == "JDMBA" || $('[name$="Degree_Post_Secondary_Education_DEG_4"]').val() == "JD") {
            $('[name$="Education_4_Major_Code"]').val("").prop("disabled", true);
            $('[name$="Education_4_Second_Major"]').val("").prop("disabled", true);
            validateField($('[name$="Education_4_Major_Code"]').data('validation', null), true);
        }
        else {
            $('[name$="Education_4_Major_Code"]').prop("disabled", false);
            $('[name$="Education_4_Second_Major"]').prop("disabled", false);
            validateField($('[name$="Education_4_Major_Code"]').data('validation', null), true);
        }
        // Honor or Awards ID by Degree 4
        /*if ($('[name$="Degree_Post_Secondary_Education_DEG_4"]').val() == "JDMBA" || $('[name$="Degree_Post_Secondary_Education_DEG_4"]').val() == "JD" || $('[name$="Degree_Post_Secondary_Education_DEG_4"]').val() == "LLM") {
            $('[name$="ID_JPM_Profiles_Honor_Awards_4"]').closest('.input_wrapper').show();
        }
        else {
            $('[name$="ID_JPM_Profiles_Honor_Awards_4"]').closest('.input_wrapper').hide();
        }*/
    });
    $('[name$="Degree_Post_Secondary_Education_DEG_4"]').trigger("change");

    // filter Post Secondary Education State by Country
    // State By Country 1
    $('[name$="Country_Code_Post_Secondary_Education_DEG_1"]').change(function() {
        updateStatesList($(this).val(), $('#EditProfile [name$="State_Post_Secondary_Education_DEG_1_pseudo"]'));
        if ($('#EditProfile [name$="State_Post_Secondary_Education_DEG_1_pseudo"] option').length <= 1 && $('#EditProfile [name$="State_Post_Secondary_Education_DEG_1_pseudo"] option')[0].value == "") {
            validateField($('[name$="State_Post_Secondary_Education_DEG_1_pseudo"]').data('validation', null), true);
        }
        else {
            $('[name$="State_Post_Secondary_Education_DEG_1_pseudo"]').data('validation', 'required');
        }
        filterSchool($(this).val(), $('#EditProfile [name$="School_Code_Post_Secondary_Education_DEG_1_pseudo"]'));
        if ($('#EditProfile [name$="School_Code_Post_Secondary_Education_DEG_1_pseudo"] option').length <= 1 && $('#EditProfile [name$="School_Code_Post_Secondary_Education_DEG_1_pseudo"] option')[0].value == "") {
            validateField($('[name$="School_Code_Post_Secondary_Education_DEG_1_pseudo"]').data('validation', null), true);
        }
        else {
            $('[name$="School_Code_Post_Secondary_Education_DEG_1_pseudo"]').data('validation', 'required');
        }
        forceDefaultValue($('[name$=".Country_JPM_Profiles_Honor_Awards"]'), $('[name$=".Country_Code_Post_Secondary_Education_DEG_1"]').val());
        focusInputLabel($('[name$="Country_JPM_Profiles_Honor_Awards"]'));
        $('[name$="Country_JPM_Profiles_Honor_Awards"]').trigger("change");
    });
    $('[name$="Country_Code_Post_Secondary_Education_DEG_1"]').trigger("change");
    // State By Country 2
    $('[name$="Country_Code_Post_Secondary_Education_DEG_2"]').change(function() {
        updateStatesList($(this).val(), $('#EditProfile [name$="State_Post_Secondary_Education_DEG_2_pseudo"]'));
        if ($('#EditProfile [name$="State_Post_Secondary_Education_DEG_2_pseudo"] option').length <= 1 && $('#EditProfile [name$="State_Post_Secondary_Education_DEG_2_pseudo"] option')[0].value == "") {
            validateField($('[name$="State_Post_Secondary_Education_DEG_2_pseudo"]').data('validation', null), true);
        }
        else {
            $('[name$="State_Post_Secondary_Education_DEG_2_pseudo"]').data('validation', 'required');
        }
        filterSchool($(this).val(), $('#EditProfile [name$="School_Code_Post_Secondary_Education_DEG_2_pseudo"]'));
        if ($('#EditProfile [name$="School_Code_Post_Secondary_Education_DEG_2_pseudo"] option').length <= 1 && $('#EditProfile [name$="School_Code_Post_Secondary_Education_DEG_2_pseudo"] option')[0].value == "") {
            validateField($('[name$="School_Code_Post_Secondary_Education_DEG_2_pseudo"]').data('validation', null), true);
        }
        else {
            $('[name$="School_Code_Post_Secondary_Education_DEG_2_pseudo"]').data('validation', 'required');
        }
        forceDefaultValue($('[name$=".Country_JPM_Profiles_Honor_Awards_2"]'), $('[name$=".Country_Code_Post_Secondary_Education_DEG_2"]').val());
        focusInputLabel($('[name$="Country_JPM_Profiles_Honor_Awards_2"]'));
        $('[name$="Country_JPM_Profiles_Honor_Awards_2"]').trigger("change");
    });
    $('[name$="Country_Code_Post_Secondary_Education_DEG_2"]').trigger("change");
    // State By Country 3
    $('[name$="Country_Code_Post_Secondary_Education_DEG_3"]').change(function() {
        updateStatesList($(this).val(), $('#EditProfile [name$="State_Post_Secondary_Education_DEG_3_pseudo"]'));
        if ($('#EditProfile [name$="State_Post_Secondary_Education_DEG_3_pseudo"] option').length <= 1 && $('#EditProfile [name$="State_Post_Secondary_Education_DEG_3_pseudo"] option')[0].value == "") {
            validateField($('[name$="State_Post_Secondary_Education_DEG_3_pseudo"]').data('validation', null), true);
        }
        else {
            $('[name$="State_Post_Secondary_Education_DEG_3_pseudo"]').data('validation', 'required');
        }
        filterSchool($(this).val(), $('#EditProfile [name$="School_Code_Post_Secondary_Education_DEG_3_pseudo"]'));
        if ($('#EditProfile [name$="School_Code_Post_Secondary_Education_DEG_3_pseudo"] option').length <= 1 && $('#EditProfile [name$="School_Code_Post_Secondary_Education_DEG_3_pseudo"] option')[0].value == "") {
            validateField($('[name$="School_Code_Post_Secondary_Education_DEG_3_pseudo"]').data('validation', null), true);
        }
        else {
            $('[name$="School_Code_Post_Secondary_Education_DEG_3_pseudo"]').data('validation', 'required');
        }
    });
    $('[name$="Country_Code_Post_Secondary_Education_DEG_3"]').trigger("change");
    // State By Country 4
    $('[name$="Country_Code_Post_Secondary_Education_DEG_4"]').change(function() {
        updateStatesList($(this).val(), $('#EditProfile [name$="State_Post_Secondary_Education_DEG_4_pseudo"]'));
        if ($('#EditProfile [name$="State_Post_Secondary_Education_DEG_4_pseudo"] option').length <= 1 && $('#EditProfile [name$="State_Post_Secondary_Education_DEG_4_pseudo"] option')[0].value == "") {
            validateField($('[name$="State_Post_Secondary_Education_DEG_4_pseudo"]').data('validation', null), true);
        }
        else {
            $('[name$="State_Post_Secondary_Education_DEG_4_pseudo"]').data('validation', 'required');
        }
        filterSchool($(this).val(), $('#EditProfile [name$="School_Code_Post_Secondary_Education_DEG_4_pseudo"]'));
        if ($('#EditProfile [name$="School_Code_Post_Secondary_Education_DEG_4_pseudo"] option').length <= 1 && $('#EditProfile [name$="School_Code_Post_Secondary_Education_DEG_4_pseudo"] option')[0].value == "") {
            validateField($('[name$="School_Code_Post_Secondary_Education_DEG_4_pseudo"]').data('validation', null), true);
        }
        else {
            $('[name$="School_Code_Post_Secondary_Education_DEG_4_pseudo"]').data('validation', 'required');
        }
    });
    $('[name$="Country_Code_Post_Secondary_Education_DEG_4"]').trigger("change");
    
    // populate Honors or Awards School Name by Post Secondary Education School Name
    // School Name 1
    $('[name$="School_Code_Post_Secondary_Education_DEG_1_pseudo"]').change(function() {
        forceDefaultValue($('[name$="School_JPM_Profiles_Honor_Awards_pseudo"]'), $('[name$="School_Code_Post_Secondary_Education_DEG_1_pseudo"]').val());
        focusInputLabel($('[name$="School_JPM_Profiles_Honor_Awards_pseudo"]'));
    });
    $('[name$="School_Code_Post_Secondary_Education_DEG_1_pseudo"]').trigger("change");
    // School Name 2
    $('[name$="School_Code_Post_Secondary_Education_DEG_2_pseudo"]').change(function() {
        forceDefaultValue($('[name$="School_JPM_Profiles_Honor_Awards_2_pseudo"]'), $('[name$="School_Code_Post_Secondary_Education_DEG_2_pseudo"]').val());
        focusInputLabel($('[name$="School_JPM_Profiles_Honor_Awards_2_pseudo"]'));
    });
    $('[name$="School_Code_Post_Secondary_Education_DEG_2_pseudo"]').trigger("change");

    // hide or show Honors or Awards Country and School based on Honors or Awards ID
    // Honors or Awards ID 1 
    $('[name$="ID_JPM_Profiles_Honor_Awards"]').change(function() {
        if ($('[name$="ID_JPM_Profiles_Honor_Awards"]').val().length) {
            forceDefaultValue($('[name$=".Country_JPM_Profiles_Honor_Awards"]'), $('[name$=".Country_Code_Post_Secondary_Education_DEG_1"]').val());
            $('[name$="Country_JPM_Profiles_Honor_Awards"]').trigger("change");
            forceDefaultValue($('[name$="School_JPM_Profiles_Honor_Awards_pseudo"]'), $('[name$="School_Code_Post_Secondary_Education_DEG_1_pseudo"]').val());
            $('[name$="Country_JPM_Profiles_Honor_Awards"]').closest('.input_wrapper').show();
            $('[name$="School_JPM_Profiles_Honor_Awards_pseudo"]').closest('.input_wrapper').show();
            focusInputLabel($('[name$="Country_JPM_Profiles_Honor_Awards"], [name$="School_JPM_Profiles_Honor_Awards_pseudo"]'));
        }
        else {
            $('[name$="Country_JPM_Profiles_Honor_Awards"]').val("").closest('.input_wrapper').hide();
            $('[name$="Country_JPM_Profiles_Honor_Awards"]').trigger("change");
            $('[name$="School_JPM_Profiles_Honor_Awards_pseudo"]').val("").closest('.input_wrapper').hide();
        }
        $('[name$="School_JPM_Profiles_Honor_Awards_pseudo"]').trigger("change");
    });
    $('[name$="ID_JPM_Profiles_Honor_Awards"]').trigger("change");
    // Honors or Awards ID 2
    $('[name$="ID_JPM_Profiles_Honor_Awards_2"]').change(function() {
        if ($('[name$="ID_JPM_Profiles_Honor_Awards_2"]').val().length) {
            forceDefaultValue($('[name$=".Country_JPM_Profiles_Honor_Awards_2"]'), $('[name$=".Country_Code_Post_Secondary_Education_DEG_2"]').val());
            $('[name$="Country_JPM_Profiles_Honor_Awards_2"]').trigger("change");
            forceDefaultValue($('[name$="School_JPM_Profiles_Honor_Awards_2_pseudo"]'), $('[name$="School_Code_Post_Secondary_Education_DEG_2_pseudo"]').val());
            $('[name$="Country_JPM_Profiles_Honor_Awards_2"]').closest('.input_wrapper').show();
            $('[name$="School_JPM_Profiles_Honor_Awards_2_pseudo"]').closest('.input_wrapper').show();
            focusInputLabel($('[name$="Country_JPM_Profiles_Honor_Awards_2"], [name$="School_JPM_Profiles_Honor_Awards_2_pseudo"]'));
        }
        else {
            $('[name$="Country_JPM_Profiles_Honor_Awards_2"]').val("").closest('.input_wrapper').hide();
            $('[name$="Country_JPM_Profiles_Honor_Awards_2"]').trigger("change");
            $('[name$="School_JPM_Profiles_Honor_Awards_2_pseudo"]').val("").closest('.input_wrapper').hide();
        }
        $('[name$="School_JPM_Profiles_Honor_Awards_2_pseudo"]').trigger("change");
    });
    $('[name$="ID_JPM_Profiles_Honor_Awards"]').trigger("change");

    // filter Honors or Awards School Name by Country
    // School Name by Country 1
    $('[name$="Country_JPM_Profiles_Honor_Awards"]').change(function() {
        filterSchool($(this).val(), $('#EditProfile [name$="School_JPM_Profiles_Honor_Awards_pseudo"]'));
    });
    $('[name$="Country_JPM_Profiles_Honor_Awards"]').trigger("change");
    // School Name by Country 2
    $('[name$="Country_JPM_Profiles_Honor_Awards_2"]').change(function() {
        filterSchool($(this).val(), $('#EditProfile [name$="School_JPM_Profiles_Honor_Awards_2_pseudo"]'));
    });
    $('[name$="Country_JPM_Profiles_Honor_Awards_2"]').trigger("change");

    // filter Previous Legal Experience State by Country
    // Previous Legal Experience State By Country 1
    $('[name$="Legal_Country_1"]').change(function() {
        updateStatesList($(this).val(), $('#EditProfile [name$="Legal_State_1_pseudo"]'));
        if ($('#EditProfile [name$="Legal_State_1_pseudo"] option').length <= 1 && $('#EditProfile [name$="Legal_State_1_pseudo"] option')[0].value == "") {
            validateField($('[name$="Legal_State_1_pseudo"]').data('validation', null), true);
        }
        else {
            $('[name$="Legal_State_1_pseudo"]').data('validation', 'required');
        }
    });
    $('[name$="Legal_Country_1"]').trigger("change");
    // Previous Legal Experience State By Country 2
    $('[name$="Legal_Country_2"]').change(function() {
        updateStatesList($(this).val(), $('#EditProfile [name$="Legal_State_2_pseudo"]'));
        if ($('#EditProfile [name$="Legal_State_2_pseudo"] option').length <= 1 && $('#EditProfile [name$="Legal_State_2_pseudo"] option')[0].value == "") {
            validateField($('[name$="Legal_State_2_pseudo"]').data('validation', null), true);
        }
        else {
            $('[name$="Legal_State_2_pseudo"]').data('validation', 'required');
        }
    });
    $('[name$="Legal_Country_2"]').trigger("change");
    // Previous Legal Experience State By Country 3
    $('[name$="Legal_Country_3"]').change(function() {
        updateStatesList($(this).val(), $('#EditProfile [name$="Legal_State_3_pseudo"]'));
        if ($('#EditProfile [name$="Legal_State_3_pseudo"] option').length <= 1 && $('#EditProfile [name$="Legal_State_3_pseudo"] option')[0].value == "") {
            validateField($('[name$="Legal_State_3_pseudo"]').data('validation', null), true);
        }
        else {
            $('[name$="Legal_State_3_pseudo"]').data('validation', 'required');
        }
    });
    $('[name$="Legal_Country_3"]').trigger("change");
    // Previous Legal Experience State By Country 4
    $('[name$="Legal_Country_4"]').change(function() {
        updateStatesList($(this).val(), $('#EditProfile [name$="Legal_State_4_pseudo"]'));
        if ($('#EditProfile [name$="Legal_State_4_pseudo"] option').length <= 1 && $('#EditProfile [name$="Legal_State_4_pseudo"] option')[0].value == "") {
            validateField($('[name$="Legal_State_4_pseudo"]').data('validation', null), true);
        }
        else {
            $('[name$="Legal_State_4_pseudo"]').data('validation', 'required');
        }
    });
    $('[name$="Legal_Country_4"]').trigger("change");

    // previous legal experience section
    // toogle required for previous legal experience section
    $('[name*=".Legal_Position"]', providerContext).on('change', function() {
        const previousLegalExperienceFields = {
            dependentFields1: $('[name$=".Legal_Employer_1"], [name$=".Legal_Country_1"], [name$=".Legal_City_1"], [name$=".Legal_Month_Start_Date_1"], [name$=".Legal_Year_Start_Date_1"], [name$=".Legal_Month_End_Date_1"], [name$=".Legal_Year_End_Date_1"]'),
            dependentFields2: $('[name$=".Legal_Employer_2"], [name$=".Legal_Country_2"], [name$=".Legal_City_2"], [name$=".Legal_Month_Start_Date_2"], [name$=".Legal_Year_Start_Date_2"], [name$=".Legal_Month_End_Date_2"], [name$=".Legal_Year_End_Date_2"]'),
            dependentFields3: $('[name$=".Legal_Employer_3"], [name$=".Legal_Country_3"], [name$=".Legal_City_3"], [name$=".Legal_Month_Start_Date_3"], [name$=".Legal_Year_Start_Date_3"], [name$=".Legal_Month_End_Date_3"], [name$=".Legal_Year_End_Date_3"]'),
            dependentFields4: $('[name$=".Legal_Employer_4"], [name$=".Legal_Country_4"], [name$=".Legal_City_4"], [name$=".Legal_Month_Start_Date_4"], [name$=".Legal_Year_Start_Date_4"], [name$=".Legal_Month_End_Date_4"], [name$=".Legal_Year_End_Date_4"]')
        }
        switch ($(this).prop("name").split(".")[1]) {
            case "Legal_Position_1":
                if ($(this).val().length > 0) {
                    previousLegalExperienceFields.dependentFields1.data('validation', 'required');
                    return;
                }
                previousLegalExperienceFields.dependentFields1.data('validation', null).each(function(k, v) {
                    validateField($(v), true);
                });
                break;
            case "Legal_Position_2":
                if ($(this).val().length > 0) {
                    previousLegalExperienceFields.dependentFields2.data('validation', 'required');
                    return;
                }
                previousLegalExperienceFields.dependentFields2.data('validation', null).each(function(k, v) {
                    validateField($(v), true);
                });
                break;
            case "Legal_Position_3":
                if ($(this).val().length > 0) {
                    previousLegalExperienceFields.dependentFields3.data('validation', 'required');
                    return;
                }
                previousLegalExperienceFields.dependentFields3.data('validation', null).each(function(k, v) {
                    validateField($(v), true);
                });
                break;
            case "Legal_Position_4":
                if ($(this).val().length > 0) {
                    previousLegalExperienceFields.dependentFields4.data('validation', 'required');
                    return;
                }
                previousLegalExperienceFields.dependentFields4.data('validation', null).each(function(k, v) {
                    validateField($(v), true);
                });
                break;
        }
    });
    $('#EditProfile [name*=".Legal_Position"]').trigger('change');

    // clerkship section
    // toogle required for 1st clerkship section
    $('[name$=".Clerkship_ID_1_Court"]', providerContext).on('change', function() {
        const dependentFields = $('[name$=".Clerkship_ID_1_Judge"], [name$=".Clerkship_ID_1_From_Month"], [name$=".Clerkship_ID_1_To_month"], [name$=".Clerkship_ID_1_To_year"]');
        const dependentFields2 = $('[name$=".Clerkship_ID_1_From_year"]');
        if ($(this).val().length > 0) {
            dependentFields.data('validation', 'required');
            dependentFields2.data('validation', 'required,no-future-year');
            return;
        }
        dependentFields.data('validation', null).each(function(k,v) {
            validateField($(v), true);
        });
        dependentFields2.data('validation', 'no-future-year').each(function(k,v) {
            validateField($(v));
        });
    });
    $('#EditProfile [name$=".Clerkship_ID_1_Court"]').trigger('change');
    // toogle required for 2nd clerkship section
    $('[name$=".Clerkship_ID_2_Court"]', providerContext).on('change', function() {
        const dependentFields = $('[name$=".Clerkship_ID_2_Judge"], [name$=".Clerkship_ID_2_From_Month"], [name$=".Clerkship_ID_2_To_month"], [name$=".Clerkship_ID_2_To_year"]');
        const dependentFields2 = $('[name$=".Clerkship_ID_2_From_year"]');
        if ($(this).val().length > 0) {
            dependentFields.data('validation', 'required');
            dependentFields2.data('validation', 'required,no-future-year');
            return;
        }
        dependentFields.data('validation', null).each(function(k,v) {
            validateField($(v), true);
        });
        dependentFields2.data('validation', 'no-future-year').each(function(k,v) {
            validateField($(v));
        });
    });
    $('#EditProfile [name$=".Clerkship_ID_2_Court"]').trigger('change');
    // toogle required for 3rd clerkship section
    $('[name$=".Clerkship_ID_3_Court"]', providerContext).on('change', function() {
        const dependentFields = $('[name$=".Clerkship_ID_3_Judge"], [name$=".Clerkship_ID_3_From_Month"], [name$=".Clerkship_ID_3_To_month"], [name$=".Clerkship_ID_3_To_year"]');
        const dependentFields2 = $('[name$=".Clerkship_ID_3_From_year"]');
        if ($(this).val().length > 0) {
            dependentFields.data('validation', 'required');
            dependentFields2.data('validation', 'required,no-future-year');
            return;
        }
        dependentFields.data('validation', null).each(function(k,v) {
            validateField($(v), true);
        });
        dependentFields2.data('validation', 'no-future-year').each(function(k,v) {
            validateField($(v));
        });
    });
    $('#EditProfile [name$=".Clerkship_ID_3_Court"]').trigger('change');
    // toogle required for 4th clerkship section
    $('[name$=".Clerkship_ID_4_Court"]', providerContext).on('change', function() {
        const dependentFields = $('[name$=".Clerkship_ID_4_Judge"], [name$=".Clerkship_ID_4_From_Month"], [name$=".Clerkship_ID_4_To_month"], [name$=".Clerkship_ID_4_To_year"]');
        const dependentFields2 = $('[name$=".Clerkship_ID_4_From_year"]');
        if ($(this).val().length > 0) {
            dependentFields.data('validation', 'required');
            dependentFields2.data('validation', 'required,no-future-year');
            return;
        }
        dependentFields.data('validation', null).each(function(k,v) {
            validateField($(v), true);
        });
        dependentFields2.data('validation', 'no-future-year').each(function(k,v) {
            validateField($(v));
        });
    });
    $('#EditProfile [name$=".Clerkship_ID_4_Court"]').trigger('change');
    // toogle required for 5th clerkship section
    $('[name$=".Clerkship_ID_5_Court"]', providerContext).on('change', function() {
        const dependentFields = $('[name$=".Clerkship_ID_5_Judge"], [name$=".Clerkship_ID_5_From_Month"], [name$=".Clerkship_ID_5_To_month"], [name$=".Clerkship_ID_5_To_year"]');
        const dependentFields2 = $('[name$=".Clerkship_ID_5_From_year"]');
        if ($(this).val().length > 0) {
            dependentFields.data('validation', 'required');
            dependentFields2.data('validation', 'required,no-future-year');
            return;
        }
        dependentFields.data('validation', null).each(function(k,v) {
            validateField($(v), true);
        });
        dependentFields2.data('validation', 'no-future-year').each(function(k,v) {
            validateField($(v));
        });
    });
    $('#EditProfile [name$=".Clerkship_ID_5_Court"]').trigger('change');

    $('[name$=".Clerkship_ID_1_From_year"]', providerContext).on('change', function() {
        validateField($('[name$=".Clerkship_ID_1_From_Month"]'), false, function() {
            return noFutureMonth($('[name$=".Clerkship_ID_1_From_Month"]'));
        });
    });
    $('[name$=".Clerkship_ID_2_From_year"]', providerContext).on('change', function() {
        validateField($('[name$=".Clerkship_ID_2_From_Month"]'), false, function() {
            return noFutureMonth($('[name$=".Clerkship_ID_2_From_Month"]'));
        });
    });
    $('[name$=".Clerkship_ID_3_From_year"]', providerContext).on('change', function() {
        validateField($('[name$=".Clerkship_ID_3_From_Month"]'), false, function() {
            return noFutureMonth($('[name$=".Clerkship_ID_3_From_Month"]'));
        });
    });
    $('[name$=".Clerkship_ID_4_From_year"]', providerContext).on('change', function() {
        validateField($('[name$=".Clerkship_ID_4_From_Month"]'), false, function() {
            return noFutureMonth($('[name$=".Clerkship_ID_4_From_Month"]'));
        });
    });
    $('[name$=".Clerkship_ID_5_From_year"]', providerContext).on('change', function() {
        validateField($('[name$=".Clerkship_ID_5_From_Month"]'), false, function() {
            return noFutureMonth($('[name$=".Clerkship_ID_5_From_Month"]'));
        });
    });

    //for testing -cdy
    $('[name$=".Clerkship_ID_1_To_month"], [name$=".Clerkship_ID_1_To_year"]', providerContext).on('change', function() {
        validateField($('[name$=".Clerkship_ID_1_From_Month"]'), false, function() {
            return overlapToDate_Clerkship_ID_1_From_Month($('[name$=".Clerkship_ID_1_From_Month"]'));
        });
    });

    $('[name$=".Clerkship_ID_2_To_month"], [name$=".Clerkship_ID_2_To_year"]', providerContext).on('change', function() {
        validateField($('[name$=".Clerkship_ID_2_From_Month"]'), false, function() {
            return overLapChecker($('[name$=".Clerkship_ID_2_From_Month"]'));
        });
    });

    //for testing -cdy
    $('[name$=".Clerkship_ID_3_To_month"],[name$=".Clerkship_ID_3_To_year"]', providerContext).on('change', function() {
        validateField($('[name$=".Clerkship_ID_3_From_Month"]'), false, function() {
            return overLapChecker($('[name$=".Clerkship_ID_3_From_Month"]'));
        });
    });

    //for testing -cdy
    $('[name$=".Clerkship_ID_4_To_month"],[name$=".Clerkship_ID_4_To_year"]', providerContext).on('change', function() {
        validateField($('[name$=".Clerkship_ID_4_From_Month"]'), false, function() {
            return overLapChecker($('[name$=".Clerkship_ID_4_From_Month"]'));
        });
    });

    //for testing -cdy
    $('[name$=".Clerkship_ID_5_To_month"],[name$=".Clerkship_ID_5_To_year"]', providerContext).on('change', function() {
        validateField($('[name$=".Clerkship_ID_5_From_Month"]'), false, function() {
            return overLapChecker($('[name$=".Clerkship_ID_5_From_Month"]'));
        });
    });

    // show all filled clerkship sections
    $('.clerkship-section input, .clerkship-section select', providerContext).each(function(k,v) {
        if (fieldHasVal($(v))) {
            $(v).closest('section').show();
        }
    });
    // display one if none shows up
    const visibleClerkships = $('.clerkship-section:visible', providerContext);
    if (visibleClerkships.length < 1) {
        $('.clerkship-section', providerContext).first().show();
    }
    // hide remove if there is only one section
    if (visibleClerkships.length <= 1) {
        $('.remove-clerkship-section', providerContext).hide();
    }
    if (visibleClerkships.length == 5) {
        $('#add-additional-clerkship', providerContext).hide();
    }
    // adding of new clerkship sections
    $('#add-additional-clerkship', providerContext).on('click', function(k,v) {
        $('.clerkship-section:hidden').first().show();
        if ($('.clerkship-section:hidden').length < 1) {
            $(this).hide();
        }
        if ($('.clerkship-section:visible').length > 1) {
            $('.remove-clerkship-section').show();
        }
    });
    // removal of clerkship sections
    $('.remove-clerkship-section', providerContext).on('click', function() {
        var fields = $(this).closest('section').hide().find('input, select').val('');
        var fieldsToHide = $(this).closest('section').hide().find('input, select').not(":eq(0)");
        focusInputLabel(fields);

        
        fieldsToHide.data('validation', null).each(function(k,v) {
            validateField($(v), true);
        })

        /* fields.each(function(k,v) {
            validateField($(v), true);
        });*/
        // hide remove button if there is but one clerkship section
        if ($('.clerkship-section:visible', providerContext).length <= 1) {
            $('.remove-clerkship-section', providerContext).hide();
        }
        // show add clerkship when there already something to hide
        if ($('.clerkship-section:hidden', providerContext).length > 0) {
            $('#add-additional-clerkship', providerContext).show();
        }
    });

    // focus style text and select fields
    $('form').on('focus', 'input[type="text"], select, textarea', function() {
        focusInputLabel($(this), true);
    }).on('blur', 'input[type="text"], select, textarea', function() {
        focusInputLabel($(this));
    });
    // focus field labels
    $.each($('form input[type="text"], form select, form textarea'),function(k,v) {
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
    // pass date data to each fields
    $.each($('[data-fieldgroup-date-enabled]'), function(k,v) {
        $(v).find('span.calendar-btn-container').remove();
    });
    // pass data disabled to each fields
    $.each($('[data-fieldgroup-disabled]'), function(k,v) {
        $(v).find('input, select, textarea').prop('disabled', $(v).data('fieldgroup-disabled'));
    });

    // validate each field by event and field type
    $('form').on('blur click', 'input[type="text"], select, textarea', function() {
        if($(this).is(':visible') && !validateField($(this))) {
            $(this).parent().find('.text-error').css({'display': 'inline-block', 'margin-bottom': '-2px'}); // style hack since IE is such a reliable browser ;-) // changed block to inline-block
        }
        // re-validate field with custom validation
        switch ($(this).prop("name").split(".")[1]) {
            case "Clerkship_ID_1_From_Month": validateField($(this), false, function() {
                    return noFutureMonth($('[name$=".Clerkship_ID_1_From_Month"]'));
                });
                break;
            case "Clerkship_ID_2_From_Month": validateField($(this), false, function() {
                    return noFutureMonth($('[name$=".Clerkship_ID_2_From_Month"]'));
                });
                break;
            case "Clerkship_ID_3_From_Month": validateField($(this), false, function() {
                    return noFutureMonth($('[name$=".Clerkship_ID_3_From_Month"]'));
                });
                break;
            case "Clerkship_ID_4_From_Month": validateField($(this), false, function() {
                    return noFutureMonth($('[name$=".Clerkship_ID_4_From_Month"]'));
                });
                break;
            case "Clerkship_ID_5_From_Month": validateField($(this), false, function() {
                    return noFutureMonth($('[name$=".Clerkship_ID_5_From_Month"]'));
                });
                break;
        }

        // re-validate field with custom validation
        switch ($(this).prop("name").split(".")[1]) {
            case "Clerkship_ID_1_From_Month": validateField($(this), false, function() {
                    return overlapToDate_Clerkship_ID_1_From_Month($('[name$=".Clerkship_ID_1_From_Month"]'));
                });
                break;

            case "Clerkship_ID_2_From_Month": validateField($(this), false, function() {
                    return overLapChecker($('[name$=".Clerkship_ID_2_From_Month"]'));
                });
                break;
            case "Clerkship_ID_3_From_Month": validateField($(this), false, function() {
                    return overLapChecker($('[name$=".Clerkship_ID_3_From_Month"]'));
                });
                break;
            case "Clerkship_ID_4_From_Month": validateField($(this), false, function() {
                    return overLapChecker($('[name$=".Clerkship_ID_4_From_Month"]'));
                });
                break;
            case "Clerkship_ID_5_From_Month": validateField($(this), false, function() {
                    return overLapChecker($('[name$=".Clerkship_ID_5_From_Month"]'));
                });
                break;
        }
    });
    $('form').on('change', 'input[type="checkbox"], input[type="radio"]', function() {
        validateField($(this));
    });


    // submit the form if no errors
    $('form').on('click', '#EUPDefaultSaveButton', function(e) {
        e.preventDefault();
        $('#EditProfile').find('input, select').prop('disabled', false);
        DisableValidation();
        doSave_Custom('refer-Save');
    });

    // submit the form if no errors
    $('form').on('click', '#TaskSummary_ButtonSave', function(e) {
        e.preventDefault();
        let formIsValid = true;
        errorMapping.clear();

                    
            $.each($('form input:not(".datepicker_button"), form select, form textarea'), function(k,v) {
            if($(v).is(':visible') && !validateField($(v))) {
                formIsValid = false;
            }
            // re-validate field with custom validation
            switch ($(v).prop("name").split(".")[1]) {
                case "Clerkship_ID_1_From_Month": if (!validateField($(v), false, function() { return noFutureMonth($('[name$=".Clerkship_ID_1_From_Month"]')); })) {
                        formIsValid = false;
                    }
                    break;
                case "Clerkship_ID_2_From_Month": if (!validateField($(v), false, function() { return noFutureMonth($('[name$=".Clerkship_ID_2_From_Month"]')); })) {
                        formIsValid = false;
                    }
                    break;
                case "Clerkship_ID_3_From_Month": if (!validateField($(v), false, function() { return noFutureMonth($('[name$=".Clerkship_ID_3_From_Month"]')); })) {
                        formIsValid = false;
                    }
                    break;
                case "Clerkship_ID_4_From_Month": if (!validateField($(v), false, function() { return noFutureMonth($('[name$=".Clerkship_ID_4_From_Month"]')); })) {
                        formIsValid = false;
                    }
                    break;
                case "Clerkship_ID_5_From_Month": if (!validateField($(v), false, function() { return noFutureMonth($('[name$=".Clerkship_ID_5_From_Month"]')); })) {
                        formIsValid = false;
                    }
                    break;
            }

            // re-validate field with custom validation
            switch ($(v).prop("name").split(".")[1]) {
                case "Clerkship_ID_1_From_Month": if (!validateField($(v), false, function() { return overlapToDate_Clerkship_ID_1_From_Month($('[name$=".Clerkship_ID_1_From_Month"]')); })) {
                        formIsValid = false;
                    }
                    break;

                case "Clerkship_ID_2_From_Month": if (!validateField($(v), false, function() { return overLapChecker($('[name$=".Clerkship_ID_2_From_Month"]')); })) {
                        formIsValid = false;
                    }
                    break;
                case "Clerkship_ID_3_From_Month": if (!validateField($(v), false, function() { return overLapChecker($('[name$=".Clerkship_ID_3_From_Month"]')); })) {
                        formIsValid = false;
                    }
                    break;
                case "Clerkship_ID_4_From_Month": if (!validateField($(v), false, function() { return overLapChecker($('[name$=".Clerkship_ID_4_From_Month"]')); })) {
                        formIsValid = false;
                    }
                    break;
                case "Clerkship_ID_5_From_Month": if (!validateField($(v), false, function() { return overLapChecker($('[name$=".Clerkship_ID_5_From_Month"]')); })) {
                        formIsValid = false;
                    }
                    break;
            }
        });
        if (formIsValid) {
            //if(overLapChecker() == 'cleared'){
                $('#EditProfile').find('input, select').prop('disabled', false);
                doSave_Custom('refer-Complete');
                return;
            /*}else{
                    vex.dialog.alert({ 
                    unsafeMessage: '<small id="clerk-error" style="color: #861F41;">' + overLapChecker() + '</small>',
                    callback: function() {
                        $("html, body").animate({ scrollTop: 0 }, "slow");
                        }
                    });
                

            } 
            return;
            */
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
        $('#add-additional-clerkship, #add-additional-bar-1, #add-additional-bar-2, #add-additional-bar-3, #add-post-secondary-education, #add-additional-language-information, #add-citizenship, #add-citizenship-visa, #add-honors-and-awards, #add-licenses-and-certifications, .remove-clerkship-section, .remove-bar-section, .remove-post-secondary-education, .remove-additional-language-information, .remove-citizenship, .remove-citizenship-visa, .remove-honors-and-awards, .remove-licenses-and-certifications').removeClass('bg-jade bg-ignite').addClass('disabled').prop('disabled', 'disabled');
        $('#EditProfile').find('input,select').prop('disabled', 'disabled');
    }

    let tx2 = performance.now();
    console.log('total load time is ' + (tx2 - tx1) / 1000 + ' seconds')


});






function overLapChecker(el){
    let tx1 = performance.now();

    var isValid = true;
    var message = ""; 

    var FromMonth1 = $("[name$='Clerkship_ID_1_From_Month']").val();
    var FromYear1 = $("[name$='Clerkship_ID_1_From_year']").val();
    var ToMonth1 = $("[name$='Clerkship_ID_1_To_month']").val();
    var ToYear1 = $("[name$='Clerkship_ID_1_To_year']").val();

    var FromMonth2 = $("[name$='Clerkship_ID_2_From_Month']").val();
    var FromYear2 = $("[name$='Clerkship_ID_2_From_year']").val();
    var ToMonth2 = $("[name$='Clerkship_ID_2_To_month']").val();
    var ToYear2 = $("[name$='Clerkship_ID_2_To_year']").val();

    var FromMonth3 = $("[name$='Clerkship_ID_3_From_Month']").val();
    var FromYear3 = $("[name$='Clerkship_ID_3_From_year']").val();
    var ToMonth3 = $("[name$='Clerkship_ID_3_To_month']").val();
    var ToYear3 = $("[name$='Clerkship_ID_3_To_year']").val();


    var FromMonth4 = $("[name$='Clerkship_ID_4_From_Month']").val();
    var FromYear4 = $("[name$='Clerkship_ID_4_From_year']").val();
    var ToMonth4 = $("[name$='Clerkship_ID_4_To_month']").val();
    var ToYear4 = $("[name$='Clerkship_ID_4_To_year']").val();

    var FromMonth5 = $("[name$='Clerkship_ID_5_From_Month']").val();
    var FromYear5 = $("[name$='Clerkship_ID_5_From_year']").val();
    var ToMonth5 = $("[name$='Clerkship_ID_5_To_month']").val();
    var ToYear5 = $("[name$='Clerkship_ID_5_To_year']").val();

    var dateFrom1 = moment(FromMonth1 + "-" + FromYear1, 'MM-YYYY').format('YYYY-MM');
    var dateTo1 = moment(ToMonth1 + "-" + ToYear1, 'MM-YYYY').format('YYYY-MM');

    var dateFrom2 = moment(FromMonth2 + "-" + FromYear2, 'MM-YYYY').format('YYYY-MM');
    var dateTo2 = moment(ToMonth2 + "-" + ToYear2, 'MM-YYYY').format('YYYY-MM');

    var dateFrom3 = moment(FromMonth3 + "-" + FromYear3, 'MM-YYYY').format('YYYY-MM');
    var dateTo3 = moment(ToMonth3 + "-" + ToYear3, 'MM-YYYY').format('YYYY-MM');

    var dateFrom4 = moment(FromMonth4 + "-" + FromYear4, 'MM-YYYY').format('YYYY-MM');
    var dateTo4 = moment(ToMonth4 + "-" + ToYear4, 'MM-YYYY').format('YYYY-MM');

    var dateFrom5 = moment(FromMonth5 + "-" + FromYear5, 'MM-YYYY').format('YYYY-MM');
    var dateTo5 = moment(ToMonth5 + "-" + ToYear5, 'MM-YYYY').format('YYYY-MM');


    


    switch (el.prop('name').split('.')[1]) {
        case "Clerkship_ID_2_From_Month":
            if(dateFrom2 != 'Invalid date' && dateTo2 != 'Invalid date'){

                if (dateFrom2 > dateTo2){
                    isValid = false;
                    message = $(el).data("title") + " should not be greater than Month Clerkship Ended";  
                }
                if((dateFrom1 <= dateTo2) && (dateFrom2 <= dateTo1)){
                    isValid = false;
                    message = $(el).data("title") + " overlaps Month Clerkship 1";
                }
            }
            break;
        case "Clerkship_ID_3_From_Month":
            if(dateFrom3 != 'Invalid date' && dateTo3 != 'Invalid date' ){

                if (dateFrom3 > dateTo3){
                    isValid = false;
                    message = $(el).data("title") + " should not be greater than Month Clerkship Ended";  
                }

                if((dateFrom1 <= dateTo3) && (dateFrom3 <= dateTo1)){
                    
                    isValid = false;
                    message = $(el).data("title") + " overlaps Month Clerkship 1";         
                }
            
                if((dateFrom2 <= dateTo3) && (dateFrom3 <= dateTo2)){
                    
                    isValid = false;
                    message = $(el).data("title") + " overlaps Month Clerkship 2";
                }
            }
            break;
        case "Clerkship_ID_4_From_Month":
            if(dateFrom4 != 'Invalid date' && dateTo4 != 'Invalid date'){

                if (dateFrom4 > dateTo4){
                    isValid = false;
                    message = $(el).data("title") + " should not be greater than Month Clerkship Ended";  
                }

                if((dateFrom1 <= dateTo4) && (dateFrom4 <= dateTo1)){
                    
                    isValid = false;
                    message = $(el).data("title") + " overlaps Month Clerkship 1";        
                }

                if((dateFrom2 <= dateTo4) && (dateFrom4 <= dateTo2)){
                    
                    isValid = false;
                    message = $(el).data("title") + " overlaps Month Clerkship 2";
                }

                if((dateFrom3 <= dateTo4) && (dateFrom4 <= dateTo3)){
                        
                    isValid = false;
                    message = $(el).data("title") + " overlaps Month Clerkship 3";
                            
                }
            }
            break;
        case "Clerkship_ID_5_From_Month":
            if(dateFrom5 != 'Invalid date' && dateTo5 != 'Invalid date' ){


                if (dateFrom5 > dateTo5){
                    isValid = false;
                    message = $(el).data("title") + " should not be greater than Month Clerkship Ended";  
                }

                if((dateFrom1 <= dateTo5) && (dateFrom5 <= dateTo1)){
                    
                    isValid = false;
                    message = $(el).data("title") + " overlaps Month Clerkship 1";
                            
                }

                if((dateFrom2 <= dateTo5) && (dateFrom5 <= dateTo2)){
                    
                    isValid = false;
                    message = $(el).data("title") + " overlaps Month Clerkship 2"; 
                            
                }

                if((dateFrom3 <= dateTo5) && (dateFrom5 <= dateTo3)){
                    
                    isValid = false;
                    message = $(el).data("title") + " overlaps Month Clerkship 3";
                            
                }
                if((dateFrom4 <= dateTo5) && (dateFrom5 <= dateTo4)){
                    
                    isValid = false;
                    message = $(el).data("title") + " overlaps Month Clerkship 4";

                }
            }
            break;
    }

    let tx2 = performance.now();
    // console.log('function load time is ' + (tx2 - tx1) / 1000 + ' seconds')


    return { 
        "isValid": isValid, 
        "message": message 
    } 

    
}

function overlapToDate_Clerkship_ID_1_From_Month(el){
    var isValid = true;
    var message = ""; 

    var FromMonth1 = $("[name$='Clerkship_ID_1_From_Month']").val();
    var FromYear1 = $("[name$='Clerkship_ID_1_From_year']").val();
    var ToMonth1 = $("[name$='Clerkship_ID_1_To_month']").val();
    var ToYear1 = $("[name$='Clerkship_ID_1_To_year']").val();

    var dateFrom1 = moment(FromMonth1 + "-" + FromYear1, 'MM-YYYY').format('YYYY-MM');
    var dateTo1 = moment(ToMonth1 + "-" + ToYear1, 'MM-YYYY').format('YYYY-MM');



    if(dateFrom1 != 'Invalid date' && dateTo1 != 'Invalid date'){

        if (dateFrom1 > dateTo1){
            isValid = false;
            message = $(el).data("title") + " should not be greater than Month Clerkship Ended";  
        }
    }

    return { 
        "isValid": isValid, 
        "message": message 
    } 
}
