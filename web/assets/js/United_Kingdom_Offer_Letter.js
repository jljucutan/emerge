// United Kingdom Offer Letter
function fnView() {
    $("#markup").html("").append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p/>').html(employee.Current_Date)
        ),
        $('<div class="offerClause">').append(
            $('<p/>').append(
                  $('<mark/>').append(
                $('<span/>').html(employee.Full_Legal_Name + '<br>'),
                $('<span/>').html(employee.Address_Line_1 ? employee.Address_Line_1 + '<br>' : ''),
                $('<span/>').html(employee.Address_Line_2 ? employee.Address_Line_2 + '<br>' : ''),
                $('<span/>').html((employee.City ? employee.City + ', ' : '') + (employee.State ? employee.State + ', ' : '') + employee.Postal_Code)
            )
)
        ),
        $('<div class="offerClause" style="line-height: 0px;"/>').append(
            $('<p/>').html('&nbsp;')
        ),
        $('<div class="offerClause"/>').append(
               $('<p/>').html('Dear ' + (employee.Preferred_First_Name ? employee.Preferred_First_Name : employee.First_Name) +',')

),
        
        //2020-05-28 | SERVICES-35652 | CDY | V5 | New Paragraph as per latest request START
       

        (employee.Employee_Group == 'T') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Further to your application for a full-time fixed term position and your recent meetings and discussions, I am delighted to offer you the position of ' + employee.Job_Title + ' with PayPal SE (the "Company").'
            ),
            $('<p/>').html(
                'Your gross annual base salary will be ' + employee.Salary_Annual_Amount + ' ' + employee.Salary_Currency_Code + ', paid monthly, directly into your bank account.'
            )
        ),

        (employee.Employee_Group != 'T') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Further to your recent meetings and discussions, I am delighted to offer you the position of ' + employee.Job_Title + ' with PayPal SE (the "Company").'
            ),
            $('<p/>').html(
                'Your gross annual base salary will be ' + employee.Salary_Annual_Amount + ' ' + employee.Salary_Currency_Code + ','
            )
        ),



        

      
        //2020-05-28 | SERVICES-35652 | CDY | V5 | New Paragraph as per latest request END

        // Paragraph 3 to 4
        (employee.AIP == 'Yes') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'You will be eligible to participate in the PayPal Holdings, Inc. Annual Incentive Plan for a specified fiscal year (AIP) with an annual bonus based on individual achievement as well as company performance.  The annual bonus period is from January 1 through December 31. Your target bonus for the AIP is ' + employee.EIP_Target_Percent + '% of your annual base salary, pro-rated based on your hire date and days of service during the AIP bonus period.  There is no guarantee any AIP bonus will be awarded or received, and any actual bonus will be determined after the end of the annual bonus period. Any AIP bonus, even if it is made repeatedly or regularly and whatever its amount, can never lead to a vested right for you, the employee.'
            ),
            $('<p/>').html(
                'To be eligible to receive any AIP bonus, you must be employed before October 1st and you must be in continuous employment on the date the bonus is received, subject to applicable laws. If your employment start date with a PayPal company commences on or after October 1st, your eligibility to participate in the AIP will begin on January 1st of the following calendar year. Any bonus is at PayPal’s sole and absolute discretion and subject to the terms and conditions of the AIP.  PayPal reserves the right, in its sole discretion, to amend, change or cancel the AIP at any time.  Further, the bonus plan that you are eligible to participate in may change over time.  You acknowledge and agree that PayPal may substitute the plan referenced in this letter and any contract of employment or any offer documentation, as it determines in its sole discretion from time to time.'
            )
        ), //2021-03-03 | SERVICES-35652 | CDY | V6 | Changed verbiage as per request
        // Paragraph 5
        /*(employee.CS_OPS_Incentive_Plan) &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'You will be eligible to participate in an incentive plan based on individual achievement and/or other group performance measures.  Your target incentive is ' + employee.CS_Incentive_Plan + '% of your eligible earnings. Details of the plan will be provided to you by your manager.  The payment of any incentive is at the Company’s sole and absolute discretion and subject to the terms and conditions of the plan.  The Company reserves the right, in its sole discretion, to amend, change or cancel the plan at any time.'
            )
        ),*/
        // Paragraph 6
        // (employee.Sales_Incentive_Plan == 'Yes') &&
        // $('<div class="offerClause"/>').append(
        //     $('<p/>').html(
        //         'You will be eligible to participate in a PayPal Sales Incentive Plan (the “Incentive Plan”). The full terms and conditions of the Incentive Plan will be provided to you by your manager. Any bonus or payment or award under the Incentive Plan shall be determined by the Company in its sole and absolute discretion, subject to the terms and conditions of the Incentive Plan and of such amount, in such form, at such intervals and subject to such conditions as the Company may in its absolute discretion determine from time to time.'
        //     ),

        //     $('<p/>').html(
        //         'The Company reserves the right, in its sole discretion, to amend, change, withdraw or cancel the Incentive Plan at any time. Further, the incentive plan that the Employee is eligible to participate in may change over time. The Employee acknowledges and agrees that the Company may substitute or cancel the Incentive Plan referenced in this offer documentation, as it determines in its sole discretion from time to time.   '
        //     )
        // ),
        // Paragraph 6.5
        /*
        (employee.Sales_Incentive_Plan) &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'You will be eligible to participate in a sales incentive plan with a target incentive of ' + employee.Sales_Target_Dollar_Amount + ' ' + employee.Sales_Target_Currency + '. Details of the plan will be provided to you by your manager. The payment of any incentive is at the Company’s sole and absolute discretion and subject to the terms and conditions of the plan. The Company reserves the right, in its sole discretion, to amend, change or cancel the plan at any time.'
            )
        ),
        */


        // (employee.Guaranteed_Commission_Eligible == 'yes') &&
        // $('<div class="offerClause"/>').append(
        //     $('<p/>').html(
        //         'During the first ' + employee.Guaranteed_Commission_Months + ' months of your employment you will be paid quarterly a non-recoverable draw equivalent to one-quarter of your annual Target Incentive amount in accordance with the Incentive Plan. After ' + employee.Guaranteed_Commission_Months + ' months the amount of any incentive payment will be dependent on your performance against pre-defined targets in the Incentive Plan.'
        //     )
        // ),


        (employee.Hire_on_Bonus_Eligible == "Yes" && employee.Installment_Amount != "") &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'You shall receive a Hiring bonus of ' + employee.HIRE_ON_BONUS_AMOUNT + ' ' + employee.HIRE_ON_BONUS_CRNCY_CD+ '. This hiring on bonus will be paid in three installments of ' + employee.Installment_Amount + ' ' + employee.HIRE_ON_BONUS_CRNCY_CD + ' in the first three months of your employment.  These payments are subject to the applicable deductions and taxes. In the event that your employment ceases for any reason prior to completion of first year from the start date, the net value of the Hiring bonus shall be refundable to the Company on a pro-rated basis and your repayment obligation will be reduced by 1/12 for every full month of employment over the course of the year.'
            )
        ),
        (employee.Hire_on_Bonus_Eligible == "Yes" && employee.Installment_Amount == "") &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'You shall receive a Hiring bonus of ' + employee.HIRE_ON_BONUS_AMOUNT + ' ' + employee.HIRE_ON_BONUS_CRNCY_CD + ', paid with your first salary. This payment is subject to applicable deductions and taxes. In the event that your employment ceases for any reason prior to completion of your first year from the start date, the net value of the Hiring Bonus shall be refundable to the Company on a pro-rated basis and your repayment obligation will be reduced by 1/12th for every full month of employment over the course of the year.'
            )
        ),
/*
        (employee.Relocation_Bonus == 'Yes') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'To help you relocate from ' + employee.Current_Location + ' to ' + employee.Future_Location + ', you will be entitled to benefits as outlined in your Relocation Agreement.'
            ),
             $('<p/>').html(
                'Should your employment be terminated by the Company for a justified reason for which you are responsible or as a result of your resignation within 12 full months from your start date, all miscellaneous and lump sum cash allowances must be repaid in full.'
            ),
        ),*/


        // Paragraph 7 to 9


        (employee.Relocation == 'Y' && employee.Relocation_Bonus == 'No') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'To help you relocate from ' + employee.Current_Location + ' to ' + employee.Future_Location + ', you will be entitled to benefits as outlined in your Relocation Agreement.'
            ),
            $('<p/>').html(
                'Should your employment be terminated by PayPal SE for a justified reason for which you are responsible or as a result of your resignation within 12 full months from your start date, all miscellaneous and lump sum cash allowances must be repaid in full.'
            ),

            $('<p/>').html(
                'Upon acceptance of this offer letter our relocation partner will contact you directly to initiate this process.'
            )
        ),

        (employee.Relocation == 'Y' && employee.Relocation_Bonus == 'Yes') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'To help you relocate from ' + employee.Current_Location + ' to ' + employee.Future_Location + ', you will receive a one-time miscellaneous lump sum cash allowance of ' + employee.Relocation_Amount + ' ' + employee.Relocation_Currency + ', which you may use for your relocation through our global relocation partner.    '
            ),
            $('<p/>').html(
                'Should your employment be terminated by PayPal SE for a justified reason for which you are responsible or as a result of your resignation within 12 full months from your start date, the miscellaneous lump sum cash allowance must be repaid in full.'
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
            $('<p class="paragraph"/>').append(
        $('<span/>').html(
          'As a condition of your employment, you will be required to sign a formal employment contract containing the terms set forth in this offer letter. This offer of employment is made subject to:<br>'
        ),
        $('<ol/>').append(
          $('<li/>').html(
            'Receipt, prior to your start date, of satisfactory written references from your current employer or any other applicable references;'
          ),
          $('<li/>').html(
            'Successful completion of international background checks;'  //2021-03-03 | SERVICES-35652 | CDY | V6 | Changed verbiage as per request
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
                'All of us at PayPal SE are very excited about you joining our team and look forward to a beneficial and fruitful working relationship.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Yours sincerely,'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<span/>').html('For and on behalf of '),
                $('<span/>').html('PayPal SE<br><span id="signatory-complimentary"></span>'),
                $('<span/>').html('<br>Company Signatory acting under power of attorney')
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
            $('<span class="sidebar"/>').html(
                'Registered Address:<br style="display: none!important">'
                ),
            $('<span class="sidebar"/>').html(
                'PayPal SE<br>Ballycoolin Business Park<br>Ballycoolin Road<br>Blanchardstown, Dublin 15<br>Ireland'
                )
            )
        // end append
    );

    $("#markup5").html("").append(
        // OfferClause 5
        $('<div class="offerClause5">').append(
            (employee.EnityName == 'PayPal SE')  &&
            $('<p style="font-size: 10px !important; margin-top: 20px;"/>').html(
                'Registered in Ireland with company number 646492<br>Registered office: Ballycoolin Business Park, Ballycoolin Road, Blanchardstown, Dublin 15<br>Directors: Cameron McLean, Tom Brown'
            ),
            (employee.EnityName != 'PayPal SE')  &&
            $('<p style="font-size: 10px !important; margin-top: 20px;"/>').html(
                'Registered Office: Ballycoolin Business Park, Ballycoolin Road, Blanchardstown, <br>Dublin 15. D15 VNC4. <br>Societas Europaea Registered in Ireland No. 646492 <br>Directors: Mr Tim Minall (UK), Mr Sean Byrne (IRL), Mrs Daniela Matiz (LU)  '
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

        var arrParts2 = [
            [1, 'hidden_pg5']
        ];

        showCompletedOfferLetter('incomplete2', 'complete2', arrParts2);
    }
});
