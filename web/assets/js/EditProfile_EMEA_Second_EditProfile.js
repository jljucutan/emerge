/**
 * Script for Complete Employee Profile
 * 2021-04-14 | SERVICES-35658 | this is created to cleanup previous code and make it more simple and readable
 * 2021-07-07 | SERVICES-35658 | add new dynamic validation with dependency field
 */
let fields_config = ''
let fieldsPromise = $.getJSON(FIELDS_CONFIG, function(data) {
  fields_config = data.fields
})
// pseudo disabling element in lieu of disable property
const cover = $('<div class="cover"/>')

const focusInputLabel = function(el, isFocused) {
    "use strict"
    try {
        let label = el.closest('.input_wrapper')
            .find('span.floating-label')
            .removeClass('label-focus')
            .css({"color": "#666666"})
        if (el[0].value.trim().length > 0 || isFocused) {
            label.addClass('label-focus')
        }
        if (isFocused === true) {
            label.css({"color": "#0070BA"})
        }
    }
    catch(err) {
        console.error(el)
        console.error(err)
    }
}
const fieldHasVal = function(el) {
    "use strict"
    let hasVal = false
    $.each(el, function(k, v) {
        if ($(v).val().length) {
            hasVal = true
        }
    })
    return hasVal
}
const isCheckboxChecked = function(el) {
    "use strict"
    let hasChecked = false
    $.each(el, function(k,v){
        if ($(v).is(':checked')) {
            hasChecked = true
        }
    })
    return hasChecked
}
const setDefaultValue = function(el, defaultValue) {
    "use strict"
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

const validateMinYears = function(date, minYears) {
  "use strict"
  let message = ''
  let isValid = true
  if (moment().diff(date, 'years') < minYears) {
    isValid = false
    message = 'The date of birth is required and must indicate and age of ' + minYears + ' years or older.'
  }
  return {
    'isValid': isValid,
    'message': message
  }
}

// update dynamic field validation config
const updateDependentValidation = function(fieldObj, config) {
  'use strict'
  configureFieldValidation(fieldObj, config.get(fieldObj.prop('name')))
  validateField(fieldObj)
}

const configureFieldValidation = function(field, fieldConf) {
  'use strict'
  if (field.length && fieldConf) {
    let readonly = false
    if (fieldConf.validation) {
      field.data('validation', fieldConf.validation)
    }
    if (fieldConf.title) {
      field.data('title', fieldConf.title)
    }
    if (fieldConf.regex) {
      field.data('regex', fieldConf.regex)
    }
    if (fieldConf.message) {
      field.data('message', fieldConf.message)
    }
    if (fieldConf.validation) {
      field.data('validation', fieldConf.validation)
    }
    if (fieldConf.fixedValue) {
      field.val(fieldConf.fixedValue)
    }
    if (fieldConf.label) {
      field.data('label', fieldConf.label)
    }
    if (fieldConf.defaultValue) {
      if (
        // if has no option set of value was from other country
        field.val().length < 1 || (/^[A-Z]{3}-/.test(field.val()) && field.val().indexOf(LOCATION) < 0)
        ) {
        field.val(fieldConf.defaultValue)
      }
    }
    if (fieldConf.readonly) {
      readonly = true
    }
    if (fieldConf.validateByCountry && fieldConf.validateByCountry[LOCATION] && fieldConf.validateByCountry[LOCATION].readonly != undefined) {
      readonly = fieldConf.validateByCountry[LOCATION].readonly
    }
    if (!!readonly) {
      field.parent().append(cover.clone())
    }
    else {
      field.parent().find('.cover').remove()
    }
   if (fieldConf.validateByCountry && fieldConf.validateByCountry[LOCATION]) {
      configureFieldValidation(field, fieldConf.validateByCountry[LOCATION])
    }
    if (fieldConf.eventBasedValidation) {
      const eventBasedValidation = {}

      if (fieldConf.eventBasedValidation.requiredBy) {
        if (!eventBasedValidation.requiredBy) {
          eventBasedValidation['requiredBy'] = fieldConf.eventBasedValidation.requiredBy
        }
        if ($('[name$=".' + fieldConf.eventBasedValidation.requiredBy + '"]').val().length) {
          field.data('validation', 'required')
        }
        else {
          field.data('validation', null)
        }
      }
        
      if (fieldConf.eventBasedValidation.validateByValueOf) {
        if (!eventBasedValidation.requiredBy) {
          eventBasedValidation['validateByValueOf'] = fieldConf.eventBasedValidation.validateByValueOf
        }
        fieldConf.eventBasedValidation.validateByValueOf.forEach(function(configByValue) {
          const valueValidation = configByValue.values[document.querySelector('[name$=".' + configByValue.field + '"]').value]
          if (!!valueValidation) {
            configureFieldValidation(field, valueValidation)
          }
          else {
            configureFieldValidation(field, configByValue.fallback)
          }
        })
      }
      
      if (fieldConf.eventBasedValidation.requiredByEitherOf) {
        if (!eventBasedValidation.requiredByEitherOf) {
          eventBasedValidation['requiredByEitherOf'] = fieldConf.eventBasedValidation.requiredByEitherOf
        }
        let isRequired = false
        fieldConf.eventBasedValidation.requiredByEitherOf.forEach(function(name) {
          if ($('[name$=".' + name + '"]').val().length) {
            isRequired = true
          }
        })
        if (isRequired) {
          if (!field.data('validation')) {
            field.data('validation', '')
          }
          const fieldValidations = field.data('validation').split(',')
          if (!fieldValidations.includes('required')) {
            fieldValidations.push('required')
          }
          field.data('validation', fieldValidations.join(','))
        }
        else {
          if (!field.data('validation')) {
            field.data('validation', '')
          }
          const fieldValidations = field.data('validation').split(',')
          let index = fieldValidations.indexOf('required')
          if (index >= 0) {
            fieldValidations.splice(index, 1)
          }
          field.data('validation', fieldValidations.join(','))
        }
      }

      if (!JS_EVENTS_CONF.get(field.prop('name'))) {
        JS_EVENTS_CONF.set(field.prop('name'), {
          eventBasedValidation: eventBasedValidation
        })
      }
    }
  }
}

$(window).on('load', function() {
  $('.floating-label span').css('color', 'rgb(102, 102, 102)')
  $('.cal_and_button').prop('cellpadding', 0).prop('cellspacing', 0)
  // replace default submit button with paypal styled
  $('#TaskSummary_ButtonCancel').detach().appendTo('#cancel').show()
  if (!sTaskComplete) {
    $('#TaskSummary_ButtonSave').prop('onclick', null).unbind('click').detach().appendTo('#saveandcomplete').show().text('Continue')
    $('#EUPDefaultSaveButton').prop('onclick', null).unbind('click').detach().appendTo('#save').show()
  }

  // event country
  document.getElementById('Evt_Location_Code').value = LOCATION
  // display format on label
  $('#date-format').text(dateConfig.regions[dateConfig.countries[LOCATION]].replace('yy', 'yyyy'))

  // display only marital status for current country
  $('[name$=".MaritalStatus"] option').each(function() {
    if (this.value.indexOf(LOCATION) == 0 || this.value == '') {
      return
    }
    $(this).remove()
  })

  // DOB datepicker
  $('#DOB_pseudo').datepicker({
      dateFormat: 'dd/mm/yy',
      changeMonth: true,
      changeYear: true,
      yearRange: "-100:+100",
      onSelect: function(dateText, instance) {
          focusInputLabel($(this))
          const dobField = $(this)
          if (dobField.val()) {
            $('[name$="DOB_display"]').datepicker('setDate', dobField.datepicker('getDate'))
            $('[name$="DOB"]').val(moment(dobField.datepicker('getDate')).format('YYYY-MM-DD'))
            validateField($('#DOB_pseudo'), false, function() {
              return  validateMinYears(dobField.datepicker('getDate'), 16)
            })
            return
          }
          validateField(dobField)
      }
    })
    .datepicker('setDate', $('[name$="DOB_display"]').datepicker('getDate'))
  $('#DOB_pseudo').on('blur', function() {
    const dobField = $(this)
    if (dobField.val()) {
      validateField($('#DOB_pseudo'), false, function() {
        return  validateMinYears(dobField.datepicker('getDate'), 16)
      })
      return
    }
    validateField(dobField)
  })

  const updateIDTypeByCountry = function(country, idType, afterAll) {
    "use strict"
    // reset states
    idType.html(NATIONAL_ID_TYPES)
    // filter states
    $('option', idType).each(function() {
      if (this.value.indexOf(country) == 0 || this.value == '') {
        return
      }
      $(this).remove()
    })
    if (!!afterAll) {
      afterAll()
    }
  }
  $('[name$=".National_ID_IssuedBy"]').on('change', function() {
    updateIDTypeByCountry(this.value, $('[name$=".National_ID_Type"]'), function() {
      focusInputLabel($('[name$=".National_ID_Type"]'))
    })
    updateIDTypeByCountry(this.value, $('[name$=".National_ID_Type2"]'), function() {
      focusInputLabel($('[name$=".National_ID_Type2"]'))
    })
    updateDependentValidation($('[name$=".National_ID_Type"]'), JS_EVENTS_CONF)
    validateField($('[name$=".National_ID_Type"]'), true)
    focusInputLabel($('[name$=".National_ID_Type"]'))
    updateDependentValidation($('[name$=".SSNO"]'), JS_EVENTS_CONF)
    validateField($('[name$=".SSNO"]'), true)
    focusInputLabel($('[name$=".SSNO"]'))
  })
  $('[name$=".National_ID_Type"]').on('change', function() {
    updateDependentValidation($('[name$=".SSNO"]'), JS_EVENTS_CONF)
  })
  $('[name$=".National_ID_Type2"]').on('change', function() {
    updateDependentValidation($('[name$=".National_ID2"]'), JS_EVENTS_CONF)
  })
  $('[name$=".EC_Primary_Country_Code"]').on('change', function() {
    updateDependentValidation($('[name$=".EC_Primary_Phone_Number"]'), JS_EVENTS_CONF)
  })
  $('[name$=".EC_Mobile_Country_Code"]').on('change', function() {
    updateDependentValidation($('[name$=".EC_Mobile_Phone_Number"]'), JS_EVENTS_CONF)
    if (!$('[name$=".EC_Mobile_Phone_Number"]').val().length) {
      validateField($('[name$=".EC_Mobile_Phone_Number"]'), true)
    }
  })
  $('[name$=".EC_Secondary_phone_type"]').on('change', function() {
    updateDependentValidation($('[name$=".EC_Mobile_Phone_Number"]'), JS_EVENTS_CONF)
    if (!$('[name$=".EC_Mobile_Phone_Number"]').val().length) {
      validateField($('[name$=".EC_Mobile_Phone_Number"]'), true)
    }
  })
  $('[name$=".EC_Mobile_Phone_Number"]').on('keyup paste blur', function() {
    $('[name$=".EC_Mobile_Country_Code"], [name$=".EC_Secondary_phone_type"]').each(function(k,v) {
      updateDependentValidation($(v), JS_EVENTS_CONF)
      if (!$(v).val().length) {
        validateField($(v), true)
      }
    })
  })

  const updateStateByCountry = function(country) {
    "use strict"
    const ecStateField = $('[name$=".EC_State"]')
    let oldState = ecStateField.val()
    // reset states
    ecStateField.html(EC_STATES)
    // filter states
    $('option', ecStateField).each(function() {
      if (this.value.indexOf(country) == 0 || this.value == '') {
        return
      }
      if (this.value == 'NA') {
        this.value = ''
      }
      $(this).remove()
    })
    // add back the old option selected
    if ($('option[value="' + oldState + '"]', '[name$=".EC_State"]')) {
      ecStateField.val(oldState)
    } 
    if ($('[name$=".EC_State"]').val() == null) {
      ecStateField.val('')
    }
  }
  $('[name$=".EC_Country"]').on('change', function() {
    updateStateByCountry(this.value)
    updateDependentValidation($('[name$=".EC_State"]'), JS_EVENTS_CONF)
    focusInputLabel($('[name$=".EC_State"]'))
  })

  // apply fields attributes required|readonly|disabled etc.
  $.when(fieldsPromise).done(function() {
    fields_config.forEach(function(fieldConf) {
      configureFieldValidation(EDIT_PROFILE_FORM.find('[name$="' + fieldConf.name + '"]'), fieldConf)
    })
  })
  .fail(function(err) {
    console.warn(err)
  })
  .always(function() {
    const oldNationalIDTypeVal = $('[name$=".National_ID_Type"]').val()
    updateIDTypeByCountry($('[name$=".National_ID_IssuedBy"]').val(), $('[name$=".National_ID_Type"]'), function() {
      if ($('[name$=".National_ID_Type"]').find('option[value="' + oldNationalIDTypeVal + '"]').length) {
        $('[name$=".National_ID_Type"]').val(oldNationalIDTypeVal)
        return
      }
      $('[name$=".National_ID_Type"]').val('')
    })
    const oldNationalIDType2Val = $('[name$=".National_ID_Type2"]').val()
    updateIDTypeByCountry($('[name$=".National_ID_IssuedBy"]').val(), $('[name$=".National_ID_Type2"]'), function() {
      if (oldNationalIDType2Val.indexOf(LOCATION) >= 0) {
        $('[name$=".National_ID_Type2"]').val(oldNationalIDType2Val)
        return
      }
      $('[name$=".National_ID_Type2"]').val('')
    })
    updateStateByCountry($('[name$=".EC_Country"]').val())
    updateDependentValidation($('[name$=".National_ID2"]'), JS_EVENTS_CONF)
  })

  // hide fields by country
  $.each($('[data-hidefor]'), function(k, v) {
    if ($(v).data('hidefor').indexOf(LOCATION) >= 0) {
      $(v).hide()
    }
  })
  // show fields by country
  $.each($('[data-showfor]'), function(k, v) {
    if ($(v).data('showfor').indexOf(LOCATION) < 0) {
      $(v).hide()
    }
  })

  // focus style text and select fields
  EDIT_PROFILE_FORM.on('focus', 'input[type="text"]:visible, select:visible, textarea:visible', function() {
    focusInputLabel($(this), true)
  }).on('blur', 'input[type="text"], select, textarea', function() {
     focusInputLabel($(this))
  })
  // focus style date fields
  EDIT_PROFILE_FORM.on('focus change', 'input.hasDatepicker:not(#DOB_pseudo)', function() {
     focusInputLabel($(this), true)
  }).on('blur change', 'input.hasDatepicker', function() {
    focusInputLabel($(this))
  })
  EDIT_PROFILE_FORM.on('focus change', '.datepicker_button', function() {
    focusInputLabel($(this).closest('.cal_and_button').find('input[type="text"]'), true)
  }).on('blur change', '.datepicker_button', function() {
    focusInputLabel($(this).closest('.cal_and_button').find('input[type="text"]'))
    $(this).parent().find('.hasDatepicker').trigger('change') 
  })

  // validate input fields
  $('input[type="text"]:not(.hasDatepicker)', EDIT_PROFILE_FORM).on('keyup blur', function() {
    validateField($(this))
  })
  // validate each date fields
  $('input[name$="_display"]:not(":hidden"), input.hasDatepicker:not(:hidden):not(#DOB_pseudo)', EDIT_PROFILE_FORM).on('change blur paste', function() {
    validateField($(this))
  })
  // validate radio and checkboxes
  $('input[type="radio"], input[type="checkbox"], select', EDIT_PROFILE_FORM).on('change focus', function() {
    validateField($(this))
  })

  // load form when all set
  $('#EditProfile_wrapper').fadeIn('fast', function() {
    // focus field labels
    $('input[type="text"]:visible, textarea:visible, select:visible', EDIT_PROFILE_FORM).each(function() {
      focusInputLabel($(this))
    })
    // disable all fields when completed
    if (sTaskComplete.length > 0) {
      $('input, select', '.input_wrapper').each(function() {
        $(this).prop('disabled', 'disabled')
      })
    }
  })

  // save and complete later
  EDIT_PROFILE_FORM.on('click', '#EUPDefaultSaveButton', function(e) {
      e.preventDefault()
      DisableValidation()
      doSave_Custom('refer-Save')
  })

  // submit the form if no errors
  EDIT_PROFILE_FORM.on('click', '#TaskSummary_ButtonSave', function(e) {
      e.preventDefault()
      let formIsValid = true
      $.each($('input, select, textarea', EDIT_PROFILE_FORM), function(k,v) {
        // all other fields
        if($(v).is(':visible') && !validateField($(v))) {
          formIsValid = false
        }
        // date field has value validate if date if valid too
        if ($(v).prop('name') == 'DOB_pseudo' && $(v).val().length) {
          let dobValid = validateField($('#DOB_pseudo'), false, function() {
            return  validateMinYears($(v).datepicker('getDate'), 16)
          })
          if (!dobValid) {
            formIsValid = false
          }
        }
      })
      if (!formIsValid) {
          $("html, body").animate({ scrollTop: 0 }, "slow")
          return
      }
      doSave_Custom('refer-Complete')
  })

})
