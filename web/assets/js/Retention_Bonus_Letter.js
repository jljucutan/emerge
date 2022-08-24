/**
 * CHANGE LOGS
 * 03/03/2020| jjucutan | copied from template
 * 04/21/2020| jjucutan | v3 - change heading date to event notification date
 * 06/26/2020| jjucutan | v4 - add header, greeting first name only, new paragraphs logics
 * 07/29/2020| jjucutan | v5 - verbiage updates
 * 04/20/2021| jjucutan | v6 - apply auto date format
 */

const fnView = function() {
    "use strict";

    const markupRoot = $("#markup").html("");
    markupRoot.append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p class="mb-30"/>').append(
                $('<mark/>').append(
                    moment(Notification_Date).format(LONG_DATES[EVENT_COUNTRY])
                )
            ),
            $('<p class="hide"/>').append('&nbsp;')
        ),
        $('<div class="offerClause"/>').append(
            $('<p class="mb-30"/>').append(
                $('<mark/>').append(
                    OfferLetterData.Full_Name
                ),
                '<br>',
                $('<mark/>').append(
                    OfferLetterData.Address1
                ),
                '<br>',
                (OfferLetterData.Address2) && $('<mark/>').append(
                    OfferLetterData.Address2
                ),
                OfferLetterData.Address2 && '<br>',
                $('<mark/>').append(
                    OfferLetterData.City,
                    OfferLetterData.City ? ', ' : '',
                    OfferLetterData.State,
                    OfferLetterData.State ? ' ' : '',
                    OfferLetterData.Zip
                )
            ),
            $('<p class="hide"/>').append('&nbsp;')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<mark/>').append(
                    'Dear ',
                    OfferLetterData.First_Name
                ),
                ','
            ),
            $('<p/>').append(
                'You are eligible for a Retention Bonus in the amount of $',
                $('<mark/>').append(
                    OfferLetterData.Offboarding_RetentionBonusAmt
                ),
                ', subject to standard deductions and withholdings (the “Retention Bonus”), payable in a lump sum within 60 days following ',
                !OfferLetterData.Special_Event_Retention_Date && $('<mark/>').append(
                    moment(OfferLetterData.Separation_Date).format(LONG_DATES[EVENT_COUNTRY])
                ),
                OfferLetterData.Special_Event_Retention_Date && $('<mark/>').append(
                    moment(OfferLetterData.Special_Event_Retention_Date).format(LONG_DATES[EVENT_COUNTRY])
                ),
                ', (the “Retention Date”), and subject to the terms and conditions described in this letter.'
            ),
            $('<p/>').append(
                ' In order to earn the Retention Bonus you must:'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    'Sign ',
                    (OfferLetterData.Age_Over_40 == 'Y') && 'and do not revoke',
                    ' your Separation Agreement.'
                ),
                $('<li/>').append(
                    'Remain employed through ',
                    !OfferLetterData.Special_Event_Retention_Date && $('<mark/>').append(
                        moment(OfferLetterData.Separation_Date).format(LONG_DATES[EVENT_COUNTRY])
                    ),
                    OfferLetterData.Special_Event_Retention_Date && $('<mark/>').append(
                        moment(OfferLetterData.Special_Event_Retention_Date).format(LONG_DATES[EVENT_COUNTRY])
                    ),
                    ', performing your regular duties and any other related tasks at a satisfactory or “Getting Results” performance level as outlined by your manager (unless you are released earlier for reasons other than cause) in your current role. If you transfer within PayPal, you may be eligible for a pro-rata payout of the Retention Bonus.  If you decide not to work through ',
                    !OfferLetterData.Special_Event_Retention_Date && $('<mark/>').append(
                        moment(OfferLetterData.Separation_Date).format(LONG_DATES[EVENT_COUNTRY])
                    ),
                    OfferLetterData.Special_Event_Retention_Date && $('<mark/>').append(
                        moment(OfferLetterData.Special_Event_Retention_Date).format(LONG_DATES[EVENT_COUNTRY])
                    ),
                    ', you will not be eligible for a Retention Bonus and your eligibility for severance benefits will be in accordance with the Severance Plan (refer to your Separation Agreement for details).'

                )
            ),
            $('<p/>').append(
                'All other terms and conditions of your employment and the Separation Agreement remain unchanged by this Retention Agreement, including the at-will nature of your employment.'
            ),
            $('<p/>').append(
                'Sincerely,'
            ),
            $('<p class="mb-60"/>').append(
                $('<mark/>').append(
                    OfferLetterData.HRBP
                ),
                '<br>Human Resources',
                '<br>Email: ',
                $('<mark/>').append(
                    OfferLetterData.HRBP_Email
                )
            ),
            $('<p class="hide"/>').append('&nbsp;')
        )
        // end append
    );
    $.each(markupRoot.find('[data-toggle="popover"]'), function(k,v) {
        let id = makeid();
        $('<div/>').prop('id', id).insertBefore($(v).data('container', '#' + id));
    });
}

const makeid = function() {
    "use strict";
    const CHAR_LENGTH = 16;
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( var i = 0; i < CHAR_LENGTH; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
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
