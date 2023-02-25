/**
 * multipart configuration
 * 01.16.2020 | jjucutan | initial creation of multipart config
 * 01.29.2020 | jjucutan | added legal name
 * 02.04.2020 | jjucutan | added UK Country field
 * 02.12.2020 | jjucutan | make supervisor not required
 * 02.13.2020 | jjucutan | time zone hidden
 * 02.26.2020 | jjucutan | added Offer Letter Annual Compensation
 * 03.06.2020 | jjucutan | added bonus fields config
 * 05.20.2020 | jjucutan | added preferred first and last name, Highest_Educ_Lvl to new hire required; added Previous_KE_Employee, Previous_KE to new hire view
 * 06.09.2020 | jjucutan | require bonus sections
 * 06.23.2020 | anati | made Mailing_Address_County and Great_Britain_County optional
 * 07.01.2021 | jjucutan | Annual_Compensation to readonly
 */
const MULTIPART_CONFIG = [
  {
    "name": "Legal_First_Name",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Legal_Middle_Name",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Legal_Last_Name",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Prefix",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Suffix",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Preferred_Last_Name",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Preferred_First_Name",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Preferred_Middle_Name",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Preferred_Suffix",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "DOB",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Birth_Country",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Birth_Location",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Gender",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "MaritalStatus",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "HIGHEST_EDUC_LVL",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "National_ID_Country-1",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Awaiting_National_ID_Number",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "National_ID_Type_1",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "National_ID_Number_1",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "National_ID_Country-2",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "National_ID_Type_2",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "National_ID_Number_2",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "National_ID_Country-3",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "National_ID_Type_3",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "National_ID_Number_3",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "National_ID_Country-4",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "National_ID_Type_4",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "National_ID_Number_4",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Visa_1",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Current_Address1",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Current_Address2",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Current_Address3",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Current_Address4",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Current_City",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Current_State",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Current_Postal_Code",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Great_Britain_County",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Current_Country",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "current_publish",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Mailing_Address_Same",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Mail_Address1",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Mail_Address2",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Mail_Address3",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Mail_City",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Mail_State",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Mail_Postal_Code",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Mailing_Address_County",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Mail_Country",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Mail_Publish",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Phone_Type",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "mobile_business",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Cell_business_Country_code",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Publish_mobile_Business",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Phone_Type",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Mobile",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "mobile_country_code",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Publish_mobile",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Phone_Type",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Home_Phone",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Home_Phone_Country_Code",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Publish_home_phone",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Personal_Email_Address",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Name_1",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Phone_1",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Phone_Country_Code_1",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Phone_Type_1",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Phone_Add_1",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Phone_Add_Country_Code_1",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Relationship_1",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Primary_1",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Name_2",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Phone_2",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Phone_Country_Code_2",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Phone_Type_2",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Phone_Add_2",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Phone_Add_Country_Code_2",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Relationship_2",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Primary_2",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Name_3",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Phone_3",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Phone_Type_3",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Phone_Country_Code_3",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Phone_Add_3",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Phone_Add_Country_Code_3",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Relationship_3",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Emergency_Contact_Primary_3",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Previous_KE",
    "viewedBy": ["recruiter","newhire"],
    "requiredBy": ["newhire", "recruiter"],
    "readOnlyTo": [],
    "targetlabel": "#Previous_KE_label"
  },
  {
    "name": "Lateral_Hire",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": [],
    "targetlabel": "#Lateral_Hire_label"
  },
  {
    "name": "Previous_KE_Employee",
    "viewedBy": ["recruiter","newhire"],
    "requiredBy": ["newhire", "recruiter"],
    "readOnlyTo": [],
    "targetlabel": "#Previous_KE_Employee_label"
  },
  {
    "name": "Action",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Action_Reason",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Practice_Area",
    "viewedBy": ["recruiter"],
    "requiredBy": ["newhire", "recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Practice_Group",
    "viewedBy": ["recruiter"],
    "requiredBy": ["newhire", "recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Location",
    "viewedBy": ["recruiter"],
    "requiredBy": ["newhire", "recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Expected_Job_End_Date",
    "hideOnOfficeLocation": "USA",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Position_Job_Title_Code",
    "viewedBy": ["recruiter"],
    "requiredBy": ["newhire", "recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Job_Function",
    "viewedBy": ["recruiter"],
    "requiredBy": ["newhire", "recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Supervisor_ID",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Regular_Temporary",
    "viewedBy": ["recruiter"],
    "requiredBy": ["newhire", "recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Regular_Shift",
    "viewedBy": ["recruiter"],
    "requiredBy": ["newhire", "recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Full_Part",
    "viewedBy": ["recruiter"],
    "requiredBy": ["newhire", "recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Work_Schedule",
    "viewedBy": ["newhire", "recruiter"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Standard_Hours",
    "viewedBy": ["recruiter"],
    "requiredBy": ["newhire", "recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "FTE",
    "viewedBy": ["recruiter"],
    "requiredBy": ["newhire", "recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Remote_Language",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Comp_Rate",
    "viewedBy": ["recruiter"],
    "class": "currency-field",
    "requiredBy": ["newhire", "recruiter"],
    "readOnlyTo": ["recruiter"]
  },
  {
    "name": "Salary_Rate_Code",
    "viewedBy": ["recruiter"],
    "requiredBy": ["newhire", "recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Annual_Compensation",
    "viewedBy": ["recruiter"],
    "class": "currency-field",
    "requiredBy": [],
    "readOnlyTo": ["newhire", "recruiter"]
  },
  {
    "name": "Salary_Amount_Currency_Code",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": ["newhire"]
  },
  {
    "name": "Offer_Letter_Annual_Compensation",
    "viewedBy": ["recruiter"],
    "class": "currency-field",
    "requiredBy": ["newhire", "recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Comp_Frequency",
    "viewedBy": ["recruiter"],
    "requiredBy": ["newhire", "recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Probation_Date",
    "viewedBy": ["recruiter"],
    "requiredBy": ["newhire", "recruiter" ],
    "readOnlyTo": []
  },
  {
    "name": "Earnings_Distribution_Type",
    "viewedBy": ["recruiter"],
    "requiredBy": ["newhire", "recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Designation",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Associate_Class",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Non_share_Partner_Class",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Share_Partner_Class",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Of_Counsel_Class",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Signing_Bonus_Eligible",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Signing_Bonus_Description",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Signing_Bonus_Amount",
    "class": "currency-field",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Signing_Bonus_Currency_Code",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Signing_Bonus_Date",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Signing_Bonus_Comment",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Clerkship_Bonus_Eligible_1",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Clerkship_Bonus_Code_1",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Clerkship_Bonus_Amount_1",
    "class": "currency-field",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Clerkship_Bonus_Currency_Code_1",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Clerkship_Bonus_Date_1",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Relocation",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Relocation_Bonus_Code",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Relocation_Bonus_Amount",
    "class": "currency-field",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Relocation_Bonus_Currency_Code",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Relocation_Bonus_Date",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Guaranteed_Bonus_Eligible",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Guaranteed_Bonus_Type",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Guaranteed_Bonus_Amount",
    "class": "currency-field",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Guaranteed_Bonus_Amount_Currency",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Bar_Study_Bonus_Eligible",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Bar_Study",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Bar_Study_Bonus",
    "class": "currency-field",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Bar_Study_Bonus_Date",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Eligible",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Class_Year",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "GB_Year_Paid",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Code_1",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "JDMBA_Option",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Amount_1",
    "class": "currency-field",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Currency_Code_1",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Date_1",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Amount_1",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Code_2",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Amount_2",
    "class": "currency-field",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Currency_Code_2",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Date_2",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },  
  {
    "name": "Additional_Amount_2",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Code_3",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Amount_3",
    "class": "currency-field",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Currency_Code_3",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Date_3",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },  
  {
    "name": "Additional_Amount_3",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Code_4",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Amount_4",
    "class": "currency-field",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Currency_Code_4",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Date_4",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },  
  {
    "name": "Additional_Amount_4",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Code_5",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Amount_5",
    "class": "currency-field",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Currency_Code_5",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Date_5",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },  
  {
    "name": "Additional_Amount_5",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Code_6",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Amount_6",
    "class": "currency-field",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Currency_Code_6",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Date_6",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },  
  {
    "name": "Additional_Amount_6",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Code_7",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Amount_7",
    "class": "currency-field",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Currency_Code_7",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Additional_Bonus_Date_7",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  }, 
  {
    "name": "Additional_Amount_7",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Referral_Bonus_Eligible_1",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  }, 
  {
    "name": "Referral_Bonus_Code_1",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  }, 
  {
    "name": "Attorney_Referral_1",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  }, 
  {
    "name": "Referral_Bonus_Amount_1",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  }, 
  {
    "name": "Referral_Bonus_Eligible_2",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  }, 
  {
    "name": "Referral_Bonus_Code_2",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  }, 
  {
    "name": "Attorney_Referral_2",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  }, 
  {
    "name": "Referral_Bonus_Amount_2",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  }, 
  {
    "name": "Referral_Bonus_Eligible_3",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  }, 
  {
    "name": "Referral_Bonus_Code_3",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  }, 
  {
    "name": "Attorney_Referral_3",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  }, 
  {
    "name": "Referral_Bonus_Amount_3",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  }, 
  {
    "name": "Referral_Bonus_Eligible_4",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  }, 
  {
    "name": "Referral_Bonus_Code_4",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  }, 
  {
    "name": "Attorney_Referral_4",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  }, 
  {
    "name": "Referral_Bonus_Amount_4",
    "viewedBy": ["recruiter"],
    "requiredBy": [],
    "readOnlyTo": []
  },
  {
    "name": "Summer_Associate_End_Date",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Office",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Building_Location",
    "viewedBy": ["recruiter"],
    "requiredBy": ["recruiter"],
    "readOnlyTo": []
  },
  {
    "name": "Citizenship_Country_1",
    "viewedBy": ["recruiter", "newhire"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Citizenship_Country_2",
    "viewedBy": ["recruiter", "newhire"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Citizenship_Country_3",
    "viewedBy": ["recruiter", "newhire"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Citizenship_Country_4",
    "viewedBy": ["recruiter", "newhire"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
  {
    "name": "Visa_1",
    "viewedBy": ["recruiter", "newhire"],
    "requiredBy": ["newhire"],
    "readOnlyTo": []
  },
];
