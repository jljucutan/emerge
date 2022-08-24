// Claris_Offer_2 (v1)

// US Corp Offer Letter
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
// modified by kguerrero
// for SERVICES-40178
// Initiation of Offer Date is not working
// fnConvertDate(employee.Initiation_Of_Offer)
fnConvertDate(employee.DateNow)
)
),
$('<p/>').append(
$('<span/>').html(
employee.First_Name + ((employee.Preferred_Name.length) ? ' (' + employee.Preferred_Name + ') ' : ' ') + employee.Last_Name + '<br>'
),
$('<span/>').html(employee.Address1 + '<br>'),
$('<span/>').html((employee.Address2) ? employee.Address2 + '<br>' : ''),
$('<span/>').html(
// London 09875-893 - If No State
((employee.City) ? employee.City + (((employee.State) || (employee.Zip)) ? ', ' : ' ') : '') +
((employee.State) ? employee.State + ' ' : '') +
employee.Zip + '<br>'
),
$('<span/>').html(employee.Country)
)
)
),
$('<div class="offerClause"/>').append(

$('<p/>').html("Dear " + ((employee.Preferred_Name) ? employee.Preferred_Name : employee.First_Name) + ",")
),
// [Include if Standard]
(employee.Offer_Type == 'AHAH' || employee.Offer_Type == 'ChannelSales' || employee.Offer_Type == 'RCC' || employee.Offer_Type == 'IITR' || employee.Offer_Type == 'STNG') &&
$('<div class="offerClause"/>').append(
$('<p data-class="' + employee.Offer_Type + '" class="offer"/>').html(
'Claris International Inc. (Claris) is delighted to offer you the position of ' + ((employee.Employee_Type.indexOf('PT') > -1) ? 'Part Time ' + employee.Job_Title + ' at ' + employee.Weekly_Hours + ' hours per week' : employee.Job_Title) + '. In your new position you will report to ' + employee.Hiring_Manager + ' with the effective start date of ' + employee.Start_Date + '.'
)
),
// [Include if FixedTerm AND not AHA College]
((employee.Offer_Type == 'DEVSP' || employee.Offer_Type == 'FTG' || employee.Offer_Type == 'Virtual Intern' || employee.Offer_Type == 'USCAM')) &&
$('<div class="offerClause"/>').append(
$('<p data-class="' + employee.Offer_Type + '" class="offer"/>').html(
'Claris International Inc. (Claris) is delighted to offer you the position of ' + employee.Job_Title + '. In your new position you will report to ' + employee.Hiring_Manager + ' as part of our ' + employee.Team_Name + ' team, with the effective start date of ' + employee.Start_Date + '. Your employment with Claris is expected to continue until ' + employee.End_Date + ', although Claris and you may mutually agree in writing to extend this date.' + ((employee.Employee_Type.indexOf('PT') > -1) ? ' our offer is for a part-time position at ' + employee.Weekly_Hours + ' hours per week. Due to the unpredictable COVID-19 restrictions on travel and other work related activities, your employment with Apple will be virtual. Your remote work location will be ' + employee.Address1 + ', ' + employee.City + ', ' + employee.State + ', United States. Any change in your remote work location should be pre-approved in writing by your manager and must be within the United States.' : ' Due to the unpredictable COVID-19 restrictions on travel and other work related activities, your employment with Apple will be virtual. Your remote work location will be ' + employee.Address1 + ', ' + employee.City + ', ' + employee.State + ', United States. Any change in your remote work location should be pre-approved in writing by your manager and must be within the United States.')
)
),
// [Include if AHA College]
(employee.Offer_Type == 'AHA') &&

$('<div class="offerClause"/>').append(
$('<p data-class="' + employee.Offer_Type + '" class="offer"/>').html(
'Claris International Inc. (Claris) is delighted to offer you the position of ' + employee.Job_Title + '. In your new position, you will report to ' + employee.Hiring_Manager + ' as part of our ' + employee.Team_Name + ', with the effective start date of ' + employee.Start_Date + '. Your anticipated end date is approximately one year from your start date.' + ((employee.Employee_Type.indexOf('PT') > -1) ? ' Your offer is for a part-time position at ' + employee.Weekly_Hours + ' hours per week.' : '')
)
),
// Include if Part-Time
// (employee.Offer_Type != 'AHA') &&
// (employee.Employee_Type.indexOf('PT') > -1) &&
// $('<div class="offerClause"/>').append(
// $('<p class="offer"/>').html(
// 'Your offer is for a part-time position at ' + employee.Weekly_Hours + ' hours per week.'
// )
// ),
// If Offer Package Type is AHA High Volume AND FSLA is Part-Time,
((employee.Offer_Type == 'AHAH ') && (employee.Employee_Type.indexOf('PT') > -1)) &&
$('<div class="offerClause"/>').append(
$('<p data-class="' + employee.Offer_Type + '" class="offer"/>').html(
'Your offer is for a part-time position at 20 hours per week. You will be expected to work 40 hours per week during Advisor Academy and a minimum of 20 hours when working your part-time schedule. During peak business periods you will be required to increase your hours up to 40 hours per week, based on business needs. Claris reserves the right to change your work schedule at any time in its sole discretion.'
)
),
// If Offer Package Type is AHA College
(employee.Offer_Type == 'AHA') &&
$('<div class="offerClause"/>').append(
$('<p data-class="' + employee.Offer_Type + '" class="offer"/>').html(
'During school you must work a minimum of 20 hours per week which will consist of at least 8 hours on a weekend day and typically opening and closing shifts during the weekdays. During school breaks you will be asked to increase your hours depending on business needs. Claris will consider your academic schedule and current business requirements when assigning your work schedule. Claris reserves the right to change your work schedule at any time in its sole discretion.'
)

),
// Compensation
$('<div class="offerClause"/>').append(
$('<H1/>').html(
'Compensation'
)
),
$('<div class="offerClause InternLess"/>').append(
$('<p/>').html(
'Claris offers a highly competitive package of compensation and benefits. The details of your package are set forth below.'
)
),
// Salary
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').html(
'<h2>Salary</h2>'
)
),
// If Employee Type is Exempt, Then Populate this paragraph
$('<div class="offerClause"/>').append(
(employee.Employee_Type == 'FTEX' || employee.Employee_Type == 'PTEX') &&
$('<p/>').html(
'You will receive an annual salary of (US)$' + (fnFormatCurrency(employee.Salary)) + ' (less deductions required by law) payable every other week in accordance with Claris’s standard payroll procedures. Claris reserves the right to modify salaries and benefits from time to time as it deems necessary.'
)
),
// If Employee Type is Non-Exempt, Then Populate this paragraph
$('<div class="offerClause"/>').append(
(employee.Employee_Type == 'FTNEX' || employee.Employee_Type == 'PTNEX') &&
$('<p/>').html(
'You will receive an hourly rate of (US)$' + (fnFormatCurrency(employee.Salary)) + ', and, when applicable, an overtime rate of (US)$' + fnTime_And_Half(employee.Salary, 0.5) + '' + (((employee.Offer_Type == 'Virtual Intern') && (employee.Employee_Type.indexOf("FT") > -1))

? ' with the expectation that you will work approximately 40 hours per week. ' : '.') + ' All payments made will be less deductions required by law and payable every other week in accordance with Claris' + '&#39;s standard payroll procedures. Claris reserves the right to modify salaries and benefits from time to time as it deems necessary.'
)
),
// [Include if Hire-On Bonus]
(employee.Bonus_Package == 'Hire-On Bonus') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Hire-On Bonus'
)
),
$('<p/>').html(
'You will be eligible to receive a hire-on bonus of (US)$' + fnFormatCurrency(employee.Bonus) + ' (less deductions required by law), subject to the following terms and conditions. In order to earn the bonus you must be actively employed by ' + 'Claris' + ' for 12 months following your start date. ' + 'Claris' + ' will advance you payment of the bonus in the next regular payroll cycle following your first 30 days of active employment. However, should you voluntarily terminate your employment with ' + 'Claris' + ' within 12 months of your start date, and thus fail to meet the conditions to earn your bonus, you will be responsible for reimbursing all or part of the advance bonus payment at ' + 'Claris' + '&#39;s sole discretion. By your signature below, you authorize ' + 'Claris' + ' to deduct any unearned bonus advance from your final paycheck.'
)
),
// [Include if Custom Bonus]
(employee.Custom_Bonus != '') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'' + employee.Custom_Bonus_Header + ''
)
),
$('<p class="reserveWhiteSpace"/>').html(
employee.Custom_Bonus
)
),
(employee.Custom_Bonus3 != '') &&

$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'' + employee.Custom_Bonus_Header4 + ''
)
),
$('<p class="reserveWhiteSpace"/>').html(
employee.Custom_Bonus3
)
),
// FOR USE WITH [2 Year Bonus]
(employee.Bonus_Package == '2 Year') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Hire-On Bonus'
)
),
$('<p/>').html(
'You will be eligible to earn a (US)$' + fnFormatCurrency(employee.Bonus) + ' incentive bonus subject to mandatory deductions and the following eligibility rules. This bonus shall be payable 30 days after active employment. This bonus is designed as a retention tool. Accordingly, in order to earn the bonus you must remain actively employed in your current position at ' + 'Claris' + ' for 24 months. Should you voluntarily terminate your employment with ' + 'Claris' + ' within 12 months, you will be responsible for reimbursing ' + 'Claris' + ' 100% of the bonus. Should you voluntarily terminate your employment after 12 months of employment but before your second anniversary, you shall be responsible for reimbursing ' + 'Claris' + ' 50% of the bonus. By your signature below, you authorize ' + 'Claris' + ' to deduct any outstanding bonus repayment balance from your final paycheck, and to reimburse ' + 'Claris' + ' for any remaining balance.'
)
),
// FOR USE WITH [Director/Sr. Director (noncommissioned)Bonus]
(employee.Bonus_Package == 'Director/Sr Director (noncommissioned)') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'VP & Director Quarterly Bonus Plan'
)
),
$('<p/>').html(

'You&#39;re eligible for participation in the ' + employee.Fiscal_Year + ' VP & Director Quarterly Bonus Plan (&#39;Plan&#39;). The Plan provides for varying levels of payout based on net sales achievement and operating income achievement. If specific quarterly performance targets are achieved, your bonus may range up to a maximum of 50% of your quarterly base salary. Eligibility and participation is subject to the written terms and conditions contained in the Plan. Please review the Plan document, which will be sent to you separately, for more specific details including eligibility criteria.'
)
),
// [Include if Director/Sr. Director w/Sign On
(employee.Bonus_Package == 'Director/Sr. Director w/Sign-On') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Hire-On Bonus'
)
),
$('<p/>').html(
'You will be eligible to receive a hire-on bonus of (US)$' + fnFormatCurrency(employee.Bonus) + ' (less deductions required by law), subject to the following terms and conditions. In order to earn the bonus you must be actively employed by ' + 'Claris' + ' for 12 months following your start date. ' + 'Claris' + ' will advance you payment of the bonus in the next regular payroll cycle following your first 30 days of active employment. However, should you voluntarily terminate your employment with ' + 'Claris' + ' within 12 months of your start date, and thus fail to meet the conditions to earn your bonus, you will be responsible for reimbursing all or part of the advance bonus payment at ' + 'Claris' + '&#39;s sole discretion. By your signature below, you authorize ' + 'Claris' + ' to deduct any unearned bonus advance from your final paycheck.'
),
$('<p class="section-title"/>').append(
$('<H2/>').html(
"VP & Director Quarterly Bonus Plan"
)
),
$('<p/>').html(
"You\’re eligible for participation in the " + employee.Fiscal_Year + " VP & Director Quarterly Bonus Plan (’Plan’). The Plan provides for varying levels of payout based on net sales achievement and operating income achievement. If specific quarterly performance targets are achieved, your bonus may range up to a maximum of 50% of your quarterly base salary. Eligibility and participation is subject to the written terms and conditions contained in the Plan. Please review the Plan document, which will be sent to you separately, for more specific details including eligibility criteria."
)

),
// VP & Director Quarterly Bonus Plan
(employee.Annual_Bonus == 'VP Director Quarterly Bonus') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'VP & Director Quarterly Bonus Plan'
)
),
$('<p/>').html(
"You\'re eligible for participation in the " + employee.Fiscal_Year + " VP & Director Quarterly Bonus Plan (&#39;Plan&#39;). The Plan provides for varying levels of payout based on net sales achievement and operating income achievement. If specific quarterly performance targets are achieved, your bonus may range up to a maximum of 50% of your quarterly base salary. Eligibility and participation is subject to the written terms and conditions contained in the Plan. Please review the Plan document, which will be sent to you separately, for more specific details including eligibility criteria."
)
),
// [Include if Vice President (noncommissioned)] Fiscal_Year
(employee.Bonus_Package == 'Vice President (noncommissioned)') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'VP & Director Quarterly Bonus Plan'
)
),
$('<p/>').html(
'You\’re eligible for participation in the ' + employee.Fiscal_Year + ' VP & Director Quarterly Bonus Plan (\’Plan\’). The Plan provides for varying levels of payout based on net sales achievement and operating income achievement. If specific quar-terly performance targets are achieved, your bonus may range up to a maximum of 50% of your quarterly base salary. Eligibility and participation is subject to the written terms and conditions contained in the Plan. Please re-view the Plan document, which will be sent to you separately, for more specific details including eligibility criteria.'
),
$('<p/>').html(
'As a Vice President you\’re also eligible to receive an additional bonus up to 20% of your annual base salary in a year-end cash bonus based on total fiscal year results. This bonus will be calculated on full year performance for both net sales and operating income achievement. Please review the plan document, which will be sent to you separately, for more specific detail including eligibility criteria.'

)
),
// [Include if Vice President w/Sign On]
(employee.Bonus_Package == 'Vice President w/Sign On') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Hire-On Bonus'
)
),
$('<p/>').html(
'You will be eligible to receive a hire-on bonus of (US)$' + fnFormatCurrency(employee.Bonus) + ' (less deductions required by law), subject to the following terms and conditions. In order to earn the bonus you must be actively employed by ' + 'Claris' + ' for 12 months following your start date. ' + 'Claris' + ' will advance you payment of the bonus in the next regular payroll cycle following your first 30 days of active employment. However, should you voluntarily terminate your employment with ' + 'Claris' + ' within 12 months of your start date, and thus fail to meet the conditions to earn your bonus, you will be responsible for reimbursing all or part of the advance bonus payment at ' + 'Claris' + '&#39;s sole discretion. By your signature below, you authorize ' + 'Claris' + ' to deduct any unearned bonus advance from your final paycheck.'
),
$('<p class="section-title"/>').append(
$('<H2/>').html(
'VP & Director Quarterly Bonus Plan'
)
),
$('<p/>').html(
'You\’re eligible for participation in the ' + employee.Fiscal_Year + ' VP & Director Quarterly Bonus Plan (\’Plan\’). The Plan provides for varying levels of payout based on net sales achievement and operating income achievement. If specific quar-terly performance targets are achieved, your bonus may range up to a maximum of 50% of your quarterly base salary. Eligibility and participation is subject to the written terms and conditions contained in the Plan. Please re-view the Plan document, which will be sent to you separately, for more specific details including eligibility criteria.'
),
$('<p/>').html(
'As a Vice President you\’re also eligible to receive an additional bonus up to 20% of your annual base salary in a year-end cash bonus based on total fiscal year results. This bonus will be calculated on full year performance for both net sales and operating income achievement. Please review the plan document, which will be sent to you separately, for more specific detail including eligibility criteria.'
)
),
// [Include if Marketing MGR1 (5%)] Fiscal_Year
(employee.Bonus_Package == 'Marketing MGR1 (5%)') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Marketing Manager Bonus Plan'
)
),
$('<p/>').html(
'You&#39;re eligible for participation in the ' + employee.Fiscal_Year + ' Marketing Manager Bonus Plan (&#39;Plan&#39;). The Plan provides for varying levels of payout based on net sales achievement and operating income achievement. If specific quarterly performance targets are achieved, your bonus may range up to 5% of your quarterly base salary. Eligibility and participation is subject to the written terms and conditions contained in the Plan. Please review the Plan document, which will be sent to you separately, for more specific details including eligibility criteria.'
)
),
// [Include if Marketing MGR1 (5%) w/Sign On]
(employee.Bonus_Package == 'Marketing MGR1 (5%) w/Sign On') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Hire-On Bonus'
)
),
$('<p/>').html(
'You will be eligible to receive a hire-on bonus of (US)$' + fnFormatCurrency(employee.Bonus) + ' (less deductions required by law), subject to the following terms and conditions. In order to earn the bonus you must be actively employed by ' + 'Claris' + ' for 12 months following your start date. ' + 'Claris' + ' will advance you payment of the bonus in the next regular payroll cycle following your first 30 days of active employment. However, should you voluntarily terminate your employment with ' + 'Claris' + ' within 12 months of your start date, and thus fail to meet the conditions to earn your bonus, you will be responsible for reimbursing all or part of the advance bonus payment at ' + 'Claris' + '&#39;s sole discretion. By your signature below, you authorize ' + 'Claris' + ' to deduct any unearned bonus advance from your final paycheck.'
),

$('<p class="section-title"/>').append(
$('<H2/>').html(
'Marketing Manager Bonus Plan'
)
),
$('<p/>').html(
'You&#39;re eligible for participation in the ' + employee.Fiscal_Year + ' Marketing Manager Bonus Plan (&#39;Plan&#39;). The Plan provides for varying levels of payout based on net sales achievement and operating income achievement. If specific quarterly performance targets are achieved, your bonus may range up to 5% of your quarterly base salary. Eligibility and participation is subject to the written terms and conditions contained in the Plan. Please review the Plan document, which will be sent to you separately, for more specific details including eligibility criteria.'
)
),
// [Include if Marketing MGR2 (10%)
(employee.Bonus_Package == 'Marketing MGR2 (10%)') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Marketing Manager Bonus Plan'
)
),
$('<p/>').html(
'You&#39;re eligible for participation in the ' + employee.Fiscal_Year + ' Marketing Manager Bonus Plan (&#39;Plan&#39;). The Plan provides for varying levels of payout based on net sales achievement and operating income achievement. If specific quarterly performance targets are achieved, your bonus may range up to 10% of your quarterly base salary. Eligibility and participation is subject to the written terms and conditions contained in the Plan. Please review the Plan document, which will be sent to you separately, for more specific details including eligibility criteria.'
)
),
// [Include if Marketing MGR2 (10%) w/Sign On]
(employee.Bonus_Package == 'Marketing MGR2 (10%) w/Sign On') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Hire-On Bonus'
)
),

$('<p/>').html(
'You will be eligible to receive a hire-on bonus of (US)$' + fnFormatCurrency(employee.Bonus) + ' (less deductions required by law), subject to the following terms and conditions. In order to earn the bonus you must be actively employed by ' + 'Claris' + ' for 12 months following your start date. ' + 'Claris' + ' will advance you payment of the bonus in the next regular payroll cycle following your first 30 days of active employment. However, should you voluntarily terminate your employment with ' + 'Claris' + ' within 12 months of your start date, and thus fail to meet the conditions to earn your bonus, you will be responsible for reimbursing all or part of the advance bonus payment at ' + 'Claris' + '&#39;s sole discretion. By your signature below, you authorize ' + 'Claris' + ' to deduct any unearned bonus advance from your final paycheck.'
),
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Marketing Manager Bonus Plan'
)
),
$('<p/>').html(
'You&#39;re eligible for participation in the ' + employee.Fiscal_Year + ' Marketing Manager Bonus Plan (&#39;Plan&#39;). The Plan provides for varying levels of payout based on net sales achievement and operating income achievement. If specific quarterly performance targets are achieved, your bonus may range up to 10% of your quarterly base salary. Eligibility and participation is subject to the written terms and conditions contained in the Plan. Please review the Plan document, which will be sent to you separately, for more specific details including eligibility criteria.'
)
),
// [Include if Marketing MGR3 (15%)] Fiscal_Year
(employee.Bonus_Package == 'Marketing MGR3 (15%)') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Marketing Manager Bonus Plan'
)
),
$('<p/>').html(
'You&#39;re eligible for participation in the ' + employee.Fiscal_Year + ' Marketing Manager Bonus Plan (&#39;Plan&#39;). The Plan provides for varying levels of payout based on net sales achievement and operating income achievement. If specific quarterly performance targets are achieved, your bonus may range up to 15% of your quarterly base salary. Eligibility and participation is subject to the written terms and conditions contained in the Plan. Please review the Plan document, which will be sent to you separately, for more specific details including eligibility criteria.'

)
),
// [Include if Marketing MGR3 (15%) w/Sign On]
(employee.Bonus_Package == 'Marketing MGR3 (15%) w/Sign On') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Hire-On Bonus'
)
),
$('<p/>').html(
'You will be eligible to receive a hire-on bonus of (US)$' + fnFormatCurrency(employee.Bonus) + ' (less deductions required by law), subject to the following terms and conditions. In order to earn the bonus you must be actively employed by ' + 'Claris' + ' for 12 months following your start date. ' + 'Claris' + ' will advance you payment of the bonus in the next regular payroll cycle following your first 30 days of active employment. However, should you voluntarily terminate your employment with ' + 'Claris' + ' within 12 months of your start date, and thus fail to meet the conditions to earn your bonus, you will be responsible for reimbursing all or part of the advance bonus payment at ' + 'Claris' + '&#39;s sole discretion. By your signature below, you authorize ' + 'Claris' + ' to deduct any unearned bonus advance from your final paycheck.'
),
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Marketing Manager Bonus Plan'
)
),
$('<p/>').html(
'You&#39;re eligible for participation in the ' + employee.Fiscal_Year + ' Marketing Manager Bonus Plan (&#39;Plan&#39;). The Plan provides for varying levels of payout based on net sales achievement and operating income achievement. If specific quarterly performance targets are achieved, your bonus may range up to 15% of your quarterly base salary. Eligibility and participation is subject to the written terms and conditions contained in the Plan. Please review the Plan document, which will be sent to you separately, for more specific details including eligibility criteria.'
)
),
// [Include if iAd Sales MGR]
(employee.Bonus_Package == 'iAd Sales MGR') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(

'iAd Sales Incentive Plan'
)
),
$('<p/>').html(
"In your capacity as a Sales Manager, you will be eligible to participate in Claris’s iAd Sales Incentive Compensation Plans subject to the rules of the governing plan. The details of your eligibility will be communicated to you by your manager by way of an Individual Target Summary."
)
),
// [Include if AOS MGR1 (10%)] Fiscal_Year
(employee.Bonus_Package == 'AOS MGR1 (10%)') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Claris Online Store Bonus Plan'
)
),
$('<p/>').html(
'You are eligible to participate in the Claris Online Store Bonus Plan in force from time to time, subject to the rules of the Plan in force at that time. The Plan provides for varying levels of payout based on achieving individual performance metrics. If specific quarterly performance metrics are achieved, your bonus may range up to 10% of your quarterly base salary. Additional eligibility and participation is subject to the written terms and conditions contained in the Plan. Please review the Plan document, which will be sent to you separately when you become eligible to participate in the Plan, for more specific details including eligibility criteria. The terms of the Plan are subject to change by the company in its sole discretion at any time. Receipt of a bonus in one year does not confer entitle-ment in any subsequent years.'
)
),
// [Include if AOS MGR1 (10%) w/Sign On]
(employee.Bonus_Package == 'AOS MGR1 (10%) w/Sign On') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Hire-On Bonus'
)
),
$('<p/>').html(
'You will be eligible to receive a hire-on bonus of (US)$' + fnFormatCurrency(employee.Bonus) + ' (less deductions required by law), subject to the following terms and conditions. In order to earn the bonus you must be actively employed by '

+ 'Claris' + ' for 12 months following your start date. ' + 'Claris' + ' will advance you payment of the bonus in the next regular payroll cycle following your first 30 days of active employment. However, should you voluntarily terminate your employment with ' + 'Claris' + ' within 12 months of your start date, and thus fail to meet the conditions to earn your bonus, you will be responsible for reimbursing all or part of the advance bonus payment at ' + 'Claris' + '&#39;s sole discretion. By your signature below, you authorize ' + 'Claris' + ' to deduct any unearned bonus advance from your final paycheck.'
),
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Claris Online Store Bonus Plan'
)
),
$('<p/>').html(
'You are eligible to participate in the Claris Online Store Bonus Plan in force from time to time, subject to the rules of the Plan in force at that time. The Plan provides for varying levels of payout based on achieving individual performance metrics. If specific quarterly performance metrics are achieved, your bonus may range up to 10% of your quarterly base salary. Additional eligibility and participation is subject to the written terms and conditions contained in the Plan. Please review the Plan document, which will be sent to you separately when you become eligible to participate in the Plan, for more specific details including eligibility criteria. The terms of the Plan are subject to change by the company in its sole discretion at any time. Receipt of a bonus in one year does not confer entitlement in any subsequent years.'
)
),
// [Include if AOS MGR2 (15%)] Fiscal_Year
(employee.Bonus_Package == 'AOS MGR2 (15%)') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Claris Online Store Bonus Plan'
)
),
$('<p/>').html(
'You are eligible to participate in the Claris Online Store Bonus Plan in force from time to time, subject to the rules of the Plan in force at that time. The Plan provides for varying levels of payout based on achieving individual performance metrics. If specific quarterly performance metrics are achieved, your bonus may range up to 15% of your quarterly base salary. Additional eligibility and participation is subject to the written terms and conditions contained in the Plan. Please review the Plan document, which will be sent to you separately when you become eligible to participate in the Plan, for more specific details including eligibility criteria. The terms of the Plan are subject to change by the company in its sole discretion at any time. Receipt of a bonus in one year does not confer entitlement in any subsequent years.'

)
),
// [Include if AOS MGR2 (15%) w/Sign On]
(employee.Bonus_Package == 'AOS MGR2 (15%) w/Sign On') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Hire-On Bonus'
)
),
$('<p/>').html(
'You will be eligible to receive a hire-on bonus of (US)$' + fnFormatCurrency(employee.Bonus) + ' (less deductions required by law), subject to the following terms and conditions. In order to earn the bonus you must be actively employed by ' + 'Claris' + ' for 12 months following your start date. ' + 'Claris' + ' will advance you payment of the bonus in the next regular payroll cycle following your first 30 days of active employment. However, should you voluntarily terminate your employment with ' + 'Claris' + ' within 12 months of your start date, and thus fail to meet the conditions to earn your bonus, you will be responsible for reimbursing all or part of the advance bonus payment at ' + 'Claris' + '&#39;s sole discretion. By your signature below, you authorize ' + 'Claris' + ' to deduct any unearned bonus advance from your final paycheck.'
),
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Claris Online Store Bonus Plan'
)
),
$('<p/>').html(
'You are eligible to participate in the Claris Online Store Bonus Plan in force from time to time, subject to the rules of the Plan in force at that time. The Plan provides for varying levels of payout based on achieving individual performance metrics. If specific quarterly performance metrics are achieved, your bonus may range up to 15% of your quarterly base salary. Additional eligibility and participation is subject to the written terms and conditions contained in the Plan. Please review the Plan document, which will be sent to you separately when you become eligible to participate in the Plan, for more specific details including eligibility criteria. The terms of the Plan are subject to change by the company in its sole discretion at any time. Receipt of a bonus in one year does not confer entitlement in any subsequent years.'
)
),
// [Include if AOS MGR3 (20%)] Fiscal Year
(employee.Bonus_Package == 'AOS MGR3 (20%)') &&

$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Claris Online Store Bonus Plan'
)
),
$('<p/>').html(
'You are eligible to participate in the Claris Online Store Bonus Plan in force from time to time, subject to the rules of the Plan in force at that time. The Plan provides for varying levels of payout based on achieving individual performance metrics. If specific quarterly performance metrics are achieved, your bonus may range up to 20% of your quarterly base salary. Additional eligibility and participation is subject to the written terms and conditions contained in the Plan. Please review the Plan document, which will be sent to you separately when you become eligible to participate in the Plan, for more specific details including eligibility criteria. The terms of the Plan are subject to change by the company in its sole discretion at any time. Receipt of a bonus in one year does not confer entitlement in any subsequent years.'
)
),
// [Include if AOS MGR3 (20%) w/Sign On]
(employee.Bonus_Package == 'AOS MGR3 (20%) w/Sign On') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Hire-On Bonus'
)
),
$('<p/>').html(
'You will be eligible to receive a hire-on bonus of (US)$' + fnFormatCurrency(employee.Bonus) + ' (less deductions required by law), subject to the following terms and conditions. In order to earn the bonus you must be actively employed by ' + 'Claris' + ' for 12 months following your start date. ' + 'Claris' + ' will advance you payment of the bonus in the next regular payroll cycle following your first 30 days of active employment. However, should you voluntarily terminate your employment with ' + 'Claris' + ' within 12 months of your start date, and thus fail to meet the conditions to earn your bonus, you will be responsible for reimbursing all or part of the advance bonus payment at ' + 'Claris' + '&#39;s sole discretion. By your signature below, you authorize ' + 'Claris' + ' to deduct any unearned bonus advance from your final paycheck.'
),
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Claris Online Store Bonus Plan'
)
),

$('<p/>').html(
'You are eligible to participate in the Claris Online Store Bonus Plan in force from time to time, subject to the rules of the Plan in force at that time. The Plan provides for varying levels of payout based on achieving individual performance metrics. If specific quarterly performance metrics are achieved, your bonus may range up to 20% of your quarterly base salary. Additional eligibility and participation is subject to the written terms and conditions contained in the Plan. Please review the Plan document, which will be sent to you separately when you become eligible to participate in the Plan, for more specific details including eligibility criteria. The terms of the Plan are subject to change by the company in its sole discretion at any time. Receipt of a bonus in one year does not confer entitlement in any subsequent years.'
)
),
// [Include if Commission (Sales)]
(employee.Commission == 'Commission (Sales)') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Commission'
)
),
$('<p/>').html(
'You will be eligible for commissions and/or performance incentives according to the written terms and conditions contained in the annual Sales Incentive Compensation Plan, which you will receive at the new sales employee orientation. Your annual target variable compensation for ' + employee.Fiscal_Year + ' is (US)$' + (fnFormatCurrency(employee.Target_Amount)) + ' (less deductions required by law) at 100 percent of goal.'
)
),
// [Include if Commission (Search Ads)]
(employee.Commission == 'Commission (Search Ads)') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Commission'
)
),
$('<p/>').html(
'You will be eligible for commissions and/or performance incentives according to the written terms and conditions contained in the Claris Search Ads Sales Compensation Plan then in effect, which you will receive at the start of your employment. Your annual target commission compensation for ' + employee.Fiscal_Year + ' is (US)$' +

(fnFormatCurrency(employee.Target_Amount)) + ' (less deductions required by law) at 100% of goal. In order to assist you in your transition to ' + 'Claris' + ', ' + 'Claris' + ' agrees to provide you a guarantee regarding your first quarter of employment at ' + 'Claris' + '. In order to be eligible for the foregoing commission payment, you do not have to meet 100% target for that quarter, provided you meet all other eligibility requirements set forth in the applicable plan document and you are actively employed by Claris on the final day of that quarter. After your guaranteed first quarter is completed, your commissions will not be guaranteed and will be subject to you meeting the requirements of the applicable plan document including target requirements as set forth by the Search Ads VP or other designee.'
)
),
((employee.Annual_Bonus == 'Discretionary with Target' || employee.Annual_Bonus == 'Discretionary Bonus') && (employee.JobLevel == 'MGR3' || employee.JobLevel == 'ICT6' || employee.JobLevel == 'IC6')) &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Discretionary Bonus'
)
),
$('<p/>').html(
'You will be eligible to receive an annual cash bonus with a target bonus amount of 20% of your base salary. Bonuses are discretionary and awarded based on your individual performance, Apple’s overall performance, and when your employment begins during the fiscal year. As a result, bonuses awarded in the first year of employment typically range between 10% and 20% of base salary. Whether bonuses are paid and the amount and timing of any bonus payments is determined at the sole discretion of Apple.'
)
),
((employee.Annual_Bonus == 'Discretionary with Target' || employee.Annual_Bonus == 'Discretionary Bonus') && (employee.JobLevel == 'MGR2' || employee.JobLevel == 'ICT5' || employee.JobLevel == 'IC5')) &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Discretionary Bonus'
)
),
$('<p/>').html(
'You will be eligible to receive an annual cash bonus with a target bonus amount of 15% of your base salary. Bonuses are discretionary and awarded based on your individual performance, Apple’s overall performance, and when your employment begins during the fiscal year. As a result, bonuses awarded in the first year of employment typically range between 5% and 15% of base salary. Whether bonuses are paid and the amount and timing of any bonus payments is determined at the sole discretion of Apple.'
)
),
((employee.Annual_Bonus == 'Discretionary with Target' || employee.Annual_Bonus == 'Discretionary Bonus') && (employee.JobLevel == 'MGR1' || employee.JobLevel == 'ICT4' || employee.JobLevel == 'IC4')) &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Discretionary Bonus'
)
),
$('<p/>').html(
'You will be eligible to receive an annual cash bonus with a target bonus amount of 10% of your base salary. Bonuses are discretionary and awarded based on your individual performance, Apple’s overall performance, and when your employment begins during the fiscal year. As a result, bonuses awarded in the first year of employment typically range between 5% and 10% of base salary. Whether bonuses are paid and the amount and timing of any bonus payments is determined at the sole discretion of Apple.'
)
),
((employee.Annual_Bonus == 'Discretionary Bonus') && (employee.JobLevel == 'IC3' || employee.JobLevel == 'ICT3' || employee.JobLevel == 'SUP' || employee.JobLevel == 'SUP2')) &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Discretionary Bonus'
)
),
$('<p/>').html(
'You may be eligible to receive a discretionary bonus based on your individual performance and Apple’s overall performance. Whether a bonus is paid and the amount and timing of the bonus payment is at the sole discretion of Apple.'
)
),

(employee.RSU_Amount) &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Restricted Stock Units'
)
),
$('<p/>').html(
'We will recommend that you be granted an award of Restricted Stock Units (RSUs) with a value of (US)$' + (fnFormatCurrency(employee.RSU_Amount)) + ' on the date of grant. This award is subject to the approval of the Compensation Committee of the Board of Directors (the Compensation Committee), on a date to be determined. The number of RSUs will be determined by dividing (US)$' + (fnFormatCurrency(employee.RSU_Amount)) + ' by the Nasdaq closing price of a share of Apple stock on the grant date and rounding up to the nearest whole share.'
),
$('<p/>').html(
'An RSU is the right to receive shares of Apple common stock upon vesting; one unit represents one share of Apple stock. After Compensation Committee approval, the specific terms and conditions applicable to the grant, including the vesting schedule, will be available in the RSU award agreement. The grant will be subject to the terms and conditions of Apple&#39;s 2014 Employee Stock Plan as well as the terms and conditions of the RSU award agreement.'
)
),
// [Include if Indemnity Payment]
(employee.Indemnity_Amount) &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Indemnity Payment'
)
),
$('<p/>').html(
'Subject to the terms and conditions below, Claris agrees to reimburse you in an amount equal to the amount actually paid by you to ' + employee.Indemnity_Co + ' as a result of you being required to repay ' + employee.Indemnity_Reason + ' (“Indemnity”).'
),
$('<p/>').html(
'Claris will pay you the Indemnity only if: (i) ' + employee.Indemnity_Co + ' demands repayment from you and (ii) you provide Claris with proof of the amount actually paid by you to ' + employee.Indemnity_Co + '. In no event shall the total net amount paid by Claris to you exceed, $' + employee.Indemnity_Amount + '.'
),
$('<p/>').html(
'This Indemnity Payment shall be treated as taxable compensation to you and will be reported on your W2. Accordingly, Claris will “Gross-Up” the amount of the compensation to cover the payroll taxes. Any Indemnity Payments and Gross-Up shall be paid as a retention bonus. Any Indemnity Payments and Gross-Up shall be advanced to you per above, but shall not be fully earned until your first anniversary of employment. Accordingly, if you leave Claris voluntarily prior to your first anniversary of employment, and fail to earn the bonus, you will need to repay any Indemnity Payments and Gross-Ups paid to you in Claris’s discretion.'
)
),
$('<div class="offerClause"/>').append(
$('<H1/>').html(
'Benefits'
)
),
$('<div class="offerClause"/>').append(
((employee.Employee_Type.indexOf("FT") > -1) && (employee.Offer_Type != 'Virtual Intern')) &&
$('<p/>').html(
"You will be eligible to participate in Apple's comprehensive benefits program. Review the <a href='/eprise/main/SiteGen/Onboarding/Content/Uploads/Unplaced_Documents/Full-Time_Corporate_Benefits_Summary.pdf' target='_blank'>Full-Time Corporate Benefits Program Summary</a> for more details."
),
((employee.Employee_Type.indexOf("PT") > -1) && (employee.Offer_Type != 'Virtual Intern')) &&
$('<p/>').html(
"You will be eligible to participate in Apple's comprehensive benefits program. Review the <a href='/eprise/main/SiteGen/Onboarding/Content/Uploads/Unplaced_Documents/Part-Time_Corporate_Benefits_Summary.pdf' target='_blank'>Part-Time Corporate Benefits Program Summary</a> for more details."
)
),
// [Include if US Campus Rep]

(employee.Offer_Type == 'USCAM') &&
$('<div class="offerClause"/>').append(
$('<p/>').html(
"As a part-time employee working less than 20 hours a week, you may be eligible to participate in Apple&#39;s comprehensive benefits program. Review the <a href='/eprise/main/SiteGen/Onboarding/Content/Uploads/Unplaced_Documents/Part-Time_Corporate_Benefits_Summary.pdf' target='_blank'>Part-Time Corporate Benefits Program Summary</a> for more details."
)
),
// [Include if Internal Intl Transfer]
(employee.Offer_Type == 'IITR') &&
$('<div class="offerClause"/>').append(
$('<p/>').html(
'Upon hire, you may immediately enroll in the Apple 401(k) Plan to which both you and Apple contribute.'
)
),
// [Include if Standard NOT Internal International Transfer]
(employee.Offer_Type == 'AHAH' || employee.Offer_Type == 'ChannelSales' || employee.Offer_Type == 'RCC' || employee.Offer_Type == 'STNG' || employee.Offer_Type == 'FTG') &&
$('<div class="offerClause"/>').append(
$('<p/>').html(
'Upon hire, you can immediately enroll in the Apple 401(k) Plan, to which both you and Apple will contribute. As a convenience to you, if you do not elect an Apple 401(k) contribution amount within approximately 30 days after your employment with ' + 'Claris' + ' begins:'
),
$('<ul/>').append(
$('<li/>').html(
'You will be automatically enrolled in the Apple 401(k) Plan with a before-tax contribution of 3 percent of your eligible base pay.'
),
$('<li/>').html(
'You will also be enrolled in an automatic increase program, which will increase your before-tax contribution by 1 percent each year on the anniversary of your automatic enrollment date, to a maximum of 6 percent.'
),
$('<li/>').html(
'You can opt out of either program at any time, as well as change the amount of your contribution.*'
)

)
),
// [Include if Standard NOT Internal International Transfer]
(employee.Offer_Type == 'AHAH' || employee.Offer_Type == 'ChannelSales' || employee.Offer_Type == 'RCC' || employee.Offer_Type == 'STNG' || employee.Offer_Type == 'FTG') &&
$('<div class="offerClause"/>').append(
$('<p/>').html(
'*Automatic enrollment and automatic increase are not available to international transfers.'
)
),
// [Include if Standard and Employee is Full-Time]
(((employee.Offer_Type == 'AHAH' || employee.Offer_Type == 'ChannelSales' || employee.Offer_Type == 'RCC' || employee.Offer_Type == 'IITR' || employee.Offer_Type == 'STNG' || employee.Offer_Type == 'FTG')) && ((employee.Employee_Type == 'FT' || employee.Employee_Type == 'FTNEX' || employee.Employee_Type == 'FTEX'))) &&
$('<div class="offerClause"/>').append(
$('<p/>').html(
'Apple provides basic Long Term Disability (LTD) coverage as of your first day of active work or first day of eligibility at no cost to you. Apple also enrolls you automatically in the additional LTD buy-up option, and the premium for this coverage will be deducted from your salary. You may opt out of the buy-up option within 30 days of receiving a notice of eligibility, a qualified family status change event, or during the annual open enrollment, by going to the Benefits Enrollment Tool at benefits.apple.com. If you opt out, you will still be enrolled for basic LTD coverage and, should you change your mind, you will not be able to enroll in the buy-up option until the next annual open enrollment or qualified family status change event.'
)
),
// [Include if Standard]
(((employee.Offer_Type == 'AHAH' || employee.Offer_Type == 'ChannelSales' || employee.Offer_Type == 'RCC' || employee.Offer_Type == 'IITR' || employee.Offer_Type == 'STNG' || employee.Offer_Type == 'FTG'))) &&
$('<div class="offerClause"/>').append(
$('<p/>').html(
'Participation in any of Apple&#39;s benefits and stock plans is subject to the written terms and conditions contained in the various plans.'
)
),
// [Include if Full-Time Intern]

((employee.Employee_Type.indexOf("FT") > -1) && (employee.Offer_Type == 'Virtual Intern')) &&
$('<div class="offerClause"/>').append(
$('<p/>').html(
"You will be eligible to participate in Apple&#39;s Intern Benefits Program. Review the <a href='/eprise/main/SiteGen/Onboarding/Content/Uploads/Unplaced_Documents/Intern_Benefits_Summary.pdf' target='_blank'>Intern Benefits Program Summary</a> for more details. Participation in any of Apple's benefits plan is subject to the written terms and conditions of the various plans."
)
),
// [Include if Part-Time Intern]
(((employee.Employee_Type.indexOf("PT") > -1) && (employee.Offer_Type == 'Virtual Intern')) && ((employee.Weekly_Hours >= 19) && (employee.Weekly_Hours < 32))) &&
$('<div class="offerClause"/>').append(
$('<p/>').html(
"You will be eligible to participate in Apple&#39;s Intern Benefits Program. Review the <a href='/eprise/main/SiteGen/Onboarding/Content/Uploads/Unplaced_Documents/Intern_Benefits_Summary.pdf' target='_blank'>Intern Benefits Program Summary</a> for more details."
)
),
// [Include if Part-Time Intern]
(((employee.Employee_Type.indexOf("PT") > -1) && (employee.Offer_Type == 'Virtual Intern')) && ((employee.Weekly_Hours >= 0) && (employee.Weekly_Hours <= 18))) &&
$('<div class="offerClause"/>').append(
$('<p/>').html(
'Interns who are employed for 19 hours or less per week are not eligible for Apple benefits programs.'
)
),
// [Include if Standard excluding Internal Intl Transfer]
(employee.Offer_Type == 'AHAH' || employee.Offer_Type == 'ChannelSales' || employee.Offer_Type == 'RCC' || employee.Offer_Type == 'STNG' || employee.Offer_Type == 'FTG') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Bridge of Service'

)
),
$('<p/>').html(
'If you&#39;re rejoining ' + 'Claris or Apple' + ' within two years of your departure, you may be eligible for credit for previous time worked at Apple or an Apple-designated affiliate. Service credit may affect the calculation of certain benefits including your vacation accrual rate and Apple 401(k) Plan Match.'
)
),
// [Include if Auto_Allowance]
(employee.Auto_Allowance == 'Yes') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Auto'
)
),
$('<p/>').html(
'To the extent your job requires, you will be eligible to participate in Claris’s field fleet program.'
)
),
// [Include if Relocation and NOT Internal Int&#39;l Transfer, ASC or Intern]
((employee.Offer_Type != 'Virtual Intern') && (employee.Employee_Type.indexOf("FT") > -1)) &&
(employee.Relocation == 'ACSUP' || employee.Relocation == 'C' || employee.Relocation == 'CS' || employee.Relocation == 'L' || employee.Relocation == 'ST' || employee.Relocation == 'E') &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Relocation Package'
)
),
$('<p/>').html(
'In connection with your employment, we are pleased to provide you with assistance to support your relocation. Your relocation will be supported by both the People team, as well as by relocation service providers. A relocation service provider representative will contact you shortly to begin arrangements and provide specifics of your relocation package ("' + employee.Relocation_Package + '"). You will have 12 months from your start date to move and complete all aspects of your relocation. Please note that in order to earn your relocation package, you must be actively employed with ' + 'Claris' + ' for 12 months following your start date. If you resign your employment from ' + 'Claris' + ' within 12 months of your start date the commencement of your relocation, you may be responsible for repayment of certain items and a prorated portion of the relocation package at ' + 'Claris' + '&#39;s sole discretion. In the event repayment is required, you agree and authorize ' + 'Claris' + ' to deduct the amount owed from your final paycheck to the extent permitted by local law. '
)
),
// [Include If Relocation is Special or Relocation is Internal International Transfer or AppleCare Support]
((employee.Offer_Type != 'Virtual Intern') && (employee.Employee_Type.indexOf("FT") > -1)) &&
(employee.Relocation == 'Custom' || employee.Relocation == 'Virtual Intern' || employee.Relocation == 'INTL' ) &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Relocation Package'
)
),
$('<p/>').html(
'The details of your relocation benefits are described in a separate relocation agreement.'
)
),
// [Include If Relocation Intern AND Full-Time Intern] Relocation Assistance
// [Include If Offer Type= Intern AND Employee Type=Full Time or any of the FT children
((employee.Offer_Type == 'Virtual Intern') && (employee.Employee_Type.indexOf("FT") > -1)) &&
$('<div class="offerClause"/>').append(
$('<p class="section-title"/>').append(
$('<H2/>').html(
'Housing Allowance'
)
),
$('<p/>').html(
'Full-time interns in our virtual program are eligible for a monthly housing allowance. A (US)$1,000/month housing allowance, equating to (US)$33.34 daily rate, for the duration of your employment with Claris. If your assignment extends past the initial expected dates, Claris may extend the housing allowance period accordingly at the pro-rated daily amount. The initial housing allowance will be paid within the first 7-10 business days after you start. Subsequent monthly remittances will be made on the first business day of each month. Partial months will be pro-rated.'
),
$('<p/>').html(
'The value of the housing allowance will be treated as income and included on your W-2, but ' + 'Claris' + ' will "gross up" this income to cover the federal and state taxes.'
),
$('<p/>').html(
'After we receive your signed offer letter, SIRVA (an Apple vendor) will reach out to you directly within 48 hours to review your options and answer any questions you may have. SIRVA can be reached at <a href="mailto:appleinternsUS@sirva.com" target="_blank">appleinternsUS@sirva.com</a>.'
)
),
$('<div class="offerClause"/>').append(
$('<H1/>').html(
'Conditions'
)
),
$('<div class="offerClause"/>').append(
$('<p/>').html(
'This offer is contingent on the following conditions:'
)
),
// [Include if Internal International Transfer]
$('<div class="offerClause"/>').append(
$('<p/>').append(
$('<ul/>').append(
(employee.Offer_Type == 'IITR') &&
$('<li/>').html(
'You must be an active employee in good standing of ' + employee.Entity + ' and, when requested, ' + employee.Entity + ' must receive an original resignation letter signed by you before you start your employment with ' + 'Claris' + ' Inc. in the United States. Your employment with ' + 'Claris' + ' Inc. will not start until the day after your employment with ' + employee.Entity + ' ends.'
),
(employee.Legal_Counsel == 'Yes') &&
$('<li/>').html(
'You must be admitted, in good standing, to practice law in California; or must be admitted, in good standing, in another U.S. jurisdiction and apply for California Registered In House Counsel status within the first 30 days of your employment at Claris.'
),
(employee.Offer_Type == 'AHAH') &&
$('<li/>').html(
'You must sign and complete the <a href="/eprise/main/SiteGen/Onboarding/Content/Uploads/Unplaced_Documents/At_Home_Advisor_Program_Agreement.pdf" target="_blank">Apple At Home Advisor Program Agreement</a> and return the signed agreement with this offer letter. The agreement sets forth additional terms and conditions of your employment as an Apple At Home Advisor including details on scheduling and specific work expectations of your position.'
),
(employee.Offer_Type == 'AHA') &&
$('<li/>').html(
'You must sign and complete the <a href="/eprise/main/SiteGen/Onboarding/Content/Uploads/Unplaced_Documents/At_Home_Advisor_College_Program_Agreement.pdf" target="_blank">Apple At Home Advisor Program Agreement</a> and return the signed agreement with this offer letter. The agreement sets forth additional terms and conditions of your employment as an Apple At Home Advisor including details on scheduling and specific work expectations of your position.'
),
(employee.Advisor_Academy == 'Yes') &&
$('<li/>').html(
'You understand that you will be required to take an exam as part of Advisor Academy. You also understand that Claris may modify the training requirements and exams from time to time according to business need, and that Claris retains the exclusive right to make final determinations on how to administer, interpret and implement the training requirements and exams. Further, you understand that if you fail the training and exam requirements during Advisor Academy your employment with Claris will be terminated.'
),
$('<li/>').html(
'On your first day of employment, and possibly from time to time thereafter, you must show proof of identity and legal right to work in the United States as required by federal immigration law. If you are unable to provide documentation of your authorization to work in the United States, ' + 'Claris' + ' may terminate your employment.'
),
$('<li/>').html(
'Due to U.S. Department of Commerce requirements, and the U.S. Immigration and Naturalization Act, you will be required to sign an assurance regarding obligations not to export controlled technology or software to certain countries. If you&#39;re a citizen of a restricted or embargoed country (as identified by the Department of Commerce), ' + 'Claris' + ' could be required to obtain an export license from the Department of Commerce. ' + 'Claris' + ' will work with you to obtain this license within a time limit established by ' + 'Claris' + '. If for any reason ' + 'Claris' + ' doesn&#39;t receive a license within the established time frame, ' + 'Claris' + ' may terminate your employment.'
),
$('<li/>').html(
'You must sign the <a href="/eprise/main/SiteGen/Onboarding/Content/Uploads/Unplaced_Documents/FMK_US_IPA.pdf" target="_blank">Intellectual Property Agreement</a> and return the signed agreement with this offer letter. Any exceptions or approvals required under the terms of the Intellectual Property Agreement must be approved by your division’s Senior Vice President and ' + 'Claris' + '&#39;s Legal Department prior to your beginning work.'
),
$('<li/>').html(
"We believe that every employee should use good judgement and exercise uncompromising integrity when conducting Claris business. By accepting this offer, you acknowledge that you have received and read Apple&#39;s <a href='/eprise/main/SiteGen/Onboarding/Content/Uploads/Documents/document_library/Policies_and_Guidelines/Apple_Business_Conduct_Policy.pdf' target='_blank'>Business Conduct Policy</a> and that you agree to comply with its terms."
),
(employee.Offer_Type != 'IITR') &&
$('<li/>').html(
'You must receive a satisfactory background check in accordance with ' + 'Claris' + ' policy.'
),
// IF Drug_Screen= Yes OR ASC_Reseller_Location=Best Buy
((employee.Drug_Screen == 'Yes') || (employee.ASC_Reseller_Site == 'Best Buy')) &&
$('<li/>').html(
'You must successfully complete a drug test.'
)
// end LI
)
// end of UL
)
// end P
),
$('<div class="offerClause"/>').append(
$('<p/>').html(
'If any of the above conditions is not satisfied, ' + 'Claris' + ' may withdraw this offer of employment.'
)
),
$('<div class="offerClause"/>').append(
$('<p/>').html(
'Your employment relationship with ' + 'Claris' + ' will be at will. This means that either you or ' + 'Claris' + ' may terminate the employment relationship at any time and for any or no reason with or without notice.'
)
),
$('<div class="offerClause"/>').append(
$('<p/>').html(
'Your employment will be governed by and interpreted under the laws of the State of ' + employee.State + ', without regard to conflict of law principles. This offer letter is intended to outline the terms of your employment with Claris and supersedes and fully replaces any previous communications from Claris or its representatives about your employment. '
)
),
$('<div class="offerClause"/>').append(
$('<p/>').html(
'By signing this letter you agree that these are the only terms and conditions of your employment and acknowledge that you have not relied upon any other promises or representations, except those made in this letter.'
)
),
$('<div class="offerClause"/>').append(
$('<p/>').html(
'Please accept this offer by ' + employee.Expiration_Of_Offer + '. We must receive your acceptance of this offer no later than 5:00 p.m. Pacific Time that day. If you have any questions regarding this offer or any of its enclosures, please contact ' + employee.Recruiter_Name + ' at <a target="_blank" href="mailto:' + employee.Recruiter_Email + '">' + employee.Recruiter_Email + '</a>.'
)
),
$('<div class="offerClause"/>').append(
$('<p/>').html(
'Sincerely,'
)
),
$('<div class="offerClause"/>').append(
$('<div/>').append(
$('<p class="footer"/>').append(
/* $('<div/>').html(
employee.Recruiter_Name + '<br>'
),*/
$('<div/>').html(
'Apple Worldwide Recruiting<br>'
),
$('<div/>').html(
'On behalf of Claris International Inc.<br>'
)
),
$('<p class="footer"/>').append(
$('<p/>'),
$('<div/>').html(
'I accept the offer (sign below):'
)
)
)
)
// end append
);
}
function fnGetRelocationPackageLink(code, package) {
var link = '',
filename = '';
switch (code) {
case 'ACSUP':
// AppleCare Core
filename = 'Relocation_AppleCare_Core_Package';
break;
case 'C':
// Core
filename = 'Relocation_Core_Package';
break;
case 'CS':
// Core Select
filename = 'Relocation_Core_Select_Package';
break;
case 'ST':
// Standard
filename = 'Relocation_Standard_Package';
break;
case 'L':
// Leadership
filename = 'Relocation_Leadership_Package';
break;
case 'E':
// Leadership
filename = 'Executive_Relocation_Package';
break;
}
link = '<a target="_blank" href="/eprise/main/SiteGen/Onboarding/Content/Uploads/Unplaced_Documents/' + filename + '.pdf">' + package + '</a>';
return link;
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
function fnTime_And_Half(amount, rate) {
amount = (amount.indexOf(',') != -1) ? amount.split(',').join('') : amount;
var total = (parseFloat(amount) + parseFloat((parseFloat(amount) * rate)));
return formatCurrency(total);
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
var name = fnGetName(employee.First_Name, '', employee.Last_Name);
_fnAssignValue('Full_Name', name);
// override Employee Profile Fields
//($(".expectedStartDate").attr("value")) ? employee.Start_Date = $(".expectedStartDate").attr("value"): '';
// render templatetr
fnView();
// Insert We look forward to welcoming you to Claris into the last paragraph.
$('.offer').last().html(
$('.offer').last().html() + ' We look forward to welcoming you to Claris.'
);
// completed letter
/*
if (!$("input.calendar_button").length) {
$("#ButtonSaveAndComplete").remove();
$("input[type=text]")
.removeAttr('onfocus')
.attr("disabled", "disabled");
var arrParts = [
[1, 'hidden_pg']
];
showCompletedOfferLetter('incomplete', 'complete', arrParts);
}
*/
if (!$("input.calendar_button").length) {
$("#ButtonSaveAndComplete").remove();
$("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");
var arrParts = [
[1, 'hidden_pg']
];
showCompletedOfferLetter('incomplete', 'complete', arrParts);
}else{
makeOfferLetter('hidden_pg','offerClause');
}
});
