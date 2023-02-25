//UK Employment Agreement

const sectionNumbers = {
    section: 0,
    subSection: 0,
}

const sectionNumbering = option => {
    'use strict'
    if (option.incrementSection) {
        sectionNumbers.section++
    }
    if (option.decrementSection) {
        sectionNumbers.section--
    }
    if (option.resetSection) {
        sectionNumbers.section = 0
    }
    if (option.incrementSubSection) {
        sectionNumbers.subSection++
    }
    if (option.decrementSubSection) {
        sectionNumbers.subSection--
    }
    if (option.resetSubSection) {
        sectionNumbers.subSection = 0
    }
    return sectionNumbers
}

function fnView() {
    const markupRoot = $("#markup").html("");
    markupRoot.append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p class="text-center margin-bottom"/>').html('<strong>UK Employment Agreement</strong>')
            ),
        $('<div class="offerClause"/>').append(
            $('<p class="margin-bottom-25"/>').html(employee.Current_Date)
            ),
        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<span class="zero-btm"/>').html('<strong>EMPLOYER: ' + 'PayPal PLC, UK Branch' + '</strong>' + '<br>'),
                $('<p class="margin-bottom-20"/>').append(
                    'The Company whose registered address is ',
                      $("#uk-entity option").eq(2).text(),
                       ', ',
                       $("#uk-entity option").eq(3).text(),
                       ', Dublin 15 (the "Company"); '),
                $('<p class="margin-bottom-20"/>').html(''),
                $('<p class="margin-bottom-20"/>').html('and')
                )
            ),
        $('<div class="offerClause">').append(
            $('<p class="margin-bottom"/>').append(
                $('<span class="zero-btm"/>').html('<strong>EMPLOYEE:</strong>' + '<br>'),
                $('<span class="zero-btm"/>').html(employee.Full_Legal_Name + ' (“you”)<br>'),
                $('<span class="zero-btm"/>').html(employee.Address_Line_1 ? employee.Address_Line_1 + '<br>' : ''),
                $('<span class="zero-btm"/>').html(employee.Address_Line_2 ? employee.Address_Line_2 + '<br>' : ''),
                $('<span class="zero-btm"/>').html((employee.City ? employee.City + ', ' : '') + (employee.State ? employee.State + ', ' : '') + employee.Postal_Code)
                ),
            $('<p class="margin-bottom-20"/>').html('')
            ),
        
  
        $('<div class="offerClause margin-bottom-25"/>').append(
            $('<p/>').append(
                $('<ol class="ol-bold"/>').append(
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>Commencement and Duration</u></strong></span>'),
                      $('<p/>').html(''), 
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">1.'+ sectionNumbering({incrementSubSection: true}).subSection +'</span> <span class="inl-block-2">This employment agreement (“Employment Agreement”) which is given in accordance with Section 1 of the Employment Rights Act 1996 (as amended from time to time) and the email offering the Employee employment dated  ' + employee.Start_Date + ' ("Offer Email") set out the terms and conditions of your employment with the Company.  </span>'), 
  
                      (employee.Employee_Group == 'R') && //FIXED TERM No (Employee Group == Regular)
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">1.'+ sectionNumbering({incrementSubSection: true}).subSection +'</span> <span class="inl-block-2">Your employment with the Company will begin on  ' + employee.Start_Date + ', and will continue indefinitely until terminated in accordance with paragraphs 12 and 13 below.</span>'),
                      (employee.Employee_Group == 'T') && //FIXED TERM Yes (Employee Group == Temporary) 
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">1.'+ sectionNumbering({incrementSubSection: true}).subSection +'</span> <span class="inl-block-2">Your employment with the Company is for a fixed term. It will begin on ' + employee.Start_Date + ' and will terminate on ' + employee.Fixed_Term_End_Date + ' or in accordance with paragraphs 12 and 13 below.</span>'), 
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">1.'+ sectionNumbering({incrementSubSection: true}).subSection +'</span> <span class="inl-block-2">No previous employment counts as part of your period of continuous employment with the Company. </span>'),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">1.'+ sectionNumbering({incrementSubSection: true}).subSection +'</span> <span class="inl-block-2">The first six (6) months of your employment will be a “probationary period”.  During this period, your performance will be reviewed.  The Company reserves the right to extend the probationary period by notifying you in writing before the expiry of the probationary period setting out the reasons for such an extension.  Should either party wish to terminate the contract during the probationary period either may do so by providing the other one week’s written notice. </span>'),
                      true && sectionNumbering({resetSubSection: true}),
  
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
  
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>Function and Scope of Duties</u></strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">2.1</span> <span class="inl-block-2">You shall be employed in the position of ' + employee.Job_Title + ' and you will report to ' + employee.Hiring_Manager_Title + '. The Company reserves the right to change the person to whom you report from time to time. During office hours you shall devote all your time, skill and attention to your job and act in the best interests of the Company and its Affiliates at all times. '),
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">2.2</span> <span class="inl-block-2">You will perform all acts, duties and obligations and comply with such orders as may be designated by the Company and which are reasonably consistent with your position.  The Company reserves the right to give further instructions as regards your tasks and duties with the Company. From time to time the Company may require you to undertake the duties of another position, either in addition to or instead of the above duties. Should you be required to perform such duties the Company will where necessary provide you with reasonable developmental support. The Company may require you (as part of your duties of employment) to perform duties or services not only for the Company but also for any of its Affiliates where such duties or services are of a similar status to or consistent with your position with the Company. The Company may at its sole discretion assign your employment to any Affiliate on the same terms and conditions set out, or referred to, in this Employment Agreement.</span>'), 
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">2.3</span> <span class="inl-block-2">You shall not have any authority to legally bind or commit the Company or any Affiliate.</span>'), // template
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),

                      (employee.Workplace_Model == 'In-Office') &&
                      $('<li class="margin-bottom-25"/>').append(
                        $('<span/>').html('<span><strong><u>Place of Work</u></strong></span>'),
                        $('<p/>').html(''),
                        
                        //$('<div class="marked" data-toggle="popover" data-placement="top" data-content="Remote = NO"/>').append(
                        $('<p/>').append(
                          'Your place of work is the Company’s premises currently located at ',
                          $('<span/>').append(employee.BuildingAddress),
                          '. However, you may be required to work at any other premises which the Company has or may later acquire in the United Kingdom whether on a temporary or permanent basis in line with the requirements of the Company.  You may also be required to travel within the UK and abroad for the performance of your duties. You shall not be required to reside anywhere outside of the UK for a total period of more than one month at any one time, other than by mutual consent.'
                        ),
                        $('<p/>').html(''),
                        $('<p class="zero-btm"/>').html('')
                      ),
                      //),    
                      (employee.Workplace_Model == 'Virtual Flex') &&
                      $('<li class="margin-bottom-25"/>').append(
                        $('<span/>').html('<span><strong><u>Place of Work</u></strong></span>'),
                        $('<p/>').html(''),
                        //$('<div class="marked" data-toggle="popover" data-placement="top" data-content="Remote = YES"/>').append(
                        $('<p/>').append(
                          'Your role may be performed outside of a PayPal office part of the time with the use of virtual working tools we provide. You must work virtually from a location near to the ',
                          $('<span/>').append(employee.LOCATION_DISPLAYNAME),
                          ' PayPal office, within the United Kingdom. The PayPal office are currently situated at ',
                          $('<span/>').append(employee.BuildingAddress),
                          '.In addition to any in-person working, you may also be required to attend a PayPal office for in-person collaboration.  We may amend or end the location of your role or remove the ability to work virtually at any time and will give you notice (but will not provide any compensation) if we do so.  You may find more details, including our expectations of you, within our Offsite Working Policy and associated policies.'
                        ),

                        $('<p/>').html(''),
                        $('<p class="zero-btm"/>').html('')
                      ),

                        (employee.Workplace_Model == 'Virtual') &&
                        $('<li class="margin-bottom-25"/>').append(
                          $('<span/>').html('<span><strong><u>Place of Work</u></strong></span>'),
                          $('<p/>').html(''),
                          //$('<div class="marked" data-toggle="popover" data-placement="top" data-content="Remote = YES"/>').append(
                          $('<p/>').append('Your role may be performed outside of a PayPal office, within the United Kingdom with the use of virtual working tools we provide. You may also be required to attend a PayPal office for in-person collaboration. You may find more details, including our expectations of you, within our Offsite Working Policy and associated policies.'),
                          $('<p/>').html(''),
                          $('<p class="zero-btm"/>').html('')
                        ),

                      //),
                      
  
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>Hours of Work</u></strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">4.1</span> <span class="inl-block-2">You are required to work 40 hours per week, normally to be worked between the hours of 8am and 6pm, Monday to Friday, with at least half an hour’s unpaid lunch break to be taken at a time to suit the Company’s business needs. From time to time and in order to meet business needs, you may also be required to work outside of these days in the performance of your role and/or to work such additional hours, in both cases without further compensation, as may be necessary to fulfil your duties.</span>'),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">4.2</span> <span class="inl-block-2">You agree to work hours which exceed the maximum average weekly working time limit of 48 hours imposed by the Working Time Regulations 1998.  You may withdraw your agreement at any time on giving the Company three months&apos; prior written notice.</span>'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
  
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>Base Salary, Expenses and Deductions</u><strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">5.1</span> <span class="inl-block-2">Your basic gross annual salary is ' + employee.Salary_Annual_Amount + ' ' + employee.Salary_Currency + ' paid monthly in arrears on or before the last working day of each month, less tax and NI contributions.  Your salary will be reviewed on an annual basis although the Company will be under no obligation to increase it in any year.</span>'),
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">5.2</span> <span class="inl-block-2">You will be paid or reimbursed for any reasonable expenses wholly, properly and necessarily incurred by you in accordance with the PayPal Corporate Expense Policy (the “Expense Policy”) as detailed on the Bridge. The Expenses Policy does not form part of your Employment Agreement and may be amended by the Company from time to time. </span>'),
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">5.3</span> <span class="inl-block-2">For the purposes of the Employment Rights Act 1996 or otherwise, you consent to the deduction of any sums due from you to the Company (including without limitation any overpayments, loans or advances made to you by the Company, any excess holiday taken by you and/or the cost of repairing any damage or loss to the Company’s property caused by you) at any time from your salary or any other payment due from the Company to you.  You also agree to make payment to the Company of any sums due from you to the Company upon demand by the Company at any time. </span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
  
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>Holidays</u></strong></span>'),
                      $('<p/>').html(''),
                      ((/^GBR-LO/.test(employee.Event_Location)) || (employee.BuildingAddress == '102 West Port, Edinburgh EH3 9DN')) &&
                      $('<p/>').append(
                        $('<span class="margin-right-15 margin-left-15 inl-block"/>').append('6.'+ sectionNumbering({incrementSubSection: true}).subSection),
                        $('<span class="inl-block-2"/>').append(
                          (/^GBR-LO/.test(employee.Event_Location)) &&
                          ' You shall be entitled to 25 working days’ holiday per complete calendar year in addition to the bank and public holidays normally applicable (eight in total). The Company\'s holiday year is from 1 January to 31 December.<br><br> ',
                          (/^GBR-LO/.test(employee.Event_Location) && employee.BuildingAddress == 'Whittaker House, Whittaker Avenue, Richmond Upon Thames, Surrey TW9 1EH') &&
                          'The Company customarily closes the UK office between Christmas and New Year and these days of closure are deducted from the 25 days entitlement, apart from Boxing Day (26 December), which is a public holiday.<br><br> ',
                          (employee.BuildingAddress == '102 West Port, Edinburgh EH3 9DN') &&
                          'You shall be entitled to 25 working days’ holiday per complete calendar year in addition to the bank and public holidays normally applicable (nine in total – three are fixed (25 and 26 December and 1 January) and five are taken flexibly, to be agreed with your manager). The Company\'s holiday year is from 1 January to 31 December.'
                        )
                      ),
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">6.'+ sectionNumbering({incrementSubSection: true}).subSection +'</span> <span class="inl-block-2">You may not take any holiday other than holiday which has accrued under the Working Time Regulations 1998 during the probationary period without the prior consent of your manager.  However, holiday will accrue during this period and you will be entitled to take such holiday once you have completed the probationary period. </span>'),
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">6.'+ sectionNumbering({incrementSubSection: true}).subSection +'</span> <span class="inl-block-2">Your holidays shall be taken in accordance with the relevant Leave Policy (as amended from time to time) which is available on the Human Resources Hub on the Bridge. This procedure is a statement of policy only and creates no contractual rights. </span>'),
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">6.'+ sectionNumbering({incrementSubSection: true}).subSection +'</span> <span class="inl-block-2">If you have holiday entitlement still owing at the end of your employment, the Company may, at its sole discretion, require you to take all or part of your outstanding holiday during your notice period or to pay you a sum in lieu of accrued holiday.  Repayment for each day of holiday is calculated as 1/260th of your gross salary. Holiday entitlement in excess of the statutory minimum shall not accrue during any period of garden leave arising on the Company exercising its rights under clause 13.4.</span>'),
                      true && sectionNumbering({resetSubSection: true}),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
  
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>Bonus and Other Incentives</u></strong></span>'),
                      $('<p/>').html(''),
                      
                      // (employee.AIP_Target_Pct > 0) &&
                      $('<p/>').append(
                            $('<p/>').append(
                              '<span class="margin-right-15 margin-left-15 inl-block">7.'+ sectionNumbering({incrementSubSection: true}).subSection +'</span>',
                              $('<span class="inl-block-2"/>').append(
                                'During your employment with the Company, you may be eligible to participate in',
                                (employee.AIP=='Yes') && ' an incentive compensation',
                                (employee.SIP=='Yes') && ' a sales incentive',
                                ' plan for a specified year, full details of which will be provided to you separately.'
                              )
                            ),
                            $('<p/>').append(
                              '<span class="margin-right-15 margin-left-15 inl-block">7.'+ sectionNumbering({incrementSubSection: true}).subSection +'</span>',
                              $('<span class="inl-block-2"/>').append(
                                'Any',
                                (employee.AIP=='Yes') && ' incentive compensation',
                                (employee.SIP=='Yes') && ' sales incentive',
                                ' plan is at the Company’s sole and absolute discretion and subject to the terms and conditions of the rules of the applicable plan. The Company reserves the right, in its sole discretion, to amend, change, substitute or cancel any such plan at any time.  '
                              )
                            )
                        ),
  
                      $('<p/>').append(
                            $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">7.'+ sectionNumbering({incrementSubSection: true}).subSection +'</span> <span class="inl-block-2">Any bonus or incentive payment or award shall be determined by the Company in its sole and absolute discretion, subject to the terms and conditions of the applicable plan, as may be amended from time to time, and will be of such amount, in such form, at such intervals and subject to such conditions as the Company may in its absolute discretion determine at any time and from time to time.</span>'),
  
                            $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">7.'+ sectionNumbering({incrementSubSection: true}).subSection +'</span> <span class="inl-block-2">There is no guarantee that any bonus or incentive payment or award will be made to or received by you. No bonus or incentive payment or award received by you will give you the right to receive any payment or award in any subsequent year, even if it is made repeatedly or regularly and whatever its amount. Further, the incentive compensation plan that you are eligible to participate in may change over time. </span>'),
  
                            $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">7.'+ sectionNumbering({incrementSubSection: true}).subSection +'</span> <span class="inl-block-2">If a bonus or incentive is awarded, it will be paid less any deductions required by law.</span>')
                        ),
                      true && sectionNumbering({resetSubSection: true}),
  
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>Illness</u></strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">8.1</span><span class="inl-block-2">If you are absent from work on account of sickness or injury, you must:</span>'), 
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">a)</span> <span class="inl-block-3">notify your manager or other designated person before 10:00 am on the first morning of absence giving the reason for the absence and inform him/her of your expected date of return; and</span>'),
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">b)</span> <span class="inl-block-3">complete and return to the Company a self-certification form in respect of the first seven days (including weekends) of any sickness; and</span>'), 
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">c)</span> <span class="inl-block-3">provide the Company with a fit note from your GP or other registered medical practitioner for periods of sickness of over seven working days.  Thereafter fit notes should be submitted regularly to cover the full absence.  On each occasion if a fit note expires and you do not anticipate you will be returning to work, you must notify the Company on the first morning following expiry of the medical certificate.</span>'), 
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">8.2</span> <span class="inl-block-2">The Company reserves the right to require you to:</span>'), 
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">a)</span> <span class="inl-block-3">undergo a medical examination (at the Company&apos;s expense) with a medical practitioner nominated by the Company; and/or</span>'), 
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">b)</span> <span class="inl-block-3">give written permission to the Company to have access to any medical or health report in its complete form on your physical or mental condition, prepared by the medical practitioner nominated by the Company.</span>'), 
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">8.3</span> <span class="inl-block-2">Provided that you have complied with the notification and certification procedures set out in paragraph 8.1 above, you will be paid Statutory Sick Pay (“SSP”), insofar as you qualify for it under the prevailing legislation.  The first three days of sickness absence are waiting days for which no SSP is payable.</span>'), 
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">8.4</span> <span class="inl-block-2">The Company may, at its absolute discretion, pay Company Sick Pay in the event of your absence due to sickness or injury. Company Sick Pay, where payable, is inclusive of any SSP to which you may be entitled and will be based on your normal salary less any state benefits claimable by you on account of your sickness or injury, less normal deductions for tax and NI contributions etc. Please see the relevant information available on the Human Resources Hub on the Bridge.</span>'),
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">8.5</span> <span class="inl-block-2">Your entitlement to SSP and Company Sick Pay, where payable, are subject to the Company’s right to terminate your employment in accordance with paragraph 13 below and the Company shall not be liable to provide or compensate for the loss of such benefits.</span>'),
  
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
  
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>Health Care Insurance and other Employee Benefits</u></strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">9.1</span> <span class="inl-block-2">Details of the Health Care Insurance and all other employee benefits are detailed on the Bridge.  This procedure is a statement of policy only and creates no contractual rights.</span>'),
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">9.2</span> <span class="inl-block-2">Details of other paid leave provided by the Company, including but not limited to maternity, paternity and bonding leave, and the terms under which this leave is offered are detailed on the Bridge. These procedures are statements of policy only and create no contractual rights. </span>'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
  
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>Training Entitlement</u></strong></span>'),
                      $('<p/>').html('You will be required to undertake certain compulsory training at the Company’s expense in respect of your role from time to time. This will usually be carried out during normal working hours. Details of this and any additional non-compulsory training to which you may have access subject to Company approval are available on the Bridge.  '),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
  
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>Other activities</u></strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('You must not in any way directly or indirectly (i) be engaged or employed in, or (ii) concerned with (in any capacity whatsoever); or (iii) provide services to, any other business or organisation where this is or is likely to be in conflict with the interests of the Company or its Affiliates, or where this may adversely affect the efficient discharge of your duties during the term of the Employment Agreement, except with the prior written consent of the Company, irrespective of whether or not you receive financial compensation for these activities.'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
  
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>Confidentiality/Proprietary information, Business Ethics and Insider Trading</u><strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">12.1</span> <span class="inl-block-2">Your confidentiality obligations to the Company are as set out in the Employee Proprietary Information and Inventions Agreement which is incorporated into this Employment Agreement.  </span>'), 
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">12.2</span> <span class="inl-block-2">Your obligations in relation to Business Ethics are set out in the Company Code of Business Conduct which is incorporated into this Employment Agreement and is detailed on the Bridge. The Company Code of Business Conduct may be amended by the Company from time to time at its discretion.  </span>'),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">12.3</span> <span class="inl-block-2">Your obligations in relation to Insider Trading are as set out in the Insider Trading Policy which is incorporated into this Employment Agreement and is detailed on the Bridge.  You are required to review this policy and sign an acknowledgement indicating that you have read and understood your obligations as set out in this policy. The Insider Trading Policy may be amended by the Company from time to time at its discretion.  </span>'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
  
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>Termination Provisions </u><strong></span>'),
                      $('<p/>').html(''),
                      (employee.Employee_Group == 'R') &&
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">13.'+ sectionNumbering({incrementSubSection: true}).subSection +'</span> <span class="inl-block-2">Subject to paragraphs 13.2 and 13.3 below the period of notice required to terminate your employment is as follows, your contract of employment may be terminated by either party on giving the other ' + (employee.Salary_Grade <= 24 ? 'one month’s written notice of termination or the statutory minimum notice period whichever is the greater. ' : employee.Salary_Grade >= 25 ? 'three months’ written notice of termination.' : '') + (employee.Employee_Group == 'T' ? ' Subject to paragraphs 13.2 and 13.3 below the period of notice required to terminate your employment is as follows, your contract of employment may be terminated early by either party on giving the other 1 month’s written notice of termination or the statutory minimum notice period whichever is the greater. ' : '') + '</span>'), 
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">13.'+ sectionNumbering({incrementSubSection: true}).subSection +'</span> <span class="inl-block-2">The Company reserves the right to terminate your contract without notice or pay in lieu of notice if it has reasonable grounds to believe you have:</span>'), 
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">a)</span> <span class="inl-block-3">committed any serious breach or repeated or continued (after warning) material breach of one of the terms of your employment;</span>'),
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">b)</span> <span class="inl-block-3">been guilty of conduct tending to bring you or the Company into disrepute;</span>'),
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">c)</span> <span class="inl-block-3">been guilty of gross misconduct or serious or gross incompetence or negligence or seriously or persistently been in breach of the Company’s policies and procedures.</span>'),
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block"></span> <span class="inl-block-2">Examples of gross misconduct are detailed in the Company’s Code of Business Conduct and Ethics, the terms of which do not form part of the terms of your employment.</span>'),
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">13.'+ sectionNumbering({incrementSubSection: true}).subSection +'</span> <span class="inl-block-2">You agree that the Company may at its absolute discretion make a payment or payments (which may, at the Company’s absolute discretion, be paid in equal monthly instalments [and which may be reduced by any amounts you earn in that month from alternative employment or self-employment]) representing basic salary in lieu of any notice of termination of employment which you or the Company is required to give.  For the avoidance of doubt, such payment or payments shall be subject to deductions for tax and NI contributions and shall not include the value of any benefits, bonus/incentive or holiday entitlement which would have accrued to you had you been employed until the expiry of your notice entitlement under paragraph 13.1 above. Further, you shall have no entitlement to such payment or payments unless and until the Company notifies you in writing of its decision to make such payment(s) to you.</span>'),
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">13.'+ sectionNumbering({incrementSubSection: true}).subSection +'</span> <span class="inl-block-2">The Company reserves the right to require you not to attend any premises of the Company and/or to carry out specified duties for the Company and/or not to undertake all or any of your duties of employment and/or not to communicate with suppliers, customers, distributors, officers, employees or representatives of the Company and/or not to access its computer systems during any period of notice (whether given by you or the Company), provided always that the Company shall continue to pay your salary and provide your contractual benefits in accordance with the terms of this Employment Agreement whilst you remain employed by the Company.</span>'),
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">13.'+ sectionNumbering({incrementSubSection: true}).subSection +'</span> <span class="inl-block-2">All documents, manuals, hardware and software provided for your use by the Company and any data or documents produced, maintained or stored on the Company’s computer systems or other electronic equipment remain the property of the Company and on termination of your employment or on the commencement of any period of exclusion pursuant to paragraph 13.4 or at any time at the Company’s request you must immediately return to the Company all equipment, correspondence, records, specifications, software, disks, models, notes, reports and other documents and any copies thereof and any other property belonging to the Company or its Affiliates (including but not limited to keys, credit cards, laptops, mobile phone, equipment and passes) which are in your possession or under your control.  You must, if required to do so by the Company, confirm in writing that you have complied with your obligations under this paragraph 13.5.</span>'),
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">13.'+ sectionNumbering({incrementSubSection: true}).subSection +'</span> <span class="inl-block-2">The Company shall have the right to suspend you on basic salary and benefits pending any investigation into potential dishonesty, gross misconduct or other circumstances which may entitle the Company to dismiss you summarily and pending the outcome of any related disciplinary proceedings.</span>'),
                      true && sectionNumbering({resetSubSection: true},
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      )
                    ),
  /*STOPPED AT 13*/
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>Restrictions on Termination of Employment</u></strong></span>'),
                      $('<p/>').html(''),
                      (employee.Salary_Grade >= 27) && //IF SALARY GRADE 27 AND ABOVE
                        $('<p/>').append(
                            $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">14.1</span> <span class="inl-block-2">You hereby agree and undertake with the Company for itself and as trustee for its Affiliates that you shall not without the prior written consent of the Company:</span>'),
  
                            $('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">a)</span> <span class="inl-block-3">for a period of six months after the termination of your employment be engaged or interested (whether as a director, shareholder, principal, consultant, agent, partner or employee) in any business concern (of whatever kind) which shall be in competition with the Business in the Restricted Territory provided always that nothing in this clause 14.1‎(a) shall restrain you from engaging or being interested in any such business concern insofar as your duties or work relate principally to services or goods of a kind with which you were not concerned during the period of one year prior to the termination of your employment;</span>'),
  
                            $('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">b)</span> <span class="inl-block-3">for a period of 12 months after the termination of your employment either on your own behalf or on behalf of any other person, firm or company in respect of any business concern which is in competition with the Business:</span>'),
  
                            $('<p/>').html('<span class="margin-right-15 margin-left-35 inl-block-inn-2">(i.)</span> <span class="inl-block-4">canvass, solicit or approach or cause to be canvassed, solicited or approached for orders; or</span>'),
  
                            $('<p/>').html('<span class="margin-right-15 margin-left-35 inl-block-inn-2">(ii.)</span> <span class="inl-block-4">directly or indirectly deal with;<br><br> any person, firm or company who at the date of the termination of this Agreement or within one year prior to such date is or was a client or customer or prospective customer of the Company or any Affiliate or was in the habit of dealing under contract with the Company or any Affiliate and with whom or which you had contact during the said period other than in a non-material way; and</span>'),
  
                            $('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">c)</span> <span class="inl-block-3">for a period of 12 months after the termination of your employment either on your own behalf or on behalf of any other person, firm or company:</span>'),
  
                            $('<p/>').html('<span class="margin-right-15 margin-left-35 inl-block-inn-2">(i.)</span> <span class="inl-block-4">directly or indirectly solicit or entice or endeavour to solicit or entice away from the Company or from any Affiliate any employee of executive or managerial status engaged in its or their business and with whom you had dealings at any time during the last year of your employment other than in a non-material way; or</span>'), 
  
                            $('<p/>').html('<span class="margin-right-15 margin-left-35 inl-block-inn-2">(ii.)</span> <span class="inl-block-4">interfere or seek to interfere with the continuance of supplies to the Company and/or any Affiliate (or the terms relating to such supplies) from any suppliers who have been supplying goods, materials or services to the Company and/or any Affiliate at any time during the last year of your employment and with which you had dealings other than in a non-material way in that period.</span>'), 
  
                            $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">14.2</span> <span class="inl-block-2">None of the restrictions set out in clause 14.1 shall apply to prevent you from being interested, for investment purposes only, in any business, whether as a member, debenture holder or beneficial owner of any stocks, shares or debentures listed or dealt in a Recognised Investment Exchange and which do not represent more than 4% of the total share or loan capital from time to time in issue in such company. </span>'),
  
                            $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">14.3</span> <span class="inl-block-2">Whilst each of the restrictions in clauses 14.1‎(a), ‎(b) and ‎(c) are considered by the parties to be reasonable in all the circumstances as at the date of this agreement it is agreed and declared that if any one or more of such restrictions shall be judged to be void as going beyond what is reasonable in all the circumstances for the protection of the interests of the Company and/or any Affiliate but would be valid if words were deleted the said restrictions shall be deemed to apply with such modifications as may be necessary to make them valid and effective and any such modification shall not affect the validity of any other restriction contained herein.</span>'),
  
                            $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">14.4</span> <span class="inl-block-2">The duration of the restrictions in clause 14.1‎(a), ‎(b) and ‎(c) shall be reduced by any period for which you are required to cease carrying out your duties under clause 13.4.</span>'),
  
                            $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block"></span> <span class="inl-block-2">"Business" means the business or businesses of the Company or any Affiliate in or with which you have been involved or concerned at any time during the period of 12 months prior to the termination of your employment including the development or provision of any services (including but not limited to technical and product support, or consultancy or customer services) including, but not limited to, the provision of:</span>'),
  
                            $('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">a)</span> <span class="inl-block-3">an online marketplace which allows buyers and sellers to trade with each other through a variety of price formats; and/or</span>'),
  
                            $('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">b)</span> <span class="inl-block-3">an online payment system or virtual payment system; and/or</span>'),
  
                            $('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">c)</span> <span class="inl-block-3">online search engine; and/or</span>'),
  
                            $('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">d)</span> <span class="inl-block-3">online price comparison services.</span>'),
                            $('<p/>').append(
                              '“Recognised Investment Exchange” has the meaning given to it in section 285 of the Financial Services and Markets Act 2000.'
                            ),
                            $('<p/>').append(
                              '“Restricted Territory” means the UK and any other jurisdiction with which you were materially involved or concerned in the course of your duties for the Company or any Affiliate in the 12 months prior to the termination of your employment.'
                            )
                          ),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),

                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>No Misrepresentation</u></strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('You shall at all times during and after your employment accurately represent your position, title, role description and duties, including in any dealings with PayPal customers and suppliers and in your resume, social media profiles and pages (including without limitation any LinkedIn or Facebook profile), website, email signature and business card.'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                    ),

                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>Grievance</u></strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('Details of the grievance procedure are detailed on the Human Resources Hub on the Bridge.  This procedure is a statement of policy only and creates no contractual rights.'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>Disciplinary Procedure</u></strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('Details of the disciplinary procedure are detailed on the Human Resources Hub on the Bridge.  This procedure is a statement of policy only and creates no contractual rights.'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>Collective Agreements</u></strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('There are no collective agreements applicable to your employment.'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),

                     $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>Data Protection and Privacy</u></strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('The Company respects the privacy of all employees and will comply with all applicable laws regarding processing of  personal information. All such personal  information is processed in accordance with the PayPal Employee Privacy Statement, a copy of which has been given  to the Employee in connection with this Agreement. The Employee acknowledges that he/she has reviewed and understands the Employee Privacy Statement.'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),

                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>Changes to Terms and Conditions of Employment</u></strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('The Company reserves the right at its discretion to make reasonable changes to any of your terms and conditions of employment.  You will be notified in writing of any change as soon as possible and in any event within one month of the change whenever possible.'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>Definitions</u></strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">20.1</span> <span class="inl-block-2">“Affiliate” means any firm, company, corporation or other organisation:-</span>'),
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">a)</span> <span class="inl-block-3">which is directly or indirectly controlled by the Company; or</span>'),
                      $('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">b)</span> <span class="inl-block-3">which is directly or indirectly controls the Company; or</span>'),
                      $('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">c)</span> <span class="inl-block-3">which is directly or indirectly controlled by a third party which also directly or indirectly controls the Company; or</span>'),
                      $('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">d)</span> <span class="inl-block-3">of which the Company or any other Affiliate owns or has a beneficial interest in 20% or more of the issued share capital or 20% or more of its capital assets; or</span>'),
                      $('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">e)</span> <span class="inl-block-3">which is the successor in title or assign of the firms, companies, corporations or other organisations referred to above.</span>'),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block"> </span><span class="inl-block-2">In this definition “control” shall have the meaning set out in s.1124 Corporation Tax Act 2010 (as amended). </span>'), 
                      /*
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">20.2</span> <span class="inl-block-2">“Confidential Information” means any and all confidential and/or proprietary knowledge, data or information and all trade secrets of the Company or any Affiliate including without limitation, information related to the Company or an Affiliate&apos;s business or its actual or demonstrably anticipated research or development. By way of illustration but not limitation, "Confidential Information" includes (a) Inventions; (b) information regarding products, plans for research and development, marketing, selling, market research and analysis, business, business plans, strategies, technology, technical plans, financial information, budgets, unpublished financial statements, contracts, licenses, legal work product or privileged communications, prices, costs, suppliers, developers, distributors, vendors, users, and customers; (c) data and all information derived from data such as user information and information about consumer habits; (d) all business practices and plans developed from such data or information; (e) information regarding the skills, responsibilities and compensation of Company employees, contractors and other service providers; and (f) the existence and content of any business, technical, strategic and/or financial discussions, negotiations, or agreements between the Company or any Affiliate and any other party. Confidential Information does not include information that is already in the public domain (other than through breach of this Agreement or other misconduct).</span>'),
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">20.3</span> <span class="inl-block-2">“Control” shall have the meaning set out in s.1124 Corporation Tax Act 2010 (as amended).</span>'),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">20.4</span> <span class="inl-block-2">“Intellectual Property Rights” means all intellectual property rights in any part of the world including patents, rights to inventions, registered and unregistered trade marks, rights in get-up, rights in domain names, registered designs, unregistered rights in designs, copyrights (including rights in software) and neighbouring rights, database rights, rights in know-how and, in each case, rights of a similar or corresponding character and all applications and rights to apply for the protection of such rights.</span>'),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">20.5</span> <span class="inl-block-2">“Invention” means any invention (whether or not patentable) or work of authorship, including without limitation any and all ideas, concepts, information, improvements, discoveries, developments, designs, formulae, materials, processes, procedures, techniques (including manufacturing processes, procedures, and techniques), mask works, know-how, artwork, data, programs, prototypes, pseudo-code, software, source and object codes, and any other works of authorship or other copyrightable or patentable works.</span>'),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">20.6</span> <span class="inl-block-2">“Work Results” means all Inventions and all other works or materials in whatever form devised, prepared, developed, created or made by you (whether alone or with others and whether or not patentable or capable of registration and whether or not recorded in any medium) during the term of this Employment Agreement either in the course of your  employment under this Employment Agreement or outside the course of your employment if such matters relate to the business of the Company or any Affiliate or to projects carried out by you on behalf of the Company.</span>'),
                      */
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                      $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong><u>General</u></strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">21.1</span> <span class="inl-block-2">This Employment Agreement cancels and is in substitution for all previous letters of engagement, agreements and arrangements, whether oral or in writing relating to the subject matter hereof between you and the Company with the exception of the Offer Letter and the Employee Proprietary Information and Inventions Agreement (if received).</span>'), 
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">21.2</span> <span class="inl-block-2">Any amendments or additions to the Employment Agreement shall be in writing.</span>'), 
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">21.3</span> <span class="inl-block-2">The provisions and sub-provisions of this Employment Agreement are severable and if any provision or sub-provision or identifiable part thereof of this Employment Agreement is held to be invalid or unenforceable by any Court of competent jurisdiction then such invalidity or unenforceability will not affect the validity or unenforceability of the remaining provisions or sub-provisions or identifiable parts thereof. </span>'), 
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">21.4</span> <span class="inl-block-2">This Employment Agreement is governed by and will be interpreted in accordance with the law of England and Wales. The parties agree that the English courts have exclusive jurisdiction in the event that any dispute may arise out of or in connection with this Employment Agreement.</span>'), 
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">21.5</span> <span class="inl-block-2">Any delay by the Company in exercising any of its rights under this Employment Agreement will not constitute a waiver of such rights. </span>'), 
  
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">21.6</span> <span class="inl-block-2">Paragraph headings are inserted for convenience only and will not affect the construction of this Employment Agreement.</span>'), 
  
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      )
  
                    )
                )
            ),
  
  //$('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">2.2</span> <span class="inl-block-2"></span>'), 
  //$('<p/>').html('<span class="margin-right-15 margin-left-25 inl-block-inn">a)</span> <span class="inl-block-3"></span>'),
  //$('<p/>').html('<span class="margin-right-15 margin-left-35 inl-block-inn-2">a)</span> <span class="inl-block-4"></span>'), 
  $('<div class="offerClause margin-bottom-25"/>').append(
            $('<p/>').html('<br>'),
  
            $('<p/>').html('Please will you sign both copies of this Employment Agreement and return one copy to the Company.'),
  
            $('<p/>').html('<br>'),
  
            $('<p/>').html('Yours sincerely,'),
  
            $('<p/>').html('For and on behalf of PayPal PLC, UK Branch <br><span class="signDisplay2"></span>Company Signatory acting under power of attorney'),
           
            $('<p/>').html('<br><br>'),
            
            $('<p/>').html('I confirm that I have read, understand and accept the Terms and Conditions of my Employment as set out or referred to above.')
            )
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
            $('<span class="sidebar"/>').html(
                '<strong>Registered Address:</strong><br style="display: none!important">'
                ),
            /*
            (employee.EntityName == "PayPal SE") &&
            $('<span class="sidebar"/>').html(
                'PayPal SE<br>Ballycoolin Business Park<br>Ballycoolin Road<br>Blanchardstown, Dublin 15<br>Ireland'
                ),
            (employee.EntityName != "PayPal SE") &&
            $('<span class="sidebar"/>').html(
                'PayPal SE<br>Ballycoolin Business Park<br>Ballycoolin <br>Blanchardstown, Dublin 15<br>Ireland'
                )
                */
                $('<span class="sidebar"/>').html(
                $("#uk-entity option").eq(0).text() + '<br>' + $("#uk-entity option").eq(1).text() + '<br>' + $("#uk-entity option").eq(2).text() + '<br>' + $("#uk-entity option").eq(3).text() + '<br>' + $("#uk-entity option").eq(4).text() + '<br>' + $("#uk-entity option").eq(5).text() + '<br>' + $("#uk-entity option").eq(6).text()
                )
            )
        // end append
        );
  
  $("#markup5").html("").append(
        // OfferClause 5
        /*
        $('<div class="offerClause5">').append(
            $('<p class="footer-content"/>').html((employee.EntityName == 'PayPal SE' ? 'Registered in Ireland with company number 646492<br>Registered office: Ballycoolin Business Park, Ballycoolin Road, Blanchardstown, Dublin 15<br>Directors: Cameron McLean, Tom Brown' : 'Registered in England and Wales No. 5468033.'))
            )   
            */
            $('<div class="offerClause5">').append(
            $('<p/>').html(''),
            /*
            $('<small class="footer-content"/>').html(
              'Registered Office: Ballycoolin Business Park, Ballycoolin Road, Blanchardstown,<br>Dublin 15. D15 VNC4.<br>Societas Europaea Registered in Ireland No. 646492<br>Directors: Mr Tim Minall (UK), Mr Sean Byrne (IRL), Mrs Daniela Matiz (LU)'
              )
              */
              //$('<small class="footer-content"/>').html(
              $('<span class="fb-size8"/>').append(
                $("#uk-entity option").eq(0).text(),
                 'PayPal PLC, UK Branch<br>',
                 'Registered Office: Ballycoolin Business Park, Ballycoolin Road, Blanchardstown,<br>',
                 'Dublin 15, D15 VNC4,<br>',
                'Registered in Ireland No. 646492'
              )
            )   
        
        // end append
        );
    
  $.each(markupRoot.find('[data-toggle="popover"]'), function(k,v) {
    let id = makeid();
    $('<div/>').prop('id', id).insertBefore($(v).data('container', '#' + id));
  });
  }
  
const makeid = function() {
    "use strict";
    const CHAR_LENGTH = 16;
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( var i = 0; i < CHAR_LENGTH; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
  
  
  
  $(function() {
    // render template
    fnView();
  
    // completed letter
    if (!$("input.calendar_button").length) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");
  
        var arrParts = [
        [1, 'hidden_pg']
        ];
        var arrParts2 = [
        [1, 'hidden_pg5']
        ];
        var arrParts3 = [
        [1, 'hidden_pg4']
        ];
  
        showCompletedOfferLetter('incomplete', 'complete', arrParts);
        showCompletedOfferLetter('incomplete2', 'complete2', arrParts2);
        showCompletedOfferLetter('incomplete3', 'complete3', arrParts3);
    }

$('mark').each(function(x){  
    if($('mark').eq(x).html().length <= 0){  
      $('mark').eq(x).html('<span>&nbsp;</span>');  
  }  
}); 
  });
