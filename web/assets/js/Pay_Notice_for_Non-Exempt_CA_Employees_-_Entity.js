// Pay_Notice_for_Non-Exempt_CA_Employees
function fnView() {
    $("#markup").html("").append(
        // Company Logo
        $('<div class="col-lg-12 start" tabindex="1"/>').append(
            $('<div class="offerClause"/>').append(
                $('<div class="text-right"/>').html('<img src=' + company.Logo + '>')
            )
        ),
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Pay Notice for Non-Exempt California Employees</strong><br>'
            )
        ),
        $('<div class="offerClause">').append(
            $('<h4/>').html('Under Section 2810.5 of the California Labor Code'),
      $('<p/>').html('&nbsp;')
        ),
    
    $('<div class="offerClause">').append(
            $('<h4/>').html('<strong>Employee Information</strong>'),
      $('<hr class="border_bottom_thick"/>').html(''),
      $('<div class="hideLine"/>').html('<br>______________________________________________________________________________________________________')
    
        ),

    
    
    $('<div class="offerClause">').append(
            $('<p/>').html('Employee Name: ' + employee.First_Name + ' ' + employee.Last_Name + '<br>Hire Date: ' + fnConvertFullDate(employee.Hire_Date)),
      $('<p class="hideLine"/>').html('&nbsp;')
        ),
    
    $('<div class="offerClause">').append(
            $('<h4/>').html('<strong>Employer Information</strong>'),
      $('<hr class="border_bottom_thick"/>').html(''),
      $('<div class="hideLine"/>').html('<br>______________________________________________________________________________________________________')
        ),
    
    $('<div class="offerClause">').append(
            $('<p/>').html('Employer Name: ' + employee.US_Entity + '<br>Doing Business As (DBA Names): None in California<br>Physical and Mailing Address: ' + employee.co_address1 + ' ' + employee.co_city + ' ' + employee.co_state + ' ' + employee.co_zip + '<br>Telephone Number: ' + employee.co_phone_number)
        ),
    
    $('<div class="offerClause">').append(
            $('<p/>').html('Workers Compensation Insurance Carrier: Safety National Casualty Corp.<br>Policy Number: LDM4042770<br>Physical and Mailing Address: 1832 Schuetz Road, St. Louis, MO 63146<br>Telephone Number: (888) 995-5300')
        ),
    
    $('<div class="offerClause">').append(
            $('<p/>').html('Is Employer a staffing agency/business? No'),
      $('<p class="hideLine"/>').html('&nbsp;')
        ),
    
    $('<div class="offerClause">').append(
            $('<h4/>').html('<strong>Wage Information</strong>'),
      $('<hr class="border_bottom_thick"/>').html(''),
      $('<div class="hideLine"/>').html('<br>______________________________________________________________________________________________________')
        ),
    
    $('<div class="offerClause">').append(
            $('<p/>').html('Basis of Pay:')
      
        )
    
        // end append
    );
  
  $("#markup2").html("").append(
    $('<div class="offerClause2">').append(
        $('<p/>').html(''),
            $('<p/>').html('Rate of Pay: $' + fnFormatCurrency(employee.Rate_Pay) + ' per hour')
        ),
    
    $('<div class="offerClause2">').append(
            $('<p/>').html('Overtime Rate: Your overtime rate for all hours worked in excess of eight (8) hours, up to and including 12 hours in any workday, and for the first eight (8) hours worked on the seventh consecutive day of work in a workweek will be $' + fnFormatCurrencys(fnFormatCurrencyWithComputation(fnFormatCurrency(employee.Rate_Pay)) * 1.5) + ' per hour; your overtime rate for all hours worked in excess of 12 hours in any workday, and for all hours worked in excess of eight (8) on the seventh consecutive day of work in a workweek will be $' + fnFormatCurrencys(fnFormatCurrencyWithComputation(fnFormatCurrency(employee.Rate_Pay)) * 2.0) + ' per hour.')
        ),
    ((employee.CA_Pay_Notice == 'All other Non-exempt employees') || (employee.CA_Pay_Notice == 'Retail Store') || (employee.CA_Pay_Notice == 'Global Security - Retail Store') || (employee.CA_Pay_Notice == 'Caffe Macs / Reception')) &&
    $('<div class="offerClause2">').append(
            $('<p/>').html('Shift Differential:')
        ),
    
    ((employee.CA_Pay_Notice == 'All other Non-exempt employees') || (employee.CA_Pay_Notice == 'Global Security - Retail Store')) &&
    $('<div class="offerClause2">').append(
            $('<p/>').html('Corporate Employees in certain positions at ' + employee.US_Entity + ' are identified as being eligible for a 10% shift premium for working the second shift or a 15% shift premium for working the third shift (<a target="_blank" href="https://people.apple.com/US/en/subtopic/107"><u>https://people.apple.com/US/en/subtopic/107</u></a>).  If eligible, your 10% shift differential will be $' + fnFormatCurrencys(fnFormatCurrencyWithComputation(fnFormatCurrency(employee.Rate_Pay)) * 0.10) + ' per hour and your 15% shift differential will be $' + fnFormatCurrencys(fnFormatCurrencyWithComputation(fnFormatCurrency(employee.Rate_Pay)) * 0.15) + ' per hour.')
        ),
    
    (employee.CA_Pay_Notice == 'Caffe Macs / Reception') &&
    $('<div class="offerClause2">').append(
            $('<p/>').html('Corporate Employees in certain positions at ' + employee.US_Entity + ' are identified as being eligible for a 15% shift premium for hours worked between 10:00 p.m. and 5:00 a.m.  If eligible, your 15% shift differential will be $' + fnFormatCurrencys(fnFormatCurrencyWithComputation(fnFormatCurrency(employee.Rate_Pay)) * 0.15) + ' per hour.')
        ),
    
    (employee.CA_Pay_Notice == 'Retail Store') &&
    $('<div class="offerClause2">').append(
            $('<p/>').html('Retail Store Employees are eligible to receive 10% added to their standard hourly rate for hours worked between 10:00 p.m. and 7:00 a.m.  Your 10% shift differential will be $' + fnFormatCurrencys(fnFormatCurrencyWithComputation(fnFormatCurrency(employee.Rate_Pay)) * 0.10) + ' per hour.')
        ),
    
    $('<div class="offerClause2">').append(
            $('<p/>').html('Allowances, if any, claimed as part of minimum wage (including meal or lodging allowances): None')
        ),
    
    $('<div class="offerClause2">').append(
            $('<p/>').html('Designated Payday: Wages will be paid every other week on Fridays in accordance with Apple&#39;s standard payroll procedures. A copy of the payroll schedule may be found at <a target="_blank" href="https://people.apple.com/US/en/subtopic/125 "><u>https://people.apple.com/US/en/subtopic/125</u></a>.')
        ),
    $('<div class="offerClause2">').append(
            $('<p/>').html('Additional written agreements and representations regarding your pay may be found in your offer letter, payroll forms including your wage statements, ' + employee.US_Entity + ' policies and plans, and other ' + employee.US_Entity + ' documents. Your compensation is subject to change, and nothing in this notice shall constitute a contract for a specific term of employment.'),
      $('<p class="hideLine"/>').html('&nbsp;')
        ),
    
    $('<div class="offerClause2">').append(
            $('<h4/>').html('<strong>Paid Sick leave</strong>'),
      $('<hr class="border_bottom_thick"/>').html(''),
      $('<div class="hideLine"/>').html('<br>______________________________________________________________________________________________________')
        ),
    
    $('<div class="offerClause2">').append(
            $('<p/>').html('You are entitled to minimum requirements for paid sick leave under California law which provides that an employee:')
        ),
    
    $('<div class="offerClause2" style="margin-left:15px">').append(
            $('<p/>').html('a. May accrue paid sick leave and may request and use up to 3 days or 24 hours of accrued paid sick leave per year;'),
      $('<p/>').html('b. May not be terminated or retaliated against for using or requesting the use of accrued paid sick leave; and'),
      $('<p/>').html('c. Has the right to file a complaint against an employer who retaliates or discriminates against an employee for: (1) requesting or using accrued sick days; (2) attempting to exercise the right to use accrued paid sick days; (3) filing a complaint or alleging a violation of Article 1.5 section 245 et seq. of the California Labor Code; (4) cooperating in an investigation or prosecution of an alleged violation of this Article or opposing any policy or practice or act that is prohibited by Article 1.5 section 245 et seq. of the California Labor Code.')
      
        ),
    
    $('<div class="offerClause2">').append(
            $('<p/>').html('You will accrue paid sick leave pursuant to ' + employee.US_Entity + ' policy which satisfies or exceeds the accrual, carryover, and use requirements of Labor Code § 246.  Depending on your work location, some employees may accrue and/or use additional sick leave time.  For more information, please see <a target="_blank" href="https://people.apple.com/US/en/subtopic/464">https://people.apple.com/US/en/subtopic/464</a>.'),
      $('<p class="hideLine"/>').html('&nbsp;')
        ),
    (((employee.CA_Pay_Notice == 'ASC') || (employee.CA_Pay_Notice == 'Retail Store') || (employee.CA_Pay_Notice == 'Global Security - Retail Store')) && (employee.Work_Location == 'San Francisco')) &&
    $('<div class="offerClause2">').append(
            $('<h4/>').html('<strong>Schedule & Availability</strong>'),
      $('<hr class="border_bottom_thick"/>').html(''),
      $('<div class="hideLine"/>').html('<br>______________________________________________________________________________________________________')
        ),
    
    ((employee.CA_Pay_Notice == 'Retail Store') && (employee.Work_Location == 'San Francisco')) &&
    $('<div class="offerClause2">').append(
             $('<p/>').html('<strong>Retail Store Employees</strong>'),
       $('<p/>').html('Apple’s stores are open 7 days a week. The days you will be scheduled will depend upon availability conversations you will have with your manager. You may revisit your availability with your manager as needed in advance of each quarter. Based on the needs of the store and your request, you can agree upon adjustments and submit changes based on your conversation. By working together, you can make a commitment of the availability for the quarter ahead.'),
       $('<div/>').html('Subject to approved accommodations, Apple’s expectations for full-time and part-time employees are as follows:'),
       $('<ul/>').append(
         $('<li/>').html('Full-Time:  6-7 days of availability per week, including sufficient weekend and evening availability. Consideration for a preferred weekday off based on store availability.'),
         $('<li/>').html('Part-Time:  3-7 days of availability per week. Sufficient evening and weekend availability to meet customer demand. Minimum of 20 hours of availability per week.')
       ),
       $('<div/>').html('Customer demand fluctuates throughout the year based on a variety of factors such as product launches, holidays, and back to school. As such, your hours may fluctuate, however, below is a good faith estimate of the number of hours you will work per week.'),
       $('<ul/>').append(
         $('<li/>').html('Full-Time:  40 hours/week'),
         $('<li/>').html('Part-Time:  10-29 hours/week')
       ),
       $('<p/>').html('Additional information may be found in Apple policies and guidelines, or by having a conversation with your manager.'),
       $('<p class="hideLine"/>').html('&nbsp;')
       
        ),
    
    ((employee.CA_Pay_Notice == 'Global Security - Retail Store') && (employee.Work_Location == 'San Francisco')) &&
    $('<div class="offerClause2">').append(
             $('<p/>').html('<strong>Retail Store Security Employees</strong>'),
       $('<p/>').html('Apple’s stores are open 7 days a week. The days you will be scheduled will depend upon availability conversations you will have with your manager. You may revisit your availability with your manager as needed in advance of each quarter. Based on the needs of the store and your request, you can agree upon adjustments and submit changes based on your conversation. By working together, you can make a commitment of the availability for the quarter ahead.'),
       $('<div/>').html('Subject to approved accommodations, Apple’s expectations for Retail Store Security Employees are as follows:'),
       $('<ul/>').append(
         $('<li/>').html('6-7 days of availability per week, including sufficient weekend and evening availability. Consideration for a preferred weekday off based on store availability.'),
         $('<li/>').html('40 hours/week')
       ),
       $('<p/>').html('Additional information may be found in Apple policies and guidelines, or by having a conversation with your manager.'),
       $('<p class="hideLine"/>').html('&nbsp;')
        ),
    
    ((employee.CA_Pay_Notice == 'ASC') && (employee.Work_Location == 'San Francisco')) &&
    $('<div class="offerClause2">').append(
             $('<p/>').html('<strong>ASC Employees</strong>'),
       $('<p/>').html('Apple’s partner stores are open 7 days a week. The days you will be scheduled will depend upon availability conversations you will have with your manager. You may revisit your availability with your manager as needed in advance of each quarter. Based on the needs of the store and your request, you can agree upon adjustments and submit changes based on your conversation. By working together, you can make a commitment of the availability for the quarter ahead.'),
       $('<div/>').html('Subject to approved accommodations, Apple’s expectations for full-time and part-time employees are as follows:'),
       $('<ul/>').append(
         $('<li/>').html('Full-Time:  6-7 days of availability per week, including sufficient weekend and evening availability. Consideration for a preferred weekday off based on store availability.'),
         $('<li/>').html('Part-Time:  Minimum of 24 hours of availability per week, preferably Friday, Saturday, and Sunday.')
       ),
       
       $('<div/>').html('Customer demand fluctuates throughout the year based on a variety of factors such as product launches, holidays, and back to school. As such, your hours may fluctuate, however, below is a good faith estimate of the number of hours you will work per week.'),
       $('<ul/>').append(
         $('<li/>').html('Full-Time:  40 hours/week'),
         $('<li/>').html('Part-Time:  10-29 hours/week')
       ),
       $('<p/>').html('Additional information may be found in Apple policies and guidelines, or by having a conversation with your manager.'),
       $('<p class="hideLine"/>').html('&nbsp;')
        ),
    
    $('<div class="offerClause2">').append(
            $('<h4/>').html('<strong>Acknowledgement</strong>'),
      $('<hr class="border_bottom_thick"/>').html(''),
      $('<div class="hideLine"/>').html('<br>______________________________________________________________________________________________________')
        ),
    $('<div class="offerClause2">').append(
            $('<p/>').html('My signature below indicates I have received a fully completed copy of this form.'),
      $('<p class="hideLine"/>').html('&nbsp;')
    
        ),
             $('<div class="offerClause2">').append(
           $('<p/>').html('Labor Code section 2810.5(b) requires that the employer notify you in writing of any changes to the information set forth in this Notice within seven calendar days after the time of the changes, unless one of the following applied: (a) all changes are reflected on a timely wage statement furnished in accordance with Labor Code section 226; (b) notice of all changes is provided another writing required by law within seven days of the changes.'),
         $('<p class="hideLine"/>').html('&nbsp;')
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

function clearField(){
var CSD = document.getElementById('companySignDate');

CSD.value = '';

}

function getDateToday(){

var CSD = document.getElementById('companySignDate');

var event = new Date();
var lang = navigator.language || navigator.userLanguage;
var options = {year: 'numeric', month: '2-digit', day: 'numeric' }; // remove day option if not required
var datetoday = event.toLocaleDateString(lang,options).replace(/[^ -~]/g,'');






clearField();
$("#companySignDate").val(datetoday.trim());

console.log(CSD.value);

}



function formatCurrency(total) {
    return parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
}




function fnFormatCurrency(total) {
  
  
  var values = total.split(/[ ,]+/).join(',');
  var newValue  = values.replace(/\$/g, '');
    if (newValue) {
    
        newValue = (newValue.indexOf(',') != -1) ? newValue.split(',').join('') : newValue;
        return formatCurrency(newValue);
    } else {
        return '0.00';
    }
}

function fnFormatCurrencys(total) {
  
  
    if (total) {
    
        return formatCurrency(total);
    } else {
        return '0.00';
    }
}

function fnFormatCurrencyWithComputation(total) {
  
  

  var newValue  = total.replace(/\,/g, '');
    return newValue;

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
            [1, 'hidden_pg']
        ];

        showCompletedOfferLetter('incomplete', 'complete', arrParts);
    }else{

        makeOfferLetter('hidden_pg','offerClause');
        
       getDateToday();
       

    }

});
