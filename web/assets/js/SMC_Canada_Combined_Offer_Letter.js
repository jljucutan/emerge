function fnView() {
    $("#markup1").html("").append(
        (employee.Canada_Offer_Text == '') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(fnConvertDate(employee.Today)),
            $('<p/>').append(
                $('<span/>').html(employee.First_Name + ' ' + employee.Middle_Name + ' ' + employee.Last_Name + '<br>'),
                $('<span/>').html((employee.Address1) ? employee.Address1 + '<br>' : ''),
                $('<span/>').html((employee.Address2) ? employee.Address2 + '<br>' : ''),
                $('<span/>').html(((employee.City) ? employee.City + ((employee.State) ? ', ' + employee.State : '') : ((employee.State) ? employee.State : '')) + ((employee.Zip) ? ', ' + employee.Zip : '') + ((employee.Country) ? '<br>' + employee.Country : ''))
                ),
            $('<p/>').html("Dear " + employee.First_Name + ':<br>'),

            (employee.Employee_Type != 'Fixed Term') &&
            $('<p/>').html(
                'We take great pleasure in offering you employment with Legal Entity (also referred to herein as “Company”) as a/an [Business Title] in our [Location City] office. This letter confirms the terms of the Company\'s offer and briefly describes your compensation and benefits package.'
                ),

            ((employee.Employee_Type == 'Fixed Term' || employee.Employee_Type == 'Intern' || ['Intern -'].indexOf(employee.Employee_Type) == 0)) &&
            $('<p/>').html(
                'We take great pleasure in offering you a contract position as a/an ' + employee.Business_Title + ' with Legal Entity (also referred to herein as “Company”), based in the ' + employee.Location_City + ' office. This letter confirms the terms of Legal Entity’s offer and briefly describes your compensation package.'
                ),

            (employee.Hire_Type == 'PlatformChange') &&
            $('<p/>').html(
                'We are pleased to confirm the transfer of your employment from ' + employee.Localization_Prior_Legal_Entity + '  to ' + employee.Previous_Legal_Entity + ',the “Company”), effective on or about <Transfer Date> (known as the “Transfer Date”).  For the avoidance of doubt, from the Transfer Date your employment will no longer be with < Localization Prior Legal Entity>, but your original hire date with ' + employee.Previous_Legal_Entity + ', ' + fnConvertDate(employee.Earliest_Date_Hri_Entry) + ', will remain unchanged.  Your official title will be ' + employee.Business_Title + ' and your rank will remain ' + employee.Rank + '. You will be located in our ' + employee.Location_City + ' office.'
                ),

            (employee.Hire_Type == 'International Transfer') &&
            $('<p/>').html(
                'We are pleased to confirm the transfer of your employment from ' + employee.Transfer_Country + ' to ' + employee.Country + '  and your resulting transfer from ' + employee.Previous_Legal_Entity + ' to ' + employee.Legal_Entity + ', effective on or about ' + fnConvertDate(employee.Transfer_Date) + ' (known as the "Transfer Date").  For the avoidance of doubt, from the Transfer Date your employment will no longer be with ' + employee.Previous_Legal_Entity + ', but your original hire date with UBS, ' + fnConvertDate(employee.Earliest_Date_Hri_Entry) + ', will remain unchanged. Your official title will be ' + employee.Business_Title + ' and your rank will remain ' + employee.Rank + '. You will be located in our ' + employee.Location_City + ' office.'
                ),

            $('<p/>').html(
                'Once you have signed and returned this letter, It will become a binding employment agreement between you and the Company (referred to herein as the “Agreement”). Please keep a copy of this Agreement.'
                ),

            $('<p/>').html(
                'Please note that when this Agreement refers to “applicable employment standards legislation”, the Company is referring to the applicable employment standards statute that applies to your employment, as applicable, be it the <em>Ontario Employment Standards Act, 2000</em> or the <em>BC Employment Standards Act</em> or the <em>Canada Labour Code</em>.'
                ),

            (employee.Employee_Type != 'Fixed Term') &&
            $('<p/>').html(
                '<u>Start Date</u><br>Your employment with the Company will commence on ' + fnConvertDate(employee.Hire_Date) + ' or a date mutually acceptable to both parties and will continue indefinitely until terminated in accordance with the terms of this Agreement.'
                ),

            (employee.Employee_Type == 'Fixed Term' || employee.Employee_Type == 'Intern' || ['Intern -'].indexOf(employee.Employee_Type) == 0) &&
            $('<span/>').append(
                $('<p/>').html(
                    '<u>Contract Period</u><br>Your employment with the Company is for a fixed-term only, and will commence on ' + fnConvertDate(employee.Hire_Date) + ' or a date mutually acceptable to both parties, and is scheduled to end on ' + fnConvertDate(employee.Termination_Date) + '. (the "Contract Period")'
                    ),
                $('<p/>').html(
                    'If the Company wishes to extend this Agreement and your employment beyond the Contract Period, you will be provided with two weeks’ prior notice and the extension will be subject to you and the Company entering into a new employment agreement.  In the absence of any such extension and agreement, your employment will terminate on ' + fnConvertDate(employee.Termination_Date) + '(the “End Date”) without further notice or payment in lieu thereof, unless terminated at an earlier date due to one of the following circumstances:'
                    )
                ),
                $('<ul/>').append(
                    $('<li/>').append(
                        'By you, during the Contract Period, by providing the Company with two (2) weeks’ written notice. If you resign, the Company\'s only obligation will be to pay you earned but outstanding wages and vacation pay, if any, owing up to your date of termination , and any other payment as expressly required under your applicable employment standards legislation).'
                    ),
                    $('<li/>').append(
                        'By the Company, for Cause, without notice, without warning, and without any obligation to make any further payment to you. Upon termination for Cause, you will be paid only the following amounts owing to your last day of active employment: any earned but outstanding wages and vacation pay. You will not be entitled to any further payments, except as required under your applicable employment standards legislation. For the purposes of this Agreement, “Cause” shall mean any conduct by you which would disentitle you to notice of termination or pay in lieu of notice under your applicable employment standards legislation. '
                    ),
                    $('<li/>').append(
                        'By the Company, without Cause, by providing you with only the minimum amount of notice of termination or payment in lieu of notice. (or a combination of both) required under your applicable employment standards legislation, and any other entitlement as expressly required under your applicable employment standards legislation. Such entitlements are deemed to constitute complete satisfaction of your entitlements at common law, under statute, contract or otherwise. '
                    )
                )
            ),

            (employee.Employee_Type != 'Fixed Term') &&
            $('<p/>').html(
                '<u>Probationary Period</u><br>The first three months of your employment less one day is considered a probationary period (the “Probationary Period”). This Probationary Period is not a commitment to or guarantee of employment for the length of the Probationary Period or any other period, and the Company may terminate your employment at any time during the Probationary Period without notice or pay in lieu of notice, except payment of earned but outstanding wages and vacation pay calculated up until your last date of active employment, and any payment as expressly required by your applicable employment standards legislation.'
                ),

            (employee.Employee_Type != 'Fixed Term') &&
            $('<p/>').html(
                '<u>Corporate Rank</u><br>Your official title of ' + employee.Rank + ' will be presented for approval/ratification in accordance with the applicable title ratification process.'
                ),

            (employee.Employee_Type != 'Fixed Term'  || employee.Employee_Type == 'Intern' || ['Intern -'].indexOf(employee.Employee_Type) == 0) &&
            $('<p/>').html(
                '<u>Base Salary</u><br>You will be paid an annual base salary of ' + employee.Base_Salary + ' CAD, subject to applicable deductions and withholdings (the “Base Salary”). All compensation is payable in accordance with the payroll policies of the Company as in effect from time to time.'
                ),

            (employee.Employee_Type == 'Fixed Term') &&
            $('<p/>').html(
                '<u>Base Salary</u><br>You will be paid $' + employee.Rate_of_Pay + ' CAD per month (' + employee.Base_Salary + ' annualized), less applicable withholding taxes, for work performed by you during this contract period.'
                ),

            ((employee.Division).toUpperCase() == 'WEALTH MANAGEMENT' && (employee.SMC_Client_Advisor_Position).toUpperCase() == 'Y') &&
            $('<span/>').append(
                $('<p/>').html(
                    '<u>Client Advisor Compensation Plan and Incentive Compensation</u><br>As a Client Advisor of UBS Bank (Canada), you may be eligible for a discretionary Year-End Incentive Compensation/Bonus, pursuant to the Client Advisor Incentive Compensation Plan (the "CA Compensation Plan"), a copy of which will be provided to you at a later date, and subject to the conditions set forth above. The CA Compensation Plan envisions incentive compensation paid out in accordance with a formula and based upon an Advisor’s designated tier, with payment being made on or before March 15th following the performance year (the “Payment Date”) provided that the Advisor remains actively employed at UBS Bank (Canada) and meets all other terms and conditions applicable to discretionary compensation. <u>An overview of the Client Advisor Compensation Plan is attached as Appendix B to this letter.</u>'
                    ),
                $('<p/>').html(
                    'Your ability to receive a discretionary Year-End Incentive Compensation/Bonus is also subject to you not doing, on or before the Payment Date, any of the following, which, in the opinion of UBS Bank (Canada), is harmful to the interests of UBS Bank (Canada), or any of their subsidiaries or affiliates (collectively, "UBS Group"):'
                    ),
                $('<ul/>').append(
                    $('<li/>').append(
                        'your performance is deemed to contribute substantially to the UBS Group or part of the UBS Group incurring significant financial losses; '
                        ),
                    $('<li/>').append(
                        'your performance is deemed to contribute substantially to a significant downward restatement of any published results of the UBS Group or any business division of the UBS Group; '
                        ),
                    $('<li/>').append(
                        'you engage in conduct which results in or contributes substantially to significant reputational harm to the UBS Group; '
                        ),
                    $('<li/>').append(
                        'you materially breach or contribute substantially to a material breach of applicable legal and/or regulatory requirements; or '
                        ),
                    $('<li/>').append(
                        'you engage in conduct which results in or contributes substantially to a material breach of UBS Group’s applicable internal policies and procedures, including without limitation those policies in respect of risk management, compliance, disciplinary and any applicable supervisory practices;'
                        )
                    ),
                $('<p/>').html(
                    'in which event the amount of any incentive award shall be reduced by such amount as the Company shall in its absolute discretion determine, taking account of any such harmful act(s) and/or omission(s), the circumstances surrounding them, and their consequences and/or potential consequences for you and/or any UBS Group entity.'
                    ),
                $('<p/>').html(
                    'Please note that UBS Bamk (Canada) retains the right to amend the terms of its incentive compensation award in the future if necessary to comply with legal or regulatory requirements or any changes in applicable law, rules or regulations or in the interpretation thereof by any regulator, agency or tribunal of competent jurisdiction. '
                    )
                ),
            ((employee.Division).toUpperCase() == 'WEALTH MANAGEMENT' && (employee.SMC_Business_Development_Position).toUpperCase() == 'Y') &&
            $('<span/>').append(
                $('<p/>').html(
                    '<u>Business Development Incentive Compensation</u><br>As a Business Developer for UBS Bank (Canada), you may be eligible for a discretionary Year-End Incentive Compensation/Bonus. Any year-end bonus would be calculated using two components: Net New Money (“<u>NNM</u>”) and the annual Performance Measurement & Management ("<u>PMM</u>") Rating.'
                    ),
                $('<p/>').html(
                    'NNM is defined as the value of securities and/or cash received into new accounts (“assets”) brought to the Bank by you, offset by the value of securities and/or cash leaving these accounts to during the first twelve months. You will receive recognition for any additional NNM from the same relationship if the assets are booked during the first twelve months from the initial funding of an account. '
                    ),
                $('<p/>').html(
                    'Assets must be new to UBS Bank (Canada) and held with the Bank on December 31st each year to constitute NNM. The determination of NNM and whether you brought assets to the Bank, including the right to exclude certain assets if it so decides, is within the sole and absolute discretion of the Bank’s senior management; for greater certainty, the foregoing includes the discretion by the Bank to exclude from NNM any assets received by the Bank or referred to you by an external asset manager or as a result of a financial intermediary relationship.'
                    ),
                $('<p/>').html(
                    'The NNM component of the year-end bonus will be calculated at 30 basis points (“bps”), provided that there is at least a minimum annualized Return on Assets (“RoA”) of 60 bps on total AUM. If the annualized RoA is below 60 bps, the calculation on NNM will be 15 bps. The NNM component of the year-end bonus will be subject to a cap of $300,000. Any additional NNM compensation over and above the defined cap will be at the sole and absolute discretion of the Bank’s senior management. If you end the calendar year with negative NNM, the Bank’s senior management may decide, in its sole and absolute discretion, to carry-over this negative balance to the next and subsequent calendar year(s) for purposes of calculating any potential year-end bonus for the subsequent year(s). '
                    ),
                $('<p/>').html(
                    'UBS Bank (Canada) may employ a modified version of the NNM component calculation to account for significant NNM inflows or outflows occurring toward the end of the calendar year and onwards. The primary purpose of the modified NNM component calculation is to ensure that you are not unintentionally disadvantaged given the size and/or timing of a particular NNM inflow. The use of the modified NNM component calculation and methodology will be at the sole and absolute discretion of the Bank’s senior management. '
                    ),
                $('<p/>').html(
                    'Your ability to receive a discretionary Year-End Incentive Compensation/Bonus is also subject to your not doing, on or before the Payment Date, any of the following, which, in the opinion of UBS Bank (Canada), is harmful to the interests of UBS Bank (Canada), or any of their subsidiaries or affiliates (collectively, ‘UBS Group’):'
                    ),
                $('<ul/>').append(
                    $('<li/>').append(
                        'your performance is deemed to contribute substantially to the UBS Group or part of the UBS Group incurring significant financial losses; '
                        ),
                    $('<li/>').append(
                        'your performance is deemed to contribute substantially to a significant downward restatement of any published results of the UBS Group or any business division of the UBS Group; '
                        ),
                    $('<li/>').append(
                        'you engage in conduct which results in or contributes substantially to significant reputational harm to the UBS Group; '
                        ),
                    $('<li/>').append(
                        'you materially breach or contribute substantially to a material breach of applicable legal and/or regulatory requirements; or '
                        ),
                    $('<li/>').append(
                        'you engage in conduct which results in or contributes substantially to a material breach of UBS Group’s applicable internal policies and procedures, including without limitation those policies in respect of risk management, compliance, disciplinary and any applicable supervisory practices;'
                        )
                    ),
                $('<p/>').html(
                    'in which event the amount of any incentive award shall be reduced by such amount as the UBS Bank (Canada) shall in its absolute discretion determine, taking account of any such harmful act(s) and/or omission(s), the circumstances surrounding them, and their consequences and/or potential consequences for you and/or any UBS Group entity. '
                    ),
                $('<p/>').html(
                    'Please note that UBS Bank (Canada) retains the right to amend the terms of its annual incentive compensation award in the future if necessary to comply with legal or regulatory requirements or any changes in applicable law, rules or regulations or in the interpretation thereof by any regulator, agency or tribunal of competent jurisdiction.'
                    )
                ),

((employee.Division).toUpperCase() == 'WEALTH MANAGEMENT' && (employee.SMC_Analyst_Position).toUpperCase() == 'Y') && 
$('<span/>').append(
    $('<p/>').html(
        '<u>Signing Bonus (ANALYSTS ONLY)</u><br>Upon acceptance of this offer, we will advance to you CAD AMOUNT in the form of a signing bonus. Upon commencement of your employment, we will advance a further '+ employee.SignOn_Amt +' CAD AMOUNT as an additional signing bonus. In the event you voluntarily terminate your employment with the Company or are terminated for Cause (as defined in this Aggreement) within one year of your start date, you agree to repay to the Company a prorated portion of the total Signing Bonus within 30 days of your termination date.'
        ),
    $('<p/>').html(
        'Please note that the Signing Bonus will not form part of your standard compensation and will not be considered for the purpose of calculating any entitlements to vacation, benefits, notice of termination or payment in lieu of notice, except as required by applicable law, and will not be construed under any circumstances as an obligation for the Company to continue your employment for any period of time. All amounts aforementioned are subject to necessary deductions, including required withholding pursuant to the Income Tax Act.'
        )
    ),

(employee.Employee_Type != 'Fixed Term') &&
$('<span/>').append(
    $('<p/>').html(
        '<u>Incentive Compensation Award Overview</u><br>In addition to your Base Salary, you may be eligible for a discretionary incentive compensation award under the Company\'s discretionary performance incentive program. The program is operated at Company\'s sole and exclusive discretion and may be amended or discontinued at any time.'
        ),
    $('<p/>').html(
        'Under the current program, discretionary incentive compensation awards will be determined in January/February following the end of the performance year, which determination may take into account a variety of factors including, without limitation, financial results of UBS AG, your business division and your business area, competitive market conditions, and discretionary judgments of individual performance and contributions to business results and objectives, as well as legal and/or regulatory restrictions, which may affect individual incentive compensation award decisions. '
    ),
    $('<p/>').html(
        'Under the current program, incentive awards are subject to the terms of the UBS Equity Ownership Plan (“EOP”), and/or any other plan operated by the Company at that time, so that part of any award may be awarded in cash and/or in deferred instruments (which may include, without limitation, restricted shares, notional shares, conditional future payments, or debt instruments) subject to certain vesting and/or forfeiture conditions, which may be linked to and conditioned upon a variety of factors including, without limitation, individual and Company performance factors and will be subject to the terms and conditions of any such incentive award plan as the Company may implement, from time to time, in its sole and exclusive discretion. Any award granted under any Company’s compensation plan will be subject to the rules of the plan at the time the award is granted. The rules of the Company’s compensation plans may be amended from time to time or discontinued at the absolute discretion of the Company and do not form a part of your employment agreement with the Company. Participation in the program, even for several years, does not guarantee or give rise to a legitimate expectation of any entitlement. A future incentive compensation award, if any, may be higher, lower or zero in future years and remains in the sole and exclusive discretion of management.'
    ),
    $('<p/>').html(
        'Subject to applicable law, you acknowledge, in order to receive the incentive compensation award, you must be actively employed by the Company throughout the relevant calendar year and on the incentive compensation award payment date (the “Payment Date”), which is generally in or around mid-February to early March, but not later than March 15th of each subsequent calendar year. '
        ),
    $('<p/>').html(
        'For the purposes of this Agreement, “actively employed” shall mean your active engagement in the duties of your employment without regard to any notice period under statute, common law, contract, in equity or otherwise, save and except the applicable statutory notice period under your applicable employment standards legislation.'
        ),
    (employee.Employee_Type != 'Fixed Term') &&
    $('<p/>').html(
        '<u>Benefits</u><br>You will be eligible to participate in the employee benefit programs effective your start date, subject to the terms and conditions of the applicable plan. Full details will be provided to you during your orientation. The Company’s liability with respect to all benefits is restricted to the payment of its portion of the premiums in order to obtain the coverage in question. Any issue in respect to entitlement, coverage, level of benefits or any other issue are as between you and the insurance carrier, subject to the terms of the applicable insurance policy.'
        )
    ),
    (employee.Employee_Type != 'Fixed Term' && (employee.Division).toUpperCase() == 'GLOBAL ASSET MANAGEMENT') &&
    $('<p/>').html(
        '<u>Pension Plan</u><br>You will be required to join the Company\'s Defined Contribution Pension Plan upon your start date. Subject to the terms and conditions of the applicable plan, the Company will contribute a fixed percentage of base salary, and vesting in the plan is immediate.'
    ),
    ((employee.Division).toUpperCase() == 'INVESTMENT BANK' && employee.Employee_Type != 'Fixed Term') && 
    $('<p/>').html(
        'You will be required to join the Company\'s Registered Retirement Savings Plan upon your start date. Subject to the terms and conditions of the applicable plan, the Company will contribute a fixed percentage of base salary, and vesting in the plan is immediate.'
    ),

    (employee.Employee_Type != 'Fixed Term') &&
    $('<span/>').append(
        $('<p/>').html(
            '<u>Personal Account Dealing (PAD) Policy</u><br>Please be advised that you will be required to maintain your brokerage accounts with one of our three approved Canadian brokers, TD Waterhouse, RBC Direct Investing or RBC Dominion Securities, with the exception of staff who hold fully managed or discretionary accounts, or have a spouse, domestic partner or household member that works for and maintains an account with another Canadian broker.  Also note that you will be required to preclear any trades that take place post your hire date as applicable under the policy.  A copy of the full Personal Account Dealing Policy will be made available to you as part of your mandatory training modules during your first 30 days and you can contact our compliance team for any clarification required.'
        )
    ),
    $('<u/>').append('Vacation'),
    (employee.Employee_Type != 'Fixed Term') &&
    $('<p/>').append(
        'You will be entitled to <strong>Vacation Weeks</strong> of vacation in a full year. The vacation year runs from January 1st to December 31st. You are entitled to a pro rata share of your vacation entitlement during the first calendar year of your employment with the Company. All vacation time must be pre-approved by your manager.'
    ),
    (employee.Employee_Type == 'Fixed Term' && (employee.Employee_Type == 'Intern' || ['Intern -'].indexOf(employee.Employee_Type) == 0)) &&
    $('<p/>').html(
        'You will be entitled to vacation pay at a rate of Vacation Pay Percentage of your gross income earned during the Contract Period.  This payment will be made monthly . '
    ),
    $('<p/>').html(
        '<u>Professional Conduct</u><br>You agree that you will adhere to all of the Company’s policies, directives, Code of Ethics, and codes of conduct, which may be amended, withdrawn, revised or supplemented at any time in the Company’s or UBS AG’s sole discretion.  You further agree that your employment is contingent upon your signing and adhering to the attached agreement regarding Confidentiality, Non-Solicitation and Intellectual Property. This forms an integral part of the terms and conditions of your employment with the Company.'
        ),
    (employee.Employee_Type != 'Fixed Term') &&
    $('<span/>').append(
        $('<p/>').html(
            '<u>Registration Requirements</u><br>If required by your position, you may be required to become registered and remain in good standing with the applicable provincial securities commissions during your tenure with the Company.'
            )
        ),
    (employee.Employee_Type != 'Fixed Term') &&
    $('<div/>').append(
        '<u>Termination without Cause</u>',
        $('<p/>').append(
            'In lieu of reasonable notice at common law and in lieu of any compensation or damages in lieu of notice, the Company may terminate your employment at any time after the Probationary Period for any reason other than Cause by:'
        ),
        $('<ul/>').append(
            $('<p/>').append(
                'a) providing you with only your minimum entitlements upon termination under your applicable employment standards legislation (the “ESL”), including your entitlements to notice of termination or payment in lieu of notice (or a combination of both) required by the ESL, [and, where applicable, any severance pay required by the ESL,] and any other entitlement as expressly required by the ESL;'
            ),
            $('<p/>').append(
                'b) continuing any required employer benefit plan contributions, but only for the statutory notice period under the ESL; and '
            ),
            $('<p/>').append(
                'c) paying you all of your earned but outstanding wages and vacation pay (including any vacation pay payable to the end of the statutory notice period under the ESL).'
            ),
            $('<small/>').append(
                '<sup>1</sup>  Note: Employers are not required to provide employees party to a fixed term agreement of 1 year or less with vacation time but in all cases, they are entitled to receive vacation pay equal to 4% of their gross wages, payable upon expiry of the fixed term.'
            )
        ),
        $('<p/>').append(
            'No further payments or entitlements will be provided, except as expressly required by the ESL.  You agree to accept the above entitlements as referenced in this “Termination without Cause” section, and same is deemed to constitute complete satisfaction of all entitlements you may have in respect of your employment and the termination thereof, pursuant to your applicable employment standards legislation or any other statute, contract, common law, or otherwise. For greater clarity, you agree to accept the entitlements in this “Termination without Cause” section in lieu of reasonable notice at common law and in lieu of any compensation or damages in lieu thereof.'
        )
    ),
    $('<p/>').html(
        '<u>Termination for Cause</u><br>Subject to the ESL, the Company may terminate your employment at any time for “Cause” without notice or pay in lieu of notice, and without any obligation to make any further payment to you. Upon termination for Cause, you will be paid only the following amounts owing to your last day of active employment: any earned but outstanding wages and vacation pay. You will not be entitled to any further payments, except as may be required by the ESL. For the purposes of this Agreement, “Cause” shall mean any conduct by you which would disentitle you to notice of termination or pay in lieu of notice under your applicable employment standards legislation.'
    ),
    $('<p/>').html(
        '<u>Resignation Notice</u><br>You agree not to resign, retire or otherwise terminate your employment with the Company without first giving the Company ' + employee.Term_Notice + ' days’ prior written notice of the effective date of your last day of employment (the “resignation notice period”).  The Company may, in its sole discretion, waive all or part of your notice of resignation, in which case your resignation will become effective immediately or on the date designated by the Company.  Upon resignation, you will be paid only the following amounts accrued to the end of the resignation notice period: outstanding wages and vacation pay. You will not be entitled to any further payments, except as expressly required under your applicable employment standards legislation.'
    ),
    $('<p/>').html(
        '<u>External Activities</u><br>During the term of your employment with the Company, you will devote the whole of your time and attention to the business. Unless you obtain the Company\'s written consent, you will not engage in any other business or occupation or become a director, manager or agent of any other corporation, association, partnership or sole proprietorship.'
        ),


    $('<p/>').html(
        '<u>Outside Business Activity (OBA) Disclosure</u><br>All OBAs must be disclosed prior to your employment at with the Company. The purpose of the disclosure is to avoid any perceived conflict of interest situation. Certain OBAs are prohibited based on your employment at UBS Bank (Canada); For Registered Individuals, it is essential to ensure that an OBA does not impair or impede the performance of their regulatory obligations, including compliance with the conflicts of interest provisions under National NI 31-103 Registration Requirements and NI 33-109.'
        ),
    $('<p/>').append(
        'Examples of outside business activities include, but are not limited to, the following:',
        $('<ul class="single-spacing"/>').append(
            $('<li/>').append(
                'Being engaged in any business activities other than those on behalf of the Company;'
                ),
            $('<li/>').append(
                'Serving as a trustee, executor, guardian, conservator, administrator or other fiduciary position for non-family-related persons. '
                ),
            $('<li/>').append(
                'Serving as an expert witness;'
                ),
            $('<li/>').append(
                'Lecturing or teaching engagements that are investment/finance industry-related'
                ),
            $('<li/>').append(
                'Lecturing or teaching engagements on all topics that are paid. '
                ),
            $('<li/>').append(
                'Authoring books or articles or other forms of public communication.'
                )
            )
        ),
    $('<p/>').append(
        'Prohibited External Positions: During your employment with the Company, you  are prohibited from accepting External Positions with the following types of Organizations',
        $('<ul class="single-spacing"/>').append(
            $('<li/>').append(
                'Listed or publicly owned, publicly traded companies; '
                ),
            $('<li/>').append(
                'Organizations for which the employee has client relationship responsibilities, client coverage responsibilities or other responsibilities on behalf of the Company, or has responsibilities as a supplier or provider of goods or services to the Company;  '
                ),
            $('<li/>').append(
                'Other Organizations which are competitors or are in business in any way involving securities or other financial services; '
                ),
            $('<li/>').append(
                'For-profit Organizations where the employee will serve as Chair of an Audit, Compensation, Governance or Control Committee; and '
                ),
            $('<li/>').append(
                'Not-for-profit Organizations where the employee will serve as the Chair of an Audit, Compensation, Governance or Control Committee at a national or international level. '
                ),
            $('<li/>').append(
                'There may be additional restrictions on registered individuals to ensure compliance with  conflicts of interest provisions under National NI 31-103 Registration Requirements and NI 33-109.'
                )
            )
        ),
    $('<p/>').html(
        'For Registered Individuals, it is essential to ensure that an OBA does not impair or impede the performance of their regulatory obligations, including compliance with the conflicts of interest provisions under IIROC Rule 42 Conflicts of Interest as well as National NI 31-103 Registration Requirements and NI 33-109.'
    ),
    $('<p/>').html(
        '<u>No conflicting obligations </u><br>You represent and warrant to the Company that you are not under an obligation to any other person that would interfere or conflict with you providing the services and assuming the responsibilities contemplated by the Agreement. '
    ),
    $('<p/>').html(
        '<u>Ability to Work</u><br>You represent and warrant to the Company that you are free to accept employment with the Company and enter this Agreement, and that you are not subject to any obligation or restriction (statutory, contractual, at civil law or at common law) which would prevent or interfere with the performance of all of your responsibilities contemplated by this Agreement. You acknowledge and agree that this Agreement and your employment with the Company is conditional on you having and maintaining the lawful right to work for the Company in Canada.'
    ),
    $('<p/>').html(
        '<u>Background Checks</u><br>Both UBS and [you] or [the Employee] agree that commencement of [your] or [the Employee’s] employment with UBS is conditioned upon [you] successfully completing the pre-employment screening process to the satisfaction of UBS.  In circumstances where the pre-employment screening process has not been completed and/or is unlikely to be completed by the expected start date, UBS reserves the right to delay [your] or [the Employee’s] employment start date until such date as the pre-employment screening process has been completed to the satisfaction of UBS including, but not limited to, verification of the information provided in [your] or [the Employee’s] on-line questionnaire and completion of any applicable checks. [You] or [the Employee] will not be entitled to any compensation or damages in case of a delayed start date. In circumstances where [you] or [the Employee] fail/s to pass the pre-employment screening process to the satisfaction of UBS, UBS reserves the right to withdraw the offer of employment if {you} do not successfully complete the pre-employment screening process.'
        ),
    $('<p/>').html(
        '<u>Consent to Data Storage and Processing </u><br>The Company collects, uses and/or discloses your personal information for the purpose of managing and administering the employment relationship you are entering with the Company, as more fully described in the Privacy Policy contained in the Employee Handbook. You acknowledge that the Company operates worldwide through branches, business groups, affiliates and subsidiaries and that therefore the personnel data forms or employment records (which may include sensitive personal data) may be maintained and shared (1) with such branches, business groups, affiliates and subsidiaries throughout the world; (2) with any third party performing functions, worldwide, on behalf of the Company; and/or (3) as required by law. You hereby consent to such collection, transfer, holding and processing of data to ensure the implementation of employment contracts or career management. The Company will hold and process your personal information in compliance with all applicable privacy laws, regulations and internal Company policies and standards. '
        ),
    $('<p/>').html(
        '<u>Confidentiality of this Offer Letter</u><br>You agree to keep secret and strictly confidential the terms of this offer letter, and further agree not to disclose them to any person or entity except as required by law or legal process and except for disclosure to your lawyers, accountants, and immediate family.'
        ),
    $('<p/>').html(
        '<u>Changes</u><br>Unless specifically amended in writing and signed by the parties, the terms of your employment as set out in this letter will continue to apply notwithstanding any changes in your position, compensation, duties, reporting or other terms of employment.'
        ),
    $('<p/>').html(
        '<u>Compliance with applicable Employment Standards</u><br>This Agreement is expressly subject to the provisions of your applicable employment standards legislation.  In the event your applicable employment standards legislation provides a greater right or benefit than any of the terms herein, then the provisions of your applicable employment standards legislation will apply in lieu of your entitlements herein, to the extent required.'
        ),
    $('<p/>').html(
        '<u>Governing Law Captions</u><br>This offer letter shall be governed by and construed in accordance with the laws of the work location as listed above and of Canada, without reference to principles of conflict of laws. The captions or headings of this agreement are not part of the provisions hereof and shall have no force or effect.'
        ),
    $('<p/>').html(
        '<u>Severability</u><br>In the event that any provision of this offer letter shall be determined to be invalid or unenforceable, in whole or in part, the remaining provisions of this offer letter shall be unaffected thereby and shall remain in full force and effect to the fullest extent permitted by law.'
        ),
    $('<p/>').html(
        '<u>Entire Agreement</u><br>This agreement, together with the plans, policies and documents referred to herein, constitutes and expresses the entire agreement between the parties with respect to all matters relating to your employment. All promises, representations, collateral agreements, negotiations and understandings which are not incorporated herein are superseded and cancelled. This agreement may be amended only in writing signed by the parties.'
        ),
    $('<p/>').html(
        '<u>Expiration of Offer</u><br>This offer shall remain open for Offer Expiration business days after the date you receive this letter, at which time it will expire and become null and void if it has not yet been accepted.'
        ),
    $('<p/>').html(
        'We look forward to your acceptance of our offer and to you becoming a member of the UBS team in Canada. Please contact the HR Advisory team on +1 201 352 1219 should you have any questions.'
        ),
    $('<p/>').html(
        'Legal Entity is committed to providing equal employment opportunity to all applicants and employees.  This applies to everything we do – hire, evaluate, promote, compensate, train and terminate. Legal Entity will reasonably accommodate employees with disabilities who need adjustments to perform their role with the firm.  To initiate a request for an accommodation contact HR Employee Advisory by <strong>email</strong> <a href="mailto:sh-hr-asc-ame@ubs.com">hr-service-now@ubs.com</a> or <strong>phone</strong> +1 201 352 1219.'
        ),
    $('<p/>').html(
        'Sincerely,'
        ),
    $('<p/>').html(
        '<strong>' + employee.Legal_Entity + '</strong>'
        )
);

$("#markup2").html("").append(
    $('<div class="col-xs-6 text-center"/>').append(
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                $('<span/>').html('Sabrina Erraki<br>'),
                $('<span/>').html('HR Generalist AME SMC<br>'),
                $('<span/>').html('UBS Canada<br>')
                )
            )
        )
    ); 

$("#markup3").html("").append(
    $('<div class="col-xs-6 text-center"/>').append(
        $('<div class="offerClause3"/>').append(
            $('<p/>').append(
                $('<span/>').html('Carleen Cunio<br>'),
                $('<span/>').html('Head of Delivery Team<br>'),
                $('<span/>').html('Americas SMC<br>')
                ),      
            $('<p/>')
            )
        )
    );

$("#markup4").html("").append(
    $('<div class="offerClause4"/>').append(
     $('<p/>').html(
        '<br><br><strong>ACCEPTANCE</strong>'
        ),
     $('<p/>').html(
        'I have read, considered and understood and I hereby accept the terms and conditions set out in this letter. I acknowledge having been given an opportunity to obtain independent legal advice with respect to the terms and conditions herein, and I execute this Agreement freely and voluntarily with full understanding of its contents.  This Agreement and my employment hereunder have not been induced by any representations of the Company which are not contained herein.<br><br>&nbsp;'
        )
     )
    );

$("#markup5").html("").append(
    (employee.Canada_Offer_Text_2 == '') &&
    $('<div class="offerClause5"/>').append(
        $('<p class="text-center"/>').html(
            '<br><br><strong>Agreement Regarding Confidentiality, Non-Solicitation and Intellectual Property</strong><br>'
            ),
        $('<p/>').html(
            'This Agreement regarding Confidentiality, Non-Solicitation, and Intellectual Property (“the Agreement”) is signed by me, ' + employee.First_Name + ' ' + (employee.Middle_Name ? employee.Middle_Name + ' ': '') + employee.Last_Name + ', as a condition and in consideration of my employment by ' + employee.Legal_Entity + ', its affiliates, successors or assigns (collectively “UBS”).'
            ),
        $('<p/>').html(
            '<u>Confidential Information; Non-Disclosure </u><br>I acknowledge that during the course of my employment with ' + employee.Legal_Entity + ', I may be given or have access to information relating to the private business and affairs of UBS and to certain confidential information and trade secrets of UBS and its affiliates, including, but not limited to information of UBS AG or the Company, which is not available to the public (collectively referred to as ‘Confidential Information’).'
            ),
        $('<p/>').html(
            'Confidential information can include, but is not limited to, private information regarding: customers, employees, contractors, strategies, methods, books, records, and documents; technical information concerning products, equipment, services, and processes; procurement procedures and pricing techniques; the names of and other information concerning the customers, investors, and business affiliates (such as contact name, service provided, pricing for that customer, type and amount of services used, credit and financial data, and/or other information relating to UBS’s relationship with that customer); pricing strategies and price curves; positions; plans and strategies for expansion or acquisitions; budgets; customer lists; research; financial and sales data; trading methodologies and terms, evaluations, opinions and interpretations of information and data; marketing and merchandising techniques; prospective customer’s names and marks; grids and maps; electronic databases; models; specifications; computer programs; internal business records; contracts benefiting or obligating UBS; bids or proposals submitted to any third party; technologies and methods; training methods and training processes; organizational structure; personnel information, including payment amounts or rates paid to consultants or other service providers; and other such confidential or proprietary information which is not generally available to the public.'
            ),
        $('<p/>').html(
            'I further acknowledge that it is essential to the business of UBS and to their respective customers and suppliers that the Confidential Information be kept strictly confidential and be treated as proprietary information of UBS.'
            ),
        $('<p/>').html(
            'In consideration of my employment and continued employment with the Company and the payment of the salary or other compensation that I shall receive during my employment with the Company, I agree to keep all Confidential Information strictly confidential, and I shall not either during the continuance of my employment or at any time thereafter unless required by law or unless properly authorized by a director or officer of UBS.'
            ),
        $('<ol/>').html("<p>a. disclose any Confidential Information to any person or other legal entity for any purpose or under any circumstances whatsoever&#59; or<br>b. use for my own purpose or for any purpose whatsoever, other than those of UBS any of the Confidential Information.</p>"),
        $('<p/>').html(
            'I further acknowledge that, to the extent I was previously employed, I have an obligation to my previous employer to refrain from disclosing to UBS my previous employer\'s confidential or trade secret information, and I hereby agree not to do so. '
        ),
        $('<p/>').html(
            '<u>Non-Solicitation </u><br>I agree that during my employment, and for a period of ' + (employee.Employee_Type == "Fixed Term" ? "six (6)" : "twelve (12)") + ' months from the termination date of my employment, I will not, directly or indirectly, for myself or for any third party, solicit, influence, induce, recruit or cause any employee of UBS AG, its subsidiaries or affiliates (hereafter referred to in this section collectively as &apos;UBS&apos;) to terminate his or her employment with UBS for the purpose of joining, associating or becoming employed with any business wherever located or which I am or anticipate becoming an employee, owner, partner, investor, member, agent, director, consultant, independent contractor or otherwise associated in any way whatsoever.'
            ),
        $('<p/>').html(
            'I agree that during my employment, and for a period of ' + (employee.Employee_Type == "Fixed Term" ? "six (6)" : "twelve (12)") + ' months after my employment is terminated, I will not directly or indirectly solicit or interfere with any of the UBS clients or client relationships for whom UBS either performed or actively solicited work from during the  ' + (employee.Employee_Type == "Fixed Term" ? "six (6)" : "twelve (12)") + ' months prior to the termination of my employment.'
            ),
        $('<p/>').html(
            'I agree that during my employment, and for a period of  ' + (employee.Employee_Type != "Fixed Term" ? "twelve (12)" : "six (6)") + ' months after my employment is terminated, I will not directly or indirectly solicit or interfere with any of the UBS clients or client relationships for whom UBS either performed or actively solicited work from during the ' + (employee.Employee_Type != "Fixed Term" ? "twelve (12)" : "six (6)") + ' months prior to the termination of my employment. <br>' +
                'I acknowledge and agree that UBS is international and includes offices throughout the United States, Canada, Europe, Latin America, Australia and Asia. I therefore acknowledge and agree that the foregoing provisions are not overly broad, and that they are reasonable and fair. <br>' +
                'I understand that the terms of this section are material to UBS and, therefore, if a court or arbitration panel of competent jurisdiction rules that I have breached the terms of this section, I agree that damages in the event of breach of this section would not be possible to ascertain. Therefore, I further agree that in addition to and without limiting any other remedy or right UBS may have, it shall have a right to an injunction or other equitable relief enjoining any such breach or prospective breach. The existence of this right shall not preclude any other rights and remedies at law or in equity. UBS shall not be required to post any bond in connection with the foregoing. <br>' +
                'In the event that any provision of this Agreement becomes or is declared by a court of competent jurisdiction to be invalid, illegal, unenforceable or void, this Agreement shall continue in full force and effect without said provision.  Such a holding will not invalidate or render unenforceable any other provision of this Agreement and all such provisions shall continue to be of full force and effect.           <br>' +
                'The restrictions contained in this section are necessary for the protection of the business and goodwill of UBS and I consider them to be reasonable for this purpose. '
            ),
        $('<p/>').html(
            '<u>Intellectual Property</u><br>I acknowledge that UBS is the rightful owner of any programs, ideas, inventions, discoveries, works of authorship, confidential information, patented or copyrighted material, or trademarks (collectively “intellectual property”) that I may have originated or developed, or assisted in originating or developing, during my period of employment with the Company, where any such origination or development involved the use of the time or resources of UBS or any of its affiliates, the exercise of my responsibilities for or on behalf of UBS, or the performance of activities by me otherwise intended to benefit UBS and its affiliates, and I hereby assign all right, title and interest to such Intellectual Property to UBS. I will, at all times, both before and after termination of employment, cooperate with UBS or its affiliates upon reasonable request in executing and delivering documents requested by UBS or its affiliates, and taking any other actions that are necessary or requested by UBS or its affiliates to assist UBS and its affiliates in patenting, registering, enforcing or otherwise protecting any programs, ideas, inventions, discoveries, works of authorship, Confidential Information, patented or copyrighted material, or trademarks, and to vest title thereto in UBS or its affiliates. My obligations under this paragraph shall remain in effect during my employment with UBS or any of its affiliates and survive the termination thereof and be fully enforceable thereafter in accordance with the terms of this Agreement.'
            ),
        $('<p/>').html(
            'I agree to disclose to UBS promptly, fully, and in writing all inventions, original works of authorship, discoveries, applications, proposals, methods, software programs, processes, documentation, or work product in any medium now or hereafter known or created or developed in whole or in part by me during my employment at UBS. '
            ),
        $('<p/>').html(
            'To the extent I developed, created or conceived any inventions, original works of authorship, developments, improvements and/or trade secrets prior to being employed by UBS, that belonged to me prior to my employment at UBS, relate in any way to the business of UBS, and that are not assigned to UBS (collectively referred to as \'Prior Inventions\'), I agree to disclose the same to UBS by attaching a listing of such Prior Inventions to this Agreement; or if no such list is attached, I hereby represent that there are no such Prior Inventions. I agree that I shall not use any Prior Inventions while employed at UBS for any purpose, without first obtaining the consent of UBS in writing. Without limiting the rights of UBS, should I breach this obligation, UBS is hereby granted a nonexclusive, royalty-free, irrevocable, perpetual, worldwide license to any Prior Invention that I used while at employed at UBS without obtaining the prior written consent of UBS Group. '
            ),
        $('<p/>').html(
            '<strong>In Witness Whereof</strong>, I have signed this Agreement on this ' + fnConvertDate(employee.Today) + '.'
            )
        )
);
$("#markup6").html("").append(
    $('<div class="offerClause6"/>').append(
        ((employee.Division).toUpperCase() == 'WEALTH MANAGEMENT' && (employee.SMC_Client_Advisor_Position).toUpperCase() == 'Y') &&
        $('<div/>').append(
            $('<p/>').html(
                '<br><br><strong>APPENDIX A: CLIENT ADVISOR INCENTIVE COMPENSATION PLAN OVERVIEW</strong><br>'
                ),
            $('<p/>').html(
                'This is an overview of the Client Advisor Compensation Plan (the "Plan"). In the event of any inconsistency between this overview and the Plan, the terms of the Plan shall prevail.'
                ),
            $('<p/>').html(
                'In addition to an annual Base Salary, Client Advisors ("CA&apos;s") may be eligible for a year-end bonus. Subject to the provisions of the Client Advisor Compensation Plan (“the Plan”), any year-end bonus is calculated using three components: <strong>Revenue</strong> and <strong>Net New Money (“<u>NNM</u>”)</strong> (both of which are determined according to the guidelines set forth below, respectively, under “Revenue Component” and “Net New Money Component”), and the employees’ annual <strong>Performance Measurement & Management ("<u>PMM</u>") Rating.</strong>'
                ),
            $('<p/>').html(
                'Any year-end bonus is also a reward for continued employment and is, therefore, expressly conditioned upon the CA’s continued employment with the Bank as a CA through the date the year-end bonus is generally paid to CAs (“Incentive Compensation Payment Date”). No portion of the year-end bonus is earned unless the CA is actively employed as a CA with the Bank on the Incentive Compensation Payment Date. CAs will not be considered “employed” if he/she or the Bank has given notice of termination of employment to the other prior to the Incentive Compensation Payment Date. For greater certainty, should a CA cease to be employed at any time prior to the Incentive Compensation Payment Date (regardless of the reason for termination), such CA will not be entitled to any year-end incentive compensation/bonus for that year (pro rata or otherwise), nor shall such CA be entitled to any damages in respect of the loss thereof.'
                ),
            $('<p/>').html(
                'The Firm, in its sole and absolute discretion, may increase or decrease the year-end bonus range based upon factors, including but not limited to, the performance of the Firm, the performance of the UBS Wealth Management Americas Division, the overall performance of UBS AG, competitive market conditions, the regulatory environment and the CA’s personal performance including compliance with Firm rules, standards and policies and the rules and regulations of applicable regulators.'
                ),
            $('<p/>').append(
                '<strong>Revenue Component</strong>. The revenue component of the year-end bonus will be based upon the revenue generated by Assets Under Management (“AUM”) and such other revenues as determined in the sole and absolute discretion of the Bank’s senior management during each calendar year (“Qualified Revenue”). The CA Tier is based upon the table shown below: '
                ),
            $('<p/>').append(
                'Year-End Revenue: 7.00m+, Payout Percentage: 24% <br>',
                'Year-End Revenue: 5.00m – 6.99m, Payout Percentage: 20% <br>',
                'Year-End Revenue: 3.00m – 4.99m, Payout Percentage: 18% <br>',
                'Year-End Revenue: 1.75m – 6.99m, Payout Percentage: 14% <br>',
                'Year-End Revenue: 1.00m – 1.74m, Payout Percentage: 8% <br>',
                'Year-End Revenue: 750k – 999k, Payout Percentage: 6% <br>',
                'Year-End Revenue: 501k – 749k, Payout Percentage: 5% <br>',
                'Year-End Revenue: 0 – 500k, Payout Percentage: 4% <br>',
                '<small>*Percentage payout is based on a graduated scale and not an absolute payout percentage.</small>'
            ),
            $('<p/>').append(
                '<strong><small>Net New Asset Award Component.</small></strong><br>The Net New Asset (NNA) Award Component is calculated by applying the award percentage to the eligible Net New Asset as an additional payment on Revenue as follows: '
            ),
            $('<p/>').append(
                'Net New Asset: 50.00m+, Revenue Payout Percentage: 5% <br>',
                'Net New Asset: 30.00m – 49.99m, Revenue Payout Percentage: 4.5% <br>',
                'Net New Asset: 20.00m – 29.99m, Revenue Payout Percentage: 4.0% <br>',
                'Net New Asset: 10.00m – 19.99.m, Revenue Payout Percentage: 3.5% <br>',
                'Net New Asset: 5.00m – 9.99m, Revenue Payout Percentage: 3.0% <br>',
                'Net New Asset: 1.00m – 4.99m, Revenue Payout Percentage: 1% <br>',
                'Net New Asset: 0 – 999k, Revenue Payout Percentage: 0.0% <br>',
                '<small>*$250k cap on Net New Asset Award.</small>'
            ),
            $('<p/>').append(
                'NNA is defined as the value of securities and/or cash received into new and existing accounts ("assets") brought to UBS Bank (Canada) by a CA, offset by the value of securities and/or cash leaving these accounts to non-affiliates, during the calendar year. Assets must be new to UBS Bank (Canada) and held there as of December 31 of the calendar year to constitute NNA. The determination of NNA and whether a CA brought assets to UBS Bank (Canada), including the right to exclude certain assets if it is so decided, is determined by the Firm in its sole discretion.  '
                ),
            $('<p/>').append(
                '<strong>Form of Discretionary Year-End Incentive Award</strong><br>The payment, form and amount of a discretionary year-end bonus (if any), is determined in the sole and absolute discretion of the Firm. Any discretionary year-end bonus may therefore be awarded in cash and/or in deferred instruments (which may include, without limitation, restricted shares, notional shares, conditional future payments, deferred cash, notional debt instruments and/or other instruments), which are subject to certain vesting and/or forfeiture conditions, which may be linked to and conditioned upon a variety of factors including, without limitation, individual and Firm performance factors and will be subject to the terms and conditions of any such incentive award plan as the Firm may implement, from time to time, as determined in the sole and absolute discretion of the Firm.   '
                ),
            $('<p/>').append(
                '<strong>Loyalty Award</strong>. <br>In order to incentivize loyalty to the Firm, qualified CAs may be eligible for an annual incentive based on length of service. The incentive structure follows the below chart:'
                ),
            $('<p/>').append(
                'Length of Service: 50.00m+, Revenue Payout Percentage: 5% <br>',
                'Length of Service: 30.00m – 49.99m, Revenue Payout Percentage: 4.5% <br>',
                'Length of Service: 20.00m – 29.99m, Revenue Payout Percentage: 4.0% <br>',
                'Length of Service: 10.00m – 19.99.m, Revenue Payout Percentage: 3.5% <br>',
                'Length of Service: 5.00m – 9.99m, Revenue Payout Percentage: 3.0% <br>',
                'Length of Service: 1.00m – 4.99m, Revenue Payout Percentage: 1% <br>',
                'Length of Service: 0 – 999k, Revenue Payout Percentage: 0.0% <br>',
                '<small>*$250k cap on Net New Asset Award.</small>'
            ),
            $('<p/>').append(
                'To qualify for the Loyalty Award, a CA must maintain or increase year-on-year revenue growth when comparing the current and prior calendar year. Therefore, a Loyalty Award received in early 2022 would be determined based on 2021 as compared to 2020 revenue. Please note that this measurement recalculates annually. '
                ),
            $('<p/>').append(
                'Length of service is determined by an individual\'s length of service as a Client Advisor'
                )
        )
    )
);
$("#markup7").html("").append(
    $('<div class="offerClause7"/>').append(
     $('<p/>').html(
        //fnAddressViaLegalEntity2(employee.Legal_Entity)
        )
     )
    );
}



function fnAddressViaLegalEntity2(LegalEntity) {
    var AddressURL = "";
    if (LegalEntity == "UBS Bank (Canada) " ){
        AddressURL = "<strong>UBS Bank (Canada)</strong><br><span>154 University Avenue Suite 800<br>Toronto, ON<br>M5J 2S1<br>Tel. +1-416-343-1800<br>Tel. +1-800-268-3709<br>Fax. +1-416-363-1900<br>www.ubs.com</span>"
    }
    else if (LegalEntity == "UBS Securities Canada Inc" ){
        AddressURL = "<strong>UBS Securities Canada Inc</strong><br><span>Canada Trust Tower Brookfield Place<br>161 Bay Street Suite 4100 Box 617<br>Toronto, ON<br>M5J 2S1<br>Tel. +1-416-364-3293<br>Fax +1-416-364-1976<br>www.ubs.com</span>"
    }
    else if (LegalEntity == "UBS Asset Management (Canada) Inc." ){
        AddressURL = "<strong>UBS Asset Management (Canada) Inc.</strong><br><span>Canada Trust Tower Brookfield Place<br>161 Bay Street Suite 4100 Box 618<br>Toronto, ON<br>M5J 2S1<br>Tel. +1-416-681 5200<br>Fax +1-416-681 5240<br>www.ubs.com</span>"
    }    
    else{
        AddressURL = "<strong>" + LegalEntity + "</strong><br>"
    }
    return AddressURL;
}

function fnConvertDate(eventDate) {

    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    var year = d.getFullYear(),
    month = d.getMonth(),
    n_date = d.getDate(),
    day = d.getDay();

    return parseInt(n_date) + ' ' + months[month] + ' ' + year;

}

function fnConvertDateCustom(eventDate) {

    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    var year = d.getFullYear(),
    month = d.getMonth(),
    n_date = d.getDate(),
    day = d.getDay();

    return getGetOrdinal(parseInt(n_date)) + ' day of  ' + months[month] + ',  ' + year;

}

function getGetOrdinal(n) {

    var s=["th","st","nd","rd"],
    v=n%100;
    return n+(s[(v-20)%10]||s[v]||s[0]);

}


function fnConvertFullDate(eventDate) {

    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var year = d.getFullYear(),
    month = d.getMonth(),
    n_date = d.getDate(),
    day = d.getDay();

    return days[parseInt(day)] + ', ' + months[month] + ' ' + parseInt(n_date) + ', ' + year;

}

function fnConvertFullDateViaTZone(eventDate) {

    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var localoffset = -(d.getTimezoneOffset()/60);
    var destoffset = +4; 
    var offset = destoffset-localoffset;
    var e = new Date( new Date(eventDate).getTime() + offset * 3600 * 1000)

    var year = e.getFullYear(),
    month = e.getMonth(),
    n_date = e.getDate(),
    day = e.getDay();

    return days[parseInt(day)] + ', ' + months[month] + ' ' + parseInt(n_date) + ', ' + year;

}


function fnTime_And_Half(amount, rate) {
    amount = (amount.indexOf(',') != -1) ? amount.split(',').join('') : amount;
    var total = (parseFloat(amount) + parseFloat((parseFloat(amount) * rate)));
    return formatCurrency(total);
}

function returnDate() {
    var dt = new Date();
    var mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dys = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var rdt = dt.setDate(dt.getDate() + 3);
    var drt = new Date(rdt);
    var mm = drt.getMonth(),
    dd = drt.getDate(),
    yyyy = drt.getFullYear();
    day = drt.getDay();

    return dys[parseInt(day)] + ', ' + mon[mm] + ' ' + parseInt(dd) + ', ' + yyyy;
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

    var name = fnGetName(employee.First_Name, employee.Middle_Name, employee.Last_Name);
    _fnAssignValue('Full_Name', name);


// render template
fnView();


// completed letter
if (!$("input.calendar_button").length) {
    $("#ButtonSaveAndComplete").remove();
    $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");



//Create an array of info to pass to complete the offer letter
//0 for images sending an image tag, 1 for sections of text sneding the ID of the field that holds the HTML.
var arrParts = [
[1,'hidden_pg']
];
var arrParts2 = [
[1,'hidden_pg2']
];
var arrParts3 = [
[1,'hidden_pg3']
];
var arrParts4 = [
[1,'hidden_pg4']
];
var arrParts5 = [
[1,'hidden_pg5']
];
var arrParts6 = [
[1,'hidden_pg6']
];
var arrParts7 = [
[1,'hidden_pg7']
];
}
});
