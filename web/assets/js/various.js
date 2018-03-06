$(document).ready(function() {
  $('input.dateField[readonly]')
    .closest('.cal_and_button')
    .find('.calendar_button')
    .prop('disabled', true);
});


function hasLengthLimit(sValue, sName, sField) {
  var isValid = true;
  if('<$client.env.serversidevalidation>' == '1'){return isValid;}
  var strVal = sValue.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  if (strVal.length == 0) {
    eFormRequiredField(sValue, sName, sField);
  }
  var maxlength = document.getElementById(sField).getAttribute('maxlength');
  if (strVal.length != maxlength) {
    AddError(sField, 'Error in validation, it should have ' + maxlength + ' digits in', '');
    isValid = false;
  }
  return isValid;
}

function getDateByUTCDiff(offset) {
    today = new Date();
    d = new Date(today);
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    nd = new Date(utc + (3600000 * offset));
    return nd;
}

function validateTimezone(sValue,sName,sField){
  var isValid = true;
  if ('<$client.env.serversidevalidation>'=='1') return true;
  if (sValue.length < 1) {
    eFormRequiredDate(sValue,sName,sField);
  }
  var datePST = getDateByUTCDiff('-8');
  var inputDate = new Date(sValue);
  if (datePST.valueOf() !== inputDate.valueOf()) {
    AddError(sField, 'Error in validation, Pacific Standard Time should be input in', '');
    isValid = false;
  }
  return isValid;
}

function isValidNumeric(sVal,sName,sID){
  var isValid = true;
  if('<$client.env.serversidevalidation>'=='1'){ return isValid; }
  if (sVal.length < 1) {
    return eFormRequiredField(sVal,sName,sID);
  }
  var reg = /^[0-9]+$/;
  if (!sVal.match(reg)) {
    AddError(sID, 'Error in validation, numbers should be input in', '');
    isValid = false;
  }
  return isValid;
}

$(document).ready(function() {
    $('.autoWidth_text input[type=text]').each(function(index) {

        var valueInit = $(this).val();

        var inputResize = function(id, pad) {
            var valueCur = $(id).val();
            var valueId = valueCur.split(' ').join('_').replace(/[^a-zA-Z 0-9]+/g, '');
            $('p').after('<div class="fake_form" id="fake_form_' + valueId + '">' + valueCur + '</div>');
            var valueInitW = $('#fake_form_' + valueId).width() + 2 + pad;
            $('#fake_form_' + valueId).remove();
            $(id).css('width', valueInitW);
        }
        inputResize(this, 0);

        $(this).focus(function() {
            var valueCur = $(this).val();
            if (valueCur == valueInit) {
                $(this).val('');
            }
            if ($(this).width() < 50) {
                $(this).width(50);
            }
            $(this).removeClass('inputted');
        });

        $(this).blur(function() {
            var valueCur = $(this).val();
            if (valueCur == '') {
                $(this).val(valueInit);
            } else {
                $(this).addClass('inputted');
            }
            inputResize(this, 0);
        });

        $(this).keydown(function() {
            inputResize(this, 30);
        });

    });
});

$(document).ready(function() {
  function resizeElem(inputElem) {
    if (inputElem.val().length > 0) {
      if (!inputElem.parent().find('.virtual-elem').length) {
        inputElem.after('<div class="virtual-elem"/>');
      }
      inputElem.parent().find('.virtual-elem').text(inputElem.val());
      inputElem.css('width', inputElem.parent().find('.virtual-elem').width() + 5);
    }
  }
  $('.autoWidth_text').on('propertychange change click keyup input paste focus', 'input[type="text"]', function() {
    resizeElem($(this));
  });
  $('.autoWidth_text input').each(function(k, v) {
    resizeElem($(v));
  });
});


function validateTimezone(sVal,sName,sID,sFormat){

  if('<$client.env.serversidevalidation>' == '1'){return true;}

  if(eFormRequiredField(sVal,sName,sID)==false){ return false; }
  if(eFormValidDate(sVal,sName,sID,sFormat)==false){ return false; }
  // var todayDate = new Date();

	var todate = new Date();
	var pacific = moment.tz(todate, "America/Los_Angeles");

  if((pacific.format('YYYY-MM-DD') == '2018-01-22') < 0){
      AddError(sID,'Error in validation, future date is not allowed in','');
      return false;
  }
  return true;
}


function validateTimezone(sValue,sName,sField){
  var isValid = true;
  if ('<$client.env.serversidevalidation>'=='1') return true;
  if (sValue.length < 1) {
    eFormRequiredDate(sValue,sName,sField);
  }
	var todate = new Date();
	var pacific = moment.tz(todate, "America/Los_Angeles");

  if (pacific.format('YYYY-MM-DD') != sValue) {
    AddError(sField, 'Error in validation, Pacific Standard Time should be input in', '');
    isValid = false;
  }
  return isValid;
}

function isFirstSignee(elemId) {
  if ($(document.getElementById(elemId)).attr('id') != 'a26_First_Level_Supervisors_Signature') {
    return false;
  }
  return true;
}

function validateSignatureLevel(sValue,sName,sField) {
  var isValid = true;
  if ('<$client.env.serversidevalidation>'=='1') return true;
  if (isFirstSignee(sField) && sValue.length < 1) {
    eFormRequiredDate(sValue,sName,sField);
  }
  var target = $(document.getElementById(sField)).data('target-level'),
      targetLevel = $(target);
  if (targetLevel.val().length) {
    return isValid;
  }
  targetLevel.val('<$client.env.eval(client.account.loginID)>');
  return isValid;
}

function stampSign(elemId) {
  document.getElementById(elemId).value = '<$client.account.loginID>';
}



        $.fn.disableDate = function() {
          $(this).parent().find('input[type="button"]').prop("disabled", true);
          return $(this);
        }
        $.fn.disableField = function() {
          $(this).prop('disabled', true).css({'background': '#ccc', 'border': '1px solid #707070'});
          return $(this);
        }

$(document).ready(function() {
  if ($('#lv1').val().length > 0 &&  $('#lv1').val() != '<$client.env.eval(client.account.loginID)>') {
    $('[data-group="comments"], [data-group="evaluation"]').disableField();
  }
  if ($('#lv1').val().length < 1 || $('#lv1').val() == '<$client.env.eval(client.account.loginID)>') {
    $('[data-target-level="#lv2"], [data-target-level="#lv3"], [data-target-level="#lv4"]').disableField();
    $('[data-date-id="#lv2"], [data-date-id="#lv3"], [data-date-id="#lv4"]').disableField().disableDate();
  } else {
    $('[data-target-level]').each(function(k, v) {
      if ($($(v).data('target-level')).val().length < 1) {
        return true;
      }
      if ($($(v).data('target-level')).val() != '<$client.env.eval(client.account.loginID)>') {
        $(v).disableField();
        $('[data-date-id="' + $(v).data('target-level') + '"]').disableField().disableDate();
      }
    });
  }
});


var employee = {
	    // Dates
	    Start_Date: "<$client.env.eval(Date.Format('<$client.env.eval(Date.parse(client.tEventDates_2.Value))>','%A, %B %d, %Y'))>",
	    Hire_Date: "<$client.env.eval(Date.Format('<$client.env.eval(Date.parse(client.tForWhomUserInfo.Hire_Date))>','%A, %B %d, %Y'))>",
	    Termination_Date: "<$client.env.eval(Date.Format('<$client.env.eval(Date.parse(client.tForWhomUserInfo.TerminationDate))>','%A, %B %d, %Y'))>",
	    Date_Of_Birth: "<$client.env.eval(Date.Format('<$client.env.eval(Date.parse(client.tForWhomUserInfo.DOB))>','%A, %B %d, %Y'))>",
	    Today: "<$client.env.eval(date.now('%B %d, %Y'))>",

	    // Events
	    Location: "<$client.tEventCategories_11.Code>",
	    Hire_Type: "<$client.tEventCategories_22.Code>",
	    Hire_Category: "<$client.tEventCategories_23.Code>",
	    Commitments: "<$client.tEventCategories_24.Code>",
	    Registered: "<$client.tEventCategories_25.Code>",
	    Role_Type: "<$client.tEventCategories_26.Code>",
	    Manager: "<$client.tEventManagers_1.First_Name> <$client.tEventManagers_1.Last_Name>",
	    HR_Ops: "<$client.tEventManagers_9.First_Name> <$client.tEventManagers_9.Last_Name>",
	    Requestor: "<$client.tEventManagers_10.First_Name> <$client.tEventManagers_10.Last_Name>",
	    New_Joiner_Liaison: "<$client.tEventManagers_11.First_Name> <$client.tEventManagers_11.Last_Name>",


	    // EUP
	    First_Name: "<$client.tForWhomUserInfo.First_Name>",
	    Middle_Name: "<$client.tForWhomUserInfo.Middle_Name>",
	    Last_Name: "<$client.tForWhomUserInfo.Last_Name>",
	    Employee_ID: "<$client.tForWhomUserInfo.Employee_ID>",

	    Business_First_Name: "<$client.tForWhomUserInfo.Preferred_FName>",
	    Business_Last_Name: "<$client.tForWhomUserInfo.Preferred_LName>",
	    Honors: "<$client.tForWhomUserInfo.Honors>",
	    SSN: "<$client.tForWhomUserInfo.SSNO>",

	    Address1: "<$client.tForWhomUserInfo.Address1>",
	    Address2: "<$client.tForWhomUserInfo.Address2>",
	    City: "<$client.tForWhomUserInfo.City>",
	    State: "<$client.tForWhomUserInfo.State>",
	    Zip: "<$client.tForWhomUserInfo.Zip>",
	    Country: "<$client.tForWhomUserInfo.Country>",
	    Primary_Phone: "<$client.tForWhomUserInfo.Phone>",

	    Sensitive_Hire: "<$client.tForWhomUserInfo.Sensitive_Hire>",
	    Earliest_Date_Hri_Entry: "<$client.env.eval(Date.Format('<$client.env.eval(Date.parse(client.tForWhomUserInfo.Earliest_Date_Hri_Entry))>','%A, %B %d, %Y'))>",
	    SNOW_Case_ID: "<$client.tForWhomUserInfo.SNOW_Case_ID>",
	    Legal_Entity: "<$client.tForWhomUserInfo.Legal_Entity>",
	    Division: "<$client.tForWhomUserInfo.Division>",
	    Pay_Company: "<$client.tForWhomUserInfo.Pay_Company>",
	    Unit: "<$client.tForWhomUserInfo.Unit>",
	    Area: "<$client.tForWhomUserInfo.Area>",
	    Sector: "<$client.tForWhomUserInfo.Sector>",
	    Market: "<$client.tForWhomUserInfo.Market>",
	    Segment: "<$client.tForWhomUserInfo.Segment>",
	    Function: "<$client.tForWhomUserInfo.Function>",
	    Location_Code: "<$client.tForWhomUserInfo.Location_Code>",
	    Location_Description: "<$client.tForWhomUserInfo.Location_Description>",
	    Location_City: "<$client.tForWhomUserInfo.Location_City>",
	    OU_Code: "<$client.tForWhomUserInfo.OU_Code>",
	    Branch_Code: "<$client.tForWhomUserInfo.Branch_Code>",
	    Dual_Employee: "<$client.tForWhomUserInfo.Dual_Employee>",
	    Equity_Research: "<$client.tForWhomUserInfo.Equity_Research>",
	    Mortgage_Specialist: "<$client.tForWhomUserInfo.Mortgage_Specialist>",
	    Business_Title: "<$client.tForWhomUserInfo.Business_Title>",
	    Rank: "<$client.tForWhomUserInfo.Rank_desc>",
	    Brass_Ring_Key: "<$client.tForWhomUserInfo.Tracking_Code>",
	    Role_Job_Code: "<$client.tForWhomUserInfo.Job_Template_Code>",
	    Role_Job_Description: "<$client.tForWhomUserInfo.Job_Template_Name>",
	    FLSA_Status: "<$client.tForWhomUserInfo.FLSA_Status>",
	    Rate_of_Pay: "<$client.tForWhomUserInfo.Rate_Pay>",
	    Standard_Weekly_Hours: "<$client.tForWhomUserInfo.Standard_Hours>",
	    Base_Salary: "<$client.tForWhomUserInfo.Salary_Base>",
	    Localization_Country: "<$client.tForWhomUserInfo.Localization_Country>",
	    Revision_Supersedes: "<$client.tForWhomUserInfo.Revision_Supersedes>",

	    Sign_On: "<$client.tForWhomUserInfo.SignOn>",
	    Sign_On_Year: "<$client.tForWhomUserInfo.SignOn_Yr>",
	    Sign_On_Amount: "<$client.tForWhomUserInfo.SignOn_Amt>",
	    Sign_On_Currency: "<$client.tForWhomUserInfo.SignOn_Amt_Currency>",
	    Sign_On_EOP: "<$client.tForWhomUserInfo.SignOn_EOP>",
	    Sign_On_EOP_Year: "<$client.tForWhomUserInfo.SignOn_EOP_Yr>",
	    Sign_On_EOP_Amount: "<$client.tForWhomUserInfo.SignOn_EOP_Amt>",
	    Sign_On_EOP_Currency: "<$client.tForWhomUserInfo.SignOn_EOP_Currency>",

	    Sign_On_DCCP: "<$client.tForWhomUserInfo.SignOn_DCCP>",
	    Sign_On_DCCP_Currency: "<$client.tForWhomUserInfo.SignOn_DCCP_Currency>",
	    Sign_On_DCCP_Amount: "<$client.tForWhomUserInfo.SignOn_DCCP_Amt>",

	    Sign_On_Lieu_of_Bonus: "<$client.tForWhomUserInfo.SignOnInLieuBon>",
	    SOILOB_Year: "<$client.tForWhomUserInfo.SignOnInLieuBon_Yr>",
	    SOILOB_Amount: "<$client.tForWhomUserInfo.SignOnInLieuBon_Amt>",
	    SOILOB_DCCP_Mix: "<$client.tForWhomUserInfo.SignOnInLieuBon_EOPDCCPMix>",
	    SOILOB_Amount_2: "<$client.tForWhomUserInfo.SignOnInLieuBon_Amt2>",
	    SOILOB_Amount_3: "<$client.tForWhomUserInfo.SignOnInLieuBon_Amt3>",

	    Supplemental_Cash: "<$client.tForWhomUserInfo.SuppCash>",
	    Supplemental_Cash_Amount: "<$client.tForWhomUserInfo.SuppCash_Amount>",

	    Employee_Transition_Program: "<$client.tForWhomUserInfo.Empl_Trns_Prg>",
	    ETP_Amount: "<$client.tForWhomUserInfo.Empl_Trns_Prg_Amt>",
	    ETP_Term: "<$client.tForWhomUserInfo.Empl_Trns_Prg_Term>",

	    FA_Paid_Sign_On: "<$client.tForWhomUserInfo.FA_Paid_Sign-On>",
	    FA_Sign_On_Year: "<$client.tForWhomUserInfo.SignOn_FA_PD_Yr>",
	    FA_Sign_On_Amount: "<$client.tForWhomUserInfo.SignOn_FA_PD_Amt>",
	    FA_Sign_On_Currency: "<$client.tForWhomUserInfo.SignOn_FA_PD_Currency>",
	    FA_Name: "<$client.tForWhomUserInfo.SignOn_FA_PD_Name>",

	    Buy_Out_Stock_Options: "<$client.tForWhomUserInfo.Buy_Out_Stock_Options>",
	    Buy_Out_Amount: "<$client.tForWhomUserInfo.BuyOut_Options_Amount>",
	    Buy_Out_Sign_On_Year: "<$client.tForWhomUserInfo.BuyOut_Options_Year>",

	    Supplemental_Comp_1: "<$client.tForWhomUserInfo.Supp_Comp_1>",
	    Supp_Comp_Amount_1: "<$client.tForWhomUserInfo.Supp_Comp_1_Amt>",
	    Supp_Comp_Gross_Net_1: "<$client.tForWhomUserInfo.Supp_Comp_1_GrossNet>",
	    Supp_Comp_FA_Name_1: "<$client.tForWhomUserInfo.Supp_Comp_1_FA_Name>",
	    Supp_Comp_FA_ID_1: "<$client.tForWhomUserInfo.Supp_Comp_1_FA_ID>",
	    Supp_Comp_FA_GPN_1: "<$client.tForWhomUserInfo.Supp_Comp_1_FA_GPN>",
	    Supplemental_Comp_2: "<$client.tForWhomUserInfo.Supp_Comp_2>",
	    Supp_Comp_Amount_2: "<$client.tForWhomUserInfo.Supp_Comp_2_Amt>",
	    Supp_Comp_Gross_Net_2: "<$client.tForWhomUserInfo.Supp_Comp_2_GrossNet>",
	    Supp_Comp_FA_Name_2: "<$client.tForWhomUserInfo.Supp_Comp_2_FA_Name>",
	    Supp_Comp_FA_ID_2: "<$client.tForWhomUserInfo.Supp_Comp_2_FA_ID>",
	    Supp_Comp_FA_GPN_2: "<$client.tForWhomUserInfo.Supp_Comp_2_FA_GPN>",
	    Supplemental_Comp_3: "<$client.tForWhomUserInfo.Supp_Comp_3>",
	    Supp_Comp_Amount_3: "<$client.tForWhomUserInfo.Supp_Comp_3_Amt>",
	    Supp_Comp_Gross_Net_3: "<$client.tForWhomUserInfo.Supp_Comp_3_GrossNet>",
	    Supp_Comp_FA_Name_3: "<$client.tForWhomUserInfo.Supp_Comp_3_FA_Name>",
	    Supp_Comp_FA_ID_3: "<$client.tForWhomUserInfo.Supp_Comp_3_FA_ID>",
	    Supp_Comp_FA_GPN_3: "<$client.tForWhomUserInfo.Supp_Comp_3_FA_GPN>",
	    Supplemental_Comp_4: "<$client.tForWhomUserInfo.Supp_Comp_4>",
	    Supp_Comp_Amount_4: "<$client.tForWhomUserInfo.Supp_Comp_4_Amt>",
	    Supp_Comp_Gross_Net_4: "<$client.tForWhomUserInfo.Supp_Comp_4_GrossNet>",
	    Supp_Comp_FA_Name_4: "<$client.tForWhomUserInfo.Supp_Comp_4_FA_Name>",
	    Supp_Comp_FA_ID_4: "<$client.tForWhomUserInfo.Supp_Comp_4_FA_ID>",
	    Supp_Comp_FA_GPN_4: "<$client.tForWhomUserInfo.Supp_Comp_4_FA_GPN>",
	    Supplemental_Comp_5: "<$client.tForWhomUserInfo.Supp_Comp_5>",
	    Supp_Comp_Amount_5: "<$client.tForWhomUserInfo.Supp_Comp_5_Amt>",
	    Supp_Comp_Gross_Net_5: "<$client.tForWhomUserInfo.Supp_Comp_5_GrossNet>",
	    Supp_Comp_FA_Name_5: "<$client.tForWhomUserInfo.Supp_Comp_5_FA_Name>",
	    Supp_Comp_FA_ID_5: "<$client.tForWhomUserInfo.Supp_Comp_5_FA_ID>",
	    Supp_Comp_FA_GPN_5: "<$client.tForWhomUserInfo.Supp_Comp_5_FA_GPN>",
	    Supplemental_Comp_6: "<$client.tForWhomUserInfo.Supp_Comp_6>",
	    Supp_Comp_Amount_6: "<$client.tForWhomUserInfo.Supp_Comp_6_Amt>",
	    Supp_Comp_Gross_Net_6: "<$client.tForWhomUserInfo.Supp_Comp_6_GrossNet>",
	    Supp_Comp_FA_Name_6: "<$client.tForWhomUserInfo.Supp_Comp_6_FA_Name>",
	    Supp_Comp_FA_ID_6: "<$client.tForWhomUserInfo.Supp_Comp_6_FA_ID>",
	    Supp_Comp_FA_GPN_6: "<$client.tForWhomUserInfo.Supp_Comp_6_FA_GPN>",

	    NBSA: "<$client.tForWhomUserInfo.NBSA>",
	    NBSA_Type: "<$client.tForWhomUserInfo.NBSA_Type>",
	    Firm_Pay_Amount: "<$client.tForWhomUserInfo.NBSA_Firm_Pay_Amt>",

	    FA_Paid_Amount_1: "<$client.tForWhomUserInfo.NBSA_FA_Paid_Amt_1>",
	    FA_Name_1: "<$client.tForWhomUserInfo.NBSA_FA_Name_1>",
	    FA_ID_1: "<$client.tForWhomUserInfo.NBSA_FA_ID_1>",
	    FA_GPN_1: "<$client.tForWhomUserInfo.NBSA_FA_GPN_1>",
	    FA_Paid_Amount_2: "<$client.tForWhomUserInfo.NBSA_FA_Paid_Amt_2>",
	    FA_Name_2: "<$client.tForWhomUserInfo.NBSA_FA_Name_2>",
	    FA_ID_2: "<$client.tForWhomUserInfo.NBSA_FA_ID_2>",
	    FA_GPN_2: "<$client.tForWhomUserInfo.NBSA_FA_GPN_2>",
	    FA_Paid_Amount_3: "<$client.tForWhomUserInfo.NBSA_FA_Paid_Amt_3>",
	    FA_Name_3: "<$client.tForWhomUserInfo.NBSA_FA_Name_3>",
	    FA_ID_3: "<$client.tForWhomUserInfo.NBSA_FA_ID_3>",
	    FA_GPN_3: "<$client.tForWhomUserInfo.NBSA_FA_GPN_3>",
	    FA_Paid_Amount_4: "<$client.tForWhomUserInfo.NBSA_FA_Paid_Amt_4>",
	    FA_Name_4: "<$client.tForWhomUserInfo.NBSA_FA_Name_4>",
	    FA_ID_4: "<$client.tForWhomUserInfo.NBSA_FA_ID_4>",
	    FA_GPN_4: "<$client.tForWhomUserInfo.NBSA_FA_GPN_4>",
	    FA_Paid_Amount_5: "<$client.tForWhomUserInfo.NBSA_FA_Paid_Amt_5>",
	    FA_Name_5: "<$client.tForWhomUserInfo.NBSA_FA_Name_5>",
	    FA_ID_5: "<$client.tForWhomUserInfo.NBSA_FA_ID_5>",
	    FA_GPN_5: "<$client.tForWhomUserInfo.NBSA_FA_GPN_5>",
	    FA_Paid_Amount_6: "<$client.tForWhomUserInfo.NBSA_FA_Paid_Amt_6>",
	    FA_Name_6: "<$client.tForWhomUserInfo.NBSA_FA_Name_6>",
	    FA_ID_6: "<$client.tForWhomUserInfo.NBSA_FA_ID_6>",
	    FA_GPN_6: "<$client.tForWhomUserInfo.NBSA_FA_GPN_6>",

	    Total_Sal_FA: "<$client.tForWhomUserInfo.Salary_FA_plus_FirmPD>",
	    Total_Percent_Firm_Paid: "<$client.tForWhomUserInfo.Total_Per_FirmPD>",
	    Total_Percent_FA_Paid: "<$client.tForWhomUserInfo.Total_Per_FAPD>",

	    Transfer_Benefit_Relocation: "<$client.tForWhomUserInfo.TrnsBenfReloc>",
	    Relocation_Type: "<$client.tForWhomUserInfo.RelocationType>",
	    Relocation_From: "<$client.tForWhomUserInfo.Relocation_From>",
	    Relocation_To: "<$client.tForWhomUserInfo.Relocation_To>",
	    Type_of_Lump_Sum: "<$client.tForWhomUserInfo.TypeOfLumpSum>",
	    Lump_Sum_Payment_Amt: "<$client.tForWhomUserInfo.LumpSumPmtAmt>",
	    Core_Relo_Benefits: "<$client.tForWhomUserInfo.Core_Relo_Benefits>",
	    Overseas_Relo_Type: "<$client.tForWhomUserInfo.Overseas_Relo_Type>",
	    Max_Reimbursement_Amt: "<$client.tForWhomUserInfo.WMA_Max_Reimb_Amt>",
	    Temporary_housing_max_days: "<$client.tForWhomUserInfo.Temp_Housing_Max_Days>",
	    Household_storage_goods_days: "<$client.tForWhomUserInfo.Household_Storage_Goods_days>",
	    Days_of_Temp_Housing: "<$client.tForWhomUserInfo.Days_Temp_Housing>",
	    Duplicate_Housing: "<$client.tForWhomUserInfo.Duplicate_Housing>",
	    Household_Good_Shipment: "<$client.tForWhomUserInfo.Household_Goods_Ship>",
	    Final_Move_Airfare_Type: "<$client.tForWhomUserInfo.Final_Move_Airfare_Type>",
	    Final_Move_Airfare_For: "<$client.tForWhomUserInfo.Final_Move_Airfare_For>",
	    Tax_Prep_Assist_1st_Year: "<$client.tForWhomUserInfo.Tax_Prep_Assis_1stYr>",
	    Apartment_Finding_Assist: "<$client.tForWhomUserInfo.Apartment_Finding_Assist>",
	    BVO_Home_Sale_Program: "<$client.tForWhomUserInfo.BVO_Home_Sale_Program>",
	    Duplicate_housing: "<$client.tForWhomUserInfo.Duplicate_Housing_Coverage_Days>",
	    Home_Purchase: "<$client.tForWhomUserInfo.Home_Purchase_Closing_Assist>",
	    Lease_Cancellation: "<$client.tForWhomUserInfo.Lease_Cancellation>",
	    Marketing_Assistance: "<$client.tForWhomUserInfo.Marketing_Assistance_Home_selling>",
	    Miscellaneous_Expense: "<$client.tForWhomUserInfo.Misc_Exp_Allowance>",
	    Allowance_Expense_Amount: "<$client.tForWhomUserInfo.Expense_Amt>",
	    Rental_Finder_Fee: "<$client.tForWhomUserInfo.Rental_Finder_Fee_Cov>",
	    Return_Trips: "<$client.tForWhomUserInfo.Return_Trip_Frmr_Resid>",
	    Spouse_Career_Relo_Assist: "<$client.tForWhomUserInfo.Spouse_Prtner_Career_Relo_Assist>",
	    Pet_Shipment_Reimb: "<$client.tForWhomUserInfo.PetShip_Reimbursement>",
	    Home_Finding_Trip: "<$client.tForWhomUserInfo.Home_Finding_Trip>",

	    Buy_Out_Stock_Apprec: "<$client.tForWhomUserInfo.BuyOut_Stk_Apr>",
	    Buy_Out_Stock_Apprec_Amount: "<$client.tForWhomUserInfo.BuyOut_Stk_Apr_Amt>",
	    Buy_Out_Stock_Apprec_Currency: "<$client.tForWhomUserInfo.Buy_Out_Stock_Apr_Curr>",
	    Buy_Out_Stock_Apprec_Year: "<$client.tForWhomUserInfo.BuyOut_Stk_Apr_Year>",
	    Buy_Out_Stock_Apprec_Comments: "<$client.tForWhomUserInfo.BuyOut_Stk_Aprc_Rights_Comments>",

	    Sign_On_Stock_Apprec: "<$client.tForWhomUserInfo.SignOn_Stock_Apr>",
	    Sign_On_Stock_Number_Options: "<$client.tForWhomUserInfo.SignOn_Stock_Apr_Rights_Nbr_Opts>",
	    Sign_On_Stock_Apprec_Year: "<$client.tForWhomUserInfo.SignOn_Stk_Aprc_Year>",

	    Special_Agreement: "<$client.tForWhomUserInfo.Special_Agreement>",
	    Special_Agreement_Wording: "<$client.tForWhomUserInfo.Special_Agreement_Wording>",
	    Additional_Vacation_Days: "<$client.tForWhomUserInfo.Addl_Vacation>",
	    Number_of_Vacation_Days: "<$client.tForWhomUserInfo.Vacation_Days>",
	    Special_Candidate_Instructions: "<$client.tForWhomUserInfo.Spec_Candidate_Instructions>",

	    License_Requirement: "<$client.tForWhomUserInfo.License_requirement>",
	    Licenses_series_transferring: "<$client.tForWhomUserInfo.License_Transfer>",
	    License_Transfer_Completed_by: "<$client.tForWhomUserInfo.License_Transfer_completed_by>",
	    NFA_Phase_1_Class_Start: "<$client.tForWhomUserInfo.NFA_Class_Start_Phase1>",
	    NFA_Phase_2_Class_Start: "<$client.tForWhomUserInfo.NFA_Class_Start_Phase2>",
	    Phase_I_Training_Weeks: "<$client.tForWhomUserInfo.Training_Weeks>",
	    NFA_Exempt_Monthly_Salary: "<$client.tForWhomUserInfo.NFA_Exempt_Monthly_Salary>",
	    Non_Solicit_Months: "<$client.tForWhomUserInfo.Non_Solicit_Months>",
	    Notice_Period: "<$client.tForWhomUserInfo.Notice_Period>",
	    iHIRE: "<$client.tForWhomUserInfo.iHire>",
	    iHIRE_Referring_Employee: "<$client.tForWhomUserInfo.iHIRE_referring_employee>",
	    UserType: "<$client.env.eval((url.forWhom!=account.userguid)?'Admin':'New Hire')>",

			if_has_notices_text: <$client.env.eval((client.tForWhomUserInfo.Notices_Text != null) ? 'true' : 'false')>,
			if_associate_director_non_officer_not_wma: ('<$client.tForWhomUserInfo.Rank_desc>' == 'Associate Director' || '<$client.tForWhomUserInfo.Rank_desc>' == 'Non-Officer') && ('<$client.tForWhomUserInfo.Division>' != 'WMA' || '<$client.tForWhomUserInfo.Division>' != 'Wealth Management Americas') ? true : false,
			if_guarantee_year_1: <$client.env.eval(client.tForWhomUserInfo.GTE_Year1 != null ? 'true' : 'false')>,
			if_managing_or_executive_director: ('<$client.tForWhomUserInfo.Rank_desc>' == 'Managing Director' || '<$client.tForWhomUserInfo.Rank_desc>' == 'Executive Director') ? true : false,
			if_director : ('<$client.tForWhomUserInfo.Rank_desc>' == 'Director') ? true : false,
			if_ib_or_wma_or_gam_and_not_director_executive_managing_director:  (('<$client.tForWhomUserInfo.Division>' == 'IB' || '<$client.tForWhomUserInfo.Division>' == 'Investment Bank' || '<$client.tForWhomUserInfo.Division>' == 'WMA' || '<$client.tForWhomUserInfo.Division>' == 'Wealth Management Americas') || (('<$client.tForWhomUserInfo.Division>' == 'GAM' || '<$client.tForWhomUserInfo.Division>' == 'Asset Management') && ("<$client.tForWhomUserInfo.Legal_Entity>" != "UBS O'Connor" &&  '<$client.tForWhomUserInfo.Rank_desc>' != 'Director' && '<$client.tForWhomUserInfo.Rank_desc>' != 'Executive Director' && '<$client.tForWhomUserInfo.Rank_desc>' != 'Managing Director')))? true : false,

			if_gam_and_director_executive_managing_director: (("<$client.tForWhomUserInfo.Legal_Entity>" == "UBS O'Connor" || "<$client.tForWhomUserInfo.Legal_Entity>" == "UBS O’Connor") && ('<$client.tForWhomUserInfo.Division>' == 'GAM' || '<$client.tForWhomUserInfo.Division>' == 'Asset Management') && ('<$client.tForWhomUserInfo.Rank_desc>' == 'Director' || '<$client.tForWhomUserInfo.Rank_desc>' == 'Executive Director' || '<$client.tForWhomUserInfo.Rank_desc>' == 'Managing Director')) ? true : false,

			if_license_requirement: (('<$client.tEventCategories_25.Code>' == 'No' || '<$client.tEventCategories_25.Code>' == 'Not Registered') && ('<$client.env.eval(client.tForWhomUserInfo.License_requirement != null ? 1 : 0)>' == '1')) ? true : false,

			if_license_requirement_only: <$client.env.eval((client.tForWhomUserInfo.License_requirement != null) ? 'true' : 'false')>,
			if_license_requirement_null: (('<$client.tEventCategories_25.Code>' == 'No' || '<$client.tEventCategories_25.Code>' == 'Not Registered') && ('<$client.env.eval(client.tForWhomUserInfo.License_requirement == null ? 1 : 0)>' == '1')) ? true : false,

      if_licensing_required: (('<$client.tEventCategories_25.Code>' == 'Yes' || '<$client.tEventCategories_25.Code>' == 'Registered') && ('<$client.env.eval(client.tForWhomUserInfo.License_requirement != null ? 1 : 0)>' == '1')) ? true : false,

			if_not_wma: ("<$client.tForWhomUserInfo.Division>" != "WMA" || "<$client.tForWhomUserInfo.Division>" != "Wealth Management Americas") ? true : false,
			if_license_contains_2706_2707: /2706|2707/.test("<$client.tForWhomUserInfo.License_requirement>"),
			if_equity_research: <$client.env.eval(client.tForWhomUserInfo.Equity_Research != null ? 'true' : 'false')>,
			if_ccs_and_managing_director: (('<$client.tForWhomUserInfo.Area>' == 'CCS') && '<$client.tForWhomUserInfo.Rank_desc>' == 'Managing Director') ? 90 : 60,
			if_flsa_exempt: ('<$client.tForWhomUserInfo.FLSA_Status>' == 'Exempt') ? 'base salary' : '',
			if_flsa_non_exempt: ('<$client.tForWhomUserInfo.FLSA_Status>' == 'Non-Exempt') ? 'base compensation' : ''
	};

  $(document).ready(function() {
    $.getJSON('<$link;/main/RedCarpet/FormTemplates/Orientation_Instructions_New_Test/Orientation_Instructions_New_Test.json>', function(data) {
      $('#orientation-location').val(data.locations["<$client.tEventCategories_26.Code>"])
    })
  });

function sumOf(arr) {
  return (arr.length === 0) ? 0 : arr[0] + sumOf(arr.slice(1));
}

function isRequiredPercentFull(sVal,sName,sID) {
  var isValid = true;
  if ('<$client.env.serversidevalidation>'=='1') return true;
  var deps = document
                .getElementById(sID)
                .getAttribute('data-percent-requires')
                .toString()
                .replace(/\s/g, '')
                .split(',');
  var percentages = [];
  for (i = 0; i < deps.length; i++) {
    var percVal = $(deps[i]).val().length ? $(deps[i]).val() : 0;
    percentages.push(parseInt(percVal));
  }
  if (sumOf(percentages) < 100) {
    console.log(sumOf(percentages));
    return eFormRequiredField(sVal,sName,sID);
  }
  return isValid;
}

function isFullPercentOnly(sVal,sName,sID) {
  var isValid = true;
  if ('<$client.env.serversidevalidation>'=='1') return true;
  var total = 0;
  $.each($('[data-percentage]'), function(k, v) {
    var percent = $(v).val().length ? $(v).val() : 0;
    total += parseInt(percent);
  });
  if (total < 100) {
    AddError(sID, 'Error in validation, percentages must add up to 100%', '');
    isValid = false;
  }
  if (total > 100) {
    AddError(sID, 'Error in validation, percentages must not exceed 100%', '');
    isValid = false;
  }
  return isValid;
}

$('[data-checkbox-group]').on('click', function() {
  var groupId = $(this).data('checkbox-group');
  $('[data-checkbox-group="' + groupId + '"]').prop('checked', false);
  $(this).prop('checked', true);
});

$(function() {
  if ($('#lv1').val().length < 1 || $('#lv1').val() == '<$client.env.eval(client.account.loginID)>') {
    $('[data-target-level="#lv2"], [data-target-level="#lv3"], [data-target-level="#lv4"]').disableField();
    $('[data-date-id="#lv2"], [data-date-id="#lv3"], [data-date-id="#lv4"]').disableField().disableDate();
  } else if ($('#lv2').val().length < 1 && $('#lv3').val().length < 1) {
    $('[data-target-level="#lv3"]').disableField();
    $('[data-date-id="#lv3"]').disableField().disableDate();
  } else {
    $('[data-target-level]').each(function(k, v) {
      if ($($(v).data('target-level')).val().length < 1) {
        return true;
      }
      if ($($(v).data('target-level')).val() != '<$client.env.eval(client.account.loginID)>') {
        $(v).disableField();
        $('[data-date-id="' + $(v).data('target-level') + '"]').disableField().disableDate();
      }
      if (<$client.env.eval((client.role.HR)?1:0)> == 1) {
        $('[data-date-id="#lv3"],[data-date-id="#lv2"],[data-date-id="#lv1"]').disableField().disableDate();
      }
    });
  }
});

function isNumeric(sVal,sName,sID){
  var isValid = true;
  if('<$client.env.serversidevalidation>'=='1'){ return isValid; }

  var reg = /^[0-9]+$/;
  if (!sVal.match(reg) && sVal.length > 1) {
    AddError(sID, 'Error in validation, only numbers are allowed in', '');
    isValid = false;
  }
  return isValid;
}

function isRequiredNumeric(sVal,sName,sID){
  var isValid = true;
  if ('<$client.env.serversidevalidation>'=='1'){ return isValid; }
  if (sVal.length < 1) {
    return eFormRequiredField(sVal,sName,sID);
  }
  if (!isNumeric(sVal,sName,sID)) {
    isValid = false;
  }
  return isValid;
}

function makeTimeStamp(target) {
  var targetElem = document.getElementsByClassName(target);
  var i = 0;
  var curDate = new Date();
  for (i; i < targetElem.length; i++) {
    var year = curDate.getFullYear(),
        month = curDate.getMonth() + 1,
        day = curDate.getDate();

    targetElem[i].value =  year + '/' + month + '/' + day;
  }
}

function isRequireOne(sVal, sName, sField) {
  var isValid = true;
  if ('<$client.env.serversidevalidation>'=='1'){ return isValid;}
  if (!$('[data-checkbox-group]:checked').length) {
    return eFormRequiredField(sVal, sName, sField);
  }
}

function PromptRole() {
  var isAuthorized = app.alert ("Are you a member of a Payroll or Support Team?", 2, 2, "Payroll Team Privilage");

  if (isAuthorized != 4) {
    HideSSNDOB();
    return true;
  }
  PromptAccess();
}

function HideSSNDOB() {
  getField("a17_dateOfBirth").display = display.hidden;
  getField("a15_gender").display = display.hidden;
  getField("a14_ssn").display = display.hidden;
}

function PromptAccess() {
  var response = app.response({
      cQuestion: "Please enter the assigned Password.",
      cTitle: "Enter password",
      bPassword: true,
      cLabel: "Password"
  });


  var paramDob = getField("a17_dateOfBirth").value;
  var paramGender = getField("a15_gender").value;
  var paramSsn = getField("a14_ssn").value;


  switch (response) {
    case "PayrollTeam": // Your password goes here
        getField("a17_dateOfBirth").display = display.visible;
        getField("a17_dateOfBirth").value = paramDob +" ";

        getField("a15_gender").display = display.visible;
        getField("a15_gender").value = paramGender +" ";

        getField("a14_ssn").display = display.visible;
        getField("a14_ssn").value = paramSsn +" ";

        break;
    case null: // Your password goes here
      HideSSNDOB();
      break;
    default:
      HideSSNDOB();
      app.alert("Incorrect password.", 1);
      break;
  }
}

function hasDependency(sVal, sName, sID) {
  var isValid = true;
  if('<$client.env.serversidevalidation>' == '1'){return isValid;}

  var field = $(document.getElementsByName(sName)[0]).parent().find('[data-depends]');

  if ($($(field).data('depends')).val().length > 0) {
    isValid = false;
    if ($(field).hasClass('dateField')) {
      return eFormRequiredDate(sVal, sName, sID);
    }
    return eFormRequiredField(sVal, sName, sID);
  }
  return isValid;
}

$(document).ready(function() {
  function disableDependents(elem, disable) {
    elem.prop('disabled', disable);
  }
  function checkDependents(elem) {
    var disable = true;
    if (elem.val().length > 0) {
      disable = false;
    } else {
      disable = true;
    }
    var dependent = $('[data-depends="' + '#' + elem.attr('id') + '"]');
    if (dependent.hasClass('dateField')) {
      disableDependents(dependent.parent().find('input'), disable);
    }
    disableDependents(dependent, disable);
  }
  $('#Spouse_Name').on('keyup blur paste change', function() {
    checkDependents($(this));
  });
  setTimeout(function() {
    checkDependents($('#Spouse_Name'));
  }, 500);
});
