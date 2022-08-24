//Australia Employment Agreement
const fnView = function() {
    "use strict";
    $("#markup").html("").append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p/>').append(
                $('<mark/>').append(
                    employee.Current_Date
                )
            )
        ),
        $('<div class="offerClause">').append(
            $('<p class="margin-bottom"/>').append(
                $('<span/>').append('<em>Private and confidential</em>' + '<br>'),
                $('<mark/>').append(
                    employee.Full_Legal_Name
                ),
                '<br>',
                $('<mark/>').append(
                    employee.Address_Line_1
                ),
                '<br>',
                (employee.Address_Line_2.length > 0) && $('<mark/>').append(
                    employee.Address_Line_2
                ).append('<br>'),
                $('<mark/>').append(
                    employee.City
                ),
                ', ',
                $('<mark/>').append(
                    employee.State
                ),
                ', ',
                $('<mark/>').append(
                    employee.Postal_Code
                )
            )
        ),
        $('<div class="offerClause">').append(
            $('<p class="margin-bottom"/>').append(
                $('<span/>').html('EMPLOYMENT CONTRACT' + '<br>')
                )
            ),

        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<span/>').html('Between:' + '<br>'),
                $('<span/>').html('PayPal Australia Pty Ltd (<strong>PayPal or Employer</strong>) and<br>'),
                $('<mark/>').append(
                    employee.Full_Legal_Name
                ),
                $('<span/>').html('  (<strong>You or Employee</strong>)<br>'
                )
            )
        ),

        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<span/>').html('Employer and Employee agree to the following terms:')
                ),
            $('<p/>').append(
                $('<span/>').html('This offer is subject to:')
                ),
            $('<ul class="list-indented"/>').append(
                $('<li/>').append(
                    'a) satisfactory background checking as set out in paragraph 28; and'
                ),
                $('<li/>').append(
                    'b) you meeting the requirements of the Australian Prudential Regulation Authority (APRA) Prudential Standards LPS 520 – Fit and Proper and the Australian Securities and Investment Commission (ASIC) Regulatory Guide 105 - Licensing: Organisational Competency (RG105) or any other requirements as determined by APRA or ASIC or by the Australian Transaction Reports and Analysis Centre (',
                    $('<strong/>').text('AUSTRAC'),
                    ') from time to time;'
                )
            ),
            $('<p class="hide"/>').html('<br>'),
            $('<p/>').append(
                $('<span/>').html('before your start date (see paragraph 4 below) and on an ongoing basis.  If these conditions are not satisfied, this offer will lapse and be of no effect and/or your employment may be terminated without additional compensation or benefit, as applicable.')
                )
            ),
        $('<div class="offerClause margin-bottom-25"/>').append(
            $('<p/>').append(
                $('<ol/>').append(
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Position and duties </u></strong>'),
                        $('<p/>').append(
                            'You\’ll be employed as ',
                            $('<mark/>').append(
                                employee.Job_Title
                            ),
                            ' on a ',
                            $('<mark/>').append(
                                employee.Job_Type
                            ),
                            ' basis. Your job description is attached and it sets out your initial responsibilities. We may change your role, or update your job description, as our needs change, but we will not change your role without talking to you about the reasons for the change.')
                        ),
                        $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Reporting</u></strong>'),
                        $('<p/>').append(
                            'You’ll report to ',
                            $('<mark/>').append(
                                employee.Hiring_Manager_Title
                            ),
                            '. We may also change who you report to as our needs change.'
                        )
                    ),
                        $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Location</u></strong>'),
                        $('<p/>').append(
                            'You\’ll initially be based at ',
                            $('<mark/>').append(
                                employee.Event_Location
                            ),
                            ', but we may require you to temporarily or permanently work at other locations.')
                        ),
                        $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Start date and duration </u></strong>'),
                        (employee.Employee_Type == 'NH' && employee.Employee_Group.substring(0,1) == 'R') &&
                        $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Regular New Hire"/>').append('Your employment will commence on ',
                            $('<mark/>').append(
                                employee.Start_Date
                            ),
                            ' (Start Date) and will continue until terminated in accordance with this Agreement.'
                        ),
                        (employee.Employee_Type == 'TR' && employee.Employee_Group.substring(0,1) == 'R') && 
                        $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Regular Transfer"/>').append(
                            'Your employment under this agreement will commence on ',
                            $('<mark/>').append(
                                employee.Start_Date
                            ),
                            ' (Start Date). For the purposes of statutory entitlements, your prior employment with [PayPal Inc/PP/other location] will be recognised. Your employment will continue until terminated in accordance with this Agreement.'
                        ),
                        (employee.Parental_Leave == 'No' && employee.Employee_Group.substring(0,1) == 'T') && 
                        $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Fixed Term Contract (Temporary)"/>').append(
                            $('<p/>').append(
                                'Your employment will commence on ',
                                $('<mark/>').append(
                                    employee.Start_Date
                                ),
                                ' (Start Date). '
                            ),
                            $('<p/>').append(
                                'Unless your employment ends earlier under paragraphs 5, 16 or 17, your employment will end automatically, without a termination by you or us, on ',
                                $('<mark/>').append(
                                    employee.Contract_End_Date
                                ),
                                ' (Finish Date). '
                            ),
                            $('<p/>').html('You agree that if your employment ends on the Finish Date, or any date before the Finish Date under clauses 5, 16 or 17, you will have no claim against us for compensation and/or damages in relation to your employment ending.'),
                        $('<p/>').html('We make no guarantees, representations or warranties that you will remain employed by us until the Finish Date.  Further, you agree that the fact that this offer makes provision for benefits accruing to you on the happening of certain events does not constitute a promise that you will be employed by us at those future times.'),
                        $('<p/>').html('However, if, for any reason, your employment does continue after the Finish Date, then the terms of this Agreement will continue to apply with the exception of the Finish Date.')
                        ),
                        (employee.Parental_Leave == 'Yes' && employee.Employee_Group.substring(0,1) == 'T') && 
                        $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Parental Leave Fixed Term Contract (Temporary)"/>').append(
                            $('<p/>').append('Your employment will commence on ',
                                $('<mark/>').append(
                                    employee.Start_Date
                                ),
                                ' (Start Date). '
                            ),
                            $('<p/>').append(
                                'Your employment will be temporary as you are replacing another employee who is absent from work on parental leave. At the moment, this employee is expected to return to work on ',
                                $('<mark/>').append(
                                    employee.Contract_End_Date
                                ),
                                '. However, this date is subject to change.'),
                            $('<p/>').html('When the employee on parental leave returns to work they will be entitled to return to work in the position they held before taking leave, or if that position does not exist, an alternative position.'),
                            $('<p/>').html('Given these circumstances, you should have no expectation of continuing employment with us. '),
                            $('<p/>').html('Unless your employment ends earlier under paragraphs 5, 16 or 17, your employment will end, automatically, without a termination by you or us, on the day immediately before the employee who you replace returns from leave (Finish Date).'),
                            $('<p/>').html('You agree that if your employment ends on the Finish Date, or any date before the Finish Date under clauses 5, 16 or 17, you will have no claim against us for compensation and/or damages in relation to your employment ending.'),
                            $('<p/>').html('We make no guarantees, representations or warranties that you will remain employed by us until the Finish Date. Further, you agree that the fact that this offer makes provision for benefits accruing to you on the happening of certain events does not constitute a promise by us that you will be employed by us at those future times.'),
                            $('<p/>').html('However, if, for any reason, your employment does continue after the Finish Date, then the terms of this Agreement will continue to apply with the exception of the Finish Date.')
                            )
                        ),
                        $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Probationary period </u></strong>'),
                        $('<p/>').append(
                            'A six (6) month probationary period will apply to your employment.  Despite section 16, during your probationary period you or we may terminate your employment with one week’s notice in writing.  This does not affect our ability to make a payment in lieu of part or all of the notice period under paragraph 16 or to terminate your employment without notice under paragraph 17.')
                        ),
                        $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Hours</u></strong>'),
                        (employee.Job_Type == 'Full Time') && 
                        $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Full Time Employee"/>').append(
                            $('<p/>').html('You’ll need to work at least an average of 38 hours a week on days and at times as directed by PayPal.')
                        ), 
                        (employee.Job_Type == 'Part Time') && 
                        $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Part Time Employee"/>').append(
                            $('<p/>').append(
                                'You’ll need to work at least an average of ',
                                $('<mark/>').append(
                                    employee.Hours_Per_Week
                                ),
                                ' hours a week on days and at times as directed by us.'),
                            $('<p/>').html('You’ll initially be required to work on days and at times as follows:'),
                            $('<p/>').append(
                                'Monday ',
                                $('<mark/>').append(
                                    employee.Monday_Wrk_Time
                                ),
                                ' ',
                                $('<mark/>').append(
                                    employee.Monday_Total_Hrs
                                ),
                                ' hour(s)'),
                            $('<p/>').append(
                                'Tuesday ',
                                $('<mark/>').append(
                                    employee.Tuesday_Wrk_Time
                                ),
                                ' ',
                                $('<mark/>').append(
                                    employee.Tuesday_Total_Hrs
                                ),
                                ' hour(s)'),
                            $('<p/>').append(
                                'Wednesday ',
                                $('<mark/>').append(
                                    employee.Wednesday_Wrk_Time
                                ),
                                ' ',
                                $('<mark/>').append(
                                    employee.Wednesday_Total_Hrs
                                ),
                                ' hour(s)'),
                            $('<p/>').append(
                                'Thursday ',
                                $('<mark/>').append(
                                    employee.Thursday_Wrk_Time
                                ),
                                ' ',
                                $('<mark/>').append(
                                    employee.Thursday_Total_Hrs
                                ),
                                ' hour(s)'),
                            $('<p/>').append(
                                'Friday ',
                                $('<mark/>').append(
                                    employee.Friday_Wrk_Time
                                ),
                                ' ',
                                $('<mark/>').append(
                                    employee.Friday_Total_Hrs
                                ),
                                ' hour(s)'),
                            $('<p/>').append(
                                'Saturday ',
                                $('<mark/>').append(
                                    employee.Saturday_Wrk_Time
                                ),
                                ' ',
                                $('<mark/>').append(
                                    employee.Saturday_Total_Hrs
                                ),
                                ' hour(s))'),
                            $('<p/>').append(
                                'Sunday ',
                                $('<mark/>').append(
                                    employee.Sunday_Wrk_Time
                                ),
                                ' ',
                                $('<mark/>').append(
                                    employee.Sunday_Total_Hrs
                                ),
                                ' hour(s)'),
                            $('<p/>').html('These days and times may be changed by written agreement between you and PayPal.')
                        ), 
                        $('<p/>').html('You may also be required to work reasonable additional hours that are necessary to properly perform your duties and responsibilities to the standard we expect. You’ll also need to be flexible about when you work. Given the nature of your role and our business, you may need to work outside normal business hours and on weekends.')
                        ),
                        $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Your duties</u></strong>'),
                        $('<p/>').html('You must:'),
                        $('<ul class="list-indented"/>').append(
                            $('<li/>').append(
                                '(a) serve PayPal faithfully, diligently and to the best of your ability;'),
                            $('<li/>').html('(b) act in the best interests of the Group;'),
                            $('<li/>').html('(c) comply with all directions of PayPal from time to time;'),
                            $('<li/>').html('(d) comply with all laws that apply to your position and the duties assigned to you;'),
                            $('<li/>').html('(e) dedicate all of your time and attention to PayPal during your hours of work;'),
                            $('<li/>').html('(f) subject to paragraph 24, inform yourself of and comply with PayPal’s policies and procedures;'),
                            $('<li/>').html('(g) accurately represent your position title, role description and duties at all times, including in any dealings with PayPal customers and suppliers and in your resume, social media profiles and pages (including without limitation any LinkedIn or Facebook profile), website, email signature and business card;'),
                            $('<li/>').html('(h) not act in conflict with a Group Entity’s interests; and'),
                            $('<li/>').html('(i) not Engage in any other business, trade, occupation or employment without the prior written approval of PayPal.'
                            )
                        ),
                        $('<p class="hide"/>').html('<br>')
                    ), 
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Total remuneration package </u></strong>'),
                        $('<p/>').append(
                            'Your starting total remuneration package will be ',
                            $('<mark/>').append(
                                employee.Remuneration_Amount
                            ),
                            ' ',
                            $('<mark/>').append(
                                employee.Salary_Currency
                            ),
                            ' (gross) per annum, comprising:'),
                        $('<p/>').append(
                            $('<span class="col-30"/>').append(
                                'Salary '
                            ),
                            $('<span class="col-70"/>').append(
                                $('<mark/>').append(
                                    employee.Salary_Amount
                                ),
                                ' ',
                                $('<mark/>').append(
                                    employee.Salary_Currency
                                ),
                                ' (gross); and'
                            )
                        ),
                        $('<p/>').append(
                            $('<span class="col-30"/>').append(
                                'Superannuation '
                            ),
                            $('<span class="col-70"/>').append(
                                $('<mark/>').append(
                                    employee.Superannuaction_Amount
                                ),
                                ' ',
                                $('<mark/>').append(
                                    employee.Salary_Currency
                                ),
                                '.'
                            )
                        ),
                        $('<span class="s-subheaders"/>').html('<strong>Salary</strong>'),
                        $('<p/>').html('You agree that we will pay your Salary in equal monthly instalments, two weeks in advance and two weeks in arrears, by electronic funds transfer into your nominated financial institution account after deduction of all taxes, levies or other amounts which are authorised to be deducted from your Salary, either under this Agreement or otherwise.'),
                        $('<p/>').html('Your all-inclusive Salary, and any amount of variable compensation or incentive payment you receive, compensates you for all of the hours you work, including outside normal business hours, on weekends and on public holidays.  You must inform your manager if you believe you are working excessive hours.'),
                        $('<p/>').html('Your Salary will be reviewed once a year. Your Salary may or may not be increased after a review.'),
                        $('<p/>').html('In designing your all-inclusive Salary we have taken into account your usual hours of work and the maximum spread and total of your hours.  Your Salary exceeds the amounts you would receive under any applicable modern award for working the hours we expect, which includes your hours listed in clause 6 and all additional hours and all overtime hours you work in any week.'),
                        $('<p/>').html('You must inform your manager, promptly, if you believe you are working in excess of these hours.'),
                        $('<span class="s-subheaders"/>').html('<strong>Superannuation</strong>'),
                        $('<p/>').html('We will make superannuation contributions into a complying superannuation fund at the rate required by applicable legislation (currently 10% of your ordinary time earnings).'),
                        $('<p/>').html('These superannuation contributions are a part of your total remuneration package. '),
                        $('<p/>').html('You are eligible to choose your superannuation fund. When you start work, if you do not make a valid choice or do not wish to make a choice, we will make contributions into your existing superannuation fund. If you do not have an existing superannuation fund, you will be enrolled as a member of the AON Master Trust superannuation fund. You may exercise your choice of superannuation fund at the start of your employment, and every 12 months after that.'),
                        $('<p/>').html('All payments we make to you (other than your Salary) will include any superannuation contribution required by law. We will direct these contributions into your nominated superannuation fund.'),
                        $('<span class="s-subheaders"/>').html('<strong>Disclosure</strong>'),
                        $('<p/>').html('Your remuneration and benefits, including any potential bonus opportunity, may be disclosed to government agencies and in public documents. You must keep all such details confidential.'),
                        $('<span class="s-subheaders"/>').html('<strong>Set-off and annualised salary</strong>'),
                        $('<p/>').html('If a law or industrial instrument, including the Award, applies to your employment at any time:'),
                        $('<ul class="list-indented"/>').append(
                            $('<li/>').append('(a) all amounts you receive by way of Salary or variable compensation or incentive payment, is  in satisfaction of all of the following provisions of the Award:',
                                $('<ul class="list-indented"/>').append(
                                    $('<li/>').html('(i) Classifications and minimum wage rates;'),
                                    $('<li/>').html('(ii) Allowances;'),
                                    $('<li/>').html('(iii) Overtime and penalty rates; and'),
                                    $('<li/>').html('(iv) Annual leave loading.')
                                )
                            ),
                            $('<li/>').html('(b) Notwithstanding clause (a) above, if any entitlement arises under a law or industrial instrument, that entitlement will be calculated by reference to the applicable minimum hourly rate of pay prescribed in the law or industrial instrument; and'),
                            $('<li/>').html('(c) the industrial instrument will apply to your employment only as a matter of law and will not form part of this Agreement,, so, for example, it may cease to apply to you in the future if your position or duties change.')
                        ),
                        (employee.Salary_Grade_Level > 30) && 
                        $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Salary Level Greater Than 30"/>').append(
                            $('<span class="s-subheaders"/>').html('<strong>Maximum payments</strong>'),
                            $('<p/>').html('You acknowledge and agree that:'),
                            $('<ul class="list-indented"/>').append(
                                $('<li/>').html('(a) your entitlements on the termination of your employment may be affected by the Corporations Act 2001 (Cth); and'),
                                $('<li/>').html('(b) where they are so affected, the Company and its related bodies corporate, as that term is defined in the Corporations Act 2001 (Cth), will only provide those entitlements which can lawfully be provided.'
                                )
                            ),
                            $('<p class="hide"/>').html('<br>')
                        )
                    ), 
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Discretionary benefits</u></strong>'),
                        $('<p/>').append('In addition to your total remuneration package, we may choose to provide you with other benefits (',
                            $('<strong/>').text('Discretionary Benefits'),
                            '). Unlike your total remuneration package, these benefits are at our discretion and we may cease providing the Discretionary Benefits, or change the basis on which we provide them, at any time during your employment and you do not have an entitlement to continue to receive the discretionary benefits. '),
                        $('<p/>').html('Unless we advise you in writing that a benefit is part of your total remuneration package, it will be a Discretionary Benefit. The Discretionary Benefits we currently provide include:'),
                        (employee.AIP == 'Yes') && 
                        $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Annual Incentive Plan (AIP)"/>').append(
                            $('<span class="s-subheaders"/>').html('<strong>Discretionary bonus scheme</strong>'),
                            $('<p/>').append(
                                'You will be eligible to participate in the PayPal Holdings, Inc. Annual Incentive Plan for a specified fiscal year (AIP) with an annual bonus based on individual achievement as well as company performance. The annual bonus period is from January 1 through December 31. Your target bonus for the AIP is ',
                                $('<mark/>').append(
                                    employee.AIP_Target_Pct
                                ),
                                '% of your annual base salary, pro-rated based on the eligible earnings paid while you are employed in an AIP eligible position during the annual  bonus period.  There is no guarantee any AIP bonus will be paid,  and any actual bonus will be determined after the end of the annual bonus period based on your eligible earnings as defined in the AIP. '),
                            $('<p/>').html('To be eligible to receive any AIP bonus, you must be employed before October 1<sup>st</sup> and you must be employed and not serving a period of notice of termination on the date the bonus is paid. The payment of any bonus is at PayPal’s sole and absolute discretion and subject to the terms and conditions of the AIP. Any bonus you receive under the AIP is inclusive of any superannuation which we are required to pay. PayPal reserves the right, in its sole discretion, to amend, change or cancel the AIP at any time, including retrospectively.')
                            ),
                        (employee.Eligible_Sales_Incentive == 'Yes') && 
                        $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Commission Bonus"/>').append(
                            $('<span class="s-subheaders"/>').html('<strong>Commission scheme</strong>'),
                            $('<p/>').html('You’ll be entitled to participate in PayPal’s commission scheme, as referenced in the attached SIP letter.  If any superannuation contributions are payable by law on any commission amounts you receive under the commission scheme, we will direct those contribution payments to your nominated superannuation fund from the commission payable to you.  We may change or cancel the commission scheme from time to time, including retrospectively.')
                            ),
                        $('<span class="s-subheaders"/>').html('<strong>Private health insurance </strong>'),
                        $('<p/>').html('Subject to eligibility criteria, you may apply for private health insurance as set out in the Australian Employee’s Benefit Summary.'),
                        $('<span class="s-subheaders"/>').html('<strong>Business travel accident insurance </strong>'),
                        $('<p/>').html('Subject to eligibility criteria, you may apply for business travel accident insurance as set out in the Australian Employee’s Benefit Summary.'),
                        $('<span class="s-subheaders"/>').html('<strong>Salary continuance insurance </strong>'),
                        $('<p/>').html('Subject to eligibility criteria, you may apply for salary continuance insurance as set out in the Australian Employee’s Benefit Summary.'),
                        $('<span class="s-subheaders"/>').html('<strong>Mobile telephone and other electronic equipment </strong>'),
                        $('<p/>').html('We may provide you with a fully maintained mobile telephone, laptop computer or other electronic devices to be primarily used by you in the performance of your duties. This equipment will remain the property of PayPal at all times and you must return it in good working condition when we ask or otherwise when you stop working for us.'),
                        $('<p/>').html('If we provide you with any Discretionary Benefits, we make no promise that those Discretionary Benefits are appropriate for your personal circumstances, so you should obtain your own financial and other advice.')
                        
                        ),
                        $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Expenses </u></strong>'),
                        $('<p/>').html('We will reimburse you for your reasonable work related expenses properly incurred in accordance with PayPal policy and procedure and provided that you have properly substantiated those expenses, including by providing valid tax invoices or any other evidence we require.')
                        ),
                        $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders margin-bottom-25"/>').html('<strong><u>Leave</u></strong>'),
                        $('<p class="zero-btm"/>').html(''),
                        $('<p class="s-subheaders"/>').html('<strong>Annual leave</strong>'),
                        $('<p/>').html('You’ll be entitled to annual leave as set out in the Act. We may require you to take your accrued annual leave as set out in the Act, including if we shut down any part of our operations. If you do not have enough accrued annual leave, you agree to take leave without pay to cover the period of the shutdown.'),
                        $('<p/>').html('You agree that if you have accrued more than eight weeks of annual leave, that it is reasonable for us to direct you to take a period of up to four weeks’ annual leave, subject to the requirements imposed by any applicable modern award.'),
                        $('<span class="s-subheaders"/>').html('<strong>Personal leave/carer’s leave </strong>'),
                        $('<p/>').html('You’ll be entitled to personal leave/carer’s leave as set out in the Act. If you are a part-time employee, you will be entitled to a pro-rata personal/carer’s leave entitlement based on your ordinary hours specified in this Agreement. Untaken paid personal leave/carer’s leave will accumulate from year to year.'),
                        $('<p/>').html('You must notify your manager as soon as you know that you have to take personal leave/carer’s leave, and explain why you will be away and for how long. You must provide us with a medical certificate for any leave absences, unless we tell you otherwise.'),
                        $('<p/>').html('Any untaken personal leave/carer’s leave will not be paid out when your employment ends.'),
                        $('<span class="s-subheaders"/>').html('<strong>Long service leave</strong>'),
                        $('<p/>').html('You’ll be entitled to long service leave as set out in applicable legislation.'),
                        $('<span class="s-subheaders"/>').html('<strong>Public holidays </strong>'),
                        $('<p/>').html('You’ll be entitled to public holidays as set out in the Act. Due to the nature of your position and our business, you may be requested to work on a public holiday.'),
                        $('<span class="s-subheaders"/>').html('<strong>Other leave </strong>'),
                        $('<p/>').html('You’ll be entitled to parental leave, community service leave, jury service leave and compassionate leave as set out in the Act. ')
                        ),
                        $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Intellectual property rights </u></strong>'),
                        $('<p/>').html('The enclosed <em>Employee Proprietary Information and Inventions Agreement</em> forms part of this Agreement.<br/>'),
                         $('<p/>').html('You must disclose and deliver to PayPal all materials, works, ideas, concepts, designs, developments, improvements, systems and anything else made during the course of your employment or where you used PayPal’s time, material or facilities, whether created by yourself or with others (<strong>Materials</strong>).'),
                        $('<p/>').html('You agree that all Materials will be the sole property of PayPal and you will assign all Intellectual Property Rights in the Materials to any Group Entity, for its use. From the date of this Agreement, you irrevocably appoint the Company Secretary of PayPal (or another person nominated by PayPal), as your attorney to give effect to this assignment if you are unable to, or you fail to do so, within three days of PayPal’s request.'),
                        $('<p/>').html('You provide an unconditional consent to any Group Entity to do anything that may constitute an infringement of your moral rights concerning the Materials, and acknowledge you have given this consent genuinely and without duress from us or any other person.'),
                        $('<p/>').html('Your obligations under this paragraph and the enclosed <em>Employee Proprietary Information and Inventions Agreement</em> continue to apply after your employment ends.')
                        ),
                        $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Confidential information </u></strong>'),
                        $('<p/>').html('Subject to this paragraph, you must keep all Confidential Information confidential.'),
                        $('<p/>').html('You must use Confidential Information solely to perform your duties and for PayPal’s benefit.  You may  disclose Confidential Information only to anyone who has been approved by PayPal to receive the Confidential Information and who agrees that the Confidential Information must be kept confidential, or if required by law.'),
                        $('<p/>').html('If you are required to disclose Confidential Information, you must first notify PayPal of that requirement. If that is not possible, you must notify us of the disclosure immediately after the disclosure. You must immediately notify us of any suspected or actual unauthorised use, copying or disclosure of Confidential Information by anyone. If requested by a Group Entity, you must provide assistance regarding any proceedings a Group Entity may take against anyone for unauthorised use, copying or disclosure of Confidential Information.'),
                        $('<p/>').html('Your obligations under this paragraph continue to apply after your employment ends.')
                            
                        ),
                        $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Medical examinations </u></strong>'),
                        $('<p/>').html('If at any time we are unsure about your fitness for work, we may request, and you agree to submit to, a medical examination with a medical practitioner of our choice. You also agree to us keeping information about your health supplied by a medical practitioner for as long as we consider necessary.')
                            
                        ),
                        $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Workplace surveillance </u></strong>'),
                        $('<p/>').html('We hereby notify you that the company undertakes  ongoing, intermittent camera, computer and tracking surveillance. This will be undertaken as set out in any relevant policies in force from time to time.  You agree that  this surveillance will commence on  the date of your commencement under this agreement.')
                            
                        ),
                        $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Termination of employment </u></strong>'),
                        (employee.Employee_Group.substring(0,1) == 'T') && 
                            $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Fixed Term Contract (Temporary)"/>').append(
                                $('<p/>').html('Your employment will end, automatically, without a termination by PayPal, on the Finish Date, unless terminated earlier in accordance with this paragraph 16, paragraph 5 or paragraph 17.')
                            ),
                        $('<p/>').html('At any time after the probationary period, either you or PayPal may terminate your employment by giving 4 weeks’ notice in writing. However, we will give you 5 weeks’ written notice if you are over 45 years old and you have more than 2 years’ service with us at the time your employment ends. '),
                        $('<p/>').html('If we end your employment or you give us notice of termination, we may decide to make a payment to you wholly or partly in lieu of notice or take any other step permitted by clause 18.  This will be calculated on the Salary component of your remuneration package, subject to any applicable legislation.'),
                        $('<p/>').html('Even if your position, remuneration or duties change during your employment, the terms of this Agreement, including the required notice period stays the same as set out in this Agreement unless expressly varied by the parties in writing.'),
                        $('<p/>').html('You agree that, after your employment ends for any reason, you will not represent yourself as still having any connection with the Company or any Associated Company save as a former employee for the purposes only of communicating with prospective employers or complying with any applicable statutory requirements.')
                        ),
                        $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Termination for serious misconduct </u></strong>'),
                        $('<p/>').html('At any time (including during the probationary period), we may end your employment by giving you notice in writing effective immediately, without any payment in lieu of notice, if you engage in serious misconduct. Serious misconduct includes, without limitation:'),
                        $('<ul class="list-indented"/>').append(
                            $('<li/>').html('(a) wilful or deliberate conduct that is inconsistent with your employment continuing;'),
                            $('<li/>').html('(b) any breach of a material provision of this Agreement or any law which applies to your employment;'),
                            $('<li/>').html('(c) conduct that causes an imminent or serious risk to the health or safety of a person or the reputation, viability or profitability of a Group Entity’s business;'),
                            $('<li/>').html('(d) theft, fraud, dishonesty or assault;</span>'),
                            $('<li/>').html('(e) being under the influence of alcohol or illegal drugs at work;'),
                            $('<li/>').html('(f) being charged with a criminal offence (other than an offence which in our reasonable opinion does not affect your position as an employee);'),
                            $('<li/>').html('(g) a breach of an applicable Group Entity policy, including policies relating to email and internet use, work health and safety, or bullying, discrimination and harassment;'),
                            $('<li/>').html('(h) ceasing to hold any professional qualification or license necessary to perform your duties; or'),
                            $('<li/>').html('(i) refusing to carry out a lawful instruction.'
                            )
                        ),
                        $('<p class="hide"/>').html('<br>')
                    ),
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Conduct during notice period </u></strong>'),
                        $('<p/>').html('During any notice period given by us or by you, we may require you to:'),
                        $('<ul class="list-indented"/>').append(
                            $('<li/>').html('(a) not attend work or any Group Entity premises;'),
                            $('<li/>').html('(b) perform duties which are different from those which you were required to perform during the rest of your employment with us, including working from a different location;'),
                            $('<li/>').html('(c) not have contact with any clients, customers, contractors or employees of a Group Entity; '),
                            $('<li/>').html('(d) not access the computer or IT systems of a Group Entity; or'),
                            $('<li/>').html('(e) return any of a Group Entity’s property to us, including Confidential Information belonging to a Group Entity.')
                        ),
                        $('<p/>').html('You’ll also remain our employee during any notice period, and you may not start to work for yourself or anyone.'),
                        $('<p/>').html('If either you or PayPal have given notice of termination, PayPal may, without limiting its rights, appoint a replacement to your position.')
                        ),
                        $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Requirements after your employment ends </u></strong>'),
                        $('<p/>').html('If your employment ends, in addition to any post-employment restrictions you may have under this Agreement:'),
                        $('<ul class="list-indented"/>').append(
                            $('<li/>').html('(a) you must immediately return any Group Entity’s property to us, including any Confidential Information belonging to a Group Entity, business cards, correspondence, motor vehicles, keys, access cards, credit cards, phones and computers;'),
                            $('<li/>').html('(b) you must not represent that you are, or continue to be, associated with a Group Entity; whether as an employee, consultant or in any other service relationship.  This obligation includes ensuring that at all times after your employment ends your resume, social media profiles and pages (including without limitation any LinkedIn or Facebook profile), website, email signature and business card shall not indicate that you have any association with a Group Entity.  In addition, you agree that any statements that you make on social media, in resumes and otherwise about your activities on behalf of PayPal and any other Group Entity shall be a reasonable and accurate summary; and'),
                            $('<li/>').html('(c) you must provide any assistance reasonably requested by a Group Entity concerning any threatened or actual proceedings against a Group Entity.'
                            )
                        ),
                        $('<p class="hide"/>').html('')
                    ),
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Direction not to attend work </u></strong>'),
                        $('<p/>').html('At any time during your employment, we may direct you to not attend for work on full pay for as long as we consider it necessary. During that time, you must cooperate with us during normal business hours, including attending for work or any meetings or interviews.'),
                        $('<p class="zero-btm"/>').html('')
                    ),
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Office</u></strong>'),
                        $('<p/>').html('If you are appointed to a directorship or other board position of a Group Entity:'),
                        $('<ul class="list-indented"/>').append(
                            $('<li/>').append('(a) you will not be entitled to any additional remuneration or benefits for that directorship or board position;'),
                            $('<li/>').html('(b) you must resign from that directorship or board position without claiming compensation if a Group Entity asks you to, either at the time your employment ends or at any other time; and'),
                            $('<li/>').html('(c) you agree to irrevocably appoint the Company Secretary of PayPal (or another person nominated by us) as your attorney to give effect to your resignation from the directorship or board position if you are unable to, or you fail to do so, within three days of our request.'
                            )
                        ),
                        $('<p class="hide"/>').html('<br>')
                    ),
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Deductions</u></strong>'),
                        $('<p/>').html('Subject to applicable law, we may deduct from any payments we make to you, any amounts you owe a Group Entity, including:'),
                        $('<ul class="list-indented"/>').append(
                            $('<li/>').append('(a) overpayments made by a Group Entity to you; and'),
                            $('<li/>').html('(b) money paid to you for leave where you have or had no entitlement to that leave,')
                        ),
                        $('<p/>').html('and you agree that the deductions made under this paragraph are reasonable and principally for your benefit.'),
                        $('<p/>').html('This paragraph continues to apply after your employment ends.')
                            
                        ),
                        $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders margin-bottom-25"/>').html('<strong><u>Post-employment restrictions </u></strong>'),
                        $('<p class="zero-btm"/>').html(''),
                        $('<p class="s-subheaders"/>').html('<strong>Non-compete </strong>'),
                        $('<p/>').html('You acknowledge that in your role you will be exposed to commercially sensitive and confidential information and know-how of PayPal and other Group Entities. As a result you agree that it is fair and reasonable that for the Restraint Period and within the Restraint Area, you must not without the prior written approval of PayPal:'),
                        $('<ul class="list-indented"/>').append(
                            $('<li/>').append('(a) Work for a Restrained Business;'),
                            $('<li/>').html('(b) Engage in (directly or through any interposed body corporate, trust or partnership) a Restrained Business; or'),
                            $('<li/>').html('(c) provide financial assistance to any entity in which you have a direct or indirect equity interest which assists that entity to engage in a Restrained Business.')
                        ),
                        $('<span class="s-subheaders"/>').html('<strong>Non-solicitation and non-interference</strong>'),
                        $('<p/>').html('During the Restraint Period, you must not without the prior written approval of PayPal: '),
                        $('<ul class="list-indented"/>').append(
                            $('<li/>').html('(a) canvass, solicit, approach or accept any approach from, or deal in any way with, any client, customer or supplier of a Group Entity with whom you had dealings during the last 12 months of your employment with a view to obtaining the custom or dealing with that client, customer or supplier in a Restrained Business;'),
                            $('<li/>').html('(b) induce, assist in inducing or encourage any employee or contractor of a Group Entity with whom you had dealings during the last 12 months of your employment to leave their employment or engagement with a Group Entity; or'),
                            $('<li/>').html('(c) interfere with the relationship between a Group Entity and any of their clients, customers, suppliers, employees, agents or contractors with whom you had dealings during the last 12 months of your employment.')
                        ),
                        $('<span class="s-subheaders"/>').html('<strong>Severability</strong>'),
                        $('<p/>').append('Each restriction in this clause 23 has effect as a separate provision, and in the case of the non-compete, each resulting from combining each geographic area in the definition of Restraint Area with each time period in the definition of Restraint Period.  If any of those separate provisions is invalid or otherwise unenforceable for any reason, the invalidity or unenforceability shall not affect the validity or enforceability of any of the other separate provisions or other combinations of those separate restriction in this clause 23.  The overlapping nature of any provision or restriction does not affect the enforceability of any other, and you agree that the restrictions are to have effect in order of priority starting with the longest period and, as applicable, the largest area, so that the best protection for PayPal and each other Group Entity is greatest.  You agree that all restrictions are to be interpreted in accordance with the ',
                            $('<em/>').text('Restraints of Trade Act 1976'),
                            ' (NSW) to give them their maximum enforceable effect.'),
                        $('<p/>').append('')
                        ),
                        $('<p class="zero-btm"/>').html(''), 
                        $('<span class="s-subheaders"/>').html('<strong>Group obligations</strong>'),
                        $('<p/>').html('You acknowledge and agree that, to the extent that you have any dealings with or acts on behalf of any Group Entity during the last 12 months of your employment: '),
                        $('<ul class="list-indented"/>').append(
                            $('<li/>').append('(a) each obligation applies in respect of that Group Entity as if the reference to PayPal were a reference to that Group Entity; and '),
                            $('<li/>').html('(b) that Group Entity may enforce this Agreement, and any obligation in it, as if it were a party to it directly; and '),
                            $('<li/>').html('(c) PayPal enters into this Agreement on behalf of that Group Entity, holds the benefit of the obligation on trust for that Group Entity, and may enforce that obligation and the Agreement on that Group Entity\'s behalf. ')
                        ),
                        $('<p/>').html('This clause survives the termination of the Agreement for any reason. '),
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Policies, procedures and legislation </u></strong>'),
                        $('<p/>').html('Any reference to legislation, the Award or a Group Entity policy or procedure in this Agreement:'),
                        $('<ul class="list-indented"/>').append(
                            $('<li/>').append('(a) does not have the effect of making the terms of that legislation, the Award or those policies or procedures part of this Agreement, and that legislation, the Award or those policies or procedures are not, and are not intended to be, contractual in nature or to have any contractual effect;'),
                            $('<li/>').html('(b) includes any changes, amendments, substitutes or replacements to the legislation, the Award or the policies or procedures from time to time; and'),
                            $('<li/>').html('(c) in the case of a reference to legislation, includes any associated regulations.')
                        ),
                        $('<p/>').html('You acknowledge that we may vary or rescind any Group Entity policies or procedures from time to time, in our absolute discretion and without any limitation on our capacity to do so and any failure by us to comply with any Group Entity policy or procedure is not a breach of any term of this Agreement (including implied terms).')
                    ),
                    $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Definitions </u></strong>'),
                        $('<p/>').html('In this Agreement, unless the context otherwise requires:'),
                        $('<p/>').html('<strong>Act</strong> means the <em>Fair Work Act 2009</em> (Cth).'),
                        $('<p/>').html('<strong>Agreement</strong> means the terms and conditions of employment set out in this letter.'),
                        $('<p/>').append('<strong>Award</strong> means, as applicable, ',
                            $('<em/>').text('the Banking, Finance and Insurance Award 2020, the Clerks – Private Sector Award 2020 or any other Award that applied to your employment (if any).')
                        ),
                        $('<p/>').html('<strong>Confidential Information</strong> means all confidential information including but not limited to:'),
                        $('<ul class="list-indented"/>').append(
                            $('<li/>').html('(a) all information concerning the business, methods of operating and methods and proposals for marketing, promotion, and other activities of a Group Entity;'),
                            $('<li/>').html('(b) information concerning a Group Entity’s clients, customers, supplier and Competitors;'),
                            $('<li/>').html('(c) confidential and financial information concerning a Group Entity;'),
                            $('<li/>').html('(d) trade secrets of a Group Entity;'),
                            $('<li/>').html('(e) know-how of a Group Entity;'),
                            $('<li/>').html('(f) the terms of this Agreement or your remuneration and benefits; '),
                            $('<li/>').html('(g) specifications, drawings, diagrams or any other information relating to equipment or machinery designed, manufactured, leased, owned or operated by a Group Entity; and'),
                            $('<li/>').html('(h) information concerning the business, finances or customers of a third party which a Group Entity has an obligation not to disclose,')
                        ),
                        $('<p/>').html('that you become aware of or generate in the course of, or in connection with, your employment with any Group Entity  but does not include information publicly available for reasons other than unauthorised disclosure by you.'),
                        $('<p/>').html('<strong>Engage in</strong> means to participate, assist or otherwise be directly or indirectly involved in as a member, shareholder (other than a shareholding of less than 5% in a company listed on any recognised stock exchange), unitholder, director, consultant, adviser, contractor, principal, agency, manager, employee, beneficiary, partner, associate, trustee or financier. However, it does not include to Work for.'),
                        $('<p/>').html('<strong>Group</strong> means: '),
                        $('<ul class="list-indented"/>').append(
                            $('<li/>').html('(a) each of PayPal Holdings Inc, PayPal Australia and PayPal Private Limited;'),
                            $('<li/>').html('(b) each of their respective related bodies corporate, as that term is defined in the Corporations Act 2001 (Cth); and'),
                            $('<li/>').html('(c) any entity that is connected with any of them by a common interest in an economic enterprise.')
                        ),
                        $('<p/>').html('<strong>Group Entity</strong> means any member of the Group.'),
                        $('<p/>').html('<strong>Intellectual Property Rights</strong> means all intellectual property rights <strong>whether registered or unregistered in Australia and</strong> throughout the world including, without limitation: '),
                        $('<ul class="list-indented"/>').append(
                            $('<li/>').append('(a) copyright, patents, designs, trademarks, any confidential information (including trade secrets and know how) and the right to have Confidential Information kept confidential;'),
                            $('<li/>').html('(b) the Materials; and'),
                            $('<li/>').html('(c) any application or right to apply for registration of any of those rights.')
                        ),
                        $('<p/>').html('<strong>Radius</strong> means, subject to the Restraints of Trade Act 1976 (NSW), in the following order of priority:'),
                        $('<p/>').html('(a) 100km;  (b) 90km;   (c) 80km;   (d) 70km;   (e) 60km;'),
                        $('<p/>').html('(f) 50km;   (g) 45km;   (h) 40km;   (i) 35km;   (j) 30km;'),
                        $('<p/>').html('(k) 25km;   (l) 20km;   (m) 15km;   (n) 10km;   (o) 5km.'),
                        $('<p/>').html('<br>'),
                        $('<p/>').html('<strong>Restrained Business</strong> means a business or operation similar to, or competitive with: '),
                        $('<p/>').html('(a) the business of PayPal; and/or'),
                        $('<p/>').html('(b) the business of any other Group Entity,'),
                        $('<p/>').html('with which you worked, in the following order of priority:'),
                        $('<p/>').html('(i) during the last 12 months of your employment; and'),
                        $('<p/>').html('(ii) most often during the last 12 months of your employment.'),
                        $('<p/>').html('<strong>Restraint Area</strong> means in the following order of priority, subject to the Restraints of Trade Act 1976 (NSW), anywhere within the Radius around each of:'),
                        $('<ul class="list-indented"/>').append(
                            $('<li/>').html('(a) each client, customer, supplier, employee, agent or contractor of each Group Entity with whom you had dealings during the last 12 months of your employment;'),
                            $('<li/>').html('(b) each location from which you worked during the last 12 months of your employment;'),
                            $('<li/>').html('(c) the location from which you worked most often during the last 12 months of your employment.')
                        ),
                        $('<p/>').html('<strong>Restraint Period</strong> means throughout your employment and thereafter, in the following order of priority, subject to the Restraints of Trade Act 1976 (NSW) for:'),
                        $('<ul class="list-indented"/>').append(
                            $('<li/>').html('(a) 12 months;'),
                            $('<li/>').html('(b) 9 months; '),
                            $('<li/>').html('(c) 6 months.')
                        ),
                        $('<p/>').html('<strong>Salary</strong> means the salary referred to in this Agreement, as reviewed from time to time.'),
                        $('<p />').html(
                            $('<strong/>').append('Work for means working directly or indirectly whether such entity is in or outside of the Restraint Area, and includes working or involvement as:')
                        ),
                        $('<ul class="list-indented"/>').append(
                            $('<li/>').html('(a) an employee, volunteer, advisor or director or officer; and '),
                            $('<li/>').html('(b) a contractor or consultant (including through any of your associated entitles, as that term is defined in the Corporations Act 2001). ')
                        )
                    ),
                    $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Interpretation</u></strong>'),
                        $('<p/>').html('In this Agreement, unless the context otherwise requires:'),
                        $('<ul class="list-indented"/>').append(
                            $('<li/>').html('(a) a reference to anyone includes any natural person, company, partnership, association, trust, business, or other organisation or entity of any description and their legal personal representative(s), successors, assigns or substitutes; and'),
                            $('<li/>').append('(b) a reference to client or customer includes anyone:',
                                $('<ul class="list-indented"/>').append(
                                    $('<li/>').html('I. to whom a Group Entity provides and/or provided products or services; or'),
                                    $('<li/>').html('II. entered into discussions or negotiations with a Group Entity, at either their own initiative or at the initiative of a Group Entity, at any time during the last 12 months of your employment, with a view to receiving products or services from a Group Entity.')
                                )
                            )
                        )
                    ),
                    $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders margin-bottom-25"/>').html('<strong><u>General provisions </u></strong>'),
                        $('<p class="zero-btm"/>').html(''),
                        $('<p class="s-subheaders"/>').html('<strong>Governing law and jurisdiction </strong>'),
                        $('<p/>').append(
                            'Save that the restrictions in this Agreement will always be interpreted in accordance with the Restraints of Trade Act 1976 (NSW), this Agreement is governed by and construed under the laws of the State where you usually work.    Any legal action relating to this Agreement against you or PayPal may be brought in any court of competent jurisdiction in that state  and you and PayPal irrevocably, generally and unconditionally submit to the non exclusive jurisdiction of the courts of that State.'),
                        $('<span class="s-subheaders"/>').html('<strong>Entire agreement </strong>'),
                        $('<p/>').html('This Agreement:'),
                        $('<ul class="list-indented"/>').append(
                            $('<li/>').html('(a) expresses and incorporates the entire agreement between you and PayPal about your employment; and'),
                            $('<li/>').html('(b) supersedes and excludes any prior or collateral negotiation, understanding, communication, representation or agreement by or between you and any Group Entity about your employment.')
                        ),
                        $('<span class="s-subheaders"/>').html('<strong>Further assurances</strong>'),
                        $('<p/>').html('You must execute any document and perform any action necessary to give full effect to this Agreement.'),
                        
                        $('<span class="s-subheaders"/>').html('<strong>Amendments </strong>'),
                        $('<p/>').html('Any amendment to the Agreement must be agreed in writing and signed by you and PayPal.'),
                        
                        $('<span class="s-subheaders"/>').html('<strong>Waivers</strong>'),
                        $('<p/>').html('Any failure by any you or PayPal to exercise any right under this Agreement in whole or in part does not operate as a waiver. '),
                        
                        $('<span class="s-subheaders"/>').html('<strong>Severability</strong>'),
                        $('<p/>').html('Any provision or part provision of this Agreement which is invalid in any jurisdiction is invalid in that jurisdiction to that extent. It will not invalidate or affect the remaining provisions of this Agreement or the validity of that provision in any other jurisdiction.'),
                        
                        $('<span class="s-subheaders"/>').html('<strong>Acknowledgements </strong>'),
                        $('<p/>').html('You acknowledge that:'),
                        $('<ul class="list-indented"/>').append(
                            $('<li/>').html('(a) the restrictions outlined in paragraphs 13 and 23 are reasonable and necessary in the circumstances to protect the Group’s legitimate interests; and'),
                            $('<li/>').html('(b) damages are not an adequate remedy for a breach of clause 13 or 23.')
                        )
                    ),
                    $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Employment checks </u></strong>'),
                        $('<p/>').html('We engage a specialised pre-employment and employment-screening agency to verify information in employment applications. Prior to your start date, if you have not already done so, you may be required to complete a background check and return identification and disclosure details to the agency.'),
                        $('<p/>').html('At any time during your employment, we may perform criminal record, checks on your eligibility to work in Australia (including gaining and maintaining any necessary work visas) and/or APRA Prudential Standards LPS 520 – Fit and Proper checks.  You agree that you will assist us in relation to these checks.  You understand, acknowledge and agree that, depending on the circumstances, any adverse report in relation to these checks may result in the termination of your employment. You will immediately advise PayPal if you cease to satisfy the visa requirements or are likely to do so in the future. ')
                        ),
                        $('<p class="zero-btm"/>').html(''), 
                    $('<li/>').append(
                        $('<span class="s-subheaders"/>').html('<strong><u>Acknowledgement </u></strong>'),
                        $('<p/>').html('By accepting this offer, you agree that you do not owe any obligation to anyone, or have any incapacity or restriction that would stop you starting work for PayPal on your start date or would restrict your ability to perform your duties for PayPal.')
                            
                        )
                )//ol end
            ),
$('<p/>').html('<br>'),

$('<p/>').append(
    'On your first day, please ask for ',
    $('<mark/>').append(
        employee.Hiring_Manager_Name
    ),
    ' and bring with you the following documents for your personnel file (or send us certified copies of the originals):'),
$('<ul class="list-indented"/>').append(
    $('<li/>').html('(a) your qualifications;'),
    $('<li/>').html('(b) proof of identity in the form of your birth certificate or an Australian passport; and'),
    $('<li/>').html('(c) if you are not an Australian citizen, your work permit.')
),
$('<p/>').html('<br>'),
$('<p/>').append(
    'We are looking forward to you joining our team and hope that you find working with us both challenging and rewarding. If you have any questions, please contact ',
    $('<mark/>').append(
        employee.APAC_Recruiter_First_Name
    ),
    ' ',
    $('<mark/>').append(
        employee.APAC_Recruiter_Last_Name
    ),
    ' at ',
    $('<mark/>').append(
        employee.APAC_Recruiter_Email
    ),
    '.'),
$('<p/>').html('<br>'),
$('<p class="text-left"/>').text('Yours sincerely,'),
$('<div id="complimentary-close-signer"/>').html(
    '<mark class="signDisplay2"></mark><br>'
),
$('<div/>').html(
    'Company Signatory<br>On behalf of PayPal Australia Pty Ltd'
),

            $('<p/>').html('<br><br>'),
            $('<p/>').html('<span class="margin-right-30 inl-block-1-1"><strong>Enclosed</strong></span><p style="display:none!important;"></p><span class="inl-block-3"><em>Fair Work Information Statement<br>Employee Proprietary Information and Inventions Agreement</em></span>'),
                        
            $('<p/>').html('<br><br>'),

            $('<p/>').html('I have read this Agreement and accept the offer of employment.')
            //p end
        )//div end

        // end append
        );

$("#markup2").html("").append(
        // OfferClause 2
        $('<div class="offerClause2">').append(
            $('<p/>').html(
                '<strong>Employee:</strong>'
                )
            )
        // end append
        );

$("#markup3").html("").append(
        // OfferClause 3
        $('<div class="offerClause3">').append(
            $('<p/>').html(
                '<strong>Employer:</strong>'
                )
            )   
        // end append
        );
$("#markup4").html("").append(
        // OfferClause 4
        $('<div class="offerClause4">').append(
            $('<span/>').html(
                'PayPal Australia Pty Limited<br>'
                ),
            $('<span/>').html(
                'ABN 93 111 195 389<br>'
                ),
            $('<span/>').html(
                'Level 23, 1 York Street<br>'
                ),
            $('<span/>').html(
                'Sydney NSW 2000 Australia<br>'
                )
            )
        // end append
        );
}

$(function() {
    // render template
    fnView();

    // completed letter
    if (!$("input.calendar_button").length) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

        let arrParts = [
            [1, 'hidden_pg']
        ];
        showCompletedOfferLetter('incomplete', 'complete', arrParts);
    }
});
