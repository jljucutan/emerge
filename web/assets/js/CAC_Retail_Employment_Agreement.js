function fnView() {
    $("#markup").html("").append(
        // add apple img logo header
        $('<div class="row vspace offerClause"/>').append(
            $('<div class="col-lg-1 col-md-1 col-sm-4 col-xs-4 pull-right"/>').append(
                $('<img src="img/apple_logo.jpg" alt="" class="img-responsive pull-right"/>')
            )
        ),
        // add the form title
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="vspace-lg"/>').append('<strong>Employment Agreement</strong>')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('THIS AGREEMENT is made as of the ' + fnConvertFullDate($('#today').val()))
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-1 col-md-1 col-sm-4 col-xs-12"/>').append(
                'BETWEEN:'
            ),
            $('<div class="col-lg-11 col-md-11 col-sm-8 col-xs-12"/>').append(
                $('<p/>').append('Apple Canada Inc. ("Apple" or "Company"), an Ontario company having offices at 120 Bremner Boulevard, Suite 1600, Toronto, Ontario, Canada M5J 0A8')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-1 col-md-1 col-sm-4 col-xs-12"/>').append(
                'AND:'
            ),
            $('<div class="col-lg-11 col-md-11 col-sm-8 col-xs-12"/>').append(
                $('<p/>').append(
                    employee.Candidate_First_Name + ' ' + employee.Candidate_Last_Name + ' ("You" or "Employee")<br/>' +
                    ((employee.Address_1.length > 0) ? employee.Address_1 + '<br/>' : '') +
                    ((employee.Address_2.length > 0) ? employee.Address_2 + '<br/>' : '') +
                    employee.City + ', ' + employee.Province + '<br/>' +
                    employee.Postal_Code
                )
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('This Agreement sets forth the terms upon which Apple agrees to employ the Employee and upon which Employee agrees to be employed by Apple. For good and valuable consideration, the receipt and sufficiency of which are hereby acknowledged, the parties agree as follows:'),
                $('<h1 class="text-left"/>').append('<strong>Job Title and Job Duties</strong>'),
                $('<p/>').append(
                    'You are employed as ' + 
                    ((['Full Time', 'Part Time'].indexOf(employee.CAC_Employee_Type) > -1) ? employee.CAC_Employee_Type: '') +
                    ((employee.CAC_Employee_Type == 'FEW') ? 'Seasonal ' : '') +
                    employee.Job_Title_Retail +
                    '. The duties of this position include sales and customer service and any other duties assigned to you from time to time by Apple.'
                ),
                $('<p/>').append('Apple may from time to time redefine the job title, description, functions and/or responsibilities of the position without changing any rights or obligations of the parties hereto.')
            )
        ),
        (employee.CAC_Contract_Type == 'Standard Permanent') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="text-left"/>').append('<strong>Commencement of Employment</strong>'),
                $('<p/>').append(
                    'Your employment will begin on ' +
                    employee.Start_Date +
                    ' and shall continue until terminated pursuant to this Agreement.'
                )
            )
        ),
        (employee.CAC_Contract_Type == 'FEW') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="text-left"/>').append('<strong>Term of Employment</strong>'),
                $('<p/>').append('Your employment will begin on ' + employee.Start_Date + ' and end on ' + employee.End_Date + '. Unless Apple terminates your employment before the end of this term, or renews this Agreement for a further term, your employment will end on ' + employee.End_Date + ', at which time Apple will have no obligation to give you any notice of termination, or compensatory indemnity in lieu of such notice, and will have no further obligation whatsoever to you.')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="text-left"/>').append('<strong>Probation Period</strong>')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                '<p>Your employment with Apple is subject to a ninety (90) day probationary period. At any time during your probationary period, either you or Apple may terminate your employment without notice or any other obligation to the other party, except the minimum notice or pay in lieu of notice and any other entitlements required by the applicable employment standards statute.</p>'
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                '<h1 class="text-left"><strong>Conditional Offer of Employment</strong></h1>'
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                '<p>Your employment with Apple is conditional upon verification satisfactory to Apple of the information you provided to it during the job application process, the receipt of references satisfactory to Apple from those nominated by you, and the receipt of documentary evidence satisfactory to Apple of your continued right to work in Canada. It is your responsibility to maintain your legal right to work in Canada.</p>'
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                '<h1 class="text-left"><strong>Place of Work</strong></h1>'
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('While your usual place of work is the ' + employee.Work_Location +' store, Apple may, at its sole discretion, require you to relocate to any other location within the Greater ' + employee.Greater_City_Area + ' Area, either temporarily or permanently, without thereby breaching this Agreement or any terms of your employment.')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                '<h1 class="text-left"><strong>Days and Hours of Work</strong></h1>'
            )
        ),
        (employee.CAC_Contract_Type != 'FEW' && employee.CAC_Employee_Type == 'Full Time') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('You are employed on a full-time basis. Your usual weekly hours are forty (40) hours per week exclusive of breaks (your "Basic Hours").')
            )
        ),
        (employee.CAC_Contract_Type != 'FEW' && employee.CAC_Employee_Type == 'Part Time') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('You are employed on a part-time basis. Your usual weekly hours are twenty (20) hours per week exclusive of breaks (your "Basic Hours").')
            )
        ),
        (employee.CAC_Contract_Type == 'FEW') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('You are employed on a seasonal basis. Your usual weekly hours are ' + employee.CAC_Weekly_Hours + ' hours per week exclusive of breaks (your "Basic Hours").')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('Your actual working days and hours will be determined by your manager who will notify you in advance, at the beginning of each week, what your working schedule will be for that week.')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('Apple reserves the right to have you work either a reasonable number of additional hours or fewer hours than your Basic Hours as its business requires. Apple may implement these changes to your hours without prior notice and without thereby breaching any term of this Agreement or your employment with Apple.')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="text-left"/>').append('<strong>Compensation</strong>')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $(' <p/>').append('Your basic rate of pay is (CAD) $' + employee.Salary_Amount + ' per hour. You will be paid every two weeks, one week in arrears, less the applicable deductions.')
            )
        ),
        (employee.CAC_Contract_Type != 'FEW') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('Overtime is paid in accordance with the employment standards laws of the Province in which you are employed.')
            )
        ),
        (employee.CAC_Contract_Type == 'FEW') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('Overtime is paid for each complete period of 15 minutes, and as stipulated in the employment standards laws of the Province in which you work.')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="text-left"/>').append('<strong>Benefits Programs</strong>')
            )
        ),
        (employee.CAC_Contract_Type != 'FEW' && employee.CAC_Employee_Type == 'Part Time') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('Apple offers various benefits plans to its part-time employees. You will be eligible to enroll once you have completed any applicable waiting period.')
            )
        ),
        (employee.CAC_Contract_Type != 'FEW' && employee.CAC_Employee_Type == 'Full Time') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('You may be eligible to participate in various benefit plans offered by Apple from time to time, including Retirement Savings Plan, and health, life and disability insurance plans offered by Apple to its employees. You acknowledge and agree that any benefit plan in effect from time to time is subject to availability and other requirements of Apple or the applicable insurer and the written terms and conditions contained in each plan and that Apple makes no promise about your eligibility for or entitlement to benefits and will have no liability or responsibility in the event you are denied coverage.')
            )
        ),
        (employee.CAC_Contract_Type == 'FEW') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('You may be eligible to participate in various benefit plans offered by Apple from time to time. You acknowledge and agree that any benefit plan in effect from time to time is subject to availability and other requirements of Apple or the applicable insurer and the written terms and conditions contained in each plan and that Apple makes no promise about your eligibility for or entitlement to benefits and will have no liability or responsibility in the event you are denied coverage.')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="text-left"/>').append('<strong>Vacation</strong>')
            )
        ),
        (employee.CAC_Employee_Type == 'Part Time') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('Vacation pay will be added to each paycheque in accordance with the employment standards laws of the Province in which you are employed.')
            )
        ),
        (employee.CAC_Employee_Type == 'Full Time') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('As an employee you are eligible to accrue vacation in accordance with the employment standard legislation in the Province in which you are employed.')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('Apple\'s vacation policy may be amended or modified from time to time by Apple in its sole discretion.')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="text-left"/>').append('<strong>Bonus</strong>')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('You may be eligible to participate in any of Apple’s bonus and incentive schemes in place from time to time, details of which will be provided by your manager.'),
                $('<p/>').append('All bonus and incentive schemes in which you may be eligible to participate are discretionary and may be amended or withdrawn at any time without breaching a term of this Agreement or your employment with Apple.'),
                $('<h1 class="text-left"/>').append('<strong>Sunday Work/Statutory Holiday/Shift Work</strong>'),
                $('<p/>').append('You understand that your position is with Apple’s Retail division and that because the Store is a retail operation, which is open on Sundays and statutory holidays, you may be scheduled to work on Sundays and statutory holidays. You agree that you will work on Sundays and statutory holidays if a Sunday or statutory holiday shift is assigned to you and you will not refuse to do so.'),
                $('<p/>').append('You also acknowledge that you may be scheduled to work on different shifts (eg. morning, afternoon or evening) and that your shift schedule may change from time to time.'),
                $('<h1 class="text-left"/>').append('<strong>Absence and Sickness</strong>'),
                $('<p/>').append('If you are unable to attend work for any reason you must provide notice and otherwise follow Apple\’s standard policies and procedures with respect to absences and sickness.'),
                $('<h1 class="text-left"/>').append('<strong>Service to Apple</strong>'),
                $('<p/>').append('During your employment with Apple, you will in all respects conform to and comply with the directions and policies of Apple, including Apple’s Code of Business Conduct Policy, and any other standard Apple employment policies that are provided to or accessible by Apple employees, perform each of the duties assigned from time to time by Apple to the best of your skill and ability, faithfully and diligently serve Apple, use your best efforts to promote the interests and reputation of Apple, and devote your full working time, attention and energies to the business of Apple.'),
                $('<h1 class="text-left"/>').append('<strong>Personal Information</strong>'),
                $('<p/>').append('Your personal information will be collected, processed, transferred and safeguarded by Apple in accordance with the terms of the Employee Privacy Notice signed by you.'),
                $('<h1 class="text-left"/>').append('<strong>Disciplinary and Grievance Procedures</strong>'),
                $('<p/>').append('Apple\’s disciplinary and grievance procedures, as amended from time to time, are contained in Apple\’s standard employment policies and procedures.'),
                $('<h1 class="text-left"/>').append('<strong>Termination of Employment</strong>')
            )
        ),
        (employee.CAC_Contract_Type != 'FEW') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('Upon successful completion of your probationary period referred to above, your employment may be terminated as follows: ')
            )
        ),
        (employee.CAC_Contract_Type != 'FEW') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(a)'
            ),
            $('<div class="col-lg-11 col-md-11 col-sm-10 col-xs-10"/>').append(
                $('<p/>').append('by Apple Canada, for just cause, with no obligation to provide to you any notice or pay in lieu of notice or any indemnity or severance whatsoever;')
            )
        ),
        (employee.CAC_Contract_Type != 'FEW') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(b)'
            ),
            $('<div class="col-lg-11 col-md-11 col-sm-10 col-xs-10"/>').append(
                $('<p/>').append('by Apple Canada, without just cause, by providing you with the minimum statutory notice, or pay in lieu of such notice as may be required by the employment standards act of the Province in which you are employed, or any successor legislation, plus one additional week for each completed year of service with Apple Canada for which you intend to give a full and satisfactory release in favour of Apple;')
            )
        ),
        (employee.CAC_Contract_Type != 'FEW') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(c)'
            ),
            $('<div class="col-lg-11 col-md-11 col-sm-10 col-xs-10"/>').append(
                $('<p/>').append('by you, upon giving Apple Canada two (2) weeks’ advance written notice of your intention to resign, in which event Apple Canada has a right to renounce in whole or in part, to such notice without having any further obligations.')
            )
        ),
        (employee.CAC_Contract_Type != 'FEW') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('In the event of termination, you will be paid any unpaid base salary and any accrued vacation earned up to your last day of active employment with Apple Canada, and benefits will be continued to the extent required by applicable legislation. You acknowledge and expressly agree that upon the termination of employment for any reason other than for cause, you will only be entitled to the above notice or pay in lieu of notice and benefits provisions, and that such termination is fair and reasonable and Apple Canada shall not, in any case, be responsible for any additional notice, pay in lieu of notice, minimum statutory notice, severance pay, termination pay, or other indemnity or damage arising from the termination of your employment.')
            )
        ),
        (employee.CAC_Contract_Type == 'FEW') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('Your employment may be terminated prior to the term end date, or any renewal thereof, as follows:')
            )
        ),
        (employee.CAC_Contract_Type == 'FEW') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(d)'
            ),
            $('<div class="col-lg-11 col-md-11 col-sm-10 col-xs-10"/>').append(
                $('<p/>').append('by Apple, for just cause, immediately, with no obligation to provide to you any notice or pay in lieu of notice or severance pay;')
            )
        ),
        (employee.CAC_Contract_Type == 'FEW') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(e)'
            ),
            $('<div class="col-lg-11 col-md-11 col-sm-10 col-xs-10"/>').append(
                $('<p/>').append('by Apple, without just cause, by providing you with the notice, or pay in lieu of notice and severance pay, if any, as required by the employment standards act of the Province in which you are employed, or any successor legislation; or')
            )
        ),
        (employee.CAC_Contract_Type == 'FEW') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(f)'
            ),
            $('<div class="col-lg-11 col-md-11 col-sm-10 col-xs-10"/>').append(
                $('<p/>').append('by you, upon giving Apple two (2) weeks advance written notice.')
            )
        ),
        (employee.CAC_Contract_Type == 'FEW') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('In the event of termination, you will be paid any unpaid wages earned up to the date of termination, and benefits will be continued to the extent required by applicable legislation. You acknowledge and expressly agree that upon the termination of employment for any reason other than for cause you will only be entitled to the above notice, pay in lieu of notice, severance and benefits provisions which apply under then current legislation, and any claim for damages for failure to provide adequate notice of termination at law or to any other amount under employment statutes or at law will be limited to such amount or provisions.')
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
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ordinalDate = '';
    switch(parseInt(d.getDate()) % 10) {
        case 1: 
            ordinalDate = d.getDate() + "st";
        break;
        case 2: 
            ordinalDate = d.getDate() + "nd";
        break;
        case 3: 
            ordinalDate = d.getDate() + "rd";
        break;
        default:
            ordinalDate = d.getDate() + "th";
    }
    if (d.getDate() > 3 && d.getDate() > 21) {
        ordinalDate = d.getDate() + "th";
    }
    return ordinalDate + ' of ' +  months[d.getMonth()] + ', ' + d.getFullYear() + '.';
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

function fnFormatNumeric(total){
       var number = total.replace(/[^0-9\.]+/g,"");
       var bonusInst = number *.5      
       return formatCurrency(bonusInst);
}

$(document).on('ready',function() {
    function _fnAssignValue(targetElement, value) {
        document.getElementById(targetElement).value = value;
        $("#" + targetElement).attr("value", value);
    }

    function fnGetName(first, middlename, last) {

       // var middle_inital = ((middlename) ? middlename.substring(0, 1) + ' ' : '');
        var fullname = first + " " + middlename + " " + last;
        return fullname;
    }

    var name = fnGetName(employee.Candidate_First_Name, employee.Candidate_Middle_Name, employee.Candidate_Last_Name);
    _fnAssignValue('Full_Name', name);

    // render template
    fnView();

    // completed letter
    if ($('#today').prop('readonly')) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

        var arrParts = [
            [1, 'hidden_pg']
        ];
        showCompletedOfferLetter('incomplete', 'complete', arrParts);
    }
    else{
        makeOfferLetter('hidden_pg','offerClause');
        makeOfferLetter('hidden_pg2','offerClause2');
        makeOfferLetter('hidden_pg3','offerClause3');
        makeOfferLetter('hidden_pg4','offerClause4');
    }
});
