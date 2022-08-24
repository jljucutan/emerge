const DATES = {
  "de": ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
  "en": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}
const EMPLOYEE = {
  // Employee Profile fields
  First_Name: "<$client.tForWhomUserInfo.First_Name>",
  Middle_Name: "<$client.tForWhomUserInfo.Middle_Name>",
  Last_Name: "<$client.tForWhomUserInfo.Last_Name>",
  Address_1: "<$client.tForWhomUserInfo.Address_1>",
  Address_2: "<$client.tForWhomUserInfo.Address_2>",
  Address_3: "<$client.tForWhomUserInfo.Address_3>",
  City: "<$client.tForWhomUserInfo.City>",
  State: "<$client.tForWhomUserInfo.State>",
  Zip: "<$client.tForWhomUserInfo.Zip>",
  Country: "<$client.tForWhomUserInfo.Country>",
  Full_Address: "<$client.tForWhomUserInfo.Address1><$client.env.eval(client.tForWhomUserInfo.Address2.Length()>0?', ':'')><$client.tForWhomUserInfo.Address2><$client.env.eval(client.tForWhomUserInfo.City.Length()>0?', ':'')><$client.tForWhomUserInfo.City><$client.env.eval(client.tForWhomUserInfo.State.Length()>0?', ':'')><$client.tForWhomUserInfo.State><$client.env.eval(client.tForWhomUserInfo.Zip.Length()>0?', ':'')><$client.tForWhomUserInfo.Zip>",
  EMEIA_Job_Title: "<$client.tForWhomUserInfo.EMEIA_Job_Title>",
  EMEIA_Original_Start_date: "<$client.tForWhomUserInfo.EMEIA_Original_Start_date>",
  EMEIA_Standard_Weekly_Hours : "<$client.tForWhomUserInfo.EMEIA_Standard_Weekly_Hours>",
  Hiring_Manager: "<$client.tForWhomUserInfo.Hiring_Manager>",
  DE_FT_FP: "<$client.tForWhomUserInfo.DE_FT_FP>",
  DE_Salary_Amount: "<$client.tForWhomUserInfo.DE_Salary_Amount>",
  DE_Hourly_Salary_Amount: "<$client.tForWhomUserInfo.DE_Hourly_Salary_Amount>",
  DE_Relocation_Amount: "<$client.tForWhomUserInfo.DE_Relocation_Amount>",
  DE_Sign_On_Bonus_Amount: "<$client.tForWhomUserInfo.DE_Sign_On_Bonus_Amount>",

  // Event Dates
  Term_Dt: new Date("<$client.tForWhomUserInfo.Term_Dt>"),
  Start: new Date("<$client.tEventDates_Date_2.Value>"),
  getStartDate: function(lang) {
    let StartDate = this.Start;
    switch(lang) {
      case "de":
        return StartDate.getDate() + ". " + DATES.de[StartDate.getMonth()] + " " + StartDate.getFullYear();
      break;
      default:
        return StartDate.getDate() + " " + DATES.en[StartDate.getMonth()] + " " + StartDate.getFullYear();
      break;
    }
  },
  getEndDate: function(lang) {
    let EndDate = this.Term_Dt;
    switch(lang) {
      case "de":
        return EndDate.getDate() + ". " + DATES.de[EndDate.getMonth()] + " " + EndDate.getFullYear();
      break;
      default:
        return EndDate.getDate() + " " + DATES.en[EndDate.getMonth()] + " " + EndDate.getFullYear();
      break;
    }
  },

  // Event Categories
  DE_Retail_Offer_Type: "<$client.tEventCategories_Category_85.Code>",
  DE_Retail_Employee_Type: "<$client.tEventCategories_Category_86.Code>",
  Retail_Job_Title: "<$client.tEventCategories_Category_88.Code>",
  DE_Retail_Location: "<$client.tEventCategories_Category_87.Code>",
  LOB: "<$client.tEventCategories_Category_56.Code>"
}
