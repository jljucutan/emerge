/**
 *  SERVICES-35278 | jjucutan | https://jira.silkroadtech.com/browse/SERVICES-35278?focusedCommentId=1428334&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-1428334
 * 10/18/2019 | jjucutan | Added friendly text
 * 10/24/2019 | jjucutan | added AltWorkLocation on section 1.3
 * 10/30/2019 | jjucutan | add spacing generator for page break for Annexure 2
 *  02/04/2021 | jjucutan | version 7 creation
 */

let beforeAnnexureSpaces = 27;
let afterAnnexureSpaces = 26;

function fnView() {
    "use strict";
    $("#markup").html("").append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p class="center"/>').html(
                '<strong>EMPLOYMENT AGREEMENT</strong>'
            ),
            $('<p/>').append(
                'This Employment, Confidential Information and Inventions Assignment Agreement (hereinafter referred to as this <strong>"Agreement"</strong>) is made on this ',
                markText(
                    fnOrdinal(employee.Start_Date_Day)
                ),
                ' Day of ',
                markText(
                    employee.Start_Date_Month
                ),
                ' ',
                markText(
                    employee.Start_Date_Year
                ),
                ' (“<strong>Hire Date</strong>”).'
            ),
            $('<p class="center"/>').html(
                'BY AND BETWEEN:'
            ),
            $('<p/>').append(
                $('<ol/>').append(
                    $('<li/>').html(
                        markText(employee.Entity_Name) + ', a company incorporated under the provisions of the Companies Act, 1956 and having its registered office at ' + markText(employee.Entity_Address) + ' and its principal place of business at ' + markText(employee.Building_Address) + ' hereinafter referred to as “<strong>Company</strong>”, (which expression shall, unless it be repugnant to the context or meaning thereof, be deemed to mean and include its successors and assigns); and'
                    ),
                    $('<p/>').html(''),
                    $('<li/>').html(
                        markText(employee.Employee_Name) + ', residing at ' + markText(employee.Employee_Address) + ' hereinafter referred to as the “<strong>Employee</strong>”, (which expression shall, unless it be repugnant to the context or the meaning thereof, be deemed to mean and include his/her heirs, legal representatives, executors and administrators).'
                    )
                )
            ),
            $('<p/>').html(
                'Company and Employee shall hereinafter jointly be referred to as the <strong>"Parties"</strong> and severally as the <strong>"Party"</strong>.'
            ),
            $('<p/>').html(
                'WHEREAS:'
            ),
            $('<p/>').append(
                $('<ol/>').append(
                    (employee.Entity_Name == 'PayPal India Private Limited' && (['Chennai', 'Hyderabad', 'Bangaluru', 'Bangalore'].indexOf( employee.Work_Location) >= 0)) &&
                    $('<li/>').html(
                        markText('The Company is engaged in the business of providing software and/or product development services,  software and technical support  and other support activities for its affiliates  in India or abroad')
                    ),
                    $('<p/>').html(''),
                    (employee.Entity_Name == 'PayPal Payments Private Limited' && employee.Work_Location == 'Mumbai') &&
                    $('<li/>').html(
                        markText('The Company is engaged in the business of  providing various support services to entities in India and abroad including but not restricted to marketing and consulting services, administrative and operational support')
                    ),
                    $('<p/>').html(''),
                    $('<li/>').html(
                        'Based on the representations of the Employee at the time of recruitment, including, but not limited to, academic education, background and work experience, the Company desires to engage the Employee and the Employee desires employment at the Company upon the terms and conditions contained in the Offer Letter and this Agreement;'
                    ),
                    $('<p/>').html(''),
                    $('<li/>').html(
                        'The Company, in the course of its Business (as defined hereinafter), has acquired and may continue to acquire Confidential Information & Inventions, (as defined hereinafter), which the Company desires to keep confidential. The unauthorized use or disclosure of such Confidential Information and/or Inventions will irreparably damage Company, its Affiliates and its clients;'
                    ),
                    $('<p/>').html(''),
                    $('<li/>').html(
                        'The Company undertakes several projects / assignments that involve the development of Inventions and which also entail confidentiality obligations. The Company must respect the Inventions and confidentiality obligations of its clients and third parties and therefore, in turn the Employee, during the term of the Employee’s employment with the Company and anytime thereafter, is also expected to respect the same, and has a duty to hold all such confidential or Confidential Information in the strictest confidence and not to disclose it to any Person (defined hereinafter), except as necessary in carrying out work for the Company consistent with the Company’s agreement with such clients or third parties.'
                    )
                )
            ),
            $('<p/>').html(
                '<strong>NOW, THEREFORE, IN CONSIDERATION OF THE MUTUAL PROMISES SET FORTH HEREIN, THE COMPANY AND THE EMPLOYEE HEREBY AGREE AS FOLLOWS:</strong>'
            ),
            $('<p/>').append(
                $('<ol class="header-ol"/>').append(
                    $('<li/>').append(
                        $('<span/>').html(
                            '<strong><u>EMPLOYMENT AND TERM</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>1.1:</strong></span><span class="inl-block-2"> Relying upon the representations made by the Employee with regard to the Employee’s academic education, background, work experience or otherwise, the Company has employed the Employee upon the terms and conditions set forth in this Agreement and the Offer Letter, with effect from the date of signing of this Agreement (“<strong>Date of Employment</strong>”).</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>1.2:</strong></span><span class="inl-block-2"> The term of the employment shall be effective as of the date first set forth above and continue until terminated by either Party in accordance with Clause 8 hereof (<strong>"Term"</strong>).</span>'
                        ),
                        $('<p/>').append(
                            $('<span class="margin-right-15 margin-left-25 inl-block"/>').append(
                                '<strong>1.3:</strong>'
                            ),
                            $('<span class="inl-block-2" />').append(
                                'The Employee\'s place of work shall be ' + markText(employee.Building_Address) + ' or such other location as the Company may determine from time to time.'
                            )
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>1.4:</strong></span><span class="inl-block-2"> The hours of work may be changed by written agreement with the Employee’s manager. Notwithstanding anything contained herein, the Employee’s duties may require the Employee to work additional hours and make himself/herself available on an “on-call” basis as and when required by the Company. The Employee hereby agrees that he/she will provide such on-call services as required by the Company, and that the Employee has read and understood the Company’s On-Call Policy, as amended from time to time.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>1.5:</strong></span><span class="inl-block-2">  Subject to exceptions approved in accordance with the Code of Business Conduct, as may be modified from time to time, the Employee shall devote his/her entire working time, energy, and attention exclusively to his/her duties in connection with the Company, and shall not take up employment or engagement, either full time or part time, and neither directly or indirectly, in any other organization while in employment with the Company, nor shall the Employee accept compensation in any form from any outside party for any actions performed on behalf of the Company without the express prior written permission of the Company.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>1.6:</strong></span><span class="inl-block-2">  The Employee shall have read the Company’s policies and shall comply with any and all polices of the Company. Provided that if there is any conflict between the provisions of such policies and the terms of this Agreement, the latter shall prevail.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>1.7:</strong></span><span class="inl-block-2"> Probation Period</span>'),
                        $('<ul class="inl-block-inn"/>').append(
                            (employee.ProbationPeriodRequired === "yes") &&
                            $('<li style="margin-bottom: 1em !important;"/>').append(
                                'Employees in grades 15-18 shall be required to serve a probationary period of three (3) months, during which employment may be terminated by either party alerting the other in writing to the termination of employment.   The probationary period may be reduced or extended at the discretion of the Company.',
                                addSpacing(2)
                            ),
                            (employee.ProbationPeriodRequired === "yes") &&
                            $('<li/>').append(
                                'Employees in grades 19 and above shall be required to serve a probationary period of six (6) months, during which employment may be terminated by either party giving alerting the other in writing to the termination of employment.  The probationary period may be reduced or extended at the discretion of the Company.'
                            ),
                            (employee.ProbationPeriodRequired === "yes") && decreaseSpacing('beforeAnnexureSpaces',  4),
                            (employee.ProbationPeriodRequired !== "yes") &&
                            $('<li/>').append(
                                'Not applicable for this employee.'
                            ) 
                        ),
                        (employee.CS_Ops_Position == 'Yes' && (employee.Work_Location == 'Chennai' || employee.Work_Location == 'Bangalore' || employee.Work_Location == 'Bangaluru') && (employee.Employee_Group == 'R' || employee.Employee_Group == 'T') && (employee.Salary_Grade >= 15 && employee.Salary_Grade <= 18) && employee.Exempt == 'N') && 
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>1.7:</strong></span><span class="inl-block-2">  ' + markText('Probationary Period') + '</span>'
                        ),
                        (employee.CS_Ops_Position == 'Yes' && (employee.Work_Location == 'Chennai' || employee.Work_Location == 'Bangalore' || employee.Work_Location == 'Bangaluru') && (employee.Employee_Group == 'R' || employee.Employee_Group == 'T') && (employee.Salary_Grade >= 19) && (employee.Exempt == 'E' || employee.Exempt == 'N')) && 
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>1.7:</strong></span><span class="inl-block-2">  ' + markText('Probationary Period') + '</span>'
                        ),
                        (employee.Salary_Grade >= 15 && employee.Salary_Grade <= 18 && employee.Exempt == 'N' && (employee.Employee_Group == 'R' || employee.Employee_Group == 'T') && (employee.Work_Location == 'Chennai' || employee.Work_Location == 'Bangalore' || employee.Work_Location == 'Bangaluru') && employee.CS_Ops_Position == 'Yes') &&        
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"></span><span class="inl-block-2">' +
                            markText('Employees in grades 15-18 shall be required to serve a probationary period of three (3) months, during which employment may be terminated by either party alerting the other in writing to the termination of employment. The probationary period may be reduced or extended at the discretion of the Company.') +
                            '</span>'
                        ),
                         (employee.CS_Ops_Position == 'Yes' && (employee.Work_Location == 'Chennai' || employee.Work_Location == 'Bangalore' || employee.Work_Location == 'Bangaluru') && (employee.Employee_Group == 'R' || employee.Employee_Group == 'T') && (employee.Salary_Grade >= 19) && (employee.Exempt == 'E' || employee.Exempt == 'N')) &&
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"></span><span class="inl-block-2">' +
                            markText('Employees in grades 19 and above shall be required to serve a probationary period of six (6) months, during which employment may be terminated by either party alerting the other in writing to the termination of employment. The probationary period may be reduced or extended at the discretion of the Company.') +
                            '</span>'
                        )
                    ),
                    $('<p/>').html(''),
                    $('<li/>').append(
                        $('<span/>').html(
                            '<strong><u>DUTIES AND RESPONSIBILITIES</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>2.1:</strong></span><span class="inl-block-2"> The Employee hereby agrees and undertakes to perform various duties and undertake various responsibilities, and devote the whole of his/her time and attention to the Business of the Company, to the best of his/her skills and abilities including the following:</span>'
                        ),
                        $('<p/>').append(
                            $('<ul class="no-bullet"/>').append(
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>2.1.1:</strong></span><span class="inl-block-3"> To promote the interests and welfare of the Company.</span>'
                                ),
                                $('<p/>').html(''),
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>2.1.2:</strong></span><span class="inl-block-3"> To conform to and comply with the Company’s policies and such directions and orders as may from time to time be given by the Company.</span>'
                                ),
                                $('<p/>').html(''),
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>2.1.3:</strong></span><span class="inl-block-3"> The Company may, subject to mutually agreed terms, transfer the Employee to any other office of Company in India or overseas or to any Affiliates of the Company so long as the benefit of his/her employment accrues to the Company. In such case, the Employee shall also be bound by any policy of such other office or Affiliate, in existence at the date of this Agreement or that may be subsequently framed by the Company or the Affiliate. Provided that if there is any conflict between the provisions of such policies and the terms of this Agreement, the former shall prevail. The Employee will also be expected to make visits and travel both within India and overseas, as may be necessary for the proper discharge of his/her duties, subject to reimbursement of expenses incurred.</span>'
                                )
                            )
                        )
                    ),
                    $('<p/>').html(''),
                    $('<li/>').append(
                        $('<span/>').html(
                            '<strong><u>COMPANY’S POLICIES</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<p/>').html(
                            'The Employee agrees and undertakes that the Employee shall be bound by all the policies and procedures of the Company including the policies and procedures documented on the Human Resources Hub on the Bridge adopted or to be adopted by Company, as each may be amended from time to time. Provided that if there is any conflict between the provisions of such policies and procedures and the terms of this Agreement, the latter shall prevail.'
                        )
                    ),
                    $('<p/>').html(''),
                    $('<li/>').append(
                        $('<span/>').html(
                            '<strong><u>REMUNERATION AND TAXES</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>4.1:</strong></span><span class="inl-block-2"> The Employee shall be entitled to remuneration as per the Offer Letter attached hereto as <strong>Annexure 1.</strong></span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>4.2:</strong></span><span class="inl-block-2"> The Company may withhold from any amounts payable under the Agreement such central, state and local taxes as may be required to be withheld pursuant to any applicable law or regulation.</span>'
                        )
                    ),
                    $('<p/>').html(''),
                    $('<li/>').append(
                        $('<span/>').html(
                            '<strong><u>NON-SOLICITATION</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>5.1:</strong></span><span class="inl-block-2"> The Employee hereby agrees and undertakes that during the Term of the employment with the Company and for a period of one (1) year following the Termination Date, the Employee shall not, directly or indirectly, either as an individual on his/her own account or as an employee, partner, representative, consultant, advisor, agent, contractor, promoter, director, manager, principal, or shareholder (or in a similar capacity or function):</span>'
                        ),
                        $('<p/>').append(
                            $('<ul class="no-bullet"/>').append(
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>5.1.1:</strong></span><span class="inl-block-3"> Solicit, attempt to solicit, induce or attempt to induce (on the Employee’s own behalf or on behalf of any other Person) any Company employee or any person who was employed by the Company within six (6) months prior to such solicitation to terminate his/her employment or other relationship with Company; or,</span>'
                                ),
                                $('<p/>').html(''),
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>5.1.2:</strong></span><span class="inl-block-3"> Contact any of the existing or prospective clients (i.e. any person or organization with whom the Company is in advanced stages of exploring a professional or business relationship or with whom the Company has a relationship) of the Company to entice such clients away from the Company or to damage in any way their business relationship with the Company or for the provision of substantially the same services provided to such clients by or for the Company.</span>'
                                )
                            )
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>5.2:</strong></span><span class="inl-block-2"> It is agreed by and between the parties that the employment with the Company and the compensation payable under this Agreement as per the Offer Letter at <strong>Annexure 1</strong> shall be sufficient consideration for this Clause.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>5.3:</strong></span><span class="inl-block-2"> The Company may, at its sole option, relieve, wholly or in part, the Employee, from complying with the provisions of this Clause 5 by providing a written waiver to Employee.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>5.4:</strong></span><span class="inl-block-2"> For all purposes of this Clause 5, the Company shall be construed to include the Company and its Affiliates.</span>'
                        )
                    ),
                    $('<p/>').html(''),
                    $('<li/>').append(
                        $('<span/>').html(
                            '<strong><u>CONFIDENTIAL INFORMATION</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>6.1:</strong></span><span class="inl-block-2"> The Employee acknowledges that during the course of the Employee’s employment with the Company, the Employee has had and will continue to have access to Confidential Information of the Company and/or Affiliates and/or received by the Company from third parties, which is confidential to the Company and/or Affiliates and/or such third parties. The Employee acknowledges that Company has explained that such Confidential Information, particularly Source Code, is the valuable property of the Company/ Affiliates and/or their customers and is critical to its Business.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>6.2:</strong></span><span class="inl-block-2"> At all times during the term of this Agreement and thereafter, Employee agrees to forever hold Company’s Confidential Information, and the Confidential Information of any of Company’s subsidiaries and Affiliates, in strict confidence, and further agrees not to disclose, divulge or disseminate to any third parties or use any such Confidential Information. In the event Employee received Confidential Information from Company prior to executing this Agreement, in exchange for the consideration Employee receives pursuant to this Agreement, Employee agrees to hold Company’s Confidential Information in strict confidence and further agrees not to use said Confidential Information or disclose said Confidential Information to any third parties. The Employee will obtain the Company’s written approval before publishing or submitting for publication any material (written, verbal, or otherwise) that relates to the Employee’s work at the Company and/or incorporates any Confidential Information. The Employee shall not remove any Confidential Information, in whole or in part, from the Company’s premises, without the Company’s prior written permission.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>6.3:</strong></span><span class="inl-block-2"> The Employee understands, in addition, that the Company has received, and in the future will receive from third parties, Confidential Information ("Third Party Information") subject to a duty on the Company’s part to maintain the confidentiality of such information and to use it only for certain limited purposes. During the term of this Agreement and thereafter, the Employee will hold Third Party Information in the strictest confidence and will not disclose to anyone (other than to Company personnel who need to know such information in connection with their work) or use, except in connection with the Employee’s work for the Company, Third Party Information unless expressly authorized by an officer of the Company in writing.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>6.4:</strong></span><span class="inl-block-2"> During the Employee’s employment by the Company, the Employee will not improperly use or disclose any confidential information or trade secrets, if any, of any former employer or any other person to whom the Employee has an obligation of confidentiality, and the Employee will not bring onto the premises of the Company any unpublished documents or any property belonging to any former employer or any other person to whom the Employee has an obligation of confidentiality unless consented to in writing by that former employer or person. The Employee will use in the performance of his/her duties only information which is generally known and used by persons with training and experience comparable to the Employee’s own, which is common knowledge in the industry or otherwise legally in the public domain, or which is otherwise provided or developed by the Company. Notwithstanding the foregoing, it is understood that, at all such times, the Employee is free to use information which is generally known in the trade or industry, which is not gained as result of a breach of this Agreement, and the Employee’s own, skill, knowledge, know-how and experience to whatever extent and in whichever way the Employee wishes.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>6.5:</strong></span><span class="inl-block-2"> Notwithstanding the aforesaid provisions, the Employee may disclose Confidential Information where ordered to do so, by any government, judicial or quasi-judicial authority; provided however, that the Employee shall in such a case give the Company a reasonable notice of any prospective disclosure and shall assist the Company in obtaining an exemption or protective order preventing such disclosure.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>6.6:</strong></span><span class="inl-block-2"> The Employee shall return to the Company or to its nominees Confidential Information, including copies thereof irrespective of storage or presentation medium, including all electronic and hard copies thereof, and any other material containing or disclosing any Confidential Information which is in the Employee’s possession, power and control as and when called upon by the Company and upon termination, not later than the Termination Date or at the option of the Company, as the case may be, destroy the same and will not make or retain any copies of such Confidential Information. Until such time as all such Confidential Information is returned or destroyed, the Company shall, in addition to initiating legal proceedings for recovery of the same, be entitled to withhold any salary, emoluments or other dues of the Employee. Further, the Employee shall compensate the Company for any misuse or damage to the Confidential Information of the Company. On termination of employment the Employee shall certify (as per the format prescribed in <strong>Annexure 2</strong>) that the Employee has complied with the obligations imposed under this clause.</span>'
                        )
                    ),
                    $('<p/>').html(''),
                    $('<li/>').append(
                        $('<span/>').html(
                            '<strong><u>COMPANY’S PROPERTY - EMPLOYEE’S DUTY TO RETURN</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>7.1:</strong></span><span class="inl-block-2"> When the Employee leaves the employment of the Company, the Employee will deliver to the Company any and all drawings, notes, memoranda, specifications, devices, formulas, and documents, together with all copies thereof, and any other material containing or disclosing any Company Inventions, Third Party Information or Confidential Information of the Company or its Affiliates. The Employee further agrees that any property situated on the premises of the Company and owned by the Company, including disks and other storage media, filing cabinets or other work areas, is subject to inspection by personnel of the Company at any time with or without notice. Prior to leaving, the Employee will cooperate with the Company in completing and signing the Company’s termination statement.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>7.2:</strong></span><span class="inl-block-2"> In the event the Employee’s employment with the Company is terminated, Employee shall sign and deliver to the Company the ‘<strong>Termination Certificate</strong>’ attached hereto as <strong>Annexure 2</strong>.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>7.3:</strong></span><span class="inl-block-2"> It is further agreed and understood that until such time as all of the Company’s Property, Confidential Information and Inventions is returned and the Termination Certificate is provided as abovementioned, the Company shall, in addition to initiating legal proceedings for recovery (and without prejudice to any other rights or remedies that Company may have under law or equity), be entitled to withhold any salary or emoluments due to the Employee then or in future payable to the Employee, and may further, at its discretion, deduct therefrom the full value of the said property/properties calculated at its then replacement price. The Employee recognizes and agrees that the Company shall be entitled to recover from the Employee and the Employee shall be bound and liable to make good to the Company any loss suffered by the Company on account of misuse of the Company’s Property, Confidential Information and Inventions by the Employee and/or any damage occasioned to the Company’s Property, Confidential Information and Inventions whilst in the custody of or entrusted to the Employee.</span>'
                        )
                    ),
                    $('<p/>').html(''),
                    $('<li/>').append(
                        $('<span/>').html(
                            '<strong><u>TERMINATION OF EMPLOYMENT</u></strong>'
                        ),
                        $('<p/>').html(''),
                        (employee.SalaryGradeLvl <= 27) &&
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>8.1:</strong></span><span class="inl-block-2"> ' +
                            markText('<strong>Termination by either Party</strong>: Either Party may terminate this Agreement, with or without cause, upon one (1) month’s written notice to the other Party (hereinafter referred to as the “<strong>Notice Period</strong>”). The termination is effective after one (1) month at the close of regular business hours on the 30th (thirtieth) day from the date of the receipt of such termination notice by the other Party. Alternatively, the Company may terminate the Employee’s employment with immediate effect or at any point during the Notice Period, upon giving the Employee one (1) month’s salary or pro-rated salary in lieu of notice for the balance of the Notice Period. If the Employee has given notice to terminate this Agreement, the Company may, at its sole discretion, permit the Employee to terminate employment during the Notice Period without any salary in lieu of notice or pro-rated salary for the balance of the Notice Period. The “<strong>Termination Date</strong>” is the date on which the Notice Period expires or the date on which the Employee is asked to discontinue service, whichever is earlier.') + 
                            '</span>'
                        ),
                        (employee.SalaryGradeLvl >= 28) &&
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>8.1:</strong></span><span class="inl-block-2"> ' + 
                            markText('<strong>Termination by either Party</strong>: Either Party may terminate this Agreement, with or without cause, upon three (3) months’ written notice to the other Party (hereinafter referred to as the “<strong>Notice Period</strong>”). The termination is effective after three (3) months at the close of regular business hours on the 90th (ninetieth) day from the date of the receipt of such termination notice by the other Party.  Alternatively, the Company may terminate the Employee’s employment with immediate effect or at any point during the Notice Period, upon giving the Employee three (3) months’ salary or pro-rated salary in lieu of notice for the balance of the Notice Period. If the Employee has given notice to terminate this Agreement, the Company may, at its sole discretion, permit the Employee to terminate employment during the Notice Period without any salary in lieu of notice or pro-rated salary for the balance of the Notice Period. The “<strong>Termination Date</strong>” is the date on which the Notice Period expires or the date on which the Employee is asked to discontinue service, whichever is earlier.') +
                            '</span>'
                        ),
                        (employee.CS_Ops_Position == "") && decreaseSpacing('beforeAnnexureSpaces',  15),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>8.2:</strong></span><span class="inl-block-2"> <strong>Termination by Company due to Employee’s misconduct</strong>: Notwithstanding anything mentioned in above Clause 8.1, the Company may terminate Employee’s employment under this Agreement, with immediate effect by a notice in writing (without salary in lieu of notice), in the event of Employees’ misconduct, including but not limited to, fraudulent, dishonest or undisciplined conduct of, or breach of integrity, or embezzlement, or misappropriation or misuse by the Employee of the Company’s property, or insubordination or failure to comply with the directions given to the Employee by persons so authorised, or the Employee’s insolvency or conviction for any offence involving moral turpitude, or breach by Employee of any terms of this Agreement or the Company’s policies, Code of Conduct, or other documents or directions of Company, or irregularity in attendance, or his/her unauthorized absence from the place of work for more than seven (7) consecutive working days, or closure of the Business of the Company, or redundancy of the post of the Employee in the Company, or the Employee conducting himself/herself in a manner which is regarded by the Company as prejudicial to the Company’s interests or to the interests of its clients. In this case “<strong>Termination Date</strong>” means the date of the notice.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>8.3:</strong></span><span class="inl-block-2"> <strong>Termination during probationary period</strong>: Notwithstanding the foregoing, if the Employee is serving a probationary period, then this Agreement can be terminated by either party immediately, without giving any notice to the other. In relation to this Clause 8.3, “<strong>Termination Date</strong>” means the last date of employment of the Employee with the Company as stated in the notice given by the Company or Employee, or the date on which the either party gives notice of termination having immediate effect, or the date on which notice period expires (whether given by the Company or the Employee), or the date on which the Company relieves the Employee upon receipt of the notice from him/her, as the case may be.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>8.4:</strong></span><span class="inl-block-2"> <strong>Termination upon Total Permanent Disability or Death of Employee</strong>: This Agreement shall terminate upon Employee’s total Permanent Disability, or death.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>8.5:</strong></span><span class="inl-block-2"> Termination of this Agreement by the Employee shall be subject to the satisfactory completion of all his/her existing duties, obligations and projects etc. Provided that this clause shall not have the effect of extending the notice period referred to in Clause 8.1 above unless agreed to by the Company and the Employee.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>8.6:</strong></span><span class="inl-block-2"> The Parties hereby agree that if the termination is found to be wrongful by an appropriate Court in India, based on a non-appealable order, the maximum liability of Company shall not exceed Employee’s one (1) month’s salary and statutory benefits for every year of service, in case the Company does not re-instate the Employee.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>8.7:</strong></span><span class="inl-block-2"> If the Employee receives any <i>bonafide</i> offer from any other person for employment or engagement, he/she shall discuss the same in good faith with Company to give Company an opportunity to make a counter-offer to the Employee. After considering such counter offer, the Employee may decide as he/she deems fit.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>8.8:</strong></span><span class="inl-block-2"> Upon termination of this Agreement, the Employee, at the option of the Company, shall be required to give an exit interview on or before the Termination Date.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>8.9:</strong></span><span class="inl-block-2"> In the event of termination of your employment hereunder, however arising, you agree that you will not at any time after such termination represent yourself as still having any connection with the Company or any Associated Company save as a former employee for the purposes only of communicating with prospective employers or complying with any applicable statutory requirements.</span>'
                        )
                    ),
                    $('<p/>').html(''),
                    $('<li/>').append(
                        $('<span/>').html(
                            '<strong><u>MATERIAL FINANCIAL INDEBTEDNESS, LOANS AND ADVANCES</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<p/>').html(
                            'If, during the Employee’s employment under this Agreement, the Employee obtains any loans or advances from the Company for any reason or otherwise becomes materially financially indebted to the Company, Company may, if it so elects, set off any sum due to the Company from the Employee against the compensation payable to the Employee and collect any remaining balance from him/her.'
                        )
                    ),
                    $('<p/>').html(''),
                    $('<li/>').append(
                        $('<span/>').html(
                            '<strong><u>ACKNOWLEDGEMENT</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>10.1:</strong></span><span class="inl-block-2"> The Employee agrees, recognizes and acknowledges that:</span>'
                        ),
                        $('<p/>').append(
                            $('<ul class="no-bullet"/>').append(
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>10.1.1:</strong></span><span class="inl-block-3"> he/she has been provided with a copy of this Agreement for review prior to signing it, that he/she has reviewed it and understands the terms, purposes and effects of this Agreement, and that he/she has signed the same only after having had the opportunity to seek clarifications; that he/she has been given a signed copy of this Agreement for his/her own records; he/she has not been subjected to duress or undue influence of any kind to execute this Agreement and this Agreement will not impose an undue hardship upon him/her. He/she has executed this Agreement of his/her own free will and without relying upon any statements made by the Company or any of its representatives, agents or employees. This Agreement is in all respects reasonable and necessary to protect the legitimate business interests of the Company;</span>'
                                ),
                                $('<p/>').html(''),
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>10.1.2:</strong></span><span class="inl-block-3"> if he/she violates any of the terms of this Agreement, the Company will suffer irreparable injury and damages the amount of which cannot be adequately measured in monetary terms and that an adequate remedy at law will not exist;</span>'
                                ),
                                $('<p/>').html(''),
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>10.1.3:</strong></span><span class="inl-block-3"> in view of the above, the Company shall be entitled to injunctive relief, in addition to any other remedy available at law or in equity, in the event he/she violates any of the terms or conditions of this Agreement.</span>'
                                )
                            )
                        )
                    ),
                    $('<p/>').html(''),
                    $('<li/>').append(
                        $('<span/>').html(
                            '<strong><u>AUTHORISATION TO NOTIFY NEW EMPLOYER</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<p/>').html(
                            'In the event of termination of Employee’s employment or Employee leaving the employment of the Company, the Employee hereby consents to the notification of the Employee’s new employer of the Employee’s rights and obligations under this Agreement.'
                        )
                    ),
                    $('<p/>').html(''),
                    $('<li/>').append(
                        $('<span/>').html(
                            '<strong><u>OFFER ON LIQUIDATION</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<p/>').html(
                            'If the employment of the Employee is terminated by reason of the liquidation of the Company for the purpose of reconstruction or amalgamation or by reason of any reorganisation of the Company and the Employee shall have been offered employment with the company succeeding to the Company upon such liquidation on terms no less favourable to the Employee than the terms in effect under this Agreement and without any interruption to the service of the Employee, then the Employee shall have no claim against the Company by reason of the termination of the employment.'
                        )
                    ),
                    $('<p/>').html(''),
                    $('<li/>').append(
                        $('<span/>').html(
                            '<strong><u>DISPUTE RESOLUTION</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>13.1:</strong></span><span class="inl-block-2"> The Company and the Employee hereby agree that they intend to discharge their obligations in utmost good faith. They therefore agree that they will, at all times, act in good faith, and make all attempts to resolve all differences howsoever arising out of or in connection with this Agreement by discussion. If within fifteen (15) days of the commencement of the discussions the dispute is not resolved the dispute shall be referred to arbitration, provided that:</span>'
                        ),
                        $('<p/>').append(
                            $('<ul class="no-bullet"/>').append(
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>13.1.1:</strong></span><span class="inl-block-3"> Arbitration shall be conducted in accordance with the provisions of the Indian Arbitration and Conciliation Act, 1996;</span>'
                                ),
                                $('<p/>').html(''),
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>13.1.2:</strong></span><span class="inl-block-3"> There shall be one arbitrator nominated jointly by the parties, failing which there shall be three (3) arbitrators, one each nominated by Company and Employee and the other chosen by the two (2) arbitrators so nominated (who shall be persons of professional repute and who are not directly or indirectly connected with the parties) whose appointment shall be agreed between the parties within seven (7) days of the service of an arbitration notice.</span>'
                                ),
                                $('<p/>').html(''),
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>13.1.3:</strong></span><span class="inl-block-3"> The Parties agree that until the arbitration proceedings are complete, they shall not take their disputes to a Court of Law except for the purpose of injunctive relief. All hearings shall be held in Mumbai and the language of the arbitration shall be in English.</span>'
                                )
                            )
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>13.2:</strong></span><span class="inl-block-2"> Notwithstanding the aforesaid provisions of this Agreement, because the Employee’s services are personal and unique and because the Employee may have access to and become acquainted with the Confidential Information of the Company, the Company shall have the right to enforce this Agreement and any of its provisions by injunction or other equitable relief, without bond and without prejudice to any other rights and remedies that the Company may have for a breach of this Agreement.</span>'
                        )
                    ),
                    $('<p/>').html(''),
                    $('<li/>').append(
                        $('<span/>').html(
                            '<strong><u>MISCELLANEOUS</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>14.1:</strong></span><span class="inl-block-2"> <strong>No Conflicting Obligations</strong>: The Employee represents that the Employee’s performance of all the terms of this Agreement and as an employee of the Company does not and will not breach any agreement to keep in confidence information acquired by the Employee in confidence or in trust prior to the Employee’s employment by the Company. The Employee has not entered into, and agrees that he/she will not enter into, any agreement either written or oral in conflict herewith.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>14.2:</strong></span><span class="inl-block-2"> <strong>Entire Agreement</strong>: The obligations of this Agreement shall apply to any time during which the Employee was previously employed, or is in the future employed, by the Company as a consultant if no other agreement governs nondisclosure and assignment of inventions during such period. This Agreement is the final, complete and exclusive agreement of the parties with respect to the subject matter hereof and supersedes and merges all prior discussions between us. No modification of or amendment to this Agreement, nor any waiver of any rights under this Agreement, will be effective unless in writing and signed by the Party to be charged. Any subsequent change or changes in the Employee’s duties, salary or compensation will not affect the validity or scope of this Agreement.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>14.3:</strong></span><span class="inl-block-2"> <strong>Amendments</strong>: No change, modification, or termination of any of the terms, provisions, or conditions of this Agreement shall be effective unless made in writing and signed or initialled by all signatories to this Agreement.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>14.4:</strong></span><span class="inl-block-2"> <strong>Survival</strong>: The provisions of this Agreement shall survive the termination of the Employee’s employment and the assignment of this Agreement by the Company to any successor in interest or other assignee.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>14.5:</strong></span><span class="inl-block-2"> The Employee represents and warrants that the Employee is subject to no contractual restriction or obligation that will in any way limit the Employee’s activities on behalf of the Company or prevent the Employee from performing all or any of the obligations, terms and conditions of this Agreement.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>14.6 </strong></span><span class="inl-block-2"> <strong>No Misrepresentation:</strong> The Employee agrees that during the course of the employment with the Company and after the termination thereof, he/she shall always accurately represent his/her position, title, role description and duties at the Company, including in any dealings with the Company’s customers and suppliers and in his/her resume, social media profiles and pages (including without limitation any LinkedIn or Facebook profile), website, email signature and business card.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>14.7:</strong></span><span class="inl-block-2"> The Employee represents and warrants that he/she will not execute any instrument or grant or transfer any rights, titles and interests inconsistent with the terms and conditions of this Agreement.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>14.8:</strong></span><span class="inl-block-2"> <strong>Assignment</strong>: The Employee acknowledges and agrees that the Company may assign any of its rights under this Agreement to any person or entity. This Agreement is not assignable by the Employee.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>14.9:</strong></span><span class="inl-block-2"> <strong>Severability</strong>: In case any one or more of the provisions contained in this Agreement shall, for any reason, be held to be invalid, illegal or unenforceable in any respect, such invalidity, illegality or unenforceability shall not affect the other provisions of this Agreement, and this Agreement shall be construed as if such invalid, illegal or unenforceable provision had never been contained herein. If moreover, any one or more of the provisions contained in this Agreement shall for any reason be held to be excessively broad as to duration, geographical scope, activity or subject, it shall be construed by limiting and reducing it, so as to be enforceable to the extent compatible with the applicable law as it shall then appear.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>14.10:</strong></span><span class="inl-block-2"> <strong>Successors and Assigns</strong>: This Agreement will be binding upon the Employee’s heirs, executors, administrators and other legal representatives and will be for the benefit of the Company, its successors, and its assigns.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>14.11:</strong></span><span class="inl-block-2"> <strong>Waiver</strong>: No waiver by the Company of any breach of this Agreement shall be a waiver of any preceding or succeeding breach. No waiver by the Company of any right under this Agreement shall be construed as a waiver of any other right. The Company shall not be required to give notice to enforce strict adherence to all terms of this Agreement.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>14.12:</strong></span><span class="inl-block-2"> <strong>Force Majeure</strong>: Neither the Company nor the Employee shall be liable nor responsible for any damages in any manner whatsoever for any failure or delay to perform or fulfill any of their obligations under this Agreement when such failure or delay is due to fire, riot, strike, lockout, war, civil commotion, accident, breakdown of plant or machinery, flood, storm, acts of God, omissions or acts of public authorities preventing or delaying performance of obligation relating to acts of public authorities, including changes in law, regulations or policies of the Government, regulatory authority acts beyond the control of the Company and/ or the Employee, or for any other reasons which cannot reasonably be forecast or provided against, and which cannot be predicted by men of ordinary prudence.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"></span><span class="inl-block-2">Provided that such Party gives prompt written notice of such condition to the other Party and resumes performance of the obligations as soon as possible.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>14.13:</strong></span><span class="inl-block-2"> <strong>Parties To Act With Due Diligence And In Good Faith</strong>: The Company and the Employee hereto shall dutifully perform all covenants of this Agreement in letter and spirit and shall otherwise act with due diligence and in good faith.</span>'
                        )
                    ),
                    $('<p/>').html(''),
                    $('<li/>').append(
                        $('<span/>').html(
                            '<strong><u>NOTICES</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<p/>').html(
                            'Any notices required or permitted hereunder shall be given to the appropriate Party at the address specified below or at such other address as the Party shall specify in writing. Such notice shall be deemed given upon personal delivery to the appropriate address or if sent by certified or registered mail, three (3) days after the date of mailing.'
                        ),
                        $('<p/>').html(
                            'If to the Company at the address set forth above:<br>Attention: <span style="margin-left: 50px;">Human Resources</span>'
                        ),
                        $('<p/>').html(
                            'If to the Employee:<br>To the address set forth above.'
                        )
                    ),
                    $('<p/>').html(''),
                    $('<li/>').append(
                        $('<span/>').html(
                            '<strong><u>WAIVER</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<p/>').html(
                            'No waiver by the Company of any breach of this Agreement shall be a waiver of any preceding or succeeding breach. No waiver by the Company of any right under this Agreement shall be construed as a waiver of any other right. The Company shall not be required to give notice to enforce strict adherence to all terms of this Agreement.'
                        )
                    ),
                    $('<p/>').html(''),
                    $('<li/>').append(
                        $('<span/>').html(
                            '<strong><u>DEFINITIONS AND INTERPRETATION</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<p/>').html(
                            'In this Agreement unless the context otherwise requires:'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>17.1:</strong></span><span class="inl-block-2"> “<strong>Affiliate</strong>” means any Person that directly or indirectly through one or more intermediaries, controls or is controlled by or is under the common control as that of the Company.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>17.2:</strong></span><span class="inl-block-2"> “<strong>Agreement</strong>” means this agreement including any Annexures hereto as may be amended and modified from time to time.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>17.3:</strong></span><span class="inl-block-2"> “<strong>Business</strong>” means the business being carried on or that may be carried on by the Company or any of its Affiliates including the business of online auctions and fixed price (including B2C, B2B and procurement segments), online payments, online shopping, and online travel.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>17.4:</strong></span><span class="inl-block-2"> “<strong>Competitor</strong>” means and includes all such Persons domestic, which carry on the Business or a business similar to the Business as defined above and/or directly or indirectly compete with the Company.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>17.5:</strong></span><span class="inl-block-2"> “<strong>Confidential Information</strong>” means and includes, information which is confidential and proprietary to the Company and/or Affiliates and/or to certain third parties with which the Company and/or Affiliates has relationships, and disclosed to or obtained by the Employee from the Company and/or Affiliates and/or such third parties, whether (without limitation) in graphic, written, electronic or machine readable form on any media or orally and whether or not the information is expressly stated to be confidential or marked as such and includes, but is not limited to information of value or significance to the Company and/or Affiliates and/or its Competitors (present or potential) such as:</span>'
                        ),
                        $('<p/>').append(
                            $('<ul class="no-bullet"/>').append(
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>17.5.1:</strong></span><span class="inl-block-3"> Inventions including information relating thereto or any part thereof; any devices designed by the Company or Affiliate to prevent unauthorized copying thereof; trade or business secrets of Company or Affiliate;</span>'
                                ),
                                $('<p/>').html(''),
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>17.5.2:</strong></span><span class="inl-block-3"> Data of past, present or prospective customer / supplier / distributor/ agents/ licensees (whether in India or abroad) of the Company or Affiliates including their names, addresses, sales figures and sales conditions of Company;</span>'
                                ),
                                $('<p/>').html(''),
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>17.5.3:</strong></span><span class="inl-block-3"> Manufacturing, distribution and technological data used in conducting the Business, including details as to procurement, distribution, manufacturing processes, procedures and strategies, the fees, discounts, commissions and other credits of the Company or Affiliate;</span>'
                                ),
                                $('<p/>').html(''),
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>17.5.4:</strong></span><span class="inl-block-3"> Business data, particularly data relating to new products, projects, services, promotion campaigns, plans for future development, pricing agreements and joint ventures in which the Company or Affiliates is/are involved;</span>'
                                ),
                                $('<p/>').html(''),
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>17.5.5:</strong></span><span class="inl-block-3"> All data in respect of consultants, agents, representatives of the Company and/or Affiliates including details of their effectiveness and compensation, and commission;</span>'
                                ),
                                $('<p/>').html(''),
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>17.5.6:</strong></span><span class="inl-block-3"> Research and development data, particularly information relating to the software and hardware developments of the Company or Affiliate;</span>'
                                ),
                                $('<p/>').html(''),
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>17.5.7:</strong></span><span class="inl-block-3"> Financial data, in particular, concerning budgets, the fees and revenue calculations, costs, sales figures, financial statements, costing, profits, profit margins, profit expectations and inventories of the Company and/or Affiliates;</span>'
                                ),
                                $('<p/>').html(''),
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>17.5.8:</strong></span><span class="inl-block-3"> Information which, to Employee’s knowledge, is not intended by the Company for general dissemination;</span>'
                                ),
                                $('<p/>').html(''),
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>17.5.9:</strong></span><span class="inl-block-3"> Information received by the Company and/or Affiliate from third parties under obligation of confidentiality;</span>'
                                ),
                                $('<p/>').html(''),
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>17.5.10:</strong></span><span class="inl-block-3"> Any information derived from any of the above;</span>'
                                ),
                                $('<p/>').html(''),
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>17.5.11:</strong></span><span class="inl-block-3"> Any copies of the abovementioned information;</span>'
                                )
                            )
                        ),        
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"></span><span class="inl-block-2">but does not include information: (i) that is in the public domain other than by Employee’s breach of this Agreement and/or of any other agreement to which the Employee is bound; (ii) that was previously known by Employee, as established by written records of the Employee prior to receipt of such information from the Company; (iii) that was lawfully obtained by the Employee from a third party without any obligations of confidentiality to Company; and (iv) that was developed by the Employee independent of the Confidential Information.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>17.6:</strong></span><span class="inl-block-2"> “<strong>Inventions</strong>” includes ideas, concepts, creations, discoveries, intellectual property, improvements, know how, trade or business secrets; trade marks, service marks, mask works, art works, designs, utility models, tools, devices, models, methods, procedures, processes, systems, principles, algorithms, works of authorship, flowcharts, drawings, books, papers, models, sketches, formulas, teaching techniques, electronic codes, proprietary techniques, research projects, and other confidential and Confidential Information, computer programming code, databases, software programs including their Source Code and object code; data, documents, instruction manuals, records, memoranda, notes, user guides; in either printed or machine-readable form, whether or not copyrightable or patentable, or any written or verbal instructions or comments.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>17.7:</strong></span><span class="inl-block-2"> “<strong>Moral Rights</strong>” means any rights to claim authorship of Inventions to object to or prevent the modification of any Inventions, or to withdraw from circulation or control the publication or distribution of any Inventions, and any similar right, existing under judicial or statutory law of any country in the world, or under any treaty, regardless of whether or not such right is denominated or generally referred to as a “moral right”.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>17.8:</strong></span><span class="inl-block-2"> “<strong>Offer Letter</strong>” means the letter issued by Company to the Employee which sets out the details and manner of the remuneration, benefits, and other terms and conditions, as may be amended from time to time, and set out in <strong>Annexure 1</strong>.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>17.9:</strong></span><span class="inl-block-2"> “<strong>Person</strong>” or “<strong>Persons</strong>” means an individual, corporation, partnership, limited liability company, association, trust or other entity or organization, including a government or political subdivision or an agency or instrumentality thereof that is not a party to this Agreement.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>17.10:</strong></span><span class="inl-block-2"> “<strong>Permanent Disability</strong>” means blindness, low-vision, leprosy-cured, hearing impairment, loco motor disability, mental retardation and/ or mental illness.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>17.11:</strong></span><span class="inl-block-2"> “<strong>Property</strong>” includes, but is not limited to the:</span>'
                        ),
                        $('<p/>').append(
                            $('<ul class="no-bullet"/>').append(
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>17.11.1:</strong></span><span class="inl-block-3"> internal memoranda, computer equipment (including software), training materials, books, and all other like property, including all copies, duplications, replications, and derivatives of such property which embody Confidential Information and Inventions or any other information concerning the Business, of the Company, whether such documents have been prepared by the Company or any other Person;</span>'
                                ),
                                $('<p/>').html(''),
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>17.11.2:</strong></span><span class="inl-block-3"> blueprints, drawings, photographs, charts, graphs, notebooks, customer lists, computer disks, tapes or printouts, sound recordings and other printed, typewritten or handwritten documents, sample products, prototypes and models;</span>'
                                ),
                                $('<p/>').html(''),
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>17.11.3:</strong></span><span class="inl-block-3"> any residential accommodation, automobile, furniture, fixtures, fittings and furnishings, communication equipment, and all other items; and,</span>'
                                ),
                                $('<p/>').html(''),
                                $('<li/>').html(
                                    '<span class="margin-right-15 margin-left-25 inl-block-inn"><strong>17.11.4:</strong></span><span class="inl-block-3"> any tangible expression of Confidential Information, including, without limitation, photographs, plans, notes, renderings, journals, notebooks, computer programs and samples relating thereto.</span>'
                                )
                            )
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>17.12:</strong></span><span class="inl-block-2"> “<strong>Proprietary Rights</strong>” include (i) all rights, title, and interest under any statute or under common law including patent rights; copyrights including moral rights; and any similar rights in respect of Inventions / work products, anywhere in the world, whether negotiable or not; (ii) any licenses, permissions and grants in connection therewith; (iii) applications for any of the foregoing and the right to apply for them in any part of the world; (iv) right to obtain and hold appropriate registrations in Inventions / work products and; (v) all extensions and renewals thereof; and (vi) causes of action in the past, present or future, related thereto including the rights to damages and profits, due or accrued, arising out of past, present or future infringements or violations thereof and the right to sue for and recover the same.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>17.13:</strong></span><span class="inl-block-2"> “<strong>Restricted Business</strong>” means the following companies or any of their affiliates doing business or having operations in India: PayTM, FreeCharge, Ola, Mobikwik, Oxigen, PayUMoney, Visa, Amex, MasterCard, ICICI, Citibank, Airtel, Vodafone, Google, Facebook, Citrus Pay, EBS, Euronet World Wide, and or any other companies that or that otherwise competes in any respect with any aspect of the Business or operations of the Company.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>17.14:</strong></span><span class="inl-block-2"> “<strong>Source Code</strong>” means the software program code in human readable form, and all supporting materials used to develop or program such code including, but not limited to, programmer’s notes, functional specifications, scripts, detailed documentation, and a programmer’s guide.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>17.15:</strong></span><span class="inl-block-2"> “<strong>Termination Date</strong>” shall mean the date specified under Clause 8.</span>'
                        ),
                        $('<p/>').html(
                            '<span class="margin-right-15 margin-left-25 inl-block"><strong>17.16:</strong></span><span class="inl-block-2"> Unless the context of this Agreement otherwise requires, (i) words of any gender include each other gender; (ii) words using the singular or plural number also include the plural or singular number, respectively; (iii) the terms “hereof,” “herein,” “hereby” and derivative or similar words refer to this entire Agreement; (iv) whenever this Agreement refers to a number of days, such number shall refer to calendar days unless otherwise specified; (v) headings are used for convenience only and shall not affect the interpretation of this Agreement; and (vi) references to the Recitals, Clauses and Appendices shall be deemed to be a reference to the recitals, clauses and appendices of this Agreement.</span>'
                        )
                    ),
                    $('<p/>').html(''),
                    $('<li/>').append(
                        $('<span/>').html(
                            '<strong><u>Governing Law and Jurisdiction:</u></strong>'
                        ),
                        $('<p/>').html(''),
                        $('<p/>').html(
                            'This Agreement shall be governed and construed in accordance with the laws of India in relation to any legal action or proceedings to enforce this Agreement. Subject to arbitration, the Parties irrevocably submits to the exclusive jurisdiction of any competent courts situated at ' + markText(employee.Work_Location) + ' and waive any objection to such proceedings on grounds of venue or on the grounds that the proceedings have been brought in an inconvenient forum.'
                        )
                    )
                )
            ),
            $('<p/>').html(
                'IN WITNESS WHEREOF, the Parties hereto have duly executed this Agreement as of the day and year first above written.'
            )
        )
        // end append
    );

    $("#markup2").html("").append(
        // OfferClause 2
        $('<div class="offerClause2">').append(
            addSpacing(beforeAnnexureSpaces),
            $('<p class="center"/>').html(
                '<strong>ANNEXURE 1</strong>'
            ),
            $('<p class="center"/>').html(
                'OFFER LETTER (SIGNED SEPARATELY)'
            ),
            addSpacing(afterAnnexureSpaces)
        )
        // end append
    );

    $("#markup3").html("").append(
        // OfferClause 3
        $('<div class="offerClause3">').append(
            $('<p class="center"/>').html(
                '<strong>ANNEXURE 2</strong>'
            ),
            $('<p class="center"/>').html(
                '<strong>TERMINATION LETTER</strong>'
            ),
            $('<p/>').html(
                'This is to certify that I do not have in my possession, nor have I failed to return, any products (opinions, precedents, documents, papers etc.), client correspondence, internal memoranda, price lists, client lists, any client information, computer equipment (including software), training materials, manuals, books, and all other like information or products, Confidential Information (as defined in the Agreement referenced below), including all copies, duplications, replications, and derivatives of such information products, and any residential accommodation, automobile, furniture, fixtures, fittings and furnishings, communication equipment, automobile and all other items which may have been made available to me, or any other documents or property, or reproductions of any of the aforementioned items belonging to Company, its subsidiaries, affiliates, successors or assigns (together, the “<strong>Company</strong>”).'
            ),
            $('<p/>').html(
                'I further certify that I have complied with all the terms of the Company’s Employment, Confidentiality and Inventions Agreement (“<strong>Agreement</strong>”) signed by me, including the reporting of any Inventions (as defined therein) conceived or made by me (solely or jointly with others) covered by that Agreement.'
            ),
            $('<p/>').html(
                'I further agree that, in compliance with the Agreement, I will preserve as confidential all Confidential Information (as defined therein) of the Company and any confidential or Confidential Information disclosed to the Company by a third party pursuant to a confidentiality obligation.'
            ),
            $('<p/>').html(
                'I further agree that, in compliance with the Agreement, for twelve (12) months from this date I will not, directly or indirectly, either as an individual on my own account or as a partner, employee, consultant, advisor, agent, contractor, director, trustee, committee member, office bearer, or shareholder, solicit employment of or advise, induce, recruit or encourage any of the Company’s employee or any person or organisation providing services to or through the Company to terminate his or her contract or relationship with Company or to accept any contract (directly or indirectly) or other arrangement for providing services to any other person or organization.'
            ),
            $('<p/>').html(
                'I further agree that the Company shall be entitled to recover from me and I shall be bound and liable to make good to the Company any loss suffered by the Company on account of my misuse of the Company’s Property, Confidential Information and Inventions (as defined in the Agreement).'
            ),
            $('<p/>').html(
                'I certify that I have received an amount of Rs. _____________, which includes the full and final settlement of all my dues from the Company and hereby confirm that there are no outstanding liabilities or dues that the Company owes to me in relation to my employment with the Company. I hereby release the Company and/or its affiliates, and its directors, officers, employees, shareholders, partners, agents, attorneys, predecessors, successors, parent and subsidiary entities, insurers, affiliates, and assigns from any and all claims, liabilities and obligations, both known and unknown, that arise out of or are in any way related to events, acts, conduct, or omissions occurring at any time prior to and including the date of this Employee Exit Interview Declaration. This general release includes, but is not limited to, (i) all claims arising out of or in any way related to my employment with the Company or the termination of my employment; (ii) all claims related to my compensation or benefits from the Company, including salary, bonuses, commissions, leave / vacation pay, expense reimbursement, severance pay, fringe benefits, stock, stock options, or any other ownership interest in the Company; (iii) all claims for breach of contract, wrongful termination, and breach of the implied covenant of good faith and fair dealing; (iv) all tort claims, including claims for fraud and defamation (v) all central, state, and local statutory claims, including claims under the labour legislation in India. I agree not to disparage the Company and any of its representatives in any manner likely to be harmful to them or their business, business reputation or personal reputation. I expressly waive and relinquish all rights and benefits under any law in force with respect to my release of any unknown or unsuspected claims.'
            ),
            $('<p/>').html(
                'I further agree that I will repay any monetary amount which I owe the Company within one (1) week of my last day of employment with the Company.'
            )
        )
        // end append
    );
    
    $("#markup4").html("").append(
        // OfferClause 4
        $('<div class="offerClause4">').append(
            $('<p/>').html(
                'EMPLOYEE'
            )
        )
        // end append
    );
    
    $("#markup5").html("").append(
        // OfferClause 5
        $('<div class="offerClause5">').append(
            $('<p/>').html(
                'COMPANY'
            )
        )
        // end append
    );
}

// https://jira.silkroadtech.com/browse/SERVICES-35278?focusedCommentId=1431517&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-1431517
const decreaseSpacing = function(minuendReference, subtrahend) {
    "use strict";
    switch(minuendReference) {
        case 'beforeAnnexureSpaces':
            beforeAnnexureSpaces = beforeAnnexureSpaces - subtrahend;
        break;
        case 'afterAnnexureSpaces':
            afterAnnexureSpaces = afterAnnexureSpaces - subtrahend;
        break;
    }
}

// https://jira.silkroadtech.com/browse/SERVICES-35278?focusedCommentId=1431517&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-1431517
const addSpacing = function(spaces) {
    "use strict";
    let tmpNode = $('<div/>');
    for (let i = 0; i < spaces; i++) {
        tmpNode.append(
            $('<p class="hide" />').html('<br>&nbsp;')
        )
    }
    return tmpNode.html();
}

const markText = function(text) {
    "use strict";
    let tmpNode = $('<div/>');
    tmpNode.html($('<mark/>').append(text));
    return tmpNode.html();
}

function fnOrdinal(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

$(function() {
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

        showCompletedOfferLetter('incomplete', 'complete', arrParts);
        
        var arrParts2 = [
            [1, 'hidden_pg2'],
            [1, 'hidden_pg3'],
        ];

        showCompletedOfferLetter('incomplete2', 'complete2', arrParts2);
    }
});
