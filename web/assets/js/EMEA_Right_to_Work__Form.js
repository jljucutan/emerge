/**
 * 2021-09-23 | jjucutan | SERVICES-43624 00865997 : HIGH - EMEA - Right to work form
 */
const EVENT_LOCATION = $('#EventLocation').prop('readonly') ? $('#EventLocation').val() :  $('#EventLocation').val(LOCATION).val()
const extract = function(name) {
  'use strict'
  const choices = $('[name$=".' + name + '"]')
  let checked = false
  let val = ''
  $.each(choices, function(k, v) {
    if ($(v).is(':checked')) {
      val = $(v).val()
      checked = true
    }
  })
  return {
    "isChecked": checked,
    "checkVal": val,
  }
}

// populate countries
const removeCountriesWithNoOption = function(allOptionsObj, countryOptionsObj) {
  let existingOptions = [];
  allOptionsObj.each(function(k,v) {
    if ($(v).val().length < 1) {
      return true;
    }
    const countryCode = $(v).val().substring(0, 3);
    if (existingOptions.indexOf(countryCode) < 0) {
      existingOptions.push(countryCode);
    }
  });
  $.each(countryOptionsObj, function(k,v) {
    if($(v).val().length > 0 && existingOptions.indexOf($(v).val()) < 0 ) {
      $(v).remove();
    }
  });
}

const process = function(displayLogic) {
  'use strict'
  let show = false
  // all in list should match
  if (displayLogic.and) {
    show = true
    // get all required radio or checkboxes
    $.each(displayLogic.and, function(kreqs, reqs) {
      // get each of required checkboxes or radio
      $.each(reqs, function(kreq, vreq) {
        // break if one of the checkboxes is not checked
        if (!extract(kreq).isChecked) {
          show = false
        }
        if (extract(kreq).isChecked && extract(kreq).checkVal != vreq) {
          show = false
        }
      })
    })
  }
  // any of the list value matches
  if (displayLogic.or) {
    show = false
    // get all required radio or checkboxes
    $.each(displayLogic.or, function(kreqs, reqs) {
      // get each of required checkboxes or radio
      $.each(reqs, function(kreq, vreq) {
        if (extract(kreq).isChecked && extract(kreq).checkVal == vreq) {
          show = true
        }
      })
    })
  }
  // not one in the list should match
  if (displayLogic.nand) {
    let shouldHide = true
    displayLogic.nand.forEach(function(fields) {
      $.each(fields, function(name, vals) {
        const field = document.querySelector('[name$=".' + name + '"]')
        if (field.type == 'radio') {
          document.querySelectorAll('[name$=".' + name + '"]').forEach(function(cbx) {
            if (cbx.checked && vals.indexOf(cbx.value) < 0) {
              shouldHide = false
            }
          })
        }
        if (field.type == 'text' && vals.indexOf(field.value) < 0) {
          shouldHide = false
        } 
      })
    })
    show = !shouldHide
  }
  // not any in the list should match
  if (displayLogic.nor) {
    let shouldHide = false
    displayLogic.nand.forEach(function(fields) {
      $.each(fields, function(name, vals) {
        const field = document.querySelector('[name$=".' + name + '"]')
        if (field.type == 'radio') {
          document.querySelectorAll('[name$=".' + name + '"]').forEach(function(cbx) {
            if (cbx.checked && vals.indexOf(cbx.value) >= 0) {
              shouldHide = true
            }
          })
        }
        if (field.type == 'text' && vals.indexOf(field.value) >= 0) {
          shouldHide = true
        } 
      })
    })
    show = !shouldHide
  }
  if (displayLogic.toggleByEventLocation && displayLogic.toggleByEventLocation[EVENT_LOCATION]) {
    show = process(displayLogic.toggleByEventLocation[EVENT_LOCATION])
  }
  return show
}

const toggleSections = function(config, cb) {
  'use strict'
  $.each(config, function(id, displayLogic) {
    const show = process(displayLogic)
    const section = $(id)
    if (show) {
      section.removeClass('hide')
      section.find('input[type="text"], select').each(function(v, f) {
        if ($(f).data('default') && ($(f).val() == null || !$(f).val().length)) {
          $(f).val($(f).data('default'))
        }
      })
      return
    } 
    section.addClass('hide')
    section.find('input[type="text"], select').val('')
    section.find('input[type="radio"]').prop('checked', false)
  })
  if (!!cb) {
    cb()
  }
}

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this)
    }
  }
}
const setConfigValues = function(field, config) {
  'use strict'
  if (config.readonly) {
    field.parent().append($('<div class="coverlay"/>'))
  }
  if (config.default) {
    field.data('default', config.default)
    if (config.readonly) {
      field.val(config.default)
    }
    if (field.val() == null || !field.val().length) {
      field.val(config.default)
    }
  }
}
const setConfigValidations = function(field, config) {
  'use strict'
  if (config.validation) {
    field.data('validation', config.validation)
    if (config.validation.indexOf('required') < 0) {
      $('.' + config.labelClass).hide();
    }
  }
  if (config.regex) {
    field.data('regex', config.regex)
  }
  if (config.title) {
    field.data('title', config.title)
  }
  if (config.message) {
    field.data('message', config.message)
  }
  if (config.label) {
    field.data('label', config.label)
  }
}
const updateVisaPermit = function(target, country) {
  'use strict'
  let selectedVal = target.val()
  target.html($('<option value=""/>'))
  if (country == '') {
    return
  }
  WORK_PERMIT_MAP.forEach(function(v, k) {
    if (k.indexOf(country) == 0) {
      const option = $('<option/>').val(k).text(v)
      if (k == selectedVal) {
        option.prop('selected', 'selected')
      }
      target.append(option)
    }
  })
}
$(document).on('ready', function() {
  $("#buttonCancel").removeClass().addClass("lifesuite__button").prop('id','ButtonCancel')
  $("#buttonSave").removeClass().addClass("lifesuite__button primary").prop('id','ButtonSave')
  $("#buttonSaveAndComplete").removeClass().addClass("lifesuite__button primary").prop('id','ButtonSaveAndComplete').removeAttr('onclick')
  $("#buttonPrint").removeClass().addClass("lifesuite__button primary").prop('id','ButtonPrint').removeAttr('onclick')
  $("#buttonPreviewDelete").removeClass().addClass("lifesuite__button").prop('id','ButtonPreviewDelete')
  $("#buttonPreviewSave").removeClass().addClass("lifesuite__button primary").prop('id','ButtonPreviewSave')
  $("#buttonComplete").removeClass().addClass("lifesuite__button primary").prop('id','ButtonComplete')
  $('#formButtons').show()
  $("input[type=text]").addClass('lifesuite__text-input')
  $("input[type=text].hasDatepicker").addClass('dateField')
  $("select").addClass('lifesuite__select-input')
  $("input[type=radio]").addClass('lifesuite__radio')
  $("input[type=checkbox]").addClass('lifesuite__checkbox')
  $("textarea").addClass('lifesuite__textarea-input')
  $('label').addClass('lifesuite__input-label lifesuite__input—block')
  // default values onload
  $('#nid_number_label').val("Identification Number:")

  const loadCountries = $.getJSON(COUNTRIES_PATH, function(data) {
    $('.event-country').html(data.countries[EVENT_LOCATION])
    $('[name$=".country_mapping"]').val(data.countries[EVENT_LOCATION] + '?')
    $('[name$=".country_mapping_2"]').val(data.countries[EVENT_LOCATION] + ', prior to commencing employment.')
  })
  const loadSections = $.get(SECTION_CONFIG_PATH).then(function(sectionConfig) {
    SECTION_CONFIG["sections"] = JSON.parse(sectionConfig).sections
  })
  const loadFields = $.getJSON(FIELDS_CONFIG_PATH, function(cfg) {
    FIELDS_CONFIG['fields'] = cfg.config.fields
    cfg.config.fields.forEach(function(cfg) {
      const field = $('[name$=".' + cfg.field + '"]')
      setConfigValidations(field, cfg)
      if (cfg.validateByCountry && cfg.validateByCountry[EVENT_LOCATION]) {
        const validateByCountry = cfg.validateByCountry[EVENT_LOCATION]
        setConfigValues(field, validateByCountry)
        if (cfg.labelClass) {
          validateByCountry['labelClass'] = cfg.labelClass
        }
        setConfigValidations(field, validateByCountry)
      }
      if (cfg.validateByIDType && cfg.validateByIDType[$('[name$=".nid_type"]').val()]) {
        const idTypeValidations = cfg.validateByIDType[$('[name$=".nid_type"]').val()]
        if (idTypeValidations.readonly) {
          field.prop('readonly', 'readonly')
        }
        if (idTypeValidations.validation) {
          field.data('validation', idTypeValidations.validation)
          if (idTypeValidations.validation.indexOf('required') >= 0) {
            $('.' + cfg.labelClass).show()
          } else {
            $('.' + cfg.labelClass).hide()
          }
        }
      }
    })
  })

  $.when(loadCountries, loadSections, loadFields).then(function(c, s, f) {
    toggleSections(SECTION_CONFIG.sections)
  })
  .fail(function(err) {
    console.warn(err)
  })
  .always(function() {
    $(".modal").hide()
  })

  // capture all work permit
  $('[name$=".work_permit"] option').each(function() {
    WORK_PERMIT_MAP.set(this.value, this.innerHTML)
  })
  const visaCountry = $('[name$=".visa_country"]')
  // set allowed countries for visa
  $('option', visaCountry).each(function() {
    if (this.value == '' || ALLOWED_VISA_COUNTRIES.indexOf(this.value) >= 0) {
      return
    }
    $(this).remove()
  })
  visaCountry.on('change', function() {
    updateVisaPermit($('[name$=".work_permit"]'), this.value)
  })
  updateVisaPermit($('[name$=".work_permit"]'), visaCountry.val())

  $('select, input[type="radio"]', thisForm).on('blur click', function() {
    toggleSections(SECTION_CONFIG.sections)
    validateField($(this))
  })
  $('input[type="text"]', thisForm).on('blur keyup paste', function() {
    validateField($(this))
  })

  if (!$("#sv").prop('readonly')) {
    $('.date-field')
      .formatDatePicker(dateConfig, LOCATION)
      .datepicker('option', 'onSelect', function() {
        validateField($(this))
        const thisDate = $(this).datepicker('getDate')
        let dateVal = ''
        if (thisDate) {
          dateVal = moment(thisDate).format('YYYY-MM-DD')
        }
        $('[name$=".' + $(this).data('target-date') + '"]').val(dateVal)
      })
  }

  $('#modal').on('click', '#signature-submit', function() {
    if (validateSignature('signature','eSignature1','fullName','modal','over','sv')) {
        $('[name$=".date"]').setFormattedDate(new Date())
    }
    xbObj('eSignature1').value=''
    validateField($('#signature'))
    document.getElementById('eSignature1').focus()
  })
  $('#modal').on('click', '#signature-clear', function() {
    xbObj('signature').value=''
    showHide('modal')
    showHide('over')
    xbObj('eSignature1').value=''
    if (typeof targetdatecheckCLEAR == 'function' ) {
      $('[name$="date"]').val('')
    }
    validateField($('#signature'))
  })
  $('#ButtonPrint, #buttonPrint, #ButtonSaveAndComplete, #buttonSaveAndComplete').on('click', function(e) {
    e.preventDefault()
    let formIsValid = true
    const btn = $(this)
    if(!strFormCompleted.length) {
      $.each($('input:visible:not(:button), select:visible', thisForm), function(k, v) {
          if(false == validateField($(v)) && $(v).is(':visible')) {
            formIsValid = false
          }
      })
    }
    if (!formIsValid) {
      $("html, body").animate({ scrollTop: 0 }, "slow")
      return
    }
    switch (btn.attr('id')) {
      case 'ButtonPrint':
        funcPrint()
      break
      case 'ButtonSaveAndComplete':
        funcSaveAndComplete()
      break
    }
  })
})
