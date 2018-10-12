// United Kingdom Offer Letter
function fnView() {
    $("#markup").html("").append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p/>').html(employee.Current_Date)
        ),
        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<span/>').html(employee.Full_Legal_Name + '<br>'),
                $('<span/>').html(employee.Address_Line_1 ? employee.Address_Line_1 + '<br>' : ''),
                $('<span/>').html(employee.Address_Line_2 ? employee.Address_Line_2 + '<br>' : ''),
                $('<span/>').html((employee.City ? employee.City + ', ' : '') + (employee.State ? employee.State + ', ' : '') + employee.Postal_Code)
            )
        ),
        $('<div class="offerClause" style="line-height: 0px;"/>').append(
            $('<p/>').html('&nbsp;')
        ),
        $('<div class="offerClause"/>').append(
            $('<p/>').html('Dear ' + (employee.Preferred_First_Name ? employee.Preferred_First_Name : employee.First_Name) + ',')
        ),
        // Paragraph 1
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Further to your ' + ((employee.Employee_Group == 'I') ? 'application for a full-time ' + employee.Internship_Length + ' ' + employee.Internship_Term + ' fixed term internship and your ' : '') + ((employee.Employee_Group == 'T') ? 'application for a full-time fixed term position and your' : '') + ' recent meetings and discussions, I am delighted to offer you the position of ' + employee.Job_Title + ' with ' + (employee.EntityName=='PayPal SE'?'PayPal SE':'PayPal (UK) Limited') + ' (the "Company").'
            )
        ),
        // Paragraph 2
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Your gross annual base salary will be ' + employee.Salary_Annual_Amount + ' ' + employee.Salary_Currency_Code + ', ' + ((employee.Employee_Group == 'I' || employee.Employee_Group == 'T') ? 'prorated,' : '') + ' paid monthly, directly into your bank account.'
            )
        ),
        // Paragraph 3 to 4
        (employee.AIP == 'Yes') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'You will be eligible to participate in the PayPal Holdings, Inc. Annual Incentive Plan for a specified fiscal year (AIP) with an annual bonus based on individual achievement as well as company performance.  The annual bonus period is from January 1 through December 31. Your target bonus for the AIP is ' + employee.EIP_Target_Percent + '% of your annual base salary, pro-rated based on your hire date and days of service during the AIP bonus period.  There is no guarantee any AIP bonus will be awarded or received, and any actual bonus will be determined after the end of the annual bonus period. Any AIP bonus, even if it is made repeatedly or regularly and whatever its amount, can never lead to a vested right for you, the employee.'
            ),
            $('<p/>').html(
                'To be eligible to receive any AIP bonus, you must be employed on or before the first business day of the fourth quarter and you must be in continuous employment on the date the bonus is received, subject to applicable laws. If your employment start date with a PayPal company commences on or after the first U.S. business day in the final quarter of the calendar year, your eligibility to participate in the AIP will begin on January 1st of the following calendar year. Any bonus is at PayPal’s sole and absolute discretion and subject to the terms and conditions of the AIP.  PayPal reserves the right, in its sole discretion, to amend, change or cancel the AIP at any time.  Further, the bonus plan that you are eligible to participate in may change over time.  You acknowledge and agree that PayPal may substitute the plan referenced in this letter and any contract of employment or any offer documentation, as it determines in its sole discretion from time to time.'
            )
        ),
        // Paragraph 5
        (employee.CS_OPS_Incentive_Plan) &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'You will be eligible to participate in an incentive plan based on individual achievement and/or other group performance measures.  Your target incentive is ' + employee.CS_Incentive_Plan + '% of your eligible earnings. Details of the plan will be provided to you by your manager.  The payment of any incentive is at the Company’s sole and absolute discretion and subject to the terms and conditions of the plan.  The Company reserves the right, in its sole discretion, to amend, change or cancel the plan at any time.'
            )
        ),
        // Paragraph 6
        (employee.Sales_Incentive_Plan) &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'You will be eligible to participate in a PayPal Sales Incentive Plan (the “Incentive Plan”). The full terms and conditions of the Incentive Plan will be provided to you by your manager. The payment of any incentive is at the Company’s sole and absolute discretion and subject to the terms and conditions of the plan. The Company reserves the right, in its sole discretion, to amend, change or cancel the plan at any time.'
            )
        ),
        // Paragraph 6.5
        (employee.Sales_Incentive_Plan) &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'You will be eligible to participate in a sales incentive plan with a target incentive of ' + employee.Sales_Target_Dollar_Amount + ' ' + employee.Sales_Target_Currency + '. Details of the plan will be provided to you by your manager. The payment of any incentive is at the Company’s sole and absolute discretion and subject to the terms and conditions of the plan. The Company reserves the right, in its sole discretion, to amend, change or cancel the plan at any time.'
            )
        ),
        (employee.Hire_on_Bonus_Eligible == "Yes" && employee.Installment_Amount != "") &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'You shall receive a Hiring bonus of ' + employee.HIRE_ON_BONUS_AMOUNT + ' ' + employee.HIRE_ON_BONUS_CRNCY_CD+ 'This hiring on bonus will be paid in three installments of' + employee.Installment_Amount + ' ' + employee.HIRE_ON_BONUS_CRNCY_CD + 'in the first three months of your employment.  These payments are subject to the applicable deductions and taxes. In the event that your employment ceases for any reason prior to completion of first year from the start date, the net value of the Hiring bonus shall be refundable to the Company on a pro-rated basis and your repayment obligation will be reduced by 1/12 for every full month of employment over the course of the year.'
            )
        ),
        (employee.Hire_on_Bonus_Eligible == "Yes" && employee.Installment_Amount == "") &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'You shall receive a Hiring bonus of ' + employee.HIRE_ON_BONUS_AMOUNT + ' ' + employee.HIRE_ON_BONUS_CRNCY_CD + ', paid with your first salary. This payment is subject to applicable deductions and taxes. In the event that your employment ceases for any reason prior to completion of your first year from the start date, the net value of the Hiring Bonus shall be refundable to the Company on a pro-rated basis and your repayment obligation will be reduced by 1/12th for every full month of employment over the course of the year.'
            )
        ),
        // Paragraph 7 to 9
        (employee.Relocation_Bonus == 'Yes') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'To help you relocate from ' + employee.Current_Location + ' to ' + employee.Future_Location + (employee.Relocation_Bonus == 'Y' ? 'you will receive a one-time miscellaneous lump sum cash' :'') + (employee.Relocation_Bonus == 'N' ? 'you will be entitled to benefits as outlined in your Relocation Agreement. As part of the relocation assistance, you shall also receive a one-time relocation' :'') + ' allowance of ' + employee.Relocation_Amount + ' ' + employee.Relocation_Currency + ', which you may use for your relocation through our global relocation partner.'
            ),
            $('<p/>').html(
                'Should your employment be terminated by the Company for a justified reason for which you are responsible or as a result of your resignation within 12 full months from your start date, all miscellaneous and lump sum cash allowances must be repaid in full.'
            ),
        (employee.Relocation_Bonus == 'No') &&
            $('<p/>').html(
                'Upon acceptance of this offer letter our relocation partner will contact you directly to initiate this process.'
            )
        ),
        // Paragraph 10
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'You will be entitled to the statutory and contractual benefits in UK and you will receive further details in your offer pack.'
            )
        ),
        // Paragraph 11
        $('<div class="offerClause"/>').append(
            $('<div class="paragrap"/>').append(
                $('<span/>').html(
                    'As a condition of your employment, you will be required to sign a formal employment contract containing the terms set forth in this offer letter. This offer of employment is made subject to:<br>'
                ),
                $('<ol/>').append(
                    $('<li/>').html(
                        'Receipt, prior to your start date, of satisfactory written references from your current employer or any other applicable references;'
                    ),
                    $('<li/>').html(
                        'Successful completion of international background and PayPal Account checks;'
                    ),
                    $('<li/>').html(
                        'Proof of your ability to work in UK on a continuous basis.'
                    )
                )
            )
        ),
        // Paragraph 12
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'This offer of employment will lapse if not signed and returned within 10 days of the date of issue.'
            )
        ),
        // Paragraph 13
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Please bring proof of your ability to work in UK with you on your first day as we will need to see the original and take a copy for our files.'
            )
        ),
        // Paragraph 14
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'All of us at ' + (employee.EnityName == 'PayPal SE' ? 'PayPal SE' : 'PayPal (UK) Limited') + ' are very excited about you joining our team and look forward to a beneficial and fruitful working relationship.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Yours sincerely,'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<span/>').html('On behalf of '),
                $('<span/>').html((employee.EnityName == 'PayPal SE' ? 'PayPal SE' : 'PayPal (UK) Limited') + '<br><span id="signatory-complimentary"></span>'),
                $('<span/>').html('<br>Company Signatory')
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
                '<strong>Registered Address:</strong><br>' + (employee.EnityName == 'PayPal SE' ? 'PayPal SE' : 'PayPal (UK) Limited') + '<br>5 New Street Square<br>London<br>EC4A 3TW<br>United Kingdom<br>Tel: +44 (0) 20 8605 3000<br>Fax: +44 (0) 20 8605 3002'
            )
        )
        // end append
    );
}

$(function() {
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
