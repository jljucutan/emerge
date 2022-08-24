
$(document).on('ready', function() { 

  const NID_TYPE_LABELS = {
    "ESP": "Identification Type 1",
    "DEFAULT": "Identification Type"
  }

  // nid date not require if country is Australia
  if (EVENT_LOCATION === "AUS") {
    $('.nid-issued-date-required').hide();
    $('#nid_issued_date_mapped').data('validation', 'past-date');
  }
  // remove validation for some country
  if (['ITA','DEU','ESP','NLD'].indexOf(EVENT_LOCATION) >= 0) {
    $('.nid-issued-date-required').remove();
    $('[name$=".nid_issued_date_mapped"]').data('validation', 'past-date');
  }

  if (!FORM_COMPLETED) {
    if (EVENT_LOCATION == 'KOR' && MARITAL_STATUS == 'KOR_Married') {
      $('[name$=".SKMarried"]').val('Yes');
    } else {
      $('[name$=".SKMarried"]').val('');
    }
  }


  var populateByLocation = function(targetObj, source, loc) {
    var location = (loc && loc.length > 0) ? loc : EVENT_LOCATION;
    var optionVal = targetObj.val();
    targetObj.html(source.clone());
    targetObj.find('option').not('[value=""]').not('[value^="' + location + '"]').remove();

    // set default value for italy
    if (EVENT_LOCATION == 'ITA' && targetObj.prop('name').indexOf('nid_type') >= 0) {
      optionVal = 'ITA-CF';
    }
    // Specific to Philippines only
    if (loc === "PHL" && targetObj.prop('name').indexOf('nid_type') >= 0) {
       targetObj.find('option').not('[value=""]').not('[value^="PHL-SSS"]').remove();
    }
    if (EVENT_LOCATION == 'DEU') {
      optionVal = 'DEU-SVNR';
    }
    if (EVENT_LOCATION == 'THA') {
      optionVal = 'DEU-SVNR';
    }
    if (EVENT_LOCATION == 'HKG') {
      optionVal = 'HKG-ID';
    }
    if (EVENT_LOCATION == 'KOR') {
      optionVal = 'KOR-RRN';
    }
    if (EVENT_LOCATION == 'JPN') {
      optionVal = 'JPN-SSN';
    }

    setTimeout(function() {
       if (targetObj) {
         targetObj.val(optionVal)
       }
       if (targetObj.val() == null) {
        targetObj.find('option').first().prop('selected', 'selected');
       }
      if (EVENT_LOCATION == 'DEU' && targetObj.prop('name').indexOf('nid_type') >= 0) {
         targetObj.val('DEU-SVNR').prop('disabled', 'disabled');
      }
      if (EVENT_LOCATION == 'ITA' && targetObj.prop('name').indexOf('nid_type') >= 0) {
         targetObj.val('ITA-CF');
      }
      if (EVENT_LOCATION == 'ESP' && targetObj.prop('name').indexOf('nid_type') >= 0) {
         targetObj.val('ESP-NIF').prop('disabled','disabled');
         $('#nid_number').prop('readonly','readonly');
         $('[name$="nid_type2"]').closest('.row').show();
         $('[name$=".nid_number2"]').closest('.row').show();
        $('[name$=".nid_type2"]').val(NID_TYPE2_DESC).prop('readonly', 'readonly');
        $('[name$=".nid_number2"]').val(NID_ID2).prop('readonly', 'readonly');
         if ($('[name$=".permanent_resident"]:checked').val() == 'Yes') {
           $('[name$="nid_type2"], [name$=".nid_number2"]').prop('readonly', 'readonly');
         }
      }
      // apac countries
      if (EVENT_LOCATION == 'THA' && targetObj.prop('name').indexOf('nid_type') >= 0) {
         targetObj.val('THA-ID').prop('disabled','disabled');
         $('#nid_number').prop('disabled','disabled');
      }
      if (EVENT_LOCATION == 'HKG' && targetObj.prop('name').indexOf('nid_type') >= 0) {
         targetObj.val('HKG-ID').prop('disabled','disabled');
         $('#nid_number').prop('disabled','disabled');
      }
      if (EVENT_LOCATION == 'JPN' && targetObj.prop('name').indexOf('nid_type') >= 0) {
         targetObj.val('JPN-SSN').prop('disabled','disabled');
         $('#nid_number').prop('disabled','disabled');
      }
      if (EVENT_LOCATION == 'KOR' && targetObj.prop('name').indexOf('nid_type') >= 0) {
         targetObj.val('KOR-RRN').prop('disabled','disabled');
         $('#nid_number').prop('disabled','disabled');
      }
    }, 1000);
  }

  var setDefaultCountry = function(obj) {
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
      $('#nid_series_number').val(NID_SERIES_NUMBER);
    }
    if ($('#nid_issuing_agency').is(":visible") && $('#nid_issuing_agency').length < 1) {
      $('#nid_issuing_agency').val(NID_ISSUING_AGENCY);
    }
  }
  toggleIDPropsByCountry($('#nid_type').val());

  // show country specific sections
  showCountrySectionByEventLocation(EVENT_LOCATION);

  // show only countries with option
  removeCountriesWithNoOption($('#visa_permit_type option'), $('#visa_country option'));
  removeCountriesWithNoOption($('#fid_type option'), $('#fid_country option'));

  // show only list of permits per country by default
  populateByLocation($('#visa_permit_type'), $('#Work_Permit_Type_Global option'), $('#visa_country').val());

  // show only list of id types per country by default
  populateByLocation($('#fid_type'), $('#National_ID_Type option'), $('#fid_country').val());

// show only list of id types per country by default
  populateByLocation($('#nid_type'), $('#National_ID_Type option'), $('#EventLocation').val());
  populateByLocation($('#National_ID_Type'), $('#National_ID_Type option'), $('#EventLocation').val());

  // set default country
  setDefaultCountry($('#passport_country'));
  setDefaultCountry($('#visa_country'));
  setDefaultCountry($('#fid_country'));
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

  $('#global-new-hire-form').on('change', '#fid_country', function() {
    populateByLocation($('#fid_type'), $('#National_ID_Type option'), $(this).val());
    $('#National_ID_Type').val($(this)).val();
  });

  $('#global-new-hire-form').on('change', '#visa_country', function() {
    populateByLocation($('#visa_permit_type'), $('#Work_Permit_Type_Global option'), $(this).val());
    $('#Work_Permit_Type_Global').val($(this)).val();
  });

  $('#global-new-hire-form').on('change', 'input:radio:visible', function(e) {
    toggleSections(SECTION_CONFIG.sections, function() {
      $('#global-new-hire-form input[type="radio"]:hidden').prop('checked', false);
      $('.dateField').each(function(k, v) {
          $($(v).data('date-mapped')).val($(v).val());
      });
      toggleIDPropsByCountry($('#nid_type').val()); 
    });
    if ($('#visa_permit_type').is(':visible')) {
      populateByLocation($('#visa_permit_type'), $('#Work_Permit_Type_Global option'), $('#visa_country').val());
    }
    if ($('#fid_type').is(':visible')) {
      populateByLocation($('#fid_type'), $('#National_ID_Type option'), $('#fid_country').val());
    }
    if ($('#nid_type').is(':visible')) {
      populateByLocation($('#nid_type'), $('#National_ID_Type option'), $('#EventLocation').val());
      populateByLocation($('#National_ID_Type'), $('#National_ID_Type option'), $('#EventLocation').val());
    }
    setDefaultCountry($('#passport_country'));
    setDefaultCountry($('#visa_country'));
    setDefaultCountry($('#fid_country'));
    setDefaultCountry($('#EventLocation'));

    setTimeout(function() {
      if ($('#national-identification-container').hasClass('hide')) {
        $('#national-identification-container').find('input:radio:checked').prop('checked', false);
        $('#national-identification-container').find('input').val('');
      }else{
        if ($('#nid_type option[value="' + NID_TYPE + '"]').length > 0) {
          if (['DEU','ITA'].indexOf(EVENT_LOCATION) < 0) {
            $('#nid_type').val( NID_TYPE);
          }
          if (EVENT_LOCATION == 'ITA') {
            $('#nid_type').val('ITA-CF');
          }
        }
        if (EVENT_LOCATION == 'DEU') {
          $('#nid_number').val(NID_ID2);
        }
        // prepopulate national id
        if ($('#nid_number').val().trim().length < 1) {
          $('#nid_number').val(SSNO);
        }
      }
      if ($('#passport-information-container').hasClass('hide')) {
        $('#passport-information-container').find('input:radio:checked').prop('checked', false);
        $('#passport-information-container').find('input').val('');
      }
      if ($('#noncitizen-identification-container').hasClass('hide')) {
        $('#noncitizen-identification-container').find('input:radio:checked').prop('checked', false);
        $('#noncitizen-identification-container').find('input').val('');
        $('#fid_type').find('select').val('');
      }
      if ($('#visa-identification-container').hasClass('hide')) {
        $('#visa-identification-container').find('input:radio:checked').prop('checked', false);
        $('#visa-identification-container').find('input').val('');
        $('#visa_permit_type').find('select').val('');
      }
      if (e.target.name.indexOf('permanent_resident') >= 0 && $('[name$=".permanent_resident"]:checked').val() == 'Yes') {
        $('[name$=".nid_type2"]').val(NID_TYPE2_DESC).prop('readonly', 'readonly');
        $('[name$=".nid_number2"]').val(NID_ID2).prop('readonly', 'readonly');
      } 
      toggleIDPropsByCountry($('#nid_type').val());
    }, 1000);
    if (!strFormCompleted) {
      validateField($(this));
    }
  });

  $('#global-new-hire-form').on('blur change', 'input:visible:not(#signature):not(:button):not(.dateField):not([data-must-match]), select:visible', function(evt) {
    // Specific to Malaysia SOSCO Number
    // Modifies validation and error message
    if ($('#nid_type').val() == 'MYS-SOSCO') {
      $('#nid_number').data('validation', 'required,regex');
      $('#nid_number').data('regex', '^\\d*$');
      $('#nid_number').data('message', 'digits only');
    }

    // Specific to Netherlands burgerserver#
    // Modifies validation and error message
    if ($('#nid_type').val() == 'NLD-BSN') {
      $('#nid_number').data('validation', 'required,regex-optional');
      $('#nid_number').data('regex', '^\\d{9}$');
      $('#nid_number').data('message', 'should be 9 digits only');
    }

    // Specific to Netherlands burgerserver#
    // Modifies validation and error message
    if ($('#nid_type').val() == 'DEU-SID') {
      $('#nid_number').data('validation', 'required,regex-optional');
      $('#nid_number').data('regex', '^\\d{11}$');
      $('#nid_number').data('message', 'should be 11 digits only');
    }
    // clear nid number when nid type is changed
    // applied only for spain for now
    if (EVENT_LOCATION == 'ESP' && evt.type == 'change' && this.id == 'nid_type') {
      $('#National_ID_Type').val(this.value);
      $('#nid_number').val('');
      $('[name$=".nid_type2"]').val(NID_TYPE2_DESC).prop('readonly', 'readonly');
      $('[name$=".nid_number2"]').val(NID_ID2).prop('readonly', 'readonly');
    }
    if (evt.type == 'change' && this.id == 'visa_permit_type') {
      $('#Work_Permit_Type_Global').val(this.value);
    }

    if (!strFormCompleted) {
      validateField($(this));
    }
    toggleIDPropsByCountry($('#nid_type').val());
  });

  $('#global-new-hire-form').on('change', 'input.dateField:visible', function() {
    $($(this).data('date-mapped')).val($(this).val());
    if (!strFormCompleted) {
      validateField($(this));
    }
  });

  $('#global-new-hire-form').on('change', 'input.hasDatepicker:visible', function() {
    $("[data-id='"+$(this).data('date-mapped')+"']").val($(this).data("realdate"));
  });
   
  // china specific configurations outside global config above
  const loadChinaConfig = function() {
    if (EVENT_LOCATION != 'CHN') {
      return;
    }
    if ($('[name$=".citizenship_status"]:checked').val() === "Yes" && EVENT_LOCATION === "CHN") {
      $('[name$=".passport_available"][value="Neither"]')
        .prop("checked", true)
        .closest(".row")
        .hide();
    }
    if ($('[name$=".citizenship_status"]:checked').length <=0 && EVENT_LOCATION === "CHN") {
      $('[name$=".passport_available"]')
        .closest(".row")
        .hide();
    }
    if ($('[name$=".citizenship_status"]:checked').val() == "No" && EVENT_LOCATION === "CHN") {
      $('[name$=".passport_available"]')
        .closest(".row")
        .show();
    }
    toggleSections(SECTION_CONFIG.sections);
  }
  // hk specific configurations outside global config above
  const loadHKConfig = function() {
    if (EVENT_LOCATION != 'HKG') {
      return;
    }
    $('#nid_type').val('HKG-ID').prop('disabled', 'disabled');
    $('#nid_number').val(SSNO).prop('disabled', 'disabled');
    toggleSections(SECTION_CONFIG.sections);
  }
  // japan specific configurations outside global config above
  const loadJPConfig = function() {
    if (EVENT_LOCATION != 'JPG') {
      return;
    }
    $('#nid_type').val('JPN-SSN').prop('disabled', 'disabled');
    $('#nid_number').val(SSNO).prop('disabled', 'disabled');
    toggleSections(SECTION_CONFIG.sections);
  }
  // Thailand specific configurations outside global config above
  const loadThaiConfig = function() {
    if (EVENT_LOCATION != 'THA') {
      return;
    }
    $('#nid_type').val('THA-ID').prop('disabled', 'disabled');
    $('#nid_number').val(SSNO).prop('disabled', 'disabled');
    $('#nid_expiration_date_mapped').data('validation','required,future-date');
    toggleSections(SECTION_CONFIG.sections);
  }

  if (EVENT_LOCATION == 'THA') {
    $('#nid-expiration-label').append('<span class="font-red">*</span>');
  }
  if (EVENT_LOCATION == 'NLD') {
    $('#nid_number').data({'validation': 'required,regex', 'regex': '^\\d{9}$', 'message': 'only 9 digits'});
  }

  // korea specific configurations outside global config above
  const loadKorConfig = function() {
    if (EVENT_LOCATION != 'KOR') {
      return;
    }
    $('#nid_type').val('KOR-RRN').prop('disabled', 'disabled');
    $('#nid_number').val(SSNO).prop('disabled', 'disabled');
    toggleSections(SECTION_CONFIG.sections);
  }
  // spain specific configurations outside global config above
  const loadESPConfig = function() {
    if (EVENT_LOCATION != 'ESP') {
      return;
    }
    $('[name$=".nid_type2"]').val(NID_TYPE2_DESC);
    $('[name$=".nid_number2"]').val(NID_ID2);
    toggleSections(SECTION_CONFIG.sections);
  }
  // spain specific configurations outside global config above
  const loadNLDConfig = function() {
    if (EVENT_LOCATION != 'NLD') {
      return;
    }
    $('[name$=".nid_number"]').prop('readonly', 'readonly')
    $('[name$=".nid_type"]').prop('disabled', 'disabled')
    toggleSections(SECTION_CONFIG.sections);
  }
  setTimeout(function() {
    loadChinaConfig();
    loadHKConfig();
    loadJPConfig();
    loadThaiConfig();
    loadKorConfig();
    loadESPConfig();
    loadNLDConfig();
  }, 500);
  // Country specific change events (Do you have citizenship...)
  $('[name$=".citizenship_status"]').on("change", function() {
    // Philipine specific
    if ($('[name$=".citizenship_status"]:checked').val() === "Yes" && EVENT_LOCATION === "PHL") {
      $('[name$=".passport_available"][value="National"]').prop("checked", true);
    }
    loadChinaConfig();
    loadHKConfig();
    loadJPConfig();
    loadThaiConfig();
    loadKorConfig();
    loadESPConfig();
    validateField($('[name$=".nid_type2"]'), true);
    validateField($('[name$=".nid_number2"]'), true);
  });

  // Work Permit Type specific change events
  $('[name$=".visa_permit_type"]').on("change", function() {
    "use strict";
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

  // populate nid type label
  const nidTypeLabel = NID_TYPE_LABELS[EVENT_LOCATION];
  if (nidTypeLabel) {
    $('#nid-type-label').html(nidTypeLabel + ': <span class="font-red">* </span>');
    $('[name$=".nid_type_label"]').val(nidTypeLabel + ':');
    $('[name$=".nid_type"]').data('title', nidTypeLabel);
  } else {
    $('#nid-type-label').html(NID_TYPE_LABELS['DEFAULT'] + ': <span class="font-red">* </span>');
    $('[name$=".nid_type_label"]').val(NID_TYPE_LABELS['DEFAULT'] + ':');
    $('[name$=".nid_type"]').data('title', NID_TYPE_LABELS['DEFAULT']);
  }

  // country specific load events
  // Spain
  if (EVENT_LOCATION == 'ESP') {
    $('[name$="nid_type"]').val('ESP-NIF').prop('disabled', 'disabled');
    $('[name$="nid_type2"]').closest('.row').show();
    $('[name$=".nid_number2"]').closest('.row').show();
    $('[name$=".nid_type2"]').val(NID_TYPE2_DESC).prop('readonly', 'readonly');
    $('[name$=".nid_number2"]').val(NID_ID2).prop('readonly', 'readonly');
  } 
  // Philippines
  if (EVENT_LOCATION == "PHL") {
      // change mapped id number
      $('#nid_number_label').val("Social Security System (SSS) Number:");
      $('#nid_label').html('').append('Social Security System (SSS) Number ', $('<span class="font-red"/>').text('*')); // if country is philippines
       // show philippines specific sections
       $('[data-section="PHL"]').removeClass('hide');
       // modify fields to attributes that now belong to philippines
       $('#global-new-hire-form #nid_number').data({
        'validation': 'required,regex-optional',
        'title': 'Social Security System (SSS) Number',
        'regex': '^[0-9]{10}$',
        'message': 'exactly 10 digits'
      });
      $('[name$=".passport_number"]').data({
        'validation': 'required,regex-optional',
        'regex': '^[A-Za-z0-9]{9}$',
        'message': 'exactly 9 Characters'
      });
      $('[name$=".tin_number"]').data({
        'validation': 'required,regex-optional',
        'regex': '^[0-9]{12}$',
        'message': 'exactly 12 digits'
      });
      $('[name$=".pibig_mid_number"]').data({
        'validation': 'required,regex-optional',
        'regex': '^[0-9]{12}$',
        'message': 'exactly 12 digits'
      });
      $('[name$=".pin_number"]').data({
        'validation': 'required,regex-optional',
        'regex': '^[0-9]{12}$',
        'message': 'exactly 12 digits'
      });
  }

  // germany event
  if (EVENT_LOCATION == 'DEU') {
    $('#nid_number').val(NID_ID2).prop('readonly','readonly');
  }

  $('#tin_number').on('blur', function() {
    "use strict";
    if ($(this).val().length === 9 && /^\d+$/.test($(this).val())) {
      $(this).val($(this).val()+"000");
    }
  });

}); 
