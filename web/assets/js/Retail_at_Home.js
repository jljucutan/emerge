// Retail at Home Offer Letter
function fnView() {
    $("#markup").html("").append(
        // Company Logo
        $('<div class="col-lg-12"/>').append(
            $('<div class="offerClause"/>').append(
                $('<div id="srt_eform_logo" class="text-right"/>').html('<img src=' + company.Logo + '>')
            )
        ),
        // OfferClause 1
        $('<div class="offerClause">').append(
            $('<p/>').html("EEID: " + employee.Employee_Hrisid),
            $('<p/>').html("&nbsp;"),
            $('<p/>').html("Dear " + ((employee.Preferred_Name) ? employee.Preferred_Name : employee.First_Name) + ",")
        ),

     // [Include if Standard] 
        
        $('<div class="offerClause"/>').append(

            $('<p/>').html(
                'The Retail at Home Advisor program has continually evolved since the beginning of the COVID-19 pandemic. Throughout, the health and safety of our team members has been our highest priority.'
            ),

            $('<p/>').html(
                'There are team members who cannot yet return to their home stores due to approved medical accommodations or other approved reasons. To provide ongoing support, we will be offering those team members the opportunity to participate in the Retail at Home Advisor Program.'
            ),

            $('<p/>').html(
                'From August 1, 2022, new eligible participants will participate in the program for a maximum period of one year.'
            ),

            $('<p/>').html(
                'Participation in the program will become your day-to-day role'
            ),

            $('<p/>').html(
                'You will continue to stay connected to your Store Team, while prioritizing your experience in Retail Customer Service'
            ),

            $('<p/>').html(
                'This letter and the guidelines that follow outline the terms and conditions of your temporary assignment while participating in the Retail at Home Advisor Program.'
            ),

            $('<p/>').html(
                '<strong>Terms and Conditions</strong>'
            ),

            $('<p/>').html(
                'In this assignment, you will remain an employee of Apple, under the terms of your existing offer letter. The details of your temporary role are as follows:'
            ),

            $('<p/>').append(
                $('<span/>').html(
                    '<b>Reporting to:</b> ' + employee.Hiring_Manager + '<br>'
                ),
                
                (employee.Policy_Acknowledgement_Location == 'Home Office')  &&
                $('<span/>').html(
                    '<b>Location:</b> Home Office<br>'
                ),
             (employee.Policy_Acknowledgement_Location == 'Retail Store')  &&
                $('<span/>').html(
                    '<b>Location:</b> ' + employee.Retail_Store + '<br>'
                ),
             (employee.Policy_Acknowledgement_Location == 'Apple Office')  &&
                $('<span/>').html(
                     '<b>Location:</b> Apple Office<br>'
                ),
             (employee.State != '')  &&
                $('<span/>').html(
                     '<b>Home State:</b> ' + employee.State + '<br>'
                ),
             (employee.Province != '')  &&
                $('<span/>').html(
                     '<b>Home Province:</b> ' + employee.Province + '<br>'
                ),
                $('<span/>').html(
                    '<b>STD Weekly Hours during Assignment:</b> ' + employee.DE_Time_Type + '<br>'
                ),
                $('<span/>').html(
                    '<b>Length of Temporary Assignment:</b>Not to exceed 12 months from August 1, 2022.<br><br>'
                )
            ),

            $('<p/>').html(
                '<strong>Salary and Benefits</strong>'
            ),

            $('<p/>').html(
                'During this assignment you will continue to receive your current base salary and any salary increases will be administered according to the compensation policies and guidelines to your location.'
            ),
            
            $('<p/>').html(
                'To ensure you are paid accurately for the hours you work, make sure that you submit all hours worked in the TIME app. Please consult the People Website article entitled “How Your Pay Works”  or speak with your People Business Partner if you have questions about what qualifies as time worked.'
            ),
            $('<p/>').html(
                'All the other employment terms will remain the same during your assignment.'
            ),
            $('<p/>').html(
                '<strong>Conditions</strong>'
            ),
            $('<p/>').html(
                'Apple reserves the right, in its full discretion, to modify the terms and conditions of this temporary assignment, including the assistance or benefits provided pursuant to any applicable Apple guidelines, policies or plans. Any modifications to the terms of this and assignment must be in writing and approved by Apple. Apple reserves the right to terminate this program early if needed and will provide participants with 30 days notice whenever practicable.'
            ),
            $('<p/>').html(
                 'Program eligibility will be reviewed on a regular basis. If eligibility criteria is not met or if you are not adequately performing the duties of your role, you will be exited from the program. You will be expected to return to your home store or partner with your leadership team for an alternate solution.'
            ),
            $('<p/>').html(
                '<strong>Performance and Conduct</strong>'
            ),
            $('<p/>').html(
                'During your assignment you will be held accountable to performance and conduct standards across Apple'
            ),
            $('<p/>').html(
                'You will have a leader to report to during your assignment.  They will support you through training and provide ongoing feedback and coaching to support your development and to ensure you are successful in meeting the performance and productivity expectations of the role.'
            ),
            $('<p/>').html(
                'You will continue to be regularly scheduled for connections with your existing store team.'
            ),
            $('<p/>').html(
                '<strong>Temporary Work from Home Acknowledgment for Apple Retail Employees</strong>'
            ),
            $('<p/>').html(
                'As an Apple employee, you are responsible for understanding, abiding by, and staying current on Apple policies and guidelines, including, but not limited to:'
            )
        ),

        $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 bordered"/>').html(
            '<a href="https://people.apple.com/US/en/subtopic/406" target="_blank"><strong>Business Conduct</strong></a>'
        ),
        $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 bordered bordered-left-0 bordered-top-small-0"/>').html(
            '<a href="https://people.apple.com/US/en/subtopic/415" target="_blank"><strong>Employee Use of Electronic Systems and Communication</strong></a>'
        ),
        $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 bordered bordered-left-0 bordered-top-small-0"/>').html(
            '<a href="https://people.apple.com/US/en/subtopic/511" target="_blank"><strong>Social Media and Online Communications</strong></a>'
        ),
        $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 bordered bordered-left-0 bordered-top-small-0"/>').html(
            '<a href="https://people.apple.com/US/en/subtopic/845" target="_blank"><strong>Workplace Searches and Privacy</strong></a>'
        ),
        $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 bordered bordered-top-0"/>').html(
            '<a href="https://ehs.apple.com/ehs/index.cfm/ergonomics/" target="_blank"><strong>Home Office Ergonomic Guidelines</strong></a>'
        ),
        $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 bordered bordered-top-0 bordered-left-0"/>').html(
            '<a href="https://people.apple.com/US/en/subtopic/403" target="_blank"><strong>Meal and Rest Periods</strong></a>'
        ),
        $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 bordered bordered-top-0 bordered-left-0"/>').html(
            '<a href="https://people.apple.com/US/en/subtopic/107" target="_blank"><strong>Reporting Time Worked</strong></a>'
        ),
        $('<div class="hidden-xs hidden-sm hidden-md col-lg-3 bordered bordered-top-0 bordered-left-0"/>').html(
            '&nbsp;'
        ),
        $('<p/>').html(
            '&nbsp;'
        )
        // end append

    );

    $("#markup2").html("").append(
        // Company Logo
        $('<div class="offerClause2"/>').append(
            (employee.Policy_Acknowledgement_Location == 'Home Office')  &&
            $('<p/>').html(
                '<strong>Home Office Address</strong>: You will work from the location agreed upon between you and Apple as listed on myPage. Your home work location must be the home you live in and in the same state your home store resides in. To maintain the confidentiality of customer records and Apple proprietary information this location cannot be an office space leased or rented from a third party. <strong> Any change in work location must be pre-approved by your manager and People Business Partner.</strong>'
            ),
            $('<p/>').html(
                'If you have questions or concerns about meeting work from home requirements for the duration of your assignment, or if circumstances change during your assignment, immediately partner with your Store Leader or People Business Partner.'
            ),
            $('<p/>').html(
                'Any failure to inform and obtain approval for work location change could result in disciplinary action up to an including separation from employment.'
            ),
            $('<p/>').html(
                'While working from home, you must be accessible via email, chat, and phone during the hours you are scheduled to work.  It is important to follow Apple policies and procedures for meal and rest periods, sick days, vacation, and other absences.  Your schedule may be subject to change based on business need.   You will be scheduled in line with normal store practices, based on your availability, approved time off and customer demand.'
            )
        )
    );

   $("#markup3").html("").append(
        // Company Logo
        $('<div class="offerClause3"/>').append(
            $('<p/>').html(
                '<strong>Availability and Schedule</strong>: Schedules for the Retail at Home Advisor program are created by the RPO team and will follow normal store practices based on availability, approved time away and customer demand. Team members’ active availability in WorkJam and Kronos will be used to create schedules, and should be aligned with the minimum availability requirements outlined in the Retail policy.'
            ),
            $('<p/>').html(
                '<strong>Equipment & Supplies</strong>:'
            ),
            $('<p/>').html(
                'When working from your home office location, to facilitate your ability to work from home, (to the extent it has not already) Apple will provide the following:'
            ),
            $('<ul/>').append(
                $('<li/>').html(
                    'Equipment necessary to perform your job (computer, mouse, keyboard, headset)'
                ),
                $('<li/>').html(
                    'General office supplies as needed'
                )
            ),
            $('<p/>').html(
                'The equipment provided will remain the property of Apple and must be returned to Apple upon request or if you leave Apple.  You must maintain the equipment in good working order and follow applicable Apple procedures if maintenance and repairs are required. In the event of damage, loss of equipment or a system malfunction, you should notify your manager who will decide whether replacement equipment or an alternative system should be used.'
            ),
            $('<p/>').html(
                '<strong>The use of the equipment and related systems is restricted to you, and no other member of your household or guests are permitted to use the equipment for any purpose.</strong>'
            ),
            $('<p/>').html(
                'If you willfully fail to return Apple’s equipment at the end of your employment, Apple may deem you ineligible for rehire.'
            ),
            $('<p/>').html(
                'Use of the equipment and related systems, as well as the data stored or accessible by means of the equipment and systems, will remain subject to Apple policies, including, but not limited to, the “<a href="https://people.apple.com/US/en/subtopic/415" target="_blank">Employee Use of Electronic Systems and Communications</a>” and “<a href="https://infosec.apple.com/guidance/policies/all/overview/" target="_blank">Information Security</a>” policies.'
            ),
            $('<p/>').html(
                '<strong>Monitoring and Data Access</strong>: Please note that Apple may access, search, monitor, archive, and delete Apple data stored on all of its property, as well as non-Apple property, if used for Apple business or if used for accessing Apple data, servers, or networks. This includes all data and messages sent, accessed, viewed, or stored (including those from iCloud, Messages, or other personal accounts) using Apple equipment, networks, or systems. This means that you have no expectation of privacy when using Apple-provided equipment and/or Apple’s communication systems.'
            ),
            $('<p/>').html(
                '<strong>Expenses</strong>: When working from your home office location, reimbursable expenses may include, but are not limited to the following:'
            ),
            $('<ul/>').append(

                $('<li/>').html(
                    'Reimbursement of $23.08 per bi-weekly pay period, paid out once monthly in arrears, to assist with internet expenses;'
                )
            ),
            $('<p/>').html(
                'You must obtain approval from your manager to be reimbursed for other business expenses that might arise before incurring the expense. Reimbursement for equipment services and office supplies will be in accordance with Apple’s Finance Policy. For more specific information on reimbursable expenses for your role, reach out to your manager.'
            ),
            $('<p/>').html(
                '<strong>Risk Management</strong>: Claims associated with the theft, loss or damage of Apple-owned equipment in your home is not covered by Apple’s insurance program and replacement and repair expenses related to these areas will be applied to your department’s budget. Claims and costs associated with the theft, loss or damage to your personal equipment or property is your sole responsibility. It is your responsibility to immediately inform your leader if your equipment is lost, damaged, or stolen.  Failure to do so could result in disciplinary action up to and including separation from employment.'
            ),
            $('<p/>').html(
                '<strong>Work Space/Safety</strong>: Detailed information on how to create an effective home working environment can be found in the program participant guide.'
            ),
            $('<p/>').html(
                '<strong>Policies</strong>: You are responsible for understanding and complying with all Apple policies and procedures, including but not limited to, those set forth in Apple’s Business Conduct Policy. Information regarding Apple’s policies can be obtained from your manager and from the Apple internal website.'
            ),
            $('<p/>').html(
                '<strong>Reporting Time Worked</strong>: You are responsible for accurately recording all time worked and you must not perform any work for Apple “off-the-clock” (unpaid). In addition to the time spent on work-related calls, e-mail, and Slack or chat, “time worked” also includes the time spent preparing to work such as logging on to the computer and other work related activities. It also includes logging off the computer.'
            ),
            $('<p/>').html(
                '<strong>Terms of Employment</strong>: These guidelines do not constitute a contract of employment, either expressed or implied. Your employment relationship with Apple is at-will which means that either Apple or you can terminate the employment relationship at any time, for any reason, with or without notice.'
            ),
            $('<p/>').html(
                '<strong>Start-up Process</strong>: When working from your home office location, you must agree to use the autostart/shutdown feature in Mac OS X on your  work computer and understand that use of this feature is mandatory. Work is only to be done using your Apple user account, and you are required to log out whenever away from your iMac for privacy and security reasons.'
            )

        )
        
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
    _fnAssignValue('Full_Name', name);


    // override Employee Profile Fields
    // ($(".expectedStartDate").attr("value")) ? employee.Start_Date = $(".expectedStartDate").attr("value"): '';

    // render template
    fnView();

    // $('.expectedStartDate').datepicker()
    //     .on("change", function(e) {
    //         console.log("Date changed: ", $(this).val());
    //         employee.Start_Date = $(this).val();
    //         fnView();
    //     });

    // completed letter
    if (!$("input.calendar_button").length) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

        var arrParts = [
            [1, 'hidden_pg']
        ];

        showCompletedOfferLetter('incomplete', 'complete', arrParts);
    }
});
