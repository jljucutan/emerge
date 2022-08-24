// Ireland External Contract
function fnView() {
    $("#markup").html("").append(
        ///////company logo
        $('<div class="offerClause"/>').append(
            $('<H1 style="font-size: 20px;"/>').html(
                ' '
                ),
            $('<p/>').html(
                ' '
                )
            ),
        $('<div class="col-lg-12"/>').append(
            $('<div class="offerClause"/>').append(
                $('<div id="srt_eform_logo" class="text-right"/>').html('<img src=' + company.Logo + '>')
                )
            ),
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<H1 style="font-size: 20px;"/>').html(
                '<strong>Contract of Employment</strong>'
                ),
            $('<p/>').html(
                ' '
                )
            ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Parties to the Contract</strong>'
                ),
            $('<p/>').html(
                'The parties to the contract are ' + employee.Entity_Name + ', Hollyhill Industrial Estate, Hollyhill, Cork, Ireland, hereinafter referred to as &#34;Apple&#34; and ' + employee.First_Name + ' ' + employee.Middle_Name + ' ' + employee.Last_Name + ',  ' +  ((employee.Address_1 !='') ? employee.Address_1 + ', ' : '') + ((employee.Address_2 !='') ? employee.Address_2 + ', ' : '') + ((employee.Address_3 !='') ? employee.Address_3 + ', ' : '') + ((employee.City !='') ? employee.City + ', ' : '') + ((employee.Zip_Code !='') ? employee.Zip_Code +', ' : '') + ' ' + employee.Country + ' hereinafter referred to as &#34;you&#34;.'
                )
            ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Terms and Conditions of Employment</strong>'
                ),
            $('<p/>').html(
                'We are pleased to offer you the terms and conditions of your employment with Apple as follows:'
                )
            ),
        (employee.IR_Contract_Type == 'AHA' || employee.IR_Contract_Type == 'AHA_Manager' || employee.IR_Contract_Type == 'AppleCare' || employee.IR_Contract_Type == 'ASC' || employee.IR_Contract_Type == 'Permanent_General' || employee.IR_Contract_Type == 'RCC' || employee.IR_Contract_Type == 'Siri High Volume') &&
        $('<div class="offerClause">').append(
            $('<H1/>').html('<strong>Position and Commencement</strong>')
            ),
        (employee.IR_Contract_Type == 'AHA' || employee.IR_Contract_Type == 'AHA_Manager' || employee.IR_Contract_Type == 'AppleCare' || employee.IR_Contract_Type == 'ASC' || employee.IR_Contract_Type == 'Permanent_General' || employee.IR_Contract_Type == 'RCC' || employee.IR_Contract_Type == 'Siri High Volume') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Your  employment  as ' + employee.IR_Job_Title + ' on  a  permanent contract shall commence on a date to be confirmed, but no later than ' + employee.Start_Date +  ((employee.Parking == 'Yes') ? ' in Cork, relocating to the US once your VISA/Work Permit has been secured. <br><br> It is a condition of your employment that you are able to relocate to Cupertino (or such other location agreed with you prior to your employment) immediately upon request by Apple or any group company and in any event no later than ' + employee.IR_Parking_US_Start_Date + '. Once you move from Cork to Apple U.S., your employment with Apple will terminate and you will be employed by Apple Inc on the terms and conditions prevailing at the relevant time.' : '.')
                )
            ),
        (employee.IR_Contract_Type == 'AHA_College' || employee.IR_Contract_Type == 'AppleCare_Fixed_Term' || employee.IR_Contract_Type == 'ASC_Fixed_Term' || employee.IR_Contract_Type == 'Fixed_Term_Standard') &&        
        $('<div class="offerClause">').append(
            $('<H1/>').html('<strong>Position and Commencement</strong>')
            ),        
        (employee.IR_Contract_Type == 'AHA_College' || employee.IR_Contract_Type == 'AppleCare_Fixed_Term' || employee.IR_Contract_Type == 'ASC_Fixed_Term' || employee.IR_Contract_Type == 'Fixed_Term_Standard') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'You shall be employed as  ' + employee.IR_Job_Title + ' on a temporary contract. This contract will commence on a date to be confirmed, but no later than ' + employee.Start_Date + ' and expire on ' + employee.End_Date + ' unless terminated earlier in accordance with the termination provisions set out in this agreement based on business need.  The Unfair Dismissals Act 1977-2011 shall not apply to dismissal consisting only of the expiry of the fixed term specified.'
                )
            ),
/*        (employee.IR_Contract_Type == 'AHA_College' || employee.IR_Contract_Type == 'ASC_Fixed_Term' || employee.IR_Contract_Type == 'Finance_Graduate_Program') &&        
        $('<div class="offerClause">').append(
            $('<H1/>').html('<strong>Position and Commencement</strong>')
        ),
        (employee.IR_Contract_Type == 'Fixed_Term_Standard' || employee.IR_Contract_Type == 'AHA_College' || employee.IR_Contract_Type == 'ASC_Fixed_Term' || employee.IR_Contract_Type == 'Finance_Graduate_Program') &&        
        $('<div class="offerClause">').append(
            $('<p/>').html('You shall be employed as ' + employee.IR_Job_Title + ' on a temporary contract. This contract will commence on a date to be confirmed, but no later than ' + employee.Start_Date + ' and expire on ' + employee.End_Date + ' unless terminated earlier in accordance with the termination provisions set out in this agreement based on business need.  The Unfair Dismissals Act 1977-2011 shall not apply to dismissal consisting only of the expiry of the fixed term specified')
            ), */                 
            (employee.IR_Contract_Type == 'Fixed_Term_Fixed_Purpose' || employee.IR_Contract_Type == 'RCC_greater_than_12' || employee.IR_Contract_Type == 'RCC_less_than_12') &&        
            $('<div class="offerClause">').append(
                $('<H1/>').html('<strong>Position and Commencement</strong>')
                ),      
            (employee.IR_Contract_Type == 'Fixed_Term_Fixed_Purpose' || employee.IR_Contract_Type == 'RCC_greater_than_12' || employee.IR_Contract_Type == 'RCC_less_than_12') &&
            $('<div class="offerClause"/>').append(
                $('<p/>').html(
                    'You shall be employed as ' + employee.IR_Job_Title + ' on a temporary contract.  This contract will commence  on a date to be confirmed, but no later than ' + employee.Start_Date + ' and expire on or before ' + employee.End_Date + ', based on ' + ((employee.IR_Contract_Type=='RCC_less_than_12' || employee.IR_Contract_Type=='RCC_greater_than_12') ? 'the requirement to support multiple markets, including ' + employee.EMEIA_Language_supported + ' speaking customers during anticipated workload volume increases commencing in ' + employee.IR_Fiscal_Quarter + ' and any termination prior to the end date shall be effected in accordance with the termination provisions set out in this agreement.   The Unfair Dismissals Act 1977-2011 shall not apply to dismissal consisting only of the expiry of the fixed term or fixed purpose specified.' : employee.EMEA_Fixed_Term_Purpose + ' and any termination prior to the end date shall be effected in accordance with the termination provisions set out in this agreement.   The Unfair Dismissals Act 1977-2011 shall not apply to dismissal consisting only of the expiry of the fixed term or fixed purpose specified.')
                    )
                ),
            (employee.IR_Contract_Type == 'Maternity_Coverage') &&        
            $('<div class="offerClause">').append(
                $('<H1/>').html('<strong>Position and Commencement</strong>')
                ),        
            (employee.IR_Contract_Type == 'Maternity_Coverage') &&
            $('<div class="offerClause"/>').append(
                $('<p/>').html(
                    'You shall be employed as ' + employee.IR_Job_Title +  ' on a temporary contract covering the maternity leave of ' + employee.EMEIA_Employee_on_Maternity_Leave + '. This contract will commence on a date to be confirmed, but no later than ' + employee.Start_Date + ' and  expire  on  or  before ' + employee.End_Date + ' based on business needs, in accordance with the termination provisions set out in this agreement. The Unfair Dismissals Act 1977-2011 shall not apply to dismissal consisting only of the expiry of the fixed term or fixed purpose specified.'
                    )
                ),
            (employee.IR_Contract_Type == 'Finance_Graduate_Program') &&        
            $('<div class="offerClause">').append(
                $('<H1/>').html('Commencement and Position')
                ),       
            (employee.IR_Contract_Type == 'Finance_Graduate_Program') &&
            $('<div class="offerClause"/>').append(
                $('<p/>').html(
                    'You shall be employed as a Finance Graduate on a Graduate Program within the Finance Department. This contract is a temporary contract and will commence on ' + employee.Start_Date + ' and expire on or before ' + employee.End_Date + ' (42 months total) subject to earlier termination in accordance with the termination provisions set out in this agreement.' + '<br>' + 'No previous employment shall count for continuity of employment purposes. The first 6 months of your employment will be a probationary period. This period may be extended at the Company’s discretion but will not exceed 12 months in total. The purpose of this is to provide an opportunity for both you and the Company to assess your suitability for the position. The Company’s disciplinary procedures shall not apply during to your employment during the probationary period.' + '<br>' + 'You will be required to be flexible in this position, and you shall undertake such duties and exercise such powers as the Company shall assign to or vest in you. Such duties may be outside the area of your normal work and may include the performance of duties of such subsidiary companies as the Company may require. Specifically, the Graduate Program will involve a scheduled rotation throughout the different areas of the Company’s Finance organization based at the Company’s offices above, or such other location as the company may reasonably determine.' + '<br>' + ' Your engagement and success in taking and passing the professional qualifications referenced below will form a critical part of the assessment of your performance with the Company. You must comply with the terms of the Finance Graduate Program policy from time to time in force, a copy of which will be provided to you during your induction.' + '<br>' + 'It is hoped that upon successful completion of this fixed-term contract the Company would be able to offer you a job within the Finance Department. However, any such offer of employment will be dependent upon the Company’s final evaluation of your performance and your success in passing the relevant qualification required for any future role with the Company, at its absolute discretion, as well as taking into account the availability of any vacant positions within the Company. There is no guarantee of a future role with the Company following the expiry of this fixed term agreement.' + '<br>' + 'The Unfair Dismissal Act 1977-2011 shall not apply to a dismissal consisting only of the expiry of the term specified in this agreement.' + '<br>' + 'You consent to the transfer of your employment under this agreement to an Affiliated/Associated Employer.'
                    )
                ),             
            (employee.IR_Contract_Type == 'Finance_Graduate_Program') &&
            $('<div class="offerClause"/>').append(
                $('<H1/>').html(
                    'Pre-conditions'
                    )
                ),        
            (employee.IR_Contract_Type == 'Finance_Graduate_Program') &&
            $('<div class="offerClause"/>').append(
                $('<p/>').html(
                    'This agreement and your continued employment with the Company are conditional on the following matters:'
                    ),
                $('<p/>').append(
                    $('<ul/>').append(
                        $('<li/>').html(
                            'you must have (and continue to have) the right to work in Ireland. You must provide copies of all relevant documentation to the Company of your right to work upon request;'
                            ),
                        $('<li/>').html(
                            'you must have successfully obtained a 2:I level in your undergraduate or postgraduate degree [in Ireland] and provide satisfactory evidence of such completion to the Company upon request; and'
                            ),
                        $('<li/>').html(
                            'you must agree to obtain your professional Accountancy exams with one of ACCA, CIMA, ACA or CPA during the term of the agreement.'
                            )
                        )
                    )
                ),       

            $('<div class="offerClause">').append(
                $('<p/>').html(
                    'Your continuous employment with Apple will start on the date you commence work with Apple under these terms and conditions of employment. No employment with any previous employer counts towards your period of previous employment.'
                    )
                ),

            $('<div class="offerClause">').append(
                $('<p/>').html(
                    'You will be required to be flexible in this position, and you shall undertake such duties and exercise such powers as Apple shall assign to or vest in you. Such duties may be outside the area of your normal work and may include the performance of duties of such subsidiary companies as Apple may require. You consent to the transfer of your employment under this agreement to any group company.'
                    )
                ),                           
           $('<div class="offerClause">').append(
                $('<H1/>').html(
                    '<strong>Probation</strong>'
                    )
                ),      
            $('<div class="offerClause">').append(
                $('<p/>').html(
                    'Your employment is initially subject to a six month probationary period which may be extended at Apple’s discretion, but will not, in any case, exceed 12 months. During any probationary period, your Employment may be terminated by either you or Apple giving to the other not less than two weeks’ notice in writing. Thereafter, the period of notice required to be given by either you or by Apple to terminate your Employment is noted under “Termination of Employment”.'
                    )
                ),                           
            
(employee.IR_Contract_Type == 'AHA' || employee.IR_Contract_Type == 'AHA_Manager' || employee.IR_Contract_Type == 'AppleCare' || employee.IR_Contract_Type == 'AHA_College' || employee.IR_Contract_Type == 'AppleCare_Fixed_Term') &&        
            $('<div class="offerClause">').append(
                $('<p/>').html(
                    'During the course of your probationary period, you will undergo training and will be required to complete and pass certain skills tests. It is imperative that you pass these tests as failing to do so may result in you failing your probation and ultimately having your employment terminated with immediate effect and with two weeks’ basic salary as payment in lieu of notice.'
                    )
                ),

            $('<div class="offerClause">').append(
                $('<p/>').html(
                 'Nothing in this Agreement shall prevent Apple from terminating your Employment with immediate effect and making a payment in lieu of two weeks’ basic salary.' 
                )
                ),

          $('<div class="offerClause">').append(
                $('<p/>').html(
                'In some circumstances, extended periods of absence may result in the probation period being paused.'
                 )
                ),


        ////////////////        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Conditions of Employment</strong>'
                ),
            $('<p/>').html(
                'The commencement (and continuation) of your employment with Apple are conditional on the following matters:'
                ),
            $('<p/>').append(
                $('<ul/>').append(
                 (employee.IR_Contract_Type == 'Siri High Volume') &&
                    $('<li/>').html(
                        'As you are aware, your initial period of employment with us will be in training where you will be given further skills/training to help you do a great job. Tests will be administered to you and it is imperative that you pass these, as failing to do so, will result in you failing your probation and ultimately having your contract terminated.'
                       )
                      ),
            $('<p/>').append(
                $('<ul/>').append(
                    $('<li/>').html(
                        'verification satisfactory to Apple of the information you have provided to it during the job application process;'
                        ),
                    $('<li/>').html(
                        'the receipt of any relevant and appropriate background checks and references satisfactory to Apple. These checks and references may take up to three months for us to complete and/or verify;'
                        ),
                    $('<li/>').html(
                        'the receipt of documentary evidence satisfactory to Apple of your right to work in Ireland and your continuing right to work in Ireland. If requested you must provide evidence of your continuing right to work in Ireland at various intervals during your employment and you must tell Apple immediately of any changes in your immigration status which may affect your right to work in Ireland;'
                        ),
                    $('<li/>').html(
                        'being free from any obligations owed to a third party which might prevent you from starting work on the date mentioned above or from properly performing the duties of your position;'
                        ),                    
                    $('<li/>').html(
                        'being medically fit to perform the role that you are being engaged to perform. Further, your continued employment with Apple is conditional on this remaining the case. If you believe either now or at any point in the future that you are not medically fit to perform the role you are engaged to perform, you must notify your manager as soon as reasonably possible. In these circumstances, or in any other circumstances where Apple has reasonable concern regarding your fitness to perform your role, Apple reserves the right to refer you to its Medical Practitioner for advice regarding your fitness for work.'
                        )
                    )
                )
              )
            ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Remuneration</strong>'
                ),
            (employee.IR_Employee_Type == 'Full Time Follow the Sun' || employee.IR_Employee_Type == 'Full Time App Reviewer' || employee.IR_Employee_Type == 'Full Time High Volume' || employee.IR_Employee_Type == 'Full Time IS-T' || employee.IR_Employee_Type == 'Full Time Standard' || employee.IR_Employee_Type == 'Full Time Sunday Premuim') &&
            $('<p/>').html(
                'Your remuneration will be €' + stripDecimals(employee.Salary_Amount) +' gross per annum ' + ((employee.IR_Contract_Type == 'AHA_College' || employee.IR_Contract_Type == 'AppleCare_Fixed_Term' || employee.IR_Contract_Type == 'ASC_Fixed_Term' || employee.IR_Contract_Type == 'Finance_Graduate_Program' || employee.IR_Contract_Type == 'Fixed_Term_Standard' || employee.IR_Contract_Type == 'Fixed_Term_Fixed_Purpose' || employee.IR_Contract_Type == 'Maternity_Coverage' || employee.IR_Contract_Type == 'RCC_greater_than_12' || employee.IR_Contract_Type == 'RCC_less_than_12') ? ' prorated subject to deductions for PAYE, PRSI and Universal Social Charge (USC) or otherwise as required by law or agreed with you.' : ' subject to deductions for PAYE, PRSI and Universal Social Charge (USC) or otherwise as required by law or agreed with you.')
                )
            ),
        (employee.IR_Employee_Type == 'PT_AHA' || employee.IR_Employee_Type == 'PT_ASC') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(
                'Your remuneration will be €' + stripDecimals(employee.Salary_Amount) + ' gross per hour subject to deductions for PAYE, PRSI and Universal Social Charge (USC) or otherwise as required by law or agreed with you.'
                )
            ),
        $('<div class="offerClause">').append(
            $('<p/>').html(
                'Payment will be in accordance with current company payment methods. You may, under Section 23 of the National Minimum Wage Act 2000, request from Apple a written statement of your average hourly rate of pay for any pay reference period falling within the previous 12 months as provided for in that section. In the unlikely event of overpayment, deductions will be made from subsequent salary or exceptionally on an agreed basis.'
                )
            ),
        (employee.EMEIA_Car_cash_Allowance != '') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Car Cash Allowance</strong>'
                ),
            $('<p/>').html(
                'You are entitled to a car cash allowance subject to the terms of the Car Policy from time to time in force, available on the People site. The car cash allowance for your grade is currently €' + stripDecimals(employee.EMEIA_Car_cash_Allowance) + ' annum (subject to the usual statutory deductions mentioned above) which is payable on a monthly pro-rata basis. You should be aware that the car cash allowance amount may decrease as well as increase and any car cash allowance received in a previous year does not confer any entitlement in future years. You are responsible for checking the Car Policy on a regular basis for details of the car cash allowance from time to time in force.'
                )
            ),
        (employee.Sign_on_bonus == 'Sign on') &&        
        $('<div class="offerClause">').append(
            $('<H1/>').html(
                '<strong>Sign-On Bonus</strong>'
                )
            ),                                
        (employee.Sign_on_bonus == 'Sign on') &&        
        $('<div class="offerClause">').append(
            $('<p/>').html(
                'You will receive a gross sign-on bonus of €' + stripDecimals(employee.EMEIA_Sign_on_Bonus_amount) + ' when your employment with Apple begins. This payment will be subject to the usual statutory deductions and will be paid through the first or second payroll run after your employment has commenced. If you voluntarily leave Apple within one year of the payment date, you will be required to repay a proportionate part of such bonus, whereby the amount to be repaid reflects a decrease by 1/12 for each complete month you are in active employment beyond the payment date.'
                )
            ),                                        
        (employee.Sign_on_bonus == 'Sign on Installments') &&        
        $('<div class="offerClause">').append(
            $('<H1/>').html(
                '<strong>Sign-On Bonus</strong>'
                )
            ),                                                
        (employee.Sign_on_bonus == 'Sign on Installments') &&        
        $('<div class="offerClause">').append(
            $('<p/>').html(
                'You will receive a gross sign-on bonus of €' + stripDecimals(employee.Total_Bonus_Amount()) + ' the first €' + stripDecimals(employee.EMEIA_Sign_on_Bonus_amount)  + ' of which is payable when your employment with Apple begins and will be paid through the first or second payroll run after your employment has commenced ( “First Installment”). The second installment of €' + stripDecimals(employee.Second_Bonus) + ' (“the Second Installment”) will be paid in the payroll run 12 months after your employment with Apple begins. These payments will be subject to normal statutory deductions. Payment of the First and Second Installments is dependent on you being in active employment (and not under notice either given or received) at the time of the respective payment dates. If you voluntarily leave Apple within one year of the payment dates of the First and Second Installment, you will be required to pay a proportionate part of such installment, whereby the amount to be repaid reflects a decrease in each installment by 1/12 for each complete month you are in active employment beyond the First or Second Installment payment date, as appropriate.'
                )
            ),                                                       
        (employee.IR_Discretionary_Bonus == 'VP and Director') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>VP & Director Bonus</strong>'
                ),
            $('<p/>').html(
                'You will be eligible for participation in the VP & Director Bonus Plan from time to time in force, subject to the program approval. Details about the ' + employee.Fiscal_Year + ' plan, including eligibility, financial measurements and bonus targets, shall be fixed by the relevant group company for the relevant period as indicated in the plan document and sent to you separately. Any specific plan feature and/or bonus payment shall not continue to apply for any future reference period outside of the financial year as indicated by Apple or any relevant group company. You should be aware that Apple or the relevant group company reserves the right to amend or withdraw the VP & Director Bonus Plan at any time at its discretion meaning that you shall not have any contractual or otherwise acquired (future) right to a bonus payment based on any previous payment or previous plan conditions. You should have no right to a bonus if your employment terminates for any reason or you are under notice of termination (whether given or received) at or prior to the date when the bonus might otherwise be paid.'
                )
            ),
       
((employee.IR_Discretionary_Bonus == 'Discretionary Bonus') && (employee.JobLevel == 'MGR3' || employee.JobLevel == 'ICT6' || employee.JobLevel == 'IC6')) &&
        $('<div class="offerClause"/>').append( 
                $('<H1/>').html(
                    '<strong>Discretionary Bonus</strong>'
            ),
            $('<p/>').html(
'You will be eligible to receive an annual cash bonus with a target bonus amount of 20% of your base salary.  Bonuses are discretionary and awarded based on your individual performance, Apple’s overall performance, and when your employment begins during the fiscal year.  As a result, if a bonus is awarded in the first year of employment typically range between 10% and 20% of base salary. Whether bonuses are paid and the amount and timing of any bonus payments is determined at the sole discretion of Apple.'  
            )
        ),


         ((employee.IR_Discretionary_Bonus == 'Discretionary Bonus') && (employee.JobLevel == 'MGR2' || employee.JobLevel == 'ICT5' || employee.JobLevel == 'IC5')) &&
       $('<div class="offerClause"/>').append( 
                $('<H1/>').html(
                    '<strong>Discretionary Bonus</strong>'
            ),
            $('<p/>').html(
'You will be eligible to receive an annual cash bonus with a target bonus amount of 15% of your base salary.  Bonuses are discretionary and awarded based on your individual performance, Apple’s overall performance, and when your employment begins during the fiscal year.  As a result, if a bonus is awarded in the first year of employment typically range between 5% and 15% of base salary. Whether bonuses are paid and the amount and timing of any bonus payments is determined at the sole discretion of Apple.'
            )
        ),


         ((employee.IR_Discretionary_Bonus == 'Discretionary Bonus') && (employee.JobLevel == 'MGR1' || employee.JobLevel == 'ICT4' || employee.JobLevel == 'IC4')) &&
        $('<div class="offerClause"/>').append( 
                $('<H1/>').html(
                    '<strong>Discretionary Bonus</strong>'
            ),
            $('<p/>').html(
'You will be eligible to receive an annual cash bonus with a target bonus amount of 10% of your base salary.  Bonuses are discretionary and awarded based on your individual performance, Apple’s overall performance, and when your employment begins during the fiscal year.  As a result, if a bonus is awarded in the first year of employment typically range between 5% and 10% of base salary. Whether bonuses are paid and the amount and timing of any bonus payments is determined at the sole discretion of Apple.'
            )
        ),


        ((employee.IR_Discretionary_Bonus == 'Discretionary Bonus') && (employee.JobLevel == 'IC3' || employee.JobLevel == 'ICT3' || employee.JobLevel == 'SUP' || employee.JobLevel == 'SUP2')) &&
        $('<div class="offerClause"/>').append( 
                $('<H1/>').html(
                    '<strong>Discretionary Bonus</strong>'
            ),
            $('<p/>').html(
                'You may be eligible to receive a discretionary bonus based on your individual performance and ' + 'Apple' + '&#39;s overall performance. Whether a bonus is paid and the amount and timing of the bonus payment is at the sole discretion of ' + 'Apple' + '.'
            )
        ),


        (employee.IR_Commission == 'Standard') && //PSALUDARES
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Sales Incentive Compensation Plan</strong>'
                ),
            $('<p/>').html(
                'In your capacity of  ' + employee.IR_Job_Title + ', you will be eligible for Apple’s Sales Incentive Compensation Plan in force from time to time. Details of the Incentive Compensation Plan will be communicated to you separately by your Manager.'    
                ),
            $('<p/>').html(
                'Apple reserves the right to deduct from your salary or from other payments due to you any amount from time to time owing from you to Apple or any Group Company.'    
                )

            ),

        (employee.IR_Commission == 'Sales30') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Sales Incentive Compensation Plan</strong>'
                ),
            $('<p/>').html(
                'You will be eligible for Apple’s Sales Incentive Compensation Plan in place for the year in which your employment commences. The commission at 100% of objectives met, equals 30% of On Target Earnings, or approximately 43% of the base salary actually paid to you during the fiscal year. Details of the Incentive Compensation Plan will be communicated to you separately by your Manager. For the first three (3) months of your employment,  we guarantee your variable income for 100% draw maximum.'    
                ),
            $('<p/>').html(
                'If your employment commences after the 16th day of the month, your entitlement to participate in the Sales Incentive Compensation Plan (including the guarantee draw referenced above) will not commence until the following fiscal month. In accordance with the terms of our Sales Incentive Compensation Plan, any payments due to you in respect of incentive compensation will usually be payable in the second monthly payroll following the month in which the commission is deemed to have been earned. '    
                )
            ),

        (employee.IR_Commission == 'Sales40') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Sales Incentive Compensation Plan</strong>'
                ),
            $('<p/>').html(
                'You will be eligible for Apple’s Sales Incentive Compensation Plan in place for the year in which your employment commences. The commission at 100% of objectives met, equals 40% of On Target Earnings, or approximately 67% of the base salary actually paid to you during the fiscal year. Details of the Incentive Compensation Plan will be communicated to you separately by your Manager. For the first three (3) months of your employment,  we guarantee your variable income for 100% draw maximum.  '    
                ),
            $('<p/>').html(
                'If your employment commences after the 16th day of the month, your entitlement to participate in the Sales Incentive Compensation Plan (including the guarantee draw referenced above) will not commence until the following fiscal month. In accordance with the terms of our Sales Incentive Compensation Plan, any payments due to you in respect of incentive compensation will usually be payable in the second monthly payroll following the month in which the commission is deemed to have been earned. '    
                )
            ),
        (employee.Relocation=='GM-Domestic' || employee.Relocation=='GM New Hire'  || employee.Relocation=='GM Transfer') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Relocation</strong>'
                ),
            $('<p/>').html(
                'Our relocation team will be in contact with you in regards to your Relocation benefit.'
                )
            ),
        (employee.Relocation == 'NonGM') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Relocation</strong>'
                ),            
            $('<p/>').html(
                'In order to make your transition as comfortable as possible for you, Apple will assist your relocation by contributing a maximum of €' + stripDecimals(employee.Relocation_Amount) + ' towards your relocation costs. These expenses should relate to costs incurred by you during your first two months with Apple. You must claim your relocation within 6 months from the date of your contract. If you leave Apple’s employment within 1 year of starting employment, you will be obliged to reimburse Apple any monies paid to you in this respect. Apple will provide you with your flight ticket (economy class) from your country to take up your position with Apple.'
                )
            ),
        (employee.Relocation == 'AppleCare') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Relocation</strong>'
                ),            
            $('<p/>').html(
                'The details of your relocation benefits are described in a separate relocation document. If you resign your employment with Apple, you are no longer entitled to any of the relocation assistance provided within that document from the date of your resignation. Further, you agree to pay Apple the costs of relocation benefits provided to you if your resignation occurs within one year of the commencement of your employment. By signing your employment contract, you agree and authorize Apple to deduct from any payments due to you, as well as your final pay check, the amount owed to Apple. If your final paycheck is not sufficient to cover the amount owed, you agree to pay the balance remaining directly to Apple.'
                )
            ),
        (employee.Relocation == 'RCC') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Relocation</strong>'
                ),            
            $('<p/>').html(
                'To allow your transition to be as comfortable as possible for you, Apple will assist with your relocation to Cork, Ireland by reimbursing up to a maximum of €' + stripDecimals(employee.Relocation_Amount) + ' towards your relocation costs. Expenses will be reimbursed via our Relocation Provider on provision of receipts. These expenses should relate to relocation costs based on a pre-determined list of reimbursable items.'
                )
            ),
        (employee.Relocation == 'RCC') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'If you leave Apple employment within ' + ((employee.IR_Contract_Type=='RCC_greater_than_12') ? ' twelve (12) ' : '  six (6) months') + ' of the commencement date of your contract with Apple in Cork, you will be obliged to reimburse Apple any monies given to you in this respect. You must claim your relocation expenses within six (6) months from the start date of your contract.'
                )
            ),
        (employee.Relocation == 'RCC') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Apple will additionally provide you with a one-way flight ticket (economy class) from your current location to Cork, Ireland.'
                )
            ),
        (employee.Relocation == 'RCC') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'By signing this agreement, you agree and authorise Apple to deduct from your pay-check, including your final pay-check, any amount owed to Apple under this clause in the event of you leaving your employment. If your final pay-check is not sufficient to cover the amount owed, you agree to pay the balance remaining directly with Apple.'
                )
            ),                                         
/*
        (employee.Relocation == 'RCC') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'To allow your transition to be as comfortable as possible for you, Apple will assist with your relocation to Cork, Ireland by reimbursing up to a maximum of € ' + employee.Relocation_Amount + ' (Euros) towards your relocation costs. Expenses will be reimbursed via our Relocation Provider on provision of receipts. These expenses should relate to relocation costs based on a pre-determined list of reimbursable items.'
            )
        ),    
        (employee.Relocation == 'RCC') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'If you leave Apple employment within ' + ((employee.Offer_Type==RCC_greater_than_12) ? ' twelve (12) ' : '  six (6) months') + ' of the commencement date of your fixed term contract with Apple in Cork, you will be obliged to reimburse Apple any monies given to you in this respect. You must claim your relocation expenses within six (6) months from the start date of your contract.'
            )
        ),            
        (employee.Relocation == 'RCC') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Apple will additionally provide you with a one-way flight ticket (economy class) from your current location to Cork, Ireland.'
            )
        ),
        (employee.Relocation == 'RCC') &&
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'By signing this agreement, you agree and authorise Apple to deduct from your pay-check, including your final pay-check, any amount owed to Apple under this clause in the event of you leaving your employment. If your final pay-check is not sufficient to cover the amount owed, you agree to pay the balance remaining directly with Apple.'
            )                                    
        ),
        */
//////////////

$('<div class="offerClause"/>').append(
    $('<H1/>').html(
        '<strong>Benefits</strong>'
        ),
    $('<p/>').html(
        'Apple has a comprehensive benefits program, some elements of which are outlined below. Apple reserves the right to change, amend or withdraw these benefits at any time. For further details visit Apple&#39;s People site which will be available to you once you start.'
        ),
    $('<p/>').html(
        '<strong>Health Cover:</strong> You will automatically be enrolled in the relevant medical insurance plan on the commencement of your employment.'
        ),
    $('<p/>').html(
        '<strong>Life Assurance:</strong> You will be provided with life insurance cover of 4 times your annual salary.'
        ),
    $('<p/>').html(
        '<strong>Pension Scheme:</strong> You will be eligible to participate in the Apple Pension Plan from your start date. As a convenience to you, if you do not elect a contribution amount within approximately 30 days after your commencement of employment you will be automatically enrolled in the Pension Plan with a contribution rate of 7% of your eligible pay and Apple will match your contribution to a maximum of 7% of eligible pay. All contributions to the Pension Plan will be invested in an appropriate lifestyle fund.'
        ),
    $('<p/>').html(
        'If you do not wish to be enrolled in the Pension Plan or if you wish to contribute at a rate other than 7% of your eligible pay you may elect to do so within one month minus one day of the commencement of your employment by visiting the pension portal provided by Irish Life, the plan administrator. You can, at any time after you have been enrolled in the Pension Plan, opt out completely, or alter the rate at which you contribute and/or the manner in which your contributions are invested.'
        ),
    $('<p/>').html(
        'Your participation in the Pension Plan is subject to the trust deed and the Pension Plan rules as may be amended from time to time. Apple reserves the right to amend or withdraw the Pension Plan (including amending its employer contributions) or your membership of it at any time.'
        ),
    $('<p/>').html(
        '<strong>Sick Pay Scheme:</strong> Apple operates a Sick Pay Scheme. Rules of eligibility and benefits are available on the People site.'
        )
    ),
$('<div class="offerClause"/>').append(
    (employee.IR_Location == 'Hollyhill' || employee.IR_Location == 'Lavitts Quay' || employee.IR_Location == 'Model Farm Road') &&
    $('<H1/>').html(
        '<strong>Place of Work</strong>'
        ),
    (employee.IR_Location == 'Hollyhill' || employee.IR_Location == 'Lavitts Quay' || employee.IR_Location == 'Model Farm Road') &&
    $('<p/>').html(
        'You will normally be required to work at Apple premises at either Hollyhill, Lavitt&#39;s Quay or any other location in Cork as Apple may from time to time determine. You may also be required, from time to time, to work at the premises of such group company or organisations as Apple may require. You will be given as much notice of any such change of place of work as is reasonably practicable.'
        ),
    (employee.IR_Location == 'Hollyhill' || employee.IR_Location == 'Lavitts Quay' || employee.IR_Location == 'Model Farm Road') &&
    $('<p/>').html(
        'You will commence work at the ' + employee.IR_Location + ' premises.'
        ),
    (employee.IR_Location == 'Home Working') &&
    $('<H1/>').html(
        '<strong>Place of Work</strong>'
        ),
    (employee.IR_Location == 'Home Working') &&
    $('<p/>').html(
        'You will normally be required to work from your home address from time to time, which is currently ' +  ((employee.Address_1 !='') ? employee.Address_1 + ', ' : '') + ((employee.Address_2 !='') ? employee.Address_2 + ', ' : '') + ((employee.Address_3 !='') ? employee.Address_3 + ', ' : '') + ((employee.City !='') ? employee.City + ', ' : '') +  ((employee.Zip_Code !='') ? employee.Zip_Code +', ' : '') + employee.Country + '. You may be required to visit and work at such other locations and for such times as Apple considers necessary for the proper performance of your duties. You will be given as much notice of any such change of place of work as is reasonably practicable. You must inform the People team in writing of any change in your address and update this on MyPage. You confirm that you are not in breach of any covenant or agreement in doing work at your home address and that you shall not do, cause or permit any act or omission which will invalidate the insurance policy covering any equipment provided to you by Apple for use during your employment (&#34;Apple Equipment&#34;). You consent to Apple&#39;s representatives, at reasonable times and on reasonable notice, entering your address to:'
        ),
    (employee.IR_Location == 'Home Working') &&
    $('<p/>').append(
        $('<ul/>').append(
            $('<li/>').html(
                'install, inspect, replace, repair, maintain or service the Apple equipment during your employment;'
                ),
            $('<li/>').html(
                'carry out any health and safety risk assessments of the Apple Equipment and your workstation where requested by Apple during your employment; and'
                ),
            $('<li/>').html(
                'recover the Apple equipment on or after the termination of your employment or pending any disciplinary investigation.'
                )
            )
        )
    ),
$('<div class="offerClause"/>').append(
    (employee.IR_Employee_Type == 'Full Time Standard') &&
    $('<H1/>').html(
        '<strong>Hours of Work</strong>'
        ),
    (employee.IR_Employee_Type == 'Full Time Standard') &&
    $('<p/>').html(
        'While your normal working week will be at least 39 hours over 5 days, your working hours may vary in line with business needs. Currently we expect your working hours to be from 08.00.a.m. to 4.30p.m. Monday to Thursday and 08.00a.m to 3.00p.m. on Fridays with an unpaid lunch break. These core hours may be amended in agreement with your line manager. You will however be required to work such other hours as may be necessary to perform your duties and deliver your agreed objectives.'
        ),
    (employee.IR_Employee_Type == 'Full Time Standard') &&
    $('<p/>').html(
        'Where you are required to work overtime, your manager will give you further direction in this regard.'
        ),
    (employee.IR_Employee_Type == 'Full Time App Reviewer') &&
    $('<H1/>').html(
        '<strong>Hours of Work</strong>'
        ),            
    (employee.IR_Employee_Type == 'Full Time App Reviewer') &&
    $('<p/>').html(
        'While your normal working week will be at least 39 hours over 5 days, your working hours may vary in line with business needs. These core hours may be amended in agreement with your line manager. You will however be required to work such other hours as may be necessary to perform your duties and deliver your agreed objectives.Your working days for each week will be confirmed in advance by your manager.'
       ),
    (employee.IR_Employee_Type == 'Full Time High Volume') &&
    $('<H1/>').html(
        '<strong>Hours of Work</strong>'
        ),            
    (employee.IR_Employee_Type == 'Full Time High Volume') &&
    $('<p/>').html(
        'While your normal working week will be 39 hours (8 hours on 4 days, 7 hours on 1 day), your roster may vary in line with business needs. As you are aware, the Contact Centre will be open 365 days per year. At present the normal operational hours are from 7.00 a.m. until 8.30 p.m. Monday to Sunday. However, Apple reserves the right to operate on a 24 hour basis and to adjust your roster and normal daily/weekly hours accordingly. Your manager will give you directions in this regard.'
        ),
    (employee.IR_Employee_Type == 'PT_AHA') &&
    $('<H1/>').html(
        '<strong>Hours of Work</strong>'
        ),
    (employee.IR_Employee_Type == 'PT_AHA') &&
    $('<p/>').html(
        'While your normal working week will be minimum of <strong>20</strong> hours, this may increase to 39 hours as your roster may vary in line with business needs. As you are aware, the Contact Centre will be open 365 days per year. At present the normal working hours are from 7.00 a.m. until 8.30 p.m. Monday to Sunday. However, Apple reserves the right to operate on a 24 hour basis and to adjust your roster accordingly. Your manager will give you directions in this regard. You may be required to work overtime (beyond 39 hours per week) from time to time.'
        ),
    (employee.IR_Employee_Type == 'Full Time IS-T') &&
    $('<H1/>').html(
        '<strong>Hours of Work</strong>'
        ),
    (employee.IR_Employee_Type == 'Full Time IS-T') &&
    $('<p/>').html(
        'The core hours of work are no less than 39 hours per week, normally from 8.00am to 4.30pm Monday to Thursday, 8.00am to 3.00pm Friday, with an unpaid lunch break of 1 hour. However, given the nature of your work, Apple reserves the right to change these core hours of work and require you to work different days or times as required to meet business needs. In any event you are required to work such hours as may be necessary to perform your duties and deliver your agreed objectives.'
        ),
    (employee.IR_Employee_Type == 'Full Time Follow the Sun') &&
    $('<H1/>').html(
        '<strong>Hours of Work</strong>'
        ),            
    (employee.IR_Employee_Type == 'Full Time Follow the Sun') &&
    $('<p/>').html(
        'While your normal working week will be 39 hours, your roster may vary in line with business needs. As you are aware, the iTunes Moderation team operate a follow the sun model. At present the normal working hours are from 8.00am and 4.30pm Monday to Sunday, with 2 working patterns of Sunday to Thursday and Tuesday to Saturday. However, the Company reserves the right to operate on a 24 hour/ 365 day basis and to adjust your roster accordingly which may mean that your hours of work and/or days of work may change upon giving you reasonable notice as determined by the Company. Your manager will give you directions in this regard.'
        ),
   (employee.IR_Employee_Type == 'PT_ASC' && employee.IR_Contract_Type == 'ASC' || employee.IR_Contract_Type == 'ASC_Fixed_Term') &&
    $('<H1/>').html(
        '<strong>Hours of Work</strong>'
        ),
    (employee.IR_Employee_Type == 'PT_ASC' && employee.IR_Contract_Type == 'ASC' || employee.IR_Contract_Type == 'ASC_Fixed_Term') &&
    $('<p/>').html(
        'The core hours of work are no less than 24 hours from Thursday through to Monday, with an unpaid lunch break of 1 hour.'
        ),
    (employee.IR_Employee_Type == 'Full Time Sunday Premuim') &&
    $('<H1/>').html(
        '<strong>Hours of Work</strong>'
        ),            
    (employee.IR_Employee_Type == 'Full Time Sunday Premuim') &&
    $('<p/>').html(
        'While your normal working week will be 39 hours over 5 days, your working hours may vary in line with business needs. Currently we expect your working hours to be from 10 a.m. to 6.30 p.m. Monday to Friday. Flexibility to work overtime is a requirement for this role. Your manager will give you further direction in this regard. Note that Sunday Premium is built into salary.'
        ),

    $('<p/>').html(
        'Hours of work must be recorded by swiping or logging in and out daily. You will be entitled to daily and weekly rest breaks in accordance with the Organisation of Working Time Act 1997.'
        ),
    (employee.IR_Contract_Type == 'AHA' || employee.IR_Contract_Type == 'AHA_Manager' || employee.IR_Contract_Type == 'AHA_College' || employee.IR_Contract_Type == 'AppleCare_Fixed_Term') &&
    $('<p/>').html(
        'Your daily and weekly rest breaks will be made known to you by your manager. If for any reason you are unable to avail of these rest periods, you may notify your immediate supervisor in writing of this fact, and the reason for the failure to avail of such rest periods, within one week. Upon receipt of such notification, Apple will arrange for you to take such rest period at the earliest opportunity.'
        )
    ),
$('<div class="offerClause"/>').append(
    $('<H1/>').html(
        '<strong>Holidays and Holiday Pay</strong>'
        ),
    $('<p/>').html(
        'Your  holiday  entitlement  shall  be  in  accordance  with  the  terms  of  The  Organisation  of  Working  Time  Act, 1997.  Apple’s holiday year runs from 1st January to 31st December. Your paid holidays will be 21 working days per year (prorated  for  less  than  12  months  of  service).  Holiday  pay  will  be  based  on  your  current  normal  weekly  rate  of remuneration. All holidays are subject to advance approval by management.'
        ),
    $('<p/>').html(
        'On  notice  of  termination  of  this  contract,  any  paid  holidays  already  taken  exceeding  the  accrued  holiday entitlement on the date of termination will be deducted from subsequent salary payments.'
        )
    ),
$('<div class="offerClause"/>').append(
    $('<H1/>').html(
        '<strong>Public Holidays</strong>'
        ),
    $('<p/>').html(
        'Your entitlement to leave for Public Holidays shall be in accordance with the terms of Part III of the Organisation of Working Time Act, 1997. This is currently 9 days.'
        )
    ),
$('<div class="offerClause"/>').append(
    $('<H1/>').html(
        '<strong>Absence</strong>'
        ),
    $('<p/>').html(
        'In the event of absence from work, you are required to contact your manager by 10:30 a.m. on the first day of absence. A certificate from a qualified Medical Practitioner must be submitted on the third day of a continuous absence and on a weekly basis thereafter. Apple reserves the right to have you examined by its own Medical Practitioner. Any specific departmental variations to this process will be communicated to you by your manager.'
        )
    ),
$('<div class="offerClause"/>').append(
    $('<H1/>').html(
        '<strong>Disciplinary and Grievance Procedures</strong>'
        ),
    $('<p/>').html(
        'Apple&#39;s disciplinary and grievance procedures are set out on Apple&#39;s People site.'
        )
    ),
$('<div class="offerClause"/>').append(
    $('<H1/>').html(
        '<strong>Termination of Employment</strong>'
        ),
    (employee.Termination == '1 Month') &&
    $('<p/>').html(
     'In the event of termination of your employment, following the conclusion of the probationary period, you are required to give Apple, and Apple undertakes to give you 4 weeks notice in writing or, if higher, such notice as may be required by statute.'
     ), 
    (employee.Termination == '3 Months') &&
    $('<p/>').html(
        'In the event of termination of your employment, following the conclusion of the probationary period, you are required to give Apple, and Apple undertakes to give you three months&#39; notice in writing.'
        ),
    (employee.Termination == 'Fixed Term') &&
    $('<p/>').html(
        'Your employment will terminate automatically on ' + employee.End_Date + ' without the need for prior notice. Notwithstanding the definite term of your employment with Apple, your employment may be terminated by either you or Apple by giving to the other ' + employee.EMEIA_Fixed_term_notice_weeks + ' notice in writing or, if higher, such notice as may be required by statute.'
        ),
    $('<p/>').html(
        'Nothing in these terms and conditions shall prevent Apple from terminating your employment summarily without notice or payment in lieu of notice in the event of any serious breach or repeated breaches of your employment or in the event of any act or acts of gross misconduct by you. Furthermore, Apple may, at its sole discretion, determine to pay you in lieu of base salary as at the date of termination (less appropriate statutory deductions) for the notice period (or any part of it) to which you would have been entitled under this contract. For the avoidance of doubt, any payment in lieu of notice will not include any element in relation to any payment in respect of holiday entitlement that would have accrued during the period for which the payment in lieu is made.'
        ),
    $('<p/>').html(
        'Apple’s rights to terminate the employment apply even when such termination would or might cause your to forfeit any entitlement to sick pay, permanent health insurance or other benefits.'
        ),
    $('<p/>').html(
        'Apple may at any time during your notice period require you to remain away from its premises; to work from home; to carry out special projects outside the normal scope of your duties; not to contact clients, customers or suppliers; not to contact any other employee without Apple’s permission and not to carry out some or all of your normal duties. Apple may appoint another person to carry out any of your duties at such times. If Apple exercises this right, you will receive the salary and benefits to which you are entitled and you must continue to comply with your duties under your contract of employment.'
        ),
    $('<p/>').html(
        'Upon termination of your employment, you shall immediately deliver up to Apple all correspondence, documents, memoranda, papers, credit cards, passes, mobile telephones and other property of Apple which may be in your possession or under your control by reason of your employment and you will not take copies of the same.'
        )
    ),
(employee.Post_Termination_Restrictions == 'Yes') &&
$('<div class="offerClause"/>').append(
    $('<H1/>').html(
        '<strong>Post-Termination Restrictions</strong>'
        ),
    $('<p/>').html(
        'You will not, without prior written consent from Apple, within the Restricted Area:'
        ),
    $('<p/>').append(
        $('<ul/>').append(
            $('<li/>').html(
                'for a period of 6 months after the date your employment terminates (the &#34;Termination Date&#34;) directly or indirectly encourage or try to encourage any Client (or any Prospective Client) with whom you had material dealings on behalf of Apple during the 12 months prior to the Termination Date, either not to give custom or to take custom away from Apple or any Group Company;'
                ),
            $('<li/>').html(
                'for a period of 6 months after the Termination Date directly or indirectly solicit or try to solicit the custom of any Client (or any Prospective Client) with whom you had material dealings on behalf of Apple during the 12 months prior to the Termination Date, with a view to supplying that Client or Prospective Client with Restricted Products or Services;'
                ),
            $('<li/>').html(
                'for a period of 6 months after the Termination Date directly or indirectly entice away or try to entice away from Apple or any Group Company any Key Person; or employ or enter into partnership or association with or retain the services of any Key Person or offer to do so.'
                )
            )
        )
    ),
 (employee.Post_Termination_Restrictions == 'Yes') &&
$('<div class="offerClause"/>').append(
           $('<p/>').html(
                'For the purposes of this Agreement, the following definitions shall apply:'
            ),
            $('<p/>').append(
                $('<ul/>').append(
                    $('<li/>').html(
                        '&#34;Client&#34; means any person, firm, company or other organisation whatsoever to whom Apple or any Group Company has supplied goods or services.'
                    ),
                    $('<li/>').html(
                        '&#34;Prospective Client&#34; means any person who at any time during the period of 12 months immediately before the Termination Date had discussions with Apple or any Group Company or was involved in a pitch, tender, presentation, negotiation or was invited to enter into or participate in any discussion, pitch, tender, presentation or negotiation, with Apple or any Group Company, with a view to receiving products or services from Apple or any Group Company, in which you were materially involved, for which you had responsibilities or about which you obtained or otherwise received Proprietary Information;'
                    ),
                    $('<li/>').append(
                        $('<span/>').html(
                            '&#34;Key Person&#34; means any individual who for at least six months prior to the Termination Date and on the Termination Date was engaged or employed as an employee, director or consultant by Apple or any Group Company (other than an individual in business on his/her own account providing professional independent advisory services to Apple or any Group Company), with whom you worked to a material extent or for whom you had managerial responsibility at any time during that period, and'
                        ),
                        $('<ul/>').append(
                            $('<li/>').append(
                                'who had material contact with Clients or suppliers of Apple or any Group Company in performing his or her duties of employment or engagement; and/or'
                            ),
                            $('<li/>').append(
                                'who was a member of the management team of Apple or any Group Company; and/or'
                            ),
                            $('<li/>').append(
                                'who was a member of the same department or team as you of Apple or any Group Company.'
                            )
                        )
                      )
                    ),
                    $('<p/>').append(
                $('<ul/>').append(
               $('<li/>').html(
                        '&#34;Restricted Area&#34; means the UK, or any other country where, on the Termination Date, Apple and/or any Group Company provides, develops, sells, supplies, manufactures or researches its products or services and with which country you were involved to a material extent during the period of 12 months immediately before the Termination Date where Apple or any Group Company is intending within 3 months following the Termination Date to provide, develop, sell, manufacture or market its products or services and where you have knowledge of such intention.'
                    ),
                    $('<li/>').html(
                        '&#34;Restricted Products or Services&#34; means any products or services which compete with or are of the same or similar kind as any products or services provided, researched, developed, manufactured, supplied or marketed by Apple or any Group Company in the ordinary course of their business during the period of 12 months immediately before the Termination Date and in respect of which you were directly concerned, were materially involved or had responsibility during your employment by Apple, or about which you obtained or otherwise received Confidential Information.'
                    )
                    )
                  )
                )
        ),
$('<div class="offerClause"/>').append(
    $('<H1/>').html(
        '<strong>Use of Company Equipment</strong>'
        ),
    $('<p/>').html(
        'Apple reserves the right to review and monitor any Apple equipment, telephone, networks, mail, or electronic systems, whether used for business or personal purposes, unless and to the extent that such review and monitoring is otherwise prohibited or limited by applicable law.'
        )
    ),
$('<div class="offerClause"/>').append(
    $('<H1/>').html(
        '<strong>Search</strong>'
        ),
    $('<p/>').html(
        'Apple reserves the right to search employees on entering or leaving it&#39;s premises, as well as any package, bag, motor vehicle or other items which are brought by employees on to Apple&#39;s premises.'
        )
    ),
$('<div class="offerClause"/>').append(
    $('<H1/>').html(
        '<strong>Policies and Procedures</strong>'
        ),
    $('<p/>').html(
        'These terms and conditions are offered subject to acceptance of and adherence to all Company policies and procedures. Apple expects that you familiarise yourself and comply with its policies, procedures, and rules. Copies of Apple&#39;s key policies including ' + '<a href="https://apple-redcarpet.silkroad.com/eprise/main/SiteGen/Contract_English/Content/Uploads/Documents/document_library/Policies_and_Guidelines/Apple_Business_Conduct_Policy.pdf" target="_blank">' + 'Business Conduct Policy,' + '</a> ' + '<a href="https://apple-redcarpet.silkroad.com/eprise/main/SiteGen/Contract_English/Content/Uploads/Documents/document_library/Policies_and_Guidelines/Confidentiality_and_Intellectual_Property_Agreement.pdf" target="_blank">' + 'Confidentiality and Intellectual Property Agreement,' + '</a>' + ' and Email Policy will be sent to you with these terms. These and other Apple policies are non-contractual and may be amended or replaced from time to time, and new policies may be introduced. You will be notified of any such changes. In particular, the Business Conduct Policy (along with other policies) sets out important standards of behaviour, which are expected of you as an Apple employee.'
        ),
    (employee.IR_Location == 'Home Working') &&
    $('<p/>').html(
        'You must comply with all Apple policies relevant to your home-working include, but not limited to, the following policies: Employee Use of Electronic Systems and Communications, Home Office Ergonomic Guidelines, Property Protection Guidelines, Securing Your Technology at Work and Home, Information Security, Personnel Information Privacy, Travel, Home Office and Expense Reimbursement or any other applicable policies for your particular department.'
        ),
    $('<p/>').html(
        'Copies of the latest policies will be available on the People site and you should check the Apple People site on a regular basis (at least once per month) throughout your employment with Apple.'
        )
    ),
$('<div class="offerClause"/>').append(
    $('<H1/>').html(
        '<strong>Proprietary Information, Intellectual Property and Inventions</strong>'
        ),
    $('<p/>').html(
        'Your employment by Apple creates a relationship of confidence and trust with respect to any information of a confidential, proprietary, and secret nature that may be disclosed to you or otherwise learned by you in the course of your employment.'
        ),
    $('<p/>').html(
        'Furthermore, you agree that during the course of your employment, your job functions may require you to make, conceive, or improve (solely by you or jointly with others) inventions, ideas, discoveries, designs, plans, manufacturing methods, formulas, computer programs, databases, processes, techniques, original works of authorship, documentation, and other materials.'
        ),
    $('<p/>').html(
        'By signing this Agreement, you hereby agree to comply with the terms of the Confidentiality and Intellectual Property Agreement appended to this Agreement.'
        ),
    $('<p/>').html(
        'You authorize Apple to notify others, including customers of Apple, and any future employers you may have, of the terms of this Agreement, the Confidentiality and Intellectual Property Agreement incorporated into this Agreement, and your responsibilities under this Agreement.'
        ),
    $('<p/>').html(
        'The above provisions in this section remain in force notwithstanding termination of your employment.'
        )    
    ),
$('<div class="offerClause"/>').append(
    $('<H1/>').html(
        '<strong>Data Protection</strong>'
        ),
    $('<p/>').html(
        'Apple may from time to time collect and retain personal data including sensitive personal data about you from which you may be identified. While much of your personal data will come directly from you, there will be circumstances where personal data from other sources will be collected and retained by Apple.'
        ),
    $('<p/>').html(
        'By signing this letter, you hereby confirm that you have read and understood the terms of the Employee Privacy Notice appended to this letter and which must be signed and returned to Apple.'
        )    
    ),
$('<div class="offerClause"/>').append(
    $('<H1/>').html(
        '<strong>Collective Agreement</strong>'
        ),
    $('<p/>').html(
        'There are no collective agreements affecting your employment.'
        ) 
    ),
$('<div class="offerClause"/>').append(
    $('<H1/>').html(
        '<strong>Changes to your terms of employment</strong>'
        ),
    $('<p/>').html(
        'Apple reserves the right to make reasonable changes to any of your terms of employment from time to time. At least one month&#39;s written notice will be given to you of any material changes. You will be deemed to have accepted such change unless you notify Apple of any valid objection in writing before the expiry of the one month period.'
        ),
    $('<p/>').html(
        'This letter contains a statement of the particulars of your employment for the purposes of section 3 of the Terms of Employment (Information) Acts 1994-2001.'
        ),
    $('<p/>').html(
        'I sincerely hope you will find your experience with Apple rewarding, interesting, and a source of real satisfaction.'
        )
    ),
$('<div class="offerClause">').append(
    $('<p/>').html(
        ' '
        )
    ),
$('<div class="offerClause">').append(
    $('<p/>').html(
        'I accept and agree to all the above terms and conditions of my employment.'
        )
    ),
$('<div class="offerClause">').append(
    $('<p/>').html(
        ' '
        )
    )
       // end append
    );

    $("#markup2").html("").append(
        // OfferClause 2
        $('<div class="offerClause2">').append(
            (employee.Entity == 'ADI') &&
            $('<p/>').html(
                'Apple Distribution International Ltd., Hollyhill Industrial Estate, Hollyhill, Cork, Ireland<br>Employer Tax Registration Number 9700053D'
            ),
            (employee.Entity == 'AO') &&
            $('<p/>').html(
                'Apple Operations Ltd., Hollyhill Industrial Estate, Hollyhill, Cork, Ireland<br>Employer Tax Registration Number 9777182W'
            ),
            (employee.Entity == 'AOE') &&
            $('<p/>').html(
                'Apple Operations Europe Ltd., Hollyhill Industrial Estate, Hollyhill, Cork, Ireland<br>Employer Tax Registration Number 4576013J'
            )
        )
        // end append
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
function fnFormatNumeric(total){
 var number = total.replace(/[^0-9\.]+/g,"");
 var bonusInst = number *.5      
 return formatCurrency(bonusInst);
}

function stripDecimals(number) {
    let idx = number.indexOf(".");
    if (idx < 0) {
        return number;
    }
    return number.substring(0, idx);
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
    } else{
        makeOfferLetter('hidden_pg','offerClause');
        makeOfferLetter('hidden_pg2','offerClause2');

    }
});
