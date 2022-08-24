// Workday_Offer_Letter_Salaried
function fnView() {
    $("#markup").html("").append(
        // ABB Logo
        (employee.Country == 'US' || employee.Country == 'PR') &&
        $('<div class="col-lg-12"/>').append(
            $('<div class="offerClause"/>').append(
                $('<div class="center"/>').html('<img class="logo" src=' + company.Logo + '>')
                )
            ),
        // OfferClause 1
        $('<div class="float-left"/>').append(
            $('<div class="offerClause"/>').append(
                $('<p/>').append(
                    $('<span/>').html(
                        employee.First_Name + ' ' + employee.Last_Name + '<br>'
                        ),
                    $('<span/>').html(employee.Address1 + ((employee.Address2) ? ' ' + employee.Address2: '') + '<br>'),
                    $('<span/>').html(employee.Town_or_City + ', ' + employee.State_Province + ' ' + employee.Postal_Code + '<br>')
                    )
                )
            ),
        $('<div class="offerClause">').append(
            $('<p/>').html(
                'Dear ' + employee.First_Name + ':'
                )
            ),
        // Paragraph 1
        (
            (
                employee.Onboarding_Type == "Move from an Affiliate" || 
                employee.Onboarding_Type == "External New Hire" || 
                employee.Onboarding_Type == "International Internal Hire" || 
                employee.Onboarding_Type == "International External Hire" ||
                employee.Onboarding_Type == "Contingent Worker Conversion" ||
                employee.Onboarding_Type == "Intern/Coop Conversion" ||
                employee.Onboarding_Type == "Rehire 0-30 days" || 
                employee.Onboarding_Type == "Rehire 31+ days" ||
                employee.Onboarding_Type == "Inpat LTA NonPayroll" ||
                employee.Onboarding_Type == "Inpat LTA Payroll" ||
                employee.Onboarding_Type == "Inpat STA"
                ) &&
            (
                employee.Work_Location != "Work From Home"
                ) &&
            (
                employee.Employee_Type == "Salaried Exempt" ||
                employee.Employee_Type == "Salaried Exempt OT" ||
                employee.Employee_Type == "Salaried Non-Exempt"
                ) &&
            (
                employee.Time_Type == "Full Time Standard" ||
                employee.Time_Type == "Full Time Temporary"
                )
            ) &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Congratulations! We are pleased to confirm this offer of employment to you for the position of ' + employee.Position + ' at $' + employee.Salary + ' annually, $' + employee.Salary_By_26 + ' bi-weekly under the management of ' + employee.Manager_Name + ', ' + employee.Manager_Title + ', with ' + employee.Division + ', ' + employee.Business_Unit + ' located in ' + employee.Reporting_Location + '  with an anticipated Hire Date of ' + employee.Hire_Date + '. Any change to your Hire Date must be agreed to in writing by ABB.'
                )
            ),
        // Paragraph 2
        (
            (
                employee.Onboarding_Type == "Move from an Affiliate" || 
                employee.Onboarding_Type == "External New Hire" || 
                employee.Onboarding_Type == "International Internal Hire" || 
                employee.Onboarding_Type == "International External Hire" ||
                employee.Onboarding_Type == "Contingent Worker Conversion" ||
                employee.Onboarding_Type == "Intern/Coop Conversion" ||
                employee.Onboarding_Type == "Rehire 0-30 days" || 
                employee.Onboarding_Type == "Rehire 31+ days" ||
                employee.Onboarding_Type == "Inpat LTA NonPayroll" ||
                employee.Onboarding_Type == "Inpat LTA Payroll" ||
                employee.Onboarding_Type == "Inpat STA"
                ) &&
            (
                employee.Work_Location == "Work From Home"
                ) &&
            (
                employee.Employee_Type == "Salaried Exempt" ||
                employee.Employee_Type == "Salaried Exempt OT" ||
                employee.Employee_Type == "Salaried Non-Exempt"
                ) &&
            (
                employee.Time_Type == "Full Time Standard" ||
                employee.Time_Type == "Full Time Temporary"
                )
            ) &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Congratulations!  We are pleased to confirm this offer of employment to you for the position of ' + employee.Position + ' at $' + employee.Salary + ' annually, $' + employee.Salary_By_26 + ' bi-weekly under the management of ' + employee.Manager_Name + ', ' + employee.Manager_Title + ', with ' + employee.Division + ', ' + employee.Business_Unit + ' working remotely from your home office, with an anticipated Hire Date of ' + employee.Hire_Date + '.'
                )
            ),
        // Paragraph 3
        (
            (
                employee.Onboarding_Type == "Inpat to Local Conversion"
                ) &&
            (
                employee.Work_Location != "Work From Home"
                )
            ) &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Congratulations!  We are pleased to confirm this offer of local employment to you for the position of ' + employee.Position + ' at $' + employee.Salary + ' annually, $' + employee.Salary_By_26 + ' bi-weekly under the management of ' + employee.Manager_Name + ', ' + employee.Manager_Title + ', with ' + employee.Division + ', ' + employee.Business_Unit + ' located in ' + employee.Reporting_Location + '  with an anticipated Hire Date of ' + employee.Hire_Date + '.'
                )
            ),
        // Paragraph 4
        (
            (
                employee.Onboarding_Type == "Inpat to Local Conversion"
                ) &&
            (
                employee.Work_Location == "Work From Home"
                )
            ) &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Congratulations!  We are pleased to confirm this offer of local employment to you for the position of ' + employee.Position + ' at $' + employee.Salary + ' annually, $' + employee.Salary_By_26 + ' bi-weekly under the management of ' + employee.Manager_Name + ', ' + employee.Manager_Title + ', with ' + employee.Division + ', ' + employee.Business_Unit + ' working remotely from your home office, with an anticipated Hire Date of ' + employee.Hire_Date + '.'
                )
            ),
        // Paragraph 5
        (
            (
                employee.Employee_Type == "Salaried Exempt" ||
                employee.Employee_Type == "Salaried Exempt OT" ||
                employee.Employee_Type == "Salaried Non-Exempt"
                ) &&
            (
                employee.Time_Type == "Part Time Standard" ||
                employee.Time_Type == "Part Time Temporary"
                )
            ) &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Congratulations!  We are pleased to confirm this offer of part-time employment to you for the position of ' + employee.Position + ' at $' + employee.Salary + ' annually, $' + employee.Salary_By_26 + ' bi-weekly under the management of ' + employee.Manager_Name + ', ' + employee.Manager_Title + ', with ' + employee.Division + ', ' + employee.Business_Unit + ' located in ' + employee.Reporting_Location + '  with an anticipated Hire Date of ' + employee.Hire_Date + '.'
                )
            ),
        // Paragraph 6
        (employee.Onboarding_Type == "Global_Trainee") &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Congratulations!  We are pleased to confirm this offer of employment to you for the position of ' + employee.Position + ' at $' + employee.Salary + ' annually, $' + employee.Salary_By_26 + ' bi-weekly under the management of ' + employee.Manager_Name + ', ' + employee.Manager_Title + '. Details about the program were outlined during your interview and will include rotations at various ABB business locations globally.  Details of your first assignment are being finalized; however the assignment will be with ABB ' + employee.Division + ', ' + employee.Business_Unit + ' organization located in ' + employee.Reporting_Location + ' with an anticipated Start Date of ' + employee.Start_Date + '.'
                )
            ),
        // Paragraph 7 added new sentence RH
        (employee.Pre_Employment_Screen == "Yes - Background/Drug Screen" && employee.Country == 'US') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'This offer of employment and continued employment is contingent upon eligibility to be employed in the United States and satisfactory completion of a drug screen and employment background investigation. You will be contacted by <strong>Accurate Background, Inc.</strong>, ABB’s pre-employment screening partner, to begin the required background and drug screening process. ABB requires that the pre-employment drug screen be conducted within 3 business days of receipt of the Accurate Drug Screen Registration email. Failure to complete the drug screen within the deadline, may result in your offer being rescinded.'
                )
            ),
        // Paragraph 8 added new sentence RH
        (employee.Pre_Employment_Screen == "Yes - Drug Screen Only" && employee.Country == 'US') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'This offer of employment and continued employment is contingent upon eligibility to be employed in the United States and satisfactory completion of a drug screen. You will be contacted by <strong>Accurate Background, Inc.</strong>, ABB’s pre-employment screening partner, to begin the required drug screening process. ABB requires that the pre-employment drug screen be conducted within 3 business days of receipt of the Accurate Drug Screen Registration email. Failure to complete the drug screen within the deadline, may result in your offer being rescinded.'
                )
            ),

        // additional paragraphs for PR Country - SERVICES-42272
        (employee.Pre_Employment_Screen == "Yes - Background/Drug Screen" && employee.Country == 'PUR') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'This offer of employment and continued employment is contingent upon eligibility to be employed in the United States and satisfactory completion of a drug screen and employment background investigation. You will be contacted by Accurate Background, Inc., ABB’s pre-employment screening partner, to begin the required background screening process. You will be contacted by Laboratorio Toledo, ABB’s pre-employment screening partner, to begin the required drug screening process. ABB requires that the pre-employment drug screen be conducted within 3 business days of receipt of the Laboratorio Toledo Registration email. Failure to complete the drug screen within the deadline, may result in your offer being rescinded.'
                )
            ),
        (employee.Pre_Employment_Screen == "Yes - Drug Screen Only" && employee.Country == 'PUR') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'This offer of employment and continued employment is contingent upon eligibility to be employed in the United States and satisfactory completion of a drug screen. You will be contacted by Laboratorio Toledo, ABB’s pre-employment screening partner, to begin the required drug screening process. ABB requires that the pre-employment drug screen be conducted within 3 business days of receipt of the Laboratorio Toledo Registration email. Failure to complete the drug screen within the deadline, may result in your offer being rescinded.'
                )
            ),

        // Paragraph 9 Removed RH
       

        // Paragraph 10
        (employee.Onboarding_Type != "Internal Lateral Move/ Promotion") &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'ABB recognizes that you retain the option, as we do, of ending your employment at any time, with or without notice or cause.  As such, your employment with ABB is at-will and neither this letter nor any other oral or written representations may be considered a contract for any period of time.  '
                ),
            $('<p/>').html(
                'This offer and your subsequent employment are contingent upon your representation that there are no restrictions arising from any previous employment that would prevent or hinder you in fully performing the duties and functions of the position being offered to you.  '
                )
            ),
        // Paragraph 11
        (
            ( 
                employee.Onboarding_Type == "External New Hire" || 
                employee.Onboarding_Type == "International Internal Hire" || 
                employee.Onboarding_Type == "International External Hire" ||
                employee.Onboarding_Type == "Global Trainee" ||
                employee.Onboarding_Type == "Contingent Worker Conversion" ||
                employee.Onboarding_Type == "Intern/Coop Conversion" ||
                employee.Onboarding_Type == "Rehire 0-30 days" || 
                employee.Onboarding_Type == "Rehire 31+ days"
                ) &&
            (
                employee.Employee_Type == "Salaried Exempt" ||
                employee.Employee_Type == "Salaried Exempt OT" ||
                employee.Employee_Type == "Salaried Non-Exempt" ||
                employee.Employee_Type == "Hourly Intern/Co op"
                )
            ) &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'This offer of employment is also contingent upon you completing, within 90 days of your first date of employment with ABB, a series of Integrity training programs.  The programs cover material in both face to face (webinar) and e-learning formats.  After this initial Integrity training, additional required Integrity training will also be provided to you from time to time during your employment with ABB.  By accepting this offer of employment, you agree to complete such training when required. '
                )
            ),
        // Paragraph 12
        (
            ( 
                employee.Onboarding_Type == "External New Hire" || 
                employee.Onboarding_Type == "Move from an Affiliate" || 
                employee.Onboarding_Type == "Global Trainee" ||
                employee.Onboarding_Type == "Contingent Worker Conversion" ||
                employee.Onboarding_Type == "Intern/Coop Conversion" ||
                employee.Onboarding_Type == "Rehire 0-30 days" || 
                employee.Onboarding_Type == "Rehire 31+ days"
                ) &&
            (
                employee.Employee_Type == "Salaried Exempt" ||
                employee.Employee_Type == "Salaried Exempt OT" ||
                employee.Employee_Type == "Salaried Non-Exempt" ||
                employee.Employee_Type == "Hourly Intern/Co op"
                )
            ) &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'We are pleased to extend this offer of employment to you and hope you will formally accept.  We look forward to you joining the organization! We believe that your work with us will be both beneficial to your career development and rewarding to you personally.  With talented employees like you, ABB will continue to move ahead as an industry leader!'
                )
            ),
        // Paragraph 13
        (
            ( 
                employee.Onboarding_Type == "International Internal Hire" ||
                employee.Onboarding_Type == "Inpat to Local Conversion" ||
                employee.Onboarding_Type == "Inpat LTA NonPayroll" ||
                employee.Onboarding_Type == "Inpat LTA Payroll" ||
                employee.Onboarding_Type == "Inpat STA"
                ) 
            ) &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'We are pleased to extend this offer of employment to you and hope you will formally accept.  We look forward to you joining the ABB US Organization! We believe that your work with us will be both beneficial to your career development and rewarding to you personally.  With talented employees like you, ABB will continue to move ahead as an industry leader!'
                )
            ),
        // Paragraph 14
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'You may contact your hiring manager at ' + employee.Manager_Phone + ' or talent partner at ' + employee.Talent_Partner_Phone_Number + ' to answer any questions you may have and/or discuss arrangements for your Hire Date.'
                ),
            $('<p/>').html(
                'Sincerely,<br>ABB Inc. '
                )
            )
        // end append
        );

$("#markup2").html("").append(
        // OfferClause 2
        $('<div class="offerClause2">').append(
            $('<p/>').html(
                '<strong>EMPLOYMENT OFFER SUMMARY</strong>'
                )
            ),
        $('<div class="offerClause2">').append(
            $('<p/>').append(
                $('<span/>').html('<strong>POSITION</strong><br>'),
                $('<span/>').html(employee.Position)
                )
            ),
       
        (
            employee.Employee_Type == "Salaried Exempt" ||
            employee.Employee_Type == "Salaried Exempt OT" ||
            employee.Employee_Type == "Salaried Non-Exempt" 
            ) &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>BASE SALARY</strong><br>'),
                $('<span/>').html('$'+ employee.Salary + ' Annually/$' + employee.Salary_By_26 + ' Bi-Weekly')
                )
            ),
            

 /* removed - 11232020 | SERVICES-41929
(((employee.Onboarding_Type == "Move from an Affiliate" || employee.Onboarding_Type == "External New Hire" || employee.Onboarding_Type == "International Internal Hire" || employee.Onboarding_Type == "International External Hire" || employee.Onboarding_Type == "Contingent Worker Conversion" || employee.Onboarding_Type == "Intern/Coop Conversion" || employee.Onboarding_Type == "Rehire 0-30 days" || employee.Onboarding_Type == "Rehire 31+ days" || employee.Onboarding_Type == "Inpat LTA NonPayroll" || employee.Onboarding_Type == "Inpat LTA Payroll" || employee.Onboarding_Type == "Inpat STA") &&
             (employee.Work_Location == "Work From Home") &&
             (employee.Employee_Type == "Salaried Exempt" || employee.Employee_Type == "Salaried Exempt OT" || employee.Employee_Type == "Salaried Non-Exempt") &&
             (employee.Time_Type == "Full Time Standard" || employee.Time_Type == "Full Time Temporary")) ||
 
 ((employee.Onboarding_Type == "Inpat to Local Conversion") && (employee.Work_Location == "Work From Home")) ||
 (employee.Onboarding_Type == "Global_Trainee")) &&
$('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>BASE SALARY</strong><br>'),
                $('<span/>').html('$'+ employee.Salary + ' Annually/$' + employee.Salary_By_26 + ' Bi-Weekly')
                )
            ),

(!(((employee.Onboarding_Type == "Move from an Affiliate" || employee.Onboarding_Type == "External New Hire" || employee.Onboarding_Type == "International Internal Hire" || employee.Onboarding_Type == "International External Hire" || employee.Onboarding_Type == "Contingent Worker Conversion" || employee.Onboarding_Type == "Intern/Coop Conversion" || employee.Onboarding_Type == "Rehire 0-30 days" || employee.Onboarding_Type == "Rehire 31+ days" || employee.Onboarding_Type == "Inpat LTA NonPayroll" || employee.Onboarding_Type == "Inpat LTA Payroll" || employee.Onboarding_Type == "Inpat STA") &&
              (employee.Work_Location == "Work From Home") &&
              (employee.Employee_Type == "Salaried Exempt" || employee.Employee_Type == "Salaried Exempt OT" || employee.Employee_Type == "Salaried Non-Exempt") &&
              (employee.Time_Type == "Full Time Standard" || employee.Time_Type == "Full Time Temporary")) ||
  
  ((employee.Onboarding_Type == "Inpat to Local Conversion") && (employee.Work_Location == "Work From Home")) ||
  (employee.Onboarding_Type == "Global_Trainee")) && (employee.Employee_Type == "Salaried Exempt" || employee.Employee_Type == "Salaried Exempt OT" || employee.Employee_Type == "Salaried Non-Exempt")) &&
$('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>BASE SALARY</strong><br>'),
                $('<span/>').html('$'+ employee.Salary + ' Annually/$' + employee.Salary_By_26 + ' Bi-Weekly')
                )
            ),
            */

        (
            (
                employee.Employee_Type == "Salaried Non-Exempt"
                ) &&
            (
                employee.Time_Type == "Full Time Standard" ||
                employee.Time_Type == "Full Time Temporary"
                )
            ) &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>EMPLOYMENT STATUS</strong><br>'),
                $('<span/>').html('As a salaried non-exempt employee, all overtime hours should be properly recorded.')
                )
            ),
        (employee.Employee_Type == "Hourly Intern/Co op" && employee.Time_Type == "Full Time Temporary") &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>BASE SALARY</strong><br>'),
                $('<span/>').html(employee.New_Salary_Amount + ' Hourly')
                ),
            $('<p/>').append(
                $('<span/>').html('<strong>INTERNSHIP/CO-OP TERM</strong><br>'),
                $('<span/>').html(employee.Hire_Date + ' - ' + employee.Assignment_End_Date)
                )
            ),
        /* removed Nov 13
        (
            ( 
                employee.Onboarding_Type == "External New Hire" || 
                employee.Onboarding_Type == "International Internal Hire" || 
                employee.Onboarding_Type == "International External Hire" ||
                employee.Onboarding_Type == "Global Trainee" ||
                employee.Onboarding_Type == "Move from an Affiliate" || 
                employee.Onboarding_Type == "Contingent Worker Conversion" ||
                employee.Onboarding_Type == "Rehire 0-30 days" || 
                employee.Onboarding_Type == "Rehire 31+ days" ||
                employee.Onboarding_Type == "Inpat to Local Conversion" ||
                employee.Onboarding_Type == "Intern/Coop Conversion"
                ) &&
            (
                employee.Employee_Type == "Salaried Exempt" ||
                employee.Employee_Type == "Salaried Exempt OT" ||
                employee.Employee_Type == "Salaried Non-Exempt" 
                ) &&
            (
                employee.Bonus_Type == "AEIP" 
                )
            ) &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>INCENTIVE PLAN</strong><br>'),
                $('<span/>').html(
                    'As a Senior Executive, you are eligible for Annual Executive Incentive Plan (AEIP) consideration.  To be eligible to participate in this payout, you must be meeting performance expectations, be active at the date of payout and not under notice (whether given by you or the Company).  The Company reserves the right in its absolute discretion to terminate or amend the AEIP plan without notices or compensation.  Additional details of this plan will be provided in the near future. '
                    )
                )
            ),
        (
            ( 
                employee.Onboarding_Type == "External New Hire" || 
                employee.Onboarding_Type == "International Internal Hire" || 
                employee.Onboarding_Type == "International External Hire" ||
                employee.Onboarding_Type == "Global Trainee" ||
                employee.Onboarding_Type == "Move from an Affiliate" || 
                employee.Onboarding_Type == "Contingent Worker Conversion" ||
                employee.Onboarding_Type == "Rehire 0-30 days" || 
                employee.Onboarding_Type == "Rehire 31+ days" ||
                employee.Onboarding_Type == "Inpat to Local Conversion" ||
                employee.Onboarding_Type == "Intern/Coop Conversion"
                ) &&
            (
                employee.Employee_Type == "Salaried Exempt" ||
                employee.Employee_Type == "Salaried Exempt OT" ||
                employee.Employee_Type == "Salaried Non-Exempt" 
                ) &&
            (
                employee.Bonus_Type == "SIC" 
                )
            ) &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>INCENTIVE PLAN</strong><br>'),
                $('<span/>').html(
                    'This position is eligible for a Sales Incentive Comp Plan, payable semi-annually. Payments will be determined and paid in accordance with plan provisions and eligibility requirements. '
                    )
                )
            ),
        (
            ( 
                employee.Onboarding_Type == "External New Hire" || 
                employee.Onboarding_Type == "International Internal Hire" || 
                employee.Onboarding_Type == "International External Hire" ||
                employee.Onboarding_Type == "Global Trainee" ||
                employee.Onboarding_Type == "Move from an Affiliate" || 
                employee.Onboarding_Type == "Contingent Worker Conversion" ||
                employee.Onboarding_Type == "Rehire 0-30 days" || 
                employee.Onboarding_Type == "Rehire 31+ days" ||
                employee.Onboarding_Type == "Inpat to Local Conversion" ||
                employee.Onboarding_Type == "Intern/Coop Conversion"
                ) &&
            (
                employee.Employee_Type == "Salaried Exempt" ||
                employee.Employee_Type == "Salaried Exempt OT" ||
                employee.Employee_Type == "Salaried Non-Exempt" 
                ) &&
            (
                employee.Bonus_Type == "VIC" 
                )
            ) &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>INCENTIVE PLAN</strong><br>'),
                $('<span/>').html(
                    'This position is eligible for the Variable Incentive Comp Plan 15% bonus. Your annual bonus will be targeted at 15% and payments will be determined and paid in accordance with plan provisions and eligibility requirements. '
                    )
                )
            ),
            end of removed November 13 */
        (
            ( 
                employee.Onboarding_Type == "External New Hire" || 
                employee.Onboarding_Type == "International Internal Hire" || 
                employee.Onboarding_Type == "International External Hire" ||
                employee.Onboarding_Type == "Global Trainee" ||
                employee.Onboarding_Type == "Move from an Affiliate" || 
                employee.Onboarding_Type == "Contingent Worker Conversion" ||
                employee.Onboarding_Type == "Rehire 0-30 days" || 
                employee.Onboarding_Type == "Rehire 31+ days" ||
                employee.Onboarding_Type == "Inpat to Local Conversion"
                ) &&
            (
                employee.Employee_Type == "Salaried Exempt" ||
                employee.Employee_Type == "Salaried Exempt OT" ||
                employee.Employee_Type == "Salaried Non-Exempt" 
                ) &&
            (
                employee.Incentive_Type == "AIP" 
                ) &&
            (
                moment(employee.Hire_Date_Month_Day, "MM-DD-YYYY").isBetween(moment("01-01",'MM-DD'), moment("10-01",'MM-DD'), undefined, '[]') == true
                )
            ) &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>INCENTIVE PLAN</strong><br>'),
                $('<span/>').html('You are eligible to participate in an Annual Incentive Plan with a target incentive opportunity of ' + employee.Incentive_Percentage + '% of your eligible earnings as defined by the plan.  Additional details regarding the incentive plan will be provided in the near future. ')
                )
            ),
        (
            ( 
                employee.Onboarding_Type == "External New Hire" || 
                employee.Onboarding_Type == "International Internal Hire" || 
                employee.Onboarding_Type == "International External Hire" ||
                employee.Onboarding_Type == "Global Trainee" ||
                employee.Onboarding_Type == "Move from an Affiliate" || 
                employee.Onboarding_Type == "Contingent Worker Conversion" ||
                employee.Onboarding_Type == "Rehire 0-30 days" || 
                employee.Onboarding_Type == "Rehire 31+ days" ||
                employee.Onboarding_Type == "Inpat to Local Conversion"
                ) &&
            (
                employee.Employee_Type == "Salaried Exempt" ||
                employee.Employee_Type == "Salaried Exempt OT" ||
                employee.Employee_Type == "Salaried Non-Exempt" 
                ) &&
            (
                employee.Incentive_Type == "AIP" 
                ) &&
            (
                moment(employee.Hire_Date_Month_Day, "MM-DD-YYYY").isBetween(moment("10-02",'MM-DD'), moment("12-31",'MM-DD'), undefined, '[]') == true
                )
            ) &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>INCENTIVE PLAN</strong><br>'),
                $('<span/>').html('Beginning in ' + employee.YYYY_Next_Year + ', you will be eligible to participate in an Annual Incentive Plan with a target incentive opportunity of ' + employee.Incentive_Percentage + '% of your eligible earnings as defined by the plan.  Additional details of the incentive plan will be provided in the future.')
                )
            ),
        (
            ( 
                employee.Onboarding_Type == "External New Hire" || 
                employee.Onboarding_Type == "International Internal Hire" || 
                employee.Onboarding_Type == "International External Hire" ||
                employee.Onboarding_Type == "Global Trainee" ||
                employee.Onboarding_Type == "Move from an Affiliate" || 
                employee.Onboarding_Type == "Contingent Worker Conversion" ||
                employee.Onboarding_Type == "Rehire 0-30 days" || 
                employee.Onboarding_Type == "Rehire 31+ days" ||
                employee.Onboarding_Type == "Inpat to Local Conversion"
                ) &&
            (
                employee.Employee_Type == "Salaried Exempt" ||
                employee.Employee_Type == "Salaried Exempt OT" ||
                employee.Employee_Type == "Salaried Non-Exempt" 
                ) &&
            (
                employee.Incentive_Type == "Sales Incentive Plan" 
                ) &&
            (
                employee.Incentive_Dollar_Amount == "" 
                ) &&
            (
                moment(employee.Hire_Date_Month_Day, "MM-DD-YYYY").isBetween(moment("01-01",'MM-DD'), moment("10-01",'MM-DD'), undefined, '[]') == true
                )
            ) &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>INCENTIVE PLAN</strong><br>'),
                $('<span/>').html('You are eligible to participate in a Sales Incentive Plan with a target incentive opportunity of ' + employee.Incentive_Percentage + '% of your eligible earnings as defined by the plan.  Additional details regarding the incentive plan will be provided in the near future.')
                )
            ),
        (
            ( 
                employee.Onboarding_Type == "External New Hire" || 
                employee.Onboarding_Type == "International Internal Hire" || 
                employee.Onboarding_Type == "International External Hire" ||
                employee.Onboarding_Type == "Global Trainee" ||
                employee.Onboarding_Type == "Move from an Affiliate" || 
                employee.Onboarding_Type == "Contingent Worker Conversion" ||
                employee.Onboarding_Type == "Rehire 0-30 days" || 
                employee.Onboarding_Type == "Rehire 31+ days" ||
                employee.Onboarding_Type == "Inpat to Local Conversion"
                ) &&
            (
                employee.Employee_Type == "Salaried Exempt" ||
                employee.Employee_Type == "Salaried Exempt OT" ||
                employee.Employee_Type == "Salaried Non-Exempt" 
                ) &&
            (
                employee.Incentive_Type == "Sales Incentive Plan" 
                ) &&
            (
                employee.Incentive_Dollar_Amount == "" 
                ) &&
            (
                moment(employee.Hire_Date_Month_Day, "MM-DD-YYYY").isBetween(moment("10-02",'MM-DD'), moment("12-31",'MM-DD'), undefined, '[]') == true
                )
            ) &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>INCENTIVE PLAN</strong><br>'),
                $('<span/>').html('Beginning in ' + employee.YYYY_Next_Year + ', you will be eligible to participate in a Sales Incentive Plan with a target incentive opportunity of ' + employee.Incentive_Percentage + '% of your eligible earnings as defined by the plan.  Additional details of the incentive plan will be provided in the future.')
                )
            ),
        (
            ( 
                employee.Onboarding_Type == "External New Hire" || 
                employee.Onboarding_Type == "International Internal Hire" || 
                employee.Onboarding_Type == "International External Hire" ||
                employee.Onboarding_Type == "Global Trainee" ||
                employee.Onboarding_Type == "Move from an Affiliate" || 
                employee.Onboarding_Type == "Contingent Worker Conversion" ||
                employee.Onboarding_Type == "Rehire 0-30 days" || 
                employee.Onboarding_Type == "Rehire 31+ days" ||
                employee.Onboarding_Type == "Inpat to Local Conversion"
                ) &&
            (
                employee.Employee_Type == "Salaried Exempt" ||
                employee.Employee_Type == "Salaried Exempt OT" ||
                employee.Employee_Type == "Salaried Non-Exempt" 
                ) &&
            (
                employee.Incentive_Type == "Sales Incentive Plan" 
                ) &&
            (
                employee.Incentive_Dollar_Amount != "" 
                ) &&
            (
                moment(employee.Hire_Date_Month_Day, "MM-DD-YYYY").isBetween(moment("01-01",'MM-DD'), moment("10-01",'MM-DD'), undefined, '[]') == true
                )
            ) &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>INCENTIVE PLAN</strong><br>'),
                $('<span/>').html('You are eligible to participate in a Sales Incentive Plan with a target incentive opportunity of $' + employee.Incentive_Dollar_Amount + '.  Additional details regarding the incentive plan will be provided in the near future.')
                )
            ),
        (
            ( 
                employee.Onboarding_Type == "External New Hire" || 
                employee.Onboarding_Type == "International Internal Hire" || 
                employee.Onboarding_Type == "International External Hire" ||
                employee.Onboarding_Type == "Global Trainee" ||
                employee.Onboarding_Type == "Move from an Affiliate" || 
                employee.Onboarding_Type == "Contingent Worker Conversion" ||
                employee.Onboarding_Type == "Rehire 0-30 days" || 
                employee.Onboarding_Type == "Rehire 31+ days" ||
                employee.Onboarding_Type == "Inpat to Local Conversion"
                ) &&
            (
                employee.Employee_Type == "Salaried Exempt" ||
                employee.Employee_Type == "Salaried Exempt OT" ||
                employee.Employee_Type == "Salaried Non-Exempt" 
                ) &&
            (
                employee.Incentive_Type == "Sales Incentive Plan" 
                ) &&
            (
                employee.Incentive_Dollar_Amount != "" 
                ) &&
            (
                moment(employee.Hire_Date_Month_Day, "MM-DD-YYYY").isBetween(moment("10-02",'MM-DD'), moment("12-31",'MM-DD'), undefined, '[]') == true
                )
            ) &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>INCENTIVE PLAN</strong><br>'),
                $('<span/>').html('Beginning in ' + employee.YYYY_Next_Year + ', you will be eligible to participate in a Sales Incentive Plan with a target incentive opportunity of $' + employee.Incentive_Dollar_Amount + '.  Additional details of the incentive plan will be provided in the future. ')
                )
            ),        
        (employee.Management_Incentive_Plan == "Yes") &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>Long Term Incentive Plan (LTIP)</strong><br>'),
                $('<span/>').html(
                    'Based upon current plan eligibility provisions you will be eligible to participate in the ABB Long Term Incentive Plan (LTIP). The LTIP  provides an equity option based long-term incentive for senior managers of ABB. Participation is not guaranteed and grants and eligibility rules will vary from year to year, based upon instructions from the Board of ABB Group.'
                    )
                )
            ),
        /* removed November 13
        (employee.Bonus_Type == "Other") &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>INCENTIVE PLAN</strong><br>'),
                $('<span/>').html(employee.Incentive_Other)
                )
            ),
           end of removed November 13 */
        (
            ( 
                employee.Onboarding_Type == "External New Hire" || 
                employee.Onboarding_Type == "International Internal Hire" || 
                employee.Onboarding_Type == "International External Hire" ||
                employee.Onboarding_Type == "Global Trainee" ||
                employee.Onboarding_Type == "Move from an Affiliate" || 
                employee.Onboarding_Type == "Contingent Worker Conversion" ||
                employee.Onboarding_Type == "Rehire 0-30 days" || 
                employee.Onboarding_Type == "Rehire 31+ days" ||
                employee.Onboarding_Type == "Inpat to Local Conversion" ||
                employee.Onboarding_Type == "Intern/Coop Conversion"
                ) &&
            (
                employee.Employee_Type == "Salaried Exempt" ||
                employee.Employee_Type == "Salaried Exempt OT" ||
                employee.Employee_Type == "Salaried Non-Exempt" 
                ) &&
            (
                employee.Time_Type == "Full Time Standard" ||
                employee.Time_Type == "Full Time Temporary"
                ) &&
            (
                employee.Benefit_Eligible == "Yes" 
                )
            ) &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>BENEFITS</strong><br>'),
                $('<span/>').html('You are eligible to participate in our benefit plans beginning on your first day of employment.  Please review the benefit plan details provided to you as part of your onboarding.')
                )
            ),
        (employee.Onboarding_Type == "Inpat to Local Conversion" && employee.Benefit_Eligible == "Yes") && 
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>BENEFITS</strong><br>'),
                $('<span/>').html('You are eligible or will continue to be eligible to participate in our benefit plans. Please review the benefit plan details provided. ')
                )
            ),
        (
            (
                employee.Employee_Type == "Salaried Exempt" ||
                employee.Employee_Type == "Salaried Exempt OT" ||
                employee.Employee_Type == "Salaried Non-Exempt" 
                ) &&
            (
                employee.Time_Type == "Part Time Standard" ||
                employee.Time_Type == "Part Time Temporary"
                ) &&
            (
                employee.Benefit_Eligible == "Yes" 
                )
            ) && 
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>BENEFITS</strong><br>'),
                $('<span/>').html('You are eligible to participate in our benefit plans beginning on your first day of employment.  Please review the benefit plan details provided to you as part of your onboarding.')
                )
            ),
        (employee.Onboarding_Type == "Global Trainee") && 
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>GLOBAL TRAINEE ADDITIONAL BENEFITS</strong><br>'),
                $('<span/>').html('While on international assignments, you will be responsible for your United States Federal taxes and any state and local taxes that may arise.  Federal and State (where applicable) taxes will be deducted from your semi-monthly pay.  The Company will tax protect you against any additional Home or Host Country tax incurred on Company-source income as a result of your international assignments.  Tax preparation assistance may be provided by the Company’s authorized tax accountant, PWC. ')
                )
            ),
        (
            (
                employee.Employee_Type == "Salaried Exempt" ||
                employee.Employee_Type == "Salaried Exempt OT"
                ) &&
            (
                employee.Time_Type == "Full Time Standard" ||
                employee.Time_Type == "Full Time Temporary"
                ) &&
            (
                employee.Vac_hrs == "Permissive" 
                )
            ) && 
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>VACATION</strong><br>'),
                $('<span/>').html('As an exempt employee of the company, you are eligible for Permissive Time-Away. The permissive approach is a method for paid time off that is in alignment with our efforts to foster an environment that allows you to balance work and personal commitments. Under this approach, we have eliminated Company-defined vacation, personal illness and personal business benefit plans for our salaried employees. Instead, you take the time you need when you need it. ')
                )
            ),
        (
            (
                employee.Employee_Type == "Salaried Non-Exempt" 
                ) &&
            (
                employee.Time_Type == "Full Time Standard" ||
                employee.Time_Type == "Full Time Temporary"
                ) &&
            (
                employee.Vac_hrs != "Exception" 
                )
            ) && 
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>VACATION</strong><br>'),
                $('<span/>').html('In this position you will be eligible for ' + employee.Vac_hrs + ' weeks of vacation as outlined in the policy provisions. Please review the policy provisions for a full vacation accrual outline.  All vacation must be approved in advance by your supervisor or manager. ')
                )
            ),
        (employee.Vac_hrs == 'Exception') &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>VACATION</strong><br>'),
                $('<span/>').html(employee.Vacation_Exception)
                )
            ),
        (employee.Employee_Type != 'Hourly Intern/Co op') &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>HOLIDAYS</strong><br>'),
                $('<span/>').html('New Employees or employees transferring from another ABB business will be eligible for Company observed holidays as outlined in the holiday policy.  Company observed holidays will vary by business and location. ')
                )
            ),
        (employee.Employee_Type != 'Hourly Intern/Co op' && (employee.Benefit_Eligible == "Yes" || employee.Benefit_Eligible == "401K Only")) &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>RETIREMENT SAVINGS PLAN<br>EMPLOYER CONTRIBUTION</strong><br>'),
                $('<span/>').html('The ABB Inc. Retirement Savings Plan (Savings Plan) has two components: a Company match and a 3% non-elective contribution.  Both are made per pay period and are 100% vested. ')
                )
            ),
        (employee.Onboarding_Type != 'Internal Lateral Move/ Promotion') &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>US WORK ELIGIBILITY</strong><br>'),
                $('<span/>').html('This offer of continued employment is pursuant to the requirements of the Immigration Reform & Control Act of 1986, all new hires must provide proof of identity and employment eligibility upon eligibility to be employed in the United States. If applicable, this contingency includes the validation of a lawful employment visa/work permit issued by the United States immigration authority.  You will be required to provide satisfactory documented evidence of your identity, in accordance with the requirements of U.S. law within 3 business days of your date of hire. Should ABB not be able to provide with or transfer such visa/work permit or be able to verify your eligibility to be employed in the United States, the offer of employment will become null and void.')
                )
            ),
        (employee.Sign_on_Bonus == 'Yes') &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>SIGN-ON BONUS</strong><br>'),
                $('<span/>').html('You are eligible for a sign-on bonus of $' + employee.Gross_Amount + ' payable in approximately 30 days from your date of employment.  Payment will be made through the normal payroll process.  This bonus is subject to tax withholding and is not considered as eligible compensation for purposes of the employee benefit plans.  If you resign or are terminated for cause from the Company less than twelve months of your employment Hire Date, the entire sign-on bonus payment is forfeited and must be repaid to the Company.  If you resign or are terminated for cause from the Company between twelve months to twenty-four months of your employment Hire Date, 50% of the sign-on bonus payment must be repaid to the Company. ')
                )
            ),
        (employee.Leased_Car == 'Yes') &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>LEASED CAR PROGRAM</strong><br>'),
                $('<span/>').html(
                 'You will be eligible to participate in the Leased Car Program based on the policy and provisions of the program.'
                 )
                )
            ),
        (employee.Auto_Allowance == 'Yes') &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>AUTO ALLOWANCE</strong><br>'),
                $('<span/>').html(
                 'You will be eligible to receive an auto allowance in the amount of $' + employee.Auto_Allowance_Amount + ' per pay period.  Payment will be made through the normal payroll process.  The allowance is subject to tax withholding and is not considered as eligible compensation for purposes of the employee benefit plans.'
                 )
                )
            ),
        (employee.Relocation == 'Domestic' && employee.Work_Location != "Work From Home") &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>RELOCATION</strong><br>'),
                $('<span/>').html(
                 'You have been authorized to relocate to ' + employee.Reporting_Location + ' and are eligible to receive relocation assistance as outlined in the USA Domestic Relocation Policy.  A copy of the policy will be provided to you.  You will need to sign and agree to the terms of ABB’s repayment agreement as outlined in the policy provisions.  You will be contacted by a Consultant from NuCompass Mobility Services who will work with you throughout your relocation process. '
                 )
                )
            ),
        (employee.Relocation == 'Domestic' && employee.Work_Location == "Work From Home") &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>RELOCATION</strong><br>'),
                $('<span/>').html(
                 'You are eligible to receive relocation assistance as outlined in the USA Domestic Relocation Policy.  A copy of the policy will be provided to you.  You will need to sign and agree to the terms of ABB’s repayment agreement as outlined in the policy provisions.  You will be contacted by a Consultant from NuCompass Mobility Services who will work with you throughout your relocation process. '
                 )
                )
            ),
        (employee.Relocation == 'Lump Sum') &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>RELOCATION</strong><br>'),
                $('<span/>').html(
                 'ABB will assist you with relocation by offering you a lump sum amount of $' + employee.Relocation_Lump_Sum_Amount + ', subject to taxes and subject to the terms of the Relocation Repayment Agreement. '
                 )
                )
            ),
        (employee.Relocation == 'International Addendum' && employee.Work_Location != "Work From Home") &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>RELOCATION</strong><br>'),
                $('<span/>').html(
                 'ABB will assist with your relocation to ' + employee.Reporting_Location + ',  and you are eligible to receive relocation assistance as outlined in the attached addendum.  You will need to sign and agree to the terms of ABB’s Relocation Repayment Agreement as outlined in the policy provisions.  You will be contacted by a Consultant from NuCompass Mobility Services who will work with you throughout your relocation process. '
                 )
                )
            ),
        (employee.Relocation == 'International Addendum' && employee.Work_Location == "Work From Home") &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>RELOCATION</strong><br>'),
                $('<span/>').html(
                 'You are eligible to receive relocation assistance as outlined in the attached addendum.  You will need to sign and agree to the terms of ABB’s Relocation Repayment Agreement as outlined in the policy provisions.  You will be contacted by a Consultant from NuCompass Mobility Services who will work with you throughout your relocation process.  '
                 )
                )
            ),
        (employee.Relocation == 'Rotational') &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>RELOCATION</strong><br>'),
                $('<span/>').html(
                 'You have been authorized to relocate to ' + employee.Reporting_Location + '  and are eligible to receive relocation assistance as outlined in the Rotational Relocation Policy.  A copy of the policy will be provided to you.  You will need to sign and agree to the terms of ABB’s repayment agreement as outlined in the policy provisions.  You will be contacted by a Consultant from NuCompass Mobility Services who will work with you throughout your relocation process.'
                 )
                )
            ),
        (employee.Relocation == 'New College Graduate') &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>RELOCATION</strong><br>'),
                $('<span/>').html(
                 'You have been authorized to relocate to ' + employee.Reporting_Location + ' and are eligible to receive relocation assistance as outlined in the New College Graduate Relocation Policy.  A copy of the policy will be provided to you.  You will need to sign and agree to the terms of ABB’s repayment agreement as outlined in the policy provisions.  You will be contacted by a Consultant from NuCompass Mobility Services who will work with you throughout your relocation process.'
                 )
                )
            ),
        (employee.Onboarding_Type == 'Global Trainee') &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>RELOCATION</strong><br>'),
                $('<span/>').html(
                 'We recognize that you will incur relocation expenses and differences in housing costs as you rotate throughout your assignments.  To offset the financial impact of each rotation, ABB will pay for all reasonable expenses associated with relocation costs.  The relocation of your automobile will not be included.  No local transportation is provided in ' + employee.Work_Location + '.  In addition, the company will provide furnished housing during your assignments.  Housing provided in the US is considered taxable income and will be included in income and grossed up for tax purposes. '
                 )
                )
            ),
        (employee.Relocation == 'Exception') &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>RELOCATION</strong><br>'),
                $('<span/>').html(employee.Relocation_Exception)
                )
            ),
        (employee.Deferred_Compensation == 'Yes') &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>DEFERRED COMPENSATION</strong><br>'),
                $('<span/>').html('You are eligible for the ABB Inc. Deferred Compensation Plan.  As a participant in the plan, you may elect to defer a portion of your base pay and or/incentive payment.  Elections are made annually.  You will receive additional information regarding this plan during the annual election period.')
                )
            ),
        (employee.Financial_Counseling == 'Yes') &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>FINANCIAL COUNSELING</strong><br>'),
                $('<span/>').html('Beginning in ' + (moment(employee.Hire_Date_Month_Day, "MM-DD-YYYY").isBetween(moment("01-01",'MM-DD'), moment('03-20','MM-DD'), undefined, '[]') == true ? employee.Hire_Date_Year : employee.YYYY_Next_Year) + ', you will be eligible for a financial counseling allowance of $' + employee.Financial_Counseling_Amount + ' per year. Payment of this allowance is typically made during the first quarter.')
                )
            ),
        ( 
            employee.Onboarding_Type == "International Internal Hire" || 
            employee.Onboarding_Type == "International External Hire" ||
            employee.Onboarding_Type == "Rehire 0-30 days" || 
            employee.Onboarding_Type == "Rehire 31+ days" ||
            employee.Onboarding_Type == "Inpat to Local Conversion"
            ) &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>SERVICE CREDIT</strong><br>'),
                $('<span/>').html('You may be eligible for reinstatement of past service for vacation, service awards and 401(k) according to the provisions of the respective plans. ')
                )
            ),
        /*
        (employee.Onboarding_Type == "Move from an Affiliate") &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>SERVICE CREDIT</strong><br>'),
                $('<span/>').html('You will be given credit for your service time with ' + employee.Acquired_Company_Name + '.  This service will be counted for the purpose of determining vacation accrual milestones and service awards.  Service is also counted for the purpose of Vesting Service within the 401(k) Plan.')
                )
            ),
        */
        (employee.Onboarding_Type == "Contingent Worker Conversion") &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>TEMPORARY SERVICE CREDIT</strong><br>'),
                $('<span/>').html('You will be given credit for your contractor/temporary service time.  Temporary service will be counted for the purpose of determining vacation accrual milestones, service awards, and eligibility requirements for the purpose of FMLA.  Temporary service is also counted for the purpose of Vesting Service within the 401(k) Plan.  No benefit accrual is granted for temporary service. ')
                )
            ),
        (employee.Onboarding_Type == "International Internal Hire") &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>TAX ASSISTANCE</strong><br>'),
                $('<span/>').html('You are eligible for a US tax briefing and US tax preparation in the transfer year only.  These services will be authorized with PWC. ')
                )
            ),
        (employee.Additional_Benefits == "Yes") &&
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('<strong>ADDITIONAL BENEFITS</strong><br>'),
                $('<span/>').html(employee.Additional_Benefits_Details)
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

$(window).load(function() {
    // Pre-pop override for Anticipated Hire Date
    $(".hire-date").val(employee.Anticipated_Hire_Date);
});

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

    // Get description for Business Unit
    $("#business-unit").val(employee.Business_Unit);
    employee.Business_Unit = $("#business-unit option:selected").text();

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

        var arrParts2 = [
        [1, 'hidden_pg2']
        ];

        showCompletedOfferLetter('incomplete2', 'complete2', arrParts2);
    }
});
