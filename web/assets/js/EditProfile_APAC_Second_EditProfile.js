/**
 * Script for Complete Employee Profile
 * 2021-04-15 | SERVICES-35275 | this is created to cleanup previous code and make it more simple and readable
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
  $('#date-format').text(dateConfig.regions[dateConfig.countries[LOCATION]].replace('yy', 'yyyy'));

  // update state when country is updated
  $('[name$=".EC_Country"]').on('change', function(e) {
    validateField($('[name$=".EC_State"]'), true)
  })

  // DOB datepicker
  $('#DOB_pseudo').datepicker({
      dateFormat: 'dd/mm/yy',
      changeMonth: true,
      changeYear: true,
      yearRange: "-100:+100",
      onSelect: function(dateText, instance) {
          validateField($(this)); 
          focusInputLabel($(this));
          if ($(this).val()) {
            $('[name$="DOB_display"]').datepicker('setDate', $(this).val())
          }
      }
    })
    .datepicker('setDate', $('[name$="DOB_display"]').datepicker('getDate'))

  // apply fields attributes required|readonly|disabled etc.
  $.when(fieldsPromise).done(function() {
    fields_config.forEach(function(fieldConf) {
      const field = EDIT_PROFILE_FORM.find('[name$="' + fieldConf.name + '"]')
      if (field.length) {
        field.data({
          'validation': fieldConf.validation,
          'title': fieldConf.title
        })
        if (fieldConf.label) {
          field.data('label', fieldConf.label)
        }
        // readonly fields are not conventional html fields setup
        // so flag is needed so this can be overriden when needed
        let READONLY = false
        if (fieldConf.readonly) {
          READONLY = true
        }
        if (fieldConf.regex) {
          field.data('regex', fieldConf.regex)
        }
        if (fieldConf.message) {
          field.data('message', fieldConf.message)
        }
        // override fields attributes by country
        if (fieldConf.validateByCountry && fieldConf.validateByCountry[LOCATION]) {
          const fieldValidatedByCountry = fieldConf.validateByCountry[LOCATION]
          field.data(fieldValidatedByCountry)
          if (fieldValidatedByCountry.readonly != undefined) {
            READONLY = fieldValidatedByCountry.readonly
          }
        }
        if (!!READONLY) {
          field.parent().append(cover.clone())
        }
      }
    })
  })

  // National_ID_IssuedBy set default value by defined country
  const COUNTRIES_TO_DEFAULT_NAT_ID = ['HKG', 'JPN', 'KOR']
  $('[name$=".National_ID_IssuedBy"] option').each(function() {
    if (COUNTRIES_TO_DEFAULT_NAT_ID.indexOf(LOCATION) >= 0 && $(this).val() == LOCATION) {
      $('[name$=".National_ID_IssuedBy"]').val(LOCATION).trigger('change')
    }
  })

  // National_ID_Type set default value by defined country
  const COUNTRIES_TO_DEFAULT_NAT_ID_TYPE = [
    {'HKG': 'HKG-ID'},
    {'JPN': 'JPN-SSN'},
    {'KOR': 'KOR-RRN'}
  ]
  COUNTRIES_TO_DEFAULT_NAT_ID_TYPE.forEach(function(v) {
    if (v[LOCATION]) {
      $('[name$=".National_ID_Type"]').val(v[LOCATION])
    }
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
  EDIT_PROFILE_FORM.on('focus change', 'input.hasDatepicker', function() {
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
  $('input[type="text"]', EDIT_PROFILE_FORM).on('keyup blur', function() {
    validateField($(this))
  })
  // validate each date fields
  $('input[name$="_display"]:not(":hidden"), input.hasDatepicker:not(:hidden)', EDIT_PROFILE_FORM).on('change blur paste', function() {
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
      })
      if (!formIsValid) {
          $("html, body").animate({ scrollTop: 0 }, "slow")
          return
      }
      doSave_Custom('refer-Complete')
  })

})
