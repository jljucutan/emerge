function fnView() {
    $("#markup1").html("").append(
        $('<div class="offerClause"/>').append(
            $('<p class="text-center"/>').html(
                '<strong><u>EMPLOYMENT AGREEMENT</u></strong>'
                ),
            $('<p/>').html('In the city of Montevideo, ' + fnConvertDateCustom($('#todate').val()) + ' by and between: <strong><u>AS PARTY OF THE FIRST PART</u></strong>, UBS Financial Services (Uruguay) S.R.L., (hereinafter “UBS” or “the Company”), domiciled at Ruta 8km. 17,500, Zonamerica-Edificio @ 1 Office 307, CP 91600, Montevideo, Uruguay, filed with the National Tax Office under number 21 678 209 0019 and with the Social Security Administration under number 5795014 and <strong><u>AS PARTY OF THE SECOND PART</u></strong>, ' + employee.First_Name + ' ' + employee.Last_Name + ', (hereinafter the “Employee”), bearer of identity card number ' + employee.National_ID +', domiciled at ' + employee.Address1 + ' ' + employee.Address2 + ' ' + employee.City + ' ' + employee.State + ' ' + employee.Zip +', Montevideo, Uruguay, who agree to enter into this employment contract under the following provisions:'
                ),


            $('<p class="spacer"/>').html(""),
            $('<p class="block"/>').html(
                '<strong><u>ONE</u> (Purpose)</strong>'
                ),

            $('<p/>').html(
                'The Company engages the services of the Employee to perform duties as a '+employee.Business_Title+'. '
                ),

            $('<p class="spacer"/>').html(""),
            $('<p class="block"/>').html(
                '<strong><u>TWO</u> (Trial period and payment upon termination)</strong>'
                ),
            $('<p/>').html(
                'UBS engages the services of the Employee on a trial basis for a period of 90 days as of this date. Within this term, the Company may revoke the contract without cause and the Employee shall not be entitled to collect any type of indemnification.'
                ),

            $('<p class="spacer"/>').html(""),
            $('<p class="block"/>').html(
                '<strong><u>THREE</u> (Base salary compensation)</strong>'
                ),
            $('<p/>').append(
                'The Company shall pay the Employee as base salary for ',
                genderTranslate('adjective', employee.Gender),
                ' work the gross annual sum of Uruguayan pesos ',employee.Base_Salary,'. You understand and agree that the outlined in base salary compensation is inclusive of the 13th month and vacation allowance remuneration. This sum shall be subject to the pertinent statutory deductions and withholdings.  Employee understands and accepts that during ',
                genderTranslate('adjective', employee.Gender),
                ' labor relationship with the Company, ',
                genderTranslate('pronoun', employee.Gender),
                ' can receive voluntary salary adjustments that, in all cases, will be on account of the mandatory adjustments established by Uruguayan Salary Boards.'
                ),

            (employee.Electronic_Money_Issuer_Name.length < 1) && $('<p/>').append(
                'According to Decree N° 263/2015, given that the Employee has not specified the Company a financial intermediary institution or issuer of electronic money for the payment of ',
                genderTranslate('adjective', employee.Gender),
                ' labor credits, the Employee is hereby notified that within 10 business days ',
                genderTranslate('pronoun', employee.Gender),
                ' shall choose a financial institution in order to be paid ',
                genderTranslate('adjective', employee.Gender),
                ' labor credits in a salary bank account, or through an electronic money issuer. Provided that the Employee chooses an institution or an issuer, within the aforementioned term, ',
                genderTranslate('pronoun', employee.Gender),
                ' shall file before the Company the documents provided by the institution, including the information identifying the person and the account or electronic money in order to pay the labor credits. If the Employee does not notify the Company within the aforementioned term, ',
                genderTranslate('pronoun', employee.Gender),
                ' will be paid ',
                genderTranslate('adjective', employee.Gender),
                ' labor credits in the salary account of ',employee.Bank_Name,' / through the electronic money issuer institution ',employee.Electronic_Money_Issuer_Name,', and will be entitled to change the institution only after one year of the bank account or electronic money setup.'
                ),

            (employee.Electronic_Money_Issuer_Name.length > 0) && $('<p/>').append(
                'According to Decree N° 263/2015, the Employee requests that all ',
                genderTranslate('adjective', employee.Gender),
                ' labor payments should be paid through the ',employee.Bank_Name,' / through electronic money issued by the Institution ',employee.Electronic_Money_Issuer_Name,'. Previously to the payment of ',
                genderTranslate('adjective', employee.Gender),
                ' labor credits, the Employee will notify the Company in writing specifying the chosen account.'
                ),

            (employee.Electronic_Money_Issuer_Name.length > 0 || employee.Bank_Name.length > 0) && $('<p/>').append(
                'According to Decree N° 263/2015, the Employee requests that all ',
                genderTranslate('adjective', employee.Gender),
                ' labor payments should be paid through the Bank ',employee.Bank_Name,' Account N° ',employee.Bank_Account_Number, ' / through the electronic money issuer institution ',employee.Electronic_Money_Issuer_Name,'.'
                ),

            $('<p class="spacer"/>').html(""),
            $('<p class="block"/>').html(
                '<strong><u>FOUR</u> (Incentive Compensation Award)</strong>'
                ),
            $('<p/>').html(
                'In addition to the base salary compensation, the Employee may be eligible for a discretionary incentive compensation award, ' + includingTargetBonus(employee.Target_Bonus_Year_1) +'which may take into account a variety of factors including, without limitation, financial results of UBS AG, the Wealth Management Division, and Employee`s business area, and discretionary judgments of individual performance and contributions to business results and objectives, as well as legal and/or regulatory restrictions, which may affect individual incentive compensation award decisions.  Incentive awards may be awarded in cash or in deferred instruments (which may include, without limitation, restricted shares, conditional future payments, or debt instruments) subject to certain vesting and/or forfeiture conditions, which may be linked to and conditioned upon a variety of factors including, without limitation, individual and UBS performance factors and will be subject to the terms and conditions of any such incentive award plan as UBS may implement, from time to time, in its sole and exclusive discretion.  A future incentive compensation award, if any, may be higher or lower in future years and remains in the sole and exclusive discretion of management.  This discretionary incentive compensation shall be subject to the pertinent statutory deductions and withholdings.'
                ),

            $('<p/>').append(
                'Subject to applicable law, incentive compensation awards are contingent upon Employee`s continued employment with UBS on the incentive compensation award payment date (‘Payment Date’), which is generally in or around mid-February, but not later than March 15th of each subsequent calendar year. Employee will not be considered ‘employed’ if ',
                genderTranslate('pronoun', employee.Gender),
                ' has given notice of termination prior to the Payment Date. '
                ),

         (employee.SMC_BonusTarget_Yes == "Y") &&
          $('<div/>').append(
            $('<p/>').html(
                'For the calendar year '+employee.Target_Year_1+', Employee will be eligible to be considered for a discretionary target bonus of gross USD '+employee.SMC_BonusTarget_Amount+' (“'+employee.Target_Year_1+' Target Bonus”).'
                ),

            $('<p/>').append(

                'There is no guarantee that Employee will receive a ',employee.SMC_Bonus_Year,' Target Bonus and it should not be construed as a guarantee or committed bonus. This will be paid or awarded in accordance with the applicable compensation plans in force on the day of payment. The amount of any Target Bonus may be adjusted upwards or downwards from the amount specified above and will be determined at the absolute discretion of UBS dependent on Employee`s conduct and the performance of ',
                genderTranslate('adjective', employee.Gender),
                ' business area, business division, UBS and the Employee. This does not however guarantee Employee any minimum bonus for future years or set an expectation for future bonuses.'
                ),

            $('<p/>').html(
                'Employee\'s right to receive the '+employee.SMC_Bonus_Year+' Target Bonus set forth in this Agreement is also subject to Employee not doing, on or before the date that Employee becomes eligible to receive payment, any of the following, which, in the opinion of UBS, is harmful to the interests of UBS, UBS AG or any of their subsidiaries or affiliates (collectively, ‘UBS Group’):'
                ),

            $('<ul/>').html('<li>Employee\'s performance is deemed to contribute substantially to the UBS Group or part of the UBS Group incurring significant financial losses; or</li>'
                ),
            $('<p class="spacer"/>').html(""),
            $('<ul/>').html('<li>Employee\'s performance is deemed to contribute substantially to a significant downward restatement of any published results of the UBS Group or any business division of the UBS Group; or</li>'
                ),
            $('<p class="spacer"/>').html(""),
            $('<ul/>').html('<li>Employee engages in conduct which results in or contributes substantially to significant reputational harm to the UBS Group; or</li>'
                ),
            $('<p class="spacer"/>').html(""),
            $('<ul/>').html('<li>Employee materially breaches or contributes substantially to a material breach of applicable legal and/or regulatory requirements; or</li>'
                ),
            $('<p class="spacer"/>').html(""),
            $('<ul/>').html('<li>Employee engages in conduct which results in or contributes substantially to a material breach of the Group’s applicable internal policies and procedures, including without limitation those policies in respect of risk management, compliance, disciplinary and any applicable supervisory practices.</li>'
                )
             ),
            $('<p class="spacer"/>').html(""),
            $('<p class="spacer"/>').html(""),
            $('<p class="block"/>').html(
                '<strong><u>FIVE</u> (Non-competition)</strong>'
                ),
            $('<p/>').append(
                'Employee acknowledges that, as a result of ',
                genderTranslate('adjective', employee.Gender),
                ' activity for UBS, ',
                genderTranslate('pronoun', employee.Gender),
                ' has an extensive knowledge of UBS customers and that the use of this knowledge in a manner that is inconsistent with the present clause can cause significant damage to UBS. In this context, during Employee’s employment relationship with UBS and upon ',
                genderTranslate('adjective', employee.Gender),
                ' ceasing to be employed by UBS, Employee understands and accepts that ',
                genderTranslate('pronoun', employee.Gender),
                ' will not for a period of 6 months from the date of such cessation, whether on ',
                genderTranslate('adjective', employee.Gender),
                ' own account or on behalf of any other person, firm or company:'
                ),


            $('<p class="spacer"/>').html(""),

            $('<ol/>').html(
                '<p>(i) Solicit or endeavor, directly or indirectly, to entice from UBS any person, firm or company who at any time during the period of 6 months immediately preceding Employee\'s date of cessation was a client, an employee or consultant of UBS, or</p>'
                ),

            $('<ol/>').html(
                '<p>(ii) Interfere or seek to interfere with any client relationship of UBS or the terms of such client arrangements. </p>'
                ),



            $('<p class="spacer"/>').html(""),
            $('<p class="block"/>').html(
                '<strong><u>SIX</u> (Benefits and Policies)</strong>'
                ),

            $('<p/>').html(
                'Employee will be eligible to participate in UBS employee benefit plans that will be available to the Employee. Detailed information about the benefit plans and about UBS Human Resources policies and programs will be provided to the Employee. '
                ),

            $('<p/>').append(
                'Employee agrees that ',
                genderTranslate('pronoun', employee.Gender),
                ' will abide by and adhere to all laws and rules and regulations of the various exchanges or other regulatory and/or self-regulatory organizations of which UBS or any of its affiliates or related entities are members, as well as all internal rules, regulations, policies and codes of conduct that UBS has established. In addition, Employee will be required to complete all training mandated by UBS, including but not limited to Workplace Sexual Harassment, Discrimination and Retaliation Prevention Training (to be completed within the first six (6) months of Employee’s employment), and several Compliance-related computer-based training courses, including courses dealing with the importance of confidentiality of UBS information and Anti-Money Laundering principles and procedures (some of these are required to be completed within the first thirty (30) days of Employee`s employment).'
                ),

            $('<p class="spacer"/>').html(""),
            $('<p class="block"/>').html(
                '<strong><u>SEVEN</u> (Consent to Data Storage and Processing)</strong>'
                ),
            $('<p/>').append(
                'Employee acknowledge that UBS operates worldwide through branches, business groups, affiliates and subsidiaries and that personnel data forms or employment records (which may include sensitive personal data) may be maintained and shared: (1) with such branches, business groups, affiliates and subsidiaries throughout the world; (2) with any third party performing functions, worldwide, on behalf of UBS; and/or (3) as required by law.  Employee consent to such holding and processing of data as a condition of ',
                genderTranslate('adjective', employee.Gender),
                ' employment.'
                ),

            $('<p/>').append(
                'Having been informed about the identity of the data controller, as well as the possibility and manner to exercise ',
                genderTranslate('adjective', employee.Gender),
                ' rights of accessibility, rectification, updating, inclusion and suppression of ',
                genderTranslate('adjective', employee.Gender),
                ' personal data, Employee hereby consents to the treatment of ',
                genderTranslate('adjective', employee.Gender),
                ' personal data for the purposes hereby stated.'
                ),

            $('<p class="spacer"/>').html(""),
            $('<p class="block"/>').html(
                '<strong><u>EIGHT</u> (Pre-employment process and licensing)</strong>'
                ),
            $('<p/>').html(
                'Employment will be contingent upon satisfactory completion of all pre-employment and post-employment processing, according to Uruguayan applicable law.'
                ),

            $('<p/>').html(
                '<strong><u>NINE</u> (Protection of Confidential Information)</strong>'
                ),

            $('<p/>').append(
                'The Employee must maintain absolute confidentiality regarding matters entrusted to same and any act, deed, procedure or any other information that may come into ',
                genderTranslate('adjective', employee.Gender),
                ' possession by reason of the Employee’s functions, particularly all information, procedures, trade and industrial secrets, etc., that are protected by Law, including following termination of the employment relationship.  '
                ),

            $('<p/>').html(
                'The parties agree that confidential or privileged information shall include all information provided mutually, in oral, written, electronic or other form, that is directly or indirectly related to the activities of the Company or its clients; likewise included in this category are the access codes, passwords or PINs that the Company may assign to the Employee.  '
                ),

            $('<p/>').html(
                'The Employee acknowledges that any intellectual work that the Employee may engage in during the employment relationship is the exclusive property of the Company, as are, in general, all documents and verbal information that the Employee may produce or receive by virtue of the employment relationship, including by way of example and without limitation: procedures manuals, articles, studies, pamphlets, publications, drawings, tracings, photographs, and designs. Hence the Employee agrees to maintain same in proper condition, to not remove them from the workplace, except as required for job necessities and upon authorization of the Company, and to return same whenever the Company so requires or upon termination of the employment relationship for any reason whatsoever.    '
                ),

            $('<p/>').html(
                'The Employee acknowledges that, notwithstanding the above, the following shall be the exclusive property of the Company: (I) discoveries, inventions and developments, including knowledge concerning unsuccessful approaches; (II) scientific or engineering information, including information on applications for patents and trademarks, materials, processes, equipment apparatus designs, engineering aides, installation manuals, software, architecture and logic, with software being understood as any executable program, recorded in any form and on any medium; (III) information on technical handling, such as proposals, programs and development of components and analysis of development areas; (IV) information in relation to regulatory matters; (V) commercial information, business proposals covering new projects, financial data, market studies, construction plans, new products, strategies, designs and logos, business trends, sales details, sales prices, cost and earnings data, research and development information or ideas, plans for marketing or new products and information on possible acquisitions, disposals and investments, market information, information on profits or information on significant transactions; (VI) personnel information such as salaries, job assignments, skills and merit reviews; (VII) lists of clients or suppliers of companies and their affiliates. '
                ),

            $('<p/>').append(
                'The Employee agrees to use exclusively to the benefit of the Company all confidential information of which the Employee has knowledge, and consequently agrees to not use same to ',
                genderTranslate('adjective', employee.Gender),
                ' own benefit or that of third parties, or to disclose to any person, company, firm, individual or organization, directly or indirectly, any trade secrets, confidential information and/or intellectual or industrial property. '
                ),


            $('<p class="spacer"/>').html(""),
            $('<p class="block"/>').html(
                '<strong><u>TEN</u> (Representations and Warranties)</strong>'
                ),
            $('<p/>').append(
                'Employee represents and warrants that: (1) ',
                genderTranslate('pronoun', employee.Gender),
                ' will not possess as of ',
                genderTranslate('adjective', employee.Gender),
                ' Start Date and during ',
                genderTranslate('adjective', employee.Gender),
                ' employment with UBS, any material, tangible, confidential or proprietary information, including documents, files, disks, or other materials, belonging to ',
                genderTranslate('adjective', employee.Gender),
                ' former employer or its affiliates; (2) as of ',
                genderTranslate('adjective', employee.Gender),
                ' Start Date, Employee has not solicited any employees or clients of ',
                genderTranslate('adjective', employee.Gender),
                ' former employer or its affiliates to change their association with ',
                genderTranslate('adjective', employee.Gender),
                ' former employer or its affiliates; (3) Employee is not subject to any restrictive covenant, notice of termination requirement, non-competition or non-solicitation provision with any former employer or any agreement that prevents Employee entering into employment with UBS and that Employee conducted a due diligence review of copies of all agreements ',
                genderTranslate('pronoun', employee.Gender),
                ' may have entered into with ',
                genderTranslate('adjective', employee.Gender),
                ' former employer to ensure that this is correct; (4) Employee has not made any material misrepresentation or omission in the course of ',
                genderTranslate('adjective', employee.Gender),
                ' application to UBS regarding employment or ',
                genderTranslate('adjective', employee.Gender),
                ' ability to perform the position offered; and (5) no representations were made to Employee concerning this employment agreement  or the terms or conditions of the same. '
                ),

            $('<p class="spacer"/>').html(""),
            $('<p class="block"/>').html(
                '<strong><u>ELEVEN</u> (Entire Agreement)</strong>'
                ),
            $('<p/>').html(
                'This employment contract contains the entire understanding and agreement between the parties concerning the subject matter hereof, and supersedes all prior agreements, understandings, discussions, negotiations, and undertakings, whether written or oral, between the parties with respect thereof. No waiver by either party of any breach by the other party of any condition or provision contained in this agreement to be performed by such other party shall be deemed a waiver of a similar or dissimilar condition or provision at the same or any prior or subsequent time. Any waiver must be in writing and signed by two authorized officers of UBS. '
                ),

            $('<p class="spacer"/>').html(""),
            $('<p class="block"/>').html(
                '<strong><u>TWELVE</u> (Confidentiality of this employment agreement) </strong>'
                ),

            $('<p/>').append(
                'Employee agrees to keep the terms of this employment agreement strictly confidential in whole and in part and further agree not to disclose the terms of this agreement to any person or entity except as permitted by law or legal process, and except for disclosure ',
                genderTranslate('adjective', employee.Gender),
                ' attorneys, accountants and/or immediate family, provided that those individuals are advised of the confidential nature of such disclosure. Notwithstanding the foregoing, if Employee disclose the contents of this agreement other than as permitted by this paragraph without prior authorization, UBS reserves the right to rescind all of the terms of this agreement and subject Employee to disciplinary action, including termination of ',
                genderTranslate('adjective', employee.Gender),
                ' employment. '
                ),

            $('<p class="spacer"/>').html(""),
            $('<p class="block"/>').html(
                '<strong><u>THIRTEEN</u> (Domiciles and notices)</strong>'
                ),

            $('<p/>').html(
                'The parties constitute special domicile at those indicated as theirs in the preamble, accepting as of now the collated telegram as feasible means of notification. '
                ),

            $('<p class="spacer"/>').html(""),
            $('<p class="block"/>').html(
                '<strong><u>FOURTEEN</u> (Consent)</strong>'
                ),

            $('<p/>').html(
                'The parties execute and sign this agreement in two identical counterparts at the place and on the date first set out above. '
                ),

                $('<p/>').append(
                  $('<span/>').html(employee.First_Name + ' ' + employee.Last_Name + '<br> &nbsp; ')
                ),

                $('<p/>').append(
                  $('<span/>').html("_____________________________")
                ),

            $('<p/>').append(
                $('<span/>').html("Alejandro Plevak  - UBS Financial Services (Uruguay) S.R.L. <br> &nbsp;")
                ),

                $('<p/>').append(
                  $('<span/>').html("_____________________________")
                )
            )
); 

}


function includingTargetBonus(verbiage){
  if((/YES/i).test(verbiage) || (/Y/i).test(verbiage)){
      return "including a target bonus, ";
    } else {
      return "";
    }
}

function fnConvertDate(eventDate) {
    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var year = d.getFullYear(),
    month = d.getMonth(),
    n_date = d.getDate(),
    day = d.getDay();
    return parseInt(n_date) + ' ' + months[month] + ' ' + year;
}

function fnConvertDateURUG(eventDate) {
    var d = new Date(eventDate);
    var monthsES = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];
    var year = d.getFullYear(),
    month = d.getMonth(),
    n_date = d.getDate(),
    day = d.getDay();
    return parseInt(n_date) + ' de ' + monthsES[month] + ' de ' + year;
}

function fnConvertDateCustom(eventDate) {
    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var year = d.getFullYear(),
    month = d.getMonth(),
    n_date = d.getDate(),
    day = d.getDay();
    return parseInt(n_date) + ' day of ' + months[month] + ', ' + year;
}




function fnConvertFullDate(eventDate) {

    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var year = d.getFullYear(),
    month = d.getMonth(),
    n_date = d.getDate(),
    day = d.getDay();

    return days[parseInt(day)] + ', ' + months[month] + ' ' + parseInt(n_date) + ', ' + year;

}

function fnConvertFullDateViaTZone(eventDate) {

    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var localoffset = -(d.getTimezoneOffset()/60);
    var destoffset = +4; 
    var offset = destoffset-localoffset;
    var e = new Date( new Date(eventDate).getTime() + offset * 3600 * 1000)

    var year = e.getFullYear(),
    month = e.getMonth(),
    n_date = e.getDate(),
    day = e.getDay();

    return days[parseInt(day)] + ', ' + months[month] + ' ' + parseInt(n_date) + ', ' + year;

}

function genderTranslate(useCase, gender) {
    if (!useCase) {
        throw new Error("Use case is required. It's either pronoun or adjective.")
    }
    switch (gender) {
        case "M":
        if (useCase == 'pronoun') {
            return "he";
        }
        if (useCase == 'adjective') {
            return "his";
        }
        break;
        case "F":
        if (useCase == 'pronoun') {
            return "she";
        }
        if (useCase == 'adjective') {
            return "her";
        }
        break;
        default:
        if (useCase == 'pronoun') {
            return "he/she";
        }
        if (useCase == 'adjective') {
            return "his/her";
        }
        break;
    }
}

function fnTime_And_Half(amount, rate) {
    amount = (amount.indexOf(',') != -1) ? amount.split(',').join('') : amount;
    var total = (parseFloat(amount) + parseFloat((parseFloat(amount) * rate)));
    return formatCurrency(total);
}

function returnDate() {
  var dt = new Date();
  var mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dys = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var rdt = dt.setDate(dt.getDate() + 3);
  var drt = new Date(rdt);
  var mm = drt.getMonth(),
  dd = drt.getDate(),
  yyyy = drt.getFullYear();
  day = drt.getDay();

  return dys[parseInt(day)] + ', ' + mon[mm] + ' ' + parseInt(dd) + ', ' + yyyy;
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
    _fnAssignValue('Full_Name', name);

    if ($('#todate').val().length < 1) {
        let date = new Date();
        $('#todate').val(date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate());
    }

    // render template
    fnView();

    // completed letter
    if (!$("input.calendar_button").length) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

var imgHeader = "<img src='' />";
var imgDISignature = "<img src='' />";
var imgASSSignature = "<img src='' />";

//Create an array of info to pass to complete the offer letter
//0 for images sending an image tag, 1 for sections of text sneding the ID of the field that holds the HTML.
var arrParts = [
[1,'hidden_pg'],
[1,'hidden_pg2'],
[1,'hidden_pg3']
];
}
});
