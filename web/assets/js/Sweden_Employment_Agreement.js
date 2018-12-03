// Sweden Employment Agreement
function fnView() {
    $("#markup").html("").append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p class="mb-60 text-center"/>').append(
                $('<strong/>').append('EMPLOYMENT AGREEMENT')
            ),
            $('<p class="hide"/>').text('&nbsp;'),
            $('<p/>').append(employee.Current_Date),
            $('<p class="mb-20"/>').append(
                $('<strong/>').append('<u>THE UNDERSIGNED:</u><br>'),
                (employee.EntityName == 'Tradera Sweden AB' ? 'Tradera Sweden AB, 556569-4642' : ''),
                (employee.EntityName != 'Tradera Sweden AB' ? 'PayPal SE, UK, Filial Sweden, 516405-8264' : ''),
                ', St Eriksgatan 117, 113 43 Stockholm, a company incorporated under the laws of Sweden, hereinafter to be referred to as the ‘Employer’;'
            ),
            $('<p class="mb-20"/>').append('and'),
            $('<p/>').append(
                'Mr/Mrs ' + employee.Full_Legal_Name + ', residing at: ' + employee.Address1 + ' ' + employee.Address2 + ' ' + employee.City + ', ' + employee.State + ', ' + employee.Postal_Code + ', hereinafter to be referred to as the “Employee”;'
            ),
            $('<p/>').append(
                $('<strong/>').append('<u>WHEREAS:</u><br>'),
                'The Employer wishes to employ the Employee, and the Employee has agreed to accept the employment subject to the terms and conditions as set forth below;'
            ),
            $('<p class="mb-30"/>').append(
                $('<strong/>').append('<u>HAVE AGREED AS FOLLOWS:</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 1. Commencement and duration</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    'The Employee will enter into ' + employee.JobType + ' employment commencing on ' + employee.event_start_date + '.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    (employee.ProbationPeriodRequired == 'yes') &&
                    'The Employment shall be subject to a probationary period during an initial period of ' + employee.ProbationPeriodTime + ' months. If not terminated at the latest at the expiry of the probationary period, the employment shall be for an indefinite term.<p class="hide">&nbsp;</p>',
                    (employee.ProbationPeriodRequired != 'yes') &&
                    'Not applicable to employee.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'Either party may terminate the Employment Agreement by giving prior notice of 3 months until the employment has lasted for six years. Thereafter the Employer will follow the notice period legally required in the Swedish Employment Protection Act (1982:80) (“EPA”). <p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'The employee\’s employment shall, if not otherwise agreed, terminate with immediate effect at the age of 67.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'As from ' + employee.event_start_date + ' (‘the Start Date’), this Agreement supersedes all other written or oral agreements between the Employer, or any associated company, and the Employee. For the purposes of this Agreement, “associated company” means a legal entity directly or indirectly controlling or controlled by or under common control with the Employer, irrespective of the country of registration of such legal entity.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    (employee.WorkPermitRequired == 'yes') &&
                    'The employment of the Employee under this agreement is subject always to the Employee having obtained a valid Swedish work permit before the Start Date. For the avoidance of doubt, this agreement will be automatically invalidated without any compensation if the Employee has not obtained a valid Swedish work permit before the Start Date.<p class="hide">&nbsp;</p>',
                    (employee.WorkPermitRequired != 'yes') &&
                    'Not applicable for employee.<p class="hide">&nbsp;</p>'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 2. Function and Scope of Duties</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    'The Employee will be employed as ' + employee.Business_Title + '. The Employee shall perform to the best of his/her abilities all tasks and duties in accordance with the instructions of the Employer and in accordance with the Employer’s Code of Business Conduct as applicable from time to time. The Employer reserves the right to give further instructions as regards to the Employee’s task and duties from time to time. It is understood that the Employee’s work responsibility will include the task of creating products, designs, or other creations that results in intellectual property or other rights which the Employer or its affiliated companies may use in pursuing their business, corporate, or other purposes, initiatives, or objectives.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'The Employee will perform his/her duties at the Employer\'s offices in Stockholm. In order to perform his\/her duties, the Employee may have to travel both within Sweden and to European locations as well as to the affiliated offices in California, USA, and elsewhere.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'The working hours comprise 40 hours per week from Monday to Friday. The Employee is expected to work additional hours if and to the extent that the smooth conduct of business would require so.<p class="hide">&nbsp;</p>'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 3. Salary</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    'The Employee will receive a gross annual base salary of ' + employee.Salary_Currency + ' ' + employee.Salary_Amount + '. The salary is ',
                    (employee.EntityName == 'Tradera Sweden AB') && 'prorated, ',
                    'paid monthly in arrears in twelve equal installments and in accordance with the Employer\’s policy. <p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'The Employee\’s own salary or the salary of other employees is to be kept strictly confidential.<p class="hide">&nbsp;</p>'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 4. Bonus and Other Incentives</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    (employee.AIP == 'Yes') &&
                    'You will be eligible to participate in the PayPal Holdings, Inc. Annual Incentive Plan for a specified fiscal year (AIP) with an annual bonus based on individual achievement as well as company performance. The annual bonus period is from January 1 through December 31. Your target bonus for the AIP is ' + employee.eIP_Target_Pct + '% of your annual base salary, pro-rated based on your hire date and days of service during the AIP bonus period. There is no guarantee any AIP bonus will be awarded or received, and any actual bonus will be determined after the end of the annual bonus period. Any AIP bonus, even if it is made repeatedly or regularly and whatever its amount, can never lead to a vested right for you, the employee.<p class="hide">&nbsp;</p>',
                    (employee.AIP != 'Yes') &&
                    'Section not applicable to employee.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    (employee.AIP == 'Yes') &&
                    'To be eligible to receive any AIP bonus, you must be employed on or before the first business day of the fourth quarter and you must be in continuous employment on the date the bonus is received, subject to applicable laws. If your employment start date with a PayPal company commences on or after the first U.S. business day in the final quarter of the calendar year, your eligibility to participate in the AIP will begin on January 1st of the following calendar year. Any bonus is at PayPal\’s sole and absolute discretion and subject to the terms and conditions of the AIP. PayPal reserves the right, in its sole discretion, to amend, change or cancel the AIP at any time. Further, the bonus plan that you are eligible to participate in may change over time. You acknowledge and agree that PayPal may substitute the plan referenced in this letter and any contract of employment or any offer documentation, as it determines in its sole discretion from time to time.<p class="hide">&nbsp;</p>',
                    (employee.AIP != 'Yes') &&
                    'Section not applicable to employee.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    (employee.Eligible_Sales_Incentive  == 'Yes') &&
                    'The Employee is eligible to participate in a PayPal Sales Incentive Plan (the “Incentive Plan”). The full terms and conditions of the Incentive Plan shall be provided to the Employee separately. <p class="hide">&nbsp;</p>',
                    (employee.Eligible_Sales_Incentive  != 'Yes') &&
                    'Section not applicable to employee.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    (employee.Eligible_Sales_Incentive  == 'Yes' && employee.Sales_Manager == 'Yes') &&
                    'During the first ' + employee.Sales_Pay_Schedule + ' of your employment you will be paid quarterly a non-recoverable draw equivalent to one-quarter of your annual Target Incentive amount in accordance with the Incentive Plan. After ' + employee.Sales_Pay_Schedule + ', the amount of any incentive payment will be dependent on your performance against pre-defined targets in the Incentive Plan.<p class="hide">&nbsp;</p>',
                    (employee.Eligible_Sales_Incentive  != 'Yes' || employee.Sales_Manager != 'Yes') &&
                    'Section not applicable to employee.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    (employee.Eligible_Sales_Incentive  == 'Yes') &&
                    'Any bonus or payment or award under the Incentive Plan shall be determined by the Company in its sole and absolute discretion, subject to the terms and conditions of the Incentive Plan and of such amount, in such form, at such intervals and subject to such conditions as the Company may in its absolute discretion determine from time to time.<p class="hide">&nbsp;</p>',
                    (employee.Eligible_Sales_Incentive  != 'Yes') &&
                    'Section not applicable to employee.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    (employee.Eligible_Sales_Incentive  == 'Yes') &&
                    'The Company reserves the right, in its sole discretion, to amend, change, withdraw or cancel the Incentive Plan at any time. Further, the incentive plan that the Employee is eligible to participate in may change over time. The Employee acknowledges and agrees that the Company may substitute or cancel the Incentive Plan referenced in this addendum or any offer documentation, as it determines in its sole discretion from time to time.<p class="hide">&nbsp;</p>',
                    (employee.Eligible_Sales_Incentive  != 'Yes') &&
                    'Section not applicable to employee.<p class="hide">&nbsp;</p>'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 5. Expenses</u>')
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
                $('<strong/>').append('<u>Article 6. Holidays</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    'The Employer’s policy applies to vacation, which inter alia means that the qualifying year, the vacation year and the calendar year coincides and that vacation pay is paid in accordance with the general principles on the labour market. At the expiry of the employment the Employer shall have the right to deduct from the final salary any vacation that has been taken but not yet earned.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'The Employee is proportionally entitled to 30 days’ holiday per each yearly period of service. <p class="hide">&nbsp;</p>'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 7. Sick Pay</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    'In case of absence due to sickness the provisions of the Swedish Sick Pay Act (Sw. lagen om sjuklön (1991:1047)) shall apply.<p class="hide">&nbsp;</p>'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 8. Pension</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    'The Contributions to social security will be paid as required by law. The Employee is entitled to Pension benefits on successful completion of the probation period, in accordance with the company policy as applicable from time to time.<p class="hide">&nbsp;</p>'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 9. Other Professional Obligations</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    'The Employee is not allowed to undertake other professional activities during the term of the Employment Agreement, except with the prior written consent of the Employer, irrespective of whether or not the Employee receives financial compensation for these activities.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'The Employee shall not be permitted to accept or negotiate, whether directly or indirectly, for his/her personal benefits any commission, advantage or gain, in any form or under any name whatsoever, from customers or suppliers of the Employer or its subsidiaries or affiliated companies.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'Neither during the term of the Employment Agreement nor during a period of 12 months after the termination thereof may the Employee, without the Employer’s prior written consent, directly or indirectly induce employees of the Employer or of a company affiliated with the Employer to terminate their employment contracts, offer them a job, or have them offered a job.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'The Employee gives his/her unambiguous and explicit consent to the Employer processing (including the collection, use, disclosure and transfer) of personal data inside and outside of Sweden, including processing in the European Union and the United States, by Recipients for personal administration, employee, work, and business management purposes. In particular, personal data relating to the Employee will be transferred to PayPal, Inc., in the United States and may be transferred to other affiliated companies and their locations as required for personal administration, employee, work, and business management purposes on a case by case basis.<p class="hide">&nbsp;</p>'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 10. Confidentiality</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    'The Employee shall not, during the term of the Employment Agreement and after the termination of the Employment Agreement, disclose to any third party or use for his/her own benefit any information concerning the business of the Employer or any of its affiliated companies which have become known to the Employee. “Information concerning the business” includes, without limitation, all business, organizational and technical knowledge, know-how, proprietary or confidential information, names or addresses of customers of the Employer or any of its affiliated companies and any other information which is known only to a limited number of persons and which is not intended to become known outside of the Employer or any of its affiliated companies. <p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'All written and other records and all tangibles concerning the Employer or any of its affiliated companies and their business which are in the possession of the Employee shall be carefully kept and shall be immediately returned to the Employer upon its request, and in any case upon the termination of the employment. The Employee shall not be entitled to keep any copies of those records and tangibles. The Employee hereby waives any right to retention in respect of records or tangibles mentioned herein. The Employee shall, furthermore, destroy on his/her own data processing equipment all electronically stored confidential data belonging to the Employer or a company affiliated to the Employer upon the Employer’s request after having submitted a copy thereof to the Employer.<p class="hide">&nbsp;</p>'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 11. Non-Competition</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    'For a period of 12 months after the termination of the employment, the Employee shall not, without the prior written consent of the Employer, engage in any activities that compete, directly or indirectly, with the Employer or its affiliates ("Competitive Activities") worldwide, and the Employee shall not establish, conduct or cause the conduct of any business engaged in Competitive Activities, or take any interest in more than five percent of the total issued share capital in any company whose shares are quoted or dealt in on a recognized stock exchange or be employed in any way whatsoever, whether or not for consideration, by such business engaged in Competitive Activities.  For the purpose of this Article 11, "Competitive Activities" shall mean internet based business to consumer and consumer to consumer trading, including auction and fixed price formats.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'The Employer shall – with the exception of the cases mentioned below – as compensation for the inconvenience that the existing non-competition article causes the Employee pay the Employee per month the difference between the salary paid by the Employer at the time of termination of the employment and the (lower) salary which the Employee earns from any new employment. However, the compensation payable from the Employer shall not exceed sixty (60) percent of the Employee’s monthly salary at the time of the termination of the employment nor be paid during a period which exceeds the period of this competition article. To enable the Employer to calculate the appropriate compensation, the Employee is obliged to inform the Employer of the level of the current salary from any new employment.<br><br><p class="hide">&nbsp;</p>Compensation according to this article shall not be paid during any period for which the Employee receives severance pay from the Employer or when the employment is terminated because of i) the Employee’s retirement ii) the Employer’s termination of the employment due to the Employee’s substantial breach of the obligations under this Employment Agreement.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'The Employer may release the Employee from the non-competition obligation. If so, the Employer is no longer obliged to pay compensation in accordance with article 11.2 above. Should the Employee, when the employment is terminated by either party, request in writing whether the non-compete obligation in article 11.1 shall apply, the Employer shall give such answer within two (2) weeks, otherwise the non-compete obligation shall not apply. <p class="hide">&nbsp;</p>'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 12. Intellectual Property Rights</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    'All intellectual property rights, including but not limited to patent rights, design rights, copyrights and related rights, database rights, trademark rights and chip rights, ensuing, in Sweden and abroad, from the work performed by the Employee under his/her employment contract, will be exclusively vested in the Employer. The Employee may not independently disclose, multiply, use, manufacture, bring on the market or sell, lease, deliver or otherwise trade, offer on behalf of any third party, or commission the registration of the results of his work <p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'Insofar as the rights specified hereinafter are not vested in the Employer by operation of law or on the grounds of the Employment Agreement, the Employee covenants that he/she will transfer and, insofar as possible, hereby transfers to the Employer any intellectual property rights of any nature in or arising from work performed by the Employee in the discharge of his/her duties, both in Sweden and abroad, at the Employer’s costs.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'The Employee acknowledges that his/her salary includes reasonable compensation for the loss of intellectual property rights.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'Insofar as the intellectual property rights are not capable of being transferred and insofar as permitted by law, the Employee hereby waives any intellectual property rights, including the moral rights that may be waived (such as the right to have one’s name stated).<p class="hide">&nbsp;</p>'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 13. Liquidated damages</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-30"/>').append(
                $('<li/>').append(
                    'If the Employee fails to comply with the provisions under article 9.3 (Non-Solicitation), article 10 (Confidentiality), article 11 (Non-Competition) and article 12 (Intellectual Property Rights), the Employee shall, in respect of every breach pay to the Employer a penalty amounting to six (6) times the Employee’s average monthly gross salary with the Employer during the six months preceding the breach or, if the employment has expired, immediately prior to the expiry of the employment. Should the actual loss caused to the Employer exceed this amount, the Employer shall be entitled to damages in respect of such excess amount and/or to take other legal measures.<p class="hide">&nbsp;</p>'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
                $('<strong/>').append('<u>Article 14. Applicable Law</u>')
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<ol class="list-indented mb-40"/>').append(
                $('<li/>').append(
                    'Any amendments or additions to the Employment Agreement shall be in writing providing, however, that the notice of termination shall not require the written form. <p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'The Employment Agreement may only be amended by an instrument in writing duly executed by the parties. <p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'Should any provision of the Employment Agreement be or become invalid, the validity of the other provision(s) shall not be affected, and the invalid clause shall be replaced by such other valid clause that best meets the parties’ common intention when agreeing on the invalid clause.<p class="hide">&nbsp;</p>'
                ),
                $('<li/>').append(
                    'The Employment Agreement is subject to the laws of Sweden.<p class="hide">&nbsp;</p>'
                )
            ),
            $('<p class="hide"/>').append('&nbsp;'),
            $('<p/>').append(
               'Yours sincerely,'
            ),
            $('<p class="mb-60"/>').append(
                'For and on behalf of ',
                (employee.EntityName == 'Tradera Sweden AB') &&
                'Tradera Sweden AB',
                (employee.EntityName != 'Tradera Sweden AB') &&
                'PayPal SE, UK, Filial Sweden<br>',
                $('<span id="company-signatory-complementary" /><br>'),
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

        var arrParts = [
            [1, 'hidden_pg']
        ];

        var arrParts2 = [
            [1, 'hidden_pg5']
        ];

        showCompletedOfferLetter('incomplete2', 'complete2', arrParts2);
    }
});
