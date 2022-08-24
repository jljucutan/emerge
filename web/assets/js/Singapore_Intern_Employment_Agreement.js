/**
 * PayPal - RC - Singapore Intern Employment Agreement
 * CHANGE LOGS
 * 11/5/2019 | jjucutan | created the Singapore_Intern_Employment_Agreement
 */

const renderOfferLetterContents = function() {
    "use strict";
    $('#markup')
        .html("")
        .append(
            $('<div class="offerClause"/>').append(
                $('<p class="hide">').append(
                    '5 Temasek Boulevard <br>#09-01 Suntec Tower 5 <br>Singapore 038985'
                ),
                $('<p class="hide">').append('<br>&nbsp;'),
                $('<p/>').append(
                    markText(offerLetterData.currentDate)
                ),
                $('<p/>').append(
                    markText(offerLetterData.Full_Name)
                ),
                $('<p/>').append(
                    markText(offerLetterData.Address1),
                    '<br>',
                    (offerLetterData.Address2.length > 0) && markText(offerLetterData.Address2),
                    '<br>',
                    markText(offerLetterData.CityStateZip)
                ),
                $('<p/>').append(
                    'Dear ',
                    markText(offerLetterData.Preferred_Name),
                    ','
                ),
                $('<p/>').append(
                    'We, PayPal Pte Ltd (the "Company" or "PayPal"), are pleased to offer you employment as ',
                    markText(offerLetterData.Business_Title),
                    ' (System Title: ',
                    markText(offerLetterData.SystemTitle),
                    ') with the Company upon the following terms and conditions. This offer of employment (the "Agreement") is contingent upon the successful completion of a standard PayPal background verification prior to your start date. PayPal reserves the right to revoke this offer pending completion of such check.'
                ),
                $('<p/>').append(
                    $('<strong/>').append(
                        '1. ',
                        $('<u/>').append('Appointment')
                    ),
                    '<br>',
                    'Your internship will commence from ',
                    markText(offerLetterData.EventStartDate),
                    ' to ',
                    markText(offerLetterData.ContractEndDate),
                    '.'
                ),
                $('<p/>').append(
                    $('<strong/>').append(
                        '2. ',
                        $('<u/>').append('Salary')
                    ),
                    '<br>',
                    'You will be paid at a rate of SG$ ',
                    markText(offerLetterData.Salary_Amount),
                    ' (',
                    markText(offerLetterData.SALARY_CURRENCY),
                    ') per month.'
                ),
                $('<p/>').append(
                    $('<strong/>').append(
                        '3. ',
                        $('<u/>').append('Hours of Work')
                    ),
                    '<br>',
                    (offerLetterData.JobType === "Full Time") && 
                    'Your working hours shall be such hours as the Company may from time to time deem appropriate and as may be necessary to achieve the purposes of the Company.',
                    (offerLetterData.JobType !== "Full Time") && 
                    'You will need to work at least an average of 16 hours a week on days and at times as directed by us.'
                ),
                $('<p/>').append(
                    $('<strong/>').append(
                        '4. ',
                        $('<u/>').append('Medical Leave')
                    ),
                    '<br>',
                    'You are not entitled to any medical leave. You will get (up to) SG$ 30.00 (SGD) for medical fee reimbursement per day per consultation.'
                ),
                $('<p/>').append(
                    $('<strong/>').append(
                        '5. ',
                        $('<u/>').append('Conduct and Discipline')
                    ),
                    '<br>',
                    'You shall perform such duties as may from time to time be assigned to you and shall comply with all reasonable directions made by the Company.'
                ),
                $('<p/>').append(
                    'During your internship, you shall well and faithfully serve the Company and use your utmost endeavors to promote its interests, and devote the whole of your time, attention and abilities to its affairs during the hours in which you are required to perform your duties.'
                ),
                $('<p/>').append(
                    'You shall not, during the continuation of your internship, engage in any other employment or activity in the absence of prior written approval from the Company (which may be withheld by the Company at its sole discretion).'
                ),
                $('<p/>').append(
                    $('<strong/>').append(
                        '6. ',
                        $('<u/>').append('Termination of Internship')
                    ),
                    '<br>',
                    'Your internship shall be terminated immediately upon the company giving notice in writing to you on any of the following grounds without the company being liable therefore in damages or compensation:'
                ),
                $('<ul class="list-indented"/>').append(
                    $('<li/>').append(
                        'a) if you do fail the background/reference check, the company reserves the right not to reveal the reason(s) under this circumstance(s);'
                    ),
                    $('<li/>').append(
                        'b) your conduct is found to be detrimental to the national security of Singapore;'
                    ),
                    $('<li/>').append(
                        'c) your conduct is found to be inconsistent with the security requirements and/or procedures '
                    ),
                    $('<li/>').append(
                        'd) if you are guilty of any fraud, dishonesty or other criminal charges;'
                    ),
                    $('<li/>').append(
                        'e) in the event of any serious or repeated breach or non-observance by you of any terms contained in this Agreement; '
                    ),
                    $('<li/>').append(
                        'f) if you become insolvent or makes any composition or enters into any deed of arrangement with your creditors.'
                    )
                ),
                $('<p/>').append(
                    $('<strong/>').append(
                        '7. ',
                        $('<u/>').append('Confidentiality')
                    ),
                    '<br>',
                    'You shall not during the continuance of your employment or any time after its termination disclose, divulge, impart or reveal to any person or company any of the trade secrets or confidential operations, processes, dealings or any information concerning the organization, business, finance, transactions or affairs of the Company or any of its related, associated or affiliated companies which may come to your knowledge during your employment, and shall not use or attempt to use any such information in any manner which may injure or cause loss either directly or indirectly to the Company or its business.'
                ),
                $('<p/>').append(
                    $('<strong/>').append(
                        '8. ',
                        $('<u/>').append('Company Policies')
                    ),
                    '<br>',
                    'During your employment with the Company, you shall observe and comply with all of the rules, regulations and policies of the Company and PayPal Holdings Inc., as may from time to time be made or given. The Company shall have the right to alter and amend the rules and policies of the Company as well as any of the terms of your employment, and such alteration or amendment shall become fully effective and a binding term of your employment upon notification to you.'
                ),
                $('<p/>').append(
                    $('<strong/>').append(
                        '9. ',
                        $('<u/>').append('Entire Agreement')
                    ),
                    '<br>',
                    'This Agreement supersedes any prior agreements, representations and promises of any kind, whether written, oral, express or implied between the parties hereto with respect to the subject matters herein. This Agreement constitutes the full, complete and exclusive agreement between you and the Company, its officers, employees and its affiliates with respect to the subject matters herein.'
                ),
                $('<p/>').append(
                    $('<strong/>').append(
                        '10. ',
                        $('<u/>').append('No Breach')
                    ),
                    '<br>',
                    'In signing below, you confirm that you are not bound by any prior contract, undertaking, commitment or other obligation which prevents you from being employed by the Company and being able to fully and completely perform the services contemplated by this Agreement, nor in fulfilling your duties hereunder will you be breaching any duty of confidentiality to any persons, including without limitation, your previous employers or principals.'
                ),
                $('<p/>').append(
                    $('<strong/>').append(
                        '11. ',
                        $('<u/>').append('Governing Law')
                    ),
                    '<br>',
                    'This Agreement shall be governed by and construed in accordance with the laws of Singapore. The parties shall submit to the non-exclusive jurisdiction of the Singapore courts.'
                ),
                $('<p/>').append(
                    'Please confirm your acceptance of the above terms and conditions by signing and returning to us the duplicate copy of this letter. We take this opportunity to wish you all the best for your internship training and hope that your assignment will be a fruitful and enjoyable one.'
                ),
                $('<p/>').append(
                    'Yours faithfully,'
                ),
                $('<p/>').append(
                    'For and on behalf of'
                ),
                $('<p/>').append(
                    'PayPal Private Limited'
                ),
                $('<p/>').append('<br>&nbsp;')
            )
        );
}

const markText = function(text) {
    "use strict";
    let tmpNode = $('<div/>');
    tmpNode.append(
        $('<mark/>').append((text.length?text:"&nbsp;"))
    );
    return tmpNode.html();
}

$(document).on('ready', function() {
    renderOfferLetterContents();

    // completed letter 
    if (document.querySelector('[name="buttonSaveAndComplete"]') === null && strFormCompleted  != "") { 
        $("#ButtonSaveAndComplete").remove(); 
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled"); 
        var arrParts = [ 
            [1, 'hidden_pg1'], 
        ]; 
        showCompletedOfferLetter('incomplete', 'complete', arrParts); 
    } 
    else {
        // do something when form is incomplete
        makeOfferLetter('hidden_pg1', 'offerClause');
        makeOfferLetter('hidden_pg2', 'offerClause2');
        makeOfferLetter('hidden_pg3', 'offerClause3');
    }

});
