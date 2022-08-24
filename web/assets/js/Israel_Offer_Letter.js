// Israel Offer Letter
function fnView() {
    $("#markup").html("").append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
              $('<mark/>').append(employee.Current_Date)
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<mark/>').html(employee.Full_Legal_Name + '<br>'),
                $('<mark/>').html(employee.Address_Line_1 ? employee.Address_Line_1 + '<br>' : ''),
                $('<mark/>').html(employee.Address_Line_2 ? employee.Address_Line_2 + '<br>' : ''),
                $('<mark/>').append(employee.City),
                (employee.City ? ', ' : ''),
                $('<mark/>').append(employee.State),
                (employee.State ? ', ' : ''),
                $('<mark/>').append(employee.Postal_Code)
            )
        ),
        $('<div class="offerClause" />').append(
            $('<p style="line-height: 0px;" />').html('&nbsp;')
        ),
        $('<div class="offerClause"/>').append(
            $('<p/>').append('Dear ',
                $('<mark/>').append(
                 (employee.Preferred_First_Name ? employee.Preferred_First_Name : employee.First_Name)
                ),
                ','
            )
        ),
        // Paragraph 1
        $('<div class="offerClause"/>').append(
            $('<p/>').append(
                'Based on our meetings and discussions, I am pleased to offer you the position of ',
                $('<mark/>').append(employee.Job_Title),
                ', with PayPal Israel Ltd. (the "Company"), reporting to ',
                $('<mark/>').append(employee.Manager_Title),
                ', working on a ',
                ((employee.Job_Type == 'Full Time') ? 'full time basis' : 'part time basis of <mark>' + employee.Hours_Per_Week + '</mark>  hours per week'),
                '. I am confident you will find this position an exciting challenge.'
            )
        ),
        // Paragraph 2
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'This letter, once countersigned by you and returned to me, will provide the main commercial terms of your employment and it does not in any manner constitute a binding employment contract between us. Your employment with the Company is subject to and conditional upon you signing a detailed employment agreement in the Company’s standard form (which will include, amongst other terms, confidentiality, non-compete, non-solicitation and assignment of intellectual property undertakings) prior to your start date and which will replace and supersede this Offer and will serve as the final, full and only agreement between us.'
            )
        ),
        // Paragraph 3
        $('<div class="offerClause"/>').append(
            (employee.Exempt == 'E') &&
            $('<p/>').append(
                '<strong>Total Monthly Compensation:</strong> ',
                $('<mark/>').append(
                employee.Salary_Offered
                    ),
                ' Israeli New Shekel (Base Salary ',
                $('<mark/>').append(
                employee.Base_Salary
                ),
                ' ',
                $('<mark/>').append(
                employee.Salary_Currency_Code
                ),
                '; Additional compensation for overtime ',
                $('<mark/>').append(
                employee.Overtime_Rate
                ),
                ' Israeli New Shekel)'
            ),
            (employee.Exempt == 'N') &&
            $('<p/>').append(
                '<strong>Total Monthly Compensation:</strong> ',
                $('<mark/>').append(
                employee.Base_Salary),
                ' NIS (Base Salary) / ',
                $('<mark/>').append(employee.Salary_Offered),
                ' NIS per hour'
            )
        ),
        // Paragraph 4
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                '<strong>Transportation Allowance:</strong> 500 NIS per month'
            )
        ),
        // Paragraph 5
        $('<div class="offerClause"/>').append(
            $('<p/>').append(
                '<strong>Employment Commencement Date:</strong> ',
                $('<mark/>').append(employee.Start_Date)
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<p/>').append(
                '<strong>Place of Work: </strong>'
            )
        ),
        $('<div class="offerClause"/>').append(
            (employee.Workplace_Model == 'In-Office') &&
            $('<p class="marked" data-toggle="popover" data-placement="top" data-content="In-Office"/>').append(
                'You will be required to work from the Company’s office located at <mark>' + employee.LOCATION_DISPLAYNAME + '</mark>. From time to time, you may be required to work at other locations, as directed by the Company.'
            ),
            (employee.Workplace_Model == 'Virtual Flex') &&
            $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Virtual Flex"/>').append(
                'Your role may be performed outside of a PayPal office within Israel part of the time with the use of virtual working tools we provide. In addition to any in-person working, you may also be required to attend a PayPal office for in-person collaboration.  We may amend or end the location of your role or remove the ability to work virtually at any time and will give you notice (but will not provide any compensation) if we do so.  You may find more details, including our expectations of you, within our Offsite Working Policy and associated policies.'
            ),
            (employee.Workplace_Model == 'Virtual') &&
            $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Virtual"/>').append(
                'Your role may be performed outside of a PayPal office within Israel with the use of virtual working tools we provide. You may also be required to attend a PayPal office for in-person collaboration.  You may find more details, including our expectations of you, within our Offsite Working Policy and associated policies.'
            )
        ),
        // Paragraph 6
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                '<strong>Vacation:</strong> 19 working days per year + 1 “optional day”, subject to accrual in accordance with Company.'
            )
        ),
        // Paragraph 7
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                '<strong>Pension Insurance:</strong> Application of Section 14 Arrangement'
            )
        ),
        // Paragraph 8
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                '<strong>Advanced study fund:</strong> employer\'s contribution: 7.5%, employee\'s contribution: 2.5%'
            )
        ),
        // Paragraph 9
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                '<strong>Car:</strong> You will have the option to exchange part of the Gross Salary and the Transportation Allowance to enable you to participate in a car leasing arrangement, in accordance with the provisions of the Company\'s leasing program and policies.'
            )
        ),
        // Paragraph 10
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                '<strong>Notice Period:</strong> During the first 3 months following Commencement Date – according to the law, 30 days thereafter.'
            )
        ),
        // Paragraph 11
        (employee.AIP == 'AIP-Yes') &&
        $('<div class="offerClause"/>').append(
            $('<p class="marked" data-toggle="popover" data-placement="top" data-content="AIP = Yes"/>').append(
                '<strong>Bonus:</strong> You may be eligible to participate in a discretionary bonus program with a target bonus of ', 
                 $('<mark/>').append(employee.Discretionary_Bonus_Percentage),
                 '% of your annual Salary. Payouts are based on individual achievement (the conditions of which shall be determined by the Company at its sole discretion) and are subject to the terms of the program. The Company reserves the right to amend, change or cancel the program at its sole discretion. To avoid doubt, bonus payments shall not be deemed a portion of the Salary for any purpose, including without limitation, when calculating entitlement to severance pay or other amounts payable upon termination of employment.'
            )
        ),
        // Paragraph x
        (employee.SIP == 'SIP-Y') &&
        $('<div class="offerClause"/>').append(
            $('<p class="marked" data-toggle="popover" data-placement="top" data-content="SIP = Yes"/>').append(
              'You may be eligible to participate in a PayPal Sales Incentive Plan (the “',
              $('<strong/>').append('Incentive Plan'),
              '”). The full terms and conditions of the Incentive Plan shall be provided to you separately.'
            )
        ),
        // Paragraph 12
        (employee.Hire_On_Bonus_Eligible == 'Yes') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').append(
                '<strong>Signing Bonus:</strong> You shall receive a signing bonus of ',
                $('<mark/>').append(employee.Hire_On_Bonus_Amount),
                ' ',
                $('<mark/>').append(employee.Hire_On_Bonus_Currency_Code),
                ' (gross) which is due and payable with the first monthly payment. This signing bonus is contingent upon a 12-month commitment of active employment as from the commencement date and is subject to repayment in case you shall not complete the entire Commitment Period.'
            )
        ),
        // Paragraph 13
        $('<div class="offerClause"/>').append(
            $('<p/>').append(
                '<strong>Background check:</strong> As we discussed, you have agreed to begin your employment with our company on ',
                $('<mark/>').append(employee.Start_Date),
                ' pending completion of the background check. However, we reserve the right to end the employment agreement with you should the results of your background investigation not be to the Company\'s satisfaction. We will contact you as soon as the background check process has been completed.'
            ),
            $('<p/>').append(
                'We respect the privacy of all employees and will comply with all applicable laws regarding processing of personal information. All such personal information is processed in accordance with the PayPal Employee Privacy Statement, a copy of which has been given to you in connection with this Agreement. You acknowledge that you have reviewed and understand the Employee Privacy Statement.'
            )
        ),
        // Paragraph 14
        $('<div class="offerClause"/>').append(
            $('<p/>').append(
                $('<span/>').html(
                    'If you accept our proposal, please sign the confirmation below.<br>'
                ),
                $('<span/>').html(
                    '<strong>This Offer will be valid through to</strong>'
                ),
                (employee.Exempt == 'N') &&
                $('<span/>').html(
                    ' <strong>Allow 10 days from date of issue</strong>'
                ),
                (employee.Exempt == 'E') &&
                $('<span/>').html(
                    ' <strong>Allow 7 days from date of issue</strong>'
                )
            )
        ),
        // Paragraph 15
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'We would be glad to have you on board.'
            )
        ),
        // Paragraph 16
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                '&nbsp;'
            )
        ),
        // Paragraph 17
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Regards,'
            )
        ),
        // Paragraph 18
        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<mark class="signDisplay2"/>').html('&nbsp;'),
                '<br>',
                $('<span/>').html('Company Signatory')
            )
        ),        // Paragraph 19
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                '&nbsp;'
            )
        ),
        // Paragraph 20
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'I accept the above proposal. I confirm that I am aware that my employment with the Company is subject to the signing of a full employment agreement.'
            )
        )
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
            $('<p/>').html(
                '<strong>Registered Address:</strong><br>PayPal Israel Ltd.<br>Electra Tower,<br>98 Yigal Alon St.<br>Tel-Aviv, Israel<br>Tel: +972-3-7687100<br>Fax: +972-3-7687110'
            )
        )
        // end append
    );
}

$(function() {
    ($("#launch_date").val().trim().length) ? employee.Launch_Date = $("#launch_date").val() : $("#launch_date").val(employee.Launch_Date);
    $("#state").val(employee.State);
    employee.State = $("#state option:selected").text();
    employee.Recruiter_Name = $("#recruiter_signature").val();
    
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
