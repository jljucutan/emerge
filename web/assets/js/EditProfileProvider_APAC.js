/**
 * SERVICES-36314 | jjucutan | PayPal - Create APAC Provider Page
 * Define here functions that can be reused
 */
 const focusInputLabel = function(el, isFocused) {
    let label = el.closest('.input_wrapper')
    .find('span.floating-label')
    .removeClass('label-focus')
    .css({"color": "#666666"})
    if (el && (el.val().trim().length > 0 || isFocused)) {
        label.addClass('label-focus')
    }
    if (isFocused === true) {
        label.css({"color": "#0070BA"})
    }
}
const updateTargetOnChange = function(origin, target) {
    origin.on('change', function() {
        target.val(origin.val())
        if (origin.is(':checked')) {
            target.val(origin.val())
        }
        if (origin.hasClass('hasDatepicker')) {
            target.val(moment().diff(origin.val(), 'years'))
        }
    })
}
const fieldHasVal = function(el) {
    let hasVal = false
    $.each(el, function(k, v) {
        if ($(v).val().length) {
            hasVal = true
        }
    })
    return hasVal
}
const isCheckboxChecked = function(el) {
    let hasChecked = false
    $.each(el, function(k,v){
        if ($(v).is(':checked')) {
            hasChecked = true
        }
    })
    return hasChecked
}
const setDefaultValue = function(el, defaultValue) {
    if (el.is('input[type="checkbox"]') || el.is('input[type="radio"]')) {
        if (isCheckboxChecked(el) === false) {
            $.each(el, function(k,v) {
                if ($(v).val() === defaultValue) {
                    $(v).prop('checked', 'checked')
                }
            })
        }
    }
    if (el.is('select') && el.val().length < 1 && el.find('option[value="' + defaultValue + '"]').length > 0) {
        el.val(defaultValue)
    }
    if (el.is('select') && el.val().length < 1 && el.find('option:contains(' + defaultValue + ')').length > 0) {
        el.val(el.find('option:contains(' + defaultValue + ')').prop('value'))
    }
    if (el.is('input[type="text"]') && el.val().trim().length < 1) {
        el.val(defaultValue)
    }
}
const toggleDisplayTarget = function(el, target, requiredVal, callback) {
    target.hide()
    if (!isCheckboxChecked(el)) {
        return false
    }
    $.each(el, function() {
        if ($(this).is(':checked') && $(this).val() === requiredVal) {
            target.show()
            if (typeof callback === "function") {
                callback()
            }
        }
    })
}
const toggleCashAllowance = function(v) {
    "use strict"
    if (v == 'Yes') {
        $('[name$=".CashAllowance"]').closest('.input_wrapper').show()
        return
    }
    const cashAllowance = $('[name$=".CashAllowance"]')
    cashAllowance.val('').closest('.input_wrapper').hide()
    validateField(cashAllowance, true)
    focusInputLabel(cashAllowance)
}
const showByEventLocation = function(evtLoc, sections, containerStr) {
    'use strict'
    if (EVENT_LOCATION == evtLoc) {
        sections.closest(containerStr).show()
        return
    }
    sections.val('').closest(containerStr).hide()
}
const configureField = function(field, config) {
    'use strict'
    if (config.validation) {
        field.data('validation', config.validation)
    }
    if (config.title) {
        field.data('title', config.title)
    }
    if (config.regex) {
        field.data('regex', config.regex)
    }
}
const CONFIGP = $.getJSON(CONFIG_PATH)
checkNationalID = function() {return null} // deactivate useless functions from portal
$(window).on('load', function() {
    let months = ["January","February","March","April","May","June","July", "August","September","October","November","December"]
    let today = new Date()
    let eventDate = new Date(EVENT_START)
    eventDate.setMinutes(eventDate.getMinutes() + eventDate.getTimezoneOffset())

    let eventDatePlus = new Date(EVENT_START)
    eventDatePlus.setMinutes(eventDatePlus.getMinutes() + eventDatePlus.getTimezoneOffset())
    eventDatePlus.setFullYear(eventDatePlus.getFullYear() + 3)

    let probationPeriodTime = parseInt($('[name$="ProbationPeriodTime"]').val()) ? parseInt($('[name$="ProbationPeriodTime"]').val()) : 0
    let probationEndDate = new Date(EVENT_START)
    probationEndDate.setMinutes(probationEndDate.getMinutes() + probationEndDate.getTimezoneOffset())
    probationEndDate.setMonth(eventDate.getMonth() + probationPeriodTime)

    let isProfileCompleted = sTaskComplete
    $('.floating-label span').css('color', 'rgb(102, 102, 102)')
    $('.cal_and_button').prop('cellpadding', 0).prop('cellspacing', 0)
    // replace default submit button with paypal styled
    $('#TaskSummary_ButtonCancel').appendTo('#cancel').show()
    if (!isProfileCompleted) {
        $('#TaskSummary_ButtonSave').appendTo('#saveandcomplete').prop('onclick', null).show().text('Continue')
        $('#EUPDefaultSaveButton').appendTo('#save').show()
    }

    $.when(CONFIGP).done(function(c) {
        c.fields.forEach(function(f) {
            const field = $('[name$=".' + f.name + '"]')
            configureField(field, f)
        })
    })

    // fill pseudo selects with real options
    $('#HIRE_ON_BONUS_CRNCY_CD_pseudo').append($('[name$="Currency_Code_new"]').find('option').clone()).val("")
    $('#Comp_Currency_pseudo').append($('[name$="Currency_Code_new"]').find('option').clone()).val("")
    $('[name="ESTIMATED_RELO_COST_CRNCY_CD_pseudo"').append($('[name$="Currency_Code_new"]').find('option').clone()).val("")
    // $('[name="SalesTargetCurrency_pseudo"').append($('[name$="Currency_Code_new"]').find('option').clone()).val("")
    $('#RepNationality_pseudo').append($('[name$=".Country"]').find('option').clone()).val("")
    $('#Nationality_pseudo').append($('[name$=".Nationality"]').find('option').clone())

    // load form when all set
    $('#EditProfile_wrapper').fadeIn()

    // set default values
    if ($('select[name$="HIRE_ON_BONUS_CRNCY_CD_pseudo"] option[value="' + $('input[name$="HIRE_ON_BONUS_CRNCY_CD"]').val() + '"]').length > 0) {
        $('select[name$="HIRE_ON_BONUS_CRNCY_CD_pseudo"]').val($('input[name$="HIRE_ON_BONUS_CRNCY_CD"]').val())
    }
    // employee type toggle validation
    // pre-pop once
    var employee_category_val = EMPLOYEE_GROUP.substring(0,1)
    if ($('[name$="EMPLOYEE_GROUP_CD"]').val() == "") {
        $('[name$="EMPLOYEE_GROUP_CD"]').val(employee_category_val) 
    }
    setDefaultValue($('[name$="Relo_Bonus"]'), "No")
    setDefaultValue($('#RepNationality_pseudo'), $('[name$="RepNationality"]').val())
    setDefaultValue($('#Nationality_pseudo'), $('[name$="Nationality"]').val())
    setDefaultValue($('[name$="ProbationPeriodRequired"]'), "yes")
    setDefaultValue($('[name$="HIRE_ON_BONUS_CRNCY_CD_pseudo"]'), $('[name$="HIRE_ON_BONUS_CRNCY_CD"]').val())
    setDefaultValue($('[name$="Comp_Currency_pseudo"]'), $('[name$="Comp_Currency"]').val())
    setDefaultValue($('[name$="ESTIMATED_RELO_COST_CRNCY_CD_pseudo"]'), $('[name$="ESTIMATED_RELO_COST_CRNCY_CD"]').val())
    // setDefaultValue($('[name$="SalesTargetCurrency_pseudo"]'), $('[name$=".SalesTargetCurrency"]').val())
    setDefaultValue($('[name$="Manager"]'), "No")
    setDefaultValue($('[name$=".Relocation"]'), "N")
    setDefaultValue($('[name$="Variable_Bonus"]'), "No")
    setDefaultValue($('[name$="China_Entity_Name"]'), EnityName)
    setDefaultValue($('[name$="China_Entity_Address"]'), EntityAddress)
    setDefaultValue($('[name$="China_Event_Location"]'), EVENT_LOCATION)
    setDefaultValue($('[name$=".China_Nationality"]'), $('#Emp_Nationality').find(':selected').text())
    setDefaultValue($('[name$="China_Business_Card_Title"]'), Business_Title)
    setDefaultValue($('[name$="China_Job_Type"]'), JobType)
    setDefaultValue($('[name$="China_Current_Date"]'), today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear())
    setDefaultValue($('[name$="China_Start_Date"]'), eventDate.getDate() + " " + months[eventDate.getMonth()] + " " + eventDate.getFullYear())
    setDefaultValue($('[name$="China_Start_Date_Plus"]'), eventDatePlus.getDate() + " " + months[eventDatePlus.getMonth()] + " " + eventDatePlus.getFullYear())
    setDefaultValue($('[name$="China_Probation_End_Date"]'), probationEndDate.getDate() + " " + months[probationEndDate.getMonth()] + " " + probationEndDate.getFullYear())
    setDefaultValue($('[name$=".Eligible_Sales_Incentive"]'), "No")
    //2021-04-30 | SERVICES-36314
    if (EVENT_LOCATION === "JPN"){
        setDefaultValue($('[name$="EnityName"]'), "PayPal Pte. Ltd. Tokyo Branch")
    }

    //2021-05-24 | SERVICES-36314
    if (EVENT_LOCATION == "THA"){
        setDefaultValue($('[name$="EnityName"]'), "PayPal (Thailand) Limited")
    }
    //2021-05-24 | SERVICES-36314
    if (EVENT_LOCATION === "KOR"){
        setDefaultValue($('[name$="EnityName"]'), "PayPal Korea Services LLC")
    }

    if ($('[name$=".RelocationFrom"]').val().length > 0) {
        let relocationFromArr = $('[name$=".RelocationFrom"]').val().replace(/\s*,\s*/g, ",").split(',')
        $('#from-city-state').val(relocationFromArr[0])
        if (typeof relocationFromArr[1] !== 'undefined') {
            $('#from-state-country').val(relocationFromArr[1])
        }
    }
    if ($('[name$=".PayAreaCity"]').val().length > 0) {
        let relocationToArr = $('[name$=".PayAreaCity"]').val().replace(/\s*,\s*/g, ",").split(',')
        $('#to-city-state').val(relocationToArr[0])
        if (typeof relocationToArr[1] !== 'undefined') {
            $('#to-state-country').val(relocationToArr[1])
        }
    }
    if ($('[name$=".paymentAmount1"]').val().length > 0) {
        $('[name="good_payment_eligible"][value="Yes"]').prop('checked', true)
    }
    setDefaultValue($('[name="good_payment_eligible"]'), "No")
    if ($('[name$=".CSIncentivePlan"]').val().length > 0) {
        $('[name="PayPal_Ops_Incentive_Plan"][value="Yes"]').prop('checked', true)
    }
    setDefaultValue($('[name="PayPal_Ops_Incentive_Plan"]'), "No")

    // update fields with dependets
    updateTargetOnChange($('select[name$="Currency_Code_new"]'), $('input[name$="SALARY_CURRENCY"]'))
    updateTargetOnChange($('select[name$="HIRE_ON_BONUS_CRNCY_CD_pseudo"]'), $('input[name$="HIRE_ON_BONUS_CRNCY_CD"]'))
    updateTargetOnChange($('#Nationality_pseudo'), $('[name$="Nationality"]'))
    updateTargetOnChange($('[name$="ESTIMATED_RELO_COST_CRNCY_CD_pseudo"]'), $('[name$="ESTIMATED_RELO_COST_CRNCY_CD"]'))
    // updateTargetOnChange($('[name$="SalesTargetCurrency_pseudo"]'), $('[name$=".SalesTargetCurrency"]'))
    updateTargetOnChange($('[name$="Comp_Currency_pseudo"]'), $('[name$="Comp_Currency"]'))
    $('form').on('keyup change paste', '#from-city-state, #from-state-country', function() {
        $('[name$=".RelocationFrom"]').val($('#from-city-state').val() + ', ' + $('#from-state-country').val())
    })
    $('form').on('keyup change paste', '#to-city-state, #to-state-country', function() {
        $('[name$=".PayAreaCity"]').val($('#to-city-state').val() + ', ' + $('#to-state-country').val())
    })
    
    // focus style text and select fields
    $('form').on('focus', 'input[type="text"], select, textarea', function() {
        focusInputLabel($(this), true)
    }).on('blur', 'input[type="text"], select, textarea', function() {
        focusInputLabel($(this))
    })
    // focus style date fields
    $('form').on('focus change', 'input.hasDatepicker', function() {
        focusInputLabel($(this), true)
    }).on('blur change', 'input.hasDatepicker', function() {
        focusInputLabel($(this))
    })
    $('form').on('focus change', '.datepicker_button', function() {
        focusInputLabel($(this).closest('.cal_and_button').find('input[type="text"]'), true)
    }).on('blur change', '.datepicker_button', function() {
        focusInputLabel($(this).closest('.cal_and_button').find('input[type="text"]'))
        $(this).parent().find('.hasDatepicker').trigger('change') 
    })

    // date fields
    $('[name$="China_Current_Date"], [name$="China_Start_Date"], [name$="China_Start_Date_Plus"], [name$="China_Probation_End_Date"]').datepicker({
        dateFormat: 'd MM yy',
        changeMonth: true,
        changeYear: true,
        yearRange: "-100:+100"
    })

    // transfer fields to event country that has to use it
    // singapore
    if (EVENT_LOCATION === "SGP") {
        $('[name$=".Relocation"]').closest('.horizontal_radio_group').appendTo('#sgp-relocation')
        $('[name$=".Relo_Bonus"]').closest('.horizontal_radio_group').appendTo('#sgp-relocation-bonus')
        $('[name$="ESTIMATED_RELO_COST_CRNCY_CD_pseudo"]').appendTo('#sgp-currency-code')
        $('[name$=".ESTIMATED_RELO_COST"]').closest('.input_wrapper').children().appendTo('#sgp-relocation-cost')
        $('#sgp-relocation-cost').find('.floating-label').text('Monthly Amount')
        $('[name$=".RelocationFrom"]').appendTo('#sgp-relocation-from').find('input')
        $('[name$=".PayAreaCity"]').appendTo('#sgp-relocation-to').find('input')
        focusInputLabel($('[name$=".RelocationFrom"]'))
        focusInputLabel($('[name$=".PayAreaCity"]'))
    }

    // pass validation data to each fields
    $.each($('#EditProfile [data-fieldgroup-validation]'), function(k,v) {
        $(v).find('input, select, textarea').data('validation', $(v).data('fieldgroup-validation'))
    })
    // pass regex data to each fields
    $.each($('#EditProfile [data-fieldgroup-regex]'), function(k,v) {
        $(v).find('input').data('regex', $(v).data('fieldgroup-regex'))
    })
    // pass regex message to each fields
    $.each($('#EditProfile [data-fieldgroup-message]'), function(k,v) {
        $(v).find('input').data('message', $(v).data('fieldgroup-message'))
    })
    // pass validation data length to each fields
    $.each($('#EditProfile [data-fieldgroup-minlength]'), function(k,v) {
        $(v).find('input').data('minlength', $(v).data('fieldgroup-minlength'))
    })
    $.each($('#EditProfile [data-fieldgroup-maxlength]'), function(k,v) {
        $(v).find('input').data('maxlength', $(v).data('fieldgroup-maxlength'))
    })
    // pass target label to each radio or checkbox fields
    $.each($('#EditProfile [data-fieldgroup-targetlabel]'), function(k,v) {
        $(v).find('input[type="checkbox"], input[type="radio"]').data('label', $(v).data('fieldgroup-targetlabel'))
    })
    // pass title data to each fields
    $.each($('#EditProfile [data-fieldgroup-title]'), function(k,v) {
        $(v).find('input, select, textarea').data('title', $(v).data('fieldgroup-title'))
    })

    // focus field labels
    $.each($('#EditProfile input[type="text"], form select, textarea'),function(k,v) {
        focusInputLabel($(v))
    })

    // hide sections not needed in specific countries
    // singapore****
if (EVENT_LOCATION === "SGP") {
        $('[data-section-group="relocation"]')
        .hide()
        .each(function() {
            $(this).find('input[type="text"],select').val('')
        })
    }

    if (EVENT_LOCATION === "HKG" || EVENT_LOCATION === "THA" || EVENT_LOCATION === "JPN" ||EVENT_LOCATION === "KOR") {
        $('[data-section-group="relocation"]')
        .hide()
        .each(function() {
            $(this).find('input[type="text"],select').val('')
        })
    }
    
    // hide sections not on event location
    $.each($('[data-location-group]'), function(k,v) {
        let hideSection = false
        if($(v).data('location-group').indexOf(EVENT_LOCATION) < 0) {
            hideSection = true
        }
        if (hideSection) {
            $(v).hide().find('input[type="text"]').val("")
        }
    })
    // hide sections not on event location
    $.each($('[data-location-exclude]'), function(k,v) {
        let hideSection = false
        if($(v).data('location-exclude').indexOf(EVENT_LOCATION) >= 0) {
            hideSection = true
        }
        if (hideSection) {
            $(v).hide().find('input[type="text"], select').val('')
        }
    })

    if (!String.prototype.includes) {
        String.prototype.includes = function(search, start) {
            'use strict'

            if (search instanceof RegExp) {
                throw TypeError('first argument must not be a RegExp')
            }
            if (start === undefined) { start = 0 }
            return this.indexOf(search, start) !== -1
        }
    }

    $.each($('[data-location-group-2]'), function(k,v) {
        let hideSection = false
        if(!$(v).data('location-group-2').includes(EVENT_LOCATION)) {
            hideSection = true
        }
        if (hideSection) {
            $(v).hide().find('input[type="text"]').val("")
        }
    })
    // hide sections based on dependent value
    // hide based on location
    // thailand, south korya
    if (['THA','KOR'].indexOf(EVENT_LOCATION) >= 0) {
        $('#probation-section').hide()
    }
    // hire on bonus eligible
    $('form').on('change', '[name$="Hire_on_Bonus_Eligible"]', function() {
        // make installment 1 optional for india
        if (EVENT_LOCATION == 'IND') {
            $('[name$=".Installment_Amount"]').data('validation', 'regex-optional')
        }
        showByEventLocation('CHN', $('[name$=".Installment_Amount"]'), '.input_wrapper')
        showByEventLocation('IND', $('[name$=".Installment_Amount_1"], [name$=".Installment_Amount_2"], [name$=".Installment_Amount_3"]'), '.merge')
        if ($('[name$="Hire_on_Bonus_Eligible"]:checked').val() === 'Yes'){
            $('.bonus-section:not([data-section-group])').show().find('input,select').each(function() {
                focusInputLabel($(this))
            })
            return
        }
        $('.bonus-section:not([data-section-group]')
        .hide()
        .each(function() {
            $(this).find('input[type="text"],select').val('')
        })
        $('[name$=".HIRE_ON_BONUS_CRNCY_CD"]').val('')
        if (EVENT_LOCATION == 'IND') {
            $('[name$=".Installment_Amount_1"], [name$=".Installment_Amount_2"], [name$=".Installment_Amount_3"]').val('').closest('.merge').hide()
    focusInputLabel($('[name$=".Installment_Amount_1"],[name$=".Installment_Amount_2"],[name$=".Installment_Amount_3"]'))
        }
    })
    $('[name$="Hire_on_Bonus_Eligible"]').trigger('change')
    // variable bonus
    const toggleVariableBonus = function() {
        'use strict'
        const variableBonus = $('[name$="Variable_Bonus"]:checked').val()
        $('.variable-bonus-section').each(function() {
            if (variableBonus == 'Yes' && $(this).data('location-exclude').indexOf(EVENT_LOCATION) < 0){
                $(this).show()
                return
            }
            $(this).hide().each(function() {
                $(this).find('input[type="text"],select').each(function() {
                    focusInputLabel($(this).val(''))
                    validateField($(this), true)
                })
            })
            $('[name$=".Comp_Currency"]').val('')
        })
    }
    toggleVariableBonus()
    $('form').on('change', '[name$="Variable_Bonus"]', toggleVariableBonus)
    // relocation bonus
    $('[data-section-group="relocation"]').on('change', '[name$=".Relo_Bonus"]', function() {
        if (['HKG','JPN','THA','KOR','CHN','SGP'].indexOf(EVENT_LOCATION) < 0 && $('[name$="Relo_Bonus"]:checked').val() === 'Yes'){
            $('.relocation-bonus-section').show()
            return
        }
        $('.relocation-bonus-section')
        .hide()
        .each(function() {
            $(this).find('input[type="text"],select').val('')
        })
        $('[name$=".ESTIMATED_RELO_COST_CRNCY_CD"]').val('')
        validateField($('#EditProfile [name="ESTIMATED_RELO_COST_CRNCY_CD_pseudo"]').val(''), true)
        validateField($('#EditProfile [name$=".ESTIMATED_RELO_COST"]').val(''), true)
    })
    $('[data-section-group="relocation"] [name$=".Relo_Bonus"]').trigger('change')
    // relocation for all
    $('[data-section-group="relocation"]').on('change', '[name$=".Relocation"]', function() {
        if (['HKG','JPN','THA','KOR','CHN','SGP'].indexOf(EVENT_LOCATION) < 0 && $('[name$="Relocation"]:checked').val() === 'Y'){
            $('.relocation-bonus-section, .relocation-section').show()
            $('[name$="Relo_Bonus"]').trigger('change')
            return
        }
        $('.relocation-bonus-section, .relocation-section')
        .hide()
        .each(function() {
            $(this).find('input[type="text"],select').val('')
        })
        $('[name$=".RelocationFrom"], [name$=".PayAreaCity"]').val('')
    })
    $('[data-section-group="relocation"] [name$=".Relocation"]').trigger('change')

    // singapore contract end date should only display if employee group is intern
    /*
    if (!/^I+/.test($('#employee-group').val())) {
        $('[name$=".ContractEndDate"]').closest('.input_wrapper')
            .hide()
            .each(function() {
                $(this).find('input[type="text"],select').val('')
            })
    }
    */
    //hide show contract end date SGP
    if (EVENT_LOCATION == "SGP") {
        if ($('#employee-group-x').val().substring(0,1) != 'I') {
            $('[name$=".ContractEndDate"]').closest('.input_wrapper')
            .hide()
            .each(function() {
                $(this).find('input[type="text"],select').val('')
            })
        }
    }
    //hide show contract end date HKG
    if (EVENT_LOCATION == "HKG") {
        if (($('#employee-group-x').val().substring(0,1) != 'I') && ($('#employee-group-x').val().substring(0,1) != 'T')) {
            $('[name$=".ContractEndDate"]').closest('.input_wrapper')
            .hide()
            .each(function() {
                $(this).find('input[type="text"],select').val('')
            })
        }
    }

    //hide show contract end date != HKG AND != SGP
    if ((EVENT_LOCATION != "HKG") && (EVENT_LOCATION != "SGP")) {
        $('[name$=".ContractEndDate"]').closest('.input_wrapper')
            .hide()
            .each(function() {
                $(this).find('input[type="text"],select').val('')
            })
    }

    //hide show sip amount
    //hide show ramp up period
    if (SIP != 'SIP-Y' || ['AUS','HKG','JPN','THA','SGP'].indexOf(EVENT_LOCATION) < 0) {
        $('[name$=".SIP_Amount"], [name$=".Introductory_RampUp_Period_Eligible"]').val('').closest('.input_wrapper').hide()
    }
    //hide show building address HKG - THA - JPN - KOR
    if (EVENT_LOCATION == "HKG" || EVENT_LOCATION == "THA" || EVENT_LOCATION == "JPN" || EVENT_LOCATION == "KOR") {
        
            $('[name$=".BuildingAddress"]').closest('.input_wrapper')
            .hide()
            .each(function() {
                $(this).find('input[type="text"],select').val('')
            })
        
    }

    // singapore relocation
    $('#sgp-relocation').on('change', '[name$=".Relocation"]', function() {
        if ($('[name$=".Relocation"]:checked').val() === 'Y'){
            $('.sgp-relocation-section:not(.merge)').css('display', 'block')
            $('.sgp-relocation-section.merge').css('display', 'flex')
            $('.sgp-relocation-section [name$=".Relo_Bonus"]').trigger('change')
            toggleCashAllowance($('[name$=".Relo_Lump_Sum_Eligible"]:checked').val())
            return
        }
        $('.sgp-relocation-bonus-section, .sgp-relocation-section')
        .hide()
        .each(function() {
            $(this).find('input[type="text"],select').val('')
        })
        $('[name$=".Relo_Lump_Sum_Eligible"]').prop('checked', false)
        validateField($('[name$=".RelocationFrom"]').val(''), true)
        validateField($('[name$=".PayAreaCity"]').val(''), true)
        validateField($('[name$=".Relo_Lump_Sum_Eligible"]'), true)
        toggleCashAllowance($('[name$=".Relo_Lump_Sum_Eligible"]:checked').val())
    })
    $('#sgp-relocation [name$=".Relocation"]').trigger('change')
    $('[name$=".Relo_Lump_Sum_Eligible"]').on('change', function() {
        toggleCashAllowance($(this).val())
    })
    if (EVENT_LOCATION == "SGP") {
        toggleCashAllowance($('[name$=".Relo_Lump_Sum_Eligible"]:checked').val())
    }
    // singapore bonus
    $('form').on('change', '[name$="good_payment_eligible"]', function() {
        if ($('[name$="good_payment_eligible"][value="Yes"]').prop('checked') && EVENT_LOCATION === "SGP") {
            $('.sgp-good-payment').show()
            return
        }
        $('.sgp-good-payment')
        .hide()
        .each(function() {
            $(this).find('input[type="text"],select').val('')
        })
        validateField($('[name$=".paymentAmount1"]').val(''), true)
    })
    $('form [name$="good_payment_eligible"]').trigger('change')
    // singapore sales incentive plan
    // $('#EditProfile').on('change', '[data-location-group="AUS"] [name$=".Eligible_Sales_Incentive"]', function() {
    //     if($('[name$=".Eligible_Sales_Incentive"]:checked').val() === 'Yes' && EVENT_LOCATION === "AUS") {
    //         let salesIncentiveSection = $('[data-location-group="AUS"].sales-incentive-section').show()
    //         $.each(salesIncentiveSection.find('input,select'), function(k, v) {
    //             validateField($(v), true)
    //         })
    //         return
    //     }
    //     let salesIncentiveSection = $('[data-location-group="AUS"].sales-incentive-section').hide()
    //     $.each(salesIncentiveSection.find('input,select'), function(k, v) {
    //         $(v).val('')
    //         focusInputLabel($(v))
    //         validateField($(v), true)
    //     })
    //     $('[name$=".SalesTargetCurrency"]').val('')
    // })
    $('form [name$=".Eligible_Sales_Incentive"]').trigger('change')
    // singapore relocation bonus
    $('#sgp-relocation-bonus').on('change', '[name$=".Relo_Bonus"]', function() {
        if($('[name$=".Relo_Bonus"]:checked').val() === 'Yes') {
            $('.sgp-relocation-bonus-section:not(.merge)').css('display', 'block') //2020-10-30 | SERVICES-36314 | CDY | SHOW SECTION WHEN YES CHECKED
            $('.sgp-relocation-bonus-section.merge').css('display', 'flex')//2020-10-30 | SERVICES-36314 | CDY | SHOW SECTION WHEN YES CHECKED
            $('[name="ESTIMATED_RELO_COST_CRNCY_CD_pseudo"]').data('validation', 'required')
            $('[name$=".ESTIMATED_RELO_COST"]').data('validation', 'required,regex')
            return
        }
        $('.sgp-relocation-bonus-section')
            .hide()//2020-10-30 | SERVICES-36314 | CDY | HIDE SECTION WHEN NOT/NO CHECKED
            .each(function() {
                $(this).find('input[type="text"],select').val('')
            })
        validateField($('[name$="ESTIMATED_RELO_COST_CRNCY_CD_pseudo"]').val(''), true)//2020-10-30 | SERVICES-36314 | CDY | CLEAR VALUE WHEN NOT/NO CHECKED
        validateField($('[name$=".ESTIMATED_RELO_COST"]').val(''), true)//2020-10-30 | SERVICES-36314 | CDY | CLEAR VALUE WHEN NOT/NO CHECKED
        validateField($('[name="ESTIMATED_RELO_COST_CRNCY_CD_pseudo"]').data('validation', null), true)
        validateField($('[name$=".ESTIMATED_RELO_COST"]').data('validation', 'regex'), true)
    })
    $('#sgp-relocation-bonus [name$=".Relo_Bonus"]').trigger('change')
    // probations required
    $('form').on('change', '[name$="ProbationPeriodRequired"]', function() {
        if ($('[name$="ProbationPeriodRequired"]:checked').val() === 'yes' && (EVENT_LOCATION != "HKG") && EVENT_LOCATION != "JPN"){
            $('#probation-timeframe').show()
        }
        else {
            $('[name$="ProbationPeriodTime"]').val("")
            $('#probation-timeframe')
            .hide()
            .each(function() {
                $(this).find('input[type="text"],select').val('')
            })
        }
    })
    $('[name$="ProbationPeriodRequired"]').trigger('change')
    // update china probation end date on change
    $('form').on('change', '[name$="ProbationPeriodTime"]', function() {
        $('[name$="China_Probation_End_Date"]').val("")
        probationPeriodTime = parseInt($('[name$="ProbationPeriodTime"]').val()) ? parseInt($('[name$="ProbationPeriodTime"]').val()) : 0
        probationEndDate = new Date(EVENT_START)
        probationEndDate.setMinutes(probationEndDate.getMinutes() + probationEndDate.getTimezoneOffset())
        probationEndDate.setMonth(eventDate.getMonth() + probationPeriodTime)
        setDefaultValue($('[name$="China_Probation_End_Date"]'), probationEndDate.getDate() + " " + months[probationEndDate.getMonth()] + " " + probationEndDate.getFullYear())
    })
    $('[name$="ProbationPeriodTime"]').trigger('change')

    // china citizenship section
    $('#EditProfile').on('change', '[name$=".Citizenship_Status"]', function() {
        if (EVENT_LOCATION != "CHN") {
            return
        }
        if ($('#EditProfile input[name$=".Citizenship_Status"]:checked').val() === "Yes") {
            $('.chn-citizen').show()
            $('.non-chn-citizen')
            .hide()
            .each(function() {
                $(this).find('input[type="text"],select').val('')
            })
            return
        }
        $('.chn-citizen')
        .hide()
        .each(function() {
            $(this).find('input[type="text"],select').val('')
        })
        $('.non-chn-citizen').show()
        $.each($('.chn-citizen input, .chn-citizen select'), function(k, v) {
            validateField($(v), true)
        })
    })
    $('#EditProfile input[name$=".Citizenship_Status"]').trigger('change')
    // china bonuses section
    // move bonuses to china bonuses section
    if (EVENT_LOCATION === "CHN") {
        let chinaOptions = $('.china-options')
        chinaOptions.removeClass('mb-30')
        chinaOptions.prependTo('#china-bonuses-section')
        $('#EditProfile [name$=".Installment_Amount"]')
        .data('validation', 'required,regex')
        .prev()
        .text("Installment Amount")
        $('[data-fieldgroup-targetlabel="#Hire_on_Bonus_Eligible_label"]').show()
    }

    $('#EditProfile').on('change', '[name="PayPal_Ops_Incentive_Plan"]', function() {
        if ($('[name="PayPal_Ops_Incentive_Plan"][value="Yes"]').prop('checked') && EVENT_LOCATION === "CHN") {
            $('#yearly-target-percentage').show()
            return
        }
        $('#yearly-target-percentage')
        .hide()
        .each(function() {
            $(this).find('input[type="text"],select').val('')
        })
        validateField($('[name$=".CSIncentivePlan"]').val(''), true)
    })
    $('#EditProfile [name="PayPal_Ops_Incentive_Plan"]').trigger('change')

    // validate each field
    $('form').on('blur click', 'input[type="text"]:not(":hidden"), select:not(":hidden"), textarea', function() {
        if(!validateField($(this))) {
            $(this).parent().find('.text-error').css({'display': 'inline-block', 'margin-bottom': '-2px'}) // style hack since IE is such a reliable browser -) // changed block to inline-block
        }
    })

    // validate each date fields and radio
    $('form').on('change', 'input[name$="_display"]:visible, input[type="radio"]:visible, input.hasDatepicker', function() {
        validateField($(this)) 
    })

    // submit the form if no errors
    $('form').on('click', '#TaskSummary_ButtonSave', function(e) {
        e.preventDefault()
        let formIsValid = true
        $.each($('form input:not(".datepicker_button"):visible, form select:visible, textarea:visible'), function(k,v) {
            if(!validateField($(v))) {
                formIsValid = false
            }
        })
        if (formIsValid) {
            doSave_Custom('refer-Complete')
        }
        else {
            $("html, body").animate({ scrollTop: 0 }, "slow")
        }
    })
    if (!!sTaskComplete) {
        $('input, textarea, select', '.input_wrapper').prop('disabled', 'disabled')
    }

})
