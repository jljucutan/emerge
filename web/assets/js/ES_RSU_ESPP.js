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
                '<p><strong>Re: Restricted Stock Unit Awards and Employee Stock Purchase Plan</strong></p>'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p class="text-justify"/>').html("Dear " + employee.First_Name + ",")
        ),

      $('<div class="offerClause">').append(
            $('<p class="text-justify"/>').html(
                'This letter provides information on your eligibility to receive a restricted stock unit (“RSU”) award from Apple Inc. (“Apple”). Management may recommend to the Compensation Committee of the Board of Directors of Apple (the “Committee”) that you be granted an award of RSUs. This award is subject to the approval of the Committee, on a date to be determined. The number of RSUs will be determined by dividing the value of the award by the Nasdaq closing price of a share of Apple stock on the grant date and rounding up to the nearest whole share.'
            )
        ),

        $('<div class="offerClause">').append(
            $('<p class="text-justify"/>').html(
                'An RSU is the right to receive shares of Apple common stock upon vesting; one unit represents one share of Apple stock. After Committee approval, the specific terms and conditions applicable to the grant, including the vesting schedule, will be available in the RSU award agreement. Except as otherwise provided in the RSU award agreement, vesting of any RSU award will cease upon termination of employment.'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p class="text-justify"/>').html(
                'The grant will be subject to the terms and conditions of Apple’s 2014 Employee Stock Plan (the “2014 Plan”) as well as the terms and conditions of the RSU award agreement. This letter does not modify or amend those documents in any manner. You understand that any RSU awards granted to you will be governed by and will be construed in all respects by U.S. law, without giving effect to any law or rule that would cause the laws of any jurisdiction other than the U.S. to be applied. For purposes of litigating any dispute that arises directly or indirectly from your participation in any Apple stock plan, you hereby submit to and consent to the exclusive jurisdiction of the State of California and agree that such litigation shall be conducted only in the courts of the County of Santa Clara, California, or the federal courts for the United States for the Northern District of California, and no other courts where this grant is made.'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p class="text-justify"/>').append(
                'Once you are an employee of ',
                $('<strong/>').html('Apple Marketing Iberia, S.A.'),
                ' (“Employer”), you may be eligible to participate in the Apple Inc. Employee Stock Purchase Plan (the “ESPP”). The ESPP lets eligible employees purchase Apple stock at the end of each six-month purchase period at a purchase price that is equal to the lesser of 85% of the fair market value of Apple’s stock on the first day and the last day of each purchase period, subject to the terms and conditions of the ESPP.'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p class="text-justify"/>').html(
                'You acknowledge that if you decide to participate in the ESPP or if Apple grants you an RSU award, your participation in any Apple stock plan will be voluntary and it will not constitute an employment relationship with Apple. You further acknowledge that the benefits under any Apple stock plan shall not be part of your employment contract with Employer, your salary or other remuneration for any purposes, including for purposes of computing payment during the notice period, payment in lieu of notice, severance pay or other termination compensation or indemnity (if any). Apple reserves the absolute right in its sole discretion to suspend, modify, cancel or terminate any and all Apple stock plans at any time without compensation to you or any other of the participating employees.'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p class="text-justify"/>').html(
                'Please note that Apple can make the RSU grant to you and offer you participation in the ESPP only if and as long as it is permitted and feasible under the laws of the country in which you reside or to whose laws you are subject.'
            )
        ),

        $('<div class="offerClause"/>').append(
            $('<p class="text-justify"/>').html(
                'If the Committee grants you an RSU award, the grant will be a one-time benefit and all determinations with respect to future grants are at the sole discretion of the Committee. You acknowledge that, if Apple grants you any RSU award:'
            ),
            $('<p class="text-justify"/>').append(
                $('<ul style="list-style-type:none"/>').append(
                    $('<p class="list-type" style="padding-left:10px"/>').html(
                        'i. the grant of the RSU award is an exceptional, discretionary, one-time benefit and will not create any contractual or other right to receive future grants of RSU awards, or benefits in lieu of RSUs;<br>'
                    ),
                    $('<p class="list-type" style="padding-left:11px;text-indent:-18px"/>').html(
                        'ii. all determinations with respect to any future grants, including but not limited to, the times when awards will be granted, the number of shares subject to each award, and the time or times when each award will become vested will be at the sole discretion of Apple; and<br>'
                    ),
                    $('<p class="list-type" style="padding-left:11px;text-indent:-20px"/>').html(
                        'iii. the future value of the underlying shares will be unknown, indeterminable and cannot be predicted with certainty.<br>'
                    )
                )
            )
        ),
        $('<div class="offerClause">').append(
            $('<p class="text-justify"/>').html(
                'As a result of your participation in Apple’s stock plans, you may be subject to certain tax and/or legal consequences. You will be responsible to comply with any applicable legal requirements in connection with your participation in Apple’s stock plans and for any income tax and/or social insurance contribution obligations arising from the grant or vesting of RSUs, including any Employer obligations that Apple has determined may be legally transferred to you, and, if applicable, any obligations arising from the purchase of shares and the sale of any shares or the receipt of any dividends or dividend equivalents. You agree to seek advice from your personal accountant or tax advisor at your own expense regarding the tax implications of any RSU award granted to you or your participation in the ESPP.'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p class="text-justify"/>').html(
                'Apple may, in its sole discretion, decide to deliver any documents related to current or future participation in any Apple stock plan by electronic means. You hereby consent to receive such documents by electronic delivery and agree to participate in any Apple stock plan through an on-line or electronic system established and maintained by Apple or a third party designated by Apple.'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p class="text-justify"/>').html(
                'If you received this letter in a language other than English, you understand that the translated version of this letter is provided for your reference only. Where there is any discrepancy between the translated version and English version, the English version shall prevail. Apple stock plans and all other materials related to RSUs and the ESPP will be provided to you in the English language. By participating in the ESPP or accepting your RSU award, you confirm having read and understood the documents relating to the Apple stock plans. You acknowledge that it is your responsibility to understand each and all of the provisions of the Apple stock plans and other related materials.'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p class="text-justify"/>').html(
                'By your signature below: (1) you acknowledge that any RSUs granted to you in the future shall be subject to Apple’s current acceptance policy; and (2) you understand and agree that you will be deemed to have accepted the RSUs in accordance with the terms and conditions of the 2014 Plan as well as the terms and conditions of the RSU award agreement unless you expressly reject the RSUs by the date specified in the applicable award agreement.'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p class="text-justify"/>').html(
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
