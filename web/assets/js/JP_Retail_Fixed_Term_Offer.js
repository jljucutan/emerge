// Japan Retail FT Offer
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
            // Employee Type == Part Time AND Retail Offer Type == Seasonal
           (employee.Employee_Type == 'PT' && employee.JP_Retail_Offer_Type == 'Seasonal') &&
            $('<div/>').append(
				$('<p/>').html(
					'Apple Japan, Inc. (’Apple’) is delighted to offer you the position of ' + employee.Retail_Job_Title + ' (Part-Time Contract - Seasonal Hire) with the job level of ' + employee.Job_Level + '. In your new position you will report to the Store Leader, at Apple Store, ' + employee.Work_Location + '. These conditions may be subject to change at the Apple’s discretion. We look forward to welcoming you to Apple.'
				),
				$('<p/>').html(
					'Apple Japan 合同会社（以下、「Apple」といいます）は、 あなたをアップルストア' + employee.Work_Location_Code + '店にて' + employee.Job_Level + 'の、' + employee.Retail_Job_Title + '(パートタイム契約社員 - シーゾナル) のポジションで採用させていただきたく、お知らせ致します。この新たなポジションでは、アップルストア' + employee.Work_Location_Code + 'のストアリーダーが、あなたの上司となります。ここに記載する条件は、Appleの裁量で変更することがあります。Appleは、あなたの入社を楽しみにお待ちしております。'
				)
            ),
            // Employee Type == Part Time AND Retail Offer Type == Fixed Term General
         (employee.Employee_Type == 'PT' && employee.JP_Retail_Offer_Type == 'Fixed Term General') &&
            $('<div/>').append(
				$('<p/>').html(
					'Apple Japan, Inc. (’Apple’) is delighted to offer you the position of ' + employee.Retail_Job_Title + ' (Part-Time Contract) with the job level of ' + employee.Job_Level + '. In your new position you will report to the Store Leader, at Apple Store, ' + employee.Work_Location + '. These conditions may be subject to change at the Apple’s discretion. We look forward to welcoming you to Apple.'
				),
				$('<p/>').html(
					'Apple Japan 合同会社（以下、「Apple」といいます）は、 あなたをアップルストア' + employee.Work_Location_Code + '店にて' + employee.Job_Level + 'の、' + employee.Retail_Job_Title + '(パートタイム契約社員) のポジションで採用させていただきたく、お知らせ致します。この新たなポジションでは、アップルストア' + employee.Work_Location_Code + 'のストアリーダーが、あなたの上司となります。ここに記載する条件は、Appleの裁量で変更することがあります。Appleは、あなたの入社を楽しみにお待ちしております。'
				)
            ),
            // Employee Type == Full Time
            (employee.Employee_Type == 'FT') &&
            $('<div/>').append(
				$('<p/>').html(
					'Apple Japan, Inc. (’Apple’) is delighted to offer you the position of ' + employee.Retail_Job_Title + ' (Full-time Contract) with the job level of ' + employee.Job_Level + '. In your new position you will report to the Store Leader, at Apple Store, ' + employee.Work_Location + '. These conditions may be subject to change at the Apple’s discretion. We look forward to welcoming you to Apple.'
				),
				$('<p/>').html(
					'Apple Japan 合同会社（以下「Apple」といいます）は、 あなたをアップルストア' + employee.Work_Location_Code + '店にて' + employee.Job_Level + 'の、' + employee.Retail_Job_Title + '（フルタイム契約社員）のポジションで採用させていただきたく、お知らせ致します。この新たなポジションでは、アップルストア' + employee.Work_Location_Code + 'のストアリーダーがあなたの上司となります。ここに記載する条件は、Apple の裁量で変更する場合があります。Apple は、あなたの入社を楽しみにお待ちしております。'
				)
            ),
           
          // Retail Offer Type != Seasonal
            (employee.JP_Retail_Offer_Type != 'Seasonal') &&
            $('<div/>').append(
				$('<p/>').html(
					'Commencement 雇用の開始'
				),
				$('<p/>').html(
					'Your effective start date with Apple will be ' + employee.English_Start_Date + ' with an end date of ' + employee.English_Termination_Date + '. By your effective start date, you should ensure all your previous obligations to your former employer have been completed, and your employment with Apple does not violate any contractual or statutory obligations of you (including but not limited to non- compete obligations).'
				),
				$('<p/>').html(
					'Before the end of your employment period, Apple will review your performance against your position/responsibilities and Apple will communicate whether there is intent to extend to you a new offer of employment.'
				),
				$('<p/>').html(
					'あなたのAppleへの入社日は、' + employee.Japanese_Start_Date + 'であり、終了日は' + employee.Japanese_Termination_Date + 'です。当該入社日までに、前職での雇用主に対する義務の履行はすべて完了し、Appleでの就業があなたの第三者に対する契約上および法律上の義務（競業避止義務を含みますが、これに限りません）に違反することがないよう、確認してください。'
				),
				$('<p/>').html(
					'Appleは、雇用期間終了時までに、ポジションおよび職務に照らしたパフォーマンス評価を行い、新たな雇用期間のオファーを行う意図を有するか否か、お知らせします。'
				)
            ),
 // Retail Offer Type == Seasonal
            (employee.JP_Retail_Offer_Type == 'Seasonal') &&
            $('<div/>').append(
				$('<p/>').html(
					'Commencement 雇用の開始'
				),
				$('<p/>').html(
					'Your effective start date with Apple will be ' + employee.English_Start_Date + ' with an end date of ' + employee.English_Termination_Date + '. By your effective start date, you should ensure all your previous obligations to your former employer have been completed, and your employment with Apple does not violate any contractual or statutory obligations of you (including but not limited to non- compete obligations).'
				),
				$('<p/>').html(
					'あなたのAppleへの入社日は、' + employee.Japanese_Start_Date + 'であり、終了日は' + employee.Japanese_Termination_Date + 'です。当該入社日までに、前職での雇用主に対する義務の履行はすべて完了し、Appleでの就業があなたの第三者に対する契約上および法律上の義務（競業避止義務を含みますが、これに限りません）に違反することがないよう、確認してください。'
				)
            ),

            // Employee Type == Part Time
            (employee.Employee_Type == 'PT') &&
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
            // Employee Type == Full Time
            (employee.Employee_Type == 'FT') &&
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
            // Employee Type == Full Time
            (employee.Employee_Type == 'FT') &&
            $('<div/>').append(
				$('<p/>').html(
					'Salary 給与'
				),
				$('<p/>').html(
					'You will receive a monthly base salary of ' + employee.Salary_Amount + ' yen (less deductions required by local laws) payable 12 times a year in accordance with Apple’s standard payroll procedures. Apple reserves the right to modify salaries and benefits from time to time as it deems necessary.'
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
				//$('<p/>').html(
				//	'Commuting Allowance 通勤手当'
				//),
				//$('<p/>').html(
				//	'You will receive an allowance to assist your commute to the store. Your allowance will be based on the cost of public transportation by the most reasonable route and means of transportation to and from the store location.'
				//),
				//$('<p/>').html(
				//	'ストアまでの通勤費用を補助するため、通勤手当を支給します。通勤手当額は、ストアまでの通勤に要する最も合理的な経路および手段の公共交通機関の費用に基づき、決定します。'
				//),
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
            // Employee Type == Full Time
            (employee.Employee_Type == 'FT') &&
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
					'あなたは、Appleの就業規則で定めるとおり、法定の健康保険、厚生年金保険、労災保険および雇用保険に加入するものとします。上記の他に、Appleが提供する福利厚生およびその概要は、本採用通知の別添資料の通りです。'
				),
				$('<p/>').html(
					'Appleが給与体系においても競争力を維持するため、あなたの給与および福利厚生の内容は、随時改定される場合があります。当該変更が必要となる場合は、1ヶ月前までに通知がされます。'
				)
            ),
            // Employee Type == Part Time and Offer Type = Fixed Term General
           (employee.Employee_Type == 'PT' && employee.JP_Retail_Offer_Type == 'Fixed Term General') &&
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
					'あなたは、Appleの就業規則で定めるとおり、法定の健康保険、厚生年金保険、労災保険および雇用保険に加入するものとします。ただし、学生（休学中、夜間、通信、定時制の学生を除く）は法律に従い、健康保険・厚生年金保険・雇用保険の加入は対象外となります。上記の他に、Appleが提供する福利厚生およびその概要は、本採用通知の別添資料の通りです。'
				),
				$('<p/>').html(
					'Appleが給与体系においても競争力を維持するため、あなたの給与および福利厚生の内容は、随時改定される場合があります。当該変更が必要となる場合は、事前に通知がされます。'
)
),

 // Employee Type == Part Time and Offer Type = Seasonal
           (employee.Employee_Type == 'PT' && employee.JP_Retail_Offer_Type == 'Seasonal') &&
            $('<div/>').append(
				$('<p/>').html(
					'Benefits and Social Insurance 福利厚生および労働 • 社会保険'
				),
				$('<p/>').html(
					'Your benefits summary will be provided in a separate document.'
				),
				$('<p/>').html(
					'福利厚生の概要は、別途資料でお知らせします。'
				)
                                ),
            // Retail Offer Type != Seasonal
            (employee.JP_Retail_Offer_Type != 'Seasonal') &&
            $('<div/>').append(
                                $('<p/>').html(
					'Vacation, Holiday (days off) 休日・休暇'
				),
				$('<p/>').html(
					'You are eligible for one day off per week, as well as company shutdown on January 1st and other types of leaves as described in the Rules of Employment document. Your number of days of paid vacation will be set after completion of your first 6 months of employment, and you will be eligible for additional vacation days, related to your years of service, as described in the Rules of Employment document.'
				),
				$('<p/>').html(
					'休日は、週1日とし、また1月1日その他就業規則で定める会社の休日とします。有給休暇は、勤務開始日から6か月経過時に確定し、その後は就業規則に定めるとおり、勤続年数により追加されます。'
            )
),
// Retail Offer Type == Seasonal
            (employee.JP_Retail_Offer_Type == 'Seasonal') &&
            $('<div/>').append(
                                $('<p/>').html(
					'Vacation, Holiday (days off) 休日・休暇'
				),
				$('<p/>').html(
					'You are eligible for one day off per week, as well as company shutdown on January 1st and other types of leaves as described in the Rules of Employment document.'
				),
				$('<p/>').html(
					'休日は、週1 日とし、また1 月1 日その他就業規則で定める会社の休日とします。'
            )
),

				$('<p/>').html(
					'&nbsp'
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
					'- On the first day of your employment, and possibly from time to time thereafter, you must show proof of identity and approved employment pass to work in Japan as required by government of Japan. If you are unable to provide documentation of your authorization to work in Japan, Apple may immediately terminate your employment.'
				),
				$('<p/>').html(
					'-入社日に、またその後必要に応じて随時、身元確認および日本政府が定める日本での就労許可を取得し、その要件を満たしていることを証するために必要な書類等を提示しなければなりません。日本での就労許可を証する書面を提出できない場合には、Appleはあなたの採用を直ちに終了させることがあります。'
				),
				$('<p/>').html(
					'- You must sign the Confidentiality and Assignment of all Rights of Invention Agreement and return the signed agreement with this offer letter. Any exceptions or approvals required under the terms of the Confidentiality and Assignment of all Rights of Invention Agreement must be approved by your division’s vice president and Apple’s Legal Department prior to your beginning work. Nevertheless, you are permitted to speak freely about your wages, hours, and working conditions, including information about harassment, discrimination, or any other conduct you have reason to believe is unlawful, and nothing in this employment offer, or any other agreement, should be interpreted as being restrictive of your right to do so.'
				),
				$('<p/>').html(
					'-署名済みの本採用通知と共に、署名済みの秘密保持および知的財産に関する契約も提出しなければなりません。上記秘密保持および発明等に関する権利の譲渡契約の条件に関し、例外がある場合または承認を要する場合には、あなたが勤務を開始する前に、必ずあなたの部門のバイス・プレジデントおよびApple法務部の承認を取得しなければなりません。但し、あなたは、ハラスメント、差別、その他違法と判断する理由がある行為に関する情報を含め、賃金、労働時間、労働条件について自由に発言することが認められており、本採用通知その他の合意のいかなる部分も、あなたの当該発言権を制限するものと解釈されない。'
				),
				$('<p/>').html(
					'- We believe that every employee should use good judgment and exercise uncompromising integrity when conducting Apple business. By accepting this offer, you acknowledge that you have received and read Apple’s Business Conduct Policy and that you agree to comply with its terms.'
				),
				$('<p/>').html(
					'-Appleは、Appleのビジネスに関わる社員一人一人が、Appleのビジネスを遂行する際に、優れた判断力と妥協のない誠実さを発揮してくれるものと考えています。あなたは、本採用通知の受諾をもって、AppleのBusiness Conduct Policyを受領および確認し、その内容に従うことに承諾したものとします。'
				),
				$('<p/>').html(
					'- Any matters that have not been addressed in this offer will be handled in accordance with the Rules of Employment. By accepting this offer, you agree to read, understand and abide by Apple’s Rules of Employment document.'
				),
				$('<p/>').html(
					'-本採用通知にて言及されていない事項については、就業規則の定めに従い取り扱われるものとします。あなたは、本採用通知の受諾をもって、Appleの就業規則を確認し、理解し、遵守することに同意したものとします。'
				),
				$('<p/>').html(
					'- You acknowledge that personal information will be gathered about you within the scope of your employment, including as part of the hiring process (“Employee Personal Information”). Your Employee Personal Information is considered private and confidential and is treated in accordance with Apple’s Personnel Information Privacy Policy. You understand that you may access, review, make changes to your information and object for legitimate reasons to the processing of your information by contacting dpo@apple.com. You also acknowledge that Apple may transfer your Employee Personal Information to other Apple entities located outside of Japan at its discretion, including to Apple Inc. in the United States.By signing this agreement, you consent to such transfer, with the understanding that Apple complies with the local data protection laws (if any), the APEC Cross Border Privacy Rules (CBPR) system or any other regime ensuring equivalent or adequate protection, or by appropriate contractual arrangements or binding corporate rules, and that compliance with these programs provides a comparable standard of protection to that as required under the applicable laws and regulations related to the protection of personal data in Japan.'
				),
				$('<p/>').html(
					'-あなたは、採用プロセスを含め、あなたの雇用と関連する範囲において、あなたの個人情報(以下、「従業員 個人情報」)が収集されることに、同意するものとします。あなたの従業員個人情報は、秘密情報として、 Apple Personal Information Privacy Policyに基づいて取り扱います。あなたは、dpo@apple.com宛 に連絡すれば、あなたの情報のアクセス、確認、変更又はあなたの情報の処理に関して異議を述べる正当な理由 がある場合にこれを述べることができることを、理解するものとします。あなたはまた、Appleがその裁量にお いて、あなたの従業員個人情報を、米国のApple Inc.を含む、日本国外の地域に所在するApple関連組織に移転す ることを、承諾するものとします。あなたは、この書面への署名をもって、Appleが現地のデータ保護関連法 (ある場合)、APECクロス・ボーダー・プライバシー・ルールズ(CBPR)システムその他同様又は十分な保護 を定める枠組み、又は適切な契約上の取り決め若しくは拘束力がある社内規則を遵守し、かかるプログラムの遵 守が日本国内の個人情報保護に関して法令上求められる保護と同等の水準の保護であるとの理解のもと、かかる 移転に同意するものとします。'
				),
				$('<p/>').html(
					'- You must receive a satisfactory background check in accordance with Apple policy. The criteria of satisfactory background check are decided by Apple at its sole discretion, and should include but not be limited to (a) that you provide an authentic diploma or graduation certificate; (b) that all the information provided on your CV and during the interview is true and authentic; and (c) that Apple is satisfied with the reference check with your previous employers and any other persons you designated.'
				),
				$('<p/>').html(
					'-あなたは、Appleのポリシーに従い、十分な身元調査を受ける必要があります。十分な身元調査の基準は、(a)真正な修了証書または卒業証書を提出すること；(b)あなたが、履歴書および採用面接で提供した情報のすべてが真実で、真正であること；および(c)Appleがあなたの前雇用主（複数の場合があります）およびあなたが指定したその他の人物による身元調査の結果に満足することを含みますがこれらに限らず、Appleがその独自の裁量で決定します。'
				),
				$('<p/>').html(
					'If any of the above conditions are not satisfied, Apple may withdraw this employment offer.'
				),
				$('<p/>').html(
					'上記の前提条件のうち、一つでも満たされない条件がある場合、Appleは本採用を取り消すことができるものとします。'
				),
				$('<p/>').html(
					'Termination 退職'
				),
				$('<p/>').html(
					'In addition to termination by expiry of your fixed term contract, resignation, dismissal and termination of your employment shall be done according to Rules of Employment documents.'
				),
				$('<p/>').html(
					'雇用期間満了による雇用の終了に加え、辞職、解雇およびその他雇用の終了は、就業規則に従って行われます。'
				),
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
					'4.あなたの不正行為または不適切な行動により、Appleまたは関連会社が公衆または個人より、不名誉・不体裁の誹りを受けるおそれがあるとApple が判断した場合、その他Appleまたはその関連会社の信用を害した場合。'
				),
				$('<p/>').html(
					'This employment offer shall be governed and construed in accordance with the laws of Japan, without regard to conflict of law principles. By signing this offer you agree that these are the only terms and conditions of your employment and acknowledge that you have not relied upon any other promises or representations, except those made in this offer. Upon you accept this employment offer, it will constitute an employment agreement between you and Apple.'
				),
				$('<p/>').html(
					'本採用通知は、抵触法に関する原則を除き、日本法に準拠するものとします。本採用通知に署名することで、あなたは本通知に記載する内容のみがあなたの雇用条件であることに同意し、本内容以外の一切の誓約、表明などに依るものではないことを確認するものとします。本採用通知を受諾した場合、本通知はあなたとAppleとの雇用契約を構成するものとします。'
				),
				$('<p/>').html(
					'This employment offer is valid until ' + employee.English_Offer_Expiration + '. We must receive your written acceptance of this offer no later than 5:00 p.m. JST time that day.'
				),
				$('<p/>').html(
					'本採用通知は、' + employee.Japanese_Offer_Expiration + 'まで有効です。この通知に同意する場合は、日本時間の午後5時までに書面による意思通知をAppleに送信してください。'
				),
				$('<p/>').html(
					'Please accept this offer by signing below. Be sure to retain copies for your personal records. If you have any questions regarding this offer or any of its enclosures, please contact me at candidatecare_apac@apple.com.'
				),
				$('<p/>').html(
					'本通知を受諾される場合には、以下に署名してください。ご自分の記録用に、必ず写しを保管してください。本通知および同封資料につきご質問がある場合には、candidatecare_apac@apple.com までご連絡ください。'


                                ),
				$('<p/>').html(
					''
				),
				$('<p/>').append(
					$('<span/>').html(
						'Sincerely,<br>'
					),
					$('<span/>').html(
						'敬具'
					)
				),
				$('<p/>').html(
					''
				),


				$('<p/>').html(
					'Apple Worldwide Recruiting<br>On behalf of Apple Japan, Inc.'
				),
				$('<p/>').html(
					'&nbsp'
				),
				$('<p/>').html(
					'I accept the offer:<br>本通知書の内容を受諾します。'
),
 $('<p/>').html(
					''

				)
            )
)
        
        // end append
    );
   $("#markup2").html("").append(
        $('<div class="offerClause2"/>').append(
            $('<div/>').append(
				$('<p/>').html(
					$('<span/>').html('If under the age of twenty (20) years of age, a parent or legal guardian of the Employee must sign below:')
				),
				$('<p/>').html(
					$('<span/>').html('従業員が20歳未満である場合は、従業員の親権者または後見人が以下に署名するものとします。')
				),
				$('<p/>').html(
					'&nbsp;'
				),
				$('<p/>').html(
					$('<span/>').html('I, the parent and/or legal guardian of _______________________________ do hereby consent on my own behalf and one behalf of any other parent and grant my permission to all of the foregoing. I represent and warrant that I am authorized to consent on behalf of any other parent and or legal guardian.')
				),
				$('<p/>').html(
					$('<span/>').html('私は、____________________________ の親権者および／または後見人として、自分自身と別の親を代表して本 契約書の締結に同意し、上記内容のすべてに対して私の許可を付与します。私は、別の親または後見人を代表し て同意する権限を有することを表明および保証します。')
				),
				$('<p/>').html(
					'&nbsp;'
				),								
				$('<p/>').html(
					$('<span/>').html('Parent/Legal Guardian Signature 親権者／後見人の署名 ____________________________')
				),
				$('<p/>').html(
					$('<span/>').html('Print name 氏名 (活字体) ____________________________')
				)
            )
        )
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
            [1,'hidden_pg2']
        ];     
		showCompletedOfferLetter('incomplete', 'complete', arrParts);
                  showCompletedOfferLetter('incomplete2','complete2',arrParts2);
    }
        else{
        makeOfferLetter('hidden_pg','offerClause');
        makeOfferLetter('hidden_pg2','offerClause2');
    }
});
