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
                    $('<span/>').append(employee.Offer_Date)
                ),
                $('<p/>').append(
                    '1661 West 3rd Ave.<br>',
                    'Denver, CO 80223'
                ),
                $('<p/>').append(
                    $('<span/>').append('Re: ', employee.Full_Name, ' Offer of Employment')
                ),
                $('<p/>').append(
                    'Dear ', employee.First_Name, ':'
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
                    $('<strong/>').append('Salary')
                ),
                $('<ul/>').append(
                    (employee.Compensation_Type == 'Salaried') &&
                    $('<li/>').append(
                        'Your salary will be $',
                        employee.Salary_Amount,
                        '.  Your salary, less deductions, will be paid on a bi-weekly basis. '
                    ),
                    (employee.Compensation_Type == 'Hourly') &&
                    $('<li/>').append(
                        'Your hourly rate will be $',
                        employee.Salary_Amount,
                        '.  Your job is considered non-exempt by Fair Labor Standards Act requirements and therefore you are eligible for overtime. Your hourly wage, less deductions, will be paid on a bi-weekly basis.'
                    ),
                ),
                $('<p/>').append(
                    $('<strong/>').append('Benefits')
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
                        'Vacation is accrued every pay period; you will receive a prorated 2 weeks of vacation, available for use after you have completed 6 months of service.  QED allows 40 hours of vacation to be rolled over year to year.'
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
                    $('<strong/>').append('Additional Items:')
                ),
                $('<ul/>').append(
                    $('<li/>').append(
                        'QED will provide the IT equipment necessary to perform your role.'
                    ),
                    (employee.Reimbursement_Eligibility == 'Yes') &&
                    $('<li/>').append(
                        'Expenses ',
                        $('<ul/>').append(
                            $('<li/>').append(
                                'Entertainment, lunches, and misc. expenses with customers will be reimbursed monthly using the Concur expense system.'
                            ),
                            $('<li/>').append(
                                'QED will reimburse you up to $90.00/month for your personal cellular phone expense.'
                            ),
                            $('<li/>').append(
                                'QED will provide a $450/month auto allowance for use of your personal vehicle.'
                            )
                        )
                    )
                ),
                $('<p/>').append(
                    $('<strong/>').append('Offer Contingency')
                ),
                $('<p/>').append(
                    'This offer is further contingent upon successful completion of a background check and drug screen. You will receive an invitation email with a link directly from Sterling, our trusted business partner, with your specific Login Credentials and contact information to complete this mandatory process.'
                ),
                $('<p/>').append(
                    'In compliance with federal law and in order to begin your onboarding process, we require that you provide us with proof of your identity and authorization to work in the United States. Please see the attached List of Acceptable IDs for the form I9 and send the appropriate documentation to Brian Main as soon as possible.'
                ),
                $('<p/>').append(
                    $('<strong/>').append('Additional Information')
                ),
                $('<p/>').append(
                    'Please be advised that this offer and its acceptance is not an employment agreement and does not constitute a contract of employment by either party for any period. The terms of this offer letter may only be changed through a written addendum executed by Andy Wimberg, HR Director.'
                ),
                $('<p/>').append(
                    employee.Full_Name,
                    ', we are thrilled at the prospect of you joining the QED team. Please feel free to call me directly if you have any questions.'
                ),
                $('<p/>').append(
                    'Sincerely,'
                ),
                $('<p/>').append(
                    $('<span/>').append(employee.Hiring_Manager, '<br>'),
                    $('<span/>').append(employee.Hiring_Manager_Job_Template_Name)
                ),
                $('<p/>').append(
                    'I agree to the terms of the employment set forth above.	'
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
