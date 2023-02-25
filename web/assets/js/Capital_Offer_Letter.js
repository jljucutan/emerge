// Capital Offer Letter
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
                    $('<span/>').html(employee.Offer_Date)
                ),
                $('<p/>').append(
                    $('<span/>').html(employee.Full_Name + '<br>'),
                    $('<span/>').html(employee.Address1 + '<br>'),
                    $('<span/>').html(employee.City + ', '),
                    $('<span/>').html(employee.State + ', '),
                    $('<span/>').html(employee.Zip)
                ),
                $('<p/>').html(
                    'Dear ' + employee.First_Name +','
                ),
                $('<p/>').html(
                    'We at Capital Electric are delighted that you are considering joining our organization.  We believe that our commitment to growth, and the vision, values and practices that create our organizational framework, provide an ideal situation for you to continue, and accelerate, your professional growth.'
                ),   
                $('<p/>').html(
                    'This letter confirms our offer and provides information on our benefits package.'
                ),   
                $('<p/>').append(
                    'The offer outlined above is contingent upon successful completion of a 1) background check',
                    (employee.JobSubFamily_Driver == 'Yes') &&
                    ' and motor vehicle record review',
                    ', 2) pre-employment drug screen and 3) verification of your employment eligibility.'
                ),   
                $('<p/>').html(
                    'The specifics of our offer to you are as follows:'
                ),   
                $('<p/>').append(
                    'Initial Position: ' + employee.Job_Template_Name + '<br>',
                    'Initial Salary: $', 
                    employee.Salary_Amount,
                    (employee.Salary_Type == 'annually') &&
                    $('<span/>').append(
                        ' annual salary.<br>'
                    ),
                    (employee.Salary_Type != 'annually') &&
                    $('<span/>').append(
                        (employee.Salary_Type == 'weekly') &&
                        ' weekly salary',
                        (employee.Salary_Type == 'bi-monthly') &&
                        ' bi-monthly basis',
                        (employee.Salary_Type == 'hourly') &&
                        ' per hour',
                        (employee.Salary_Type == 'bi-weekly') &&
                        ' per bi-weekly pay period',
                        ', for a ',
                        getAnnualSalary(employee.Salary_Amount, employee.Salary_Type),
                        ' annual salary.<br>'
                    ),
                    'Vacation: ' + employee.PTO_Days_Vacation + ' days per year<br>',
                    'Vacation Accrual: Bi-weekly accrual of  ' + employee.Vacation_Accrual_Rate + ' hours<br>',
                    'Sick Leave: ' + employee.PTO_Days_Sick + ' days per year<br>',
                    'Sick Accrual: Bi-weekly accrual of ' + employee.Sick_Accrual_Rate + ' hours'
                ),

                $('<p/>').append(
                    '<strong>Benefits Package</strong><br>Life Insurance, Long Term Disability and Short-Term Disability Coverage: Company sponsored plan is available after sixty days of employment.'
                ),
                $('<p/>').append(
                    'Health, Vision and Dental: Company cosponsored plans are available after sixty days of employment.'
                ),
                $('<p/>').append(
                    '401K Plan, Flexible Spending Account, Employee Assistance Program and other benefits'
                ),
                $('<p/>').append(
                    'As a condition of your employment and by signing a copy of this offer letter, you agree that for a period of twelve months after the voluntary or involuntary termination of your employment for any reason, you will not solicit, recruit, hire, or employ any person who is an employee of Capital Electric that you had contact with, knowledge of, or association with during your employment. You further agree that you will not urge or induce any person to terminate his or her employment with Capital Electric directly or indirectly by use of a third party.'
                ),
                $('<p/>').append(
                    'Our conversations with you leave us confident that you are positioned to immediately contribute to the achievement of our near-term objectives and to play a key role in our future success.  Your breadth of experience lends itself directly to the challenges an aggressive, forward-thinking organization like ours faces.  Most important to us, however, is that we believe you are the type of individual we want to work with and grow with.'
                ),

                $('<p/>').html(
                    'Sincerely,'
                ),
                $('<p/>').append(
                    $('<span/>').html(employee.Hiring_Manager + '<br>'),
                    $('<span/>').html(employee.Hiring_Manager_Job_Template_Name)
                ),
                $('<p/>').html(
                    'I understand that by electronically signing this document by typing my full name below, that I acknowledge, agree and attest that the information provided by me is true and correct and I am freely intending to create and adopt as my own a legally binding electronic signature that carries the same legal effect and enforceability as my handwritten signature.'
                ),
                $('<p/>').html(
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

