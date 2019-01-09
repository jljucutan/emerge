ChangeCalendarIcons(); //for popup calendar  
$(document).on('ready', function() { 
        $("#buttonCancel").removeClass("appInputButton RCappInputButtonOrange RCappInputButtonBlue"); 
        $("#buttonCancel").addClass("lifesuite__button"); 
        $('#buttonCancel').attr('id','ButtonCancel'); 
        $("#buttonSave").removeClass("appInputButton RCappInputButtonBlue"); 
        $("#buttonSave").addClass("lifesuite__button primary"); 
        $('#buttonSave').attr('id','ButtonSave'); 
        $("#buttonSaveAndComplete").removeClass("appInputButton RCappInputButtonBlue"); 
        $("#buttonSaveAndComplete").addClass("lifesuite__button primary"); 
        $('#buttonSaveAndComplete').attr('id','ButtonSaveAndComplete'); 
        $("#buttonPrint").removeClass("appInputButton RCappInputButtonOrange RCappInputButtonBlue"); 
        $("#buttonPrint").addClass("lifesuite__button"); 
        $('#buttonPrint').attr('id','ButtonPrint'); 
        $("#buttonPreviewDelete").removeClass("appInputButton RCappInputButtonRed"); 
        $("#buttonPreviewDelete").addClass("lifesuite__button"); 
        $('#buttonPreviewDelete').attr('id','ButtonPreviewDelete'); 
        $("#buttonPreviewSave").removeClass("appInputButton RCappInputButtonBlue"); 
        $("#buttonPreviewSave").addClass("lifesuite__button primary"); 
        $('#buttonPreviewSave').attr('id','ButtonPreviewSave'); 
        $("#buttonComplete").removeClass("appInputButton RCappInputButtonBlue"); 
        $("#buttonComplete").addClass("lifesuite__button primary"); 
        $('#buttonComplete').attr('id','ButtonComplete'); 

       document.getElementById('formButtons').style.display = "block"; 

        $("input[type=text]").addClass('lifesuite__text-input'); 
        $("select").addClass('lifesuite__select-input'); 
        $("input[type=radio]").addClass('lifesuite__radio'); 
        $("input[type=checkbox]").addClass('lifesuite__checkbox'); 
        $("textarea").addClass('lifesuite__textarea-input'); 
        $('label').addClass('lifesuite__input-label lifesuite__input—block'); 

  var countries = {
    'ARG'   : 'Argentina',
    'AUS'   : 'Australia',
    'AUT'   : 'Austria',
    'BEL'   : 'Belgium',
    'BRA'   : 'Brazil',
    'CAN'   : 'Canada',
    'CHN'   : 'China',
    'HRV'   : 'Croatia',
    'CZE'   : 'Czech Republic',
    'DNK'   : 'Denmark',
    'EST'   : 'Estonia',
    'FRA'   : 'France',
    'DEU'   : 'Germany',
    'GTM'   : 'Guatemala',
    'HKG'   : 'Hong Kong',
    'IND'   : 'India',
    'IDN'   : 'Indonesia',
    'IRL'   : 'Ireland',
    'ISR'   : 'Israel',
    'ITA'   : 'Italy',
    'JPN'   : 'Japan',
    'LUX'   : 'Luxembourg',
    'MYS'   : 'Malaysia',
    'MEX'   : 'Mexico',
    'NLD'   : 'Netherlands',
    'NOR'   : 'Norway',
    'PHL'   : 'Philippines',
    'POL'   : 'Poland',
    'RUS'   : 'Russia',
    'SGP'   : 'Singapore',
    'ZAF'   : 'South Africa',
    'KOR'   : 'South Korea',
    'ESP'   : 'Spain',
    'SWE'   : 'Sweden',
    'CHE'   : 'Switzerland',
    'TWN'   : 'Taiwan',
    'THA'   : 'Thailand',
    'TUR'   : 'Turkey',
    'UKR'   : 'Ukraine',
    'GBR'   : 'United Kingdom',
    'USA'   : 'USA'
  }

  var eventLocation = $('#EventLocation').prop('readonly') ? $('#EventLocation').val() :  $('#EventLocation').val("<$client.env.eval(client.tEventCategories_Category_11.Code.subString(0,2))>").val();
  //$('#fid_country, #nid_country, #visa_country, #passport_country').val(eventLocation);
  $('#nid_country').val(eventLocation);
  $('[data-text="country"]').html(countries[eventLocation] + "?");
  $('[data-text="country2"]').html(countries[eventLocation]);
  $('#Country').val(countries[eventLocation] + "?");
  $('#Country2').val(countries[eventLocation] + ", prior to commencing employment.");

  // populate countries
  var removeCountriesWithNoOption = function(allOptionsObj, countryOptionsObj) {
    var existingOptions = [];
    allOptionsObj.each(function(k,v) {
      if ($(v).val().length < 1) {
        return true;
      }
      var countryCode = $(v).val().substring(0, 3);
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

  var sectionToggler = new SectionToggler({"config": "<$link;/main/RedCarpet/FormTemplates/Global_New_Hire_form/toggler_config.json>"});
  // display allowed form input groups based on selected citizen status
  setTimeout(function() {
    sectionToggler.run();
  }, 100);

  var populateByLocation = function(targetObj, source, loc) {
    var location = (loc && loc.length > 0) ? loc : eventLocation;
    var optionVal = targetObj.val();
    targetObj.html(source.clone());
    targetObj.find('option').not('[value=""]').not('[value^="' + location + '"]').remove();

    setTimeout(function() {
    if (targetObj.is(':visible')) {
      targetObj.val(optionVal)
    }
    }, 1000);
  }

  var setDefaultCountry = function(obj) {
    if (obj && obj.val().length < 1) {
      obj.val(eventLocation);
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
      $('#nid_series_number').val("<$client.tForWhomUserInfo.Series_Number>");
    }
    if ($('#nid_issuing_agency').is(":visible") && $('#nid_issuing_agency').length < 1) {
      $('#nid_issuing_agency').val("<$client.tForWhomUserInfo.nid_issuing_agency>");
    }
  }
  toggleIDPropsByCountry($('#nid_type').val());

  // show only countries with option
  removeCountriesWithNoOption($('#visa_permit_type option'), $('#visa_country option'));
  removeCountriesWithNoOption($('#fid_type option'), $('#fid_country option'));

  // show only list of permits per country by default
  populateByLocation($('#visa_permit_type'), $('#Work_Permit_Type_Global option'), $('#visa_country').val());

  // show only list of id types per country by default
  populateByLocation($('#fid_type'), $('#National_ID_Type option'), $('#fid_country').val());

// show only list of id types per country by default
  populateByLocation($('#nid_type'), $('#National_ID_Type option'), $('#EventLocation').val());

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
    // Specific to Malaysia SOSCO Number
    if ($(this).prop("id") == 'nid_number') {
      if ($('#nid_type').val() == 'MYS-SOSCO') {
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
  });

  $('#global-new-hire-form').on('change', '#fid_country', function() {
    populateByLocation($('#fid_type'), $('#National_ID_Type option'), $(this).val());
    $('#National_ID_Type').val($(this)).val();
  });

  $('#global-new-hire-form').on('change', '#visa_country', function() {
    populateByLocation($('#visa_permit_type'), $('#Work_Permit_Type_Global option'), $(this).val());
    $('#Work_Permit_Type_Global').val($(this)).val();
  });

  $('#global-new-hire-form').on('change', 'input:radio:visible', function() {
    sectionToggler.run(function() {
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
        $('#nid_type').val('<$client.tForWhomUserInfo.National_ID_Type>');
        //  console.log('<$client.tForWhomUserInfo.National_ID_Type>');
        $('#nid_number').val('<$client.tForWhomUserInfo.SSNO>');    
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
      toggleIDPropsByCountry($('#nid_type').val());
    }, 100);
    if (!strFormCompleted) {
      validateField($(this));
    }
  });

  $('#global-new-hire-form').on('blur change', 'input:visible:not(#signature):not(:button):not(.dateField), select:visible', function() {
    // Specific to Malaysia SOSCO Number
    // Modifies validation and error message
    if ($('#nid_type').val() == 'MYS-SOSCO') {
      $('#nid_number').data('validation', 'required,regex');
      $('#nid_number').data('regex', '^\\d*$');
      $('#nid_number').data('message', 'digits only');
    }
    // Reverts validation and error message back to original
    else {
      $('#nid_number').data('validation', 'required');
      $('#nid_number').removeData('regex');
      $('#nid_number').removeData('message');
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

  $('#modal').on('click', '#signature-submit', function() {
    if (validateSignature('signature','eSignature1','fullName','modal','over','sv')) {
        $('#date_mapped').setFormattedDate(new Date());
        $("[data-id='date']").val($('#date_mapped').data("realdate"));
    }
    xbObj('eSignature1').value='';
    validateField($('#signature'));
    document.getElementById('eSignature1').focus();
  });
  $('#modal').on('click', '#signature-clear', function() {
    xbObj('signature').value='';showHide('modal');showHide('over');xbObj('eSignature1').value='';
    if (typeof targetdatecheckCLEAR == 'function' ){$('#date_mapped').setFormattedDate(null);$("[data-id='date']").val("");}
    validateField($('#signature'));
  });

  $('#ButtonPrint, #buttonPrint, #ButtonSaveAndComplete, #buttonSaveAndComplete').on('click', function(e) {
    var formIsValid = true, btn = $(this);
    e.preventDefault();
    $.each($('#global-new-hire-form input:visible:not(:button), #global-new-hire-form select:visible'), function(k, v) {
      if(strFormCompleted) formIsValid = true;
      else{
            if(false == validateField($(v)) && $(v).is(':visible')) {
              formIsValid = false;
            }
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
    else {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }
  });
  $(".modal").hide(); 
  <$include;/main/RedCarpet/FormTemplates/FormSupport/js/global_date_config.js> 
  if (!$("#sv").prop('readonly')) {
  $('#date_mapped').formatDatePicker(dateConfig, "<$client.env.eval(client.tEventCategories_Category_11.Code.subString(0,2))>"); 
  $('#fid_expiration_date_mapped').formatDatePicker(dateConfig, "<$client.env.eval(client.tEventCategories_Category_11.Code.subString(0,2))>"); 
  $('#fid_issued_date_mapped').formatDatePicker(dateConfig, "<$client.env.eval(client.tEventCategories_Category_11.Code.subString(0,2))>"); 
  $('#nid_expiration_date_mapped').formatDatePicker(dateConfig, "<$client.env.eval(client.tEventCategories_Category_11.Code.subString(0,2))>"); 
  $('#nid_issued_date_mapped').formatDatePicker(dateConfig, "<$client.env.eval(client.tEventCategories_Category_11.Code.subString(0,2))>"); 
  $('#passport_expiration_date_mapped').formatDatePicker(dateConfig, "<$client.env.eval(client.tEventCategories_Category_11.Code.subString(0,2))>"); 
  $('#passport_issued_date_mapped').formatDatePicker(dateConfig, "<$client.env.eval(client.tEventCategories_Category_11.Code.subString(0,2))>"); 
  $('#visa_expiration_date_mapped').formatDatePicker(dateConfig, "<$client.env.eval(client.tEventCategories_Category_11.Code.subString(0,2))>"); 
  $('#visa_issued_date_mapped').formatDatePicker(dateConfig, "<$client.env.eval(client.tEventCategories_Category_11.Code.subString(0,2))>"); 
  }
}); 
$('#buttonPrint').removeAttr('onclick');
$('#buttonSaveAndComplete').removeAttr('onclick');
disableCalButton('date-disabled'); 
