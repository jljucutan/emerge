document.onreadystatechange = function() {
  if (strFormCompleted == "") {
    document.querySelector('[name$=".a02_Eng_FirstName"]').value = '<$client.tForWhomUserInfo.First_Name>'
    document.querySelector('[name$=".a03_Eng_LastName"]').value = '<$client.tForWhomUserInfo.Last_Name>'
    document.querySelector('[name$=".a04_Chinese_FullName"]').value = '<$client.tForWhomUserInfo.Chinese_Surname>'
    document.querySelector('[name$=".txtChineseGivenName"]').value = '<$client.tForWhomUserInfo.Chinese_GivenName>'
    document.querySelector('[name$=".a04_Phone_Device_Type"]').value = '<$client.tForWhomUserInfo.Phone_Device>'
    document.querySelector('[name$=".a04_Phone_Country_Code"]').value = '<$client.tForWhomUserInfo.Phone_Country_Code>'
    document.querySelector('[name$=".a05_Eng_PrefName"]').value = '<$client.tForWhomUserInfo.Preferred_Name>'
    document.querySelector('[name$=".a05_Eng_PrefLast"]').value = '<$client.tForWhomUserInfo.Preferred_Last_Name>'
    document.querySelector('[name$=".a06_MobilePhoneNo"]').value = ' <$client.tForWhomUserInfo.Phone>'
    document.querySelector('[name$=".a07_Email"]').value = ' <$client.tForWhomUserInfo.Email>'
    document.querySelector('[name$=".a08_Address"]').value = '<$client.tForWhomUserInfo.Address1>  <$client.tForWhomUserInfo.Address2>'
    document.querySelector('[name$=".a09_City"]').value = ' <$client.tForWhomUserInfo.City>'
    document.querySelector('[name$=".a10_State"]').value = '<$client.tForWhomUserInfo.CHN_Province>'
    document.querySelector('[name$=".a11_PostalCode"]').value = '<$client.tForWhomUserInfo.Zip>'
    document.querySelector('[name$=".a12_Country"]').value = '<$client.tForWhomUserInfo.Country>'
    document.querySelector('[name$=".a13_Dob"]').value = '<$client.tForWhomUserInfo.DOB>'
    document.querySelector('[name$=".a13_Country_of_Birth"]').value = '<$client.tForWhomUserInfo.Country_of_Birth>'
    document.querySelector('[name$=".a14_Gender"]').value = '<$client.tForWhomUserInfo.WD_Gender_CHN>'
    document.querySelector('[name$=".a15_MaritalStatus').value = '<$client.tForWhomUserInfo.Marital_Status_CHN>'
    document.querySelector('[name$=".a16_Nationality"]').value = '<$client.tForWhomUserInfo.Nationality_Primary>'
    document.querySelector('[name$=".a16_Citizenship"]').value = '<$client.tForWhomUserInfo.Citizenship_Status>'
    document.querySelector('[name$=".a17_NationalID"]').value = '<$client.tForWhomUserInfo.National_ID_Number>'
    document.querySelector('[name$=".a17_Passport_Country"]').value = '<$client.tForWhomUserInfo.Passport_Country>'
    document.querySelector('[name$=".a18_PassportNo"]').value = '<$client.tForWhomUserInfo.Passport_ID_Number>'
    document.querySelector('[name$=".a19_Mainland_Travel_Permit_Type"]').value = '<$client.tForWhomUserInfo.Addl_Govt_ID_Type_CHN_Description>'
    document.querySelector('[name$=".a20_Mainland_Travel_Permit_Number"]').value = '<$client.tForWhomUserInfo.Addl_Govt_ID_Number>'
    document.querySelector('[name$=".a21_WorkingExp"]').value = '<$client.tForWhomUserInfo.Months_Continuous_Prior_Employment>'
  }
}