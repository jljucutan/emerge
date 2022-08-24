// RSU ESSP Letter
function fnView() {
    $("#markup").html("").append(
        // Company Logo
        $('<div class="col-lg-12"/>').append(
            $('<div class="offerClause"/>').append(
                $('<div id="srt_eform_logo" class="text-right"/>').html('<img src=' + company.Logo + '>')
            )
        ),
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<p><strong>Objet : d’unités d’actions assujetties à des restrictions et régime d’actionnariat des employés | Re: Restricted Stock Unit Awards and Employee Stock Purchase Plan</strong></p>'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html("Bonjour | Dear " + employee.First_Name + ",")
        ),

      $('<div class="offerClause">').append(
            $('<p/>').html(
                'Cette lettre contient des renseignements concernant votre admissibilité à l’acquisition d’unités d’actions assujetties à des restrictions (« RSU ») octroyées par Apple Inc. (« Apple »).  ' + ((employee.CAC_RSU_Amount != '') ? 'La direction a l’intention de recommander au Comité de rémunération du conseil d’administration d’Apple (le « Comité ») qu’on vous octroie des RSU ayant une valeur de ' +employee.CAC_RSU_Amount+ ' $ US à la date de l’attribution. Cette attribution est assujettie à l’approbation du Comité, à une date qui sera fixée ultérieurement. Nous déterminerons le nombre de RSU en divisant la valeur de ' +employee.CAC_RSU_Amount+ ' $ US par le cours de clôture de l’action d’Apple au NASDAQ à la date d’attribution, puis en arrondissant vers le haut la valeur obtenue à l’action entière la plus près' : 'La direction pourrait recommander au Comité de rémunération du conseil d’administration d’Apple (le « Comité ») qu’on vous octroie des RSU. Cette attribution est assujettie à l’approbation du Comité, à une date qui sera fixée ultérieurement. Nous déterminerons le nombre de RSU en divisant la valeur de l’attribution par le cours de clôture de l’action d’Apple au NASDAQ à la date d’attribution, puis en arrondissant vers le haut la valeur obtenue à l’action entière la plus près.')
            )
        ), 

        $('<div class="offerClause">').append(
            $('<p/>').html(
                'This letter provides information on your eligibility to receive a restricted stock unit (“RSU”) award from Apple Inc. (“Apple”). ' + ((employee.CAC_RSU_Amount != '') ? 'Management intends to recommend to the Compensation Committee of the Board of Directors of Apple (the “Committee”) that you be granted an award of RSUs with a value of US$' +employee.CAC_RSU_Amount+ ' on the date of grant. This award is subject to the approval of the Committee, on a date to be determined. The number of RSUs will be determined by dividing US$' +employee.CAC_RSU_Amount+ ' by the Nasdaq closing price of a share of Apple stock on the date and rounding up to the nearest whole share' : 'Management may recommend to the Compensation Committee of the Board of Directors of Apple (the "Committee") that you be granted an award of RSUs. This award is subject to the approval of the Committee, on a date to be determined. The number of RSUs will be determined by dividing the value of the award by the Nasdaq closing price of a share of Apple stock on the date the award is approved by the Committee and rounding up to the nearest whole share. ')
            )
        ), 

        $('<div class="offerClause">').append(
            $('<p/>').html(
                'Les RSU vous donne le droit de recevoir des actions ordinaires d’Apple au moment de leur acquisition; une unité est égale à une action d’Apple. Après l’approbation par le Comité, les modalités applicables à l’octroi, y compris le calendrier d’acquisition, seront disponibles dans la convention d’attribution des RSU. Sauf disposition contraire stipulée dans la convention d’attribution des RSU, l’acquisition de toute RSU prendra fin au moment de la cessation d’emploi.'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(
                'An RSU is the right to receive shares of Apple common stock upon vesting; one unit represents one share of Apple stock. After Committee approval, the specific terms and conditions applicable to the grant, including the vesting schedule, will be available in the RSU award agreement. Except as otherwise provided in the RSU award agreement, vesting of any RSU award will cease upon termination of employment.'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(
                'L’octroi sera assujetti aux modalités du Régime d’actionnariat des employés d’Apple 2022 (le « Régime 2022 ») de même qu’aux modalités de la convention d’attribution des RSU. Cette lettre ne peut modifier ces documents d’aucune manière. Vous comprenez que toutes les RSU qui vous sont attribuées seront régies et interprétées conformément aux lois américaines, sans égard aux lois ou règlements qui entraîneraient l’application de toute loi d’un pays autre que les États-Unis. Dans le but de résoudre tout litige qui pourrait découler directement ou indirectement de votre participation à tout régime d’actionnariat d’Apple, vous acceptez la compétence exclusive de l’État de la Californie et consentez qu’un tel litige soit entendu uniquement par les tribunaux du comté de Santa Clara, en Californie, ou par les tribunaux fédéraux des États-Unis pour le district nord de la Californie, et par aucun autre tribunal où cette attribution est faite.'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(
                'The grant will be subject to the terms and conditions of Apple’s 2022 Employee Stock Plan (the “2022 Plan”) as well as the terms and conditions of the RSU award agreement. This letter does not modify or amend those documents in any manner. You understand that any RSU awards granted to you will be governed by and will be construed in all respects by U.S. law, without giving effect to any law or rule that would cause the laws of any jurisdiction other than the U.S. to be applied. For purposes of litigating any dispute that arises directly or indirectly from your participation in any Apple stock plan, you hereby submit to and consent to the exclusive jurisdiction of the State of California and agree that such litigation shall be conducted only in the courts of the County of Santa Clara, California, or the federal courts for the United States for the Northern District of California, and no other courts where this grant is made.'
            )
        ),

        $('<div class="offerClause">').append(
            $('<p/>').html(
                'Une fois que vous devenez employé de Apple Canada Inc. (« Employeur »), vous pouvez être admissible au régime d’actionnariat des employés d’Apple Inc. (le « régime ESPP »). Le régime ESPP permet aux employés admissibles d’acheter des actions d’Apple à la fin de chaque période d’achat de six mois conformément aux modalités du régime ESPP, à un prix d’achat égal au moindre des montants suivants : soit 85 % de la juste valeur marchande de l’action d’Apple au premier jour de chaque période d’achat, soit 85 % de la juste valeur marchande de l’action d’Apple au dernier jour de chaque période d’achat.')
        ),

        $('<div class="offerClause">').append(
            $('<p/>').html(
                'Once you are an employee of Apple Canada Inc. (“Employer”), you may be eligible to participate in the Apple Inc. Employee Stock Purchase Plan (the “ESPP”). The ESPP lets eligible employees purchase Apple stock at the end of each six-month purchase period at a purchase price that is equal to the lesser of 85% of the fair market value of Apple’s stock on the first day and the last day of each purchase period, subject to the terms and conditions of the ESPP.')
        ),

        $('<div class="offerClause">').append(
            $('<p/>').html(
                'Vous reconnaissez que si vous décidez de participer au régime ESPP ou si Apple vous octroie des RSU, votre participation à tout régime d’actionnariat se fera sur une base volontaire et ne sera pas considérée comme une relation d’emploi avec Apple. Vous reconnaissez également que les avantages conférés par le régime d’actionnariat d’Apple ne doivent pas faire partie de votre contrat avec l’Employeur, de votre salaire ou de tout autre rémunération versée à quelque fin que ce soit, y compris pour le calcul de tout paiement pendant la période de préavis, paiement tenant lieu de préavis, indemnité de départ ou toute autre prime ou compensation de cessation d’emploi (s’il y a lieu). Apple se réserve le droit, à son unique et entière discrétion, de suspendre, modifier, annuler ou abolir tout régime d’actionnariat d’Apple, à tout moment, sans fournir de compensation à vous ou à tout autre employé participant.'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(
                'You acknowledge that if you decide to participate in the ESPP or if Apple grants you an RSU award, your participation in any Apple stock plan will be voluntary and it will not constitute an employment relationship with Apple. You further acknowledge that the benefits under any Apple stock plan shall not be part of your employment contract with Employer, your salary or other remuneration for any purposes, including for purposes of computing payment during the notice period, payment in lieu of notice, severance pay or other termination compensation or indemnity (if any). Apple reserves the absolute right in its sole discretion to suspend, modify, cancel or terminate any and all Apple stock plans at any time without compensation to you or any other of the participating employees.'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(
                'Veuillez prendre note qu’Apple peut vous attribuer des RSU et vous permettre de participer au régime ESPP seulement si les lois du pays dans lequel vous résidez ou celles auxquelles vous êtes assujetti l’autorisent. '
            )
        ),

        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Si le Comité vous octroie des RSU, l’attribution est un avantage non récurrent, et toutes les décisions liées aux octrois futurs seront prises à la seule discrétion du Comité. Si Apple vous attribue des RSU, vous reconnaissez que :'
            ),
        $('<div class="offerClause"/>').append(
                $('<ul style="list-style-type:none"/>').append(
                    $('<p class="list-type" style="padding-left:10px"/>').html(
                        'I.&nbsp; l’octroi des RSU est un avantage exceptionnel, discrétionnaire et non récurrent, et ne crée aucun droit contractuel ou autre quant à l’octroi futur de RSU, ou d’avantages donnés à la place des RSU;<br>'
                    ),
                    $('<p class="list-type" style="padding-left:11px;text-indent:-18px"/>').html(
                        'II.&nbsp; toutes les décisions relatives aux octrois futurs, y compris, mais sans s’y limiter, le moment où les actions seront attribuées, le nombre d’actions liées à chaque attribution, et le ou les moments où chaque attribution est acquise sont prises à la seule discrétion d’Apple; et<br>'
                    ),
                    $('<p class="list-type" style="padding-left:11px;text-indent:-20px"/>').html(
                        'III.&nbsp; la valeur future des actions sous-jacentes demeure inconnue, indéterminable et ne peut être prédite avec certitude.'
                    )
                )
            ),
            $('<p/>').html(
                'En participant aux régimes d’actionnariat d’Apple, vous pourriez être assujetti à certaines obligations fiscales ou juridiques. Vous aurez la responsabilité de vous conformer à toutes les exigences juridiques applicables liées à votre participation aux régimes d’actionnariat d’Apple et à toutes vos obligations en matière d’impôt sur le revenu et de cotisations d’assurance sociale découlant de l’octroi ou de l’acquisition des RSU, y compris toute obligation de l’Employeur qui, selon Apple, pourrait vous être transférée légalement et, s’il y a lieu, toute obligation découlant de l’achat et de la vente d’actions, ou de la réception de tout dividende et équivalent de dividende. Vous consentez à solliciter, à vos frais, l’avis de votre comptable ou conseiller fiscal personnel à propos des répercussions fiscales de toute RSU qui vous est octroyée ou de votre participation au régime ESPP.'
            )
        ),

        $('<div class="offerClause">').append(
            $('<p/>').html(
                'Please note that Apple can make the RSU grant to you and offer you participation in the ESPP only if and as long as it is permitted and feasible under the laws of the country in which you reside or to whose laws you are subject.'
            )
        ),

        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'If the Committee grants you an RSU award, the grant will be a one-time benefit and all determinations with respect to future grants are at the sole discretion of the Committee. You acknowledge that, if Apple grants you any RSU award:'
            ),
        $('<div class="offerClause"/>').append(
                $('<ul style="list-style-type:none"/>').append(
                    $('<p class="list-type" style="padding-left:10px"/>').html(
                        'I.&nbsp; the grant of the RSU award is an exceptional, discretionary, one-time benefit and will not create any contractual or other right to receive future grants of RSU awards, or benefits in lieu of RSUs;<br>'
                    ),
                    $('<p class="list-type" style="padding-left:11px;text-indent:-18px"/>').html(
                        'II.&nbsp; all determinations with respect to any future grants, including but not limited to, the times when awards will be granted, the number of shares subject to each award, and the time or times when each award will become vested will be at the sole discretion of Apple; and<br>'
                    ),
                    $('<p class="list-type" style="padding-left:11px;text-indent:-20px"/>').html(
                        'III.&nbsp; the future value of the underlying shares will be unknown, indeterminable and cannot be predicted with certainty.'
                    )
                )
            ),
            $('<p/>').html(
                'As a result of your participation in Apple’s stock plans, you may be subject to certain tax and/or legal consequences. You will be responsible to comply with any applicable legal requirements in connection with your participation in Apple’s stock plans and for any income tax and/or social insurance contribution obligations arising from the grant or vesting of RSUs, including any Employer obligations that Apple has determined may be legally transferred to you, and, if applicable, any obligations arising from the purchase of shares and the sale of any shares or the receipt of any dividends or dividend equivalents. You agree to seek advice from your personal accountant or tax advisor at your own expense regarding the tax implications of any RSU award granted to you or your participation in the ESPP.'
            )
        ),


        $('<div class="offerClause">').append(
            $('<p/>').html(
                'Apple peut, à sa seule discrétion, décider de transmettre par voie électronique tout document relatif à la participation actuelle ou future à tout régime d’actionnariat d’Apple. Vous consentez par la présente à recevoir de tels documents par voie électronique et acceptez de participer à tout régime d’actionnariat d’Apple par l’entremise d’un système électronique ou en ligne mis en place et tenu à jour par Apple ou par un tiers désigné par Apple. Si vous recevez cette lettre dans une langue autre que l’anglais, vous comprenez que la version traduite de cette lettre vous est fournie à titre de référence seulement. En cas de divergence entre la version traduite et la version anglaise, la version anglaise prévaudra. Les régimes d’actionnariat d’Apple et tous les autres documents liés aux RSU et au régime ESPP vous seront fournis en anglais. En participant au régime ESPP ou en acceptant une attribution de RSU, vous confirmez avoir lu et compris les documents relatifs aux régimes d’actionnariat d’Apple. Vous reconnaissez qu’il vous incombe de comprendre chacune des dispositions des régimes d’actionnariat d’Apple ainsi que tous les documents connexes.'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(
                'Apple may, in its sole discretion, decide to deliver any documents related to current or future participation in any Apple stock plan by electronic means. You hereby consent to receive such documents by electronic delivery and agree to participate in any Apple stock plan through an on-line or electronic system established and maintained by Apple or a third party designated by Apple. If you received this letter in a language other than English, you understand that the translated version of this letter is provided for your reference only. Where there is any discrepancy between the translated version and English version, the English version shall prevail. Apple stock plans and all other materials related to RSUs and the ESPP will be provided to you in the English language. By participating in the ESPP or accepting your RSU award, you confirm having read and understood the documents relating to the Apple stock plans. You acknowledge that it is your responsibility to understand each and all of the provisions of the Apple stock plans and other related materials.'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(
                'En apposant votre signature ci-dessous : (1) vous reconnaissez que les RSU qui vous seront attribuées à l’avenir seront assujetties à la politique d’acceptation d’Apple actuellement en place; et (2) vous comprenez et reconnaissez que vous serez réputé avoir accepté les RSU conformément aux modalités du Régime 2022 ainsi qu’aux modalités de la convention d’attribution des RSU, à moins de refuser expressément les RSU avant la date précisée dans la convention d’attribution applicable.'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(
                'By your signature below: (1) you acknowledge that any RSUs granted to you in the future shall be subject to Apple’s current acceptance policy; and (2) you understand and agree that you will be deemed to have accepted the RSUs in accordance with the terms and conditions of the 2022 Plan as well as the terms and conditions of the RSU award agreement unless you expressly reject the RSUs by the date specified in the applicable award agreement.'
            )
        ),

        $('<div class="offerClause">').append(
            $('<p/>').html(
                ' '
            )
        )
        // end append
    );
}

function fnConvertDate(eventDate) {

    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    var year = d.getFullYear(),
        month = d.getMonth(),
        n_date = d.getDate(),
        day = d.getDay();

    return months[month] + ' ' + parseInt(n_date) + ', ' + year;

}


function fnConvertFullDate(eventDate) {

    var d = new Date(eventDate);
    console.log(d);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var year = d.getFullYear(),
        month = d.getMonth(),
        n_date = d.getDate(),
        day = d.getDay();

    return days[parseInt(day)] + ', ' + months[month] + ' ' + parseInt(n_date) + ', ' + year;

}


function fnTime_And_Half(amount, rate) {
    amount = (amount.indexOf(',') != -1) ? amount.split(',').join('') : amount;
    var total = (parseFloat(amount) + parseFloat((parseFloat(amount) * rate)));
    return formatCurrency(total);
}



function formatCurrency(total) {
    return parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
}

function fnFormatCurrency(total) {
    if (total) {
        total = (total.indexOf(',') != -1) ? total.split(',').join('') : total;
        return formatCurrency(total);
    } else {
        return '0.00';
    }
}

$(function() {
    function _fnAssignValue(targetElement, value) {
        document.getElementById(targetElement).value = value;
        $("#" + targetElement).attr("value", value);
    }

    function fnGetName(first, middlename, last) {

        var middle_inital = ((middlename) ? middlename.substring(0, 1) + ' ' : '');
        var fullname = first + " " + middle_inital + last;
        return fullname;
    }

    var name = fnGetName(employee.First_Name, employee.Middle_Name, employee.Last_Name);
    _fnAssignValue('PrintName', name);

    // render template
    fnView();

    // completed letter
    if (!$("input.calendar_button").length) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

        var arrParts = [
            [1, 'hidden_pg'],
        ];

        showCompletedOfferLetter('incomplete', 'complete', arrParts);
    }
    else{
        makeOfferLetter('hidden_pg','offerClause');
    }
});
