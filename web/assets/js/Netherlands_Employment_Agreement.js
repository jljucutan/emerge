//Netherlands Employment Agreement
//PayPal PLC, Sucursal en España
//PayPal Spain, S.L.U.
const fnView = function() {
    const markupRoot = $("#markup").html("");
    markupRoot.append(
        $('<div class="offerClause">').append(
            $('<p class="margin-bottom text-right"/>').append(
                $('<span/>').html('Amsterdam, <mark>' + employee.Current_Date + '</mark><br>')
                )
            ),

        $('<div class="offerClause">').append(
            $('<p class="margin-bottom text-center"/>').append(
                $('<span/>').html('<strong><u>EMPLOYMENT AGREEMENT FOR INDEFINITE PERIOD OF TIME</u></strong>')
                )
            ),

        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<span/>').html('<strong>THE UNDERSIGNED:</strong>')
                ),
            $('<ol/>').append(
                $('<li style="margin-bottom:0px!important;"/>').append(
                    '<strong>PayPal PLC, Netherlands Branch, </strong>a public limited company formed under the laws of Ireland with its registered office at Ballycoolin Business Park, Ballycoolin Road, Blanchardstown, Dublin 15, D15 VNC4 and company number 646492, and in this matter duly represented by <mark>' + $('#printed-signatory-name').val() + '</mark>, hereinafter to be referred to as the ‘Employer’ or the ‘Company’ <br><br><p class="hide">&nbsp;</p>and<p class="hide">&nbsp;</p><br><br>'
                    ),
                $('<li/>').append(
                    '<mark>' + employee.Full_Legal_Name + '</mark>, residing at <mark>' + employee.Address_Line_1 + '</mark>' + ((employee.Address_Line_2.length > 0)? ' <mark>' + employee.Address_Line_2 + '</mark>' : '') + ' <mark>' + employee.City + '</mark>, <mark>' + employee.Postal_Code + '</mark> hereinafter to be referred to as the ‘Employee’;'
                    )
                ),
            $('<p/>').append(
                $('<span/>').html('Hereinafter jointly also to be referred to as the ‘Parties’ and severally as the ‘Party’,')
                )
            ),

        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<span/>').html('<strong>WHEREAS:</strong>')
                ),
            $('<p/>').append(
                $('<span/>').html('The Employer wishes to employ the Employee and the Employee has agreed to accept the employment subject to the terms and conditions as set forth in this employment agreement (‘Employment Agreement’);')
                )
            ),

        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<span/>').html('<strong><u>Article 1. Commencement, Term, Termination and Trial Period</u></strong>')
                ),
            $('<ol/>').append(
                $('<li/>').append(
                    '<span>The Employment Agreement will commence on <mark>' + employee.Event_Start_Date + '</mark> and is entered into for an indefinite period of time. The employment may be terminated by either Party as per the last day of a calendar month and with due observance of the statutory notice period. Notice may be given only in writing.</span>',
                        $('<p/>').html(''),
                    (employee.Continuous_Service == "Yes") &&
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Continuous Service Date"/>').prop('id', makeid()).append(
                            'Your period of continuous employment for statutory purposes began on <mark>' + employee.Continuous_Service_Date + '</mark>. '
                        )
                    ),
                $('<p/>').html(''),
                (employee.ProbationPeriodRequired == "YES") &&
                $('<li/>').append(
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Probation Period Required"/>').prop('id', makeid()).append(
                        $('<span/>').append(
                            'The first two months will serve as a trial period, during which either Party may terminate the Employment Agreement with immediate effect, by notifying the other Party in writing.'
                            ),
                        $('<p/>').html('')
                        )
                    ),
                $('<li/>').append(
                    $('<span/>').html('The Employer is legally not allowed to employ the Employee when the Employee does not have the necessary documents (among which includes a residence permit and/or a work permit). The obtaining and maintaining of a residence and/or a work permit and/or other necessary documentation prior to <mark>' + employee.Event_Start_Date + '</mark> will serve as an explicit condition precedent to this Employment Agreement. This Employment Agreement will end by operation of law ("van rechtswege") if and on the moment that any of the following conditions arise: (a) the work permit and/or residence permit and/or other documentation necessary for the Employee to be validly employed by the Employer has/have not been obtained prior to <mark>' + employee.Event_Start_Date + '</mark>, (b) the work permit and/or residence permit and/or other necessary documentation for the Employee to be validly employed by the Employer has/have been granted but is/are revoked by the authorities or (c) the work permit and/or residence permit and/or other necessary documentation for the Employee to be validly employed by the Employer expire(s). The termination by operation of law will only take place insofar as the occurrence of the condition (a), (b) to (c) was not within the power of the Employer.')
                    )
                )
            ),

        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<span/>').html('<strong><u>Article 2. Position</u></strong>')
                ),
            $('<ol/>').append(
                $('<li/>').append(
                    'The Employee will hold the position of <mark>' + employee.Business_Title + '</mark> for the Employer and will report to the <mark>' + employee.MngrBsnssTitle + '</mark> of PayPal PLC. The Company may require the Employee to undertake duties of another position and/or perform duties for any of the Company’s affiliated companies, it being understood that such duties will be commensurate with the Employee’s status and capabilities.'
                    ),
                $('<p/>').html(''),
                $('<li/>').append(
                    'The Employee undertakes to devote all his working hours, his capacities and his expertise to the Company, and to faithfully carry out his tasks and duties in accordance with applicable law and the instructions given to him by the Company.  '
                    ),
                $('<p/>').html(''),
                $('<li/>').append(
                    'The Employee covenants that, at the Employer\'s request, he will at all times be willing to perform work for a company affiliated with the Employer.'
                    )
                )
            ),

        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<span/>').html('<strong><u>Article 3. Salary</u></strong>')
                ),
            $('<ol/>').append(
                $('<li/>').append(
                    'The Employee will receive a gross annual salary of <mark>' + employee.Salary_Amount + '</mark>€ (<mark>' + employee.SalaryWords + '</mark> Euros) gross (inclusive of the 8% holiday allowance) (‘Annual Base Salary’) on the basis of a 40 hour working week and paid monthly in arrears. '
                    ),
                $('<p/>').html(''),
                (employee.AIP == "Yes") &&
                $('<li/>').append(
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="AIP Eligible"/>').prop('id', makeid()).append(
                        $('<span/>').append(
                            'The Employee will participate in a Company-wide Bonus Plan (‘Bonus Plan’) with a target payout of <mark>' + employee.AIP_Target_Pct + '</mark>% of the Annual Base Salary if the Employee achieves his yearly objectives and the Company meets its yearly financial targets.',
                            $('<p/>').html(''),
                            'Any bonus or payment or award under the Bonus Plan shall be determined by the Company in its sole and absolute discretion, subject to the terms and conditions of the Bonus Plan and of such amount, in such form, at such intervals and subject to such conditions as the Company may in its absolute discretion determine from time to time.',
                            $('<p/>').html(''),
                            'The Company reserves the right, in its sole discretion, to amend, change, withdraw or cancel the Bonus Plan at any time. Further, the Bonus Plan that the Employee is eligible to participate in may change over time. The Employee acknowledges and agrees that the Company may substitute or cancel the Bonus Plan or any offer documentation, as it determines in its sole discretion from time to time. The Employee cannot derive any right to a future payment on the basis of the Bonus Plan.'
                            )
                        ),
                    $('<p/>').html('')
                    ),

                (employee.SIP == "Yes") &&
                $('<li/>').append(
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="SIP Eligible"/>').prop('id', makeid()).append(
                            'The Employee will be eligible to participate in a PayPal Sales Incentive Plan (”SIP”) for a specified fiscal year, with an annual on target incentive of <mark>' + employee.SIP_Amount + '</mark> Euros, in accordance with the terms and conditions of the SIP. The full terms and conditions of the SIP shall be provided to the Employee separately via a Participation Agreement.',
                                $('<p />').html(''),
                            (employee.Introductory_RampUp_Period_Eligible == "Y") && $('<div class="marked" data-toggle="popover" data-placement="top" data-content="SIP Eligible and Ramp-up period eligible"/>').prop('id', makeid()).append(
                                'The Employee will be eligible to receive a non-recoverable advance payment of [50%] of the annual Target Incentive amount specified in the Employee’s Participation Agreement for the SIP (the “Non-Recoverable Advance”).   The Employee’s eligibility for each installment will be considered each quarter over a period of one year (the “Ramp-Up Period”), in accordance with and subject to the terms of the SIP.   ',
                                $('<p/>').html(''),
                                'The Non-Recoverable Advance is payable regardless of whether the Employee actually meet the pre-defined performance targets in the SIP during the Ramp-Up Period, but payment of each installment is subject to the Employee’s continuing active employment by PayPal up to the applicable payment date during the Ramp-Up Period.',
                                $('<p/>').html(''),
                                'Any sums received under the Non-Recoverable Advance will be off-set against any sums the Employee would otherwise become entitled to under the terms of the SIP as a result of performance against the pre-defined targets in the SIP during the Ramp-Up Period. ',
                                $('<p/>').html(''),
                                'Once the Employee has earned or been paid 50% of their annual Target Incentive, either through the Non-Recoverable Advance or otherwise pursuant to the terms of the SIP, the Employee will not receive any further SIP payments unless their performance exceeds the performance necessary to earn the 50% of their Target Incentive delivered via the Non-Recoverable Advance.  In that case, the Employee will be eligible for consideration in each applicable quarter for the remaining 50% of their Target Incentive based on performance against the predefined targets over and above performance rewarded by the Non-Recoverable Advance, and subject to the terms of the SIP.   A reconciliation will take place each quarter comparing any Non-Recoverable Advance already paid plus any additional amount paid under the SIP against overall performance.  An adjustment may be made in any quarter to reflect outperformance or underperformance year to date. ',
                                $('<p/>').html('')
                            ),
                            'Any bonus or payment or award under the SIP shall be determined by PayPal in its sole and absolute discretion, subject to the terms and conditions of the SIP and of such amount, in such form, at such intervals and subject to such conditions as PayPal may in its absolute discretion determine from time to time. Other than as set forth above with respect to the Guaranteed Target, there is no guarantee that any payment under the SIP will be awarded or received. Any SIP payment, even if it is made repeatedly or regularly and whatever its amount, can never lead to a vested right for the Employee.',
                            $('<p/>').html(''),
                            'Paypal reserves the right, in its sole discretion, to amend, change, withdraw or cancel the SIP, and the Employee‘s eligibility to participate in the SIP or any other incentive compensation plan, at any time. Further, the incentive compensation plan that the Employee is eligible to participate in may change over time. the Employee acknowledge and agree that PayPal may substitute or cancel the SIP referenced in this letter and any contract of employment or any offer documentation, as it determines in its sole discretion from time to time.',
$('<p/>').html('')
) 
),
(employee.Hire_on_Bonus_Eligible == "Yes") &&
$('<li/>').append(
    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Sign on Bonus"/>').prop('id', makeid()).append(
        $('<span/>').append(
            'The Employee will receive a once off sign on payment of <mark>' + employee.HIRE_ON_BONUS_AMOUNT + '</mark> Euros, gross at the end of the probation period, less any deductions required by law. In the event that the Employee voluntarily leaves the Company within the first 6 full months of employment, the Employee undertakes and agrees to refund the full net amount of all the above payments. If the Employee does not repay this amount to the Company, the Company reserves the right to deduct the full amount from the Employee’s salary and /or to seek to recover such payments from the Employee as a contractual debt.'
            )
        ),
    $('<p/>').html('')
    )
)
), 


$('<div class="offerClause">').append(
    $('<p/>').append(
        $('<span/>').html('<strong><u>Article 4. Expenses</u></strong>')
        ),
    $('<ol/>').append(
        $('<li/>').append(
            'The Employer will compensate the Employee for expenses directly related to the performance of his work, but only insofar as that compensation may be provided tax free and premium free. '
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'A statement of expenses must be submitted to the Employer prior to the end of the month following the month in which the expenses were incurred. Expenses can be claimed upon submission of the original receipt(s), specifying the business-related reason for which they were incurred. The Employer will pay the expenses within one month after the Employee has claimed them, provided that the statement of expenses is sufficiently itemized, accompanied by the original receipt(s) and approved by the Employer.'
            )
        )
    ),

$('<div class="offerClause">').append(
    $('<p/>').append(
        $('<span/>').html('<strong><u>Article 5. Working Hours and Work Place</u></strong>')
        ),
    $('<ol/>').append(
        $('<li/>').append(
            'The work week shall run from Monday to Friday and the working hours amount to 40 hours a week. '
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'The Employee will perform his work at the Employer\'s office in Amsterdam, Barbara Strozzilaan 201, 1083 HN, The Netherlands. The Employer will be entitled to relocate the Employee’s workplace if the Company\'s interests so reasonably require. In addition, the Employee may be required to travel to customers or other locations both within The Netherlands and abroad as required by the duties of the position. '
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'The Employee covenants that, at the Employer\'s request, he will work overtime outside the normal working hours whenever a proper performance of his duties so requires. With respect to said overtime, no remuneration will be paid. '
            )
        )
    ),

$('<div class="offerClause">').append(
    $('<p/>').append(
        $('<span/>').html('<strong><u>Article 6. Benefits</u></strong>')
        ),
    $('<ol/>').append(
        $('<li/>').append(
            'For the duration of the Employment Agreement, the Employee will be eligible to be covered by the WGA-gap insurance (currently insured with Aegon), if and as soon as the Employee meets the requirements set out in the WGA-gap insurance plan. A copy of the WGA-gap insurance plan can be obtained by the HR department. The costs of the WGA-gap insurance will be borne jointly by the Employer and the Employee (50%/50%). The Employee hereby authorizes the Employer to withhold his contribution from the salary, to the extent possible in equal instalments upon each salary payment. The Employer will arrange for payment of the total premium to the insurance company (currently Aegon).'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'Following the Sickness Benefits Act implemented January 1, 2006 the Employer will pay the Dutch Tax Authorities on behalf of the Employee the income-related contribution fixed by the government each year. '
            )
        )
    ),

$('<div class="offerClause">').append(
    $('<p/>').append(
        $('<span/>').html('<strong><u>Article 7. Pension</u></strong>')
        ),
    $('<ol/>').append(
        $('<li/>').append(
            'For the duration of the Employment Agreement, the Employee will participate in the Employer’s collective pension plan, currently administered with Swiss Life if and as soon as the Employee meets the requirements set out in the pension plan regulations. '
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'All rights and obligations with respect to the pension plan are laid down in the pension agreement, a copy of the pension regulation can be obtained from the HR department.'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'The costs of the pension plan will be borne jointly by the Employer and the Employee. The division of the costs is laid down in further detail in the pension plan regulations. The Employee hereby authorizes the Employer to withhold his contribution from the salary, to the extent possible in equal instalments upon each salary payment. The Employer will arrange for payment of the total premium to the pension provider (currently Swiss Life).'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'The Employer may amend the pension agreement and/or pension plan regulations without the Employee’s consent if and insofar as it has a weighty interest in doing so that is of such a nature that the Employee’s interests, insofar as they are harmed by the amendment, in all reasonableness and fairness must yield to the Employer’s interest.'
            )
        )
    ),

$('<div class="offerClause">').append(
    $('<p/>').append(
        $('<span/>').html('<strong><u>Article 8. Holidays</u></strong>')
        ),
    $('<ol/>').append(
        $('<li/>').append(
            'The holiday year coincides with the calendar year. Days’ holiday are accrued in the course of the calendar year. '
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'The Employee is proportionally entitled to 26 days’ holiday per calendar year, which may be taken in consultation with and upon approval by the Employer. '
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'Holiday must be taken as much as possible in the year in which they are accrued. If the Employee is entitled to more than five (5) days’ holiday on 1 December of the relevant year and, with respect to the surplus, has not made a request to take days’ holiday that has been honoured by the Company, the Company may designate work days on which the Employee has to take the surplus. '
            )
        )
    ),


$('<div class="offerClause">').append(
    $('<p/>').append(
        $('<span/>').html('<strong><u>Article 9. Illness and Incapacity for Work</u></strong>')
        ),
    $('<ol/>').append(
        $('<li/>').append(
            'If the Employee is ill or unable to perform work for any other reason, he will be obliged to inform the Employer thereof before 09:00 a.m. on the first day of absence.'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'If the Employee is unable to perform the agreed work due to illness, he will remain entitled to continued payment of wages for a maximum period of 104 weeks, commencing on the first day of illness, or up to the date of termination of this Employment Agreement if that date is earlier, on the basis of the following conditions:',
            $('<p/>').html(''),
            $('<ul/>').append(
                $('<li/>').append('During the first week up to and including the 52nd week of illness the Employee remains entitled to 100% of the most recent gross base salary, including holiday allowance and excluding other emoluments.'),
                $('<p/>').html(''),
                $('<li/>').append('As of the 53rd week up to and including the 104th week of illness, the Employee remains entitled to 70% of the most recent gross base salary including holiday allowance and excluding other emoluments and capped at the maximum daily wage within the meaning of Section 17, paragraph 1, of the Dutch Social Insurance (Funding) Act.')
                )
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'The Employer will be entitled to postpone continued payments if the Employee does not adhere to the Employer\'s reasonable instructions, issued in writing, concerning the provision of information that the Employer requires in order to establish the Employee\'s right to payment of his salary.'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'To the extent the payments by the Company as referred to in paragraph 2 of this article were to exceed the Company’s minimum obligation on the basis of Section 7:629 of the Dutch Civil Code (‘DCC’), the Employee is not entitled to the payments referred to in paragraph 2 of this article, if and insofar as he can assert a claim for damages against a third party due to loss of income in connection with his incapacity for work. In that event, the Company shall only pay the amounts exceeding the aforementioned minimum obligation by way of advance on the damages to be received from the third party and against assignment by the Employee of his entitlement to damages up to the amount of the advances paid by the Company. The Company shall set off the advances if and as redress takes place.'
            )
        )
    ),


$('<div class="offerClause">').append(
    $('<p/>').append(
        $('<span/>').html('<strong><u>Article 10. Confidentiality</u></strong>')
        ),
    $('<ul/>').append(
        $('<li/>').append(
            'Neither during his employment nor upon termination thereof, irrespective of the manner in which and the reason why the Employment Agreement has been terminated, shall the Employee inform any third party in any form, directly or indirectly, of any particulars concerning or related to the business conducted by the Employer or its affiliated companies including but not limited to technical, financial and business information and models, names of potential clients or partners, proposed transactions, reports, plans, market prognoses, computer software, databases, data, technical knowledge or other confidential information concerning the Employer\'s business that the Employee could reasonably have known was not intended for third parties; whether or not such information includes any reference to the confidential nature or how the Employee learned of the particulars is of no importance.'
            ),
        $('<p/>').html('')
        )
    ),

$('<div class="offerClause">').append(
    $('<p/>').append(
        $('<span/>').html('<strong><u>Article 11. Non-Competition Clause</u></strong>')
        ),
    $('<ol/>').append(
        $('<li/>').append(
            'During the Employment Agreement and for a period of 12 months after the termination thereof, irrespective of the manner in which and the reason why the Employment Agreement has been terminated, the Employee shall not, without the prior written consent of the Employer, engage in any activ-ities that compete, directly or indirectly, in any way whatsoever, with the Employer or its affiliates, within the Netherlands where the Employee at any time worked under the Employment Agreement, and the Employee shall not establish, conduct or cause the conduct of any competing business, or take any interest in or be employed in any way whatsoever, whether or not for consideration, by such business.'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'Upon each breach of the above prohibitions, the periods stated in paragraph 1 above will be increased by the duration of the breach. '
            )
        )

    ),

$('<div class="offerClause">').append(
    $('<p/>').append(
        $('<span/>').html('<strong><u>Article 12. Ban on Recruitment</u></strong>')
        ),
    $('<ul/>').append(
        $('<li/>').append(
            'Neither during the term of the Employment Agreement nor for a period of 12 months after the termination thereof, irrespective of the manner in which and the reason why the Employment Agreement has been terminated, may the Employee, without the Employer’s prior written consent, directly or indirectly induce employees of the Employer or of a company affiliated with it to terminate their employment contracts, in order to compete in any way whatsoever with the Employer or a company affiliated with it.'
            ),
        $('<p/>').html('')
        )
    ),

$('<div class="offerClause">').append(
    $('<p/>').append(
        $('<span/>').html('<strong><u>Article 13. Sidelines</u></strong>')
        ),
    $('<ul/>').append(
        $('<li/>').append(
            'Without the Employer\'s prior consent and during his employment, the Employee shall refrain from undertaking or holding any sidelines or additional posts, such as committee work, or managerial or other activities for associations, foundations or other organizations of an idealistic, cultural, sporting, political or other nature, either gratuitously or for remuneration, regardless of whether the Employer is either partly or fully aware of such activities, if it is plausible that such activities will affect the Employee\'s full dedication to his duties within the Employer\'s company, in terms of both time and attention. Moreover, the Employee shall refrain from using any of the Company facilities, such as telephones, faxes, copiers or office supplies, in respect of such activities. The Employer\'s prior written consent will be re-quired to post or publicize announcements or posters, or to distribute periodicals or notices in connection with the above.'
            ),
        $('<p/>').html('')
        )
    ),


$('<div class="offerClause">').append(
    $('<p/>').append(
        $('<span/>').html('<strong><u>Article 14. Changes Clause</u></strong>')
        ),
    $('<ul/>').append(
        $('<li/>').append(
            'The Employer will be entitled to unilaterally amend the content of the Employment Agreement and any arrangements and/or policies referred to in the Employment Agreement if and insofar as the Employer has a weighty reason to do so and to the extent that the Employee’s interests, insofar as they are harmed by the amendment, must yield thereto in accordance with the principles of reasonableness and fairness.'
            ),
        $('<p/>').html('')
        )
    ),


$('<div class="offerClause">').append(
    $('<p/>').append(
        $('<span/>').html('<strong><u>Article 15. Intellectual Property Rights</u></strong>')
        ),
    $('<ol/>').append(
        $('<li/>').append(
            'The Employee acknowledges that any and all (future) intellectual property rights, including but not limited to the copyright, patent rights, data base rights, trademark rights, design rights, moral rights, know-how and trade secrets or claims thereon, ensuing from the Employment Agreement, vest in the Company by operation of law (‘IP Rights’). The Employee acknowledges that the definition of IP Rights includes the intellectual property rights and/or any other proprietary rights to any and all information, works and discoveries (‘Works’) created by the Employee during or after the performance of his work under the Employment Agreement and irrespective whether that directly or indirectly involves the performance of such Works.'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'Insofar as the IP Rights do not vest in the Company by operation of law, the Employee hereby transfers, and insofar as applicable, transfers in advance, the IP Rights to the Company, which transfer is hereby accepted by the Company.'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'To the extent permitted by law, the transfer under paragraph 2 of this article, also includes the transfer of all (future) moral rights that the Employee has or may obtain. To the extent that such moral rights cannot be transferred pursuant to the rules of mandatory law, the Employee hereby waives those rights to the extent permitted by law. The Employee acknowledges that he does not have the right, and insofar as is applicable waives the right, to be designated as the creator, discoverer or inventor of Works, except insofar as this is required by law.'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'To the extent that the IP Rights are not transferable, the Employee grants the Company a royalty free, worldwide, exclusive, transferable license, with the right to grant sub-licenses, to use the IP Rights as if the Company were the owner of the IP Rights, which license is hereby accepted by the Company.'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'The Employee undertakes to fully cooperate at the Company’s first request and to carry out all actions that the Company deems necessary or desirable in order to effectuate or formalise the transfer of the IP Rights and/or to protect the IP Rights, including but not limited to executing deeds of transfer and/or other documentation required to evidence that the Company is the sole owner of the IP Rights. Insofar as an application, registration or similar action is necessary to protect the IP Rights, this will be done exclusively in the name of the Company and the Employee will, at the Company’s first request, provide full cooperation in this respect.'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'The provisions of paragraph 1 of this article also apply to Works that are completed and/or created within one year after the date on which the Employment Agreement terminates irrespective of the reason why and the manner in which the Employment Agreement terminates.'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'The Employee will immediately notify and disclose in full to the Company all of the created Works and, to the extent necessary, at the Company’s first request, will take all necessary steps and actions to ensure that the IP Rights are acquired by the Company or transferred to the Company.'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'The Employee acknowledges that his salary also includes equitable remuneration for all Works performed by the Employee, whether or not alone, and for the loss of the IP Rights referred to in this article 15. The Employee waives any right to an additional (financial) compensation.'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'To the extent that the Employee is unable to provide the cooperation or to perform the acts referred to in this article 15, the Employee hereby grants the Company an irrevocable power of attorney to perform all (legal) acts on behalf of the Employee that are necessary in order to effect the purposes as set out in this article 15, including but not limited to the transfer, license and registration of the IP Rights referred to in this article 15.'
            )
        )
),


$('<div class="offerClause">').append(
    $('<p/>').append(
        $('<span/>').html('<strong><u>Article 16. Documents and Restitution</u></strong>')
        ),
    $('<ul/>').append(
        $('<li/>').append(
            'The Employee is prohibited from in any way having documents and/or correspondence and/or other information carriers and/or copies thereof in his possession that belong to the Company, with the exception of the extent to which and as long as required for the performance of his activities for the Company. In any event, the Employee is required, even without any request being made to that end, to return such documents and/or correspondence and/or other information carriers and/or copies thereof to the Company immediately upon termination of the Employment Agreement, irrespective of the manner in which and the reason why the Employment Agreement has been terminated - or in the event the Employee is on non-active duty for any reason whatsoever.'
            ),
        $('<p/>').html('')
        )
    ),


$('<div class="offerClause">').append(
    $('<p/>').append(
        $('<span/>').html('<strong><u>Article 17. Penalty Clause</u></strong>')
        ),
    $('<ul/>').append(
        $('<li/>').append(
            'In the event of breach of one or more provisions referred to in article(s) 10, 11, 12, 13, 15 and/or 16 of this Employment Agreement, the Employee shall be liable to pay - if applicable in deviation from the provisions made in Section 7:650 subsections 3, and 5 DCC - vis-à-vis the Company, without a notification or notice of default being required, a penalty of Euros 11,345 which is immediately due and payable to the Company for each breach, to be increased by Euros 1,345 for each day (including any partial days) that such breach continues. This article is without prejudice to the Company’s right to claim actual damages instead of liquidated damages as well as proper performance of the terms of this Employment Agreement.'
            ),
        $('<p/>').html('')
        )
    ),


$('<div class="offerClause">').append(
    $('<p/>').append(
        $('<span/>').html('<strong><u>Article 18. Code of Business Conduct </u></strong>')
        ),
    $('<ol/>').append(
        $('<li/>').append(
            'The Employee declares that he has received a copy of the Employer’s code of business conduct (‘Code of Business Conduct’) and that he accepts the content thereof.'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'The Employer will be entitled to unilaterally amend the content of the Code of Business Conduct if and insofar as it has a weighty reason in doing so that is of such a nature that the Employee’s interests, insofar as they are harmed by the amendment, in all reasonableness and fairness must yield to the Employer’s interest.'
            )
        )

    ),


$('<div class="offerClause">').append(
    $('<p/>').append(
        $('<span/>').html('<strong><u>Article 19. Data Protection</u></strong>')
        ),
    $('<ol/>').append(
        $('<li/>').append(
            'Employee’s personal data is information personal to the Employee, and which identifies the Employee, such as (but not limited to) the Employee’s name, address and employee records. The Company will process the Employee’s personal data for purposes associated with the Employee’s employment. The Company may process the Employee’s personal data itself, or use carefully selected advisors and third parties (‘Data Processors’) to help process the personal data.'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'Processing personal data about the Employee and others may involve transferring this personal data to third parties (in the Netherlands or any other country) who advise or assist the Company and any business associated with it, prospective purchasers of any of them (although in this latter case, where practicable, the Company will provide anonymized data), Government bodies and persons authorized by the Employee or by Court orders.'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'By signing this Employment Agreement, the Employee consents to the Company (and any Data Processors) processing any personal data about the Employee for any purposes associated with the Employee’s employment without prejudice to the Employee’s statutory rights of access to his personal data.'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'If the Employee is required to process personal data as part of his role, he must process data in accordance with applicable legislation and comply at all times with the Company’s policies and procedures for processing personal data. Failure to do so could result in disciplinary action being brought against the Employee.'
            )
        )
    ),



$('<div class="offerClause">').append(
    $('<p/>').append(
        $('<span/>').html('<strong><u>Article 20. Applicable Law </u></strong>')
        ),
    $('<ul/>').append(
        $('<li/>').append(
            'The laws of the Netherlands will apply to this Employment Agreement and its appendices/schedules.'
            ),
        $('<p/>').html('')
        )
    ),

$('<div class="offerClause">').append(
    $('<p/>').append(
        $('<span/>').html('<strong><u>Article 21. Final Provisions</u></strong>')
        ),
    $('<ol/>').append(
        $('<li/>').append(
            'The Employment Agreement is not subject to any collective labour agreement.'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'All disputes, which may arise from or in the context of this Employment Agreement, shall be submitted to the jurisdiction of the competent Dutch court.'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'Nullity of one of the provisions of the Employment Agreement will not lead to nullity of the whole Employment Agreement. As soon as one of the Parties discovers a nullity provision in the Employment Agreement, that Party has the obligation to report it to the other Party and discuss which solution fits best.'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'The Company shall deduct wage tax and social security premiums from all payments which will be made to the Employee under this Employment Agreement and pay such tax and premiums, unless such payments are deemed to be tax-free payments.'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'The Employee guarantees that entering into the Employment Agreement does not constitute and will not amount to a breach of an obligation resting upon the Employee (such as, but not limited to, a non-competition clause in a former employment agreement).'
            ),
        $('<p/>').html(''),
        $('<li/>').append(
            'This Employment Agreement constitutes the entire agreement between the Parties and supersedes all prior arrangements made between the Parties in respect of its subject matter.'
            )
        )
    ),
$('<div class="offerClause">').append(
    $('<p/>').html(''),
    $('<p/>').append(
        'Yours sincerely, '
        ),
    $('<span/>').append(
        'For PayPal PLC, Netherlands Branch<br>'
        ),
    $('<div id="complimentary-close-signer"/>').append(
        $('<mark/>').append(
            $('#printed-signatory-name').val()
            ),
        '<br>'
        ),
    $('<p/>').html('')
    )



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

$(document).on('ready', function() {
  "use strict";
  // render template
  fnView();

  if ($("#hidden_pg").prop('readonly')) {
    $("#ButtonSaveAndComplete").remove();
    let arrParts = [
    [1, 'hidden_pg']
    ];
    showCompletedOfferLetter('incomplete', 'complete', arrParts);
}

else {
    makeOfferLetter('hidden_pg','offerClause');
    //makeOfferLetter('hidden_pg2','offerClause2');
    makeOfferLetter('hidden_pg3','offerClause3');
    makeOfferLetter('hidden_pg4','offerClause4');
    makeOfferLetter('hidden_pg5','offerClause5');
}

$('mark').each(function(x){  
    if($('mark').eq(x).html().length <= 0){  
      $('mark').eq(x).html('<span>&nbsp;</span>');  
  }  
}); 
});
