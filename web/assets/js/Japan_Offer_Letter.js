/**
 * SERVICES-35974 | PayPal - Create Japan Offer Letter
 * Japan_Offer_Letter
 * 02/27/2019 | jjucutan | display complimentary close addressee when addressee or new hire is signed in
 * 04/05/2021 | anati | created Version_5
 * 09/28/2021 | anati | created Version_6
 * 09/08/2022 | jjucutan | created Version_7, created missing PDFs from previous version
 *  added place of work with workplace_model logic, added data protection section, revise numbering
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
                '<br>',
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
                'Dear ',
                $('<mark/>').append(
                    (employee.Preferred_First_Name ? employee.Preferred_First_Name : employee.First_Name)
                ),
                ','
            ),
            $('<p/>').append(
                'We, PayPal Pte. Ltd. Tokyo Branch (the “Company” or “PayPal”), are pleased to offer you employment as the ',
				$('<mark/>').append(
                    employee.Job_Title
                ),
				', (level ',
				$('<mark/>').append(
                    employee.SalaryGradeLvl
                ),
				') with the Company upon the following terms and conditions. This offer of employment is contingent upon the successful completion of the standard PayPal background verification and a three-month probationary period. This offer is also conditional upon you completing, to the satisfaction of the Company, a declaration that you are a Fit & Proper person for the purposes of any relevant regulation or law. PayPal reserves the right to revoke this offer if the results of the background check or the responses you provide in the Fit & Proper declaration are not to the satisfaction of the Company',
				(employee.ProbationPeriodRequired == 'yes') &&	
				', or prior to the expiration of the probationary period.',
				(employee.ProbationPeriodRequired != 'yes') &&	
				'.'
            ),
            $('<p/>').append(
                $('<strong/>').append('<u>1. Appointment</u><br>'),
                'You shall be employed with effect from ',				
                $('<mark/>').append(                    
					(employee.Start_Date=='NaN' ? '' : employee.Start_Date)
                ),
				'.'
            ),
            $('<p/>').append(
			    $('<strong/>').append('<u>2. Probationary Period and Confirmation</u><br>')
			),            
			(employee.ProbationPeriodRequired == 'yes') &&
			$('<div class="marked" data-toggle="popover" data-placement="top" data-content="Probation Period Required"/>').append(
				$('<p/>').append('You will be required to serve a probationary period of three (3) months, during which your employment with the Company may be terminated by either party giving to the other seven (7) days’ written notice or paying salary in lieu thereof. The probationary period may be extended at the discretion of the Company for an additional three (3) months.')
			),		
            (employee.ProbationPeriodRequired != 'yes') &&
			$('<div class="marked" data-toggle="popover" data-placement="top" data-content="Probation Period Required"/>').append(
				$('<p/>').append('Section not applicable to employee.')
			),
            $('<p/>').append(
			    $('<strong/>').append('<u>3. Place of Work</u>')
			),            
            (employee.Workplace_Model == 'In-Office') &&
            $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Workplace Model = In-Office"/>').append(
                $('<p/>').append(
                    'You are required to work from the Company’s office located at ',
                    $('<mark/>').append(employee.LOCATION_DISPLAYNAME),
                    '. From time to time, you may be required to work at other locations, as directed by the Company.'
                )
            ),
            (employee.Workplace_Model == 'Virtual Flex') &&
            $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Workplace Model = Virtual Flex"/>').append(
                $('<p/>').append(
                    'Your place of work is the ',
                    $('<mark/>').append(employee.LOCATION_DISPLAYNAME),
                    ' PayPal office.  However, your role may be performed outside of a PayPal office part of the time with the use of virtual working tools we provide. You must work virtually from a location near to the ',
                    $('<mark/>').append(employee.LOCATION_DISPLAYNAME),
                    ' PayPal office within Japan. In addition to any in-person working, you may also be required to attend a PayPal office for in-person collaboration. We may amend or end the location of your role or remove the ability to work virtually at any time and will give you notice (but will not provide any compensation) if we do so. You may find more details, including our expectations of you, within our Offsite Working Policy and associated policies.'
                )
            ),
            (employee.Workplace_Model == 'Virtual') &&
            $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Workplace Model = Virtual"/>').append(
                $('<p/>').append(
                    'Your place of work is the ',
                    $('<mark/>').append(employee.LOCATION_DISPLAYNAME),
                    ' PayPal office.  However, your role may be performed outside of a PayPal office within Japan with the use of virtual working tools we provide. You may also be required to attend a PayPal office for in-person collaboration.  You may find more details, including our expectations of you, within our Offsite Working Policy and associated policies.'
                )
            ),
            $('<p/>').append(
                $('<strong/>').append('<u>4. Salary</u><br>'),
                'You will be paid an annual salary of ',
                $('<mark/>').append(
                    employee.Salary_Currency
                ),
                ' ',
                $('<mark/>').append(
                    employee.Salary_Amount
                ),
                ' per annum divided by 12 payments, once per month paid on the last business day of each month. This sum is to be paid in Japanese Yen and will be paid by remittance to the bank account designated by you. The compensation will be subject to deduction for Japanese income tax, inhabitant’s tax and employee’s portion of social and labor insurance premiums in accordance with the relevant laws of Japan. Your compensation will be reviewed annually. You are not entitled to a retirement allowance.'
            ),
            $('<p/>').append(
				(employee.Hire_on_Bonus_Eligible == 'Yes') &&
				$('<span/>').append(
					'In addition, as agreed PayPal will provide a one-off sign on bonus of JPY ',
					$('<mark/>').append(
						employee.HIRE_ON_BONUS_AMOUNT
					),
					'. The sign on bonus letter is attached and this amount will be paid in the first pay period after commencement with PayPal. This is subject to all standard employment related taxes applicable in Japan.'
				)
            ),	
            $('<p/>').append(
			    $('<strong/>').append('<u>5. Bonus Eligibility</u><br>')
			),
            (employee.AIP == 'Yes') &&
			$('<div class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Annual Incentive Plan (AIP)"/>').append(
				$('<p/>').append('You will be eligible to participate in the PayPal Holdings, Inc. Annual Incentive Plan for a specified fiscal year (AIP) with an annual bonus based on individual achievement as well as company performance.  The annual bonus period is from January 1 through December 31. Your target bonus for the AIP is ',
				$('<mark/>').append(
					employee.EIP_Target_Percent
				),
				'% of your annual base salary, pro-rated based on your hire date and days of service during the AIP bonus period.  There is no guarantee any AIP bonus will be awarded or received, and any actual bonus will be determined after the end of the annual bonus period. Any AIP bonus, even if it is made repeatedly or regularly and whatever its amount, can never lead to a vested right for you, the employee.',
				'<br>&nbsp;<br>',
				'To be eligible to receive any AIP bonus, you must be employed before October 1st and you must be in continuous employment on the date the bonus is received, subject to applicable laws. If your employment start date with a PayPal company commences on or after October 1st, your eligibility to participate in the AIP will begin on January 1st of the following calendar year. Any bonus is at PayPal’s sole and absolute discretion and subject to the terms and conditions of the AIP.  PayPal reserves the right, in its sole discretion, to amend, change or cancel the AIP at any time.  Further, the bonus plan that you are eligible to participate in may change over time.  You acknowledge and agree that PayPal may substitute the plan referenced in this letter and any contract of employment or any offer documentation, as it determines in its sole discretion from time to time.')
			),	
            (employee.Sales_Incentive_Plan == 'Yes') &&				
			$('<div class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Sales Incentive Plan"/>').append(
				$('<p/>').append('You will be eligible to participate in the Company’s Sales Incentive Plan (‘Incentive Plan’). The full terms and conditions of the Incentive Plan shall be provided to you separately.')
			),		
            $('<p/>').append(
                $('<strong/>').append('<u>6. Governing Law</u><br>'),
                'The terms of your employment shall be governed by and construed in accordance with the laws of Japan. The parties shall submit to the non-exclusive jurisdiction of the courts of Tokyo, Japan. In the event that any of the provisions of this agreement shall be determined invalid, void or unenforceable, such provision may be severed without affecting the enforceability of the other provisions in this agreement and the remaining provisions of this agreement shall continue in full force and effect.'
            ),
            $('<p/>').append(
                $('<strong/>').append('<u>6. Work Rules and Corporate Policies</u><br>'),
                'You will be required to comply with the Work Rules and various corporate polices communicated to you from time to time. During your employment with the Company, you shall perform such duties as may from time to time be assigned to you and comply with all reasonable directions made by the Company.'
            ),
            $('<p/>').append(
                'You shall at all times accurately represent your position, title, role description and duties, including in any dealings with PayPal customers and suppliers and in your resume, social media profiles and pages (including without limitation any LinkedIn or Facebook profile), website, email signature and business card.'
            ),
            $('<p/>').append(
                'You shall also observe and comply with all of the rules, regulations and policies of the Company as may from time to time be made or given. Items which are covered in those policies include:'
            ),
            $('<ul class="list-indented" id="no-margin"/>').append(
				$('<li/>').append('Annual Performance Review'),
				$('<li/>').append('Hours of Work'),
				$('<li/>').append('Annual Leave'),
				$('<li/>').append('Expense Reimbursement'),
				$('<li/>').append('Medical Benefits'),
				$('<li/>').append('Conduct and Discipline'),
				$('<li/>').append('Information Security Policy'),
				$('<li/>').append('Insider Trading Policy (Attached hereto)'),
				$('<li/>').append('Fit and Proper Policy (Attached hereto)'),
				$('<li/>').append('Conflict of Interest Policy and Code of Conduct'),
				$('<li/>').append('Corporate Privacy Policy (Attached hereto)'),
				$('<li/>').append('Employee Proprietary Information and Inventions Agreement (Attached hereto)<br>&nbsp;<br>')
            ),
            $('<p/>').append(
                $('<strong/>').append('<u>8. Termination</u><br>'),
                'Upon signing this offer letter, after the probationary period referred to above, this Agreement may be terminated by you upon 30 days’ written notice.  The Company reserves the right to require you not to attend work and/or not to undertake all or any of your duties of employment during any period of notice (whether given by you or the Company).  However, the Company shall continue to pay your salary and contractual benefits whilst you remain employed by the Company.  The Company may choose to pay you 30 day’s salary in lieu of having you work during the 30-day notice period in its sole discretion.'
            ),
            $('<p/>').append(
                'The Company shall be entitled to terminate your employment immediately upon written notice (but without prejudice to the rights and remedies of the Company for any breach of this Agreement and to your continuing obligations under this Agreement) for any “just cause” including, but not limited to, the following:'
            ),
            $('<ul class="list-indented" id="no-margin2"/>').append(
                $('<li/>').append(
                    'if you are dishonest or engaged in serious or persistent misconduct or, without reasonable cause, neglect or refuse to attend to your duties or fail to perform any of your obligations hereunder, or fail to observe the Company\'s disciplinary rules or any other regulations of the Company from time to time in force;<br>&nbsp;'
                ),
                $('<li/>').append(
                    'if you are incapacitated by illness or otherwise unable to perform your duties hereunder for a period totalling in aggregate 6 months in any period of 12 consecutive calendar months; or<br>&nbsp;'
                ),
                $('<li/>').append(
                    'if you become bankrupt or have a receiving order made against you or make any general composition with your creditors.<br>&nbsp;'
                )
            ),
            $('<p/>').append(
                'After your employment ends for any reason, you shall not represent that you are employed by, engaged as a consultant for or in any other service relationship (collectively, an “Affiliation”) with the Company or any related corporation.  This obligation includes ensuring that at all times after your employment ends, that your resume, social media profiles and pages (including without limitation any LinkedIn or Facebook profile), website, email signature and business card shall not indicate that you have any Affiliation with the Company or any related corporation.  In addition, you agree that any statements that you make in social media, in resumes and otherwise about your activities on behalf of the Company and any related corporation shall be a reasonable and accurate summary. '
            ),
            $('<p/>').append(
                $('<strong/>').append('<u>9. Non-Competition</u><br>'),
                'You shall not during and at any time for the period of one year after termination of your employment either on your own account or in conjunction with or on behalf of any other person, firm or company solicit or entice away or attempt to solicit or entice away from the Company the custom of any person, firm, company or organisation who shall at any time within one year prior to the date of termination of your employment (“Termination Date”) have been a customer or client or in the habit of dealing with the Company and with whom you have had significant contact in the course of your employment.'
            ),
            $('<p/>').append(
                $('<strong/>').append('<u>10. Data Protection</u><br>'),
                'We respect the privacy of all employees and will comply with all applicable laws regarding processing of personal information. All such personal information is processed in accordance with the PayPal Employee Privacy Statement, a copy of which has been given to you in connection with this Agreement. You acknowledge that you have reviewed and understand the Employee Privacy Statement.'
            ),
            $('<p/>').append(
                'You shall not during your employment and at any time for the period of 6 months after the Termination Date, either on your own account or in conjunction with or on behalf of any person, firm, corporation or organisation, carry on or be engaged, concerned or interested, directly or indirectly, in Japan, whether as principal, agent, shareholder, director, employee, partner or otherwise in carrying on any business similar to or competing with the business of the Company as at the Termination Date, except with the prior written consent of the Company. For the avoidance of doubt, similar or competing businesses in relation to the Company shall include but not be limited to e-commerce, online auctions, online classifieds, online shopping and online retail businesses.'
            ),
            $('<p/>').append(
                'You shall not either for your own account or as representative or agent for any third party, persuade, induce, encourage or procure any employee employed by the Company to become employed by or interested directly or indirectly in any manner in any business which is in competition with the business carried on by the Company or terminate his employment with the Company.'
            ),
            $('<p/>').append(
                'You acknowledge that:  Each of the foregoing sub clauses constitutes an entirely separate and independent restriction on you; and the duration, extent and application of each of the restrictions is no greater than is necessary for the protection of the proprietary interests of the Company.'
            ),
            $('<p/>').append(
                'Notwithstanding the above, you shall be entitled to enter into employment with any other related corporation of the Company.'
            ),
            $('<p/>').append(
                'Each undertaking and agreement contained in this Clause shall be read and construed independently of the other undertakings and agreements herein contained so that if one or more should be held to be invalid as an unreasonable restraint of trade or for any other reason whatsoever then the remaining undertakings and agreements shall be valid to the extent that they are held not to be so invalid.'
            ),
            $('<p/>').append(
                'While the undertakings and agreements in this Clause are considered by the Company and you to be reasonable in all circumstances, if one or more should be held to be invalid as an unreasonable restraint of trade or for any other reason whatsoever but would have been held valid if part of the wording thereof had been deleted or the period thereof reduced or the range of activities or area dealt with reduced in scope, the said undertakings and agreements shall apply with such modifications as may be necessary to make them valid and effective.'
            ),
            $('<p class="mb-40"/>').append(
                'Please confirm your acceptance of the above terms and conditions by signing.'
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                'Yours sincerely,'
            ),
            $('<p/>').append(
                $('<span/>').append('For and on behalf of PayPal Pte. Ltd. Tokyo Branch<br>'),
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
        // OfferClause 4
        $('<div class="offerClause4">').append(
            $('<p/>').append(
                'PayPal Pte. Ltd. Tokyo Branch<br>AO Building 15F, 3-11-7<br>Kita Aoyama Minato-ku<br>Tokyo 107 0061'
            )
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
