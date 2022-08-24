// Retail Offer Letter
function fnView() {
    $("#markup").html("").append(

        $('<div class="col-lg-12"/>').append(
            $('<div class="offerClause"/>').append(
                $('<div id="srt_eform_logo" class="text-right padding-bottom-lg"/>').html('<img src=' + company.Logo + '>')
                )
            ),
        
        
        $('<div class="col-lg-12 padding-mute-x text-center"/>').append(
                $('<div class="offerClause"/>').append( 
                    $('<h1/>').append('<strong><center>Summary Statement of Terms and Conditions of Employment </center></strong>')   
                )
            ),
        $('<div class="col-lg-12 padding-mute-x odd-height text-center"/>').append(
                $('<div class="offerClause"/>').append( 
                    $('<p/>').append('')   
                )
            ),

        $('<div class="col-lg-12 padding-mute-x padding-bottom-md text-center"/>').append(
                $('<div class="offerClause"/>').append( 
                    $('<h1/>').append('<strong><center>Under the Employment Rights Act 1996 </center></strong>')   
                )
            ),
        

        $('<div class="col-lg-12 padding-mute-x"/>').append(
            $('<div class="offerClause"/>').append(
                $('<p/>').html('This statement summarises the main terms and conditions of your employment (the &#34;Summary&#34;).')
                )
        ),

        $('<div class="offerClause row"/>').append(
            $('<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 padding-mute-x"/>').append(
                $('<h1/>').html("<strong>The Employer: </strong>")
                ),
            
            $('<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 padding-mute-x"/>').append(
                $('<p/>').html('Apple Retail UK Limited <span style="font-weight:bold;">(&#34;Apple UK&#34;).</span> ')
                )
            
        ),

        $('<div class="offerClause row"/>').append(
            $('<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 padding-mute-x"/>').append(
                $('<h1/>').html("<strong>The Employee: </strong>")
                ),
            
            $('<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12 padding-mute-x"/>').append(
                $('<p/>').html(employee.First_Name + " " + employee.Last_Name + "<br/>" + ((employee.Address1.length > 0)? employee.Address1 + ", ": '') + ((employee.Address2.length > 0)? employee.Address2 + ", ": '') + ((employee.Address3.length > 0)? employee.Address3 + ", " : '') + employee.City + "&nbsp;&nbsp;" + employee.Zip)
                )
        ),

        $('<div class="offerClause"/>').append( //J O B T I T L E
            $('<h1/>').html('<strong>Job Title</strong>')
        ),

        $('<div class="offerClause"/>').append(
            $('<p/>').html("You are employed as" + " " + employee.Job_Title + ". Your job title does not limit or define what you are required to do and in addition to your normal duties, you may be required to undertake other duties from time to time on behalf of Apple UK and any other company in the Apple Group.  ")
        ),

        $('<div class="offerClause"/>').append( // D U T I E S
            $('<H1/>').html('<strong>Duties</strong>'),
            $('<p style="margin-bottom:0px;"/>').html('During your employment you must:')
        ),
        $('<div class="offerClause"/>').append(
                $('<p/>').html(
                    '&nbsp;&nbsp;&nbsp;&nbsp;a) obey all lawful directions and observe and comply with all policies and procedures of Apple UK and the Apple Group;'
                    ),
                $('<p/>').html(
                    '&nbsp;&nbsp;&nbsp;&nbsp;b) during your working time devote the whole of your attention and skills and time to Apple UK;'
                    ),
                $('<p/>').html(
                    '&nbsp;&nbsp;&nbsp;&nbsp;c) use your best endeavours to promote and protect the business and interests of Apple UK.'
                    )
            ),
        
        (employee.Contract_Type == 'Below Manager' || employee.Contract_Type == 'Salaried') &&
        $('<div class="col-lg-12 padding-mute-x"/>').append(
            $('<div class="offerClause"/>').append( //C O M M E N C E M E N T
                $('<h1/>').html('<strong>Commencement of Employment </strong>'),
                $('<p/>').html('Your employment will begin on ' + employee.Start_Date + '. Your continuous employment will start on the date you commence work with Apple. No employment with a previous employer counts towards your period of continuous employment.')
            )
        ),

        (employee.Contract_Type == 'FWE 10 Day Probation' || employee.Contract_Type == 'FWE 28 Day Probation') &&
        $('<div class="col-lg-12 padding-mute-x"/>').append(
            $('<div class="offerClause"/>').append( //C O M M E N C E M E N T
                $('<h1/>').html('<strong>Commencement of Employment </strong>'),
                $('<p/>').html('Your employment will begin on ' + employee.Start_Date + ' and end no later than '  + employee.End_Date + ' (&#34;Expiry Date&#34;) based on business need. If business levels are less than anticipated, we may terminate your employment with us giving one week&#39;s notice.')
            )
        ),

        (employee.UK_Retail_HV_Rehire == 'Rehire') && 
        $('<div class="col-lg-12 padding-mute-x"/>').append(
            $('<div class="offerClause"/>').append(
                $('<p/>').html('For the purpose of your benefits entitlements only, any previous service with a company within the Apple Group may be taken into account in assessing your Apple UK benefits entitlements upon rehire. Please refer to People Support for more information. For the avoidance of doubt, your continuous employment for statutory purposes will be the date on which you commence work with Apple UK under this Summary document.')
            )
        ),

        (employee.Contract_Type == 'Below Manager') &&
            $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //P R O B A T I O N
                    $('<h1/>').html('<strong>Probation Period</strong>'),
                    $('<p/>').html('Your employment with Apple UK is subject to undertaking a period of training and completing a six-month probation period. Apple UK may in its discretion extend the probationary period. If at the end of the probationary period Apple UK is satisfied with your performance you will become a permanent employee. During the probationary period, you or Apple UK may terminate your employment by giving two week&#39;s written notice.')
                )
            ),
        

        (employee.Contract_Type == 'Salaried') &&
            $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //P R O B A T I O N
                    $('<h1/>').html('<strong>Probation Period</strong>'),
                    $('<p/>').html('Your employment with Apple UK is subject to undertaking a period of training and completing a six-month probation period. Apple UK may in its discretion extend the probationary period. If at the end of the probationary period Apple UK is satisfied with your performance you will become a permanent employee. During the probationary period, you or Apple UK may terminate your employment by giving four week&#39;s written notice. ')
                )
            ),

        (employee.Contract_Type == 'FWE 10 Day Probation') &&
            $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //P R O B A T I O N
                    $('<h1/>').html('<strong>Probation Period</strong>'),
                    $('<p/>').html('Your employment with Apple UK is subject to undertaking a period of training and completing a 10 day probation period. During the probation period, you or Apple UK may terminate your employment by giving 2 days&#39; written notice.')                    
                )
            ),

        (employee.Contract_Type == 'FWE 28 Day Probation') &&
            $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //P R O B A T I O N
                    $('<h1/>').html('<strong>Probation Period</strong>'),
                    $('<p/>').html('Your employment with Apple UK is subject to undertaking a period of training and completing a 28 day probation period. During the probation period, you or Apple UK may terminate your employment by giving 2 days&#39; written notice.')        
                )
            ),
            

        
        $('<div class="offerClause"/>').append( //P L A C E O F W O R K
                $('<h1/>').html('<strong>Place of Work</strong>')
            ),

        $('<div class="offerClause"/>').append( 
                $('<p/>').html('Your normal place of work is the ' + employee.UK_Retail_Place_Of_Work + ' Apple Store, but Apple UK may require you at any time to work at or relocate to such other place of work within the United Kingdom, whether on a temporary basis or not. For the avoidance of doubt, Apple UK will not require you to work outside of the UK for a period greater than one month, unless you agree. ')
            
            ),

        (employee.Contract_Type == 'Below Manager' || employee.Contract_Type == 'FWE 10 Day Probation' || employee.Contract_Type == 'FWE 28 Day Probation') &&
            $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //H O U R S O F W O R K 
                    $('<h1/>').html('<strong>Hours of Work</strong>'),
                    $('<p/>').html('Your normal weekly hours are ' + employee.Standard_Weekly_Hours + '  hours per week exclusive of breaks (your &#34;Basic Hours&#34;). Your normal working week will be Saturday to Friday inclusive and will include public and Bank Holidays. You are required to be available for work on these days as directed. Your actual hours will be determined by your manager who will notify you in advance of what your working hours will be. However, it is a condition of your contract that you agree to work a reasonable number of additional hours per week if asked to do so by your manager. '),
                    $('<p/>').html('Apple UK reserves the right to make a temporary reduction in your Basic Hours if, in the opinion of Apple UK, exceptional circumstances prevail. ')
                )
            ),

        (employee.Contract_Type == 'Salaried' && employee.UK_Retail_Employee_Type == 'Full Time') &&
            $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //H O U R S O F W O R K 
                    $('<h1/>').html('<strong>Hours of Work</strong>'),
                    $('<p/>').html('You are employed on a full-time basis. You are normally required to work 38 hours each week (exclusive of meal breaks) but you will be expected to work in excess of your normal weekly hours without extra remuneration as may be necessary for the proper performance of your duties or at the request of Apple UK as Apple UK&#39;s business needs dictate. Your normal working week will be Saturday to Friday inclusive. You are required to be available for work on these days as directed. ')
                )
            ),

        (employee.Contract_Type == 'Salaried' && employee.UK_Retail_Employee_Type == 'Part Time') &&
            $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //H O U R S O F W O R K 
                    $('<h1/>').html('<strong>Hours of Work</strong>'),
                    $('<p/>').html('You are employed on a part-time basis. You are normally required to work ' + employee.Standard_Weekly_Hours + '  hours each week (exclusive of meal breaks) but you will be expected to work in excess of your normal weekly hours as may be necessary for the proper performance of your duties or at the request of Apple UK as Apple UK&#39;s business needs dictate. Any additional hours that you are required to work will be paid at your normal hourly rate. Your normal working week will be Saturday to Friday inclusive. You are required to be available for work on these days as directed. ')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //R E N U M E R A T I O N
                    $('<h1/>').html('<strong>Remuneration</strong>')
                )
            ),

        (employee.Contract_Type == 'Below Manager' || employee.Contract_Type == 'FWE 10 Day Probation' || employee.Contract_Type == 'FWE 28 Day Probation') &&
            $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //R E N U M E R A T I O N 
                    $('<p/>').html('Your basic rate of pay is &pound;' + getHourlySalary(employee.Salary,employee.Standard_Weekly_Hours) + ' per hour and will be paid to you (less tax and national insurance contributions) monthly in arrears by direct credit transfer into your personal bank account.')
                )
            ),

        (employee.Contract_Type == 'Salaried') &&
            $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //R E N U M E R A T I O N 
                    $('<p/>').html('Your basic rate of pay is &pound;' + employee.Salary + '  per year and will be paid to you monthly in arrears, less tax and national insurance contributions.')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //R E N U M E R A T I O N
                    $('<p/>').html('Our review period is effective around 1 October each year. This date may change and is provided as a guide. The merit review process does not guarantee that you will be granted a salary increase. Generally if you join Apple UK within 180 days of the review date your salary will take into account of this and will not be increased. The exact period may be varied. ')
                )
            ),

        (employee.Contract_Type == 'Below Manager' || employee.Contract_Type == 'FWE 10 Day Probation' || employee.Contract_Type == 'FWE 28 Day Probation') &&
            $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //R E N U M E R A T I O N 
                    $('<p/>').html('In one working week, any hours you work in addition to your Basic Hours (&#34;Overtime&#34;): up to a limit of 38 hours will be paid to you at your basic rate of pay; over 38 hours will be paid to you at one and a half times your basic rate of pay. '),
                    $('<p/>').html('Overtime is paid for each complete period of 15 minutes, although the first 15 minutes of Overtime in any one working day is unpaid. ')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //P E N S I O N
                    $('<h1/>').html('<strong>Pension</strong>')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //P E N S I O N
                    $('<p/>').html('Apple UK provides an online Group Personal Pension (GPP). There are various contribution tiers under the plan. Please see the UK People site for more details. In accordance with its statutory obligations, Apple UK automatically enrolls qualifying employees in the GPP at the matching level from time to time in force. Where applicable, such contributions shall be made by way of a deduction from your salary. Further information can be found on the UK People site. There is no certificate of contracting out of the state second pension scheme relating to your employment. ')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //B E N E F I T S
                    $('<h1/>').html('<strong>Benefits</strong>')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //B E N E F I T S
                    $('<p/>').html('Details of benefits to which you may be entitled are available on the UK People site. Your eligibility for any benefits provided by Apple UK (and, where appropriate, your dependents) is subject to the rules or terms of the relevant scheme or policy (as amended from time to time) and you (and, where appropriate, your dependents) being eligible to participate in or benefit from such schemes or policies pursuant to their rules or terms at a cost and on terms which are acceptable to Apple. Apple may replace or withdraw such schemes or policies at any time on reasonable notice to you. ')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //D E D U C T I O N S
                    $('<h1/>').html('<strong>Deductions from pay</strong>')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //D E D U C T I O N S
                    $('<p/>').html('Apple UK is entitled to deduct any amount owed by you to Apple UK from any monies due to you from Apple UK (including wages as defined by the Employment Rights Act 1996), including the value (as calculated in accordance with the Apple Retail Web UK) of any Apple product issued to you during your employment which you fail to return to Apple UK on or before the Termination Date. ')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //H O L I D A Y S
                    $('<h1/>').html('<strong>Holiday Entitlement</strong>')
                )
            ),
        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //H O L I D A Y S
                    $('<p/>').html('The holiday year runs from 1 October to 30 September.'  
                        + ((employee.Contract_Type == 'FWE 28 Day Probation') || (employee.Contract_Type == 'FWE 10 Day Probation')? " The holiday entitlement for full-time employees is 22 days paid holiday in each holiday year exclusive of bank and public holidays. This will increase based on length of service as per annual leave policy on UK Retail People site. You may be required to work on some Bank Holidays. Your entitlement to holiday (and your requirement to work a certain number of Bank Holidays) will be calculated on a pro rata basis based on your Basic Hours." : "") 
                        + ((employee.Contract_Type != 'FWE 28 Day Probation') && (employee.Contract_Type !== 'FWE 10 Day Probation') && (employee.UK_Retail_Employee_Type == 'Full Time') ? " You are entitled to 22 days paid holiday in each holiday year exclusive of regional bank and public holidays.  This will increase based on length of service as per annual leave policy on UK Retail People site. You will be required to work at least four of the Bank Holidays each year. " : "")
                        + ((employee.Contract_Type != 'FWE 28 Day Probation') && (employee.Contract_Type !== 'FWE 10 Day Probation') && (employee.UK_Retail_Employee_Type == 'Part Time') ? " The holiday year runs from 1 October to 30 September. A full-time employee will be required to work at least four of the Bank Holidays each year.  As a part-time employee your entitlement to holiday (and your requirement to work a certain number of Bank Holidays) will be calculated on a pro rata basis based on your Basic Hours. This will increase based on length of service as per annual leave policy on UK Retail People site. " : "")
                        )
                        
                )
            ),


        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //H O L I D A Y S
                    $('<p/>').html('Should you leave Apple UK you will receive payment for any outstanding holidays due to you up to and including your date of termination at your contractual rate of pay (less tax and national insurance). Your entitlement to holiday will be assessed on a pro rata basis and if at the date of your termination you have taken holiday in excess of your entitlement, the appropriate deduction will be made from your final payment. For the avoidance of doubt, the first four weeks of the leave you take in any holiday year shall be deemed to be the leave derived from regulation 13 of the Working Time Regulations 1998, as amended from time to time, and the remainder shall be deemed to be derived from regulation 13A of those regulations. ')        
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //A B S E N C E
                    $('<h1/>').html('<strong>Absence and Sickness</strong>')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //A B S E N C E
                    $('<p/>').html('If you are unable to attend work for any reason not previously approved in advance you must follow the absence notification procedures set out on the UK People team as amended from time to time. ')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //A B S E N C E
                    $('<p/>').html('At Apple UK&#39;s discretion you are entitled to be paid your normal basic salary, inclusive of any statutory sick pay to which you may be entitled and conditional upon your compliance with Apple UK&#39;s absence notification procedures, in accordance with Apple UK&#39;s sickness policy in place from time to time. This entitlement to company sick pay cannot be carried over from one year to the next. ')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //A B S E N C E
                    $('<p/>').html('In the event of your prolonged, recurrent or frequent absence due to sickness or at any time if requested in writing, Apple UK may, at its expense, require you to have a medical examination by a medical practitioner chosen by Apple UK. By signing this letter you give authority, in accordance with the Access to Medical Reports Act 1988, for the medical advisor to disclose the report of any such examination to your Manager and the People team in Apple UK. ')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //R I G H T O F S E A R C H
                    $('<h1/>').html('<strong>Right of search</strong>')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //R I G H T O F S E A R C H
                    $('<p/>').html('You agree to submit to a personal search and search of all personal packages and bags when requested to do so and when required to do so under any applicable Apple policy. ')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //P R O P R I E T A R Y
                    $('<h1/>').html('<strong>Proprietary Information, Intellectual Property and Inventions</strong>')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //P R O P R I E T A R Y
                    $('<p/>').html('Your employment by Apple UK creates a relationship of confidence and trust with respect to any information of a confidential, proprietary, and secret nature that may be disclosed to you or otherwise learned by you in the course of your employment. ')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //P R O P R I E T A R Y
                    $('<p/>').html('Furthermore, you agree that during the course of your employment, your job functions may require you to make, conceive, or improve (solely by you or jointly with others) inventions, ideas, discoveries, designs, plans, manufacturing methods, formulas, computer programs, databases, processes, techniques, original works of authorship, documentation, and other materials. ')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //P R O P R I E T A R Y
                    $('<p/>').html('By signing this Summary, you hereby agree to comply with the terms of the Confidentiality and Intellectual Property Agreement appended to this Summary. ')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //P R O P R I E T A R Y
                    $('<p/>').html('You authorise Apple UK to notify others, including customers of Apple, and any future employers you may have, of the terms of this Summary, the Confidentiality and Intellectual Property Agreement incorporated into this Summary, and your responsibilities under this Summary ')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //P R O P R I E T A R Y
                    $('<p/>').html('The above provisions in this section remain in force notwithstanding termination of your employment.')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //T E R M I N A T I O N
                    $('<h1/>').html('<strong>Termination of employment</strong>')
                )
            ),

        (employee.Contract_Type == 'Below Manager' || employee.Contract_Type == 'Salaried') &&
            $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //T E R M I N A T I O N
                    $('<p/>').html('Following successful completion of your probation period you or Apple UK, giving the following notice, may terminate your employment: ')
                )
            ),

        (employee.Contract_Type == 'Below Manager') &&
            $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //T E R M I N A T I O N
                    $('<p/>').html('&nbsp;&nbsp;&nbsp;&nbsp;a) up to four complete years&#39; of continuous employment, four weeks&#39; notice in writing; '),
                    $('<p/>').html('&nbsp;&nbsp;&nbsp;&nbsp;b) after four complete years&#39; of continuous employment, one week&#39;s notice for each complete year of continuous employment, up to a maximum of twelve weeks.')
                )
            ),

        (employee.Contract_Type == 'Salaried') &&
            $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //T E R M I N A T I O N
                    $('<p/>').html('&nbsp;&nbsp;&nbsp;&nbsp;a) up to four years&#39; of continuous employment, four weeks&#39; notice in writing; '),
                    $('<p/>').html('&nbsp;&nbsp;&nbsp;&nbsp;b) after four complete years&#39; of continuous employment, one week&#39;s notice for each complete year of continuous employment, up to a maximum of twelve weeks. ')
                )
            ),

        (employee.Contract_Type == 'Below Manager') &&
            $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //T E R M I N A T I O N
                    $('<p/>').html('Apple UK may in its absolute discretion pay you in lieu of notice, such pay to be calculated on the basis of your Basic Hours only. ')  
                )
            ),

        (employee.Contract_Type == 'FWE 10 Day Probation' || employee.Contract_Type == 'FWE 28 Day Probation') &&
            $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //T E R M I N A T I O N
                    $('<p/>').html('You and Apple UK have the right to terminate your employment at any time prior to the Expiry Date by either party giving to the other one weeks&#39; notice in writing. ')
                )
            ),
 (employee.Contract_Type == 'Salaried' || employee.Contract_Type == 'FWE 10 Day Probation' || employee.Contract_Type == 'FWE 28 Day Probation') &&
            $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //T E R M I N A T I O N
                    $('<p/>').html('Apple UK may in its absolute discretion pay to you basic salary in lieu of notice. ')  
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //T E R M I N A T I O N
                    $('<p/>').html('In any event, Apple UK may, at any time, terminate your employment immediately without notice or payment in lieu of notice in the event of gross misconduct by you. You can find examples of conduct and performance that constitute Gross Misconduct in the Disciplinary and Grievance Procedure on the People site. ')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //T E R M I N A T I O N
                    $('<p/>').html('Apple UK&#39;s rights to terminate the employment under the terms of this Summary apply even when such termination would or might cause you to forfeit any entitlement to sick, permanent health insurance (if applicable) or other benefits. ')    
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //T E R M I N A T I O N
                    $('<p/>').html('If either party has served notice to terminate the employment, Apple UK may require you to take any accrued but unused holiday during the notice period. ')    
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //S U S P E N S I O N
                    $('<h1/>').html('<strong>Suspension</strong>')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //S U S P E N S I O N
                    $('<p/>').html('Apple UK may suspend you during any period in which it is carrying out an investigation into any alleged acts by your or any allegations you make about the act of others. Such suspension shall be on full salary and benefits. ')    
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //G A R D E N L E A V E 
                    $('<h1/>').html('<strong>Garden Leave</strong>')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //G A R D E N L E A V E
                    $('<p/>').html('Once you or Apple UK have given notice of termination in accordance with the provisions of this Summary, Apple UK shall have the right to require you to stay away from work or to require you to perform duties different from your normal duties or not to contact any employees, customers or suppliers of Apple UK for part or all of the notice period. In this event you agree to comply with any reasonable conditions laid down by Apple UK and undertake that you will not work for any other person, firm, company or on your own behalf during this period without Apple UK&#39;s prior written permission. If Apple UK exercises its right under these provisions, you shall remain an employee and continue to receive your basic salary and you acknowledge and agree that your duties of confidentiality and good faith shall continue to apply. ')
                )
            ),

        (employee.Contract_Type != 'FWE 10 Day Probation') &&
            $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //P O S T T E R M I N A T I O N
                     $('<h1/>').html('<strong>Post-termination restrictions</strong>')
                )
            ),

        (employee.Contract_Type != 'FWE 10 Day Probation') &&
            $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //P O S T T E R M I N A T I O N
                     $('<p/>').html('You may not at any time during your employment by Apple UK or during a period of three months after the Termination Date directly or indirectly induce or procure or attempt to induce or procure any person who is on and/or was in the six months preceding the Termination Date an employee or consultant of or under contract of services to Apple UK or any other member of the Apple Group to leave nor accept into employment or otherwise engage or use the services of any such person who is and/or was for the six months preceding the Termination Date an employee or consultant of or under contract of services to Apple UK or any other member of the Apple Group with whom you worked or dealt. ')
                )
            ),

        (employee.Contract_Type == 'Salaried') &&
            $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //P O S T T E R M I N A T I O N
                     $('<p/>').html('The period of restriction referred to above may be reduced by any period where no work is given to you during any period of Garden Leave.')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //R E T U R N O F P R O P E R T Y
                    $('<h1/>').html('<strong>Return of property</strong>')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //R E T U R N O F P R O P E R T Y
                    $('<p/>').html('You shall promptly whenever requested by Apple UK and in any event upon termination of your employment (for whatever reason) return to Apple UK all property in your possession which relates to the business or affairs of Apple UK or any member of the Apple Group or is the property of Apple UK or any member of the Apple Group, including without limitation all documents, training materials, including copies of such documents and training materials, keys, mobile telephones, security passes, company credit cards and equipment. ')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //D I S C I P L I N A R Y
                    $('<h1/>').html('<strong>Disciplinary and grievance procedures</strong>')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //D I S C I P L I N A R Y
                    $('<p/>').html('Apple UK&#39;s disciplinary and grievance procedures, as amended from time to time, are contained in the UK People site.')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //C O N D I T I O N A L
                    $('<h1/>').html('<strong>Conditional offer of employment</strong>')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //C O N D I T I O N A L
                    $('<p/>').html('The commencement (and continuation) of your employment with Apple UK is conditional upon verification satisfactory to Apple UK of the information you have provided to it during the job application process, the receipt of a background check satisfactory to Apple UK, the receipt of references satisfactory to Apple UK from those referees nominated by you, and the receipt of documentary evidence satisfactory to Apple UK of your right to work in the United Kingdom. These checks and references may take up to three months for us to complete and/or verify.')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //G O V E R N I N G
                    $('<h1/>').html('<strong>Governing law</strong>')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //G O V E R N I N G
                    $('<p/>').html('Your contract of employment will be governed by and interpreted in accordance with English law and the parties hereby submit to the exclusive jurisdiction of the Courts of England and Wales except that any court of competent authority may enforce this agreement. ')
                )
            ),
        
        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //C O L L E C T I V E
                    $('<h1/>').html('<strong>Collective Agreements</strong>')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //C O L L E C T I V E
                    $('<p/>').html('There are no collective agreements in force in relation to your appointment.')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //C O N D U C T
                    $('<h1/>').html('<strong>Apple&#39;s Business Conduct Policy</strong>')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //C O N D U C T
                    $('<p/>').html('Apple conducts business ethically, honestly and in full compliance with all laws and regulations. This applies to every business decision in every area of the company worldwide. Apple&#39;s Business Conduct policy, a copy of which is enclosed, reflects our continued commitment to doing business the right way. By accepting this offer, you acknowledge that you have received, read and understand Apple&#39;s Business Conduct policy and that you agree to comply with Apple&#39;s Business Conduct policy.')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //D E F I N I T I O N S
                    $('<h1/>').html('<strong>Definitions</strong>')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //D E F I N I T I O N S
                    $('<p class="no-margin"/>').html('&#34;Apple Group&#34;')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause padding-left-ind"/>').append( //D E F I N I T I O N S
                    $('<p/>').html('means Apple Inc., Apple UK and any holding company from time to time of Apple UK or of its holding company and any company which is from time to time a subsidiary of Apple UK, any such holding company or any such subsidiary, and any Associated Company. ')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //D E F I N I T I O N S
                    $('<p class="no-margin"/>').html('&#34;Associated Company&#34;')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause padding-left-ind"/>').append( //D E F I N I T I O N S
                    $('<p/>').html('means any company, twenty per cent or more of the equity share capital of which is owned directly or indirectly by Apple UK (applying the provisions of sections 1154 to 1157 inclusive of the Corporation Taxes Act 2010) or any subsidiary or holding company to which Apple UK or any such subsidiary or holding company renders managerial administrative or technical services. ')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //D E F I N I T I O N S
                    $('<p class="no-margin"/>').html('&#34;Termination Date&#34;')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause padding-left-ind"/>').append( //D E F I N I T I O N S
                   $('<p/>').html('means the date on which your employment with Apple UK terminates.')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //D E F I N I T I O N S
                    $('<p class="no-margin"/>').html('&#34;the UK People site&#34;')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause padding-left-ind"/>').append( //D E F I N I T I O N S
                   $('<p/>').html('means the Apple UK People site as amended from time to time. Access to this, located on Apple&#39;s intranet, is granted once you become an employee of Apple UK.')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //S U M M A R Y
                    $('<p/>').html('This Summary together with those sections of the UK People site expressed to be contractual, comprise your contract of employment with Apple UK. The UK People site also contains statements of various Apple policies and procedures in force from time to time, with which you are required to comply. Apple UK expects that you familiarise yourself and comply with its policies, procedures, and rules. You are responsible for checking the UK People site on a regular basis throughout your employment. Those policies and procedures may be amended or withdrawn at Apple&#39;s absolute discretion without prior notice to you. In the event of any conflict between this Summary and the UK People site, this Summary shall prevail.')
                )
            ),

        $('<div class="col-lg-12 padding-mute-x"/>').append(
                $('<div class="offerClause"/>').append( //S U M M A R Y
                    $('<p/>').html('This Summary supersedes any previous statements or agreements in relation to your employment with any member of the Apple Group. Any future changes to your terms and conditions of employment will be notified to you or incorporated in the UK Retail Web. ')
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

// SERVICES-38920 | Onboarding - Apple - UK Retail HV External Contract - Add Hourly Rate
function getHourlySalary(salary, weeklyHours) {
    return (salary / 52 / weeklyHours).toFixed(2);
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

    var name = fnGetName(employee.First_Name, employee.Middle_Name, employee.Last_Name);
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
    }else{
        makeOfferLetter('hidden_pg','offerClause');
    }
});
