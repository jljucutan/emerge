/**
* SERVICES-35287 | PayPal - Create China Offer Letter
* China Offer Letter Version 11
* 09/14/2021 | psaludares | Development in Test
* 09/02/2022 | jjucutan | created version 12
*/
const fnView = function() {
    "use strict";
    const markupRoot = $("#markup").html("");
    markupRoot.append(

        $('<div class="offerClause"/>').append(
            $('<p/>').append(
                $('<mark/>').append(employee.Today_Date)
                ),
            $('<span/>').html('<mark>' + employee.Full_Legal_Name + '</mark><br>'),
            $('<span/>').html(employee.Address_Line_1 ? '<mark>' + employee.Address_Line_1 + '</mark><br>' : '<mark></mark><br>'),
            $('<span/>').html(employee.Address_Line_2 ? '<mark>' + employee.Address_Line_2 + '</mark><br>' : ''),
            $('<span/>').html((employee.City ? '<mark>' + employee.City + '</mark>, ' : '<mark></mark> ') + (employee.State ? '<mark>' + employee.State + '</mark>, ' : '<mark></mark> ') + '<mark>' + employee.Postal_Code + '</mark>'),
            $('<p/>').append('&nbsp;')
            ),

        
        $('<div class="offerClause"/>').append(

            $('<p/>').append(
                'Dear/尊敬的 <mark>' + (employee.Preferred_First_Name ? employee.Preferred_First_Name  : employee.First_Name) + '</mark>,'
                ),
            $('<p/>').append(
                'I’m writing to confirm our offer for you to join <mark>' + employee.EnityName + '</mark>, (“Company”). <mark>' + (/^Guofubao/.test(employee.EnityName) ? "<br>The Company is part of the PayPal group of companies."  : "") + '</mark>'
                ),
            $('<p/>').append(
                'The following are the key elements of our offer.<br>&nbsp;<br> 我在此确认录用您加入<mark>' + employee.Chinese_Entity_Name + '</mark>（“公司”），<mark>' + (/^Guofubao/.test(employee.EnityName) ? "公司为PayPal集团公司的一部分。"  : "") + '</mark> 录用函主要条款如下。'
                ),
            $('<p/>').append(
                'This offer of employment is contingent upon (a) the successful completion of a standard PayPal background verification check; (b) you completing, to the satisfaction of the Company, a declaration that you are a Fit & Proper person for the purposes of any relevant regulation or law (if applicable); and (c) you obtaining a valid work visa/permit and residence permit that enables to you to legally work and reside in the PRC (if applicable), prior to your start date.  The Company reserves the right to revoke this offer if conditions (a), (b) and/or (c) are not completed to the satisfaction of the Company, and this will be the case even if you have physically commenced employment pending the fulfilment of conditions (a), in which eventuality your employment may be deemed void ab initio and the Company may terminate your employment in accordance with the law.',
                '<br>',
                '本录用函以您满足下列条件为前提：您在录用开始日期前（a）成功通过标准的PayPal背景调查；（b）以令公司满意地方式填写完毕一份声明书表明您在任何相关法律法规下均系所聘职位的合适&适当人选（如适用）；且（c）已获得使您能够在中国合法工作和居留的有效工作签证/许可和居留许可（如适用）。如您未能以令公司满意的方式满足（a）、（b）和/或（c）项下的条件，公司保留撤销本录用函的权利；即便在您尚未满足（a）项下的条件时公司对您的用工已实际开始，您与公司的劳动关系可能被视为自始无效且公司有权依法解除您的劳动关系。'
            ),
            $('<p/>').append(
                '<strong><u>1. Title and Position 职务和职位</u></strong><br>',
                'You will be employed as: <mark>' + employee.Business_Title + '</mark><mark>' + (/^Guofubao/.test(employee.EnityName) ? ", PayPal China"  : "") + '</mark>'
                ),
            $('<p/>').append(
                '您将在公司担任的职务为: <mark>' + employee.Chinese_Business_Title + '</mark><mark>' + (/^Guofubao/.test(employee.EnityName) ? ", PayPal 中国"  : "") + '</mark>'
                ),
            $('<p/>').append(
                '<strong><u>2. Job Description 岗位描述</u></strong><br>',
                'You should devote your full time, skill and attention to the duties and responsibilities of your role. The job description and necessary qualifications are attached here as Appendix I.<br>',
                '您应当投入您的全部时间、专业技术和精力完成您所担任职务的职责和责任。岗位描述和必要任职资格详见附件一。'
                ),
            (employee.Foreign_Exchange_Employee == 'Yes') &&
            $('<div class="marked" data-toggle="popover" data-placement="top" data-content="FOREIGN EXCHANGE EMPLOYEES ONLY"/>').append(
                $('<p/>').append(
                    'In particular, you fully understand and acknowledge that your job position at the Company requires extensive and in-depth knowledge and industry experience on the foreign exchange matters with respect to payment businesses, and for this purpose you agree that one of the qualifications for this position is to pass the Foreign Exchange professional test organized by the State Administration of Foreign Exchange (“SAFE”), at the time as determined by SAFE, relating to the Company’s registration in the directory of enterprises with foreign exchange receipt and payment from trade.<br>',
                    '尤其是，您充分理解并同意您在公司所担任的职位需要您具备广泛且深入的支付业务相关外汇知识和行业经验。基于此，您同意该职位的任职资格之一是通过由国家外汇管理局（“外管局”）确定时间并组织的、与公司办理贸易外汇收支企业名录登记相关的外汇专业考试。'
                    )
                ),
            $('<p/>').append(
                '<strong><u>3. Salary 工资</u></strong><br>',
                'Your monthly base salary for the above position will be <mark>' + employee.SALARY_CURRENCY + '</mark> <mark>' + employee.SalaryOffered + '</mark> (Before tax). You will be responsible for your personal income tax.<br>',
                '您担任上述职位的月基本工资为 <mark>' + employee.SALARY_CURRENCY + '</mark> <mark>' + employee.SalaryOffered + '</mark>（税前）。 您将负责缴纳自己的个人所得税。'
                ),
            $('<span/>').append(
                '<strong><u>4. Bonus 奖金</u></strong><br>'
                ),
            (employee.CSOPS == 'Y' && employee.Language_Allowance == 'Yes') &&
            $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Language Allowance"/>').append(
                $('<ul/>').append(
                    $('<li/>').append(
                        'You will be eligible for a language allowance (which will be subject to applicable withholding tax and any other deductions required (that shall be assumed by the Employee) by applicable law). The amount of language allowance and ways of offering shall accord with the relevant policy. PayPal will formally provide you with the applicable policy after you become our employee. PayPal Inc. (and/or the Company) reserve(s) the right to amend, change or cancel the policy at its sole discretion.<br>您将有资格获得一笔语言津贴（您需就该笔津贴缴纳适用法律要求的（雇员应承担的）预扣所得税及任何其他扣除额）。语言津贴的金额及发放方式应根据相关政策执行。您成为我们的员工后，PayPal将正式向您提供相关政策。PayPal Inc.（及/或公司）保留完全自主修订、变更或取消相关政策的权利。  <p></p>'
                        )
                    )
                ),
            (employee.ELGAIP == 'AIP-Yes') &&
            $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for Annual Incentive Plan (AIP)"/>').append(
                $('<ul/>').append(
                    $('<li/>').append(
                        'You will be eligible to participate in the PayPal Annual Incentive Plan for a specified fiscal year (AIP) with an annual bonus based on individual achievement as well as company performance.  The annual bonus period is from January 1 through December 31. Your target bonus for the AIP is <mark>' + employee.eIP_Target_Pct + '</mark>% of your annual base salary, pro-rated based on your hire date and days of service during the AIP bonus period.  There is no guarantee any AIP bonus will be awarded or received, and any actual bonus will be determined after the end of the annual bonus period. Any AIP bonus, even if it is made repeatedly or regularly and whatever its amount, can never lead to a vested right for you, the employee.<br>您将有资格参与在特定财务年度制定的PayPal年度激励计划（AIP），并在该计划下获得基于个人绩效和公司业绩的年度奖金。AIP年度奖金期为1月1日至12月31日。 您的目标AIP奖金为您年度基本工资的<mark>' + employee.eIP_Target_Pct + '</mark>%（将根据您的入职日期以及在AIP奖金期内的实际工作天数按比例支付）。公司不保证一定会发放或您一定会获得AIP奖金，实际奖金金额将在年度奖金期结束后确定。无论公司是否重复或定期发放AIP奖金，且无论AIP奖金金额如何，AIP奖金不会成为您作为员工的固有权利。<p></p>To be eligible to receive any AIP bonus, you must be employed before October 1<sup>st</sup> and you must be in continuous employment on the date the bonus is received, subject to applicable laws. If your employment start date with a PayPal company commences on or after October 1<sup>st</sup>, your eligibility to participate in the AIP will begin on January 1st of the following calendar year. Any bonus is at PayPal’s sole and absolute discretion and subject to the terms and conditions of the AIP.  PayPal reserves the right, in its sole discretion, to amend, change or cancel the AIP at any time.  Further, the bonus plan that you are eligible to participate in may change over time.  You acknowledge and agree that PayPal may substitute the plan referenced in this letter and any contract of employment or any offer documentation, as it determines in its sole discretion from time to time.<br>为有资格获得任何AIP奖金，在遵守适用法律的前提下，您必须在每年10月1日前受聘于公司，并在获得奖金之日继续受聘于公司。如您在PayPal公司的入职日期为当年10月1日或之后，则您参与AIP计划的资格将从下一公历年度的1月1日开始。奖金金额将由PayPal在遵守AIP计划条款和条件的前提下全权酌情决定。PayPal保留全权决定在任何时候修订、变更或撤销AIP计划的权利。此外，您有权参与的奖金计划可能将在未来有所变更。您确认并同意，PayPal可不时全权酌情决定以其他计划取代本函、任何劳动合同或任何录用文件中所述的奖金计划。<p></p>'
                        )
                    )
                ),
            $('<ul/>').append(
                $('<li/>').append(
                    'In addition to any AIP bonus, to be eligible to receive an annual bonus (the "Annual Bonus") which is equivalent to one-month\'s base salary (subject to applicable deductions and taxes), you must be employed by the Company on the first day of December of the relevant fiscal year. Any Annual Bonus will be paid with your February salary the following fiscal year and will be based on your November base salary for the previous fiscal year, subject to the terms and conditions of the Annual Bonus and applicable law. Any Annual Bonus will be pro-rated for new hires during their first year of employment.除任何AIP奖金以外，您获得年度奖金（“年度奖金”）的前提是在相关财年十二月一日仍受聘于公司。根据年度奖金的条款条件和可适用法律，年度奖金金额为一个月工资（基于上一财年十一月的基本工资，并将扣除适用扣减项和税费），与二月份工资一并发放。工作未满一年的新员工的年度奖金将按比例发放。<p></p>'
                    )
                ),
            (employee.Hire_on_Bonus_Eligible == 'Yes' && employee.Installment_Amount_1 == '' && employee.Installment_Amount_2 == '') &&
            $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for One-time Sign On Bonus"/>').append(
                $('<ul/>').append(
                    $('<li/>').append(
                        'You shall receive a one time sign-on bonus of <mark>' + employee.HIRE_ON_BONUS_CRNCY_CD + '</mark> <mark>' + employee.HIRE_ON_BONUS_AMOUNT + '</mark>, paid with your first month\'s salary. This payment is subject to the applicable deductions and taxes. In the event that your employment ceases for any reason prior to completion of one year of service from your start date, the net value of the one-time sign-on bonus shall immediately be refundable by you to the Company on a pro-rated basis and your repayment obligation will be reduced by 1/12 for every full month of employment over the course of the year.<br>您将获得<mark>' + employee.HIRE_ON_BONUS_CRNCY_CD + '</mark> <mark>' + employee.HIRE_ON_BONUS_AMOUNT + '</mark>的一次性签约奖金，该奖金将与您的首月工资一并发放。上述款项将扣除适用扣减项和税费。如您与公司的劳动关系出于任何原因在入职日后的一年内终止，您应立即按比例向公司返还一次性签约奖金净额，该年度内您每工作满一个完整月度则还款金额将减少1/12。<p></p>'
                        )
                    )
                ),
            (employee.Hire_on_Bonus_Eligible == 'Yes' && employee.Installment_Amount_1 != '' && employee.Installment_Amount_2 != '') &&
            $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Qualifies for One-time Sign On Bonus (Installments)"/>').append(
                $('<ul/>').append(
                    $('<li/>').append(
                        'You shall receive a one-time sign-on bonus of <mark>' + employee.HIRE_ON_BONUS_CRNCY_CD + '</mark> <mark>' + employee.HIRE_ON_BONUS_AMOUNT + '</mark> payable in two (2) installments, <mark>' + employee.HIRE_ON_BONUS_CRNCY_CD + '</mark> <mark>' + employee.Installment_Amount_1 + '</mark> at the end of the 1st month of your employment and <mark>' + employee.HIRE_ON_BONUS_CRNCY_CD + '</mark> <mark>' + employee.Installment_Amount_2 + '</mark> at the end of 13th month from your employment start date. This payment is subject to the applicable deductions and taxes. In the event that your employment ceases for reasons of voluntary resignation by you or your dismissal by the Company due to your violation of the terms of your employment contract and/or PayPal’s Code of Conduct on any day prior to the completion of one year of service from your start date, the net value of the 1st installment one-time sign-on bonus shall immediately be fully refundable by you to the Company. If your employment ceases for reasons of voluntary resignation by you or your dismissal by the Company due to your violation of the terms of your employment contract and/or PayPal’s Code of Conduct on any day after your completion of one year but prior to completion of two years from your start date, the net value of the 2nd installment sign-on bonus shall be refundable to the Company on a pro-rated basis and your repayment obligation will be reduced by 1/12 for every full month of employment over the course of the year. No repayment of the one-time sign-on bonus would be required upon termination of your services for any reason after completion of two years of employment with the Company.<br>您将获得一次性签约奖金人民币 <mark>' + employee.HIRE_ON_BONUS_CRNCY_CD + '</mark> <mark>' + employee.HIRE_ON_BONUS_AMOUNT + '</mark>元，分两(2)期支付，第一期<mark>' + employee.HIRE_ON_BONUS_CRNCY_CD + '</mark> <mark>' + employee.Installment_Amount_1 + '</mark>将在您的劳动关系第一个月结束时支付，第二期<mark>' + employee.HIRE_ON_BONUS_CRNCY_CD + '</mark> <mark>' + employee.Installment_Amount_2 + '</mark>将在您的劳动关系起始日后第十三个月结束时支付。上述款项将扣除适用扣减项和税费。如您的劳动关系在劳动关系起始日后第一年结束前的任何日期因您自愿辞职或公司因您违反劳动合同和/或PayPal行为准则条款而将您解雇之故终止，您应立即向公司全额返还一次性签约奖金的第一期款项净值。如您的劳动关系在劳动关系起始日后第一年结束后，但在第二年结束前的任何日期因您自愿辞职或公司因您违反劳动合同和/或PayPal行为准则条款而将您解雇之故终止，您应当按比例向公司返还签约奖金第二期款项净值。您在第二年内每工作一个完整月度，您的还款金额将减少1/12。如您在受聘于公司满两年后因任何原因终止服务，则无需返还任何一次性签约奖金。<p></p>'
                        )
                    )
                ),
            $('<ul/>').append(
                $('<li/>').append(
                    'All of the bonuses referred to above are payable at PayPal’s sole and absolute discretion.  PayPal reserves the right, in its sole discretion, to amend, change, substitute or cancel the terms and conditions of any such bonuses at any time.<br> 上述所提及的全部奖金由PayPal全权酌情决定发放。PayPal保留全权决定随时修订、修改、取代或取消该等任何奖金的条款条件。<p></p>'
                    )
                ),
            $('<span/>').append(
                '<strong><u>5. Place of Work 工作地点</u></strong><br>'
                ),
            (employee.Workplace_Model == 'In-Office') &&
            $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Workplace Model = In-Offce"/>').append(
                $('<p/>').append(
                    'You will be required to work from the Company’s office located at ',
                    $('<mark/>').append(employee.LOCATION_DISPLAYNAME),
                    '. From time to time, you may be required to work at other locations, as directed by the Company. [仅适用于在办公室工作]您需要在位于',
                    $('<mark/>').append(employee.LOCATION_DISPLAYNAME),
                    '的公司办公室工作。根据公司的指示，您可能不时需要在其他地点工作。'
                    )
                ),
            (employee.Workplace_Model == 'Virtual Flex') &&
            $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Workplace Model = Virtual Flex"/>').append(
                $('<p/>').append(
                    'Your role may be performed outside of a PayPal office part of the time with the use of virtual working tools we provide. You must work virtually from a location near to the ',
                    $('<mark/>').append(employee.LOCATION_DISPLAYNAME),
                    '  PayPal office. You are required to provide the correct address of the aforesaid work location to PayPal and keep PayPal updated of any change by prior notice in writing. In addition to any in-person working, you may also be required to attend a PayPal office for in-person collaboration. We may amend or end the location of your role or remove the ability to work virtually at any time and will give you notice (but will not provide any compensation) if we do so.  You may find more details, including our expectations of you, within our Offsite Working Policy and associated policies.'
                    ),
                $('<p/>').append(
                    '员工可以于部分时间内在PayPal办公室以外的地点使用雇主提供的虚拟工作工具进行工作。员工必须在靠近',
                    $('<mark/>').append(employee.LOCATION_DISPLAYNAME),
                    '  PayPal办公室的地点进行虚拟工作。员工需要向PayPal提供上述工作地点的正确地址，如地址有任何变化，员工需要以书面形式事先通知PayPal。除了任何面对面的工作外，员工也可能随时被要求回PayPal办公室进行面对面合作。雇主可能会随时通知员工变更或终止员工的工作地点，或取消员工虚拟工作的资格，但不会提供任何补偿。员工可以在雇主的离线工作政策和其他相关政策中找到包括雇主对员工的期望在内的更多细节。'
                )
            ),
            (employee.Workplace_Model == 'Virtual') &&
            $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Workplace Model = Virtual"/>').append(
                $('<p/>').append(
                    'Your role may be performed outside of a PayPal office with the use of virtual working tools we provide. You must work virtually from a location near to the ',
                    $('<mark/>').append(employee.LOCATION_DISPLAYNAME),
                    '  PayPal office. You are required to provide the correct address of the aforesaid work location to PayPal and keep PayPal updated of any change by prior notice in writing. You may also be required to attend a PayPal office from time to time for in-person collaboration. You may find more details, including our expectations of you, within our Offsite Working Policy and associated policies.'
                    ),
                $('<p/>').append(
                    '员工可以在PayPal办公室以外的地点使用雇主提供的虚拟工作工具进行工作。员工必须在靠近 ',
                    $('<mark/>').append(employee.LOCATION_DISPLAYNAME),
                    '  PayPal办公室的地点进行虚拟工作。员工需要向PayPal提供上述工作地点的正确地址，如地址有任何变化，员工需要以书面形式事先通知PayPal。员工也可能不时被要求回PayPal办公室进行面对面合作。员工可以在雇主的离线工作政策和其他相关政策中找到包括雇主对员工的期望在内的更多细节。'
                )
            ),
            $('<span/>').append(
                '<strong><u>6. Probation Period 试用期</u></strong><br>'
                ),
            (employee.ProbationPeriodRequired == 'yes') &&
            $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Probation Period Required"/>').append(
                $('<p/>').append(
                    'You will have a <mark>' + employee.ProbationPeriodTime + '</mark> month(s) probation period.<br>您的试用期为<mark>' + employee.ProbationPeriodTime + '</mark>个月。'
                    )
                ),
            (employee.ProbationPeriodRequired != 'yes') &&
            $('<div class="marked" data-toggle="popover" data-placement="top" data-content="Probation Period Required"/>').append(
                $('<p/>').append(
                    'Section not applicable to employee.'
                    )
                ),
            (employee.Foreign_Exchange_Employee == 'Yes' && employee.ProbationPeriodRequired == 'yes') &&
            $('<div class="marked" data-toggle="popover" data-placement="top" data-content="FOREIGN EXCHANGE EMPLOYEES ONLY"/>').append(
                $('<p/>').append(
                    'If you are proved not qualified for any of the job description and qualifications (as illustrated in Appendix I) during the probation period, including without limitation, if you fail the Foreign Exchange professional test organized by the SAFE relating to the Company’s registration in the directory of enterprises with foreign exchange receipt and payment from trade as required in this offer letter, the Company has the right to terminate the employment with you subject to applicable laws and the terms of the employment contract.<br>如果您在试用期内被证实不符合附件一所列任何岗位描述或任职资格，包括但不限于您未通过本录用函中要求的与公司办理贸易外汇收支企业名录登记相关的外管局外汇专业考试，公司有权根据适用法律和劳动合同条款解除您的劳动关系。'
                    )
                ),
            $('<p/>').append(
                '<strong><u>7.  Social Benefit 社保福利</u></strong><br>',
                'The Company will provide you with a social benefit in line with national and local regulations and laws. You will be responsible for the personal payment.<br>公司将根据国家和地方法律法规为您缴纳社保，您将负责缴纳您的社保个人缴费部分。'
                ),
            $('<p/>').append(
                '<strong><u>8. ANTI BRIBERY AND CORRUPTION 反贿赂反腐败</u></strong><br>',
                'During your employment by the Company, you will abide by applicable anti-corruption laws, PayPal’s Code of Business Conduct & Ethics, PayPal’s Enterprise Anti-Bribery and Corruption Policy and other PayPal policies.  You may not offer, pay, or authorize a bribe or payment or benefit of any kind which may improperly influence or be perceived to improperly influence a government official, private individual, or entity.  You also may not use a third party to do so.  Should anyone, whether public official, vendor, supplier, or any other individual or entity, offer or solicit a bribe or improper payment from you, you must immediately report it to the Company.<br>在您被公司聘用期间，您将遵守适用的反腐败法律、PayPal的《商业道德行为准则》和《企业反贿赂及腐败政策》以及其他的PayPal公司政策。您不得提供、支付或授权进行任何可能不当影响，或被认为会不当影响政府官员、个人或实体的贿赂、付款或任何形式的好处。您也不得通过第三方进行以上行为。若任何人士，无论是公职人员、供应商，或任何其他个人或实体，向您提供或索要贿赂或不正当付款，您必须立刻向公司进行举报。 '
                ),
            $('<p/>').append(
                'During your employment, you must submit accurate documentation for all expenses, invoices, payments or other transactions of the Company.  You must not circumvent the internal controls of the Company or falsify any book, record, or account of the Company, either directly or by instructing someone else to do so.<br>在您的任职期间，您必须提交一切费用、报销、付款或其他和公司有关的交易的准确记录。您不得规避公司的内控流程，或者直接或指示他人篡改公司的任何文档、记录或账册。'
                ),
            $('<p/>').append(
                'You accept that failure to abide by this section shall result in disciplinary measures up to the termination of your employment.<br>您接受，违反本条款将导致最高可至解除劳动合同的纪律处分。'
                ),
            $('<p/>').append(
                '<strong><u>9. Other 其他</u></strong><br>',
                'An official employment contract will be signed by you and the Company on or after the date on which your employment with the Company starts.<br>公司将在您正式入职当日或之后与您签订正式劳动合同。'
                ),
            $('<p/>').append(
                'You guarantee that all the information and documents you have provided to the Company are true; any false information and/or documentation will result in immediate dismissal of you by the Company. In addition, you shall ensure that you have terminated or revoked all other labor relationships and do not or will not have any labor disputes with the company you worked for when you signed the employment contract with the Company. In addition, you shall ensure that you will not use any confidential information of any former employer during your employment with the Company. Violation of any of the above will result in the immediate termination of your employment.<br>您保证你向公司提供的所有信息和文件均真实；如有任何信息或资料作假，公司将立即终止您与的劳动关系。此外，与公司签署劳动合同时，您应当确保已终止或撤销与前雇主间的所有其他劳动关系，且与前雇主间目前或将来都不存在任何劳动争议。此外，您应当确保在受聘于公司期间不会使用属于任何前雇主的任何保密信息。一旦您违反任何上述规定，公司将立即终止与您的劳动关系。'
                ),
            $('<p/>').append(
                'The Company will conduct reference checks and has the right to withdraw this offer letter in light of the content of any reference check report.<br>公司将开展资历核查，并有权根据任何核查报告的内容撤销本录用函。'
                ),
            $('<p/>').append(
                'The Company may, at its sole discretion, transfer your employment to any affiliated company and arrange for you to terminate your employment with the Company and to enter into an employment contract with that affiliated company. You acknowledge and agree that you will not unreasonably withhold your consent to such transfer and the execution of any necessary documentations.<br>公司可全权决定将您转由任何关联公司聘用，并安排您终止与公司的劳动关系并与相关关联公司签订劳动合同。您认可并同意届时您不会无理拒绝该等转聘或拒绝签署必要文件。'
                ),
            $('<p/>').append(
                'The Company respects the privacy of all employees and will comply with all applicable laws regarding processing of personal information. All such personal information is processed in accordance with the PayPal Employee Privacy Statement, a copy of which has been given to you in connection with this offer letter. You acknowledge that you have reviewed and understand the Employee Privacy Statement.<br>',
                '公司尊重所有员工的隐私，并将遵守所有关于个人信息处理的适用法律。所有此类个人信息均应根据PayPal员工隐私声明进行处理，该声明的副本已与本录用函一起提供给您。您承诺您已阅读并理解员工隐私声明。'
                ),
            $('<p/>').append(
                'By signing this offer letter, you also confirm that there is not any non-compete obligation preventing or prohibiting you from joining or serving the Company now or in the future, and agree to solely bear all the consequences and liabilities of the Company if there is such obligation.<br>一旦签署本录用函，您确认不存在阻止或禁止您当前或未来加入公司或服务公司的任何竞业禁止义务，并同意即使存在上述义务，您也将独立承担一切后果和责任。'
                ),
            $('<p/>').append(
                'Yours Sincerely,<br>For and on behalf of <mark>' + employee.EnityName + '</mark>, <br><mark id="signatory-complimentary"></mark><br>Company Signatory'
                )
           

            )
        ); // END OF MARKUP ROOT

$("#markup6").html("").append(
    $('<div class="offerClause6">').append(
         $('<p/>').append(
                'Please sign below if you would like to accept the offer and please indicate your proposed start date.<br>',
                '如您接收本录用函，请在下文签字并说明您的拟入职日期。'
                )
            
        )
    );



$("#markup4").html("").append(
    $('<div class="offerClause4">').append(
        $('<p class="text-center"/>').append(
            '<strong><u>Appendix I – job description and necessary qualifications</u><br>附件一 - 岗位描述和必要任职资格</strong>'
            ),
        $('<p/>').append(
            '<mark>' + employee.Job_Description.replace(/&#10;/g, '<br/>').replace(/&#9;/g,'&nbsp;') + '</mark>'
            ),
        (employee.Foreign_Exchange_Employee == 'Yes') &&
        $('<div class="marked" data-toggle="popover" data-placement="top" data-content="FOREIGN EXCHANGE EMPLOYEES ONLY"/>').append(
            $('<p/>').append(
                'Pass the Foreign Exchange professional test organized by the State Administration of Foreign Exchange, at the time as determined by SAFE, for the Company’s registration in the directory of enterprises with foreign exchange receipt and payment from trade<br>通过由国家外汇管理局确定时间并组织的、与公司办理贸易外汇收支企业名录登记相关的外汇专业考试'
                )
            )
        )
    );

$("#markup5").html("").append(
    $('<div class="offerClause5">').append(
        $('<p/>').append(
            ' '
            )
        )
    );


$("#markup2").html("").append(

    $('<div class="offerClause2">').append(
        $('<p/>').append(
            '<strong>Accepted by/签字:</strong>'
            )
        )
    );

$("#markup3").html("").append(

    $('<div class="offerClause3">').append(
        $('<p/>').append(
            '<strong>Employer:</strong>'
            )
        )
    );

$.each(markupRoot.find('[data-toggle="popover"]'), function(k,v) {
    let id = makeid();
    $('<div/>').prop('id', id).insertBefore($(v).data('container', '#' + id));
});    
}

function fnConvertFullDateBrazil(eventDate) {

    var d = new Date(eventDate);
    console.log(d);
    var months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];


    var year = d.getFullYear(),
    month = d.getMonth(),
    n_date = d.getDate(),
    day = d.getDay();
    return parseInt(n_date) + ' de ' + months[month] + ' de ' + year;

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

$(function() {
    $("#state").val(employee.State);
    employee.State = $("#state option:selected").text();
    employee.Recruiter_Name = $("#recruiter_signature").val();

// render template
fnView();

// completed letter
if (!$("input.calendar_button").length) {
    $("#ButtonSaveAndComplete").remove();
    $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

    let arrParts = [
    [1, 'hidden_pg']
    ];
    showCompletedOfferLetter('incomplete','complete',arrParts);
}
});
