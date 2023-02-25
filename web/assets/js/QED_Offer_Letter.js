/**
 * 2022-08-16 | jjucutan | created offer letter from North_Coast_Offer_Letter
 */
function fnView() {
    // Offer Letter Content
    $("#markup").html("").append(
        // OfferClause
        $('<div class="offerClause"/>').append(
            $('<div class="row"/>').append(
                $('<div class="col-sm-offset-8 col-xs-offset-6 col-sm-4 col-xs-6"/>').html('<img id="headerpg1_img" src='+ company.Logo +' width="100%">')
            ),
            $('<div/>').append(
                $('<p/>').append(
                    $('<span/>').append(employee.Offer_Date+'<br>&nbsp;')
                ),
                $('<p/>').append(
                    $('<span/>').append(employee.CompanyAddress),
                    '<br>',
                    $('<span/>').append(employee.CompanyCity),
                    (employee.CompanyState) && ', ',
                    $('<span/>').append(employee.CompanyState),
                    (employee.CompanyZip) && ', ',
                    $('<span/>').append(employee.CompanyZip)
                ),
                $('<p/>').append(
                    $('<span/>').append('&nbsp;<br>Re: ', employee.Full_Name, ' Offer of Employment<br>&nbsp;')
                ),
                $('<p/>').append(
                    'Dear ', employee.First_Name, ':<br>&nbsp;'
                ),
                $('<p/>').append(
                    'It is our pleasure to confirm our offer of employment to you as a ',
                    employee.Job_Template_Name,
                    ' for QED. We feel your skills, background and integrity will be valuable assets to our team. In this position, you will',
                    (employee.Remote == 'Yes') && ' be working remote and will',
                    ' report directly to ',
                    employee.Hiring_Manager,
                    ', with a start date of ',
                    employee.Hire_Date,
                    '. Your employment package will include the following:'
                ),
                $('<p/>').append(
                    $('<strong/>').append('&nbsp;<br>Salary')
                ),
                $('<ul/>').append(
                    (['annually', 'bi-monthly', 'bi-weekly', 'weekly'].includes(employee.Salary_Type)) &&
                    $('<li/>').append(
                        'Your annual salary will be ',
                        getAnnualSalary(employee.Salary_Amount, employee.Salary_Type),
                        '.  Your salary, less deductions, will be paid on a bi-weekly basis.'
                    ),
                    (employee.Salary_Type == 'hourly') &&
                    $('<li/>').append(
                        'Your hourly rate will be $',
                        employee.Salary_Amount,
                        (employee.FLSA_Status == 'Non-exempt') &&
                        '.  Your job is considered non-exempt by Fair Labor Standards Act requirements and therefore you are eligible for overtime.',
                        (employee.FLSA_Status == 'Exempt') &&
                        '. Your hourly wage, less deductions, will be paid on a bi-weekly basis.'
                    ),
                    (employee.Salary_Structure_Required == 'Yes') &&
                    $('<li/>').append(
                        employee.Salary_Structure
                    )
                ),
                (employee.Bonus_General_Eligibility=='Yes') &&
                $('<p/>').append(
                    $('<strong/>').append('&nbsp;<br>Bonus')
                ),
                (employee.Bonus_General_Eligibility=='Yes') &&
                $('<ul/>').append(
                    $('<li/>').append(
                        'In addition to your salary, you will be eligible for the annual bonus plan set forth below.  Your bonus will be prorated for the 2023 calendar year.  Specific goal detail to be provided at a later date. ',
                        $('<ul/>').append(
                            'Floor Target - ',
                            employee.Floor_Target_Percentage, '%'
                        ),
                        $('<ul/>').append(
                            'Goal Target - ',
                            employee.Bonus_Target_Percentage, '%'
                        ),
                        $('<ul/>').append(
                            'Stretch Target - ',
                            employee.Stretch_Target_Percentage, '%'
                        )
                    )
                ),
                (employee.Commission_Eligibility == 'Yes') &&
                $('<p/>').append(
                    $('<strong/>').append('Commission Structure')
                ),
                (employee.Commission_Eligibility == 'Yes') &&
                $('<ul/>').append(
                    $('<li/>').append(
                        employee.Commission_Structure
                    )
                ),
                $('<p/>').append(
                    $('<strong/>').append('&nbsp;<br>Benefits')
                ),
                $('<ul/>').append(
                    $('<li/>').append(
                        'You will be eligible for all benefits, including medical, dental, vision, wellness rewards, 401(k) and life insurance, under the current Sonepar USA Benefit Plans.',
                        $('<ul/>').append(
                            $('<li/>').append(
                                'Benefit eligibility begins after 30 days of employment. After your start date, Sonepar USA will send comprehensive details explaining all offerings and the enrollment process to your QED email address. Please see the attached Benefits Summary for further information. '
                            ),
                            $('<li/>').append(
                                'After your first paycheck processes, you will be eligible for enrollment in the Sonepar USA’s 401(k) Plan with a discretionary matching contribution equal to 50% of your contribution, up to the first 6% deferred, not to exceed 3% of eligible compensation.'
                            )
                        )
                    ),
                    $('<li/>').append(
                        'Vacation is accrued every pay period; you will receive a prorated ',
                        employee.PTO_Days_Vacation,
                        ' days of vacation, available for use after you have completed 6 months of service.  QED allows 40 hours of vacation to be rolled over year to year.'
                    ),
                    $('<li/>').append(
                        'QED offers the following 7 paid holidays:  ',
                        $('<ul/>').append(
                            $('<li/>').append(
                                'New Year’s Day'
                            ),
                            $('<li/>').append(
                                'Memorial Day'
                            ),
                            $('<li/>').append(
                                'Independence Day'
                            ),
                            $('<li/>').append(
                                'Labor Day'
                            ),
                            $('<li/>').append(
                                'Thanksgiving (2) '
                            ),
                            $('<li/>').append(
                                'Christmas Day'
                            )
                        )
                    )
                    
                ),
                $('<p/>').append(
                    $('<strong/>').append('&nbsp;<br>Additional Items:')
                ),
                $('<ul/>').append(
                    $('<li/>').append(
                        'QED will provide the IT equipment necessary to perform your role.'
                    ),
                    (employee.Reimbursement_Eligibility=='Yes') &&
                    $('<li/>').append(
                        'Entertainment, lunches, and misc. expenses with customers will be reimbursed monthly using the Concur expense system.'
                    ),
                    (employee.Phone_Stipend_Eligibility=='Yes') &&
                    $('<li/>').append(
                        'QED will reimburse you up to $90.00/month for your personal cellular phone expense.'
                    ),
                    (employee.Car_Stipend_Eligibility=='Yes') &&
                    $('<li/>').append(
                        'QED will provide a $450/month auto allowance for use of your personal vehicle.'
                    )
                ),
                $('<p/>').append(
                    $('<strong/>').append('&nbsp;<br>Offer Contingency')
                ),
                $('<p/>').append(
                    'The offer outlined above is contingent upon successful completion of a 1) background check ',
                    (employee.JobSubFamily_Driver == 'Yes') &&
                    'and motor vehicle record review',
                    ', 2) pre-employment drug screen and 3) verification of your employment eligibility.'
                ),
                $('<p/>').append(
                    $('<strong/>').append('&nbsp;<br>Additional Information')
                ),
                $('<p/>').append(
                    'As a condition of your employment and by signing a copy of this offer letter, you agree that for a period of twelve months after the voluntary or involuntary termination of your employment for any reason, you will not solicit, recruit, hire, or employ any person who is an employee of QED that you had contact with, knowledge of, or association with during your employment. You further agree that you will not urge or induce any person to terminate his or her employment with QED directly or indirectly by use of a third party.'
                ),
                $('<p/>').append(
                    'Please be advised that this offer and its acceptance is not an employment agreement and does not constitute a contract of employment by either party for any period. The terms of this offer letter may only be changed through a written addendum executed by Andy Wimberg, HR Director.<br>&nbsp;'
                ),
                $('<p/>').append(
                    employee.First_Name,
                    ', we are thrilled at the prospect of you joining the QED team. Please feel free to call me directly if you have any questions.<br>&nbsp;'
                ),
                $('<p/>').append(
                    'Sincerely,'
                ),
                $('<p/>').append(
                    $('<span/>').append(employee.Hiring_Manager, '<br>'),
                    $('<span/>').append(employee.Hiring_Manager_Job_Template_Name)
                ),
                $('<p/>').append(
                    '&nbsp;<br>I agree to the terms of the employment set forth above.  '
                ),
                $('<p/>').append(
                    '&nbsp;'
                )
            )
        )
    );
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

        showCompletedOfferLetter('incomplete', 'complete', arrParts);
    }
    else {
        /*pickDivisionLogo();
        SetImageOnOfferLetter('headerpg1');
        SetImageOnOfferLetter('signaturepg1');*/
    }
});
