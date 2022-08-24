function ABI_eFormAlpha(sValue, sName, sField) {
  "use strict";
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (sValue.length < 1) {
    return true;
  }
  if (!/^[a-zA-Z ]+$/.test(sValue)) {
    AddError(sField, 'Error in validation, only alphabets are allowed in', '');
    return false;
  }
  return false;
}

function ABI_eFormAlphaNumeric(sValue, sName, sField) {
  "use strict";
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (sValue.length < 1) {
    return true;
  }
  if (!/^[a-zA-Z0-9]+$/.test(sValue)) {
    AddError(sField, 'Error in validation, only alphanumeric characters are allowed in', '');
    return false;
  }
  return false;
}

function ABI_eFormPhoneNumberFormat(sValue, sName, sField) {
  "use strict";
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (sValue.length < 1) {
    return true;
  }
  if (!/^[0-9\-\+]{10,13}$/.test(sValue)) {
    AddError(sField, 'Error in validation, only 10 to 13 digits and symbols (+,-) are allowed in', '');
    return false;
  }
  return false;
}

function ABI_eFormSSNFormat(sValue, sName, sField) {
  "use strict";
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (sValue.length < 1) {
    return true;
  }
  // validate ssn format with hyphens
  if (/^[0-9]{3}-[0-9]{2}-[0-9]{4}$/.test(sValue)) {
    return true;
  }
  // validate ssn format with no hyphens
  if (/^[0-9]{9}$/.test(sValue)) {
    return true;
  }
  AddError(sField, 'Error in validation, only 9 or 11 digits with dashes eg.123456789 or 111-11-1111 are allowed in', '');
  return false;
}

function ABI_DOB(sValue, sName, sField, sFormat) {
  "use strict";
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (sValue.length < 1) {
    return true;
  }
  var today = new Date();
  var current_year = today.getFullYear();
  var current_month = today.getMonth() + 1;
  var current_day = today.getDate();
  var current_date = new Date(current_year + "-" + current_month + "-" + current_day);
  var dob = new Date(sValue);
  var birth_year = dob.getFullYear();
  var birth_month = dob.getMonth() + 1;
  var birth_day = dob.getDate();
  var birth_date = new Date(birth_year + "-" + birth_month + "-" + birth_day);
  if (birth_date > current_date) {
    AddError(sField, 'Error in validation, future dates are not allowed in', '');
    return false;
  }
  return false;
}

function ABI_eFormEmailFormat(sValue, sName, sField) {
  "use strict";
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  if (sValue.length < 1) {
    return true;
  }
  if (!/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.(([0-9]{1,3})|([a-zA-Z]{2,3})|(aero|coop|info|museum|name))$/.test(sValue)) {
    AddError(sField, 'Error in validation, only valid email addresses are allowed in', '');
    return false;
  }
  return false;
}

function ABI_Get_Date_Difference (date1, date2) {
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function ABI_Validate_Gaps_on_Start_and_End_Dates(sValue, sName, sField, sFormat) {
  if ('<$client.env.serversidevalidation>' == '1') {return true;}
  var gaps = 0;
  if ($("[name$='D007_From2_display']").val().length) {
    if (ABI_Get_Date_Difference($("[name$='D008_To1_display']").datepicker("getDate"), $("[name$='D007_From2_display']").datepicker("getDate")) >= 1) {
      gaps++;
    }
  }
  if ($("[name$='D007_From3_display']").val().length) {
    if (ABI_Get_Date_Difference($("[name$='D008_To2_display']").datepicker("getDate"), $("[name$='D007_From3_display']").datepicker("getDate")) >= 1) {
      gaps++;
    }
  }
  if ($("[name$='D007_From4_display']").val().length) {
    if (ABI_Get_Date_Difference($("[name$='D008_To3_display']").datepicker("getDate"), $("[name$='D007_From4_display']").datepicker("getDate")) >= 1) {
      gaps++;
    }
  }
  if ($("[name$='D007_From5_display']").val().length) {
    if (ABI_Get_Date_Difference($("[name$='D008_To4_display']").datepicker("getDate"), $("[name$='D007_From5_display']").datepicker("getDate")) >= 1) {
      gaps++;
    }
  }
  if ($("[name$='D007_From6_display']").val().length) {
    if (ABI_Get_Date_Difference($("[name$='D008_To5_display']").datepicker("getDate"), $("[name$='D007_From6_display']").datepicker("getDate")) >= 1) {
      gaps++;
    }
  }
  if ($("[name$='D007_From7_display']").val().length) {
    if (ABI_Get_Date_Difference($("[name$='D008_To6_display']").datepicker("getDate"), $("[name$='D007_From7_display']").datepicker("getDate")) >= 1) {
      gaps++;
    }
  }
  if (gaps > 0) {
    AddError('', 'Error in validation, Gaps are observed in your address details, Please, ensure that there is no gap between addresses', '');
    return false;
  }
}

function ABI_Validate_Fields (sValue, sName, sField, sFormat) {
  if ("<$client.env.serversidevalidation>" == "1") { return true; }
  switch (sField) {
    case "A001_First_Name":
    case "A003_Last_Name":
    case "A012_Emergency_Contact_First_Name":
    case "A013_Emergency_Contact_Last_Name":
    case "A020_State1":
    case "A020_State2":
    case "A021_Country1":
    case "A021_Country2":
      if (eFormRequiredField(sValue, sName, sField) == false) { return false; }
      return ABI_eFormAlpha(sValue, sName, sField);
      break;
    case "A002_Middle_Name":
    case "A007_Father_Name":
    case "A010_Alias_Middle_Name":
      return ABI_eFormAlpha(sValue, sName, sField);
      break;
    case "A004_Home_Phone_Number":
    case "A005_Mobile_Number":
    case "A016_Emergency_Contact_Mobile_Phone_Number":
    case "A017_Emergency_Contact_Home_Phone_Number":
    case "A022_Phone_Number1":
    case "A022_Phone_Number2":
      if (eFormRequiredField(sValue, sName, sField) == false) { return false; }
      return ABI_eFormPhoneNumberFormat(sValue, sName, sField);
      break;
    case "A006_Date_of_Birth":
      if (eFormRequiredDate(sValue, sName, sField, sFormat) == false) { return false; }
      return ABI_DOB(sValue, sName, sField);
      break;
    case "A007_SSN":
      if (eFormRequiredField(sValue, sName, sField, sFormat) == false) { return false; }
      return ABI_eFormSSNFormat(sValue, sName, sField);
      break;
    case "A009_Alias_First_Name":
    case "A011_Alias_Last_Name":
      if ($("[name$='A008_Alias'][value='Yes']:checked").length) {
        if (eFormRequiredField(sValue, sName, sField) == false) { return false; }
        return ABI_eFormAlpha(sValue, sName, sField);
      }
      else {
        return ABI_eFormAlpha(sValue, sName, sField);
      }
      break;
    case "A014_Emergency_Contact_Relationship":
    case "A018_Name_Title1":
    case "A018_Name_Title2":
    case "A019_Company1":
    case "A019_Company2":
    case "C000_Work_Experience":
      return eFormRequiredField(sValue, sName, sField);
      break;
    case "C006_Manager_Phone_Number1":
    case "C006_Manager_Phone_Number2":
    case "C006_Manager_Phone_Number3":
    case "C006_Manager_Phone_Number4":
    case "C006_Manager_Phone_Number5":
    case "C006_Manager_Phone_Number6":
    case "C006_Manager_Phone_Number7":
      return ABI_eFormPhoneNumberFormat(sValue, sName, sField);
      break;
    case "A015_Emergency_Contact_Personal_Email":
    case "A023_Email1":
    case "A023_Email2":
      if (eFormRequiredField(sValue, sName, sField) == false) { return false; }
      return ABI_eFormEmailFormat(sValue, sName, sField);
      break;
    case "B001_Degree_Attained1":
    case "B001_Degree_Attained2":
    case "B001_Degree_Attained3":
    case "B002_Institute_Name1":
    case "B002_Institute_Name2":
    case "B002_Institute_Name3":
    case "B003_Address1":
    case "B003_Address2":
    case "B003_Address3":
    case "B005_Name_Enrolled1":
    case "B005_Name_Enrolled2":
    case "B005_Name_Enrolled3":
    case "D001_Address_Line_11":
    case "D001_Address_Line_12":
    case "D001_Address_Line_13":
    case "D001_Address_Line_14":
    case "D001_Address_Line_15":
    case "D001_Address_Line_16":
    case "D001_Address_Line_17":
    case "D003_City1":
    case "D003_City2":
    case "D003_City3":
    case "D003_City4":
    case "D003_City5":
    case "D003_City6":
    case "D003_City7":
    case "D006_Postal_Code1":
    case "D006_Postal_Code2":
    case "D006_Postal_Code3":
    case "D006_Postal_Code4":
    case "D006_Postal_Code5":
    case "D006_Postal_Code6":
    case "D006_Postal_Code7":
      if ($("[name$='" + sField + "']").is(":visible")){
        return eFormRequiredField(sValue, sName, sField);
      }
      break;
    case "B003_Major1":
    case "B003_Major2":
    case "B003_Major3":
    case "D004_State1":
    case "D004_State2":
    case "D004_State3":
    case "D004_State4":
    case "D004_State5":
    case "D004_State6":
    case "D004_State7":
    case "D005_Country1":
    case "D005_Country2":
    case "D005_Country3":
    case "D005_Country4":
    case "D005_Country5":
    case "D005_Country6":
    case "D005_Country7":
      if ($("[name$='" + sField + "']").is(":visible")){
        if (eFormRequiredField(sValue, sName, sField) == false) { return false; }
        return ABI_eFormAlpha(sValue, sName, sField);
      }
      break;
    case "B004_Start_Date1":
    case "B004_Start_Date2":
    case "B004_Start_Date3":
    case "B004_Till_Date1":
    case "B004_Till_Date2":
    case "B004_Till_Date3":
    case "B006_Graduation_Date1":
    case "B006_Graduation_Date2":
    case "B006_Graduation_Date3":
    case "D007_From1":
    case "D007_From2":
    case "D007_From3":
    case "D007_From4":
    case "D007_From5":
    case "D007_From6":
    case "D007_From7":
    case "D008_To1":
    case "D008_To2":
    case "D008_To3":
    case "D008_To4":
    case "D008_To5":
    case "D008_To6":
    case "D008_To7":
      if ($("[name$='" + sField + "_display']").is(":visible")){
        if (eFormRequiredDate(sValue, sName, sField, sFormat) == false) { return false; }
        // accept only past and current date
        var today = new Date();
        if ($("[name$='." + sField + "_display']").datepicker('getDate') && $("[name$='." + sField + "_display']").datepicker('getDate').setHours(0, 0, 0) > today.setHours(0, 0, 0)) {
          AddError(sField, 'Error in validation, only past and current dates are accepted in', '');
          return false;
        }
        switch (sField) {
          case "B004_Start_Date1":
            if ($("[name$='B006_Graduation_Date1_display']").val().length && $("[name$='B004_Start_Date1_display']").datepicker("getDate") >= $("[name$='B006_Graduation_Date1_display']").datepicker("getDate")) {
              AddError(sField, 'Error in validation, Start Date should be less than Graduation Date in', '');
              return false;
            }
            break;
          case "B004_Start_Date2":
            if ($("[name$='B006_Graduation_Date2_display']").val().length && $("[name$='B004_Start_Date2_display']").datepicker("getDate") >= $("[name$='B006_Graduation_Date2_display']").datepicker("getDate")) {
              AddError(sField, 'Error in validation, Start Date should be less than Graduation Date in', '');
              return false;
            }
            break;
          case "B004_Start_Date3":
            if ($("[name$='B006_Graduation_Date3_display']").val().length && $("[name$='B004_Start_Date3_display']").datepicker("getDate") >= $("[name$='B006_Graduation_Date3_display']").datepicker("getDate")) {
              AddError(sField, 'Error in validation, Start Date should be less than Graduation Date in', '');
              return false;
            }
            break;
          case "D007_From1":
            if ($("[name$='D008_To1_display']").val().length && $("[name$='D007_From1_display']").datepicker("getDate") >= $("[name$='D008_To1_display']").datepicker("getDate")) {
              AddError(sField, 'Error in validation, From Date should be less than To Date in', '');
              return false;
            }
            break;
          case "D007_From2":
            if ($("[name$='D008_To2_display']").val().length && $("[name$='D007_From2_display']").datepicker("getDate") >= $("[name$='D008_To2_display']").datepicker("getDate")) {
              AddError(sField, 'Error in validation, From Date should be less than To Date in', '');
              return false;
            }
            break;
          case "D007_From3":
            if ($("[name$='D008_To3_display']").val().length && $("[name$='D007_From3_display']").datepicker("getDate") >= $("[name$='D008_To3_display']").datepicker("getDate")) {
              AddError(sField, 'Error in validation, From Date should be less than To Date in', '');
              return false;
            }
            break;
          case "D007_From4":
            if ($("[name$='D008_To4_display']").val().length && $("[name$='D007_From4_display']").datepicker("getDate") >= $("[name$='D008_To4_display']").datepicker("getDate")) {
              AddError(sField, 'Error in validation, From Date should be less than To Date in', '');
              return false;
            }
            break;
          case "D007_From5":
            if ($("[name$='D008_To5_display']").val().length && $("[name$='D007_From5_display']").datepicker("getDate") >= $("[name$='D008_To5_display']").datepicker("getDate")) {
              AddError(sField, 'Error in validation, From Date should be less than To Date in', '');
              return false;
            }
            break;
          case "D007_From6":
            if ($("[name$='D008_To6_display']").val().length && $("[name$='D007_From6_display']").datepicker("getDate") >= $("[name$='D008_To6_display']").datepicker("getDate")) {
              AddError(sField, 'Error in validation, From Date should be less than To Date in', '');
              return false;
            }
            break;
          case "D007_From7":
            if ($("[name$='D008_To7_display']").val().length && $("[name$='D007_From7_display']").datepicker("getDate") >= $("[name$='D008_To7_display']").datepicker("getDate")) {
              AddError(sField, 'Error in validation, From Date should be less than To Date in', '');
              return false;
            }
            break;
          case "D008_To1":
            return ABI_Validate_Gaps_on_Start_and_End_Dates(sValue, sName, sField, sFormat);
            break;
        }
      }
      break;
    case "B007_Grade_Point_Average1":
    case "B007_Grade_Point_Average2":
    case "B007_Grade_Point_Average3":
      if ($("[name$='" + sField + "']").is(":visible")){
        if (eFormRequiredField(sValue, sName, sField) == false) { return false; }
        return ABI_eFormAlphaNumeric(sValue, sName, sField);
      }
      break;
    case "C007_Employment_Start_Date1":
      // accept only past and current date
      var today = new Date();
      if ($("[name$='." + sField + "_display']").datepicker('getDate') && $("[name$='." + sField + "_display']").datepicker('getDate').setHours(0, 0, 0) > today.setHours(0, 0, 0)) {
        AddError(sField, 'Error in validation, only past and current dates are accepted in', '');
        return false;
      }
      if ($("[name$='C008_Employment_End_Date1_display']").val().length && $("[name$='C007_Employment_Start_Date1_display']").datepicker("getDate") >= $("[name$='C008_Employment_End_Date1_display']").datepicker("getDate")) {
        AddError(sField, 'Error in validation, Employment Start Date should be less than Employment End Date in', '');
        return false;
      }
      break;
    case "C007_Employment_Start_Date2":
      // accept only past and current date
      var today = new Date();
      if ($("[name$='." + sField + "_display']").datepicker('getDate') && $("[name$='." + sField + "_display']").datepicker('getDate').setHours(0, 0, 0) > today.setHours(0, 0, 0)) {
        AddError(sField, 'Error in validation, only past and current dates are accepted in', '');
        return false;
      }
      if ($("[name$='C008_Employment_End_Date2_display']").val().length && $("[name$='C007_Employment_Start_Date2_display']").datepicker("getDate") >= $("[name$='C008_Employment_End_Date2_display']").datepicker("getDate")) {
        AddError(sField, 'Error in validation, Employment Start Date should be less than Employment End Date in', '');
        return false;
      }
      break;
    case "C007_Employment_Start_Date3":
      // accept only past and current date
      var today = new Date();
      if ($("[name$='." + sField + "_display']").datepicker('getDate') && $("[name$='." + sField + "_display']").datepicker('getDate').setHours(0, 0, 0) > today.setHours(0, 0, 0)) {
        AddError(sField, 'Error in validation, only past and current dates are accepted in', '');
        return false;
      }
      if ($("[name$='C008_Employment_End_Date3_display']").val().length && $("[name$='C007_Employment_Start_Date3_display']").datepicker("getDate") >= $("[name$='C008_Employment_End_Date3_display']").datepicker("getDate")) {
        AddError(sField, 'Error in validation, Employment Start Date should be less than Employment End Date in', '');
        return false;
      }
      break;
    case "C007_Employment_Start_Date4":
      // accept only past and current date
      var today = new Date();
      if ($("[name$='." + sField + "_display']").datepicker('getDate') && $("[name$='." + sField + "_display']").datepicker('getDate').setHours(0, 0, 0) > today.setHours(0, 0, 0)) {
        AddError(sField, 'Error in validation, only past and current dates are accepted in', '');
        return false;
      }
      if ($("[name$='C008_Employment_End_Date4_display']").val().length && $("[name$='C007_Employment_Start_Date4_display']").datepicker("getDate") >= $("[name$='C008_Employment_End_Date4_display']").datepicker("getDate")) {
        AddError(sField, 'Error in validation, Employment Start Date should be less than Employment End Date in', '');
        return false;
      }
      break;
    case "C007_Employment_Start_Date5":
      // accept only past and current date
      var today = new Date();
      if ($("[name$='." + sField + "_display']").datepicker('getDate') && $("[name$='." + sField + "_display']").datepicker('getDate').setHours(0, 0, 0) > today.setHours(0, 0, 0)) {
        AddError(sField, 'Error in validation, only past and current dates are accepted in', '');
        return false;
      }
      if ($("[name$='C008_Employment_End_Date5_display']").val().length && $("[name$='C007_Employment_Start_Date5_display']").datepicker("getDate") >= $("[name$='C008_Employment_End_Date5_display']").datepicker("getDate")) {
        AddError(sField, 'Error in validation, Employment Start Date should be less than Employment End Date in', '');
        return false;
      }
      break;
    case "C007_Employment_Start_Date6":
      // accept only past and current date
      var today = new Date();
      if ($("[name$='." + sField + "_display']").datepicker('getDate') && $("[name$='." + sField + "_display']").datepicker('getDate').setHours(0, 0, 0) > today.setHours(0, 0, 0)) {
        AddError(sField, 'Error in validation, only past and current dates are accepted in', '');
        return false;
      }
      if ($("[name$='C008_Employment_End_Date6_display']").val().length && $("[name$='C007_Employment_Start_Date6_display']").datepicker("getDate") >= $("[name$='C008_Employment_End_Date6_display']").datepicker("getDate")) {
        AddError(sField, 'Error in validation, Employment Start Date should be less than Employment End Date in', '');
        return false;
      }
      break;
    case "C007_Employment_Start_Date7":
      // accept only past and current date
      var today = new Date();
      if ($("[name$='." + sField + "_display']").datepicker('getDate') && $("[name$='." + sField + "_display']").datepicker('getDate').setHours(0, 0, 0) > today.setHours(0, 0, 0)) {
        AddError(sField, 'Error in validation, only past and current dates are accepted in', '');
        return false;
      }
      if ($("[name$='C008_Employment_End_Date7_display']").val().length && $("[name$='C007_Employment_Start_Date7_display']").datepicker("getDate") >= $("[name$='C008_Employment_End_Date7_display']").datepicker("getDate")) {
        AddError(sField, 'Error in validation, Employment Start Date should be less than Employment End Date in', '');
        return false;
      }
      break;
  }
}
