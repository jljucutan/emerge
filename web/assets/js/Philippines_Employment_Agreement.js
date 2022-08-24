// Philippines Employment Agreement
function fnView() {
    // Philippines Employment Agreement
    $("#markup").html("").append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p class="center"/>').html(
                '<strong>EMPLOYMENT AGREEMENT</strong>'
            ),
            $('<p/>').html(
                '&nbsp;'
            ),
            $('<p/>').html(
                'This Employment Agreement (“<strong>Agreement</strong>”) is entered into this <span class="dynamic">' + employee.Current_Long_Date + '</span>, by and between:'
            ),
            $('<p class="indented"/>').html(
                '<strong>PayPal Philippines, Inc.</strong>, a corporation organized and existing in accordance with the laws of the Republic of the Philippines, with place of business at Filinvest Axis Tower One, Northgate Cyberzone, Filinvest Corporate City Alabang, Muntinlupa City 1781 Philippines (hereinafter referred to as the “<strong>Company</strong>”);'
            ),
            $('<p class="indented"/>').html(
                '- and -'
            ),
            $('<p class="indented"/>').html(
                '<span class="dynamic">' + employee.Full_Name + '</span>, <span class="dynamic">' + employee.Nationality + '</span>, of legal age, with residence address at <span class="dynamic">' + employee.Address1 + '</span>&nbsp;<span class="dynamic">' + (employee.Address2 ? ' ' + employee.Address2 : '') + '</span> <span class="dynamic">' + employee.City + '</span>, <span class="dynamic">' + employee.State + '</span>, <span class="dynamic">' + employee.Zip + '</span> (hereinafter referred to as the “<strong>Employee</strong>”).'
            ),
            $('<p/>').html(
                'WITNESSETH THAT:'
            ),
            $('<p/>').html(
                'WHEREAS:'
            ),
            $('<p/>').html(
                '(1) The Company is a corporation organized and existing under the laws of the Republic of the Philippines to engage in general administration and planning; business planning and coordination; corporate finance advisory services; marketing control and sales promotion; training and personnel management; logistic services; research and development services and product development; technical support and maintenance; data processing and communication and business development;'
            ),
            $('<p/>').html(
                '(2) The Employee has represented that he/she is willing to work for the Company as a new employee and is qualified for the position of <span class="dynamic">' + employee.Business_Title + '</span>;'
            ),
            $('<p/>').html(
                '(3) The Company is interested in employing the Employee as a new employee as its <span class="dynamic">' + employee.Business_Title + '</span>'
            ),
            $('<p/>').html(
                'NOW, THEREFORE, for and in consideration of the foregoing premises, the parties to this Agreement agree as follows:'
            ),
            $('<p/>').html(
                '<strong>1. <u>EMPLOYMENT</u></strong>'
            ),
            $('<p/>').html(
                'The Company will hire the Employee as a new employee for the position of <span class="dynamic">' + employee.Business_Title + '</span>.  The duties, responsibilities and work hours of the Employee are outlined in Annex “A”, which is attached hereto and made an integral part of this Agreement.  The duties, responsibilities and work hours of the Employee may change according to the needs of the Company.  The Employee recognizes the right and prerogative of the Company to change the Employee’s duties, responsibilities and work hours according to the Company’s needs.  Any change shall also form an integral part of this Agreement as if agreed upon at the time of the execution of this Agreement.'
            ),
            $('<p/>').html(
                '<strong>2. <u>PROBATIONARY PERIOD</u></strong>'
            ),
            $('<p/>').html(
                'The Employee’s probationary period shall not be more than one hundred eighty (180) days from the start date of the Employee’s employment with the Company. The probationary employment may be terminated at any time during this period for just and/or authorized causes under Philippine law, and as provided under Clause 7 of this Agreement, or if the Employee fails to meet the reasonable standards for regularization set by the Company and made known to the Employee at the start of the employment, as set forth in Annex ”B” of this Agreement.'
            ),
            $('<p/>').html(
                '<strong>3. <u>COMPENSATION AND BENEFITS</u></strong>'
            ),
            $('<p/>').html(
                'For all services rendered by the Employee, the Employee shall receive a gross salary and such other compensation and benefits as set forth in Annex “C”, which is attached hereto and made an integral part of this Agreement.  The Employee’s monthly salary shall accrue from day to day and shall be paid in arrears, one-half on the 15th of the month and the other one-half at the end of the month.'
            ),
            $('<p/>').html(
                'The Employee’s salary shall be paid either in cash, by a bank check or by a bank or postal transfer, from which shall be deducted, where applicable, Social Security System, Philippine Health Insurance Corporation and Home Development Mutual Fund (Pag-IBIG Fund) contributions, withholding taxes, and other mutually-agreed or government-mandated deductions to be borne by the Employee.'
            ),
            $('<p/>').html(
                'Except for those taxes and contributions mandated by law to be withheld or for any government filings to be made by the Company in connection with the salary and other compensation and benefits arising from this employment, all other taxes and contributions and filings shall be the responsibility of and shall be made by the Employee.'
            ),
            $('<p/>').html(
                'Notwithstanding any provision to the contrary, it is expressly agreed that any bonus, benefit or other payment given by the Company to the Employee in excess of that specified in this clause shall not be considered salary that the Employee is contractually entitled to, but as a gratuity that the Company reserves the right to discontinue or revise at any time, at its sole discretion.  Furthermore, incidents when the Company gives any bonus, benefit or other payment in excess of that specified in this clause shall not be considered as an established practice or precedent and shall not form part of those due and demandable under this Agreement. Employee acknowledges that some allowances and benefits may trigger tax liability, the financial consequences of which may be borne by the Employee.'
            ),
            $('<p/>').html(
                'The compensation package defined in this clause shall comprise all that is due to the Employee and the latter shall not be entitled to any other amount, bonus or benefit.'
            ),
            $('<p/>').html(
                '<strong>4. <u>ASSIGNMENT</u></strong>'
            ),
            $('<p/>').html(
                'The Employee recognizes the Company’s right and prerogative to, without limitation, assign and re-assign him/her to perform his/her duties and responsibilities, as well as other tasks, in any place and at any time as the Company may deem necessary and beneficial to its business, including assignments to its related companies.  Furthermore, the Company shall have the right to assign its rights, interests and privileges in this Agreement to another party upon securing the consent of the Employee.'
            ),
            $('<p/>').html(
                '<strong>5. <u>RULES AND REGULATIONS</u></strong>'
            ),
            $('<p/>').html(
                'All existing as well as future rules and regulations and amendments thereto issued by the Company are hereby deemed incorporated into this Agreement.  The Employee binds himself to comply with all Company policies, rules and regulations as may be issued, revised or amended by the Company from time to time.  The Employee acknowledges that it is his duty to know and understand such policies, rules and regulations.  Non-compliance with or violation thereof shall be ground for disciplinary action, which may include employment termination.'
            ),
            $('<p/>').html(
                '<strong>6. <u>DISCIPLINARY MEASURES</u></strong>'
            ),
            $('<p/>').html(
                'The Employee hereby recognizes the Company’s right and prerogative to impose disciplinary measures or sanctions, which may include, but are not limited to, termination of employment, suspensions, fines, salary deductions, allowance reductions, withdrawal of benefits, loss of privileges, for any and all of his/her infractions, acts or omissions, irrespective of whether such infractions, acts or omissions constitute grounds for termination.'
            ),
            $('<p/>').html(
                '<strong>7. <u>CODE OF CONDUCT</u></strong>'
            ),
            $('<p/>').html(
                'The Employee also acknowledges that it is his/her duty and responsibility to be aware of the Code of Business Conduct & Ethics of the Company, as well as the rules and regulations regarding his/her employment, and to fully comply with the same in good faith.'
            ),
            $('<p/>').html(
                'The provisions of the Code of Conduct of the Company and all rules and regulations issued by the Company are incorporated into and made an integral part of this Agreement.  The Employee acknowledges that the Company may revise, amend or modify such Code of Conduct, policies, rules and regulations.'
            ),
            $('<p/>').html(
                '<strong>8. <u>NO CONFLICT OF INTEREST</u></strong>'
            ),
            $('<p/>').html(
                'The Employee shall terminate all other business relationships or concerns with which he/she may be personally involved with.  Without the prior written consent of the Company, the Employee shall not engage in any activity during or after working hours that may be prejudicial to the interests of the Company or may interfere with the Employee’s performance of his/her duties and responsibilities.'
            ),
            $('<p/>').html(
                'The Employee hereby represents and warrants that he/she is not subject to any restrictions, agreement, arrangement (including but not limited to any non-compete restriction) or court order that would directly or indirectly restrict him/her from entering into this Agreement or from fully performing his/her duties and responsibilities pursuant to this Agreement. A violation of this representation shall constitute dishonesty, which shall be a ground for the termination of employment of the Employee.'
            ),
            $('<p/>').html(
                'The Employee shall indemnify, defend and hold the Company and its representatives harmless from and against any and all claims, made or threatened, arising from any such restrictions (including but not limited to, any non-compete restriction) that directly or indirectly restricts him/her from entering into this Agreement or from fully performing his/her duties and responsibilities pursuant to this Agreement.'
            ),
            $('<p/>').html(
                '<strong>9. <u>GROUNDS FOR TERMINATION</u></strong>'
            ),
            $('<p/>').html(
                'Aside from the just and authorized causes for terminating employment enumerated in Articles 297 to 299 (formerly, Articles 282 to 284) of the Labor Code of the Philippines and notwithstanding any provision to the contrary in this Agreement, the following acts and/or omissions of the Employee shall, without limitation, similarly constitute just and authorized grounds for the Company to terminate the Employee’s employment with the Company and/or grounds for the Company to impose disciplinary measures on the Employee:'
            ),
            $('<p/>').html(
                'a) Intentional or habitual negligent violation of the policies, rules and regulations of the Company;'
            ),
            $('<p/>').html(
                'b) Commission of an act that results in the Company’s loss of confidence in the Employee’s ability to satisfactorily perform his/her duties and responsibilities;'
            ),
            $('<p/>').html(
                'c) Serious misuse or abuse of the Company’s property, facilities and/or resources;'
            ),
            $('<p/>').html(
                'd) Commission of an act that may be considered as a crime or offense against a co-employee or the Company itself;'
            ),
            $('<p/>').html(
                'e) Failure to attain a satisfactory grade in two (2) consecutive performance evaluations made by the Company;'
            ),
            $('<p/>').html(
                'f) Intentional or negligent disregard of the disciplinary measures or sanctions imposed by the Company;'
            ),
            $('<p/>').html(
                'g) Directly or indirectly participating, engaging and/or entering into unauthorized business arrangement involving products and/or services of the Company or products and/or services of the competitors of the Company;'
            ),
            $('<p/>').html(
                'h) Intentional or negligent violation or breach of confidentiality of information belonging to the Company;'
            ),
            $('<p/>').html(
                'i) Intentional or negligent violation of the provisions of this Agreement;'
            ),
            $('<p/>').html(
                'j) Failure to meet the standards for employment; and'
            ),
            $('<p/>').html(
                'k) Other similar acts, omissions, and/or events.'
            ),
            $('<p/>').html(
                'The Company may terminate this Agreement for any of the foregoing grounds by giving the Employee a written notice of its intention to dismiss him/her and the particular acts or omission constituting the ground for his/her dismissal.  Unless a shorter period is provided under applicable law or rules and regulations issued by the Company, the Employee may answer the charges against him/her within five (5) days from receipt of such notice.'
            ),
            $('<p/>').html(
                'If the Employee refuses to acknowledge receipt of the notice, service of the notice to the Employee shall be considered completed after the Employee is offered a copy of the notice and it is stated in the notice that he/she refused to acknowledge receipt of the notice when offered. If the Employee cannot receive the notice in person, the notice shall be sent via registered mail to the Employee’s last known address and shall be deemed received upon delivery to said address. '
            ),
            $('<p/>').html(
                'The Company shall afford the Employee an opportunity to be heard and to defend himself with the assistance of his/her representative or counsel, if he/she so desires.  After giving the Employee ample opportunity to be heard and defend himself/herself, the Company shall, if the evidence so warrants, serve on the Employee a written notice of its decision to terminate his/her employment.'
            ),
            $('<p/>').html(
                'In the event that the Employee wishes to terminate his/her employment for any reason or cause, he/she must give <span class="dynamic">' + ((employee.Salary_Grade_Level <= 24) ? 'thirty (30)' : 'ninety (90)') + '</span> days written notice to the Company prior to the effective date of termination (“<strong>Notice Period</strong>”). The Notice Period is for the benefit of the Company.  The Company may, therefore, at its sole discretion, waive or shorten the Notice Period or accept the resignation to be effective immediately, in which case, the Employee’s entitlements as employee shall cease and the Employee will not be entitled to any salary or any benefits for the unworked days of the Notice Period.  If the Employee fails to serve written notice or comply with the Notice Period, the Employee may be considered to be absent without leave and the Employee will be liable to the Company for any and all damages and costs that the Company may incur as a result of such resignation without notice or observance of the Notice Period. In such case, the Company has the right, and the Employee agrees that the Company is authorized, to deduct from the Employee’s final pay and/or any monies due to the Employee an amount equivalent to the Employee’s basic salary corresponding to the unserved days of the Notice Period as penalty without prejudice to Clause 6 hereof and the Company’s right to deduct any other accountabilities and collect any other amount of damages and costs.  If the amount due the Employee is not sufficient to cover his/her liability or obligation, the Employee agrees and undertakes to settle any deficiency within five (5) days from notice without need of further demand.'
            ),
            $('<p/>').html(
                'Upon termination of his/her employment for any reason or cause, the Employee shall promptly account for, return, and deliver to the Company at the latter’s main office, his/her identification cards, uniform, and all company property that may have been assigned or entrusted to his/her care or custody.  The Employee is further deemed resigned from all directorships, offices, positions, membership in industry and professional bodies, which the Employee holds in relation to the Company or in connection with his/her employment in the Company. To give effect to the termination, the Employee must do all acts and execute all documents necessary and reasonably required by the Company.'
            ),
            $('<p/>').html(
                'Should the Employee have unpaid or pending obligations to the Company, monetary or otherwise, upon the termination of his/her employment for any reason or cause, the Employee expressly agrees and authorizes the Company to make the necessary deductions from the salary, bonuses and any other amounts or benefits that may be due him, to effect settlement or payment of his/her unpaid or pending obligations.  This is without prejudice to the right of the Company to effect settlement or payment of the obligations of the Employee through other legal means should the salary, bonuses and any other amounts or benefits due the Employee be insufficient to cover his/her unpaid or pending obligations.'
            ),
            $('<p/>').html(
                '<strong>10. <u>RESTRICTIVE COVENANT</u></strong>'
            ),
            $('<p/>').html(
                'During his/her employment with the Company, the Employee shall devote his/her best efforts and his/her entire time to advance the interests of the Company, and he/she shall not, without the prior written consent of the Company, directly or indirectly, alone or as a member of a partnership, or as an officer, director, or stockholder of any other corporation, be engaged in or concerned with any other commercial duties or pursuits whatsoever.'
            ),
            $('<p/>').html(
                '<strong>11. <u>CONFIDENTIALITY and NON-DISPARGEMENT</u></strong>'
            ),
            $('<p/>').html(
                '(a) The Employee agrees that, during his/her employment and after its termination, he/she will not, except in the proper performance of the Employee’s duties and responsibilities, either directly or indirectly, use or disclose to any person, firm, company or entity any Confidential Information. This restriction will not apply to Confidential Information which becomes public (other than through unauthorized disclosure by the Employee) or which is required to be disclosed by law. The Employee will use his/her best endeavors to prevent the unauthorized use or disclosure of such Confidential Information. For purposes of this Agreement, “Confidential Information” means any and all confidential and/or proprietary knowledge, data or information of the Company, any of their portfolio companies, investors, clients and partners, including, but not limited to, information relating to financial matters (including results and forecasts of any broking or trading desks, and financial instrument transaction systems), investments (and potential investments), budgets, business plans, marketing plans, personnel matters (including remuneration and benefits and other terms and conditions of employment), business contacts, products, telecommunications systems or data processing/analysis systems (including inventions, developments or improvements, designs, processes and software (including source codes)), know-how, trade secrets, and operational matters. Confidential Information shall not include any information that has been published in a form generally available to the public, or otherwise placed in the public domain. '
            ),
            $('<p/>').html(
                '(b) During his/her employment and after its termination, the Employee shall not (save in the proper course of his/her duties and for the benefit of the Company): (i) make any copy, record or memorandum (whether on paper, computer memory, disc or otherwise) of or containing any Confidential Information or relating to any trade secrets or proprietary information of the Company or its or their customers or suppliers or concerning its or their dealings or affairs; or  (ii) use such copies, records or memoranda (or allow them to be used) other than for the benefit of the Company.'
            ),
            $('<p/>').html(
                'During his/her employment and after its termination, the Employee will not make any disparaging or derogatory statements (whether in writing or otherwise) concerning the Company or any of its officers and employees.'
            ),
            $('<p/>').html(
                '<strong>12. <u>OBLIGATIONS UPON TERMINATION</u></strong>'
            ),
            $('<p/>').html(
                '(a) Immediately upon the termination of this Agreement, the Employee shall deliver to the Company:'
            ),
            $('<p/>').append(
        $('<ul/>').append(
          $('<li/>').append(
            $('<div/>').html(
              '(i) all equipment (including but not limited to computers, laptops, personal handheld devices and mobile phones), correspondence, records, specifications, software, discs, tapes, models, papers, notes, memoranda, reports and any other documents and material of any kind and any copies or extracts thereof and any other property belonging to the Company whether in hard copy or in electronic or machine readable form or in any other form (including but not limited to keys, credit cards, charge cards and passes);'
            ),
            $('<p/>').html('')
          ),
          $('<li/>').append(
            $('<div/>').html(
              '(ii) details of any passwords or PIN numbers or other access codes used by him/her to access the Company’s computer system or any computer, laptop, personal handheld device, mobile phone, document or any other item requiring a password or PIN number or other access code belonging to the Company, the Employee to confirm to the Company in writing that he/she will not retain any copies thereof; and'
            ),
            $('<p/>').html('')
          ),
          $('<li/>').append(
            $('<div/>').html(
              '(iii)  all Confidential Information and any copies, records or memoranda, in hard copy, electronic or any other form, of or containing Confidential Information which are in the Employee’s possession, custody, care or control,'
            ),
            $('<p/>').html('')
          )
        )
            ),
            $('<p/>').html(
                '(b) During the employment and following its termination, the Employee will provide the Company with such reasonable assistance as may be required, regarding matters of which he/she has knowledge and/or experience, in any proceedings or possible proceedings in which the Company is or may be a party. The rights and obligations under this Clause 12 shall remain in full force and effect and survive the termination of this Agreement for any reason whatsoever.'
            ),
            $('<p/>').html(
                '(c) In the event of termination of your employment hereunder, however arising, the Employee agrees that he/she will not at any time after such termination represent himself/herself as still having any connection with the Company or any Associated Company (defined as any corporate parent or subsidiary of PayPal Philippines, Inc.) save as a former employee for the purposes only of communicating with prospective employers or complying with any applicable statutory requirements.'
            ),
            $('<p/>').html(
                '<strong>13. <u>POST TERMINATION CONVENANTS </u></strong>'
            ),
            $('<p/>').html(
                'The Employee is likely to develop relationships with and obtain Confidential Information and personal knowledge of and influence over clients, prospective clients, employees, consultants and advisers of the Company. The Employee acknowledges that such relationships, Confidential Information and influence are extremely valuable interests in which the Company invested and will continue to invest substantial time, effort and expense.  To protect these interests, the Employee agrees that the Employee will be bound by the following covenants:'
            ),
            $('<p/>').html(
                '(a) For a period of 12 months after the termination date, the Employee will not, directly or indirectly (i) solicit or entice away, or assist any other person, firm, corporation or other entity in soliciting or enticing away, the business of any client or prospective client or (ii) impede or otherwise interfere with or damage, or attempt to impede or otherwise interfere with or damage, any business relationship between the Company and any client or prospective client; and '
            ),
            $('<p/>').html(
                '(b) For a period of 12 months after the termination date, the Employee will not, directly or indirectly, solicit, induce, entice, procure, facilitate or encourage, or assist any other person, firm, corporation or other entity in soliciting, inducing, enticing, procuring, facilitating or encouraging any employee of the Company who the Employee supervised, or with whom the Employee had material or regular dealings, in the course of the employment at any time during the 12 months prior to the termination date, and who is employed in a senior or managerial capacity or in any technical, IT, sales, marketing, or business development role, to terminate (in any manner), seek to terminate or purport to terminate his/her employment with the Company.'
            ),
            $('<p/>').html(
                '<strong>14. <u>LIQUIDATED DAMAGES</u></strong>'
            ),
            $('<p/>').html(
                'In case the Employee violates any of his/her obligations under this Agreement, he/she shall be liable to the Company, without any summons or notice of default or court decree being required, liquidated damages equal to the total remuneration paid by the Company to the Employee during the last six (6) months of the Employee’s employment with the Company.  If such liquidated damages are not sufficient to compensate the Company for the actual damages it incurred, it shall have the right to recover the difference and to avail itself of such other remedies as it may be entitled to under law or equity.'
            ),
            $('<p/>').html(
                '<strong>15. <u>EMPLOYEE DATA</u></strong>'
            ),
            $('<p/>').append(
        $('<span/>').html(
          'The Employee acknowledges the separate Employee Privacy Notice that details ways in which the Company may use and process personal data.  The Employee gives express consent to the collection, holding and processing and disclosure or transfer (whether locally or overseas) (to subcontractors, branches, affiliates, subsidiaries, advisers and agents of the Company, third parties, and government agencies) of personal data (which include personal information and sensitive personal information) provided by or with the consent of the Employee to the Company for all purposes relating to the employment, including, but not limited to:<br>'
        ),
        $('<ul/>').append(
          $('<li/>').html(
            'administering and maintaining human resources records;'
          ),
          $('<li/>').html(
            'paying and reviewing salary and other remuneration and benefits;'
          ),
          $('<li/>').html(
            'providing and administering benefits (including if relevant, life assurance, permanent health insurance and medical insurance);'
          ),
          $('<li/>').html(
            'undertaking performance appraisals and reviews;'
          ),
          $('<li/>').html(
            'maintaining sickness and other absence records;'
          ),
          $('<li/>').html(
            'taking decisions as to your fitness for work;'
          ),
          $('<li/>').html(
            'providing references and information to future employers, and if necessary, governmental and quasi-governmental bodies;'
          ),
          $('<li/>').html(
            'providing information to future purchasers of the Company or of the business in which you work; and'
          ),
          $('<li/>').html(
            'any and other purposes relevant to the employment. '
          )
        )
            ),
            $('<p/>').html(
                'The Employee may exercise the rights of a data subject (to be informed, to object, to access, to rectification, to erasure or blocking, to indemnification in case of breach, and to data portability) in accordance with applicable law.'
            ),
            $('<p/>').html(
                'The Company will keep your personal data for as long as you are employed, and after the employment ends for as long as the law requires or allows, taking into consideration the statute of limitations.'
            ),
            $('<p/>').html(
                '<strong>16. <u>APPLICATION OF LABOR LAWS</u></strong>'
            ),
            $('<p/>').html(
                'It is understood that with respect to matters not covered by this Agreement, the provisions of the Labor Code of the Philippines, its implementing rules and regulations, and special laws shall apply.'
            ),
            $('<p/>').html(
                '<strong>17. <u>ENTIRE AGREEMENT</u></strong>'
            ),
            $('<p/>').html(
                'This Agreement together with the Employee Proprietary Information and Inventions Agreement represents the entire and only agreement and understanding between the Company and the Employee, and supersedes and cancels all previous oral or written agreements, negotiations and commitments relating to the subject matter hereof and may not be amended or modified, in any manner except by an instrument in writing signed by the parties to this Agreement.'
            ),
            $('<p/>').html(
                '<strong>18. <u>ACCEPTANCE AND SEVERABILITY</u></strong>'
            ),
            $('<p/>').html(
                'The Employee acknowledges that he/she has read and understood this Agreement.  The Employee also acknowledges that he/she is not subject to any restrictions that would prevent him/her from working in the Company and performing his/her duties and responsibilities pursuant to this Agreement.'
            ),
            $('<p/>').html(
                'In the event that the Company should waive in writing any part of this Agreement or that any part hereof should be determined to be unenforceable, the Employee shall not be relieved from the remaining provisions of this Agreement.'
            ),
            $('<p/>').html(
                'IN WITNESS WHEREOF, the parties to this Agreement have executed this document as of the date first mentioned.'
            ),
            $('<p/>').html(
                '<strong>PayPal Philippines, Inc.</strong>'
            ),
            $('<p class="center hide"/>').html(
                '____________________________________________________________________________________________________'
            )
        )
        // end append
    );

    // ANNEX “A” 
    $("#markup2").html("").append(
        // OfferClause 2
        $('<div class="offerClause2"/>').append(
            $('<p class="center"/>').html(
                '<strong>ANNEX “A”</strong>'
            ),
            $('<p/>').html(
                '&nbsp;'
            ),
            $('<p/>').html(
                '<strong><u>Name:</u></strong> <span class="dynamic">' + employee.Full_Name + '</span>'
            ),
            $('<p/>').html(
                '<strong><u>Title / Status:</u></strong> <span class="dynamic">' + employee.Business_Title + '</span>'
            ),
            $('<p/>').append(
        $('<span/>').html(
          '<strong><u>Place of Assignment:</u></strong><br>'
        ),
        $('<span/>').html(
          'Filinvest Axis Tower One, Northgate Cyberzone,<br>'
        ),
        $('<span/>').html(
          'Filinvest Corporate City Alabang, Muntinlupa City<br>'
        ),
        $('<span/>').html(
          '1781 Philippines.'
        )
            ),
            $('<p/>').html(
                'The Employee may be assigned or deployed at any work site or location, including at the offices of the Company’s related or affiliated entities, which could be within or outside the Philippines, depending on the needs of the Company’s businesses.'
            ),
            $('<p/>').html(
                '<strong><u>Reports to:</u></strong> <span class="dynamic">' + employee.Hiring_Manager + '</span> <span class="dynamic">' + employee.Manager_Business_Title + '</span>'
            ),
            $('<p/>').append(
        $('<span/>').html(
          '<strong><u>Normal working hours:</u></strong><br>'
        ),
        $('<span/>').html(
          '<span class="dynamic">' + employee.PH_Working_Hours + '</span><br>'
        ),
        $('<span/>').html(
          'The company may vary the work schedule stated here depending on the needs of its businesses.'
        )
            ),
            $('<p/>').html(
                '<strong><u>JOB DESCRIPTION:</u></strong>'
            ),
            $('<p/>').html(
                '<strong>Primary Job Responsibilities</strong>'
            ),
            $('<p/>').html(
                $('<span class="dynamic">').html(employee.Job_Description.replace(/&#10;/g, '<br>'))
            ),
            $('<p/>').html(
                '&nbsp;'
            ),
            $('<p/>').html(
                'Agreed to and accepted by:'
            ),
            $('<p/>').html('')
        )
        // end append
    );
  
    // ANNEX “B”
    $("#markup3").html("").append(
        // OfferClause 3
        $('<div class="offerClause3"/>').append(
            $('<p class="center hide"/>').html(
                '____________________________________________________________________________________________________'
            ),
            $('<p class="center"/>').html(
                '<strong>ANNEX “B”</strong>'
            ),
            $('<p class="center"/>').html(
                '<strong>STANDARDS FOR REGULARIZATION OF EMPLOYMENT</strong>'
            ),
            $('<p/>').html(
                '&nbsp;'
            ),
            $('<p/>').html(
                '<strong>External Appearance</strong>'
            ),
            $('<p/>').append(
        $('<ul/>').append(
          $('<li/>').html(
            'The Employee must keep himself neat, presentable and well-groomed at all times.  He/she must carry himself in a dignified and respectful manner.'
          )
        )
            ),
            $('<p/>').html(
                '<strong>Attendance & Punctuality</strong>'
            ),
            $('<p/>').append(
        $('<ul/>').append(
          $('<li/>').html(
            'The Employee must be able to strictly observe scheduled workdays, work hours and break periods.  He/she must be able to report to work regularly and on time.  Frequent absences, tardiness or “undertime” is strictly forbidden.'
          )
        )
            ),
            $('<p/>').html(
                '<strong>Job Competence</strong>'
            ),
            $('<p/>').append(
        $('<ul/>').append(
          $('<li/>').html(
            'The Employee must prove his/her knowledge and understanding of the nature, details and demands of his/her job.  He/she must be able to demonstrate ease in learning the rudiments of his/her job and in understanding instructions.'
          )
        )
            ),
            $('<p/>').html(
                '<strong>Attitude</strong>'
            ),
            $('<p/>').append(
        $('<ul/>').append(
          $('<li/>').html(
            'The Employee must demonstrate a sincere interest and enthusiasm in his/her job.  He/she must show a positive outlook towards the Company, its business, operations, beliefs and concerns.  He/she must show willingness to learn and to overcome job difficulties.  He/she must be able to perform his/her job with a positive attitude even while working under stress.  This includes having the quality of initiative, responsibility and foresight.'
          )
        )
            ),
            $('<p/>').html(
                '<strong>Discipline</strong>'
            ),
            $('<p/>').append(
        $('<ul/>').append(
          $('<li/>').html(
            'The Employee must be able to comply with the Company’s rules and regulations.  He/she must be able to show maturity in accepting criticisms and remarks regarding his/her work and attitude.'
          )
        )
            ),
            $('<p/>').html(
                '<strong>Attitude towards co-employees and superiors</strong>'
            ),
            $('<p/>').append(
        $('<ul/>').append(
          $('<li/>').html(
            'The Employee must be able to show respect to his/her superiors, co-employees and others in general.  He/she must be able to work well with others.  This includes the ability to cooperate and to work as part of a team.'
          )
        )
            ),
            $('<p/>').html(
                '<strong>Work Quality</strong>'
            ),
            $('<p/>').append(
        $('<ul/>').append(
          $('<li/>').html(
            'The Employee must be able to prove to the satisfaction of the Company advanced skills, initiative and competence in his/her duties and responsibilities.'
          )
        )
            ),
            $('<p/>').html(
                '&nbsp;'
            ),
            $('<p/>').html(
                'Agreed to and accepted by:'
            ),
            $('<p/>').html('')
        )
        // end append
    );
  
    // ANNEX “C”
    $("#markup4").html("").append(
        // OfferClause 4
        $('<div class="offerClause4"/>').append(
            $('<p class="center hide"/>').html(
                '____________________________________________________________________________________________________'
            ),
            $('<p class="center"/>').html(
                '<strong>ANNEX “C”</strong>'
            ),
            $('<p class="center"/>').html(
                '<strong>GROSS COMPENSATION AND BENEFITS</strong>'
            ),
            $('<p/>').html(
                '&nbsp;'
            ),
            $('<p/>').append(
        $('<ul/>').append(
          $('<li/>').append(
            $('<div/>').html(
              'Compensation'
            ),
            $('<p/>').html(''),
            $('<div/>').html(
              'Annual basic salary: <span class="dynamic">' + employee.Salary_Amount + '</span> <span class="dynamic">' + employee.Salary_Currency + '</span>'
            ),
            $('<p/>').html('')
          ),
          (employee.Hire_On_Bonus_Eligible == 'Yes') &&
          $('<li/>').append(
            $('<div/>').html(
              'In addition, as agreed Company will provide Hire-on Bonus, total of <span class="dynamic">' + employee.Hire_On_Bonus_Amount + ' ' + employee.Hire_On_Bonus_CRNCY_CD + '</span>. The Hire-on Bonus Payment letter is attached. This is subject to all standard employment related taxes applicable in the Philippines.'
            ),
            $('<p/>').html('')
          ),
          /*(employee.Hire_On_Bonus_Eligible != 'Yes') &&
          $('<div/>').html('<span class="dynamic"></span>'),*/
          $('<li/>').append(
            $('<div/>').html(
              'Benefits'
            ),
            $('<p/>').html(''),
            $('<div/>').html(
              'Life and disability insurance, healthcare, pension, vacation and certain other leave as determined by the Company. The Employee recognizes the Company’s right and prerogative to change these benefits at any time in accordance with law.'
            ),
            $('<p/>').html('')
          )
        )
            ),
            $('<p/>').html(
                'Compensation and benefits are confidential information. The Employee shall not divulge or disclose any compensation or benefits, including his/her own, to any one, except to an authorized personnel of the Company.'
            ),
            $('<p/>').html(
                '&nbsp;'
            ),
            $('<p/>').html(
                'Agreed to and accepted by:'
            ),
            $('<p/>').html('')
        )
        // end append
    );
  
    $("#markup5").html("").append(
        // OfferClause 5
        $('<div class="offerClause5">').append(
            $('<p/>').html(
                '<strong>Employee:</strong>'
            )
        )
        // end append
    );

    $("#markup6").html("").append(
        // OfferClause 6
        $('<div class="offerClause6">').append(
            $('<p/>').html(
                '<strong>Employer:</strong>'
            )
        )
        // end append
    );
}

$(function() {  
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
            [1, 'hidden_pg2']
        ];
    
        var arrParts3 = [
            [1, 'hidden_pg3']
        ];
    
        var arrParts4 = [
            [1, 'hidden_pg4']
        ];

        showCompletedOfferLetter('incomplete', 'complete', arrParts);
        showCompletedOfferLetter('incomplete2', 'complete2', arrParts2);
        showCompletedOfferLetter('incomplete3', 'complete3', arrParts3);
        showCompletedOfferLetter('incomplete4', 'complete4', arrParts4);
    }
});
