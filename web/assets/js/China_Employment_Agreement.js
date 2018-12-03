/**
 * SERVICES-36289 | jjucutan | PayPal - Create China Employment Agreement
 */
function fnView() {
    $("#markup").html("").append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p class="text-center mb-60"/>').append('<strong>Employment Agreement</strong>'),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p class="mb-60"/>').append(
                $('<mark/>').append(
                    OfferLetterData.Current_Date
                )
            ),
            $('<p class="hide"/>').append('&nbsp;')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<mark/>').append(
                    OfferLetterData.EntityName
                ),
                ', Ltd. (“Company”), a company established under the laws of the People’s Republic of China (“PRC” or “China”) with its registered address at ',
                $('<mark/>').append(
                    OfferLetterData.EntityAddress
                ),
                ';'
            ),
            $('<p/>').append(
                'and'
            ),
            $('<p class="mb-60"/>').append(
                $('<mark/>').append(
                    OfferLetterData.Full_Name
                ),
                ', a citizen of ',
                $('<mark/>').append(
                    OfferLetterData.Nationality
                ),
                ' (Passport No. ',
                $('<mark/>').append(
                    OfferLetterData.PassportNo
                ),
                '), presently residing ',
                $('<mark/>').append(
                    OfferLetterData.Address1
                ),
                ' ',
                $('<mark/>').append(
                    OfferLetterData.Address2
                ),
                ' ',
                $('<mark/>').append(
                    OfferLetterData.City
                ),
                ', ',
                $('<mark/>').append(
                    OfferLetterData.State
                ),
                ', ',
                $('<mark/>').append(
                    OfferLetterData.Zip
                ),
                ' hereby agree to their respective rights and obligations under this employment agreement (the “Agreement”) set forth as follows:'
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                '<strong><u>ARTICLE 1 - APPOINTMENT</u></strong>'
            ),
            $('<p/>').append(
                '<strong>1.1.</strong>  The Company hereby confirms the employment of the Employee as ',
                $('<mark/>').append(
                    OfferLetterData.Business_Title
                ),
                '-and the Employee hereby agrees to act in such capacity pursuant to the terms and conditions set forth in this Agreement.'
            ),
            $('<p/>').append(
                '<strong><u>ARTICLE 2 - TERM</u></strong>'
            ),
            $('<p/>').append(
                '<strong>2.1.</strong>  Subject to the execution of this Agreement by the Company and the Employee, the employment hereunder shall take effect on ',
                $('<mark/>').append(
                    OfferLetterData.event_start_date_long
                ),
                ' (“Commencement Date”), and shall continue for a period of 3 years unless earlier terminated in accordance with Article 7 hereof (the “Employment Term). The probation period is ',
                $('<mark/>').append(
                    OfferLetterData.ProbationPeriodTime
                ),
                ' month(s), starting from ',
                $('<mark/>').append(
                    OfferLetterData.event_start_date_long
                ),
                ' to ',
                $('<mark/>').append(
                    OfferLetterData.probation_end, '.'
                )
            ),
            $('<p/>').append(
                '<strong>2.2.</strong> Upon expiration of the Employment Term, this Agreement shall renew for additional terms of successive one (1) year periods (the “Additional Employment Term(s)”) upon mutual written consent of Employee and the Company.  The Company will recognize any period of Employee’s employment by the Company that occurred prior to the Commencement Date for the purpose of calculating service time with the Company.'
            ),
            $('<p/>').append(
                '<strong><u>ARTICLE 3 – REMUNERATION</u></strong>'
            ),
            $('<p/>').append(
                '<strong>3.1.</strong> Provided that the Employee diligently performs his/her duties and obligations during the Employment Term, the Company shall remunerate the Employee in accordance with the provisions of <strong>Exhibit A</strong> attached hereto.'
            ),
            $('<p/>').append(
                '<strong><u>ARTICLE 4 – DUTIES AND OBLIGATIONS</u></strong>'
            ),
            $('<p/>').append(
                '<strong>4.1.</strong> The Employee shall undertake the duties and obligations under this Agreement including but not limited to the following:'
            ),
            $('<ul class="list-indented"/>').append(
                $('<li/>').append(
                    '<strong>(a)</strong> to devote ',
                    $('<mark/>').append(
                        OfferLetterData.JobType
                    ),
                    ', skill and attention to the duties and responsibilities of ',
                    $('<mark/>').append(
                        OfferLetterData.Business_Title
                    ),
                    ' or such other titles that Employee may be given during the Term, and perform them faithfully, honestly, diligently and competently;'
                ),
                $('<li/>').append(
                    '<strong>(b)</strong> to comply with and be bound by the published operating policies, procedures and practices of the Company and PayPal Inc. (“PayPal”) in effect from time to time;'
                ),
                $('<li/>').append(
                    '<strong>(c)</strong> to be responsible for the matters assigned to the Employee from time to time;'
                ),
                $('<li/>').append(
                    '<strong>(d)</strong> to exclusively develop and promote the business of the Company and not to engage in any competing business; and'
                ),
                $('<li/>').append(
                    '<strong>(e)</strong> to report to the Company or designated supervisors regarding matters within his assigned duties and position.'
                )
            ),
            $('<p/>').append(
                '<strong><u>ARTICLE 5 – CONFIDENTIALITY</u></strong>'
            ),
            $('<p/>').append(
                '<strong>5.1.</strong> By execution of this Agreement, the Employee hereby agrees to the general provisions regarding confidential and proprietary information stipulated by the Company and its affiliates.  The Employee further agrees to execute and to abide by all the duties and obligations set forth under the Agreement Regarding Confidentiality, Inventions and Non-Competition attached hereto as <strong>Exhibit B.</strong>'
            ),
            $('<p/>').append(
                '<strong><u>ARTICLE 6 – TERMINATION</u></strong>'
            ),
            $('<p/>').append(
                '<strong>6.1.</strong> This Agreement shall be terminated on or before Employment Term or any Additional Employment Term under the following circumstances:'
            ),
            $('<ul class="list-indented"/>').append(
                $('<li/>').append(
                    '<strong>(a)</strong> upon expiration of the Employment Term or any Additional Employment Term unless this Agreement is renewed in accordance with Article 2 hereof;'
                ),
                $('<li/>').append(
                    '<strong>(b)</strong> if original, renewal or extension applications for visa, employment permit, residence permit or other documents required for the Employee’s lawful employment and residence in the PRC are denied by the competent PRC authority or such visa, permits or other documents are not granted within six (6) months of the date of application; '
                ),
                $('<li/>').append(
                    '<strong>(c)</strong> if the Company is dissolved for whatever reason;'
                ),
                $('<li/>').append(
                    '<strong>(d)</strong> upon thirty (30) days notice to Employee if the Company faces bankruptcy or severe financial hardship;'
                ),
                $('<li/>').append(
                    '<strong>(e)</strong> if Employee dies, or is unable to perform the essential functions of his/her job with or without a reasonable accommodation due to a disability; or'
                ),
                $('<li/>').append(
                    '<strong>(f)</strong> upon mutual written consent of the Company and the Employee.'
                )
            ),
            $('<p/>').append(
                '<strong>6.2.</strong> Resignation: Employee may voluntarily resign from employment at any time upon thirty (30) days’ prior written notice to the Company.  The Employee may not undertake any other employment during this prior notice period and will not be entitled to any severance payment.'
            ),
            $('<p/>').append(
                '<strong>6.3.</strong> Termination Without Cause:  During the Employment Term or Additional Employment Term, the Company may terminate this Agreement without Cause (as defined in Section 6.4 below) upon thirty (30) days’ prior written notice to Employee.'
            ),
            $('<p/>').append(
                '<strong>6.4.</strong> Termination with Cause:  During the Employment Term or Additional Employment Term, the Company may immediately and unilaterally terminate this Agreement for Cause upon prior written notice to Employee as provided below.  For purposes hereof, “Cause” shall mean a termination of Employee’s employment for one or more of the following reasons:'
            ),
            $('<ul class="list-indented"/>').append(
                $('<li/>').append(
                    '<strong>(a)</strong> any material violation by Employee of PRC laws or regulations that has a negative impact on the Company or Employee’s ability to perform his/her duties with the Company;'
                ),
                $('<li/>').append(
                    '<strong>(b)</strong> any material violation by Employee of the Company’s and PayPal’s published policies or rules (including, without limitation, the Company’s Code of Conduct and PayPal’s Code of Business Conduct and Ethics) or the Agreement regarding Confidentiality, Inventions and Non-Competition; '
                ),
                $('<li/>').append(
                    '<strong>(c)</strong> any continued failure by the Employee to substantially perform his/her duties and responsibilities hereunder (other than such failure resulting from his death or incapacity due to physical or mental illness or injury) after Employee has been given written notice of such failure and a reasonable opportunity of not less than thirty (30) days in which to remedy or cure the identified performance deficiency; '
                ),
                $('<li/>').append(
                    '<strong>(d)</strong> the commission by Employee of a serious dereliction of duty or graft causing major harm to the Company’s interests; or'
                ),
                $('<li/>').append(
                    '<strong>(e)</strong> Employee’s criminal conviction that has a negative impact on the Company or Employee’s ability to perform his/her duties with the Company.'
                )
            ),
            $('<p/>').append(
                '<strong>6.5.</strong> Payment and Benefits Upon Termination.  '
            ),
            $('<ul class="list-indented"/>').append(
                $('<li/>').append(
                    '<strong>(a)</strong> In the event of Employee’s termination from employment under Articles 6.1, 6.2, 6.3 or 6.4, the Employee shall be paid all wages, accrued vacation and earned bonus payments up to and through the date of termination (the “Accrued Obligations”).'
                ),
                $('<li/>').append(
                    '<strong>(b)</strong> In the event of a termination under Articles 6.1 and 6.3 only (or as otherwise provided under applicable PRC laws or regulations), the Company shall (in addition to the Accrued Obligation) pay Employee severance in the amount as required under PRC laws and regulations, which shall be paid in accordance with the Company’s normal payroll practice.'
                )
            ),
            $('<p/>').append(
                '<strong><u>ARTICLE 7 – GOVERNING LAW</u></strong>'
            ),
            $('<p/>').append(
                '<strong>7.1.</strong> This Agreement will be governed by and construed in accordance with the published laws of the People’s Republic of China.'
            ),
            $('<p/>').append(
                '<strong><u>ARTICLE 8 – DISPUTE RESOLUTION</u></strong>'
            ),
            $('<p/>').append(
                '<strong>8.1.</strong> The parties shall first attempt to resolve any dispute, claim, or controversy arising in connection with this Agreement through friendly consultation.'
            ),
            $('<p/>').append(
                '<strong>8.2.</strong> Any dispute, claim or controversy, which cannot be resolved within ten (10) days after one party serves the other a written request for consultation, shall be settled according to the following procedures:'
            ),
            $('<ul class="list-indented"/>').append(
                $('<li/>').append(
                    '<strong>(a)</strong> either party may apply to the Shanghai Municipal Labor Dispute Arbitration Tribunal (“Tribunal”) for adjudication; and'
                ),
                $('<li/>').append(
                    '<strong>(b)</strong> any party that is not satisfied with the Tribunal’s ruling may institute legal proceedings at the local People’s Court within fifteen (15) days after receiving the Tribunal’s ruling.'
                )
            ),
            $('<p/>').append(
                'The Company and Employee hereby waive the right to mediate labor disputes.'
            ),
            $('<p/>').append(
                '<strong><u>ARTICLE 9 - MISCELLANEOUS</u></strong>'
            ),
            $('<p/>').append(
                '<strong>9.1.</strong> The Employee and the Company agree that this Agreement is executed in two (2) originals in English.'
            ),
            $('<p/>').append(
                '<strong>9.2.</strong> If any provisions of this Agreement shall be rendered invalid or ineffective by operation of the relevant laws and regulations of the PRC, such provisions shall be severed from the remaining provisions in the Agreement and the remaining provisions shall continue to be valid and effective.  The Agreement shall be interpreted in such a manner as to best reflect the original agreement between the Company and the Employee to the closest extent disregarding the invalid and ineffective provisions.'
            ),
            $('<p/>').append(
                '<strong>9.3.</strong> No amendment to any provisions of this Agreement shall be effective unless made in writing and signed by the Company and the Employee.  No waiver of any provision hereof shall be effective unless made in writing and signed by the waiving party.  The failure of either party to require the performance of any term or obligation of this Agreement, or the waiver by either party of any breach of this Agreement, shall not prevent any subsequent enforcement of such term or obligation or be deemed a waiver of any subsequent breach.'
            ),
            $('<p/>').append(
                '<strong>9.4.</strong> This Agreement, the attachments hereto, and the documents referenced in this Agreement or the attachments constitute the entire understanding of the parties as to the subject matter contained herein and supersede all prior discussions, negotiations and agreements concluded between the Company and the Employee.'
            ),
            $('<p/>').append(
                '<strong>9.5.</strong> Employee shall not make any assignment of this Agreement or any interest herein without the prior written consent of the Company, except that the financial benefits provided to Employee in this Agreement shall inure to the benefit of Employee’s heirs and assigns in the event of Employee’s death.  The Company may assign this Agreement, and this Agreement shall inure to the benefit of and be binding upon the Company and its successors and assigns.'
            ),
            $('<p/>').append(
                'IN WITNESS WHEREOF, the Company and the Employee hereto have signed this Agreement in Shanghai Municipality, People\’s Republic of China on this ',
                $('<mark/>').append(
                    OfferLetterData.CurrentDate, '.'
                )
            ),
            $('<p/>').append(
                'Yours sincerely'
            ),
            $('<p class="mb-60"/>').append(
                'For and on behalf of ',
                $('<mark/>').append(
                    OfferLetterData.EntityName
                ),
                ', Ltd.<br>',
                '<span id="complimentary-close-signatory"></span><br>',
                'Company Signatory'
            ),
            $('<p class="hide"/>').append('&nbsp;')
        )
        // end append
    );

}

$(document).on('ready', function() {
    
    // render template
    fnView();

    // completed letter
    if ($("#sv").prop('disabled')) {
        $("#ButtonSaveAndComplete").remove();
        var arrParts = [
            [1, 'hidden_pg']
        ];
        var arrParts2 = [
            [1, 'hidden_pg2']
        ];
        var arrParts3 = [
            [1, 'hidden_pg3']
        ];
        showCompletedOfferLetter('incomplete', 'complete', arrParts);
        showCompletedOfferLetter('incomplete2', 'complete2', arrParts2);
        showCompletedOfferLetter('incomplete3', 'complete3', arrParts3);
    }
    else {
        makeOfferLetter('hidden_pg','offerClause');
        makeOfferLetter('hidden_pg2','offerClause2');
        makeOfferLetter('hidden_pg3','offerClause3');
    }
});
