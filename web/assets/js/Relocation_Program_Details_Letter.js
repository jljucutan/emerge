/**
 * Relocation Program Details Letter
 * 10/22/2019 | jjucutan | SERVICES-39275 - offer letter initial version created
 * 11/06/2019 | jjucutan | fix script syntax error on IE
 * 11/07/2019 | jjucutan | added condition if Relocation_Policy at the end of first paragraph
 * 11/07/2019 | jjucutan | added condition if Relocation_Policy at the end of first paragraph
 * 01/27/2020 | jjucutan | added dynamic year in 3rd paragraph; added currency formatter; added lump sum and est cost override logic
 * 02/13/2020 | jjucutan | created version 3
 * 02/19/2020 | jjucutan | verbiage updates and add missed items missed from previous testing
 */

const renderView = function() {
    "use strict";
    $('#markup')
        .html("")
        .append(
            $('<div class="offerClause" />').append(
                $('<p/>').append(
                    $('<strong id="todate-header">').append(
                        'Date today'
                    )
                ),
                $('<p/>').append(
                    'Regarding: ',
                    offerLetter.First_Name,
                    ' ',
                    offerLetter.Last_Name
                ),
                $('<p/>').append(
                    'Dear ',
                    offerLetter.Recruiter_First_Name,
                    ','
                ),
                $('<p/>').append(
                    'Hello and thank you for your submission.'
                ),
                $('<p/>').append(
                    'The candidate whom you have submitted for domestic relocation assistance is eligible for:'
                ),
                $('<p/>').append(
                    'The ',
                    offerLetter.Relo_Policy,
                    ' available for band ',
                    offerLetter.Band_Role,
                    ', Family size of ',
                    offerLetter.Family_Size,
                    ', relocating to ',
                    offerLetter.Mobility_Locations,
                    '.'
                ),
                $('<p/>').append(
                    'This candidate would receive $',
                    formatCurrency(offerLetter.Lump_Sum_Override.length > 0 ? offerLetter.Lump_Sum_Override : offerLetter.Lump_Sum),
                    ' net and support in how best to use these funds for their personal situation from our external relocation provider AIRes with a dedicated counselor, in line with the domestic relocation program attached. (',
                    $('<a target="_blank"/>').prop('href', offerLetter.PDF_Program).append(
                        'Relocation Program'
                    ),
                    ' and ',
                    $('<a target="_blank"/>').prop('href', offerLetter.attached_flyer).append(
                        'Springboard flyer'
                    ),
                    ' are attached here).'
                ),
                (['Santander Senior Executive Program', 'Santander Lump Sum - Business Initiated Executive Move'].indexOf(offerLetter.Relo_Policy) >= 0) &&
                $('<p/>').append(
                        'In addition to the lump sum, in the executive program, the candidate will receive the shipping service to move their household goods as stated in this program.'
                    ),
                $('<p/>').append(
                    'Please send the attached PDF Santander US relocation program, city guide for ',
                    offerLetter.Mobility_Locations,
                    ' along with the attached Springboard AIReS flyer on how the candidate will be able to use AIReS to suit their individual needs, when sending the offer to the candidate.'
                ),
                $('<p/>').append(
                    'Here is the appropriate verbiage that should be included in the offer letter:'
                ),
                (['Santander Lump Sum - Voluntary Move (Reduced Lump Sum)', 'Santander Lump Sum - Voluntary Move'].indexOf(offerLetter.Relo_Policy) >= 0) &&
                $('<p/>').append(
                    $('<strong/>').append(
                        'Lump Sum Voluntary Moves Program (Domestic Relocation):<br>'
                    ),
                    'Upon your joining, you will be eligible to receive a relocation benefit in accordance with our Lump Sum for Business Initiated Executive Move Program to utilize for up to 12 months.  You will receive a one-time net amount of $'+ formatCurrency(offerLetter.Lump_Sum_Override.length > 0 ? offerLetter.Lump_Sum_Override : offerLetter.Lump_Sum) +  ' as a lump sum relocation allowance, together with the support of the Santander’s external relocation vendor to assist you with managing the lump sum funds.  This payment will be made to you within 30 days of your official start date. Prior to the completion of 24 months of service, if you voluntarily terminate your employment, which includes having submitted your resignation either verbally or in writing, or if your employment is terminated by Santander for cause, you agree by electronically signing this document that you will reimburse the full amount of this payment to Santander within 30 days of your termination date.'
                ),
                (['Santander Lump Sum - Business Initiated Move', 'Santander Lump Sum - Business Initiated Executive Move'].indexOf(offerLetter.Relo_Policy) >= 0) &&
                $('<p/>').append(
                    $('<strong/>').append(
                        offerLetter.Relo_Policy,
                       ' Program (Domestic Relocation):'
                    )
                ),
                (['Santander Lump Sum - Business Initiated Move', 'Santander Lump Sum - Business Initiated Executive Move'].indexOf(offerLetter.Relo_Policy) >= 0) &&
                $('<p/>').append(
                    'Upon your joining, you will be eligible to receive a relocation benefit in accordance with our Lump Sum for Business Initiated Move Program to utilize for up to 12 months. You will receive a one-time net amount of $' + formatCurrency(offerLetter.Lump_Sum_Override.length > 0 ? offerLetter.Lump_Sum_Override : offerLetter.Lump_Sum) + ' as a lump sum relocation allowance, together with the support of Santander’s external relocation vendor to assist you with managing the lump sum funds. This payment will be made to you within 30 days of your official start date (and in some cases, may be paid prior to your start date). Prior to the completion of 24 months of service, if you voluntarily terminate your employment, which includes having submitted your resignation either verbally or in writing, or if your employment is terminated by Santander for cause, you agree by signing this document that you will reimburse the full amount of this payment to Santander within 30 days of your termination date. The repayment terms are the same, whether you receive the funds before your start date or later.'
                ),
                (['Santander Senior Executive Program'].indexOf(offerLetter.Relo_Policy) >= 0) &&
                $('<p/>').append(
                    $('<strong/>').append(
                        'Senior Executive Moves Program (Directs to CEO only):'
                    )
                ),
                (['Santander Senior Executive Program'].indexOf(offerLetter.Relo_Policy) >= 0) &&
                $('<p/>').append(
                    'Upon your hire, you will be eligible to receive a relocation benefit in accordance with our Senior Executive Moves Program to utilize for up to 12 months.  You will receive the support of Santander’s external relocation vendor to assist you with managing your relocation within the program.  Prior to the completion of 24 months of service, if you voluntarily terminate your employment, which includes having submitted your resignation either verbally or in writing, or if your employment is terminated by Santander for cause, you agree by electronically signing this document that you will reimburse the full amount of this relocation benefits paid by Santander within 30 days of your termination date'
                ),
                $('<p/>').append(
                    'The maximum cost to Santander US, and to the business line’s cost center inclusive of the net paid &amp; tax gross ups and amounts to = ',
                    offerLetter.Est_Cost_Bank,
                    ',  if they were to use all elements of the program.'
                ),
                $('<p/>').append(
                    'Please indicate by checking the box below if you have approval & ',
                    moment().format('YYYY'),
                    ' domestic relocation budget to proceed.'
                ),
                $('<p/>').append(
                    'If approved, provide the letter in Taleo for Mobility’s review and approval before it is sent to the candidate.'
                ),
                $('<p/>').append(
                    'If Santander Consumer hire, please upload the letter to this tool for Mobility review and approval.'
                ),
                $('<p/>').append(
                    $('<strong/>').append(
                        'Upon Offer Acceptance:'
                    )
                ),
                $('<ol/>').append(
                    $('<li/>').append(
                        'Please upload the signed offer letter to the tool and update the employee ID once it has been generated <br>',
                        'Once the candidate signs and passes background checks, the following steps will be needed/ occur:'
                    ),
                    $('<li/>').append(
                        'Please notify the Mobility team through the SilkRoad tool by checking the box that background checks have been successfully completed'
                    ),
                    $('<li/>').append(
                        'There is a 2 year repayment agreement provided by AIReS that the candidate will need to sign before AIReS will release the domestic lump sum amount'
                    ),
                    $('<li/>').append(
                        'AIReS will then be authorized to release the domestic lump sum amount to the candidate’s bank account within 48 hours of receiving the signed repayment agreement '
                    )
                )
            )
        )
}

const formatCurrency = function(rawNumber) {
    "use strict";
    // parse raw number
    let number = Math.abs(rawNumber);
    // return the same value if number is not valid
    if (isNaN(number)) {
        return rawNumber;
    }
    // return formatted value
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

$(document).on('ready', function() {
    // render offer letter
    renderView();

    // set header date
    if ($('#todate').val().length < 1) {
        $('#todate').val(moment().format('MMMM Do, YYYY'))
    }
    // set current long date on header
    document.querySelector('#todate-header').innerHTML = $('#todate').val();
    // set current year within paragraph
    $('#current-year').text(moment().format('YYYY'));

    if (strFormCompleted != "") { 
        //Create an array of info to pass to complete the offer letter 
        //0 for images sending an image tag, 1 for sections of text sneding the ID of the field that holds the HTML. 
        const arrParts = [ 
            [1,'hidden_pg1']
        ]; 
        //Send (ID of the div to hide,ID of the div to show,Parts to get the offer letter) 
        showCompletedOfferLetter('incomplete','complete',arrParts); 
    } else { 
        //If the offer letter is not complete
    } 
});
