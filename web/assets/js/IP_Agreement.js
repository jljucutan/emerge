$(document).ready(function() {
    function fnView() {

        $("#markup").html("").append(
            $('<div class="offerClause imgandtext"/>').append(
                $('<div class="row"/>').append(
                    $('<div class="col-xs-12 col-md-12"/>').append(
                        $('<div class="right"/>').html('<img id="header-logo-top" style="width:150px" src="GEO_Corp.png">')
                    )
                )
            ),


            $('<div class="row"/>').append(
                $('<div class="col-xs-12 col-md-12"/>').append(
                    $('<div class="offerClause"/>').append(
                        $('<span/>').append(
                            $('<p/>').html(
                                moment(employee.Offer_Date).format('MMMM D, YYYY')
                            )
                        ),
                        $('<p/>').append(
                            $('<span/>').html(
                                employee.First_Name + ' ' + employee.Last_Name + '<br>'
                            ),
                            $('<span/>').html((employee.Address_1.length > 0) ? employee.Address_1 + '<br>' : ''),
                            $('<span/>').html((employee.Address_2.length > 0) ? employee.Address_2 + '<br>' : ''),
                            $('<span/>').html(((employee.City.length > 0) ? employee.City + ", " : '') + ((employee.State.length > 0) ? employee.State + ", " : '') + employee.Zip)
                        )
                    ),
                    $('<div class="offerClause">').append(
                        $('<p/>').html(
                            '<span>Dear</span> ' + employee.First_Name + ' ' + employee.Last_Name + ','
                        )
                    ),
                    // Standard Paragraph
                    $('<div class="offerClause"/>').append(
                        $('<p/>').append(
                            $('<span/>').html(
                                'We are pleased to offer you the position of  <span class="bold"><b>' + employee.Job_Title + '</b></span> with the GEO Group, Inc. at the <span class="bold"><b>' + employee.Facility + ',</b></span> in ' + employee.Work_City + ', ' + employee.Work_State + '.'
                            )
                        )
                    ),
                    $('<div class="offerClause"/>').append(
                        $('<p/>').append(
                            $('<span/>').html(
                                'This position will report directly to  ' + employee.Supervisor_Manager_Name + ', ' + employee.Supervisor_Manager_Title + '.')
                        )
                    ),


                    (employee.Hire_Type != "Transfer") &&
                    $('<div class="offerClause"/>').append(
                        $('<p style="" />').html('This offer is contingent upon the successful completion of all background investigations, drug tests, and all related employment forms.  In addition, given the nature and responsibilities of your position, you will be given access to confidential and/or proprietary information of GEO, its customers and others.  Therefore, you will be required to agree to a confidentiality and non-compete agreement as a condition of your employment with GEO.  Similarly, by accepting this offer, you represent that you are not currently bound by any contract or restriction that would prevent or restrict your employment with GEO.  If you may be subject to such a contract, this offer is on hold until we can evaluate whether you are able to perform the functions of your position without violating those obligations.  ')
                    ),

                    $('<div class="offerClause"/>').append(
                        $('<p/>').append(
                            'Your tentative effective date of employment will be <span class="bold"><b>' + fnConvertFullDateViaTZone(employee.Event_Start_Date) + '</b></span>. ',
                            (employee.Hire_Type != "Transfer") &&
                            'On your first day, you must present original, unexpired documentation to prove your identity and authorization to work in the United States. Please visit <a href="https://www.uscis.gov/i-9-central/acceptable-documents" target="_blank">www.uscis.gov/i-9-central/acceptable-documents</a> for information regarding acceptable forms of documentation.'
                        )
                    ),


                    (employee.FLSA_Status.match(/^exempt$/i)) &&
                    $('<div class="offerClause"/>').append(
                        $('<p/>').html('Your salary for this position will be <span class="bold"><b>$' + fnFormatCurrency(annualSalary(employee.Salary_Amount)) + '</b></span> per week.  You will be paid every two (2) weeks on Friday.  Over a fifty-two week year, this is approximately <span class="bold"><b>$' + fnFormatCurrency(employee.Salary_Amount) + '</b></span>.')
                    ),

                    (employee.FLSA_Status.match(/^non-exempt$/i)) &&
                    $('<div class="offerClause"/>').append(
                        $('<p/>').html('Your hourly rate for this position is <span class="bold"><b>$' + employee.Hourly_Rate + '</b></span> per hour. You will be paid every two (2) weeks on Friday.')
                    ),

                    (employee.Contingency_Clause.length > 0) &&
                    $('<div class="offerClause"/>').append(
                        $('<p/>').html(employee.Contingency_Clause)
                    ),

                    (employee.FLSA_Status.toLowerCase().indexOf('exempt') >= 0) && (employee.Health_and_Welfare_Hourly_Rate === "") &&
                    $('<div class="offerClause"/>').append(
                        $('<p/>').html('As an employee of The GEO Group, Inc., you will receive an annual performance review and you may be eligible for a merit increase on an annual basis.')
                    ),

                    (employee.Health_and_Welfare_Hourly_Rate != "") &&
                    $('<div class="offerClause"/>').append(
                        $('<p/>').html('Unless otherwise provided in applicable Wage Determination or Collective Bargaining Agreement, this position is currently eligible to receive a Health and Welfare Benefit Rate of <span class="bold"><b>$' + fnFormatCurrency(employee.Health_and_Welfare_Hourly_Rate) + '</b></span> per hour on all hours paid up to 40 hours per week and not to exceed 2080 hours per year.  The Health and Welfare Benefit Rate is not applicable to over-time hours worked and is excluded from the employee\'s regular or basic rate of pay in computing any overtime pay.  The Health and Welfare benefit is generally intended for employees to pay the cost of benefit coverage.  This rate is not a fixed rate and can change based on contract changes or adjustments made under the Service Contract Act.')
                    ),

                    (employee.Auto_Allowance != "") &&
                    $('<div class="offerClause"/>').append(
                        $('<p/>').html('You will be eligible to receive <span class="bold"><b>$' + fnFormatCurrency(employee.Auto_Allowance) + '</b></span> per month auto allowance.')
                    ),

                    (employee.Bonus != "") &&
                    $('<div class="offerClause"/>').append(
                        $('<p/>').html('Your position will be eligible for a target bonus of up to <span class="bold"><b>' + employee.Bonus + '%</b></span> of your annual salary, which will be contingent upon your performance and the performance of the company.  If awarded, the bonus will be payable in spring of the following year and will be pro-rated based on each full calendar quarter worked in the bonus year.  If you are hired after September 30, you are not eligible for a bonus for the calendar year in which you are hired.')
                    ),

                    (employee.Bonus_Type == "Relocation" || employee.Bonus_Type == "Sign-On & Relocation") &&
                    $('<div class="offerClause"/>').append(
                        $('<p/>').append('The company hereby offers you the following:<br>The Company has agreed to a bonus of ',
                        $('<strong/>').append(
                            '$',
                            fnFormatCurrency(employee.Sign_On_Bonus_Amount)
                        ),
                        ' for relocation expenses. This payment is contingent upon agreeing to the Company’s payback agreement by signing the Relocation Assistance Agreement.')
                    ),

                    (employee.Bonus_Type == "Sign-On" || employee.Bonus_Type == "Sign-On & Relocation") &&
                    $('<div class="offerClause"/>').append(
                        $('<p/>').html('The company hereby offers you the following:<br>The Company has agreed to a Sign-On Bonus. This payment is contingent upon agreeing to the Company\'s payback agreement by signing the Sign-On Bonus Agreement.')),

                    (employee.Stock_Options == "Yes" || employee.Stock_Options == "yes") &&
                    $('<div class="offerClause"/>').append(
                        $('<p/>').html('Contingent on company performance, the Board of Directors may approve the issuance of restricted stock.  If this occurs, you may be eligible for a restricted stock grant.')
                    ),

                    (employee.Relocation == "Yes") &&
                    $('<div class="offerClause"/>').append(
                        $('<p/>').html('The Company will contract with a relocation company to pack, load, insure, transport, store up to thirty (30) days and deliver your normal household goods. There are some limits to this service which are outlined in the Company’s Relocation Guide. This service is contingent upon agreeing to the Company’s payback agreement by signing the Relocation Assistance Agreement.')
                    ),

                    (employee.Moving_Services == "Y") &&
                    $('<div class="offerClause"/>').append(
                        $('<p/>').html('Moving your household goods is a critical part of your relocation, and we want to make this experience as worry-free as possible. GEO has contracted with a third-party relocation company to move your valued belongings.  The company will contact you initially and provide you with details surrounding the movement of your household goods.  Please note, they will need sufficient time to properly coordinate your move, ideally at least three weeks\’ advance notice.'),
                        $('<p/>').html('The relocation company will pack, load, insure, transport, and deliver your normal household goods. There are some limits to this service. Furniture and boxes will be placed in your home where specified.'),
                        $('<p/>').html('It is strongly recommended that you take advantage of the packing services provided by this policy. If you pack yourself, no cost saving is realized and none of the goods that you pack will be insured.'),
                        $('<p/>').html('Packing and loading dates will be arranged with every attempt made to provide these services on the dates you request. However, keep in mind that GEO will not authorize or reimburse additional costs of weekend or holiday service.')
                    ),

                    (employee.Vehicle_Transport == "1") &&
                    $('<div class="offerClause"/>').append(
                        $('<p/>').html('This service includes transport of one (1) personal vehicle.')
                    ),

                    (employee.Vehicle_Transport == "2") &&
                    $('<div class="offerClause"/>').append(
                        $('<p/>').html('This service includes transport of two (2) personal vehicles.')
                    ),

                    (employee.Temporary_Housing.match(/yes/i)) &&
                    $('<div class="offerClause"/>').append(
                        $('<p/>').html('We will provide thirty (30) days of temporary furnished housing, if needed.  If you choose to use this service over thirty (30) days, you will be required to pay.  All homes are complete with furniture, kitchen and bath necessities, bed linens, pillows, pictures, etc.')
                    ),

                    (employee.Pre_Move_House_Hunting == "Y") &&
                    $('<div class="offerClause"/>').append(
                        $('<p/>').html('<span class="bold"><b>Pre-Move House-Hunting Trip:</b></span>  For employees transferred at the company’s request. The company will pay, if so requested, for one trip for the employee and the employee’s spouse to the new location for the purpose of searching for a new residence.  Round-trip air fare, coach class, will be authorized, plus lodging expenses, car rental and per diem ($35.00 for Field employees, $55.00 for Regional/Corporate employees and $25.00 for spouse of the employee) for a maximum of five (5) days.'),
                        $('<p/>').html('Mileage will be paid at the current Internal Revenue Service\'s Standard Mileage Rate per mile between the present work location and the new work location based on the most direct route from the point of origin to destination.  No mileage allowance will be paid for a second car.  The above-mentioned cost is for the employee and all members of the immediate family \(those living with and dependent on the employee\).  An employee should be accompanied whenever possible by his immediate family when transportation cost is paid by the company.  If members of the employee\'s immediate family travel apart from the employee, the company will allow reimbursement at the rate of the lowest coach class air or train fair.'),
                        $('<p/>').html('If air travel is chosen, the company will pay, or the employee will be reimbursed, for such travel at the lowest available rate (normally coach class) for the employee and immediate members of his family, plus necessary taxi or public transportation costs to and from the airport.  If the company is to purchase the necessary tickets for the employee and family prior to travel, a request for the tickets must be submitted to the Human Resources Department at headquarters in time to permit purchase of the tickets.'),
                        $('<p/>').html('If travel by train is chosen, the company will pay, or the employee will be reimbursed, for such travel on the basis of coach fare by train for the employee and immediate members of his family, plus necessary taxi and public transportation cost to and from the terminal.'),
                        $('<p/>').html('When traveling by automobile, lodging expenses and per diem allowance of $35.00 per day for Field employees, $55.00 per day for Regional/Corporate employees, and $25.00 per day for the spouse and immediate family members age 12 and over, and $20.00 per day for family members under the age of 12, or actual cost, if lower, will be allowed for each day of travel en route to the new location based on a minimum of 400 miles of travel per day.  If train is selected, the above lodging and per diem allowances will also apply.  However, such lodging will only be authorized for train travel on trips of 1,000 miles or more and will not, in any case, exceed two (2) nights of lodging. No en route lodging expenses will be allowed for air travel.<br>'),
                        $('<p/>').html('The lodging and per diem allowances listed above may also be allowed, if the need is substantiated, to a total of thirty (30) days either prior to, or after, employee\'s actual relocation.')
                    ),


                    (employee.Trip_Home == "Y") &&
                    $('<div class="offerClause"/>').append(
                        $('<p/>').html('When circumstances demand that an employee begins the work assignment in the new work location in advance of household and family relocation, the employee will be entitled to, if approved by the company:  one round-trip (air coach class) flight for the employee for home/family visitation and to make final arrangements for the move, if possible to be used within thirty (30) days.  (If the employee elects to travel by auto, round-trip mileage will be paid at the current Internal Revenue Service’s Standard Mileage Rate per mile based on the most direct route from point of origin to destination.)')
                    ),

                    (employee.Relocation == "Yes") &&
                    $('<div class="offerClause"/>').append(
                        $('<p/>').html('All new employees will be held responsible to reimburse GEO for any relocation expenses if they voluntarily separate or terminate their employment within the first 12-months of employment (refer to Relocation Assistance Agreement).')
                    ),


                    $('<div class="offerClause"/>').append(
                        $('<p/>').html('To confirm these conditions, please review this letter of employment, sign and date. This letter is not intended, nor should it be construed, as a contract of employment.  Rather it is intended to set forth the previously agreed upon conditions of your employment with the Company.  Your employment continues to be “at-will” and either you or GEO can end it at any time.')
                    ),



                    $('<div class="offerClause"/>').append(
                        $('<p/>').html(employee.First_Name + ', we are looking forward to you joining our team and to a mutually rewarding relationship.  Hopefully, you can see how much we value your contribution to GEO.  ')
                    ),


                    $('<div class="offerClause"/>').append(
                        $('<p/>').html('Please respond to this offer by ' + moment(employee.Offer_Date).add(3, 'days').format('MMMM D, YYYY') + '.')
                    ),

                    $('<div class="offerClause"/>').append(
                        $('<p/>').html('&nbsp;')
                    ),

                    $('<div class="offerClause"/>').append(
                        $('<p/>').html('Sincerely,')
                    )

                ) //col-md-10
            ) //row
        ); //markup1 

        $('#markup2').html("").append(
            $('<div class="row"/>').append(
                $('<div class="col-lg-12"/>').append(

                    $('<div class="offerClause2"/>').append(
                        $('<p/>').append(
                            $('<strong/>').html(employee.Offer_Title)
                        ),
                        $('<p/>').html('The GEO Group, Inc.')
                    ),

                    $('<div class="offerClause2"/>').append(
                        $('<p/>').html('&nbsp;')
                    ),

                    $('<div class="offerClause2"/>').append(
                        $('<p/>').html('I have read and agree with this Letter of Employment.')
                    )
                )
            )
        );

    }

    function annualSalary(salary) {
        var dividend = salary;
        var dividends = dividend.replace(/,/g, "") / 52;
        var final = dividends.toFixed(2);
        return final;
    }

    function fnConvertFullDateViaTZone2(eventDate) {

        var d = new Date(eventDate);
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var localoffset = -(d.getTimezoneOffset() / 60);
        var destoffset = +4;
        var offset = destoffset - localoffset;
        var e = new Date(new Date(eventDate).getTime() + offset * 3600 * 1000)
        var year = e.getFullYear(),
            month = e.getMonth(),
            n_date = e.getDate(),
            day = e.getDay();
        return months[month] + ' ' + parseInt(n_date) + ', ' + year;

    }

    function fnConvertFullDateViaTZone(eventDate) {

        var d = new Date(eventDate);
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var localoffset = -(d.getTimezoneOffset() / 60);
        var destoffset = +4;
        var offset = destoffset - localoffset;
        var e = new Date(new Date(eventDate).getTime() + offset * 3600 * 1000)
        var year = e.getFullYear(),
            month = e.getMonth(),
            n_date = e.getDate(),
            day = e.getDay();
        return days[parseInt(day)] + ', ' + months[month] + ' ' + parseInt(n_date) + ', ' + year;

    }

    function plusThreeDayes(eventDate) {

        var startDate = eventDate;
        startDate = new Date(startDate.replace(/-/g, "/"));
        var endDate = "",
            noOfDaysToAdd = 3,
            count = 0;


        while (count < noOfDaysToAdd) {
            endDate = new Date(startDate.setDate(startDate.getDate() + 1));
            if (endDate.getDay() != 0 && endDate.getDay() != 6) {
                count++;
            }
        }

        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var localoffset = -(endDate.getTimezoneOffset() / 60);
        var destoffset = +4;
        var offset = destoffset - localoffset;
        var e = new Date(endDate.getTime() + offset * 3600 * 1000)
        var year = e.getFullYear(),
            month = e.getMonth(),
            n_date = e.getDate(),
            day = e.getDay();

        return months[month] + ' ' + parseInt(n_date) + ', ' + year;
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

    // Pre-pop override for Anticipated Hire Date
    $(".hire-date").val(employee.Anticipated_Hire_Date);


    function _fnAssignValue(targetElement, value) {
        document.getElementById(targetElement).value = value;
        $("#" + targetElement).attr("value", value);
    }

    function fnGetName(first, middlename, last) {

        var middle_inital = ((middlename) ? middlename.substring(0, 1) + ' ' : '');
        var fullname = first + " " + middle_inital + last;
        return fullname;
    }

    // jjucutan | https://jira.silkroadtech.com/browse/SERVICES-37998?focusedCommentId=1429064&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-1429064
    function pickDivisionLogo() {
        "use strict";
        const header_logo = "header_logo";
        switch (employee.Region) {
            case "BI":
            case "ISAP-Northeastern Region":
            case "ISAP-Northwestern Region":
            case "ISAP-Southeastern Region":
            case "ISAP-Southwestern Region":
            case "Protocol":
                $('#container #header-logo-top').prop('src', logos.geobi.web);
                SetOfferLetterImageField(header_logo, logos.geobi.print);
                break;
            case "Reentry Services": 
            case "In-Prison Treatment":
            case "Non-Residential Day Reporting Centers":
            case "Reentry Svcs":
            case "Residential Reentry Center":
                $('#container #header-logo-top').prop('src', logos.reentry.web);
                SetOfferLetterImageField(header_logo, logos.reentry.print);
                break;
            case "Youth Services": 
            case "METCALF":
            case "PAETOW":
            case "Youth Srvcs":
                $('#container #header-logo-top').prop('src', logos.abraxas.web);
                SetOfferLetterImageField(header_logo, logos.abraxas.print);
                break;
            default:
                $('#container #header-logo-top').prop('src', logos.default.web);
                SetOfferLetterImageField(header_logo, logos.default.print);
                break;
        }
    }

    // Get description for Business Unit
    $("#business-unit").val(employee.Business_Unit);
    employee.Business_Unit = $("#business-unit option:selected").text();

    // render template
    fnView();
    // completed letter
    if (document.querySelector('#buttonSaveAndComplete').length < 1 && strFormCompleted.length > 0) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

        var arrParts = [
            [1, 'hidden_pg']
        ];
        var arrParts2= [
            [1, 'hidden_pg2']
        ];
        showCompletedOfferLetter('incomplete', 'complete', arrParts);
        showCompletedOfferLetter('incomplete2', 'complete2', arrParts2);
    } 
    else {
        pickDivisionLogo();
    }

});
