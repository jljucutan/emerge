/**
 * SERVICES-36404 | jjucutan | PayPal - Create Germany Offer Letter
 * 2021-02-11 | jjucutan | created version 3
 * 2022-08-12 | jjucutan | created version 4
 * 2022-01-03 | jjucutan | created version 5, updated heading address
 */
 function fnView() { 

    let footer = `<mark>${OfferLetterData.EntityName}</mark>, German Branch - Registered Office: Ballycoolin Business Park, Ballycoolin Road, Blanchardstown, Dublin 15, Ireland, Company Registration Number SE646492<br>&nbsp;<br>`;

    // removed footer 2022-080-12
    // if (OfferLetterData.EntityName === "PayPal Deutschland GmbH") {
        // footer = 'PayPal Deutschland GmbH, Geschäftsführerin: Daniela Matiz, HRB Nr.: 17106 P, Amtsgericht Potsdam, Sitz der Gesellschaft: Kleinmachnow';
    // }

    const addSpaces = function(space) {
        let spaces = '';
        for (i = 0; i < space; i++) {
            spaces += '<span class="hide"><br>&nbsp;</span>';
        }
        return spaces;
    }

    const addPrintFooter = function(spaceBefore, spaceAfter) {
        let spacedFooter = '';
        spacedFooter += addSpaces(spaceBefore);
        spacedFooter += '<p class="hide fb-size9">' + footer + '</p>';
        spacedFooter += addSpaces(spaceAfter);
        return spacedFooter;
    }

    let footerSpaces = 0;

    const incrementFooterSpaces = function(increments) {
        footerSpaces += increments;
    }

    const decrementFooterSpaces = function(decrements) {
        footerSpaces -= decrements;
        if (footerSpaces < 0) {
            footerSpaces = 0;
        }
    }

    const resetFooterSpaces = function() {
        footerSpaces = 0;
    }

    $("#markup").html("").append(
        $('<div class="offerClause"/>').append(
            `<mark>${OfferLetterData.EntityName}</mark>– Ballycoolin Business Park, Ballycoolin Road, Blanchardstown, Dublin 15, Ireland`
            // (OfferLetterData.EntityName == 'PayPal Deutschland GmbH') && $('<p style="font-size: 10px !important;"/>').append(
            //     $('<mark/>').append(
            //         'PayPal Deutschland GmbH, Marktplantz 1 14532 Europarc-Dreilinden'
            //         )
            //     )
            // )
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
                    OfferLetterData.Full_Name ? OfferLetterData.Full_Name + '<br>': '',
                    OfferLetterData.Address1 ? OfferLetterData.Address1 + '<br>': ''
                    ),
                (OfferLetterData.Address2) &&
                $('<mark/>').append(
                    OfferLetterData.Address2 ? OfferLetterData.Address2 + '<br>': ''
                    ),
                $('<p/>').append(
                   $('<mark/>').html(OfferLetterData.Zip ? OfferLetterData.Zip: ''),
                   $('<span/>').html(OfferLetterData.Zip ? ' ' : ' '),
                   $('<span/>').html(OfferLetterData.City ? ' ' : ' '),
                   $('<mark/>').html(OfferLetterData.City)
                )
            ),
            $('<p/>').append(
                'Liebe/r ',
                $('<mark/>').append(
                    (OfferLetterData.Preferred_First_Name ? OfferLetterData.Preferred_First_Name : OfferLetterData.First_Name)
                    ),
                ','
                ),
            $('<p/>').append(
                'Wir freuen uns sehr, dass wir Ihnen heute das Angebot für Ihren Einstieg bei PayPal schicken können.'
                ),
            (OfferLetterData.Workplace_Model=='In-Office') &&
            $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Workplace Model = In Office"/>').append(
                'Sie sind verpflichtet, Ihre Tätigkeit im Betrieb der Gesellschaft in ',
                $('<mark/>').append(OfferLetterData.LOCATION_DISPLAYNAME),
                ' zu erbringen. Des Weiteren können Sie verpflichtet sein, nach Anforderung der Gesellschaft Ihre Tätigkeit gelegentlich auch an anderen Standorten zu erbringen.'
                ),
            (OfferLetterData.Workplace_Model=='Virtual Flex') &&
            $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Workplace Model = Virtual Flex"/>').append(
                'Die Tätigkeit des Praktikanten kann zu einem gewissen Zeitanteil außerhalb eines PayPal-Büros erbracht werden, wobei der Praktikant hierbei die von der Gesellschaft zur Verfügung gestellten virtuellen Arbeitsmittel benutzen wird. Sofern der Praktikant virtuell arbeitet, muss er seine Tätigkeit an einem Ort erbringen, der sich innerhalb Deutschlands und in der Nähe des ',
                $('<mark/>').append(OfferLetterData.LOCATION_DISPLAYNAME),
                ' PayPal-Betriebes befindet. Neben seiner individuellen Tätigkeit kann der Praktikant aus Gründen des persönlichen Austausches zur Anwesenheit in einem der PayPal Büros verpflichtet sein. Die Gesellschaft kann unter Abwägung der betrieblichen und der persönlichen Interessen jederzeit den Tätigkeitsort des Praktikanten ändern oder auch die Möglichkeit des virtuellen Arbeitens wieder abschaffen. Die Gesellschaft wird den Praktikanten in diesem Fall entsprechend benachrichtigen (eine Kompensationszahlung erfolgt jedoch nicht). Weitere Einzelheiten, einschließlich der an den Praktikanten gestellten Anforderungen, sind der Offsite Working Richtlinie der Gesellschaft sowie weiteren Richtlinien zu entnehmen.'
                ),
            (OfferLetterData.Workplace_Model=='Virtual') &&
            $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Workplace Model = Virtual"/>').append(
                'Die Tätigkeit des Praktikanten kann außerhalb eines PayPal-Büros in Deutschland unter Nutzung der von der Gesellschaft zur Verfügung gestellten virtuellen Arbeitsmittel erbracht werden. Außerdem kann aus Gründen des persönlichen Austausches die Anwesenheit des Praktikanten in einem der PayPal Büros erforderlich sein. Weitere Einzelheiten, einschließlich der an den Praktikanten gestellten Anforderungen, sind der Offsite Working Richtlinie der Gesellschaft sowie weiterer Richtlinien zu entnehmen.'
                ),
            (OfferLetterData.AIP=='AIP-Yes') &&
            $('<p class="marked" data-toggle="popover" data-placement="top" data-content="AIP = Yes"/>').append(
                'Weiterhin kann Ihnen PayPal einen Bonus gewähren, welcher vom Unternehmens-Ergebnis und der Arbeitsleistung des Arbeit-nehmers abhängig ist. Die Zahlung dieses Bonus ist freiwillig. Auch die wiederholte vor-behaltlose Zahlung begründet keinen Rechts-anspruch für die Zukunft. Der Bonus kann bei 100% Zielerreichung ',
                $('<mark/>').append(
                    OfferLetterData.EIP_Percentage
                    ),
                '% des Bruttogehaltes betragen.'
                ),
            $('<p/>').append(
                'Wir respektieren die Privatsphäre unserer Mitarbeiter und werden alle einschlägigen Bestimmungen zum Datenschutz einhalten. Die Verarbeitung personenbezogener Daten erfolgt im Einklang mit der Datenschutzerklärung für PayPal Mitarbeiter, die dem Ihnen zusammen mit dieser Vereinbarung ausgehändigt wurde. Sie bestätigen hiermit, dass Sie die Datenschutzerklärung gelesen und verstanden haben.'
                ),
            //(OfferLetterData.AIP=='AIP-Yes') && incrementFooterSpaces(2),
            (OfferLetterData.Relocation == 'Y' && OfferLetterData.Relo_Bonus == 'No') &&  $('<p  class="marked" data-toggle="popover" data-placement="top" data-content="Employee Relocating"/>').append(
                $('<span/>').append(
                    'PayPal Holdings Inc. unterstützt Sie bei Ihrem Umzug von '),
        $('<mark/>').html(
                    OfferLetterData.RelocationFrom),
        $('<span/>').append(
          ' nach ',
        $('<mark/>').html(
                    OfferLetterData.PayAreaCity),
          ' durch ein Umzugspaket durch unseren externen Dienstleister Aires. Aires wird sich dazu direkt mit Ihnen in Verbindung setzen.'
                    )
                ),
            //(OfferLetterData.AIP!='AIP-Yes') && incrementFooterSpaces(8),
            $('<p/>').append(
                'Wir möchten Sie bitten, uns zum Zeichen Ihres Einverständnisses eine unterzeichnete Kopie des Arbeitsvertrages sowie den Perso-nalfragebogen mit den erforderlichen Unterla-gen bis zum ',
                $('<mark/>').append(
                    //OfferLetterData.German_Due_Date
                    //2019-14-01 PSALUDARES fixed substring
                    incrementDate($('#launch_date').val(), 'de', {'numbers': 7, 'period': 'days'})
                    ),
                ' zurückzusenden.'
                ),
            $('<p/>').append(
                'Das ganze PayPal-Team freut sich, Sie bald bei uns begrüßen zu können.'
                ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                'Beste Grüße'
                ),
            $('<p class="mb-60 complimentary-close"/>').append(
                '<span class="complimentary-close-signatory"></span><br>',
                $('<mark/>').append(
                    OfferLetterData.EntityName
                    )
                ),
                (OfferLetterData.AIP=='AIP-Yes' && OfferLetterData.Relocation == 'Y' && OfferLetterData.Relo_Bonus == 'No') && 
                addPrintFooter(4,3),
                (OfferLetterData.AIP=='AIP-Yes' && ((OfferLetterData.Relocation != 'Y' && OfferLetterData.Relo_Bonus  == 'No') || (OfferLetterData.Relocation == 'Y' && OfferLetterData.Relo_Bonus  != 'No'))) && 
                addPrintFooter(8,3),
                (OfferLetterData.AIP!='AIP-Yes' && OfferLetterData.Relocation == 'Y' && OfferLetterData.Relo_Bonus == 'No') && 
                addPrintFooter(9,3),
                (OfferLetterData.AIP!='AIP-Yes' && ((OfferLetterData.Relocation != 'Y' && OfferLetterData.Relo_Bonus  == 'No') || (OfferLetterData.Relocation == 'Y' && OfferLetterData.Relo_Bonus  != 'No'))) && 
                addPrintFooter(13,3)
            )
);


$("#markup5").html("").append(
    $('<div class="offerClause5"/>').append(
        $('<p class="fb-size9"/>').append(
            `<mark>${OfferLetterData.EntityName}</mark> – Registered Office: Ballycoolin Business Park, Ballycoolin Road, Blanchardstown, Dublin 15, Ireland`
            // (OfferLetterData.EntityName === "PayPal PLC, German Branch") && 
            // 'PayPal PLC, German Branch - Registered Office: Ballycoolin Business Park, Ballycoolin Road, Blanchardstown, Dublin 15, Ireland, Company Registration Number SE646492<br>&nbsp;<br>',
            // (OfferLetterData.EntityName === "PayPal Deutschland GmbH") &&
            // 'PayPal Deutschland GmbH, Geschäftsführerin: Daniela Matiz, HRB Nr.: 17106 P, Amtsgericht Potsdam, Sitz der Gesellschaft: Kleinmachnow'
        )
    )
);

$("#markup6").html("").append(
    $('<div class="offerClause6"/>').append(
        resetFooterSpaces(),
        addPrintFooter(3,3),
        $('<p/>').append(
                'Dear ',
                $('<mark/>').append(
                    (OfferLetterData.Preferred_First_Name ? OfferLetterData.Preferred_First_Name : OfferLetterData.First_Name)
                    ),
                ','
                ),
            $('<p/>').append(
                'We are delighted that we can send you the offer for your start at PayPal today.'
                ),
            (OfferLetterData.Workplace_Model=='In-Office') &&
            $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Workplace Model = In Office"/>').append(
                'You will be required to work from the Company’s office located at ',
                $('<mark/>').append(OfferLetterData.LOCATION_DISPLAYNAME),
                '. From time to time, you may be required to work at other locations, as directed by the Company.'
                ),
            (OfferLetterData.Workplace_Model=='Virtual Flex') &&
            $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Workplace Model = Virtual Flex"/>').append(
                'Your role may be performed outside of a PayPal office part of the time with the use of virtual working tools we provide. You must work virtually from a location near to the ',
                $('<mark/>').append(OfferLetterData.LOCATION_DISPLAYNAME),
                ' PayPal office, within Germany. In addition to any in-person working, you may also be required to attend a PayPal office for in-person collaboration.  We may amend or end the location of your role or remove the ability to work virtually at any time and will give you notice (but will not provide any compensation) if we do so. We may amend or end the location of your role or remove the ability to work virtually at any time, insofar as this is reasonable after weighing up the operational and personal interests and will give you notice (but will not provide any compensation) if we do so.  You may find more details, including our expectations of you, within our Offsite Working Policy and associated policies.'
                ),
            (OfferLetterData.Workplace_Model=='Virtual') &&
            $('<p class="marked" data-toggle="popover" data-placement="top" data-content="Workplace Model = Virtual"/>').append(
                'Your role may be performed outside of a PayPal office within Germany with the use of virtual working tools we provide. You may also be required to attend a PayPal office for in-person collaboration. You may find more details, including our expectations of you, within our Offsite Working Policy and associated policies.'
                ),
            (OfferLetterData.AIP=='AIP-Yes') &&
            $('<p class="marked" data-toggle="popover" data-placement="top" data-content="AIP = Yes"/>').append(
                'Furthermore, PayPal can grant you a bonus, which is dependent on the company’s results and the employee’s performance at work. The payment of this bonus is voluntary and not subject of the contract. Even the unconditional repeating payment doesn’t justify a legal claim for the future. The bonus can amount to ',
                $('<mark/>').append(
                    OfferLetterData.EIP_Percentage
                    ),
                '% of the gross salary if the achievement of objectives is fulfilled to 100%.'
                ),
            $('<p/>').append(
                'We respect the privacy of all employees and will comply with all applicable laws regarding processing of personal information. All such personal information is processed in accordance with the PayPal Employee Privacy Statement, a copy of which has been given to you in connection with this Agreement. You acknowledge that you have reviewed and understand the Employee Privacy Statement.'
                ),
            (OfferLetterData.Relocation == 'Y' && OfferLetterData.Relo_Bonus == 'No') &&  $('<p class="marked" data-toggle="popover" data-placement="top" data-content="QUALIFIES FOR RELOCATION"/>').append(
                $('<span/>').append(
                    'PayPal Holdings Inc. Will support you with your relocation from '),
                $('<mark/>').append(OfferLetterData.RelocationFrom),
                $('<span/>').append(  ' to ',
                $('<mark/>').append(OfferLetterData.PayAreaCity),
                    ' by providing a relocation package via our external service provider AIRES. Regarding the further process, you will be contacted by AIRES.')
                    
                ),
            $('<p/>').append(
                'To voice your approval, please send back a signed copy of the contract as well as the personal questionnaire with the other requested documents until ',
                $('<mark/>').append(
                    //2019-14-01 PSALUDARES fixed substring
                    incrementDate($('#launch_date').val(), 'en', {'numbers': 7, 'period': 'days'})
                    ),
                '.'
                ),
            $('<p/>').append(
                'The whole PayPal team is looking forward to welcome you soon.'
                ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                'Best regards'
                ),
            $('<p class="mb-60 complimentary-close"/>').append(
                '<span class="complimentary-close-signatory"></span><br>',
                $('<mark/>').append(
                    OfferLetterData.EntityName
                    )
                ),              
                (OfferLetterData.AIP=='AIP-Yes' && OfferLetterData.Relocation == 'Y' && OfferLetterData.Relo_Bonus == 'No') && 
                addPrintFooter(19,0),
                (OfferLetterData.AIP=='AIP-Yes' && ((OfferLetterData.Relocation != 'Y' && OfferLetterData.Relo_Bonus  == 'No') || (OfferLetterData.Relocation == 'Y' && OfferLetterData.Relo_Bonus  != 'No'))) && 
                addPrintFooter(23,0),
                (OfferLetterData.AIP!='AIP-Yes' && OfferLetterData.Relocation == 'Y' && OfferLetterData.Relo_Bonus == 'No') && 
                addPrintFooter(24,0),
                (OfferLetterData.AIP!='AIP-Yes' && ((OfferLetterData.Relocation != 'Y' && OfferLetterData.Relo_Bonus  == 'No') || (OfferLetterData.Relocation == 'Y' && OfferLetterData.Relo_Bonus  != 'No'))) && 
                addPrintFooter(27,0)
                
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

const incrementDate = function(dateStr, locale, increments) {
    'use strict'
    const d = moment(dateStr);
    if (locale) {
        d.locale(locale);
    }
    if (!!increments) {
        d.add(increments.numbers, increments.period);
    }
    return d.format('DD MMMM YYYY');
}

$(document).on('ready', function() {
    if ($("#launch_date").val().trim().length <= 0) { 
        $("#launch_date").val(moment().format('YYYY-MM-DD')); 
        //$("#launch_date").val(datePlusDays("2019-03-01", 5)); 
    }


    // render template
    fnView();

    // completed letter
    if ($("#sv").prop('readonly')) {
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
        var arrParts4 = [
        [1, 'hidden_pg4']
        ];
        var arrParts5 = [
        [1, 'hidden_pg5']
        ];
        var arrParts6 = [
        [1, 'hidden_pg6']
        ];
        var arrParts7 = [
        [1, 'hidden_pg7']
        ];
        var arrParts8 = [
        [1, 'hidden_pg8']
        ];
        var arrParts9 = [
        [1, 'hidden_pg9']
        ];
        showCompletedOfferLetter('incomplete', 'complete', arrParts);
        showCompletedOfferLetter('incomplete2', 'complete2', arrParts2);
        showCompletedOfferLetter('incomplete3', 'complete3', arrParts3);
       showCompletedOfferLetter('incomplete4', 'complete4', arrParts4);
        showCompletedOfferLetter('incomplete5', 'complete5', arrParts5);
        showCompletedOfferLetter('incomplete6', 'complete6', arrParts6);
        showCompletedOfferLetter('incomplete7', 'complete7', arrParts7);
        showCompletedOfferLetter('incomplete8', 'complete8', arrParts8);
  showCompletedOfferLetter('incomplete9', 'complete9', arrParts9);
    }
    else {
        makeOfferLetter('hidden_pg','offerClause');
        makeOfferLetter('hidden_pg2','offerClause2');
        makeOfferLetter('hidden_pg3','offerClause3');
        makeOfferLetter('hidden_pg4','offerClause4');
        makeOfferLetter('hidden_pg5','offerClause5');
        makeOfferLetter('hidden_pg6','offerClause6');
        makeOfferLetter('hidden_pg7','offerClause7');
        makeOfferLetter('hidden_pg8','offerClause8');
  makeOfferLetter('hidden_pg9','offerClause9');
    }
});
