function fnView() {

    // SERVICES-39971 | UBS - RC - FAA Governing Law update
    // default location
    let locationState = 'New York';
    let tnOffices = ['902132', '902119', '904702', '904798', '903614', '902202', '902453', '902210', '903959', '901924', '904074', '902278'];
    if ( tnOffices.indexOf(employee.Event_Location) >= 0 && employee.Division != 'Wealth Management') {
        locationState = 'Tennessee';
    }
    let caOffices = ['903863', '901966', '902102', '902126', '901917', '800044', '902013', '902027', '903576', '903412', '903275', '902012', '902792', '903860', '800040', '903159', '800016', '903819', '903483', '902231', '800005', '902267', '901952', '902303', '902299', '903933', '902422', '800042', '903309', '902315', '902003', '904651', '903862', '902323', '800041', '901956', '800010', '903566', '901905', '902655', '020045', '021546', '903931', '100031', '901997', '902004', '902628', '902319', '904008', '904492', '904710', '800004', '903492', '100833', '903529', '800033', '902795', '903858'];
    if ( caOffices.indexOf(employee.Event_Location) >= 0 ) {
        locationState = 'California';
    }
        $("#markup1").html("").append(
           
            (employee.NFA_Text== '') &&
            $('<div class="offerClause"/>').append($('<p/>').html(fnConvertDate(employee.Today)),
                $('<p/>').append(
                    $('<span/>').html(
                        employee.First_Name + ' ' + employee.Last_Name + '<br>'
                    ),
                    $('<span/>').html(employee.Address1 + '<br>'),
                    $('<span/>').html((employee.Address2) ? employee.Address2 + '<br>' : ''),
                    $('<span/>').html(
                        // London 09875-893 - If No State
                        ((employee.City) ? employee.City + (((employee.State) || (employee.Zip)) ? ', ' : ' ') : '') +
                        ((employee.State) ? employee.State + ' ' : '') +
                        employee.Zip + '<br>'
                    )
                ),
               $('<p/>').html("Dear " + employee.First_Name + ","),
               // End Offer Letter Heading

            /////////////// main offer letter body //////
            $('<p/>').html(
                'We are pleased to confirm our offer to employ you as a Financial Advisor Associate within the UBS Wealth Manager Development Program ("the Program") of ' + employee.Legal_Entity + ' ("UBS" or the &#39;Firm&#39;).'  + (((employee.Rank!='') && (employee.Rank!='Non-Officer')&& (employee.Rank!='Employee')) ? ' Your official title will be ' + employee.Rank + '.'  : '') + ' You will initially be located in our ' + employee.Location_City + ' branch office.  We look forward to having you start on or about ' + employee.Start_Date + ' (&#39;Start Date&#39;). ' 
            ),
            
            $('<p/>').html(
                'For purposes of this letter, ‘UBS Group’ includes UBS Group AG and all of its direct and/or indirect subsidiaries and affiliates.'
            ),
        
             $('<p/>').html(
                'This offer letter sets forth the terms of our offer and describes your compensation and benefits package.  All compensation payments set forth herein and during your employment will be subject to any necessary withholdings and authorized and/or required deductions.'
            ),
        
            $('<p/>').html(
                'During the course of your employment you will devote your full business time and attention to your responsibilities as a Financial Advisor and will use your best efforts, skills and abilities to promote the interests of the Firm. Your employment will commence with your entering the Program, during which your responsibilities and compensation will change as you move through the Program’s two periods, namely from the Pre-production Training period into the Production period. A general overview of how the Program operates is as follows:'
            ),
        
            $('<p/>').html(
                '<strong><u>' + 'UBS Wealth Manager Development Program' + '</u></strong>'
            ),
            $('<p/>').html(
                'Phase One: Pre-production Training (consisting of four segments)'
            ),
            $('<ol class="number"/>').append(
          $('<li/>').html(
                'Virtual Level One. The Program will commence with Pre-production Training on ' + employee.FAA_Virtual_L1_Start_Date + ' at the Branch to which you have been assigned (“your Branch”). Virtual Level One consists of ' + employee.FAA_Virtual_L1_Weeks + ' weeks of training and pre-production work to help you acquire the knowledge and skills needed to succeed at UBS, as well as to learn about UBS solutions and services. You will be required to obtain your licenses, including Series 7 and Series 66 (if not already licensed).'
            ),
          $('<li/>').html(
                'Workshop One. Participants will attend a two-week development workshop designed to provide you with knowledge and skills that you can use to build a holistic wealth management business at UBS.  This workshop is generally in the New York/New Jersey vicinity but may change based on availability and class size.'
            ),
          $('<li/>').html(
                'Virtual Level Two. Following Workshop One, you will return to your Branch for ' + employee.FAA_Virtual_L2_Weeks + ' weeks and continue with pre-production work to help you acquire the knowledge and skills needed to succeed at UBS, as well as to learn about UBS solutions and services.'
            ),
          $('<li/>').html(
                'Workshop Two. Participants will reconvene for an additional two-week development workshop designed to provide you with knowledge and skills that you can use to build a holistic wealth management business at UBS Financial Services.  This workshop is generally in the New York/New Jersey vicinity but may change based on availability and class size.'
            )
      ),
            $('<p/>').html(
                'Phase Two: Production'
            ),
            $('<p/>').html(
                'Upon the completion of the Pre-production Training phase (Workshop Two), you begin the Production phase of the Program. You will receive guidance and coaching from your field leadership team and the Program Management team. Participants will gather for a one-week Application Workshop, which will include a capstone client conversation assessment.  This workshop is generally in the New York/New Jersey vicinity but may change based on availability and class size.'
            ),
            $('<p/>').html(
                '<strong><u>' + 'Compensation' + '</u></strong>' 
            ),
            $('<p/>').html(
                '1. Pre-production Training phase. During the Pre-production Training phase of the Program, your position will be classified as non-exempt, meaning that you are eligible for overtime at 1.5 times your regular hourly rate for all hours worked in excess of 40 per week, and as otherwise required by state or local laws. Your regular rate of pay is $'+ employee.Rate_of_Pay + ' per hour. You are required to record your time worked on timesheets or via the Payroll system on a daily basis and timely submit your time entries for manager approval and submission. Your schedule is subject to management\'s discretion. It is important that you accurately record all time worked each workday, and not work any time that you do not report. You will be paid bi-weekly on Fridays in accordance with the Firm\'s normal payroll practices.'
            ),
              $('<p/>').html(
                '2. Production phase.  Following your successful completion of the Pre-production Training phase, you will enter the Program&#39;s Production phase, at which time you will become an exempt employee and therefore will no longer be eligible for overtime pay. For the first 18 months of Production, you will be paid a monthly base salary of $' + format_amount(((employee.Base_Salary_x)/12)) + ', payable in accordance with the Firm&#39;s normal payroll practices, less withholdings and such other deductions as legally required. Thereafter, your salary will be subject to the step-down rules outlined in the UBS Wealth Manager Development Program Compensation Policy, which will be provided to you prior to entering the Program&#39;s Production period. The UBS Wealth Manager Development Program Compensation Policy is subject to change and your payout may change from time to time in accordance with these changes. However, you will always retain a guaranteed minimum payment, pursuant to applicable law.' 
            ),  
               $('<p/>').html(
                '3. In addition to your base salary, while employed as a Financial Advisor, you may be eligible for various cash and deferred compensation awards as provided for in various UBS compensation programs in effect during the course of your employment. The Firm reserves the right to revise, amend, or terminate any compensation program at any time.' 
            ),  
            $('<p/>').html(
                '<strong><u>' + 'Benefits & Policies' + '</u></strong>'
            ),
        $('<p/>').html(
            'You will be eligible to participate in our employee benefit plans generally available to employees subject to the terms and conditions of those plans. Detailed information about the benefit plans and about our Human Resources policies and programs will be provided to you.'
        ),
          $('<p/>').html(
            'During the course of your employment you will devote your full business time and attention to your responsibilities as an employee of the Firm and will use your best efforts, skills and abilities to promote the interests of the Firm.'
        ),
            $('<p/>').html(
                'You agree that you will abide by and adhere to all federal laws and rules and regulations of the various exchanges or other regulatory and/or self-regulatory organizations of which the Firm or any of its affiliates or related entities are members, as well as all internal rules, regulations, policies and codes of conduct that the Firm has established. In addition, you will be required to complete all training mandated by the Firm within the prescribed time frame, some of which must be completed within the first thirty (30) days of your employment.'
            ),
            $('<p/>').html(
                '<strong><u>' + 'Securities Licensing Requirements' + '</u></strong>' 
            ),
            $('<p/>').html(
                'By signing this offer letter you agree that this offer and your continued employment are contingent upon compliance with applicable regulatory and state registration and continuing education requirements. Based on your expected job functions at UBS, Business Management and the Registration Unit have determined that you must obtain or maintain the Series 7 and Series 66 (or the Series 63 and Series 65 in lieu of the Series 66) registration(s).'
            ),
            $('<p/>').html(
                'Specifically, your continued participation in the Program will require that you pass the following by week 15 of the Program, prior to on-site training in Lincoln Harbor: the Series 7 exam; and either (i) the Series 66 exam or (ii) the Series 63 and Series 65 exams.'
            ),
            $('<p/>').html(
                'Please note that you will be allowed to retake one of the exams only once. In the event that you do not meet the aforementioned requirements within the time period provided, you acknowledge and agree that you will no longer be eligible to continue in the Program, that you will be required to leave the Program, and that your leaving the Program may result in the termination of your employment at the Firm’s sole discretion. If this occurs, the Firm will have no further obligation to you. Please Note: The licensing requirement applies only to those who do not presently possess the Series 7 and Series 66 (or Series 63 and Series 65) licenses. '
            ),
            $('<p/>').html(
                'Until such time that you become fully registered with UBS, you understand and agree that you shall not sign any correspondence to any prospective or actual UBS clients using the title Financial Advisor or hold yourself out as a Financial Advisor or use any other title that would cause someone to believe that you are registered and able to provide investment advice.'
            ),      
(employee.Licenses_series_transferring != '') &&
                $('<p/>').html(
                        'Based on your expected job functions, the Firm has determined that you must transfer existing ' + employee.Licenses_series_transferring + ' within 48 hours of your actual first day of employment. Furthermore, we have agreed that this offer is predicated on your ability to be properly licensed for the offered position. This means that within 48 hours of your actual first day, you will have transferred existing license(s) and be registered with our broker dealer. In the event you have not transferred the required license(s) within 48 hours of your first day of employment, you acknowledge and agree that you will be terminated from employment with the Firm. If this occurs, the Firm will have no further obligation to you.<p></p>'
                ),    
((employee.License_Requirement != '')  && (employee.NBSA != '')) &&
             $('<p/>').html(
                  'Based on your expected job functions, the Firm has determined that you must possess the appropriate securities registration. In this instance, this means you must already possess or successfully pass the SIE and ' + employee.License_Requirement + ' top off exam(s) ' + employee.License_Req_Completed_by + '. In the event you have not passed the required exam(s) within the specified period, this will be factored into your performance review and may preclude you from performing the essential functions of your current position. Accordingly, a failure to secure the required license(s) may result in the termination of your employment. Nothing in this letter shall alter your status as an employee-at-will or otherwise be construed as an agreement for employment for any period of time.<p></p>'
                ),
((employee.License_Requirement != '')  && (employee.NBSA == '')) &&
             $('<p/>').html(
                  'Based on your expected job functions, the Firm has determined that you must possess the appropriate securities registration. In this instance, this means you must already possess or successfully pass the SIE and ' + employee.License_Requirement + ' top off exam(s) ' + employee.License_Req_Completed_by + '. In the event you have not passed the required exam(s) within the specified period, this will be factored into your performance review and may preclude you from performing the essential functions of your current position. Accordingly, a failure to secure the required license(s) may result in the termination of your employment. Nothing in this letter shall alter your status as an employee-at-will or otherwise be construed as an agreement for employment for any period of time.<p></p>'
                ),
(employee.License_Requirement.indexOf('7') > 0) &&
                        $('<p/>').html(
                        'If you successfully pass the SIE and Series 7 top off exam(s) ' + employee.License_Req_Completed_by + ', the Firm will increase your ' + (employee.FLSA_Status == 'Exempt' ? 'gross annual base salary' : '') + '' + (employee.FLSA_Status == 'Non-exempt' ? 'gross annual base compensation rate (based on a 40 hour work week)' : '') + ' by $1,000, payable in accordance with the Firm’s normal payroll practices, less any necessary withholdings and such other deductions as are legally required or are taken in accordance with your lawful instructions to us.'
                        ),
((employee.License_Requirement.indexOf('63') > 0) || (employee.License_Requirement.indexOf('65') > 0) || (employee.License_Requirement.indexOf('66') > 0)) &&
                        $('<p/>').html(
                        'Additionally, if you successfully pass the  ' + employee.Second_License_Requirement + ' exam(s) ' + employee.Second_License_Completed_By + ', the Firm will increase your ' + (employee.FLSA_Status == 'Exempt' ? 'gross annual base salary' : '') + '' + (employee.FLSA_Status == 'Non-Exempt' ? 'gross annual base compensation rate (based on a 40 hour work week)' : '') + ' by $2,500, payable in accordance with the Firm’s normal payroll practices, less any necessary withholdings and such other deductions as are legally required or are taken in accordance with your lawful instructions to us.'
),
            $('<p/>').html(
                '<strong><u>Personal Securities Trading</u></strong><br><br>Generally the policy relating to trading in securities or commodities accounts (including discretionary or managed accounts) requires you to:<p></p>'
                    ),
                        $('<p/>').css('margin-left', '3em').html(
                        '(a) Disclose all personal accounts (including the accounts of your spouse/domestic partner and household members) within 7 days; and'
                        ),
                        $('<p/>').css('margin-left', '3em').html(
                        '(b) Ensure that UBS receives duplicate confirmations and account statements for all outside accounts during the time that these accounts are not held at UBS; and'
                        ),
                        $('<p/>').css('margin-left', '3em').html(
                        '(c) Promptly transfer all outside accounts to UBS Financial Services (unless Compliance advises you that an account is eligible for one of the limited exceptions)'
                        
            ),
            $('<p/>').html(
                '<strong><u>' + 'Protection of Confidential Information' + '</u></strong>' 
            ),
            $('<p/>').html(
                'You may not directly or indirectly use, maintain, take or disclose any Confidential Information, except (i) in the course of carrying out your duties for the Firm during your employment, or (ii) as otherwise required by law or governmental agency with jurisdiction, or (iii) as otherwise permitted by this letter. "Confidential Information" as used herein includes but is not limited to any nonpublic information concerning UBS Group, its financial data, strategic business plans, products and product development, services, client relationships and prospective client relationships, client lists and contact information, client information (including but not limited to clients&#39; past and present financial conditions, investment practices, preferences, activities, objectives and plans and other client data you obtain while in the Firm&#39;s employ), marketing plans, and any other trade secrets or confidential or proprietary information. You further expressly agree that, in the event your employment terminates, your use of Confidential Information, including but not limited to any information referring or relating to clients of UBS, former clients of UBS and prospective clients of UBS, must immediately cease and that you must immediately return, destroy or delete, any Confidential Information whether in hard copy or computerized form, including in any electronic device you own.'
            ),
            $('<p/>').html(
                'In the event you are subject to a disclosure requirement by a Court or government agency then you must provide immediate written notice to UBS (Attention: General Counsel&#39;s Office, 1000 Harbor Boulevard, 8th Floor, Weehawken, New Jersey 07086) of any disclosure requirement by a court or government agency in order to allow UBS an opportunity to respond to such a request. Notwithstanding the foregoing, nothing in this letter or any other agreement or document prohibits you from voluntarily communicating, without notice to or approval by UBS, with any government agency or self-regulatory organization (&#39;SRO&#39;) about a potential violation of a law or regulation or SRO regulation. With respect to your obligations to maintain in confidence any and all confidential and/or trade secret information of UBS, the Defend Trade Secrets Act of 2016 (“DTSA”), 18 U.S.C. § 1833(b), provides you with immunity from criminal or civil liability under any federal or state trade secret law for your disclosure of a trade secret that is made in confidence to a federal, state, or local government official, either directly or indirectly, or to an attorney, provided that it is disclosed solely for the purpose of reporting or investigating a suspected violation of law, or is made in a complaint or other document filed in a lawsuit or other proceeding and the document is filed under seal so that it is not disclosed to the public.'
            ),
      
            $('<p/>').html(
                'You also agree that your employment is contingent upon your signing and adhering to the Firm&#39;s Agreement Concerning the Handling of Confidential Information and the Assignment of Employee Inventions (&#39;Confidentiality Agreement&#39;), which is attached to this letter and incorporated by reference herein. '
            ), 
            $('<p/>').html(
                '<strong><u>' + ' Non-Solicitation ' + '</u></strong>' 
            ),
      $('<p/>').html(
                'You agree that during your employment, and for a period of twelve months from the termination date of your employment for whatever reason, you may not directly or indirectly for yourself or for any third party solicit, influence, induce, recruit or cause any employee of any UBS Group entity with whom you worked or supervised to terminate his or her employment with the UBS Group for the purpose of joining, associating or becoming employed with any business wherever located, with which or of which you are or anticipate becoming an employee, owner, partner, investor, member, agent, director, consultant, independent contractor or otherwise associated in any way whatsoever. As a condition of the UBS Group providing you with access to Confidential Information and the benefits of the Program, including but not limited to Program training, you further agree that during your employment, and for a period of twelve months from the termination date of your employment for whatever reason, you will not directly or indirectly solicit any of the clients or client relationships of any UBS Group entity that you either performed work for, supervised or actively solicited work from during the twelve months prior to the termination of your employment or whose name became known to you during your employment. “Solicit” as set forth in this Paragraph means that the you will not initiate, whether directly or indirectly, any contact or communication of any kind whatsoever, for the purpose of inviting, encouraging or requesting a client or that may have the effect of inviting, encouraging or requesting a client to transfer any account from the UBS Group to you or your new employer, to open a new account with you or your new employer, or to discontinue its business relationship with the UBS Group. "UBS Group" includes UBS Group AG and all of its subsidiaries and affiliates, including, without limitation, UBS. '
            ),
      $('<p/>').html(
                'The activities described above in this section shall be prohibited regardless of whether undertaken by you in an individual or representative capacity, and regardless of whether performed for your own account or for the account of another individual, partnership, firm, corporation or other business organization (other than UBS Group). '
            ),
      $('<p/>').html(
                'You acknowledge and agree that the UBS Group is global and includes offices throughout the world. You therefore acknowledge and agree that the foregoing provisions are necessary for the protection of the business and goodwill of the UBS Group, are not overly broad, and that they are reasonable and fair. You further acknowledge and agree that to the extent you are in breach of any of these restrictive covenants, the length of the restriction will be increased (or if such finding is made after the restriction has expired, reinstated) for such a period of time as to ensure that UBS Group has received the benefit of the full period of the restriction. '
            ),
      $('<p/>').html(
                'You agree that if any restriction set forth in this section is found by any court or arbitrator of competent jurisdiction to be unenforceable because it extends for too long a period of time or over too great a range of activities or in too broad a geographic area, it shall be interpreted to extend only over the maximum period of time, range of activities or geographic areas to which it may be enforceable. '
            ),
      $('<p/>').html(
                'In the event that any of the provisions contained in this section or the Protection of Confidential Information section above are breached by you, you understand that you will be liable to UBS for any damages and/or injury, including but not limited to reasonable attorneys&#39; fees, incurred to enforce the provisions of this letter. You also specifically agree that, in the event of breach of the Non-Solicitation and/or Protection of Confidential Information sections of this letter, damages alone will be an inadequate remedy and UBS will, in addition to damages for breach, be entitled to injunctive or other equitable relief against you to enforce the provisions of these sections. '
            ),
      $('<p/>').html(
                'YOU FURTHER EXPRESSLY CONSENT TO THE ISSUANCE OF A TEMPORARY RESTRAINING ORDER OR A PRELIMINARY INJUNCTION BY ANY COURT OR ARBITRATION PANEL WITH JURISDICTION OVER YOU TO PROHIBIT THE BREACH OF ANY PROVISION OF THIS LETTER, OR TO MAINTAIN THE STATUS QUO PENDING THE OUTCOME OF ANY ARBITRATION PROCEEDING THAT MAY BE INITIATED; AND, FURTHER, THAT THE ISSUE OF TEMPORARY AND PRELIMINARY INJUNCTIVE RELIEF MAY BE DECIDED BY A COURT AND NOT BY AN ARBITRATION PANEL SHOULD UBS IN ITS DISCRETION ELECT TO SEEK SUCH RELIEF. UBS SHALL NOT BE REQUIRED TO POST ANY BOND IN CONNECTION WITH THE FOREGOING. '
            ),
      $('<p/>').html(
                '<strong><u>' + 'Specified Employees' + '</u></strong>' 
            ),
            $('<p/>').html(
                'You understand and agree that the UBS Section 409A Specified Employee Policy (and any successor policy) may apply to you.'
            ),
            $('<p/>').html(
                'Notwithstanding anything in this letter to the contrary, if you experience a 409A Separation from Service and UBS determines that you are a ‘specified employee’ under the terms of the UBS Section 409A Specified Employee Policy (or any successor policy or, if no such policy is then in effect, within the meaning of Section 409A) on the date of your 409A Separation from Service any ' + ((employee.FLSA_Status=='Exempt') ? 'base salary' : '') + ((employee.FLSA_Status=='Non-Exempt') ? 'base compensation' : '') + ',   bonus or other benefits or compensation scheduled to be paid to you following your 409A Separation from Service will be delayed until, and will be paid on the first business day following the six month anniversary of your separation from service to the extent necessary to comply with, and avoid imposition on you of any additional tax or penalty under, Section 409A. '
            ),
            $('<p/>').html(
                'For purposes of this letter, the phrase ‘409A Separation from Service‘ will refer to your ‘separation from service’ within the meaning of Section 409A of the U.S. Internal Revenue Code (‘Section 409A’) and the regulations promulgated thereunder.  Your 409A Separation from Service will generally be deemed to occur on your first off-premises date, or such other time as Section 409A provides, even if you remain on payroll as of such date.'
            ), 
            $('<p/>').html(
                '<strong><u>' + 'Binding Mutual Arbitration of Disputes' + '</u></strong>' 
            ),
            $('<p/>').html(
                'UBS values each of its employees and fosters good relations with, and among, all of its employees.  UBS recognizes, however, that disagreements occasionally occur between an individual employee and UBS, or between employees in a context that involves UBS. '
            ),
            $('<p/>').html(
                'UBS believes that the resolution of such disagreements is best accomplished by internal dispute resolution and, where that fails, by external arbitration.  For these reasons, UBS has adopted an Employment Arbitration Agreement and Class, Collective and Representative Action Waiver (“Arbitration Agreement”).  The Arbitration Agreement is attached to this offer letter as Exhibit A and incorporated herein by reference.  By signing this Letter, you acknowledge that you have received and read to the Arbitration Agreement and that you agree to all of its terms. '
            ),
           $('<p/>').html(
                '<strong><u>' + 'Consent to Data Storage and Processing' + '</u></strong>' 
            ),
            $('<p/>').html(
                'You acknowledge that the UBS Group operates worldwide through branches, business groups, affiliates and subsidiaries and that personnel data forms or employment records (which may include sensitive personal data) may be maintained and shared (1) with such branches, business groups, affiliates and subsidiaries throughout the world; (2) with any third party performing functions, worldwide, on behalf of the UBS Group; and/or (3) as required by law.  You consent to such holding and processing of data as a condition of your employment.'
            ),
        
            $('<p/>').html(
                '<strong><u>' + 'Identity and Employment Eligibility Verification' + '</u></strong>' 
            ),
            $('<p/>').html(
                'No later than your first day of employment, you will need to complete Section 1 of U.S. Government Form I-9.  You will also need to produce appropriate documentation to verify your identity and eligibility to work in the United States by your third day of employment.'
            ),
        ///
            $('<p/>').html(
                '<strong><u>' + 'Immigration Compliance' + '</u></strong>' 
            ),
            $('<p/>').html(
                'Should you not timely apply for any required employment authorization, e.g., employment authorization card (EAD), if applicable (e.g., you are a student), or should you not receive the EAD from the U.S. Citizenship and Immigration Services (USCIS) by your start date, and you are unable to provide other means to verify your identity and eligibility to work in the United States, this Offer of employment will immediately become null and void and neither UBS, nor any affiliated entity, will have any obligation now or in the future to employ you under the terms of this Agreement or otherwise.'
            ),
            $('<p/>').html(
                'Should you need employment visa sponsorship now or in the future (e.g., at completion of your optional practical training/EAD authorization), this Offer and your continued employment will be contingent upon the appropriate employment visa being filed with and approved by the USCIS.  If, however, the USCIS denies our application for a visa on your behalf, we are otherwise unable to make application for you, or you are unable to provide other means to verify your identity and eligibility to work in the United States, then this Offer of employment will immediately become null and void and neither UBS, nor any affiliated entity, will have any obligation now or in the future to employ you under the terms of this Agreement or otherwise.  Should the USCIS denial occur after you have already started working for UBS under proper U.S. work authorization, your employment will cease as of the expiration date of the current work authorization (e.g., expiration of your EAD card) and neither UBS, nor any affiliated entity, will have any obligation to employ you under the terms of this Agreement or otherwise.'
            ),
             $('<p/>').html(
                '<strong><u>' + 'References and Background Check' + '</u></strong>' 
            ),
            $('<p/>').html(
                'Your employment will be contingent upon satisfactory completion of all pre-employment and post-employment processing, including, but not limited to, the employment application; background screening, involving the verification of work history, education and fingerprinting.'
            ),
        
             $('<p/>').html(
                '<strong><u>' + 'Representations and Warranties' + '</u></strong>' 
            ),
            $('<p/>').html(
                'You represent and warrant that (1) you will not possess as of your Start Date and during your employment with the Firm, any material, tangible, confidential or proprietary information, including documents, files, disks, or other materials, belonging to your former employer or its affiliates; (2) as of your Start Date, you have not solicited any employees or clients of your former employer or its affiliates to change their association with your former employer or its affiliates; (3) you are not subject to any restrictive covenant, notice of termination requirement, non-competition or non-solicitation provision with any former employer or any agreement that prevents your entering into employment by the Firm and that you conducted a due diligence review of copies of all agreements you may have entered into with your former employer to ensure that this is correct; (4) you have not made any material misrepresentation or omission in the course of your application to the Firm regarding employment or your ability to perform the position offered; and (5) no representations were made to you concerning this offer or the terms or conditions of your anticipated employment except as expressly set out in this letter.'
            ),
            
             $('<p/>').html(
                '<strong><u>' + 'At-Will Employment' + '</u></strong>' 
            ),
            $('<p/>').html(
                'This offer letter does not constitute an agreement by the Firm to employ you for a specified period of time, does not constitute a promise of continued employment with the Firm for any period whatsoever, and does not in any way alter your status as an ‘employee at will.’  This means that the Firm may terminate your employment at any time, with or without reason, and without prior notice.  You may terminate your employment at any time, with or without reason, subject to the notice provisions that may be contained in this letter.  No modification of your at will status is valid, unless contained in a writing signed by you and by two authorized representatives of the Firm.'
            ),
             
             $('<p/>').html(
                '<strong><u>' + 'Entire Agreement' + '</u></strong>' 
            ),
            $('<p/>').html(
                'This letter contains the entire understanding and agreement between the parties concerning the subject matter hereof, and supersedes all prior agreements, understandings, discussions, negotiations, and undertakings, whether written or oral, between the parties with respect thereof.  You acknowledge and agree that the Firm has not made any representation with respect to the matters set forth in this letter, except as specifically set forth herein, and you acknowledge that you have relied on your own judgment in accepting this offer of employment, should you choose to accept.  No waiver by either party of any breach by the other party of any condition or provision contained in this letter to be performed by such other party shall be deemed a waiver of a similar or dissimilar condition or provision at the same or any prior or subsequent time.  Any waiver must be in writing and signed by two authorized officers of the Firm. The material terms and conditions of this letter cannot be modified unless in a writing signed by two officers of the Firm, except to the extent that certain terms of this letter may be modified by Firm policies as may be amended from time to time.'
            ),
           
             $('<p/>').html(
                '<strong><u>' + 'Governing Law' + '</u></strong>' 
            ),
            $('<p/>').html(
                 'Except as otherwise specifically provided in this letter, this  letter shall be governed, construed and enforced in accordance with the laws of the State of ' + locationState + ' without regard to conflict of law principles.  In the event that any provision or portion of this letter shall be determined to be invalid or unenforceable for any reason, in whole or in part, the remaining provisions of this letter shall be unaffected thereby and shall remain in full force and effect to the fullest extent permitted by law.  You may not assign this letter; however, the Firm may assign this letter to any entity within the UBS Group.'
            ),
       $('<p/>').html(
                'If the foregoing accurately reflects our understanding, please print, sign and return by email the fully executed letter and the completed data form by ' + returnDate() + '. ' + 'Please note that you will not be entered on payroll until we have received both of these documents.'
            ),
            $('<p/>').html(
                employee.First_Name  + ', we are all looking forward to working with you. <br><br>'
            )               
            
            //////////////////////////end main offer letter boddy////////////////////

                    
          
        )//end of offerClause
    ); // End markup1 append


$("#markup2").html("").append(
        $('<div class="col-xs-12"/>').append(
            $('<div class="offerClause5"/>').append(
                $('<p/>'),
                $('<p/>').html(
                'Sincerely,'
                ),
                
                $('<p/>').html(
                    employee.Legal_Entity
                )
            )
        )
);


 $("#markup3").html("").append(
        $('<div class="col-xs-6 text-center"/>').append(
            $('<div class="offerClause2"/>').append(
                $('<p/>').append(
                    $('<span/>').html('JoAnna Costa<br>'),
                    $('<span/>').html('Director<br>'),
                    $('<span/>').html('Human Resources<br>')
                ),
                $('<p/>')
            )
        ),
        $('<div class="col-xs-6 text-center"/>').append(
            $('<div class="offerClause3"/>').append(
                $('<p/>').append(
                    $('<span/>').html('Jane Eisland<br>'),
                    $('<span/>').html('Executive Director<br>'),
                    $('<span/>').html('Head of Next Generation<br>')
                ),
                $('<p/>')
            )
        )
);
    
 $("#markup4").html("").append(
        $('<div class="col-xs-12"/>').append(
            $('<div class="offerClause4"/>').append(
                $('<p/>'),
                $('<p/>').html(
                    $('<strong/>').html(
                    'BY ACCEPTING THIS OFFER OF EMPLOYMENT THROUGH MY SIGNATURE ABOVE, I AM AGREEING TO BE BOUND BY THE ARBITRATION AGREEMENT, WHICH IS ATTACHED TO THIS LETTER AS EXHIBIT A.  THE ARBITRATION AGREEMENT REQUIRES THAT BOTH UBS AND I RESOLVE ANY COVERED CLAIMS, AS DEFINED BY THAT AGREEMENT, IN FINAL AND BINDING ARBITRATION ON A NON-CLASS, NON-COLLECTIVE, AND NON-REPRESENTATIVE ACTION BASIS.'
                    )
                ),
                $('<p/>'),
                $('<p/>'),
                $('<p/>').html(
                    '<strong><u><em><center>Exhibit A</center><center>Employment Arbitration Agreement And Class, Collective and Representative Action Waivers</center></em></u></strong>'
                ),
                $('<p/>').html(
                '<strong><u><em>Statement of Intent</em></u></strong>'
                ),
                $('<p/>').html(
                'UBS<sup>1</sup> values each of its employees and fosters good relations with, and among, all of its employees.  UBS recognizes, however, that disagreements occasionally occur between an individual employee and UBS, or between employees in a context that involves UBS.'
                ),
                $('<p/>').html(
                'UBS believes that the resolution of such disagreements is best accomplished by internal dispute resolution and, where that fails, by external arbitration.  For these reasons, UBS has adopted this Employment Arbitration Agreement (‘’Arbitration Agreement’’), which is applicable to all Covered Claims (as defined below) whether initiated by you or by UBS, as further described below.  Arbitration shall be conducted either under the auspices and rules of the Financial Industry Regulatory Authority, Inc. (‘’FINRA’’), where applicable, or JAMS as follows:'
                ),
                $('<p/>').html(
                '<strong><u><em>Arbitration Agreement</em></u></strong>'
                ),
                $('<ul class="alphabet_list2"/>').append(
                    $('<li/>').html(
                    '<strong><u>Binding Mutual Arbitration.</u></strong> &nbsp;&nbsp;You and UBS agree that any Covered Claims (defined below) will be resolved by final and binding arbitration as set forth in this Arbitration Agreement.  This Arbitration Agreement shall be governed by and interpreted in accordance with the Federal Arbitration Act (‘’FAA’’) and the law of the State of New York to the extent New York law is not inconsistent with the FAA and without regard to conflicts of law principles.  This Arbitration Agreement applies to both you and UBS and makes arbitration the required and exclusive forum for the resolution of all Covered Claims (defined below) between you and UBS.  Therefore, you and UBS are giving up your and its right to a jury trial, in any forum, of Covered Claims.<p></p>'
                    ),
                    $('<li/>').html(
                    '<strong><u>Covered Claims.</u></strong> &nbsp;&nbsp;Except for the Excluded Claims (defined below), and to the fullest extent permitted by law, Covered Claims include any and all claims or disputes between you and UBS, or its parents, subsidiaries, affiliates, partners, predecessors, and successor corporations and business entities or any entity of the UBS Group, and its and their respective officers, directors, employees, and agents, including but not limited to all past, present or future claims based on, arising out of or which arose out of, or in any way relating to your prospective or actual employment, hiring, compensation, benefits or terms and conditions of employment with UBS or any of its current, former or future parents, subsidiaries, affiliates, partners, predecessors, or successor or affiliated or related corporations or business entities (including, without limitation, any entity of the UBS Group) or the termination thereof, including but not limited to contract, tort, defamation, breach of fiduciary duty and other common law claims, wage and hour claims, statutory discrimination, harassment and retaliation claims, and any claims arising under or relating to any federal, state or local constitution, statute or regulation, including, without limitation, the Fair Labor Standards Act (“FLSA”), Title VII of the Civil Rights Act (“Title VII”), the Age Discrimination in Employment Act (“ADEA”), the Older Workers Benefit Protection Act (“OWBPA”), the Employee Retirement Income Security Act ("ERISA"), the Worker Adjustment and Retraining Notification Act (“WARN”), the Equal Pay Act (“EPA”), the Americans With Disabilities Act (“ADA”), the Family and Medical Leave Act (“FMLA”), the Consolidated Omnibus Budget Reconciliation Act (“COBRA”), and all amendments thereto, and any and all other federal, state or local wage and hour, compensation, benefits, or discrimination law, and any and all other federal, state, or local constitutional, statutory, regulatory, or common law claims or causes of action now or hereafter recognized.  Except as provided herein, this Arbitration Agreement applies to both existing and future claims, including any claims based on conduct that occurred before this Arbitration Agreement.<p></p>'
                    ),
                    $('<li/>').html(
                    '<strong><u>Excluded Claims.</u></strong> &nbsp;&nbsp;The following claims and disputes are not subject to this Arbitration Agreement:  (i) applications by either party for temporary or preliminary injunctive relief in aid of arbitration or for the maintenance of the status quo pending arbitration; (ii) claims for workers’ compensation benefits, but not retaliation claims arising out of or relating to claims for workers’ compensation benefits; (iii) claims for unemployment compensation benefits; (iv) claims under the National Labor Relations Act, as amended, within the exclusive jurisdiction of the National Labor Relations Board; and (v) any claim that is expressly precluded from arbitration by a federal statute.  Nothing in this Arbitration Agreement shall prohibit you from filing a charge or complaint or participating in an investigation resulting from the filing of a charge or complaint with the U.S. Equal Employment Opportunity Commission (“EEOC”), the National Labor Relations Board (“NLRB”), the U.S. Department of Labor (“DOL”), the Occupational Safety and Health Administration (“OSHA”), or any other federal, state, or local administrative agency.  You also have the right to challenge the validity of the terms and conditions of this Arbitration Agreement on any grounds that may exist in law and equity, and UBS shall not discipline, discharge, or engage in any retaliatory actions against you in the event you choose to do so or engage in other protected legal activity.  UBS, however, reserves the right to enforce the terms and conditions of this Arbitration Agreement in any appropriate forum.<p></p>'
                    ),
                    $('<li/>').append(
            $('<span/>').html(
            '<strong><u>CLASS, COLLECTIVE, AND REPRESENTATIVE ACTION WAIVERS.</u></strong> &nbsp;&nbsp;<strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, YOU AND UBS AGREE THAT ARBITRATION ON A NON-CLASS, NON-COLLECTIVE AND NON-REPRESENTATIVE ACTION BASIS PURSUANT TO THIS ARBITRATION AGREEMENT IS THE EXCLUSIVE PROCESS FOR RESOLVING ANY COVERED CLAIMS THAT MIGHT OTHERWISE BE BROUGHT ON A CLASS, COLLECTIVE OR REPRESENTATIVE ACTION BASIS.  ACCORDINGLY, YOU MAY NOT PARTICIPATE AS A CLASS OR COLLECTIVE ACTION REPRESENTATIVE OR AS A MEMBER OF ANY CLASS, COLLECTIVE OR REPRESENTATIVE ACTION, AND WILL NOT BE ENTITLED TO ANY RECOVERY FROM A CLASS, COLLECTIVE OR REPRESENTATIVE ACTION IN ANY FORUM RELATING TO ANY COVERED CLAIMS.</strong> An arbitrator appointed under the rules referenced by this Arbitration Agreement shall not conduct a class, collective or representative action arbitration and shall not allow you to serve as a representative of others in an arbitration of Covered Claims conducted under this Arbitration Agreement.    You further agree that if you are included within any class action, collective action or representative action in court or in arbitration involving any such Covered Claims, you will take all steps necessary to opt-out of the action or refrain from opting in, as the case may be.<p></p>'
            ),
            $('<p/>').html(
            'Nothing in this section shall preclude you from pursuing or participating in a class, collective or representative action in court where your claim is based solely on your status as a customer or an investor and does not arise out of or in any way relate to your employment relationship with UBS or any entity of the UBS Group AG (should you eventually become employed by one of those entities).'
            ),
            $('<p/>').html('Any disputes concerning the validity or enforceability of the Class, Collective and Representative Action Waivers contained in this Arbitration Agreement shall be governed by and determined under and in accordance with the FAA, and shall be decided only by a court of competent jurisdiction, not by an arbitrator.  To the extent any Covered Claims are not eligible for arbitration or otherwise are excluded from or not subject to arbitration, for any reason, the Class, Collective and Representative Action Waivers set forth in this Arbitration Agreement remains valid and enforceable.')
            
                    ),
                    $('<li/>').append(
                        $('<span/>').html(
                        '<strong><u>Selection and Rules.</u></strong> &nbsp;&nbsp;Except as specified herein, the applicable arbitration rules will be the rules of the selected arbitration forum as indicated below, or any successor rules or, if none exist, the rules most applicable to employment claims and disputes and, if the forum no longer exists, the successor forum.<p></p>'
                        ),
                        $('<div style="margin-left:30px"/>').append(
                            $('<p/>').html(
                            '<strong>i.  Forum:  FINRA & JAMS.</strong>'
                            ),
                            $('<p/>').html(
                            '<strong>Registered Employees:</strong>  Except as specified herein, if you are a registered employee or have executed a Uniform Application for Securities Industry Registration or Transfer (Form U-4) and/or hold a securities license with a self-regulatory organization (“registered employee”), any arbitration of a Covered Claim that is properly subject to the jurisdiction of FINRA must be conducted under the auspices and rules of FINRA in accordance with the FINRA Code of Arbitration Procedure for Industry Disputes (“FINRA Arbitration Rules”)  If a Covered Claim of a registered employee is not eligible for arbitration before FINRA or is otherwise excluded from or not subject to arbitration before FINRA, then such Covered Claim will be resolved by final and binding arbitration conducted under the auspices and rules of JAMS ("JAMS Arbitration").  In addition, in lieu of FINRA arbitration, a registered employee may elect to arbitrate discrimination claims under any federal, state or local law (including claims of harassment and retaliation under those laws) before JAMS.  Any JAMS Arbitration shall be conducted in accordance with and subject to the JAMS Employment Arbitration Rules and Procedures and the JAMS Policy on Employment Arbitration Minimum Standards of Procedural Fairness (“JAMS Arbitration Rules”),  except as specified herein, and shall be conducted before a single arbitrator unless all parties to the arbitration agree otherwise in writing.'
                            ),
                            $('<p/>').html(
                            '<strong>Non-Registered Employees:</strong>  Except as specified herein, any arbitration of a Covered Claim of a non-registered employee, or of a registered employee that is not otherwise eligible for arbitration before FINRA (as indicated above), will be conducted under the auspices and rules of JAMS in accordance with and subject to the JAMS Arbitration Rules, except as specified herein, and shall be conducted before a single arbitrator unless all parties to the arbitration agree otherwise in writing.'
                            ),
                            $('<p/>').html(
                            'Notwithstanding any language in this Arbitration Agreement, to the extent any of the terms, conditions or requirements of this Arbitration Agreement conflict with the FINRA Arbitration Rules or JAMS Arbitration Rules, the terms, conditions or requirements of this Arbitration Agreement shall govern.'
                            ),
                            $('<p/>').html(
                            '<strong>ii.  Hearing Location.</strong><br><br>Arbitration shall be held in the city, county, town or municipality in which you worked at the time the claim arose or, if not possible, in the city, county, town or municipality closest to your principal place of employment at the time the claim arose where the arbitration can be held, unless all parties to the arbitration agree in writing to a different location for the arbitration.  If your current or last principal place of employment with UBS is outside of the U.S., the arbitration shall be held in New York, New York.'
                            ),
                            $('<p/>').html(
                            '<strong>iii.  Awards.</strong><br><br>Arbitrators are required to issue a written award and, subject to the parties’ right to appeal or seek vacatur under applicable law, their awards shall be final and binding, and any judgment or award issued by an arbitrator may be entered in any court of competent jurisdiction.  No arbitration award or decision will have any preclusive effect as to any issues or claims in any other arbitration or court proceeding unless each of the parties in such proceeding was also a named party in the arbitration.'
                            ),
                            $('<p/>').html(
                            '<strong>iv.  Remedies.  </strong><br><br>You and UBS agree that the arbitrator(s) is authorized to award any party the full remedies that would be available to such party if the Covered Claim had been filed in a court of competent jurisdiction, including attorneys’ fees and costs.'
                            )
                        )
                    ),
                    $('<li/>').html(
                    '<strong><u>Additional Provisions Applicable to Arbitration of Statutory Claims and Counterclaims.</u></strong> &nbsp;&nbsp;Subject to any applicable fee-shifting provisions, if you initiate arbitration of statutory claims with FINRA or JAMS or assert any statutory claims as counterclaims, you shall be responsible for the filing fee required to initiate arbitration of such claims up to the amount of the filing fee you would have incurred had you filed such claims in federal district court, and UBS shall be responsible for all additional arbitration filing fees, forum fees, and other fees and costs assessed in any such arbitration.<p></p>'
                    ),
                    $('<li/>').html(
                    '<strong><u>Additional Provisions Applicable to Arbitration Before JAMS.  </u></strong> &nbsp;&nbsp;In any arbitration before JAMS, the parties may file and the arbitrator shall hear and decide at any point in the proceedings any motion permitted by the Federal Rules of Civil Procedure, including but not limited to motions to compel discovery, motions for protective orders, motions to dismiss, motions for summary judgment, and motions in limine.<p></p>'
                    ),
                    $('<li/>').html(
                    '<strong><u>Pending Class or Collective Actions.</u></strong> &nbsp;&nbsp;Nothing set forth in this Arbitration Agreement applies to any Covered Claims in a class or collective action for which you are a putative member of and that is pending and conditionally certified or certified on the date you enter into this Arbitration Agreement, and any such Covered Claims shall be governed by the agreement(s) between you and UBS in effect at the time such Covered Claims were filed.<p></p>'
                    )
                ),
                $('<p/>'),
                $('<p/>').html(
                '<strong><u><em>At-Will Employment</em></u></strong>'
                ),
                $('<p/>').html(
                'Employment with UBS is a voluntary relationship for no definite period of time, and nothing in this Arbitration Agreement constitutes an express or implied contract of employment for any definite period of time.  This Arbitration Agreement does not constitute, nor should it be construed so as to constitute, a waiver by UBS of its rights under the “employment-at-will” doctrine, nor does it afford a prospective, current or former employee any rights or remedies not otherwise available under applicable law.'
                ),
                $('<p/>').html(
                '<strong><u><em>Consideration</em></u></strong>'
                ),
                $('<p/>').html(
                'Your acceptance of employment with UBS, continued employment with UBS, receipt of compensation and/or benefits from UBS, and/or eligibility and consideration for merit increases, incentive, retention, and equity  awards and/or any other form of compensation or benefit provided to you by UBS shall constitute consideration for your rights and obligations under this Arbitration Agreement, including the Class, Collective and Representative Action Waivers contained herein.'
                ),
                $('<p/>').html(
                '<strong><u><em>Modification</em></u></strong>'
                ),
                $('<p/>').html(
                'UBS may from time to time modify or discontinue the Arbitration Agreement by providing thirty (30) calendar days written notice; however, any such modification or rescission shall only be applied prospectively.  An employee shall complete the processing of any dispute pending pursuant to this Arbitration Agreement at the time of an announced change, under the terms of the procedures in effect at the time such Covered Claims were initially submitted to arbitration pursuant to this Arbitration Agreement.'
                ),
                $('<p/>').html(
                '<strong><u><em>Severability</em></u></strong>'
                ),
                $('<p/>').html(
                'The provisions of this Arbitration Agreement shall be severable and, if any provisions hereof shall be determined to be legally unenforceable or void, such unenforceable or void provision shall not affect the legality, validity or enforceability of the remaining provisions hereof.  Any such unenforceable or void provision shall be severed from the remaining provisions as appropriate, to the extent permitted by law, except that, in the event any of the waivers set forth in sub-paragraph d of this Arbitration Agreement (“Class, Collective and Representative Action Waivers’‘) are determined to be invalid, unenforceable or void with respect to any Covered Claim, that Covered Claim and only that Covered Claim shall proceed in a court of competent jurisdiction and not in arbitration (and such court shall be the exclusive forum for all such claims), and the waivers set forth in sub-paragraph d of this Arbitration Agreement shall remain effective and enforceable with respect to all other Covered Claims.  If a court of competent jurisdiction determines that a particular provision of this Agreement is invalid, unenforceable or void under the applicable law in a particular jurisdiction, such provision will not be enforced with respect to you in that jurisdiction but shall remain effective and enforceable in all other jurisdictions.'
                )
            )
        )
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

function returnDate() {
  var dt = new Date();
  var mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dys = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var rdt = dt.setDate(dt.getDate() + 3);
  var drt = new Date(rdt);
  var mm = drt.getMonth(),
      dd = drt.getDate(),
      yyyy = drt.getFullYear();
      day = drt.getDay();

  return dys[parseInt(day)] + ', ' + mon[mm] + ' ' + parseInt(dd) + ', ' + yyyy;
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

     var name = fnGetName(employee.First_Name, employee.Middle_Name, employee.Last_Name);
    _fnAssignValue('Full_Name', name);


    // render template
    fnView();


    // completed letter
    if (!$("input.calendar_button").length) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

var imgHeader = "<img src='' />";
var imgDISignature = "<img src='' />";
var imgASSSignature = "<img src='' />";

//Create an array of info to pass to complete the offer letter
//0 for images sending an image tag, 1 for sections of text sneding the ID of the field that holds the HTML.
var arrParts = [
  [0,imgHeader],
  [1,'hidden_pg'],
  [1,'hidden_pg5'],
  [0,imgASSSignature],
  [1,'hidden_pg2'],
  [0,imgDISignature],
  [1,'hidden_pg3'],
  [1,'hidden_pg4']
];
        //showCompletedOfferLetter('incomplete', 'complete', arrParts);
    }
});
