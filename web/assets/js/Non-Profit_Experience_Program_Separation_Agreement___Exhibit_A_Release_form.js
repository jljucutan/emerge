const fnView = function() {
    "use strict";

    const markupRoot = $("#markup").html("");
    markupRoot.append(
        $('<div class="offerClause"/>').append(
            $('<p/>').html('<mark2>'+ employee.Event_Notification_Date + '</mark2>')
            ),
        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<span/>').html('<mark2>' + employee.Full_Legal_Name + '</mark2><br>'),
                $('<span/>').html('<mark2>' + employee.Address_Line_1 + '</mark2><br>'),
                $('<span/>').html(employee.Address_Line_2 ? '<mark2>' + employee.Address_Line_2 + '</mark2><br>' : ''),
                $('<span/>').html('<mark2>' + employee.City + '</mark2>'),
                $('<span/>').html(', <mark2>' + employee.State + '</mark2>'),
                $('<span/>').html(' <mark2>' + employee.Postal_Code + '</mark2>')
                ),
            $('<p/>').html()
            ),


        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Dear <mark2>' + employee.First_Name + '</mark2>,'
                ),
            $('<p/>').html(
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your employment was scheduled to be terminated on <mark2>' + employee.Separation_Date + '</mark2> (“Original Separation Date”).  In lieu of the severance package PayPal offered you in connection with the Original Separation Date, you opted instead to enter into this letter agreement (“Separation Agreement”), which sets forth the severance and other benefits for which you are now eligible, including the opportunity to participate in PayPal’s Nonprofit Experience Program through ' + '<mark2>' + moment(employee.Extended_Separation_Date).format("LL") + '</mark2>' + ' (“Separation Date”), as well as the severance benefits outlined in the attached Exhibit A Release.  All payments and benefits under the Exhibit A Release will be subject to standard deductions and withholdings, as applicable.' 
                ),
            $('<p/>').html(
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please note that this Separation Agreement and Exhibit A Release each contain a release of claims against PayPal Holdings, Inc. or any subsidiary of PayPal Holdings, Inc. (collectively, “PayPal” or the “Company”).'
                ),
            $('<p/>')
            ),

        $('<div class="offerClause">').append(
            $('<ol/>').append(              
                $('<li/>').append(
                    '<strong>TRANSITION PERIOD.</strong> ',
                    '<span>Your current role with PayPal will end on  ' + '<mark2>' + moment(employee.Transition_Period_Date).format("LL") + '</mark2>' + ' (“Transition Date”).  You understand that, in consideration for you executing this Separation Agreement and fulfilling the promises contained herein, and provided you comply with all PayPal policies, and remain in good standing with PayPal through the Transition Date, you will be provided the opportunity to participate in PayPal’s Nonprofit Experience  Program, which includes continuation of your current base salary and continued eligibility for Company-sponsored health and welfare benefits through the Separation Date.  Notwithstanding the foregoing, you understand that your employment with PayPal remains at-will.  If your employment terminates earlier than the anticipated Separation Date, the earlier date will become the Separation Date for purposes of this Agreement and its Exhibit A.</span>',
                    $('<p/>')
                ),

                $('<li/>').append(
                    '<strong>NONPROFIT EXPERIENCE PROGRAM.</strong> ',
                    '<span>From the Transition Date through the Separation Date (“Loan Period”), you acknowledge that you have agreed to participate in PayPal’s Nonprofit Experience Program, which includes providing services for a PayPal-approved non-profit organization.  You expressly acknowledge that the opportunity to participate in this program is something to which you otherwise are not entitled as a PayPal employee, and is a benefit of value to which PayPal would not offer you without signing and complying with this Separation Agreement.  During the course of your participation in the Nonprofit Experience program, you expressly agree to continue to abide by all applicable PayPal policies, and further agree to abide by any applicable policies and practices outlined by your selected non-profit organization.</span>',
                    $('<p/>')
                ),

                $('<li/>').append(
                    '<strong>CANCELLATION OF UNVESTED EQUITY AWARDS.</strong> ',
                    '<span>Pursuant to the terms of your PayPal stock options, restricted stock units (RSUs), and performance-based RSUs (“PBRSUs”) (as applicable), any unvested equity awards (including stock options, RSUs and PBRSUs) will cease to vest on your Separation Date. You may be able to exercise your stock options following the Separation Date to the extent permitted under, and in accordance with, the terms of the applicable options agreement.  Pursuant to the terms of your equity award agreement(s), any unvested RSUs, PBRSUs and stock options shall terminate and be forfeited in connection with your termination of employment on the Separation Date.</span>',
                    $('<p/>')
                ),

                $('<li/>').append(
                    '<strong>HEALTH INSURANCE.</strong> ',
                    '<span>Your current Company-sponsored health benefits will continue uninterrupted through the Loan Period.  Paragraph 3 of Exhibit A describes the health benefits available to you following your Separation Date from the Company.</span>',
                    $('<p/>')
                ),

                $('<li/>').append(
                    '<strong>AT-WILL EMPLOYMENT.</strong> ',
                    '<span>Your employment remains at-will and nothing contained in this Separation Agreement is intended to create or imply any contrary policy.  Either you or the Company may terminate your employment at any time, with or without cause or notice.  If, however, the Company terminates your employment before the Separation Date for reasons other than Cause (as defined in PayPal’s Severance Pay Plan (“Plan”)), you will remain eligible for severance pay and benefits under Exhibit A.  If you are terminated for Cause, you will receive your final paycheck, as described in Exhibit A and you will not be eligible to receive any of the severance pay or benefits under Exhibit A.  In the event of early termination (by either you or the Company for any reason), your equity awards and stock options will cease vesting as of the date of separation.</span>',
                    $('<p/>')
                ),

                $('<li/>').append(
                    '<strong>EXPENSE REIMBURSEMENTS.</strong> ',
                    '<span>You will be reimbursed for your authorized business expenses regardless of whether you sign this Separation Agreement. Please submit your final documented expense reimbursement statement reflecting any and all authorized business expenses you have incurred as soon as possible and not later than your Transition Date. The Company will reimburse you for such expenses pursuant to its regular business practice.</span>',
                    $('<p/>')
                ),

                $('<li/>').append(
                    '<strong>RETURN OF COMPANY PROPERTY.</strong> ',
                    '<span>Regardless of whether you sign this Separation Agreement, you are required to return to the Company no later than your last day of active employment, and in any event prior to the start of the Loan Period or sooner if requested by management, all Company documents (and all copies thereof) and other Company property and materials in your possession, or your control, including, but not limited to, Company files, notes, memoranda, correspondence, lists, drawings, records, plans and forecasts, financial information, personnel information, customer and customer prospect information, sales and marketing information, product development and pricing information, specifications, computer-recorded information, tangible property including all laptops, computers, PDAs, RSA tokens, credit cards, entry cards, identification badges and keys, and any materials of any kind which contain or embody any proprietary or confidential material of the Company (and all reproductions of such materials).  Such Company property must be returned in the same condition as when provided to you, reasonable wear and tear excepted. You will not be eligible for severance under Exhibit A unless you timely return all Company property.</span>',
                    $('<p/>')
                ),

                $('<li/>').append(
                    '<strong>PROPRIETARY INFORMATION OBLIGATIONS.</strong> ',
                    '<span>Regardless of whether you sign this Separation Agreement, you remain bound by the Employee Proprietary Information and Inventions Agreement (“PIIA”). A copy of the PIIA will be made available to you upon request.  By signing this Separation Agreement, you acknowledge that your continuing obligations under the PIIA include but are not limited to the obligation to refrain from any unauthorized use or disclosure of any confidential or proprietary information of the Company and non-solicitation of PayPal employees with whom you directly worked or who worked within your business unit for one (1) year following the Separation Date.  Failure to comply with this provision shall be a material breach of this Separation Agreement.</span>',
                    $('<p/>')
                ),

                $('<li/>').append(
                    '<strong>CONFIDENTIALITY.</strong> ',
                    '<span>Subject to the “Protected Rights” provision below, the provisions of this Separation Agreement will be held in strictest confidence by you and will not be publicized or disclosed in any manner whatsoever; provided, however, that  (a) you may disclose this Separation Agreement to your immediate family; (b) you may disclose this Separation Agreement in confidence to your attorney, accountant, auditor, tax preparer, and financial advisor; and (c) you may disclose this Separation Agreement insofar as such disclosure may be necessary to enforce its terms or as otherwise required by law.  In particular, and without limitation, you agree not to disclose the terms of this Separation Agreement to any current or former Company employee or contractor.  Failure to comply with this provision shall be a material breach of this Separation Agreement and will result in your ineligibility for severance pay or benefits under Exhibit A.</span>',
                    $('<p/>')
                ),

                $('<li/>').append(
                    '<strong>NON-DISPARAGEMENT.</strong> ',
                    '<span>Subject to the “Protected Rights” provision below, you agree not to disparage the Company or any of the Company’s officers, directors, employees, shareholders and agents, affiliates and subsidiaries in any manner likely to be harmful to them or their business, business reputation, or personal reputation; provided that you will respond accurately and fully to any question, inquiry or request for information when required by legal process.  Failure to comply with this provision shall be a material breach of this Separation Agreement and will result in your ineligibility for severance pay or benefits under Exhibit A.</span>',
                    $('<p/>')
                ),

                //2021-03-31 | SERVICES-41435 | CDY | V4 | Added new paragraph - START
                $('<li/>').append(
                    '<strong>REPRESENTATIONS CONCERNING COMPANY AFFILIATION.</strong> ',
                    '<span>You agree that after the Separation Date, you shall not represent that you are employed by, engaged as a consultant for or in any other service relationship (collectively, an “Affiliation”) with the Company or any of its affiliates.  The obligation includes ensuring that at all times after the Separation Date, your resume, social media profiles and pages (including without limitation any LinkedIn or Facebook profile), website, email signature and business card shall not indicate that you have any Affiliation with the Company or any affiliate.  In addition, you agree that any statements that you make in social media, in resumes and otherwise about your activities on behalf of the Company and any affiliates shall be a reasonable and accurate summary.</span>',
                    $('<p/>')
                ),
                //2021-03-31 | SERVICES-41435 | CDY | V4 | Added new paragraph - END


                $('<li/>').append(
                    '<strong>COOPERATION.</strong> ',
                    '<span>You agree that you will cooperate fully with the Company and its counsel, upon their request, with respect to any potential or pending proceeding (including, but not limited to, any litigation, arbitration, regulatory proceeding, investigation or governmental action) that relates at least in part to matters with which you were involved while you were an employee of the Company or any of its affiliates, or with which you have knowledge. You agree to render such cooperation in a timely fashion and to provide Company personnel and counsel with the full benefit of your knowledge with respect to any such matter, and will make yourself reasonably available for interviews, depositions, or court appearances at the request of the Company or its counsel. Subject to the “Protected Rights” provision below, if you receive a complaint or subpoena or other legal process relating to the Company or a request for interview or to provide information concerning any existing, potential or threatened claims against the Company, you shall give written notice to the Company to the attention of Cassandra Knight, VP, Chief Litigation Officer, or her successor, within seven (7) days of receipt and prior to your response to any such process or communication, unless prohibited by applicable law.</span>',
                    $('<p/>')
                ),

                $('<li/>').append(
                    '<strong>PROTECTED RIGHTS.</strong> ',
                    '<span>By your signature below, you acknowledge and agree that, with the exception of information that is protected from disclosure by any applicable law or privilege, nothing in this Separation Agreement or in any agreement between you and the Company prohibits or limits you (or your attorney) from initiating communications directly with, responding to any inquiry from, volunteering information to, or providing testimony before, the Securities and Exchange Commission, the Department of Justice, FINRA, any other self-regulatory organization, or any other governmental, law enforcement, or regulatory authority, regarding this Separation Agreement and its underlying facts and circumstances, or in connection with any reporting of, investigation into, or proceeding regarding suspected violations of law, and that you are not required to advise or seek permission from the Company before engaging in any such activity.</span>',
                    $('<p/>')
                ),                
                $('<li/>').append(
                    '<strong>GENERAL RELEASE OF CLAIMS, CLAIMS NOT RELEASED.</strong>',
                    $('<p/>'),
                    $('<ul/>').append(
                        $('<span/>').append(
                            '<strong class="iPa">a) </strong><span class="iBp">In consideration for the benefits and other promises and undertakings contained in this Separation Agreement to which you would not otherwise be entitled, and except as otherwise set forth in this Separation Agreement, you, on your own behalf and on behalf of your respective heirs, family members, executors, agents, and assigns, release, acquit and forever discharge the Company, its parents and subsidiaries, and its and their respective officers, directors, agents, servants, employees, attorneys, shareholders, successors, assigns and affiliates (collectively, the “Released Parties”), of and from any and all claims, liabilities, demands, charges, causes of action, costs, expenses, attorney’s fees, damages, indemnities and obligations of every kind and nature, in law, equity, or otherwise, which you assert or could assert against the Released Parties at common law or under any statute, rule, regulation, order or law, whether federal, state or local, on any ground whatsoever, known and unknown, suspected and unsuspected, disclosed and undisclosed, arising out of or in any way related to agreements, events, acts or conduct at any time prior to and including the date you sign this Separation Agreement, including but not limited to: all such claims and demands directly or indirectly arising out of or in any way connected with your employment with the Company or the termination of that employment; claims or demands related to salary, bonuses, pension or insurance contributions, commissions, stock, stock options, or any other ownership interests in the Company, PTO or other time off pay, fringe benefits, expense reimbursements, severance pay, or any other form of compensation; any and all causes of action, including but not limited to actions for breach of contract, express or implied, breach of the covenant of good faith and fair dealing, express or implied, wrongful termination in violation of public policy, all other claims for wrongful termination and constructive discharge, and all other tort claims, including, but not limited to, intentional or negligent infliction of emotional distress, invasion of privacy, negligence, negligent investigation, negligent hiring, supervision or retention, assault and battery, false imprisonment, defamation, intentional or negligent misrepresentation, fraud, and any and all claims arising under any federal, state or local law or statute that may be legally waived and released, including, but not limited to, Title VII of the Civil Rights Act of 1964; the Civil Rights Act of 1991; the Employee Retirement and Income Security Act; the Americans with Disabilities Act, 42 U.S.C. § 1981; the Fair Labor Standards Act; the Equal Pay Act; the Family and Medical Leave Act; the Fair Credit Reporting Act; the National Labor Relations Act; the Uniform Services Employment and Reemployment Rights Act; the Genetic Information Non-Discrimination Act; the Immigration Reform and Control Act; ' + (employee.AgeOver40 == "Y" ? '<mark2>the Age Discrimination in Employment Act;</mark2>' : '') + ' the Worker Adjustment and Retraining Notification Act; ' + (getStateRule(employee.Work_Location.substring(0,6)) != '' ? '<mark2>' + getStateRule(employee.Work_Location.substring(0,6)) + '</mark2>' : '') + ' and any similar state statutes; and any and all other federal, state, or local laws and regulations relating to employment termination, employment discrimination, harassment or retaliation, claims for wages, hours, benefits, compensation ' + (employee.Work_Location.substring(0,6) == "USA-CA" ? '<mark2>except for the California Fair Employment and Housing Act, for which you do not waive any claims under this Agreement.</mark2> ' : '') + 'You further waive and release any and all claims for attorneys’ fees and costs, inasmuch as is permissible by law and by the respective governmental enforcement agencies for the above-listed laws. You expressly waive any right you may have to dispute the termination of employment and any preferential right to new employment.</span>',
                                $('<p/>')
                        ),
                        $('<span/>').append(
                            '<strong class="iPa">b) </strong><span class="iBp"><strong>Collective/Class Action Waiver.</strong> If any claim is not subject to release, to the extent permitted by law, you waive any right or ability to be a class or collective action representative or to otherwise participate in any putative or certified class, collective or multi-party action or proceeding, or PAGA action based on such a claim in which the Company or any of the other Released Parties identified in this Separation Agreement is a party.</span>',
                            $('<p/>')
                        ),
                        $('<span/>').append(
                            '<strong class="iPa">c) </strong><span class="iBp"><strong>Claims Not Released.</strong> This Separation Agreement does not waive rights or claims under federal or state law that you cannot, as a matter of law, waive by private agreement, such as ' + (employee.Work_Location.substring(0,6) == "USA-CA" ? "<mark2>a right of indemnification under California Labor Code Section 2802,</mark2> " : "") + 'claims for unemployment or state disability insurance benefits, worker compensation benefits, health insurance benefits under the Consolidated Omnibus Budget Reconciliation Act (COBRA), or claims with regard to vested benefits under a retirement plan governed by the Employee Retirement Income Security Act (ERISA). Additionally, nothing in this Separation Agreement precludes you from filing a charge or complaint with or participating in any investigation or proceeding before the Equal Employment Opportunity Commission or similar state agency. However, while you may file a charge and participate in any proceeding conducted by the Equal Opportunity Commission or state agency, by signing this Separation Agreement, you waive your right to bring a lawsuit against the Company and waive your right to any individual monetary recovery in any action or lawsuit initiated by the Equal Employment Opportunity Commission or state agency ' + (employee.Work_Location.substring(0,6) == "USA-CA" ? '<mark2>except that you do not release claims or waive any rights relating to claims arising under the California Fair Employment and Housing Act, California Government Code section 12900, et seq., and nothing in this Agreement precludes you from filing a charge or complaint with or participating in any investigation or proceeding before the California Department of Fair Employment and Housing.</mark2> ' : '') + ' Additionally, nothing in this Agreement prohibits or restricts you from initiating communications directly with, responding to any inquiry from, or providing information to or testimony before, the Securities and Exchange Commission (“SEC”), Department of Justice (“DOJ”), or any other governmental agency or self-regulatory organization, about actual or potential violations of laws or regulations, or to receive a monetary award from a government administered whistleblower-award program.</span>',
                            $('<p/>')
                        ),
                        $('<span/>').append(
                            '<strong class="iPa">d) </strong><span class="iBp"><strong>Release of Unknown Claims.</strong>  In waiving and releasing all claims as set forth above, whether or not now known to you, you understand that if you later discover facts different from or in addition to those facts that you currently know or believe to be true, this Separation Agreement, and any waivers and releases contained herein, will nevertheless remain in effect in all respects despite such different or additional facts, and even if you would not have signed this Separation Agreement if you had prior knowledge of such facts.</span>',
                            $('<p/>')
                        ),


                        (employee.Work_Location.substring(0,6) == 'USA-CA') &&
                        $('<span class="margin-40"/>').append(
                            $('<span class="c5"/>').append(
                                $('<span class="marked" data-toggle="popover" data-placement="top" data-content="EVENT LOCATION = USA-CA"/>').append(
                                    $('<p style="font-weight:normal!important;"/>').html(
                                        'You specifically acknowledge that you have been advised to consult with legal counsel and are familiar with and understand Section 1542 of the California Civil Code, a statute that otherwise prohibits the release of unknown claims, which reads as follows: '
                                        ),
                                    $('<p/>').html(
                                        '<strong>A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS THAT THE CREDITOR OR RELEASING PARTY DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE AND THAT, IF KNOWN BY HIM OR HER, WOULD HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR OR RELEASED PARTY.</strong>'
                                        ),
                                    $('<p style="font-weight:normal!important;"/>').html(
                                        'You hereby knowingly, intentionally, and expressly waive and relinquish all rights and benefits under that section and any law of any jurisdiction of similar effect with respect to your release of any unknown or unsuspected claims you may have against the Company.'
                                    ),
                                    $('<p/>')
                                )
                            )
                        )
                    )
                ),

                $('<li/>').append(
                    '<strong>AFFIRMATIONS/ACKNOWLEDGMENTS.</strong> You affirm and/or acknowledge that:',
                    $('<p/>'),
                    $('<ul/>').append(
                        $('<span/>').append(
                            '<strong class="iPa">a) </strong><span class="iBp"> you have been paid all wages, bonuses, commissions and benefits (“compensation”) due or earned;</span>',
                            $('<p/>')
                            ),
                        $('<span/>').append(
                            '<strong class="iPa">b) </strong><span class="iBp"> you have not filed or caused to be filed any claim, complaint, or action against any of the Released Parties in any forum or form, or if you have, then prior to executing this Separation Agreement, you have notified the undersigned of this fact;</span>',
                            $('<p/>')
                            ),
                        $('<span/>').append(
                            '<strong class="iPa">c) </strong><span class="iBp"> you have no known workplace injuries or occupational diseases; </span>',
                            $('<p/>')
                            ),
                        $('<span/>').append(
                            '<strong class="iPa">d) </strong><span class="iBp"> you have been granted or have not been denied any leave to which you were entitled under the Family and Medical Leave Act, any comparable state law, or any disability accommodation law(s);</span>',
                            $('<p/>')
                            ),
                        $('<span/>').append(
                            '<strong class="iPa">e) </strong><span class="iBp"> either (1) you are not a Medicare beneficiary as of the Effective Date and therefore no conditional payments have been made by Medicare or (2) prior to executing this Separation Agreement, you have notified the undersigned that you are a Medicare Beneficiary.  Further, you will indemnify, defend, and hold the Company harmless from any and all claims, liens, Medicare conditional payments, and rights to payment, known or unknown.  You and the Company (a) are entering into this Settlement Agreement in compliance with both state and federal law; (b) have not shifted responsibility of medical treatment to Medicare in contravention of 42 U.S.C. § 1395y(b); and (c) made every effort to adequately protect Medicare’s interest and incorporate such into the settlement terms; and</span>',
                            $('<p/>')
                            ),
                        $('<span/>').append(
                            '<strong class="iPa">f) </strong><span class="iBp"> you have not been retaliated against for reporting any allegations of wrongdoing by the Company or any of its officers, directors, or employees.</span>',
                            $('<p/>')
                            )
                        )
                    ),
$('<li/>').append(
    '<strong>NO ADMISSION OF WRONGDOING.</strong>  <span>The Parties agree that neither this Separation Agreement nor the furnishing of the consideration for this Separation Agreement shall be deemed or construed at any time for any purpose as an admission by the Released Parties of wrongdoing or evidence of any liability or unlawful conduct of any kind.</span>',
    $('<p/>')
    ),
$('<li/>').append(
    '<strong>ARBITRATION.</strong> <span>The Parties agree to arbitrate any and all disputes that either Party may have against the other for an alleged breach of this Agreement. Notwithstanding the prior sentence, the obligation to arbitrate does not apply to any claim required by law to be resolved in a forum other than arbitration, which claims shall be resolved in the appropriate forum as required by the laws then in effect. The Parties understand and agree that any arbitration related to this Agreement shall be conducted by a neutral arbitrator through JAMS in accordance the then current JAMS Employment Arbitration Rules and Procedures. A copy of the current JAMS rules can be found at <a href="https://www.jamsadr.com/rules-employment-arbitration" target="_blank">www.jamsadr.com/rules-employment-arbitration</a> and a printed copy will be provided to you upon request.</span>',
    $('<p/>')
    ),
$('<li/>').append(
    '<strong>MISCELLANEOUS.</strong>  <span>This Separation Agreement, including all exhibits, constitutes the complete, final and exclusive embodiment of the entire agreement between you and the Company with regard to this subject matter.  It is entered into without reliance on any promise or representation, written or oral, other than those expressly contained herein, and it supersedes any other such promises, warranties or representations, prior agreements and communications, whether oral or written, as to the specific subjects of this letter by and between you and the Company.  This Separation Agreement may not be modified or amended except in writing signed by both you and a duly authorized officer of the Company.  This Separation Agreement will bind the heirs, personal representatives, successors and assigns of both you and the Company, and inure to the benefit of both you and the Company, their heirs, successors and assigns.  If any provision of this Separation Agreement is determined to be invalid or unenforceable, in whole or in part, this determination will not affect any other provision of this Separation Agreement and the provision in question will be modified by the court so as to be rendered enforceable.  No waiver by the Company of any right under this Separation Agreement shall be construed as a waiver of any other right, nor shall any waiver by the Company of any breach of this Separation Agreement be a waiver of any preceding or succeeding breach.  This Separation Agreement shall be construed under the law of the state where you are employed on your Separation Date.</span>',
    $('<p/>')
    ),
$('<li/>').append(
    '<strong>DTSA.</strong>  <span>Please be advised, pursuant to the Defend Trade Secrets Act of 2016, an individual shall not be held criminally, or civilly, liable under any Federal or State Trade secret law for the disclosure of a trade secret that is made in confidence either directly or indirectly to a Federal, State, or local government official, or an attorney, for the sole purpose of reporting, or investigating, a violation of law.  Moreover, individuals may disclose trade secrets in a complaint, or other document, filed in a lawsuit, or other proceeding, if such filing is made under seal.  Finally, any individual who files a lawsuit alleging retaliation by the Company for reporting a suspected violation of the law may disclose the trade secret to the attorney of the individual and use the trade secret in the court proceeding, if the individual: files any document containing the trade secret under seal and does not disclose the trade secret, except pursuant to court order. </span>',
    $('<p/>')
    ),
(employee.AgeOver40 == "N") &&
$('<li/>').append(
    $('<span class="c2"/>').append(
        $('<span class="marked" data-toggle="popover" data-placement="top" data-content="AGE OVER 40 = NO"/>').append(
            '<strong>VOLUNTARY EXECUTION OF SEPARATION AGREEMENT.</strong>  You acknowledge and confirm that:',
            $('<p/>'),
            $('<ul/>').append(
                $('<span/>').append(
                    '<strong class="iPa">a) </strong><span class="iBp"> You have read this Separation Agreement in its entirety and understand all of its terms;</span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">b) </strong><span class="iBp"> By this Separation Agreement, you have been advised in writing to consult with an attorney of your choosing, at your own expense, before signing this Separation Agreement;</span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">c) </strong><span class="iBp"> You are entering into this Separation Agreement freely and voluntarily and not as a result of any coercion, duress, or undue influence, and with full knowledge of its significance and the legal consequences;</span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">d) </strong><span class="iBp"> You are signing this Separation Agreement, including the waiver and release, in exchange for good and valuable consideration in addition to anything of value to which you are otherwise entitled;</span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">e) </strong><span class="iBp"> You will have fourteen (14) days to consider whether to sign this Separation Agreement (although you may choose voluntarily to sign it any time on or before your Transition Date) (“Consideration Period”); </span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">f) </strong><span class="iBp"> By signing this Separation Agreement, you waive all claims you have or might have against the Released Parties; and </span>',
                    $('<p/>')
                    ),

                $('<span/>').append(
                    '<strong class="iPa">g) </strong><span class="iBp"> This Separation Agreement will not be effective until the day you execute it (“Effective Date”).</span>',
                    $('<p/>')
                    )
                )
            )
        ),  
    $('<p/>')
    ),
(employee.AgeOver40 == "Y") &&
$('<li/>').append(
    $('<span class="c2"/>').append(
        $('<span class="marked" data-toggle="popover" data-placement="top" data-content="AGE OVER 40 = YES"/>').append(
            '<strong>OWBPA.  AS REQUIRED BY THE AGE DISCRIMINATION IN EMPLOYMENT ACT (ADEA) AND THE OLDER WORKERS’ BENEFIT PROTECTION ACT (OWBPA), YOU ACKNOWLEDGE AND CONFIRM THAT:  </strong>',
            $('<p/>'),
            $('<ul/>').append(
                $('<span/>').append(
                    '<strong class="iPa">a) </strong><span class="iBp"><strong> YOU HAVE READ THIS SEPARATION AGREEMENT IN ITS ENTIRETY AND UNDERSTAND ALL OF ITS TERMS;</strong></span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">b) </strong><span class="iBp"><strong> BY THIS SEPARATION AGREEMENT, YOU HAVE BEEN ADVISED IN WRITING TO CONSULT WITH AN ATTORNEY OF YOUR CHOOSING, AT YOUR OWN EXPENSE, BEFORE SIGNING THIS SEPARATION AGREEMENT;</strong></span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">c) </strong><span class="iBp"><strong> YOU HAVE RECEIVED, AND HAVE HAD THE OPPORTUNITY TO REVIEW, IF APPLICABLE, THE OWBPA NOTICE ATTACHED HERETO AS EXHIBIT B.</strong></span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">d) </strong><span class="iBp"><strong> YOU ARE ENTERING INTO THIS SEPARATION AGREEMENT FREELY AND VOLUNTARILY AND NOT AS A RESULT OF ANY COERCION, DURESS, OR UNDUE INFLUENCE, AND WITH FULL KNOWLEDGE OF ITS SIGNIFICANCE AND THE LEGAL CONSEQUENCES;</strong></span>',
                    $('<p/>')
                    ),

                $('<span/>').append(
                    '<strong class="iPa">e) </strong><span class="iBp"><strong> YOU ARE SIGNING THIS SEPARATION AGREEMENT, INCLUDING THE WAIVER AND RELEASE, IN EXCHANGE FOR GOOD AND VALUABLE CONSIDERATION IN ADDITION TO ANYTHING OF VALUE TO WHICH YOU ARE OTHERWISE ENTITLED;</strong></span>',
                    $('<p/>')
                ),
                $('<span/>').append(
                    '<strong class="iPa">f) </strong><span class="iBp"><strong> YOU HAVE BEEN GIVEN AT LEAST <mark2>' + ((employee.AgeOver40 == "Y" && employee.Individual_or_Group == "Individual") ? "TWENTY-ONE(21)" : (employee.AgeOver40 == "Y" && employee.Individual_or_Group == "Group") ? "FORTY-FIVE (45)" : (employee.AgeOver40 == "Y" && employee.Individual_or_Group == "Bulk Load (Silkroad Only)") ? "FORTY-FIVE (45)" : "") + '</mark2> DAYS TO CONSIDER WHETHER TO SIGN THIS SEPARATION AGREEMENT (ALTHOUGH YOU MAY CHOOSE VOLUNTARILY TO SIGN IT ANY TIME ON OR AFTER THE SEPARATION DATE) (“CONSIDERATION PERIOD”); </strong></span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">g) </strong><span class="iBp"><strong> YOU HAVE SEVEN (7) DAYS AFTER YOU SIGN TO REVOKE THE SEPARATION AGREEMENT BY DELIVERING A WRITTEN STATEMENT OF REVOCATION TO YOUR HUMAN RESOURCES REPRESENTATIVE AT THE BELOW ADDRESS BY CLOSE OF BUSINESS ON THE SEVENTH (7TH) DAY FOLLOWING THE DATE ON WHICH YOU SIGNED; </strong></span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">h) </strong><span class="iBp"><strong> BY SIGNING AND NOT REVOKING THIS SEPARATION AGREEMENT, YOU WAIVE ALL CLAIMS YOU HAVE OR MIGHT HAVE AGAINST THE RELEASED PARTIES UNDER THE ADEA THAT ACCRUED PRIOR TO THE EFFECTIVE DATE; AND</strong></span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">i) </strong><span class="iBp"><strong> THIS SEPARATION AGREEMENT WILL NOT BE EFFECTIVE UNTIL THE DAY AFTER THE REVOCATION PERIOD HAS EXPIRED, WHICH WILL BE THE EIGHTH (8TH) DAY AFTER YOU SIGN IT (“EFFECTIVE DATE”); AND</strong></span>',
                    $('<p/>')
                    ),

                $('<span/>').append(
                    '<strong class="iPa">j) </strong><span class="iBp"><strong> YOU UNDERSTAND THAT YOUR WAIVER AND RELEASE DO NOT APPLY TO ANY RIGHTS OR CLAIMS THAT MAY ARISE AFTER THE EXECUTION DATE OF THIS SEPARATION AGREEMENT</strong></span>',
                    $('<p/>')
                    )
                )
            )
        )
)
),
$('<p class="text-center"/>').html(
    '*   *   *'
    ),
$('<p/>').html(
    'If you agree to the terms of this Separation Agreement, please sign below. '
    ),
$('<p/>').html(
    'On the Effective Date, this will become our binding agreement.'
    )

)
);

$("#markup2").html("").append(
    $('<div class="offerClause2">').append(
        $('<p/>').append(                
            $('<p/>').html('<strong>PayPal</strong>'),
            $('<span/>').html('By:<br>'),
            $('<span/>').html('Human Resources<br>'),
             $('<span id="signDisplay2"/>').html('')
            )
        )
    );

$("#markup3").html("").append(
    $('<div class="offerClause3">').append(
        $('<p/>'),
        $('<p/>'),
        $('<p/>').html(                
            '<strong>THIS SEPARATION AGREEMENT CONTAINS A GENERAL RELEASE OF CLAIMS. PLEASE READ IT CAREFULLY BEFORE SIGNING IT. </strong>'
        )
        )
    );


$("#markup6").html("").append(
    $('<div class="offerClause6"/>').append(
        $('<p class="text-center"/>').html('<strong>EXHIBIT A</strong>'),
        $('<p/>').html(
                'This Exhibit A release agreement (“Exhibit A Release”), which is Exhibit A to the Separation Agreement is entered into by and between PayPal Holdings, Inc. or any subsidiary of PayPal Holdings, Inc. (collectively, “PayPal” or the “Company”) and you, <mark2>' + employee.Full_Legal_Name + '</mark2>. Any term not otherwise defined herein shall have the meaning ascribed in the Separation Agreement.' 
        )
    ),

    $('<div class="offerClause6">').append(
        $('<ol/>').append(              
            $('<li/>').append(
                '<strong>SEPARATION.</strong> ',
                '<span>Your termination of employment will be effective as of the Separation Date.  Your final paycheck, which you will receive in accordance with the state law where you work, will include your wages through your Separation Date, and, as applicable, any accrued and unused paid time off (PTO) and any contributions withheld under the PayPal Holdings, Inc. Amended and Restated Employee Stock Purchase Plan that were not applied towards a purchase under such plan, all of which will be subject to standard payroll deductions and withholdings. You are entitled to the items outlined in the prior sentence as part of your final paycheck regardless of whether you sign this Separation Agreement.</span>',
                $('<p/>')
            ),

            $('<li/>').append(

                (employee.Warn_Eligible == 'N') &&
                $('<span/>').append(
                    $('<span class="c2"/>').append(
                        $('<span class="marked" data-toggle="popover" data-placement="top" data-content="WARN ELIGIBLE = NO"/>').append(
                            '<strong>SEVERANCE.</strong> ',
                           '<span>PayPal has adopted the PayPal Holdings, Inc. Severance Pay Plan (“Plan”) designed to provide standardized severance benefits to eligible employees whose employment is terminated for the reasons set forth in the Plan, including layoff and position elimination.  Because you satisfy all of the eligibility requirements of the Plan, you are eligible for a severance payment under the Plan in the form of a lump sum payment in the amount of $<mark2>' + fnFormatCurrency(employee.LumpSumAmount5)   + '</mark2>, which is equivalent to <mark2>' + employee.Severance_Weeks + '</mark2>' + (employee.Severance_Weeks == 1 ? ' week ' : ' weeks ') + 'of base salary (“Plan Guidelines Period”), less any sums owing to the Company. Any Severance under this Agreement will be paid on the second regular payroll date following the Effective Date (as defined herein) of this Exhibit A Release (but in no event later than sixty (60) days following your Separation Date). If you are re-hired by a PayPal company within the Plan Guidelines Period, you agree that you will re-pay a pro-rata portion of your Severance to the Company.  A copy of the Plan is enclosed with this letter for your review.</span>'
                        )
                    ),
                    $('<p/>')
                ),

                (employee.Warn_Eligible == 'Y') &&
                $('<span/>').append(
                    $('<span class="c2"/>').append(
                        $('<span class="marked" data-toggle="popover" data-placement="top" data-content="WARN ELIGIBLE = YES"/>').append(
                            '<strong>SEVERANCE.</strong> ',
                           '<span>PayPal has adopted the PayPal Holdings, Inc. Severance Pay Plan (“Plan”) designed to provide standardized severance benefits to eligible employees whose employment is terminated for the reasons set forth in the Plan, including layoff and position elimination.  Because you satisfy all of the eligibility requirements of the Plan, you are eligible for a severance payment under the Plan in the form of a lump sum payment in the amount of $<mark2>' + fnFormatCurrency(employee.LumpSumAmount5)   + '</mark2>, which is equivalent to <mark2>' + employee.Severance_Weeks + '</mark2>' + (employee.Severance_Weeks == 1 ? ' week ' : ' weeks ') + 'of base salary (“Plan Guidelines Period”), less any sums owing to the Company. Any Severance under this Agreement will be paid on the second regular payroll date following the Effective Date (as defined herein) of this Exhibit A Release (but in no event later than sixty (60) days following your Separation Date). If you are re-hired by a PayPal company within the Plan Guidelines Period, you agree that you will re-pay a pro-rata portion of your Severance to the Company.  A copy of the Plan is enclosed with this letter for your review.</span>'
                        )
                    ),
                    $('<p/>')
                ),

                //2020-09-03 | SERVICES-41435 | CDY | Added as per request
                (employee.TenureSeparationDifference > 5) &&
                    $('<div class="c2"/>').append(
                        $('<p class="marked" data-toggle="popover" data-placement="top" data-content="EVT SEP - TENURE > 5 YEARS"/>').append(
                            $('<span/>').append(
                                'Additionally, upon signing the Separation Agreement, you will receive $<mark2>' + fnFormatCurrency(validateCalcBasedOnTenureSeparationDiff()) + '</mark2> in recognition of your years of service to the Company',
                                $('<p/>')
                                )
                            )
                        ),
                

                $('<span/>').append(
                    'You understand and agree that you will not be eligible to receive Severance and benefits as set forth in the Plan without executing both the Separation Agreement and this Exhibit A Release and fulfilling the promises contained therein.  You also further understand that you remain subject to all of the terms and conditions to the receipt of benefits under the Plan including, without limitation, those set forth in Section 5 thereof.',
                    $('<p/>')
                )
            ),

            $('<li/>').append(
                '<strong>HEALTH INSURANCE.</strong> ',
                '<span>You are eligible to continue your health plan benefits following the Separation Date in accordance with the Consolidated Omnibus Budget Reconciliation Act of 1986, as amended (“COBRA”) and any applicable state benefit continuation laws.  Your right to elect COBRA continuation coverage will apply whether or not you sign this Separation Agreement.  Your current health plan coverage will be paid through the Company’s normal process through midnight on the last day of the calendar month in which the Separation Date occurs.  You will be provided with a separate notice of your COBRA rights. Pursuant to the Plan (as augmented by this Separation Agreement), the Company will subsidize your COBRA continuation coverage premiums in same amount as the Company subsidy provided to active, similarly situated employees of the Company, until the earliest of:  (i) the last day of the period beginning on the first day of the month after your Separation Date and ending <mark2>nine (9) calendar months</mark2> thereafter, (ii) the date you become eligible for health plan benefits provided by another employer or Medicare, or (iii) the end of the applicable COBRA continuation coverage period.  You will be deemed to have elected COBRA continuation coverage during the period you are eligible for subsidized premiums under this section unless you notify the Company otherwise and you will be responsible for paying the balance of the premiums in excess of the Company subsidy described in this paragraph.  If you become eligible for another employer’s health plan, you agree to provide written notice to the Company and the Benefit Administrator as soon as possible.</span>',
                $('<p/>')
            ),

            $('<li/>').append(
                '<strong>OUTPLACEMENT.</strong> ',
                '<span>Pursuant to the Plan, you will be eligible for transition program services.  Details of these outplacement services will be provided to you under separate cover.</span>',
                $('<p/>')
            ),

            $('<li/>').append(
                '<strong>EXPENSE REIMBURSEMENTS.</strong> ',
                '<span>You acknowledge that you have submitted all business expenses incurred by you during the term of your employment to PayPal for reimbursement.</span>',
                $('<p/>')
            ),

            $('<li/>').append(
                '<strong>RETURN OF COMPANY PROPERTY.</strong> ',
                '<span>Regardless of whether you sign this Exhibit A Release, you are required to return to the Company no later than your last day of active employment, or sooner if requested by management, all Company documents (and all copies thereof) and other Company property and materials in your possession, or your control, including, but not limited to, Company files, notes, memoranda, correspondence, lists, drawings, records, plans and forecasts, financial information, personnel information, customer and customer prospect information, sales and marketing information, product development and pricing information, specifications, computer-recorded information, tangible property including all laptops, computers, PDAs, RSA tokens, credit cards, entry cards, identification badges and keys, and any materials of any kind which contain or embody any proprietary or confidential material of the Company (and all reproductions of such materials).  Such Company property must be returned in the same condition as when provided to you, reasonable wear and tear excepted. You will not be eligible for severance under this Exhibit A Release unless you timely return all Company property.</span>',
                $('<p/>')
            ),

            $('<li/>').append(
                '<strong>PROPRIETARY INFORMATION OBLIGATIONS.</strong> ',
                '<span>Regardless of whether you sign this Exhibit A Release, you remain bound by the Employee Proprietary Information and Inventions Agreement (“PIIA”). A copy of the PIIA will be made available to you upon request.  By signing this Exhibit A Release, you acknowledge that your continuing obligations under the PIIA include but are not limited to the obligation to refrain from any unauthorized use or disclosure of any confidential or proprietary information of the Company and non-solicitation of PayPal employees with whom you directly worked or who worked within your business unit for one (1) year following the Separation Date.  Failure to comply with this provision shall be a material breach of this Separation Agreement.</span>',
                $('<p/>')
            ),

            $('<li/>').append(
                '<strong>CONFIDENTIALITY.</strong> ',
                '<span>Subject to the “Protected Rights” provision below, the provisions of this Exhibit A Release will be held in strictest confidence by you and will not be publicized or disclosed in any manner whatsoever; provided, however, that  (a) you may disclose this Exhibit A Release to your immediate family; (b) you may disclose this Exhibit A Release in confidence to your attorney, accountant, auditor, tax preparer, and financial advisor; and (c) you may disclose this Exhibit A Release insofar as such disclosure may be necessary to enforce its terms or as otherwise required by law.  In particular, and without limitation, you agree not to disclose the terms of this Exhibit A Release to any current or former Company employee or contractor.  Failure to comply with this provision shall be a material breach of this Exhibit A Release and will result in your ineligibility for severance pay or benefits under this Exhibit A Release.</span>',
                $('<p/>')
            ),

            $('<li/>').append(
                '<strong>NON-DISPARAGEMENT.</strong> ',
                '<span>Subject to the “Protected Rights” provision below, you agree not to disparage the Company or any of the Company’s officers, directors, employees, shareholders and agents, affiliates and subsidiaries in any manner likely to be harmful to them or their business, business reputation, or personal reputation; provided that you will respond accurately and fully to any question, inquiry or request for information when required by legal process.  Failure to comply with this provision shall be a material breach of this Exhibit A Release and will result in your ineligibility for severance pay or benefits under this Exhibit A Release.</span>',
                $('<p/>')
            ),

            $('<li/>').append(
                '<strong>COOPERATION.</strong> ',
                '<span>You agree that you will cooperate fully with the Company and its counsel, upon their request, with respect to any potential or pending proceeding (including, but not limited to, any litigation, arbitration, regulatory proceeding, investigation or governmental action) that relates at least in part to matters with which you were involved while you were an employee of the Company or any of its affiliates, or with which you have knowledge. You agree to render such cooperation in a timely fashion and to provide Company personnel and counsel with the full benefit of your knowledge with respect to any such matter, and will make yourself reasonably available for interviews, depositions, or court appearances at the request of the Company or its counsel. Subject to the “Protected Rights” provision below, if you receive a complaint or subpoena or other legal process relating to the Company or a request for interview or to provide information concerning any existing, potential or threatened claims against the Company, you shall give written notice to the Company to the attention of Cassandra Knight, VP, Chief Litigation Officer, or her successor, within seven (7) days of receipt and prior to your response to any such process or communication, unless prohibited by applicable law.</span>',
                $('<p/>')
            ),

            $('<li/>').append(
                '<strong>PROTECTED RIGHTS.</strong> ',
                '<span>By your signature below, you acknowledge and agree that, with the exception of information that is protected from disclosure by any applicable law or privilege, nothing in this Exhibit A Release or in any agreement between you and the Company prohibits or limits you (or your attorney) from initiating communications directly with, responding to any inquiry from, volunteering information to, or providing testimony before, the Securities and Exchange Commission, the Department of Justice, FINRA, any other self-regulatory organization, or any other governmental, law enforcement, or regulatory authority, regarding this Separation Agreement and its underlying facts and circumstances, or in connection with any reporting of, investigation into, or proceeding regarding suspected violations of law, and that you are not required to advise or seek permission from the Company before engaging in any such activity.</span>',
                $('<p/>')
            ),

            $('<li/>').append(
                    '<strong>GENERAL RELEASE OF CLAIMS, CLAIMS NOT RELEASED.</strong>',
                    $('<p/>'),
                    $('<ul/>').append(
                        $('<span/>').append(
                            '<strong class="iPa">(a) </strong><span class="iBp">In consideration for the benefits and other promises and undertakings contained in this Separation Agreement to which you would not otherwise be entitled, and except as otherwise set forth in this Separation Agreement, you, on your own behalf and on behalf of your respective heirs, family members, executors, agents, and assigns, release, acquit and forever discharge the Company, its parents and subsidiaries, and its and their respective officers, directors, agents, servants, employees, attorneys, shareholders, successors, assigns and affiliates (collectively, the “Released Parties”), of and from any and all claims, liabilities, demands, charges, causes of action, costs, expenses, attorney’s fees, damages, indemnities and obligations of every kind and nature, in law, equity, or otherwise, which you assert or could assert against the Released Parties at common law or under any statute, rule, regulation, order or law, whether federal, state or local, on any ground whatsoever, known and unknown, suspected and unsuspected, disclosed and undisclosed, arising out of or in any way related to agreements, events, acts or conduct at any time prior to and including the date you sign this Separation Agreement, including but not limited to: all such claims and demands directly or indirectly arising out of or in any way connected with your employment with the Company or the termination of that employment; claims or demands related to salary, bonuses, pension or insurance contributions, commissions, stock, stock options, or any other ownership interests in the Company, PTO or other time off pay, fringe benefits, expense reimbursements, severance pay, or any other form of compensation; any and all causes of action, including but not limited to actions for breach of contract, express or implied, breach of the covenant of good faith and fair dealing, express or implied, wrongful termination in violation of public policy, all other claims for wrongful termination and constructive discharge, and all other tort claims, including, but not limited to, intentional or negligent infliction of emotional distress, invasion of privacy, negligence, negligent investigation, negligent hiring, supervision or retention, assault and battery, false imprisonment, defamation, intentional or negligent misrepresentation, fraud, and any and all claims arising under any federal, state or local law or statute that may be legally waived and released, including, but not limited to, Title VII of the Civil Rights Act of 1964; the Civil Rights Act of 1991; the Employee Retirement and Income Security Act; the Americans with Disabilities Act, 42 U.S.C. § 1981; the Fair Labor Standards Act; the Equal Pay Act; the Family and Medical Leave Act; the Fair Credit Reporting Act; the National Labor Relations Act; the Uniform Services Employment and Reemployment Rights Act; the Genetic Information Non-Discrimination Act; the Immigration Reform and Control Act; ' + (employee.AgeOver40 == "Y" ? '<mark2>the Age Discrimination in Employment Act;</mark2>' : '') + ' the Worker Adjustment and Retraining Notification Act and any similar state statutes; ' + (employee.Work_Location.substring(0,6) == "USA-CA" ? '<mark2>the California Fair Employment and Housing Act, Unruh Civil Rights Act, California Business and Professions Code 17200, California Family Rights Act, California Labor Code, California Private Attorneys General Act, California Civil Code,</mark2> ' : '') + (employee.Work_Location.substring(0,6) == "USA-IL" ? '<mark2>the Illinois Human Rights Act, Illinois Wage Payment and Collection Act, Illinois Equal Pay Law, Illinois Religious Freedom Restoration Act,</mark2> ' : '') + (employee.Work_Location.substring(0,6) == "USA-NE" ? '<mark2>the Nebraska Fair Employment Practices Act, Nebraska Equal Pay Act, as amended</mark2> ' : '') + ';and any and all other federal, state, or local laws and regulations relating to employment termination, employment discrimination, harassment or retaliation, claims for wages, hours, benefits, compensation, and any and all claims for attorneys’ fees and costs, inasmuch as is permissible by law and by the respective governmental enforcement agencies for the above-listed laws. You expressly waive any right you may have to dispute the termination of employment and any preferential right to new employment.</span>',
                                $('<p/>')
                        ),
                        $('<span/>').append(
                            '<strong class="iPa">(b) </strong><span class="iBp"><strong>Collective/Class Action Waiver.</strong> If any claim is not subject to release, to the extent permitted by law, you waive any right or ability to be a class or collective action representative or to otherwise participate in any putative or certified class, collective or multi-party action or proceeding, or PAGA action based on such a claim in which the Company or any of the other Released Parties identified in this Separation Agreement is a party.</span>',
                            $('<p/>')
                        ),
                        $('<span/>').append(
                            '<strong class="iPa">(c) </strong><span class="iBp"><strong>Claims Not Released.</strong> This Separation Agreement does not waive rights or claims under federal or state law that you cannot, as a matter of law, waive by private agreement, such as ' + (employee.Work_Location.substring(0,6) == "USA-CA" ? "<mark2>a right of indemnification under California Labor Code Section 2802,</mark2> " : "") + 'claims for unemployment or state disability insurance benefits, worker compensation benefits, health insurance benefits under the Consolidated Omnibus Budget Reconciliation Act (COBRA), or claims with regard to vested benefits under a retirement plan governed by the Employee Retirement Income Security Act (ERISA). Additionally, nothing in this Separation Agreement precludes you from filing a charge or complaint with or participating in any investigation or proceeding before the Equal Employment Opportunity Commission or similar state agency. However, while you may file a charge and participate in any proceeding conducted by the Equal Opportunity Commission or state agency, by signing this Separation Agreement, you waive your right to bring a lawsuit against the Company and waive your right to any individual monetary recovery in any action or lawsuit initiated by the Equal Employment Opportunity Commission or state agency.  Additionally, nothing in this Agreement prohibits or restricts you from initiating communications directly with, responding to any inquiry from, or providing information to or testimony before, the Securities and Exchange Commission (“SEC”), Department of Justice (“DOJ”), or any other governmental agency or self-regulatory organization, about actual or potential violations of laws or regulations, or to receive a monetary award from a government administered whistleblower-award program.</span>',
                            $('<p/>')
                        ),
                        $('<span/>').append(
                            '<strong class="iPa">(d) </strong><span class="iBp"><strong>Release of Unknown Claims.</strong>  In waiving and releasing all claims as set forth above, whether or not now known to you, you understand that if you later discover facts different from or in addition to those facts that you currently know or believe to be true, this Separation Agreement, and any waivers and releases contained herein, will nevertheless remain in effect in all respects despite such different or additional facts, and even if you would not have signed this Separation Agreement if you had prior knowledge of such facts.</span>',
                            $('<p/>')
                        ),

                        (employee.Work_Location.substring(0,6) == 'USA-CA') &&
                        $('<span class="margin-40"/>').append(
                            $('<span class="c5"/>').append(
                                $('<span class="marked" data-toggle="popover" data-placement="top" data-content="EVENT LOCATION = USA-CA"/>').append(
                                    $('<p style="font-weight:normal!important;"/>').html(
                                        'You specifically acknowledge that you have been advised to consult with legal counsel and are familiar with and understand Section 1542 of the California Civil Code, a statute that otherwise prohibits the release of unknown claims, which reads as follows: '
                                        ),
                                    $('<p/>').html(
                                        '<strong>A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS THAT THE CREDITOR OR RELEASING PARTY DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE AND THAT, IF KNOWN BY HIM OR HER, WOULD HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR OR RELEASED PARTY.</strong>'
                                        ),
                                    $('<p style="font-weight:normal!important;"/>').html(
                                        'You hereby knowingly, intentionally, and expressly waive and relinquish all rights and benefits under that section and any law of any jurisdiction of similar effect with respect to your release of any unknown or unsuspected claims you may have against the Company.'
                                    ),
                                    $('<p/>')
                                )
                            )
                        )
                    )
                ),

                $('<li/>').append(
                    '<strong>AFFIRMATIONS/ACKNOWLEDGMENTS.</strong> You affirm and/or acknowledge that:',
                    $('<p/>'),
                    $('<ul/>').append(
                        $('<span/>').append(
                            '<strong class="iPa">(a) </strong><span class="iBp"> you have been paid all wages, bonuses, commissions and benefits (“compensation”) due or earned, and if you allege any unpaid compensation is due, you agree that there is a bona fide and good-faith dispute as to whether such compensation is due, and based on this dispute and the consideration provided under this Separation Agreement, you release and waive any such claims;</span>',
                            $('<p/>')
                            ),
                        $('<span/>').append(
                            '<strong class="iPa">(b) </strong><span class="iBp"> you have not filed or caused to be filed any claim, complaint, or action against any of the Released Parties in any forum or form, or if you have, then prior to executing this Separation Agreement, you have notified the undersigned of this fact;</span>',
                            $('<p/>')
                            ),
                        $('<span/>').append(
                            '<strong class="iPa">(c) </strong><span class="iBp"> you have no known workplace injuries or occupational diseases; </span>',
                            $('<p/>')
                            ),
                        $('<span/>').append(
                            '<strong class="iPa">(d) </strong><span class="iBp"> you have been granted or have not been denied any leave to which you were entitled under the Family and Medical Leave Act, any comparable state law, or any disability accommodation law(s);</span>',
                            $('<p/>')
                            ),
                        $('<span/>').append(
                            '<strong class="iPa">(e) </strong><span class="iBp"> either (1) you are not a Medicare beneficiary as of the Effective Date and therefore no conditional payments have been made by Medicare or (2) prior to executing this Separation Agreement, you have notified the undersigned that you are a Medicare Beneficiary.  Further, you will indemnify, defend, and hold the Company harmless from any and all claims, liens, Medicare conditional payments, and rights to payment, known or unknown.  You and the Company (a) are entering into this Settlement Agreement in compliance with both state and federal law; (b) have not shifted responsibility of medical treatment to Medicare in contravention of 42 U.S.C. § 1395y(b); and (c) made every effort to adequately protect Medicare’s interest and incorporate such into the settlement terms; and</span>',
                            $('<p/>')
                            ),
                        $('<span/>').append(
                            '<strong class="iPa">(f) </strong><span class="iBp"> you have not been retaliated against for reporting any allegations of wrongdoing by the Company or any of its officers, directors, or employees.</span>',
                            $('<p/>')
                            )
                        )
                    ),
$('<li/>').append(
    '<strong>NO ADMISSION OF WRONGDOING.</strong>  <span>The Parties agree that neither this Exhibit A Release nor the furnishing of the consideration for this Separation Agreement shall be deemed or construed at any time for any purpose as an admission by the Released Parties of wrongdoing or evidence of any liability or unlawful conduct of any kind.</span>',
    $('<p/>')
    ),
$('<li/>').append(
    '<strong>ARBITRATION.</strong> <span>The Parties agree to arbitrate any and all disputes that either Party may have against the other for an alleged breach of this Exhibit A Release. Notwithstanding the prior sentence, the obligation to arbitrate does not apply to any claim required by law to be resolved in a forum other than arbitration, which claims shall be resolved in the appropriate forum as required by the laws then in effect. The Parties understand and agree that any arbitration related to this Exhibit A Release shall be conducted by a neutral arbitrator through JAMS in accordance the then current JAMS Employment Arbitration Rules and Procedures. A copy of the current JAMS rules can be found at <a href="https://www.jamsadr.com/rules-employment-arbitration" target="_blank">www.jamsadr.com/rules-employment-arbitration</a> and a printed copy will be provided to you upon request.</span>',
    $('<p/>')
    ),
$('<li/>').append(
    '<strong>MISCELLANEOUS.</strong>  <span>The Separation Agreement, including this Exhibit A Release and all exhibits, constitutes the complete, final and exclusive embodiment of the entire agreement between you and the Company with regard to this subject matter.  It is entered into without reliance on any promise or representation, written or oral, other than those expressly contained herein, and it supersedes any other such promises, warranties or representations, prior agreements and communications, whether oral or written, as to the specific subjects of this letter by and between you and the Company. This Exhibit A Release may not be modified or amended except in writing signed by both you and a duly authorized officer of the Company. This Exhibit A Release will bind the heirs, personal representatives, successors and assigns of both you and the Company, and inure to the benefit of both you and the Company, their heirs, successors and assigns. If any provision of this Exhibit A Release is determined to be invalid or unenforceable, in whole or in part, this determination will not affect any other provision of this Exhibit A Release and the provision in question will be modified by the court so as to be rendered enforceable.  No waiver by the Company of any right under this Exhibit A Release shall be construed as a waiver of any other right, nor shall any waiver by the Company of any breach of this Exhibit A Release be a waiver of any preceding or succeeding breach.  This Exhibit A Release shall be construed under the law of the state where you are employed on your Separation Date.</span>',
    $('<p/>')
    ),
$('<li/>').append(
    '<strong>DTSA.</strong>  <span>Please be advised, pursuant to the Defend Trade Secrets Act of 2016, an individual shall not be held criminally, or civilly, liable under any Federal or State Trade secret law for the disclosure of a trade secret that is made in confidence either directly or indirectly to a Federal, State, or local government official, or an attorney, for the sole purpose of reporting, or investigating, a violation of law.  Moreover, individuals may disclose trade secrets in a complaint, or other document, filed in a lawsuit, or other proceeding, if such filing is made under seal.  Finally, any individual who files a lawsuit alleging retaliation by the Company for reporting a suspected violation of the law may disclose the trade secret to the attorney of the individual and use the trade secret in the court proceeding, if the individual: files any document containing the trade secret under seal and does not disclose the trade secret, except pursuant to court order.</span>',
    $('<p/>')
    ),
(employee.AgeOver40 == "N") &&
$('<li/>').append(
    $('<span class="c2"/>').append(
        $('<span class="marked" data-toggle="popover" data-placement="top" data-content="AGE OVER 40 = NO"/>').append(
            '<strong>VOLUNTARY EXECUTION OF SEPARATION AGREEMENT.</strong>  You acknowledge and confirm that:',
            $('<p/>'),
            $('<ul/>').append(
                $('<span/>').append(
                    '<strong class="iPa">(a) </strong><span class="iBp"> You have read this Exhibit A Release in its entirety and understand all of its terms;</span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">(b) </strong><span class="iBp"> By this Exhibit A Release, you have been advised in writing to consult with an attorney of your choosing, at your own expense, before signing this Exhibit A Release;</span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">(c) </strong><span class="iBp"> You are entering into this Exhibit A Release freely and voluntarily and not as a result of any coercion, duress, or undue influence, and with full knowledge of its significance and the legal consequences;</span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">(d) </strong><span class="iBp"> You are signing this Exhibit A Release, including the waiver and release, in exchange for good and valuable consideration in addition to anything of value to which you are otherwise entitled;</span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">(e) </strong><span class="iBp"> You will have fourteen (14) days to consider whether to sign this Exhibit A Release (although you may choose voluntarily to sign it any time on or after your Separation Date) (“Consideration Period”); </span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">(f) </strong><span class="iBp"> By signing this Exhibit A Release, you waive all claims you have or might have against the Released Parties; and </span>',
                    $('<p/>')
                    ),

                $('<span/>').append(
                    '<strong class="iPa">(g) </strong><span class="iBp"> This Exhibit A Release will not be effective until the day you execute it (“Effective Date”).</span>',
                    $('<p/>')
                    )
                )
            )
        ),  
    $('<p/>')
    ),
(employee.AgeOver40 == "Y") &&
$('<li/>').append(
     $('<span class="c2"/>').append(
        $('<span class="marked" data-toggle="popover" data-placement="top" data-content="AGE OVER 40 = YES"/>').append(
            '<strong>OWBPA.  AS REQUIRED BY THE AGE DISCRIMINATION IN EMPLOYMENT ACT (ADEA) AND THE OLDER WORKERS’ BENEFIT PROTECTION ACT (OWBPA), YOU ACKNOWLEDGE AND CONFIRM THAT:  </strong>',
            $('<p/>'),
            $('<ul/>').append(
                $('<span/>').append(
                    '<strong class="iPa">(a) </strong><span class="iBp"><strong> YOU HAVE READ THIS EXHIBIT A RELEASE IN ITS ENTIRETY AND UNDERSTAND ALL OF ITS TERMS;</strong></span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">(b) </strong><span class="iBp"><strong> BY THIS EXHIBIT A RELEASE, YOU HAVE BEEN ADVISED IN WRITING TO CONSULT WITH AN ATTORNEY OF YOUR CHOOSING, AT YOUR OWN EXPENSE, BEFORE SIGNING THIS EXHIBIT A RELEASE;</strong></span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">(c) </strong><span class="iBp"><strong> YOU HAVE RECEIVED, AND HAVE HAD THE OPPORTUNITY TO REVIEW, THE OWBPA NOTICE ATTACHED HERETO AS EXHIBIT B.</strong></span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">(d) </strong><span class="iBp"><strong> YOU ARE ENTERING INTO THIS EXHIBIT A RELEASE FREELY AND VOLUNTARILY AND NOT AS A RESULT OF ANY COERCION, DURESS, OR UNDUE INFLUENCE, AND WITH FULL KNOWLEDGE OF ITS SIGNIFICANCE AND THE LEGAL CONSEQUENCES;</strong></span>',
                    $('<p/>')
                    ),

                $('<span/>').append(
                    '<strong class="iPa">(e) </strong><span class="iBp"><strong> YOU ARE SIGNING THIS EXHIBIT A RELEASE, INCLUDING THE WAIVER AND RELEASE, IN EXCHANGE FOR GOOD AND VALUABLE CONSIDERATION IN ADDITION TO ANYTHING OF VALUE TO WHICH YOU ARE OTHERWISE ENTITLED;</strong></span>',
                    $('<p/>')
                ),
                $('<span/>').append(
                    '<strong class="iPa">(f) </strong><span class="iBp"><strong> YOU HAVE BEEN GIVEN AT LEAST <mark2>' + ((employee.AgeOver40 == "Y" && employee.Individual_or_Group == "Individual") ? "TWENTY-ONE(21)" : (employee.AgeOver40 == "Y" && employee.Individual_or_Group == "Group") ? "FORTY-FIVE (45)" : (employee.AgeOver40 == "Y" && employee.Individual_or_Group == "Bulk Load") ? "FORTY-FIVE (45)" : "") + '</mark2> DAYS TO CONSIDER WHETHER TO SIGN THIS EXHIBIT A RELEASE (ALTHOUGH YOU MAY CHOOSE VOLUNTARILY TO SIGN IT ANY TIME ON OR AFTER THE SEPARATION DATE) (“CONSIDERATION PERIOD”);  YOU HAVE SEVEN (7) DAYS AFTER YOU SIGN TO REVOKE THE EXHIBIT A RELEASE BY DELIVERING A WRITTEN STATEMENT OF REVOCATION TO YOUR HUMAN RESOURCES REPRESENTATIVE AT THE BELOW ADDRESS BY CLOSE OF BUSINESS ON THE SEVENTH (7TH) DAY FOLLOWING THE DATE ON WHICH YOU SIGNED;</strong></span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">(g) </strong><span class="iBp"><strong> BY SIGNING AND NOT REVOKING THIS EXHIBIT A RELEASE, YOU WAIVE ALL CLAIMS YOU HAVE OR MIGHT HAVE AGAINST THE RELEASED PARTIES UNDER THE ADEA THAT ACCRUED PRIOR TO THE EFFECTIVE DATE; AND </strong></span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">(h) </strong><span class="iBp"><strong> THIS EXHIBIT A RELEASE WILL NOT BE EFFECTIVE UNTIL THE DAY AFTER THE REVOCATION PERIOD HAS EXPIRED, WHICH WILL BE THE EIGHTH (8TH) DAY AFTER YOU SIGN IT (“EFFECTIVE DATE”); AND</strong></span>',
                    $('<p/>')
                    ),
                $('<span/>').append(
                    '<strong class="iPa">(i) </strong><span class="iBp"><strong> YOU UNDERSTAND THAT YOUR WAIVER AND RELEASE DO NOT APPLY TO ANY RIGHTS OR CLAIMS THAT MAY ARISE AFTER THE EXECUTION DATE OF THIS EXHIBIT A RELEASE.</strong></span>',
                    $('<p/>')
                    )
                )
            )
        )
)
),
$('<p class="text-center"/>').html(
    '*   *   *'
    ),
$('<p/>').html(
    'If you agree to the terms of this Exhibit A Release, please sign below.'
    ),
$('<p/>').html(
    'On the Effective Date, this will become our binding agreement.'
    )

)
);

$("#markup7").html("").append(
    $('<div class="offerClause7">').append(
        $('<p/>').append(                
            $('<p/>').html('<strong>PayPal</strong>'),
            $('<span/>').html('By:<br>'),
            $('<span/>').html('Human Resources<br>'),
             $('<span id="signDisplay7"/>').html('')
            )
        )
    );

$("#markup8").html("").append(
    $('<div class="offerClause8">').append(
        $('<p/>'),
        $('<p/>'),
        $('<p/>').html(                
            '<strong>THIS SEPARATION AGREEMENT CONTAINS A GENERAL RELEASE OF CLAIMS. PLEASE READ IT CAREFULLY BEFORE SIGNING IT. </strong>'
        ),
        $('<p/>').html(                
            '<strong>*DO NOT SIGN THIS AGREEMENT UNTIL ON OR AFTER YOUR SEPARATION DATE*</strong>'
        )
        )
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

function formatCurrency(total) {
    return parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
}

function fnFormatCurrency(total) {
    if (total) {
        total = (total.toString().indexOf(',') != -1) ? total.split(',').join('') : total;
        return formatCurrency(total);
    } else {
        return '0.00';
    }
}

function getSeparationOnOctoberNovember(){
    var sep = moment(employee.Separation_Date_Base);
    var oct = moment(employee.Current_Date_Year + "-10-01");
    var nov = moment(employee.Current_Date_Year + "-11-30");
    var range = moment.range(oct,nov);
    return sep.within(range);
}
function getSeparationOnDecember(){
    var sep = moment(employee.Separation_Date_Base);
    var dec = moment(employee.Current_Date_Year + "-12-01");
    var range = moment.range(dec,dec);
    return sep.within(range);
}

//2020-03-30 | SERVICES-40449 | CDY | Changed as per request
function getSeparationOnDecember2(){
    var sep = moment(employee.Separation_Date_Base);
    var dec = moment(employee.Current_Date_Year + "-12-01");
    var dec2 = moment(employee.Current_Date_Year + "-12-31");
    var range = moment.range(dec,dec2);
    return sep.within(range);
}

function getSeparationOnJulyNovember(){
    var sep = moment(employee.Separation_Date_Base);
    var jul = moment(employee.Current_Date_Year + "-07-01");
    var nov = moment(employee.Current_Date_Year + "-11-30");
    var range = moment.range(jul,nov);
    return sep.within(range);
}

function getBaseMonthlyOnTenure(){
    switch (employee.Tenure_CED){
        case 5 :
        return employee.BaseMonthly70Divided52 * 1;
        break;
        case 6 :
        return employee.BaseMonthly70Divided52 * 2;
        break;
        case 7 :
        return employee.BaseMonthly70Divided52 * 3;
        break;
        case 8 :
        return employee.BaseMonthly70Divided52 * 4;
        break;
        case 9 :
        return employee.BaseMonthly70Divided52 * 5;
        break;
        case 10 :
        return employee.BaseMonthly70Divided52 * 6;
        break;
        case 11 :
        return employee.BaseMonthly70Divided52 * 7;
        break;
        case 12 :
        return employee.BaseMonthly70Divided52 * 8;
        break;
        case 13 :
        return employee.BaseMonthly70Divided52 * 9;
        break;
        case 14 :
        return employee.BaseMonthly70Divided52 * 10;
        break;
    }
    if(employee.Tenure_CED > 14){
        return employee.BaseMonthly70Divided52 * 11;
    }
    return 0;
}

//2020-09-03 | SERVICES-41435 | CDY | Added as per request
function validateCalcBasedOnTenureSeparationDiff(){
    if(employee.TenureSeparationDifference > 5 && employee.TenureSeparationDifference <= 6){
        return employee.BaseMonthly70Divided52 * 1;
    }else if(employee.TenureSeparationDifference > 6 && employee.TenureSeparationDifference <= 7){
        return employee.BaseMonthly70Divided52 * 2;
    }else if(employee.TenureSeparationDifference > 7 && employee.TenureSeparationDifference <= 8){
        return employee.BaseMonthly70Divided52 * 3;
    }else if(employee.TenureSeparationDifference > 8 && employee.TenureSeparationDifference <= 9){
        return employee.BaseMonthly70Divided52 * 4;
    }else if(employee.TenureSeparationDifference > 9 && employee.TenureSeparationDifference <= 10){
        return employee.BaseMonthly70Divided52 * 5;
    }else if(employee.TenureSeparationDifference > 10 && employee.TenureSeparationDifference <= 11){
        return employee.BaseMonthly70Divided52 * 6;
    }else if(employee.TenureSeparationDifference > 11 && employee.TenureSeparationDifference <= 12){
        return employee.BaseMonthly70Divided52 * 7;
    }else if(employee.TenureSeparationDifference > 12 && employee.TenureSeparationDifference <= 13){
        return employee.BaseMonthly70Divided52 * 8;
    }else if(employee.TenureSeparationDifference > 13 && employee.TenureSeparationDifference <= 14){
        return employee.BaseMonthly70Divided52 * 9;
    }else if(employee.TenureSeparationDifference > 14 && employee.TenureSeparationDifference <= 15){
        return employee.BaseMonthly70Divided52 * 10;
    }else if(employee.TenureSeparationDifference > 15){
        return employee.BaseMonthly70Divided52 * 11;
    }
    return 0;
}



function getStateRule(state){
    switch (state){
        case "USA-AL":
        return "Alabama Age Discrimination Law, as amended";
        break;
        case "USA_AK":
        return "Alaska Human Rights Law, as amended";
        break;
        case "USA-AZ":
        return "Arizona Civil Rights Act, Arizona Equal Pay Law, Arizona Employment Protection Act, Arizona Fair Wages and Healthy Families Act";
        break;  
        case "USA-AR":
        return "Arkansas Civil Rights Act, Arkansas Equal Pay Law, as amended";
        break;  
        case "USA-CA":
        return "California Fair Employment and Housing Act, Unruh Civil Rights Act, California Business and Professions Code 17200, California Family Rights Act, California Labor Code, California Family Rights Act, California Private Attorneys General Act, California Civil Code";
        break;  
        case "USA-CO":
        return "Colorado Anti-Discrimination Act of 1957, Colorado Equal Pay Law, Colorado Discrimination by Labor Organization Law, Colorado Employee’ Family and Medical Leave Rules, as amended";
        break;  
        case "USA-CT":
        return "Connecticut Human Rights and Opportunities Act, Connecticut Equal Pay Law, Connecticut Age Discrimination and Employee Insurance Benefits Law, Connecticut Family and Medical Leave Law, as amended";
        break;  
        case "USA-DE":
        return "Delaware Fair Employment Practices Act, Delaware Equal Pay Law, Delaware Handicap Discrimination Law, as amended";
        break;  
        case "USA-DC":
        return "District of Columbia’s Human Rights Law, District of Columbia’s Family and Medical Leave Act of 1990, as amended";
        break;  
        case "USA-FL":
        return "Florida Civil Human Rights Act of 1977, Florida Wage Discrimination Law, Florida Equal Pay Law, as amended";
        break;  
        case "USA-GA":
        return "Georgia Fair Employment Practices Act, Georgia Equal Pay Act, Georgia Equal Employment for Persons With Disabilities Code, as amended";
        break;  
        case "USA-HI":
        return "Hawaii Fair Employment Practices Act, Hawaii Equal Pay Law, Hawaii Family Leave Act, as amended";
        break;  
        case "USA-ID":
        return "Idaho Fair Employment Practices Act, Idaho Equal Pay Law, Idaho Civil Rights Law, as amended";
        break; 
        case "USA-IL":
        return "Illinois Human Rights Act, Illinois Wage Payment and Collection Act, Illinois Equal Pay Law, Illinois Religious Freedom Restoration Act, the Illinois Worker Adjustment and Retraining Notification Act is 820";
        break;  
        case "USA-IN":
        return "Indiana Civil Rights Law, Indiana Equal Pay Act, Indiana Handicap Discrimination Law, as amended";
        break;  
        case "USA-IA":
        return "Iowa Civil Rights Act of 1965, as amended";
        break;  
        case "USA-KS":
        return "Kansas Act Against Discrimination, Kansas Equal Pay Law, as amended";
        break;  
        case "USA-KY":
        return "Kentucky Fair Employment Practices Act, Kentucky Civil Rights Act, Kentucky Discrimination Against Physically Handicapped Law, Kentucky Equal Pay Law, as amended";
        break;  
        case "USA-LA":
        return "Louisiana Fair Employment Practices Law, Louisiana Employment Discrimination Law, Louisiana Age Discrimination Law, Louisiana Equal Employment in Insurance Law, as amended";
        break;  
        case "USA-ME":
        return "Maine Human Rights Act, Maine Equal Pay Law, Maine Sexual Harassment Policies Law, Maine Family Medical Leave Act, as amended";
        break;  
        case "USA-MD":
        return "Maryland Fair Employment Practices Act, Maryland Equal Pay Law, as amended";
        break;  
        case "USA-MA":
        return "Massachusetts Fair Employment Practices Law, Massachusetts Equal Pay and Maternity Benefits Law, as amended";
        break;  
        case "USA-MI":
        return "Michigan Civil Rights Act, Michigan Equal Pay Law, Michigan Bias Against Persons With Disabilities Law, as amended";
        break;  
        case "USA-MN":
        return "Minnesota Human Rights Act, Minnesota Equal Pay Law, as amended";
        break;  
        case "USA-MS":
        return "Mississippi has no statutory provision of general application concerning equal employment opportunities";
        break;
        case "USA-MO":
        return "Missouri Fair Employment Practices Act, Missouri Equal Pay Law, Missouri Handicap Discrimination Law, as amended";
        break;  
        case "USA-MT":
        return "Montana Human Rights Act, Montana Equal Pay Law, Montana Persons With Disabilities Employment Preference Act, as amended";
        break;
        case "USA-NE":
        return "Nebraska Fair Employment Practices Act, Nebraska Equal Pay Act, as amended";
        break; 
        case "USA-NV":
        return "Nevada Fair Employment Practices Act, Nevada Equal Pay Act, as amended";
        break;  
        case "USA-NH":
        return "New Hampshire Law Against Discrimination, New Hampshire Equal Pay Law, as amended";
        break;  
        case "USA-NJ":
        return "New Jersey Law Against Discrimination, New Jersey Conscientious Employee Protection Act, New Jersey Wage and Hour Law, New Jersey Equal Pay Act, as amended";
        break;  
        case "USA-NM":
        return "New Mexico Human Rights Act, as amended";
        break;
        case "USA-NY":
        return "New York State Human Rights Law, New York False Claims Act, New York Wage Theft Protection Act, as amended";
        break;  
        case "USA-NC":
        return "North Carolina Equal Employment Practices Act, North Carolina Persons With Disabilities Protection Act, North Carolina Retaliatory Employment Discrimination Law, as amended";
        break;
        case "USA-ND":
        return "North Dakota Fair Employment Practices Act, North Dakota Human Rights Act, North Dakota Equal Pay Act, as amended";
        break;
        case "USA-OH":
        return "Ohio Fair Employment Practices Law, Ohio Equal Pay Law,";
        break;  
        case "USA-OK":
        return "Oklahoma Civil Rights Act, Oklahoma Anti-Discrimination Act, Oklahoma Equal Pay Act, as amended";
        break;
        case "USA-OR":
        return "Oregon Fair Employment Practices Act, Oregon Equal Pay Law,";
        break;  
        case "USA-PA":
        return "Pennsylvania Human Relations Act, Pennsylvania Equal Pay Act, Pennsylvania Wage payment Collection Act,";
        break;  
        case "USA-PR":
        return "Puerto Rico Fair Employment Practices Act, Puerto Rico Equal Employment Opportunity for Persons with Disabilities Act, as amended";
        break;
        case "USA-RI":
        return "Rhode Island Fair Employment Practices Act, Rhode Island Equal Pay Law, Rhode Island Handicapped Discrimination Law, as amended";
        break;
        case "USA-SC":
        return "South Carolina Human Affairs Law, as amended";
        break;  
        case "USA-SD":
        return "South Dakota Human Relation Act of 1972, South Dakota Equal Pay Law,";
        break;  
        case "USA-TN":
        return "Tennessee Fair Employment Practices Law, Tennessee Anti-Discrimination Act, Tennessee Handicap Discrimination Law, as amended";
        break;  
        case "USA-TX":
        return "Texas Commission on Human Rights Act of 1983, Texas Employment Discrimination Law, Texas Disability Discrimination Law, as amended";
        break;  
        case "USA-UT":
        return "Utah Anti-Discrimination Act, as amended";
        break;  
        case "USA-VT":
        return "Vermont Fair Employment Practices Act, as amended";
        break;
        case "USA-VA":
        return "Virginia Human Rights Act, Virginia Equal Pay Act, as amended";
        break;  
        case "USA-WA":
        return "Washington Law Against Discrimination In Employment, Washington Equal Pay Law, as amended";
        break;  
        case "USA-WV":
        return "West Virginia Human Rights Act, West Virginia Equal Pay Law, as amended";
        break;
        case "USA-WI":
        return "Wisconsin Fair Employment Act, as amended";
        break;  
        case "USA-WY":
        return "Wyoming Fair Employment Practices Act of 1965, Wyoming Equal Pay Law, as amended";
        break;  
        default :
        return "";
    }
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
    //employee.Recruiter_Name = $("#recruiter_signature").val();

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

        var arrParts6 = [
        [1, 'hidden_pg6']

        ];

        var arrParts7 = [
        [1, 'hidden_pg7']

        ];

        var arrParts8 = [
        [1, 'hidden_pg8']

        ];



        showCompletedOfferLetter('incomplete', 'complete', arrParts);
        showCompletedOfferLetter('incomplete2', 'complete2', arrParts2);
        showCompletedOfferLetter('incomplete3', 'complete3', arrParts3);
        showCompletedOfferLetter('incomplete6', 'complete6', arrParts6);
        showCompletedOfferLetter('incomplete7', 'complete7', arrParts7);
        showCompletedOfferLetter('incomplete8', 'complete8', arrParts8);
        
        
    }
});

if (!strFormCompleted && true) {
    $('mark').addClass('highlight');
}else{
    $('mark').removeClass('highlight');
    $('.marked').popover('hide');
}
