/**
 * 2021-08-11 | jjucutan | inherit from global new hire
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
const removeCountriesWithNoOption = function(allOptionsObj, countrySelection) {
  let existingOptions = []
  let oldVal = countrySelection.val()
  allOptionsObj.each(function(k,v) {
    if ($(v).val().length < 1) {
      return
    }
    const countryCode = $(v).val().substring(0, 3);
    if (existingOptions.indexOf(countryCode) < 0) {
      existingOptions.push(countryCode)
    }
  });
  $('option', countrySelection).each(function(k,v) {
    if($(v).val().length > 0 && existingOptions.indexOf($(v).val()) < 0 ) {
      $(v).remove()
    }
  })
  countrySelection.val(oldVal)
  if (!countrySelection.val()) {
    countrySelection.val('')
  }
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
        const field = document.querySelector('[name$=".' + kreq + '"]')
        switch(field.type) {
          case "radio":
          if (extract(kreq).isChecked && extract(kreq).checkVal == vreq) {
            show = true
          }
          break;
          case "text":
          if (field.value == vreq) {
            show = true
          }
          break;
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
    const section = $(document.getElementById(id))
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


 // re-enter fields matching validator
 const reverifyEntry = function(el) { 
    "use strict"
    let isValid = true 
    let message = "" 

    // do some awesome coding here 
    const targetMatch = $("#" + el.data('must-match'))
    if (el.val().length && (targetMatch.val() != el.val())) {
       isValid = false
       message = "Entries for " + targetMatch.data('title') + " must be identical."
    }
    // if the logic hasn't met the condition then set isValid to false 
    // set the custom message to message variable 
    return { 
       "isValid": isValid, 
       "message": message 
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
const configureField = function(field, scope) {
  'use strict'
  let config = FIELDS_CONFIG_MAP.get(field.prop('name'))
  if (!!scope) {
    switch(scope) {
      case 'validateByCountry':
      config = config[scope][EVENT_LOCATION]
      break
      case 'validateByIDType':
      if (config[scope]) {
        config = config[scope][$('[name$=".nid_type"]').val()]
      }
      break
    }
  }
  if (config.readonly) {
    field.parent().append($('<div class="coverlay"/>'))
  }
  if (typeof config.readonly != 'undefined' && config.readonly == false) {
    field.parent().find('.coverlay').remove()
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
  if (config.defaultEUP) {
    field.data('default', EUP_MAP[config.defaultEUP])
    if (config.readonly) {
      field.val(EUP_MAP[config.defaultEUP])
    }
    if (field.val() == null || !field.val().length) {
      field.val(EUP_MAP[config.defaultEUP])
    }
  }
  if (config.validation) {
    field.data('validation', config.validation)
    if (config.validation.indexOf('required') < 0) {
      $(config.label).find('.font-red').hide();
    }
  }
  if (config.regex) {
    field.data('regex', config.regex)
  }
  if (config.message) {
    field.data('message', config.message)
  }
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
  $('#nid_country').val(EVENT_LOCATION)

  const loadCountries = $.getJSON(COUNTRIES_PATH, function(data) {
    $('[data-text="country"]').html(data.countries[EVENT_LOCATION] + "?")
    $('[data-text="country2"]').html(data.countries[EVENT_LOCATION])
    $('#Country').val(data.countries[EVENT_LOCATION] + "?")
    $('#Country2').val(data.countries[EVENT_LOCATION] + ", prior to commencing employment.")
  })
  const loadSections = $.get(
    SECTION_CONFIG_PATH,
    null,
    function(sectionConfig) {
      SECTION_CONFIG["sections"] = sectionConfig.sections
    },
    'json'
  )
  const loadFields = $.getJSON(FIELDS_CONFIG_PATH, function(cfg) {
    cfg.config.fields.forEach(function(cfg) {
      const field = $('[name$=".' + cfg.field + '"]')
      FIELDS_CONFIG_MAP.set(field.prop('name'), cfg)
      configureField(field)
      if (cfg.validateByCountry && cfg.validateByCountry[EVENT_LOCATION]) {
        configureField(field, 'validateByCountry')
      }
      if (cfg.validateByIDType && cfg.validateByIDType[$('[name$=".nid_type"]').val()]) {
        configureField(field, 'validateByIDType')
      }
    })
    cfg.config.labels.forEach(function(cfg) {
      const label = $('#' + cfg.id)
      const mappedLabel = $('[name$="' + cfg.mappedLabel + '"]')
      if (cfg.validateByCountry && cfg.validateByCountry[EVENT_LOCATION]) {
        const validateByCountry = cfg.validateByCountry[EVENT_LOCATION]
        mappedLabel.val(validateByCountry.text)
        if (validateByCountry.required) {
          validateByCountry.text += ': <span class="font-red">*</span>'
        }
        label.html(validateByCountry.text)
      }
    })
  })

  $.when(loadCountries, loadSections, loadFields).then(function(c, s, f) {
    // show only list of id types per country by default
    // remove non country options
    $('#nid_type option, #nid_type2 option').each(function() {
      if ($(this).val().indexOf(EVENT_LOCATION) >= 0 || !$(this).val().length) {
        // remove specific options for ARG
        if (this.value == 'ARG-CI') {
          $(this).remove()
        }
        return
      }
      $(this).remove()
      if ($('#nid_type').val() == null) {
        $('#nid_type').val('')
      }
    })
    toggleSections(SECTION_CONFIG.sections, function() {
      // workaround for datefield not clearing out when hidden
      $('#national-identification-container input:hidden').val('');
    })
  })
  .fail(function(err) {
    console.warn(err)
  })
  .always(function() {
    $(".modal").hide()
  })

  const nidTypeField = $('[name$=".nid_type"]')
  nidTypeField.on('change', function() {
    $('[name$=".nid_issued_date_mapped"], [name$=".nid_expiration_date_mapped"], [name$=".nid_number"]').each(function(_, targetField) {
      configureField($(targetField), 'validateByIDType')
    })
  })
  $('#global-new-hire-form').on('blur', '[data-must-match]', function() {
    const fld = $(this)
    validateField($(this), false, function() {
       return reverifyEntry(fld)
    })
   })

  if (!FORM_COMPLETED) {
    if (EVENT_LOCATION == 'KOR' && EUP_MAP['MaritalStatus'] == 'KOR_Married') {
      $('[name$=".SKMarried"]').val('Yes');
    } else {
      $('[name$=".SKMarried"]').val('');
    }
  }

  if (['BRA'].indexOf(EVENT_LOCATION) >= 0) {
    $('[name$=".nid_type2"], [name$=".nid_number2"], [name$=".nid_issued_date_mapped2"], [name$=".nid_expiration_date_mapped2"]').each(function() {
      $(this).closest('.row').show();
    });
  }


  const populateByLocation = function(targetObj, source, loc) {
    var location = (loc && loc.length > 0) ? loc : EVENT_LOCATION;
    targetObj.html(source.clone());
    targetObj.find('option').not('[value=""]').not('[value^="' + location + '"]').remove();
  }

  

  var setDefaultCountry = function(obj) {
    if (obj.val() == null) {
        console.log(obj)
    }
    if (obj && obj.val().length < 1) {
      obj.val(EVENT_LOCATION);
    }
  }
  

  var showCountrySectionByEventLocation = function(eventLocationCode) {
   if (document.getElementById(eventLocationCode) !== null) {
      $(document.getElementById(eventLocationCode)).removeClass('hide');
   }
  }

  /**
   * SERVICES-35790 | jjucutan | renamed from toggleBrazilFields to toggleIDPropsByCountry to make it more general purpose
   */
  var toggleIDPropsByCountry = function(nationalID) {
    switch (nationalID) {
      case "BRA-CTPS":
        $('#nid_series_number').closest('.row').show();
        $('#nid_issuing_agency').closest('.row').show();
      break;
      case "BRA-VRN":
        validateField($('#nid_issuing_agency'), true);
        $('#nid_series_number').closest('.row').show();
        $('#nid_issuing_agency').val('').closest('.row').hide();
      break;
      case "BRA-RNE":
      case "BRA-RG":
        validateField($('#nid_series_number'), true);
        $('#nid_series_number').val('').closest('.row').hide();
        $('#nid_issuing_agency').closest('.row').show();
      break;
      case "RUS-VTK":
      case "RUS-TK":
          validateField($('#nid_issuing_agency'), true);
        $('#nid_series_number').data("validation", "required").closest('.row').show();
        $('label[for="nid_series_number"] span.font-red').show();
        $('#nid_issuing_agency').data("validation", null).closest('.row').show();
        $('label[for="nid_issuing_agency"] span.font-red').hide();
      break;
      case "RUS-INT":
        $('#nid_series_number').data("validation", "required").closest('.row').show();
        $('label[for="nid_series_number"] span.font-red').show();
        $('#nid_issuing_agency').data("validation", "required").closest('.row').show();
        $('label[for="nid_issuing_agency"] span.font-red').show();
      break;
      case "RUS-PIFC":
      case "RUS-YHH":
          validateField($('#nid_series_number'), true);
          validateField($('#nid_issuing_agency'), true);
        $('#nid_series_number').data("validation", null).closest('.row').show();
        $('label[for="nid_series_number"] span.font-red').hide();
        $('#nid_issuing_agency').data("validation", null).closest('.row').show();
        $('label[for="nid_issuing_agency"] span.font-red').hide();
      break;
      default:
        validateField($('#nid_series_number'), true);
        validateField($('#nid_issuing_agency'), true);
        $('#nid_series_number, #nid_issuing_agency').val('').closest('.row').hide();
    }
    if ($('#nid_series_number').is(":visible") && $('#nid_series_number').length < 1) {
      $('#nid_series_number').val(EUP_MAP['nid_series_number']);
    }
    if ($('#nid_issuing_agency').is(":visible") && $('#nid_issuing_agency').length < 1) {
      $('#nid_issuing_agency').val(EUP_MAP['nid_issuing_agency']);
    }
  }
  toggleIDPropsByCountry($('#nid_type').val());

  // hide fields by country
  $.each($('[data-hidefor]'), function(k, v) {
    if ($(v).data('hidefor').indexOf(EVENT_LOCATION) >= 0) {
      $(v).hide()
    }
  })

  // show fields by country
  $.each($('[data-showfor]'), function(k, v) {
    if ($(v).data('showfor').indexOf(EVENT_LOCATION) < 0) {
      $(v).hide()
    }
  })

  // show country specific sections
  showCountrySectionByEventLocation(EVENT_LOCATION);

  // show only countries with option
  removeCountriesWithNoOption($('#visa_permit_type option'), $('#visa_country'));

  // show only list of permits per country by default
  populateByLocation($('#visa_permit_type'), $('#Work_Permit_Type_Global option'), $('#visa_country').val());

  // show only list of id types per country by default

  populateByLocation($('#National_ID_Type'), $('#National_ID_Type option'), $('#EventLocation').val());

  // set default country
  setDefaultCountry($('#passport_country'));
  setDefaultCountry($('#visa_country'));
  setDefaultCountry($('#EventLocation'));

//////////////////////////////////////////////////////////////////////////////////
// Removes Alpha and Special characters from the input field
// Only accepts numeric input
//////////////////////////////////////////////////////////////////////////////////
  $('.remove-alpha').keyup(function () {
    if ($(this).prop("id") == 'nid_number') {
      // Specific to Malaysia SOSCO Number
      if ($('#nid_type').val() == 'MYS-SOSCO') {
        if (!this.value.match(/^[0-9]$/)) {
          this.value = this.value.replace(/[^0-9]/g, '');
        }
      }
      // Specific to Netherlands
      if ($('#nid_type').val() == 'NLD-BSN') {
        if (!this.value.match(/^[0-9]$/)) {
          this.value = this.value.replace(/[^0-9]/g, '');
        }
      }
      // Specific to germany ta id
      if ($('#nid_type').val() == 'DEU-SID') {
        if (!this.value.match(/^[0-9]$/)) {
          this.value = this.value.replace(/[^0-9]/g, '');
        }
      }
    }
    if ($(this).prop("id") == 'fid_number') {
      if ($('#fid_type').val() == 'MYS-SOSCO') {
        if (!this.value.match(/^[0-9]$/)) {
          this.value = this.value.replace(/[^0-9]/g, '');
        }
      }
    }
    // Philippine specific section fields
    if (["tin_number","pin_number","pibig_mid_number"].indexOf($(this).prop("id")) > -1) {
     if (!this.value.match(/^([0-9]?)+([-]?)+$/)) {
       this.value = this.value.replace(/[^0-9-]/g, '');
     }
    }
  });

  $('#global-new-hire-form').on('change', '#visa_country', function() {
    populateByLocation($('#visa_permit_type'), $('#Work_Permit_Type_Global option'), $(this).val());
    $('#Work_Permit_Type_Global').val($(this)).val();
  });

  $('#global-new-hire-form').on('change', 'input:radio:visible', function(e) {
    toggleSections(SECTION_CONFIG.sections, function() {
      $('#global-new-hire-form input[type="radio"]:hidden').prop('checked', false);
      $('[data-date-mapped]').each(function(k, v) {
          let dateValue = ''
          let rawDate = $(this).datepicker('getDate')
          if (!!rawDate) {
            dateValue = moment(rawDate).format('YYYY-MM-DD')
          }
          $('[name$=".' + $(this).data('date-mapped') + '"]').val(dateValue)
      });
      toggleIDPropsByCountry($('#nid_type').val()); 
    });
    if ($('#visa_permit_type').is(':visible')) {
      populateByLocation($('#visa_permit_type'), $('#Work_Permit_Type_Global option'), $('#visa_country').val());
    }
    if ($('#nid_type').is(':visible')) {
      // populateByLocation($('#nid_type'), $('#National_ID_Type option'), $('#EventLocation').val());
      populateByLocation($('#National_ID_Type'), $('#National_ID_Type option'), $('#EventLocation').val());
    }
    setDefaultCountry($('#passport_country'));
    setDefaultCountry($('#visa_country'));
    setDefaultCountry($('#EventLocation'));

    setTimeout(function() {
      if (EVENT_LOCATION == 'ARG' && e.target.name.indexOf('citizenship_status') >= 0 && $('[name$=".citizenship_status"]:checked').val() == 'Yes') {
        $('#nid_type').val('');
        $('#nid_number').val('');
      } 
      if (EVENT_LOCATION == 'ARG' && e.target.name.indexOf('citizenship_status') >= 0 && $('[name$=".citizenship_status"]:checked').val() == 'No') {
        $('#nid_type').val('ARG-CUIL');
        $('#nid_number').val(EUP_MAP.National_ID2);
      }       
      if (EVENT_LOCATION == 'ARG' && e.target.name.indexOf('permanent_resident') >= 0 && $('[name$=".permanent_resident"]:checked').val() == 'Yes') {
        $('#nid_type').val('ARG-CUIL');
        $('#nid_number').val(EUP_MAP.National_ID2);
      }     
      if (EVENT_LOCATION == 'ARG' && e.target.name.indexOf('nid_status') >= 0 && $('[name$=".nid_status"]:checked').val() == 'Yes') {
        $('#nid_type').val('ARG-CUIL');
        $('#nid_number').val(EUP_MAP.National_ID2);
      } 
      //toggleIDPropsByCountry($('#nid_type').val());
    }, 1);

    if (!strFormCompleted) {
      validateField($(this));
    }
  });

  $('#global-new-hire-form').on('blur change', 'input:visible:not(#signature):not(:button):not(.dateField):not([data-must-match]), select:visible', function(evt) {

    // clear nid number when nid type is changed
    // applied only for spain for now
    if (EVENT_LOCATION == 'ESP' && evt.type == 'change' && this.id == 'nid_type') {
      $('#National_ID_Type').val(this.value);
      $('#nid_number').val('');
    }
    if (evt.type == 'change' && this.id == 'visa_permit_type') {
      $('#Work_Permit_Type_Global').val(this.value);
    }

    if (!strFormCompleted) {
      validateField($(this));
    }
    toggleIDPropsByCountry($('#nid_type').val());
  });

  // Country specific change events (Do you have citizenship...)
  $('[name$=".citizenship_status"]').on("change", function() {
    // Philipine specific
    if ($('[name$=".citizenship_status"]:checked').val() === "Yes" && EVENT_LOCATION === "PHL") {
      $('[name$=".passport_available"][value="National"]').prop("checked", true);
    }
  });

  // Work Permit Type specific change events
  $('[name$=".visa_permit_type"]').on("change", function() {
    // Singapore specific
    if ($('[name$=".citizenship_status"]:checked').val() === "No" && $('[name$=".permanent_resident"]:checked').val() === "No" && $('[name$=".visa_permit_type"] option:selected').val() === "SGP_VIP" && EVENT_LOCATION === "SGP") {
      $('[name$=".visa_number"]').data("validation", "");
      $('[name$=".visa_issued_date_mapped"]').data("validation", "past-date");
      $('[name$=".visa_expiration_date_mapped"]').data("validation", "future-date");
      validateField($('[name$=".visa_number"]'), true);
      validateField($('[name$=".visa_issued_date_mapped"]'), true);
      validateField($('[name$=".visa_expiration_date_mapped"]'), true);
      $('[name$=".visa_number"]').closest('div.row').find('span.font-red').html('');
      $('[name$=".visa_issued_date_mapped"]').closest('div.row').find('span.font-red').html('');
      $('[name$=".visa_expiration_date_mapped"]').closest('div.row').find('span.font-red').html('');
    }
    else {
      $('[name$=".visa_number"]').data("validation", "required");
      $('[name$=".visa_issued_date_mapped"]').data("validation", "required,past-date");
      $('[name$=".visa_expiration_date_mapped"]').data("validation", "required,future-date");
      $('[name$=".visa_number"]').closest('div.row').find('span.font-red').html('* ');
      $('[name$=".visa_issued_date_mapped"]').closest('div.row').find('span.font-red').html('* ');
      $('[name$=".visa_expiration_date_mapped"]').closest('div.row').find('span.font-red').html('* ');
    }
  });

  $('#tin_number').on('blur', function() {
    "use strict"
    if ($(this).val().length === 9 && /^\d+$/.test($(this).val())) {
      $(this).val($(this).val()+"000");
    }
  });

  if (!$("#sv").prop('readonly')) {
    $('#date_mapped, #fid_expiration_date_mapped, #fid_issued_date_mapped, #nid_expiration_date_mapped, #nid_issued_date_mapped, #passport_expiration_date_mapped, #passport_issued_date_mapped, #visa_expiration_date_mapped, #visa_issued_date_mapped, [name$=".nid_issued_date_mapped2"], [name$=".nid_expiration_date_mapped2"]')
      .each(function() {
        $(this).formatDatePicker(dateConfig, LOCATION)
          .datepicker('option', 'onSelect', function() {
            let dateValue = ''
            let rawDate = $(this).datepicker('getDate')
            if (!!rawDate) {
              dateValue = moment(rawDate).format('YYYY-MM-DD')
            }
            $('[name$=".' + $(this).data('date-mapped') + '"]').val(dateValue)
            validateField($(this))
          })
          .each(function() {
            let dateValue = ''
            let rawDate = $(this).datepicker('getDate')
            if (!!rawDate) {
              dateValue = moment(rawDate).format('YYYY-MM-DD')
            }
            $('[name$=".' + $(this).data('date-mapped') + '"]').val(dateValue)
          })
      })
  }
  

  $('#modal').on('click', '#signature-submit', function() {
    if (validateSignature('signature','eSignature1','fullName','modal','over','sv')) {
        $('#date_mapped').setFormattedDate(new Date())
        $("[data-id='date']").val($('#date_mapped').data("realdate"))
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
      $('#date_mapped').setFormattedDate(null) 
      $("[data-id='date']").val("")
    }
    validateField($('#signature'))
  })
  $('#ButtonPrint, #buttonPrint, #ButtonSaveAndComplete, #buttonSaveAndComplete').on('click', function(e) {
    let formIsValid = true, btn = $(this)
    e.preventDefault()
    $.each($('#global-new-hire-form input:visible:not(:button), #global-new-hire-form select:visible'), function(k, v) {
      if(strFormCompleted) formIsValid = true
      else{
            if(false == validateField($(v)) && $(v).is(':visible')) {
              formIsValid = false
            }
            if ($(v).data('must-match') && !validateField($(v), false, function() {return reverifyEntry($(v))})) {
              formIsValid = false
            }
      }
    })

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
