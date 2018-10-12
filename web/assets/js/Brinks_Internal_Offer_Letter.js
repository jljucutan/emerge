function fnView() {
    $("#markup1").html("").append(
        $('<header class="row mb-xl offerClause"/>').append(
            $('<div class="col-lg-2 col-md-6 col-sm-6 col-xs-12"/>').append(
                $('<div id="srt_eform_logo" class="center"/>').html('<img src="' + data.company.LOGO + '" alt="" class="img-responsive">')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append(
                    fnConvertFullDate($('#today').val())
                ),
                $('<address/>').append(
                    data.employee.EMPLOYEE_NAME + '<br>',
                    data.employee.EMPLOYEE_ADDRESS + '<br>',
                    data.employee.EMPLOYEE_CITY + ', ' +
                    data.employee.EMPLOYEE_STATE + ', ' +
                    data.employee.EMPLOYEE_ZIP
                )
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append(
                    'Dear ' + data.employee.EMPLOYEE_FIRST_NAME 
                ),
                $('<p/>').append(
                    'You will report directly to ' + data.employee.EMPLOYEE_HIRING_MANAGER + '.  The acceptance of this conditional offer does not alter the at will nature of your employment, which may be terminated at any time by you or the company.' 
                )
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p class="ml-xl"/>').append(
                    'Position:' + data.employee.EMPLOYEE_POSITION_TITLE +
                    '<br>Job Code:' + data.employee.EMPLOYEE_JOB_CODE +
                    '<br>Location:' + data.employee.EMPLOYEE_LOCATION +
                    '<br>Department:' + data.employee.EMPLOYEE_DEPARTMENT +
                    '<br>Pay Rate:' + data.employee.EMPLOYEE_PAY_RATE +
                    '<br>Pay Frequency:' + data.employee.EMPLOYEE_PAY_FREQUENCY +
                    '<br>Start Date:' + data.employee.EMPLOYEE_START_DATE +
                    '<br>Reporting to:' + data.employee.EMPLOYEE_HIRING_MANAGER
                )
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append(
                    'You be eligible for Brink’s benefits, as well as the 401(k) savings plan in accordance with the plan provisions, for which you qualify based on your employment status.  Other benefits such as vacation, holidays, etc., are also subject to your employment status.   You will continue to accrue vacation time based upon your tenure with the company.  Subsequent years of vacation entitlement will be determined in accordance with the Company’s Vacation Policy.' 
                ),
                $('<p/>').append(
                    'As a pre-condition to your qualification to perform the duties of the above-referenced position, which will involve exposure to confidential and/or proprietary information belonging to the Company, you will be required to execute the attached Confidentiality, Non-Competition Agreement and Employee Arbitration Agreement. If you have any questions about either agreement, please contact me as soon as possible.' 
                )
            )
        )
    );
}

function fnConvertFullDate(eventDate) {

    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDay();
    var ordinalDate = '';
    var j = d.getDate() % 10;
    var k = d.getDate() % 100;
    if (j == 1 && k != 11) {
        ordinalDate = d.getDate() + "st";
    }
    else if (j == 2 && k != 12) {
       ordinalDate = d.getDate() + "nd";
    }
    else if (j == 3 && k != 13) {
       ordinalDate = d.getDate() + "rd";
    }
    else{
        ordinalDate = d.getDate() + "th";;
    }
    return ordinalDate + ' of ' +  months[month] + ', ' + year;
}

$(document).on('ready',function() {

    // set contract date to current date
    $('#today:not([readonly])').val(new Date());

    // render template
    fnView();

    // completed letter
  if ($("#sv").prop('readonly')) {
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
    else{
        makeOfferLetter('hidden_pg','offerClause');
        makeOfferLetter('hidden_pg2','offerClause2');
    }
});

var data = {
    employee: {
        EMPLOYEE_NAME: "",
        EMPLOYEE_ADDRESS: "",
        EMPLOYEE_CITY: "",
        EMPLOYEE_STATE: "",
        EMPLOYEE_ZIP: "",
        EMPLOYEE_FIRST_NAME: "",
        EMPLOYEE_HIRING_MANAGER: "",
        EMPLOYEE_POSITION_TITLE: "",
        EMPLOYEE_JOB_CODE: "",
        EMPLOYEE_LOCATION: "",
        EMPLOYEE_DEPARTMENT: "",
        EMPLOYEE_PAY_RATE: "",
        EMPLOYEE_PAY_FREQUENCY: "",
        EMPLOYEE_START_DATE: "",
        EMPLOYEE_REPORTING_TO: ""
    },
    company: {
        LOGO: "<$link;/main/RedCarpet/FormTemplates/California_External_Salary_Exempt_Offer_Letter/img/brinks_logo_grey.jpg>"
    }
};
