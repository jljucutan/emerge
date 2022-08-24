// Germany Employment Agreement
function fnView() {
    "use strict";

    const footer = (employee.EntityName === "PayPal SE") ? 'PayPal SE, Whittaker House, Whittaker Avenue, Richmond Upon Thames, Surrey, TW9, 1EH, United Kingdom; Company Registration Number SE000007<br>&nbsp;<br>' : 'PayPal Deutschland GmbH, Gesellschaft Richard Swales, HRB Nr.: 17106 P, Amtsgericht Potsdam, Sitz der Gesellschaft: Kleinmach, Company Registration Number SE000007';

    const addSpaces = function(space) {
        let spaces = '';
        for (i = 0; i < space; i++) {
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

    let footerSpaces = 0;

    const incrementFooterSpaces = function(increments) {
        footerSpaces += increments;
    }

    const resetFooterSpaces = function() {
        footerSpaces = 0;
    }

    $("#markup").html("").append(
        // Page 1
        $('<div class="offerClause"/>').append(
            $('<p class="center"/>').append(
                $('<strong/>').append(
                    (employee.Employee_Group.indexOf('T') >= 0) && $('<mark/>').append(
                        'BEFRISTETER'
                    ),
                    (employee.Employee_Group.indexOf('T') >= 0) && '&nbsp;',
                    'ARBEITSVERTRAG'
                )
            ),
            $('<p class="center"/>').html(
                'zwischen der'
            ),
            $('<p class="center"/>').append(
                $('<span class="dynamic"/>').html(employee.EntityName ? '<strong>' + employee.EntityName + '</strong><br>' : ''),
                $('<span class="dynamic"/>').html(employee.EntityAddress ? employee.EntityAddress : '')
            ),
            $('<p class="center"/>').html(
                '- nachfolgend “<strong>Gesellschaft</strong>” –'
            ),
            $('<p class="center"/>').html(
                'und'
            ),
            $('<p class="center"/>').append(
                $('<span class="dynamic"/>').html(employee.Full_Name),
                '<br>',
                $('<span class="dynamic"/>').html(employee.Address1),
                '<br>',
                (employee.Address2.length > 0) && 
                $('<span class="dynamic"/>').html(employee.Address2).append('<br>'),
                (employee.Address2.length > 0) && incrementFooterSpaces(2),
                $('<span class="dynamic"/>').html(employee.Zip),
                ' ',
                $('<span class="dynamic"/>').html(employee.City)
            ),
            $('<p class="center"/>').html(
                '- nachfolgend “<strong>Mitarbeiter</strong>” –'
            ),
            $('<p/>').html(
                '<i>Zur sprachlichen Vereinfachung wird im Rahmen dieses Arbeitsvertrags die Bezeichnung “Mitarbeiter” sowohl für weibliche als auch für männliche Mitarbeiter verwendet.</i>'
            ),
            $('<p/>').append(
                '<strong><u>1. Vertragsbeginn und Aufgabengebiet</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    '1.1. Der Mitarbeiter wird ab dem <span class="dynamic">' + employee.German_Start_Date + '</span>, <span class="dynamic">' + (employee.WC_Approval_Required == 'Yes' ? 'vorbehaltlich der Zustimmung des Betriebsrates sowie eines positiv abgeschlossenen Background Check' : 'der Voraussetzung eines positiv abgeschlossenen Background Check') + '</span>, als <span class="dynamic">' + employee.German_Business_Title + '</span>. Er berichtet an den von der Gesellschaft jeweils benannten Vorgesetzten.',
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    (employee.Continuous_Service == 'Yes') &&
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="continuous service"/>').append(
                        '1.2. Dieser Arbeitsvertrag schließt sich dem mit der ',
                        $('<mark/>').append(
                            employee.German_Previous_Employment
                        ),
                        ' am ',
                        $('<mark/>').append(
                            employee.German_Previous_End_Date
                        ),
                        ' geschlossenen arbeitsvertrag an und ersetzt diesen. ansprüche, die sich aus konzernweiten paypal-regelungen ergeben, bleiben unverändert bestehen. die betriebszugehörigkeit aus der in satz 1 bezeichneten tätigkeit wird anerkannt, so dass als eintrittsdatum der ',
                        $('<mark/>').append(
                            employee.German_Previous_Start_Date
                        ),
                        ' gilt.'
                    ),
                    (employee.Continuous_Service == 'Yes') && incrementFooterSpaces(1),
                    (employee.Continuous_Service != 'Yes') &&
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="continuous service"/>').append(
                        '1.2. Gilt nicht für mitarbeiter.'
                    ),
                    (employee.Continuous_Service != 'Yes') && incrementFooterSpaces(4),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    (employee.Credit_Continuous_Service == 'Yes') &&
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Continuous Service Credit"/>').append(
                        '1.3. Unter der Voraussetzung, dass das Arbeitsverhältnis ungekündigt über die Probezeit hinaus fortbesteht, wird die Betriebszugehörigkeit des Mitarbeiters aus vorherigen Beschäftigungszeiten innerhalb der PayPal Inc. Gruppe vom ',
                        $('<mark/>').append(
                            employee.German_Previous_Start_Date
                        ),
                        ' bis zum ',
                        $('<mark/>').append(
                            employee.German_Previous_End_Date
                        ),
                        ' anerkannt.'
                    ),
                    (employee.Credit_Continuous_Service == 'Yes') && incrementFooterSpaces(1),
                    (employee.Credit_Continuous_Service != 'Yes') &&
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Continuous Service Credit"/>').append(
                        '1.3. Gilt nicht für Mitarbeiter.'
                    ),
                    (employee.Credit_Continuous_Service != 'Yes') && incrementFooterSpaces(4),
                    $('<p/>').html('')
                )
            ),
            addPrintFooter(footerSpaces,8),
            true && resetFooterSpaces()
        ),

        // Page 2
        $('<div class="offerClause"/>').append(
            addSpaces(8),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '1.4. Vor Vertragsbeginn ist die ordentliche Kündigung ausgeschlossen.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '1.5. Im Einzelnen richten sich Art und Inhalt der Tätigkeit des Mitarbeiters nach den Weisungen der Gesellschaft und seiner Vorgesetzten. Die Gesellschaft behält sich vor, dem Mitarbeiter vorübergehend oder dauerhaft auch eine andere zumutbare gleichwertige und gleich bezahlte Tätigkeit zuzuweisen, wenn dies aus betrieblichen oder in der Person oder dem Verhalten des Mitarbeiters liegenden Gründen geboten erscheint.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<p/>').append(
                '<strong><u>2. Arbeitszeit und Arbeitsort</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '2.1. Die regelmäßige wöchentliche Arbeitszeit beträgt 40 Stunden. Verteilung und Lage der Arbeitszeit richten sich grundsätzlich nach den betrieblichen Erfordernissen bzw. der jeweils gültigen betriebsüblichen Arbeitszeitregelung und können jederzeit durch die Gesellschaft nach billigem Ermessen geändert werden.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '2.2. Bei entsprechendem betrieblichem Bedarf ist der Mitarbeiter verpflichtet, in zumutbarem Maß innerhalb des gesetzlich zulässigen Rahmens Mehrarbeit (ggf. auch an Wochenenden und Feiertagen) zu leisten.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '2.3. Der gewöhnliche Arbeitsort des Mitarbeiters ist Marktplatz 1 14532 Europarc Dreilinden. Die Gesellschaft behält sich unter Wahrung der Interessen des Mitarbeiters die Versetzung an einen anderen Arbeitsort vor.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '2.4. Der Mitarbeiter wird auf Wunsch der Gesellschaft auch Dienstreisen ins In- und Ausland unternehmen. Dienstreisen hat der Mitarbeiter im Einzelfall mit seinem Vorgesetzten abzustimmen. Reisezeiten, die außerhalb der regelmäßigen Arbeitszeit anfallen, gelten vorbehaltlich einer abweichenden Regelung nicht als Arbeitszeit und werden nicht gesondert vergütet.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<p/>').append(
                '<strong><u>3. Vergütung</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '3.1. Der Mitarbeiter erhält ein jährliches Bruttogehalt in Höhe von <span class="dynamic">' + employee.Salary_Amount + '</span> <span class="dynamic">' + employee.Salary_Currency + '</span>, zahlbar in 12 gleichen monatlichen Beträgen nach gesetzlichen Abzügen jeweils zum Monatsende (“<strong>Grundgehalt</strong>”).'
                    ),
                    $('<p/>').html('')
                )
            ),
            addPrintFooter(5,8)
        ),

        // Page 3
        $('<div class="offerClause"/>').append(
            addSpaces(8),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '3.2. Etwaige Mehrarbeit ist durch das Grundgehalt vollumfänglich abgegolten.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '3.3. Jegliche Sonderleistungen oder Sonderzahlungen, die nicht in diesem Vertrag oder einer anderen (gegebenenfalls auch mündlichen) vertraglichen Abrede ausdrücklich vereinbart sind, erfolgen freiwillig und ohne Rechtsanspruch für die Zukunft. Auch die wiederholte Gewährung begründet keinen Anspruch aus betrieblicher Übung.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '3.4. Die Abtretung oder Verpfändung von Vergütungsansprüchen ist ausgeschlossen. Etwaige Vergütungsüberzahlungen sind an die Gesellschaft zurückzuerstatten. Die Gesellschaft ist zur Aufrechnung mit überzahlten Bezügen im Rahmen nachfolgender Gehaltszahlungen berechtigt. Der Einwand des Wegfalls der Bereicherung (§ 818 Abs. 3 BGB) ist ausgeschlossen.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<p/>').append(
                '<strong><u>4. Umzugskosten</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    (employee.Relocation == 'Y') &&
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Employee Relocating"/>').append(
                        'Die Gesellschaft übernimmt Umzugskosten von ',
                        $('<mark/>').append(
                            employee.RelocationFrom
                        ),
                        ' nach ',
                        $('<mark/>').append(
                            employee.PayAreaCity
                        ),
                        '(Arbeitsort) in Höhe von ',
                        $('<mark/>').append(
                            employee.Estimate_Relo_Cost
                        ),
                        ' ',
                        $('<mark/>').append(
                            employee.Estimated_Relo_Cost_CRNCY_CD
                        ),
                        ',- brutto, auszahlbar als Einmalzahlung mit der Gehaltsabrechnung nach Vorlage der Meldebescheinigung. Sollte der Mitarbeiter den Vertrag innerhalb von zwölf Monaten nach Beginn des Vertragsverhältnisses kündigen oder sollte die Gesellschaft diesen Vertrag innerhalb dieses Zeitraums aus berechtigten verhaltensbedingten Gründen kündigen, so wird die o. g. Summe mit sofortiger Wirkung anteilig (pro rata temporis) zur Rückzahlung fällig, wobei für jeden vollständigen Monat der Beschäftigung bis zum Kündigungstermin 1/12tel abgezogen wird. Die Gesellschaft ist berechtigt, den Rückzahlungsanspruch mit etwaigen, noch zur Auszahlung stehenden Gehalts¬zahlungen aufzu¬rechnen.'
                    ),
                    (employee.Relocation == 'Y') &&
                    incrementFooterSpaces(8),
                    (employee.Relocation != 'Y') &&
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Employee Relocating"/>').append(
                        'Gilt nicht für Mitarbeiter.'
                    ),
                    (employee.Relocation != 'Y') &&
                    incrementFooterSpaces(21),
                    $('<p/>').html('')
                )
            ),
            addPrintFooter(footerSpaces,8),
            true && resetFooterSpaces()
        ),

        // Page 4
        $('<div class="offerClause"/>').append(
            addSpaces(15),
            $('<p/>').append(
                '<strong><u>5. Sign On Bonus</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    (employee.Hire_on_Bonus_Eligible == 'Yes') &&
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Hire On Bonus"/>').append(
                        'Der Mitarbeiter erhält mit seinem ersten Monatsgehalt zusätzlich eine einmalige Zahlung in Höhe von ',
                        $('<mark/>').append(
                         employee.Hire_On_Bonus_Amount
                        ),
                        ' ',
                        $('<mark/>').append(
                            employee.Hire_On_Bonus_CRNCY_CD
                        ),
                        ',- (nulltausend) brutto als Signing Bonus. Sollte der Mitarbeiter den Vertrag innerhalb von zwölf Monaten nach Beginn des Vertragsverhältnisses kündigen oder sollte die Gesellschaft diesen Vertrag innerhalb dieses Zeitraums aus berechtigten verhaltensbedingten Gründen kündigen, so wird die o. g. Summe mit sofortiger Wirkung anteilig (pro rata temporis) zur Rückzahlung fällig, wobei für jeden vollständigen Monat der Beschäftigung bis zum Kündigungstermin 1/12tel abgezogen wird. Die Gesellschaft ist berechtigt, den Rückzahlungsanspruch mit etwaigen, noch zur Auszahlung stehenden Gehalts¬zahlungen innerhalb der gesetzlichen Grenzen aufzurechnen.'
                    ),
                    (employee.Hire_on_Bonus_Eligible != 'Yes') &&
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Hire On Bonus"/>').append(
                        'Gilt nicht für Mitarbeiter.'
                    ),
                    (employee.Hire_on_Bonus_Eligible != 'Yes') &&
                    incrementFooterSpaces(12)
                )
            ),
            $('<p/>').append(
                '<strong><u>6. Arbeitsverhinderung/Krankheit</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '6.1. Ist der Mitarbeiter durch Krankheit oder sonstige unvorhergesehene Ereignisse an der Erbringung seiner Arbeitsleistung gehindert, so hat er die Gründe und die voraussichtliche Dauer der Verhinderung am ersten Abwesenheitstag vor Dienstbeginn seinem Vorgesetzten auf dem von der Gesellschaft separat benannten Weg persönlich mitzu-teilen.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '6.2. Im Falle einer länger als zwei Kalendertage dauernden krankheitsbedingten Arbeitsunfähigkeit ist der Mitarbeiter verpflichtet, der Gesellschaft eine ärztliche Bescheinigung über die Arbeitsunfähigkeit sowie deren voraussichtliche Dauer spätestens am 3. Tag des krankheitsbedingten Fehlens vorzulegen. Dauert die Arbeitsunfähigkeit länger als in der ärztlichen Bescheinigung angegeben, ist der Mitarbeiter verpflichtet, der Gesellschaft spätestens am darauf folgenden Arbeitstag eine neue ärztliche Bescheinigung vorzulegen, auch sofern ein Entgeltfortzahlungsanspruch nach dem Entgeltfortzahlungsgesetz nicht mehr besteht. Die Gesellschaft ist berechtigt, sowohl die Erstbescheinigung als auch die Fortsetzungsbescheinigung zu einem früheren Zeitpunkt zu verlangen. § 616 BGB findet keine Anwendung.'
                    ),
                    $('<p/>').html('')
                )
            ),
            addPrintFooter(5,8)
        ),

        // Page 5
        $('<div class="offerClause"/>').append(
            addSpaces(15),
            $('<p/>').append(
                '<strong><u>7. Reisekosten/Aufwendungsersatz</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '6.3. Der Mitarbeiter ist verpflichtet, der Gesellschaft anzuzeigen, wenn eventuell ein Anspruch des Mitarbeiters gegen einen Dritten auf Leistung von Schadenersatz wegen Verdienstausfall besteht. Er tritt hiermit etwaige Schadensersatzansprüche gegen Dritte aufgrund von Arbeits¬unfähigkeit für diejenigen Zeiträume und in dem Umfang an die Gesellschaft ab, für die ihm Ansprüche gegen die Gesellschaft auf Entgeltfortzahlung zustehen.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<p/>').append(
                '<strong><u>8. Urlaub</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        'Notwendige und angemessene Reisekosten und sonstige Aufwendungen im Rahmen des Anstellungsverhältnisses werden dem Mitarbeiter gegen Vorlage entsprechender Belege und im Rahmen der jeweils geltenden Richtlinien der Gesellschaft erstattet. Aufwendungen, die von den geltenden Richtlinien der Gesellschaft nicht erfasst sind, werden grundsätzlich nur im Rahmen der steuerlich anerkannten Beträge erstattet.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '8.1. Der Mitarbeiter hat Anspruch auf einen bezahlten Erholungsurlaub von 28 Arbeitstagen (bei einer 5-Tage-Woche) pro Kalenderjahr. Der Urlaubsanspruch setzt sich aus dem gesetzlichen Urlaubsanspruch von 20 Arbeitstagen sowie einem darüber hinausgehenden vertraglichen Urlaubsanspruch von 8 Arbeitstagen zusammen.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '8.2. Der Urlaub ist möglichst zusammenhängend zu nehmen. Die zeitliche Festlegung des Urlaubs erfolgt im Einvernehmen mit dem Vorgesetzten und unter Berücksichtigung der berechtigten betrieblichen Belange der Gesellschaft.'
                    ),
                    $('<p/>').html('')
                )
            ),
            addPrintFooter(6,8),
            true && resetFooterSpaces()
        ),

        // Page 6
        $('<div class="offerClause"/>').append(
            addSpaces(15),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').append(
                        '8.3. Urlaubsjahr ist das Kalenderjahr. Der Mitarbeiter soll seinen gesamten Urlaubsanspruch innerhalb des Kalenderjahres in Anspruch nehmen. Soweit der Mitarbeiter seinen Urlaub im laufenden Urlaubsjahr jedoch aufgrund dringender betrieblicher oder in der Person des Mitarbeiters liegender Gründe nicht in Anspruch nehmen kann, wird ein Resturlaubsanspruch im Rahmen der gesetzlichen Bestimmungen auf das Folgejahr übertragen und verfällt ersatzlos wenn er nicht bis zum 30. April des Folgejahres genommen wird.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '8.4. Ein Ausgleich für nicht genommenen Urlaub wird im laufenden Anstellungsverhältnis nicht geleistet.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '8.5. Bei Beendigung des Arbeitsverhältnisses erfolgt eine etwaige Urlaubsabgeltung nur bis zur Höhe des gesetzlichen Urlaubsanspruchs. Bereits genommener Urlaub wird auf den gesetzlichen Urlaubsanspruch angerechnet.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<p/>').append(
                '<strong><u>9. Wettbewerbsverbot und Nebentätigkeiten</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '9.1. Während des Arbeitsverhältnisses unterliegt der Mitarbeiter einem umfassenden Wettbewerbsverbot. Insbesondere ist es dem Mitarbeiter untersagt, als Arbeitnehmer, freier Mitarbeiter oder in sonstiger Form für einen Wettbewerber der Gesellschaft oder eines mit der Gesellschaft im Sinne von § 15 AktG verbundenen Unternehmens tätig zu werden, ein solches Wettbewerbsunternehmen zu gründen oder sich an einem solchen Wettbewerbsunternehmen maßgeblich zu beteiligen.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '9.2. Der Mitarbeiter wird der Gesellschaft seine gesamte Arbeitskraft zur Verfügung stellen. Die Ausübung einer entgeltlichen oder unentgeltlichen Nebentätigkeit bedarf der vorherigen  schriftlichen Zustimmung der Gesellschaft.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '9.3. Dies gilt auch für die Tätigkeit als Geschäftsführer, Vorstand oder Aufsichtsrat anderer Firmen.'
                    ),
                    $('<p/>').html('')
                )
            ),
            addPrintFooter(4,8),
            true && resetFooterSpaces()
        ),

        // Page 6
        $('<div class="offerClause"/>').append(
            addSpaces(12),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '9.4. Vorträge und Veröffentlichungen bedürfen der Zustimmung der Gesellschaft, wenn sie die Interessen der Gesellschaft berühren können.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '9.5. Die Gesellschaft wird die Zustimmung erteilen, wenn die Nebentätigkeit der Erbringung der Arbeitsleistung des Mitarbeiters unter diesem Arbeitsvertrag nicht entgegensteht und sonstige berechtigte Interessen der Gesellschaft nicht berührt sind. Die Zustimmung kann jederzeit widerrufen werden, wenn das Interesse des Unternehmens dies auch unter Berücksichtigung der Belange des Arbeitnehmers rechtfertigt.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '9.6. Im beiderseitigen Interesse wird der Mitarbeiter der Gesellschaft mögliche Interessenkonflikte (z.B. Verwandtschaft oder persönliche Beziehungen zu Kunden, Lieferanten oder anderen Geschäftspartnern der Gesellschaft) unverzüglich anzeigen.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<p/>').append(
                '<strong><u>10. Vertraulichkeits- und Verschwiegenheitspflicht</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        'Der Mitarbeiter verpflichtet sich, die ihm im Rahmen seiner Tätigkeit zur Kenntnis gelangenden vertraulichen betrieblichen Angelegenheiten, insbesondere Geschäfts- und Betriebs¬geheimnisse, der Gesellschaft und mit dieser verbundener Unternehmen sowie deren Geschäftspartnern, nicht für eigene Zwecke zu verwerten und darüber gegenüber Dritten und nicht berechtigten Mitarbeitern der Gesellschaft Stillschweigen zu bewahren. Diese Geheimhaltungspflicht besteht auch nach Beendigung des Arbeitsverhältnisses weiterhin fort.'
                    ),
                    $('<p/>').html('')
                )
            ),
            addPrintFooter(15,8)
        ),

        // Page 7
        $('<div class="offerClause"/>').append(
            addSpaces(12),
            $('<p/>').append(
                '<strong><u>11. Rückgabeverpflichtung</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        'Bei Beendigung des Arbeitsverhältnisses bzw. bei Freistellung oder auf Aufforderung der Gesellschaft hat der Mitarbeiter der Gesellschaft unverzüglich und unaufgefordert sämtliche ihm im Zusammenhang mit der Ausführung seiner dienstlichen Aufgaben überlassenen oder von ihm erstellten Gegenstände und Arbeitsmittel, insbesondere Laptop, Mobiltelefon, Unterlagen, Skizzen, Akten, Entwürfe und Kopien, Software, und alle sonstigen elektronisch oder anderweitig gespeicherten vertraulichen Daten (einschließlich Emails) zurückzugeben. Das gleiche gilt für die vom Mitarbeiter im Rahmen dieses Arbeitsverhältnisses ganz oder teilweise erbrachten Arbeitsergebnisse. Die Geltendmachung eines Zurück-behaltungsrechts an den genannten Gegenständen ist ausgeschlossen. Auf Verlangen der Gesellschaft wird der Mitarbeiter die Erfüllung seiner Rückgabeverpflichtungen gemäß dieser Ziffer schriftlich bestätigen. Die Verpflichtungen gemäß Ziffern 10 und 11 gelten auch nach Beendigung des Arbeitsverhältnisses.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<p/>').append(
                '<strong><u>12. Urheber- und sonstige Schutzrechte</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        'Im Hinblick auf Urheber und sonstige Schutzrechte gelten die Vorschriften der Anlage 1 zu diesem Vertrag.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<p/>').append(
                '<strong><u>13. Vertragsdauer und Kündigung</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    (employee.Employee_Group.indexOf('T') < 0) &&
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Employee Group is Temporary (Yes/No)"/>').append(
                        '13.1. Das Arbeitsverhältnis beginnt wie vereinbart am ',
                            $('<mark/>').append(
                                employee.German_Start_Date
                            ),
                            ' und wird auf unbestimmte Zeit geschlossen.'
                    ),
                    (employee.Employee_Group.indexOf('T') < 0) && incrementFooterSpaces(2),
                    (employee.Employee_Group.indexOf('T') >= 0) &&
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Employee Group is Temporary (Yes/No)"/>').append(
                        '13.1. Das Arbeitsverhältnis beginnt wie vereinbart am ',
                            $('<mark/>').append(
                                employee.German_Start_Date
                            ),
                            ' und wird befristet für die Dauer von ',
                            $('<mark/>').append(
                                employee.FTELength
                            ),
                            ' Monaten geschlossen und endet mit Ablauf des ',
                            $('<mark/>').append(
                                employee.German_Contract_End_Date
                            ),
                            ', ohne dass es einer Kündigung bedarf.'
                    ),
                    (employee.Employee_Group.indexOf('T') >= 0) && incrementFooterSpaces(2),
                    $('<p/>').html(''),
                    (employee.ProbationPeriodRequired == 'yes') &&
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Probation Period Required"/>').append(
                        'Die ersten sechs Monate gelten als Probezeit. Während dieser Zeit kann das Arbeitsverhältnis mit einer Kündigungsfrist von zwei Wochen von beiden Parteien gekündigt werden.'
                    ),
                    (employee.ProbationPeriodRequired != 'yes') &&
                    incrementFooterSpaces(5),
                    $('<p/>').html('')
                )
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '13.2. Das Recht zur ordentlichen und außerordentlichen Kündigung bleibt unberührt.'
                    ),
                    $('<p/>').html('')
                ),
                (employee.Continuous_Service == 'No' || employee.ProbationPeriodRequired == 'yes') &&
                $('<li/>').append(
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Contract Term Exception (Yes/No)"/>').append(
                        '13.3. ',
                        (employee.Contract_Term_Exception == 'No') &&
                        'Nach Ablauf der Probezeit, gilt für die Kündigung des Arbeitsverhältnisses eine Kündigungsfrist von drei Monaten zum Monatsende für beide Parteien als vereinbart.',
                        (employee.Contract_Term_Exception == 'Yes') &&
                        'Nach Ablauf der Probezeit, gelten für die Kündigung des Arbeitsverhältnisses die gesetzlichen Kündigungsfristen (BGB) für beide Parteien als vereinbart.'
                    ),
                    $('<p/>').html('')
                ),
                (employee.Continuous_Service == 'No' || employee.ProbationPeriodRequired == 'yes') &&
                incrementFooterSpaces(3),
                (employee.Continuous_Service == 'Yes' || employee.ProbationPeriodRequired == 'no') &&
                $('<li/>').append(
                    (employee.Contract_Term_Exception == 'No') &&
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Contract Term Exception (Yes/No)"/>').append(
                        '13.3. Für die Kündigung des Arbeitsverhältnisses gilt eine Kündigungsfrist von drei Monaten zum Monatsende für beide Parteien als vereinbart.'
                    ),
                    (employee.Contract_Term_Exception == 'Yes') &&
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Contract Term Exception (Yes/No)"/>').append(
                        '13.3. Für die Kündigung des Arbeitsverhältnisses gelten die die gesetzlichen Kündigungsfristen (BGB) für beide Parteien als vereinbart.'
                    ),
                    $('<p/>').html('')
                ),
                (employee.Continuous_Service == 'Yes' || employee.ProbationPeriodRequired == 'no') &&
                incrementFooterSpaces(3),
                $('<li/>').append(
                    $('<div/>').html(
                        '13.4. Jede Kündigung bedarf zu ihrer Wirksamkeit der Schriftform.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '13.5. Die Gesellschaft ist im Falle des Ausspruchs einer Kündigung - gleich von welcher Seite und aus welchem Grund - berechtigt, den Mitarbeiter bis zur rechtlichen Beendigung des Arbeitsverhältnisses unter Fortzahlung des Grund¬gehalts und unter Anrechnung von Resturlaubs¬ansprüchen und etwaigem Zwischenverdienst von der Pflicht zur Arbeitsleistung freizustellen.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    (employee.Employee_Group.indexOf('R') >= 0) &&
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Employee Group is Regular (Yes/No)"/>').html(
                        '13.6. Das Vertragsverhältnis endet ohne dass es einer Kündigung bedarf, spätestens mit Ablauf des Monats, in dem der Mitarbeiter die Altersgrenze für die Regelaltersrente (Regelalters¬grenze) erreicht oder erstmalig eine vorgezogene Altersrente bezieht. Das Arbeitsverhältnis endet ferner mit dem Tag des Rentenbeginns nach Zuerkennung einer unbefristeten Rente wegen Erwerbsminderung durch den Rentenversicherungsträger.'
                    ),
                    (employee.Employee_Group.indexOf('R') < 0) &&
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Employee Group is Regular (Yes/No)"/>').html(
                        '13.6. Wird das Vertragsverhältnis über das Befristungsende hinweg fortgesetzt, endet dieses ohne dass es einer Kündigung bedarf, spätestens mit Ablauf des Monats, in dem der Mitarbeiter die Altersgrenze für die Regelaltersrente (Regelaltersgrenze) erreicht oder erstmalig eine vorgezogene Altersrente bezieht. Das Arbeits¬verhältnis endet ferner mit dem Tag des Rentenbeginns nach Zuerkennung einer unbefristeten Rente wegen Erwerbsminderung durch den Rentenversicherungsträger.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<p/>').append(
                '<strong>14. <u>Arbeitsgenehmigung</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '14.1. Ist für die Beschäftigung des Arbeitnehmers eine Arbeitsgenehmigung und/oder ein Aufenthaltstitel erforderlich, steht der Abschluss des Arbeitsvertrages unter der aufschiebenden Bedingung, dass der Nachweis einer Arbeitsgenehmigung  bzw. eines Aufenthaltstitels für die beabsichtigte Tätigkeit bei der Gesellschaft vor Arbeitsbeginn vorgelegt wird.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '14.2. Der Arbeitnehmer ist, sofern für seine Beschäftigung eine Arbeitsgenehmigung bzw. ein Aufenthaltstitel erforderlich ist, verpflichtet, selbst für die Erteilung bzw. die Verlängerung der Arbeitsgenehmigung bzw. des Aufenthaltstitels für die Tätigkeit bei der Gesellschaft zu sorgen.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '14.2. Der Arbeitnehmer ist, sofern für seine Beschäftigung eine Arbeitsgenehmigung bzw. ein Aufenthaltstitel erforderlich ist, verpflichtet, selbst für die Erteilung bzw. die Verlängerung der Arbeitsgenehmigung bzw. des Aufenthaltstitels für die Tätigkeit bei der Gesellschaft zu sorgen.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '14.3. Der Arbeitnehmer muss der Gesellschaft einen entsprechenden Nachweis über die Verlängerung der Arbeitsgenehmigung bzw. des Aufenthaltstitels rechtzeitig vor dessen Ablauf vorlegen.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<p/>').append(
                '<strong>15. <u>Datenschutz, Nutzung von Internet und Email</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        'Im Hinblick auf zum Datenschutz sowie die Nutzung von betrieblichen Internet- und Emailsystemen gelten die Vorschriften der Anlage 2 zu diesem Vertrag.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<p/>').append(
                '<strong><u>16. Unternehmensrichtlinien</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        'Die Gesellschaft hat Compliance-Richtlinien sowie allgemeine Unternehmensrichtlinien aufgestellt. Der Mitarbeiter erkennt diese Richtlinien als verbindlich an und wird diese einhalten. Die Richtlinien sind im firmeneigenen Intranet veröffentlicht, und der Mitarbeiter ist verpflichtet, sich über die jeweils geltenden Richtlinien zu informieren. Die sich aus der jeweiligen Fassung dieser Richtlinien ergebenden Pflichten zählen zu den arbeitsvertraglichen Pflichten des Mitarbeiters.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<p/>').append(
                '<strong><u>17. Ausschlussfristen</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '17.1. Alle Ansprüche, die sich aus dem Arbeitsverhältnis ergeben, sind von den Vertragspartnern innerhalb von drei Monaten nach ihrer Fälligkeit schriftlich geltend zu machen und im Falle der Ablehnung oder Nichtäußerung der Gegenpartei innerhalb von drei Monaten nach Geltendmachung einzuklagen, andernfalls sind sie erloschen.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '17.2. Der vorstehende Absatz findet keine Anwendung bei Ansprüchen wegen Verletzung des Lebens, des Körpers oder der Gesundheit sowie bei vorsätzlichen Pflichtverletzungen.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<p/>').append(
                '<strong><u>18. Schlussbestimmungen</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '18.1. Änderungen und Ergänzungen dieses Vertrages bedürfen zu ihrer Wirksamkeit der Schriftform, es sei denn, sie beruhen auf einer ausdrücklichen oder individuellen Vertragsabrede. Auch die Aufhebung dieses Schriftformerfordernisses bedarf der Schriftform. Eine betriebliche Übung ist keine ausdrückliche beziehungsweise individuelle Vertragsabrede. Auch wiederholte Leistungen oder Vergünstigungen ohne ausdrückliche Vertragsabrede begründen keinen Anspruch für die Zukunft.'
                    ),
                    $('<p/>').html('')
                )
            ),
            addPrintFooter(3,8)
        ),

        // Page 7
        $('<div class="offerClause"/>').append(
            addSpaces(8),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '18.2. Sollten einzelne Bestimmungen dieses Arbeitsvertrages ganz oder teilweise unwirksam sein oder werden oder Lücken enthalten, wird die Wirksamkeit der übrigen Bestimmungen dieses Arbeitsvertrages davon nicht berührt. Die Parteien verpflichten sich, die unwirksame oder lückenhafte Bestimmung durch eine der Interessenlage und der wirtschaftlichen Zwecksetzung der Parteien möglichst nahe kommender Bestimmung zu ersetzen bzw. zu ergänzen.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '18.3. Dieser Vertrag ist in englischer und deutscher Sprache ausgefertigt. Im Falle einer Diskrepanz zwischen beiden Versionen soll die wahre Intention der Parteien festgestellt werden. Im Zweifelsfall ist die Fassung in deutscher Sprache ausschlaggebend.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<p class="text-center"/>').html(
                '<strong>Anlage 1 zum Abreitsvertrag</strong>'
            ),
            $('<p/>').html(
                'Als Bestandteil des Arbeitsvertrags gelten im Hinblick auf Urheber- und sonstige Schutzrechte die nachfolgenden Bestimmungen.'
            ),
            $('<p/>').append(
                '<strong>1. <u>Übertragung von Urheber- und sonstigen Schutzrechten</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '1.1. Der Mitarbeiter überträgt hiermit sämtliche Marken- und sonstigen Kennzeichenrechte, urheberrechtliche Nutzungsrechte, Geschmacksmusterrechte, verwandte Schutzrechte im Sinne des Urheberrechts (einschließlich aller Entwicklungsstufen), Patentrechte und sonstige Immaterialgüterrechte weltweit, ("Übertragene Schutzrechte") an Arbeitsergebnissen (wie nachstehend definiert) zeitlich, räumlich und inhaltlich unbeschränkt ausschließlich auf die Gesellschaft.'
                    ),
                    $('<p/>').html(''),
                    $('<ul/>').append(
                        $('<li/>').append(
                            $('<div/>').html(
                                '1.1.1. "Arbeitsergebnisse" im Sinne dieser Vereinbarung sind alle Werke im Sinne des § 2 UrhG (einschließlich Computerprogrammen), Erfindungen, Ideen, Materialien und Technologien jeder Art, die'
                            )
                        ),
                        $('<li/>').append(
                            $('<div/>').html(
                                '1.1.2. während oder außerhalb der Arbeitszeit unter Verwendung von Material oder Arbeitszeit, die von der Gesellschaft zur Verfügung gestellt wurden, oder aufgrund bei der Gesellschaft erworbenen betrieblichen Erfahrungswissens von dem Mitarbeiter entwickelt oder erworben wurden, oder'
                            )
                        ),
                        $('<li/>').append(
                            $('<div/>').html(
                                '1.1.3. im Zusammenhang mit den geschäftlichen Aktivitäten für die Gesellschaft von dem Mitarbeiter entwickelt oder erworben wurden, oder'
                            )
                        ),
                        $('<li/>').append(
                            $('<div/>').html(
                                '1.1.4. mit der vertraglichen Tätigkeit des Mitarbeiters während der Laufzeit des Arbeitsvertrags zusammenhängen, oder'
                            )
                        ),
                        $('<li/>').append(
                            $('<div/>').html(
                                '1.1.5. vor Aufnahme oder nach Beendigung der Tätigkeit für die Gesellschaft vom Mitarbeiter entwickelt oder erworben wurden, sofern eine oder mehrere der unter Ziffer 1.2.1 bis 1.2.3 genannten Voraussetzungen zutreffen.'
                            )
                        )
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '1.2. Sämtliche Übertragenen Schutzrechte sind der Gesellschaft spätestens zum Zeitpunkt ihrer Entstehung als ausschließliche Rechte auch über den Zeitpunkt der Beendigung des Anstellungsverhältnisses hinaus eingeräumt bzw. übertragen. '
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '1.3. Die Übertragung umfasst die Befugnis der Gesellschaft im In- und Ausland, (i) die Arbeitsergebnisse zu bearbeiten und zu ändern und davon abgeleitete Werke zu erstellen, und (ii) in körperlicher und unkörperlicher Form, entgeltlich oder unentgeltlich, zu nutzen, öffentlich wiederzugeben, zu vervielfältigen, zu verbreiten, in digitaler oder analoger Form auf Bild-, Daten- und Tonträger aller Art aufzunehmen und diese ihrerseits zu vervielfältigen und zu verbreiten und in jeder Art zu verwerten.'
                    ),
                    $('<p/>').html('')
                )
            ),
            addPrintFooter(4,8)
        ),

        // Page 8
        $('<div class="offerClause"/>').append(
            addSpaces(8),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '1.4. Die Übertragung umfasst insbesondere auch die Befugnis der Gesellschaft, das Werk interaktiv auf elektronischem Weg (z.B. CD-ROM oder andere Datenträger, Internet, proprietäre Online-Dienste) auf allen derzeit bekannten Übertragungswegen (z.B. Kabel, Satellit, Funkübertragungssysteme, einschließlich WAP, GPRS, HSCSD (HSMD) und UMTS/IMT 2000) nutzbar zu machen.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '1.5. Die Übertragenen Schutzrechte können von der Gesellschaft nach freiem Ermessen ganz oder teilweise auf Dritte unter Übertragung der entsprechenden Nutzungsrechte im In- und Ausland weiter übertragen werden bzw. als ausschließliche oder einfache Nutzungsrechte eingeräumt oder zur Auswertung überlassen werden, ohne dass es einer Zustimmung des Mitarbeiters bedarf.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '1.6. Die Einräumung der Übertragenen Schutzrechte erstreckt sich insbesondere auf folgende Nutzungsrechte:'
                    ),
                    $('<p/>').html(''),
                    $('<ul/>').append(
                        $('<li/>').append(
                            $('<div/>').html(
                                'Vervielfältigungsrecht gem.  § 16 UrhG'
                            )
                        ),
                        $('<li/>').append(
                            $('<div/>').html(
                                'Verbreitungsrecht gem.  § 17 UrhG'
                            )
                        ),
                        $('<li/>').append(
                            $('<div/>').html(
                                'Ausstellungsrecht gem.  § 18 UrhG'
                            )
                        ),
                        $('<li/>').append(
                            $('<div/>').html(
                                'Vortrags-, Aufführungs- und Vorführungsrecht gem.  § 19 UrhG'
                            )
                        ),
                        $('<li/>').append(
                            $('<div/>').html(
                                'Recht zur Nutzung des Werkes in digitaler Form, insbesondere durch online-Wiedergabe und im Zusammenhang mit offenen Netzwerken (Internet)'
                            )
                        ),
                        $('<li/>').append(
                            $('<div/>').html(
                                'Senderecht gem.  §20 UrhG'
                            )
                        ),
                        $('<li/>').append(
                            $('<div/>').html(
                                'Recht der Wiedergabe durch Bild- und Tonträger gem.  § 21 UrhG'
                            )
                        ),
                        $('<li/>').append(
                            $('<div/>').html(
                                'Recht der Wiedergabe von Funksendungen gem.  § 22 UrhG'
                            )
                        ),
                        $('<li/>').append(
                            $('<div/>').html(
                                'Recht zur Bearbeitung und Umgestaltung gem.  § 23 UrhG'
                            )
                        ),
                        $('<li/>').append(
                            $('<div/>').html(
                                'Recht zur Verfilmung und Wiederverfilmung gem.  §§ 88, 94, 95 UrhG'
                            ),
                            addSpaces(1)
                        )
                    )
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '1.7. Der Mitarbeiter und die Gesellschaft sind sich bewusst, dass einzelne der von der Einräumung der Übertragenen Schutzrechte umfassten Nutzungsarten in ihrer zukünftigen wirtschaftlichen Bedeutung möglicherweise noch nicht vollständig eingeschätzt werden können.'
                    ),
                    $('<p/>').html(''),
                    $('<div/>').html(
                        'Da die Gesellschaft darauf angewiesen ist, die Übertragenen Schutzrechte in Zukunft auch in allen Nutzungsarten, die heute technisch noch unbekannt sein mögen, auszuwerten, erklären sich der Mitarbeiter und die Gesellschaft ausdrücklich damit einverstanden, dass die Gesellschaft durch den Mitarbeiter Nutzungsrechte nach Maßgabe dieser Vereinbarung auch an solchen heute technisch noch unbekannten Nutzungsarten eingeräumt erhält.'
                    ),
                    $('<p/>').html('')
                )
            ),
            addPrintFooter(6,8)
        ),

        // Page 9
        $('<div class="offerClause"/>').append(
            addSpaces(8),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '1.8. Der Mitarbeiter verzichtet auf alle ihm sonstigen etwa als Urheber oder sonstigen Schutzrechtsinhaber zustehenden Rechte an den Arbeitsergebnissen, insbesondere auf das Recht zur Bearbeitung und Zugänglichmachung des Werkes. Der Mitarbeiter ist im Rahmen seines Bestimmungsrechts gemäß § 13 S 2 UrhG damit einverstanden, dass eine Benennung und Bezeichnung des Mitarbeiters als Urheber im Rahmen der Verwertung der Übertragenen Schutzrechte nicht erfolgt.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '1.9. Die Urheberpersönlichkeitsrechte des Mitarbeiters an seinen Werken bleiben unberührt, insbesondere das Recht, Entstellung, andere Beeinträchtigungen oder Nutzung zu verbieten, die geeignet sind, seine berechtigten geistigen oder persönlichen Interessen an den Werken zu gefährden.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '1.10. Eine Verpflichtung der Gesellschaft zur Anmeldung oder Verwertung der Übertragenen Schutzrechte besteht nicht.  Das dem Mitarbeiter nach § 41 des Urheberrechtsgesetzes eventuell zustehende Rückrufsrecht wegen Nichtausübung der jeweils eingeräumten bzw. übertragenen Nutzungsrechte ist für die Dauer von fünf Jahren ab deren Einräumung bzw. Übertragung ausgeschlossen.  Ein Rückruf kann erst erklärt werden, nachdem (i) der Mitarbeiter der Gesellschaft unter Setzung einer Nachfrist von mindestens zwei Jahren zu im Einzelnen bezeichneten Nutzungen aufgefordert hat und (ii) diese Nachfrist verstrichen ist, ohne dass die Gesellschaft dieser Aufforderung nachgekommen ist. Dies gilt nicht, wenn die Nichtausübung oder die unzureichende Ausübung überwiegend auf Umständen beruhen, deren Behebung dem Mitarbeiter zuzumuten ist.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '1.11. Der Gesellschaft verbleibt auch im Fall des Rückrufs stets ein einfaches Nutzungsrecht mit dem gleichen Umfang wie das der Gesellschaft nach dieser Vereinbarung gewährte ausschließliche Nutzungsrecht.  Der Mitarbeiter darf nach erfolgtem Rückruf sein Werk nur verwerten, wenn und soweit dies den berechtigten Interessen der Gesellschaft nicht abträglich ist.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '1.12. Der Mitarbeiter verpflichtet sich unwiderruflich, unverzüglich alle für die Übertragung oder Einräumung der Übertragenen Schutzrechte erforderlichen Handlungen vorzunehmen und Erklärungen abzugeben.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '1.13. Die Einräumung und Nutzung der Übertragenen Schutzrechte ist mit der Vergütung nach dem Arbeitsvertrag vollständig abgegolten und zwar auch für die Zeit nach Beendigung des Anstellungsverhältnisses.'
                    ),
                    $('<p/>').html('')
                )
            ),
            addPrintFooter(6,8)
        ),

        // Page 10
        $('<div class="offerClause"/>').append(
            addSpaces(8),
            $('<p/>').append(
                '<strong>2. <u>Diensterfindungen und Verbesserungsvorschläge</u></strong>'
            ),
            $('<p/>').append(
                'Für die Behandlung von Diensterfindungen gelten die Vorschriften des Gesetzes über Arbeitnehmererfindungen sowie die hierzu ergangenen Richtlinien.'
            ),
            $('<p/>').append(
                'Ergänzend geltend die jeweiligen Richtlinien der Gesellschaft'
            ),
            $('<p class="text-center"/>').append(
                '<strong>Anlage 2 zum Arbeitsvertrag</strong>'
            ),
            $('<p/>').html(
                'Als Bestandteil des Arbeitsvertrags gelten im Hinblick auf den Datenschutz die nachfolgenden Bestimmun-gen, insoweit diese für die jeweilige auszuübende Position maßgeblich bzw. relevant sind.'
            ),
            $('<p/>').html(
                '<strong>1.<u> Datenschutz als Grundsatz; Vertragsgegenstand</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '1.1. Die Gesellschaft ermächtigt den Mitarbeiter, mit den Kunden zu kommunizieren, um die Aufgaben und Verantwortlichkeiten aus dem Arbeitsvertrag effizient und professionell zu erfüllen, Kundenservice anzubieten, Streitig-keiten beizulegen, und verschafft dem Mitarbeiter Zugang zu personenbezogenen Daten der Kunden, einschließlich Kontaktdaten, sensible Daten und Finanzinformationen. Die Gesellschaft verschafft dem Mitarbeiter auch Zugang zu vertraulichen Informationen der Gesellschaft, um in ihrem Namen die Geschäfte zu führen'
                    ),
                    $('<p/>').html('')
                )
            ),
            addPrintFooter(28,8)
        ),

        // Page 10
        $('<div class="offerClause"/>').append(
            addSpaces(8),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '1.2. Datenschutz ist eines der Grundprinzipien der Gesellschaft. Die Gesellschaft legt großen Wert auf den Datenschutz der Mitarbeiter und bemüht sich um einen Ausgleich zwischen: dem Schutz der vernünftigen Erwartungen des Mitarbeiters auf Einhaltung des Datenschutzes; dem Datenschutz der Kunden; der Durchsetzbarkeit von Richtlinien; und der Vertraulichkeit und Integrität der Daten der Kunden und der Gesellschaft. Daher ist die Benutzung der betrieblichen Telekommunikations¬anlagen und Anwendungs¬informationen, der Instrumente und Systeme, einschließlich, aber nicht beschränkt auf Computer, USB-Sticks und andere Datenträger, Telefone, E-mail, Instant Messaging, Sprachnachrichten, Intranet und Internet („Systeme der Gesellschaft“) durch den Mitarbeiter zur Kommunikation, zum Zugang zu und zur Nutzung oder Veröffentlichung/ Weitergabe von Kundendaten oder vertraulichen Informationen der Gesellschaft von der Einhaltung der folgenden Vorschriften abhängig: dem Arbeitsvertrag, einschließlich seiner Anlagen, und diesem Datenschutzvertrag, insbesondere der Datenschutzverpflichtungen und der Kontroll-rechte (zusammen die „Richtlinien“). Die Richtlinien: (i) legen fest, wann die Kommunikation, der Zugang zu, die Benutzung und Veröffentlichung/Weitergabe von Daten der Kunden oder der Gesellschaft ordnungsgemäß bzw. nicht ordnungsgemäß ist und wann ein Verstoß gegen die Richtlinien der Gesellschaft vorliegt; (ii) stellen sicher, dass der Mitarbeiter die Daten der Kunden oder der Gesellschaft nicht in einer Weise kommuniziert oder den Zugang zu ihnen verschafft, sie benutzt oder veröffentlicht/ weitergibt, wodurch eine zivil- oder strafrechtliche Haftung der Gesellschaft ausgelöst oder die Rechte der Kunden verletzen werden können; (iii) schützen die Daten von Kunden, Mitarbeitern, Vertragspartnern und der Gesellschaft und verhindern die unsachgemäße Veröffent-lichung/Weitergabe solcher Daten; und (iv) schützen die Gesellschaft vor unachtsamer, unsachgemäßer und unprofessioneller Ver-öffentlichung/ Weitergabe und Kommunikation.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '1.3. Folglich ist Gegenstand dieses Datenschutz-vertrages die Nutzung von Systemen der Gesellschaft durch den Mitarbeiter zur Kommunika¬tion, zum Zugang zu und zur Benutzung oder Veröffentlichung/Weitergabe von Kundendaten oder vertraulichen Informationen der Gesellschaft.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<p/>').append(
                '<strong>2. <u>Benutzung von Systemen der Gesellschaft</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '2.1. Die Systeme der Gesellschaft sollen nur für die geschäftlichen Zwecke der Gesellschaft genutzt werden, d.h. zur Kommunikation und Information von Angestellten und des Managements der Gesellschaft, der Mutter- sowie Schwester- und Tochtergesellschaften, als auch zur Kommunika¬tion mit Kunden und Geschäfts¬partnern der Gesellschaft.'
                    ),
                    $('<p/>').html('')
                )
            ),
            addPrintFooter(5,8)
        ),

        // Page 11
        $('<div class="offerClause"/>').append(
            addSpaces(8),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '2.2. Die private Nutzung der Systeme der Gesellschaft ist verboten. '
                    ),
                    $('<p/>').html(''),
                    $('<div/>').html(
                        'Verboten ist jede rechtswidrige Benutzung der Systeme der Gesellschaft, jede das Ansehen oder die Geschäftsinteressen der Gesellschaft, ihrer Mutter-, Schwester- oder Tochter¬gesellschaften störende, verleum-derische, beleidigende, verletzende Benutzung, jede unachtsame, unberechtigte, unsach¬gemäße Benutzung gegen¬über einem anderen und jede Benutzung, die pornographisch oder rassistisch ist, die extreme rechts- oder linksradikale Sichtweisen vermittelt oder die Gewalt oder andere strafbare Handlungen befürwortet.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<p/>').append(
                '<strong>3. <u>Eigentum an den Systemen der Gesellschaft und Datenerfassung</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '3.1. Alle Systeme der Gesellschaft und alle in diese eingegebenen oder in diesen gespeicherten Daten, einschließlich, aber nicht beschränkt auf  E-Mails, Sprachnachrichten, Web-Formulare im Internet, Korrespondenz und Computerdateien sind Eigentum der Gesellschaft.'
                    ),
                    $('<p/>').html(''),
                    $('<div/>').html(
                        'Obwohl E-Mail, Sprachnachrichten, Internet und andere Systeme der Gesellschaft passwort¬geschützt sein können, wird dadurch nicht der Datenschutz sicher gestellt oder die Überprüfung und Überwachung aus legitimen geschäftlichen Gründen gemäß dieses Datenschutzvertrages ausgeschlossen.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '3.2. Die Gesellschaft zeichnet jeden Zugang zu und jede Benutzung von Systemen der Gesellschaft auf. Die Gesellschaft führt insbesondere Posteingangs- und Postausgangsbücher, wobei sie insbesondere die folgenden Informationen aufzeichnet: Absenderadresse, Empfänger¬adresse, E-Mail-ID, Betreff, Datum und Zeit.'
                    ),
                    $('<p/>').html(''),
                    $('<div/>').html(
                        'Die aufgezeichneten Daten werden von der Gesellschaft grundsätzlich nicht für die folgenden Zwecke genutzt, sofern weiter unten nichts Abweichendes vereinbart wird: Bewertung der Mitarbeiter, Effizienz- und Verhaltenskontrolle der Mitarbeiter und Leistungsüberwachung der Mitarbeiter.'
                    ),
                    $('<p/>').html('')
                )
            ),
            addPrintFooter(16,8)
        ),

        // Page 11
        $('<div class="offerClause"/>').append(
            addSpaces(8),
            $('<p/>').append(
                '<strong>4. <u>Überprüfung und Überwachung für bestimmte Zwecke</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '4.1. Die Gesellschaft behält sich das Recht vor, E-Mails, Sprachnachrichten, Computerdateien, andere Daten auf den Systemen der Gesellschaft, die Nutzung des Internets (Name der Webseiten, Anzahl der Zugriffe, hochgeladene und eingegebene Texte und Inhalte) und alle anderen aufgezeichneten Daten zu den folgenden legitimen geschäftlichen Zwecken zu überprüfen bzw. durchzusehen: Abruf von Daten während der Abwesenheit des Mitarbeiters, Abrechnung betreffend die Benutzung von Systemen der Gesellschaft, sowie die Sicherung von Daten und die Sicherstellung des ordnungsgemäßen Funktionierens der Systeme der Gesellschaft, einschließlich der Sicherstellung der Verfügbarkeit, der betrieblichen Funktionsweise und der Durchführung der Systeme der Gesellschaft, des Lastausgleichs und der Maximierung der Systemleistung, der Erkennung und Berichtigung von technischen Fehlern.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '4.2. Die Gesellschaft darf stichprobenartig die Kommunikation der Mitarbeiter, ihren Zugang zu, Benutzung und Veröffentlichung/ Weitergabe von Kundendaten über-wachen, um die Qualität der gegenüber den Kunden zu erbringenden Dienstleistungen zu kontrollieren und den Schutz der Kundendaten sicherzustellen.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '4.3. Zudem behält sich die Gesellschaft das Recht vor, die Kommunikation der Mitarbeiter, den Zugang zu, die Benutzung und Veröffentlichung/ Weitergabe von Kundendaten und vertraulichen Informationen der Gesellschaft zu überwachen, (i) um Straftaten oder Ordnungswidrigkeiten aufzuklären, wenn es einen dokumentierten Verdacht gibt, dass der Mitarbeiter während des Anstellungsverhältnisses eine Straftat oder Ordnungswidrigkeiten begangen hat, oder (ii) wenn es einen Verdacht des Missbrauchs oder einen Missbrauch der Systeme der Gesellschaft (z.B. eine Nutzung, die durch diesen Datenschutzvertrag verboten ist), einen Verdacht des Verstoßes oder einen Verstoß gegen die Richtlinien gibt.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '4.4. In einem der Fälle gemäß der Absätze 1 bis 3 dieses Abschnitts ist die Gesellschaft berechtigt, die Kommunikation des Mitarbeiters durch bestimmte elektronische Systeme zu überwachen, um Daten, einschließlich der Kommunikation, dem Zugang zu, der Benutzung und der Veröffentlichung/Weitergabe von Informationen zu überwachen. Die Gesellschaft ist insbesondere berechtigt, auf die aus der Überwachung stammenden Daten zuzugreifen, sie zu erheben, zu überprüfen und zu untersuchen, sie zu veröffentlichen/ weiterzugeben und zu speichern.'
                    ),
                    $('<p/>').html('')
                )
            ),
            addPrintFooter(10,8)
        ),

        // Page 12
        $('<div class="offerClause"/>').append(
            addSpaces(8),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '4.5. Personenbezogene Daten, die für die oben genannten Zwecke aufgezeichnet wurden, dürfen nur für diese Zwecke genutzt werden. § 31 des Deutschen Bundesdatenschutzgesetzes ist entsprechend anwendbar.'
                    ),
                    $('<p/>').html(''),
                    $('<div/>').html(
                        'Die Gesellschaft darf die personenbezogenen Daten nicht benutzen, wenn der Nutzung ein überwiegendes berechtigtes Interesse des Mitarbeiters entgegensteht. Die Gesellschaft darf die personenbezogenen Daten nur benutzen, wenn die Maßnahmen und Systeme sowie deren Umfang zu dem festgelegten Zweck, zu dem die Daten aufgezeichnet wurden, und zu den Umständen des Einzelfalles nicht außer Verhältnis stehen.'
                    ),
                    $('<p/>').html(''),
                    $('<div/>').html(
                        'Zudem beschränkt die Gesellschaft die Überwachung der Handlungen des Mitarbeiters auf das Maß, das sie für erforderlich hält. Die Gesellschaft wird den Mitarbeiter unter keinen Um-ständen regelmäßig, zu nicht in den Richtlinien oder diesem Datenschutzvertrag festgelegten Zwecken überwachen.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<p/>').html(
                '<strong>5. <u>Überwachung für die Schulung und das Coaching von Mitarbeitern</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '5.1. Nach vorheriger Vereinbarung mit dem Mitarbeiter darf die Gesellschaft für einen begrenzten Zeitraum die Kommunikation des Mitarbeiters, seinen Zugang zu, seine Benutzung und Veröffentlichung/Weitergabe von Daten für die Schulung und das Coaching von Mitarbeitern überwachen.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '5.2. Die Überwachung darf insbesondere Folgendes umfassen: die Aufzeichnung von Datenzugriffen, die den Zugang zu den Systemen der Gesellschaft und damit zusammenhängende Handlungen dokumentieren, wenn auf ein System der Gesellschaft zugegriffen und dieses benutzt wird; die Erhebung und Durchsicht der Kommunikationen wie z.B. E-Mail (einschließlich die von externen E-Mail Accounts ausgehenden E-Mails, wenn der Mitarbeiter durch die Benutzung eines Systems der Gesellschaft auf seinen externen E-Mail Account zugreift), Internet Chat Unterhaltungen, sowie Telefongespräche; und die Überwachung des Computers des Mitarbeiters, um den ordnungs-gemäßen Gebrauch der Systeme der Gesellschaft sicher zu stellen.'
                    ),
                    $('<p/>').html(''),
                    $('<div/>').html(
                        'Um den Mitarbeiter mit den Systemen der Gesellschaft vertraut zu machen, sind nachfolgend die Namen einiger Systeme, die die Gesellschaft zurzeit für die vorbenannten Zwecke nutzt, genannt: Blue Pumpkin; Skippy, Shade; Benchmark Portal; Kana; Live Person; Witness, Vontu, und Web Trends. Die Systeme können jedoch von Zeit zu Zeit und ohne vorherige Ankündigung durch die Gesellschaft geändert werden.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '5.3. Die Gesellschaft soll die Überwachung der Mitarbeitertätigkeiten auf das Maß beschränken, das ihrem Erachten nach zur Erreichung der festgelegten Schulungs- und Coaching-Zwecke erforderlich ist.'
                    ),
                    $('<p/>').html('')
                )
            ),
            addPrintFooter(2,8)
        ),

        // Page 13
        $('<div class="offerClause"/>').append(
            addSpaces(8),
            $('<p/>').html(
                '<strong>6. <u>Verstöße gegen Manipulationen</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '6.1. Der Verstoß gegen einen Teil dieses Datenschutzvertrages durch den Mitarbeiter kann zu Disziplinarmaßnahmen führen, bis hin zu und einschließlich einer außerordentlichen Kündigung.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '6.2. Manipulationen oder der Versuch des Mitarbeiters, die elektronische Überprüfung oder die Überwachungssysteme zu deaktivieren oder zu manipulieren, hat Disziplinar¬maßnahmen zur Folge, bis hin zu und einschließlich einer außerordentlichen Kündigung.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<p/>').html(
                '<strong>7. <u>Zugang zu Überwachungssystemen und Löschung von Daten</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '7.1. Vorgesetzte, Führungskräfte und andere Mitarbeiter, die Zugang zu den Überwachungs¬systemen haben, dürfen diese ausschließlich für die in diesem Dokument festgelegten Zwecke nutzen. Der Zugang zu den Überwachungs¬systemen ist auf eine Need-to-Know-Basis beschränkt.'
                    ),
                    $('<p/>').html(''),
                    $('<div/>').html(
                        'Wenn der Mitarbeiter den Eindruck hat, dass ein Vorgesetzter, eine Führungskraft oder ein anderer Mitarbeiter der Gesellschaft eines der Überwachungssysteme missbräuchlich nutzt, sollte sich der Mitarbeiter an den Verantwortlichen der Personalabteilung oder den Ansprechpartner für Datenschutz wenden. Für den Fall, dass personenbezogene Daten des Mitarbeiters erhoben werden, kann der Mitarbeiter gemäß dem anwendbaren Recht von dem Verantwortlichen der Personal¬abteilung Auskunft und Berichtigung dieser Daten verlangen.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '7.2. Die gespeicherten personenbezogenen Daten werden gemäß dem anwendbaren Recht gelöscht, wenn sie für die Gesellschaft nicht mehr erforderlich sind.'
                    ),
                    $('<p/>').html('')
                )
            ),
            $('<p/>').html(
                '<strong>8. <u>Laufzeit und Beendigung</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '8.1. Dieser Datenschutzvertrag beginnt zur gleichen Zeit wie der Arbeitsvertrag. Er endet automatisch und ohne vorherige Ankündigung mit der Beendigung des Arbeitsvertrages.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '8.2. Das Recht zur ordentlichen Kündigung dieses Datenschutzvertrages ist ausgeschlossen.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '8.3. Das Recht zur außerordentlichen Kündigung bleibt unberührt.'
                    ),
                    $('<p/>').html('')
                )
            ),
            addPrintFooter(10,8)
        ),

        // Page 14
        $('<div class="offerClause"/>').append(
            addSpaces(8),
            $('<p/>').html(
                '<strong><u>Schlussbestimmungen</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '9.1. Mündliche Nebenabreden zu diesem Datenschutz¬vertrag bestehen nicht. In Bezug auf seinen Gegenstand umfasst dieser Datenschutz¬vertrag sämtliche Vereinbarungen zwischen den Parteien und hebt alle vorherigen schriftlichen und mündlichen Übereinkünfte und Vereinbarungen der Parteien auf.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '9.2. Änderungen dieses Datenschutzvertrages bedürfen der Schriftform.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '9.3. Sollte eine Bestimmung dieses Daten-schutzvertrages oder seiner Änderungen bzw. Anpassungen unwirksam sein oder werden, so wird dadurch die Wirksamkeit des Vertrages im Übrigen nicht berührt.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '9.4. Dieser Datenschutzvertrag sowie die Auslegung desselben unterliegen deutschem Recht.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '9.5. Dieser Datenschutzvertrag ist sowohl auf Deutsch wie auch auf Englisch formuliert. Bei Diskrepanz hat die deutsche Version Vorrang.'
                    ),
                    $('<p/>').html('')
                )
            ),
            addPrintFooter(38,8),
            true && resetFooterSpaces()
        )
    );

    // English Content
    $("#markup2").html("").append(
        // Page 1
        $('<div class="offerClause2"/>').append(
            addSpaces(45),
            $('<p class="center"/>').html(
                $('<strong/>').append(
                    (employee.Employee_Group.indexOf('T') >= 0) && $('<mark/>').append(
                        'FIXED-TERM'
                    ),
                    (employee.Employee_Group.indexOf('T') >= 0) && '&nbsp;',
                    'EMPLOYMENT CONTRACT'
                )
            ),
            $('<p class="center"/>').html(
                'entered into by and between'
            ),
            $('<p class="center"/>').append(
                $('<span class="dynamic"/>').html(employee.EntityName ? '<strong>' + employee.EntityName + '</strong><br>' : ''),
                $('<span class="dynamic"/>').html(employee.EntityAddress ? employee.EntityAddress : '')
            ),
            $('<p class="center"/>').html(
                '– hereinafter referred to as the “Company” –'
            ),
            $('<p class="center"/>').html(
                'and'
            ),
            $('<p class="center"/>').append(
                $('<span class="dynamic"/>').html(employee.Full_Name),
                '<br>',
                $('<span class="dynamic"/>').html(employee.Address1),
                '<br>',
                (employee.Address2.length > 0) && $('<span class="dynamic"/>').html(employee.Address2).append('<br>'),
                (employee.Address2.length > 0) && incrementFooterSpaces(2),
                $('<span class="dynamic"/>').html(employee.Zip),
                ' ',
                $('<span class="dynamic"/>').html(employee.City)
            ),
            $('<p class="center"/>').html(
                '– hereinafter referred to as “Employee” –'
            ),
            $('<p/>').html(
                '<i>For reasons of language simplicity the term “Employee” is used in this agreement for female as well as for male employees.</i>'
            ),
            $('<p/>').html(
                '<strong>1. <u>Starting Date and Responsibilities</u></strong>'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    $('<div/>').html(
                        '1.1. The Employee shall be employed with the Company as of  <span class="dynamic">' + employee.Event_Start_Date + '</span>, as <span class="dynamic">' + employee.Business_Title + '</span> <span class="dynamic">' + (employee.WC_Approval_Required == 'Yes' ? 'subject to prior consent from the works council and the completion of a positive Background Check.' : 'subject to the completion of a positive Background Check.') + '</span> He shall report to a supervisor/manager designated by the Company from time to time.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    (employee.Continuous_Service == 'Yes') &&
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Continuous Service"/>').append(
                        '1.2. This employment contract follows on from and replaces the employment contract concluded with ',
                        $('<mark/>').append(
                            employee.Previous_Employment
                        ),
                        ' on ',
                        $('<mark/>').append(
                            employee.Previous_End_Date
                        ),
                        '. Entitlements and claims arising from global PayPal Inc policies and regulations will remain unchanged. The previous period of employment as specified in sentence 1 is credited as tenure. The effective entry date to be applied for seniority purposes is ',
                        $('<mark/>').append(
                            employee.Previous_Start_Date
                        )
                    ),
                    (employee.Continuous_Service == 'Yes') &&
                    incrementFooterSpaces(1),
                    (employee.Continuous_Service != 'Yes') &&
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Continuous Service"/>').html(
                        '1.2. Not applicable to employee.'
                    ),
                    $('<p/>').html('')
                ),
                $('<li/>').append(
                    (employee.Credit_Continuous_Service == 'Yes') &&
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Continuous Service Credit"/>').append(
                        '1.3. Provided that the employment relationship is not terminated during the probationary period, the previous period of employment with the PayPal Inc. Group from ',
                        $('<mark/>').append(
                            employee.Previous_Start_Date
                        ),
                        ' to ',
                        $('<mark/>').append(
                            employee.Previous_End_Date
                        ),
                        ' is credited towards the Employee’s seniority.'
                    ),
                    (employee.Credit_Continuous_Service != 'Yes') &&
                    $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Continuous Service Credit"/>').html(
                        '1.3. Not applicable to employee.'
                    ),
                    $('<p/>').html(''),
                    (employee.Credit_Continuous_Service != 'Yes') &&incrementFooterSpaces(2)
                ),
                $('<li/>').append(
                    $('<div/>').html(
                        '1.4. The termination of the employment contract is excluded prior to the commencement of the employment relationship.'
                    ),
                    $('<p/>').html('')
                )
            ),
            addPrintFooter(footerSpaces,5),
            true && resetFooterSpaces()
        )
    );

    $("#markup5").html("").append(
        // OfferClause 5
        $('<div class="offerClause5">').append(
            $('<p/>').append(footer)
        )
        // end append
    );

}

$(function() {  
    // render template
    fnView();

    // completed letter
    if (!$("input.calendar_button").length) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

        let arrParts = [
            [1, 'hidden_pg']
        ];
        
        let arrParts2 = [
            [1, 'hidden_pg2']
        ];

        showCompletedOfferLetter('incomplete', 'complete', arrParts);
        showCompletedOfferLetter('incomplete2', 'complete2', arrParts2);
    }
});
