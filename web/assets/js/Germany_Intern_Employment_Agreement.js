/**
 * SERVICES-37252 | PayPal - Germany Intern Employment Agreement
 * CHANGE LOGS
 * 03/04/2019 | jjucutan | build offer letter
 * 02/15/2021 | anati | created version 2
 * 08/11/2022 | psaludares | created version 3
 * 01/03/2022 | jjucutan | created version 4
 */

const fnView = function() {
    //"use strict";

    //let header =  (OfferLetterData.EntityName === "PayPal PLC, German Branch") ? 'PayPal PLC, Ballycoolin Business Park, Ballycoolin Road, Blanchardstown, Dublin 15, Ireland' : ((OfferLetterData.EntityName === "PayPal Deutschland GmbH") ? 'PayPal Deutschland GmbH Marktplatz 1 14532  Europarc-Dreilinden' : '');

    //let footer =  (OfferLetterData.EntityName === "PayPal PLC, German Branch") ? 'PayPal PLC, German Branch – Registered Office: Ballycoolin Business Park, Ballycoolin Road, Blanchardstown, Dublin 15, Ireland, Company Registration Number SE646492' : (OfferLetterData.EntityName === "PayPal Deutschland GmbH") ? 'PayPal Deutschland GmbH, Geschäftsführerin: Daniela Matiz, HRB Nr.: 17106 P, Amtsgericht Potsdam, Sitz der Gesellschaft: Kleinmachnow' : '';

    let header = `<mark>${OfferLetterData.EntityName}</mark><br>Ballycoolin Business Park, Ballycoolin Road, Blanchardstown, Dublin 15, Ireland`
    
    let footer = `<mark>${OfferLetterData.EntityName}</mark> – Registered Office: Ballycoolin Business Park, Ballycoolin Road, Blanchardstown, Dublin 15, Ireland, Company Registration Number SE646492`

    const addSpaces = function(space) {
        let spaces = '';
        for (let i = 0; i < space; i++) {
            spaces += '<p class="hide"><br></p>';
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

    $("#markup").html("").append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p class="center"/>').append(
                $('<strong/>').text('PRAKTIKUMSVERTRAG')
            ),
            $('<p class="center"/>').append(
                'zwischen der'
            ),
            $('<p class="center"/>').append(
                header
            ),
            $('<p class="center"/>').append(
                '- im folgenden "Arbeitgeber" -'
            ),
            $('<p class="center"/>').append(
                'und'
            ),
            $('<p class="center"/>').append(
                $('<mark/>').append(
                    OfferLetterData.Full_Name
                ),
                '<br>',
                $('<mark/>').append(
                    OfferLetterData.Address1
                ),
                (OfferLetterData.Address2.length >= 1) && $('<mark/>').append(
                    '<br>',
                    OfferLetterData.Address2
                ),
                '<br>',
                $('<mark/>').append(
                    OfferLetterData.Zip
                ),
                ' ',
                $('<mark/>').append(
                    OfferLetterData.City
                ),
                '<br>- im folgenden "Praktikant" –'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').append(
                'Zur sprachlichen Vereinfachung wird im Rahmen dieses Praktikumsvertrages die Bezeichnung "Praktikant" sowohl für weibliche als auch für männliche Mitarbeiter verwendet.'
            ),
            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 1 Beginn und Dauer der Ausbildung')
                )
            ),
            $('<ol class="list-indented"/>').append(
                $('<li/>').append(
                    'Der Praktikant wird unter dem Vorbehalt eines positiven Background Checks  vom ',
                    $('<mark/>').append(
                        OfferLetterData.StartDate
                    ),
                    ' bis zum ',
                    $('<mark/>').append(
                        OfferLetterData.ContractEndDate 
                    ),
                    ' als Praktikant im Betrieb eingesetzt; vor Beginn des Praktikantenverhältnisses ist eine ordentliche Kündigung ausgeschlossen. Die Vertragspartner wünschen weder jetzt noch in Zukunft ein Arbeitsverhältnis zu begründen, es sei denn, dass insoweit ein neuer Vertrag abgeschlossen wird.',
                    addSpaces(1)
                ),
                $('<li/>').append(
                    'Zunächst wird der Praktikant für einen Monat zur Probe eingesetzt. Innerhalb der Probezeit kann das Vertragsverhältnis beiderseits unter Einhaltung einer Kündigungsfrist von zwei Wochen beendet werden. Die Kündigung muss schriftlich erfolgen.',
                    addSpaces(1)
                ),
                $('<li/>').append(
                    'Nach Ablauf der Probezeit kann das Praktikantenverhältnis während seiner Befristung (siehe Abs. 3) nur beendet werden:<br>',
                    addSpaces(1),
                    $('<ul class="list-indented">').append(
                            'a) von jeder Partei aus wichtigem Grund ohne Einhaltung einer Kündigungsfrist,<br><br>',
                            addSpaces(1)
                    ),
                    $('<ul class="list-indented">').append(
                            'b) im gegenseitigen Einvernehmen,<br><br>',
                            addSpaces(1)
                    ),
                    $('<ul class="list-indented">').append(
                            'c) durch den Praktikanten mit einer Kündigungsfrist von vier Wochen zum Monatsende, falls er die beabsichtigte Berufsausbildung aufgeben oder sich für eine andere Berufstätigkeit ausbilden lassen will.',
                            addSpaces(1)
                            //addPrintFooter(3,4)
                    )
                ),
                $('<li/>').append(
                    'Das Praktikantenverhältnis endet mit Ablauf des ',
                    $('<mark/>').append(
                        OfferLetterData.ContractEndDate 
                    ),
                    ', ohne dass es einer Kündigung bedarf. Dies gilt ohne Rücksicht darauf, ob sich der Studiengang des Praktikanten oder der Termin seiner Prüfung ändert oder ob er eine Prüfung nicht besteht.',
                    addSpaces(1)
                )
            ),

            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 2 Ausbildungsgang')
                )
            ),
            $('<ol class="list-indented"/>').append(
                $('<li/>').append(
                    'Der Arbeitgeber verpflichtet sich, den Praktikant während der Dauer des Ausbildungsverhältnisses in ihrem Betrieb als ',
                    $('<mark/>').append(
                        OfferLetterData.BusinessTitle
                    ),
                    ' ',
                    (OfferLetterData.LegalIntern == "Y") &&
                    $('<mark/>').append(
                        (OfferLetterData.LegalIntern == "Y")? 'an 25 Stunden pro Woche' : ''
                    ),                  
                    ' zu beschäftigen. ',
                    (OfferLetterData.LegalIntern == "Y") &&
                    $('<mark/>').append(
                        (OfferLetterData.LegalIntern == "Y") ? 'und auszubilden. Der Praktikant wird weitere 15 Stunden pro Woche eine Nebentätigkeit als juristische Mitarbeiterin bei dem Arbeitgeber ausüben (außerhalb der für das Referendariat vorgesehenen Einsatzzeit). Im Rahmen der Nebentätigkeit werden dem Praktikant eigenständige Aufgaben zugewiesen, die nicht Gegenstand der Referendarausbildung sind. Zu diesen ausbildungsfremden Tätigkeiten gehören insbesondere folgende Aufgaben: Mitarbeit bei Veröffentlichungsprojekten, Unterstützung von Vortragsprojekten, Allgemeine Recherchetätigkeiten sowie Administrative Tätigkeiten.' : ''
                    ),                  
                    addSpaces(1)
                ),
                $('<li/>').append(
                    'Der Arbeitgeber behält sich vor, den Praktikant einer anderen Abteilung zuzuweisen, insofern dort eine themenverwandte und adäquate Ausbildung möglich ist.',
                    addSpaces(1)
                ),
                $('<li/>').append(
                    'Der Praktikant verpflichtet sich, zu jedem Zeitpunkt während und nach seiner Beschäftigung seine Position, seinen Titel, seine Rollenbeschreibung und seine Aufgaben so darzustellen, wie vom Arbeitgeber vorgegeben. Dies gilt auch für den Um-gang mit PayPal-Kunden und -Lieferanten sowie für die Angaben in seinem Lebenslauf, in seinen Social-Media-Profilen und -Seiten (einschließlich, aber nicht beschränkt auf LinkedIn- oder Facebook-Profile), auf seiner Website, in seiner E-Mail-Signatur und auf seinen Visitenkarten.',
                    addSpaces(1)
                )
            ),
            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 3 Pflichten des Ausbildenden')
                )
            ),
            $('<p/>').append(
                'Der Arbeitgeber wird im Rahmen der betrieblichen Möglichkeiten'
            ),
            $('<ol class="list-indented"/>').append(
                $('<li/>').append(
                    'Gelegenheit bieten, dass sich der Praktikant nach Maßgabe des Ausbildungsziels die erforderlichen Erfahrungen und fachbezogenen Kenntnisse verschaffen kann;',
                    addSpaces(1)
                ),
                $('<li/>').append(
                    'die notwendigen Ausbildungsmittel kostenlos zur Verfügung stellen;',
                    addSpaces(1)
                ),
                $('<li/>').append(
                    'den vom Praktikant ggf. über den Verlauf des Ausbildungsverhältnisses zu fertigenden Bericht sachlich prüfen;',
                    addSpaces(1)
                ),
                $('<li/>').append(
                    'den Praktikant hinsichtlich seiner Eignung für den angestrebten Beruf, der Fortsetzung der Ausbildung oder der Änderung seiner Bildungsabsichten beraten;',
                    addSpaces(1)
                ),
                $('<li/>').append(
                    'dem Praktikant nach Beendigung der praktischen Tätigkeit einen Tätigkeitsnachweis ausstellen, auf begründeten Antrag auch ein Zeugnis, das Angaben über das Ergebnis der Tätigkeit enthält und sich auf Führung und Leistung erstreckt.',
                    addSpaces(1)
                )           
            ),
            // page 2 footer
            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 4 Pflichten des Praktikanten')
                )
            ),
            $('<p/>').append(
                'Der Praktikant wird'
            ),
            $('<ol class="list-indented"/>').append(
                $('<li/>').append(
                    'die ihm gebotenen Ausbildungsmöglichkeiten regelmäßig, pünktlich und pflichtbewusst wahrnehmen, den Ausbildungsplan gewissenhaft einhalten und die ihm übertragenen Arbeiten sorgfältig ausführen;'
                    /*
                    (OfferLetterData.LegalIntern == "Y") &&
                    addPrintFooter(5,5),
                    (OfferLetterData.LegalIntern == "N") &&
                    addPrintFooter(15,5)
                    */
                ),
                $('<li/>').append(
                    'die Anweisungen befolgen, die ihm im Rahmen der Ausbildung von den Weisungsberechtigten des Arbeitgebers  erteilt werden, und die Ordnungsbestimmungen des Betriebs, insbesondere Arbeitsordnungen und Unfallverhütungsvorschriften, beachten;',
                    addSpaces(1)
                ),
                $('<li/>').append(
                    'Werkstoffe, Werkzeuge, Gerätschaften sowie sonstige Betriebseinrichtungen, die ihm zur Verfügung gestellt werden, pfleglich behandeln;',
                    addSpaces(1)
                ),
                $('<li/>').append(
                    'die Interessen des Betriebs wahren und alle geheimhaltungsbedürftigen Betriebsvorgänge, die ihm während des Ausbildungsverhältnisses zur Kenntnis gelangen, vertraulich behandeln und auch nach Vertragsbeendigung darüber Stillschweigen bewahren;',
                    addSpaces(1)
                ),
                $('<li/>').append(
                    'bei Fernbleiben den Arbeitgeber  unter Angabe des Grundes unverzüglich benachrichtigen und im Falle einer krankheitsbedingten Abwesenheit  spätestens am dritten Tag eine ärztliche Bescheinigung vorlegen.',
                    addSpaces(1)
                ),
                $('<li/>').append(                  
                    $('<mark/>').append(
                        (OfferLetterData.LegalIntern == "Y") ? 'dem Arbeitgeber eine notwendige Nebentätigkeitsgenehmigung für seinen Einsatz im Rahmen dieses Ausbildungsverhältnisses vor Beginn der Nebentätigkeit vorlegen.' : 'Gilt nicht für Mitarbeiter.',
                        addSpaces(1)
                    )
                )   
            ),

            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 5 Einsatzzeit')
                )
            ),
            $('<p/>').append(
                'Die regelmäßige wöchentliche Einsatzzeit des Praktikanten beträgt 40 Stunden; Verteilung und Lage richten sich nach den Gepflogenheiten des Betriebs. ',
                (OfferLetterData.LegalIntern == "Y") &&
                $('<mark/>').append(
                    (OfferLetterData.LegalIntern == "Y") ? 'Dabei entfallen 25 Wochenstunden auf die Referendarausbildung und 15 Wochenstunden auf die Nebentätigkeit als juristische Mitarbeiterin.' : '',
                    addSpaces(1)
                )   
            ),

            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 6 Einsatzort')
                )
            ),
            (OfferLetterData.Workplace_Model == "In-Office") &&
            $('<p/>').append(
                'Sie sind verpflichtet, Ihre Tätigkeit im Betrieb der Gesellschaft in ',
                $('<mark/>').append(
                    OfferLetterData.LOCATION
                ),
                ' zu erbringen. Des Weiteren können Sie verpflichtet sein, nach Anforderung der Gesellschaft Ihre Tätigkeit gelegentlich auch an anderen Standorten zu erbringen.',
                addSpaces(1)
            ),
            (OfferLetterData.Workplace_Model == "Virtual Flex") &&
            $('<p/>').append(
                'Die Tätigkeit des Praktikanten kann zu einem gewissen Zeitanteil außerhalb eines PayPal-Büros erbracht werden, wobei der Praktikant hierbei die von der Gesellschaft zur Verfügung gestellten virtuellen Arbeitsmittel benutzen wird. Sofern der Praktikant virtuell arbeitet, muss er seine Tätigkeit an einem Ort erbringen, der sich innerhalb Deutschlands und in der Nähe des ',
                $('<mark/>').append(
                    OfferLetterData.LOCATION
                ),
                ' PayPal-Betriebes befindet. Neben seiner individuellen Tätigkeit kann der Praktikant aus Gründen des persönlichen Austausches zur Anwesenheit in einem der PayPal Büros verpflichtet sein. Die Gesellschaft kann unter Abwägung der betrieblichen und der persönlichen Interessen jederzeit den Tätigkeitsort des Praktikanten ändern oder auch die Möglichkeit des virtuellen Arbeitens wieder abschaffen. Die Gesellschaft wird den Praktikanten in diesem Fall entsprechend benachrichtigen (eine Kompensationszahlung erfolgt jedoch nicht). Weitere Einzelheiten, einschließlich der an den Praktikanten gestellten Anforderungen, sind der Offsite Working Richtlinie der Gesellschaft sowie weiteren Richtlinien zu entnehmen.',
                addSpaces(1)
            ),
            (OfferLetterData.Workplace_Model == "Virtual") &&
            $('<p/>').append(
                'Die Tätigkeit des Praktikanten kann außerhalb eines PayPal-Büros in Deutschland unter Nutzung der von der Gesellschaft zur Verfügung gestellten virtuellen Arbeitsmittel erbracht werden. Außerdem kann aus Gründen des persönlichen Austausches die Anwesenheit des Praktikanten in einem der PayPal Büros erforderlich sein. Weitere Einzelheiten, einschließlich der an den Praktikanten gestellten Anforderungen, sind der Offsite Working Richtlinie der Gesellschaft sowie weiterer Richtlinien zu entnehmen.',
                addSpaces(1)
            ),



            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 7 Vergütung')
                )
            ),
            $('<p/>').append(
                'FFür die Dauer der Praktikantenzeit ',
                (OfferLetterData.LegalIntern == "Y") &&
                $('<mark/>').append(
                    (OfferLetterData.LegalIntern == "Y") ? 'und allein für die Nebentätigkeit als juristische Mitarbeiterin (20 Wochenstunden)' : ''
                ),
                ' erhält der Praktikant eine monatliche Brutto-Vergütung in Höhe von ',         
                $('<mark/>').append(
                    OfferLetterData.SalaryOffered
                ),
                ' ',
                $('<mark/>').append(
                    OfferLetterData.SalaryCurrency
                ),
                ' zahlbar nach gesetzlichen Abzügen jeweils zum Monatsende. Der Arbeitgeber darf die Höhe der gezahlten Brutto-Vergütung der Ausbildungsbehörde mitteilen.',
                addSpaces(1)
            ),
            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 8 Urlaub')
                )
            ),
            $('<ol class="list-indented"/>').append(
                $('<li/>').append(
                    'Der Praktikant hat Anspruch auf 30  Arbeitstage (bei einer 5-Tage-Woche) Urlaub pro Kalenderjahr. Der Urlaubsanspruch setzt sich aus dem gesetzlichen Urlaubsanspruch von 20 Arbeitstagen sowie einem darüber hinausgehenden vertraglichen Urlaubsanspruch von 10 Arbeitstagen zusammen. Der Urlaub ist möglichst zusammenhängend zu nehmen und nach den betrieblichen Bedürfnissen des Arbeitgebers mit diesem abzustimmen.'
                ),
                $('<li/>').append(
                    'Der Urlaubsanpruch  ist möglichst im laufenden Kalenderjahr, spätestens jedoch bis zum 30. April des Folgejahres zu nehmen, anderenfalls verfallen diese ersatzlos.',
                    addSpaces(1)
                ),
                $('<li/>').append(
                    'Ein Ausgleich für nicht genommenen Urlaub wird im laufenden Praktikantenverhältnis nicht geleistet. Bei Beendigung des Praktikantenverhältnisses erfolgt eine etwaige Urlaubsabgeltung nur bis zur Höhe des gesetzlichen Urlaubsanspruchs. Bereits genommener Urlaub wird auf den gesetzlichen Urlaubsanspruch angerechnet.'
                    /*
                    (OfferLetterData.LegalIntern == "Y") &&
                    addPrintFooter(4,4),
                    (OfferLetterData.LegalIntern == "N") &&
                    addPrintFooter(7,6)
                    */
                )
            ),
            // page 3 footer
            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 9 Haftpflicht, Schadensersatz, Versicherung')
                )
            ),
            $('<ol class="list-indented"/>').append(
                $('<li/>').append(
                    'Der Praktikant wird zur gesetzlichen Unfallversicherung angemeldet.',
                    addSpaces(1)
                ),
                $('<li/>').append(
                    'Der Praktikant tritt bereits jetzt evtl. Schadensersatzansprüche an den Arbeitgeber  insoweit ab, als er durch einen Dritten schuldhaft verletzt wird und infolge Arbeitsunfähigkeit seine Vergütung ganz oder teilweise von dem Arbeitgeber  weiter erhält.',
                    addSpaces(1)
                )
            ),
            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 10 Vertraulichkeits- und Verschwiegenheitsverpflichtung, Datenschutz')
                )
            ),
            $('<p/>').append(
                'Der Praktikant verpflichtet sich, über alle technischen, kaufmännischen und persönlichen Vorgänge und Verhältnisse, die ihm im Zusammenhang mit der Tätigkeit für den Arbeitgeber bekannt geworden sind oder werden, sowohl während der Dauer der Tätigkeit als auch nach ihrer Beendigung Stillschweigen zu bewahren. '
            ),
            $('<p/>').append(
                'Der Praktikant verpflichtet sich ferner, die im Rahmen der Tätigkeit für den Arbeitgeber gespeicherten personen- oder geschäftsbezogenen Daten zu keinem anderen Zweck als dem der rechtmäßigen Erfüllung seiner Aufgaben im Rahmen des Arbeitsverhältnisses zu verarbeiten, zugänglich zu machen, bekannt zu geben oder sonst zu nutzen. Diese Verpflichtung besteht auch nach Beendigung der Tätigkeit fort. Der Praktikant verpflichtet sich auch, bei der Generierung, Speicherung, Veränderung, Übermittlung und Nutzung von insbesondere personen- oder geschäftsbezogenen Daten im Rahmen seiner Tätigkeit für den Arbeitgeber die Vorschriften der einschlägigen Datenschutzgesetze in der jeweils aktuellen Fassung zu beachten.'
            ),
            $('<p/>').append(
                'Die Gesellschaft respektiert die Privatsphäre ihrer Mitarbeiter und wird alle einschlägigen Bestimmungen zum Datenschutz einhalten. Die Verarbeitung personenbezogener Daten erfolgt im Einklang mit der Datenschutzerklärung für PayPal Mitarbeiter, die dem Praktikanten zusammen mit dieser Vereinbarung ausgehändigt wurde. Der Praktikant bestätigt hiermit, dass er die Datenschutzerklärung gelesen und verstanden hat.'
            ),
            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 11 Ergänzungen und Änderungen')
                )
            ),
            $('<ol class="list-indented"/>').append(
                $('<li/>').append(
                    'Alle beiderseitigen Ansprüche aus dem Ausbildungsverhältnis oder im Zusammenhang damit verfallen, wenn sie nicht binnen drei Monaten nach Fälligkeit in Textform gegenüber der anderen Vertragspartei geltend gemacht werden. '
                ),
                $('<li/>').append(
                    'Der vorstehende Absatz findet keine Anwendung bei Ansprüchen wegen Verletzung des Lebens, des Körpers oder der Gesundheit sowie bei vorsätzlichen Pflichtverletzungen.'
                )
            ),
            
            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 12 Ergänzungen und Änderungen')
                )
            ),
            $('<p class="mb-40"/>').append(
                'Mit Ausnahme individueller Abreden im Sinne des §305b BGB bedürfen Änderungen und Ergänzungen dieses Vertrages zu ihrer Wirksamkeit der Schriftform.. Dies gilt auch für die Aufhebung dieses Schriftformerfordernisses. Ausgeschlossen sind damit insbesondere Vertragsänderungen durch betriebliche Übung.'
            ),
            
            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 13 Salvatorische Klausel')
                )
            ),
            $('<p class="mb-40"/>').append(
                'Sollten einzelne Klauseln und/oder Bestimmungen dieses Vertrages ganz oder teilweise unwirksam sein oder werden, so wird hiervon  die Wirksamkeit der übrigen Klauseln davon nicht berührt. Die Parteien verpflichten sich, anstelle einer unwirksamen Klausel bzw. Bestimmung eine dieser Bestimmung möglichst nahekommende wirksame Regelung zu treffen. Entsprechendes gilt für den Fall einer Regelungslücke.'
            ),
            $('<p class="hide"/>').append('&nbsp;')
        )
        // end append
    );

    $("#markup4").html("").append(
        $('<div class="offerClause4"/>').append(
            addSpaces(0)
        )
    );
    $("#markup5").html("").append(
        $('<div class="offerClause5"/>').append(
            addSpaces(1),
            $('<p class="fb-size9">').html(footer),
            addSpaces(1)
        )
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
    makeOfferLetter('hidden_pg4','offerClause4');
    makeOfferLetter('hidden_pg5','offerClause5');
  }

});
