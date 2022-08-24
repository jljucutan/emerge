// Israel FTE Contract
function fnView() {
    $("#markup").html("").append(
        // Company Logo
        $('<div class="col-lg-12"/>').append(
            $('<div class="offerClause"/>').append(
                $('<div id="srt_eform_logo" class="text-right"/>').html('<img src=' + company.Logo + '>')
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(employee.First_Name + ' ' + employee.Last_Name + '')
        ),
        $('<div class="offerClause">').append(
            $('<span/>').html(employee.Address_1 + '<br>'),
            $('<span/>').html((employee.Address_2) ? employee.Address_2 + '<br>' : ''),
            $('<span/>').html((employee.Address_3) ? employee.Address_3 + '<br>' : ''),
            $('<span/>').html(employee.City + ", " + employee.Postal_Code)
            //$('<span/>').html(employee.City + '<br>'),
            //$(‘<span/>’).html(employee.Address_Country)

        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('&nbsp;')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(fnConvertDate(employee.DateNow))
        ),        
        $('<div class="offerClause">').append(
            $('<p/>').html('Dear ' + employee.First_Name + ',')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('I am delighted to offer you the position of ' + employee.Job_Title + ' (the <strong>"Position"</strong>) with Apple Israel Limited (<strong>“Apple”</strong>), reporting to ' + employee.Hiring_Manager + '.'),
            $('<p/>').html('Outlined below are the main terms and conditions of your employment (the <strong>“Employment Agreement”</strong>). '),
            $('<ol/>').append(
                $('<li/>').html('<strong><u>Employment</u></strong><br><br>'),
                    $('<ol class="Lower_Alpha"/>').append(

                        (['ASC Standard', 'Standard'].indexOf(employee.Israel_Contract_Type_Code >= 0)) &&


                        $('<li/>').append(
                            'You shall be employed by the Apple commencing as of ',
                            (employee.Israel_Contract_Type_Code == 'Standard') &&
                            fnConvertDate(employee.Start_Date),
                            (employee.Israel_Contract_Type_Code == 'Standard') &&
                            ' (the <strong>“Commencement Date”</strong>) and no later than ',
                            (employee.Israel_Contract_Type_Code == 'Standard') &&
                            fnConvertDate(getCommencement_date(employee.Start_Date,14)),
                            '.<br><br>'),

                        (employee.Israel_Contract_Type_Code == 'Student') &&
                        $('<li/>').html('You shall be employed by Apple for a fixed term duration commencing as of ' + fnConvertDate(employee.Start_Date) + ', and no later than ' + fnConvertDate(getCommencement_date(employee.Start_Date,14)) + '. This agreement shall continue for the period in which you are actively engaged in academic studies and will terminate on the earlier of (i) four months from the last official day of your final year of your academic studies and (ii) no later than three years from the commencement of this agreement. Notwithstanding the above, the agreement may be terminated at any time by either party prior to the expiry of the fixed term without compensation in accordance with clause 5 of this agreement. <br><br>'),

                            (employee.Israel_Contract_Type_Code == 'Student') &&
                        $('<span/>').html('You  shall be engaged on a part time basis and required to work at least 80 hours per month (<strong>the "Scope of Employment"</strong>). Your entitlements under Section 3 are full time benefits and will be pro-rated in accordance with the Scope of Employment and as prescribed by law.<br><br>'),


                            (employee.Israel_Contract_Type_Code == 'Standard') &&
                        $('<span/>').html('You shall be under the direct supervision of and comply with the directives of your direct manager and/or any such individual designated by Apple. You shall perform the duties, undertake the responsibilities and exercise the authority as determined from time to time by Apple and as customarily performed, undertaken and exercised by persons situated in a similar capacity.  Your duties and responsibilities may also include other services performed for subsidiaries and affiliates of Apple.<br><br>'),

                        $('<li/>').html('During the course of your employment, you shall honestly, diligently, skilfully and faithfully serve Apple. You undertake to devote all your efforts and the best of your qualifications and skills to promote the business and affairs of Apple, and further undertake to loyally and fully comply with the decisions of Apple. You shall at all times act in a manner suitable of your position and status in Apple.<br><br>'),
                        $('<li/>').html('You undertake to promptly notify Apple regarding any matter or subject in respect of which you have or will have a personal interest and/or which might create a conflict of interest with your position in Apple.<br><br>'),
                        $('<li/>').html('You agree to devote total attention and full time to the business and affairs of Apple as required for the performance of the Position. During the term of this Employment Agreement, you shall not be engaged in any other employment nor directly or indirectly engage in any other business activities in any capacity for any other person, firm or company whether or not for consideration, without the express prior written consent of Apple.  Apple may change such consent at any given time, in its sole and absolute discretion.<br><br>'),
                        (employee.Israel_Contract_Type_Code == 'Standard') &&
                        $('<li/>').html('You will work all hours required for the performance of the Position, all subject to Apple’s policies and instructions. You are aware that the Position may require frequent travel outside of Israel and agree to travel as requested. <br><br>'),
                        (employee.Israel_Contract_Type_Code == 'ASC Standard') &&
                        $('</li>').append(
                            'As you are employed hereunder in a position which requires a special degree of trust and which does not enable Apple to supervise your work and rest hours – among others since you are employed outside Apple\'s premises - the Hours of Work and Rest Law 1951, and any other law amending or replacing such law, does not apply to you or to your employment with the Company. You acknowledge that the consideration set for you hereunder nevertheless includes within it consideration that would otherwise have been due to you pursuant to such law. You will be provided with details of your schedule from time to time in advance by your manager.<br><br>'
                        ),
                        (employee.Israel_Contract_Type_Code == 'ASC Standard') &&
                        $('</li>').append(
                            'Without derogating from the generality of the above, by signing this Employment Agreement you confirm that you  will work all hours required for the performance of the Position (which may include irregular hours as disclosed to you), all subject to Apple\'s policies and instructions.<br><br>'
                        ),
                        $('<li/>').html('You hereby represent and undertake to Apple all of the following:<br><br>'),
                            $('<ul/>').append(
                                $('<li/>').html('All information supplied on your employment application or resume is true and complete.<br><br>'),
                                $('<li/>').html('There are no provisions of any law, regulations or any other undertakings or agreements preventing you from making the commitments or performing the obligations in this Employment Agreement.<br><br>'),
                                $('<li/>').html('You shall not, directly or indirectly, accept any commission, rebate, discount or gratuity in cash or in kind, from any third party which has or is likely to have a business relationship with Apple.<br><br>'),
                                $('<li/>').html('To the best of your knowledge, you are not currently, nor by entering into this Employment Agreement will be deemed to be, in breach of any of your obligations towards any former employer, including without limitation, any non-competition, intellectual property or confidentiality undertakings.<br><br>'),
                                $('<li/>').html('In carrying out your duties under this Employment Agreement, you shall not make any representations or make any commitments on behalf of Apple, except as expressly and authorized in advance. <br><br>'),
                                $('<li/>').html('To comply with Apple’s disciplinary regulations, work rules, policies, procedures and objectives, as in effect from time to time, including the applicable Prevention of Sexual Harassment Rules (the <Strong>"Rules"</strong>). This Employment Agreement prevails to the extent of any inconsistency with the Rules. <br><br>'),
                                $('<li/>').html('You have the right to work in Israel and you accept that this Employment Agreement and your continued employment are conditional upon having this right. You must provide acceptable evidence of such right where requested by Apple to do so and notify Apple in the case of any change in respect of it.<br><br>')
                            ),
                        $('<li/>').html('You agree to comply with Apple’s policies regarding computers and networks, including but not limited to, the use of electronic mail transmissions, social media, internet usage and their content, as they relate to your employment, as may be in effect from time to time, as set forth on Apple’s People site. <br><br>'),
                        (employee.Israel_Contract_Type_Code == 'ASC Standard') &&
                        $('<li/>').html('You consent that the information in this Employment Agreement and any information concerning you gathered by Apple, will be held and managed by Apple or on its behalf, inter alia, on databases according to law, and that Apple shall be entitled to transfer such information to third parties, in Israel or abroad. Apple undertakes that the information will be used, and transferred for legitimate business purposes only, including (but not limited to) human resources management, to the extent required while maintaining your right to privacy.<br><br>'),
                        (employee.Israel_Contract_Type_Code == 'ASC Standard') &&
                        $('<li/>').append('You are also expected to comply with those rules and policies provided to you from time to time which are specific to the ASC role. Furthermore and without derogating from the fact that you are employed by Apple and not by any third party retailer, as your Position is performed outside of Apple premises at the site of a third party retailer , you are expected to comply with any applicable policies, including health and safety, of the third party retailer where you are located.<br><br>',
                        'You will perform the Position in Apple\'s third party retailer\' store in Ben Gurion Airport. Apple reserves the right to change your normal place of work from time to time upon reasonable notice and you agree in advance to any such change.<br><br>')
                    ),
                $('<li/>').html('<strong><u>Remuneration</u></strong><br><br>'),
                    (employee.Israel_Contract_Type_Code == 'Standard') && 
                    $('<ol class="Lower_Alpha"/>').append(
                        $('<li/>').append(
                            'You will be paid a gross salary of NIS ',
                            fnFormatCurrency(employee.Monthly_Salary),
                            ' per month (the <strong>“Salary”</strong>).<br><br>',
                            (employee.Israel_Contract_Type_Code == 'ASC Standard') &&
                            $('<span/>').append(
                                'Without derogating from the above said in Section 1 (j) ')
                            ),
                            'It is hereby clarified that the Salary is calculated based on two separate components as follows:<br><br>',
                            $('<ul/>').append(
                                $('<li/>').html('A gross monthly base salary of NIS ' + fnCalculateSA1(employee.Monthly_Salary) + ' (the <strong>“Base Salary”</strong>);<br><br>'),
                                $('<li/>').append('A gross monthly global compensation for overtime hours of work in the amount of NIS  ' + fnCalculateSA2(employee.Monthly_Salary),
                                ' per month (the <strong>“Overtime Payment”</strong>) which represents payment for ',
                                (employee.Israel_Contract_Type_Code == 'ASC Standard') &&
                                $('<span/>').append(
                                    '37.2'
                                ),
                                (employee.Israel_Contract_Type_Code != 'ASC Standard') &&
                                $('<span/>').append(
                                    '60'
                                ),
                                ' overtime hours. The Overtime Payment has been determined based on Apple’s considered view (according to Apple’s experience with similar positions within Apple and Group Companies) of the average of overtime hours per month that your Position requires.<br><br>',
                                (employee.Israel_Contract_Type_Code == 'ASC Standard') &&
                                $('<span/>').append(
                                    'The Overtime Payment represents any amounts payable under the Work and Rest Law.<br><br>',
                                    'All salary-based social benefits will be calculated based on the Salary (meaning not only the Base Salary but also based on the Overtime Payment unless detailed otherwise in the Employment Agreement).'
                                ),
                                (employee.Israel_Contract_Type_Code != 'ASC Standard') &&
                                'In the event that it is claimed or determined that the Work and Rest Law legislation is applicable to your employment under this Employment Agreement, despite what is stated in this Employment Agreement, the Overtime Payment represents any amounts payable under such legislation.<br><br>All salary-based social benefits will be calculated based on the Salary (meaning not only the Base Salary but also based on the Overtime Payment unless detailed otherwise in the Employment Agreement).<br><br>')
                            ),
                        $('<li/>').html('The Salary will be paid no later than the 9th day of each month by direct bank transfer to an account designated by you in writing, one month in arrears, after deduction of any and all taxes and charges applicable to you as may be in effect or which may hereafter be required by law. You shall notify Apple of any change which may affect your tax liability.<br><br>'),
                        (employee.Israel_Contract_Type_Code == 'ASC Standard') &&
                        $('<li/>').append(
                            $('<u/>').append('Sales incentive compensation plan:'),
                            'You will be eligible to participate in the Apple Sales Incentive Compensation Plan (“the Plan”) for each year from time to time in force, all subject to the terms of the Plan. Any payment of Sale incentives under the Plan is based on personal performance, the conditions and achievement of which are set forth in each Plan in from time to time in force.<br><br>',
                            'Where any Sale Incentive is paid to you hereunder, being a conditional payment, it shall not constitute a salary component for any purpose, including for the purpose of calculating any fringe benefits.'
                        )
                    ),

                    (employee.Israel_Contract_Type_Code == 'Student') && 
                    $('<ol class="Lower_Alpha"/>').append(
                        $('<li/>').html('The Company shall pay you NIS ' + employee.Hourly_Salary + ' gross per each actual working hour (<strong>the “Hourly Salary”</strong>). The Hourly Salary multiplied by the working hours in a certain month will be defined as the <strong>“Salary”</strong>.<br><br>Should you be required by your direct manager to work overtime hours, as such term is defined under law, you shall be entitled to overtime payment in accordance with the law.<br><br>'),
                            
                        $('<li/>').html('The Salary will be paid no later than the 9th day of each month by direct bank transfer to an account designated by you in writing, one month in arrears, after deduction of any and all taxes and charges applicable to you as may be in effect or which may hereafter be required by law. You shall notify Apple of any change which may affect your tax liability.<br><br>')
                    ),


                $('<li/>').html('<strong><u>Benefits</u></strong><br><br>'),
                    $('<ol class="Lower_Alpha"/>').append(
                        $('<li/>').html('You shall be entitled to the following benefits:<br><br>'),
                            $('<ul/>').append(
                                $('<li/>').append(
                                    'Pension Arrangement. ',
                                    (employee.Israel_Contract_Type_Code == 'ASC Standard') &&
                                    $('<span/>').append('Apple will pay to a pension arrangement as follows:'),
                                    (employee.Israel_Contract_Type_Code != 'ASC Standard') &&
                                    $('<span/>').append('Apple will contribute to a pension arrangement of your choice (the <strong>"Pension Arrangement"</strong>), as follows:<br><br>8.33% of the Salary towards the severance pay component; and 6.5% of the Salary towards the pension component.  In the case you are insured in a manager’s insurance policy or a provident fund (which is not a pension fund), the said rate shall include the rate of contributions towards the disability insurance (ביטוח אבדן כושר עבודה), ensuring loss of earning payment of 75% of the Salary but no less than 5% towards the pension component, all subject to the terms of the Extension Order regarding the Increase of Pension Contributions - 2016 (the "<strong>Pension Order 2016</strong>"). In accordance with the terms of the Pension Order 2016, if the said rate shall not be sufficient to insure you in disability insurance, the total rate of contributions shall increase up to 7.5% of the Salary.<br><br>'),
                                    $('<span/>').html('Apple shall also deduct 6% of the Salary to be paid on your account towards the Pension Arrangement.<br><br>'),

                                    (employee.Israel_Contract_Type_Code == 'Standard') && 
                                    $('<span/>').html('As required under the Pension Order 2016, as of contributions for the month of January 2017, the rate of contributions referred to in section (a)(1)(ii) shall be increased to 6.5% and the rate of deductions referred to in section (a)(1)(iii) shall be increased to 6%.<br><br>'),
                                    (employee.Israel_Contract_Type_Code == 'ASC Standard') && 
                                    $('<span/>').append(
                                        '8.33% of the Salary on account of the severance pay component.<br><br>',
                                        '5% of the Salary on account of the provident component.<br><br>',
                                        'in addition, Apple will deduct from the Salary an amount equal to 5% of your Salary, which shall constitute your contribution on account of the provident component and will be paid on account towards such policy or fund.  <br><br>',
                                        'Apple will also contribute at the lower rate of, 2.5% of the Salary or a rate which is required to insure 75% of your Salary for disability insurance, provided that such insurance is available for you.<br><br>',
                                        'If you choose to be insured in a pension fund:<br><br>',
                                        '8.33% of the Salary on account of the severance pay component.<br><br>',
                                        '6% of the Salary on account of the provident component.<br><br>',
                                        'in addition, Apple will deduct from the Salary an amount equal to 5.5% of your Salary, which shall constitute your contribution on account of the provident component and will be paid on account towards such policy or fund.  <br><br>'
                                    ),
                                    $('<span/>').html('It is hereby agreed that the settlement regulated in the General Approval of the Minister of Labour and Welfare, published in the Official Publications Gazette No. 4659 on June 30, 1998, attached hereto as <strong><u>Exhibit A</u></strong> published under section 14 of the Severance Pay Law 1963 shall apply and, accordingly, Apple’s contributions to either the policy or the fund stated above will therefore constitute your entire entitlement to severance pay in respect of the paid Salary, in place of any severance pay to which you otherwise may have become entitled at law.<br><br>Apple hereby waives in advance any claim it has or may have to be refunded any of the payments made to said policy or fund, unless (1) your right to severance pay is invalidated by a court ruling on the basis of Sections 16 or 17 of the Law (and in such case only to the extent it is invalidated), or (2) you withdrew funds from the manager’s insurance policy for reasons other than an “Entitling Event”. An “Entitling Event” means death, disability or retirement at the age of 60 or more.<br><br>'),
                                    (employee.Israel_Contract_Type_Code != 'ASC Standard') &&
                                    $('<span/>').append('By signing this Employment Agreement, you acknowledge that in accordance with the terms of the General Approval, if you choose to be insured in a Pension Arrangement, which is not a pension fund, you must also be insured in disability insurance (ביטוח אבדן כושר עבודה), ensuring loss of earning payment of 75% of the Salary (or the relevant portion of the Salary which you choose to insure in such an arrangement).<br><br>'),
                                    (employee.Israel_Contract_Type_Code == 'ASC Standard') &&
                                    $('<span/>').append('Nothing in this clause derogates from Apple’s entitlements under law in this regard'),
                                $('<li/>').html('Sick Leave. You will be entitled to sick leave as provided by law and in accordance with Apple’s policies from time to time in force. You shall not be entitled to any compensation for unused sick leave.<br><br>'),
                                $('<li/>').html('Annual Recreation Allowance (Dme’i Havra’a). You shall be entitled to annual recreation allowance, according to the applicable law. <br><br>'),
                                $('<li/>').html('Vacation. You shall be entitled to an annual vacation of 20 working days each calendar year (or such higher entitlement as stipulated by law).  In general, the dates of vacation will be coordinated between you and Apple. Subject to applicable law, Apple may require you to take vacation leave at set periods determined by Apple.<br><br>The accrual of vacation days shall be in accordance with Apple’s policy as in effect from time to time. Any amounts exceeding the applicable accrual limit in effect from time to time shall be lost and shall not be paid out on termination.<br><br>'),
                                $('<li/>').html('Educational Fund (Keren Hishtalmut). Apple will contribute to a recognized educational fund an amount equal to 7.5% of the Salary and will deduct from the Salary and contribute to such education fund an additional amount equal to 2.5% of the Salary. You shall bear any and all taxes applicable in connection with amounts payable by you and/or Apple to the said Educational Fund.<br><br>'),
                                $('<li/>').html('You will be entitled to travel allowance as per Apple’s policy as in effect from time to time.<br><br>All of the payments and benefits provided to you under this Employment Agreement are gross amounts and shall be subject to the withholding of all applicable taxes and deductions required by any applicable law. Your eligibility for any benefits provided by Apple is subject to the rules of the relevant scheme, which may change from time to time.<br><br>')
                            ),
                        (employee.OTP_Amount_1 != '' && employee.Bonus_Clawback == '12 months') &&
                        $('<li/>').html('Apple will pay you a one-time special retention bonus of NIS ' + fnFormatCurrency(employee.OTP_Amount_1) + '  gross (the <strong>"Special Retention Bonus"</strong>), subject to the conditions that follow, on the first or second payroll following the Commencement Date, as consideration for you undertaking to remain in active employment with Apple until the 1st anniversary of the Commencement Date <strong>“Anniversary Date”</strong>). If you give notice of resignation from your employment with Apple, for whatever reason, prior to the Anniversary Date, you hereby agree to pay back the proportionate part of the Special Retention Bonus according to a sliding scale, as follows: the amount of the Special Retention Bonus to be repaid shall decrease by one twenty-fourth (1/24) for each completed month during which you were employed and not under notice. If you receive notice of termination for Cause (as defined below) before the Anniversary Date you undertake to repay the entire Special Retention Bonus.<br><br>'),
                        (employee.OTP_Amount_1 != '' && employee.Bonus_Clawback == '24 months') &&
                        $('<li/>').html('Apple will pay you a one-time special retention bonus of NIS ' + fnFormatCurrency(employee.OTP_Amount_1) + '  gross (the <strong>"Special Retention Bonus"</strong>), subject to the conditions that follow, on the first or second payroll following the Commencement Date, as consideration for you undertaking to remain in active employment with Apple until the 1st anniversary of the Commencement Date <strong>“Anniversary Date”</strong>). If you give notice of resignation from your employment with Apple, for whatever reason, prior to the Anniversary Date, you hereby agree to pay back the proportionate part of the Special Retention Bonus according to a sliding scale, as follows: the amount of the Special Retention Bonus to be repaid shall decrease by one twenty-fourth (1/24) for each completed month during which you were employed and not under notice. If you receive notice of termination for Cause (as defined below) before the Anniversary Date you undertake to repay the entire Special Retention Bonus.<br><br>You agree to and authorise Apple to deduct the proportionate part of the Special Retention Bonus or the entire amount (as detailed above) from any amounts which you shall be entitled to receive from Apple from any source whatsoever. You acknowledge that such amounts may be deducted as they form an employee’s debt towards its employer under law. Without derogating from any other remedy Apple may have, you undertake that in case the deductions made do not cover the amount to which Apple is entitled to receive, then you will pay the difference directly to Apple on or before the termination of your employment.<br><br>The payment of the Special Retention Bonus does not imply any obligation on behalf of Apple to employ you for a certain fixed period. Furthermore, as the Special Retention Bonus is a unique bonus that is subject to its specific terms, it will not be regarded as a salary component for all intents and purposes, including for the purpose of calculating your social benefits.<br><br>')
                    ),
                $('<li/>').html('<strong><u>Expenses</u></strong><br><br>You shall be entitled to receive reimbursement of all direct expenses reasonably incurred by you in connection with the performance of your duties under this Employment Agreement provided that written receipts are produced and approved in accordance with Apple’s policy as in effect from time to time.<br><br>'),


                $('<li/>').html('<strong><u>Duration and Termination</u></strong><br><br>'),
                    $('<ol class="Lower_Alpha"/>').append(

                      (['Standard', 'ASC Standard'].indexOf(employee.Israel_Contract_Type_Code) >= 0) && 
                        $('<li/>').html('Your employment is for an indefinite term unless either party gives the other party prior written notice of termination of one week during the first three months of employment and one month written notice thereafter.<br><br>'),

                      (employee.Israel_Contract_Type_Code == 'Student') && 
                        $('<li/>').html('Your employment is of a fixed term duration but may be terminated prior to the Termination Date by either party giving to the other party prior written notice for termination in accordance with the law. <br><br>'),


                        $('<li/>').html('In addition, Apple shall have the right to immediately terminate this Employment Agreement at any time by written notice in the event of Cause (as defined below). In such event, this Employment Agreement and the employment relationship shall be effectively terminated at the time of delivery of such notice.<br><br>The term “Cause” shall mean (a) any conviction for a criminal offence (other than an a road traffic offence for which a fine or non-custodial penalty is imposed); (b) a material breach of your fiduciary duties, including dishonesty, theft, embezzlement, or self-dealing; (c) engagement in competing activities, or a material breach of your confidentiality and non-disclosure obligations towards Apple or any Group Company; (d) a material breach of this Employment Agreement; or (e) any other circumstances under which prior notice may be denied from you upon termination of employment under the applicable Israeli law. <br><br>'),
                        $('<li/>').html('Notwithstanding Section 5(a) above, Apple may, in its sole discretion:<br><br>'),
                            $('<ul/>').append(
                                $('<li/>').html('Terminate your employment without prior notice in whole or in part, by giving you notice together with payment in lieu of all or part of the prior notice according to law. Your employment shall be deemed to have ceased on the date of the receipt of the notice from Apple; and/or<br><br>'),
                                $('<li/>').html('Instruct you not to attend work during the prior notice period or any part of it, to work from home; to carry out special projects outside the normal scope of your duties; not to contact clients, customers or suppliers. In such case, you will continue to receive your Salary and other benefits to which you are entitled under this Employment Agreement save for those benefits that are expressly provided to you in respect of the actual performance of your duties under this Employment Agreement.<br><br>')
                            ),
                        $('<li/>').html('In the event of the termination of this Employment Agreement, for whatever reason, you shall immediately return all Apple’s or any Group Company’s property, equipment, materials and documents and you shall cooperate with Apple and use your best efforts to assist with the integration into Apple’s organization of the person or persons who will assume your responsibilities.  Under no circumstances will you have a lien over any property provided by or belonging to Apple or Group Company.<br><br>')
                    ),   
                $('<li/>').html('<strong><u>Confidentiality; Non-Competition; Non-Solicitation; Proprietary Rights</u></strong><br><br>You hereby agree to sign and return and be bound by the Confidentiality and Intellectual Property Agreement provided to you with this Employment Agreement, which provisions will be deemed an integral part of this Employment Agreement and will survive, in accordance with their terms and termination of this Employment Agreement for any reason.<br><br>Furthermore, you will not, without prior written consent from Apple, within the Restricted Area (all terms as defined below):<br><br>'),        
                    $('<ul/>').append(
                        $('<li/>').html('for a period of ' + ((employee.Israel_Contract_Type_Code == 'Standard') ? '6' : '') + '' + ((['Student', 'ASC Standard'].indexOf(employee.Israel_Contract_Type_Code) >= 0) ? '3' : '') + ' months after the termination date of your employment (the "Termination Date") directly or indirectly encourage or try to encourage any Client (or any Prospective Client) with whom you had material dealings on behalf of Apple during the 12 months prior to your Termination Date, either not to give custom or to take custom away from Apple or any Group Company;<br><br>'),
                        $('<li/>').html('for a period of ' + ((employee.Israel_Contract_Type_Code == 'Standard') ? '6' : '') + '' + ((['Student', 'ASC Standard'].indexOf(employee.Israel_Contract_Type_Code) >= 0) ? '3' : '') + ' months after your Termination Date directly or indirectly solicit or try to solicit the custom of any Client (or any Prospective Client) with whom you had material dealings on behalf of Apple during the 12 months prior to your Termination Date, with a view to supplying that Client or Prospective Client with Restricted Products or Services;<br><br>'),
                        $('<li/>').html('for a period of ' + ((employee.Israel_Contract_Type_Code == 'Standard') ? '6' : '') + '' + ((['Student', 'ASC Standard'].indexOf(employee.Israel_Contract_Type_Code) >= 0) ? '3' : '') + ' months after your Termination Date directly or indirectly supply Restricted Products or Services to any Client or any Prospective Client with whom you had material dealings on behalf of Apple during the 12 months prior to your Termination Date;<br><br>'),
                        $('<li/>').html('for a period of ' + ((employee.Israel_Contract_Type_Code == 'Standard') ? '6' : '') + '' + ((['Student', 'ASC Standard'].indexOf(employee.Israel_Contract_Type_Code) >= 0) ? '3' : '') + ' months after your Termination Date directly or indirectly entice away or try to entice away from Apple or any Group Company any Key Person; or employ or enter into partnership or association with or retain the services of any Key Person or offer to do so;<br><br>'),
                        $('<li/>').html('for a period of ' + ((employee.Israel_Contract_Type_Code == 'Standard') ? '6' : '') + '' + ((['Student', 'ASC Standard'].indexOf(employee.Israel_Contract_Type_Code) >= 0) ? '3' : '') + ' months after your Termination Date directly or indirectly, in competition with Apple or any Group Company (i) be employed or engaged in, or (ii) perform services in respect of, or (iii) be otherwise concerned with the provision of, research into, development, manufacture, supply or marketing of any Restricted Products or Services.<br><br>')
                    ),
                    $('<p/>').html('For the purposes of this Employment Agreement, the following definitions shall apply:'),
                    $('<ul/>').append(
                        $('<li/>').html('“Client” means any person, firm, company or other organisation whatsoever to whom Apple or any Group Company has supplied goods or services.<br><br>'),
                        $('<li/>').html('“Prospective Client” means any person or body, which at any time during the period of 12 months immediately before your Termination Date had discussions with Apple or any Group Company or was involved in a pitch, tender, presentation, negotiation or was invited to enter into or participate in any discussion, pitch, tender, presentation or negotiation, with Apple or any Group Company, with a view to receiving products or services from Apple or any Group Company, in which you were materially involved, for which you had responsibilities or about which you obtained or otherwise received Confidential Information.<br><br>'),
                        $('<li/>').html('“Key Person” means any individual who on your Termination Date was engaged or employed as an employee, director or consultant by Apple or any Group Company as an engineer or in operations; with whom you worked to a material extent or for whom you had managerial responsibility at any time during that period, and <br><br>'),
                            $('<ol class="Lower_Alpha"/>').append(
                                $('<li/>').html('who had material contact with Clients or suppliers of Apple or any Group Company in performing your duties of employment or engagement; and/or<br><br>'),
                                $('<li/>').html('who was a member of the management team of Apple or any Group Company; and/or<br><br>'),
                                $('<li/>').html('who was a member of the same department or team as you of Apple or any Group Company.<br><br>')
                            ),
                        $('<li/>').html('“Restricted Area” means Israel, or any other country where, on the Termination Date, Apple and/or any Group Company provides, develops, sells, supplies, manufactures or researches its products or services or where Apple or any Group Company is intending within 3 months following the Termination Date to provide, develop, sell, manufacture or market its products or services.<br><br>'),
                        $('<li/>').html('“Restricted Products or Services” means any products or services which compete with or are of the same or similar kind as any products or services provided, researched, developed, manufactured, supplied or marketed by Apple or any Group Company in the ordinary course of their business during the period of 12 months immediately before the termination of your employment and in respect of which you were directly concerned, was materially involved or had responsibility during your employment by Apple or about which he obtained or otherwise received Confidential Information.<br><br>'),
                        $('<li/>').html('“Group Company" means any holding company or subsidiary of Apple from time to time and any subsidiary of any holding company of Apple (other than Apple) or affiliated corporation from time to time.<br><br>')
                    ),
                $('<p/>').html('You acknowledge that your employment compensation has been calculated to include special consideration for your commitments under this Section 7 as well as the Confidentiality and Assignment of All Rights of Invention Agreement and you will not be entitled to any further consideration for such commitments.'),    
                $('<li/>').html('<strong><u>Successors and Assigns</u></strong><br><br>'),
                    $('<ol class="Lower_Alpha"/>').append(
                        $('<li/>').html('This Employment Agreement shall be binding upon and for the benefit of Apple, its successors and assigns.<br><br>'),
                        $('<li/>').html('Neither this Employment Agreement nor any right or interest under it shall be assignable or transferable by you, your beneficiaries or legal representatives, except subject to applicable laws.<br><br>')
                    ),    
                $('<li/>').html('<strong><u>Notices</u></strong><br><br>For the purpose of this Employment Agreement, notices and all other communications provided for in the Employment Agreement shall be deemed to have been duly given when personally delivered or sent by registered mail, postage prepaid, addressed to the respective addresses given below or last given by each party to the other.  All notices and communications shall be deemed to have been received on the date of delivery, except that notice of change of address shall be effective only upon receipt.<br><br>The initial addresses of the parties for purposes of this Employment Agreement shall be as follows:<br><br>'),               
                $('<p class="padL10"/>').html('The Company:'),
                $('<p class="padL10"/>').html('Apple Israel Ltd, Private Company<br>No. 51-384451-4,<br>12 Maskit St.,<br>Herzliya, 4673312 '),
                $('<p class="padL10"/>').html('You:'),
                $('<p class="padL10"/>').html(employee.First_Name + ' ' + employee.Last_Name + '<br>' + employee.Address_1 + '<br>' + ((employee.Address_2 != '') ? employee.Address_2 + '<br>' : '') + ((employee.Address_3 != '') ? employee.Address_3 + '<br>' : '') +  ((employee.City != '') ? employee.City + ', ' : '') + ((employee.Postal_Code != '') ? employee.Postal_Code + '<br>' : '') + '<br><br>'),
                // $('<p class="padL10/>').html(employee.Address_1 + '<br>'),
                // $('<p class="padL10/>').html((employee.Address_2) ? employee.Address_2 + '<br>' : ''),
                // $('<p class="padL10/>').html((employee.Address_3) ? employee.Address_3 + '<br>' : ''),
                // $('<p class="padL10/>').html(employee.City + ' '),
                // $('<p class="padL10/>').html(employee.Postal_Code + '<br>'),
                // $('<p class=“padL10/>’).html(employee.Address_Country),
                $('<li/>').html('<strong><u>Miscellaneous</u></strong><br><br>Except as required by law, no provision of this Employment Agreement may be modified, waived or discharged unless such waiver, modification or discharge is agreed to in writing and signed by Apple. No agreement or representations, oral or otherwise, express or implied, with respect to the subject matter hereof have been made either party which are not expressly set forth in this Employment Agreement.<br><br>You will receive a pre-induction pack, which will include details of Apple’s policies and procedures that are relevant for you to read before your employment commences.<br><br>Apple expects that you familiarize yourself and comply with all its policies, procedures, and rules, including but not limited to: Business Conduct Policy, Confidentiality Agreement, Employee Use of Electronic Systems and Communications, Health and Safety Policy, Absence Policy, Security Policy, Holiday Policy and the Rules. You undertake that you will read them in your first 2 weeks with Apple and check policies on Apple’s People site on a regular basis throughout your employment at Apple. Should you have any queries or issues regarding your compliance with these policies, please do not hesitate to contact me. These and other Apple policies are non-contractual and may be amended or replaced from time to time, and new policies may be introduced. You will be notified of any substantial changes. We specifically draw your attention to the Business Conduct Policy and the Rules, which (along with other policies) sets out important standards of behavior, which are expected of you as an Apple employee.<br><br>'),
                $('<li/>').html('<strong><u>Governing Law; Jurisdiction</u></strong><br><br>This Employment Agreement shall be governed by and construed and enforced in accordance with the laws of the State of Israel. The competent courts and tribunals of Tel Aviv – Jaffa shall have exclusive jurisdiction in connect with dispute claim arising in connection with this Agreement.<br><br>'),
                $('<li/>').html('<strong><u>Severability</u></strong><br><br>In the event that any provision of this Employment Agreement is held invalid or unenforceable in any circumstances by a court of competent jurisdiction, the remainder of this Employment Agreement, and the application of such provision in any other circumstances, shall not be affected thereby, and the unenforceable provision enforced to the maximum extent permissible under law, or otherwise shall be replaced by an enforceable provision that most nearly approximates the intent of the unenforceable provision.<br><br>'),                
                $('<li/>').html('<strong><u>Entire Agreement</u></strong><br><br>The terms of this Employment Agreement supersede all previous agreements or representations, whether written or oral, made by Apple or on Apple’s behalf.<br><br>'),
                $('<li/>').html('<strong><u>Set off</u></strong><br><br>Unless prohibited by law, Apple shall be entitled to set-off any amount owed to Apple by you from any source whatsoever from any amount owed by Apple to you from any source whatsoever.<br><Br>'),
                $('<li/>').html('<strong><u>Personal Agreement</u></strong><br><br>This Employment Agreement is personal, and the terms and conditions of your employment shall be solely as set forth herein.  You shall not be entitled to any payment, right or benefit which is not expressly mentioned in this Employment Agreement, including, without limitation, any payments, rights or benefits of any current or future general or special collective labour agreements or arrangements or extension orders, (except for those which apply to all employees in Israel), any custom or practice, and/or any other agreements between the Company and its employees.<br><br>')
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('Please send one signed copy of the Employment Agreement, Exhibit A attached, Confidentiality and Assignment of All Rights of Invention Agreement and other employment forms back to Michal Peleg at Apple Israel Ltd, Private Company at the Apple address stated in clause 8 above.'),
            $('<p/>').html('We look forward to welcoming you to Apple in the near future.')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('Yours sincerely,')
        )
    ));
  $("#markup2").html("").append(
        $('<div class="offerClause2">').append(
            $('<p/>').html('Michal Peleg<br>IL HR Manager')
        ),
        $('<div class="offerClause2">').append(
            $('<p/>').html('')
        ),
        $('<div class="offerClause2">').append(
            $('<p/>').html('')
        ),
        $('<div class="offerClause2">').append(
            $('<p/>').html('<strong>Acceptance</strong>')
        ),
        $('<div class="offerClause2">').append(
            $('<p/>').html('I confirm my acceptance of the terms and conditions of employment outlined in the Employment Agreement above.')
        ),
        $('<div class="offerClause2">').append(
            $('<p/>').html('')
        ),
        $('<div class="offerClause2">').append(
            $('<p/>').html('Signed and Delivered as a Deed')
        )
    );
  $("#markup3").html("").append(
        $('<div class="offerClause3">').append(
            $('<p/>').html('')
        ),
        $('<div class="offerClause3">').append(
            $('<p/>').html('&nbsp;'),
            $('<p/>').html('&nbsp;')
        ),
        $('<div class="offerClause3">').append(
            $('<p/>').html('<strong>EXHIBIT A</strong><br><br>')
        ),
        $('<div class="offerClause3">').append(
            $('<p/>').html('<u>General Order and Confirmation Regarding Payments of Employers to Pension Funds and Insurance Funds instead of Severance Pay</u>'),
            $('<p/>').html('Pursuant to the power granted to me under section 14 of the Severance Pay Law 5723-1963 (“Law”) I hereby confirm that payments paid by an employer, commencing the date hereof, to an employee’s comprehensive pension fund into a provident fund which is not an insurance fund, as defined in the Income Tax Regulations (Registration and Management Rules of a Provident Fund) 5724-1964 (“Pension Fund”), or to a Manager’s Insurance Fund that includes the possibility of an allowance or a combination of payments to an Allowance Plan and to a plan which is not an Allowance Plan in an Insurance Fund (“Insurance Fund”), including payments which the employer paid by combination of payments to a Pension Fund and to an Insurance Fund whether there exists a possibility in the Insurance Fund to an allowance plan (“Employer Payments”), will replace the severance pay that you are entitled to for the salary and period of which the payments were paid (“Exempt Wages”) if the following conditions are satisfied:<br><br>'),
            $('<ol/>').append(
                $('<li/>').html('Employer Payments –<br><br>'),
                    $('<ol class="Upper_Alpha"/>').append(
                        $('<li/>').html('for Pension Funds that are not less than 14.33 % of the Exempt Wages or 12% of the Exempt Wages, if the employer pays for his employee an additional payment on behalf of the severance pay completion for a providence fund or Insurance Fund at the rate of 2.33% of the Exempt Wages. If an employer does not pay the additional 2.33% on top of the 12%, then the payment will constitute only 72% of the Severance Pay.<br><br>'),
                        $('<li/>').html('to the Insurance Fund are not less that one of the following:<br><br>'),
                            $('<ul/>').append(
                                $('<li/>').html('13.33% of the Exempt Wages if the employer pays you additional payments to insure his monthly income in case of work disability, in a plan approved by the Supervisor of the Capital Market, Insurance and Savings in the Finance Ministry, at the lower of, a rate required to insure 75% of the Exempt Wages or 2.5% of the Exempt Wages (“Disability Payment”).<br><br>'),
                                $('<li/>').html('11% of the Exempt Wages if the employer pays an additional Disability Payment and in this case the Employer Payments will constitute only 72% of your severance pay; if, in addition to the abovementioned sum, the employer pays 2.33% of the Exempt Wages for the purpose of Severance Pay completion to providence fund or Insurance Funds, the Employer Payments will constitute 100% of the severance pay.<br><br>')
                            )
                    ),
                $('<li/>').html('A written agreement must be made between the employer and employee no later than 3 months after the commencement of the Employer Payments that include –<br><br>'),
                    $('<ol class="Upper_Alpha"/>').append(
                        $('<li/>').html('your agreement to the arrangement pursuant to this confirmation which details the Employer Payments and the name of the Pension Fund or Insurance Fund; this agreement must include a copy of this confirmation;<br><br>'),
                        $('<li/>').html('an advanced waiver of the employer for any right that he could have to have his payments refunded unless your right to severance pay is denied by judgment according to sections 16 or 17 of the Law, and in case you withdrew monies from the Pension Fund or Insurance Fund not for an Entitling Event; for this matter, Entitling Event or purpose means death, disablement or retirement at the age of 60 or over.<br><br>')
                    ),
                $('<li/>').html('This confirmation does not derogate from your entitlement to severance pay according to the Law, Collective Agreement, Extension Order or personal employment agreement, for any salary above the Exempt Wages.')
            )
        )                                                                       
    );

}


function formatCurrency(total) {
    return parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
}

function fnFormatCurrency(total) {
    if (total) {
        total = (total.indexOf(',') != -1) ? total.split(',').join('') : total;
        return formatCurrency(total);
    } 
    else {
        return '0.00';
    }
}
function fnConvertDate(eventDate) {

    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    var year = d.getFullYear(),
        month = d.getMonth(),
        n_date = d.getDate(),
        day = d.getDay();

    return months[month] + ' ' + ordinal_suffix_of(parseInt(n_date)) + ', ' + year;

}

function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "<sup>st</sup>";
    }
    if (j == 2 && k != 12) {
        return i + "<sup>nd</sup>";
    }
    if (j == 3 && k != 13) {
        return i + "<sup>rd</sup>";
    }
    return i + "<sup>th</sup>";
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

function getCommencement_date(eventDate, addedDate) {
    var newdate = new Date(eventDate);
    newdate.setDate(newdate.getDate() + parseInt(addedDate));
    
    var dd = newdate.getDate();
    var mm = newdate.getMonth() + 1;
    var y = newdate.getFullYear();
    var someFormattedDate = mm + '/' + dd + '/' + y;
    return someFormattedDate;
}

function fnTime_And_Half(amount, rate) {
    amount = (amount.indexOf(',') != -1) ? amount.split(',').join('') : amount;
    var total = (parseFloat(amount) + parseFloat((parseFloat(amount) * rate)));
    return formatCurrency(total);
}

function fnFormatCurrencys(total) {
    
    
    if (total) {
        
        return formatCurrency(total);
    } else {
        return '0.00';
    }
}

function fnFormatCurrencyWithComputation(total) {
    
    

    var newValue  = total.replace(/\,/g, '');
    return newValue;

}

function fnCalculateSA1(SAAmount){
  var SA
  var SAA = SAAmount.replace(',','');
  if (SAA.length >= 1){
    SA = (SAA * 0.8).toFixed(2);
  }
  else{
    SA = 0;
  }

  return formatCurrency(SA);
}
function fnCalculateSA2(SAAmount){
    var SA
    var SAA = SAAmount.replace(',','');
    if (SAA.length >= 1){
        SA = (SAA * 0.2).toFixed(2);
    }
    else{
        SA = 0;
    }

    return formatCurrency(SA);
}
/*
function fnAssignee(){
     var number = $('.assignee').val();
     return number;
}
*/
function fnAssignee(){
     var n = $('.assignee').val();
     var n2 = "<$client.account.username_first> <$client.account.username>";
     var emp = employee.First_Name + " " + employee.Last_Name;
     if (n2 != emp){
            if (n2 != " Administrator"){
                    $('.assignee').val("<$client.account.username_first> <$client.account.username>");
                    n = "<$client.account.username_first> <$client.account.username>";
                    return n;
                    
                }
            else{
                return n;
                
            }   
     }
     else if (n2 == emp){
        return n;
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





    var name = fnGetName(employee.First_Name, employee.Middle_Name, employee.Last_Name);
    _fnAssignValue('PrintName', name);
    
    fnView();

      if ($("input.calendar_button").length) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

        var arrParts = [
            [1, 'hidden_pg']
        ];

        showCompletedOfferLetter('incomplete', 'complete', arrParts);
    }else{

        makeOfferLetter('hidden_pg','offerClause');
        makeOfferLetter('hidden_pg2','offerClause2');
        makeOfferLetter('hidden_pg3','offerClause3');
        makeOfferLetter('hidden_pg4','offerClause4');
        makeOfferLetter('hidden_pg5','offerClause5');
        makeOfferLetter('hidden_pg6','offerClause6');
       

    }

});
