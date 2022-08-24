/**
 * SERVICES-35974 | PayPal - Create Japan Offer Letter
 * Japan_Offer_Letter
 * 02/27/2019 | jjucutan | display complimentary close addressee when addressee or new hire is signed in
 * 04/05/2021 | anati | created Version_5
 * 09/28/2021 | anati | created Version_6
 */
const fnView = function() {
    "use strict";
    const markupRoot = $("#markup").html("");
    markupRoot.append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p/>').append(
                $('<mark/>').append(
                    employee.Current_Date
                )
            ),
            $('<p/>').append(
                $('<strong/>').append('Strictly Private and Confidential')
            )
        ),
        $('<div class="offerClause">').append(
            $('<p class="mb-40"/>').append(
                $('<mark/>').append(
                    employee.Full_Legal_Name
                ),
                '<br>',
                $('<mark/>').append(
                    employee.Address_Line_1
                ),
                (employee.Address_Line_2.length > 0) && ', ',
                (employee.Address_Line_2.length > 0) && $('<mark/>').append(
                    employee.Address_Line_2
                ).append('<br>'),
                $('<mark/>').append(
                    employee.City
                ),
                ', ',
                $('<mark/>').append(
                    employee.State
                ),
                ', ',
                $('<mark/>').append(
                    employee.Postal_Code
                )
            ),
            $('<p class="hide"/>').append('&nbsp;')
        ),
        $('<div class="offerClause"/>').append(
            $('<p/>').append(
                'Dear Mr./Ms. ',
                $('<mark/>').append(
                    employee.Last_Name
                ),
                ','
            ),
            $('<p/>').append(
                'We are pleased and delighted to formally welcome you to ',
                $('<strong/>').append('PayPal Philippines Global Customer Operations (GCO)'),
                '.'
            ),
            $('<p/>').append(
                'Position Title: ', 
                $('<mark/>').append(employee.Job_Title),
                '<br>',
                'Effective Start Date: ',
                $('<mark/>').append(employee.Start_Date)
            ),
            $('<p/>').append(
                'This conditional offer is subject to ',
                $('<strong/>').append(
                    'completion of your First Advantage Background Reference Check'
                ),
                '. Please supply details via the link provided by PayPal as soon as possible. Once critical requirements are completed you will sign PayPal Employment Contract.'
            ),
            $('<p/>').append(
                $('<u/>').append('CASH COMPENSATION:')
            ),
            $('<p/>').append(
                'In line with this appointment your guaranteed basic gross pay per annum will be ',
                $('<strong/>').append(
                    $('<mark/>').append(
                        $('<strong/>').append(
                            'PHP ',
                            employee.Salary_Amount
                        )
                    )
                ),
                ', as detailed below:'
            ),
            $('<ul/>').append(
                $('<li/>').append(
                    'Your monthly basic pay is ',
                    $('<mark/>').append(
                        $('<strong/>').append(
                            'PHP ',
                            employee.SalaryOffered
                        )
                    ),
                    ' and you will also receive monthly allowance of ',
                    $('<strong/>').append('PHP 4,250.00'),
                    '.'
                ),
                $('<li/>').append(
                    'Your net salary will be paid bi-monthly to your BPI Account every 15',
                    $('<sup/>').append('th'),
                    ' and end of the month.'
                ),
                $('<li/>').append(
                    'You will receive guaranteed thirteenth (13',
                    $('<sup/>').append('th'),
                    ') month salary pay. One-month equivalent to be paid either November/December every year.'
                )
            ),
            $('<p/>').append(
                $('<u/>').append('COMPANY GRANTED BENEFITS:')
            ),
            $('<p/>').append(
                'On top of your basic compensation with the company you will be receiving additional company benefits. Your entitlement to these benefits shall be subject to the terms of the applicable/ new company policies, ',
                $('<u/>').append(
                    $('<em/>').append(
                        'which the company may develop and amend from time to time'
                    )
                ),
                '.'
            ),
            $('<ul>').append(
                $('<li/>').append(
                    'Health Insurance (HMO) for the employee worth PHP200,000.00 per illness per year for hospitalization, consultation, outpatient, dental and vision. Employees are covered upon start date of employment. Premium are 100% paid by the company.'
                ),
                $('<li/>').append(
                    'Life, Accident and Disability Insurance equivalent to 36 times of monthly basic compensation. Employees are covered at start date of employment.'
                ),
                $('<li/>').append(
                    'Paid Time Off (PTO) – All Full-Time employees are eligible for 160 hours (20 days for employees working for 8 hours a day and 16 days for employees working for 10 hours a day) of paid time off during their first year of service. 8 additional hours of paid time off is granted for each completed year of service, capped at 5 years.<br>',
                    'In the interest of employee wellbeing, PayPal encourages employees to consume annual PTO. Treatment of unused PTO:',
                    $('<ul/>').append(
                        $('<li/>').append(
                            'Carry forward for maximum 40 hours to following year'
                        ),
                        $('<li/>').append(
                            '40 hours carried forward from previous year can be utilized until 30th of June.'
                        )
                    )
                ),
                $('<li/>').append(
                    'Sick Time Off – 120 hours in a year (15 days for employees working 8 hours a day and 12 days for employees working 10 hours a day). If no utilization of sick time off at all, employee to be granted 3 days of additional PTO the following year.'
                ),
                $('<li/>').append(
                    'Sabbatical Leave after five (5) years of service - employees are eligible for four weeks of paid sabbatical.'
                ),
                $('<li/>').append(
                    'A service-based ',
                    $('<u/>').append(
                        'restricted stock unit (RSU)'
                    ),
                    ' is the right to receive one share of PayPal Common Stock for each unit awarded, subject to vesting conditions, at no cost to you.  Once your RSUs vest, shares of PayPal stock are issued to you at no cost, other than withholding for any applicable taxes. A performance based RSU is granted to you at the target number of units.  Each unit represents the eligibility to receive one share of PayPal Common Stock.  Based on company performance during the performance period (and assuming your continued employment with PayPal on the vesting date), 0%-200% of the AIP Shares will vest following the performance period, at no cost to you.  Once your AIP Shares vest, shares of PayPal stock are issued to you at no cost, other than withholding for any applicable taxes. Please refer to your RSU Agreement for the specific terms and conditions of your award, as well as your country specific tax memo.'
                ),
                $('<li/>').append(
                    'Employee Stock Purchase Plan (ESPP) is a voluntary program which provides eligible employees the opportunity to buy shares of PayPal Common Stock at a discount of 15% from the market price on the Purchase Date. Employees are eligible to contribute between 2% to 10% of their after-tax payroll deductions to purchase shares in this program. Once purchased, ESPP shares are deposited into employee’s E*TRADE Employee Stock Plans account – employees can sell or keep shares as long as they wish.'
                ),
                $('<li/>').append(
                    'Education Assistance Program – Education reimbursement of up to PHP 50,000.00 for qualified certification/ courses per year.'
                )
            ),
            $('<p/>').append(
                $('<u/>').append('CONFIDENTIALITY:')
            ),
            $('<p/>').append(
                'The information contained in this statement is strictly confidential. One of your responsibilities as an employee of PayPal Philippines is to ensure that any information in relation to your compensation and benefits remains private and confidential.'
            ),
            $('<p/>').append(
                'This Offer is subject to the following conditions:'
            ),
            $('<ul/>').append(
                '-	You should complete and pass the First Advantage Background Reference Check and PayPal screening test.<br>',
                '-	You should submit original copy of NBI clearance <br>',
                '-	You should submit pre-employment requirements<br>',
                '-	The satisfaction of PayPal with the results of your pre-employment medical examination once such examination has been completed and/or the completion and return of a Health Warranty & Undertaking certifying fitness for work (this is a requirement of regularization).'
            ),
            $('<p class="mb-40"/>').append(
                'Should you find the above agreement to be acceptable, kindly sign on the space provided below to signify conformity.'
            ),
            $('<p class="mb-40"/>').append(
                'Again, welcome to PayPal Philippines. We look forward to you having a long and fruitful career with us.'
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                'Very Truly Yours,'
            ),
            $('<p/>').append(
                $('<span/>').append('For and on behalf of PayPal Philippines<br>'),
                $('<span id="complimentary-close-signer"/>').append(
                    '<mark id="signatory-complimentary"></mark><br>'
                ),
                $('<span/>').append('Company Signatory')
            )
        )
    );

    $("#markup2").html("").append(
        // OfferClause 2
        $('<div class="offerClause2">').append(
            $('<p/>').append(
                '<strong>Employee:</strong>'
            )
        )
        // end append
    );

    $("#markup3").html("").append(
        // OfferClause 3
        $('<div class="offerClause3">').append(
            $('<p/>').append(
                '<strong>Employer:</strong>'
            )
        )
        // end append
    );

    $("#markup4").html("").append(
        // put sidebar address here
        $('<div class="offerClause4">').append(
            ''
        )
        // end append
    );

    $("#markup5").html("").append(
        // OfferClause 5
        $('<div class="offerClause5">').append(
            (employee.EnityName == 'PayPal SE')  &&
            $('<p style="font-size: 10px !important; margin-top: 20px;"/>').append(
                'Registered in England and Wales No. SE007.Registered office:5 New Street Square London EC4A3TW'
            ),
            (employee.EnityName != 'PayPal SE')  &&
            $('<p style="font-size: 10px !important; margin-top: 20px;"/>').append(
                'Registered in England and Wales No. 5468033.'
            )
        )
        // end append
    );
	
	$.each(markupRoot.find('[data-toggle="popover"]'), function(k,v) {
		let id = makeid();
		$('<div/>').prop('id', id).insertBefore($(v).data('container', '#' + id));
	});    
}

const makeid = function() {
    "use strict";
    const CHAR_LENGTH = 16;
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( var i = 0; i < CHAR_LENGTH; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

$(function() {
    $("#state").val(employee.State);
    employee.State = $("#state option:selected").text();
    employee.Recruiter_Name = $("#recruiter_signature").val();
    
    // render template
    fnView();

    // completed letter
    if (!$("input.calendar_button").length) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

        let arrParts = [
            [1, 'hidden_pg']
        ];
        showCompletedOfferLetter('incomplete','complete',arrParts);
    }
});
