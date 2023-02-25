// Japan Corporate Offer
function fnView() {
    // English & Japanese Content
    $("#markup").html("").append(
        // Company Logo
        $('<div class="col-lg-12"/>').append(
            $('<div class="offerClause"/>').append(
              //  $('<div id="srt_eform_logo" class="text-right"/>').html('<img src=' + company.Logo + '>')
            )
        ),
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<div/>').append(
                $('<p/>').html(
                    $('<span/>').html(employee.Current_Date)
                ),
                $('<p/>').append(
                    $('<span/>').html(employee.First_Name + ' ' + employee.Last_Name + '<br>'),
                    $('<span/>').html(employee.Address1 ? employee.Address1 + '<br>' : ''),
                    $('<span/>').html(employee.Address2 ? employee.Address2 + '<br>' : ''),
                    $('<span/>').html(employee.City ? employee.City + '<br>' : ''),
                    $('<span/>').html(employee.State ? employee.State + '<br>' : ''),
                    $('<span/>').html(employee.Zip ? employee.Zip + '<br>' : '')
                ),
                $('<p/>').html(
                    ''
                ),
                $('<p/>').append(
                    $('<span/>').html('Dear ' + employee.First_Name + ',')
                )
            ),
            // Work Location == Roppongi
            (employee.Work_Location == 'Roppongi') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Apple Japan, Inc. (’Apple’) is delighted to offer you the position of ' + employee.Job_Title + ' and the job level of ' + employee.Job_Level + '. In your new position you will report to ' + employee.Hiring_Manager + ' and your place of work will be Roppongi Hills, 6-10-1, Roppongi, Minato-ku, Tokyo. These conditions may be subject to change at the Apple’s discretion. We look forward to welcoming you to Apple.'
                ),
                $('<p/>').html(
                    'Apple Japan合同会社(以下「Apple」といいます)は、あなたを' + employee.Job_Level + 'の、' + employee.Job_Title + 'のポジションで採用させていただきたく、お知らせ致します。この新たなポジションでは、' + employee.Hiring_Manager + 'があなたの上司となり、勤務地は東京都港区六本木6-10-1 六本木ヒルズとなります。ここに記載する条件は、Appleの裁量で変更する場合があります。Appleは、あなたの入社を楽しみにお待ちしております。'
                )
            ),
            // Work Location == YTC
            (employee.Work_Location == 'YTC') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Apple Japan, Inc. (’Apple’) is delighted to offer you the position of ' + employee.Job_Title + ' and the job level of ' + employee.Job_Level + '. In your new position you will report to ' + employee.Hiring_Manager + ' and your place of work will be Apple Japan YTC, 4-3-1, Tsunashimahigashi, Kohoku-ku, Yokohama-shi, Kanagawa. These conditions may be subject to change at the Apple’s discretion. We look forward to welcoming you to Apple.'
                ),
                $('<p/>').html(
                    'Apple Japan合同会社(以下「Apple」といいます)は、あなたを' + employee.Job_Level + 'の、' + employee.Job_Title + 'のポジションで採用させていただきたく、お知らせ致します。この新たなポジションでは、' + employee.Hiring_Manager + 'があなたの上司となり、勤務地は神奈川県横浜市港北区綱島東4-3-1 Apple Japan YTCとなります。ここに記載する条件は、Appleの裁量で変更する場合があります。Appleは、あなたの入社を楽しみにお待ちしております。'
                )
            ),
            // Work Location == Home Office and Offer Type = DC AHA or AHA
            (employee.Work_Location == 'Home Office' && (employee.Offer_Type == 'DC AHA' || employee.Offer_Type == 'AHA')) &&
            $('<div/>').append(
            $('<p/>').html(
                'Apple Japan, Inc. (’Apple’) is delighted to offer you the position of ' + employee.Job_Title + ' and the job level of ' + employee.Job_Level + '. In your new position you will report to ' + employee.Hiring_Manager + ' and your place of work will be at your residence and other training locations as designated by Apple from time to time according to Apple-At-Home Advisor Program Agreement (’AHA Agreement’) signed by you. The conditions set out in this offer may be subject to change at the Apple’s discretion. We look forward to welcoming you to Apple.'
            ),
            $('<p/>').html(
                'Apple Japan合同会社(以下「Apple」といいます)は、あなたを' + employee.Job_Level + 'の、' + employee.Job_Title + 'のポジションで採用させていただきたく、お知らせ致します。この新たなポジションでは、' + employee.Hiring_Manager + 'があなたの上司となり、就労場所はあなたの自宅又はあなたが署名したApple-At-Home Advisor Program 契約(以下、「AHA契約」といいます)に基づきAppleが随時指定する研修場所となります。ここに記載する条件は、Appleの裁量で変更する場合があります。Appleは、あなたの入社を楽しみにお待ちしております。'
            )
            ),
            // Work Location == Home Office and Offer Type = RCC
            (employee.Work_Location == 'Home Office' && employee.Offer_Type == 'RCC') &&
            $('<div/>').append(
            $('<p/>').html(
                'Apple Japan, Inc. (’Apple’) is delighted to offer you the position of ' + employee.Job_Title + ' and the job level of ' + employee.Job_Level + '. In your new position you will report to ' + employee.Hiring_Manager + ' and your place of work will be at your residence and other training locations as designated by Apple from time to time according to RCC At-Home Specialist Program Agreement (‘AHS Agreement’) signed by you. The conditions set out in this offer may be subject to change at the Apple’s discretion. We look forward to welcoming you to Apple.'
            ),
            $('<p/>').html(
                'Apple Japan合同会社(以下「Apple」といいます)は、あなたを' + employee.Job_Level + 'の、' + employee.Job_Title + 'のポジションで採用させていただきたく、お知らせ致します。この新たなポジションでは、' + employee.Hiring_Manager + 'があなたの上司となり、就労場所はあなたの自宅又はあなたが署名したRCC At-Home Specialist Program 契約(以下、「AHS契約」といいます)に基づきAppleが随時指定する研修場所となります。ここに記載する条件は、Appleの裁量で変更する場合があります。Appleは、あなたの入社を楽しみにお待ちしております。'
            )
            ),
            // Work Location == Reseller Location 
            (employee.Work_Location == 'Reseller Location') && 
            $('<div/>').append(
                $('<p/>').html(
                    'Apple Japan, Inc. (’Apple’) is delighted to offer you the position of ' + employee.Job_Title + ' and the job level of ' + employee.Job_Level + '. In your new position you will report to ' + employee.Hiring_Manager + ' and your place of work will be Apple distributor consumer electronic retail shop. These conditions may be subject to change at the Apple’s discretion. We look forward to welcoming you to Apple.'
                ),
                $('<p/>').html(
                    'Apple Japan合同会社(以下「Apple」といいます)は、あなたを' + employee.Job_Level + 'の、' + employee.Job_Title + 'のポジションで採用させていただきたく、お知らせ致します。この新たなポジションでは、' + employee.Hiring_Manager + 'があなたの上司となり、勤務地は入社にあたり指定するAppleショップならびにその他のApple製品取扱店となります。ここに記載する条件は、Appleの裁量で変更する場合があります。あなたの入社を楽しみにお待ちしております。'
                )
            ),
            
            // Work Location == iTunes
            (employee.Work_Location == 'iTunes') &&
            $('<div/>').append(
                $('<p/>').html(
                    'iTunes K.K. (’Apple’) is delighted to offer you the position of ' + employee.Job_Title + ' and the job level of ' + employee.Job_Level + '. In your new position you will report to ' + employee.Hiring_Manager + ' and your place of work will be Roppongi Hills, 6-10-1, Roppongi, Minato-ku, Tokyo. These conditions may be subject to change at the Apple’s discretion. We look forward to welcoming you to Apple.'
                ),
                $('<p/>').html(
                    'iTunes 株式会社(以下、「Apple」といいます)は、' + employee.Job_Level + 'の、' + employee.Job_Title + 'のポジションで採用させていただきたく、お知らせ致します。この新たなポジションでは、' + employee.Hiring_Manager + 'があなたの上司となり、勤務地は東京都港区六本木6-10-1 六本木ヒルズとなります。ここに記載する条件は、Appleの裁量で変更することがあります。Appleは、あなたの入社を楽しみにお待ちしております。'
                )

            ),
            
            // Work Location == Retail Stores
            (employee.Work_Location_Retail == 'Fukuoka Tenjin' || employee.Work_Location_Retail == 'Ginza' || employee.Work_Location_Retail == 'Kanagawa' || employee.Work_Location_Retail == 'Kyoto' || employee.Work_Location_Retail == 'Nagoya Sakae' || employee.Work_Location_Retail == 'Omotesando' || employee.Work_Location_Retail == 'Sendai Ichibancho' || employee.Work_Location_Retail == 'Shibuya' || employee.Work_Location_Retail == 'Shinjuku' || employee.Work_Location_Retail == 'Shinsaibashi' || employee.Work_Location_Retail == 'Kawasaki' || employee.Work_Location_Retail == 'Marunouchi' || employee.Work_Location_Retail == 'Tokyo') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Apple Japan, Inc. (’Apple’) is delighted to offer you the position of ' + employee.Job_Title + ' with the job level of ' + employee.Job_Level + '. In your new position you will report to ' + employee.Hiring_Manager + ', at Apple Store, ' + employee.Work_Location_Retail + '. These conditions may be subject to change at the Apple’s discretion. We look forward to welcoming you to Apple.'
                ),
                $('<p/>').html(
                    'Apple Japan 合同会社（以下「Apple」といいます）は、 あなたをアップルストア' + employee.Work_Location + '店にて' + employee.Job_Level + 'の、' + employee.Job_Title + 'のポジションで採用させていただきたく、お知らせ致します。この新たなポジションでは、' + employee.Hiring_Manager + 'があなたの上司となります。ここに記載する条件は、Apple の裁量で変更する場合があります。Apple は、あなたの入社を楽しみにお待ちしております。'
                )
            ),
            // Offer Type == Standard
            (employee.Offer_Type == 'AHA' || employee.Offer_Type == 'ASC' || employee.Offer_Type == 'Standard General' || employee.Offer_Type == 'Retail Leadership' || employee.Offer_Type == 'RCC' || employee.Offer_Type == 'Siri') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Commencement'
                ),
                $('<p/>').html(
                    'Your effective start date with Apple will be ' + employee.English_Start_Date + '. By your effective start date, you should ensure all your previous obligations to your former employer have been completed, and your employment with Apple does not violate any contractual or statutory obligations of you (including but not limited to noncompete obligations).'
                ),
                $('<p/>').html(
                    '雇用の開始'
                ),
                $('<p/>').html(
                    'Appleでの雇用開始日は、' + employee.Japanese_Start_Date + 'です。当該入社日までに、前職での雇用主に対する義務の履行はすべて完了し、Appleでの就業があなたの第三者に対する契約上および法律上の義務(競業避止義務を含みますが、これに限りません)に違反することがないよう、確認してください。'
                )
            ),
            // Offer Type == Fixed Term
            (employee.Offer_Type == 'DC AHA' || employee.Offer_Type == 'DC ASC' || employee.Offer_Type == 'Fixed Term General') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Commencement'
                ),
                $('<p/>').html(
                    'Your effective start date with Apple will be ' + employee.English_Start_Date + ', with an end date of ' + employee.English_Termination_Date + '. By your effective start date, you should ensure all your previous obligations to your former employer have been completed, and your employment with Apple does not violate any contractual or statutory obligations of you (including but not limited to noncompete obligations).'
                ),
                $('<p/>').html(
                    'Before the end of your employment period, Apple will review your performance against your position/responsibilities and Apple will communicate whether there is intent to extend to you a new offer of employment.'
                ),
                $('<p/>').html(
                    '雇用の開始'
                ),
                $('<p/>').html(
                    'Appleでの雇用開始日は、' + employee.Japanese_Start_Date + 'であり、終了日は' + employee.Japanese_Termination_Date + 'です。当該入社日までに、前職での雇用主に対する義務の履行はすべて完了し、Appleでの就業があなたの第三者に対する契約上および法律上の義務(競業避止義務を含みますが、これに限りません)に違反することがないよう、確認してください。'
                ),
                $('<p/>').html(
                    'Appleは、雇用期間終了時までに、ポジションおよび職務に照らしたパフォーマンス評価を行い、新たな雇用期間のオファーを行う意図を有するか否か、お知らせします。'
                                         
                )
            ),
            // Employee Type == Full Time AND Offer Type == Standard or Fixed Term General
            (employee.Employee_Type == 'FT' && (employee.Offer_Type == 'Fixed Term General' || employee.Offer_Type == 'Standard General')) &&
            $('<div/>').append(
                $('<p/>').html(
                    'Hours of Work, Holidays'
                ),
                $('<p/>').html(
                    'Your normal hours of work will be Monday to Friday: 9:00 a.m. to 5:30 p.m. Saturday and Sunday are weekly holidays. You are eligible for National Holidays and company holidays according to the Rules of Employment and as published on People site. You may be required to work reasonable additional overtime or holiday work hours.'
                ),
                $('<p/>').html(
                    '就業時間、休暇'
                ),
                $('<p/>').html(
                    '所定の就業時間は、月曜日から金曜日の午前9時から午後5時30分までです。土日は休日とします。さらに、国民の休日及びその他就業規則で定め、People siteに休日として掲載する日を、休日とします。ただし、合理的な範囲内での、時間外または休日労働を命じられる場合があります。'
                )
            ),
            // Employee Type == Full Time AND Offer Type == ASC
            (employee.Employee_Type == 'FT' && (employee.Offer_Type == 'ASC' || employee.Offer_Type == 'DC ASC')) &&
            $('<div/>').append(
                $('<p/>').html(
                    'Hours of Work, Holidays'
                ),
                $('<p/>').html(
                    'Your standard number of working hours is 7.5 hours per day, 5 days per week, and you will work on shift. The start and end time of shifts applicable to you are indicated in the <a href="' + employee.Document_Link_ASC + '" target="_blank">Annex on Shift Hour Patterns</a>. You may also be required to work reasonable additional overtime or holiday work hours. You are eligible for National Holidays and company holidays according to the Rules of Employment and as published on People site. Because you work on shift, Apple may schedule the holiday on different days of the week and will notify you in advance of the relevant week.'
                ),
                $('<p/>').html(
                    '就業時間、休暇'
                ),
                $('<p/>').html(
                    '所定就業時間は、1日7.5時間、週5日として、勤務シフトにより定めます。あなたのシフトには、添付別紙記載<a href="' + employee.Document_Link_ASC + '" target="_blank">(シフト時間のパターン)</a>の始業及び終業時刻を適用します。ただし、合理的な範囲内での、時間外または休日労働を命じられる場合があります。さらに、国民の休日及びその他就業規則で定め、People siteに休日として掲載する日を、休日とします。なお、シフト勤務のため、週の所定休日はAppleの事前の通知により、週により曜日が変動し得ます。'
                )
            ),
            // Employee Type == Full Time AND Offer Type == AHA, DC AHA
            (employee.Employee_Type == 'FT' && (employee.Offer_Type == 'AHA' || employee.Offer_Type == 'DC AHA')) &&
            $('<div/>').append(
                $('<p/>').html(
                    'Hours of Work, Holidays'
                ),
                $('<p/>').html(
                    'Your standard number of working hours is 7.5 hours per day, 5 days per week, and you will work on shift. The start and end time of shifts applicable to you are indicated in the <a href="' + employee.Document_Link_AHA + '" target="_blank">Annex on Shift Hour Patterns</a>. You may also be required to work reasonable additional overtime or holiday work hours. You are eligible for National Holidays and company holidays according to the Rules of Employment and as published on People site. Because you work on shift, Apple may schedule the holiday on different days of the week and will notify you in advance of the relevant week.'
                ),
                $('<p/>').html(
                    '就業時間、休暇'
                ),
                $('<p/>').html(
                    '所定就業時間は、1日7.5時間、週5日として、勤務シフトにより定めます。あなたのシフトには、添付別紙記載<a href="' + employee.Document_Link_AHA + '" target="_blank">(シフト時間のパターン)</a>の始業及び終業時刻を適用します。ただし、合理的な範囲内での、時間外または休日労働を命じられる場合があります。さらに、国民の休日及びその他就業規則で定め、People siteに休日として掲載する日を、休日とします。なお、シフト勤務のため、週の所定休日はAppleの事前の通知により、週により曜日が変動し得ます。'
                )

            ),
            // Employee Type == Full Time AND Offer Type == RCC
            (employee.Employee_Type == 'FT' && (employee.Offer_Type == 'RCC')) &&
            $('<div/>').append(
                $('<p/>').html(
                    'Hours of Work, Holidays'
                ),
                $('<p/>').html(
                    'Your standard number of working hours is 7.5 hours per day, 5 days per week, and you will work on shift. The start and end time of shifts applicable to you are indicated in the <a href="' + employee.Document_Link_RCC + '" target="_blank">Annex on Shift Hour Patterns</a>. You may also be required to work reasonable additional overtime or holiday work hours. You are eligible for National Holidays and company holidays according to the Rules of Employment and as published on People site. Because you work on shift, Apple may schedule the holiday on different days of the week and will notify you in advance of the relevant week.'
                ),
                $('<p/>').html(
                    '就業時間、休暇'
                ),
                $('<p/>').html(
                    '所定就業時間は、1日7.5時間、週5日として、勤務シフトにより定めます。あなたのシフトには、添付別紙記載 <a href="' + employee.Document_Link_RCC + '" target="_blank">（シフト時間のパターン）</a>の始業及び終業時刻を適用します。ただし、合理的な範囲内での、時間外または休日労働を命じられる場合があります。さらに、国民の休日及びその他就業規則で定め、People siteに休日として掲載する日を、休日とします。なお、シフト勤務のため、週の所定休日はAppleの事前の通知により、週により曜日が変動し得ます。'
                )

            ),

 // Employee Type == Full Time AND Offer Type == Siri
            (employee.Employee_Type == 'FT' && (employee.Offer_Type == 'Siri')) &&
            $('<div/>').append(
                $('<p/>').html(
                    'Hours of Work, Holidays'
                ),
                $('<p/>').html(
                    'Your normal hours of work will be Monday to Friday: 9:00 a.m. to 6:00 p.m., which includes one hour lunch break (unpaid), and two 15 minutes rest break (unpaid). Saturday and Sunday are weekly holidays. You are eligible for National Holidays and company holidays according to the Rules of Employment and as published on People site. You may be required to work reasonable additional overtime or holiday work hours.'
                ),
                $('<p/>').html(
                    '就業時間、休暇'
                ),
                $('<p/>').html(
                    '所定就業時間は、月曜日から金曜日の午前9時から午後6時までです。この時間には、1時間の昼食休憩（無給）と15分の小休憩（無給）2回が含まれます。土日は休日とします。さらに、国民の休日及びその他就業規則で定め、People siteに休日として掲載する日を、休日とします。ただし、合理的な範囲内での、時間外または休日労働を命じられる場合があります。'
                )

            ),

            // Employee Type == Part Time AND Offer Type != ASC, DC ASC, AHA
            (employee.Employee_Type == 'PT' && (employee.Offer_Type != 'ASC' && employee.Offer_Type != 'AHA' && employee.Offer_Type != 'DC ASC')) &&
            $('<div/>').append(
                $('<p/>').html(
                    'Hours of Work'
                ),
                $('<p/>').html(
                    'Your normal working shift will be ' + employee.English_Working_Days + ' days a week, Monday through Friday. Your total working hours shall be equal to or less than 28 hours per week and 7.5 hours per day, and may vary depending on the needs of the business, as notified in advance. You may also be required to work reasonable additional overtime.'
                ),
                $('<p/>').html(
                    '就業時間'
                ),
                $('<p/>').html(
                    '所定就業時間は、月曜日から金曜日までの週' + employee.Japanese_Working_Days + '日のシフト勤務とし、一週間の所定労働時間は、業務の必要に応じて週28時間以内、一日7.5時間以内で変動し得、事前に通知します。ただし、合理的な範囲内での、時間外労働を命じられる場合があります。'
                )
            ),
            // Employee Type == Part Time AND Offer Type == ASC or DC ASC
            (employee.Employee_Type == 'PT' && (employee.Offer_Type == 'ASC' || employee.Offer_Type == 'DC ASC')) &&
            $('<div/>').append(
                $('<p/>').html(
                    'Hours of Work'
                ),
                $('<p/>').html(
                    'Your normal working hours will not exceed 28 hours per week. Your work hour and work day schedule will be decided by Apple based on the start and end time of shifts in the <a href="' + employee.Document_Link_ASC + '" target="_blank">Annex on Shift Hour Patterns</a> and will be notified to you in advance. These patterns may be subject to change from time to time due to business needs, etc., upon Apple’s notification to move the start and/or end times up / down within the scope of the prescribed work hours.'
                ),

                $('<p/>').html(
                    '就業時間'
                ),
                $('<p/>').html(
                    '所定就業時間は、週28時間以内とします。あなたの所定就業時間及び勤務日は、添付別紙記載<a href="' + employee.Document_Link_ASC + '" target="_blank">(シフト時間のパターン)</a>の始業及び終業時刻に基づき、Appleが定め事前に通知します。業務の都合等により随時、所定労働時間の範囲内でAppleの指定により、始業及び／又は集合時刻を繰り上げ、又は繰り下げることがあります。'
                )

            ),
            // Offer Type == Retail Leadership
            (employee.Offer_Type == 'Retail Leadership') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Hours of Work'
                ),
                $('<p/>').html(
                    'Your normal working hours will be 40 hours per week in accordance with a scheduled shift provided by the store. You will be entitled to 2 days off per week. You may also be required to work reasonable additional overtime or holiday work hours.'
                ),
                $('<p/>').html(
                    '就業時間'
                ),
                $('<p/>').html(
                    '所定の就業時間は、週40時間として、ストアの勤務シフトにより定めます。1週間のうち、2日を休日とします。ただし、合理的な範囲内での、時間外または休日労働を命じられることがあります。'
                )

            ),
            // Offer Type == Standard AND Offer Type != ASC
            (employee.Offer_Type == 'Standard General' || employee.Offer_Type == 'Retail Leadership' || employee.Offer_Type == 'AHA' || employee.Offer_Type == 'RCC' || employee.Offer_Type == 'Siri' && (employee.Offer_Type != 'ASC')) && (employee.Probation == 'Yes' ) && 
            $('<div/>').append(
                $('<p/>').html(
                    'Probation Period'
                ),
                $('<p/>').html(
                    'You will be on probation for three (3) months from your start date. Apple reserves the right to extend this period for another three (3) months if your performance fails to meet Apple’s expectation. Apple will review your performance and make a decision as to your permanent employment at the end of this probation period. Should you be offered permanent employment at that time, the terms and benefits below will accrue from your start date.'
                ),
                $('<p/>').html(
                    '試用期間'
                ),
                $('<p/>').html(
                    '入社日から3か月間を、試用期間とします。Appleは、あなたの試用期間中のパフォーマンスがAppleの求める水準に達しない場合、試用期間をさらに3か月延長する権利を留保します。Appleは、試用期間満了時までにパフォーマンス評価を行い、あなたを正社員として雇用するかどうか、正式な決定を行います。正社員とする場合には、以下の労働条件や福利厚生に関する権利は、入社日から生じたものとします。'
                )
            ),
            // Offer Type == DC AHA
            (employee.Offer_Type == 'DC AHA') && (employee.Probation == 'Yes') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Probation Period'
                ),
                $('<p/>').html(
                    'You will be on probation for 2 months from your start date. During the probation period, you are required to take the New to Competency training which includes various training sessions on technology and company policies and processes. After you complete the training, you will take an Academy Exam.  If you fail the first time, you will have one chance (and only one chance) to retake the exam. You are required to pass the Academy Exam (the criteria of passing the exam will be notified by Apple in advance), as one of the conditions to successfully pass your probation period. In other words, if you fail to pass the Academy Exam up to a maximum of two times, you will not pass the probation period, and your employment can be terminated by Apple. Note that the exam is not the sole standard of evaluation during the probation period, and you are also required to satisfy other job requirements, including but not limited to complying with AppleCare attendance policy, Apple Business Conduct, and other company policies.'
                ),
                $('<p/>').html(
                    '試用期間'
                ),
                $('<p/>').html(
                    '雇用開始日から2ヶ月を、試用期間とします。試用期間中、あなたは技術並びに当社ポリシー及び手順の各種講習を含むNew to Competencyトレーニングの受講を義務付けられます。このトレーニング完了後、Academy Examを実施しますので、あなたはこれを受ける必要があります。初回不合格の場合、もう一度（但し一回限り）の再受験が可能です。試用期間の目標を達成するためには、Academy Examの合格が条件の一つとなります（合格の要件については、Appleから事前に通知します）。すなわち、あなたが2回の受験を上限とするAcademy Examに合格しない場合、あなたは試用期間の目標を達成しなかったものとして、当社は雇用関係を終了させることができます。なお、試用期間中の評価はかかる試験のみではなく、あなたはAppleCare出勤ポリシー、Apple Business Conductその他当社ポリシーの遵守を含みますが、これらに限られず他の職務上の要件を満たす必要があります。'
                )
            ),
            // Employee Type == Full Time AND Offer Type == Standard
            (employee.Employee_Type == 'FT' && (employee.Offer_Type == 'AHA' || employee.Offer_Type == 'ASC' || employee.Offer_Type == 'Standard General' || employee.Offer_Type == 'Retail Leadership' || employee.Offer_Type == 'RCC' || employee.Offer_Type == 'Siri')) &&
            $('<div/>').append(
                $('<p/>').html(
                    'Salary'
                ),
                $('<p/>').html(
                    'You will receive an annual base salary of ' + employee.Salary_Amount + ' yen (less deductions required by local laws) payable on a monthly basis in 12 equal installments in accordance with Apple’s standard payroll procedures. Apple reserves the right to modify salaries and benefits from time to time as it deems necessary.'
                ),
(employee.JP_OT_Compensation == 'OT-Exempt') &&
                $('<p/>').html(
                    'Your base salary is inclusive of compensation for night-time work, as detailed in the Rules of Employment.'
                ),
                (employee.JP_OT_Compensation == 'OT-Non Exempt') &&
                $('<p/>').html(
                    'Apple will pay you the overtime work according to the Rules of Employment and the legal requirements, based on the actual overtime hours you worked.'
                ),
                (employee.JP_OT_Compensation == 'OT-Minashi') && (employee.Offer_Type != 'DC ASC') &&
                $('<p/>').html(
                    'Your base salary is inclusive of compensation for overtime, night-time and holiday work, as detailed in the Rules of Employment.'
                ),
                $('<p/>').html(
                    '給与'
                ),
                $('<p/>').html(
                    '給与は、年収で' + employee.Salary_Amount + '円(この額から、勤務地の所得税その他法令に定められたものを控除します)とし、Appleの給与支払い手順に従い、毎月一度、年収額を12分割した金額をお支払いします。Appleは、必要に応じて随時給与及び福利厚生を変更する権利を留保します。'
                ),
                (employee.JP_OT_Compensation == 'OT-Exempt') &&
                $('<p/>').html(
                    'あなたの基本給は、就業規則の定めのとおり、時間外労働に対する割増手当を含みます'
                ),
                (employee.JP_OT_Compensation == 'OT-Non Exempt') &&
                $('<p/>').html(
                    'Appleは、就業規則及び法令の定めにしたがい、残業の実労働時間に基づき割増手当を支払います。'
                ),
                (employee.JP_OT_Compensation == 'OT-Minashi') &&
                $('<p/>').html(
                    'あなたの基本給は、就業規則の定めのとおり、時間外、深夜及び休日労働に対する割増手当を含みます。'
)
            ),
            // Employee Type == Full Time AND Offer Type == Fixed Term
            (employee.Employee_Type == 'FT' && (employee.Offer_Type == 'DC AHA' || employee.Offer_Type == 'DC ASC' || employee.Offer_Type == 'Fixed Term General')) &&
            $('<div/>').append(
                $('<p/>').html(
                    'Salary'
                ),
                $('<p/>').html(
                    'You will receive a monthly base salary of ' + employee.Salary_Amount + ' yen (less deductions required by local laws) payable on a monthly basis in accordance with Apple’s standard payroll procedures. Apple reserves the right to modify salaries and benefits from time to time as it deems necessary.'
                ),
(employee.JP_OT_Compensation == 'OT-Exempt') &&
                $('<p/>').html(
                    'Your base salary is inclusive of compensation for night-time work, as detailed in the Rules of Employment.'
                ),
                (employee.JP_OT_Compensation == 'OT-Non Exempt') &&
                $('<p/>').html(
                    'Apple will pay you the overtime work according to the Rules of Employment and the legal requirements, based on the actual overtime hours you worked.'
                ),
                (employee.JP_OT_Compensation == 'OT-Minashi') && (employee.Offer_Type != 'DC ASC') &&
                               $('<p/>').html(
                    'Your base salary is inclusive of compensation for overtime, night-time and holiday work, as detailed in the Rules of Employment.'
                ),
                (employee.JP_OT_Compensation == 'OT-Minashi') && (employee.Offer_Type == 'DC ASC') &&
                               $('<p/>').html(
                    '40% of your annual base salary is included as allowance for overtime work, rest day work and midnight work.'
                ),
                $('<p/>').html(
                    '給与'
                ),
                $('<p/>').html(
                    '給与は、月額' + employee.Salary_Amount + '円の基本給(この額から、勤務地の所得税その他法令に定められたものを控除します)とし、Appleの給与支払い手順にしたがい、年、毎月一度の支払いとなります。Appleは、必要に応じて随時給与及び福利厚生を変更する権利を留保します。'
                ),
                (employee.JP_OT_Compensation == 'OT-Exempt') &&
                $('<p/>').html(
                    'あなたの基本給は、就業規則の定めのとおり、時間外労働に対する割増手当を含みます'
                ),
                (employee.JP_OT_Compensation == 'OT-Non Exempt') &&
                $('<p/>').html(
                    'Appleは、就業規則及び法令の定めにしたがい、残業の実労働時間に基づき割増手当を支払います。'
                ),
                (employee.JP_OT_Compensation == 'OT-Minashi') && (employee.Offer_Type != 'DC ASC') &&
                $('<p/>').html(
                    'あなたの基本給は、就業規則の定めのとおり、時間外、深夜及び休日労働に対する割増手当を含みます。'
                                ),
                (employee.JP_OT_Compensation == 'OT-Minashi') && (employee.Offer_Type == 'DC ASC') &&
                $('<p/>').html(
                    'あなたの年俸には、労使間で協定した 時間外労働の時間外、休日勤務、及び深夜勤務手当相 当分(年俸の40%)があらかじめ含まれているものとします。'

)
            ),

            // Employee Type == Part Time
            (employee.Employee_Type == 'PT') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Salary'
                ),
                $('<p/>').html(
                    'You will receive an hourly base salary of ' + employee.Salary_Amount + ' yen (less deductions required by local laws) payable once a month in accordance with Apple’s standard payroll procedures. Apple reserves the right to modify salaries and benefits from time to time as it deems necessary.'
                ),
                               (employee.JP_OT_Compensation == 'OT-Exempt') &&
                $('<p/>').html(
                    'Your base salary is inclusive of compensation for night-time work, as detailed in the Rules of Employment.'
                ),
                (employee.JP_OT_Compensation == 'OT-Non Exempt') &&
                $('<p/>').html(
                    'Apple will pay you the overtime work according to the Rules of Employment and the legal requirements, based on the actual overtime hours you worked.'
                ),
                (employee.JP_OT_Compensation == 'OT-Minashi') && 
                $('<p/>').html(
                    'Your base salary is inclusive of compensation for overtime, night-time and holiday work, as detailed in the Rules of Employment.'
                ),
                $('<p/>').html(
                    '給与'
                ),
                $('<p/>').html(
                    '給与は、時給' + employee.Salary_Amount + '円(この額から、勤務地の所得税その他法令に定められたものを控除します)とし、Appleの給与支払い手順にしたがい、毎月一度支払います。Appleは、必要に応じて適時に給与及び福利厚生を変更する権利を留保します。'
                ),
                                (employee.JP_OT_Compensation == 'OT-Exempt') &&
                $('<p/>').html(
                    'あなたの基本給は、就業規則の定めのとおり、時間外労働に対する割増手当を含みます'
                ),
                (employee.JP_OT_Compensation == 'OT-Non Exempt') &&
                $('<p/>').html(
                    'Appleは、就業規則及び法令の定めにしたがい、残業の実労働時間に基づき割増手当を支払います。'
                ),
                (employee.JP_OT_Compensation == 'OT-Minashi') &&
                $('<p/>').html(
                    'あなたの基本給は、就業規則の定めのとおり、時間外、深夜及び休日労働に対する割増手当を含みます。'
)
            ),

            // Target
            (employee.Target) &&
            $('<div/>').append(
                $('<p/>').html(
                    'Commission'
                ),
                $('<p/>').html(
                    'You will participate in the Apple Asia Pacific Sales Compensation Plan which pays a target commission of ' + employee.Target + '% on On-Target Earning (OTE). Your OTE will be ' + employee.OTE_Amount + ' yen per annum. This plan, including the split between the base pay and variable commission of ' + employee.Calculate_100_Minus_Target + ':' + employee.Target + ' ratio may be subject to change. These changes, if any, will be made at Apple’s absolute discretion to which you consent by accepting this offer.'
                ),
                $('<p/>').html(
                    'コミッション'
                ),
                $('<p/>').html(
                    'あなたは、On Target Earning(OTE)を達成した場合に、' + employee.Target + '%のコミッションが支払われるApple Asia Pacific Sales Compensation Planに参加します。あなたのOTEは、年間' + employee.OTE_Amount + '円とします。基本給と変動コミッションの割合' + employee.Calculate_100_Minus_Target + ':' + employee.Target + 'を含め、このプランの内容は、変更し得ます。Appleは、その完全な裁量で随時かかる変更を可能とし、あなたの本オファーの受諾は、かかる変更への承諾を含むものとします。'
                )
            ),
            // Hire On Bonus 
            (employee.Hire_On_Bonus) &&
            $('<div/>').append(
                $('<p/>').html(
                    'Hire-On Bonus'
                ),
                $('<p/>').html(
                    'You will be eligible to receive a hire-on bonus of ' + employee.Hire_On_Bonus + ' yen will be paid, less required deductions, to a financial institution together with your base salary. This bonus is subject to the following conditions. In order to earn the bonus you must be actively employed by Apple for 12 months following your start date. Apple will advance you payment of the bonus in the next regular payroll cycle. Should you voluntarily terminate your employment within 12 months of your start date, you will be responsible for reimbursing all or part of the bonus payment at Apple’s sole discretion. By your signature below, you authorize Apple to deduct any unearned bonus advance from your final paycheck. '
                ),
                $('<p/>').html(
                    '採用ボーナス'
                ),
                $('<p/>').html(
                    '採用ボーナスとして、' + employee.Hire_On_Bonus + '円から源泉後の金額を、基本給に加え金融機関宛ての振り込みにより支給します。このボーナスの支給は、以下を条件とします。まず、受給を確定するためには、雇用開始日から12か月間、Appleでの雇用を継続し、現に就労していることが必要となります。Appleは、このボーナスを、次回の定期の賃金支給時に、前払いで支給します。あなたが雇用開始日から12か月以内に自主的に退職する場合には、Appleの裁量で定める金額(採用ボーナスの全部又は一部)を、Appleに返還する義務を負います。あなたの本書面への書面による同意は、Appleに対し、前払いを受けたものの、受給権が確定せず返還義務を負うボーナス額を、あなたに対する最終の給与支払額その他Appleがあなたに対して支払義務を負う金銭から控除することへの同意を含むものとします。'
                )
            ),
            // Job Level == Director, Sr Director, VP 
            ((employee.Job_Level_Code == 'DIR' || employee.Job_Level_Code == 'Sr DIR' || employee.Job_Level_Code == 'VP') && (employee.Target == '')) &&
            $('<div/>').append(
                $('<p/>').html(
                    employee.Fiscal_Year + ' VP and Director Quarterly Bonus Plan'
                ),
                $('<p/>').html(
                    'You’re eligible for participation in the VP & Director Quarterly Bonus Plan (’Plan’). The Plan provides for varying levels of payout based on revenue achievement and operating profit achievement. If specific quarterly performance targets are achieved, your bonus may range up to a maximum of 50% of your quarterly base salary. Eligibility and participation is subject to the written terms and conditions contained in the Plan. Please review the Plan document, which will be sent to you separately, for more specific details including eligibility criteria. The conditions of the Plan may be changed at any time at the sole discretion of the Company.'
                ),
                $('<p/>').html(
                    employee.Fiscal_Year + ' VP及びDirector四半期ボーナス・プラン'
                ),
                $('<p/>').html(
                    'あなたは、VP&Director四半期ボーナス・プラン（「本プラン」）に参加することができます。本プランでは、売上及び営業利益の成果に応じて、支払いのレベルが変動し得ます。四半期ごとの特定のパフォーマンスの目標を達成した場合、あなたのボーナスは、最大で四半期の基本給の50%となります。参加資格及び参加は、本プランについて書面で定める条件によります。参加資格を含め、詳細については別途ご提供する本プランの内容をご覧ください。本プランの内容は、当社の完全な裁量により、随時改定し得ます。'
                )
            ),
             // Discretionary Bonus
            ((employee.Annual_Bonus == 'Discretionary Bonus') && (employee.Job_Level_Code == 'MGR 3' || employee.Job_Level_Code == 'ICT 6' || employee.Job_Level_Code == 'IC 6')) &&
            $('<div/>').append(
                $('<p/>').html(
                    'Discretionary Bonus'
                ),
                $('<p/>').html(
                    'You will be eligible to receive an annual cash bonus with a target bonus amount of 20% of your base salary.  Bonuses are discretionary and awarded based on your individual performance, Apple’s overall performance, and when your employment begins during the fiscal year.  As a result, bonuses awarded in the first year of employment typically range between 10% and 20% of base salary. Whether bonuses are paid and the amount and timing of any bonus payments is determined at the sole discretion of Apple.'
                ),
                $('<p/>').html(
                    '裁量ボーナス'
                ),
                $('<p/>').html(
                    'あなたは、年間の基本給の最大20%をターゲットとする現金のボーナスを受けることができます。ボーナスはAppleの裁量によるものであり、あなた個人のパフォーマンスやApple全体の業績、会計年度における雇用の開始時期に応じて付与されます。そのため、入社1年目に支給されるボーナス額は通常、基本給の10%から20%の間となります。ボーナス支給の有無、およびボーナスが支給される場合の金額と支払いの時期は、Appleの独自の裁量により決定されます。'
                )
            ),
            // Discretionary Bonus
            ((employee.Annual_Bonus == 'Discretionary Bonus') && (employee.Job_Level_Code == 'MGR 2' || employee.Job_Level_Code == 'ICT 5' || employee.Job_Level_Code == 'IC 5')) &&
            $('<div/>').append(
                $('<p/>').html(
                    'Discretionary Bonus'
                ),
                $('<p/>').html(
                    'You will be eligible to receive an annual cash bonus with a target bonus amount of 15% of your base salary.  Bonuses are discretionary and awarded based on your individual performance, Apple’s overall performance, and when your employment begins during the fiscal year.  As a result, bonuses awarded in the first year of employment typically range between 5% and 15% of base salary. Whether bonuses are paid and the amount and timing of any bonus payments is determined at the sole discretion of Apple.'
                ),
                $('<p/>').html(
                    '裁量ボーナス'
                ),
                $('<p/>').html(
                    'あなたは、年間の基本給の最大15%をターゲットとする現金のボーナスを受けることができます。ボーナスはAppleの裁量によるものであり、あなた個人のパフォーマンスやApple全体の業績、会計年度における雇用の開始時期に応じて付与されます。そのため、入社1年目に支給されるボーナス額は通常、基本給の5%から15%の間となります。ボーナス支給の有無、およびボーナスが支給される場合の金額と支払いの時期は、Appleの独自の裁量により決定されます。'
                )
            ),
              // Discretionary Bonus
             ((employee.Annual_Bonus == 'Discretionary Bonus') && (employee.Job_Level_Code == 'MGR 1' || employee.Job_Level_Code == 'ICT 4' || employee.Job_Level_Code == 'IC 4')) &&
            $('<div/>').append(
                $('<p/>').html(
                    'Discretionary Bonus'
                ),
                $('<p/>').html(
                    'You will be eligible to receive an annual cash bonus with a target bonus amount of 10% of your base salary.  Bonuses are discretionary and awarded based on your individual performance, Apple’s overall performance, and when your employment begins during the fiscal year.  As a result, bonuses awarded in the first year of employment typically range between 5% and 10% of base salary. Whether bonuses are paid and the amount and timing of any bonus payments is determined at the sole discretion of Apple.'
                ),
                $('<p/>').html(
                    '裁量ボーナス'
                ),
                $('<p/>').html(
                    'あなたは、年間の基本給の最大10%をターゲットとする現金のボーナスを受けることができます。ボーナスはAppleの裁量によるものであり、あなた個人のパフォーマンスやApple全体の業績、会計年度における雇用の開始時期に応じて付与されます。そのため、入社1年目に支給されるボーナス額は通常、基本給の5%から10%の間となります。ボーナス支給の有無、およびボーナスが支給される場合の金額と支払いの時期は、Appleの独自の裁量により決定されます。'
                )
            ),
                // Discretionary Bonus
               ((employee.Annual_Bonus == 'Discretionary Bonus') && (employee.Job_Level_Code == 'IC 3' || employee.Job_Level_Code == 'ICT 3' || employee.Job_Level_Code == 'SUP' || employee.Job_Level_Code == 'SUP 2')) &&
            $('<div/>').append(
                $('<p/>').html(
                    'Discretionary Bonus'
                ),
                $('<p/>').html(
                    'You may be eligible to receive a discretionary bonus based on your individual performance and ' + 'Apple' + '&#39;s overall performance. Whether a bonus is paid and the amount and timing of the bonus payment is at the sole discretion of ' + 'Apple' + '.'
                ),
                $('<p/>').html(
                    '裁量ボーナス'
                ),
                $('<p/>').html(
                    'あなた個人のパフォーマンスやAppleの業績にもとづいて、自由裁量によるボーナスの支給が受けられる場合があります。ボーナス支給の有無、およびボーナスが支給される場合の金額と支払いの時期は、Appleの自由裁量により決定されます。'
                )
            ),
            $('<div/>').append(
                $('<p/>').html(
                    'Taxation'
                ),
                $('<p/>').html(
                    'It is your sole responsibility to fully and completely report to the appropriate tax authorities, and pay all monies required for tax purposes outside of Apple’s standard payroll procedures.'
                ),
                $('<p/>').html(
                    '税'
                ),
                $('<p/>').html(
                    'あなたは、Appleの所定の給与支払手続以外の税務上の支払いや、税務当局へ申告を完全かつ正確に行うことに関して、単独で責任を負います。'
                )
            ),
            // Relocation Allowance 
            (employee.Relocation_Allowance) &&
            $('<div/>').append(
                $('<p/>').html(
                    'Relocation Allowance'
                ),
                $('<p/>').html(
                    'You will be entitled to a relocation allowance worth ' + employee.Relocation_Allowance + ' yen in order to cover the cost of your move. This allowance will be paid less required deductions to the financial institution you specify together with your base salary.'
                ),
                $('<p/>').html(
                    '転勤手当'
                ),
                $('<p/>').html(
                    'あなたの引越費用に充てるため、' + employee.Relocation_Allowance + '円相当の転勤手当を支給します。この手当は、源泉後の額を、基本給に加えてあなたが指定する金融機関への振り込みにより支払います。'
                )
            ),
            // Employee Type == Full Time
            (employee.Employee_Type == 'FT') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Benefits and Social insurance'
                ),
                $('<p/>').html(
                    'You will be eligible for standard government social insurance schemes such as health insurance, welfare pension insurance, workmen’s accident insurance and unemployment insurance in accordance with Apple’s Rules of Employment. Other company benefits will be offered in addition to the above, and your benefits summary will be provided in a separate document attached to this offer.'
                ),
                $('<p/>').html(
                    'In order to remain competitive in our compensation practices, the components of your compensation and benefits may be altered from time to time. Whenever such changes become necessary, you will be given one month’s advance notice of the impending change.'
                ),
                $('<p/>').html(
                    '福利厚生および労働 • 社会保険'
                ),
                $('<p/>').html(
                    'あなたは、Appleの就業規則で定めるとおり、法定の健康保険、厚生年金保険、労災保険および雇用保険に加入するものとします。上記の他に、Appleが提供する福利厚生およびその概要は、本採用通知の別添資料の通りです。'
                ),
                $('<p/>').html(
                    'Appleが給与体系においても競争力を維持するため、あなたの給与および福利厚生の内容は、随時改定される場合があります。当該変更が必要となる場合は、1ヶ月前までに通知がされます。'
                )
            ),

            // Employee Type == Part Time || ndugang
            (employee.Employee_Type == 'PT') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Benefits and Social insurance'
                ),
                $('<p/>').html(
                    'You may be eligible for workmen’s accident insurance and/or unemployment insurance in accordance with local labor laws. Other company benefits will be offered in addition to the above, and your benefits summary will be provided in a separate document attached to this offer.'
                ),
                $('<p/>').html(
                    'In order to remain competitive in our compensation practices, the components of your compensation and benefits may be altered from time to time. Whenever such changes become necessary, you will be given one month’s advance notice of the impending change.'
                ),
                $('<p/>').html(
                    '福利厚生及び労働 • 社会保険'
                ),
                $('<p/>').html(
                    'あなたは、現地法令にしたがい、労災保険及び雇用保険に加入する権利を有する場合があります。上記の他に、Appleが提供する福利厚生およびその概要は、本採用通知の別添資料の通りです。'
                ),
                $('<p/>').html(
                    'Appleが給与体系においても競争力を維持するため、あなたの給与および福利厚生の内容は、随時改定される場合があります。当該変更が必要となる場合は、1ヶ月前までに通知がされます。'
                )
            ),
            // Offer Type != Retail Leadership
            (employee.Offer_Type != 'Retail Leadership') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Travel'
                ),
                $('<p/>').html(
                    'Your duties may require you to travel within or outside Japan. You should make yourself familiar with our travel and expense reimbursement policy.'
                ),
                $('<p/>').html(
                    '出張'
                ),
                $('<p/>').html(
                    'あなたは職務上、日本国内外への出張を命じられる場合があります。旅行および、経費に関するポリシーに従ってください。'
                )
            ),
            // Work Location != iTunes
            (employee.Work_Location != 'iTunes') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Conditions of employment'
                ),
                $('<p/>').html(
                    'This employment offer is contingent on the following conditions.'
                ),
                (employee.Offer_Type == 'Siri') &&
                $('<p/>').html(
                    '- As you are aware, your initial period of employment with us will be in training where you will be given further skills/training to help you do a great job. Tests will be administered to you and it is imperative that you pass these, as failing to do so, may result in you failing your probation and ultimately having your contract terminated.'
                ),
                $('<p/>').html(
                    '- On the first day of your employment, and possibly from time to time thereafter, you must show proof of identity and approved employment pass to work in Japan as required by government of Japan. If you are unable to provide documentation of your authorization to work in Japan, Apple may immediately terminate your employment.'
                ),
                $('<p/>').html(
                    '- You must sign the Confidentiality and Assignment of all Rights of Invention Agreement and return the signed agreement with this offer letter. Any exceptions or approvals required under the terms of the Confidentiality and Assignment of all Rights of Invention Agreement must be approved by your division’s vice president and Apple’s Legal Department prior to your beginning work. Nevertheless, you are permitted to speak freely about your wages, hours, and working conditions, including information about harassment, discrimination, or any other conduct you have reason to believe is unlawful, and nothing in this employment offer, or any other agreement, should be interpreted as being restrictive of your right to do so.'
                ),
                $('<p/>').html(
                    '- We believe that every employee should use good judgment and exercise uncompromising integrity when conducting Apple business. By accepting this offer, you acknowledge that you have received and read Apple’s Business Conduct Policy and that you agree to comply with its terms.'
                ),
                $('<p/>').html(
                    '- Any matters that have not been addressed in this offer will be handled in accordance with the Rules of Employment. By accepting this offer, you agree to read, understand and abide by Apple’s Rules of Employment document.'
                ),
                $('<p/>').html(
                    '- You acknowledge that personnel information will be gathered about you within the scope of your employment, including as part of the hiring process (“Employee Personal Information”). Your Employee Personal Information is considered private and confidential and is treated in accordance with Apple’s Personnel Information Privacy Policy. You understand that you may access, review, make changes to your information and object for legitimate reasons to the processing of your information by contacting dpo@apple.com. You also acknowledge that Apple may transfer your Employee Personal Information to other Apple entities located outside of Japan at its discretion, including to Apple Inc. in the United States. By signing this agreement, you consent to such transfer, with the understanding that Apple complies with the local data protection laws (if any), the APEC Cross Border Privacy Rules (CBPR) system or any other regime ensuring equivalent or adequate protection, or by appropriate contractual arrangements or binding corporate rules, and that compliance with these programs provides a comparable standard of protection to that as required under the applicable laws and regulations related to the protection of personal data in Japan.'
                ),
                $('<p/>').html(
                    '- You must receive a satisfactory background check in accordance with Apple policy. The criteria of satisfactory background check are decided by Apple at its sole discretion, and should include but not be limited to (a) that you provide an authentic diploma or graduation certificate; (b) that all the information provided on your CV and during the interview is true and authentic; and (c) that Apple is satisfied with the reference check with your previous employers and any other persons you designated.'
                ),
                // Offer Type == Retail Leadership
                (employee.Offer_Type == 'Retail Leadership') &&
                $('<p/>').html(
                    '- Apple also reserves the right to withdraw this offer if the result of your health examination, which you are requested to submit to Apple before your start date, shows clear evidence that you will be unable to provide labor force for your expected job at Apple.'
                ),
                $('<p/>').html(
                    'If any of the above conditions are not satisfied, Apple may withdraw this employment offer.'
                ),
                $('<p/>').html(
                    '雇用の前提条件'
                ),
                $('<p/>').html(
                    'この採用通知は、以下の条件が満たされることを条件としています。'
                ),
                (employee.Offer_Type == 'Siri') &&
                $('<p/>').html(
                    '-ご承知のとおり、Appleにおける最初の雇用期間中はトレーニングを行います。トレーニングでは、優れた成果を上げるためのスキルを学び、課題に取り組んでいただきます。いくつかのテストを実施しますが、すべてに合格する必要があります。合格できない場合は、試用期間の終了や、最終的には雇用契約の解消につながることがあります。'
                ),
                $('<p/>').html(
                    '-入社日に、またその後必要に応じて随時、身元確認および日本政府が定める日本での就労許可を取得し、その要件を満たしていることを証するために必要な書類等を提示しなければなりません。日本での就労許可を証する書面を提出できない場合には、Appleはあなたの採用を直ちに終了させることがあります。'
                ),
                $('<p/>').html(
                    '-署名済みの本採用通知と共に、署名済みの秘密保持および知的財産に関する契約も提出しなければなりません。上記秘密保持および発明等に関する権利の譲渡契約の条件に関し、例外がある場合または承認を要する場合には、あなたが勤務を開始する前に、必ずあなたの部門のバイス・プレジデントおよびApple法務部の承認を取得しなければなりません。但し、あなたは、ハラスメント、差別、その他違法と判断する理由がある行為に関する情報を含め、賃金、労働時間、労働条件について自由に発言することが認められており、本採用通知その他の合意のいかなる部分も、あなたの当該発言権を制限するものと解釈されない。'
                ),
                $('<p/>').html(
                    '-Appleは、Appleのビジネスに関わる社員一人一人が、Appleのビジネスを遂行する際に、優れた判断力と妥協のない誠実さを発揮してくれるものと考えています。あなたは、本採用通知の受諾をもって、AppleのBusiness Conduct Policyを受領および確認し、その内容に従うことに承諾したものとします。'
                ),
                $('<p/>').html(
                    '-本採用通知にて言及されていない事項については、就業規則の定めに従い取り扱われるものとします。あなたは、本採用通知の受諾をもって、Appleの就業規則を確認し、理解し、遵守することに同意したものとします。'
                ),
                $('<p/>').html(
                    '-あなたは、採用プロセスを含め、あなたの雇用と関連する範囲において、あなたの個人情報（以下、「従業員個人情報」）が収集されることに、同意するものとします。あなたの従業員個人情報は、秘密情報として、Apple Personal Information Privacy Policyに基づいて取り扱います。あなたは、dpo@apple.com宛に連絡すれば、あなたの情報のアクセス、確認、変更又はあなたの情報の処理に関して異議を述べる正当な理由がある場合にこれを述べることができることを、理解するものとします。あなたはまた、Appleがその裁量において、あなたの従業員個人情報を、米国のApple Inc.を含む、日本国外の地域に所在するApple関連組織に移転することを、承諾するものとします。あなたは、この書面への署名をもって、Appleが現地のデータ保護関連法（ある場合）、APECクロス・ボーダー・プライバシー・ルールズ（CBPR）システムその他同様又は十分な保護を定める枠組み、又は適切な契約上の取り決め若しくは拘束力がある社内規則を遵守し、かかるプログラムの遵守が日本国内の個人情報保護に関して法令上求められる保護と同等の水準の保護であるとの理解のもと、かかる移転に同意するものとします。'
                ),
                $('<p/>').html(
                    '-あなたは、Appleのポリシーに従い、十分な身元調査を受ける必要があります。十分な身元調査の基準は(a)真正な修了証書または卒業証書を提出すること;(b)あなたが、履歴書および採用面接で提供した情報のすべてが真実で、真正であること;および(c)Appleがあなたの前雇用主(複数の場合があります)およびあなたが指定したその他の人物による身元調査の結果に満足することを含みますがこれらに限らず、Appleがその独自の裁量で決定します。'
                ),
                // Offer Type == Retail Leadership
                (employee.Offer_Type == 'Retail Leadership') &&
                $('<p/>').html(
                    '-Appleは、あなたが雇用開始日前に提出する必要がある健康診断の結果が、Appleでの職務を果たすことが難しいことを明らかに示す場合には、本採用通知を撤回する権利を留保します。'
                ),
                $('<p/>').html(
                    '上記の前提条件のうち一つでも満たされない条件がある場合、Appleは本採用を取り消すことができるものとします。'
                )
            ),
            // Work Location == iTunes
            (employee.Work_Location == 'iTunes') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Conditions of employment'
                ),
                $('<p/>').html(
                    'This employment offer is contingent on the following conditions.'
                ),
                $('<p/>').html(
                    '- On the first day of your employment, and possibly from time to time thereafter, you must show proof of identity and approved employment pass to work in Japan as required by government of Japan. If you are unable to provide documentation of your authorization to work in Japan, Apple may immediately terminate your employment. '
                ),
                $('<p/>').html(
                    '- You must sign the Confidentiality and Assignment of all Rights of Invention Agreement and return the signed agreement with this offer letter. Any exceptions or approvals required under the terms of the Confidentiality and Assignment of all Rights of Invention Agreement must be approved by your division’s vice president and Apple’s Legal Department prior to your beginning work. Nevertheless, you are permitted to speak freely about your wages, hours, and working conditions, including information about harassment, discrimination, or any other conduct you have reason to believe is unlawful, and nothing in this employment offer, or any other agreement, should be interpreted as being restrictive of your right to do so.'
                ),
                $('<p/>').html(
                    '- We believe that every employee should use good judgment and exercise uncompromising integrity when conducting Apple business. By accepting this offer, you acknowledge that you have received and read Apple’s Business Conduct Policy and that you agree to comply with its terms.'
                ),
                $('<p/>').html(
                    '- Any matters that have not been addressed in this offer will be handled in accordance with the Rules of Employment. By accepting this offer, you agree to read, understand and abide by Apple’s Rules of Employment document.'
                ),
                $('<p/>').html(
                    '- You acknowledge that personnel information will be gathered about you within the scope of your employment, including as part of the hiring process (“Employee Personal Information”). Your Employee Personal Information is considered private and confidential and is treated in accordance with Apple’s Personnel Information Privacy Policy. You understand that you may access, review, make changes to your information and object for legitimate reasons to the processing of your information by contacting dpo@apple.com. You also acknowledge that Apple may transfer your Employee Personal Information to other Apple entities located outside of Japan at its discretion, including to Apple Inc. in the United States. By signing this agreement, you consent to such transfer, with the understanding that Apple complies with the local data protection laws (if any), the APEC Cross Border Privacy Rules (CBPR) system or any other regime ensuring equivalent or adequate protection, or by appropriate contractual arrangements or binding corporate rules, and that compliance with these programs provides a comparable standard of protection to that as required under the applicable laws and regulations related to the protection of personal data in Japan.'
                ),
                $('<p/>').html(
                    '- You must receive a satisfactory background check in accordance with Apple policy. The criteria of satisfactory background check are decided by Apple at its sole discretion, and should include but not be limited to (a) that you provide an authentic diploma or graduation certificate; (b) that all the information provided on your CV and during the interview is true and authentic; and (c) that Apple is satisfied with the reference check with your previous employers and any other persons you designated.'
                ),
                $('<p/>').html(
                    'If any of the above conditions are not satisfied, Apple may withdraw this employment offer.'
                ),
                $('<p/>').html(
                    '雇用の前提条件'
                ),
                $('<p/>').html(
                    'この採用通知は、以下の条件が満たされることを条件としています。'
                ),
                $('<p/>').html(
                    '-入社日に、またその後必要に応じて随時、身元確認および日本政府が定める日本での就労許可を取得し、その要件を満たしていることを証するために必要な書類等を提示しなければなりません。日本での就労許可を証する書面を提出できない場合には、Appleはあなたの採用を直ちに終了させることがあります。'
                ),
                $('<p/>').html(
                    '-署名済みの本採用通知と共に、署名済みの秘密保持および知的財産に関する契約も提出しなければなりません。上記秘密保持および発明等に関する権利の譲渡契約の条件に関し、例外がある場合または承認を要する場合には、あなたが勤務を開始する前に、必ずあなたの部門のバイス・プレジデントおよびApple法務部の承認を取得しなければなりません。但し、あなたは、ハラスメント、差別、その他違法と判断する理由がある行為に関する情報を含め、賃金、労働時間、労働条件について自由に発言することが認められており、本採用通知その他の合意のいかなる部分も、あなたの当該発言権を制限するものと解釈されない。'
                ),
                $('<p/>').html(
                    '-Appleは、Appleのビジネスに関わる社員一人一人が、Appleのビジネスを遂行する際に、優れた判断力と妥協のない誠実さを発揮してくれるものと考えています。あなたは、本採用通知の受諾をもって、AppleのBusiness Conduct Policyを受領および確認し、その内容に従うことに承諾したものとします。'
                ),
                $('<p/>').html(
                    '-本採用通知にて言及されていない事項については、就業規則の定めに従い取り扱われるものとします。あなたは、本採用通知の受諾をもって、Appleの就業規則を確認し、理解し、遵守することに同意したものとします。'
                ),
                $('<p/>').html(
                    '-あなたは、採用プロセスを含め、あなたの雇用と関連する範囲において、あなたの個人情報（以下、「従業員個人情報」）が収集されることに、同意するものとします。あなたの従業員個人情報は、秘密情報として、Apple Personal Information Privacy Policyに基づいて取り扱います。あなたは、dpo@apple.com宛に連絡すれば、あなたの情報のアクセス、確認、変更又はあなたの情報の処理に関して異議を述べる正当な理由がある場合にこれを述べることができることを、理解するものとします。あなたはまた、Appleがその裁量において、あなたの従業員個人情報を、米国のApple Inc.を含む、日本国外の地域に所在するApple関連組織に移転することを、承諾するものとします。あなたは、この書面への署名をもって、Appleが現地のデータ保護関連法（ある場合）、APECクロス・ボーダー・プライバシー・ルールズ（CBPR）システムその他同様又は十分な保護を定める枠組み、又は適切な契約上の取り決め若しくは拘束力がある社内規則を遵守し、かかるプログラムの遵守が日本国内の個人情報保護に関して法令上求められる保護と同等の水準の保護であるとの理解のもと、かかる移転に同意するものとします。'
                ),
                $('<p/>').html(
                    '-あなたは、Appleのポリシーに従い、十分な身元調査を受ける必要があります。十分な身元調査の基準は(a)真正な修了証書または卒業証書を提出すること;(b)あなたが、履歴書および採用面接で提供した情報のすべてが真実で、真正であること;および(c)Appleがあなたの前雇用主(複数の場合があります)およびあなたが指定したその他の人物による身元調査の結果に満足することを含みますがこれらに限らず、Appleがその独自の裁量で決定します。'
                ),
                $('<p/>').html(
                    '上記の前提条件のうち一つでも満たされない条件がある場合、Appleは本採用を取り消すことができるものとします。'
                )
            ),
            //2019-08-20 | SERVICES-38718 | CDY | V6 | Added Probation == Yes
            // Work Location != iTunes AND Offer Type == Standard General
            (employee.Work_Location != 'iTunes' && employee.Probation == 'Yes' && (employee.Offer_Type == 'Standard General' || employee.Offer_Type == 'Retail Leadership' || employee.Offer_Type == 'RCC' || employee.Offer_Type == 'Siri')) &&
            $('<div/>').append(
                $('<p/>').html(
                    'Termination'
                ),
                $('<p/>').html(
                    'Resignation, dismissal and termination of your employment shall be done according to Rules of Employment documents.'
                ),
                $('<p/>').html(
                    '1. During your probationary period, if either you or Apple wishes to terminate your employment within fourteen (14) days from the start date, no prior notice is required by either party.'
                ),
                $('<p/>').html(
                    '2. After the first fourteen (14) days of your probationary period, if either you or Apple wishes to terminate your employment, either party must give thirty (30) days notice in writing. Apple reserves the right to make an equivalent payment in lieu of notice in full or in part.'
                ),
                $('<p/>').html(
                    '3. Your employment may be terminated without notice because of a natural disaster or other unavoidable cause, or when reasons for termination are attributable to you.'
                ),
                $('<p/>').html(
                    '4. Your employment can be terminated immediately without prior notice, if you are subject to punitive dismissal in the circumstances provided in the Rules of Employment.'
                ),
                $('<p/>').html(
                    '退職'
                ),
                $('<p/>').html(
                    '辞職、解雇およびその他雇用の終了は、就業規則に従って行われます。'
                ),
                $('<p/>').html(
                    '1. 試用期間開始から14日以内に、あなたまたはAppleが雇用を終了させる意思を有する場合、いずれの当事者も事前の通知を要しません。'
                ),
                $('<p/>').html(
                    '2. 試用期間開始から14日経過した後に、あなたまたはAppleが雇用を終了させる意思を有する場合、いずれの当事者も30日前に書面により相手に通知する必要があります。Appleは当該通知に代えて、その全部または一部の期間と同等の予告手当を通知に代え支払う権利を留保します。'
                ),
                $('<p/>').html(
                    '3. 自然災害またはその他やむを得ない事由、もしくはあなたの責めに帰るべき事由により雇用を終了させる場合には、即時解雇となることがあります。'
                ),
                $('<p/>').html(
                    '4. あなたが就業規則に定められた懲戒解雇などの対象となる場合には、即時に解雇されることがあります。'
                )
            ),
            //2019-08-20 | SERVICES-38718 | CDY | V6 | New paragraph with Probation == No
            // Work Location != iTunes AND Offer Type == Standard General And Probation == No
             (employee.Work_Location != 'iTunes' && employee.Probation == 'No' && (employee.Offer_Type == 'Standard General' || employee.Offer_Type == 'Retail Leadership' || employee.Offer_Type == 'RCC' || employee.Offer_Type == 'Siri')) &&
            $('<div/>').append(
                $('<p/>').html(
                    'Termination'
                ),
                $('<p/>').html(
                    'Resignation, dismissal and termination of your employment shall be done according to Rules of Employment documents.'
                ),
                $('<p/>').html(
                    '1. If either you or Apple wishes to terminate your employment, either party must give thirty (30) days notice in writing. Apple reserves the right to make an equivalent payment in lieu of notice in full or in part.'
                ),
                $('<p/>').html(
                    '2. Your employment may be terminated without notice because of a natural disaster or other unavoidable cause, or when reasons for termination are attributable to you.'
                ),
                $('<p/>').html(
                    '3. Your employment can be terminated immediately without prior notice, if you are subject to punitive dismissal in the circumstances provided in the Rules of Employment.'
                ),
                $('<p/>').html(
                    '退職'
                ),
                $('<p/>').html(
                    '辞職、解雇およびその他雇用の終了は、就業規則に従って行われます。'
                ),
                $('<p/>').html(
                    '1. あなたまたはAppleが雇用を終了させる意思を有する場合、いずれの当事者も30日前に書面により相手に通知する必要があります。Appleは当該通知に􏰹代えて、その􏰹􏰹全部または一部の期間と同等の予告手当を通知に代え支払う権利を留保します。'
                ),
                $('<p/>').html(
                    '2. 自然災害またはその他やむを得ない事由、もしくはあなたの責めに帰るべき事由により雇用を終了させる場合には、即時解雇となることがあります。'
                ),
                $('<p/>').html(
                    '3. あなたが就業規則に定められた懲戒解雇などの対象となる場合には、即時に解雇されることがあります。'
                )
            ),
            //2019-08-20 | SERVICES-38718 | CDY | V6 | Added Probation == Yes
            // Work Location != iTunes AND Offer Type == AHA
            (employee.Work_Location != 'iTunes' && employee.Probation == 'Yes' && employee.Offer_Type == 'AHA') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Termination'
                ),
                $('<p/>').html(
                    'Resignation, dismissal and termination of your employment shall be done according to Rules of Employment documents.'
                ),
                $('<p/>').html(
                    '1. During your probationary period, if either you or Apple wishes to terminate your employment within fourteen (14) days from the start date, no prior notice is required by either party.'
                ),
                $('<p/>').html(
                    '2. After the first fourteen (14) days of your probationary period, if either you or Apple wishes to terminate your employment, either party must give thirty (30) days notice in writing. Apple reserves the right to make an equivalent payment in lieu of notice in full or in part.'
                ),
                $('<p/>').html(
                    '3. Your employment may be terminated without notice because of a natural disaster or other unavoidable cause, or when reasons for termination are attributable to you.'
                ),
                $('<p/>').html(
                    '4. Your employment can be terminated immediately without notice, if you are subject to punitive dismissal in the circumstances provided in the Rules of Employment, or if you fail to maintain the work environment and equipment according to AHA Agreement.'
                ),
                $('<p/>').html(
                    'In addition to the circumstances where you may receive punitive dismissal prescribed in the Rules of Employment, Apple reserves the right to immediately terminate your employment without notice in any of the following events depending on seriousness of the misconduct:'
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
                    'This employment offer shall be governed and construed in accordance with the laws of Japan, without regard to conflict of law principles. AHA Agreement shall be taken as an appendix of this employment offer, and constitute a part of it. Once your employment with Apple is terminated, the AHA Agreement will cease immediately. By signing this offer you agree that these are the only terms and conditions of your employment and acknowledge that you have not relied upon any other promises or representations, except those made in this offer. Upon you accept this employment offer, it will constitute an employment agreement between you and Apple.'
                ),              
                $('<p/>').html(
                    '退職'
                ),
                $('<p/>').html(
                    '辞職、解雇およびその他雇用の終了は、就業規則に従って行われます。'
                ),
                $('<p/>').html(
                    '1. 試用期間開始から14日以内に、あなたまたはAppleが雇用を終了させる意思を有する場合、いずれの当事者も事前の通知を要しません。'
                ),
                $('<p/>').html(
                    '2. 試用期間開始から14日経過した後に、あなたまたはAppleが雇用を終了させる意思を有する場合、いずれの当事者も30日前に書面により相手に通知する必要があります。Appleは当該通知に代えて、その全部または一部の期間と同等の予告手当を通知に代え支払う権利を留保します。'
                ),
                $('<p/>').html(
                    '3. 自然災害またはその他やむを得ない事由、もしくはあなたの責めに帰るべき事由により雇用を終了させる場合には、即時解雇となることがあります。'
                ),
                $('<p/>').html(
                    '4. あなたが懲戒解雇等、就業規則の定めにより定める事由に該当する場合又はAHA契約に定める就労環境及び設備を維持しない場合には、予告なく即時に解雇されることがあります。'
                ),
                $('<p/>').html(
                    '就業規則に規定された懲戒解雇の対象となる場合に加え、Appleは次のいずれかの場合、その不正行為の重大さに照らし、あなたを予告なく即時に解雇する権利を留保します。'
                ),
                $('<p/>').html(
                    '1. あなたが本雇用契約に違反した場合。'
                ),
                $('<p/>').html(
                    '2. あなたがAppleのルールに違反、または適法な指示に従わない場合。'

                ),
                $('<p/>').html(
                    '3. あなたがAppleのBusiness Conduct Policyに一部でも違反した場合。'
                ),
                $('<p/>').html(
                    '4. あなたの不正行為または不適切な行動により、Appleまたは関連会社が公衆または個人より、不名誉・不体裁の誹りを受けるおそれがあるとAppleが判断した場合、その他Appleまたはその関連会社の信用を害した場合。'
                ),         
                $('<p/>').html(
                    '本採用通知は、抵触法に関する原則を除き、日本法に準拠するものとします。AHA契約は、本採用通知の別紙とし、その一部を構成するものとします。あなたとAppleとの間の雇用が終了すると、AHA契約も直ちに終了します。本採用通知に署名することで、あなたは本通知に記載する内容のみがあなたの雇用条件であることに同意し、本内容以外の一切の誓約、表明などに依るものではないことを確認するものとします。本採用通知を受諾した場合、本通知はあなたとAppleとの雇用契約を構成するものとします。'                           
                )
            ),

         //2019-08-20 | SERVICES-38718 | CDY | V6 | New paragraph with Probation == No
         // Work Location != iTunes AND Offer Type == AHA AND Probation == No
            (employee.Work_Location != 'iTunes' && employee.Probation == 'No' && employee.Offer_Type == 'AHA') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Termination'
                ),
                $('<p/>').html(
                    'Resignation, dismissal and termination of your employment shall be done according to Rules of Employment documents.'
                ),
                $('<p/>').html(
                    '1. If either you or Apple wishes to terminate your employment, either party must give thirty (30) days notice in writing. Apple reserves the right to make an equivalent payment in lieu of notice in full or in part.'
                ),
                $('<p/>').html(
                    '2. Your employment may be terminated without notice because of a natural disaster or other unavoidable cause, or when reasons for termination are attributable to you.'
                ),
                $('<p/>').html(
                    '3. Your employment can be terminated immediately without notice, if you are subject to punitive dismissal in the circumstances provided in the Rules of Employment, or if you fail to maintain the work environment and equipment according to AHA Agreement.'
                ),
                $('<p/>').html(
                    'In addition to the circumstances where you may receive punitive dismissal prescribed in the Rules of Employment, Apple reserves the right to immediately terminate your employment without notice in any of the following events depending on seriousness of the misconduct:'
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
                    'This employment offer shall be governed and construed in accordance with the laws of Japan, without regard to conflict of law principles. AHA Agreement shall be taken as an appendix of this employment offer, and constitute a part of it. Once your employment with Apple is terminated, the AHA Agreement will cease immediately. By signing this offer you agree that these are the only terms and conditions of your employment and acknowledge that you have not relied upon any other promises or representations, except those made in this offer. Upon you accept this employment offer, it will constitute an employment agreement between you and Apple.'
                ),              
                $('<p/>').html(
                    '退職'
                ),
                $('<p/>').html(
                    '辞職、解雇およびその他雇用の終了は、就業規則に従って行われます。'
                ),
                $('<p/>').html(
                    '1. あなたまたはAppleが雇用を終了させる意思を有する場合、いずれの当事者も30日前に書面により相手に通知する必要があります。Appleは当該通知に􏰹代えて、その􏰹􏰹全部または一部の期間と同等の予告手当を通知に代え支払う権利を留保します。'
                ),
                $('<p/>').html(
                    '2. 自然災害またはその他やむを得ない事由、もしくはあなたの責めに帰るべき事由により雇用を終了させる場合には、即時解雇となることがあります。'
                ),
                $('<p/>').html(
                    '3. あなたが懲戒解雇等、就業規則の定めにより定める事由に該当する場合又はAHA契約に定める就労環境及び設備を維持しない場合には、予告なく即時に解雇されることがあります。'
                ),
                $('<p/>').html(
                    '就業規則に規定された懲戒解雇の対象となる場合に加え、Appleは次のいずれかの場合、その不正行為の重大さに照らし、あなたを予告なく即時に解雇する権利を留保します。'
                ),
                $('<p/>').html(
                    '1. あなたが本雇用契約に違反した場合。'
                ),
                $('<p/>').html(
                    '2. あなたがAppleのルールに違反、または適法な指示に従わない場合。'

                ),
                $('<p/>').html(
                    '3. あなたがAppleのBusiness Conduct Policyに一部でも違反した場合。'
                ),
                $('<p/>').html(
                    '4. あなたの不正行為または不適切な行動により、Appleまたは関連会社が公衆または個人より、不名誉・不体裁の誹りを受けるおそれがあるとAppleが判断した場合、その他Appleまたはその関連会社の信用を害した場合。'
                ),         
                $('<p/>').html(
                    '本採用通知は、抵触法に関する原則を除き、日本法に準拠するものとします。AHA契約は、本採用通知の別紙とし、その一部を構成するものとします。あなたとAppleとの間の雇用が終了すると、AHA契約も直ちに終了します。本採用通知に署名することで、あなたは本通知に記載する内容のみがあなたの雇用条件であることに同意し、本内容以外の一切の誓約、表明などに依るものではないことを確認するものとします。本採用通知を受諾した場合、本通知はあなたとAppleとの雇用契約を構成するものとします。'                           
                )
            ),
         //2019-08-20 | SERVICES-38718 | CDY | V6 | Added Probation == Yes
            // Work Location != iTunes AND Offer Type == ASC
            (employee.Work_Location != 'iTunes' && employee.Probation == 'Yes' && employee.Offer_Type == 'ASC') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Termination'
                ),
                $('<p/>').html(
                    'Resignation, dismissal and termination of your employment shall be done according to Rules of Employment documents.'
                ),
                $('<p/>').html(
                    '1.&nbsp;During your probationary period, if either you or Apple wishes to terminate your employment within fourteen (14) days from the start date, no prior notice is required by either party.'
                ),
                $('<p/>').html(
                    '2.&nbsp;After the first fourteen (14) days of your probationary period, if either you or Apple wishes to terminate your employment, either party must give thirty (30) days notice in writing. Apple reserves the right to make an equivalent payment in lieu of notice in full or in part.'
                ),
                $('<p/>').html(
                    '3.&nbsp;Your employment may be terminated without notice because of a natural disaster or other unavoidable cause, or when reasons for termination are attributable to you.'
                ),
                $('<p/>').html(
                    '4.&nbsp;Your employment can be terminated immediately without prior notice, if you are subject to punitive dismissal in the circumstances provided in the Rules of Employment, or if you fail to comply with any workplace rules of the Consumer Electronics Store (CES) where you are based.'
                ),
                $('<p/>').html(
                    '退職'
                ),
                $('<p/>').html(
                    '辞職、解雇およびその他雇用の終了は、就業規則に従って行われます。'
                ),
                $('<p/>').html(
                    '1. 試用期間開始から14日以内に、あなたまたはAppleが雇用を終了させる意思を有する場合、いずれの当事者も事前の通知を要しません。'
                ),
                $('<p/>').html(
                    '2. 試用期間開始から14日経過した後に、あなたまたはAppleが雇用を終了させる意思を有する場合、いずれの当事者も30日前に書面により相手に通知する必要があります。Appleは当該通知に代えて、その全部または一部の期間と同等の予告手当を通知に代え支払う権利を留保します。'
                ),
                $('<p/>').html(
                    '3. 自然災害またはその他やむを得ない事由、もしくはあなたの責めに帰るべき事由により雇用を終了させる場合には、即時解雇となることがあります。'
                ),
                $('<p/>').html(
                    '4. あなたが就業規則に定められた懲戒解雇などの対象となる場合またはあなたが配置されたConsumer Electronics Store (CES)の職場の諸規定に違反した場合には、予告なく即時に解雇されることがあります。'
                )
            ),

             //2019-08-20 | SERVICES-38718 | CDY | V6 | New paragraph with Probation == No  
        // Work Location != iTunes AND Offer Type == ASC AND Probation == No
            (employee.Work_Location != 'iTunes' && employee.Probation == 'No' && employee.Offer_Type == 'ASC') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Termination'
                ),
                $('<p/>').html(
                    'Resignation, dismissal and termination of your employment shall be done according to Rules of Employment documents.'
                ),
                $('<p/>').html(
                    '1.&nbsp;If either you or Apple wishes to terminate your employment, either party must give thirty (30) days notice in writing. Apple reserves the right to make an equivalent payment in lieu of notice in full or in part.'
                ),
                $('<p/>').html(
                    '2.&nbsp;Your employment may be terminated without notice because of a natural disaster or other unavoidable cause, or when reasons for termination are attributable to you.'
                ),
                $('<p/>').html(
                    '3.&nbsp;Your employment can be terminated immediately without prior notice, if you are subject to punitive dismissal in the circumstances provided in the Rules of Employment, or if you fail to comply with any workplace rules of the Consumer Electronics Store (CES) where you are based.'
                ),
                $('<p/>').html(
                    '退職'
                ),
                $('<p/>').html(
                    '辞職、解雇およびその他雇用の終了は、就業規則に従って行われます。'
                ),
                $('<p/>').html(
                    '1. あなたまたはAppleが雇用を終了させる意思を有する場合、いずれの当事者も30日前に書面により相手に通知する必要があります。Appleは当該通知に􏰹代えて、その􏰹􏰹全部または一部の期間と同等の予告手当を通知に代え支払う権利を留保します。'
                ),
                $('<p/>').html(
                    '2. 自然災害またはその他やむを得ない事由、もしくはあなたの責めに帰るべき事由により雇用を終了させる場合には、即時解雇となることがあります。'
                ),
                $('<p/>').html(
                    '3. あなたが就業規則に定められた懲戒解雇などの対象となる場合またはあなたが配置されたConsumer Electronics Store (CES)の職場の諸規定に違反した場合には、予告なく即時に解雇されることがあります。'
                )
            ),
            
            
            // Work Location != iTunes AND Offer Type == DC ASC
            (employee.Work_Location != 'iTunes' && employee.Offer_Type == 'DC ASC') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Termination'
                ),
                $('<p/>').html(
                    'In addition to termination by expiry of your fixed term contract, resignation, dismissal and termination of your employment shall be done according to Rules of Employment documents.'
                ),
                $('<p/>').html(
                    '1. If either you or Apple wishes to terminate your employment, either party must give thirty (30) days notice in writing. Apple reserves the right to make an equivalent payment in lieu of notice in full or in part.'
                ),
                $('<p/>').html(
                    '2. Your employment may be terminated without notice because of a natural disaster or other unavoidable cause, or when reasons for termination are attributable to you.'
                ),
                $('<p/>').html(
                    '3. Your employment can be terminated immediately without prior notice, if you are subject to punitive dismissal in the circumstances provided in the Rules of Employment, or if you fail to comply with any workplace rules of the Consumer Electronics Store (CES) where you are based.'
                ),
                $('<p/>').html(
                    '退職'
                ),
                $('<p/>').html(
                    '雇用期間満了による雇用の終了に加え、辞職、解雇およびその他雇用の終了は、就業規則に従って行われます。'
                ),
                $('<p/>').html(
                    '1. あなたまたはAppleが雇用を終了させる意思を有する場合、いずれの当事者も30日前に書面により相手に通知する必要があります。Appleは当該通知に代えて、その全部または一部の期間と同等の予告手当を通知に代え支払う権利を留保します。'
                ),
                $('<p/>').html(
                    '2. 自然災害またはその他やむを得ない事由、もしくはあなたの責めに帰るべき事由により雇用を終了させる場合には、即時解雇となることがあります。'
                ),
                $('<p/>').html(
                    '3. あなたが就業規則に定められた懲戒解雇などの対象となる場合またはあなたが配置されたConsumer Electronics Store(CES)の職場の諸規定に違反した場合には、予告なく即時に解雇されることがあります。'
                )
   ),
            // Work Location != iTunes AND Offer Type == Fixed Term General
            (employee.Work_Location != 'iTunes' && employee.Offer_Type == 'Fixed Term General') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Termination'
                ),
                $('<p/>').html(
                    'In addition to termination by expiry of your fixed term contract, resignation, dismissal and termination of your employment shall be done according to Rules of Employment documents.'
                ),
                $('<p/>').html(
                    '1. If either you or Apple wishes to terminate your employment, either party must give thirty (30) days notice in writing. Apple reserves the right to make an equivalent payment in lieu of notice in full or in part.'
                ),
                $('<p/>').html(
                    '2. Your employment may be terminated without notice because of a natural disaster or other unavoidable cause, or when reasons for termination are attributable to you.'
                ),
                $('<p/>').html(
                    '3. Your employment can be terminated immediately without notice, if you are subject to punitive dismissal in the circumstances provided in the Rules of Employment.'
                ),
                $('<p/>').html(
                    '退職'
                ),
                $('<p/>').html(
                    '雇用期間満了による雇用の終了に加え、辞職、解雇およびその他雇用の終了は、就業規則に従って行われます。'
                ),
                $('<p/>').html(
                    '1. あなたまたはAppleが雇用を終了させる意思を有する場合、いずれの当事者も30日前に書面により相手に通知する必要があります。Appleは当該通知に代えて、その全部または一部の期間と同等の予告手当を通知に代え支払う権利を留保します。'
                ),
                $('<p/>').html(
                    '2. 自然災害またはその他やむを得ない事由、もしくはあなたの責めに帰るべき事由により雇用を終了させる場合には、即時解雇となることがあります。'
                ),
                $('<p/>').html(
                    '3. あなたが就業規則に定められた懲戒解雇などの対象となる場合には、即時に解雇されることがあります。'
                )
            ),
            // Work Location != iTunes AND Offer Type == DC AHA
            (employee.Work_Location != 'iTunes' && employee.Offer_Type == 'DC AHA') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Termination'
                ),
                $('<p/>').html(
                    'In addition to termination by expiry of your fixed term contract, resignation, dismissal and termination of your employment shall be done according to Rules of Employment documents.'
                ),
                $('<p/>').html(
                    '1. If either you or Apple wishes to terminate your employment, either party must give thirty (30) days notice in writing. Apple reserves the right to make an equivalent payment in lieu of notice in full or in part.'
                ),
                $('<p/>').html(
                    '2. Your employment may be terminated without notice because of a natural disaster or other unavoidable cause, or when reasons for termination are attributable to you.'
                ),
                $('<p/>').html(
                    '3. Your employment can be terminated immediately without notice, if you are subject to punitive dismissal in the circumstances provided in the Rules of Employment, or if you fail to maintain the work environment and equipment according to AHA Agreement.'
                ),
                $('<p/>').html(
                    'In addition to the circumstances where you may receive punitive dismissal prescribed in the Rules of Employment, Apple reserves the right to immediately terminate your employment without notice in any of the following events depending on seriousness of the misconduct:'
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
                    'This employment offer shall be governed and construed in accordance with the laws of Japan, without regard to conflict of law principles. AHA Agreement shall be taken as an appendix of this employment offer, and constitute a part of it. Once your employment with Apple is terminated, the AHA Agreement will cease immediately. By signing this offer you agree that these are the only terms and conditions of your employment and acknowledge that you have not relied upon any other promises or representations, except those made in this offer. Upon you accept this employment offer, it will constitute an employment agreement between you and Apple.'
                ),
                $('<p/>').html(
                    '退職'
                ),
                $('<p/>').html(
                    '雇用期間満了による雇用の終了に加え、辞職、解雇およびその他雇用の終了は、就業規則に従って行われます。'
                ),
                $('<p/>').html(
                    '1. あなたまたはAppleが雇用を終了させる意思を有する場合、いずれの当事者も30日前に書面により相手に通知する必要があります。Appleは当該通知に代えて、その全部または一部の期間と同等の予告手当を通知に代え支払う権利を留保します。'
                ),
                $('<p/>').html(
                    '2. 自然災害またはその他やむを得ない事由、もしくはあなたの責めに帰るべき事由により雇用を終了させる場合には、即時解雇となることがあります。'
                ),
                $('<p/>').html(
                    '3. あなたが懲戒解雇等、就業規則の定めにより定める事由に該当する場合又はAHA契約に定める就労環境及び設備を維持しない場合には、予告なく即時に解雇されることがあります。'
                ),
                $('<p/>').html(
                    '就業規則に規定された懲戒解雇の対象となる場合に加え、Appleは次のいずれかの場合、その不正行為の重大さに照らし、あなたを予告なく即時に解雇する権利を留保します。'
                ),
                $('<p/>').html(
                    '1. あなたが本雇用契約に違反した場合。'
                ),
                $('<p/>').html(
                    '2. あなたがAppleのルールに違反、または適法な指示に従わない場合。'

                ),
                $('<p/>').html(
                    '3. あなたがAppleのBusiness Conduct Policyに一部でも違反した場合。'
                ),
                $('<p/>').html(
                    '4. あなたの不正行為または不適切な行動により、Appleまたは関連会社が公衆または個人より、不名誉・不体裁の誹りを受けるおそれがあるとAppleが判断した場合、その他Appleまたはその関連会社の信用を害した場合。'
                ),         
                $('<p/>').html(
                    '本採用通知は、抵触法に関する原則を除き、日本法に準拠するものとします。AHA契約は、本採用通知の別紙とし、その一部を構成するものとします。あなたとAppleとの間の雇用が終了すると、AHA契約も直ちに終了します。本採用通知に署名することで、あなたは本通知に記載する内容のみがあなたの雇用条件であることに同意し、本内容以外の一切の誓約、表明などに依るものではないことを確認するものとします。本採用通知を受諾した場合、本通知はあなたとAppleとの雇用契約を構成するものとします。'                           
                )
            ),
            // Work Location != iTunes AND Offer Type != AHA, DC ASC, DC AHA
            (employee.Work_Location != 'iTunes' && (employee.Offer_Type != 'AHA' && employee.Offer_Type != ' DC ASC' && employee.Offer_Type != 'DC AHA')) &&
            $('<div/>').append(
            
                $('<p/>').html(
                    'In addition to the circumstances where you may receive punitive dismissal prescribed in the Rules of Employment, Apple reserves the right to immediately terminate your employment without notice in any of the following events depending on seriousness of the misconduct:'
                ),
                $('<p/>').html(
                    '1. You commit any breach of this employment agreement.'
                ),
                $('<p/>').html(
                    '2. You violate any rule or disobey any lawful instruction given by Apple.'
                ),
                $('<p/>').html(
                    '3. You violate any section of Apple’s Business Conduct policy.'
                ),
                $('<p/>').html(
                    '4. You commit any acts of dishonesty, or any action of impropriety which in Apple’s opinion is likely to bring Apple or any related company into ridicule or disrespect of the public or any person, or otherwise damaging the reputation of Apple or any related company.'
                ),
                $('<p/>').html(
                    'This employment offer shall be governed and construed in accordance with the laws of Japan, without regard to conflict of law principles. By signing this offer you agree that these are the only terms and conditions of your employment and acknowledge that you have not relied upon any other promises or representations, except those made in this offer. Upon you accept this employment offer, it will constitute an employment agreement between you and Apple.'
                ),

                $('<p/>').html(
                    '就業規則に規定された懲戒解雇の対象となる場合に加え、Appleは次のいずれかの場合、その不正行為の重大さに照らし、あなたを予告なく即時に解雇する権利を留保します。'
                ),
                $('<p/>').html(
                    '1. あなたが本雇用契約に違反した場合。'
                ),
                $('<p/>').html(
                    '2. あなたがAppleのルールに違反、または適法な指示に従わない場合。'
                ),
                $('<p/>').html(
                    '3. あなたがAppleのBusiness Conduct Policyに一部でも違反した場合。'
                ),
                $('<p/>').html(
                    '4. あなたの不正行為または不適切な行動により、Appleまたは関連会社が公衆または個人より、不名誉・不体裁の誹りを受けるおそれがあるとAppleが判断した場合、その他Appleまたはその関連会社の信用を害した場合。'
                ),
                $('<p/>').html(
                    '本採用通知は、抵触法に関する原則を除き、日本法に準拠するものとします。本採用通知に署名することで、あなたは本通知に記載する内容のみがあなたの雇用条件であることに同意し、本内容以外の一切の誓約、表明などに依るものではないことを確認するものとします。本採用通知を受諾した場合、本通知はあなたとAppleとの雇用契約を構成するものとします。'
                )
            ),

            //2019-08-20 | SERVICES-38718 | CDY | V6 | Added Probation == Yes
            // Work Location == iTunes
            (employee.Work_Location == 'iTunes' && employee.Probation == 'Yes' && employee.Offer_Type != 'Fixed Term General') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Termination'
                ),
                $('<p/>').html(
                    'Resignation, dismissal and termination of your employment shall be done according to Rules of Employment documents.'
                ),
                $('<p/>').html(
                    '1. During your probationary period, if either you or Apple wishes to terminate your employment within fourteen (14) days from the start date, no prior notice is required by either party.'
                ),
                $('<p/>').html(
                    '2. After the first fourteen (14) days of your probationary period, if either you or Apple wishes to terminate your employment, either party must give thirty (30) days notice in writing. Apple reserves the right to make an equivalent payment in lieu of notice in full or in part.'
                ),
                $('<p/>').html(
                    '3. Your employment may be terminated without notice because of a natural disaster or other unavoidable cause, or when reasons for termination are attributable to you.'
                ),
                $('<p/>').html(
                    '4. Your employment can be terminated immediately without prior notice, if you are subject to punitive dismissal in the circumstances provided in the Rules of Employment.'
                ),
                $('<p/>').html(
                    'In addition to the circumstances where you may receive punitive dismissal prescribed in the Rules of Employment, Apple reserves the right to immediately terminate your employment without notice in any of the following events depending on seriousness of the misconduct:'
                ),
                $('<p/>').html(
                    '1. You commit any breach of this employment agreement.'
                ),
                $('<p/>').html(
                    '2. You violate any rule or disobey any lawful instruction given by Apple.'
                ),
                $('<p/>').html(
                    '3. You violate any section of Apple’s Business Conduct policy.'
                ),
                $('<p/>').html(
                    '4. You commit any acts of dishonesty, or any action of impropriety which in Apple’s opinion is likely to bring Apple or any related company into ridicule or disrespect of the public or any person, or otherwise damaging the reputation of Apple or any related company. '
                ),
                               $('<p/>').html(
                    'This employment offer shall be governed and construed in accordance with the laws of Japan, without regard to conflict of law principles. By signing this offer you agree that these are the only terms and conditions of your employment and acknowledge that you have not relied upon any other promises or representations, except those made in this offer. Upon you accept this employment offer, it will constitute an employment agreement between you and Apple.'
                ),
                $('<p/>').html(
                    '退職'
                ),
                $('<p/>').html(
                    '辞職、解雇およびその他雇用の終了は、就業規則に従って行われます。'
                ),
                $('<p/>').html(
                    '1. 試用期間開始から14日以内に、あなたまたはAppleが雇用を終了させる意思を有する場合、いずれの当事者も事前の通知を要しません。'
                ),
                $('<p/>').html(
                    '2. 試用期間開始から14日経過した後に、あなたまたはAppleが雇用を終了させる意思を有する場合、いずれの当事者も30日前に書面により相手に通知する必要があります。Appleは当該通知に代えて、その全部または一部の期間と同等の予告手当を通知に代え支払う権利を留保します。'
                ),
                $('<p/>').html(
                    '3. 自然災害またはその他やむを得ない事由、もしくはあなたの責めに帰るべき事由により雇用を終了させる場合には、即時解雇となることがあります。'
                ),
                $('<p/>').html(
                    '4. あなたが就業規則に定められた懲戒解雇などの対象となる場合には、即時に解雇されることがあります。'
                ),
                $('<p/>').html(
                    '就業規則に規定された懲戒解雇の対象となる場合に加え、Appleは次のいずれかの場合、その不正行為の重大さに照らし、あなたを予告なく即時に解雇する権利を留保します。'
                ),
                $('<p/>').html(
                    '1. あなたが本雇用契約に違反した場合。'
                ),
                $('<p/>').html(
                    '2. あなたがAppleのルールに違反、または適法な指示に従わない場合。'
                ),
                $('<p/>').html(
                    '3. あなたがAppleのBusiness Conduct Policyに一部でも違反した場合。'
                ),
                $('<p/>').html(
                    '4. あなたの不正行為または不適切な行動により、Appleまたは関連会社が公衆または個人より、不名誉・不体裁の誹りを受けるおそれがあるとAppleが判断した場合、その他Appleまたはその関連会社の信用を害した場合。'
                ),
                $('<p/>').html(
                    '本採用通知は、抵触法に関する原則を除き、日本法に準拠するものとします。本採用通知に署名することで、あなたは本通知に記載する内容のみがあなたの雇用条件であることに同意し、本内容以外の一切の誓約、表明などに依るものではないことを確認するものとします。本採用通知を受諾した場合、本通知はあなたとAppleとの雇用契約を構成するものとします。<br><br>'
                )
            ),

        //2019-08-20 | SERVICES-38718 | CDY | V6 | New paragraph with Probation == No   
        // Work Location == iTunes AND Probation == No
            (employee.Work_Location == 'iTunes' && employee.Probation == 'No' && employee.Offer_Type != 'Fixed Term General') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Termination'
                ),
                $('<p/>').html(
                    'Resignation, dismissal and termination of your employment shall be done according to Rules of Employment documents.'
                ),
                $('<p/>').html(
                    '1. If either you or Apple wishes to terminate your employment, either party must give thirty (30) days notice in writing. Apple reserves the right to make an equivalent payment in lieu of notice in full or in part.'
                ),
                $('<p/>').html(
                    '2. Your employment may be terminated without notice because of a natural disaster or other unavoidable cause, or when reasons for termination are attributable to you.'
                ),
                $('<p/>').html(
                    '3. Your employment can be terminated immediately without prior notice, if you are subject to punitive dismissal in the circumstances provided in the Rules of Employment.'
                ),
                $('<p/>').html(
                    'In addition to the circumstances where you may receive punitive dismissal prescribed in the Rules of Employment, Apple reserves the right to immediately terminate your employment without notice in any of the following events depending on seriousness of the misconduct:'
                ),
                $('<p/>').html(
                    '1. You commit any breach of this employment agreement.'
                ),
                $('<p/>').html(
                    '2. You violate any rule or disobey any lawful instruction given by Apple.'
                ),
                $('<p/>').html(
                    '3. You violate any section of Apple’s Business Conduct policy.'
                ),
                $('<p/>').html(
                    '4. You commit any acts of dishonesty, or any action of impropriety which in Apple’s opinion is likely to bring Apple or any related company into ridicule or disrespect of the public or any person, or otherwise damaging the reputation of Apple or any related company. '
                ),
                               $('<p/>').html(
                    'This employment offer shall be governed and construed in accordance with the laws of Japan, without regard to conflict of law principles. By signing this offer you agree that these are the only terms and conditions of your employment and acknowledge that you have not relied upon any other promises or representations, except those made in this offer. Upon you accept this employment offer, it will constitute an employment agreement between you and Apple.'
                ),
                $('<p/>').html(
                    '退職'
                ),
                $('<p/>').html(
                    '辞職、解雇およびその他雇用の終了は、就業規則に従って行われます。'
                ),
                $('<p/>').html(
                    '1. あなたまたはAppleが雇用を終了させる意思を有する場合、いずれの当事者も30日前に書面により相手に通知する必要があります。Appleは当該通知に􏰹代えて、その􏰹􏰹全部または一部の期間と同等の予告手当を通知に代え支払う権利を留保します。'
                ),
                $('<p/>').html(
                    '2. 自然災害またはその他やむを得ない事由、もしくはあなたの責めに帰るべき事由により雇用を終了させる場合には、即時解雇となることがあります。'
                ),
                $('<p/>').html(
                    '3. あなたが就業規則に定められた懲戒解雇などの対象となる場合には、即時に解雇されることがあります。'
                ),
                $('<p/>').html(
                    '就業規則に規定された懲戒解雇の対象となる場合に加え、Appleは次のいずれかの場合、その不正行為の重大さに照らし、あなたを予告なく即時に解雇する権利を留保します。'
                ),
                $('<p/>').html(
                    '1. あなたが本雇用契約に違反した場合。'
                ),
                $('<p/>').html(
                    '2. あなたがAppleのルールに違反、または適法な指示に従わない場合。'
                ),
                $('<p/>').html(
                    '3. あなたがAppleのBusiness Conduct Policyに一部でも違反した場合。'
                ),
                $('<p/>').html(
                    '4. あなたの不正行為または不適切な行動により、Appleまたは関連会社が公衆または個人より、不名誉・不体裁の誹りを受けるおそれがあるとAppleが判断した場合、その他Appleまたはその関連会社の信用を害した場合。'
                ),
                $('<p/>').html(
                    '本採用通知は、抵触法に関する原則を除き、日本法に準拠するものとします。本採用通知に署名することで、あなたは本通知に記載する内容のみがあなたの雇用条件であることに同意し、本内容以外の一切の誓約、表明などに依るものではないことを確認するものとします。本採用通知を受諾した場合、本通知はあなたとAppleとの雇用契約を構成するものとします。<br><br>'
                )
            ),
            
            // Work Location == iTunes AND Offer Type == Fixed Term General
            (employee.Work_Location == 'iTunes' && employee.Offer_Type == 'Fixed Term General') &&
            $('<div/>').append(
                $('<p/>').html(
                    'Termination'
                ),
                $('<p/>').html(
                    'In addition to termination by expiry of your fixed term contract, resignation, dismissal and termination of your employment shall be done according to Rules of Employment documents.'
                ),
                $('<p/>').html(
                    '1. If either you or Apple wishes to terminate your employment, either party must give thirty (30) days notice in writing. Apple reserves the right to make an equivalent payment in lieu of notice in full or in part.'
                ),
                $('<p/>').html(
                    '2. Your employment may be terminated without notice because of a natural disaster or other unavoidable cause, or when reasons for termination are attributable to you.'
                ),
                $('<p/>').html(
                    '3. Your employment can be terminated immediately without notice, if you are subject to punitive dismissal in the circumstances provided in the Rules of Employment.'
                ),
                                $('<p/>').html(
                    'In addition to the circumstances where you may receive punitive dismissal prescribed in the Rules of Employment, Apple reserves the right to immediately terminate your employment without notice in any of the following events depending on seriousness of the misconduct:'
                ),
                $('<p/>').html(
                    '1. You commit any breach of this employment agreement.'
                ),
                $('<p/>').html(
                    '2. You violate any rule or disobey any lawful instruction given by Apple.'
                ),
                $('<p/>').html(
                    '3. You violate any section of Apple’s Business Conduct policy.'
                ),
                $('<p/>').html(
                    '4. You commit any acts of dishonesty, or any action of impropriety which in Apple’s opinion is likely to bring Apple or any related company into ridicule or disrespect of the public or any person, or otherwise damaging the reputation of Apple or any related company. '
                ),
                                $('<p/>').html(
                    'This employment offer shall be governed and construed in accordance with the laws of Japan, without regard to conflict of law principles. By signing this offer you agree that these are the only terms and conditions of your employment and acknowledge that you have not relied upon any other promises or representations, except those made in this offer. Upon you accept this employment offer, it will constitute an employment agreement between you and Apple.'
                ),
                $('<p/>').html(
                    '退職'
                ),
                $('<p/>').html(
                    '雇用期間満了による雇用の終了に加え、辞職、解雇およびその他雇用の終了は、就業規則に従って行われます。'
                ),
                $('<p/>').html(
                    '1. あなたまたはAppleが雇用を終了させる意思を有する場合、いずれの当事者も30日前に書面により相手に通知する必要があります。Appleは当該通知に代えて、その全部または一部の期間と同等の予告手当を通知に代え支払う権利を留保します。'
                ),
                $('<p/>').html(
                    '2. 自然災害またはその他やむを得ない事由、もしくはあなたの責めに帰るべき事由により雇用を終了させる場合には、即時解雇となることがあります。'
                ),
                $('<p/>').html(
                    '3. あなたが就業規則に定められた懲戒解雇などの対象となる場合には、即時に解雇されることがあります。'
                ),
                                $('<p/>').html(
                    '就業規則に規定された懲戒解雇の対象となる場合に加え、Appleは次のいずれかの場合、その不正行為の重大さに照らし、あなたを予告なく即時に解雇する権利を留保します。'
                ),
                $('<p/>').html(
                    '1. あなたが本雇用契約に違反した場合。'
                ),
                $('<p/>').html(
                    '2. あなたがAppleのルールに違反、または適法な指示に従わない場合。'
                ),
                $('<p/>').html(
                    '3. あなたがAppleのBusiness Conduct Policyに一部でも違反した場合。'
                ),
                $('<p/>').html(
                    '4. あなたの不正行為または不適切な行動により、Appleまたは関連会社が公衆または個人より、不名誉・不体裁の誹りを受けるおそれがあるとAppleが判断した場合、その他Appleまたはその関連会社の信用を害した場合。'
                ),
                                $('<p/>').html(
                    '本採用通知は、抵触法に関する原則を除き、日本法に準拠するものとします。本採用通知に署名することで、あなたは本通知に記載する内容のみがあなたの雇用条件であることに同意し、本内容以外の一切の誓約、表明などに依るものではないことを確認するものとします。本採用通知を受諾した場合、本通知はあなたとAppleとの雇用契約を構成するものとします。<br><br>'
                )
            ),

            $('<div/>').append(
                $('<p/>').html(
                    'This employment offer is valid until ' + employee.English_Offer_Expiration + '. We must receive your written acceptance of this offer no later than 5:00 p.m. JST time that day.'
                ),
                                $('<p/>').html(
                                       '本採用通知は、' + employee.Japanese_Offer_Expiration + 'まで有効です。この通知に同意する場合は、日本時間の午後5時までに書面による意思通知をAppleに送信してください。'
                                ),
                $('<p/>').html(
                    employee.First_Name + ', please accept this offer by signing below. Be sure to retain copies for your personal records. If you have any questions regarding this offer or any of its enclosures, please contact ' + employee.Recruiter + ' at ' + employee.Recruiter_Email + '.'
                 ),
                $('<p/>').html(
                                       '本通知を受諾される場合には、以下に署名してください。ご自分の記録用に、必ず写しを保管してください。本通知および同封資料につきご質問がある場合には、' + employee.Recruiter_Email + 'までご連絡ください。'
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
                $('<p/>').append(
                    $('<span/>').html(
                        'Apple Worldwide Recruiting<br>'
                    ),
                    $('<span/>').html(
                        (employee.Work_Location == 'iTunes' ? 'On behalf of iTunes K.K. (Apple)' : 'On behalf of Apple Japan, Inc.')
                    )
                ),
                $('<p/>').html(
                    ''
                ),
                $('<p/>').append(
                    $('<span/>').html(
                        'I accept the offer:<br>'
                    ),
                    $('<span/>').html(
                        '本通知書の内容を受諾します。'
),
 $('<p/>').html(
                    ''

                    )
                )
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
            [1, 'hidden_pg'],
        ];

        showCompletedOfferLetter('incomplete', 'complete', arrParts);
    }
});
