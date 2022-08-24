// WD NZ Contract
function concatAddr() {
  var addr = '';
  var addrFull = [];
  if (!arguments.length) {
    return addr;
  }
  for (i = 0; i < arguments.length; i++) {
    if(arguments[i]) {
      addrFull.push(arguments[i]);
    }
  }
  if (addrFull.length <= 1) {
    addr += addrFull[0];
    return addr;
  }
  for (j = 0; j < addrFull.length; j++) {
    addr += addrFull[j];
    if (j < addrFull.length) {
      addr += ', ';
    }
  }
  return addr.slice(0, -2);
}

function fnView() {
    $("#markup").html("").append(
        // Company Logo
        $('<div class="col-lg-12"/>').append(
            $('<div class="offerClause"/>').append(
                $('<div id="srt_eform_logo" class="text-right"/>').html('<img src=' + company.Logo + '>')
            )
        ),
        // OfferClause 1
        $('<div class="float-left"/>').append(
            $('<div class="offerClause"/>').append(
                $('<span/>').append(
                    $('<p/>').html(
                        fnConvertFullDate2(new Date())
                    )
                 ),
                $('<p/>').append(
                    
                    $('<span/>').html(
                        employee.First_Name + ' ' + employee.Last_Name +  '<br>'
                    ),
                    
                    $('<span/>').html(employee.Address_1 + '<br>'),
                    $('<span/>').html((employee.Address_2) ? employee.Address_2 + '<br>' : ''),
                    $('<span/>').html(employee.City + ' '),
                    $('<span/>').html(employee.Postal_Code + '<br>')
  
                )
            )
        ),
        $('<div class="offerClause">').append(
 $('<p/>').html(
                ' '
            ),
            $('<p/>').html("Dear " + employee.First_Name + ",")
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(
                ' '
            )
        ),
         $('<div class="offerClause">').append(
            $('<p/>').html(
                'Congratulations! ' + employee.Entity + ' <strong>(Apple)</strong> is pleased to offer you employment with Apple based on the terms and conditions set out below.'
            )
        ),
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Position</strong>'
            ),
            $('<p/>').html(
                'You will be employed in the position of ' + employee.Job_Title + ' or such other positions as subsequently agreed (<strong>Position</strong>).  You will report to ' + employee.Hiring_Manager  + ' or such other person nominated by Apple from time to time.'
            ),
            $('<p/>').html(
                'Unless otherwise replaced or varied by written agreement between you and Apple, the terms of this agreement will apply to your employment in the Position and all future positions and duties held by you.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Duties</strong><br>'
            ),
            $('<p/>').html(
                'Your current duties for the Position are outlined in a position statement / description covering your role which is reviewed regularly. Apple periodically re-examines position responsibilities and updates them to ensure they relate to the job being performed and to incorporate whatever changes are appropriate to fit with Apple’s operations. Apple reserves the right to make changes to your job title, duties, reporting arrangements accountabilities, key result areas and specific responsibilities as required.'
            )
        ),
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Commencement Date</strong>'
            ),
            (employee.NZ_Contract_Type == 'Standard Permanent') &&
            $('<p/>').html(
                'Your commencement date is ' + fnConvertFullDate2(employee.Start_Date) + '.'
            ),
            ((employee.NZ_Contract_Type == 'Fixed Term General') || (employee.NZ_Contract_Type == 'Intern')) &&
            $('<p/>').append(
            $('<p/>').html(
                'Your employment will commencement on ' + fnConvertFullDate2(employee.Start_Date) + ' and will automatically end on ' + fnConvertFullDate2(employee.Term_Date) + ' (<strong>Expiration Date</strong>), unless terminated earlier in accordance with the terms of the this agreement. Please note that this is a fixed term contract and there is no guarantee of ongoing employment past the Expiration Date.'),
                
                $('<p/>').html(
                'No representation of ongoing employment beyond the Expiration Date will be binding on the parties unless expressly made in writing.'),
                
                $('<p/>').html(
                'The reason for the fixed term of this agreement is that ' + employee.NZ_Fixed_Term_Reason +'. You acknowledge that this is a genuine reason based on reasonable grounds.')
                
            )
            
            
        ),
            (employee.Reason != 'Transfer') &&
         $('<div class="offerClause"/>').append( 
            $('<H1/>').html(
                '<strong>Probation Period</strong>'
            ),
            $('<p/>').html(
                'You will be on probation for 90 days from your start date. Apple will review your performance and make a decision as to your permanent employment at the end of this probation period. Should you be offered permanent employment at that time, the terms and benefits below will accrue from your start date.'
            )
            
        ),
        
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Hours of Duty</strong>'
            ),
            $('<p/>').html(
                'You are engaged on a ' + employee.PT_FT + ' basis.'
            ),
            (employee.PT_FT == 'Full Time') &&
            $('<p/>').html(
                'Your normal hours of work will average 38 hours per week.'
            ),
            (employee.PT_FT == 'Full Time') &&
            $('<p/>').html(
                'Unless your manager advises you differently, you are expected to attend for work Monday to Friday during regular business hours. You may be required from time to time to work beyond these normal hours of work to properly complete your duties. You agree that these hours of work are reasonable having regard to the nature of the Position. You also agree that you are available to work these hours.'
            ),
            
            (employee.PT_FT == 'Part Time') &&
            $('<p/>').html(
                'Your normal hours of work will average ' + employee.Default_Weekly_Hours + ' hours per week.'
            ),
            
            $('<p/>').html(
                'Apple may change your normal working hours from time to time in consultation with you. Your annual base salary includes payment for all hours worked. You will not be entitled to any additional payment in respect of additional hours worked except as required by the Holidays Act 2003.'
            )
            
        ),
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Location</strong>'
            ),
            $('<p/>').html(
                'Your employment will be based at ' + employee.Work_Location + '. However, you may be required to work in other locations or undertake overseas travel and/or travel within New Zealand in order to carry out your duties.'
            )
        ),
        
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Remuneration</strong>'
            ),
            
            (employee.PT_FT == 'Full Time') &&
            $('<p/>').html(
                'You will be paid an annual base salary of NZD$' + fnFormatCurrency(employee.Annual_Salary) + ', less tax.'
            ),
            
            (employee.PT_FT == 'Part Time') &&
            $('<p/>').html(
                'You will be paid a pro-rata annual base salary of NZD$' + fnFormatCurrency(employee.Annual_Salary) + ', less tax.'
            ),
            
             $('<p/>').html(
                'Your annual base salary will be paid on a monthly basis in 12 equal instalments into a bank account nominated by you.'
            ),
            
            $('<p/>').html(
                'Your annual base salary has been calculated to fully compensate you for the performance of your duties and responsibilities.'
            )
               
        ),
        
        (employee.OTP_Amount_1 != '') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Sign-On bonus</strong>'
            ),
            $('<p/>').html(
                'You will be eligible to receive a hire-on bonus of NZD$' + fnFormatCurrency(employee.OTP_Amount_1) + ', less tax subject to the following conditions. In order to earn the bonus you must be actively employed by Apple for twelve (12) months following your commencement date. Apple will advance you payment of the sign-on bonus after the completion of your trial period. Should you voluntarily terminate your employment within twelve (12) months of your commencement date, you will be responsible for reimbursing all or part of the sign-on bonus payment at Apple’s sole discretion. By your signature below, you authorize Apple to deduct any unearned sign-on bonus advance from your final paycheck.'
            )

),

        (employee.Compensation_Grade == 'L20' || employee.Compensation_Grade == 'L18' || employee.Compensation_Grade =='L17' || employee.Compensation_Grade == 'L16') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>' + employee.Fiscal_Year + ' VP & Director Quarterly Bonus Plan </strong>'
            ),
            $('<p/>').html(
                'You’re eligible for participation in the ' + employee.Fiscal_Year + ' VP & Director Quarterly Bonus Plan (’Plan’). The Plan provides for varying levels of payout based on net sales achievement and operating income achievement. If specific quarterly performance targets are achieved, your bonus may range up to a maximum of 50% of your quarterly base salary. Eligibility and participation is subject to the written terms and conditions contained in the Plan. Please review the Plan document, which will be sent to you separately, for more specific details including eligibility criteria.'
            )

),
        ((employee.Annual_Bonus == 'Discretionary Bonus') && (employee.Compensation_Grade == 'L15' || employee.Compensation_Grade == 'P15') && (employee.Reason != 'Transfer')) &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Discretionary Bonus</strong>'
            ),
            $('<p/>').html(
                'You will be eligible to receive an annual cash bonus with a target bonus amount of 20% of your base salary.  Bonuses are discretionary and awarded based on your individual performance, Apple’s overall performance, and when your employment begins during the fiscal year.  As a result, bonuses awarded in the first year of employment typically range between 10% and 20% of base salary. Whether bonuses are paid and the amount and timing of any bonus payments is determined at the sole discretion of Apple.'
            )

),
        ((employee.Annual_Bonus == 'Discretionary Bonus') && (employee.Compensation_Grade == 'L14' || employee.Compensation_Grade == 'P14') && (employee.Reason != 'Transfer')) &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Discretionary Bonus</strong>'
            ),
            $('<p/>').html(
                'You will be eligible to receive an annual cash bonus with a target bonus amount of 15% of your base salary.  Bonuses are discretionary and awarded based on your individual performance, Apple’s overall performance, and when your employment begins during the fiscal year.  As a result, bonuses awarded in the first year of employment typically range between 5% and 15% of base salary. Whether bonuses are paid and the amount and timing of any bonus payments is determined at the sole discretion of Apple.'
            )

),
        ((employee.Annual_Bonus == 'Discretionary Bonus') && (employee.Compensation_Grade == 'L13' || employee.Compensation_Grade == 'P13') && (employee.Reason != 'Transfer')) &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Discretionary Bonus</strong>'
            ),
            $('<p/>').html(
                'You will be eligible to receive an annual cash bonus with a target bonus amount of 10% of your base salary.  Bonuses are discretionary and awarded based on your individual performance, Apple’s overall performance, and when your employment begins during the fiscal year.  As a result, bonuses awarded in the first year of employment typically range between 5% and 10% of base salary. Whether bonuses are paid and the amount and timing of any bonus payments is determined at the sole discretion of Apple.'
            )

),
        ((employee.Annual_Bonus == 'Discretionary Bonus') && (employee.Compensation_Grade == 'L12' || employee.Compensation_Grade == 'P12')) &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Discretionary Bonus</strong>'
            ),
            $('<p/>').html(
                'You may be eligible to receive a discretionary bonus based on your individual performance and Apple’s overall performance. Whether a bonus is paid and the amount and timing of the bonus payment is at the sole discretion of Apple.'
            )

),
        ((employee.Annual_Bonus == 'Discretionary Bonus') && (employee.Compensation_Grade == 'P13' || employee.Compensation_Grade == 'P14' || employee.Compensation_Grade == 'P15' || employee.Compensation_Grade == 'L13' || employee.Compensation_Grade == 'L14'|| employee.Compensation_Grade == 'L15')) &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Discretionary Bonus</strong>'
            ),
            $('<p/>').html(
                'You may be eligible to receive a discretionary bonus based on your individual performance and Apple’s overall performance. Whether a bonus is paid and the amount and timing of the bonus payment is at the sole discretion of Apple.'
            )

),
        (employee.Commission_Plan == '60_40_Base_Target_Plan') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Commission</strong>'
            ),
            $('<p/>').html(
                'You will participate in the Apple Asia Pacific Sales Compensation Plan which pays a target commission of 40% on On-Target Earning (OTE). Your OTE will be S$' + employee.OTE_Amount + ' per annum. This plan, including the split between the base pay and variable commission of 60:40 ratio may be subject to change. These changes, if any, will be made at Apple’s absolute discretion to which you consent by accepting this contract.'
            )
        ),
        (employee.Commission_Plan == '70_30_Base_Target_Plan') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Commission</strong>'
            ),
            $('<p/>').html(
                'You will participate in the Apple Asia Pacific Sales Compensation Plan which pays a target commission of 30% on On-Target Earning (OTE). Your OTE will be S$' + employee.OTE_Amount + ' per annum. This plan, including the split between the base pay and variable commission of 70:30 ratio may be subject to change. These changes, if any, will be made at Apple’s absolute discretion to which you consent by accepting this contract.'
            )
        ),
        (employee.Commission_Plan == '80_20_Base_Target_Plan') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Commission</strong>'
            ),
            $('<p/>').html(
                'You will participate in the Apple Asia Pacific Sales Compensation Plan which pays a target commission of 20% on On-Target Earning (OTE). Your OTE will be S$' + employee.OTE_Amount + ' per annum. This plan, including the split between the base pay and variable commission of 80:20 ratio may be subject to change. These changes, if any, will be made at Apple’s absolute discretion to which you consent by accepting this contract.'
            )
        ),
        
        (employee.Car_Allowance != '') &&
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Car / Transport allowance</strong>'
            ),
            $('<p/>').html(
                'In the Position, you are eligible to receive an annual car / transport allowance of NZD$' + fnFormatCurrency(employee.Car_Allowance) + '. This allowance will be subject to Apple’s review and could be changed from time to time at Apple’s sole discretion. You acknowledge that this allowance is specifically paid for your current job duties, and will cease when you move from your current job position.'
            )
        ),
        
                
        
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong> KiwiSaver</strong>'
            ),
            
            $('<p/>').html(
                'KiwiSaver is a voluntary, long-term savings initiative by the New Zealand Government to help people prepare for retirement. Employees between the age of 18 and 65 will be automatically enrolled in KiwiSaver when they start a new job. The employee then has from the end of week two through to end of week eight to decide if they wish to remain in KiwiSaver or opt out.'
            ),
            
            $('<p/>').html(
                'Employees can choose to contribute either 3&#37;, 4&#37;, 6&#37;, 8&#37; or 10&#37; of their gross (before tax) salary or wages to KiwiSaver. These contributions are then taken from employees’ net (after tax) salary or wages and put into their KiwiSaver account. After contributing for twelve (12) months, members can choose to take a temporary break from saving. Subject to some exceptions, savings are locked-in to KiwiSaver until the employee reaches the age of eligibility for New Zealand Superannuation (currently 65).  Apple will contribute 3&#37; towards savings contributed to KiwiSaver by participating employee members. This is the compulsory employer contribution and Apple will continue to pay any compulsory requirements as legislated by the New Zealand government'
            )
            
            
        ),

         $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Reviews</strong>'
            ),
           (dateValidation()) &&
            $('<p/>').html(
                'Your next formal salary review will be in line with the global annual performance and salary review cycles. Staff must have a minimum of six (6) months’ service to qualify for reviews. Any review will not necessarily lead to an increase in your salary.'
            ),
            

            (!dateValidation()) &&
            $('<p/>').html(
                'In light of the fixed term of this agreement, your salary will not be reviewed during the term of the agreement.'
            )

            ),
        
                (employee.Reason != 'Transfer') &&  
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Background Check / Right to Work</strong>'
            ),
            $('<p/>').html(
                'This offer, and your employment with Apple, is at all times conditional upon:'
            ),
            
            $('<div/>').append(
                $('<p/>').html(
                'a) the successful outcome of the background and/or reference checks which are currently being undertaken. If your checks do not come back as satisfactory to Apple, Apple reserves the right to withdraw the offer and/or terminate your employment;'
                ),
                
                $('<p/>').html(
                'b) you obtaining and retaining all necessary visas, work permits, licences, registrations, or memberships to enable you to lawfully reside and work in New Zealand and fulfil the duties of the Position. You must immediately notify Apple should this cease to be the case at any time; and'
                ),
                
                $('<p/>').html(
                'c) you being competent to properly carry out the duties of the Position and that any representations as to the qualifications, skills, experience, industry knowledge, and employment history made by you being true and correct.'
                )
            )
        ),
                (employee.Reason == 'Transfer') &&  
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Right to Work</strong>'
            ),
            $('<p/>').html(
                'This offer, and your employment with Apple, is at all times conditional upon:'
            ),
            
            $('<div/>').append(
                $('<p/>').html(
                'a) you obtaining and retaining all necessary visas, work permits, licences, registrations, or memberships to enable you to lawfully reside and work in New Zealand and fulfil the duties of the Position. You must immediately notify Apple should this cease to be the case at any time; and'
                ),
                
                $('<p/>').html(
                'b) you being competent to properly carry out the duties of the Position and that any representations as to the qualifications, skills, experience, industry knowledge, and employment history made by you being true and correct.'
                )
            )
        ),
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Employee Protection Provision</strong>'
            ),
            $('<p/>').html(
                'In the event of a restructuring, as defined in the Employment Relations Act 2000 (such as the sale, transfer, or contracting out of all or part of Apple’s business), that may affect your future employment, Apple will:'
            ),
            
            $('<div/>').append(
                $('<p/>').html(
                'a) as soon as is reasonably practicable, taking into account the commercial requirements of Apple, commence negotiations with the potential new employer concerning the impact of the restructuring on your position and agree on how those negotiations will be conducted;'
                ),
                
                $('<p/>').html(
                'b) negotiate with the potential new employer regarding:'
                ),
                
                $('<div style="margin-left:15px"/>').append(
                    $('<p/>').html('(i) whether or not it proposes to offer employment to you;'
                    ),
                    
                    $('<p/>').html('(ii) if so, the terms and conditions on which it proposes to offer employment to you; and'
                    ),
                    
                    $('<p/>').html('(iii) the proposed date for commencement of employment with the potential new employer; and'
                    )
                ),
                
                $('<p/>').html(
                'c) inform you of whether or not you are to transfer to a new employer, any relevant terms of transfer or other relevant entitlements (if any).'
                )
            )
        ),
        
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Public Holidays</strong>'
            ),
            $('<p/>').html(
                'Subject to the following provisions, you will be entitled to the public holidays set out in the Holidays Act 2003. Public holidays are celebrated on the day on which they fall, except the public holidays over Christmas and New Year, Waitangi Day and ANZAC Day which have special arrangements, namely:'
            ),
            
            $('<div/>').append(
                $('<p/>').html(
                'a) if the holiday falls on the weekend and you do not normally work on the weekend, the holiday is transferred to the following Monday/Tuesday; or'
                ),
                
                $('<p/>').html(
                'b) if the holiday falls on a Saturday or Sunday and you normally work on that day then the holiday remains at the usual day and you are entitled to that day off on pay.'
                )
                
                
            ),
            
            $('<p/>').html(
                'Apple may require you to work on any public holiday. If you are required to work on a public holiday, Apple will pay you time and a half of your usual rate of pay for the time actually worked. In addition, if that day would otherwise have been a working day for you, Apple will also provide you with an alternative day’s holiday to be taken in accordance with the Holidays Act 2003.'
            )
            
        ),
        
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Annual Holidays</strong>'
            ),
            $('<p/>').html(
                'You will be entitled to paid annual holidays in accordance with the Holidays Act 2003. Currently, this is four (4) weeks paid holidays per annum. '
            ),
            
            
            $('<p/>').html(
                'You will be paid for annual holidays in the pay period that relates to the time when the annual holidays are taken.'
            ),
            
            $('<p/>').html(
                'Annual holidays will be paid at the greater of your ordinary weekly pay at the time the holiday is taken or your average weekly earnings over the previous twelve (12) months.'
            ),
            
            $('<p/>').html(
                'Annual holidays are to be taken at a time agreed with your manager. If agreement cannot be reached, Apple may direct you to take annual leave on 14 days’ notice.'
            )
            
        ),
        
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Sick Leave</strong>'
            ),
            (dateValidation()) &&
            $('<p/>').html(
                'After six (6) months’ continuous service, in accordance with the Holidays Act 2003, you will be entitled in each subsequent year of service to five (5) days’ sick leave. Sick leave may be taken when you are sick or injured or your spouse or partner or a person who depends on you for care are sick or injured.'
            ),
            
            (dateValidation()) &&
            $('<p/>').html(
                'You may carry over up to 15 days’ sick leave from year to year, up to a maximum current entitlement of 20 days’ sick leave. Unused sick leave is not paid out at the end of your employment.'
            ),
            (dateValidation()) &&
            $('<p/>').html(
                'You agree to provide, if requested by Apple, a medical certificate in relation to any claim for paid sick leave.'
            ),
            (dateValidation()) &&
            $('<p/>').html(
                'Apple may, at any time, and at its expense, request you to undergo a medication examination by a registered medical practitioner or practitioners nominated by Apple, for purposes relevant to your job performance or fitness for work. You agree to a copy of any medical report obtained under this clause being made available to Apple.'
            ),
            (dateValidation()) &&
            $('<p/>').html(
                'If you are prevented by accident or mental or physical illness from properly carrying out your duties under this agreement for more than an aggregate period of two (2) months during the term of this agreement, and you have no sick leave entitlement, then Apple may terminate your employment and you will not be entitled to any compensation or damages.'
            ),
            (!dateValidation()) &&
            $('<p/>').html(
                'In light of the fixed term of this agreement, you will not be entitled to sick leave.'
            )
            
        ),
        
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Bereavement Leave</strong>'
            ),
            (dateValidation()) &&
            $('<p/>').html(
                'After six (6) months’ continuous service, in accordance with the Holidays Act 2003, you will be entitled to paid bereavement leave of three (3) days in relation to the death of your parent, grandparent, sibling, child, grandchild, spouse, partner, or parent of your spouse or partner. You will be entitled to one (1) day’s paid bereavement leave if Apple considers you have suffered bereavement through the death of another person.'
            ),
            
            (!dateValidation()) &&
            $('<p/>').html(
                'In light of the fixed term of this agreement, you will not be entitled to bereavement leave.'
            )
        ),
        
        
         $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Policies, Procedures and Business Code of Conduct</strong>'
            ),
            $('<p/>').html(
                'Apple’s policies and procedures are contained within People site and are subject to change in accordance with the needs of the business. Unless otherwise expressly stated in an Apple policy or this agreement, any policies, procedures or the Business Code of Conduct issued by Apple will not form part of your employment contract with Apple and are not binding on Apple. To the extent that a policy, procedure or the Business Code of Conduct requires you to do or refrain from doing something, it constitutes a direction from Apple with which you must comply. To the extent that a policy, procedure or the Business Code of Conduct describes or confers a benefit, such benefit is discretionary only.'
            ),
            
             $('<p/>').html(
                'Apple may amend or revoke its policies at any time, or otherwise elect to apply or not apply a policy, procedure or the Business Code of Conduct in a particular instance at its absolute discretion.  You must ensure that you regularly familiarise yourself with any changes from time to time.'
            )
        ),
        
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Other Positions</strong>'
            ),
            $('<p/>').html(
                'Whilst employed by Apple you must not undertake or be involved with any outside commercial activity, or any other appointment, position or work without first obtaining Apple’s written consent. Apple will not unreasonably withhold consent in respect of some other position of an administrative or honorary nature (whether paid or unpaid), where there is no conflict with your duties, no impact on your availabilities and no potential conflict of interest or potential for damage to Apple’s reputation. Passive private investment activities are permissible, but they must be modest and handled outside Apple working hours.'
            )
        ),
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Ownership of intellectual property</strong>'
            ),
            $('<p/>').html(
                'As a condition of your employment, and continuing employment, you must agree to and execute all agreements and undertakings which Apple or any of its Related Companies (as defined in the Companies Act 1993) ask you to execute in respect of intellectual property. For the purpose of this paragraph:'
            ),
            
            
            $('<div/>').append(
                $('<p/>').html(
                    '<strong>Work</strong> means any invention, discovery, design, improvement, formula, process, technique, literary or artistic work, or any other item in which Intellectual Property Rights subsist or are capable of subsisting and is wholly or partly created, made or discovered by you either:'
                )
                
            ),
            
            $('<div/>').append(
                $('<p/>').html(
                    'a) in the course of your employment with Apple; or'
                ),
                
                $('<p/>').html(
                    'b) otherwise using the facilities, resources, time or any other opportunity provided by the Apple or its Related Companies'
                )
                
                
            ),
            
            $('<p/>').html(
                    '<strong>Intellectual Property Rights</strong> means all existing and future rights which are capable of protection by copyright, patent, design, trademark or other registration or other forms of protection available in New Zealand or elsewhere. Without limiting the terms of any additional agreement or undertaking you are required to enter during the course of your employment with respect to intellectual property, the Work and all Intellectual Property Rights in the Work will belong absolutely to Apple, and you agree to do all things necessary and execute any document required to give effect to this ownership. You must immediately and fully communicate to Apple any Work created, made or discovered by you.'
            ),
            
            $('<p/>').html(
                'You consent to the use of all existing and future Works made by you in the course of your employment, and agree to waive any moral rights you may have in them, and to consent to any act which amounts to an infringement of any such moral right, in favour of Apple or its Related Companies.  You also agree that this consent and waiver extends to any licensees and successors in title to Apple or its Related Companies in respect of such Works, as well as to any persons who are authorised by Apple, its Related Companies or by its licensees and successors in title to do acts compromising the copyright of such works.'
            ),
            
            $('<p/>').html(
                'You agree to execute any further document necessary to give effect to this. For the purpose of this clause, the expression "<strong>moral rights</strong>" includes the right to be identified as the author of the Work, the right not to have work falsely attributed to you and the right to object to derogatory treatment of the work.'
            )
            
        
        ),
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Employment records</strong>'
            ),
            $('<p/>').html(
                'You acknowledge that personal information will be gathered about you within the scope of your employment, including as part of the hiring process (<strong>Employee Personal Information</strong>). Your Employee Personal Information is considered private and confidential and is treated in accordance with Apple’s Personnel Information Privacy Policy. You consent to Apple providing this information to third parties, whether domestically or abroad, including, but not limited to its Related Companies, its payroll provider, insurers and other third parties where it is necessary for the proper conduct and administration of Apple’s business. You acknowledge that Apple retains the unfettered right to select its third party contractors.'
            ),
            
            $('<p/>').html(
                'You understand that you may access, review, make changes to your information and object for legitimate reasons to the processing of your information by contacting dpo@apple.com. By signing this agreement, you consent to such transfer, with the understanding that Apple complies with the local data protection laws (if any), the APEC Cross Border Privacy Rules (CBPR) system or any other regime ensuring equivalent or adequate protection, or by appropriate contractual arrangements or binding corporate rules, and that compliance with these programs provides a comparable standard of protection to that as required under the applicable laws and regulations related to the protection of personal data in New Zealand.'
            )
        ),
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Termination</strong>'
            ),
            ((employee.NZ_Contract_Type == 'Fixed Term General') || (employee.NZ_Contract_Type == 'Intern')) &&
            $('<p/>').html('Your employment and this agreement will terminate automatically on the Expiration Date (or where the term of this agreement is renewed or extended by written agreement, then automatically on the date specified in such written agreement unless otherwise terminated earlier pursuant to this Agreement). Either you or Apple may terminate your employment at any time prior to the Expiration Date for any reason by giving to the other ' + employee.NZ_Fixed_Term_Notice + ' weeks’ written notice. Apple may pay you in lieu of all or part of the notice period, bringing your employment to an end.'
            ),
            
            (employee.NZ_Contract_Type == 'Standard Permanent') &&
            $('<p/>').html('Either you or Apple may terminate your employment for any reason by giving to the other 4 weeks’ written notice. Apple may pay you in lieu of all or part of the notice period, bringing your employment to an end.'
            ),
            

            $('<p/>').html('During any period of notice provided Apple may, at its discretion, require you:'
            ),
            
            $('<div/>').append(
                $('<p/>').html('a) not to attend for work at any offices or premises of Apple;'
                ),
                
                $('<p/>').html('b) to perform duties which are different to your usual duties, provided that you have the necessary skills and competencies to perform these duties;'
                ),
                
                $('<p/>').html('c) to assist Apple with a proper hand over of the duties of the Position including business information, work, clients, and business;'
                ),
                
                $('<p/>').html('d) not to have any dealings with any customers, suppliers or clients of Apple or any Apple’s Related Companies; or'
                ),
                
                $('<p/>').html('e) to do any combination of the above.'
                )
            
            ),
            
            $('<p/>').html('Despite any other provision of this agreement, Apple may terminate your employment at any time without prior notice if you:'
            ),
            
            
            $('<div/>').append(
                $('<p/>').html('a) commit any serious or persistent breach of this agreement or any of Apple’s policies, codes of conduct and procedures;'
                ),
            
                $('<p/>').html('b) refuse to carry out lawful and reasonable instructions of Apple, within the scope of your duties;'
                ),
                
                $('<p/>').html('c) are grossly negligent or otherwise incompetent in the performance of your duties;'
                ),
                
                $('<p/>').html('d) are guilty of any serious misconduct or wilful neglect in the discharge of your employment duties;'
                ),
                
                $('<p/>').html('e) engage in wilful or negligent conduct which poses a serious risk to health and safety;'
                ),
                
                $('<p/>').html('f) become bankrupt or make any arrangement or composition with your creditors; or'
                ),
                
                $('<p/>').html('g) engage in any civil wrong or conduct of a criminal nature (including but not limited to assault, theft and fraud) which in the reasonable opinion of Apple may seriously impact on your ability to perform the duties of the Position or is likely to significantly damage the reputation or business of Apple.'
                )
            
            ),
            
            $('<p/>').html('Where the employment is terminated by you without the requisite notice, salary equivalent to the unworked notice shall be forfeited.'
            )
            
        ),
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Redundancy</strong>'
            ),
            $('<p/>').append(
                $('<span/>').append(
                'If your employment is terminated on the basis of redundancy, you will have no entitlement to redundancy compensation'
                ),
                ((employee.NZ_Contract_Type == 'Fixed Term General') || (employee.NZ_Contract_Type == 'Intern')) &&
                $('<span/>').append(
                'or to any payment in respect of the balance of the fixed term of this agreement'
                ),
                $('<span/>').append(
                '.'
                )
                
            )
            
            
        ),
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Suspension</strong>'
            ),
            $('<p/>').html(
                'Apple may, at its sole discretion, suspend you with or without pay pending any investigation into alleged misconduct or another matter or incident.'
            )
        ),
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Deductions</strong>'
            ),
            $('<p/>').html(
                'If you are overpaid in respect of any entitlement or receive any benefit which you are not entitled to, or otherwise owe a debt to Apple, you consent to Apple deducting this amount from your remuneration and/or from any final payment owed to you.'
            )
        ),
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Employment Relationship Problems</strong>'
            ),
            
            $('<p/>').html(
                'The parties will seek to resolve any employment relationship problem privately in the first instance. An employee should raise the problem with Apple as soon as possible and the parties should quickly meet to discuss the matter and endeavour to resolve it.'
            ),
            
            $('<p/>').html(
                'You acknowledge that you are aware of your entitlement to use one or more of the services provided for in the Employment Relations Act 2000 for the resolution of employment relationship problems. These include seeking mediation through the Ministry of Business, Innovation and Employment’s Labour Group or taking the problem to the Employment Relations Authority or the Employment Court.'
            ),
            
            $('<p/>').html(
                'If the employment relationship problem is a personal grievance, you must raise the grievance with Apple within a period of 90 days beginning with the date on which the action alleged to amount to a personal grievance occurred or came to your attention, whichever is the later.'
            )
            
            
        ),
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Confidentiality</strong>'
            ),
            $('<p/>').html(
                'You must not disclose anyone else’s confidential information to Apple and you must not cause Apple to use any confidential information which belongs to anyone else.'

            ),
            
            $('<p/>').html(
                'You must use your best endeavours to protect all of Apple’s or its Related Companies’ own confidential information and other confidential information held by Apple or its Related Companies and you must not use any of that confidential information except for Apple’s purposes. Your obligation to protect Apple’s and its Related Companies’ confidential information includes but is not limited to protecting and not misusing confidential information, which you have generated yourself as an Apple employee.'

            ),
            
            $('<p/>').html(
                'Examples of Apple’s and its Related Companies’ confidential information include but are not limited to information not generally known outside Apple and its Related Companies concerning existing and future products and services, sales and marketing information, intellectual; property, financial information between Apple and/or its Related Companies and/or its clients, the identity or details of Apple’s and its Related Companies’ customers, and information relating to Apple’s and its Related Companies’ general business operations (e.g. sales, costs, profits, organisation, customer lists, pricing methods, channels etc.)<br>(<strong>Confidential Information</strong>).'

            ),
            
                $('<p/>').html(
                'You must not, either during (except in the proper course of your duties) or after the termination of your employment with Apple, without the prior written consent of Apple, directly or indirectly, divulge, use or otherwise disclose to any person whatsoever, the Confidential Information.'

            ),
            
            $('<p/>').html(
                'You must enter into any other confidentiality agreement or provide confidentiality undertakings as required by Apple from time to time to protect its business interests and those of its customers and Related Companies. Without limiting the terms of any additional agreement or undertaking you are required to enter during the course of your employment with respect to Confidential information:'

            ),
            
            $('<div/>').append(
                $('<p/>').html(
                    'a) the Confidential Information remains the sole property of Apple or its Related Companies;'
                ),
                
                $('<p/>').html(
                    'b) you must not, either during (except in the proper course of your duties) or after the termination of your employment, without the prior written consent of Apple, directly or indirectly, divulge, use or otherwise disclose to any person whatsoever, the Confidential Information, either for your own or for another’s benefit; and'
                ),
                
                $('<p/>').html(
                    'c) you must immediately notify Apple should you suspect misuse of the Confidential Information and assist Apple in any proceedings taken for alleged misuse of the Confidential Information.'
                )
                
                
            )
            
            
        ),
        
        
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Right of Search</strong>'
            ),
            $('<p/>').html(
                'In order to maintain a safe and crime free work environment Apple reserves the right to search employees, employee possessions and employee workspaces for illegal drugs and stolen items. By accepting this offer you consent to Apple conducting these searches.'
            )
        ),
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>General Obligations</strong>'
            ),
            $('<p/>').html(
                'In addition to your specific duties, the position requires you to always act in Apple’s best interests and to refrain from acting, or being seen to act, in conflict with those interests. The position requires you to use your best endeavours to protect and promote Apple’s reputation and to perform the duties assigned to you from time to time to a high standard.'
            )
        ),
        
        
        $('<div class="offerClause"/>').append(
            $('<H1/>').html(
                '<strong>Acknowledgement</strong>'
            ),
            $('<p/>').html(
                'By signing this agreement, you acknowledge that before the agreement was entered into, Apple:'
            ),
            
            $('<div/>').append(
                $('<p/>').html(
                'a) informed you of your entitlements under the Holidays Act 2003 and informed that further information about such entitlements can be obtained from the Ministry of Business, Innovation and Employment at www.employment.govt.nz;'
                ),
                
                $('<p/>').html(
                'b) provided you with a copy of the intended agreement;'
                ),
                
                $('<p/>').html(
                'c) advised you that you were entitled to seek independent advice about the intended agreement; and'
                ),
                
                $('<p/>').html(
                'd) gave you a reasonable opportunity to seek such advice.'
                ),
                       
                       $('<div/>').append(
                  $('<p/>').html(
                'This employment offer is valid until ' + fnConvertFullDate(employee.Offer_Expiration) + '. We must receive your written acceptance of this offer no later than 5:00 p.m. NZST time that day.'
            ),
            
            $('<p/>').html(
                employee.First_Name + ', please accept this offer by signing below. Be sure to retain copies for your personal records. If you have any questions regarding this offer or any of its enclosures, please contact ' + employee.Recruiter_Name + ' at ' + employee.Recruiter_Email + '.'
            ),
            
            $('<p/>').html(
                'We look forward to welcoming you to Apple.'
            )
       )
           )    
    )       
     
      // end append
    );
    
    $("#markup2").html("").append(
        // OfferClause 2
        $('<div class="offerClause2">').append(
            $('<p/>').html(
                'Sincerely,'
            )
        ),  
            
        $('<div class="offerClause2">').append(
            $('<p/>').append(
                $('<span/>').html(
                    'Apple Worldwide Recruiting<br>'
                ),
                $('<span/>').html(
                    'On behalf of ' + employee.Entity + ' <br>'
                )
            )
        ),
        $('<div class="offerClause2">').append(
            $('<p/>').html(
                ' '
            )
        ),
        $('<div class="offerClause2"/>').append(
            $('<p/>').html(
                'I, ' + employee.First_Name + ' ' + employee.Last_Name + ', have read this letter and agree to accept the offer made in this letter.'
            ),
            $('<p/>').html(
                ' '
            ),
            $('<p/>').html(
                ' '
            )
        )
        // end append
    );

    
}

function ordinal_suffix_of(i) {
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

function dateValidation() {
        var b = new Date(employee.Start_Date); //your input date here
         b.setMonth(b.getMonth());
        var d = new Date(employee.Term_Date); //your input date here
        d.setMonth(d.getMonth() - 6);  //subtract 6 month from current date 
        if (b <= d || isNaN(d.getMonth())) {
          return true;
        } else {
          return false;
        }
    }


function fnConvertFullDate(eventDate) {

    var d = new Date(eventDate);
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var year = d.getFullYear(),
        month = d.getMonth(),
        n_date = d.getDate(),
        day = d.getDay();

    return days[parseInt(day)] + ', ' + parseInt(n_date) + ' ' + months[month] + ' ' + year;

}

function fnConvertFullDate2(eventDate) {

    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var year = d.getFullYear(),
        month = d.getMonth(),
        n_date = d.getDate(),
        day = d.getDay();

    return parseInt(n_date) + ' ' + months[month] + ' ' + year;
}

function fnConvertFullDate3(eventDate) {

    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var year = d.getFullYear(),
        month = d.getMonth(),
        n_date = d.getDate(),
        day = d.getDay();

    return days[parseInt(day)] + ' the ' + ordinal_suffix_of(parseInt(n_date)) + ' of ' + months[month] + ' ' + year;

}

function fnConvertDateMonthYear(eventDate) {

    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    var year = d.getFullYear(),
        month = d.getMonth(),
        n_date = d.getDate(),
        day = d.getDay();

    return months[month] + ' ' + parseInt(n_date) + ', ' + year;

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
    var values = total.split(/[ ,]+/).join(',');
    var newValue  = values.replace(/\$/g, '');
    if (newValue) {
        newValue = (newValue.indexOf(',') != -1) ? newValue.split(',').join('') : newValue;
        return formatCurrency(newValue);
    } else {
        return '0.00';
    }
}

function fnFormatNumeric(total){
       var number = total.replace(/[^0-9\.]+/g,"");
       var bonusInst = number *.5      
       return formatCurrency(bonusInst);
}

$(function() {
    function _fnAssignValue(targetElement, value) {
        document.getElementById(targetElement).value = value;
        $("#" + targetElement).attr("value", value);
    }

    function fnGetName(first, last) {

        var fullname = first + " " + last;
        return fullname;
    }

    var name = fnGetName(employee.First_Name, employee.Last_Name);
    _fnAssignValue('Full_Name', name);

    // render template
    fnView();
var a =  new Date(fnConvertDateMonthYear(employee.Start_Date));
var b = new Date(fnConvertDateMonthYear(employee.Term_Date)) - 6;

dateValidation();

    // completed letter
    if (!$("input.calendar_button").length) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

        var arrParts = [
            [1, 'hidden_pg']
        ];

        showCompletedOfferLetter('incomplete', 'complete', arrParts);
    }
    else{
        makeOfferLetter('hidden_pg','offerClause');
        makeOfferLetter('hidden_pg2','offerClause2');
        makeOfferLetter('hidden_pg3','offerClause3');
    }
});
