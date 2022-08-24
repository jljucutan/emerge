/**
 * SERVICES-35312 | jjucutan | Paypal - Modify Canada Employment Agreement
 */
function fnView() {
    "use strict";

    $("#markup").html("").append(
        // OfferClause 1
        // Header
        $('<div class="offerClause">').append(
            $('<p class="center"/>').html(
                '<strong>EMPLOYMENT AGREEMENT</strong>'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p class="center"/>').html(
                'B E T W E E N:'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p class="center"/>').append(
                $('<span/>').html('<strong>PayPal Canada Co.</strong><br>'),
                $('<span/>').html('<i>(the “Employer”)</i>')
            )
        ),
        $('<div class="offerClause">').append(
            $('<p class="center"/>').html(
                '– and –'
            )
        ),
         $('<div class="offerClause">').append(
            $('<p class="center"/>').append(
                $('<span/>').html('<strong>'+ '<mark>' +employee.Full_Legal_Name +'</mark>' + '</strong><br>'),
                $('<span/>').html('<i>(the “Employee”)</i>')
            )
        ),
        // Paragraph 1
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                '<strong>WHEREAS</strong> the Employer and the Employee wish to enter into an agreement pursuant to which the Employee will provide the Employee’s services to the Employer as hereinafter set forth, and the Employer will employ and retain the services of the Employee as an employee of the Employer.'
            )
        ),
        // Paragraph 2
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                '<strong>NOW THEREFORE</strong> in consideration of the mutual covenants and agreements hereinafter contained, the parties hereto hereby mutually covenant and agree as follows:'
            )
        ),
        // Paragraph 3
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header"/>').html(
                '<strong>EMPLOYMENT</strong>'
            )
        ),
        // Paragraph 4
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'Subject to the conditions set out in paragraph 1(b) below, the Employee is being offered employment on a full-time basis as <mark>' + employee.Job_Title +'</mark> subject to the Employer’s right to change the Employee’s assignments, duties and reporting relationships provided that with respect to any material change the Employer shall give to the Employee such written notice of said material change/changes as would be required in the event that the Employer were providing written notice of termination of employment in accordance with the minimum requirements under the Province of <mark>' + (employee.Location == 'Toronto'?'Ontario’s':'') + (employee.Location == 'Vancouver'?'British Columbia’s':'') + ' </mark>Employment Standards Act, as amended from time to time (“Employment Standards”).'
            )
        ),
        // Paragraph 5
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employee acknowledges and agrees the employment with the Employer is conditional upon the following:'
            )
        ),
        // Paragraph 6
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-2"/>').html(
                'That the Employer receives acceptable results to background and reference checks, which will be conducted to the maximum extent permitted by law, bearing in mind the nature of the position being offered to the Employee. The Employee agrees to execute the necessary consent forms (to be provided by the Employer) which shall permit the Employer to complete the background and reference checks. The Employee understands and accepts that if, prior to the Employee’s Start Date (defined below), the Employer has not obtained results acceptable to the Employer, then the offer of employment will be cancelled automatically (and if the Employee has already started work, then the Employee’s employment will end), without any right to notice, compensation or continuation of benefits on the part of the Employee, unless otherwise strictly required pursuant to the minimum entitlements prescribed by Employment Standards;'
            )
        ),
        // Paragraph 7
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-2"/>').html(
                'That the Employer receives a signed and dated copy of this Employment Agreement prior the Employee’s Start Date; and'
            )
        ),
        // Paragraph 8
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-2"/>').html(
                'That the Employee is legally entitled to work in Canada.'
            )
        ),
        // Paragraph 9
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employee is employed on a full-time basis for the Employer and it is understood that the hours of work involved will vary and may be irregular. The Employee acknowledges that this clause constitutes an agreement to work such hours.'
            )
        ),
        // Paragraph 10
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employee acknowledges and hereby agrees to carry out all lawful instructions given to the Employee by the Employer.'
            )
        ),
        // Paragraph 11
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employee acknowledges and hereby agrees to observe all policies of the Employer as the Employer may in its absolute discretion create from time to time and to perform all services associated with the position herein.'
            )
        ),
        // Paragraph 12
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employee acknowledges and agrees that during the course of this Agreement, the Employee shall devote the Employee’s full-time and skill to the duties and responsibilities contemplated herein and shall not be engaged in any other employment in any other capacity or any other activity that interferes with the provision of the services contemplated herein or that is for the benefit of any person, corporation or enterprise whose business interests are either competitive or in conflict with those of the Employer.'
            )
        ),
        // Paragraph 13
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header"/>').html(
                '<strong>EMPLOYMENT TERM</strong>'
            )
        ),
        // Paragraph 14
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'Subject to being terminated pursuant to the provisions of paragraph 5 hereof, the term of this Agreement shall be indefinite commencing on <mark>' + fnConvertFullDate2(employee.Start_Date) + ' </mark>(“Start Date”).'
            )
        ),
        // Paragraph 15
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header"/>').html(
                '<strong>COMPENSATION AND BENEFITS</strong>'
            )
        ),
        // Paragraph 16
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header text-indent-1"/>').html(
                '<strong>Base Salary</strong>'
            )
        ),
        // Paragraph 17
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employee shall receive a gross annual base salary in the amount of <mark>' + employee.Salary_Currency + '</mark><mark> ' + employee.Yearly_Salary + '</mark> (less applicable withholdings and statutory deductions) (“Base Salary”) payable in accordance with the Employer’s usual payroll schedule (currently, bi-weekly by direct deposit). The Employer shall periodically review the Employee’s Base Salary. Base Salary increases are not guaranteed and any increase is entirely in the Employer’s discretion. In the event of a reduction in Base Salary, the Employer may reduce the Employee’s Base Salary, upon providing the Employee with written notice of said reduction as would be required in the event that the Employer were providing written notice of termination of employment pursuant to the provisions of section 5(b) hereof, and such reduction shall not constitute a dismissal (constructive or otherwise) of the Employee.'
            )
        ),
        // Paragraph 18
        (employee.AIP == 'Yes') &&
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header text-indent-1"/>').html(
                '<strong>Incentive Compensation</strong>'
            )
        ),
        // Paragraph 19
        (employee.AIP == 'Yes') &&
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                    $('<mark/>').append( 
                'The Employee will be eligible to participate in the PayPal Annual Incentive Plan (“AIP”) with an annual discretionary bonus based on individual achievement as well as company performance. A copy of the current AIP is available upon request. The annual bonus performance period is from January 1 through December 31. The Employee’s target bonus for the AIP is '+ employee.AIP_Percentage + '% of the Employee’s eligible earnings (as defined in the AIP), pro-rated based on the eligible earnings paid while the Employee is employed in an AIP eligible position during the annual bonus performance period. There is no guarantee any AIP bonus will be paid, and any actual bonus will be determined after the end of the annual bonus performance period based on the Employee’s eligible earnings. Entitlement to and amount of any bonus, if any, is at the Employer’s sole and absolute discretion and subject to the terms and conditions of the AIP.'
            )
)
        ),
        // Paragraph 20
        (employee.AIP == 'Yes') &&
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                $('<mark/>').append(
                'To be eligible to receive any AIP bonus, the Employee must be actively employed on or before the first business day of the fourth quarter and the Employee must remain actively employed on the date the bonus is paid, otherwise the AIP bonus has not been earned. Therefore, if the Employee’s Termination Date (defined below) falls on a date prior to the bonus payout date, the Employee shall not be entitled to receive any bonus award and there shall be no pro rata portion of the bonus for any period of employment predating the bonus payout date. For greater certainty, even if the Employee remains actively employed for all or part of the annual bonus performance period but the Employee’s Termination Date falls on a date prior to the bonus payout date, the Employee shall not be entitled to any payment of bonus, in whole or in part, regardless of the Employee’s entitlement to notice pursuant to [common law/the civil code].'
            )
)
        ),
        // Paragraph 21
        (employee.AIP == 'Yes') &&
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
               $('<mark/>').append(
                'The AIP is a discretionary plan and the Employer reserves the right, in its sole and absolute discretion, to amend, change, reduce, cancel or discontinue the AIP at any time during the annual bonus performance period as the Employer considers necessary. Furthermore, the AIP in one plan year does not create a precedent for future plan years and the Employer reserves the right, in its sole and absolute discretion to amend, change, reduce, eliminate or discontinue the AIP in subsequent years. Any such change or elimination of the AIP shall not constitute a dismissal (constructive or otherwise) of the Employee, and the Employee shall have no entitlement to notice or compensation in lieu of notice of such change or elimination.'
            )
)
        ),
        // Paragraph 22
        (employee.Sales_Commission == 'Yes') &&
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header text-indent-1"/>').html(
                '<strong>Incentive Compensation</mark>'
            )
        ),
        // Paragraph 23
        (employee.Sales_Commission == 'Yes') &&
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                $('<mark/>').append(
                'The Employee will be eligible to participate in the Employer’s sales commission plan, as amended by the Employer from time to time. Commission earnings are not guaranteed. Potential commission earnings are conditional upon the achievement of quotas, as set by the Employer from time to time, and payout is always subject to the terms and conditions of the sales commission plan. Details of the sales commission plan will be established and provided to the Employee by the Employee’s manager in writing within 45 days after the Employee’s Start Date. Any quotas will be prorated based on the Employee’s Start Date.'
            )
)
        ),
        // Paragraph 24
        (employee.Sales_Commission == 'Yes') &&
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                  $('<mark/>').append(
                'If the Employee’s employment ends due to termination for cause, then the Employee forfeits any entitlement to receive any further commission whatsoever under the sales commission plan, even if it is deemed to have been earned or payable before the Termination Date. If the Employee’s employment ends for any reason other than termination for cause, then the Employee only remains eligible to receive commission earned during the period up to and including the Termination Date. Commission earnings (if any) will be calculated and paid at the usual time in accordance with the sales commission plan.'
            )
)
        ),
        // Paragraph 25
        (employee.Sales_Commission == 'Yes') &&
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                  $('<mark/>').append(
                'Participation in the sales commission plan is not guaranteed. In order to participate in the sales commission plan, the employee must sign an acknowledgement of the Employee’s agreement to the sales commission plan terms and objectives for the relevant fiscal period. Commission rates, quotas and other commission sales plan terms and conditions are reviewed and revised regularly. The Employer reserves the right, at any time and in its sole discretion, to amend, modify, suspend or discontinue the sales commission plan as the Employer considers necessary. Furthermore, the sales commission plan in one year does not does not create a precedent for future plan years and the Employer reserves the right, in its sole and absolute discretion to amend, change, reduce, eliminate or discontinue the commission plan in subsequent years. Any such change or elimination of the sales commission plan shall not constitute a dismissal (constructive or otherwise) of the Employee, and the Employee shall have no entitlement to notice or compensation in lieu of notice of such change or elimination.'
            )
)
        ),
        // Paragraph 26
        (employee.Signing_Bonus == 'Yes') &&
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header text-indent-1"/>').html(
                '<strong>Signing Bonus</strong>'
            )
        ),
        // Paragraph 27
        (employee.Signing_Bonus == 'Yes') &&
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                   $('<mark/>').append( 
                'The Employee will receive a one-time payment of $' + employee.Signing_Bonus_Amount + ' (gross amount before tax withholdings) as a signing bonus (“Signing Bonus”). This will be paid to the Employee within two pay periods following the Start Date. The Signing Bonus shall be considered a loan from the Employer to the Employee which loan will be forgivable over a one-year period on a pro rata basis at the rate of 1/12 per month of employment. In the event that the Employee resigns or the Employee’s employment is terminated for cause during the first year of employment, the balance of the loan shall be repayable by the Employee to the Employer. In this regard, the Employee hereby agrees and directs the Employer to set off and deduct the amount of any outstanding indebtedness in relation to the Signing Bonus loan owed by the Employee to the Employer against any amounts due to the Employee by the Employer for earnings or for any other compensation of any nature.'
            )
)
        ),
        // Paragraph 28
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header text-indent-1"/>').html(
                '<strong>Registered Retirement Savings Plan</strong>'
            )
        ),
        // Paragraph 29
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employee is eligible to participate in the Employer’s Registered Retirement Savings Plan matching program (“Group RRSP”). The Employer will match the Employee’s contributions to the Group RRSP up to a maximum of 4% of the Employee’s Base Salary, subject to compliance with the statutory maximum prescribed by law.'
            )
        ),
        // Paragraph 30
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header text-indent-1"/>').html(
                '<strong>Employee Stock Purchase Plan</strong>'
            )
        ),
        // Paragraph 31
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employee is eligible to participate in the Employer’s Employee Stock Purchase Plan (“ESPP”) in accordance with the terms and conditions of the governing ESPP documentation, as may be amended from time to time by the Employer, in its sole and absolute discretion.'
            )
        ),
        // Paragraph 32
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header text-indent-1"/>').html(
                '<strong>Expenses</strong>'
            )
        ),
        // Paragraph 33
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employee shall be entitled to reimbursement by the Employer for reasonably and properly incurred expenses by the Employee in connection with the Employee’s duties hereunder, provided that the Employee provides the Employer with proper vouchers and original receipts for all such expenses satisfactory to the Employer.'
            )
        ),
        // Paragraph 34
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header text-indent-1"/>').html(
                '<strong>Benefits</strong>'
            )
        ),
        // Paragraph 35
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employee is eligible to participate in such additional benefits as are enjoyed from time to time generally by employees in accordance with the established practices and policies of the Employer as the Employer may in its absolute discretion create from time to time. In this regard, the Employee acknowledges having received a copy of the benefit documentation in force as of the date hereof. The Employee acknowledges that except as set out in such documentation and as herein set out, there are no further benefits.'
            )
        ),
        // Paragraph 36
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'Any and all eligibility and entitlements with respect to any benefits, incentive compensation, Group RRSP entitlement, ESPP eligibility and participation or other non-salary compensation or benefit are subject to the terms and conditions set-out in the associated documentation and policies.'
            )
        ),
        // Paragraph 37
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header"/>').html(
                '<strong>PAID TIME OFF (PTO); SICK LEAVE</strong>'
            )
        ),
        // Paragraph 38
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header text-indent-1"/>').html(
                '<strong>Paid Time Off</strong>'
            )
        ),
        // Paragraph 39
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employer will provide the Employee with 16 days of total annual PTO entitlement, pro-rated for part years, which entitlement is inclusive of the Employee’s entitlement to vacation time and pay in accordance with Employment Standards. The Employee is required to take ten (10) days of PTO a year (pro-rated for part years) to satisfy the Employee’s vacation entitlement pursuant to Employment Standards.'
            )
        ),
        // Paragraph 40
        (employee.Location == 'Toronto') &&
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                  $('<mark/>').append( 
                'The Employer’s PTO Policy allows the Employee to accrue PTO at a rate of 4.92 hours per pay period (equivalent to 16 days/128 hours per year) and PTO days can be taken as they are earned. The Employee shall take PTO days in accordance with the Employer’s PTO Policy and shall be entitled to accrue unused PTO days from one year to the next up to an absolute maximum accrual of 1.75 times the Employee’s annual PTO accrual rate (“Maximum PTO Accrual”). Once the Employee reaches the applicable Maximum PTO Accrual, any additional unused PTO will be lost, and will not be paid, subject to compliance with Employment Standards. Should the balance of accrued PTO days fall below the Maximum PTO Accrual, the Employee will resume accrual of PTO days until the Employee reaches the Maximum PTO Accrual once again.'
            )
)
        ),
        // Paragraph 41
        (employee.Location == 'Vancouver') &&
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                    $('<mark/>').append( 
                'The Employer’s PTO Policy allows the Employee to accrue PTO at a rate of 4.92 hours per pay period (equivalent to 16 days/128 hours per year) and PTO days can be taken as they are earned. The Employee shall take PTO days in accordance with the Employer’s PTO Policy but must take the portion of PTO designated as vacation days within 10 months of the end of the year in which they are accrued. The Employee shall be entitled to carry forward the portion of unused PTO not designated as vacation days from one year to the next up to an absolute maximum accrual of 1.75 times the Employee’s annual PTO accrual rate (“Maximum PTO Accrual”). Once the Employee reaches the applicable Maximum PTO Accrual, any additional non-vacation PTO accrual will cease until the Employee uses some of the accrued PTO balance. Should the balance of accrued PTO days fall below the Maximum PTO Accrual, the Employee will resume accrual of PTO days until the Employee reaches the Maximum PTO Accrual once again. PTO designated as vacation days cannot be forfeited and must be taken by the Employee within the deadline set out above. Failing agreement on vacation dates, the Employer may impose vacation PTO dates.]'
            )
)
        ),
        // Paragraph 42
        (employee.Location == 'Vancouver') &&
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                   $('<mark/>').append( 
                'PTO days shall be scheduled in advance by agreement with the Employee’s immediate manager based on business needs and any other relevant circumstances. If the Employee fails to schedule sufficient PTO to satisfy the Employee’s Employment Standards vacation entitlement, the Employer shall unilaterally schedule the PTO so as to satisfy the entitlement.'
            )
)
        ),
        // Paragraph 43
        (employee.Exempt == 'E') &&
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header text-indent-1"/>').html(
                '<strong>Sick Leave Days</strong>'
            )
        ),
        // Paragraph 44
        (employee.Exempt == 'E') &&
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                $('<mark/>').append( 
                'Additionally, the Employer will provide the Employee with up to a maximum of 5 paid sick leave days each year, accrued monthly on a pro-rated basis. Unused sick leave cannot be carried forward and it will not be paid out under any circumstance, including on termination of employment for any reason whatsoever.'
            )
)
        ),
        // Paragraph 45
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header"/>').html(
                '<strong>TERMINATION</strong>'
            )
        ),
        // Paragraph 46
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'For the purposes of this Agreement, Termination Date means the later of the date designated by the Employer as the day on which the Employee’s period of employment ends for any reason whatsoever (regardless of any period of notice or compensation in lieu or severance to which the Employee may claim to be or be entitled under statute, contract or at common law) or, if applicable, the end of the minimum statutory notice period prescribed by Employment Standards. Notwithstanding anything herein contained to the contrary, this Agreement may be terminated in the following manner:'
            )
        ),
        // Paragraph 47
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header text-indent-1"/>').html(
                '<strong>Termination by the Employer with Cause</strong>'
            )
        ),
        // Paragraph 48
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'This Agreement and the employment of the Employee hereunder may be terminated immediately by the Employer at any time for cause. If this Agreement and the employment of the Employee hereunder is so terminated pursuant to this clause 5(a) the Employee shall receive any statutory benefits to which the Employee shall be entitled and shall continue to accrue and receive the Employee’s said annual Base Salary, benefits and accrued vacation through to the Termination Date, but not thereafter.'
            )
        ),
        // Paragraph 49
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header text-indent-1"/>').html(
                '<strong>Termination by the Employer without Cause</strong>'
            )
        ),
        // Paragraph 50
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'This Agreement and the employment of the Employee hereunder may be terminated at any time without cause, by providing the Employee with the following termination package (which amounts are inclusive of any notice and severance and benefit entitlements the Employee may have under Employment Standards, if any, and in all situations, all benefits will be continued for the minimum time period required by Employment Standards). The Employee will receive the greater of:'
            )
        ),
        // Paragraph 51
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-2"/>').html(
                '1 week’s notice, if the Employee has completed less than 90 days of employment, calculated as of the Employee’s Start Date;'
            )
        ),
        // Paragraph 52
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-2"/>').html(
                '2 weeks’ notice, if the Employee has completed at least 90 days but less than one full year of employment, calculated as of the Employee’s Start Date;'
            )
        ),
        // Paragraph 53
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-2"/>').html(
                '2 weeks’ notice, plus an additional 2 weeks’ notice for each full year of employment completed, calculated as of the Employee’s Start Date, pro-rated for part years, subject to an aggregate cap of 36 weeks’ notice; or,'
            )
        ),
        // Paragraph 54
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-2"/>').html(
                'The minimum notice and minimum severance pay (if any), together with any other statutorily prescribed payments or benefits to which the Employee is entitled under Employment Standards.'
            )
        ),
        // Paragraph 55
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employer may, at its sole option, provide all or part of the notice required in paragraph 5(b) by any combination of (i) advance written notice and/or (ii) pay in lieu of notice via a lump sum payment or salary continuance. However, unless the parties both agree otherwise, any statutory severance pay (if any) owing pursuant to Employment Standards will be paid in a lump sum, and the Employee will not be required to work that part of the above notice that represents the Employee’s entitlement to statutory severance pay (if applicable) pursuant to Employment Standards'
            )
        ),
        // Paragraph 56
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-2"/>').html(
                'Except as provided for in paragraph 3, or as otherwise strictly necessary to comply with minimum Employment Standards, any pay in lieu of notice (whether lump sum or salary continuance) and severance, provided in accordance with paragraph 5(c) will be calculated based on Base Salary only.'
            )
        ),
        // Paragraph 57
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-2"/>').html(
                'In the event of a termination without cause, no incentive compensation, Group RRSP entitlement, ESPP eligibility and participation or other non-salary compensation or benefit shall continue to vest, accrue or be payable beyond the Termination Date.'
            )
        ),
        // Paragraph 58
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-2"/>').html(
                'Any unused accrued PTO will be paid out, calculated to include accrual during the minimum statutory notice period, if any, prescribed by Employment Standards.'
            )
        ),
        // Paragraph 59
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-2"/>').html(
                'The Employee acknowledges that as a condition of receiving any portion of the termination package in paragraph 5(b) above that exceeds the minimum requirements under Employment Standards, the Employee shall be required to execute a comprehensive Release Agreement as drafted by counsel to the Employer within the period of time specified by the Employer.'
            )
        ),
        // Paragraph 60
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-2"/>').html(
                'The provisions set out above in this paragraph 5 are in satisfaction of and substitution for any and all statutory rights and common law rights, including without limitation, any right to reasonable notice of termination. To be clear, in no case will the total payments and entitlements provided to the Employee in respect of the termination of the Employee’s employment be less than the Employee’s minimum entitlements pursuant to Employment Standards. In the event that the Employee’s full entitlement under Employment Standards exceeds these contractual provisions, then those entitlements shall replace these provisions and no further entitlements or payments are due to the Employee pursuant to Employment Standards or at common law.'
            )
        ),
        // Paragraph 61
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-2"/>').html(
                'Where applicable, in the event the Employee is found by a Court of competent jurisdiction to have been constructively dismissed by the Employer, or that the Employer did not have cause to terminate the Employee’s employment as contemplated in paragraph 5(a), any entitlements of the Employee shall be limited to the provisions detailed in paragraphs 5(b) through (i) above.'
            )
        ),
        // Paragraph 62
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header text-indent-1"/>').html(
                '<strong>Termination by the Employee</strong>'
            )
        ),
        // Paragraph 63
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'This Agreement and the employment of the Employee hereunder may be terminated at any time by the Employee giving to the Employer written notice of resignation as follows:'
            )
        ),
        // Paragraph 64
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-2"/>').html(
                '1 week’s notice, if the Employee has completed less than 90 days of employment;'
            )
        ),
        // Paragraph 65
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-2"/>').html(
                '2 weeks’ notice, if the Employee has completed 90 days or more days of employment.'
            )
        ),
        // Paragraph 66
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employer reserves the right to waive any notice in excess of the applicable notice period set out above and to require the Employee to refrain from further attendance at the workplace during any part of such notice period (although the Employer will pay the Employee during the remaining notice period).'
            )
        ),
        // Paragraph 67
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header text-indent-1"/>').html(
                '<strong>Duty to Mitigate</strong>'
            )
        ),
        // Paragraph 68
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'None of the provisions of this Agreement shall relieve the Employee from the Employee’s duty to mitigate any and all damages resulting from the termination of this Agreement or the employment of the Employee hereunder or to mitigate with respect to the provisions of paragraph 5(b) hereof. Without limiting the generality of the foregoing, the Employee specifically acknowledges and agrees that the Employee’s entitlement (if any) pursuant to Section 5(b) hereof that exceeds the minimum requirements under Employment Standards is subject to the Employee’s duty to mitigate and account for mitigation earnings. Accordingly, the Employee shall immediately report any mitigation earnings to the Employer upon receipt of the same.'
            )
        ),
        // Paragraph 69
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'Except as set out above in this paragraph 5, or as otherwise strictly required otherwise under Employment Standards, the Employee will not be entitled to any further notice, severance pay or pay in lieu of notice or other compensation or benefits or entitlements of any nature whatsoever.'
            )
        ),
        // Paragraph 70
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header text-indent-1"/>').html(
                '<strong>Termination by Death</strong>'
            )
        ),
        // Paragraph 71
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'This Agreement and the employment of the Employee hereunder shall be automatically terminated by the death of the Employee. All compensation and benefit entitlements to the Employee shall cease at the Employee’s death, subject to the applicable minimum requirements of Employment Standards.'
            )
        ),
        // Paragraph 72
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'Representation In the event of termination of the Employee’s employment hereunder, however arising, the Employee agrees that he/she will not at any time after such termination represent himself/ herself as still having any connection with the Employer or any Associated Company save as a former employee for the purposes only of communicating with prospective employers or complying with any applicable statutory requirements.'
            )
        ),
        // Paragraph 73
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header"/>').html(
                '<strong>CONFIDENTIALITY; INTELLECTUAL PROPERTY</strong>'
            )
        ),
        // Paragraph 74
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employee acknowledges that the Employer has a legitimate interest in protecting its confidential and proprietary information. Accordingly, employment with the Employer is contingent upon the Employee’s signature of and agreement to the attached Employee Proprietary Information and Inventions Agreement (PIIA), the terms of which are in addition to and without prejudice to any and all obligations of the Employee under applicable law relating to confidentiality, copyrights and intellectual property. The terms of the PIIA form part of the terms and conditions of the Employee’s employment, notwithstanding any future changes to the Employee’s role, responsibilities or other terms of employment. The Employee’s obligations under the PIIA survive and remain in effect if the Employee’s employment with the Employer ends for any reason whatsoever.'
            )
        ),
        // Paragraph 75
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employer understands the importance of protecting confidential information and proprietary property, and therefore expects and directs the Employee to honour any confidentiality and ownership of inventions/proprietary property obligations that the Employee owes to any former employer or other third parties.'
            )
        ),
        // Paragraph 76
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header"/>').html(
                '<strong>NON-SOLICITATION; NON-COMPETITION</strong>'
            )
        ),
        // Paragraph 77
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employee acknowledges that the Employer has a legitimate interest in protecting itself from unfair competition by former employees and that the below restrictions are reasonably required to protect the Employer from unfair competition by existing and departing employees; and that those restrictions will survive and remain in effect if the Employee’s employment ends for any reason whatsoever, for the period stipulated below. Accordingly, the Employee agrees as follows:'
            )
        ),
        // Paragraph 78
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header text-indent-2"/>').html(
                '<strong>Non-Solicitation</strong>'
            )
        ),
        // Paragraph 79
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-2"/>').html(
                'The Employee agrees that the Employee will not during the Employee’s employment with the Employer or within 9 months thereafter, either individually or on behalf of any third party, directly or indirectly or in any manner whatsoever:'
            )
        ),
        // Paragraph 80
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-3"/>').html(
                'solicit (or attempt to solicit) any client or prospective client of the Employer or its affiliates, for the purpose of inducing it to end, alter or reduce its current or future business dealings with the Employer;'
            )
        ),
        // Paragraph 81
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-3"/>').html(
                'solicit or divert any business away from the Employer or its affiliates;'
            )
        ),
        // Paragraph 82
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-3"/>').html(
                'solicit or persuade any person or entity who is known by the Employee to be employed or engaged by the Employer or its affiliates as of the Termination Date, for the purpose of inducing such person or entity to end or reduce their employment or engagement with the Employer;'
            )
        ),
        // Paragraph 83
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-3"/>').html(
                'otherwise interfere or attempt to interfere with any of the contractual, business or economic relationships of the Employer or its affiliates with other parties; and'
            )
        ),
        // Paragraph 84
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-3"/>').html(
                'the Employee will not attempt such actions, or authorize or knowingly approve or assist the taking of such actions by any third party.'
            )
        ),
        // Paragraph 85
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-2"/>').html(
                'For the purpose of this paragraph the parties agree that “client or prospective client of the Employer”, following the termination of employment, shall include only those merchant clients or prospective merchant clients of the Employer, wherever situated, with whom the Employee has had direct contact by virtue of the employment relationship herein within the 12 months preceding the Termination Date; and “direct contact” means direct communications with/by the Employee (whether in person or otherwise) for purposes of doing business on behalf of the Employer, but only if such communications are more than trivial in nature, and in any case excluding bulk or mass-marketing communications directed to multiple clients or prospective clients.'
            )
        ),
        // Paragraph 86
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header text-indent-2"/>').html(
                '<strong>Non-Competition</strong>'
            )
        ),
        // Paragraph 87
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-2"/>').html(
                'The Employee agrees that the Employee will not either:'
            )
        ),
        // Paragraph 88
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-3"/>').html(
                'during the Employee’s employment with the Employer; or'
            )
        ),
        // Paragraph 89
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-3"/>').html(
                'Within 9 months thereafter within the Province of <mark>' + (employee.Location == 'Toronto'?'Ontario':'') + (employee.Location == 'Vancouver'?'British Columbia':'') +'</mark>;'
            )
        ),
        // Paragraph 90
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-2"/>').html(
                'serve as an executive, officer, director, employee or in any advisory capacity with any competitor, in whole or in part, of the Employer, or either individually or in partnership or jointly or in conjunction with any person or person’s firm, trust, partnership, association, syndicate or corporation, as principal, agent, shareholder, trustee or in any other matter whatsoever otherwise carry on or be engaged in or be concerned with any person or persons, firm, trust, partnership, association, syndicate or corporation which is a competitor, in whole or in part, of the Employer, except as a shareholder holding less than ten percent of the outstanding shares or securities of any such corporation whose shares or securities are listed and posted for trading on a recognized stock exchange.'
            )
        ),
        // Paragraph 91
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employer understands the importance of protecting its business from unfair competition, and therefore the Employer expects and directs the Employee to honour any valid non-competition and non-solicitation obligations that the Employee owes to any former employer or other third parties.'
            )
        ),
        // Paragraph 92
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header"/>').html(
                '<strong>PERSONAL INFORMATION/PRIVACY ACKNOWLEDGMENT</strong>'
            )
        ),
        // Paragraph 93
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employee understands and agrees that from time to time the Employer will collect, use and disclose the Employee’s personal information to establish, manage, terminate and administer the employment relationship. The Employee also understands and agrees that the Employer will disclose the Employee’s personal information to third parties where required for payroll/direct deposit, group benefit administration and where required by law to do so. The Employee consents to the Employer’s collection, use and disclosure of the Employee’s personal information for these purposes.'
            )
        ),
        // Paragraph 94
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header"/>').html(
                '<strong>OWNERSHIP OF PROPERTY</strong>'
            )
        ),
        // Paragraph 95
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employee agrees that during the term of the Employee’s employment with the Employer and thereafter any and all equipment, devices or other property provided to the Employee by the Employer shall remain the property of the Employer. The foregoing shall include all property (whether in electronic or hard copy form) including without limitation computers, peripherals, software, cellular phones, keys, door passes and any other equipment.'
            )
        ),
        // Paragraph 96
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'Upon termination of this Agreement or at any time upon request by the Employer, the Employee shall immediately return to the Employer any and all of the foregoing property and shall return to the Employer any other property which has been leased or rented by the Employer for use by the Employee.'
            )
        ),
        // Paragraph 97
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employee agrees that upon termination of this Agreement the Employee shall take all reasonable steps required by the Employer to assist in the orderly transfer of the information, documentation and other property of the Employer in the possession of the Employee.'
            )
        ),
        // Paragraph 98
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employee hereby undertakes to repay to the Employer any amounts owing by the Employee to the Employer, and hereby authorizes and directs the Employer to effect such repayment to the maximum extent possible by deducting the repayable amount from any amounts the Employer owes to the Employee, including without limitation any amounts payable under Employment Standards.'
            )
        ),
        // Paragraph 99
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header"/>').html(
                '<strong>APPLICABLE LAW AND SEVERABILITY</strong>'
            )
        ),
        // Paragraph 100
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'This Agreement and the rights and obligations of the parties hereunder shall be construed and governed in accordance with the laws of the Province of ' + (employee.Location == 'Toronto'?'Ontario':'') + (employee.Location == 'Vancouver'?'British Columbia':'') + '.'
            )
        ),
        // Paragraph 101
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'It is intended that all aspects of this Agreement shall comply with Employment Standards. The provisions of Employment Standards, as they may from time to time be amended, are deemed to be incorporated herein and shall prevail if greater. In the event that any Employee entitlements under Employment Standards exceed the contractual provisions of this Agreement, then those Employment Standards entitlements shall replace the said contractual provisions and no further entitlements or payments are due to the Employee pursuant to Employment Standards or at common law.'
            )
        ),
        // Paragraph 102
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The provisions of this Agreement shall be deemed severable and in the event that any provision herein or part thereof shall be deemed void, invalid, illegal or unenforceable for any reason by a court or other lawful authority of competent jurisdiction, the remainder of this Agreement shall continue in force with respect to the enforceable provisions and all rights accrued under the enforceable provisions shall survive any such declaration.'
            )
        ),
        // Paragraph 103
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header"/>').html(
                '<strong>ENTIRE AGREEMENT</strong>'
            )
        ),
        // Paragraph 104
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'This Agreement, the offer letter and the documentation referred to herein contain the entire understanding and agreement between the parties hereto with respect to the employment of the Employee and the subject matter hereof and any and all previous agreements and representations, written or oral, express or implied, between the parties hereto or on their behalf, relating to the employment of the Employee by the Employer and the subject matter hereof, are hereby terminated and cancelled and each of the parties hereto hereby releases and forever discharges the other of and from all manner of actions, causes of action, claims and demands whatsoever under or in respect of any such prior agreements and representations. Except as provided herein, no amendment or variation of any of the provisions of this Agreement shall be valid unless made in writing and signed by each of the parties hereto.'
            )
        ),
        // Paragraph 105
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header"/>').html(
                '<strong>SURVIVAL; ENFORCEABILITY</strong>'
            )
        ),
        // Paragraph 106
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The provisions of paragraphs 6 and 7 of this Agreement, the PIIA and this paragraph 12 shall each survive the termination of the employment relationship herein and shall be enforceable notwithstanding the existence of any claim or cause of action of the Employee against the Employer whether predicated upon this Agreement or otherwise.'
            )
        ),
        // Paragraph 107
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'Without limiting the generality of the foregoing, if a court of competent jurisdiction would otherwise declare any portions of paragraphs 6 and 7 void or unenforceable, the portions of any such paragraphs shall be reduced in scope, territory and/or duration of time to such an extent that such court would hold the same to be enforceable in the circumstances. The portions of any such paragraphs with respect to scope, territory and duration shall be separate and distinct and fully severable without affecting the enforceability of the entire paragraph.'
            )
        ),
        // Paragraph 108
        $('<div class="offerClause"/>').append(
            $('<p class="text-indent-1"/>').html(
                'The Employee acknowledges that a breach of any of the provisions in paragraphs 6 and 7 of this Agreement and the PIIA will give rise to irreparable harm and injury non-compensable in damages. Accordingly, the Employer or such other party may seek and obtain injunctive relief against the breach or threatened breach of the foregoing provisions, in addition to any other legal remedies which may be available. The Employee further acknowledges and agrees that the enforcement of a remedy hereunder by way of injunction will not prevent the Employee from earning a reasonable livelihood. The Employee further acknowledges and agrees that the covenants contained herein are necessary for the protection of the Employer’s legitimate business interests and are reasonable in scope and content.'
            )
        ),
        // Paragraph 109
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header"/>').html(
                '<strong>NOTICES</strong>'
            )
        ),
        // Paragraph 110
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Any consent, approval, notice, request, or demand required or permitted to be given by one party to the other shall be in writing (including, without limitation, telex or telecopy communications) to be effective and shall be deemed to have been given on the earlier of receipt or the fifth day after mailing by registered mail as follows:'
            )
        ),
        // Paragraph 111
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'If to the Employer, to it at:'
            )
        ),
        // Paragraph 112
        (employee.Location == 'Toronto') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').append(
                $('<span/>').html(
                    '<mark>PayPal Canada Co.</mark><br>'
                ),
                $('<span/>').html(
                    '<mark>Mars Centre, West Tower</mark><br>'
                ),
                $('<span/>').html(
                    '<mark>661 University Ave., Suite 506</mark><br>'
                ),
                $('<span/>').html(
                    '<mark>Toronto, ON M5G 1M1</mark><br>'
                ),
                $('<span/>').html(
                    '<mark>Canada</mark><br>'
                )
            )
        ),
        // Paragraph 113
        (employee.Location == 'Vancouver') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').append(
                $('<span/>').html(
                    '<mark>TIO Networks, Vancouver office</mark><br>'
                ),
                $('<span/>').html(
                    '<mark>250 Howe St Suite 1500</mark><br>'
                ),
                $('<span/>').html(
                    '<mark>Vancouver, BC V6C 3R8</mark><br>'
                ),
                $('<span/>').html(
                    '<mark>Canada</mark><br>'
                )
)
        ),
        // Paragraph 114
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'If to the Employee, at:'
            )
        ),
        // Paragraph 115
        $('<div class="offerClause"/>').append(
            $('<p/>').append(
                    $('<mark/>').append( 
                $('<span/>').html( 
                    employee.Full_Legal_Name + '<br>'
                ),
                $('<span/>').html(
                    employee.Address_Line_1 + '<br>'
                ),
                $('<span/>').html(
                    employee.Address_Line_2 + '<br>'
                ),
                $('<span/>').html(
                    employee.City + ', ' + employee.State + ', ' + employee.Postal_Code + '<br>'
                )
            )
)
        ),
        // Paragraph 116
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Or such other address as may have been designated by written notice.'
            )
        ),
        // Paragraph 117
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Any consent, approval, notice, request or demand aforesaid if delivered, telexed or telecopied shall be deemed to have been given on the date of such delivery, telex or telecopy transmission. Any such delivery shall be sufficient, inter alia, if left with an adult person at the above address of the Employee in the case of the Employee, and if left with the receptionist at the above address of the Employer in the case of the Employer. The Employer or the Employee may change its or the Employee’s address for service, from time to time, by notice given in accordance with the foregoing.'
            )
        ),
        // Paragraph 118
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header"/>').html(
                '<strong>EXECUTION</strong>'
            )
        ),
        // Paragraph 119
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'This Agreement may be executed in counterparts and may be executed and delivered by facsimile or PDF email or other electronic means of delivery and all such counterparts and facsimiles will together constitute one and the same agreement.'
            )
        ),
        // Paragraph 120
        $('<div class="offerClause"/>').append(
            $('<p class="paragraph-header"/>').html(
                '<strong>INDEPENDENT LEGAL ADVICE</strong>'
            )
        ),
        // Paragraph 121
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'The Employee acknowledges that the Employee is aware that the Employee has the right to obtain independent legal advice before signing this Agreement. The Employee hereby acknowledges and agrees that either such advice has been obtained or that the Employee does not wish to seek or obtain such independent legal advice. The Employee further acknowledges and agrees that the Employee has read this Agreement and fully understands the terms of this Agreement, and further agrees that all such terms are reasonable and that the Employee signs this Agreement freely, voluntarily and without duress.'
            )
        ),
        // Paragraph 122
        $('<div class="offerClause" style="margin-bottom:40px!important;"/> ').append(
            $('<p/>').html(
                '<strong>IN WITNESS WHEREOF</strong> the parties hereto have duly executed this agreement as of the date(s) written below.'
            )
        )
        // end append
    );

    $("#markup2").html("").append(
        // OfferClause 2
        $('<div class="offerClause2">').append(
            $('<p class="text-indent-3"/>').html(
                '<strong>PayPal Canada Co.</strong>'
            )
        )
        // end append
    );

    $("#markup3").html("").append(
        // OfferClause 3
        $('<div class="offerClause3">').append(
            $('<p class="text-indent-3"/>').html(
                '<strong>Employee</strong>'
            )
        )
        // end append
    );
}

function fnConvertFullDate2(eventDate) {

    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var year = d.getFullYear(),
        month = d.getMonth(),
        n_date = d.getDate(),
        day = d.getDay();

    return parseInt(n_date) + ' ' + months[month] + ' ' + year;

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


function formatCurrency(total) {
    return parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
}

$(window).on('load', function() {
    

    $("#state").val(employee.State);
    employee.State = $("#state option:selected").text();

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
