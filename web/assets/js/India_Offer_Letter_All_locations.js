/**
 * CHANGE LOGS
 * 07/08/2020 | jjucutan | Initial created
 * 09/15/2022 | jjucutan | created version 6
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
                    '# 8 Kondapur Village,',
                    '<br>',
                    'Hyderabad,',
                    '<br>',
                    'Telangana 500084'
                ),
                (OfferLetterData.Event_Location_Value == 'Bangalore') &&
                $('<mark />').append(
                    'RGA Tech Park,',
                    '<br>',
                    'Block 1, 2nd Floor',
                    '<br>',
                    '3/1 Sarjapur Main Road,',
                    '<br>',
                    'Carmelaram,',
                    '<br>',
                    'Hadosiddapura,',
                    '<br>',
                    'Chikkakannalli,',
                    '<br>',
                    'Bengaluru,',
                    '<br>',
                    'Karnataka-560035'
                ),
                (OfferLetterData.Event_Location_Value == 'Chennai') &&
                $('<mark />').append(
                    'Futura IT Park, Block A',
                    '<br>',
                    '334, Old Mahabalipuram Road,',
                    '<br>',
                    'Shollinganallur, Chennai – 600119'
                ),
                (OfferLetterData.Event_Location_Value == 'Mumbai') &&
                $('<mark />').append(
                    '14<sup>th</sup> Floor, North Block,',
                    '<br>',
                    'DR-TECH Park,',
                    '<br>',
                    'Western Express Highway,',
                    '<br>',
                    'Goregaon (East),',
                    '<br>',
                    'Mumbai – 40063'
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
                ' with PayPal India Private Limited (the "Company").'
            ),
            // Workplace model in office
            (OfferLetterData.WORKPLACE_MODEL == 'In-Office') &&
            $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Workplace Model = In Office"/>').append(
                'Your Current Work location will be ',
                $('<mark/>').append(
                    OfferLetterData.BuildingAddress
                ),
                '.'
            ),
            // Workplace model virtual flex
            (OfferLetterData.WORKPLACE_MODEL == 'Virtual Flex') &&
            $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Workplace Model = Virtual Flex"/>').append(
                'Your role may be performed outside of a PayPal office, at your discretion, with the use of virtual working tools we provide. You may choose the location for your virtual working, however you must be available to attend a PayPal office, ',
                $('<mark/>').append(
                    OfferLetterData.BuildingAddress
                ),
                ' for in-person collaboration if required. Should you choose to work virtually, since such choice is being made at your discretion based on personal preferences as compared to PayPal’s business needs, you agree that you will not be entitled to, and hereby waive all associated rights, to the benefits or entitlements of any other location or State. Your benefits and entitlements shall continue to be governed by the terms of this employment offer. We may amend or end the location of your role or remove the ability to work virtually at any time and will give you notice (but will not provide any compensation) if we do so. You may find more details, including our expectations of you, within our Offsite Working Policy and associated policies.'
            ),
            // Workplace model virtual 
            (OfferLetterData.WORKPLACE_MODEL == 'Virtual' && OfferLetterData.Event_Location_Value != 'Mumbai') &&
            $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Workplace Model = Virtual and Event Location is not Mumbai"/>').append(
                'You agree that as a personal preference, you have voluntarily opted for employment where your role may be performed outside of a PayPal office with the use of virtual working tools we provide. You may however be required to attend a PayPal office for in-person collaboration. Details of your benefits are mentioned in this offer. Since you’ve chosen to work virtually from a location of your choice, you will not be entitled to the benefits or entitlements other than those mentioned in this offer, or those available to employees in any other PayPal location or office. Your benefits and entitlements shall continue to be governed by the terms of this employment offer.  You may find more details, including our expectations of you, within our Offsite Working Policy and associated policies.'
            ),
            // Workplace model virtual and event location mumbai
            (OfferLetterData.WORKPLACE_MODEL == 'Virtual' && OfferLetterData.Event_Location_Value == 'Mumbai') &&
            $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Workplace Model = Virtual and Event location is Mumbai"/>').append(
                'Your role will be performed outside of a PayPal office with the use of virtual working tools we provide. You may however be required to attend a PayPal office for in-person collaboration. Details of your benefits are mentioned in this offer. Since the you may choose to work virtually from a location of their choice, you will not be entitled to the benefits or entitlements other than those mentioned in this offer, or those available to employees in any other PayPal location or office. Your benefits and entitlements shall continue to be governed by the terms of this employment offer.  You may find more details, including our expectations of you, within the our Offsite Working Policy and associated policies.'
            ),
            $('<p/>').append(
                'Your gross annual base salary will be ',
                $('<mark/>').append(
                    OfferLetterData.Salary_Amount
                ),
                ' INR, paid monthly, directly into your bank account.'
            ),
            (OfferLetterData.Hire_on_Bonus_Eligible == 'Yes' && OfferLetterData.Installment_Amount == '') &&
            $('<p class="marked" data-toggle="popover" data-placement="top" data-content="If Hire_on_Bonus_Eligible= YES"/>').append(
                'You shall be entitled to receive a Sign on bonus of ', //2020-12-09 | SERVICES-34129 | CDY | V3 | Changed as per request   
                $('<mark/>').append(
                    OfferLetterData.HIRE_ON_BONUS_AMOUNT
                ),
                ' INR, which shall be paid to you as an advance along with your first salary. This payment is subject to the applicable deductions and taxes. In the event that your employment ceases by termination for cause or by way of your resignation, at any time prior to the completion of first year from the start date, you will be liable and required to refund to the company, within 7 days from the employment cessation date, the net value of the sign on bonus on a pro-rated basis as a debt, and your repayment obligation shall be reduced by 1/12 for every full month of employment over the course of the first year. By signing below, you hereby provide your consent and authorize the Company to withhold this amount from any compensation the Company otherwise owes you at the time of your separation and recover the outstanding amount from you. '
            ),//2020-12-09 | SERVICES-34129 | CDY | V3 | Changed as per request   


            //2021-11-03 | SERVICES-43838 | CDY | V4 | New updates 
            (OfferLetterData.Hire_on_Bonus_Eligible == 'Yes' && OfferLetterData.Installment_Amount != '' && OfferLetterData.Installment_Amount_1 != '') &&
            $('<p class="marked" data-toggle="popover" data-placement="top" data-content="If Hire_on_Bonus_Eligible= YES & Installment Amounts != NULL"/>').append(
                $('<p/>').append(
                'You shall be entitled to receive a sign on bonus of ', //2020-12-09 | SERVICES-34129 | CDY | V3 | Changed as per request   
                $('<mark/>').append(
                    OfferLetterData.HIRE_ON_BONUS_AMOUNT
                ),
                ' INR (gross), 50% of which shall be paid to you as an advance along with your first salary, and the balance 50% shall be paid to you as an advance after completion of twelve months of employment with the Company, provided that you are not serving any notice of termination at that time. This payment is subject to the applicable deductions and taxes. In the event that you voluntarily serve a notice of resignation or your employment ceases for reasons of your dismissal by PayPal due to your violation of the terms of your Employment Agreement and/or PayPal’s Code of Conduct on any day: <br>'
                ),

                $('<ol class="mb-20"/>').append(
                    $('<li/>').html('prior to receipt of the Second Sign-on Bonus, the First Sign-on Bonus shall immediately be fully refundable by you to PayPal and the Second Sign-on Bonus shall be forfeited; '),
                    $('<li/>').html('after the receipt of the Second Sign-on Bonus but prior to the completion of two years from your start date, you shall be obligated to refund the sign-on bonuses received  until then  on a pro-rata basis  (i.e. you’ll be allowed to retain only 1/24th of the sum already paid for every full month that you were in active employment)')
                ),
                
                $('<p/>').append('No repayment of the one-time sign-on bonus would be required upon termination of your services for any reason after completion of two years of employment with the Company. You hereby authorize the Company to set off the sign-on bonus due from you against any amounts, salaries, allowance, or any other pecuniary benefit due and payable to you by the Company. However, if the amount due from you exceeds the amount due and payable by the Company to you at the time of your exit, the Company shall notify you of the same, and you agree to pay the remaining balance within seven (7) days from the receipt of such notice from the Company. In the event you fail to repay the balance of the amount due from you pursuant to the time frame set forth above and it is necessary to take legal action against you to collect such amount, you agree to reimburse the Company for all costs incurred by the Company to collect such amounts, including attorneys’ fees and court costs.')

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
                    'Successful completion of international background checks;' //2021-01-20 | SERVICES-34129 | CDY | V3 | Update verbiage as per request
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
            $('<p class="mb-30" />').append(
                'We respect the privacy of all employees and will comply with all applicable laws regarding processing of personal information. All such personal information is processed in accordance with the PayPal Employee Privacy Statement, a copy of which has been given to you in connection with this offer. You acknowledge that you have reviewed and understand the Employee Privacy Statement.'
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                'Yours sincerely, '
            )
          //  $('<p class="hide"/>').append('&nbsp;'),
          //  $('<p/>').append(
          //      $('<mark/>').append(
          //          OfferLetterData.Recruiter
          //      )
          //  )
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
