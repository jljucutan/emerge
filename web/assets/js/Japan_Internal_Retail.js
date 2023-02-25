// Japan Internal Retail 
function fnView() {
    // English & Japanese Content
    $("#markup").html("").append(
        // Company Logo
        $('<div class="col-lg-12"/>').append(
            $('<div class="offerClause"/>').append(
             //   $('<div id="srt_eform_logo" class="text-right"/>').html('<img src=' + company.Logo + '>')
            )
        ),
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<div/>').append(
				$('<p/>').html(
					$('<span/>').html(employee.Current_Date)
				),
				$('<p/>').html(
					''
				),
				$('<p/>').append(
					$('<span/>').html('Dear ' + employee.First_Name + ',')
				)
            ),
         






            // Employee Type == Part Time AND JP Retail New Offer Type is NOT Standard General
         ((employee.Employee_Type == 'PT') && (employee.JP_Retail_New_Offer_Type == 'Fixed Term General')) &&
            $('<div/>').append(
				$('<p/>').html(
					'Apple Japan, Inc. (‘Apple’) is delighted to offer you the position of ' + employee.Retail_Job_Title + ' (Part-Time Contract) with the job level of ' + employee.Job_Level + '. In your new position you will report to the Store Leader, at Apple Store, ' + employee.Work_Location + '. These conditions may be subject to change at the Apple’s discretion. We look forward to your continued contribution. '
				),
				$('<p/>').html(
					'Apple Japan 合同会社（以下、「Apple」といいます）は、 あなたをアップルストア' + employee.Work_Location_Code + '店にて' + employee.Job_Level + 'の、' + employee.Retail_Job_Title + '(パートタイム契約社員) のポジションで採用させていただきたく、お知らせ致します。この新たなポジションでは、アップルストア' + employee.Work_Location_Code + 'のストアリーダーが、あなたの上司となります。ここに記載する条件は、Appleの裁量で変更することがあります。Appleは、あなたの更なる活躍に期待します。 '
				)
            ),
            // Employee Type == Full Time AND JP Retail New Offer Type is NOT Standard General
           ((employee.Employee_Type == 'FT') && (employee.JP_Retail_New_Offer_Type == 'Fixed Term General')) && 
            $('<div/>').append(
				$('<p/>').html(
					'Apple Japan, Inc. (‘Apple’) is delighted to offer you the position of ' + employee.Retail_Job_Title + ' (Full-time Contract) with the job level of ' + employee.Job_Level + '. In your new position you will report to the Store Leader, at Apple Store, ' + employee.Work_Location + '. These conditions may be subject to change at the Apple’s discretion. We look forward to your continued contribution. '
				),
				$('<p/>').html(
					'Apple Japan 合同会社（以下「Apple」といいます）は、 あなたをアップルストア' + employee.Work_Location_Code + '店にて' + employee.Job_Level + 'の、' + employee.Retail_Job_Title + '（フルタイム契約社員）のポジションで採用させていただきたく、お知らせ致します。この新たなポジションでは、アップルストア' + employee.Work_Location_Code + 'のストアリーダーがあなたの上司となります。ここに記載する条件は、Apple の裁量で変更する場合があります。Appleは、あなたの更なる活躍に期待します。'
				)
            ),

  // New Employee Type == Part Time AND Retail New Offer Type == Standard General
           ((employee.Employee_Type == 'PT') && (employee.JP_Retail_New_Offer_Type == 'Standard General')) &&
            $('<div/>').append(
				$('<p/>').html(
					'Apple Japan, Inc. (‘Apple’) is delighted to offer you the position of ' + employee.Retail_Job_Title + ' (Part-Time and Permanent) with the job level of ' + employee.Job_Level + '. In your new position you will report to the Store Leader, at Apple Store, ' + employee.Work_Location + '. These conditions may be subject to change at the Apple’s discretion. We look forward to your continued contribution.'
				),
				$('<p/>').html(
					'Apple Japan 合同会社（以下、「Apple」といいます）は、 あなたをアップルストア' + employee.Work_Location_Code + '店にて' + employee.Job_Level + 'の、' + employee.Retail_Job_Title + '(すなわち、パートタイム勤務の無期社員) のポジションで採用させていただきたく、お知らせ致します。この新たなポジションでは、アップルストア' + employee.Work_Location_Code + 'のストアリーダーが、あなたの上司となります。ここに記載する条件は、Appleの裁量で変更することがあります。Appleは、あなたの更なる活躍に期待します。'
				)
            ),
  // New Employee Type == Full Time AND Retail New Offer Type == Standard General
           ((employee.Employee_Type == 'FT') && (employee.JP_Retail_New_Offer_Type == 'Standard General')) &&
            $('<div/>').append(
				$('<p/>').html(
					'Apple Japan, Inc. (‘Apple’) is delighted to offer you the position of ' + employee.Retail_Job_Title + ' with the job level of ' + employee.Job_Level + '. In your new position you will report to the Store Leader, at Apple Store, ' + employee.Work_Location + '. These conditions may be subject to change at the Apple’s discretion. We look forward to your continued contribution.' 
				),
				$('<p/>').html(
					'Apple Japan 合同会社（以下、「Apple」といいます）は、 あなたをアップルストア' + employee.Work_Location_Code + '店にて'   + employee.Job_Level + 'の、' + employee.Retail_Job_Title + 'のポジションで採用させていただきたく、お知らせ致します。この新たなポジションでは、アップルストア' + employee.Work_Location_Code + 'のストアリーダーが、あなたの上司となります。ここに記載する条件は、Appleの裁量で変更することがあります。Appleは、あなたの更なる活躍に期待します。'
				)
            ),
           
          // JP Retail New Offer Type is Fixed Term General
            (employee.JP_Retail_New_Offer_Type == 'Fixed Term General') &&
            $('<div/>').append(
				$('<p/>').html(
					'Commencement 雇用の開始'
				),
				$('<p/>').html(
					'Your effective start date with Apple will be ' + employee.English_Start_Date + ' with an end date of ' + employee.English_Termination_Date + '. '
				),
				$('<p/>').html(
					'Before the end of your employment period, Apple will review your performance against your position/responsibilities and Apple will communicate whether there is intent to extend to you a new offer of employment.'
				),
				$('<p/>').html(
					'Appleでの雇用開始日は、' + employee.Japanese_Start_Date + 'であり、終了日は' + employee.Japanese_Termination_Date + 'です。'
				),
				$('<p/>').html(
					'Appleは、雇用期間終了時までに、ポジションおよび職務に照らしたパフォーマンス評価を行い、新たな雇用期間のオファーを行う意図を有するか否か、お知らせします。'
				)
            ),


    // JP Retail New Offer Type == Standard General && Internal Movement != International Transfer
            (employee.JP_Retail_New_Offer_Type == 'Standard General') && (employee.Internal_Movement != 'International Transfer') &&
            $('<div/>').append(
				$('<p/>').html(
					'Commencement 雇用の開始'
				),
				$('<p/>').html(
					'Your effective start date in the Standard Badge position will be ' + employee.English_Start_Date + '. Your employment period is indefinite.'						
                              	),
				$('<p/>').html(
					'あなたの正社員登用日は、' + employee.Japanese_Start_Date + 'です。あなたの雇用契約に、期間の定めはありません。'	
			)
                                  ),

    // JP Retail New Offer Type == Standard General && Internal Movement == International Transfer
            (employee.JP_Retail_New_Offer_Type == 'Standard General') && (employee.Internal_Movement == 'International Transfer') &&
            $('<div/>').append(
				$('<p/>').html(
					'Commencement 雇用の開始'
				),
				$('<p/>').html(
					'Your effective start date will be ' + employee.English_Start_Date + '. '						
                              	),
				$('<p/>').html(
					'Appleでの雇用開始日は、' + employee.Japanese_Start_Date + 'です。'	
			)
                                  ),



// JP Retail New Offer Type == Standard General && Internal Movement != International Transfer
          (employee.JP_Retail_New_Offer_Type == 'Standard General') && (employee.Internal_Movement != 'International Transfer') &&
            $('<div/>').append(
				$('<p/>').html(
                                       	'Hours of work, Holidays  就業時間, 休日'
				),
				$('<p/>').html(
					'You will work on the shifts and take breaks according to the schedule provided by the store and Rules of Employment document for Retail Standard Badge Employee.  You will be entitled to 2 days off per week.  You may also be required to work reasonable additional overtime or holiday hours.'
),
				$('<p/>').html(
'You are eligible for National Holidays according to the Rules of Employment for Retail Store Standard Employees and as published on People site. Because you work on shift, Apple may schedule the holiday on different days and will notify you in advance.'
				),
				$('<p/>').html(
					'あなたの就業時間および休憩は、勤務するストアのシフトスケジュールおよびRetail正社員就業規則の定めにより決定します。1週間のうち、2日を休日とします。また、合理的な範囲内において、時間外または休日労働を命じられる場合があります。'
),

$('<p/>').html(
'国民の祝日、及び就業規則で定め、People siteに休日として掲載する日を、休日とします。なお、シフト勤務のため、週の所定休日はAppleの事前の通知により、週により曜日が変動し得ます。'
				)
),

// JP Retail New Offer Type == Standard General && Internal Movement == International Transfer
          (employee.JP_Retail_New_Offer_Type == 'Standard General') && (employee.Internal_Movement == 'International Transfer') &&
            $('<div/>').append(
				$('<p/>').html(
                                       	'Hours of work, Holidays  就業時間, 休日'
				),
				$('<p/>').html(
					'Your normal working hours will be 40 hours per week and you will work on the shifts and take breaks according to the schedule provided by the store and Rules of Employment.  You will be entitled to 2 days off per week.  You may also be required to work reasonable additional overtime or holiday hours.'
),
				$('<p/>').html(
'In addition to the two days off per week, you are eligible for National Holidays and company holidays according to the Rules of Employment and as published on People site. Your number of days of paid vacation will be prorated in accordance with your start date. You will be eligible for additional vacation days, related to your years of service and other types of leaves as described in the Rules of Employment document.'
				),
				$('<p/>').html(
					'所定の就業時間は、週40時間として、ストアの勤務シフトにより定められます。就業時間、休憩、シフトスケジュールについては、Retail正社員就業規則記載の内容を適用します。1週間のうち、2日を休日とします。また、合理的な範囲内において、時間外または休日労働を命じられる場合があります。'
),

$('<p/>').html(
'週2日の休日に加え、国民の休日及びその他就業規則で定め、HRWebに休日として掲載する日を、休日とします。有給休暇は、就業規則に定めるとおり、勤続年数により追加し、他の休暇も就業規則の定めによります。'
				)
),

// Fixed Term General and Part Time
            ((employee.Employee_Type == 'PT') && (employee.JP_Retail_New_Offer_Type == 'Fixed Term General')) &&
            $('<div/>').append(
				$('<p/>').html(
                                       	'Hours of work 就業時間'
				),
				$('<p/>').html(
					'Your normal working hours will be less than 30 hours per week in accordance with a scheduled shift provided by the store. You may also be required to work reasonable additional overtime or holiday work hours.'
),
				$('<p/>').html(
					'所定の就業時間は、週30時間未満とし、ストアの勤務シフトにより定めます。ただし、合理的な範囲内での、時間外または休日労働を命じられることがあります。'
)
),

// Fixed Term General and Full Time
            ((employee.Employee_Type == 'FT') && (employee.JP_Retail_New_Offer_Type == 'Fixed Term General')) &&
            $('<div/>').append(
				$('<p/>').html(
                                       	'Hours of work 就業時間'
				),
				$('<p/>').html(
					'Your normal working hours will be 40 hours per week in accordance with a scheduled shift provided by the store. You will be entitled to 2 days off per week. You may also be required to work reasonable additional overtime or holiday work hours.'
),
				$('<p/>').html(
					'所定の就業時間は、週40時間として、ストアの勤務シフトにより定めます。1週間のうち、2日を休日とします。ただし、合理的な範囲内での、時間外または休日労働を命じられることがあります。'
				)
),

// Retail Offer Type == PT Standard General
            ((employee.Employee_Type == 'PT') && (employee.JP_Retail_New_Offer_Type == 'Standard General')) &&
            $('<div/>').append(
                                $('<p/>').html(
					'Vacation, Holiday (days off) 休日·休暇'
				),
				$('<p/>').html(
					'Your annual leaves entitlement will continue to be based on your years of service and the number of actual days worked, as described in the Rules of Employment document.  The payment of a day of annual leave or other Apple supplementary paid leaves will be calculated based on your average salary over 3 months.'
				),
				$('<p/>').html(
					'年次有給休暇は、就業規則に定める通り、今後も勤続年数と実労働日数によって付与されます。年次有給休暇およびその他Appleが付与する休暇（有給）を取得した際の支給額は、過去３ヶ月平均給与を元に計算し、支払います。'
            )
),

// Retail Offer Type == Fixed Term General
            (employee.JP_Retail_New_Offer_Type == 'Fixed Term General') &&
            $('<div/>').append(
                                $('<p/>').html(
					'Vacation, Holiday (days off) 休日·休暇'
				),
				$('<p/>').html(
					'You are eligible for one day off per week, as well as company shutdown on January 1st and other types of leaves as described in the Rules of Employment document. Your number of days of paid vacation will be set after completion of your first 6 months of employment, and you will be eligible for additional vacation days, related to your years of service, as described in the Rules of Employment document.'
				),
				$('<p/>').html(
					'休日は、週1日とし、また1月1日その他就業規則で定める会社の休日とします。有給休暇は、勤務開始日から6か月経過時に確定し、その後は就業規則に定めるとおり、勤続年数により追加されます。'
            )
),

            // Employee Type == Full Time Standard General
            ((employee.Employee_Type == 'FT') && (employee.JP_Retail_New_Offer_Type == 'Standard General')) &&
            $('<div/>').append(
				$('<p/>').html(
					'Salary 給与'
				),
				$('<p/>').html(
					'You will receive an annual base salary of ' + employee.Salary_Amount + ' yen (less deductions required by local laws) payable 12 times a year in accordance with Apple’s standard payroll procedures. Apple reserves the right to modify salaries and benefits from time to time as it deems necessary.'
				),
				$('<p/>').html(
					'給与は、年額' + employee.Salary_Amount + '円の基本給(この額から、勤務地の所得税その他法令に定められたものを控除します)とし、Appleの給与支払い手順にしたがい、年間12回、毎月一度の支払いとなります。Appleは、必要に応じて随時給与及び福利厚生を変更する権利を留保します。'
				)
            ),
            // Employee Type == Full Time Fixed Term
            ((employee.Employee_Type == 'FT') && (employee.JP_Retail_New_Offer_Type == 'Fixed Term General')) &&
            $('<div/>').append(
				$('<p/>').html(
					'Salary 給与'
				),
				$('<p/>').html(
					'You will receive an monthly base salary of ' + employee.Salary_Amount + ' yen (less deductions required by local laws) payable 12 times a year in accordance with Apple’s standard payroll procedures. Apple reserves the right to modify salaries and benefits from time to time as it deems necessary.'
				),
				$('<p/>').html(
					'給与は、月額' + employee.Salary_Amount + '円の基本給(この額から、勤務地の所得税その他法令に定められたものを控除します)とし、Appleの給与支払い手順にしたがい、年間12回、毎月一度の支払いとなります。Appleは、必要に応じて随時給与及び福利厚生を変更する権利を留保します。'
				)
            ),

            // Employee Type == Part Time
            (employee.Employee_Type == 'PT') &&
            $('<div/>').append(
				$('<p/>').html(
					'Salary 給与'
				),
				$('<p/>').html(
					'You will receive an hourly base salary of ' + employee.Salary_Amount + ' yen (less deductions required by local laws) payable once a month in accordance with Apple’s standard payroll procedures. Apple reserves the right to modify salaries and benefits from time to time as it deems necessary.'
				),
				$('<p/>').html(
					'給与は、時給' + employee.Salary_Amount + '円（この額から、勤務地の所得税その他法令に定められたものを控除します）とし、Appleの給与支払い手順に従い、毎月一度の支払いとなります。Appleは、必要に応じて随時給与および福利厚生を変更する権利を留保します。'
				)
            ),
           $('<div/>').append(
				$('<p/>').html(
					'Taxation 税'
				),
				$('<p/>').html(
					'It is your sole responsibility to fully and completely report to the appropriate tax authorities, and pay all monies required for tax purposes outside of Apple’s standard payroll procedures.'
				),
				$('<p/>').html(
					'あなたは、Apple の所定の給与支払手続以外の税務上の支払いや、税務当局への申告を完全かつ正確に行うことに関して、単独で責任を負います。'
				)
            ),
            // Employee Type == Full Time and Fixed Term or Standard
           ((employee.Employee_Type == 'FT') && ((employee.JP_Retail_New_Offer_Type == 'Fixed Term General') || (employee.JP_Retail_New_Offer_Type == 'Standard General'))) &&
            $('<div/>').append(
				$('<p/>').html(
					'Benefits and Social Insurance 福利厚生および労働 • 社会保険'
				),
				$('<p/>').html(
					'You will be eligible for standard government social insurance schemes such as health insurance, welfare pension insurance, workmen’s accident insurance and unemployment insurance in accordance with Apple’s Rules of Employment. Other company benefits will be offered in addition to the above, and your benefits summary will be provided in a separate document attached to this offer.'
				),
				$('<p/>').html(
					'In order to remain competitive in our compensation practices, the components of your compensation and benefits may be altered from time to time. Whenever such changes become necessary, you will be given one month’s advance notice of the impending change.'
				),
				$('<p/>').html(
					'あなたは、Appleの就業規則で定めるとおり、法定の健康保険、厚生年金保険、労災保険および雇用保険に加入するものとします。上記の他に、Appleが提供する福利厚生およびその概要は、本雇用通知の別添資料の通りです。'
				),
				$('<p/>').html(
					'Appleが給与体系においても競争力を維持するため、あなたの給与および福利厚生の内容は、随時改定される場合があります。当該変更が必要となる場合は、1ヶ月前までに通知がされます。'
				)
            ),

  // Employee Type == Part Time and Standard
           ((employee.Employee_Type == 'PT') && (employee.JP_Retail_New_Offer_Type == 'Standard General')) &&
            $('<div/>').append(
				$('<p/>').html(
					'Benefits and Social Insurance 福利厚生および労働 • 社会保険'
				),
				$('<p/>').html(
					'You will be eligible for standard government social insurance schemes such as health insurance, welfare pension insurance, workmen’s accident insurance and unemployment insurance in accordance with Apple’s Rules of Employment. Other company benefits will be offered in addition to the above, and your benefits summary will be provided in a separate document attached to this offer.'
				),
				$('<p/>').html(
					'In order to remain competitive in our compensation practices, the components of your compensation and benefits may be altered from time to time. Whenever such changes become necessary, you will be given one month’s advance notice of the impending change.'
				),
				$('<p/>').html(
					'あなたは、Appleの就業規則で定めるとおり、法定の健康保険、厚生年金保険、労災保険および雇用保険に加入するものとします。上記の他に、Appleが提供する福利厚生およびその概要は、本雇用通知の別添資料の通りです。'
				),
				$('<p/>').html(
					'Appleが給与体系においても競争力を維持するため、あなたの給与および福利厚生の内容は、随時改定される場合があります。当該変更が必要となる場合は、1ヶ月前までに通知がされます。'
				)
            ),

            // Employee Type == Part Time and Offer Type = Fixed Term General
           ((employee.Employee_Type == 'PT') && (employee.JP_Retail_New_Offer_Type == 'Fixed Term General')) &&
            $('<div/>').append(
				$('<p/>').html(
					'Benefits and Social Insurance 福利厚生および労働 • 社会保険'
				),
				$('<p/>').html(
					'You will be eligible for standard government social insurance schemes such as health insurance, welfare pension insurance, workmen’s accident insurance and unemployment insurance in accordance with Apple’s Rules of Employment. Note that if you are a student, you will not be eligible for health, welfare pension and unemployment social insurance schemes according to law. Other company benefits will be offered in addition to the above, and your benefits summary will be provided in a separate document attached to this offer.'
				),
				$('<p/>').html(
					'In order to remain competitive in our compensation practices, the components of your compensation and benefits may be altered from time to time.'
				),
				$('<p/>').html(
					'あなたは、Appleの就業規則で定めるとおり、法定の健康保険、厚生年金保険、労災保険および雇用保険に加入するものとします。ただし、学生（休学中、夜間、通信、定時制の学生を除く）は法律に従い、健康保険·厚生年金保険·雇用保険の加入は対象外となります。上記の他に、Appleが提供する福利厚生およびその概要は、本雇用通知の別添資料の通りです。'
				),
				$('<p/>').html(
					'Appleが給与体系においても競争力を維持するため、あなたの給与および福利厚生の内容は、随時改定される場合があります。当該変更が必要となる場合は、事前に通知がされます。'
)
),


// Retail Offer Type == Seasonal
            (employee.JP_Retail_Offer_Type == 'Seasonal') &&
            $('<div/>').append(
                                $('<p/>').html(
					'Vacation, Holiday (days off) 休日·休暇'
				),
				$('<p/>').html(
					'You are eligible for one day off per week, as well as company shutdown on January 1st and other types of leaves as described in the Rules of Employment document.'
				),
				$('<p/>').html(
					'休日は、週1 日とし、また1 月1 日その他就業規則で定める会社の休日とします。'
            )
),

            $('<div/>').append(
				$('<p/>').html(
					'Conditions of employment 雇用の前提条件'
				),
				$('<p/>').html(
					'This employment offer is contingent on the following conditions.'
				),
				$('<p/>').html(
					'この採用通知は、以下の条件が満たされることを条件としています。'
				),

		             $('<p/>').html(
					'-You must show proof of identity and approved employment pass to work in Japan as required by government of Japan. If you are unable to provide documentation of your authorization to work in Japan, Apple may immediately terminate your employment.'
				),

				$('<p/>').html(
					'-あなたは、身元確認および日本政府が定める日本での就労許可を取得し、その要件を満たしていることを証するために必要な書類等を提示しなければなりません。日本での就労許可を証する書面を提出できない場合には、Appleはあなたの雇用を直ちに終了させることがあります。'
				),
                                (employee.Internal_Movement != 'International Transfer') &&
				$('<p/>').html(
					'- You will continue to be bound by the Confidentiality Agreement you signed with Apple, and the terms related to confidentiality and intellectual property in the Business Conduct.' 
				),
                                (employee.Internal_Movement != 'International Transfer') &&
				$('<p/>').html(
					'-署名済みの秘密保持に関する契約および企業行動基準に基づいた内容は継続的に適用されます。'
				),
                                (employee.JP_Retail_New_Offer_Type == 'Standard General') && (employee.Internal_Movement == 'International Transfer') &&
				$('<p/>').html(
					' - You must sign the Confidentiality and Assignment of all Rights of Invention Agreement and return the signed agreement with this offer letter. Any exceptions or approvals required under the terms of the Confidentiality and Assignment of all Rights of Invention Agreement must be approved by your division’s vice president and Apple’s Legal Department prior to your beginning work. Nevertheless, you are permitted to speak freely about your wages, hours, and working conditions, including information about harassment, discrimination, or any other conduct you have reason to believe is unlawful, and nothing in this employment offer, or any other agreement, should be interpreted as being restrictive of your right to do so.'
				),
                                (employee.JP_Retail_New_Offer_Type == 'Standard General') && (employee.Internal_Movement == 'International Transfer') &&
				$('<p/>').html(
					'署名済みの本採用通知と共に、署名済みの秘密保持および知的財産に関する契約も提出しなければなりません。上記秘密保持および発明等に関する権利の譲渡契約の条件に関し、例外がある場合または承認を要する場合には、あなたが勤務を開始する前に、必ずあなたの部門のバイス・プレジデントおよびApple法務部の承認を取得しなければなりません。但し、あなたは、ハラスメント、差別、その他違法と判断する理由がある行為に関する情報を含め、賃金、労働時間、労働条件について自由に発言することが認められており、本採用通知その他の合意のいかなる部分も、あなたの当該発言権を制限するものと解釈されない。'
				),
				$('<p/>').html(
					'- We believe that every employee should use good judgment and exercise uncompromising integrity when conducting Apple business. By accepting this offer, you acknowledge that you have received and read Apple’s Business Conduct Policy and that you agree to comply with its terms.'
				),
				$('<p/>').html(
					'-Appleは、Appleのビジネスに関わる社員一人一人が、Appleのビジネスを遂行する際に、優れた判断力と妥協のない誠実さを発揮してくれるものと考えています。あなたは、本雇用通知の受諾をもって、AppleのBusiness Conduct Policyを受領および確認し、その内容に従うことに承諾したものとします。'
				),
				$('<p/>').html(
					'- Any matters that have not been addressed in this offer will be handled in accordance with the Rules of Employment. By accepting this offer, you agree to read, understand and abide by Apple’s Rules of Employment document.'
				),
				$('<p/>').html(
					'-本雇用通知にて言及されていない事項については、就業規則の定めに従い取り扱われるものとします。あなたは、本雇用通知の受諾をもって、Appleの就業規則を確認し、理解し、遵守することに同意したものとします。'
				),
				$('<p/>').html(
					'- You acknowledge that personal information will be gathered about you within the scope of your employment, including as part of the hiring process (“Employee Personal Information”). Your Employee Personal Information is considered private and confidential and is treated in accordance with Apple’s Personnel Information Privacy Policy. You understand that you may access, review, make changes to your information and object for legitimate reasons to the processing of your information by contacting dpo@apple.com. You also acknowledge that Apple may transfer your Employee Personal Information to other Apple entities located outside of Japan at its discretion, including to Apple Inc. in the United States.By signing this agreement, you consent to such transfer, with the understanding that Apple complies with the local data protection laws (if any), the APEC Cross Border Privacy Rules (CBPR) system or any other regime ensuring equivalent or adequate protection, or by appropriate contractual arrangements or binding corporate rules, and that compliance with these programs provides a comparable standard of protection to that as required under the applicable laws and regulations related to the protection of personal data in Japan.'
				),
				$('<p/>').html(
					'-あなたは、採用プロセスを含め、あなたの雇用と関連する範囲において、あなたの個人情報(以下、「従業員 個人情報」)が収集されることに、同意するものとします。あなたの従業員個人情報は、秘密情報として、 Apple Personal Information Privacy Policyに基づいて取り扱います。あなたは、dpo@apple.com宛 に連絡すれば、あなたの情報のアクセス、確認、変更又はあなたの情報の処理に関して異議を述べる正当な理由 がある場合にこれを述べることができることを、理解するものとします。あなたはまた、Appleがその裁量にお いて、あなたの従業員個人情報を、米国のApple Inc.を含む、日本国外の地域に所在するApple関連組織に移転す ることを、承諾するものとします。あなたは、この書面への署名をもって、Appleが現地のデータ保護関連法 (ある場合)、APECクロス·ボーダー·プライバシー·ルールズ(CBPR)システムその他同様又は十分な保護 を定める枠組み、又は適切な契約上の取り決め若しくは拘束力がある社内規則を遵守し、かかるプログラムの遵 守が日本国内の個人情報保護に関して法令上求められる保護と同等の水準の保護であるとの理解のもと、かかる 移転に同意するものとします。'
				),
				$('<p/>').html(
					'If any of the above conditions are not satisfied, Apple may withdraw this employment offer.'
				),
				$('<p/>').html(
					'上記の前提条件のうち、一つでも満たされない条件がある場合、Appleは本採用を取り消すことができるものとします。'
				),
// JP Retail New Offer Type is Fixed Term General
          ((employee.JP_Retail_New_Offer_Type == 'Fixed Term General') || (employee.JP_Retail_New_Offer_Type == 'Standard General')) &&
            $('<div/>').append(
				$('<p/>').html(
					'Termination 退職'
				)
),
// JP Retail New Offer Type is Fixed Term General
          (employee.JP_Retail_New_Offer_Type == 'Fixed Term General') &&
            $('<div/>').append(
				$('<p/>').html(
					'In addition to termination by expiry of your fixed term contract, resignation, dismissal and termination of your employment shall be done according to Rules of Employment documents.'
				),
				$('<p/>').html(
					'雇用期間満了による雇用の終了に加え、辞職、解雇およびその他雇用の終了は、就業規則に従って行われます。'
                                )
),

          (employee.JP_Retail_New_Offer_Type == 'Standard General') &&
            $('<div/>').append(
				$('<p/>').html(
					'Resignation, dismissal and termination of your employment shall be done according to Rules of Employment documents.'
				),
				$('<p/>').html(
					'辞職、解雇およびその他雇用の終了は、就業規則に従って行われます。'
				)
),

  ((employee.JP_Retail_New_Offer_Type == 'Fixed Term General') || (employee.JP_Retail_New_Offer_Type == 'Standard General')) &&
            $('<div/>').append(
				$('<p/>').html(
					'1. If either you or Apple wishes to terminate your employment, either party must give thirty (30) days notice in writing. Apple reserves the right to make an equivalent payment in lieu of notice in full or in part.'
				),
				$('<p/>').html(
					'2. Your employment may be terminated without prior notice because of a natural disaster or other unavoidable cause, or when reasons for termination are attributable to you.'
				),
                                $('<p/>').html(
					'3. Your employment can be terminated immediately without prior notice, if you are subject to punitive dismissal in the circumstances provided in the Rules of Employment.'
				),
                               $('<p lang="ja-jp"/>').html(
					'1.あなたまたはAppleが雇用を終了させる意思を有する場合、いずれの当事者も30日前に書面により相手に通知する必要があります。Appleは、当該通知に代えて、その全部または一部の期間と同等の予告手当を支払う権利を留保します。'
				),
				$('<p lang="ja-jp"/>').html(
					'2.自然災害またはその他やむを得ない事由、もしくはあなたの責めに帰すべき事由により雇用を終了させる場合には、即時解雇となることがあります。'
				),
				$('<p/>').html(
					'3.あなたが就業規則に定められた懲戒解雇などの対象となる場合には、即時に解雇されることがあります。'
				),
				$('<p/>').html(
					'In addition to the circumstances where you may receive punitive dismissal prescribed in the Rules of Employment, Apple reserves the right to immediately terminate your employment without prior notice in any of the following events depending on seriousness of the misconduct:'
				),
				$('<p/>').html(
					'就業規則に規定された懲戒解雇の対象となる場合に加え、Appleは次のいずれかの場合、その不正行為の重大さに照らし、あなたを予告なく即時に解雇する権利を留保します。'
				),
				$('<p/>').html(
					'1. You commit any breach of this employment agreement.'
				),
				$('<p/>').html(
					'2. You violate any rule or disobey any lawful instruction given by Apple.'
				),
				$('<p/>').html(
					'3. You violate any section of Apple’s Business Conduct Policy.'
				),
				$('<p/>').html(
					'4. You commit any acts of dishonesty, or any action of impropriety which in Apple’s opinion is likely to bring Apple or any related company into ridicule or disrespect of the public or any person, or otherwise damaging the reputation of Apple or any related company.'
				),
				$('<p/>').html(
					'1.あなたが本雇用契約に違反した場合。'
				),
				$('<p/>').html(
					'2.あなたがAppleのルールに違反、または適法な指示に従わない場合。'
				),
				$('<p/>').html(
					'3.あなたがAppleのBusiness Conduct Policyのいずれかの条項に違反した場合。'
				),
				$('<p/>').html(
					'4.あなたの不正行為または不適切な行動により、Appleまたは関連会社が公衆または個人より、不名誉·不体裁の誹りを受けるおそれがあるとApple が判断した場合、その他Appleまたはその関連会社の信用を害した場合。'
				),
				$('<p/>').html(
					'This employment offer shall be governed and construed in accordance with the laws of Japan, without regard to conflict of law principles. By signing this offer you agree that these are the only terms and conditions of your employment and acknowledge that you have not relied upon any other promises or representations, except those made in this offer. Upon you accept this employment offer, it will constitute an employment agreement between you and Apple.'
				),
				$('<p/>').html(
					'本雇用通知は、抵触法に関する原則を除き、日本法に準拠するものとします。本雇用通知に署名することで、あなたは本通知に記載する内容のみがあなたの雇用条件であることに同意し、本内容以外の一切の誓約、表明などに依るものではないことを確認するものとします。本雇用通知を受諾した場合、本通知はあなたとAppleとの雇用契約を構成するものとします。'
				),
				$('<p/>').html(
					'This employment offer is valid until ' + employee.English_Offer_Expiration + '. We must receive your written acceptance of this offer no later than 5:00 p.m. JST time that day.'
				),
				$('<p/>').html(
					'本雇用通知は、' + employee.Japanese_Offer_Expiration + 'まで有効です。この通知に同意する場合は、日本時間の午後5時までに書面による意思通知をAppleに送信してください。'
				),
				$('<p/>').html(
					'Please accept this offer by signing below. Be sure to retain copies for your personal records. If you have any questions regarding this offer or any of its enclosures, please contact me at candidatecare_apac@apple.com.'
				),
				$('<p/>').html(
					'本通知を受諾される場合には、以下に署名してください。ご自分の記録用に、必ず写しを保管してください。本通知および同封資料につきご質問がある場合には、candidatecare_apac@apple.com までご連絡ください。'
                                ),
                                $('<p/>').html(
					'Sincerely,<br>敬具'
				),
				$('<p/>').html(
					'Apple Worldwide Recruiting<br>On behalf of Apple Japan, Inc.'
                                ),
                               $('<p/>').html(
					'I accept the offer: <br>本通知書の内容を受諾します。'
				)
                      )
                 )

		  )
            );

        // end append
}

$(function() {	
    // render template
    fnView();

    // completed letter
    if (!$("input.calendar_button").length) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

        var arrParts = [
            [1, 'hidden_pg'],
        ];

        showCompletedOfferLetter('incomplete', 'complete', arrParts);
    }
});
