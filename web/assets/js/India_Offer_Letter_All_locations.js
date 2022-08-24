/**
 * CHANGE LOGS
 * 07/08/2020 | jjucutan | Initial created
 */

const fnView = function() {
    "use strict";

    $("#markup").html("").append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p style="font-size: 10px;" />').append(
                (OfferLetterData.Event_Location_Value == 'Hyderabad') &&
                $('<mark/>').append(
                    'Western Aqua,',
                    '<br>',
                    'Plot No: 1,2,3 & 4/ Survey',
                    '<br>',
                    '# 8 Kondapur Village',
                    '<br>',
                    'Hyderabad,',
                    '<br>',
                    'Telangana 500084'
                ),
                (OfferLetterData.Event_Location_Value == 'Bangalore') &&
                $('<mark />').append(
                    'PayPal Inc.',
                    '<br>',
                    '8th, Block 11,',
                    '<br>',
                    'Pritech Park SEZ,',
                    '<br>',
                    'Bellandur village, Varthur Hobli,Bangalore East Taluk,',
                    '<br>',
                    'Bangalore – 560103, Karnataka,',
                    '<br>',
                    'India'
                ),
                (OfferLetterData.Event_Location_Value == 'Chennai') &&
                $('<mark />').append(
                    'PayPal Inc.',
                    '<br>',
                    'Futura IT Park, Block A',
                    '<br>',
                    '334, Old Mahabalipuram Road,',
                    '<br>',
                    'Shollinganallur, Chennai – 600119',
                    '<br>',
                    'India'
                ),
                (OfferLetterData.Event_Location_Value == 'Mumbai') &&
                $('<mark />').append(
                    'PayPal Inc.',
                    '<br>',
                    '14<sup>th</sup> Floor, North Block',
                    '<br>',
                    'DR-TECH Park',
                    '<br>',
                    'Western Express Highway',
                    '<br>',
                    'Goregaon (East)',
                    '<br>',
                    'Mumbai – 40063',
                    '<br>',
                    'India'
                )
            )
        )
        // end append
    );

    $("#markup2").html("").append(
        // OfferClause 2
        $('<div class="offerClause2"/>').append(
            $('<p class="mb-30"/>').append(
                $('<mark/>').append(
                    OfferLetterData.Current_Date
                )
            ),
            $('<p class="mb-20"/>').append(
                $('<mark/>').append(
                    OfferLetterData.Full_Legal_Name
                ),
                '<br>',
                $('<mark/>').append(
                    OfferLetterData.Address1
                ),
                '<br>',
                (OfferLetterData.Address2.length > 0) &&
                $('<mark/>').append(
                    OfferLetterData.Address2
                ),
                (OfferLetterData.Address2.length > 0) &&
                '<br>',
                $('<mark/>').append(
                    OfferLetterData.CityStateZip
                )
            ),
            $('<p class="mb-20"/>').append(
                'Dear ',
                $('<mark/>').append(
                    OfferLetterData.Preferred_First_Name
                ),
                ','
            ),
            $('<p/>').append(
                'Further to your application and your recent meetings and discussions, I am delighted to offer you the position of ',
                $('<mark/>').append(
                    OfferLetterData.Business_Title
                ),
                ' in grade ',
                $('<mark/>').append(
                    OfferLetterData.SalaryGrade
                ),
                ' with PayPal India Private Limited (the "Company"). Your Current Work location will be ',
                $('<mark/>').append(
                    OfferLetterData.BuildingAddress
                ),
                '.'
            ),
            $('<p/>').append(
                'Your gross annual base salary will be ',
                $('<mark/>').append(
                    OfferLetterData.SalaryOffered
                ),
                ' INR, paid monthly, directly into your bank account.'
            ),
            (OfferLetterData.Hire_on_Bonus_Eligible == 'Yes') &&
            $('<p class="marked" data-toggle="popover" data-placement="top" data-content="If Hire_on_Bonus_Eligible= YES"/>').append(
                'You shall receive a Sign on bonus of ',
                $('<mark/>').append(
                    OfferLetterData.HIRE_ON_BONUS_AMOUNT
                ),
                ' INR, paid with your first salary. This payment is subject to the applicable deductions and taxes. In the event that your employment ceases for any reason prior to completion of first year from the start date, the net value of the Hiring bonus shall be refundable to the Company on a pro-rated basis and your repayment obligation will be reduced by 1/12 for every full month of employment over the course of the year. '
            ),
            $('<p/>').append(
                'You will be entitled to the statutory and contractual benefits in India and you will receive further details in your offer pack. '
            ),
            $('<p/>').append(
                'Base Salary includes employer and employee Provident Fund (PF) contribution which is required to be made as under:'
            ),
            $('<ul class="mb-20"/>').append(
                $('<li/>').append(
                    'For Indian passport holders, PF contribution amounts to 12% of Basic Salary '
                ),
                $('<li/>').append(
                    'For Non-Indian passport holders, PF contribution amounts to 12% of Basic Salary and Special Allowance'
                )
            ),
            $('<p/>').append(
                'Employees who hold a non-Indian passport/citizenship, should declare the details of the passport in Workday. If you revoke your Indian passport you should upload the details of the same on Workday within 15 days. Employees who have been Indian citizens, including Person of Indian origins need to declare their foreign passports and they will be considered as foreign employees as per Indian law on PF. This provision has been included to comply with Indian law on PF deducted from non-Indian employees.'
            ),
            $('<p/>').append(
                'As a condition of your employment, you will be required to sign a formal employment contract containing the terms set forth in this offer letter. This offer of employment is made subject to:'
            ),
            $('<ol class="mb-20"/>').append(
                $('<li/>').append(
                    'Receipt, prior to your start date, of satisfactory written references from your current employer or any other applicable references;'
                ),
                $('<li/>').append(
                    'Successful completion of international background, PayPal and PayPal Account checks; '
                ),
                $('<li/>').append(
                    'Proof of your ability to work in India on a continuous basis.'
                )
            ),
            $('<p/>').append(
                'This offer of employment will lapse if not signed and returned within 10 days of the date of issue.'
            ),
            $('<p/>').append(
                'Please bring proof of your ability to work in India with you on your first day as we will need to see the original and take a copy for our files.'
            ),
            $('<p class="mb-30" />').append(
                'All of us at PayPal India Private Limited are very excited about you joining our team and look forward to a beneficial and fruitful working relationship. '
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                'Yours sincerely, '
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<mark/>').append(
                    OfferLetterData.Recruiter
                )
            )
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
