var employee = [{
    // Dates
    Initiation_Of_Offer: "<$client.env.eval(Date.Format('<$client.env.eval(Date.parse(client.tEventDates_7.Value))>','%B %d, %Y'))>",
    Expiration_Of_Offer: "<$client.env.eval(Date.Format('<$client.env.eval(Date.parse(client.tEventDates_6.Value))>','%A, %B %d, %Y'))>",
    Start_Date: "<$client.env.eval(Date.Format('<$client.env.eval(Date.parse(client.tEventDates_2.Value))>','%A, %B %d, %Y'))>",
    End_Date: "<$client.env.eval(Date.Format('<$client.env.eval(Date.parse(client.tForWhomUserInfo.End_Date))>','%A, %B %d, %Y'))>",

    // Events
    Corp_Retail: "<$client.tEventCategories_22.Code>",
    Employee_Type: "<$client.tEventCategories_21.Code>",
    Offer_Type: "<$client.tEventCategories_23.Code>",
    Relocation: "<$client.tEventCategories_24.Code>",
    Work_Location: "<$client.tEventCategories_11.Code>",
    Retail_Offer_Type: "<$client.tEventCategories_26.Code>",
    Retail_Employee_Type: "<$client.tEventCategories_28.Code>",
    Offer_Initiator: "<$client.tEventManagers_9.First_Name> <$client.tEventManagers_9.Last_Name>",

    // EUP
    First_Name: "<$client.tForWhomUserInfo.First_Name>",
    Middle_Name: "<$client.tForWhomUserInfo.Middle_Name>",
    Last_Name: "<$client.tForWhomUserInfo.Last_Name>",
    Preferred_Name: "<$client.tForWhomUserInfo.Preferred_Name>",
    Address1: "<$client.tForWhomUserInfo.Address1>",
    Address2: "<$client.tForWhomUserInfo.Address2>",
    City: "<$client.tForWhomUserInfo.City>",
    State: "<$client.tForWhomUserInfo.State>",
    Zip: "<$client.tForWhomUserInfo.Zip>",
    Country: "<$client.tForWhomUserInfo.Country>",
    today: "<$client.env.eval(date.now('%B %d, %Y'))>",
    Hiring_Manager: "<$client.tForWhomUserInfo.Hiring_Manager>",
    Team_Name: "<$client.tForWhomUserInfo.Team_Name>",
    Weekly_Hours: "<$client.tForWhomUserInfo.Weekly_Hours>",
    Salary: "<$client.tForWhomUserInfo.Salary_Amount>",
    Bonus: "<$client.tForWhomUserInfo.Bonus>",
    Bonus_Package: "<$client.tForWhomUserInfo.Bonus1>",
    Fiscal_Year: "<$client.tForWhomUserInfo.Fiscal_Year>",
    Commission: "<$client.tForWhomUserInfo.Commission>",
    Target_Amount: "<$client.tForWhomUserInfo.Target_Amount>",
    UK_Bonus: "<$client.tForWhomUserInfo.Discretionary_Bonus>",
    RSU_Amount: "<$client.tForWhomUserInfo.RSU_Amount>",
    Auto_Allowance: "<$client.tForWhomUserInfo.Auto>",
    Relo_Net_Amount: "<$client.tForWhomUserInfo.Relo_Net_Amount>",
    Housing_Allowance: "<$client.tForWhomUserInfo.Housing_Allowance>",
    Campus_Site: "<$client.tForWhomUserInfo.Campus_Site>",
    Entity: "<$client.tForWhomUserInfo.Entity>",
    State_Of_Employment: "<$client.tForWhomUserInfo.State_Of_Employment>",
    Recruiter_Name: "<$client.tForWhomUserInfo.Recruiter_Name>",
    Recruiter_Phone: "<$client.tForWhomUserInfo.Recruiter_Phone>",
    Recruiter_Phone: "<$client.tForWhomUserInfo.Recruiter_Phone>",
    Contact_Phone: "<$client.tForWhomUserInfo.Contact_Phone>",

    UK_Contract_Type: "<$client.tEventCategories_48.Code>",
    UK_Job_Title: "<$client.tForWhomUserInfo.Job_Title_Retail>",
    UK_Sign_On_Bonus_Amount: "<$client.tForWhomUserInfo.EMEIA_Sign_on_Bonus_Amount>",
    UK_Car_Cash_Allowance: "<$client.tForWhomUserInfo.EMEIA_Car_Cash_Allowance>",
    UK_Employee_Name_on_Maternity_Leave: "<$client.tForWhomUserInfo.EMEIA_Employee_on_maternity_leave>",
    UK_Start_Date: "<$client.tForWhomUserInfo.EMEIA_Original_Start_date>",
    UK_End_Date: "<$client.tForWhomUserInfo.End_Date>",
    UK_Location: "<$client.tEventCategories_11.Value>",
    GRS_Fixed_Term: "<$client.tForWhomUserInfo.Fixed_term_FWE>",
    GRS_Fixed_Term_to_Perm: "<$client.tForWhomUserInfo.FWE_PER>",
    Annual_Salary: "<$client.tForWhomUserInfo.Salary_Amount>",
}];

// UK Corp External Contract
function fnView() {
    $("#markup").html("").append(
        // Company Logo
        $('<div class="offerClause">').append(
          $('<header id="srt_eform_logo" class="row text-right" />').html('<img src=' + company.Logo + '>')
        ),
        $('<div class="offerClause">').append(
          $('<div class="vspace text-center"/>').append(
            $('<h5/>').append('<strong>Summary Statement of Terms and Conditions of Employment</strong><br><strong>Under the Employment Rights Act 1996</strong>')
          ),
        ),
        $('<div class="offerClause">').append(
          $('<p/>').append('This statement summarises the main terms and conditions of your employment (the "Summary"). '),
          $('<p class="row"/>').append('<div class="col-lg-2 col-md-2 col-sm-5 col-xs-12"><strong>The Employer:\t\t</strong></div><div class="col-lg-10 col-md-10 col-sm-7 col-xs-12">Apple Retail UK Limited ("<strong>Apple UK</strong>").</div>'),

          $('<div class="row vspace"/>').append(
              $('<div class="col-lg-2 col-md-2 col-sm-5 col-xs-12" />').append('<strong>The Employee:\t\t</strong>'),
              $('<div class="col-lg-10 col-md-10 col-sm-7 col-xs-12"/>').append(
                employee.First_Name + ' ' + employee.Last_Name + '<br>\n\t\t\t\t\t\t\t' +
                employee.Address1 +
                ', ' + employee.Address2 +
                ', ' + employee.City
              )
          ),
        ),
        $('<div class="offerClause">').append(
          $('<div class="row vspace" />').append(
            $('<div class="col-lg-12"/>').append('<p><h5><strong>Job Title</strong></h5></p>'),
            $('<p/>').append('You are employed as ' + employee.UK_Job_Title + '. Your job title does not limit or define what you are required to do and in addition to your normal duties, you may be required to undertake other duties from time to time on behalf of Apple UK and any other company in the Apple Group.')
          ),
        ),
        $('<div class="offerClause">').append(
          $('<div class="row vspace"/>').append('<div class="col-lg-12"><h5><strong>Duties</strong></h5><br>During your employment you must:<div class="row"><div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right">\n\t\t\ta)</div><div class="col-lg-11 col-md-11 col-sm-11 col-xs-11"> obey all lawful directions and observe and comply with all policies and procedures of Apple UK and the Apple Group; </div> <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right">\n\t\t\tb)</div><div class="col-lg-11 col-md-11 col-sm-11 col-xs-11"> during your working time devote the whole of your attention and skills and time to Apple UK; </div><div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right">\n\t\t\tc)</div><div class="col-lg-11 col-md-11 col-sm-11 col-xs-11"> use your best endeavors to promote and protect the business and interests of Apple UK. </div> </div> </div>'),
          (employee.UK_Contract_Type.length > 0) &&
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12">').append('<p><h5><strong>Commencement of Employment</strong></h5></p>'),
            (['Fixed_term_FWE', '10_day_probation', '28_day_probation', 'FWE_PER'].indexOf(employee.UK_Contract_Type) > -1) &&
            $('<p/>').append('Your employment will begin on ' + employee.UK_Start_Date + ' and end on ' + employee.UK_End_Date  + ' without the need for notice unless previously terminated by either party by giving the other the notice set out in this Summary'),
            (employee.UK_Contract_Type == 'Maternity_Coverage') &&
            $('<p/>').append('Your employment will begin on ' + employee.UK_Start_Date + ' and, as you are covering ' + employee.UK_Employee_Name_on_Maternity_Leave + '\'s maternity leave, this contract will terminate on UK_End_Date or until ' + employee.UK_Employee_Name_on_Maternity_Leave + ' returns to work after the end of her maternity leave and any necessary handover is complete, whichever is sooner. Apple UK cannot confirm at this point in time exactly how long UK_Employee_Name_on_Maternity_Leave\'s leave will last, but if the return is before UK_End_Date, Apple UK will provide you with up to one month\'s written notice to expire no later than ' + employee.UK_End_Date + '.'),
            (employee.UK_Contract_Type == 'ASLP') &&
            $('<p/>').append('Your employment will begin on ' + employee.UK_Start_Date + ' and will end on ' + employee.UK_End_Date + ' (subject to earlier termination in accordance with this Summary) since two years is the length of the ASLP. It is hoped that, upon successful completion of the ASLP, Apple UK would be able to offer you a Leader position within one of its Stores. However, your employment beyond the fixed term duration will be dependent upon the final evaluation of your performance on the programme as well as taking into account the availability of any vacant positions. If Apple UK is not able to offer you a leader position at the end of the two year programme for the reasons outlined above, Apple UK will explore other options for you. It cannot be guaranteed, though, that there will be any suitable role to offer you at the relevant time.'
            ),
            $('<p/>').append('Your period of continuous employment will begin on the date that you commence work with Apple UK. No period of employment with another employer will count towards your period of continuous employment with Apple UK.')
          ),
          (employee.UK_Contract_Type.length > 0) &&
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Probation Period</strong></h5>',
              (["Manager", "Salaried", "Store_Leader", "Market_Leader", "Retail_Corp", "Director"].indexOf(employee.UK_Contract_Type) > -1) &&
              $('<p/>').append('Your employment with Apple UK is subject to undertaking a period of training and completing a six-month probation period. Apple UK may in its discretion extend the probationary period. If at the end of the probationary period Apple UK is satisfied with your performance you will become a permanent employee. During the probationary period, you or Apple UK may terminate your employment by giving four week’s written notice.'),
              (employee.UK_Contract_Type == 'ASLP') &&
              $('<p/>').append('Your employment with Apple UK is subject to undertaking a period of training and completing a six-month probation period. Apple UK may in its discretion extend the probationary period. During the probationary period, you or Apple UK may terminate your employment by giving two weeks\' written notice.'),
              (['Fixed_term_FWE', '10_day_probation', '28_day_probation', 'FWE_PER'].indexOf(employee.UK_Contract_Type) > -1) &&
              $('<p/>').append('Your employment with Apple UK is subject to undertaking a period of training and completing a three-month probation period. During the probation period, you or Apple UK may terminate your employment by giving one week\'s written notice.'),
              (employee.UK_Contract_Type == 'FWE_PER') &&
              $('<p/>').append('Your employment with Apple UK is subject to undertaking a period of training and a probation period. The probation period is a six-month probation period, less the period of your previous service with Apple UK. Apple UK may in its discretion extend the probationary period. If at the end of the probationary period Apple UK is satisfied with your performance you will become a permanent employee. During the probationary period, you or Apple UK may terminate your employment by giving four week\'s written notice.')
            ),
          ),
          (['Manager', 'Store_Leader', 'Market_Leader', 'ASLP', 'Retail_Corp', 'Director', 'Fixed_term_FWE', 'FWE_PER'].indexOf(employee.UK_Contract_Type) > -1) &&
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Place of Work (Business rules coming next week)</strong></h5>',
              (['Manager', 'Store_Leader'].indexOf(employee.UK_Contract_Type) > -1) &&
              $('<p/>').append('Your normal place of work is the ' + employee.UK_Location + ' Apple Store, but Apple UK may require you at any time to work at or relocate to such other place of work within the United Kingdom, whether on a temporary basis or not. For the avoidance of doubt, Apple UK will not require you to work outside of the UK for a period greater than one month, unless you agree.'),
              (['Retail_Corp', 'Director', 'Fixed_term_FWE', 'FWE_PER'].indexOf(employee.UK_Contract_Type) > -1) &&
              $('<p/>').append('Your normal place of work is ' + employee.UK_Location + ' but Apple UK may require you at any time to work at or relocate to such other place of work within the United Kingdom, whether on a temporary basis or not. For the avoidance of doubt, Apple UK will not require you to work outside of the UK for a period greater than one month, unless you agree. You acknowledge that you are aware of Apple\'s plans to consolidate its London offices in or around 2021, and that the intended new location is currently Battersea. You will likely be required to move work location accordingly and this will be confirmed to you at Apple\'s discretion.'),
              (employee.UK_Contract_Type == 'Market_Leader') &&
              $('<p/>').append('Your normal place of work will be ' + employee.Home_Address + ', although you are required to travel to the stores in the market region for which you are responsible as needed and are expected to attend meetings and trainings in such locations as Apple UK may specify from time to time. You must inform HR in writing of any change in your address. You confirm that you are not in breach of any covenant or agreement in doing work at your home. Apple UK may require you at any time to work at or relocate to another place of work within the United Kingdom, whether on a temporary basis or not. Apple UK will not require you to work outside the UK for a period greater than one month, unless you agree.'),
              (employee.UK_Contract_Type == 'ASLP') &&
              $('<p/>').append('You will be based in Apple UK stores. For administrative purposes you will assigned to ' + employee.UK_Location + '. However, given the nature of the ASLP, you will be required to work in other stores within the same market. Apple UK may also require you at any time upon reasonable notice to work at or relocate to another place of work within the United Kingdom, whether on a temporary or permanent basis. For the avoidance of doubt, Apple UK will not require you to work outside the UK for a period greater than one month unless you agree,')
            )
          ),
          (['Manager', 'Salaried', 'Store_Leader', 'Market_Leader', 'ASLP', 'Store_Leader', 'Market_Leader', 'Field_Director', 'Retail_Corp', 'Director', 'Fixed_term_FWE'].indexOf(employee.UK_Contract_Type) > -1) &&
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Hours of Work</strong></h5>',
              (['Manager', 'Salaried', 'Store_Leader', 'Market_Leader', 'ASLP'].indexOf(employee.UK_Contract_Type) > -1) &&
              $('<p/>').append('You are employed on a full-time basis. You are normally required to work 38 hours each week (exclusive of meal breaks) but you will be expected to work in excess of your normal weekly hours without extra remuneration as may be necessary for the proper performance of your duties or at the request of Apple UK as Apple UK’s business needs dictate. If you work part-time any additional hours that you are required to work will be paid at your normal hourly rate up to 38 hours. Your normal working week will be Saturday to Friday inclusive. You are required to be available for work on these days as directed.'),
              (['Store_Leader', 'Market_Leader', 'Field_Director'].indexOf(employee.UK_Contract_Type) > -1) &&
              $('<p/>').append('As a senior employee of Apple UK, you acknowledge that your working time cannot be measured or pre-determined and that you are responsible for determining your own hours of work. You shall undertake such hours as are reasonably necessary for the proper performance of your duties under this Summary.'),
              (['Retail_Corp', 'Director', 'Fixed_term_FWE'].indexOf(employee.UK_Contract_Type) > -1) &&
              $('<p/>').append('You are employed on a full-time basis. You are normally required to work 38 hours each week (exclusive of meal breaks) but you will be expected to work in excess of your normal weekly hours without extra remuneration as may be necessary for the proper performance of your duties or at the request of Apple UK as Apple UK\'s business needs dictate. Your normal working week will be Monday to Friday inclusive. You agree, in accordance with Regulation 5 of the Working Time Regulations 1998, to opt out of the 48 hour working time limit. You may elect to terminate this agreement to opt out of the working time limit by giving Apple UK 3 months\' notice in writing, but without prejudice to the remaining provisions of this Summary.')
            )
          ),
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Remuneration</strong></h5>',
              $('<p/>').append('Your basic salary is £ ' + employee.Annual_Salary + ' per year and will be paid to you monthly in arrears, less tax and national insurance contributions.'),
              $('<p/>').append('Our review period is effective around 1 October each year. This date may change and is provided as a guide. The merit review process does not guarantee that you will be granted a salary increase. Generally if you join Apple UK within 180 days of the review date your salary will take into account of this and will not be increased. The exact period may be varied.')
            )
          ),
          (employee.UK_Bonus == 'IR_Sign_On') &&
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Sign-On Bonus</strong></h5>',
              $('<p/>').append('You will receive a gross sign-on bonus of €' + employee.UK_Sign_On_Bonus_Amount + ' when your employment with Apple begins. This payment will be subject to the usual statutory deductions and will be paid through the first or second payroll run after your employment has commenced. If you voluntarily leave Apple within one year of the payment date, you will be required to repay a proportionate part of such bonus, whereby the amount to be repaid reflects a decrease by 1/12 for each complete month you are in active employment beyond the payment date.')
            )
          ),
          (employee.UK_Bonus == 'IR_Sign_On_Installments') &&
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Sign-On Bonus</strong></h5>',
              $('<p/>').append('You will receive a gross sign-on bonus of €' + employee.UK_Sign_On_Bonus_Amount + ', the first 50% (€' + employee.UK_Sign_On_Bonus_Amount + '*.5) of which is payable when your employment with Apple begins and will be paid through the first or second payroll run after your employment has commenced. ("First Installment"). The second installment of 50% (€Bonus_Amount*.5) ("the Second Installment") will be paid in the payroll run 12 months after your employment with Apple begins. These payments will be subject to normal statutory deductions. Payment of the First and Second Installments is dependent on you being in active employment (and not under notice either given or received) at the time of the respective payment dates. If you voluntarily leave Apple within one year of the payment dates of the First and Second Installment, you will be required to pay a proportionate part of such installment, whereby the amount to be repaid reflects a decrease in each installment by 1/12 for each complete month you are in active employment beyond the First or Second Installment payment date, as appropriate.')
            )
          ),
          (['Retail_Corp', 'VP_Director'].indexOf(employee.UK_Bonus) > -1) &&
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Bonus</strong></h5>',
              (employee.UK_Bonus  == 'Retail_Corp') &&
              $('<p/>').append('Apple UK may from time to time, and depending on Apple’s performance and your overall performance, pay you a bonus. The payment or otherwise of any bonus will be wholly at the discretion of your manager and Apple UK and there is no contractual entitlement for you to receive a bonus at any time, irrespective of whether bonuses have been paid to you or to others on previous occasions. Where a bonus is paid, the amount will also be wholly at the discretion of Apple UK. You should have no right to a bonus if your employment terminates for any reason or you are under notice (whether given by you or by Apple UK) at or prior to the date when a bonus might otherwise have been payable.'),
              (employee.UK_Bonus  == 'VP_Director') &&
              $('<p/>').append('You will be eligible for participation in the VP &amp; Director Bonus Plan from time to time in force, subject to programme approval. Details about the FY\'XX plan, including eligibility, financial measurements and bonus targets, shall be fixed by Apple for the relevant time period as indicated in the relevant plan document and sent to you separately. Any specific plan feature and/or bonus payment shall not continue to apply for any future reference period outside the FY as indicated by Apple. Therefore, you should be aware that Apple reserves the right to amend or withdraw the VP &amp; Director Bonus Plan at any time at its discretion implying that you shall not have any contractual or otherwise acquired (future) rights to a bonus payment based on an previous payment or previous plan conditions. You should have no right to a bonus if your employment terminates for any reason or you are under notice of termination (whether given by you or by Apple UK) at or prior to the date when a bonus might otherwise have been payable.')
            )
          ),
          (employee.UK_Car_Cash_Allowance.length > 0) &&
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Car Cash Allowance</strong></h5>',
              $('<p/>').append('You are entitled to a car cash allowance subject to the terms of the Car Policy from time tot time in force, available on HRWeb. You should be aware that the car cash allowance amount may decrease as well as increase and any car cash allowance received in a previous year does not confer entitlement for future years. You are responsible for checking the Car Policy on a regular basis for details of the car cash allowance from time to time in force.')
            )
          ),
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Pension</strong></h5>',
              $('<p/>').append('Apple UK provides an online Group Personal Pension (GPP). There are various contribution tiers under the plan. Please see HRWeb for more details. In accordance with its statutory obligations, Apple UK automatically enrols qualifying employees in the GPP at the matching level from time to time in force. Where applicable, such contributions shall be made by way of a deduction from your salary. Further information can be found on UK HRWeb. There is no certificate of contracting out of the state second pension scheme relating to your employment.')
            )
          ),
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Benefits</strong></h5>',
              $('<p/>').append('Details of benefits to which you may be entitled are available on the UK HR Web. Your eligibility for any benefits provided by Apple UK (and, where appropriate, your dependents) is subject to the rules or terms of the relevant scheme or policy (as amended from time to time) and you (and, where appropriate, your dependents) being eligible to participate in or benefit from such schemes or policies pursuant to their rules or terms at a cost and on terms which are acceptable to Apple. Apple may replace or withdraw such schemes or policies at any time on reasonable notice to you.')
            )
          ),
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Deductions from pay</strong></h5>',
              $('<p/>').append('Apple UK is entitled to deduct any amount owed by you to Apple UK from any monies due to you from Apple UK (including wages as defined by the Employment Rights Act 1996), including the value (as calculated in accordance with the Apple Retail Web UK) of any Apple product issued to you during your employment which you fail to return to Apple UK on or before the Termination Date.')
            )
          ),
          (employee.UK_Contract_Type.length > 0) &&
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Holiday Entitlement</strong></h5>',
              (['Manager', 'Store_Leader', 'ASLP'].indexOf(employee.UK_Contract_Type) > -1) &&
              $('<p/>').append('The holiday year runs from 1 October to 30 September. You are entitled to 22 days paid holiday in each holiday year exclusive of regional bank and public holidays. This will increase based on length of service as per annual leave policy on UK Retail HR Web. You will be required to work at least four of the Bank Holidays each year. If you work part-time your entitlement to holiday (and your requirement to work a certain number of Bank Holidays) will be calculated on a pro rata basis.'),
              (['Manager', 'Store_Leader', 'ASLP'].indexOf(employee.UK_Contract_Type) < 1) &&
              $('<p/>').append('The holiday year runs from 1 October to 30 September. You will be entitled to 27 days\' annual holiday in each holiday year until you have completed 5 years\' continuous service within the Apple Group, whereupon you will be entitled to 29 days\' annual holiday in each holiday year exclusive of regional bank and public holidays. If you work part-time your entitlement to holiday will be calculated on a pro rata basis.'),
              $('<p/>').append('Should you leave Apple UK you will receive payment for any outstanding holidays due to you up to and including your date of termination at your contractual rate of pay (less tax and national insurance). Your entitlement to holiday will be assessed on a pro rata basis and if at the date of your termination you have taken holiday in excess of your entitlement, the appropriate deduction will be made from your final payment. For the avoidance of doubt, the first four weeks of he leave you take in any holiday year shall be deemed to be the leave derived from regulation 13 of the Working Time Regulations 1998, as amended from time to time, and the remainder shall be deemed to be derived from regulation 13A of those regulations.')
            )
          ),
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Absence and Sickness</strong></h5>',
              $('<p/>').append('If you are unable to attend work for any reason not previously approved in advance you must follow the absence notification procedures set out on the UK HR as amended from time to time.'),
              $('<p/>').append('At Apple UK\'s discretion you are entitled to be paid your normal basic salary, inclusive of any statutory sick pay to which you may be entitled and conditional upon your compliance with Apple UK\'s absence notification procedures, in accordance with Apple UK\'s sickness policy in place from time to time. This entitlement to company sick pay cannot be carried over from one year to the next.'),
              $('<p/>').append('In the event of your prolonged, recurrent or frequent absence due to sickness or at any time if requested in writing, Apple UK may, at its expense, require you to have a medical examination by a medical practitioner chosen by Apple UK. By signing this letter you give authority, in accordance with the Access to Medical Reports Act 1988, for the medical advisor to disclose the report of any such examination to your Manager and Human Resources in Apple UK.')
            )
          ),
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Right of search</strong></h5>',
              $('<p/>').append('You agree to submit to a personal search and search of all personal packages and bags when requested to do so and when required to do so under any applicable Apple policy.')
            )
          ),
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Proprietary Information, Intellectual Property and Inventions</strong></h5>',
              $('<p/>').append('Your employment by Apple UK creates a relationship of confidence and trust with respect to any information of a confidential, proprietary, and secret nature that may be disclosed to you or otherwise learned by you in the course of your employment.'),
              $('<p/>').append('Furthermore, you agree that during the course of your employment, your job functions may require you to make, conceive, or improve (solely by you or jointly with others) inventions, ideas, discoveries, designs, plans, manufacturing methods, formulas, computer programs, databases, processes, techniques, original works of authorship, documentation, and other materials.'),
              $('<p/>').append('By signing this Summary, you hereby agree to comply with the terms of the Confidentiality and Intellectual Property Agreement appended to this Summary.'),
              $('<p/>').append('You authorize Apple UK to notify others, including customers of Apple, and any future employers you may have, of the terms of this Summary, the Confidentiality and Intellectual Property Agreement incorporated into this Summary, and your responsibilities under this Summary'),
              $('<p/>').append('The above provisions in this section remain in force notwithstanding termination of your employment.')
            )
          ),
          (employee.UK_Contract_Type.length > 0) &&
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Termination of employment</strong></h5>',
              (employee.UK_Contract_Type == 'Manager') &&
              $('<p/>').append('Following successful completion of your probation period you or Apple UK, giving the following notice, may terminate your employment:'),
              (employee.UK_Contract_Type == 'Manager') &&
              $('<div class="row"/>').append('<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right">a)</div> <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11"> up to four years\' of continuous employment, four weeks\' notice in writing; </div> <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right">b)</div> <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11"> after four complete years’ of continuous employment, one week\'s notice for each complete year of continuous employment, up to a maximum of twelve weeks.</div>'),
              (['Store_Leader', 'Market_Leader', 'Retail_Corp', 'Director', 'GRS'].indexOf(employee.UK_Contract_Type) > -1) &&
              $('<p/>').append('Following successful completion of your probation period, either you or Apple, giving 12 weeks’ notice in writing, may terminate your employment.'),
              (['Fixed_term_FWE', '10_day_probation', '28_day_probation', 'FWE_PER'].indexOf(employee.UK_Contract_Type) > -1) &&
              $('<p/>').append('Following successful completion of the probation period, either you or Apple UK may terminate your employment in advance of its automatic termination at the end of the fixed term by giving four week’s written notice.'),
              (employee.UK_Contract_Type == 'ASLP') &&
              $('<p/>').append('Your employment will terminate without the need for notice at the expiry of the two year programme, unless before that date:'),
              (employee.UK_Contract_Type == 'ASLP') &&
              $('<div class="row"/>').append('<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right">\n\t\t\ta)</div> <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11"> Apple UK offers in writing a new role with Apple UK and you accept; or </div> <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right">\n\t\t\tb)</div> <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11"> Apple UK agrees in writing to extend your participation on the ASLP for a further period, in which case your employment will terminate at the end of that further period; </div> <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right">\n\t\t\tc)</div> <div class="col-lg-11 col-md-11 col-sm-11 col-xs-11"> your employment has otherwise been terminated by you or Apple UK giving four weeks’ notice in writing (following the expiry of your probation period). </div>'),
              $('<p/>').append('Apple UK may in its absolute discretion pay to you basic salary in lieu of notice.'),
              $('<p/>').append('In any event, Apple UK may, at any time, terminate your employment immediately without notice or payment in lieu of notice in the event of gross misconduct by you. You can find examples of conduct and performance that constitute Gross Misconduct in the Disciplinary and Grievance Procedure on the HR Web.'),
              $('<p/>').append('Apple UK\'s rights to terminate the employment under the terms of this Summary apply even when such termination would or might cause you to forfeit any entitlement to sick, permanent health insurance (if applicable) or other benefits.'),
              $('<p/>').append('If either party has served notice to terminate the employment, Apple UK may require you to take any accrued but unused holiday during the notice period.')
            )
          ),
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Suspension</strong></h5>',
              $('<p/>').append('Apple UK may suspend you during any period in which it is carrying out an investigation into any alleged acts by your or any allegations you make about the act of others. Such suspension shall be on full salary and benefits.')
            )
          ),
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Garden Leave</strong></h5>',
              $('<p/>').append('Once you or Apple UK have given notice of termination in accordance with the provisions of this Summary, Apple UK shall have the right to require you to stay away from work or to require you to perform duties different from your normal duties or not to contact any employees, customers or suppliers of Apple UK for part or all of the notice period. In this event you agree to comply with any reasonable conditions laid down by Apple UK and undertake that you will not work for any other person, firm, company or on your own behalf during this period without Apple UK’s prior written permission. If Apple UK exercises its right under these provisions, you shall remain an employee and continue to receive your basic salary and you acknowledge and agree that your duties of confidentiality and good faith shall continue to apply.')
            )
          ),
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Post-termination restrictions </strong></h5>',
              $('<p/>').append('You may not at any time during your employment by Apple UK or during a period of three months after the Termination Date directly or indirectly induce or procure or attempt to induce or procure any person who is on and/or was in the six months preceding the Termination Date an employee or consultant of or under contract of services to Apple UK or any other member of the Apple Group to leave nor accept into employment or otherwise engage or use the services of any such person who is and/or was for the six months preceding the Termination Date an employee or consultant of or under contract of services to Apple UK or any other member of the Apple Group with whom you worked or dealt.'),
              $('<p/>').append('The period of restriction referred to above may be reduced by any period where no work is given to you during any period of Garden Leave.')
            )
          ),
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Return of property</strong></h5>',
              $('<p/>').append('You shall promptly whenever requested by Apple UK and in any event upon termination of your employment (for whatever reason) return to Apple UK all property in your possession which relates to the business or affairs of Apple UK or any member of the Apple Group or is the property of Apple UK or any member of the Apple Group, including without limitation all documents, training materials, including copies of such documents and training materials, keys, mobile telephones, security passes, company credit cards and equipment.')
            )
          ),
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Disciplinary and grievance procedures</strong></h5>',
              $('<p/>').append('Apple UK\'s disciplinary and grievance procedures, as amended from time to time, are contained in the UK HR Web.')
            )
          ),
          (employee.UK_Contract_Type.length > 0) &&
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Conditional offer of employment</strong></h5>',
              (employee.UK_Contract_Type != 'ASLP') &&
              $('<p/>').append('The commencement (and continuation) of your employment with Apple UK is conditional upon verification satisfactory to Apple UK of the information you have provided to it during the job application process, the receipt of a background check satisfactory to Apple UK, the receipt of references satisfactory to Apple UK from those referees nominated by you, and the receipt of documentary evidence satisfactory to Apple UK of your right to work in the United Kingdom. These checks and references may take up to three months for us to complete and/or verify.'),
              (employee.UK_Contract_Type == 'ASLP') &&
              $('<p/>').append('The commencement (and continuation) of your employment with Apple UK is conditional upon the receipt of an official transcript to verify to Apple UK\’s satisfaction that you have obtained at least a 2:2 in your UK undergraduate university studies (or foreign equivalent as determined by Apple UK); verification satisfactory to Apple UK of the information you have provided to it during the job application process; the receipt of a background check satisfactory to Apple UK; the receipt of references satisfactory to Apple UK from those referees nominated by you; and the receipt of documentary evidence satisfactory to Apple UK of your right to work in the United Kingdom. These checks and references may take up to three months for us to complete and/or verify.')
            )
          ),
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Governing law</strong></h5>',
              $('<p/>').append('Your contract of employment will be governed by and interpreted in accordance with English law and the parties hereby submit to the exclusive jurisdiction of the Courts of England and Wales except that any court of competent authority may enforce this agreement.')
            )
          ),
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Collective Agreements</strong></h5>',
              $('<p/>').append('There are no collective agreements in force in relation to your appointment.')
            )
          ),
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<p><h5><strong>Apple\'s Business Conduct Policy</strong></h5><p>',
              $('<p/>').append('Apple conducts business ethically, honestly and in full compliance with all laws and regulations. This applies to every business decision in every area of the company worldwide. Apple\'s Business Conduct policy, a copy of which is enclosed, reflects our continued commitment to doing business the right way. By accepting this offer, you acknowledge that you have received, read and understand Apple’s Business Conduct policy and that you agree to comply with Apple\'s Business Conduct policy.')
            )
          ),
          $('<div class="row vspace"/>').append(
            $('<div class="col-lg-12"/>').append(
              '<h5><strong>Definitions</strong></h5><br>"Apple Group"',
              $('<div class="hspace"/>').append(
                $('<p/>').append(
                  '\t\t\t',
                  'means Apple Inc., Apple UK and any holding company from time to time of Apple UK or of its holding company and any company which is from time to time a subsidiary of Apple UK, any such holding company or any such subsidiary, and any Associated Company.')
              ),
              '"Associated Company"',
              $('<div class="hspace"/>').append(
                $('<p/>').append(
                  '\t\t\t',
                  'means any company, twenty per cent or more of the equity share capital of which is owned directly or indirectly by Apple UK (applying the provisions of sections 1154 to 1157 inclusive of the Corporation Taxes Act 2010) or any subsidiary or holding company to which Apple UK or any such subsidiary or holding company renders managerial administrative or technical services.')
              ),
              '"Termination Date"',
              $('<div class="hspace"/>').append(
                '\t\t\t',
                $('<p/>').append(
                  '\t\t\t',
                  'means the date on which your employment with Apple UK terminates.')
              ),
              '"UK HR Web"',
              $('<div class="hspace"/>').append(
                $('<p/>').append(
                  '\t\t\t',
                  'means the Apple UK HR Web as amended from time to time. Access to this, located on Apple’s intranet, is granted once you become an employee of Apple UK.')
              ),
              $('<p/>').append('This Summary together with those sections of the UK HR Web expressed to be contractual, comprise your contract of employment with Apple UK. The UK HR Web also contains statements of various Apple policies and procedures in force from time to time, with which you are required to comply. Apple UK expects that you familiarize yourself and comply with its policies, procedures, and rules. You are responsible for checking the UK HRWeb on a regular basis throughout your employment. Those policies and procedures may be amended or withdrawn at Apple’s absolute discretion without prior notice to you.'),
              $('<p/>').append('In the event of any conflict between this Summary and the UK HR Web, this Summary shall prevail.'),
              $('<p/>').append('This Summary supersedes any previous statements or agreements in relation to your employment with any member of the Apple Group. Any future changes to your terms and conditions of employment will be notified to you or incorporated in the UK Retail Web.')
            )
          )
        )
        // end append
    );
}

function fnConvertDate(eventDate) {

    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    var year = d.getFullYear(),
        month = d.getMonth(),
        n_date = d.getDate(),
        day = d.getDay();

    return months[month] + ' ' + parseInt(n_date) + ', ' + year;

}


function fnConvertFullDate(eventDate) {

    var d = new Date(eventDate);
    console.log(d);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var year = d.getFullYear(),
        month = d.getMonth(),
        n_date = d.getDate(),
        day = d.getDay();

    return days[parseInt(day)] + ', ' + months[month] + ' ' + parseInt(n_date) + ', ' + year;

}


function fnTime_And_Half(amount, rate) {
    amount = (amount.indexOf(',') != -1) ? amount.split(',').join('') : amount;
    var total = (parseFloat(amount) + parseFloat((parseFloat(amount) * rate)));
    return formatCurrency(total);
}



function formatCurrency(total) {
    return parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
}

function fnFormatCurrency(total) {
    if (total) {
        total = (total.indexOf(',') != -1) ? total.split(',').join('') : total;
        return formatCurrency(total);
    } else {
        return '0.00';
    }
}

$(function() {
    function _fnAssignValue(targetElement, value) {
        document.getElementById(targetElement).value = value;
        $("#" + targetElement).attr("value", value);
    }

    function fnGetName(first, middlename, last) {

        var middle_inital = ((middlename) ? middlename.substring(0, 1) + ' ' : '');
        var fullname = first + " " + middle_inital + last;
        return fullname;
    }

    // render template
    fnView();

    // completed letter
    if (!$("input.calendar_button").length) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

        var arrParts = [
            [1, 'hidden_pg']
        ];

        showCompletedOfferLetter('incomplete', 'complete', arrParts);
    }
});
