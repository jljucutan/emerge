/**
 * SERVICES-37252 | PayPal - Germany Intern Employment Agreement
 * CHANGE LOGS
 * 03/04/2019 | jjucutan | build offer letter
 */

const fnView = function() {
    "use strict";

    let footer =  (OfferLetterData.EntityName === "PayPal SE") ? 'PayPal SE, Whittaker House, Whittaker Avenue, Richmond Upon Thames, Surrey, TW9, 1EH, United Kingdom; Company Registration Number SE000007' : 'PayPal Deutschland GmbH, Gesellschaft Richard Swales, HRB Nr.: 17106 P, Amtsgericht Potsdam, Sitz der Gesellschaft: Kleinmach, Company Registration Number SE000007';

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
                'PayPal Deutschland GmbH, Marktplatz 1, 14532 Europarc-Dreilinden <br>- im folgenden "Arbeitgeber" -'
            ),
            $('<p class="center"/>').append(
                'und'
            ),
            $('<p class="center"/>').append(
                $('<mark/>').append(
                    OfferLetterData.Full_Legal_Name
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
                'wird folgender PRAKTIKUMSVERTRAG geschlossen:'
            ),
            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 1 Beginn und Dauer der Ausbildung')
                )
            ),
            $('<ol class="list-indented"/>').append(
                $('<li/>').append(
                    'Der Praktikant wird unter dem Vorbehalt eines positiven Kroll Checks und Skill Survey vom ',
                    $('<mark/>').append(
                        OfferLetterData.StartDate
                    ),
                    ' bis zum ',
                    $('<mark/>').append(
                        OfferLetterData.ContractEndDate 
                    ),
                    ' als Praktikant im Betrieb eingesetzt; vor Beginn des Praktikantenverhältnisses ist eine ordentliche Kündigung ausgeschlossen. Die Vertragspartner wünschen weder jetzt noch in Zukunft ein Arbeitsverhältnis zu begründen, es sei denn, dassinsoweit ein neuer Vertrag abgeschlossen wird.',
                    addSpaces(1)
                ),
                $('<li/>').append(
                    'Zunächst wird der Praktikant für einen Monat zur Probe eingesetzt. Innerhalb der Probezeit kann das Vertragsverhältnis beiderseits unter Einhaltung einer Kündigungsfrist von zwei Wochen beendet werden. Die Kündigung muss schriftlich erfolgen.',
                    addSpaces(1)
                ),
                $('<li/>').append(
                    'Das Praktikantenverhältnis endet mit Ablauf des ',
                    $('<mark/>').append(
                        OfferLetterData.ContractEndDate 
                    ),
                    ', ohne dass es einer Kündigung bedarf. Dies gilt ohne Rücksicht darauf, ob sich der Studiengang des Praktikanten oder der Termin seiner Prüfung ändert oder ob er eine Prüfung nicht besteht.',
                    addSpaces(1)
                ),
                $('<li/>').append(
                    'Nach Ablauf der Probezeit kann das Praktikantenverhältnis während seiner Befristung (siehe Abs. 3) nur beendet werden:<br>',
                    addSpaces(1),
                    $('<ul class="list-indented">').append(
                        $('<li/>').append(
                            'a) von jeder Partei aus wichtigem Grund ohne Einhaltung einer Kündigungsfrist,',
                            addSpaces(1)
                        ),
                        $('<li/>').append(
                            'b) im gegenseitigen Einvernehmen,',
                            addSpaces(1),
                            addPrintFooter(4,2)
                        ),
                        $('<li/>').append(
                            'c) durch den Praktikanten mit einer Kündigungsfrist von vier Wochen zum Monatsende, falls er die beabsichtigte Berufsausbildung aufgeben oder sich für eine andere Berufstätigkeit ausbilden lassen will.',
                            addSpaces(1)
                        )
                    )
                )
            ),

            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 2 Ausbildungsgang')
                )
            ),
            $('<ol class="list-indented"/>').append(
                $('<li/>').append(
                    'Der Arbeitgeber verpflichtet sich, den Praktikant während der Dauer des Ausbildungsverhältnisses in ihrem Betrieb in der Abteilung ',
                    $('<mark/>').append(
                        OfferLetterData.DEPARTMENT_NAME 
                    ),
                    ' zu beschäftigen.',
                    addSpaces(1)
                ),
                $('<li/>').append(
                    'Der Arbeitgeber behält sich vor, den Praktikant einer anderen Abeilung zuzuweisen, insofern dort eine themenverwandte und adäquate Ausbildung möglich ist.',
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
            addPrintFooter(22,3),
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
                    'die ihm gebotenen Ausbildungsmöglichkeiten regelmäßig, pünktlich und pflichtbewusst wahrnehmen, den Ausbildungsplan gewissenhaft einhalten und die ihm übertragenen Arbeiten sorgfältig ausführen;',
                    addSpaces(1)
                ),
                $('<li/>').append(
                    'die Anweisungen befolgen, die ihm im Rahmen der Ausbildung von den Weisungsberechtigten der Firma erteilt werden, und die Ordnungsbestimmungen des Betriebs, insbesondere Arbeitsordnungen und Unfallverhütungsvorschriften, beachten;',
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
                    'bei Fernbleiben die Firma unter Angabe des Grundes unverzüglich benachrichtigen und im Falle einer Erkrankung spätestens am dritten Tag eine ärztliche Bescheinigung vorlegen.',
                    addSpaces(1)
                )
            ),

            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 5 Arbeitszeit')
                )
            ),
            $('<p/>').append(
                'Die Dauer der regelmäßigen Einsatzzeit richtet sich nach den Gepflogenheiten des Betriebs; die wöchentliche Arbeitszeit beträgt 40 Stunden.'
            ),
            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 6 Vergütung')
                )
            ),
            $('<p/>').append(
                'Für die Dauer der Praktikantenzeit erhält der Praktikant eine monatliche Brutto-Vergütung von ',
                $('<mark/>').append(
                    OfferLetterData.SalaryOffered
                ),
                ' ',
                $('<mark/>').append(
                    OfferLetterData.SalaryCurrency
                ),
                ' ',
                $('<mark/>').append(
                    OfferLetterData.GermanWrittenMonthlySalary
                ),
                ', die jeweils am letzten Arbeitstag des Monats fällig wird.'
            ),
            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 7 Urlaub')
                )
            ),
            $('<ol class="list-indented"/>').append(
                $('<li/>').append(
                    'Der Praktikant hat Anspruch auf 28 Arbeitstage Urlaub im Kalenderjahr. Der Urlaub ist möglichst zusammenhängend zu nehmen und nach den betrieblichen Bedürfnissen des Arbeitgebers mit diesem abzustimmen.',
                    addSpaces(1)
                ),
                $('<li/>').append(
                    'Der Jahresurlaub ist möglichst im laufenden Kalenderjahr, spätestens jedoch bis zum 30. April des Folgejahres zu nehmen.',
                    addSpaces(1)
                )
            ),
            // page 3 footer
            addPrintFooter(10,4),
            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 8 Haftpflicht, Schadensersatz, Versicherung')
                )
            ),
            $('<ol class="list-indented"/>').append(
                $('<li/>').append(
                    'Der Praktikant wird zur gesetzlichen Unfallversicherung angemeldet.',
                    addSpaces(1)
                ),
                $('<li/>').append(
                    'Der Praktikant tritt bereits jetzt evtl. Schadensersatzansprüche an die Firma insoweit ab, als er durch einen Dritten schuldhaft verletzt wird und infolge Arbeitsunfähigkeit seine Vergütung ganz oder teilweise von der Firma weiter erhält.',
                    addSpaces(1)
                )
            ),
            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 9 Verschwiegenheitsverpflichtung')
                )
            ),
            $('<p/>').append(
                'Der Praktikant verpflichtet sich, über alle technischen, kaufmännischen und persönlichen Vorgänge und Verhältnisse, die ihm im Zusammenhang mit der Tätigkeit für den Arbeitgeber bekannt geworden sind oder werden, sowohl während der Dauer der Tätigkeit als auch nach ihrer Beendigung Stillschweigen zu bewahren. Der Praktikant verpflichtet sich ferner, die im Rahmen der Tätigkeit für den Arbeitgeber gespeicherten personen- oder geschäftsbezogenen Daten zu keinem anderen Zweck als dem der rechtmäßigen Erfüllung seiner Aufgaben im Rahmen des Arbeitsverhältnisses zu verarbeiten, zugänglich zu machen, bekannt zu geben oder sonst zu nutzen. Diese Verpflichtung besteht auch nach Beendigung der Tätigkeit fort. Der Praktikant verpflichtet sich auch, bei der Generierung, Speicherung, Veränderung, Übermittlung und Nutzung von insbesondere personen- oder geschäftsbezogenen Daten im Rahmen seiner Tätigkeit für den Arbeitgeber die Vorschriften der einschlägigen Datenschutzgesetze in der jeweils aktuellen Fassung zu beachten.'
            ),
            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 10 Ergänzungen und Änderungen')
                )
            ),
            $('<p/>').append(
                'Ergänzungen und Änderungen dieses Vertrages - einschließlich dieser Bestimmung bedürfen der Schriftform. Mündliche Nebenabreden bestehen nicht.'
            ),
            
            $('<p/>').append(
                $('<strong/>').append(
                    $('<u>').html('&#167; 11 Salvatorische Klausel')
                )
            ),
            $('<p class="mb-40"/>').append(
                'Sollten einzelne Bestimmungen dieses Vertrages unwirksam sein, so wird hierdurch die Wirksamkeit des übrigen Vertrages nicht berührt. Die unwirksame Klausel ist durch eine solche zu ersetzen, die dieser inhaltlich am nächsten kommt.'
            ),
            $('<p class="hide"/>').append('&nbsp;')
        )
        // end append
    );

    $("#markup4").html("").append(
        $('<div class="offerClause4"/>').append(
            addSpaces(2)
        )
    );
    $("#markup5").html("").append(
        $('<div class="offerClause5"/>').append(
            addSpaces(2),
            $('<p class="fb-size9">').html(footer),
            addSpaces(2)
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
