/**
 * SERVICES-35974 | PayPal - Create Japan Offer Letter
 * Japan_Offer_Letter
 */
function fnView() {
    $("#markup").html("").append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p/>').append(employee.Current_Date)
        ),
        $('<div class="offerClause">').append(
            $('<p class="mb-40"/>').append(
                $('<span/>').append(employee.Full_Legal_Name + '<br>'),
                $('<span/>').append(employee.Address_Line_1 ? employee.Address_Line_1 + '<br>' : ''),
                $('<span/>').append(employee.Address_Line_2 ? employee.Address_Line_2 + '<br>' : ''),
                $('<span/>').append((employee.City ? employee.City + ', ' : '') + (employee.State ? employee.State + ', ' : '') + employee.Postal_Code)
            ),
            $('<p class="hide"/>').append('&nbsp;')
        ),
        $('<div class="offerClause"/>').append(
            $('<p/>').append('Dear ' + (employee.Preferred_First_Name ? employee.Preferred_First_Name : employee.First_Name) + ','),
            $('<p/>').append(
                'We, PayPal Japan KK (the “Company”), are pleased to offer you employment as the \‘Position Title,\’ with the Company upon the following terms and conditions.  This offer of employment is contingent upon the successful completion of the standard PayPal background verification and a three-month probationary period.'
            ),
            $('<p/>').append(
                $('<strong/>').append('<u>1. Appointment</u><br>'),
                'You shall be employed with effect from a date agreed between you and the Company.'
            ),
            $('<p/>').append(
                $('<strong/>').append('<u>2. Probationary Period and Confirmation</u><br>'),
                'You will be required to serve a probationary period of three (3) months, during which your employment with the Company may be terminated by either party giving to the other seven (7) days\’ written notice or paying salary in lieu thereof.  The probationary period may be extended at the discretion of the Company for an additional three (3) months.'
            ),
            $('<p/>').append(
                $('<strong/>').append('<u>3. Salary</u><br>'),
                'You will be paid an annual salary of ' + employee.Salary_Currency + ' ' + employee.Salary_Amount + ' divided by 12 payments, once per month paid on the last business day of each month.  This sum is to be paid in Japanese Yen and will be paid by remittance to the bank account designated by you.  The compensation will be subject to deduction for Japanese income tax, inhabitant’s tax and employee’s portion of social and labor insurance premiums in accordance with the relevant laws of Japan.  Your compensation will be reviewed annually.  You are not entitled to a retirement allowance.'
            ),
            $('<p/>').append(
                $('<strong/>').append('<u>4. Work Rules and Corporate Policies</u><br>'),
                'You will be required to comply with the Work Rules and various corporate polices communicated to you from time to time. During your employment with the Company, you shall perform such duties as may from time to time be assigned to you and comply with all reasonable directions made by the Company. You shall also observe and comply with all of the rules, regulations and policies of the Company as may from time to time be made or given.'
            ),
            $('<p/>').append(
                $('<strong/>').append('<u>5. Termination</u><br>'),
                'Upon signing this offer letter, after the probationary period referred to above, this Agreement may be terminated by you upon 30 days’ written notice.  The Company reserves the right to require you not to attend work and/or not to undertake all or any of your duties of employment during any period of notice (whether given by you or the Company).  However, the Company shall continue to pay your salary and contractual benefits whilst you remain employed by the Company.  The Company may choose to pay you 30 day’s salary in lieu of having you work during the 30-day notice period in its sole discretion.'
            ),
            $('<p/>').append(
                'In the event of termination of your employment hereunder, however arising, you agree that you will not at any time after such termination represent yourself as still having any connection with the Company or any Associated Company save as a former employee for the purposes only of communicating with prospective employers or complying with any applicable statutory requirements.'
            ),
            $('<p/>').append(
                'The Company shall be entitled to terminate your employment immediately upon written notice (but without prejudice to the rights and remedies of the Company for any breach of this Agreement and to your continuing obligations under this Agreement) for any “just cause” including, but not limited to, the following:'
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ul class="list-indented"/>').append(
                $('<li/>').append(
                    'if you are dishonest or engaged in serious or persistent misconduct or, without reasonable cause, neglect or refuse to attend to your duties or fail to perform any of your obligations hereunder, or fail to observe the Company\'s disciplinary rules or any other regulations of the Company from time to time in force;<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'if you are incapacitated by illness or otherwise unable to perform your duties hereunder for a period totalling in aggregate 6 months in any period of 12 consecutive calendar months; or<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'if you become bankrupt or have a receiving order made against you or make any general composition with your creditors.<p class="hide">&nbsp;</p>'
                )
            ),
            $('<p/>').append(
                $('<strong/>').append('<u>6. Non-Competition</u><br>'),
                'You shall not during and at any time for the period of one year after termination of your employment either on your own account or in conjunction with or on behalf of any other person, firm or company solicit or entice away or attempt to solicit or entice away from the Company the custom of any person, firm, company or organisation who shall at any time within one year prior to the date of termination of your employment (“Termination Date”) have been a customer or client or in the habit of dealing with the Company and with whom you have had significant contact in the course of your employment.'
            ),
            $('<p/>').append(
                'You shall not during your employment and at any time for the period of 6 months after the Termination Date, either on your own account or in conjunction with or on behalf of any person, firm, corporation or organisation, carry on or be engaged, concerned or interested, directly or indirectly, in Japan, whether as principal, agent, shareholder, director, employee, partner or otherwise in carrying on any business similar to or competing with the business of the Company as at the Termination Date, except with the prior written consent of the Company. For the avoidance of doubt, similar or competing businesses in relation to the Company shall include but not be limited to any company providing (or which intends to provide) online payment and/or money transfer services. '
            ),
            $('<p/>').append(
                'You shall not either for your own account or as representative or agent for any third party, persuade, induce, encourage or procure any employee employed by the Company to become employed by or interested directly or indirectly in any manner in any business which is in competition with the business carried on by the Company or terminate his employment with the Company.'
            ),
            $('<p/>').append(
                'You acknowledge that:  Each of the foregoing sub clauses constitutes an entirely separate and independent restriction on you; and the duration, extent and application of each of the restrictions is no greater than is necessary for the protection of the proprietary interests of the Company.'
            ),
            $('<p/>').append(
                'Notwithstanding the above, you shall be entitled to enter into employment with any other related corporation of the Company.'
            ),
            $('<p/>').append(
                'Each undertaking and agreement contained in this Clause shall be read and construed independently of the other undertakings and agreements herein contained so that if one or more should be held to be invalid as an unreasonable restraint of trade or for any other reason whatsoever then the remaining undertakings and agreements shall be valid to the extent that they are held not to be so invalid.'
            ),
            $('<p/>').append(
                'While the undertakings and agreements in this Clause are considered by the Company and you to be reasonable in all circumstances, if one or more should be held to be invalid as an unreasonable restraint of trade or for any other reason whatsoever but would have been held valid if part of the wording thereof had been deleted or the period thereof reduced or the range of activities or area dealt with reduced in scope, the said undertakings and agreements shall apply with such modifications as may be necessary to make them valid and effective.'
            ),
            $('<p/>').append(
                $('<strong/>').append('<u>7. Governing Law</u><br>'),
                'The terms of your employment shall be governed by and construed in accordance with the laws of Japan. The parties shall submit to the non-exclusive jurisdiction of the courts of Tokyo, Japan. In the event that any of the provisions of this agreement shall be determined invalid, void or unenforceable, such provision may be severed without affecting the enforceability of the other provisions in this agreement and the remaining provisions of this agreement shall continue in full force and effect.'
            ),
            $('<p class="mb-40"/>').append(
                'Please confirm your acceptance of the above terms and conditions by signing.'
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                'Yours sincerely,'
            ),
            $('<p/>').append(
                $('<span/>').append('For and on behalf of PayPal Japan KK<br><span id="signatory-complimentary"></span><br>'),
                $('<span/>').append('Company Signatory')
            )
        )
    );

    $("#markup2").html("").append(
        // OfferClause 2
        $('<div class="offerClause2">').append(
            $('<p/>').append(
                '<strong>Employee:</strong>'
            )
        )
        // end append
    );

    $("#markup3").html("").append(
        // OfferClause 3
        $('<div class="offerClause3">').append(
            $('<p/>').append(
                '<strong>Employer:</strong>'
            )
        )
        // end append
    );

    $("#markup4").html("").append(
        // OfferClause 4
        $('<div class="offerClause4">').append(
            $('<p/>').append(
                'PayPal Japan KK<br>AO Building 15F, 3-11-7<br>Kita Aoyama Minato-ku<br>Tokyo 107 0061'
            )
        )
        // end append
    );

    $("#markup5").html("").append(
        // OfferClause 5
        $('<div class="offerClause5">').append(
            (employee.EnityName == 'PayPal SE')  &&
            $('<p style="font-size: 10px !important; margin-top: 20px;"/>').append(
                'Registered in England and Wales No. SE007.Registered office:5 New Street Square London EC4A3TW'
            ),
            (employee.EnityName != 'PayPal SE')  &&
            $('<p style="font-size: 10px !important; margin-top: 20px;"/>').append(
                'Registered in England and Wales No. 5468033.'
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

        // showCompletedOfferLetter('incomplete', 'complete', arrParts);
    }
});
