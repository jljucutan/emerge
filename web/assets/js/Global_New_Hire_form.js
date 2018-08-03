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
        $("input[type=text].hasDatepicker").addClass('dateField'); 
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

  var eventLocation = (strFormCompleted == "") ? "<$client.env.eval(client.tEventCategories_Category_11.Code.subString(0,2))>" : $('#EventLocation').val();
  $('[data-text="country"]').html(countries[eventLocation] + "?");
  $('#Country').val(countries[eventLocation] + "?");

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
  }, 500);

  var populateByLocation = function(targetObj, source, loc) {
    var location = (loc && loc.length > 0) ? loc : eventLocation;
    var optionVal = targetObj.val();
    targetObj.html(source.clone());
    targetObj.find('option').not('[value=""]').not('[value^="' + location + '"]').remove();
    //targetObj.prepend($('<option value=""/>'));
    //targetObj.val("");


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

  // show only countries with option
  removeCountriesWithNoOption($('#visa_permit_type option'), $('#visa_country option'));
  removeCountriesWithNoOption($('#fid_type option'), $('#fid_country option'));

  // show only list of permits per country by default
  populateByLocation($('#visa_permit_type'), $('#Work_Permit_Type_Global option'), $('#visa_country').val());

  // show only list of id types per country by default
  populateByLocation($('#fid_type'), $('#National_ID_Type option'), $('#fid_country').val());

// show only list of id types per country by default
  populateByLocation($('#nid_type'), $('#National_ID_Type option'), $('#nid_country').val());

  // set default country
  setDefaultCountry($('#passport_country'));
  setDefaultCountry($('#visa_country'));
  setDefaultCountry($('#fid_country'));

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
    });
    if ($('#visa_permit_type').is(':visible')) {
      populateByLocation($('#visa_permit_type'), $('#Work_Permit_Type_Global option'), $('#visa_country').val());
    }
    if ($('#fid_type').is(':visible')) {
      populateByLocation($('#fid_type'), $('#National_ID_Type option'), $('#fid_country').val());
    }
    setDefaultCountry($('#passport_country'));
    setDefaultCountry($('#visa_country'));
    setDefaultCountry($('#fid_country'));

    setTimeout(function() {
      if ($('#national-identification-container').hasClass('hide')) {
        $('#national-identification-container').find('input:radio:checked').prop('checked', false);
        $('#national-identification-container').find('input').val('');
      }else{
        //$('#nid_type').val('<$client.tForWhomUserInfo.National_ID_Type>');  console.log('<$client.tForWhomUserInfo.National_ID_Type>');
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
      $('.dateField').each(function(k, v) {
          $($(v).data('date-mapped')).val($(v).val());
      });
    }, 1000);
    validateField($(this));
  });

  $('#global-new-hire-form').on('blur keyup change', 'input:visible:not(#signature):not(:button), select:visible', function() {
    if($(this).hasClass('dateField')) {
        $($(this).data('date-mapped')).val($(this).val());
    }
    validateField($(this));
  });

  $('#modal').on('click', '#signature-submit', function() {
    if (validateSignature('signature','eSignature1','fullName','modal','over','sv','date')) {
        $('#date_mapped').val($('[data-date-mapped="#date_mapped"]').val());
    }
    xbObj('eSignature1').value='';
    validateField($('#signature'));
  });
  $('#modal').on('click', '#signature-clear', function() {
    xbObj('signature').value='';showHide('modal');showHide('over');xbObj('eSignature1').value='';
    if (typeof targetdatecheckCLEAR == 'function' ){targetdatecheckCLEAR('signature','date');}
    $('#date_mapped').val($('[data-date-mapped="#date_mapped"]').val());
    validateField($('#signature'));
  });

  $('#ButtonPrint, #buttonPrint, #ButtonSaveAndComplete, #buttonSaveAndComplete').on('click', function(e) {
    var formIsValid = true, btn = $(this);
    e.preventDefault();
    $.each($('#global-new-hire-form input:visible:not(:button), #global-new-hire-form select:visible'), function(k, v) {
      if(false == validateField($(v)) && $(v).is(':visible')) {
        formIsValid = false;
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
  });
    if ($.fn.datepicker) {
        $('.dateField').each(function(k, v) {
            $($(v).data('date-mapped')).val($(v).val());
        });
    }
  // Style modifiers
  $('.cal_and_button td').prepend($('<span class="calendar-btn-container"/>').append($('<i class="fa fa-calendar"></i>')));
}); 
$('#buttonPrint').removeAttr('onclick');
$('#buttonSaveAndComplete').removeAttr('onclick');
disableCalButton('date-disabled'); 
