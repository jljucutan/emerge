/** Singapore Employment Contract
 * 2020-10-27 | jjucutan | created version 5
 * 2021-02-05 | jjucutan | created version 6
 * 2021-02-16 | anati | additional updates
 * 2021-09-24 | cdy | created version 7
 * 2022-09-07 | jjucutan | created version 8
 */

const fnView = function() {
    "use strict";
    $("#markup").html("").append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                $('<mark/>').append(
                    employee.Current_Date
                )
            )
        ),
        $('<div class="offerClause margin-bottom">').append(
            $('<p/>').append(
                $('<mark/>').html(
                    '<strong>'+ employee.Full_Legal_Name + '</strong>'
                ),
                '<br>',
                $('<mark/>').html(
                    employee.Address_Line_1
                ),
                '<br>',
                (employee.Address_Line_2.length > 0) && $('<mark/>').append(
                    employee.Address_Line_2
                ).append('<br>'),
                $('<mark/>').html(
                    employee.City
                ),
                ', ',
                $('<mark/>').html(
                    employee.State
                ),
                ', ',
                $('<mark/>').html(
                    employee.Postal_Code
                )
            )
        ),
        $('<div class="offerClause" style="line-height: 0px;"/>').append(
            $('<p/>').html('&nbsp;')
        ),
        $('<div class="offerClause"/>').append(
            $('<p/>').append(
                'Dear ',
                $('<mark/>').append(
                    employee.Preferred_First_Name.length ? employee.Preferred_First_Name : employee.First_Name
                )
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<p/>').append(
                'We, PayPal Pte Ltd (the "Company" or "PayPal"), are pleased to offer you employment as ',
                $('<mark/>').append(
                    employee.Job_Title
                ),
                ' (Level: ',
                $('<mark/>').append(
                    employee.Job_Grade
                ),
                ') with the Company upon the following terms and conditions. This offer of employment (the "',
                $('<strong/>').text('Agreement'),
                '") is contingent upon (a) the successful completion of a standard PayPal background verification; (b) you completing, to the satisfaction of the Company, a declaration that you are a Fit &amp; Proper person for the purposes of any relevant regulation or law; and (c) you obtaining a valid work pass that enables to you to work and reside in Singapore (&ldquo;<strong>Work Pass</strong>&rdquo;) (if applicable) prior to your start date.&nbsp; PayPal reserves the right to revoke this offer if conditions (a), (b) or (c) are not completed to the satisfaction of the Company.'
            ),
            $('<p class="hide"/>').html('<br>')
        ),
        $('<div class="offerClause"/>').append(
            $('<label/>').html('<strong>1. <u>Appointment </u></strong>'),
            $('<p/>').append('Subject to you having obtained all necessary passport, visa, Work Passes and other required immigration approvals from the relevant government authorities to enable you to reside and to work with the Company in Singapore (if applicable), your employment hereunder shall commence on ',
                $('<mark/>').append(
                    employee.Start_Date
                ),
                '. You acknowledge and agree that the Company has the right to terminate your employment immediately and without notice if the Company fails to hold any requisite approval to employ you or if you are no longer lawfully entitled to work or reside in Singapore at any time during your employment. Your specific duties and responsibilities shall be communicated to you in writing upon commencement of your employment.'),
            $('<p class="hide"/>').html('<br>')
        ),


      
        $('<div class="offerClause"/>').append(
           
            
            $('<label/>').html('<strong>2. <u>Probationary Period</u></strong>'),

            (employee.ProbationPeriodRequired == 'yes') &&
            $('<p/>').append(
                $('<p/>').html('You will be required to serve a probationary period of three months (the “<strong>Probationary Period</strong>”), during which time your employment with the Company may be terminated by either party giving to the other seven (7) days&#39; written notice or paying salary in lieu thereof, subject to the relevant provisions of clause 16 below. The Probationary Period may be reduced or extended at the discretion of the Company.')
            ),
            (employee.ProbationPeriodRequired != 'yes') &&
            $('<p/>').append(
                'Not applicable to Employee'
            ),
            $('<p class="hide"/>').html('<br>')

        ),




        $('<div class="offerClause"/>').append(
            $('<label/>').html('<strong>3. <u>Conduct and Discipline</u></strong>'),
            $('<ul/>').append(
                $('<p/>').append(
                    '3.1 You shall perform such duties as may from time to time be assigned to you and shall comply with all reasonable directions made by the Company.'
                ),
                $('<p/>').append(
                    '3.2 During your employment, your duties and responsibilities shall include (but not in any way be restricted to): '
                ),
                $('<ul/>').append(
                    $('<p/>').append(
                        '(a) faithfully and diligently serving the Company to the best of your ability;'
                    ),
                    $('<p/>').append(
                        '(b) using all reasonable efforts to promote the commercial and ethical interests of the Company and the Group (as defined at clause 13.1 below);'
                    ),
                    $('<p/>').append(
                        '(c) acting in the best interests of the Company and the Group (as defined at clause 13.1 below); and'
                    ),
                    $('<p/>').append(
                        '(d) devoting the whole of your time, attention, skill and abilities exclusively to the affairs of the Company during the hours in which you are required to perform your duties.'
                    )
                ),
                $('<p/>').append(
                    '3.3 You shall not, during your employment with the Company, continue, accept, commence or engage in any other employment or paid or unpaid consulting positions without the prior written approval from the Company (which may be withheld by the Company at its sole discretion).'
                ),
                $('<p/>').append(
                    '3.4 You shall not, during your employment with the Company and after the termination thereof, inaccurately represent your position, title, role description and duties at the Company, including in any dealings with the Company’s customers and suppliers and in your resume, social media profiles and pages (including without limitation any LinkedIn or Facebook profile), website, email signature and business card.'
                )
            ),
            $('<p class="hide"/>').html('<br>')
        ),
        $('<div class="offerClause"/>').append(
            $('<label/>').html('<strong>4. <u>Company Policies </u></strong>'),
            $('<p/>').append(
                'During your employment with the Company, you shall observe and comply with all of the rules, regulations and policies of the Company and PayPal Holdings Inc., as may from time to time be made or given. The Company shall have the right to alter and amend the rules and policies of the Company, and you agree that such alteration or amendment shall become fully effective and a binding term of your employment upon notification to you.'
            ),
            $('<p class="hide"/>').html('<br>')
        ),
        $('<div class="offerClause"/>').append(
            $('<label/>').html('<strong>5. <u>Hours of Work</u></strong>'),
            $('<p/>').append(
                'Your working hours shall be such hours as the Company may from time to time deem appropriate from Monday to Friday and as may be necessary to achieve the purposes of the Company. You may also be required to work overtime in addition to your normal hours or on Saturdays, Sundays and public holidays as required by the Company, in accordance with applicable law. Any overtime shall be compensated in accordance with applicable law.'
            ),
            $('<p class="hide"/>').html('<br>')
        ),
        $('<div class="offerClause"/>').append(
            $('<label/>').html('<strong>6. <u>Place of Work</u></strong>'),
            (employee.Workplace_Model == 'In-Office') &&
            $('<p/>').append(
                'You will be required to work from the Company’s office located at ',
                $('<mark/>').append(employee.LOCATION_DISPLAYNAME),
                '. From time to time, the Company may be required to work at other locations, as directed by the Company.'
            ),
            (employee.Workplace_Model == 'Virtual Flex') &&
            $('<p/>').append(
                'Your role may be performed outside of a PayPal office part of the time with the use of virtual working tools we provide. You must work virtually from a location near to the ',
                $('<mark/>').append(employee.LOCATION_DISPLAYNAME),
                ' PayPal office, within Singapore. In addition to any in-person working, you may also be required to attend a PayPal office for in-person collaboration.  We may amend or end the location of your role or remove the ability to work virtually at any time and will give you notice (but will not provide any compensation) if we do so.  You may find more details, including our expectations of you, within our Offsite Working Policy and associated policies. '
            ),
            (employee.Workplace_Model == 'Virtual') &&
            $('<p/>').append(
                'Your role may be performed outside of a PayPal office, within Singapore with the use of virtual working tools we provide. You may also be required to attend a PayPal office for in-person collaboration.  You may find more details, including our expectations of you, within our Offsite Working Policy and associated policies.'
            ),
            (!['In-Office', 'Virtual Flex', 'Virtual'].includes(employee.Workplace_Model)) &&
            $('<p/>').append(
                'Section not applicable to employee.'
            ),
            $('<p class="hide"/>').html('<br>')
        ),
        $('<div class="offerClause"/>').append(
            $('<label/>').html('<strong>7. <u>Salary </u></strong>'),
            $('<ul/>').append(
                $('<p/>').append('7.1 You will be paid an annual salary of ',
                    $('<mark/>').append(
                        employee.Salary_Currency
                    ),
                    ' ',
                    $('<mark/>').append(
                        employee.Salary_Amount
                    ),
                    ' (amounting to ',
                    $('<mark/>').append(
                        employee.Salary_Currency
                    ),
                    ' ',
                    $('<mark/>').append(
                        employee.Salary_Monthly_Amount
                    ),
                    ' per month), subject to all deductions required or authorized to be deducted by the Company, payable monthly in arrears (or such other amounts as may from time to time be agreed in writing) over 12 months. Your basic salary shall be subject to an annual review in accordance with Company policy, at the sole discretion of the Company. There shall be no entitlement to payment in respect of overtime. Your remuneration under this Agreement is confidential and should not be disclosed to any member of staff.'),
                $('<p/>').html('7.2 In respect of any payment and benefits to you hereunder, the Company and you (as employer and employee, respectively) shall, where applicable, comply with the provisions of the Central Provident Fund Act (Chapter 36) (the "CPF Act") for the time being in force and the rules and regulations promulgated thereunder. Unless you are or become a Singapore Permanent Resident or a Singapore Citizen, you will not be eligible for contributions under the CPF Act.'),
                $('<p/>').html('7.3 You will be solely responsible for all taxes which may be payable in respect of any remuneration due and for the declaration of your remuneration to the relevant tax authorities. You agree to forthwith indemnify the Company against any claims for tax in respect of any such remuneration. Where applicable, the Company shall be entitled to withhold payment of any sums due to you for tax clearance purposes.'),
                (employee.paymentAmount1 > 0) &&
                $('<p/>').append('7.4 In addition, as agreed PayPal will provide a one off Make Good Payment of $',
                    $('<mark/>').text(employee.paymentAmount1),
                    ' (SGD). The Make Good Payment letter is attached and this amount will be paid in the first pay period after the commencement with PayPal. This is subject to all standard employment related taxes applicable in Singapore'),
                (employee.Relocation == 'Y') &&
                $('<p/>').append(
                    '7.5 To help you relocate from ',
                    $('<mark/>').text(employee.RelocationFrom),
                    ' to Singapore you will be entitled to benefits as outlined in your Relocation Agreement (the “',
                    $('<strong/>').text('Relocation Package'),
                    '”). Upon acceptance of this employment contract our relocation partner AIRES will contact you directly to initiate this process.'
                ),
                (employee.Relocation == 'Y') &&
                $('<p/>').append(
                    '7.6 Should your employment be terminated by PayPal Pte Ltd in accordance with clause 16.2, or as a result of your resignation within one year from your Start Date, you shall, on demand, immediately repay the Company any sums paid to you under the Relocation Package. Your obligation to repay the sums paid to you under the Relocation Package, will be reduced by 1/12th for every full month of active employment from your Start Date.'
                ),
                (employee.Relocation == 'Y' && employee.Relo_Lump_Sum_Eligible=='Yes') && 
                $('<p/>').append(
                    '7.7 To help you relocate from ',
                    $('<mark/>').text(employee.RelocationFrom),
                    ' to Singapore you will receive a one-time miscellaneous lump sum cash allowance of ',
                    $('<mark/>').text(employee.Relocation_Currency),
' ',
                    $('<mark/>').text(employee.CashBonus),
                    ' (the “',
                    $('<strong/>').text('Relocation Package'),
                    '”), which you may use for your relocation through our global relocation partner.'
                ),
                (employee.Relocation == 'Y' && employee.Relo_Lump_Sum_Eligible=='Yes') && 
                $('<p/>').append(
                    '7.8 Should your employment be terminated by PayPal Pte Ltd in accordance with clause 16.2, or as a result of your resignation within one year from your Start Date, you shall, on demand, immediately repay the Company any sums paid to you under the Relocation Package. Your obligation to repay the sums paid to you under the Relocation Package, will be reduced by 1/12th for every full month of active employment from your Start Date.'
                ),
                (employee.Relocation == 'Y' && employee.Relo_Bonus == 'Yes') &&
                $('<p/>').append(
                    '7.9 In addition, PayPal will provide a monthly housing allowance of  ',
                    $('<mark/>').append(
                        employee.Relocation_Currency
                    ),
' ',
                    $('<mark/>').append(
                        employee.Relocation_Amount
                    ),
                    ' which shall take effect upon the signing of your temporary housing agreement and you providing a copy of such agreement to the Company. This allowance is intended to assist your relocation to Singapore and will only be payable whilst the Company requires you to be based in Singapore for work. This allowance will be paid together with your basic monthly salary and is subject to any and all applicable taxes.')
            ),
            $('<p class="hide"/>').html('<br>')
        ),
        $('<div class="offerClause AIPContainer"/>').append(
            $('<label/>').html('<strong>8. <u>Bonus Eligibility </u></strong>'),
            (employee.AIP == 'Yes') &&
            $('<ul class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Annual Incentive Plan (AIP)"/>').append(
                $('<p/>').append('8.1 You will be eligible to participate in a PayPal Annual Incentive Plan for a specified fiscal year (“',
                    $('<strong/>').text('AIP'),
                    '”), which may entitle you to receive an annual bonus (“',
                    $('<strong/>').text('AIP Bonus'),
                    '”) in an amount determined by the Company in its sole discretion, taking into account your individual performance and the performance of the Company and subject to the terms and conditions of the AIP. Your AIP Bonus is subject to proration based on your days of service to the Company during the applicable performance period.  Target bonus for the AIP is ',
                    $('<mark/>').append(
                        employee.AIP_Target_Pct
                    ),
                    '% of your annual base salary, pro-rated based on your start date and days of service during the AIP Bonus period. There is no guarantee any AIP Bonus will be awarded or received, and any actual bonus will be determined after the end of the bonus period. Payment of any AIP Bonus with respect to any AIP Bonus period, even if it is made repeatedly or regularly and whatever its amount, does not create any entitlement to receive the same or any other AIP Bonus amount in any subsequent year or period.'),
                $('<p/>').html('8.2 To be eligible to receive any AIP Bonus, you must be employed before October 1st and you must be in continuous employment, and must not have either given or received notice of termination of your employment for any reason whatsoever on the date the bonus is received, subject to applicable laws. If your employment start date with a PayPal company commences on or after October 1st, your eligibility to participate in the AIP will begin on January 1st of the following calendar year. Any AIP Bonus is at PayPal’s sole and absolute discretion and subject to the terms and conditions of the AIP. PayPal reserves the right, in its sole discretion, to amend, change or cancel the AIP, and your eligibility to participate in the AIP or any other incentive compensation plan, at any time. Further, the incentive compensation plan that you are eligible to participate in may change over time. You acknowledge and agree that PayPal may substitute the plan referenced in this letter and any contract of employment or any offer documentation, as it determines in its sole discretion from time to time.'),
                $('<p class="hide"/>').html('<br>')
            ),
            (employee.AIP == 'No') &&
            $('<p/>').append(
                'Section not applicable to employee.'
            ),
            $('<p class="hide"/>').html('<br>')
        ),
        $('<div class="offerClause"/>').append(
            $('<label/>').html('<strong>9. <u>Staff Review</u></strong>'),
            $('<p/>').html('A review of your performance and salary shall be carried out annually, in accordance with the policy of the Company from time to time.'),
            $('<p class="hide"/>').html('<br>')
        ),
        $('<div class="offerClause"/>').append(
            $('<label/>').html('<strong>10. <u>Expenses</u></strong>'),
            $('<p/>').html('The Company shall reimburse you in respect of such expenses as may be properly and reasonably incurred by you while engaged in the business of the Company in accordance with the Company\'s expenses reimbursement policy.'),
            $('<p class="hide"/>').html('<br>')
        ),
        $('<div class="offerClause"/>').append(
            $('<label/>').html('<strong>11. <u>Annual Leave</u></strong>'),
            $('<p/>').append(
                'You shall be entitled to paid annual leave (in addition to gazetted public holidays, and medical leave to which you may be entitled under clause 12 below) (“',
                $('<strong/>').text('Annual Leave'),
                '”), to be taken at a time or times convenient to, and as may be approved by, the Company.  Your entitlement to Annual Leave shall accrue pro rata throughout each calendar year of your employment with the Company. If such Annual Leave is not taken within the relevant year of service, the Company may, at its absolute discretion, allow the Annual Leave accrued and not taken to be accumulated and carried forward to any subsequent year of service, or pay you additional salary for the number of days of Annual Leave not taken.'),
            $('<p class="hide"/>').html('<br>')
        ),
        $('<div class="offerClause"/>').append(
            $('<label/>').html('<strong>12. <u>Illness, injury and leave</u></strong>'),
            $('<ul/>').append(
                $('<p/>').html('12.1 In the event of any illness or injury incapacitating you from attending to your duties, you shall be entitled to be absent from duties by taking up either the sick leave entitlement or hospitalization leave entitlement in accordance with Singapore law, provided that such leave entitlement can only be taken upon certification by a medical practitioner.'),
                $('<p/>').html('12.2 You will be entitled to all maternity, paternity, childcare and infant care leave entitlements which you are eligible for under Singapore law. More generous entitlements may be provided pursuant to a Company policy in place from time to time.'),
                $('<p/>').html('12.3 Subject to the rules and procedures established by the Company from time to time, all employees shall be entitled to medical benefits in accordance with the Company prevailing benefits policy.')
            ),
            $('<p class="hide"/>').html('<br>')
        ),
        $('<div class="offerClause"/>').append(
            $('<label/>').html('<strong>13. <u>Confidentiality</u></strong>'),
            $('<p/>').html('13.1 In this Agreement, the following terms are defined as follows:'),
            $('<ul/>').append(
                $('<p/>').append(
                    '(a) “',
                    $('<strong/>').text('Confidential Information'),
                    '” means the terms and conditions of this Agreement, and any and all information which is proprietary or confidential to the Company and/or any Group Company (or which the Company and/or any Group Company is required to keep confidential), including but not limited to any of the trade secrets, business methods or information which you knew or ought reasonably to have known to be confidential concerning the business or affairs of the Company and/or any Group Company so far as they shall have come to your knowledge during your employment with the Company, any documentation or information marked as confidential and information received or developed by the Company and/or any Group Company in the course of your employment which is not publicly available and relates to processes, equipment and techniques used by the Company and/or any Group Company in the course of the Company and/or any Group Company\'s business, including, but not limited to, technical data and marketing information such as customer lists, financial information and business plans and any other information described as Proprietary Information in the Company’s Employee Proprietary Information and Inventions Agreement;  and'
                ),
                $('<p/>').append(
                    '(b) “',
                    $('<strong/>').text('Group Company'),
                    '” means any holding company for the time being of the Company, any subsidiary for the time being of the Company or any such holding company of the Company, and/or any other related, associated and/or affiliated company to the Company, and “',
                    $('<strong/>').text('Group'),
                    '” shall mean collectively, all of the foregoing corporations'
                )
            ),
            $('<p/>').html('13.2 You shall not at any time (whether during the course of your employment or after the expiry or termination of your employment for whatever reason), except as authorised by the Company or as required by applicable law, reveal to any person, firm or partnership, company, corporation, association, organisation or trust (in each case whether or not having a separate legal personality) any Confidential Information which may come to your knowledge during your employment with the Company and shall keep with complete secrecy the Confidential Information entrusted to and/or received by you and shall not use or attempt to use any such information in any manner which may injure or cause loss either directly or indirectly to any Group Company or its business or may be likely so to do. This restriction shall continue to apply after the termination of this Agreement without limit in point of time.'),
            $('<p/>').html('13.3 You shall not during the continuance of this Agreement make otherwise than for the benefit of the Company and/or any Group Company any notes or memoranda relating to any matter within the scope of the business of the Company and/or any Group Company or concerning any Confidential Information or any of the Company and/or any Group Company’s dealings or affairs nor shall you either during the continuance of this Agreement or afterwards use or permit to be used any such notes or memoranda otherwise than for the benefit of the Company and/or any Group Company, it being the intention of the parties that all such notes or memoranda made by you and Confidential Information shall be the property of the Company and/or Group Company (as the case may be) and upon the termination of your employment, you shall return the said notes, memoranda and Confidential Information or provide evidence of its destruction to the satisfaction of the Company and/or relevant Group Company (as the case may be).'),
            $('<p/>').html('13.4 Since you may also obtain in the course of your employment, by reason of services rendered for any Group Company, knowledge of Confidential Information, you hereby agree that you shall at the request of any relevant Group Company enter into a direct agreement or undertaking with that Group Company such as the PayPal Holdings, Inc. Employee Proprietary Information and Inventions Agreement whereby you shall accept restrictions corresponding to the restrictions herein contained (or such of them as may be appropriate in the circumstances) in relation to such business and such area and for such period as the relevant Group Company may reasonably require for the protection of its legitimate interests.'),
            $('<p/>').append('13.5 Since you may also obtain in the course of your employment by reason of services rendered for the Company and/or any Group Company knowledge of information, ideas, designs, documents and other materials that derives independent economic value, actual or potential, from not being generally known to the public or to other persons who can obtain economic value from its disclosure or use, and is the subject of efforts that are reasonable under the circumstances to maintain its secrecy (collectively, "',
                $('<strong/>').text('Trade Secrets'),
                '"), you hereby agree that you shall keep confidential, and not disclose to others, or take or use for your own purposes (except in connection with your rights and obligations under this Agreement) any Trade Secrets of the Company and/or any Group Company.'),
            $('<p/>').append('13.6 The restrictions contained in this clause 13 shall not apply:'),
            $('<ul/>').append(
                $('<p/>').append(
                    '(a) to any disclosure or use authorised by the Company or required by law or by your employment with the Company;'
                ),
                $('<p/>').append(
                    '(b) so as to prevent you from using your own personal skill in any business in which you may be lawfully engaged after your employment with the Company is terminated; or'
                ),
                $('<p/>').append(
                    '(c) to any trade secrets, business methods or information which may lawfully have come into the public domain other than by a breach of this Agreement.'
                )
            ),
            $('<p/>').append(
                '13.7 You acknowledge that the restrictions contained in this clause 13 are reasonable and that irreparable damage will be caused to the Company in the event of any violation of any of the provisions of this clause 13 by you.'
            ),
            $('<p class="hide"/>').html('<br>')
        ),
        $('<div class="offerClause "/>').append(
            $('<label/>').html('<strong>14. <u>Personal Data</u></strong>'),
            $('<ul/>').append(
                $('<p/>').append(
                    '14.1	The Company respects the privacy of all employees and will comply with all applicable laws regarding processing of personal information. All such personal information is processed in accordance with the PayPal Employee Privacy Statement, a copy of which has been given to you in connection with this Agreement. You acknowledge that you have reviewed and understand the Employee Privacy Statement.'
                )
            ),
            $('<p class="hide"/>').html('<br>')
        ),
        $('<div class="offerClause "/>').append(
            $('<label/>').html('<strong>15. <u>Intellectual Property</u></strong>'),
            $('<ul/>').append(
                $('<p/>').append(
                    '15.1 Without limiting the foregoing, if at any time during your employment with the Company you create or discover or participate in the creation or discovery of any intellectual property, any invention or improvement upon or addition to an invention, including without limitation copyrights, patents, trade marks, design rights and all similar proprietary rights as may exist anywhere in the world (whether registered or unregistered) (the "',
                    $('<strong/>').text('Intellectual Property'),
                    '"), you shall inform the Company and comply with your obligations under this clause 15 as well as your obligations under the Employee Proprietary Information and Inventions Agreement (the “',
                    $('<strong/>').text('Inventions Agreement'),
                    '”).'
                ),
                $('<p/>').append(
                    '15.2 All rights, titles and interests in the Intellectual Property (the "',
                    $('<strong/>').text('Intellectual Property Rights'),
                    '") shall pass to the Company automatically upon their creation such that the Company shall be the unencumbered beneficial owner of the Intellectual Property Rights and be entitled to use the Intellectual Property Rights at such times and in such places and manner as it in its sole discretion considers to be appropriate. Any such assignment shall be made without any limit in time or geography and shall be made with the object of enabling the Company and/or its assigns to use and exploit the Intellectual Property Rights at their own discretion for any purpose whatsoever.'
                ),
                $('<p/>').append(
                    '15.3 You shall, at the cost of the Company, provide all such information, data, drawings and assistance as may be requested by the Company to enable the Company to use and fully exploit all the Intellectual Property Rights and you will execute all documents and do all things which may be necessary or desirable for obtaining protection for the Intellectual Property Rights in such parts of the world as may be specified by the Company and for vesting the Intellectual Property Rights in the Company or as the Company may direct from time to time. In particular, but without limitation, in any instance where the provisions of this Clause 15.3 are, pursuant to any applicable law, not fully effective in ensuring that the Intellectual Property Rights are automatically owned by the Company, you shall (if requested by the Company) sign all papers and execute all documents, including without limitation patent applications, trade mark applications, service mark applications, declarations, oaths, formal assignments, assignment of priority rights, and powers of attorney, and do all things, which the Company may deem necessary or desirable in order to protect its rights and interests in respect of the Intellectual Property Rights'
                ),
                $('<p/>').append(
                    '15.4 You acknowledge that the Company exclusively owns all Intellectual Property Rights in any material created, generated or contributed to by you in connection with your employment. You warrant that the Intellectual Property in any material created, generated or contributed to by you in connection with your employment does not and will not infringe the Intellectual Property or other rights of a third party and you will indemnify the Company for any loss or damage incurred in the event that you contravene this clause.'
                ),
                $('<p/>').append(
                    '15.5 You agree to assign to the Company all pre-existing Intellectual Property and Intellectual Property Rights in any material created, generated, used or contributed to or by you in connection with your employment. '
                ),
                $('<p/>').append(
                    '15.6 You irrevocably appoint the Company to be your attorney in your name and on your behalf to sign or execute any such instrument or thing and generally to use your name for the purpose of giving to the Company (or its nominee) the full benefit of the provisions of this clause 15 relating to the Intellectual Property Rights only.'
                ),
                $('<p/>').append(
                    '15.7 Insofar as permitted by applicable law, you waive any and all of your rights in relation to the Intellectual Property Rights and you shall not assert any right or to institute, support, maintain or permit any action or claim based on or in connection with the infringement or the alleged infringement of your rights.'
                ),
                $('<p/>').append(
                    '15.8 You acknowledge that your obligations under this clause 15 are in addition to those contained in the Inventions Agreement, and that in the event of any conflicting obligations, the obligations contained in the Inventions Agreement shall prevail.'
                )
            ),
            $('<p class="hide"/>').html('<br>')
        ),
        $('<div class="offerClause"/>').append(
            $('<label/>').html('<strong>16. <u>Termination</u></strong>'),

            $('<p/>').html('16.1 Upon the completion of the probationary period referred to in Clause 2 above and subject to Clause 16.2 below, this Agreement may be terminated by you or by the Company upon giving two (2) months&#x27; written notice or by paying two (2) months&#x27; salary in lieu of notice. The Company reserves the right to require you not to attend work and/or not to undertake all or any of your duties of employment during any period of notice (whether given by you or the Company). However, the Company shall continue to pay your salary and contractual benefits whilst you remain employed by the Company.'),

            $('<p/>').html('16.2 Notwithstanding the other provisions in this Agreement The Company shall be entitled to terminate your employment immediately without written notice (and without prejudice to the rights and remedies of the Company including for any breach of this Agreement and to your continuing obligations under this Agreement) in any of the following cases:'),
            $('<ul/>').append(
                $('<p/>').html(
                    '(a) if you are dishonest or engaged in serious or persistent misconduct or, without reasonable cause, neglect or refuse to attend to your duties or fail to perform any of your obligations hereunder, or fail to observe the Company\'s disciplinary rules or any other regulations of the Company from time to time in force;'
                ),
                $('<p/>').html(
                   '(b) if you fail to complete, to the satisfaction of the Company, any annual declaration requested to be made by you pursuant to any relevant law or regulation, including any declaration related to fitness &amp; propriety;'
                ),
                $('<p/>').html(
                   '(c) if you fail to meet the standards required to be considered a fit & proper person in accordance with any relevant law or regulation;'
                ),
                $('<p/>').html(
                  '(d) if you are incapacitated by illness or otherwise unable to perform your duties hereunder for a period totaling in aggregate six (6) months in any period of twelve (12) consecutive calendar months;'
                ),
                $('<p/>').html(
                   '(e) if you become bankrupt or have a receiving order made against you or make any general composition with your creditors; '
                ),
                $('<p/>').html(
                   '(f) if you are, in the sole and absolute opinion of the Company, guilty of any conduct tending to bring yourself or the Company or any Group Company into disrepute or that is prejudicial to the interests of the Company or any Group Company;'
                ),
                $('<p/>').html(
                  '(g) if you are convicted of, or otherwise found guilty by any court of competent jurisdiction, or plead guilty to, any criminal offence other than an offence which in the reasonable opinion of the Company does not affect your position with the Company;'
                ),
                $('<p/>').html(
                  '(h) if you are in or put yourself in a position of a serious conflict of interest and fail to inform the Company, or act against the interests of the Company and/or the Group, so as to materially prejudice the business of the Company and/or the Group; or'
                ),
                $('<p/>').html(
                   '(i) if a court has made a declaration that you lack capacity to make decisions concerning your personal welfare or property and affairs pursuant to the provisions of the Mental Capacity Act (Chapter 177A of Singapore).'
                )
            ),
            $('<p/>').html('16.3 Upon the expiry or termination of this Agreement for whatever reason, you shall:'),
            $('<ul/>').append(
                $('<p/>').html(
                    '(a) at any time or from time to time thereafter at the request of the Company resign from office as a director of the Company and all offices (whether as director, officer or otherwise) held by you in any company in the group without any claim for compensation and in the event of your failure so to do the Company is hereby irrevocably authorised to appoint some person in your name and on your behalf to sign and deliver such resignation or resignations; '
                ),
                $('<p/>').html(
                    '(b) deliver to the Company any drawings, notebooks, manuals, documents, computerization of technical data, customer lists, specifications, files, memoranda, or other records of any nature belonging to the Company or any reproduction thereof which may have been provided to you during the course of your employment with the Company; '    
                ),
                $('<p/>').html(
                    '(c) not undertake or cause any action or deed which might in any way affect the Company\'s reputation or good standing, or those of its products or services; and'    
                ),
                $('<p/>').html(
                    '(d) not at any time after such expiry or termination of this Agreement represent yourself as still having any connection with the Company or any company in the Group save as a former employee for the purposes only of communicating with prospective employers or complying with any applicable statutory requirements.'    
                )
            ),
            (employee.Citizen == 'No') &&
            $('<p/>').append(
                '16.4 Where you are a foreign employee about to cease work with the Company, or where you are a foreign employee intending to leave Singapore for a period exceeding 3 months, the Company is required to give written notice (the “Notice”) thereof to the Inland Revenue Authority of Singapore (“IRAS”) not later than 1 month before you cease to be employed or 1 month before your expected date of departure from Singapore (as the case may be) and to withhold any monies payable to you or for your benefit until full settlement of any outstanding taxes you, as a foreign employee, owe to the IRAS.'
            ),
            (employee.Citizen == 'No') &&
            $('<p/>').append(
                '16.5 The Company will only release the payment of any monies due to you or for your benefit after tax clearance from the IRAS is given or after the expiry of 30 days after the receipt by the IRAS of the Notice, whichever is earlier provided that there are any remaining monies due to you after the Company has settled your outstanding taxes owed to the IRAS.'
            ),
            (employee.Citizen == 'No') &&
            $('<p/>').append(
                '16.6 Should the monies withheld from you be less than the amount owing to the IRAS and the Company settles such amount on your behalf with the IRAS, such additional monies settled by the Company shall be a debt owing by you to the Company and for which the Company shall have a right to immediate repayment from you.'
            ),
            $('<p class="hide"/>').html('<br>')
        ),
        $('<div class="offerClause "/>').append(
            $('<label/>').html('<strong>17. <u>Restrictive Covenants</u></strong>'),
            $('<ul/>').append(
                $('<p/>').html('17.1 You acknowledge that, in the course of your employment with the Company, you are likely to obtain personal knowledge of Trade Secrets the Confidential Information, as well as personal knowledge and influence over the Company’s customers and employees. In addition, you acknowledge that the Company has an interest in maintaining a stable and trained workforce. Therefore, you undertake for the benefit of the Company that you shall not, at any time during your employment with the Company, and for a period of one (1) year after the termination of your employment do or permit any of the following without the prior written consent of the Company in Singapore: '),
                $('<ul/>').append(
                    $('<p/>').append(
                        '(a) either on your own account or in conjunction with or on behalf of any other person, firm or company solicit or entice away or attempt to solicit or entice away from the Company the custom of any person, firm, company or organisation who shall at any time during your employment with the Company (or, where this undertaking applies after the date of termination of your employment (“',
                        $('<strong/>').text('Termination Date'),
                        '”), at any time within the period of one (1) year immediately preceding the Termination Date) have been a customer or client or in the habit of dealing with the Company and with whom you have had significant contact in the course of your employment with the Company; or'
                    ),
                    $('<p/>').append(
                        '(b)    either for your own account or as representative or agent for any third party, solicit, or endeavour to solicit or persuade, induce, encourage, or procure any employee employed by the Company to become employed by or interested directly or indirectly in any manner in any business which is in competition with the business carried on by the Company or terminate his employment with the Company, who by reason of his/her position, seniority, expertise or knowledge of Confidential Information, or knowledge of or influence over clients, customers or contacts of the Company is likely to cause damage to the Company if he/she were to leave the employment of the Company and with whom you had material business dealings during your employment with the Company (or, where this undertaking applies after the Termination Date, at any time within the period of one (1) year immediately preceding the Termination Date).'
                    )
                ),
                $('<p/>').append(
                    '17.2   You further undertake that you shall not, at any time during your employment with the Company, and for the period of six (6) months after the termination of your employment (except with the prior written consent of the Company) directly or indirectly carry on or be engaged or interested or assist in any capacity (whether as shareholder, partner, director, manager, consultant, employee, contractor, agent or otherwise, and whether on a full time or part time or ad hoc basis, and whether for remuneration or not, and whether for yourself or on behalf of any other person) in any other business within Singapore which:'
                ),
                $('<ul/>').append(
                    $('<p/>').append(
                        '(a) is in any respect in competition with or in opposition to any business for the time being carried on by the Company or any affiliate of the Company in which you have been materially involved or concerned in the course of your employment with the Company during your employment with the Company (or, where this undertaking applies after the Termination Date, at any time within the period of one (1) year immediately preceding the Termination Date), provided that this shall not prohibit the holding (directly or through nominees) of investments listed on any stock exchange, as long as not more than five (5) per cent of the issued shares or stock of any class of any one company shall be so held; or '
                    ),
                    $('<p/>').append(
                        '(b) as regards any goods or services is a supplier to, or customer of, the Company or any affiliate of the Company in which you have been materially involved or concerned in the course of your employment with the Company during your employment with the Company (or, where this undertaking applies after the Termination Date, at any time within the period of one (1) year immediately preceding the Termination Date). '
                    )
                ),
                $('<p/>').append(
                    '17.3   You acknowledge that:'
                ),
                $('<ul/>').append(
                    $('<p/>').append(
                        '(a) each of the undertakings contained in clauses 17.1 and 17.2 above constitutes an entirely separate and independent restriction on you;'
                    ),
                    $('<p/>').append(
                        '(b) the undertakings contained in clauses 17.1 and 17.2 above are reasonable to protect the legitimate interests of the Company given that you will have access to Confidential Information and have influence over the employees, suppliers and/or customers of the Company; and'
                    ),
                    $('<p/>').append(
                        '(c) the duration, extent and application of each of the undertakings contained in clauses 17.1 and 17.2 above are no greater than is necessary for the protection of the proprietary interests of the Company.'
                    )
                ),
                $('<p/>').append(
                    '17.4 Notwithstanding the above, you shall be entitled to enter into employment with any other related corporation of the Company.'
                ),
                $('<p/>').append(
                    '17.5 Each undertaking and agreement contained in this clause shall be read and construed independently of the other undertakings and agreements herein contained so that if one or more should be held to be invalid as an unreasonable restraint of trade or for any other reason whatsoever then the remaining undertakings and agreements shall be valid to the extent that they are held not to be so invalid.'
                ),
                $('<p/>').append(
                    '17.6 While the undertakings and agreements in this clause 17 are considered by the Company and you to be reasonable in all circumstances, if one or more should be held to be invalid as an unreasonable restraint of trade or for any other reason whatsoever but would have been held valid if part of the wording thereof had been deleted or the period thereof reduced or the range of activities or area dealt with reduced in scope, the said undertakings and agreements shall apply with such modifications as may be necessary to make them valid and effective.'
                ),
                $('<p/>').append(
                    '17.7 You acknowledge that a breach of this clause 17 will immediately and irreparably harm the Company and as such, you consent to a grant of temporary and permanent injunctive relief against such breach and any further breach. The foregoing is without prejudice to the Company’s right to claim for damages caused to it as a result of the said breach and any other remedy available at law or in equity.'
                )
            ),
            $('<p class="hide"/>').html('<br>')
        ),
        $('<div class="offerClause"/>').append(
            $('<label/>').html('<strong>18. <u>Repatriation obligation</u></strong>'),
            $('<p/>').html('By accepting this position you acknowledge and agree that you shall be solely responsible for arranging your repatriation back to your home country at your own cost in the event of you no longer having the right to live and work in Singapore, for example upon the cancellation or expiration of your Work Pass'),
            $('<p class="hide"/>').html('<br>')
        ),
        $('<div class="offerClause"/>').append(
            $('<label/>').html('<strong>19. <u>Entire Agreement</u></strong>'),
            $('<ul/>').append(
                $('<p/>').html('19.1 This Agreement supersedes any and all prior correspondence, discussions, agreements, representations, undertakings, and promises of any kind, whether written, oral, express or implied exchanged or made between the parties hereto with respect to the subject matters herein. This Agreement constitutes the entire, full, complete and exclusive agreement and understanding between you and the Company, its officers, employees and its affiliates with respect to the subject matters herein.'
                ),
                $('<p/>').html('19.2 Neither you nor the Company has entered into this Agreement in reliance upon any representation, warranty or undertaking of the other party which is not set out or referred to in this Agreement or referred to in this Agreement as forming part of your employment contract. Nothing in this clause shall however operate to limit or exclude liability for fraud.'
                )
            ),
            $('<p class="hide"/>').html('<br>')
        ),

        $('<div class="offerClause"/>').append(
            $('<label/>').html('<strong>20. <u>No Breach</u></strong>'),
            $('<p/>').html('In signing below, you confirm that you are not bound by any prior contract, undertaking, commitment or other obligation which prevents you from being employed by the Company and being able to fully and completely perform the services contemplated by this Agreement, nor in fulfilling your duties hereunder will you be breaching any duty of confidentiality to any persons, including without limitation, your previous employers or principals.'),
            $('<p class="hide"/>').html('<br>')
        ),
        $('<div class="offerClause"/>').append(
            $('<label/>').html('<strong>21. <u>Governing Law </u></strong>'),
            $('<p/>').html('This Agreement shall be governed by and construed in accordance with the laws of Singapore. The parties shall submit to the non-exclusive jurisdiction of the Singapore courts.'),
            $('<p/>').html('Please confirm your acceptance of the above terms and conditions by signing and returning to us the duplicate copy of this letter.'),
            $('<p class="hide"/>').html('<br>')
        ),
        $('<div class="offerClause"/>').append(
            $('<label/>').html('<strong>22. <u>Miscellaneous </u></strong>'),
            $('<ul/>').append(
                $('<p/>').html('22.1 This Agreement shall not be amended, modified, varied or supplemented unless agreed to in writing by the parties.'
                ),
                $('<p/>').html('22.2 The illegality, invalidity or unenforceability of any provision of this Agreement under the law of any jurisdiction shall not affect its legality, validity or enforceability under the law of any other jurisdiction nor the legality, validity or enforceability of any other provision.'
                ),
                $('<p/>').html('22.3 You may not assign nor transfer to any third party the benefit and/or burden of this Agreement without the prior written consent of the Company.'
                ),
                $('<p/>').html('22.4 No failure on the part of any party to exercise, and no delay on its part in exercising, any right or remedy under this Agreement will operate as a waiver thereof, and any single or partial exercise of any right or remedy shall not preclude any other or further exercise thereof or the exercise of any other right or remedy. The rights provided in this Agreement are cumulative and not exclusive of any rights or remedies provided by law.'
                ),
                $('<p/>').html('22.5 Without prejudice to any other rights or remedies which the Company may have, you acknowledge and agree that damages may not be an adequate remedy for any breach by you of your obligations under this Agreement.'
                ),
                $('<p/>').html('22.6    A person who is not party to this Agreement has no rights under the Contracts (Rights of Third Parties) Act (Chapter 53B of Singapore) to enforce any term of this Agreement, but this does not affect any right or remedy of a third party which exists or is available apart from the said Act.'
                )

            ),
            $('<p class="hide"/>').html('<br>')
        ),
        $('<div class="offerClause "/>').append(
            $('<p class="margin-bottom"/>').html('Please confirm your acceptance of the above terms and conditions by signing and returning to us the duplicate copy of this letter.'),
            $('<p/>').html('Yours faithfully,'),
            $('<p class="signDisplay2"/>').html(''),
            $('<p class="margin-bottom"/>').html('For and on behalf of <br>PayPal Private Limited')
        )

        // end append
    );

    $("#markup2").html("").append(
        // OfferClause 2
        $('<div class="offerClause2">').append(
            $('<p/>').html(
                '<strong>Company:</strong>'
            )
        )
        // end append
    );

    $("#markup3").html("").append(
        // OfferClause 3
        $('<div class="offerClause3">').append(
            $('<p/>').html(
                '<strong>Accepted:</strong>'
            )
        )
        // end append
    );
    $("#markup4").html("").append(
        // OfferClause 4
        $('<div class="offerClause4">').append(
            $('<span/>').html(
                '5 Temasek Boulevard5<br>'
            ),
            $('<span/>').html(
                '#09-01 Suntec Tower 5<br>'
            ),
            $('<span/>').html(
                'Singapore 038985'
            )
        )
        // end append
    );
}

$(function() {
    "use strict";
    // render template
    fnView();

    // completed letter
    if ($("#hidden_pg").prop('disabled')) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

        let arrParts = [
            [1, 'hidden_pg']
        ];

        showCompletedOfferLetter('incomplete', 'complete', arrParts);
    }
});
