/**
 * SERVICES-35977 | Sweden Employment Agreement
 * CHANGE LOGS
 * Add dynamic fields marking
 * 04.16.2019 | jjucutan | Remove parenthesis on article 3 wrapped on salary words; moved comma next to prorated
 * 04.22.2019 | jjucutan | Remove highlighing on prorated condition
 * 02.11.2022 | jjucutan | created offer letter version 4
 * 08.09.2022 | jjucutan | created offer letter version 7
 */
const fnView = function() {
    $("#markup").html("").append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p class="mb-60 text-center"/>').append(
                $('<strong/>').append('EMPLOYMENT AGREEMENT')
            ),
            $('<p class="hide"/>').text('&nbsp;'),
            (employee.EntityName == 'PayPal PLC, Filial Sweden') &&
            $('<p class="mb-20"/>').append(
                $('<strong/>').append(
                    'PayPal PLC, Filial Sweden'
                ),
                ' acting through its branch registered under the laws of Sweden with registration number 516405-8264 and whose registered address is at St Eriksgatan 117, 113 43 Stockholm',
                (employee.EntityAddress == 'Regeringsgatan 65, 111 56 Stockholm, Sweden') &&
                ', with its place of work at Regeringsgatan 65, 111 56 Stockholm, Sweden',
                ', hereinafter to be referred to as ',
                $('<strong/>').append(
                    '“Employer”'
                ),
                ';'
            ),
            (employee.EntityName == 'Tradera Sweden AB') &&
            $('<p class="mb-20"/>').append(
                $('<strong/>').append(
                    'Tradera Sweden AB'
                ),
                ', registered under the laws of Sweden with registration number 556569-4642 and whose registered address is at St Eriksgatan 117, 113 43 Stockholm hereinafter to be referred to as ',
                $('<strong/>').append(
                    '“Employer”'
                ),
                ';'
            ),
            $('<p class="mb-20"/>').append('and'),
            $('<p/>').append(
                $('<mark/>').append(
                    employee.Title
                ),
                ' ',
                $('<mark/>').append(
                    employee.Full_Legal_Name
                ),
                ', residing at: ',
                $('<mark/>').append(
                    employee.Address1
                ),
                ' ',
                (employee.Address2.length > 0) && $('<mark/>').append(
                    employee.Address2
                ).append('&nbsp;'),
                ' ',
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
                ),
                ', hereinafter to be referred to as the “Employee”;'
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                'The Employer and the Employee are jointly referred to as the Parties.'
            ),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 1. The Employment in General </u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    'The Employee will enter into full-time employment in the role of ',
                    $('<mark/>').append(
                        employee.JobTitle
                    ),
                    ' effective as of ',
                    $('<mark/>').append(
                        employee.event_start_date
                    ),
                    ' (the “Employment”); subject to the satisfactory completion of relevant background checks.<p class="hide">&nbsp;</p>'
                ),
                (employee.ProbationPeriodRequired === "yes") && 
                $('<li class="marked" data-toggle="popover" data-placement="top" data-content="Probation Period Required"/>').append(
                    'The Employment shall be subject to a probationary period for an initial period of ',
                    $('<mark/>').append(
                        employee.ProbationPeriodTime
                    ),
                    ' months. If not terminated at the latest at the expiry of the probationary period, the employment shall be converted to an indefinite employment.<p class="hide">&nbsp;</p>'
                ),
                (employee.ProbationPeriodRequired === "no") && 
                $('<li class="marked" data-toggle="popover" data-placement="top" data-content="Probation Period Required"/>').append(
                    'Not applicable to employee.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'This Agreement supersedes all other written or oral agreements between the Employer, or any associated company, and the Employee. For the purposes of this Agreement, “associated company” means a legal entity directly or indirectly controlling or controlled by or under common control with the Employer, irrespective of the country of registration of such legal entity.<p class="hide">&nbsp;</p>'
                ),
                (employee.Continuous_Service === "Yes") && 
                $('<li class="marked" data-toggle="popover" data-placement="top" data-content="Continuous Serivce"/>').append(
                    'This Agreement follows on from and replaces the employment contract concluded with ',
                    $('<mark/>').append(
                        employee.EntityName
                    ),
                    ' since ',
                    $('<mark/>').append(
                        moment(employee.Continuous_Service_Date).format('D MMMM YYYY')
                    ),
                    '.'
                ),
                (employee.Continuous_Service != "Yes") && 
                $('<li class="marked" data-toggle="popover" data-placement="top" data-content="Continuous Serivce"/>').append(
                    'Not applicable to employee.<p class="hide">&nbsp;</p>'
                ),
                $('<li class="marked" data-toggle="popover" data-placement="top" data-content="Work Permit Required"/>').append(
                    (employee.WorkPermitRequired == 'yes') &&
                    'The employment of the Employee under this agreement is subject always to the Employee having obtained a valid Swedish work permit before the start of the Employment. For the avoidance of doubt, this agreement will be automatically invalidated without any compensation if the Employee has not obtained a valid Swedish work permit before the start of the Employment.<p class="hide">&nbsp;</p>',
                    (employee.WorkPermitRequired != 'yes') &&
                    'Not applicable for employee.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'To the best of his/her abilities, the Employee shall perform all tasks and duties in accordance with the instructions of the Employer and in accordance with the Employer’s Code of Business Conduct as applicable from time to time. The Employer reserves the right to give further instructions regarding the Employee’s tasks and duties from time to time. It is understood that the Employee’s work responsibility will include the task of creating products, designs, or other creations that result in intellectual property or other rights which the Employer or its affiliated companies may use in pursuing their business, corporate, or other purposes, initiatives, or objectives.'
                ),
                (employee.Workplace_Model == 'In-Office') &&
                $('<li class="marked" data-toggle="popover" data-placement="top" data-content="In Office"/>').append(
                    'The Employee’s usual place of work will be ',
                    $('<mark/>').append(
                        employee.Location,
                    ),
                    ',  however, the Employee’s usual place of work may change, as directed by the Employer, in line with the business requirements of the Employer. The Employee may also be required to travel within Stockholm, Sweden, and/or abroad for the performance of their duties. The Employee will not be required to reside anywhere outside of Stockholm, Sweden for a total period of more than [one month] at any one time, other than by mutual consent.'
                ),
                (employee.Workplace_Model == 'Virtual Flex') &&
                $('<li class="marked" data-toggle="popover" data-placement="top" data-content="Virtual Flex"/>').append(
                    'The Employee’s role may be performed either at the PayPal office in ',
                    $('<mark/>').append(
                        employee.Location
                    ),
                    'or remotely with the use of virtual working tools the Company provides. If the Employee choose to work remotely, he/she must do so from a location near to the Stockholm PayPal office within Sweden. In addition to any in-person working, the Employee may also be required to attend a PayPal office from time to time for in-person collaboration or as per business needs.  The Company may amend or end the location of the Employee’s role or remove the ability to work virtually at any time and will give the Employee notice (but will not provide any compensation) if the Company does so.  The Employee may find more details, including the Company’s expectations of the Employee, within its Offsite Working Policy and associated policies.'
                ),
                (employee.Workplace_Model == 'Virtual') &&
                $('<li class="marked" data-toggle="popover" data-placement="top" data-content="Virtual"/>').append(
                    'The Employee’s role is performed remotely within Sweden with the use of virtual working tools the Company provides. The Employee may, however, be required to attend a PayPal office from time to time for in-person collaboration or as per business needs. The Employee may find more details, including the Company’s expectations of the Employee, within its Offsite Working Policy and associated policies.'
                ),
                $('<li/>').append(
                    'The working hours comprise 40 hours per week from Monday to Friday. The Employee is expected to work additional hours if and to the extent that the smooth conduct of business would require so.'
                ),
                $('<li/>').append(
                    'The Employee is not allowed to undertake other professional activities during the term of the Employment, except with the prior written consent of the Employer, irrespective of whether or not the Employee receives financial compensation for these activities.'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 2. Salary and Benefits</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    'The Employee will for the purposes of this Employment receive a gross annual base salary of ',
                    $('<mark/>').append(
                        employee.Salary_Currency
                    ),
                    ' ',
                    $('<mark/>').append(
                        employee.Salary_Amount
                    ),
                    $('<mark/>').append(
                        employee.SalaryWords
                    ),
                    '. The salary is paid monthly in arrears in twelve (12) equal installments and in accordance with the Employer\’s policy. <p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'The salary is subject to revision on a yearly basis in accordance with the Employer’s policy. The Employer is however under no obligation to increase the salary at such revision.'
                ),
                $('<li/>').append(
                    'The Employee is not entitled to any additional compensation for any overtime, travel time or similar under the Employment.'
                ),
                $('<li/>').append(
                    'The Employee is entitled to pension benefits in accordance with the Employer’s pension policy in force from time to time.'
                ),
                $('<li/>').append(
                    'The Employee shall be covered by employment related insurances such as occupational life and health insurance in accordance with the Employer’s policy in force from time to time.'
                ),
                $('<li/>').append(
                    'Any bonus or incentive plan eligibility will be confirmed separately to the Employee by means of a side letter to this Agreement at the Employer’s full discretion.'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            
            $('<p/>').append(
                $('<strong/>').append('<u>Article 3. Expenses</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    'The Employer will compensate the Employee for reasonable expenses directly related to the performance of his/her work and that are in compliance with the Employer’s travel and expense guidelines.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'A statement of expenses must be submitted to the Employer prior to the end of the month following the month in which the expenses were incurred. Expenses can be claimed upon submission of the original receipt(s), specifying the business-related reason for which they were incurred. The Employer will pay the expenses within one month after the Employee has claimed them, provided that the statement of expenses is sufficiently itemized, accompanied by the original receipt(s) and approved by the Employer.<p class="hide">&nbsp;</p>'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 4. Holidays</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    $('<p/>').append(
                        'The Employee is entitled to 30 days of annual holiday. '
                    ),
                    'The Employer’s policy inter alia means that the qualifying year, the vacation year and the calendar year coincide, and that vacation pay is paid in accordance with the Annual Leave Act (Sw. semesterlagen (1977:480)). Upon termination of employment, the Employer shall have the right to deduct from the final salary any vacation that has been taken but not yet earned.<p class="hide">&nbsp;</p>'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 5. Sick Pay</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    'In case of absence due to sickness the provisions of the Swedish Sick Pay Act (Sw. lagen om sjuklön (1991:1047)) shall apply.<p class="hide">&nbsp;</p>'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 6. Confidentiality</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    'Throughout the Employment, the Employee will gain access to confidential and commercial information and processes which pertain to the Employer’s and group companies’ businesses, customers, services and products (',
                    $('<strong/>').append(
                        '“Trade Secrets”'
                    ),
                    '). The term Trade Secrets also comprises such information which the Employee compiles and develops himself/herself. Trade Secrets can be oral as well as written.'
                ),
                $('<li/>').append(
                    'The Employee may not, neither during the Employment nor after its termination (however arising), use or disclose to any person, company or other organization whatsoever and shall use his/her best endeavors to prevent the publication or disclosure of any Trade Secrets. This shall not apply to:<br><br>',
                    $('<p class="hide"/>').append('&nbsp;'),
                    $('<ul>').append(
                        $('<li/>').append(
                            '(a) Any use or disclosure authorized by the Employer or required by law; or'
                        ),
                        $('<li/>').append(
                            '(b)	Any information which is already in, or comes into, the public domain other than through the Employee’s unauthorized disclosure.'
                        )
                    )
                ),
                $('<li/>').append(
                    'The Employee agrees to take all reasonable steps to safeguard Trade Secrets in accordance with the confidentiality requirements in order to protect them from unauthorized access or amendment.'
                ),
                $('<li/>').append(
                    'All written and other records and all tangibles concerning the Employer or any of its affiliated companies and their business which are in the possession of the Employee shall be carefully kept and immediately immediately returned to the Employer upon its request, and in any case upon the termination of the employment. The Employee shall not be entitled to keep any copies of those records and tangibles. '
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 7. Intellectual Property Rights</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    'All intellectual property rights, including but not limited to patent rights, design rights, copyrights and related rights, database rights, trademark rights and chip rights, ensuing, in Sweden and abroad, from the work performed by the Employee under during the Employment is transferred by the Employee to and exclusively vested in the Employer. The Employee may not independently disclose, multiply, use, manufacture, bring on the market or sell, lease, deliver or otherwise trade, offer on behalf of any third party, or commission the registration of the results of his work <p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'Insofar as the rights specified hereinafter are not vested in the Employer by operation of law or on the grounds of this Agreement, the Employee covenants that he/she will transfer and, insofar as possible, hereby transfers to the Employer any intellectual property rights of any nature in or arising from work performed by the Employee in the discharge of his/her duties, both in Sweden and abroad, at the Employer’s costs.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'The Employee acknowledges that his/her salary includes reasonable compensation for any loss of intellectual property rights.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'Insofar as the intellectual property rights are not capable of being transferred and insofar as permitted by law, the Employee hereby waives any intellectual property rights, including the moral rights that may be waived (such as the right to have one’s name stated).<p class="hide">&nbsp;</p>'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 8. Non-Solicitation Restrictions</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    'The Employee undertakes to, neither during the Employment, nor within a period of six (6) months after the effective date of termination, neither directly nor indirectly, i.e. neither as an employee, contractor, owner, director nor in any other way:<br><br>',
                    $('<p class="hide"/>').append('&nbsp;'),
                    $('<ul/>').append(
                        $('<li/>').append(
                            '(a) induce or endeavor to induce B2B customers or other business partners of the Employer, or anyone who has been a customer/partner of the Employer during the past twelve (12) months, to terminate or not to prolong an agreement with the Employer, or assist in any such action; or'
                        ),
                        $('<li/>').append(
                            '(b) induce or endeavor to induce an employee of the Employer, or an individual who has been employed by the Employer during the past twelve (12) months, and who the Employee used to work with, to leave the employment, or assist in any such action.'
                        )
                    )
                ),
                $('<li/>').append(
                    'In the event of a breach of the non-solicitation restrictions above, the Employee shall, in respect of each and every breach, pay a fine to the Employer corresponding to an amount of six (6) monthly incomes. Should the breach be of an ongoing nature, the Employee shall pay the fine for each week he/she is in breach. The monthly income shall be calculated as the average of the compensation which the Employee has received (fixed and variable compensation) during the previous twelve-month period; but only taking into account those months when the Employee was working full time. In the event the breach has occurred after the Employment had ceased, the monthly income shall be calculated as per the effective date of termination of Employment. '
                ),
                $('<li/>').append(
                    'Should the Employer suffer a loss exceeding the abovementioned fine, additional damages shall be payable, corresponding to an amount which (together with the fine) equals the actual loss. The Employer may also seek a court decision in order to obtain an interim prohibition under penalty of a fine.'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            // TODO if not complete restrictions
            $('<p/>').append(
                $('<strong/>').append('<u>Article 9. Non-Compete Restrictions</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            (employee.Non_Compete == 'Y') &&
            $('<ol  class="marked" data-toggle="popover" data-placement="top" data-content="Non-Compete Restrictions"/>').append(
                $('<li/>').append(
                    'The Employee will as a natural part of the Employment gain access to company-specific know-how and trade secrets of a high value to the Employer. It would cause the Employer significant damage if such information were to be used in a competing business. Such trade secrets, which have a long life-span, include (but are not limited to) customer lists, pricing models and expansion plans. A condition for the Employment is accordingly that the Employer can disclose such information to the Employee under the assurance that the information will not be used in any competing business.'
                ),
                $('<li/>').append(
                    'In light of the above, the Employee undertakes not to, neither during the Employment nor for a period of nine (9) months following the termination of Employment, neither directly nor indirectly, i.e., not as an employee, consultant, owner, director or otherwise:',
                    $('<ul/>').append(
                        $('<li/>').append(
                            '(a) provide products or services similar to those provided by the Employer for a party other than the Employer;'
                        ),
                        $('<li/>').append(
                            '(b) represent a party other than the Employer in negotiations regarding the provision of products or services similar to those provided by the Employer;'
                        ),
                        $('<li/>').append(
                            '(c) assist in the breach of contract or alteration of contract or other custom, in a situation where the Employer takes part in or otherwise benefits from; or'
                        ),
                        $('<li/>').append(
                            '(d) take initiative to what might lead to any of the situations outlined in the above sections (a), (b) and/or (c).'
                        )
                    )
                ),
                $('<li/>').append(
                    'The Employee will be entitled to compensation in case the non-competition restrictions outlined above in this article section 2 (a) – (d) (the “',
                    $('<strong/>').append(
                        'Non-Compete Restrictions'
                    ),
                    '”) are in force after the effective date of termination of Employment and are being observed by the Employee. However, no compensation will be paid if the Employment was terminated due to retirement or a termination without notice (Sw. avsked). '
                ),
                $('<li/>').append(
                    'The compensation according to this article section 3 shall be paid on a monthly basis and shall correspond to the monthly income received by the Employee after deduction of other income which the Employee has received, or with reasonably demanding effort would have received during the same period of time considering his/her education and experience. However, the compensation shall not in any case exceed sixty (60) percent of the Employee’s monthly income. Monthly income means the average of the compensation which the Employee has received (fixed and variable compensation) during the previous twelve-month period; but only taking into account those months when the Employee has worked to a normal extent. '
                ),
                $('<li/>').append(
                    'However, no compensation according to this article section 3 will be paid in case the lower income is not related to the fact that the Non-Compete Restrictions apply.'
                ),
                $('<li/>').append(
                    'Should the Employee wish to be compensated in accordance with this article section 3, he/she shall inform the Employer of this in writing and continuously keep the Employer informed of any income and other relevant information as the Employer requires.'
                ),
                $('<li/>').append(
                    'The Employer may at any time and at its sole discretion release the Employee from the Non-Compete Restrictions by means of a written notification. The Employee’s entitlement to compensation will then cease one (1) month after the receipt of the notification. The Employee is also entitled to demand a notification in writing regarding whether or not the Employer aims to invoke the Non-Compete Restrictions; and whether the Employer considers the Non-Compete Restrictions to interfere with a specific potential employment or business operation. Upon such request, Employer shall revert within two (2) weeks of receiving the request.'
                ),
                $('<li/>').append(
                    'In the event of a breach of the Non-Compete Restrictions, the Employee shall, in respect of each and every breach, pay a fine and/or damages to the Employer as outlined in article 8 section 3.'
                ),
                $('<li/>').append(
                    'The Non-Compete Restrictions shall not apply in the situation where the Employee has been dismissed due to redundancy reasons (Sw. arbetsbrist).'
                ),
                $('<li/>').append(
                    'Should an action constitute a breach of both the non-solicitation restriction in the above article 9 and the Non-Compete Restrictions in this article section 2, the Employer can only claim compensation in accordance with one of the provisions, i.e. either according to article 8 section 3. or this article section 8.'
                )
            ),
            (employee.Non_Compete != 'Y') &&
            $('<ol class="marked" data-toggle="popover" data-placement="top" data-content="Non-Compete Restrictions"/>').append(
                $('<li/>').append(
                    'Not applicable for employee.'
                )
            ),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 10. Termination</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    'Either party may terminate the Employment by giving prior notice of three (3) months until the employment has lasted for six (6) years. Thereafter, the Employer will follow the longer notice period legally required as set forth in the Swedish Employment Protection Act (',
                    $('<en/>').append(
                        'Sw. lagen om anställningsskydd (1982:80)'
                    ),
                    '). '
                ),
                $('<li/>').append(
                    'In case the Employee acts fraudulently or grossly neglects his/her obligations towards the Employer, the Employment may be terminated with immediate effect. '
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 11. Processing of Personal Data</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ul class="list-indented mb-40"/>').append(
                $('<p/>').append(
                    'The Employer respects the privacy of all employees and will comply with all applicable laws regarding processing of  personal information. All such personal  information is processed in accordance with the PayPal Employee Privacy Statement, a copy of which has been given  to the Employee in connection with this Agreement. The Employee acknowledges that he/she has reviewed and understands the Employee Privacy Statement.'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 12. No Misrepresentation</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ul class="list-indented mb-40"/>').append(
                'The Employee shall at all times during and after the term of the Employment Agreement accurately represent his/her position, title, role description and duties under the Employment Agreement, including in any dealings with PayPal customers and suppliers and in his/her resume, social media profiles and pages (including without limitation any LinkedIn or Facebook profile), website, email signature and business card.'
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 13. Applicable Law</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-40"/>').append(
                $('<li/>').append(
                    'Any amendments or additions to this Agreement shall be made in writing. This Agreement may only be amended by an instrument in writing duly executed by all Parties.'
                ),
                $('<li/>').append(
                    'Should any provision of this Employment Agreement be or become invalid, the validity of the other provision(s) shall not be affected, and the invalid clause shall be replaced by such other valid clause that best meets the parties’ common intention when agreeing on the invalid clause.'
                ),
                $('<li/>').append(
                    'The Employment Agreement is subject to the laws of Sweden. Any dispute, controversy or claim that may arise regarding the origin, interpretation or application of this Agreement or derogating from this Agreement, shall, if not settled through consultations between the Parties, be solved by general court.'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
               'Yours sincerely,'
            ),
            $('<p class="mb-60"/>').append(
                'For and on behalf of ',
                $('<mark/>').append(
                    employee.EntityName
                ),
                '<br/>',
                // $('<mark id="company-signatory-complementary" /><br>'),
                'Company Signatory'
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
               'I agree with the Terms and Conditions of my Employment as set out or referred to above.'
            )
        )
    );

    $("#markup2").html("").append(
        // OfferClause 2
        $('<div class="offerClause2">').append(
            $('<p/>').html(
                '<strong>Employee:</strong>'
            )
        )
        // end append
    );

    $("#markup3").html("").append(
        // OfferClause 3
        $('<div class="offerClause3">').append(
            $('<p/>').html(
                '<strong>Employer:</strong>'
            )
        )
        // end append
    );

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
        let arrParts2 = [
            [1, 'hidden_pg5']
        ];
        showCompletedOfferLetter('incomplete','complete',arrParts);
        showCompletedOfferLetter('incomplete2','complete2',arrParts2);
    }
});
