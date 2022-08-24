// CSI Electric Offer Letter
function fnView() {
    $("#markup").html("").append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p/>').html(employee.Todays_Date),
            $('<p/>').html('')
            ),
        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<span/>').html(employee.First_Name + ' ' + employee.Last_Name + '<br>'),
                $('<span/>').html(employee.Address_Line_1 ? employee.Address_Line_1 + '<br>' : ''),
                $('<span/>').html(employee.Address_Line_2 ? employee.Address_Line_2 + '<br>' : ''),
                $('<span/>').html((employee.City ? employee.City + ', ' : '') + (employee.State ? employee.State + ', ' : '') + employee.Postal_Code),
                $('<p/>').html('&nbsp;')
                )
            ),
        $('<div class="offerClause"/>').append(
            $('<p/>').html('Dear ' + employee.First_Name + ':'),
            $('<p/>').html('It is with great pleasure that we extend this offer of employment to you. This employment offer is for the position of ' + employee.Job_Title + ' at our ' + employee.Job_Location + ' office. You will work under the direction of ' + employee.Hiring_Manager + ', ' + employee.Hire_Mgr_Title + '. Your job responsibilities will encompass a wide variety of ' + employee.Job_Title + ' tasks including but not limited to those outlined in the job description. ' + (employee.FLSA_Status == 'Exempt' ? 'Your compensation for this position will be $' + fnFormatCurrency2(employee.Salary_Amount) + ' per year, paid bi-weekly. ' : '')),

            (employee.FLSA_Status == 'Exempt') &&
            $('<p/>').html('This position will be considered an exempt job classification.'),

            (employee.FLSA_Status == 'Non-Exempt') &&
            $('<p/>').html('Your compensation for this position will be $' + employee.Hourly_Rate + ' per hour.'),

            $('<p/>').html((employee.FLSA_Status == 'Non-Exempt' ? 'This position is a non-exempt job classification and overtime would be paid at time and half. ' : '') + 'We would like you to begin your employment with us on ' + employee.Start_Date + ' or at a mutually agreeable date that will work for you. '),

            (["Intern","Part-Time"].indexOf(employee.Position_Type) >= 0) &&
            $('<p/>').html('You will be eligible for 24 hours of Paid Sick Leave, once you have satisfied the appropriate waiting periods. Benefits will be in accordance with the most current edition of the CSI Employee Handbook published.'),

            (["Intern","Part-Time"].indexOf(employee.Position_Type) < 0) &&
            $('<p/>').html('You will be eligible for the following CSI employee benefits after you have satisfied the appropriate waiting periods. Benefits will be in accordance with the most current edition of the CSI Employee Handbook published. '),
            //if Union Admin || Union Field && San Jose
            ((employee.Employee_Type == '3' || employee.Employee_Type == '1') && (employee.Job_Location_Code == '171829.07' || employee.Job_Location_Code == '180438.07' || employee.Job_Location_Code == '180895.06' || employee.Job_Location_Code == '171038.07' || employee.Job_Location_Code == '181190.07' || employee.Job_Location_Code == 'San Jose Office')) && (["Intern","Part-Time"].indexOf(employee.Position_Type) < 0) &&
            $('<ol/>').append(
                $('<li/>').html(
                    'Ten (10) paid holidays per the employee handbook.'
                    ),   
                $('<li/>').html(
                    '40 hours of Paid Sick leave.'
                    ),   
                $('<li/>').html(
                    'Paid vacation as specified in the Employee Handbook.  This is based on your hire date and pay period accrual. Weekly pay schedule accrues 1.54 hours per pay period  in years 0-5, 2.31 hours per pay period in years 6-10 and 3.08 hours per pay period in years 10 +.'
                    ) 
                ),
            //if Union Admin || Union Field != San Jose
            ((employee.Employee_Type == '3' || employee.Employee_Type == '1') && (employee.Job_Location_Code != '171829.07' && employee.Job_Location_Code != '180438.07' && employee.Job_Location_Code != '180895.06' && employee.Job_Location_Code != '171038.07' && employee.Job_Location_Code != '181190.07' &&  employee.Job_Location_Code != 'San Jose Office')) && (["Intern","Part-Time"].indexOf(employee.Position_Type) < 0) &&
            $('<ol/>').append(
                $('<li/>').html(
                    'Nine (9) paid holidays (Holidays are based on the IBEW Local #11 schedule).'
                    ),   
                $('<li/>').html(
                    '40 hours of Paid Sick leave.'
                    ),   
                $('<li/>').html(
                    'Paid vacation as specified in the Employee Handbook.  This is based on your hire date and pay period accrual. Weekly pay schedule accrues 1.54 hours per pay period  in years 0-5, 2.31 hours per pay period in years 6-10 and 3.08 hours per pay period in years 10 +.'
                    ) 
                ),
            //if Non-Union Admin && San Jose
            (employee.Employee_Type == '2' && (employee.Job_Location_Code == '171829.07' || employee.Job_Location_Code == '180438.07' || employee.Job_Location_Code == '180895.06' || employee.Job_Location_Code == '171038.07' || employee.Job_Location_Code == '181190.07' || employee.Job_Location_Code == 'San Jose Office')) && (["Intern","Part-Time"].indexOf(employee.Position_Type) < 0) &&
            $('<ol/>').append(
                $('<li/>').html(
                    'Company sponsored 401k plan. Matching and Profit Sharing as outlined in the employee handbook.'
                    ),   
                $('<li/>').html(
                    'Company health and dental insurance for you and your family.  CSI Pays 100% for Employee and 75% of dependent coverage premium. Employee pays the 4% Affordable Healthcare Act tax on the entire premium'
                    ),   
                $('<li/>').html(
                    'Ten (10) paid holidays per the employee handbook.'
                    ),
                $('<li/>').html(
                    '40 hours of Paid Sick leave.'
                    ),
                $('<li/>').html(
                    'Paid vacation as specified in the Employee Handbook.  This is based on your hire date and pay period accrual. Bi-Weekly pay schedule accrues 3.08 hours per pay period  in years 0-5, 4.62 hours per pay period in years 6-10 and 6.15 hours per pay period in years 10 +.'
                    )
                ),
            //if Non-Union Admin != San Jose
            (employee.Employee_Type == '2' && (employee.Job_Location_Code != '171829.07' && employee.Job_Location_Code != '180438.07' && employee.Job_Location_Code != '180895.06' && employee.Job_Location_Code != '171038.07' && employee.Job_Location_Code != '181190.07' &&  employee.Job_Location_Code != 'San Jose Office')) && (["Intern","Part-Time"].indexOf(employee.Position_Type) < 0) &&
            $('<ol/>').append(
                $('<li/>').html(
                    'Company sponsored 401k plan. Matching and Profit Sharing as outlined in the employee handbook.'
                    ),   
                $('<li/>').html(
                    'Company health and dental insurance for you and your family.  CSI Pays 100% for Employee and 75% of dependent coverage premium. Employee pays the 4% Affordable Healthcare Act tax on the entire premium'
                    ),   
                $('<li/>').html(
                    'Nine (9) paid holidays (Holidays are based on the IBEW Local #11 schedule).'
                    ),
                $('<li/>').html(
                    '40 hours of Paid Sick leave.'
                    ),
                $('<li/>').html(
                    'Paid vacation as specified in the Employee Handbook.  This is based on your hire date and pay period accrual. Bi-Weekly pay schedule accrues 3.08 hours per pay period  in years 0-5, 4.62 hours per pay period in years 6-10 and 6.15 hours per pay period in years 10 +.'
                    )
                )


            
            ),
$('<div class="offerClause"/>').append(
    $('<span class="ul-wrapper duties-span"/>').html(''),
    $('<p/>').html('')
    )

        // end append
        );

$("#markup2").html("").append(
        // OfferClause 2
        $('<div class="offerClause2"/>').append(
            $('<p/>').html('This offer is based on at-will employment, and expires on ' + employee.Expiration + '. Employment at-will means the terms of employment may be changed with or without notice, with or without cause, including but not limited to termination, demotion, promotion, transfer, compensation, benefits, duties, and location of work. '),
            $('<p/>').html('We are excited about the future and the prospects of you becoming a vital part of the CSI Team. We look forward to making this a mutually beneficial relationship for the both of us. '),
            $('<p/>').html('&nbsp;'),            
            $('<p/>').html('Sincerely,'),
            (employee.Employee_Type == '2' && (employee.Job_Location_Code == '171829.07' || employee.Job_Location_Code == '180438.07' || employee.Job_Location_Code == '180895.06' || employee.Job_Location_Code == '171038.07' || employee.Job_Location_Code == '181190.07' || employee.Job_Location_Code == 'San Jose Office')) &&
            $('<p/>').html('Troy Carlton<br>President of Northern California Region'),
            (employee.Employee_Type == '2' && (employee.Job_Location_Code != '171829.07' && employee.Job_Location_Code != '180438.07' && employee.Job_Location_Code != '180895.06' && employee.Job_Location_Code != '171038.07' && employee.Job_Location_Code != '181190.07' &&  employee.Job_Location_Code != 'San Jose Office')) &&
            $('<p/>').html('Paul Pica<br>President & COO'),
            $('<p/>').html(''),
            $('<p/>').html('')
            )
        );
// end append


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
function fnFormatCurrency2(total) {   
    var values = total.split(/[ ,]+/).join(',');
    var newValue  = values.replace(/\$/g, '');
    if (newValue) {

        newValue = (newValue.indexOf(',') != -1) ? newValue.split(',').join('') : newValue;
        return formatCurrency(newValue);
    } else {
        return '0.00';
    }
}

$(function() {
    // render template

    fnView();

    if (!$("input.calendar_button").length) {
      $("#ButtonSaveAndComplete").remove();
      $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

      var arrParts = [
      [1, 'hidden_pg'],
      [1, 'hidden_pg2']

      ];

      showCompletedOfferLetter('incomplete', 'complete', arrParts);
  }else{
      $('ul li p').contents().unwrap(); 
      $('.ul-wrapper ul li').append($('<p/>').html(''));

      if(!$('#job-duties-content').is(':disabled')){ 
        $('div.hidden-later').html($('div.hidden-later').html().replace(/[^ -~]+/g,''));

        $('.hidden-later ul li p').contents().unwrap();



        var xx = $('.hidden-later').html();
        xx = xx.replace(/\n/g, '');
        console.log(xx);
        if(employee.Special_OL_Text_Needed == 'Yes'){
            $('span.duties-span').append(xx);
            $('.duties-span ul li').append($('<p/>').html(''));    
        }
    }


    $('#hidden_pg').val($('#hidden_pg').val().replace(/\n/g, ''));
    makeOfferLetter('hidden_pg','offerClause');
    makeOfferLetter('hidden_pg2','offerClause2');
}

});
