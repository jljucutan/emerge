// Equity Letter International
function fnView() {
    $("#markup").html("").append(
        $('<div class="offerClause"/>').append(
            $('<div/>').append(
        $('<p/>').html(
          '<strong>Re: Stock-Based Awards of PayPal Holdings, Inc.</strong>'
        ),
        $('<p/>').append(
          $('<mark/>').html(employee.Current_Long_Date)
        ),
        $('<p/>').append(
          $('<mark/>').html(employee.Full_Legal_Name ? employee.Full_Legal_Name : employee.Full_Name),
          $('<br>'),
          $('<mark/>').html(employee.Address1),
          $('<br>'),
          employee.Address2 &&
          $('<mark/>').html(employee.Address2 + '<br>'),
          $('<mark/>').html(employee.Zip),
          ' ',
          $('<mark/>').html(employee.City)
        ),
        $('<p/>').html(
          'Dear <mark>' + (employee.Preferred_First_Name ? employee.Preferred_First_Name : employee.First_Name) + '</mark>,'
        ),
        $('<p/>').html(
          'We are pleased to welcome you to the family of PayPal Holdings, Inc. ("PayPal") companies. As a new member of the PayPal family and an employee of <mark>' + employee.Entity_Name + '</mark> (the "Employer"), we are pleased to inform you that it will be recommended to the Compensation Committee of the Board of Directors of PayPal Holdings, Inc. or its delegate as applicable (the "Committee") that you be granted an award of restricted stock units (“RSUs”) as described in the following paragraphs. The grants are described below in US dollar value. The number of shares to be granted will be converted from the US dollar value, pursuant to PayPal policy as of the date of grant. Subject to Committee approval, the anticipated grant date of this award of RSUs is on the 15th of the month following the month of your start date.'
        ),
        $('<p/>').html(
          'It will be recommended to the Committee that you be granted an award of RSUs valued at USD $<mark>' + employee.NEW_HIRE_REST_STOCK_UNITS + '</mark> to be granted under and subject to the terms and conditions of PayPal’s current equity plan and related programs (the “Plans”) as well as the terms and conditions of the RSU award agreement (which will be provided to you as soon as practicable after the grant date). Please note that PayPal can grant the RSUs to you only if and as long as it is permitted and feasible under the laws of the country in which you reside.'
        ),
        $('<p/>').html(
          'Generally, the award of RSUs will vest and become non-forfeitable (assuming your continued employment with a PayPal company on each vesting date) over three years as follows: 1/3 of the shares subject to the RSUs will vest on each anniversary of the grant date, subject to applicable taxes and withholdings. However, in its discretion, PayPal may impose a different vesting schedule for the RSUs if it determines that a different vesting schedule is required or recommended to comply with local law or is advisable to take advantage of any favorable tax regime available in your country.'
        )
            ),
      (parseInt(employee.Supplemental_RSU) > 0) &&
            $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Supplemental RSU Grant"/>').append(
        $('<p/>').html(
          'It will also be recommended to the Committee that you be granted a supplemental RSU award valued at USD $<mark>' + employee.Supplemental_RSU + '</mark> to be granted under and subject to the terms and conditions of the Plans as well as the terms and conditions of the RSU award agreement (which will be provided to you as soon as practicable after the grant date). Subject to Committee approval, the anticipated grant date of this award of RSUs is on the 15th of the month following the month of your start date. Generally, the supplemental award of RSUs will vest and become non-forfeitable (assuming your continued employment with a PayPal company on each vesting date) over three years as follows: 1/3 of the shares subject to the RSUs will vest on each anniversary of the grant date, subject to applicable taxes and withholdings; provided, however, in its discretion, PayPal may impose a different vesting schedule for the RSUs if it determines that a different vesting schedule is required or recommended to comply with local law or is advisable to take advantage of any favorable tax regime available in your country.'
        )
            ),
            $('<div/>').append(
        $('<p/>').html(
          'You should be aware that PayPal, in its sole discretion, may suspend, modify, cancel or terminate the Plans at any time without any compensation to you or the other participating employees. You acknowledge that your participation in the Plans is entirely voluntary, the benefits afforded under the Plans do not form an employment contract with PayPal or any of its affiliates, and the grant of the RSUs is a one-time benefit which will not give you a right to any future grants under the Plans. Furthermore, you should know that the RSUs and any shares acquired under the Plans pursuant to the vesting of the RSUs are an additional benefit that may be given to you by PayPal and not by the Employer or any other of PayPal’s affiliates. Therefore, the RSUs, and any shares acquired under the Plans pursuant to the vesting of the RSUs, are not part of your employment relationship with the Employer and are completely separate from your salary or any other remuneration or benefits provided to you by the Employer. This means that any gain you realize from the RSUs will not be included if and when any bonuses, termination compensation, severance payments, payments during a notice period or indemnity that you may receive from your employer are calculated.'
        ),
        $('<p/>').html(
          'If you receive RSUs, you will be required to sign the grant materials which PayPal will provide to you. Also, PayPal may ask you to sign other agreements or documents which may be required under U.S. or local laws to receive the RSUs and to receive any shares under the Plans pursuant to the vesting of the RSUs.'
        ),
        $('<p/>').html(
          'Additionally, if RSUs are granted to you, you will be responsible to comply with any applicable legal requirements in connection with your participation in the Plans. You will also be responsible for any tax or social insurance contribution obligations arising from the RSUs and any shares acquired under the Plans pursuant to the vesting of the RSUs, including any Employer obligations that  has determined may legally be transferred to you and regardless of any tax and social insurance contribution withholding and/or reporting obligation of PayPal or the Employer. You agree to seek advice from your personal accountant or tax advisor at your own expense regarding the tax implications of any RSUs granted to you. Neither PayPal nor the Employer will provide you with any financial, investment or tax advice regarding the RSUs and any shares acquired under the Plans pursuant to the vesting of the RSUs.'
        ),
        $('<p/>').html(
          'Finally, all disputes arising under or relating to the award of RSUs or the provisions of this letter shall be governed by and construed in accordance with U.S. federal and California state law (but not including the choice of law rules thereof). For purposes of litigating any dispute that arises directly or indirectly from the RSU award or the provisions of this letter, you and PayPal hereby submit to and consent to the exclusive jurisdiction of the State of California and agree that such litigation shall be conducted only in the courts of the County of Santa Clara, California, or the federal courts for the United States for the Northern District of California, and no other courts, where the RSU grant, if any, shall be made and/or is to be performed.'
        ),
        $('<p/>').html(
          'Once again, we are pleased to welcome you to the PayPal family.'
        ),
        $('<p/>').html(
          'Sincerely,'
        )
            ),
            $('<div/>').html(
        '<img src="' + employee.Signature_Link + '" border="0" />'
            )
    )
        // end append
    );
  
    $("#markup2").html("").append(
        // OfferClause 2
        $('<div class="offerClause2">').append(
            $('<div/>').append(
        $('<p/>').html(
          'Dan Schulman<br>President and CEO, PayPal Holdings, Inc.'
        ),
        $('<p/>').html('')
            )
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
