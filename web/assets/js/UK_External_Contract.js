// UK External Contract
function concatAddr() {
  var addr = '';
  var addrFull = [];
  if (!arguments.length) {
    return addr;
  }
  for (i = 0; i < arguments.length; i++) {
    if(arguments[i]) {
      addrFull.push(arguments[i]);
    }
  }
  if (addrFull.length <= 1) {
    addr += addrFull[0];
    return addr;
  }
  for (j = 0; j < addrFull.length; j++) {
    addr += addrFull[j];
    if (j < addrFull.length) {
      addr += ', ';
    }
  }
  return addr.slice(0, -2);
}

function fnView() {
    $("#markup").html("").append(
        // Company Logo
        $('<div class="col-lg-12"/>').append(
            $('<div class="offerClause"/>').append(
                $('<div id="srt_eform_logo" class="text-right"/>').html('<img src=' + company.Logo + '>')
            )
        ),
        // OfferClause 1
        $('<div class="float-left"/>').append(
            $('<div class="offerClause"/>').append(
                $('<span/>').append(
                    $('<p/>').html(
                        fnConvertDate(employee.Initiation_Date)
                    )
                 ),
                $('<p/>').append(
                    $('<span/>').html(
                        employee.Candidate_First_Name + ' ' + employee.Candidate_Middle_Name + ' ' + employee.Candidate_Last_Name + '<br>'
                    ),
                    $('<span/>').html(employee.Address_1 + '<br>'),
                    $('<span/>').html((employee.Address_2) ? employee.Address_2 + '<br>' : ''),
                    $('<span/>').html((employee.Address_3) ? employee.Address_3 + '<br>' : ''),
                    $('<span/>').html(employee.City + '<br>'),
                    $('<span/>').html(employee.Postal_Code + '<br>'),
                    $('<span/>').html(employee.Country + '<br>')
                )
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html("Dear " + employee.Candidate_First_Name + ",")
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(
                ' '
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Private and Confidential</strong>'
            ),
            $('<p/>').html(
                'I am delighted to offer you the position of ' + employee.UK_Job_Title + ' with ' + employee.Entity + ' (&#34;Apple&#34;).'
            ),
            $('<p/>').html(
                'Outlined below are the main terms and conditions of your employment.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Commencement of Employment</strong><br>'
            )
        ),
        $('<div class="offerClause"/>').append(
            ((employee.Contract_Type == 'ASC_Permanent' || employee.Contract_Type == 'Homeworker' || employee.Contract_Type == 'Standard_Permanent') && employee.Parking == 'No') &&
            $('<H1/>').html(
                '<strong>Date of Start</strong>'
            ),
            ((employee.Contract_Type == 'ASC_Permanent' || employee.Contract_Type == 'Homeworker' || employee.Contract_Type == 'Standard_Permanent') && employee.Parking == 'No') &&
            $('<p/>').html(
                'Your employment with Apple will commence on a date to be confirmed, but no later than ' + employee.UK_Start_Date + '. Your continuous employment will start on the date you commence work with Apple. No employment with a previous employer counts towards your period of continuous employment.'
            ),
            ((employee.Contract_Type == 'ASC_Fixed _Term' || employee.Contract_Type == 'Fixed_Term') && employee.Parking == 'No') &&
            $('<H1/>').html(
                '<strong>Date of Start</strong>'
            ),
            ((employee.Contract_Type == 'ASC_Fixed _Term' || employee.Contract_Type == 'Fixed_Term') && employee.Parking == 'No') &&
            $('<p/>').html(
                'Your employment with Apple will commence on ' + employee.UK_Start_Date + ' and will terminate on ' + employee.UK_End_Date + ' without the need for notice unless previously terminated by either party giving the other the notice set out under the heading &#34;Termination&#34; below. No employment with a previous employer counts towards your period of continuous employment.'
            ),
            (employee.Contract_Type == 'Maternity_Coverage' && employee.Parking == 'No') &&
            $('<H1/>').html(
                '<strong>Date of Start</strong>'
            ),
            (employee.Contract_Type == 'Maternity_Coverage' && employee.Parking == 'No') &&
            $('<p/>').html(
                'Your employment with Apple will commence no later than ' + employee.UK_Start_Date + ' and as you are covering ' + employee.UK_Employee_Name_on_Maternity_Leave + ' maternity leave, this contract will terminate on ' + employee.UK_End_Date + ' or until ' + employee.UK_Employee_Name_on_Maternity_Leave + ' returns to work after her period of maternity leave, whichever is sooner. We cannot confirm at this point in time exactly how long ' + employee.UK_Employee_Name_on_Maternity_Leave + ' maternity leave will last, but if this is before ' + employee.UK_End_Date + ', your employment contract will end at that point and we will provide you with one month&#39;s written notice of this. No employment with a previous employer counts towards your period of continuous employment.'
            ),
            (employee.Contract_Type != '' && employee.Parking == 'Yes') &&
            $('<H1/>').html(
                '<strong>Date of Start</strong>'
            ),
            (employee.Contract_Type != '' && employee.Parking == 'Yes') &&
            $('<p/>').html(
                'Your employment by Apple shall commence on ' + employee.UK_Start_Date + ' in the UK, relocating to the US once your VISA/Work Permit has been secured.'
            ),
            (employee.Contract_Type != '' && employee.Parking == 'Yes') &&
            $('<p/>').html(
                'It is a condition of your employment that you are able to relocate to Cupertino (or such other location agreed with you prior to your employment) immediately upon request by Apple or any group company and in any event no later than ' + employee.US_Start_Date + '. Once you move from the UK to Apple U.S., your employment with Apple will terminate and you will be employed by Apple Inc on the terms and conditions prevailing at the relevant time.'
            )
        ),
       (employee.Contract_Type == 'ASC_Permanent' || employee.Contract_Type == 'Standard_Permanent') &&
       $('<div class="offerClause"/>').append( 
            $('<H1/>').html(
                '<strong>Probationary Period</strong>'
            ),
            $('<p/>').html(
                'Your employment with Apple is subject to a 3-month probationary period. This period may at any point during the initial 3-month period be extended by up to a further 3 months at Apple&#39;s sole discretion. Any extension to the probationary period will be notified in writing. During the probationary period, either you or Apple may terminate your employment by giving 1 week&#39;s written notice.'
            )
        ),
        (employee.Contract_Type == 'Homeworker') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Probationary Period</strong>'
            ),
            $('<p/>').html(
                'Your employment with Apple is subject to a 3-month probationary period during which your homeworking arrangements will be monitored. This period may at any point during the initial 3-month period be extended by up to a further 3 months at Apple&#39;s sole discretion. Any extension to the probationary period will be notified in writing. During the probationary period, either you or Apple may terminate your employment by giving 1 week&#39;s written notice. Apple may give you one week&#39;s notice to change to a workplace-based arrangement in Apple&#39;s offices if Apple considers the home-working arrangements to be unsatisfactory or if the requirements of your work change such that home-based work is no longer appropriate.'
            )
        ),
        (employee.Contract_Type == 'ASC_Fixed _Term' || employee.Contract_Type == 'Fixed_Term' || employee.Contract_Type == 'Maternity_Coverage') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Probationary Period</strong>'
            ),
            $('<p/>').html(
                'Your employment with Apple is subject to a ' + employee.Probation_Period_Length + ' probationary period. This period may at any point during the initial period be extended by up to 3 months at Apple&#39;s sole discretion. Any extension to the probationary period will be notified in writing. During the probationary period, either you or Apple may terminate your employment by giving 1 week&#39;s written notice.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>References, Background Checks and Right to Work</strong>'
            ),
            $('<p/>').html(
                'This offer is conditional on the receipt of satisfactory references from those referees nominated by you and such other referees or background checks as Apple may require.'
            ),
            $('<p/>').html(
                'Before commencing your employment with Apple, you must inform the People team if you are convicted of a criminal offence, including driving offences. You must also inform the People team of any new convictions arising during your employment. Apple reserves the right to terminate your employment, with or without notice or payment in lieu, in any case where it is discovered that you have an unspent conviction. (Spent convictions do not have to be declared). You warrant that you are not bound by any obligations that restrict you from carrying out any of your duties under this Agreement.'
            ),
            $('<p/>').html(
                'You warrant that you are entitled to work in the UK without any additional approvals. If requested, you must produce evidence of your continuing right to work in the UK at various intervals during your employment. You must tell Apple immediately of any changes in your immigration status which may affect your right to work in the UK.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>General Terms</strong>'
            ),
            $('<p/>').html(
                'In this position, you may be given instructions and direction by your direct line manager or by any other person authorised to do so by Apple. Apple also reserves the right to appoint any other person or persons to this position jointly with you. These persons may be assigned duties and responsibilities that are identical or similar to yours. Apple may change your job title from time to time as it considers reasonable or necessary. You must carry out any duty consistent with your job title that Apple may assign to you and comply with any reasonable instruction that Apple gives you.'
            ),
            $('<p/>').html(
                'Apple may require you to work for or assign your employment to any Group Company at any time.'
            ),
            $('<p/>').html(
                'You agree that you will not correspond with the media or competitors in any way referring to Apple without prior permission of Apple.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Place of Work</strong>'
            ),
            (employee.Location != 'Homeworking' && employee.Contract_Type != 'ASC Permanent') &&
            $('<p/>').html(
                'Your normal place of work will be in Apple&#39;s office in ' + employee.Location + '. ' + ((employee.Location == 'Central London' || employee.Location == 'Hanover Street' || employee.Location == 'Charter House Street' || employee.Location == 'Glasshouse Street' || employee.Location == 'Stockley Park') ? 'You acknowledge that you are aware of Apple&#39;s plans to consolidate its London offices in or around 2021, and you accept that it is likely that you will be required to move location to another office within the London region, which includes Battersea and this will be confirmed to you at Apple&#39;s discretion.  From time to time it may be necessary for you to work elsewhere.  Apple may change your normal place of work on giving you whatever period of notice Apple considers reasonable.' : '')
            ),
            (employee.Location == 'Stockley Park ASM') &&
            $('<p/>').html(
                'Your administrative base is Apple&#39;s offices at Stockley Park, but this role requires you to travel extensively within the UK and you are not expected to attend Apple&#39;s offices at Stockley Park on a day to day basis. You will be able to claim your reasonable travel expenses, in line with Apple&#39;s expenses policy, for travel which you undertake while performing your role for Apple, including travel to and from Apple&#39;s offices at Stockley Park. You acknowledge that you are aware of Apple&#39;s plans to consolidate its London offices in or around 2021, and you accept that it is likely that you will be required to move location to another office within the London region, which includes Battersea and this will be confirmed to you at Apple&#39;s discretion. From time to time it may be necessary for you to work elsewhere.  Apple may change your normal place of work on giving you whatever period of notice Apple considers reasonable.'
            ),
            (employee.Location == 'Homeworking') &&
            $('<p/>').html(
                'Your normal place of work will be your home address from time to time, which is currently ' + concatAddr(employee.Address_1, employee.Address_2, employee.Address_3, employee.City, employee.Postal_Code, employee.Country) + '. You may be required from time to time to visit and work at such other locations and for such times as Apple considers necessary for the proper performance of your duties. You are required to inform us as soon as possible if you plan to change your home address. You confirm that you are not in breach of any covenant or agreement in doing work at your home.'
            ),
            $('<p/>').html(
                'Apple may require you to carry out work for or work at the offices of any Group Company at any time. Apple may transfer you to any Group Company on a full-time or part-time, temporary or permanent basis at any time. While you work for, or are seconded to any Group Company, you will owe the same duties towards that Group Company as you owe towards Apple.'
            ),
            $('<p/>').html(
                '&#34;Group Company&#34; means any holding company or subsidiary of Apple from time to time and any subsidiary of any holding company of Apple (other than Apple) from time to time, where holding company and subsidiary have the meanings given in sections 1159 and 1173 of the Companies Act 2006 but applied to companies established or registered in any part of the world.<br>From time to time it may be necessary for you to work elsewhere. Apple may change your normal place of work on giving you whatever period of notice Apple considers reasonable.'
            ),
            $('<p/>').html(
                'You may be required to travel within the UK and abroad. In these circumstances, Apple will pay all reasonable costs incurred by you in line with the expenses and travel policy in force at the time of travel.'
            ),
            $('<p/>').html(
                'For the avoidance of doubt, Apple will not require you to work outside of the UK for a period greater than one month, unless you agree.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Hours of Work</strong>'
            ),
            ((employee.Employee_Type.indexOf('Full Time') > -1) && (employee.Contract_Type != 'ASC_Fixed _Term' && employee.Contract_Type != 'ASC_Permanent')) &&
            $('<p/>').html(
                'The core hours of work are no less than 35 hours from 9:00 am - 5:00 pm Monday to Friday, with an unpaid lunch break of 1 hour. ' + ((employee.Employee_Type == 'Full Time IS-T') ? 'However, given the nature of your work, Apple reserves the right to change these core hours of work and require you to work different days or times as required to meet business needs. In any event you are required to work such hours as may be necessary to perform your duties and deliver your agreed objectives.' : '')
            ),
            ((employee.Employee_Type.indexOf('Full Time') > -1) && (employee.Contract_Type == 'ASC_Fixed _Term' || employee.Contract_Type == 'ASC_Permanent')) &&
            $('<p/>').html(
                'The core hours of work are no less than 40 hours from Thursday through to Monday, with an unpaid lunch break of 1 hour. ' + ((employee.Location == 'Stockley Park ASM') ? 'If you have no fixed place of work, the travel time from your home to your first appointment and from your last appointment to your home will be treated as working time, in accordance with the law from time to time in force.' : '')
            ),
            /*
            ((employee.Employee_Type.indexOf('Full Time') > -1) && employee.Contract_Type == 'ASC_Fixed _Term') &&
            $('<p/>').html(
                ((employee.Location == 'Stockley Park ASM') ? 'These core hours may be amended in agreement with your line manager. You will however be required to work such other hours as may be necessary to perform your duties and deliver your agreed objectives.' : '')
            ), //changed to remove additional space when != Stockley but == fulltime and asc fixed term psaludares 2018/08/20 SERVICES-35157
            */
            ((employee.Employee_Type.indexOf('Full Time') > -1) && employee.Contract_Type == 'ASC_Fixed _Term' && employee.Location == 'Stockley Park ASM') &&
            $('<p/>').html(
                'These core hours may be amended in agreement with your line manager. You will however be required to work such other hours as may be necessary to perform your duties and deliver your agreed objectives.'
            ), //changed to remove additional space when != Stockley but == fulltime and asc fixed term psaludares 2018/08/20 SERVICES-35157

            ((employee.Employee_Type.indexOf('Part Time') > -1) && (employee.Contract_Type == 'ASC_Fixed _Term' || employee.Contract_Type == 'ASC_Permanent')) && //this is the first condition to change ** due to emeia standard verbiage psaludares 2018/08/20 SERVICES-35157
            $('<p/>').html(
                'The core hours of work are no less than 24 hours from Thursday through to Monday, with an unpaid lunch break of 1 hour.'
            ),
            ((employee.Employee_Type.indexOf('Part Time') > -1) && (employee.Contract_Type == 'ASC_Fixed _Term' || employee.Contract_Type == 'ASC_Permanent')) && // same condition from above, adds verbiage 'These core hours...' psaludares 2018/08/20 SERVICES-35157
            $('<p/>').html(
                'These core hours may be amended in agreement with your line manager. You will however be required to work such other hours as may be necessary to perform your duties and deliver your agreed objectives.'
            ),

            //((employee.Employee_Type.indexOf('Part Time') > -1) && (employee.Contract_Type != 'ASC_Fixed _Term' || employee.Contract_Type != 'ASC_Permanent')) && // second condition *** Part Time is now Part_Time for this and the preceding + should be AND psaludares 2018/08/20
            ((employee.Employee_Type.indexOf('Part Time') > -1) && (employee.Contract_Type != 'ASC_Fixed _Term' && employee.Contract_Type != 'ASC_Permanent')) &&
            $('<p/>').html(
                'The core hours of work are no less than ' + employee.EMEIA_Standard_Weekly_Hours + ' hours, normally between 9:00 am to 5:00 pm Monday through Friday,  with an unpaid lunch break of 1 hour.'
            ),
            //((employee.Employee_Type.indexOf('Part Time') > -1) && (employee.Contract_Type != 'ASC_Fixed _Term' || employee.Contract_Type != 'ASC_Permanent')) && //should be and psaludares 2018/08/20 SERVICES-35157
            ((employee.Employee_Type.indexOf('Part Time') > -1) && (employee.Contract_Type != 'ASC_Fixed _Term' && employee.Contract_Type != 'ASC_Permanent')) &&
            $('<p/>').html(
                'These core hours may be amended in agreement with your line manager. You will however be required to work such other hours as may be necessary to perform your duties and deliver your agreed objectives.'
            ),
            (employee.Contract_Type != 'ASC_Fixed _Term') &&
            $('<p/>').html(
                'You will not receive any additional remuneration for hours worked outside of the core hours unless this is specifically agreed with your line manager in line with Apple&#39;s policies.'
            ),
            (employee.Contract_Type == 'ASC_Fixed _Term') &&
            $('<p/>').html(
                'You may be required to work overtime in addition to your normal hours of work if instructed to do so by your manager on reasonable notice or if necessary for the proper performance of your duties. Apple does not guarantee that overtime will be available to you. Overtime will be paid at a standard hourly rate. Apple reserves the right to change this rate and notify you of such change as soon as possible.'
            )
        ),
        (employee.On_Call_Allowance == 'Yes') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Overtime</strong>'
            ),
            $('<p/>').html(
                'If you have to respond to a page and carry out any subsequent work at any point during the On Call Time, you will be paid for any hours of that working time at the rate of 1.5 x your normal hourly rate. This pay rate is only for hours worked during On Call Time, above your normal working hours. Prior to submitting to Payroll, all hours will be authorized by your line manager and payment will be made one month in arrears.'
            )
        ),
        (employee.Location == 'Homeworking') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'You are entitled to a rest break of 20 minutes for every six hours that you work. It is your responsibility to ensure that you take this rest break.<br>You agree to comply with all health and safety guidelines and instructions which Apple may give to you from time to time and to complete without delay all health and safety questionnaires that Apple may send you from time to time.<br>You agree to comply with Apple&#39;s Electronic Systems and Communications Policy from time to time in force, which is available on the People site.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'During your working hours, you will work only for Apple and do all in your power to promote and develop its business. You also agree not to do anything in your spare time that is against the interests of Apple and in particular not to work for any competing business. In addition, you agree to inform Apple of any other employment or outside interests (paid or otherwise) that may impair your ability to fulfill your contractual obligations to Apple.'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(
                'By signing this agreement, you confirm your agreement that the limit of 48 hours a week under regulation 4(1) of the Working Time Regulations 1998, as amended from time to time, shall not apply to your working hours and that your average working time may therefore exceed 48 hours a week. You may give 3 months&#39; written notice at any time to terminate your agreement to this.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Remuneration</strong><br>'
            )
        ),
        $('<div class="offerClause"/>').append( // test this due to part time thing
            $('<H1/>').html(
                '<strong>Basic Salary</strong>'
            ),
            $('<p/>').html(
                'Your basic salary will be £' + employee.Annual_Salary + ' per annum' + (((employee.Employee_Type.indexOf('Part Time') > -1) || (employee.Contract_Type == 'ASC_Fixed _Term' || employee.Contract_Type == 'Maternity_Coverage')) ? ' pro rated' : '') + '. You will be paid monthly in arrears, less appropriate deductions, normally on the 26th of each month, into your nominated bank account.'
            )
        ),
        (employee.Sign_On_Bonus == 'Sign on') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Sign-On Bonus</strong>'
            ),
            $('<p/>').html(
                'You will receive a gross sign-on bonus of £' + stripDecimals(employee.Bonus_Amount) + ' when your employment with Apple begins. This payment will be subject to the usual statutory deductions and will be paid through the first or second payroll run after your employment has commenced. If you voluntarily leave Apple within one year of the payment date, you will be required to repay a proportionate part of such bonus, whereby the amount to be repaid reflects a decrease by 1/12 for each complete month you are in active employment beyond the payment date.'
            )
        ),
        (employee.Sign_On_Bonus == 'Sign on Installments') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Sign-On Bonus</strong>'
            ),
            $('<p/>').html(
                'You will receive a gross sign-on bonus of £' + stripDecimals(employee.Total_Bonus_Amount()) + ', the first £' + stripDecimals(employee.Bonus_Amount) + ' of which is payable when your employment with Apple begins and will be paid through the first or second payroll run after your employment has commenced. (&#34;First Installment&#34;). The second installment of £' + stripDecimals(employee.Second_Bonus) + ' (&#34;the Second Installment&#34;) will be paid in the payroll run 12 months after your employment with Apple begins. These payments will be subject to normal statutory deductions. Payment of the First and Second Installments is dependent on you being in active employment (and not under notice either given or received) at the time of the respective payment dates. If you voluntarily leave Apple within one year of the payment dates of the First and Second Installment, you will be required to pay a proportionate part of such installment, whereby the amount to be repaid reflects a decrease in each installment by 1/12 for each complete month you are in active employment beyond the First or Second Installment payment date, as appropriate.'
            )
        ),
        (employee.Bonus == 'VP and Director') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Bonus</strong>'
            ),
            $('<p/>').html(
                'You will be eligible for participation in the VP & Director Bonus Plan from time to time in force, subject to programme approval. Details about the ' + employee.UK_Fiscal_Year + ' plan, including eligibility, financial measurements and bonus targets, shall be fixed by Apple for the relevant time period as indicated in the relevant plan document and sent to you separately. Any specific plan feature and/ or bonus payment shall not continue to apply for any future reference period outside the FY as indicated by Apple. Therefore, you should be aware that Apple reserves the right to amend or withdraw the VP & Director Bonus Plan at any time at its discretion implying that you shall not have any contractual or otherwise acquired (future) rights to a bonus payment based on any previous payment or previous plan conditions. You should have no right to a bonus if your employment terminates for any reason or you are under notice of termination (whether given by you or by Apple) at or prior to the date when a bonus might otherwise have been payable.'
            )
        ),
        /*(employee.Sales_Incentive == 'Yes') &&  psaludares 2018/08/20 SERVICES-35157
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Sales Incentive Compensation Plan</strong>'
            ),
            $('<p/>').html(
                'In your capacity of ' + employee.UK_Job_Title + ', you will be eligible for Apple’s Sales Incentive Compensation Plan in force from time to time. Details of the Incentive Compensation Plan will be communicated to you separately by your Manager.'
            )
        ),
        */
        (employee.Sales_Incentive == 'Standard') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Sales Incentive Compensation Plan</strong>'
            ),
            $('<p/>').html(
                'In your capacity of  ' + employee.UK_Job_Title + ', you will be eligible for Apple’s Sales Incentive Compensation Plan in force from time to time. Details of the Incentive Compensation Plan will be communicated to you separately by your Manager.'    
            ),
            $('<p/>').html(
                'Apple reserves the right to deduct from your salary or from other payments due to you any amount from time to time owing from you to Apple or any Group Company.'    
            )
            
        ),

        (employee.Sales_Incentive == 'Sales30') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Sales Incentive Compensation Plan</strong>'
            ),
            $('<p/>').html(
                'You will be eligible for Apple’s Sales Incentive Compensation Plan in place for the year in which your employment commences. The commission at 100% of objectives met, equals 30% of On Target Earnings, or approximately 43% of the base salary actually paid to you during the fiscal year. Details of the Incentive Compensation Plan will be communicated to you separately by your Manager. For the first three (3) months of your employment,  we guarantee your variable income for 100% draw maximum.'    
            ),
            $('<p/>').html(
                'If your employment commences after the 16th day of the month, your entitlement to participate in the Sales Incentive Compensation Plan (including the guarantee draw referenced above) will not commence until the following fiscal month. In accordance with the terms of our Sales Incentive Compensation Plan, any payments due to you in respect of incentive compensation will usually be payable in the second monthly payroll following the month in which the commission is deemed to have been earned. '    
            )
        ),

        (employee.Sales_Incentive == 'Sales40') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Sales Incentive Compensation Plan</strong>'
            ),
            $('<p/>').html(
                'You will be eligible for Apple’s Sales Incentive Compensation Plan in place for the year in which your employment commences. The commission at 100% of objectives met, equals 40% of On Target Earnings, or approximately 67% of the base salary actually paid to you during the fiscal year. Details of the Incentive Compensation Plan will be communicated to you separately by your Manager. For the first three (3) months of your employment,  we guarantee your variable income for 100% draw maximum.  '    
            ),
            $('<p/>').html(
                'If your employment commences after the 16th day of the month, your entitlement to participate in the Sales Incentive Compensation Plan (including the guarantee draw referenced above) will not commence until the following fiscal month. In accordance with the terms of our Sales Incentive Compensation Plan, any payments due to you in respect of incentive compensation will usually be payable in the second monthly payroll following the month in which the commission is deemed to have been earned. '    
            )
        ),

        ((employee.Bonus == 'Discretionary Bonus') && (employee.JobLevel == 'MGR3' || employee.JobLevel == 'ICT6' || employee.JobLevel == 'IC6')) &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Discretionary Bonus</strong>'
            ),
            $('<p/>').html(
'You will be eligible to receive an annual cash bonus with a target bonus amount of 20% of your base salary.  Bonuses are discretionary and awarded based on your individual performance, Apple’s overall performance, and when your employment begins during the fiscal year. As a result, if a bonus is awarded in the first year of employment typically range between 10% and 20% of base salary. Whether bonuses are paid and the amount and timing of any bonus payments is determined at the sole discretion of Apple.'  
            )
        ),


         ((employee.Bonus == 'Discretionary Bonus') && (employee.JobLevel == 'MGR2' || employee.JobLevel == 'ICT5' || employee.JobLevel == 'IC5')) &&
         $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Discretionary Bonus</strong>'
            ),
            $('<p/>').html(
'You will be eligible to receive an annual cash bonus with a target bonus amount of 15% of your base salary.  Bonuses are discretionary and awarded based on your individual performance, Apple’s overall performance, and when your employment begins during the fiscal year.  As a result, if a bonus is awarded in the first year of employment typically range between 5% and 15% of base salary. Whether bonuses are paid and the amount and timing of any bonus payments is determined at the sole discretion of Apple.'
            )
        ),


         ((employee.Bonus == 'Discretionary Bonus') && (employee.JobLevel == 'MGR1' || employee.JobLevel == 'ICT4' || employee.JobLevel == 'IC4')) &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Discretionary Bonus</strong>'
            ),
            $('<p/>').html(
'You will be eligible to receive an annual cash bonus with a target bonus amount of 10% of your base salary.  Bonuses are discretionary and awarded based on your individual performance, Apple’s overall performance, and when your employment begins during the fiscal year.  As a result, if a bonus is awarded in the first year of employment typically range between 5% and 10% of base salary. Whether bonuses are paid and the amount and timing of any bonus payments is determined at the sole discretion of Apple.'
            )
        ),


        ((employee.Bonus == 'Discretionary Bonus') && (employee.JobLevel == 'IC3' || employee.JobLevel == 'ICT3' || employee.JobLevel == 'SUP' || employee.JobLevel == 'SUP2')) &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Discretionary Bonus</strong>'
            ),
            $('<p/>').html(
                'You may be eligible to receive a discretionary bonus based on your individual performance and ' + 'Apple' + '&#39;s overall performance. Whether a bonus is paid and the amount and timing of the bonus payment is at the sole discretion of ' + 'Apple' + '.'
            )
        ),

         /*$('<div class="offerClause"/>').append( confirmed by the reporter to remove
            $('<p/>').html(
                'Apple reserves the right to deduct from your salary or from other payments due to you any amount from time to time owing from you to Apple or any Group Company.'
            )
            
        ),*/
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Benefits</strong>'
            ),
            $('<p/>').html(
                'The benefits you will initially receive are detailed on the People site. Your eligibility for any benefits provided by Apple (and, where appropriate, your dependents) is subject to the rules or terms of the relevant scheme or policy (as amended from time to time) and you (and, where appropriate, your dependents) being eligible to participate in or benefit from such schemes or policies pursuant to their rules or terms at a cost and on terms which are acceptable to Apple. Apple may replace or withdraw such schemes or policies at any time on reasonable notice to you.'
            )
        ),
        (employee.UK_Car_Cash_Allowance != '') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Car Cash Allowance</strong>'
            ),
            $('<p/>').html(
                'You are entitled to a car cash allowance subject to the terms of the Car Policy from time to time in force, available on the People site. The car cash allowance for your grade is currently £' + stripDecimals(employee.UK_Car_Cash_Allowance) + ' per annum. You should be aware that the car cash allowance amount may decrease as well as increase and any car cash allowance received in a previous year does not confer any entitlement in future years. You are responsible for checking the Car Policy on a regular basis for details of the car cash allowance from time to time in force.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Insurance</strong>'
            ),
            $('<p/>').html(
                'Apple will provide you with private dental and health insurance, and your dependents with private health insurance. In addition, Apple will provide you with life insurance, subject to the cap in force at the time. Apple also operates a Long Term Disability Plan. Details of all of these benefits are on the People site.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Group Personal Pension</strong>'
            ),
            $('<p/>').html(
                'Apple provides an online Group Personal Pension (GPP). There are various contribution tiers under the plan. Please see the People site for more details. In accordance with its statutory obligations, Apple automatically enrolls qualifying employees in the GPP at the matching level from time to time in force. Where applicable, such contributions shall be made by way of a deduction from your salary. Further information can be found in the Apple Benefits Portal.'
            )
        ),
        (employee.Location == 'Homeworking') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Expenses and Equipment and Insurance</strong>'
            ),
            $('<p/>').html(
                'Details of the Travel, Home Office and Expense Reimbursement policy are available on the People site. You must comply with this policy at all times.'
            ),
            $('<p/>').html(
                'You shall not do, cause or permit any act or omission which will invalidate the insurance policy covering any equipment provided to you by Apple for your use during your employment (&#34;Apple Equipment&#34;).'
            )
        ),
        (employee.Location == 'Homeworking') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Right to Enter</strong>'
            ),
            $('<p/>').html(
                'You consent to Apple&#39;s representatives, at reasonable times and on reasonable notice, entering your home address to:'
            ),
            $('<p/>').append(
                $('<ul/>').append(
                    $('<li/>').html(
                        'install, inspect, replace, repair, maintain or service the Apple Equipment during your employment;'
                    ),
                    $('<li/>').html(
                        'carry out health and safety risk assessments of the Apple Equipment and your workstation during your employment; and'
                    ),
                    $('<li/>').html(
                        'recover the Apple Equipment on or after termination of your employment.'
                    )
                )
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Holidays</strong>'
            ),
            (employee.Contract_Type == 'Standard_Permanent' || employee.Contract_Type == 'Homeworker') &&
            $('<p/>').html(
                'You will be entitled to 27 days annual holiday ' + ((employee.Employee_Type.indexOf('Part Time') > -1) ? 'pro rated ' : '') + 'in each holiday year, plus the usual public holidays, until you have completed 5 years continuous service within the Apple Group. Thereafter you will be entitled to 29 days annual holiday, plus the usual public holidays. The holiday year runs from 1 January to 31 December. Holidays are accrued on a monthly basis for the purposes of new starters and leavers. All holidays are to be taken at reasonable times to be agreed with Apple. You should try to take all your holiday within the holiday year. For further details about annual leave, please see the People site.'
            ),
            (employee.Contract_Type == 'ASC_Permanent') &&
            $('<p/>').html(
                'Your holiday entitlement is based on your length of service. You will be entitled to 22 days annual holiday ' + ((employee.Employee_Type.indexOf('Part Time') > -1) ? 'pro rated ' : '') + 'for your first working year at Apple, this then increases by one day of holiday entitlement each year you are at Apple until you have completed 4 years&#39; service within the Apple Group when you will be entitled to 26 days. In addition, you will be entitled to the usual statutory public holiday days per annum as determined by Apple. The holiday year runs from 1 January to 31 December, and all holidays are to be taken at reasonable times to be agreed with Apple. You should try to take all your holiday within the holiday year. For further details about annual leave, please see the People site.'
            ),
            (employee.Contract_Type == 'ASC_Fixed _Term' || employee.Contract_Type == 'Fixed_Term' || employee.Contract_Type == 'Maternity_Coverage') &&
            $('<p/>').html(
                'You will be entitled to 27 days annual holiday pro rated for the duration of the agreement plus any UK Bank or Public holidays that fall within your period of employment. More details are available in the holiday policy available on the People site.'
            ),
            $('<p/>').html(
                'For the avoidance of doubt, the first four weeks of the leave you take in any holiday year shall be deemed to be the leave derived from regulation 13 of the Working Time Regulations 1998, as amended from time to time, and the remainder shall be deemed to be derived from regulation 13A of those regulations.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Sickness Absence</strong>'
            ),
            $('<p/>').html(
                'Apple&#39;s Absence and Sickness Policy is available on the UK People site. You agree to consent to medical examinations (at Apple&#39;s expense) by a doctor nominated by Apple should Apple so require. You agree that any report produced in connection with any such examination may be disclosed to Apple and Apple may discuss the contents of the report with the relevant doctor.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Termination of Employment</strong>'
            ),
            (employee.Termination == '3 Months') &&
            $('<p/>').html(
                'Should you or Apple wish to terminate your employment, not less than 3 months&#39; written notice must be given.'
            ),
            (employee.Termination == '1 Month') &&
            $('<p/>').html(
                'Should you wish to terminate your employment, you must give Apple one month&#39;s notice in writing. Apple will give you notice as set out below:'
            ),
            (employee.Termination == '1 Month') &&
            $('<p/>').append(
                $('<ul/>').append(
                    $('<li/>').html(
                        'one calendar month&#39;s notice in writing until you have been continuously employed for four complete years; and'
                    ),
                    $('<li/>').html(
                        'one additional week&#39;s notice for each completed year of continuous employment thereafter up to a maximum of 12 weeks&#39; notice.'
                    )
                )
            ),
            (employee.Termination == 'Fixed Term') &&
            $('<p/>').html(
                'Your employment will terminate automatically on ' + employee.UK_End_Date + ' without the need for prior notice. Should you or Apple wish to terminate your employment earlier, not less than 1 month&#39;s written notice must be given.'
            ),
            $('<p/>').html(
                'Apple reserves the right, in the event of such termination, to pay you in lieu of base salary (less appropriate deductions) as at the date of termination for the notice period (or any part of it) to which you would have been entitled under this Agreement.<br>You shall not be entitled to any payment in lieu or compensation on termination for the loss of any rights or benefits under any share or bonus plan operated by Apple or any Group Company in which you participate. You shall not be entitled to any payment in respect of any holiday entitlement that would have accrued during the notice period.<br><br>Termination without notice may occur in circumstances set out in the Disciplinary Procedure on the People site.<br><br>On termination of employment, you agree to hand over to Apple or Apple&#39;s appointed agent all documents, electronic materials, books, records, correspondence, Proprietary Information (as defined in the Confidentiality and Intellectual Property Agreement appended to this Agreement) and other papers or materials regardless of nature relating to the business of Apple and for any Group Company. You agree not to make any copies of this information and also not to keep copies of any electronic documentation, email, or other electronic information, relating to Apple&#39;s property and/or Confidential Information, whether on paper, magnetic, electronic or optical media, or any other media. You also agree to return all Apple and Group Company equipment and keys and other property of Apple and Group Company prior to your termination date.'
            ),
            $('<p/>').html(
                'Apple may at any time during your notice period require you to remain away from its premises; to work from home; to carry out special projects outside the normal scope of your duties; not to contact clients, customers or suppliers; not to contact any other employee without Apple&#39;s permission and not to carry out some or all of your normal duties. Apple may appoint another person to carry out any of your duties at such times. If Apple exercises this right, you will receive the salary and benefits to which you are entitled and you must continue to comply with your duties under your contract of employment.'
            ),
            $('<p/>').html(
                'If either party has served notice to terminate the employment, Apple may require you to take any accrued but unused holiday during the notice period.'
            ),
            $('<p/>').html(
                'Apple&#39;s rights to terminate the employment under the terms of this Agreement apply even when such termination would or might cause you to forfeit any entitlement to sick pay, permanent health insurance or other benefits.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Payment for Holiday on Termination</strong>'
            ),
            $('<p/>').html(
                'You will have no entitlement to any payment in lieu of accrued but untaken holiday except on termination of the employment. If Apple has terminated or would be entitled to terminate your employment without notice or if you have terminated the employment in breach of this agreement, any payment due in lieu of accrued but untaken holiday shall be limited to your statutory entitlement under the Working Time Regulations 1998, as amended from time to time.'
            ),
            $('<p/>').html(
                'If on termination of the employment you have taken more holiday than your accrued holiday entitlement, Apple shall be entitled to deduct the excess holiday pay from any payments due to you.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Collective Agreements</strong>'
            ),
            $('<p/>').html(
                'There are no collective agreements that apply to your employment with Apple.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Grievances, Disciplinary Issues, and Suspension</strong>'
            ),
            $('<p/>').html(
                'If you have a grievance relating to your employment, you should raise this in accordance with Apple&#39;s Grievance Policy. Apple has a Disciplinary Procedure that is designed to apply when a disciplinary issue arises. Like all of Apple&#39;s policies, these can be found on the People site.'
            ),
            $('<p/>').html(
                'Apple may suspend you in order to investigate any aspect of or allegation relating to your performance or conduct or to follow disciplinary proceedings. Apple may attach conditions to any such suspension, and you must comply with any such conditions and cooperate fully with any investigation. During any period of suspension, you would normally receive the same pay and benefits as if you were at work, although Apple reserves the right to restrict access to Apple and Group Company premises and computer systems. Before doing so, Apple would normally follow the procedure set out in the Disciplinary Procedure.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Post-Termination Restrictions</strong>'
            ),
            $('<p/>').html(
                'You will not, without prior written consent from Apple, within the Restricted Area:'
            ),
            $('<p/>').append(
                $('<ul/>').append(
                    $('<li/>').html(
                        'for a period of 6 months after the date your employment terminates (the &#34;Termination Date&#34;) directly or indirectly encourage or try to encourage any Client (or any Prospective Client) with whom you had material dealings on behalf of Apple during the 12 months prior to the Termination Date, either not to give custom or to take custom away from Apple or any Group Company;'
                    ),
                    $('<li/>').html(
                        'for a period of 6 months after the Termination Date directly or indirectly solicit or try to solicit the custom of any Client (or any Prospective Client) with whom you had material dealings on behalf of Apple during the 12 months prior to the Termination Date, with a view to supplying that Client or Prospective Client with Restricted Products or Services;'
                    ),
                    $('<li/>').html(
                        'for a period of 6 months after the Termination Date directly or indirectly entice away or try to entice away from Apple or any Group Company any Key Person; or employ or enter into partnership or association with or retain the services of any Key Person or offer to do so.'
                    ),
                    (employee.Non_Compete == '3 Months' || employee.Non_Compete == '6 Months') &&
                    $('<li/>').html(
                        'for a period of 6 months after the Termination Date directly or indirectly supply Restricted Products or Services to any Client or any Prospective Client with whom you had material dealings on behalf of Apple during the 12 moths prior to the Termination Date;'
                    ),
                    (employee.Non_Compete == '3 Months') &&
                    $('<li/>').html(
                        'for a period of 3 months after the Termination Date directly or indirectly, in competition with Apple or any Group Company (i) be employed or engaged in, or (ii) perform services in respect of, or (iii) be otherwise concerned with the provision of, research into, development, manufacture, supply or marketing of any Restricted Products or Services.'
                    ),
                    (employee.Non_Compete == '6 Months') &&
                    $('<li/>').html(
                        'for a period of 6 months after the Termination Date directly or indirectly, in competition with Apple or any Group Company (i) be employed or engaged in, or (ii) perform services in respect of, or (iii) be otherwise concerned with the provision of, research into, development, manufacture, supply or marketing of any Restricted Products or Services.'
                    )
                )
            ),
            $('<p/>').html(
                'For the purposes of this Agreement, the following definitions shall apply:'
            ),
            $('<p/>').append(
                $('<ul/>').append(
                    $('<li/>').html(
                        '&#34;Client&#34; means any person, firm, company or other organisation whatsoever to whom Apple or any Group Company has supplied goods or services.'
                    ),
                    $('<li/>').html(
                        '&#34;Prospective Client&#34; means any person who at any time during the period of 12 months immediately before the Termination Date had discussions with Apple or any Group Company or was involved in a pitch, tender, presentation, negotiation or was invited to enter into or participate in any discussion, pitch, tender, presentation or negotiation, with Apple or any Group Company, with a view to receiving products or services from Apple or any Group Company, in which you were materially involved, for which you had responsibilities or about which you obtained or otherwise received Proprietary Information;'
                    ),
                    $('<li/>').append(
                        $('<span/>').html(
                            '&#34;Key Person&#34; means any individual who for at least six months prior to the Termination Date and on the Termination Date was engaged or employed as an employee, director or consultant by Apple or any Group Company (other than an individual in business on his/her own account providing professional independent advisory services to Apple or any Group Company), with whom you worked to a material extent or for whom you had managerial responsibility at any time during that period, and'
                        ),
                        $('<ul/>').append(
                            $('<li/>').append(
                                'who had material contact with Clients or suppliers of Apple or any Group Company in performing his or her duties of employment or engagement; and/or'
                            ),
                            $('<li/>').append(
                                'who was a member of the management team of Apple or any Group Company; and/or'
                            ),
                            $('<li/>').append(
                                'who was a member of the same department or team as you of Apple or any Group Company.'
                            )
                        )
                    ),
                    $('<li/>').html(
                        '&#34;Restricted Area&#34; means the UK, or any other country where, on the Termination Date, Apple and/or any Group Company provides, develops, sells, supplies, manufactures or researches its products or services and with which country you were involved to a material extent during the period of 12 months immediately before the Termination Date where Apple or any Group Company is intending within 3 months following the Termination Date to provide, develop, sell, manufacture or market its products or services and where you have knowledge of such intention.'
                    ),
                    $('<li/>').html(
                        '&#34;Restricted Products or Services&#34; means any products or services which compete with or are of the same or similar kind as any products or services provided, researched, developed, manufactured, supplied or marketed by Apple or any Group Company in the ordinary course of their business during the period of 12 months immediately before the Termination Date and in respect of which you were directly concerned, were materially involved or had responsibility during your employment by Apple, or about which you obtained or otherwise received Confidential Information.'
                    )
                )
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Proprietary Information, Intellectual Property and Inventions</strong>'
            ),
            $('<p/>').html(
                'Your employment by Apple creates a relationship of confidence and trust with respect to any information of a confidential, proprietary, and secret nature that may be disclosed to you or otherwise learned by you in the course of your employment.'
            ),
            $('<p/>').html(
                'Furthermore, you agree that during the course of your employment, your job functions may require you to make, conceive, or improve (solely by you or jointly with others) inventions, ideas, discoveries, designs, plans, manufacturing methods, formulas, computer programs, databases, processes, techniques, original works of authorship, documentation, and other materials.'
            ),
            $('<p/>').html(
                'By signing this Agreement, you hereby agree to comply with the terms of the Confidentiality and Intellectual Property Agreement appended to this Agreement.'
            ),
            $('<p/>').html(
                'You authorize Apple to notify others, including customers of Apple, and any future employers you may have, of the terms of this Agreement, the Confidentiality and Intellectual Property Agreement incorporated into this Agreement, and your responsibilities under this Agreement.'
            ),
            $('<p/>').html(
                'The above provisions in this section remain in force notwithstanding termination of your employment.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Policies and Procedures</strong>'
            ),
            $('<p/>').html(
                'On receipt of your acceptance of this offer, you will receive a pre-induction pack, which will include details of Apple&#39;s policies and procedures that are relevant for you to read before your employment commences. Apple&#39;s policies and procedures will be available for you to read when you start, and you must ensure that you read them in your first 2 weeks with Apple. Should you have any queries or issues regarding your compliance with these policies, please do not hesitate to contact me.'
            ),
            $('<p/>').html(
                'Apple expects that you familiarise yourself and comply with its policies, procedures, and rules. Copies of Apple&#39;s key policies including Business Conduct Policy, Confidentiality and Intellectual Property Agreement, and Email Policy will be sent to you upon receipt of a signed copy of this letter. These and other Apple policies are non-contractual and may be amended or replaced from time to time, and new policies may be introduced. You will be notified of any such changes. We draw your attention to the Business Conduct Policy, which (along with other policies) sets out important standards of behaviour, which are expected of you as an Apple employee.'
            ),
            (employee.Location == 'Homeworking') &&
            $('<p/>').html(
                'You must comply with all Apple policies. The policies which are particularly relevant to your homeworking include, but are not limited to, the following policies: Employee Use of Electronic Systems and Communications, Home Office Ergonomic Guidelines, Property Protection Guidelines, Securing Your Technology at Work and Home, Information Security, Personnel Information Privacy, Travel, Home Office and Expense Reimbursement.'
            ),
            $('<p/>').html(
                'Copies of the latest policies will be available on the People site, and you should check the Apple People site on a regular basis (at least once per month) throughout your employment with Apple.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>This Agreement</strong>'
            ),
            $('<p/>').html(
                'This Agreement will be governed by the laws of England and Wales and the Courts of England and Wales will have non-exclusive jurisdiction to adjudicate any disputes arising under it.'
            ),
            $('<p/>').html(
                'By signing this Agreement, you confirm that you are not entering into employment with Apple in reliance upon any oral or written representations made to you by Apple or on Apple&#39;s behalf.'
            ),
            $('<p/>').html(
                'Any Group Company may enjoy the benefit and enforce the terms of this Agreement in accordance with the Contracts (Rights of Third Parties) Act 1999. Notwithstanding this, neither Apple nor you require the consent of any Group Company to rescind or vary this Agreement at any time, even if that variation or rescission affects the benefits conferred on such Group Company.'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(
                ' '
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(
                'We look forward to welcoming you to Apple in the near future.'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(
                ' '
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(
                'Yours sincerely,'
            )
        )
        // end append
    );
    
    $("#markup2").html("").append(
        // Sarah Signature
        $('<div class="col-lg-12"/>').append(
            $('<div class="offerClause2"/>').append(
                $('<div class="text-left"/>').html('<img src=' + company.SarahSignature + '>')
            )
        ),
        // OfferClause 2
        $('<div class="offerClause2">').append(
            $('<p/>').append(
                $('<span/>').html(
                    '<strong>Sarah Bailey</strong><br>'
                ),
                $('<span/>').html(
                    '<strong>Senior People Business Partner, Western Europe & India Regions</strong><br>'
                )
            )
        ),
        $('<div class="offerClause2">').append(
            $('<p/>').html(
                ' '
            )
        ),
        $('<div class="offerClause2"/>').append(
            $('<H1/>').html(
                '<strong>Acceptance</strong>'
            ),
            $('<p/>').html(
                'I confirm my acceptance of the terms and conditions of employment outlined above. By signing this agreement, I agree that the statutory maximum average working time of 48 hours a week shall not apply to my employment with Apple and that my average working time may therefore exceed 48 hours a week.'
            ),
            $('<p/>').html(
                ' '
            ),
            $('<p/>').html(
                'Signed'
            ),
            $('<p/>').html(
                ' '
            )
        )
        // end append
    );

    $("#markup3").html("").append(
        // OfferClause 3
        $('<div class="offerClause3">').append(
            (employee.Entity == 'Apple UK Limited') &&
            $('<p/>').html(
                'Apple (UK) Limited Registered in England Company No 1591116 Registered Office 100 New Bridge Street London, EC4V 6JA United Kingdom<br>VAT No GB 349046642'
            ),
            (employee.Entity == 'Apple Europe Limited') &&
            $('<p/>').html(
                'Apple Europe Limited Registered in England Company No 5051046 Registered Office 100 New Bridge Street London, EC4V 6JA, United Kingdom<br>VAT NoGB 86793 5561'
            )
        )
        // end append
    );

    $("#markup4").html("").append(
        // OfferClause 4
        $('<div class="offerClause4">').append(
            $('<p class="text-center"/>').html(
                '<h1><strong>ANNEX</strong></h1>'
            ),
            $('<p/>').html(
                '<strong>Statement of employment particulars</strong>'
            ),
            $('<p/>').html(
                'This Annex supplements your employment contract by providing additional information on your employment particulars as required by Part 1 of the Employment Rights Act 1996.  Although annexed to your contract of employment, the information in the Annex is provided to meet our statutory duties and does not confer any contractual rights or obligations.'
            ),
            $('<p/>').append(
                $('<ol/>').append(
            $('<p style="margin:14pt 0 0 0" />').html(
                '<i>Leave other than holidays and sickness</i>'
            ),
                    $('<li/>').html(
                        'You may have statutory rights to take paid leave in certain circumstances, including maternity, paternity and parental leave.  You may be entitled to enhanced leave and/or pay under policies such as our New Parent Leave, Paid Family Care and Bereavement Leave Policies as amended from time to time which are available on the People Site. An overview is also available in your Benefits Summary.'
                    ),
            $('<p style="margin:14pt 0 0 0" />').html(
                '<i>Other benefits</i>'
            ),
                    $('<li/>').html(
                        'The Benefits Summary gives you an overview of Apple’s benefits programs and highlights the key elements. You should check the terms of your contract or contact the People team to confirm your eligibility for any of the benefits listed. Some of the benefits you receive as part of your employment with Apple are discretionary and are not mandated by law.'
                    ),
            $('<p style="margin:14pt 0 0 0" />').html(
                '<i>Training</i>'
            ),
                    $('<li/>').html(
                        'Although we will provide appropriate training in connection with your role, there is no entitlement to training.  You are required to undertake our compliance, conduct, workplace, diversity and inclusion and health and safety training. '
                    )
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

function stripDecimals(number) {
    let idx = number.indexOf(".");
    if (idx < 0) {
        return number;
    }
    return number.substring(0, idx);
}

function fnFormatNumeric(total){
       var number = total.replace(/[^0-9\.]+/g,"");
       var bonusInst = number *.5      
       return formatCurrency(bonusInst);
}

$(function() {
    function _fnAssignValue(targetElement, value) {
        document.getElementById(targetElement).value = value;
        $("#" + targetElement).attr("value", value);
    }

    function fnGetName(first, middlename, last) {

       // var middle_inital = ((middlename) ? middlename.substring(0, 1) + ' ' : '');
        var fullname = first + " " + middlename + " " + last;
        return fullname;
    }

    var name = fnGetName(employee.Candidate_First_Name, employee.Candidate_Middle_Name, employee.Candidate_Last_Name);
    _fnAssignValue('Full_Name', name);

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
    else{
        makeOfferLetter('hidden_pg','offerClause');
        makeOfferLetter('hidden_pg2','offerClause2');
        makeOfferLetter('hidden_pg3','offerClause3');
        makeOfferLetter('hidden_pg4','offerClause4');
    }
});
