// Germany Employment Agreement
function fnView() {

    var footer = (employee.EntityName === "PayPal SE") ? 'PayPal SE, Whittaker House, Whittaker Avenue, Richmond Upon Thames, Surrey, TW9, 1EH, United Kingdom; Company Registration Number SE000007' : 'PayPal Deutschland GmbH, Gesellschaft Richard Swales, HRB Nr.: 17106 P, Amtsgericht Potsdam, Sitz der Gesellschaft: Kleinmach, Company Registration Number SE000007';

    var addSpaces = function(space) {
        var spaces = '';
        for (i = 0; i < space; i++) {
            spaces += '<p class="hide"><br></p>';
        }
        return spaces;
    }

    var addPrintFooter = function(spaceBefore, spaceAfter) {
        let spacedFooter = '';
        spacedFooter += addSpaces(spaceBefore);
        spacedFooter += '<p class="hide fb-size9">' + footer + '</p>';
        spacedFooter += addSpaces(spaceAfter);
        return spacedFooter;
    }

    // German Content
    $("#markup").html("").append(
        // OfferClause 1
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
                (employee.Address2.length > 0) && $('<span class="dynamic"/>').html(employee.Address2).append('<br>'),
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
                $('<ol/>').append(
                    // 1. Vertragsbeginn und Aufgabengebiet
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Vertragsbeginn und Aufgabengebiet</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '1.1. Der Mitarbeiter wird ab dem <span class="dynamic">' + employee.German_Start_Date + '</span>, <span class="dynamic">' + (employee.WC_Approval_Required == 'Yes' ? 'vorbehaltlich der Zustimmung des Betriebsrates sowie eines positiv abgeschlossenen Background Check' : 'der Voraussetzung eines positiv abgeschlossenen Background Check') + '</span>, als <span class="dynamic">' + employee.German_Business_Title + '</span>. Er berichtet an den von der Gesellschaft jeweils benannten Vorgesetzten.'
                                ),
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
                                (employee.Continuous_Service != 'Yes') &&
                                $('<div class="marked" data-toggle="popover" data-placement="top" data-content="continuous service"/>').append(
                                    '1.2. Gilt nicht für mitarbeiter.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                (employee.Continuous_Service == 'Yes') &&
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
                                (employee.Continuous_Service != 'Yes') &&
                                $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Continuous Service Credit"/>').append(
                                    '1.3. Gilt nicht für Mitarbeiter.'
                                ),
                                $('<p/>').html('')
                            ),
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
                        )
                    ),
                    // 2. Arbeitszeit und Arbeitsort
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Arbeitszeit und Arbeitsort</u></strong>'
                        ),
                        $('<p/>').html(''),
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
                        )
                    ),
                    // 3. Vergütung
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Vergütung</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '3.1. Der Mitarbeiter erhält ein jährliches Bruttogehalt in Höhe von <span class="dynamic">' + employee.Salary_Amount + '</span> <span class="dynamic">' + employee.Salary_Currency + '</span>, zahlbar in 12 gleichen monatlichen Beträgen nach gesetzlichen Abzügen jeweils zum Monatsende (“<strong>Grundgehalt</strong>”).'
                                ),
                                $('<p/>').html('')
                            ),
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
                        )
                    ),
                    // 4. Umzugskosten
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Umzugskosten</u></strong>'
                        ),
                        $('<p/>').html(''),
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
                                (employee.Relocation != 'Y') &&
                                $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Employee Relocating"/>').append(
                                    'Gilt nicht für Mitarbeiter.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 5. Sign On Bonus
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Sign On Bonus</u></strong>'
                        ),
                        $('<p/>').html(''),
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
                                )
                            )
                        )
                    ),
                    $('<p/>').html(''),
                    // 6. Arbeitsverhinderung/Krankheit
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Arbeitsverhinderung/Krankheit</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '6.1. Ist der Mitarbeiter durch Krankheit oder sonstige unvorhergesehene Ereignisse an der Erbringung seiner Arbeitsleistung gehindert, so hat er die Gründe und die voraussichtliche Dauer der Verhinderung am ersten Abwesenheitstag vor Dienstbeginn seinem Vorgesetzten auf dem von der Gesellschaft separat benannten Weg persönlich mitzu-teilen.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '6.2. Im Falle einer länger als zwei Kalendertage dauernden krankheitsbedingten Arbeitsunfähigkeit ist der Mitarbeiter verpflichtet, der Gesellschaft eine ärztliche Bescheinigung über die Arbeitsunfähigkeit sowie deren voraussichtliche Dauer spätestens am 3. Tag des krankheitsbedingten Fehlens vorzulegen. Dauert die Arbeitsunfähigkeit länger als in der ärztlichen Bescheinigung angegeben, ist der Mitarbeiter verpflichtet, der Gesellschaft spätestens am darauf folgenden Arbeitstag eine neue ärztliche Bescheinigung vorzulegen, auch sofern ein Entgeltfortzahlungsanspruch nach dem Entgeltfortzahlungsgesetz nicht mehr besteht. Die Gesellschaft ist berechtigt, sowohl die Erstbescheinigung als auch die Fortsetzungsbescheinigung zu einem früheren Zeitpunkt zu verlangen. § 616 BGB findet keine Anwendung.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '6.3. Der Mitarbeiter ist verpflichtet, der Gesellschaft anzuzeigen, wenn eventuell ein Anspruch des Mitarbeiters gegen einen Dritten auf Leistung von Schadenersatz wegen Verdienstausfall besteht. Er tritt hiermit etwaige Schadensersatzansprüche gegen Dritte aufgrund von Arbeits¬unfähigkeit für diejenigen Zeiträume und in dem Umfang an die Gesellschaft ab, für die ihm Ansprüche gegen die Gesellschaft auf Entgeltfortzahlung zustehen.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 7. Reisekosten/Aufwendungsersatz
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Reisekosten/Aufwendungsersatz</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    'Notwendige und angemessene Reisekosten und sonstige Aufwendungen im Rahmen des Anstellungsverhältnisses werden dem Mitarbeiter gegen Vorlage entsprechender Belege und im Rahmen der jeweils geltenden Richtlinien der Gesellschaft erstattet. Aufwendungen, die von den geltenden Richtlinien der Gesellschaft nicht erfasst sind, werden grundsätzlich nur im Rahmen der steuerlich anerkannten Beträge erstattet.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 8. Urlaub
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Urlaub</u></strong>'
                        ),
                        $('<p/>').html(''),
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
                            ),
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
                        )
                    ),
                    // 9. Wettbewerbsverbot und Nebentätigkeiten
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Wettbewerbsverbot und Nebentätigkeiten</u></strong>'
                        ),
                        $('<p/>').html(''),
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
                            ),
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
                        )
                    ),
                    // 10. Vertraulichkeits- und Verschwiegenheitspflicht
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Vertraulichkeits- und Verschwiegenheitspflicht</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    'Der Mitarbeiter verpflichtet sich, die ihm im Rahmen seiner Tätigkeit zur Kenntnis gelangenden vertraulichen betrieblichen Angelegenheiten, insbesondere Geschäfts- und Betriebs¬geheimnisse, der Gesellschaft und mit dieser verbundener Unternehmen sowie deren Geschäftspartnern, nicht für eigene Zwecke zu verwerten und darüber gegenüber Dritten und nicht berechtigten Mitarbeitern der Gesellschaft Stillschweigen zu bewahren. Diese Geheimhaltungspflicht besteht auch nach Beendigung des Arbeitsverhältnisses weiterhin fort.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 11. Rückgabeverpflichtung
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Rückgabeverpflichtung</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    'Bei Beendigung des Arbeitsverhältnisses bzw. bei Freistellung oder auf Aufforderung der Gesellschaft hat der Mitarbeiter der Gesellschaft unverzüglich und unaufgefordert sämtliche ihm im Zusammenhang mit der Ausführung seiner dienstlichen Aufgaben überlassenen oder von ihm erstellten Gegenstände und Arbeitsmittel, insbesondere Laptop, Mobiltelefon, Unterlagen, Skizzen, Akten, Entwürfe und Kopien, Software, und alle sonstigen elektronisch oder anderweitig gespeicherten vertraulichen Daten (einschließlich Emails) zurückzugeben. Das gleiche gilt für die vom Mitarbeiter im Rahmen dieses Arbeitsverhältnisses ganz oder teilweise erbrachten Arbeitsergebnisse. Die Geltendmachung eines Zurück-behaltungsrechts an den genannten Gegenständen ist ausgeschlossen. Auf Verlangen der Gesellschaft wird der Mitarbeiter die Erfüllung seiner Rückgabeverpflichtungen gemäß dieser Ziffer schriftlich bestätigen. Die Verpflichtungen gemäß Ziffern 10 und 11 gelten auch nach Beendigung des Arbeitsverhältnisses.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 12. Urheber- und sonstige Schutzrechte
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Urheber- und sonstige Schutzrechte</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    'Im Hinblick auf Urheber und sonstige Schutzrechte gelten die Vorschriften der Anlage 1 zu diesem Vertrag.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 13. Vertragsdauer und Kündigung
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Vertragsdauer und Kündigung</u></strong>'
                        ),
                        $('<p/>').html(''),
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
                                $('<p/>').html(''),
                                (employee.ProbationPeriodRequired == 'yes') &&
                                $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Probation Period Required"/>').append(
                                    'Die ersten sechs Monate gelten als Probezeit. Während dieser Zeit kann das Arbeitsverhältnis mit einer Kündigungsfrist von zwei Wochen von beiden Parteien gekündigt werden.'
                                ),
                                $('<p/>').html('')
                            ),
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
                            ),
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
                        )
                    ),
                    // 14. Arbeitsgenehmigung
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Arbeitsgenehmigung</u></strong>'
                        ),
                        $('<p/>').html(''),
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
                                    '14.3. Der Arbeitnehmer muss der Gesellschaft einen entsprechenden Nachweis über die Verlängerung der Arbeitsgenehmigung bzw. des Aufenthaltstitels rechtzeitig vor dessen Ablauf vorlegen.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 15. Datenschutz, Nutzung von Internet und Email
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Datenschutz, Nutzung von Internet und Email</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    'Im Hinblick auf zum Datenschutz sowie die Nutzung von betrieblichen Internet- und Emailsystemen gelten die Vorschriften der Anlage 2 zu diesem Vertrag.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 16. Unternehmensrichtlinien
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Unternehmensrichtlinien</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    'Die Gesellschaft hat Compliance-Richtlinien sowie allgemeine Unternehmensrichtlinien aufgestellt. Der Mitarbeiter erkennt diese Richtlinien als verbindlich an und wird diese einhalten. Die Richtlinien sind im firmeneigenen Intranet veröffentlicht, und der Mitarbeiter ist verpflichtet, sich über die jeweils geltenden Richtlinien zu informieren. Die sich aus der jeweiligen Fassung dieser Richtlinien ergebenden Pflichten zählen zu den arbeitsvertraglichen Pflichten des Mitarbeiters.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 17. Ausschlussfristen
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Ausschlussfristen</u></strong>'
                        ),
                        $('<p/>').html(''),
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
                        )
                    ),
                    // 18. Schlussbestimmungen
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Schlussbestimmungen</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '18.1. Änderungen und Ergänzungen dieses Vertrages bedürfen zu ihrer Wirksamkeit der Schriftform, es sei denn, sie beruhen auf einer ausdrücklichen oder individuellen Vertragsabrede. Auch die Aufhebung dieses Schriftformerfordernisses bedarf der Schriftform. Eine betriebliche Übung ist keine ausdrückliche beziehungsweise individuelle Vertragsabrede. Auch wiederholte Leistungen oder Vergünstigungen ohne ausdrückliche Vertragsabrede begründen keinen Anspruch für die Zukunft.'
                                ),
                                $('<p/>').html('')
                            ),
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
                        )
                    )
                )
            ),
            // Anlage 1 zum Abreitsvertrag
            $('<p class="center"/>').html(
                '<strong>Anlage 1 zum Abreitsvertrag</strong>'
            ),
            $('<p/>').html(
                'Als Bestandteil des Arbeitsvertrags gelten im Hinblick auf Urheber- und sonstige Schutzrechte die nachfolgenden Bestimmungen.'
            ),
            $('<p/>').append(
                $('<ol/>').append(
                    // 1. Übertragung von Urheber- und sonstigen Schutzrechten
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Übertragung von Urheber- und sonstigen Schutzrechten</u></strong>'
                        ),
                        $('<p/>').html(''),
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
                            ),
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
                            ),
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
                        )
                    ),
                    // 2. Diensterfindungen und Verbesserungsvorschläge
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Diensterfindungen und Verbesserungsvorschläge</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<div/>').html(
                            'Für die Behandlung von Diensterfindungen gelten die Vorschriften des Gesetzes über Arbeitnehmererfindungen sowie die hierzu ergangenen Richtlinien.'
                        ),
                        $('<p/>').html(''),
                        $('<div/>').html(
                            'Ergänzend geltend die jeweiligen Richtlinien der Gesellschaft'
                        ),
                        $('<p/>').html('')
                    )
                )
            ),
            // Anlage 2 zum Arbeitsvertrag
            $('<p class="center"/>').html(
                '<strong>Anlage 2 zum Arbeitsvertrag</strong>'
            ),
            $('<p/>').html(
                'Als Bestandteil des Arbeitsvertrags gelten im Hinblick auf den Datenschutz die nachfolgenden Bestimmun-gen, insoweit diese für die jeweilige auszuübende Position maßgeblich bzw. relevant sind.'
            ),
            $('<p/>').append(
                $('<ol/>').append(
                    // 1. Datenschutz als Grundsatz; Vertragsgegenstand 
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Datenschutz als Grundsatz; Vertragsgegenstand</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '1.1. Die Gesellschaft ermächtigt den Mitarbeiter, mit den Kunden zu kommunizieren, um die Aufgaben und Verantwortlichkeiten aus dem Arbeitsvertrag effizient und professionell zu erfüllen, Kundenservice anzubieten, Streitig-keiten beizulegen, und verschafft dem Mitarbeiter Zugang zu personenbezogenen Daten der Kunden, einschließlich Kontaktdaten, sensible Daten und Finanzinformationen. Die Gesellschaft verschafft dem Mitarbeiter auch Zugang zu vertraulichen Informationen der Gesellschaft, um in ihrem Namen die Geschäfte zu führen'
                                ),
                                $('<p/>').html('')
                            ),
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
                        )
                    ),
                    // 2. Benutzung von Systemen der Gesellschaft 
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Benutzung von Systemen der Gesellschaft</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '2.1. Die Systeme der Gesellschaft sollen nur für die geschäftlichen Zwecke der Gesellschaft genutzt werden, d.h. zur Kommunikation und Information von Angestellten und des Managements der Gesellschaft, der Mutter- sowie Schwester- und Tochtergesellschaften, als auch zur Kommunika¬tion mit Kunden und Geschäfts¬partnern der Gesellschaft.'
                                ),
                                $('<p/>').html('')
                            ),
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
                        )
                    ),
                    // 3. Eigentum an den Systemen der Gesellschaft und Datenerfassung 
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Eigentum an den Systemen der Gesellschaft und Datenerfassung</u></strong>'
                        ),
                        $('<p/>').html(''),
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
                        )
                    ),
                    // 4. Überprüfung und Überwachung für bestimmte Zwecke 
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Überprüfung und Überwachung für bestimmte Zwecke</u></strong>'
                        ),
                        $('<p/>').html(''),
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
                            ),
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
                        )
                    ),
                    // 5. Überwachung für die Schulung und das Coaching von Mitarbeitern 
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Überwachung für die Schulung und das Coaching von Mitarbeitern</u></strong>'
                        ),
                        $('<p/>').html(''),
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
                        )
                    ),
                    // 6. Verstöße gegen Manipulationen  
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Verstöße gegen Manipulationen</u></strong>'
                        ),
                        $('<p/>').html(''),
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
                        )
                    ),
                    // 7. Zugang zu Überwachungssystemen und Löschung von Daten 
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Zugang zu Überwachungssystemen und Löschung von Daten</u></strong>'
                        ),
                        $('<p/>').html(''),
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
                        )
                    ),
                    // 8. Laufzeit und Beendigung
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Laufzeit und Beendigung</u></strong>'
                        ),
                        $('<p/>').html(''),
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
                        )
                    ),
                    // 9. Schlussbestimmungen 
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Schlussbestimmungen</u></strong>'
                        ),
                        $('<p/>').html(''),
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
                        )
                    )
                )
            )
        )
        // end append
    );

    // English Content
    $("#markup2").html("").append(
        // OfferClause 1
        $('<div class="offerClause2"/>').append(
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
            $('<p/>').append(
                $('<ol/>').append(
                    // 1. Starting Date and Responsibilities
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Starting Date and Responsibilities</u></strong>'
                        ),
                        $('<p/>').html(''),
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
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '1.4. The termination of the employment contract is excluded prior to the commencement of the employment relationship.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '1.5. Details of the tasks and duties of the Employee will be specified by instructions of the Company or his supervisors/managers. The Company may temporarily or permanently assign other reasonable and equivalent tasks and duties to the Employee if so required for operational or personal reasons or reasons in the conduct of the Employee.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 2. Working Hours and Place of Work 
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Working Hours and Place of Work</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '2.1. The regular weekly working time shall be 40 hours. The working time will be allocated and scheduled in accordance with the operational requirements and/or standard operational working hours of the Company. The Company is entitled to change the allocation of such working time at its reasonable discretion.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '2.2. If so required for operational reasons, the Employee shall be obliged to a reasonable extent and as legally admissible to work overtime (if so required also on weekends and public holidays).'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '2.3. The regular place of work is Marktplatz 1 14532 Europarc Dreilinden. The Company reserves the right to relocate the Employee to another place of work taking the Employee’s interests into account.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '2.4. If so requested by the Company, the Employee will travel domestically and abroad in connection with the performance of his duties hereunder. Business trips must be coordinated with the Employee’s supervisor/manager in the individual case. Travel times outside of the regular working hours are not deemed working time and are not compensated unless otherwise provided for by the Company.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 3. Remuneration
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Remuneration</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '3.1. The Company shall pay to the Employee an annual fixed gross salary of <span class="dynamic">' + employee.Salary_Amount + '</span> <span class="dynamic">' + employee.Salary_Currency + '</span>, payable in twelve equal installments at the end of each calendar month subject to statutory deductions (“<strong>Base Salary</strong>”).'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '3.2. Any overtime work shall be fully compensated by the Base Salary.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '3.3. Any gratifications or special benefits, which are not expressly provided for in this agreement or another written or oral agreement, are discretionary shall not constitute the basis of a legal claim for any future payments. Even repeated payment or grant does not give rise to a claim based on operational practice.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '3.4. Remuneration claims may not be assigned and pledged or otherwise be encumbered. Any overpayments must be repaid. The Company may set off any overpayments against subsequent salary payments. The defense of loss of enrichment (Sec. 818 par. 3 German Civil Code) shall be excluded.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 4. Relocation costs
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Relocation costs</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                (employee.Relocation == 'Y') &&
                                $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Employee Relocating"/>').append(
                                    'The Company will reimburse the Employee for relocation costs the Employee incurs for moving from ',
                                    $('<mark/>').append(
                                        employee.RelocationFrom
                                    ),
                                    ' to ',
                                    $('<mark/>').append(
                                        employee.PayAreaCity
                                    ),
                                    ' (place of work) up to an amount of ',
                                    $('<mark/>').append(
                                        employee.Estimate_Relo_Cost
                                    ),
                                    ' ',
                                    $('<mark/>').append(
                                        employee.Estimated_Relo_Cost_CRNCY_CD
                                    ),
                                    ' gross, payable as a one-time payment with the monthly remuneration after presentation of the confirmation that the Employee has registered at his new place of residence. In case the Employee terminates this employment contract within twelve months after commencement of the employment relationship or if the Company terminates this contract within this time period, provided that the dismissal can rightfully be based on the Employee’s behavior, the Employee has to repay the reimbursement of the relocation costs. Insofar, 1/12th of such reimbursement is deducted for each full month of employment until the termination date. The Company may set-off its claim to the repayment from the Employee’s outstanding remuneration, if any.'
                                ),
                                (employee.Relocation != 'Y') &&
                                $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Employee Relocating"/>').html(
                                    'Not applicable to employee.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 5. Sign On Bonus
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Sign On Bonus</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                (employee.Hire_on_Bonus_Eligible == 'Yes') &&
                                $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Employee Eligible for Hire On Bonus"/>').append(
                                    'The Employee shall receive a Signing Bonus of ',
                                    $('<mark/>').append(
                                        employee.Hire_On_Bonus_Amount
                                    ),
                                    ' ',
                                    $('<mark/>').append(
                                        employee.Hire_On_Bonus_CRNCY_CD
                                    ),
                                    ' which is due and payable with the first monthly payment. In case the Employee terminates this employment contract within twelve months after commencement of the employment relationship or if the Company terminates this contract within this time period, provided that the dismissal can rightfully be based on the Employee’s behavior, the Employee has to make a pro-rata repayment of the Signing Bonus. Insofar, 1/12th of such repayment is deducted for each full month of employment until the termination date. Subject to the applicable law, the Company may set-off its claim to the repayment from the Employee’s outstanding remuneration, if any.'
                                ),
                                (employee.Hire_on_Bonus_Eligible != 'Yes') &&
                                $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Employee Eligible for Hire On Bonus"/>').html(
                                    'Not applicable to employee.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 6. Inability to Work / Sickness
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Inability to Work / Sickness</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '6.1. If the Employee is unable to work due to sickness or other unforeseeable events, he shall inform his supervisor/manager about the reasons and the expected duration of the absence before start of business on his first day of absence, according to the procedure determined by the Company.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '6.2. In the event of inability to work due to sickness for longer than two calendar days, the Employee shall submit to the Company a doctor’s certificate confirming the inability to work and its foreseeable duration at the latest on the following working day. If the inability to work continues longer than stated in the doctor’s certificate, the Employee must submit a new doctor’s certificate at the latest on the following working day. The Company may request that the doctor’s certificate as well as any follow-on certificates are submitted at an earlier point in time. Section 616 of the German Civil Code shall not be applicable.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '6.3. The Employee is under an obligation to inform the Company if the Employee may have a damage claim against a third party relating to a loss of remuneration. The Employee hereby assigns to the Company any claims against third parties in relation to his inability to work for such time periods and in such amount in which he has claims against the Company for continued payment of salary.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 7. Travel Expenses
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Travel Expenses</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    'Any reasonable and necessary business and travel expenses incurred by the Employee in performing his duties hereunder shall be compensated against presentation of proper documentation in compliance with the applicable policies and guidelines of the Company as amended from time to time. Any expenses not within the scope of the policies and guidelines of the Company shall only be reimbursed up to the amounts accepted for tax purposes.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 8. Vacation
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Vacation</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '8.1. The Employee shall be entitled to 28 working days (based on a 5-day working week) of paid vacation per calendar year. The vacation entitlement consists of the statutory vacation term of 20 work days and a contractually granted, additional vacation term of 8 workdays.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '8.2. As far as possible, Vacation shall be taken coherently. Subject to the regulation in the following paragraph, vacation shall be scheduled in coordination with the Employee’s supervisor and in consideration of the operational requirements of the Company.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '8.3. The vacation year is the calendar year. The employee shall use up his vacation entitlement within the given calendar year. To the extent that the Employee cannot take his vacation during any calendar year due to compelling business reasons or reasons in the person of the Employee, any remaining vacation claim shall be transferred to the following calendar year in accordance with applicable law and shall be cancelled without compensation if not taken by April 30 of the following calendar year.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '8.4. During the ongoing employment relationship, no monetary compensation shall be granted for unused vacation entitlements.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '8.5. Upon termination of employment any compensation of vacation claims will be limited to the statutory vacation claim.  Any vacation days already taken shall be taken into account for the statutory vacation claim.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 9. Non-Competition and Side Activities
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Non-Competition and Side Activities</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '9.1. For the term of employment hereunder the Employee is subject to a comprehensive non-compete obligation. In particular, the Employee shall not become active as Employee, freelancer or otherwise for a competitor of the Company or an affiliate within the meaning of section 15 Stock Corporation Act of the Company, establish a competitor or hold a material interest in a competitor.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '9.2. The Employee will dedicate his entire working capacity to the Company. Any paid or unpaid side activities require prior written consent of the Company.  '
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '9.3. This applies likewise to any activities as a man-aging director or as a member of the management board or supervisory board of other companies.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '9.4. Any lectures and publications require consent of the Company if they may affect the interests of the Company.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '9.5. The Company shall grant its consent if the side activity does not affect the performance of the Employee’s duties hereunder and other reasonable interests of the Company are not affected. The Company may withdraw its approval at any time, if required by its reasonable business interests and taking the Employee’s interests into account.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '9.6. In the interest of both parties, the Employee shall notify the Company without delay of any potential conflicts of interest (e.g. relationship or personal ties to customers, suppliers or other business partners of the Company).'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 10. Confidentiality
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Confidentiality</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    'The Employee agrees that, he shall not disclose and shall not use for his own benefit or for the benefit of any third parties, any confidential information obtained in connection with the performance of his duties hereunder relating to the Company and its affiliated companies as well as their business partners, in particular business and trade secrets. This confidentiality obligation shall survive termination hereof to the extent legally admissible.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 11. Return of Property
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Return of Property</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    'Upon termination hereof, release from active duties or anytime upon request of the Company, the Employee shall return to the Company without delay all equipment and property provided to him or produced by him in connection with the performance of his duties hereunder, in particular laptop, mobile phone, documents, records, drafts and copies, software as well as any other electronically or otherwise stored confidential information (including e-mails).  The same shall apply to fully or partially completed working results. There shall be no right of retention in respect thereof. Upon request of the Company the Employee shall confirm in writing that he has complied with his obligations to return under this Section. The obligations under these Sections 10 and 11 shall survive termination hereof.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 12. Copyrights and Intellectual Property Rights
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Copyrights and Intellectual Property Rights</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    'With respect to copyrights and other intellectual property rights, the provisions of Annex 1 to this agreement shall apply.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 13. Term and Termination
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Term and Termination</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                (employee.Employee_Group.indexOf('T') < 0) &&
                                $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Employee Group is Temporary (Yes/No)"/>').append(
                                    '13.1. This employment agreement commences on ',
                                    $('<mark/>').append(
                                        employee.Event_Start_Date
                                    ),
                                    ' and is entered into for an unlimited period.'
                                ),
                                (employee.Employee_Group.indexOf('T') >= 0) &&
                                $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Employee Group is Temporary (Yes/No)"/>').append(
                                    '13.1. The employment relationship commences on ',
                                    $('<mark/>').append(
                                        employee.Event_Start_Date
                                    ),
                                    ' and has a fixed term of ',
                                    $('<mark/>').append(
                                        employee.FTELength
                                    ),
                                    ' months. The employment terminates, automatically, without a termination being required, on ',
                                    $('<mark/>').append(
                                        employee.ContractEndDate
                                    ),
                                    '.'
                                ),
                                $('<p/>').html(''),
                                (employee.ProbationPeriodRequired == 'yes') &&
                                $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Probation Period Required"/>').html(
                                    'The first six months are the Employee’s probationary period. During this time either party may terminate the employment with two weeks’ notice.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '13.2. The right to terminate the employment relationship with or without cause remains unaffected.'
                                ),
                                $('<p/>').html('')
                            ),
                            (employee.Continuous_Service == 'No' || employee.ProbationPeriodRequired == 'yes') &&
                            $('<li/>').append(
                                (employee.Contract_Term_Exception == 'No') &&
                                $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Contract Term Exception (Yes/No)"/>').html(
                                    '13.3. After expiration of the probationary period, the employment agreement can be terminated by either party by giving three months’ notice effective to the end of a calendar month.'
                                ),
                                (employee.Contract_Term_Exception == 'Yes') &&
                                $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Contract Term Exception (Yes/No)"/>').html(
                                    '13.3. After expiration of the probationary period, the employment agreement can be terminated by either party by giving legal period of notice (acc. to BGB).'
                                ),
                                $('<p/>').html('')
                            ),
                            (employee.Continuous_Service == 'Yes' || employee.ProbationPeriodRequired == 'no') &&
                            $('<li/>').append(
                                (employee.Contract_Term_Exception == 'No') &&
                                $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Contract Term Exception (Yes/No)"/>').html(
                                    '13.3. The employment agreement can be terminated by either party by giving three months’ notice effective to the end of a calendar month.'
                                ),
                                (employee.Contract_Term_Exception == 'Yes') &&
                                $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Contract Term Exception (Yes/No)"/>').html(
                                    '13.3. The employment agreement can be terminated by either party by giving legal period of notice (statutory periods acc. to BGB).'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '13.4. Any notices must be given in written form.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '13.5. After notice has been given by either party hereto, irrespective of the reasons, the Company shall be entitled to release the Employee from his duties under the employment agreement subject to continued payment Fixed Salary and taking into account any unused vacation days and any other income earned.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Employee Group is Regular (Yes/No)"/>').append(
                                    '13.6. ',
                                    (employee.Employee_Group.indexOf('R') >= 0) &&
                                    'The employment agreement shall terminate automatically without notice required upon expiry of the month in which the Employee reaches the regular pension age under the statutory pension system or receives an early old age pension. The employment agreement shall further terminate automatically without notice required on the day on which the Employee receives payment of an invalidity pension after the pension insurance has approved an invalidity pension for an unlimited time.',
                                    (employee.Employee_Group.indexOf('R') < 0) &&
                                        'In case the parties continue their cooperation based on this contract also after the expiration of the fixed term, the employment agreement shall terminate automatically without notice required upon expiry of the month in which the Employee reaches the regular pension age under the statutory pension system or receives an early old age pension. The employment agreement shall further terminate automatically without notice required on the day on which the Employee receives payment of an invalidity pension after the pension insurance has approved an invalidity pension for an unlimited time.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 14. Right to Work
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Right to Work</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '14.1. If a work or residency permit is required for the engagement of the Employee, the Employment Contract is subject to the condition precedent that proof of such a work or residency permit for the Employee’s occupation under this Contract is presented to the Company prior to the start date.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '14.2. The Employee is responsible to have a residency permit issued or renewed, if such residency permit is required for his/her occupation under this contract.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '14.3. The Employee shall present the proof of a renewal of the residency permit in a timely manner before the expiration of an existing residency permit.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 15. Data Privacy, Use of Internet and Email
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Data Privacy, Use of Internet and Email</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    'With respect to Data Protection and the use of internet- and email-systems of the Company, the provisions of Annex 2 to this agreement shall apply.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 16. Company Policies and Guidelines
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Company Policies and Guidelines</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    'The Company has set up Compliance Guidelines and general company guidelines. The Employee acknowledges that these policies are binding and shall comply with such policies. The policies are published in the Company’s intranet and the Employee is under an obligation to keep himself informed about the policies applicable from time to time. The obligations under the policies applicable from time to time are part of the obligations of the Employee under this employment agreement.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 17. Limitation of Claims
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Limitation of Claims</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '17.1. Any claims under or arising from the employment relationship must be raised by either party in writing within three months of becoming due and must be filed with the competent court within three months after being raised if the other party refuses the claim or does not respond, otherwise such claims will lapse.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '17.2. The preceding paragraph shall not apply with respect to claims arising from death and injury to body or health and intentional breaches of duty.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 18. Final Provisions
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Final Provisions</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '18.1. Any modifications or amendments hereto shall be made in writing unless they are based on an express or individual contractual agreement.  This shall also apply to any modifications of the aforementioned requirement as to written form. An operational practice is not an express or individual contractual agreement. Even repeated grants or benefits without express contractual agreement do not form a basis for claims in the future.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '18.2. Should any provisions of this Employment Agreement be or become invalid in whole or in part, or should the parties become aware of any gaps or omissions, the validity of the remaining provisions of this Employment Agreement shall not be affected thereby. The parties undertake to replace the invalid or missing provision by an adequate provision which corresponds as far as possible to the interests of and economic purpose intended by the parties.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '18.3. This agreement has been executed in English and German language. In the event of any deviations between both versions the true intention of the parties shall be investigated. In case of doubt, the German version shall be binding.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    )
                )
            ),
            // ANNEX 1 TO THE EMPLOYMENT CONTRACT
            $('<p class="center"/>').html(
                '<strong>ANNEX 1 TO THE EMPLOYMENT CONTRACT</strong>'
            ),
            $('<p/>').html(
                'The following provisions shall apply with respect to copyrights and other intellectual property rights as part of the employment agreement.'
            ),
            $('<p/>').append(
                $('<ol/>').append(
                    // 1. Transfer of Copyrights and other Intellectual Property Rights
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Transfer of Copyrights and other Intellectual Property Rights</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '1.1. The Employee hereby assigns and transfers to the Company all Trademarks and other Signs, rights of use under copyrights, design rights, related intellectual property rights in the sense of the copyright law (including all development stages), patent rights, and any other intellectual property rights throughout the world, ("Transferred IP-Rights") which relate to Work Products (as defined below) on an exclusive basis and unrestricted in time, area and scope.'
                                ),
                                $('<p/>').html(''),
                                $('<ul/>').append(
                                    $('<li/>').append(
                                        $('<div/>').html(
                                            '1.1.1. "Work Products" in the sense of this agreement are all works of authorship in the sense of Section 2 UrhG (including computer software), inventions, ideas, materials, and technology of any kind which'
                                        )
                                    ),
                                    $('<li/>').append(
                                        $('<div/>').html(
                                            '1.1.2. were developed or acquired by the Employee during or outside of the working time by making use of materials or working time which was made available by the Company or on the basis of professional know how developed in the service of the Company; or'
                                        )
                                    ),
                                    $('<li/>').append(
                                        $('<div/>').html(
                                            '1.1.3. were developed or acquired by the Employee in connection with his professional activities for the Company; or'
                                        )
                                    ),
                                    $('<li/>').append(
                                        $('<div/>').html(
                                            '1.1.4. are connected with the contractual services of the Employee rendered to the Company during the term of the Service Agreement; or'
                                        )
                                    ),
                                    $('<li/>').append(
                                        $('<div/>').html(
                                            '1.1.5. were developed or acquired by the Employee prior to commencement or after termination of service for the Company, provided that the requirements set forth under one or more of Sections 1.2.1 to 1.2.3 are fulfilled.'
                                        )
                                    )
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '1.2. All Transferred IP Rights are granted or transferred to the Company at the latest upon coming into force as exclusive rights and shall survive termination of the Service Agreement with the Company.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '1.3. The transfer includes the right of the Company domestically and abroad to (i) process and make changes to and derivatives of the Work Products, and (ii) irrespective of whether in material or immaterial form and whether with or without consideration, to use, communicate to the public, copy, distribute, store in digital or analogous format on picture, data or sound storing devices of all kinds and to reproduce and distribute such storing devices and to exploit in any manner.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '1.4. The transfer includes in particular also the right to make the Work Products usable interactively via electronic channels or means (e.g. CD-ROM or other storage devices, the Internet, proprietary online services) via all known transfer channels (e.g. cable, satellite, radio transmitter systems, including WAP, GPRS, HSCSD (HSMD) and UMTS/IMT 2000).'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '1.5. The Company may in its sole discretion wholly or partly transfer the Transferred IP Rights to third parties domestically or abroad by transferring the relevant rights of use or granting exclusive or non-exclusive rights of use or otherwise making available for exploitation, without the consent of the Employee being required.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '1.6. The granting of the Transferred IP Rights comprises in particular the following rights of use:'
                                ),
                                $('<p/>').html(''),
                                $('<ul/>').append(
                                    $('<li/>').append(
                                        $('<div/>').html(
                                            'Right to reproduce (Section 16 German Copyright Act ("UrhG"))'
                                        )
                                    ),
                                    $('<li/>').append(
                                        $('<div/>').html(
                                            'Right to exhibit (Section 18 UrhG)'
                                        )
                                    ),
                                    $('<li/>').append(
                                        $('<div/>').html(
                                            'Right to distribute (Section 17 UrhG)'
                                        )
                                    ),
                                    $('<li/>').append(
                                        $('<div/>').html(
                                            'Right to present, perform and display (Section 19 UrhG)'
                                        )
                                    ),
                                    $('<li/>').append(
                                        $('<div/>').html(
                                            'Right to use in digital form, in particular by online reproduction and in connection with open networks (Internet)'
                                        )
                                    ),
                                    $('<li/>').append(
                                        $('<div/>').html(
                                            'Right to broadcast (Section 20 UrhG)'
                                        )
                                    ),
                                    $('<li/>').append(
                                        $('<div/>').html(
                                            'Right to reproduce via picture and sound storing devices (Section 21 UrhG)'
                                        )
                                    ),
                                    $('<li/>').append(
                                        $('<div/>').html(
                                            'Right to reproduction of radio broadcasts (Section 22 UrhG)'
                                        )
                                    ),
                                    $('<li/>').append(
                                        $('<div/>').html(
                                            'Right to process and to make changes (Section 23 UrhG)'
                                        )
                                    ),
                                    $('<li/>').append(
                                        $('<div/>').html(
                                            'Right to film adaption and re-adaption (Sections 88, 95, 95 UrhG)'
                                        ),
                                        addSpaces(1)
                                    )
                                )
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '1.7. The Employee and the Company acknowledge that they may be unable to fully assess the future economic significance of some of the rights of use covered by the granting of the Transferred IP Rights.'
                                ),
                                $('<p/>').html(''),
                                $('<div/>').html(
                                    'Since the Company has a legitimate interest, to exploit the Transferred IP Rights in the future also in any kinds of use which may be technically unknown as of today, the Employee and the Company hereby expressly agree that the Employee grants the Company rights of use in accordance with this agreement also with respect to such kinds of use which are technically unknown as of today.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '1.8. The Employee hereby waives any other rights he may have as sole creator of or owner of other intellectual property rights to the Work Products, in particular the right of adaption and the right to access the Work Product.  The Employee agrees within the scope of his determination right pursuant to Section 13 UrhG that the Employee will not be denominated or identified as sole creator in connection with the exploitation of the Transferred IP Rights.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '1.9. The moral author’s rights of the Employee to his Work Products shall remain unaffected, in particular the right to prohibit any deformations or other impairments or uses which may compromise his legitimate intellectual or personal interest in the Work Products.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '1.10. The Company is not obliged to register or exploit the Transferred IP Rights.  Any Call Back Rights of the Employee pursuant to Section 41 UrhG due to non-exercise of the relevant granted or transferred rights of use are excluded for a term of five years since the date of grant or transfer or such rights.  Any Call-Back can only be declared after (i) the Employee has requested that the Company shall exercise specifically identified rights of use setting a time limit of at least two years and (ii) the time limit has expired without the Company having complied with this request.  This shall not apply if the non-exercise or the insufficient exercise is mainly based on circumstances which may reasonably be expected to be remedied by the Employee.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '1.11. Even in case of a Call-Back, the Company shall always retain a non-exclusive right of use with the same scope as the exclusive rights granted to Company in this agreement.  In the event of an effective Call-Back, the Employee may only exploit the Work Product if and to the extent that this does not impair the legitimate interests of the Company.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '1.12. The Employee irrevocably undertakes to take any actions and make any declarations required for the grant or the transfer of the Transferred IP Rights without undue delay.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '1.13. The granting and use of the Transferred IP Rights are fully compensated by the remuneration paid under the employment agreement including the time after termination of the employment agreement.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 2. Inventions and Improvement Suggestions
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Inventions and Improvement Suggestions</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<div/>').html(
                            'With respect to any Employee inventions (Diensterfindungen), the Act on Employee Inventions (Gesetz über Arbeitnehmererfindungen) shall apply.'
                        ),
                        $('<p/>').html(''),
                        $('<div/>').html(
                            'In addition, the policies of the Company as in force from time to time shall apply.'
                        ),
                        $('<p/>').html('')
                    )
                )
            ),
            // ANNEX 2 TO THE EMPLOYMENT CONTRACT
            $('<p class="center"/>').html(
                '<strong>ANNEX 2 TO THE EMPLOYMENT CONTRACT</strong>'
            ),
            $('<p/>').html(
                'The following provisions shall apply with respect to Data Protection Agreement as part of the employment agreement, to the extent that these are applicable and relevant to the position to be performed.'
            ),
            $('<p/>').append(
                $('<ol/>').append(
                    // 1. Privacy as Principle; subject Matter of the Agreement 
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Privacy as Principle; subject Matter of the Agreement</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '1.1. The Company empowers the Employee to communicate with customers to efficiently and professionally fulfill the tasks and responsibilities resulting from the Employment Contract, to provide customer service, to resolve disputes, and provides the Employee with access to personal information of customers that may include contact, sensitive, and financial information.'
                                ),
                                $('<p/>').html(''),
                                $('<div/>').html(
                                    'The Company also provides the Employee with access to Company confidential information to conduct business on its behalf.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '1.2. Privacy is one of the fundamental principles of the Company. The Company values the privacy of the Employee and works to balance: the protection of the Employee’s reasonable expectations of privacy; consumer privacy; the ability to enforce policies; and the privacy and integrity of customer and Company in-formation. Therefore, the Employee’s use of the Company’s telecommunication and information applications, tools and systems, including, without limitation, computers, USB-sticks and other data media, telephones, e-mail, instant messaging, voicemail, intranet or internet, (“Company Systems”) for communication, access to, and use or disclosure of customer information or Company confidential information are conditioned upon adherence to: Employment Contract, including its attachments, and this Data Protection Agreement, in particular to the privacy obligations and control rights stipulated herein (collectively the “Policies”). The Policies: (i) specify which communications, access to, and uses or disclosures of customer or Company information, are proper and which are improper and what constitute violations of Company policy; (ii) ensure that the Employee do not communicate, access, use or disclose customer or Company information in a manner that may subject the Company to civil or criminal liability or violate the rights of customers; (iii) protect customer, employee, contractor, and Company in-formation and prevent inappropriate disclosure of such information; and (iv) protect the Company from inadvertent, inappropriate, or unprofessional disclosures or communications.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '1.3. In consequence, subject matter of this Data Protection Agreement is the Employee’s use of Company Systems, for communication, access to, and use or disclosure of customer information or Company confidential information.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 2. Use of Company Systems
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Use of Company Systems</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '2.1. The Company Systems should be used only for Company’s business purposes, i.e. the communication and information for the benefit of employees and management of the Company, its parent companies, subsidiaries and affiliates, as well as the communication with customers and business partners of the Company.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '2.2. The use of the Company Systems for private purposes is prohibited.'
                                ),
                                $('<p/>').html(''),
                                $('<div/>').html(
                                    'Any unlawful use of the Company Systems, any use in a way that is disruptive, libelous, offensive, injurious to reputation or business interests of the Company, its parent companies, subsidiaries or affiliates, or inadvertent, unauthorized, inappropriate to others and any use which is pornographic or racist, which conveys extreme right or leftwing views or which advocates violence or other punishable offences is prohibited.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 3. Ownership of Company Systems and Data Logging
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Ownership of Company Systems and Data Logging</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '3.1. All Company Systems and all data entered into or stored on Company Systems, including, without limitation, e-mail messages, voicemail messages, internet web forms, corres¬pondence and computer-files, are the property of the Company.'
                                ),
                                $('<p/>').html(''),
                                $('<div/>').html(
                                    'While e-mail, voicemail, Internet or other Company Systems may be password protected, this does neither ensure privacy nor exclude the review or monitoring for legitimate business reasons in accordance with this Data Protection Agreement.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '3.2. The Company logs all access to, and use of the Company Systems. In particular the Company keeps incoming mail books and outgoing mail books, logging in particular the following information: sender address, recipient address, e-mail-ID, subject line, date and time.'
                                ),
                                $('<p/>').html(''),
                                $('<div/>').html(
                                    'All logged data will in general not be used by the Company for the following purposes, except as otherwise agreed upon below: assessment of employees, efficiency and behaviour control of employees, and employee performance monitoring.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 4. Review and Monitoring for Specific Purposes 
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Review and Monitoring for Specific Purposes</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '4.1. The Company reserves the right to review e-mail messages, voicemail messages, computer-files and other data on Company Systems, and to review Internet use (name of websites, number of times of access, text and content uploaded/entered) and all other recorded data for the following legitimate business reasons: retrieving data in Employee’s absence, accounting purposes in connection with the use of the Company Systems, as well as safeguarding data and ensuring proper operation of the Company Systems, including the availability, operational functionality and performance of the Company Systems, the load balancing and maximizing of the system performance, the detection and correction of technical errors.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '4.2. In order to ensure quality control of services provided to customers, protect customer privacy and ensure customer data protection, the Company may on a randomly basis monitor the Employee’s communication, access to, and use or disclosure of customer information.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '4.3. In addition, the Company reserves the right to monitor the Employee’s communication, access to, and use or disclosure of customer information or Company confidential information, (i) to investigate crimes or other punishable offences if there is a documented reason to believe the Employee has committed a crime or any other punishable offence while employed, or (ii) if there is a suspicion of abuse, or an abuse of the Company’s Systems (e.g. a use prohibited by this Data Protection Agreement), or, with regard to the Policies, a case of suspected violation, or of violation of the Policies.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '4.4. In the cases defined in paragraphs 1 to 3 of this section, the Company is authorized to monitor the Employee’s communication by using specific electronic systems to monitor data, including the communications, access to, use, or disclosure of information. The Company is in particular authorized to access, collect, review and examine, to disclose and save the monitored data.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '4.5. Personal data recorded for the purposes defined above may only be used for those purposes. Sec. 31 of the German Data Protection Act applies mutatis mutandis.'
                                ),
                                $('<p/>').html(''),
                                $('<div/>').html(
                                    'The Company shall not use the personal data if the Employee has an overriding legitimate interest in ruling out the possibility of use, and shall use the personal data only by using actions and systems and to an extent not disproportionate to the defined purposes for which the data is recorded and the circumstances of the particular case.'
                                ),
                                $('<p/>').html(''),
                                $('<div/>').html(
                                    'In addition, the Company limits its monitoring of Employee’s activities to monitoring that the Company believes is necessary. Under no circumstances the Company will monitor the Employee on a regular basis for purposes not defined in the Policies or this Data Protection Agreement.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 5. Monitoring for Employee Training and Coaching Purposes 
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Monitoring for Employee Training and Coaching Purposes</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '5.1. By prior agreement with the Employee, the Company may monitor the Employee’s communication, access to, and use or disclosure of information for Employee training and coaching purposes for a limited period of time.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '5.2. The monitoring may in particular involve the following: data access logs that record the Employee’s access and related action each time a Company System is accessed and used; collection and review of communications such as email (including outbound emails from external email accounts when the Employee access its external email account using a Company System), internet chat discussions, and phone discussions; and monitoring of the Employee’s computer to confirm proper use of Company Systems.'
                                ),
                                $('<p/>').html(''),
                                $('<div/>').html(
                                    'To aid in Employee’s familiarity, the names of some of the systems that the Company currently uses for the said purposes are: Blue Pumpkin; Skippy, Shade; Benchmark Portal; Kana; Live Person; Witness, Vontu, and Web Trends. The systems, however, may be changed by Company from time to time without prior announcement.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '5.3. The Company should limit its monitoring of Employee’s activities to monitoring that the Company believes is necessary to achieve the defined training and coaching purposes.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 6. Violations and Manipulations 
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Violations and Manipulations</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '6.1. Violation of any portion of this Data Protection Agreement by the Employee may lead to disciplinary action, up to and including extraordinary termination.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '6.2. Tampering with or attempting to disable or manipulate electronic review or monitoring systems by the Employee will lead to disciplinary action, up to and including extraordinary termination.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 7. Access to Monitoring Systems and Deletion of Data 
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Access to Monitoring Systems and Deletion of Data</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '7.1. Supervisors, managers, or other Company employees who have access to the monitoring systems shall only use those systems for the purposes explained within this document. The access to the monitoring systems is limited on a need to know basis.'
                                ),
                                $('<p/>').html(''),
                                $('<div/>').html(
                                    'If the Employee feel that a supervisor, manager, or other Company employee has misused any monitoring system, the Employee should contact the HR representative or the Company’s Privacy Director. In the event that personal information is collected about the Employee, the Employee may access and rectify such information, in accordance with applicable laws, by contacting its HR representative.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '7.2. Any personal data records are deleted when they are no longer required by the Company, and in accordance with the applicable law.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 8. Term and Termination 
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Term and Termination</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '8.1. This Data Protection Agreement begins with the beginning of the Employment Contract. It will terminate automatically and without prior notice at the same time as the Employment Contract.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '8.2. The right of ordinary termination of this Data Protection Agreement is excluded.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '8.3. The right of extraordinary termination remains unaffected.'
                                ),
                                $('<p/>').html('')
                            )
                        )
                    ),
                    // 9. Final Provisions 
                    $('<li/>').append(
                        $('<div/>').html(
                            '<strong><u>Final Provisions</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<ul/>').append(
                            $('<li/>').append(
                                $('<div/>').html(
                                    '9.1. There are no related oral agreements to this Data Protection Agreement. This Data Protection Agreement constitutes the entire agreement between the parties and supersedes all previous written and oral understandings and agreements of the parties with respect to its subject.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '9.2. Amendments to this Data Protection Agreement must be in writing.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '9.3. Should a provision of this Data Protection Agreement and/or amendments or adjustments thereof be or become invalid, the validity of the remainder of the agreement shall remain unaffected.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '9.4. This Data Protection Agreement shall be governed by and interpreted in accordance with the laws of Germany.'
                                ),
                                $('<p/>').html('')
                            ),
                            $('<li/>').append(
                                $('<div/>').html(
                                    '9.5. This Data Protection Agreement exists in German as well as in English. In the case of discrepancies, the German version shall prevail. '
                                ),
                                $('<p/>').html('')
                            )
                        )
                    )
                )
            )
        )
        // end append
    );
    
    $("#markup3").html("").append(
        // OfferClause 3
        $('<p class="center hide"/>').html(
            '____________________________________________________________________________________________________'
        ),
        $('<div class="offerClause3">').append(
            $('<p/>').html(
                '<strong>Mitarbeiter:</strong>'
            )
        )
        // end append
    );

    $("#markup4").html("").append(
        // OfferClause 4
        $('<div class="offerClause4">').append(
            $('<p/>').html(
                '<strong>Arbeitgeber:</strong>'
            )
        )
        // end append
    );

    $("#markup5").html("").append(
        // OfferClause 5
        $('<div class="offerClause5">').append(
            $('<p class="fb-size9"/>').html(footer)
        )
        // end append
    );

    $("#markup6").html("").append(
        // OfferClause 6
        $('<div class="offerClause6">').append(
            addSpaces(1)
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

        var arrParts = [
            [1, 'hidden_pg']
        ];
        
        var arrParts2 = [
            [1, 'hidden_pg2']
        ];

        showCompletedOfferLetter('incomplete', 'complete', arrParts);
        showCompletedOfferLetter('incomplete2', 'complete2', arrParts2);
    }
});
