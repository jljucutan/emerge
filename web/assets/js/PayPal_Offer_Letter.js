/**
 * CHANGE LOGS
 * 02/01/2019 | jjucutan | SERVICES-35512 PayPal - PayPal Offer Letter Update
 * 02/01/2019 | jjucutan | new version with friendly heading for dynamic blocks of contents
 * 02/07/2019 | jjucutan | fallback preferred first nae to firstname
 * 02/08/2019 | bhercegovac/jrutledge | updated "Qualifies for Annual Incentive Plan (AIP)" condition
 * 02/11/2019 | jjucutan | do not render address2 if null but leaving blank line
 * 02/12/2019 | jjucutan | remove empty line if address2 is null
 * 02/27/2019 | jjucutan | display complimentary close addressee when addressee or new hire is signed in
 * 02/28/2019 | jjucutan | added Credit Incentive Plan section
 * 03/01/2019 | jjucutan | added logic to display either Qualifies for Sales Commission Plan OR Credit Incentive Plan section only
 * 03/08/2019 | jjucutan | fixed condition on EVENT_REPAYMENT_FLAG to No
 * 03/13/2019 | bhercegovac | added additional logic around Sign-on hire on bonus to display with EVENT_REPAYMENT_FLAG
 * 03/22/2019 | jjucutan | truncate state to 2 character state code
 * 08/13/2019 | jjucutan | created version 33 for updated ramp up logic
 */

const fnView = function() {
    "use strict";

    $("#markup").html("").append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p class="mb-30"/>').append(
                $('<mark/>').append(
                    OfferLetterData.Current_Date
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p class="mb-30"/>').append(
                $('<mark/>').append(
                    OfferLetterData.Full_Legal_Name
                ),
                '<br>',
                $('<mark/>').append(
                    OfferLetterData.Address1
                ),
                (OfferLetterData.Address2.length >= 1) && $('<mark/>').append(
                    '<br>',
                    OfferLetterData.Address2
                ),
                '<br>',
                $('<mark/>').append(
                    OfferLetterData.City,
                    ((OfferLetterData.City.length > 0) ? ", "  : "")
                ),
                $('<mark/>').append(
                    OfferLetterData.State.substring(4,6),
                    ((OfferLetterData.State.length > 0) ? " "  : "")
                ),
                $('<mark/>').append(
                    OfferLetterData.Zip
                )
            ),
            $('<p class="hide"/>').append('&nbsp;')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').append(
                'Dear ',
                $('<mark/>').append(
                    OfferLetterData.Preferred_First_Name
                ),
                ','
            ),
            $('<p/>').append(
                'We are excited to have you join PayPal – let’s make this official.  On behalf of ',
                $('<mark/>').append(
                    OfferLetterData.EntityName
                ),
                ' (“PayPal”), we are pleased to offer you the ',
                $('<mark/>').append(
                    OfferLetterData.JobType
                ),
                ', ',
                $('<mark/>').append(
                    OfferLetterData.Exempt
                ),
                ' position of  ',
                $('<mark/>').append(
                    OfferLetterData.Business_Title
                ),
                ' (System Title: ',
                $('<mark/>').append(
                    OfferLetterData.SystemTitle
                ),
                ')',
                ', reporting to ',
                $('<mark/>').append(
                    OfferLetterData.Hiring_Manager
                ),
                ', ',
                $('<mark/>').append(
                    OfferLetterData.MngrBsnssTitle
                ),
                '.'

            ),
            (OfferLetterData.Exempt_Code === "E" && OfferLetterData.JobType === "Full Time") && $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Full Time Exempt Employee"/>').append(
                'At PayPal, we pride ourselves in offering a competitive total rewards package. Your annual base salary will be ',
                $('<mark/>').append(
                    OfferLetterData.Salary_Amount
                ),
                ' ',
                $('<mark/>').append(
                    OfferLetterData.SalaryCurrency
                ),
                ' (paid bi-weekly at ',
                $('<mark/>').append(
                    OfferLetterData.SalaryOffered
                ),
                ' ',
                $('<mark/>').append(
                    OfferLetterData.SalaryCurrency
                ),
                ' per pay period).'
            ),
            (OfferLetterData.Exempt_Code === "N" && OfferLetterData.JobType === "Full Time") && $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Full Time Non-Exempt Employee"/>').append(
                'At PayPal, we pride ourselves in offering a competitive total rewards package. Your hourly rate of pay will be ',
                $('<mark/>').append(
                    OfferLetterData.SalaryOffered
                ),
                ' ',
                $('<mark/>').append(
                    OfferLetterData.SalaryCurrency
                ),
                ', payable bi-weekly.'
            ),
            (OfferLetterData.Exempt_Code === "E" && OfferLetterData.JobType === "Part Time") && $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Part Time Exempt Employee"/>').append(
                'At PayPal, we pride ourselves in offering a competitive total rewards package.  Your annualized salary, based on a part-time, ',
                $('<mark/>').append(
                    OfferLetterData.Work_Week_Pct
                ),
                '% work schedule, will be ',
                $('<mark/>').append(
                    OfferLetterData.Salary_Amount
                ),
                ' ',
                $('<mark/>').append(
                    OfferLetterData.SalaryCurrency
                ),
                ' (paid bi-weekly at ',
                $('<mark/>').append(
                    OfferLetterData.SalaryOffered
                ),
                ' ',
                $('<mark/>').append(
                    OfferLetterData.SalaryCurrency
                ),
                ' per pay period).'
            ),
            (OfferLetterData.Exempt_Code === "N" && OfferLetterData.JobType === "Part Time") && $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Part Time Non-Exempt Employee"/>').append(
                'At PayPal, we pride ourselves in offering a competitive total rewards package.  Your hourly rate of pay will be ',
                $('<mark/>').append(
                    OfferLetterData.SalaryOffered
                ),
                ' ',
                $('<mark/>').append(
                    OfferLetterData.SalaryCurrency
                ),
                ', payable bi-weekly. You are currently scheduled to work ',
                $('<mark/>').append(
                    OfferLetterData.HoursPerWeek
                ),
                ' hours per week.'
            ),
            (OfferLetterData.SHIFT_DIFFERENTIAL.length > 0) && $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Shift Differential"/>').append(
                'You may be eligible for a shift differential for hours worked outside of 6:00 a.m. to 6:00 p.m., and for hours worked on the weekend. There will be no differential applied to paid time off, including but not limited to PTO, holidays, civic duty, bereavement leave.  Please see the employee handbook for specific shift differential policy details. PayPal reserves the right, in its sole discretion, to amend, change or cancel its shift differential policy at any time.'
            ),
            (OfferLetterData.Shift_Differential_Exempt.length > 0) && $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Shift Differential Exempt"/>').append(
                'You will be eligible for a ',
                $('<mark/>').append(
                    OfferLetterData.Shift_Differential_Exempt
                ),
                '%  shift differential while working ',
                $('<mark/>').append(
                    OfferLetterData.Shift
                ),
                ' shift. Should you change shifts at any time during your employment, a different differential may be applied or completely eliminated depending on the shift. Please see the employee handbook for specific shift differential policy details. Further, PayPal reserves the right, in its sole discretion, to amend, change or cancel its shift differential policy at any time.'
            ),
            (OfferLetterData.LANGUAGE_DIFFERENTIAL.length > 0) && $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Language Differential"/>').append(
                'You will be eligible for a ',
                $('<mark/>').append(
                    OfferLetterData.LANGUAGE_DIFFERENTIAL
                ),
                '% language differential because your position requires a language skill other than English for at least twenty-five percent (25%) of your time worked.  Should you change positions or no longer require a language skill other than English for the required percentage of your time worked, a different differential may be applied or completely eliminated depending on the role. Please see the employee handbook for specific language differential policy details.  PayPal reserves the right, in its sole discretion, to amend, change or cancel its language differential policy at any time.'
            ),
            (OfferLetterData.eIP_Target_Pct > 0) && $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Annual Incentive Plan (AIP)"/>').append(
                'There’s more, of course. You are also eligible to participate in the PayPal Annual Incentive Plan for a specified year(“AIP”).  Your target bonus opportunity under the AIP is ',
                $('<mark/>').append(
                    OfferLetterData.eIP_Target_Pct
                ),
                '% of your annual base salary and is calculated based on company performance as well as individual achievement for the year.  Your first bonus will be prorated based on your hire date and days of service in an AIP-eligible position during the AIP performance period, which is January 1-December 31. If your employment start date with PayPal begins after the first U.S. business day in the final quarter of the calendar year, your eligibility to participate in the AIP will begin on January 1 of the following calendar year.  Any bonus is at PayPal’s sole and absolute discretion and subject to the terms and conditions of the AIP.  PayPal reserves the right, in its sole discretion, to amend, change or cancel the AIP at any time.'
            ),
            (OfferLetterData.SalesTargetDollarAmt.length > 0) && $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Sales Incentive Plan"/>').append(
                'There’s more, of course, You are also eligible to participate in a sales incentive plan with a target incentive of ',
                $('<mark/>').append(
                    OfferLetterData.SalesTargetDollarAmt
                ),
                ' ',
                $('<mark/>').append(
                    OfferLetterData.SalaryCurrency
                ),
                '. Details of the plan will be provided to you by your manager. The payment of any incentive is at PayPal’s sole and absolute discretion and subject to the terms and conditions of the plan, and your eligibility to participate in the SIP or any other incentive compensation plan, at any time. The incentive compensation plan that you are eligible to participate in may change over time. You acknowledge and agree that the Company may substitute the plan referenced in this letter and any contract of employment or any offer documentation, as it determines in its sole discretion from time to time.'
            ),
            (OfferLetterData.Introductory_RampUp_Period_Eligible == "Y") && $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Guarantee Offer"/>').append(
                'To facilitate a smooth onboarding onto the Sales Incentive Plan (the SIP), you will be eligible for a nonrecoverable advance during “an introductory ramp-up period”. (the “Ramp-up Period”), in accordance with and subject to the terms and conditions of the SIP. During the Ramp-Up period, you will be paid, on a prorated quarterly cycle, a nonrecoverable advance totaling in aggregate 50% of your annual Target Incentive amount (the “Nonrecoverable Advance”), in accordance with and subject to the terms and conditions of the SIP. Once you have earned 50% of your annual Target Incentive amount (whether through payment of the Nonrecoverable Advance or actual incentives earned under the SIP), the Ramp-Up Period ends. Following the Ramp-Up period, you will be eligible for additional incentive pay in accordance with and subject to the terms and conditions of the SIP, based on your performance. The payment of any incentives is at the Company’s sole and absolute discretion and subject to the terms and conditions of the SIP. The Company reserves the right, in its sole discretion, to amend, change or cancel the SIP at any time.'
            ),
            (OfferLetterData.EntityName !== "Swift" && OfferLetterData.Sales_Commission_Eligible === "Yes") && $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Sales Commission Plan"/>').append(
                'There’s more, of course.  You are also eligible to participate in a sales commission plan.  Details of the plan will be provided to you by your manager.  The payment of any commission is subject to the terms and conditions of the plan.  PayPal reserves the right, in its sole discretion, to amend, change or cancel the plan at any time.'
            ),
            (OfferLetterData.Credit_Incentive_Plan_Eligible === "no" && OfferLetterData.EntityName === "Swift" && OfferLetterData.Sales_Commission_Eligible === "Yes") && $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Sales Commission Plan (Swift Employee)"/>').append(
                'There’s more, of course.  You are also eligible to participate in a sales commission plan.  Details of the plan will be provided to you by your manager. As a participant in a Swift-sponsored sales compensation plan, you will be eligible to receive a minimum sales incentive bonus of $3,000 per month for the first two months of your employment (the “Minimum”). The payment of any commission is subject to the terms and conditions of the plan.  PayPal reserves the right, in its sole discretion, to amend, change or cancel the plan at any time.'
            ),
            (OfferLetterData.EntityName === "Swift" && OfferLetterData.Credit_Incentive_Plan_Eligible === "yes") && $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Credit Incentive Plan (Swift)"/>').append(
                'There\’s more, of course. You are also eligible to participate in a credit incentive plan. Details of the plan will be provided to you by your manager. The payment of any incentive is subject to the terms and conditions of the plan. PayPal reserves the right, in its sole discretion, to amend, change or cancel the plan at any time. The bonus plan(s) that you are eligible to participate in may change over time. You acknowledge and agree that PayPal may substitute the plan referenced in this letter and any offer documentation, as it determines in its sole discretion from time to time.'
            ),

(OfferLetterData.EVENT_REPAYMENT_FLAG !== "No" || OfferLetterData.paymentAmount1.length > 0 || OfferLetterData.paymentAmount2.length > 0 || OfferLetterData.Option2PaymentAmt.length > 0 ) && $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Hire-On Bonus"/>').append(
                'In addition, PayPal is offering you the following:'
                        ),

            (["3","4","6","7"].indexOf(OfferLetterData.EVENT_REPAYMENT_FLAG_CODE) >= 0) && $('<div class="marked" data-toggle="popover" data-placement="top" data-content="' + OfferLetterData.EVENT_REPAYMENT_FLAG + '"/>').append(
                  $('<ul class="list-indented"/>').append(
                    $('<li/>').append(
                        'A one-time sign on bonus of ',
                        $('<mark/>').append(
                            OfferLetterData.HIRE_ON_BONUS_AMOUNT
                        ),
                        ' ',
                        $('<mark/>').append(
                            OfferLetterData.HIRE_ON_BONUS_CRNCY_CD
                        ),
                        ' (less deductions and applicable taxes).  This sign on bonus is payable within two payroll periods of your start date.'
                    )
                )
            ),
            (OfferLetterData.paymentAmount1.length > 0) && $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for One-time Make Good Bonus"/>').append(
                $('<ul class="list-indented"/>').append(
                    $('<li/>').append(
                        'A one-time make-good bonus of ',
                        $('<mark/>').append(
                            OfferLetterData.paymentAmount1
                        ),
                        ' ',
                        $('<mark/>').append(
                            OfferLetterData.SalaryCurrency
                        ),
                        ' (less deductions and applicable taxes), payable within the first two pay periods of your start date.'
                    )
                )
            ),
            (OfferLetterData.paymentAmount2.length > 0) && $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for One-time Make Good Bonus 1"/>').append(
                $('<ul class="list-indented"/>').append(
                    $('<li/>').append(
                        'A one-time make-good bonus of ',
                        $('<mark/>').append(
                            OfferLetterData.paymentAmount2
                        ),
                        ' ',
                        $('<mark/>').append(
                            OfferLetterData.SalaryCurrency
                        ),
                        ' (less deductions and applicable taxes), which will be payable in two installments.  The first installment of ',
                      
                        $('<mark/>').append(
                            OfferLetterData.firstinstallmentamount
                        ),
                        ' ',
                        $('<mark/>').append(
                            OfferLetterData.SalaryCurrency
                        ),
                        ' (less deductions and applicable taxes) will be payable on or around ',
                        $('<mark/>').append(
                            OfferLetterData.firstpaymentdate
                        ),
                        ' and the second installment of ',
                        $('<mark/>').append(
                            OfferLetterData.secondinstallmentamount
                        ),
                        ' ',
                        $('<mark/>').append(
                            OfferLetterData.SalaryCurrency
                        ),
                        ' (less deductions and applicable taxes) will be payable on or around ',
                        $('<mark/>').append(
                            OfferLetterData.secondpaymentdate
                        ),
                        ', subject to your continued employment on each date of payment.'
                    )
                )
            ),
            (OfferLetterData.Option2PaymentAmt.length > 0) && $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for One-time Make Good Bonus 2"/>').append(
                $('<ul class="list-indented"/>').append(
                    $('<li/>').append(
                        'A one-time make-good bonus of ',
                        $('<mark/>').append(
                            OfferLetterData.Option2PaymentAmt
                        ),
                        ' ',
                        $('<mark/>').append(
                            OfferLetterData.SalaryCurrency
                        ),
                        ' (less deductions and applicable taxes), which will be payable in two installments.  The first installment of ',
                        $('<mark/>').append(
                            OfferLetterData.Option2FirstInstallment
                        ),
                        ' ',
                        $('<mark/>').append(
                            OfferLetterData.SalaryCurrency
                        ),
                        ' (less deductions and applicable taxes) will be payable within two payroll periods of your start date and the second installment of ',
                        $('<mark/>').append(
                            OfferLetterData.Option2SecondInstallmentAmt
                        ),
                        ' ',
                        $('<mark/>').append(
                            OfferLetterData.SalaryCurrency
                        ),
                        ' (less deductions and applicable taxes) will be payable on or around the first anniversary of your start date, subject to your continued employment on each date of payment.'
                    )
                )
            ),
            (OfferLetterData.EVENT_REPAYMENT_FLAG !== "No") && $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Requires Repayment Agreement"/>').append(
                  $('<p/>').append(
                'The payment(s) above has/have a couple of basic conditions: (1) you need to be employed with PayPal on the date(s) of the applicable payment(s), otherwise you will not earn or receive the payment, and (2) if your employment ceases for reasons of cause or resignation before the designated date(s) in the attached Repayment Agreement(s), the applicable award(s) designated in the attached Repayment Agreement(s) will not be earned, and are subject to repayment to PayPal. Details are in the attached Repayment Agreement(s).'
              )
            ),
            (OfferLetterData.NEW_HIRE_REST_STOCK_UNITS.length > 0) && $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Restricted Stock Units (RSUs)"/>').append(
                $('<p/>').append(
                    'As a PayPal employee, you are eligible to receive equity grants each year beginning in ',
                    $('<mark/>').append(
                        ((OfferLetterData.StartDateMonth.trim() === "December" && OfferLetterData.StartDateDay > 1) ? OfferLetterData.StartDateYear + 2: OfferLetterData.StartDateYear + 1)
                    ),
                    ', depending on your performance as assessed by your manager and subject to approval by the Compensation Committee of the Board of Directors of PayPal Holdings, Inc. (together with its delegate, as applicable, referred to herein as the “Committee”).  Annual equity grant ranges are reviewed each year to ensure we remain competitive to the market.'
                ),
                $('<p/>').append(
                    'To welcome you to PayPal, it will be recommended to the Committee that you be granted the following:'
                ),
                '<hr class="HRblack">',
                $('<p/>').append(
                    $('<strong/>').append(
                        'Grant'
                    ),
                    '<br>Restricted Stock Units (“RSUs”)'
                ),
                $('<p/>').append(
                    $('<strong/>').append(
                        'Value'
                    ),
                    '<br>USD ',
                    $('<mark/>').append(
                        OfferLetterData.NEW_HIRE_REST_STOCK_UNITS
                    )
                ),
                $('<p/>').append(
                    $('<strong/>').append(
                        'Vesting Schedule'
                    ),
                    '<br>The value of these equity awards will be converted into the number of shares to be granted, as determined based on company policies.  One-third (1/3) of the shares subject to the RSU awards will vest (conditioned upon your continued employment with a PayPal company) on each anniversary of the grant date, less applicable taxes and withholdings.'
                ),
                (OfferLetterData.SupplementalRSU.length > 0) && $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Supplemental Restricted Stock Unit Award"/>').append(
                    '<hr class="HRblack">',
                    $('<p/>').append(
                        $('<strong/>').append(
                            'Grant'
                        ),
                        '<br>Supplemental RSU Award'
                    ),
                    $('<p/>').append(
                        $('<strong/>').append(
                            'Value'
                        ),
                        '<br>USD ',
                        $('<mark/>').append(
                            OfferLetterData.SupplementalRSU
                        )
                    ),
                    $('<p/>').append(
                        $('<strong/>').append(
                            'Vesting Schedule'
                        ),
                        '<br>The value of these equity awards will be converted into the number of shares to be granted, as determined based on company policies.  One-third (1/3) of the shares subject to the RSU awards will vest (conditioned upon your continued employment with a PayPal company) on each anniversary of the grant date, less applicable taxes and withholdings.'
                    )
                ),
                '<hr class="HRblack">',
                $('<p/>').append(
                    'Please note:  The above is a summary of the RSUs.  Once your grant is approved and processed (subject to the approval of the Committee, the grant date is generally on or around the 15th of the month following the month of your first day of employment), you will be notified by E*TRADE to set up your account, and will be prompted to accept your grant on-line.  The equity award and other related agreements set forth the terms and conditions that govern your awards. '
                ),
                $('<p/>').append(
                    'All employees are subject to PayPal’s Insider Trading Agreement, which outlines the procedures and guidelines governing securities trades by company personnel.  Included with the offer packet accompanying this offer letter is a copy of PayPal’s Insider Trading Agreement. Please review the agreement carefully, and execute the online certification.'
                )
            ),
            $('<p/>').append(
                $('<strong/>').append(
                    $('<u/>').text('BENEFITS')
                )
            ),
            $('<p/>').append(
                'You will also receive benefits from PayPal. Please refer to the benefit plan documents for more details, including eligibility. Details about company benefits, including the Employee Stock Purchase Program, 401(k), Sabbatical Program, and Time Off Benefits are available here: https://www.paypalbenefits.com. Take a look. They’re pretty amazing. Let us know if you have questions about any of them.'
            ),
            $('<p/>').append(
                'The above is just an overview. For more details and plan limitations, please review the Summary Plan Descriptions, plan documents, program summaries or grant agreements. You’ll see that we’re serious about offering a generous benefits package, but obviously PayPal reserves the right to make changes or cancel any benefits at any time, in PayPal’s sole discretion.'
            ),
            (OfferLetterData.Relocation === "Y")  && $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Employee Relocating"/>').append(
                'You will be provided relocation support to move from ',
                $('<mark/>').append(
                    OfferLetterData.RelocationFrom
                ),
                ' to ',
                $('<mark/>').append(
                    OfferLetterData.PayAreaCity
                ),
                '. Details will be sent separately.'
            ),
            $('<p/>').append(
                $('<strong/>').append(
                    $('<u/>').text('TERMS AND CONDITIONS')
                )
            ),
            $('<p/>').append(
                'This offer is contingent upon the results of your background verification, as PayPal deems appropriate, in its sole discretion.'
            ),
            $('<p/>').append(
                'Under federal immigration laws, PayPal is required to verify each new employee’s identity and legal authority to work in the United States.  Accordingly, please be prepared to furnish appropriate documents satisfying those requirements; this offer of employment is conditioned on submission of satisfactory documentation.  You will be provided with a list of the required documents.'
            ),
            (OfferLetterData.Immigration === "Yes") && $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Non-US Citizen"/>').append(
                'You will receive a Non-US Citizen/Permanent Residence Non-Immigrant Checklist under separate cover with other instructions and documentation for the processing of your visa. So that we may move forward with your visa application, please provide copies of the documents on the checklist to our immigration attorney as soon as possible. Any delay in submitting these documents may affect your start date with PayPal.'
            ),
            $('<p/>').append(
                'Your employment at PayPal is “at-will” and either you or PayPal may terminate your employment at any time, with or without cause or advance notice. The at will nature of the employment relationship can only be changed by written agreement signed by PayPal’s SVP, Chief People Officer. Other terms, conditions, job responsibilities, compensation and benefits may be adjusted by PayPal from time to time in its sole discretion.'
            ),
            $('<p/>').append(
                'In addition to this letter, other important documents, including the Mutual Arbitration Agreement and the Employee Proprietary Information and Inventions Agreement, outline additional terms and conditions of your employment. These documents must be signed and completed prior to your start date.'
            ),
            $('<p/>').append(
                'Kindly indicate your consent to this offer letter by electronically signing below within 3 days of the date of the offer.  Upon your signature below, this will become our binding agreement with respect to your employment and its terms, merging and superseding in their entirety all other or prior written or oral offers, agreements and communications.  In accepting this offer and signing below, you acknowledge that you have not relied upon any statement, promise, agreement or representation not set forth in this letter.'
            ),
            $('<p/>').append(
                'At PayPal, we have a big opportunity ahead of us to reimagine money so that every person can participate in the global economy. We think your skills and experience could make a tremendous impact, and you will be a great addition to the team.'
            ),
            $('<p/>').append(
                'Very truly yours,'
            ),
            $('<p class="mb-60"/>').append(
                $('<div id="complimentary-close-signer"/>').append(
                    $('<mark/>').append(
                        $('#recruiter_name').val()
                    ),
                    '<br>'
                ),
                'Recruiter'
            ),
            $('<p class="hide"/>').append('&nbsp;')
        )
        // end append
    );
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
    makeOfferLetter('hidden_pg2','offerClause2');
    makeOfferLetter('hidden_pg3','offerClause3');
  }

});
