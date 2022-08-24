// Australia Offer Letter
function fnView() {
    $("#markup").html("").append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p/>').html('<mark>' + employee.Current_Date + '</mark>')
        ),
          $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<mark/>').html(employee.Full_Legal_Name + '<br>'),
                $('<mark/>').html(employee.Address_Line_1 ? employee.Address_Line_1 + '<br>' : '&nbsp;<br>'),
                (employee.Address_Line_2) &&
                $('<mark/>').html(employee.Address_Line_2 ? employee.Address_Line_2 + '<br>' : ''),
                $('<mark/>').html(employee.City ? employee.City: ''),
                $('<span/>').html(employee.City ? ', ' : ', '),
                $('<mark/>').html(employee.State ? employee.State: ''),
                $('<span/>').html(employee.State ? ', ' : ', '),
                $('<span/>').html(employee.Postal_Code ? ' ' : ' '),
                $('<mark/>').html(employee.Postal_Code)
            )
        ),
        $('<div class="offerClause" style="line-height: 0px;"/>').append(
            $('<p/>').html('&nbsp;')
        ),
        $('<div class="offerClause"/>').append(
            $('<p/>').html('Dear ' + (employee.Preferred_First_Name ? '<mark>'+employee.Preferred_First_Name+'</mark>' : '<mark>'+employee.First_Name+'</mark>') + ',')
        ),
        // Paragraph 1
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'We are delighted to offer you the position of ' + '<mark>'+ employee.Job_Title + '</mark>' + ' with PayPal Australia Pty Ltd (the "Company") following your recent meetings and discussions. Your start date will be ' + '<mark>'+ employee.Start_Date + '</mark>' + '. Your gross annual base salary will be ' + '<mark>' + employee.Salary_Amount + '</mark>' + ' ' + '<mark>' + employee.Salary_Currency + '</mark>' + ', ' + ((employee.Employee_Type == 'I' || employee.Employee_Type == 'T') ? 'prorated, ' : '') + ' paid monthly.'
            )
        ),
        // Paragraph 2
        (employee.AIP == 'Yes') &&
        $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Annual Incentive Plan (AIP)"/>').append(
            $('<p/>').append(
                'You will be eligible to participate in a variable compensation plan with a target incentive of ',
                $('<mark/>').append(employee.eIP_Target_Pct, '%'),
                '. The payment of any incentive is at the Company’s sole and absolute discretion and subject to the terms and conditions of the plan. The Company reserves the right, in its sole discretion, to amend, change or cancel the plan at any time. Further information is contained in your employment contract. '
            )
        ),
        // Paragraph 3
        (employee.Relocation == 'Y') &&
        $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee is Relocating"/>').append(
            $('<p/>').append(
                'To help you relocate from ',
                $('<mark/>').append(employee.RelocationFrom),
                ' to ',
                $('<mark/>').append(employee.RelocationTo),
                ', you will be entitled to assistance  as outlined in your Relocation Agreement. Upon acceptance of this offer letter our relocation partner AIRES will contact you directly to initiate this process.'
            )
        ),
        // Paragraph 4
        (employee.Relocation_Bonus == 'Yes') &&
        $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Relocation Bonus"/>').append(
            $('<p/>').html(
                'As part of the relocation assistance, you shall also receive a one-time relocation allowance of ' + '<mark>'+ employee.Relocation_Amount + '</mark>' + ' ' + '<mark>' + employee.Relocation_Currency + '</mark>' + ' payable during the first month of employment. This payment is subject to the applicable deductions and taxes. Should your employment with the Company terminate for reasons of cause or resignation within 12 full months of your Start Date, you must repay in full the relocation allowance and any associated expenses to the Company. No repayment is required for termination after twelve months of employment. To the extent permitted by law, the Company is authorised to withhold any monies due to you at the time of termination an amount necessary to satisfy this obligation.'
            )
        ),
        // Paragraph 5
        (employee.SignOn_Bonus == 'Yes') &&
        $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Qualifies for One-time Sign On Bonus"/>').append(
            $('<p/>').append(
                'You shall receive a Hiring bonus of ',
                $('<mark/>').append(employee.Signing_Bonus_Amount),
                ' ',
                $('<mark/>').append(employee.Signing_Bonus_Currency),
                ', paid with your first salary. This payment is subject to the applicable deductions and taxes. In the event that your employment ceases for any reason prior to completion of the first year from the Start Date, the Company may require you to refund the net value of the Hiring bonus. The net value of the Hiring bonus shall be refundable to the Company on a pro-rated basis and your repayment obligation will be reduced by 1/12 for every full month of employment over the course of the year.'
            )
        ),
        // Paragraph 6
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'You will be entitled to the statutory benefits in Australia and you will receive further details in your offer pack.'
            ),
            $('<p/>').html(
                'As a condition of your employment, you will be required to sign an employment contract containing the terms set forth in this offer letter, as well as additional terms outlined in the contract.'
            )
        ),
        // Paragraph 7
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'This offer of employment is made subject to:'
            ),
            $('<ol/>').append(
                $('<li/>').html(
                    'Receipt, prior to your start date, of satisfactory references from your current employer or any other applicable references;'
                ),
                $('<li/>').html(
                    'Successful completion of international background checks;'
                ),
                $('<li/>').html(
                    'You meeting any applicable requirements as determined by APRA, AUSTRAC or ASIC from time to time; and'
                ),
                $('<li/>').html(
                    'Proof of your ability to work in Australia on a continuous basis.'
                )
            )
        ),
        // Paragraph 8
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'This offer of employment will lapse if not signed and returned within 10 days of the date of issue.'
            )
        ),
        // Paragraph 9
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Please bring proof of your ability to work in Australia with you on your first day as we will need to see the original and take a copy for our files. If you are unable to bring this documentation to the office, we will require you to send certified copies to us prior to your start date. '
            )
        ),
        // Paragraph 10
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'All of us at PayPal Australia Pty Ltd are very excited about you joining our team and look forward to a beneficial and fruitful working relationship.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Yours sincerely,'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<mark class="signDisplay2"/>').html(''),
                $('<span/>').html('On behalf of PayPal Australia Pty Ltd')
            )
        )
        // end append
    );

    $("#markup2").html("").append(
        // OfferClause 2
        $('<div class="offerClause2">').append(
            $('<p/>').html(
                '<strong>Company:</strong>'
            )
        )
        // end append
    );

    $("#markup3").html("").append(
        // OfferClause 3
        $('<div class="offerClause3">').append(
            $('<p/>').html(
                '<strong>Accepted:</strong>'
            )
        )
        // end append
    );

    $("#markup4").html("").append(
        // OfferClause 4
        $('<div class="offerClause4">').append(
            $('<p/>').html(
                'PayPal Australia Pty Limited<br>ABN 93 111 195 389<br>Level 23, 1 York Street<br>Sydney NSW 2000 Australia'
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
