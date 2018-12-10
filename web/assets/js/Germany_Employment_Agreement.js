/**
 * SERVICES-36404 | jjucutan | PayPal - Create Germany Offer Letter
 */
function fnView() { 
    $("#markup").html("").append(
        $('<div class="offerClause"/>').append(
            (OfferLetterData.EntityName === 'PayPal SE') && $('<p style="font-size: 10px !important;"/>').append(
                $('<mark/>').append(
                    'PayPal SE, Whittaker<br>',
                    'House, Whittaker Avenue,<br>',
                    'Richmond Upon Thames,<br>',
                    'Surrey, TW9 1EH<br>'
                )
            ),
            (OfferLetterData.EntityName !== 'PayPal SE') && $('<p style="font-size: 10px !important;"/>').append(
                $('<mark/>').append(
                    'Paypal Deutshland GmbH<br>',
                    'Markplatz 1 14532<br>',
                    'Europarc-Dreilinden<br>'
                )
            )
        )
    );
    $("#markup2").html("").append(
        $('<div class="offerClause2"/>').append(
            $('<p/>').append(
                'Europarc-Dreilinden, den ',
                $('<mark/>').append(
                    OfferLetterData.German_Current_Long_Date
                )
            ),
            $('<p/>').append(
                $('<mark/>').append(
                    OfferLetterData.Full_Name,
                    '<br/>',
                    OfferLetterData.Address1,
                    '<br/>',
                    OfferLetterData.Address2,
                    '<br/>',
                    OfferLetterData.City ? OfferLetterData.City + ', ': '',
                    OfferLetterData.State ? OfferLetterData.State + ', ': '',
                    OfferLetterData.Zip ? OfferLetterData.Zip : ''
                )
            ),
            $('<p/>').append(
                'Liebe/r ',
                $('<mark/>').append(
                    OfferLetterData.Preferred_First_Name
                ),
                ','
            ),
            $('<p/>').append(
                'Wir freuen uns sehr, dass wir Ihnen heute das Angebot für Ihren Einstieg bei PayPal schicken können.'
            ),
            $('<p/>').append(
                'Weiterhin kann Ihnen PayPal einen Bonus gewähren, welcher vom Unternehmens-Ergebnis und der Arbeitsleistung des Arbeit-nehmers abhängig ist. Die Zahlung dieses Bonus ist freiwillig. Auch die wiederholte vor-behaltlose Zahlung begründet keinen Rechts-anspruch für die Zukunft. Der Bonus kann bei 100% Zielerreichung xx% des Bruttogehaltes betragen.'
            ),
            (OfferLetterData.Relocation === 'Y') &&  $('<p/>').append(
                $('<mark/>').append(
                    'PayPal Holdings Inc. unterstützt Sie bei Ihrem Umzug von ',
                    OfferLetterData.RelocationFrom,
                    ' nach Berlin / Brandenburg durch ein Umzugspaket durch unseren externen Dienstleister Aires. Aires wird sich dazu direkt mit Ihnen in Verbindung setzen.'
                )
            ),
            $('<p/>').append(
                'Wir möchten Sie bitten, uns zum Zeichen Ihres Einverständnisses eine unterzeichnete Kopie des Arbeitsvertrages sowie den Perso-nalfragebogen mit den erforderlichen Unterla-gen bis zum ',
                $('<mark/>').append(
                    OfferLetterData.German_Due_Date
                ),
                ' zurückzusenden.'
            ),
            $('<p/>').append(
                'Das ganze PayPal-Team freut sich, Sie bald bei uns begrüßen zu können.'
            ),
            $('<p/>').append(
                'Beste Grüße'
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p class="mb-60 complimentary-close"/>').append(
                '<span class="complimentary-close-signatory"></span><br>',
                $('<mark/>').append(
                    OfferLetterData.EntityName
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                'Dear ',
                $('<mark/>').append(
                    OfferLetterData.Preferred_First_Name
                ),
                ','
            ),
            $('<p/>').append(
                'We are delighted that we can send you the offer for your start at PayPal today.'
            ),
            $('<p/>').append(
                'Furthermore, PayPal can grant you a bonus, which is dependent on the company’s results and the employee’s performance at work. The payment of this bonus is voluntary and not subject of the contract. Even the unconditional repeating payment doesn’t justify a legal claim for the future. The bonus can amount to xx% of the gross salary if the achievement of objectives is fulfilled to 100%.'
            ),
            (OfferLetterData.Relocation === 'Y') &&  $('<p/>').append(
                $('<mark/>').append(
                    'PayPal Holdings Inc. Will support you with your relocation from ',
                    OfferLetterData.RelocationFrom,
                    ' to Berlin / Brandenburg by providing a relocation package via our external service provider AIRES. Regarding the further process, you will be contacted by AIRES.'
                )
            ),
            $('<p/>').append(
                'To voice your approval, please send back a signed copy of the contract as well as the personal questionnaire with the other requested documents until ',
                $('<mark/>').append(
                    datePlusDays(new Date().toISOString().substring(0,10), 5)
                )
            ),
            $('<p/>').append(
                'The whole PayPal team is looking forward to welcome you soon.'
            ),
            $('<p/>').append(
                'Best regards'
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p class="mb-60 complimentary-close"/>').append(
                '<span class="complimentary-close-signatory"></span><br>',
                $('<mark/>').append(
                    OfferLetterData.EntityName
                )
            ),
            $('<p class="hide"/>').append('&nbsp;')
        )
    );
    $("#markup5").html("").append(
        $('<div class="offerClause5"/>').append(
                (OfferLetterData.EntityName === 'PayPal SE') && $('<p style="font-size: 10px !important;"/>').append(
                    $('<mark/>').append(
                        'PayPal SE, Whittaker House, Whittaker Avenue, Richmond Upon Thames, Surrey, TW9 1EH, United Kingdom; Company Registration Number SE000007'
                    )
                ),
                (OfferLetterData.EntityName !== 'PayPal SE') && $('<p style="font-size: 10px !important;"/>').append(
                    $('<mark/>').append(
                        'PayPal Deutschland GmbH, Geschäftsführer: Frank Keller, HRB Nr.: 17106 P, Amtsgericht Potsdam, Sitz der Gesellschaft: Kleinmachnow Company Registration Number SE000007'
                    )
                )
        )
    );
}

var months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
var monthsEng = ["January","February","March","April","May","June","July", "August","September","October","November","December"];

var getCurrentGermanDate = function() {
    var d = new Date();
    return d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};

var datePlusDays = function(dateStr, incrementDays) {
    var d = new Date(dateStr);
    var Business_Days = 5;
    var Days = 0;
    while (Days < Business_Days) {
        d.setDate(d.getDate() + 1);
        if (d.getDay() > 0 && d.getDay() < 6) {
            Days++;
        }
    }
    var Launch_Date_Day = d.getDate();
    var Launch_Date_Month = "/" + (d.getMonth() + 1) + "/";
    var Launch_Date_Year = d.getFullYear();
    return parseInt(Launch_Date_Day) + Launch_Date_Month + Launch_Date_Year;
};

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
        showCompletedOfferLetter('incomplete4', 'complete4', arrParts4);
        showCompletedOfferLetter('incomplete5', 'complete5', arrParts5);
    }
    else {
        makeOfferLetter('hidden_pg','offerClause');
        makeOfferLetter('hidden_pg2','offerClause2');
        makeOfferLetter('hidden_pg3','offerClause3');
        makeOfferLetter('hidden_pg4','offerClause4');
        makeOfferLetter('hidden_pg5','offerClause5');
    }
});
