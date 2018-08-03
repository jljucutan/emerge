function fnView() {
    $("#markup").html("").append(
        // add apple img logo header
        $('<div class="row vspace offerClause"/>').append(
            $('<div class="col-lg-1 col-md-1 col-sm-4 col-xs-4 pull-right"/>').append(
                $('<img src="img/apple_logo.jpg" alt="" class="img-responsive"/>')
            )
        ),
        // add the form title
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="vspace-lg"/>').append('<strong>Employment Agreement</strong>')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('THIS AGREEMENT is made as of the ' + fnConvertFullDate($('#today').val()))
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-1 col-md-1 col-sm-4 col-xs-12"/>').append(
                'BETWEEN:'
            ),
            $('<div class="col-lg-11 col-md-11 col-sm-8 col-xs-12"/>').append(
                $('<p/>').append('Apple Canada Inc. ("Apple" or "Company"), an Ontario company having offices at 120 Bremner Boulevard, Suite 1600, Toronto, Ontario, Canada M5J 0A8')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-1 col-md-1 col-sm-4 col-xs-12"/>').append(
                'AND:'
            ),
            $('<div class="col-lg-11 col-md-11 col-sm-8 col-xs-12"/>').append(
                '<p>' +
                employee.Candidate_First_Name + ' ' + employee.Candidate_Middle_Name + ' ' + employee.Candidate_Last_Name + ' ("You" or "Employee")<br/>' +
                employee.Address_1 + '<br/>' +
                employee.City + ', ' + employee.Province + '<br/>' +
                employee.Zip + '</p>'
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('This Agreement sets forth the terms upon which Apple agrees to employ the Employee and upon which Employee agrees to be employed by Apple. For good and valuable consideration, the receipt and sufficiency of which are hereby acknowledged, the parties agree as follows:'),
                $('<h1 class="text-left"/>').append('<strong>Job Title and Job Duties</strong>')
            )
        ),
        (employee.CAC_EA_Type == 'Engineering') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('You are employed as ' + employee.Job_Title + '.'),
                $('<p/>').append(
                    'Under the general direction and supervision of Apple, as an Engineer, you shall be responsible for ' + 
                    employee.Main_Responsibility + ' at ' + 
                    ((employee.CAC_Work_location != 'Home Office') ? employee.CAC_Work_location + ' ("The Facility") ' : ' your home office in ' + employee.City + ', ' + employee.Province ) +
                    '. Specifically, your duties include, but are not limited to:'
                )
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(a)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'observation of all applicable rules, regulations and policies of Apple;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(b)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'preservation and maintenance of all Apple property in your custody, possession or control or under your direction; and\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(c)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'performance of all of the duties and responsibilities assigned to you from time to time by Apple.\n'
            )
        ),
        (employee.CAC_EA_Type == 'ASC Lead (RAS)') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('You are employed as a full-time Retail Account Specialist (RAS). Specifically, your duties include, but are not limited to:')
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(a)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'developing Apple business within the territory by building a strong, influential, collaborative business relationship with the reseller’s management and sales team;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(b)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'training the reseller’s store team members on selling Apple hardware, software, and accessories;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(c)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'delivering optimal customer service through professionalism and product knowledge;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(d)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'working with the store staff to maintain merchandising and visual standards according to Apple and reseller standards;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(e)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'timely transmission of complete and accurate reports and information pertaining to the operations of the ASC Program;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(f)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'observation of all applicable rules, regulations and policies of Apple;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(g)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'preservation and maintenance of all Apple property in your custody, possession or control or under your direction; and\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(h)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'performance of all of the duties and responsibilities assigned to you from time to time by Apple.\n'
            )
        ),
        (employee.CAC_EA_Type == 'ASC Manager') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('You are employed as an ASC Manager.'),
                $('<p/>').append('Under the general direction and supervision of Apple, as an ASC Manager, you shall be responsible for the general operation and profitable management of the ASC Program at Apple Canada. Specifically, your duties include, but are not limited to:')
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(a)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'effective management and operation of your region including recruiting, hiring, training, promotion, discipline, demotion and supervision of the ASC employees;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(b)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'development and implementation of new and existing products or store promotions;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(c)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'increasing Apple sales at stores in assigned region;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(d)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'establishing and maintaining outstanding relationship with in-store management;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(e)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'timely transmission of complete and accurate reports and information pertaining to the operations of the ASC Program;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(f)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10"/>').append(
                'observation of all applicable rules, regulations and policies of Apple;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(g)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'preservation and maintenance of all Apple property in your custody, possession or control or under your direction; and\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(h)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10"/>').append(
                'performance of all of the duties and responsibilities assigned to you from time to time by Apple.\n'
            )
        ),
        (employee.CAC_EA_Type == 'ASC Supervisor') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('You are employed as an ASC Supervisor. Specifically, your duties include, but are not limited to:')
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(a)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'growing sales of Apple-based complete solutions;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(b)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'increasing the customer base purchasing Apple products from all retailer locations in the Supervisor’s assigned territory;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(c)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'supervising and developing ASCs in multiple store locations within an assigned territory;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(d)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'establishing communication between ASCs and in-store general and regional management;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(e)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'merchandising Apple and related 3rd party products in the AppleShop, according to Apple and the retailer partner’s standards;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(f)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'timely transmission of complete and accurate reports and information pertaining to the operations of the ASC Program;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(g)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'observation of all applicable rules, regulations and policies of Apple;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(h)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'preservation and maintenance of all Apple property in your custody, possession or control or under your direction; and\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(i)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'performance of all of the duties and responsibilities assigned to you from time to time by Apple.'
            )
        ),
        (employee.CAC_EA_Type == 'ASC') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append(
                    'You are employed as a ' +
                    employee.CAC_Employee_Type + ' ' +
                    employee.Job_Title +
                    '. Specifically, your duties include, but are not limited to:'
                )
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(a)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'growing sales of Apple-based complete solutions;'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(b)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'training the reseller’s store team members on selling Apple hardware, software, and accessories;'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(c)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'developing the store’s Apple business by building a strong, influential, collaborative business relationship with the reseller’s management and sales team;'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(d)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'maintaining merchandising and visual standards according to Apple and reseller standards;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(e)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'delivering optimal customer service through professionalism and product knowledge;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(f)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'timely transmission of complete and accurate reports and information pertaining to the operations of the ASC Program;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(g)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'observation of all applicable rules, regulations and policies of Apple;\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(h)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'preservation and maintenance of all Apple property in your custody, possession or control or under your direction; and\n'
            ),
            $('<span class="col-lg-1 col-md-1 col-sm-2 col-xs-2"/>').append(
                '(i)    '
            ),
            $('<span class="col-lg-11 col-md-11 col-sm-10 col-xs-10 vspace"/>').append(
                'performance of all of the duties and responsibilities assigned to you from time to time by Apple.\n'
            )
        ),
        (employee.CAC_EA_Type == 'AHA') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('You are employed as an AppleCare At Home Advisor (“AHA”). The duties of this position include customer service and any other duties assigned to you from time to time by Apple.')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('Apple may from time to time redefine the job title, description, functions and/or responsibilities of the position without changing any rights or obligations of the parties hereto.')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="text-left"/>').append('<strong>Commencement of Employment</strong>'),
                $('<p/>').append(
                    'Your employment will begin on ' +
                    fnConvertDate(employee.Start_Date) +
                    ' and shall continue until terminated pursuant to this Agreement.'
                )
            )
        ),
        (employee.CAC_EA_Type != 'AHA') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="text-left"/>').append('<strong>Probation Period</strong>'),
                $('<p/>').append('Your employment with Apple is subject to a ninety (90) day probationary period. At any time during your probationary period, either you or Apple may terminate your employment without notice or any other obligation to the other party, except the minimum notice or pay in lieu of notice and any other entitlements required by the applicable employment standards statute.')
            )
        ),
        (employee.CAC_EA_Type == 'AHA') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="text-left"/>').append('<strong>Probation Period and Initial Training Requirements</strong>'),
                $('<p/>').append('Your employment with Apple is subject to a ninety (90) day probationary period during which time you will be trained on the essential functions and skills required for your role. You will be required to attend or take any training and exams provided by Apple and must achieve a minimum score in order to be able to continue your employment. At any time and for any reason during your probationary period, either you or Apple may terminate your employment without notice or any other obligation to the other party, except the minimum notice or pay in lieu of notice and any other entitlements required by the applicable employment standards statute.')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="text-left"/>').append('<strong>Conditional Offer of Employment</strong>'),
                $('<p/>').append('Your employment with Apple is conditional upon verification satisfactory to Apple of the information you provided to it during the job application process, the receipt of references satisfactory to Apple from those nominated by you, and the receipt of documentary evidence satisfactory to Apple of your continued right to work in Canada. It is your responsibility to maintain your legal right to work in Canada.')
            )
        ),
        (employee.CAC_EA_Type != 'Engineering' && employee.CAC_Work_Location == 'Home Office') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="text-left"/>').append('<strong>Place of Work</strong>')
            )
        ),
        (employee.CAC_EA_Type == 'Engineering' && employee.CAC_Work_Location != 'Home Office') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append(
                    'While your usual place of work is the ' +
                    employee.CAC_Work_Location +
                    ' facility, Apple may, at its sole discretion, require you to relocate to any other location within the Greater ' +
                    employee.Greater_City_Area +
                    ' area, either temporarily or permanently, without thereby breaching this Agreement or any terms of your employment.'
                )
            )
        ),
        (employee.CAC_EA_Type == 'Engineering' && employee.CAC_Work_Location == 'Home Office') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('You will be eligible to maintain a home office in accordance to Apple’s Accounting and Finance Policy. Apple may, at its sole discretion, require you to relocate to any other location within a reasonable geographic area, either temporarily or permanently, without thereby breaching this Agreement or any terms of your employment.')
            )
        ),
        (employee.CAC_EA_Type == 'ASC Lead (RAS)') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('While your usual place of work will be across multiple locations within ' +
                    employee.ASC_Region +
                    ', at a reseller store, Apple may, at its sole discretion, require you to relocate to any other reseller\’s location within a reasonable geographic area, either temporarily or permanently, without thereby breaching this Agreement or any terms of your employment.'),
                $('<p/>').append('You will be required to adhere to the workplace rules when working at any reseller\’s location where you are placed, in addition to Apple\’s workplace policies.')
            )
        ),
        (employee.CAC_EA_Type == 'ASC Manager') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('You will be eligible to maintain a home office in accordance to Apple’s Accounting and Finance Policy. Apple may, at its sole discretion, require you to relocate to any other location within a reasonable geographic area, either temporarily or permanently, without thereby breaching this Agreement or any terms of your employment.'),
                $('<p/>').append('When visiting reseller locations, you are required to adhere to the reseller workplace rules.')
            )
        ),
        (employee.CAC_EA_Type == 'AHA') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="text-left"/>').append('<strong>Place of Work; Equipment; Safety; Monitoring.</strong>'),
                $('<p/>').append('<strong>Office location.</strong> While your usual place of work is your home office location identified above, Apple may, at its sole discretion, require you to relocate to any other location within the Greater City Area, either temporarily or permanently, without thereby breaching this Agreement or any terms of your employment. On occasion you may be asked to attend meetings or training at another location, in which case you will be notified in advance and reimbursed, if necessary for related expenses in accordance with Apple’s Finance policies.'),
                $('<p/>').append('<strong>Equipment provided by Apple.</strong> To facilitate your working as an AHA, Apple will provide certain equipment for use in your home office. The equipment provided will remain the property of Apple and must be returned to Apple upon request. You agree to maintain the equipment in good working order and follow applicable Apple procedures if maintenance and repairs are required. In the event of equipment or system malfunction, you will immediately notify your manager who will decide whether replacement equipment or an alternative system should be used. You understand that use of the equipment and related systems is restricted to you and for Apple-designated work only, and not any personal use, and that no other member of your household or guests are permitted to use the equipment. Use of the equipment and related systems, as well as the data stored or accessible by means of the equipment and systems, will remain subject to Apple policies, including, but not limited to, the “Employee Use of Electronic Systems and Communications” and “Confidential Information” policies referenced in the AHA Program Guidelines. You agree to immediately return at your expense any Apple owned equipment and/or property if and when the AHA Program is discontinued or your employment with Apple is terminated.'),
                $('<p/>').append('<strong>Equipment provided by Employee.</strong> You agree to provide the necessary equipment, services and home office location as set out in the AHA Program Guidelines at your own expense, and to notify your manager immediately of any changes to such.'),
                $('<p/>').append('<strong>Safety.</strong> You understand that claims associated with the theft, loss or damage of Apple-owned equipment in your home is not covered by Apple’s insurance program and that replacement and repair expenses related to these areas will be applied to your department’s budget. You also understand that claims and costs associated with the theft, loss or damage to your personal equipment or property is your sole responsibility and that the Company assumes no responsibility for injuries you incur in your workspace during non-working hours or for injury to non-business related guests at any time. You understand and acknowledge that Apple or its designated representatives shall have right of access, on reasonable notice, to the premises to conduct safety inspections, audits or investigations.'),
                $('<p/>').append('<strong>Monitoring.</strong> You understand that Apple reserves the right to monitor your calls, e-mails, chat conversations and computer desktop while working as an AHA and that Apple will exercise this right from time to time in its sole discretion.')
            )
        ),
        (employee.CAC_Relo_Allowance.length > 0) && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1/>').append('<em>Relocation Assistance Allowance</em>'),
                $('<p/>').append('You are eligible for relocation assistance in connection with your transfer to ' +
                    employee.CAC_Work_Location + 
                    '. The approved budget for your relocation assistance is (CAD) $' + employee.CAC_Relo_Allowance +
                    '. This is the maximum total expendable amount for appropriate relocation expenses. Substitutions or cash payouts are not permitted.'),
                $('<p/>').append('Please note that in order to earn your relocation package, you must be actively employed with Apple for twelve (12) months following your start date. If you resign your employment from Apple or are terminated for cause within twelve (12) months of your start date, you may be responsible for repayment of a prorated portion of the relocation package at Apple’s sole discretion. In the event repayment is required, you agree and authorize Apple to deduct from your final pay cheque the pro rata amount owed to Apple.')
            )
        ),
        (['ASC Manager', 'ASC Lead (RAS)'].indexOf(employee.CAC_EA_Type) > -1) && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="text-left"/>').append('<strong>Business Travel</strong>'),
                $('<p/>').append('As part of your job duties, you are required to have a vehicle to travel to different reseller locations. You will only be reimbursed for travel within the geographic area that you are responsible for, as set out in this Agreement, and in accordance with Apple\'s Accounting and Finance Policy.'),
                $('<p/>').append('You may additionally be required from time to time to travel to the United States or elsewhere and will be reimbursed in accordance with Apple’s Accounting and Finance Policy for such travel. If there is any reason why you cannot operate a vehicle or travel outside Canada, you must advise us prior to hire.')
            )
        ),
        (['Engineering', 'ASC'].indexOf(employee.CAC_EA_Type) > -1) && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="text-left"/>').append('<strong>Business Travel</strong>'),
                $('<p/>').append('As part of your job duties, you may be required from time to time to travel to the United States or elsewhere and will be reimbursed in accordance with <a href="' + employee.policy_link + '" target="_blank">Apple’s Accounting and Finance Policy</a>, for such travel. If there is any reason why you cannot travel outside Canada, you must advise us prior to hire.')
            )
        ),
        (employee.CAC_Employee_Type == 'Full Time') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1/>').append('<strong>Days and Hours of Work</strong>'),
                $('<p/>').append('You are employed on a full-time basis. Your usual weekly hours are forty (40) hours per week exclusive of breaks (your “Basic Hours”). Your actual working days and hours will be determined by your manager who will notify you in advance, at the beginning of each week, what your working schedule will be for that week.'),
                $('<p/>').append('Apple reserves the right to have you work either a reasonable number of additional hours or fewer hours than your Basic Hours as its business requires. Apple may implement these changes to your hours without prior notice and without thereby breaching any term of this Agreement or your employment with Apple.')
            )
        ),
        (employee.CAC_Employee_Type == 'Part Time') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1/>').append('<strong>Days and Hours of Work</strong>'),
                $('<p/>').append(
                    'You are employed on a part time basis. Your usual weekly hours are ' +
                    employee.CAC_Weekly_Hours +
                    ' hours per week exclusive of breaks (your “Basic Hours”).'
                ),
                $('<p/>').append('Apple reserves the right to have you work either a reasonable number of additional hours or fewer hours than your Basic Hours as its business requires. Apple may implement these changes to your hours without prior notice and without thereby breaching any term of this Agreement or your employment with Apple.')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="text-left"/>').append('<strong>Compensation</strong>')
            )
        ),
        (['ASC Manager', 'ASC Lead (RAS)', 'ASC'].indexOf(employee.CAC_EA_Type) > -1) && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append(
                    'Apple shall pay you an annual salary of (CAD) $' +
                    employee.Salary_Amount +
                    ', payable every other week, one week in arrears, subject to the withholding of all applicable deductions.'
                ),
                $('<p/>').append(
                    'You will be eligible for Commissions and/or Performance Incentives according to the terms of the Incentive Compensation Plan. Your annual target variable compensation for this fiscal year is $' +
                    employee.CAC_Commission +
                    ' at 100 percent target achievement. Your total on target earnings (annual salary + target variable) is based on a job mix of ' +
                    employee.CAC_Target_Mix +
                    '. You will receive Apple Canada’s Incentive Compensation Plan document separately.'
                )
            )
        ),
        (employee.CAC_EA_Type == 'Engineering' && employee.CAC_Compensation_Type == 'Salary') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append(
                    'Apple shall pay you an annual salary of (CAD) $' +
                    employee.Salary_Amount +
                    ', payable every other week, one week in arrears, subject to the withholding of all applicable deductions.'
                )
            )
        ),
        (employee.CAC_EA_Type == 'Engineering' && employee.CAC_Compensation_Type == 'Hourly') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append(
                    'Your basic rate of pay is (CAD) $' +
                    employee.Salary_Amount +
                    ' per hour. You will be paid every two weeks, one week in arrears, less the applicable deductions.'
                ),
                $('<p/>').append('Overtime is paid in accordance with the employment standards laws of the Province in which you are employed.')
            )
        ),
        (employee.CAC_EA_Type == 'AHA') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append(
                    'Apple will pay you an hourly rate of (CAD) $' +
                    employee.Salary_Amount +
                    ', payable every other week, one week in arrears, subject to the withholding of all applicable statutory deductions.'
                ),
                $('<p/>').append('Overtime is paid in accordance with the employment standards laws of the Province in which you are employed.')
            )
        ),
        (employee.CAC_Hire_On.length > 0) && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1/>').append('<em>Hire-On Bonus</em>'),
                $('<p/>').append(
                    'You will be eligible to receive a one time hire-on bonus of (CAD) $' +
                    employee.CAC_Hire_On + 
                    ' (less deductions required by law), subject to the following terms and conditions:'
                ),
                $('<ul/>').append(
                    '<li>In order to earn the bonus you must be actively employed by Apple for twelve (12) months following your start date. Apple will advance you payment of the bonus in the next regular payroll cycle following your first thirty (30) days of active employment.</li>' +
                    '<li>Should you voluntarily terminate your employment or be terminated for cause with Apple within twelve (12) months of your start date, and thus fail to meet the conditions to earn your bonus, you will be responsible for reimbursing all or a prorated amount of the advance bonus payment at Apple’s sole discretion.</li>'
                ),
                $('<p/>').append('By your signature below, you authorize Apple to deduct any unearned bonus advance from your final paycheque.')
            )
        ),
        $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="text-left"/>').append('<strong>Benefits Program</strong>'),
                $('<p/>').append('You may be eligible to participate in various benefit plans offered by Apple from time to time, including Retirement Savings Plan, and health, life and disability insurance plans offered by Apple to its employees. You acknowledge and agree that any benefit plan in effect from time to time is subject to availability and other requirements of Apple or the applicable insurer and the written terms and conditions contained in each plan and that Apple makes no promise about your eligibility for or entitlement to benefits and will have no liability or responsibility in the event you are denied coverage.'),
                $('<h1 class="text-left"/>').append('<strong>Vacation</strong>')
            )
        ),
        (['ASC Lead (RAS)', 'ASC', 'Engineering'].indexOf(employee.CAC_EA_Type) > -1) && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('As an employee you are eligible to accrue vacation days in accordance with the employment standard legislation in the province in which you are employed. Apple\'s vacation policy may be amended or modified from time to time by Apple at its sole discretion.')
            )
        ),
        (employee.CAC_EA_Type == 'ASC Manager') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('Apple offers you fifteen (15) days of vacation per calendar year. For the current year, you will be entitled to 1.25 days per full calendar month worked, to a maximum of fifteen (15) days. Apple\'s vacation policy may be amended or modified from time to time by Apple at its sole discretion.')
            )
        ),
        (employee.CAC_EA_Type == 'AHA') && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<p/>').append('As an employee you are eligible for 120 hours of vacation per calendar year. For the current year you will be entitled to ten (10) hours per full calendar month worked to a maximum of 120 hours. You agree to plan your vacation time in advance with your manager, and you understand that Apple may impose “blackout periods” during peak business periods when vacation may not be scheduled.'),
                $('<p/>').append('Apple makes your vacation time available at the start of each year, however, should you leave the Company during that year, you acknowledge that you will be required to repay Apple for any time taken but not yet accrued, and you hereby provide consent for Apple to withhold such payment from your final pay or from any other amounts owing from Apple to you.')
            )
        ),
        (['AHA', 'Engineering'].indexOf(employee.CAC_EA_Type) > -1) && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="text-left"/>').append('<strong>Bonus</strong>'),
                $('<p/>').append('You may be eligible to participate in any of Apple’s bonus and incentive schemes in place from time to time, details of which will be provided by your manager.'),
                $('<p/>').append('All bonus and incentive schemes in which you may be eligible to participate are discretionary and may be amended or withdrawn at any time without breaching a term of this Agreement or your employment with Apple.')
            )
        ),
        (/^ASC/i.test(employee.CAC_EA_Type) == true) && $('<div class="row offerClause"/>').append(
            $('<div class="col-lg-12"/>').append(
                $('<h1 class="text-left"/>').append('<strong>Sunday/Statutory Holiday/Shift Work</strong>'),
                $('<p/>').append('You understand that your position is located within a reseller’s store and that because the reseller’s store is a retail operation, which may be open on Sundays and statutory holidays, you may be scheduled to work on Sundays and statutory holidays.'),
                $('<p/>').append('You agree that you will work on Sundays and statutory holidays if a Sunday or statutory holiday shift is assigned to you. You also acknowledge that you may be scheduled to work on different shifts (eg. morning, afternoon or evening) and that your shift schedule may change from time to time.')
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
    var ordinalDate = '';
    switch(parseInt(d.getDate()) % 10) {
        case 1: 
            ordinalDate = d.getDate() + "st";
        break;
        case 2: 
            ordinalDate = d.getDate() + "nd";
        break;
        case 3: 
            ordinalDate = d.getDate() + "rd";
        break;
        default:
            ordinalDate = d.getDate() + "th";
    }
    if (d.getDate() > 3 && d.getDate() > 21) {
        ordinalDate = d.getDate() + "th";
    }
    return ordinalDate + ' of ' +  months[d.getMonth()] + ', ' + d.getFullYear() + '.';
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

$(document).on('ready',function() {
    function _fnAssignValue(targetElement, value) {
        document.getElementById(targetElement).value = value;
        $("#" + targetElement).attr("value", value);
    }

    function fnGetName(first, middlename, last) {

       // var middle_inital = ((middlename) ? middlename.substring(0, 1) + ' ' : '');
        var fullname = first + " " + middlename + " " + last;
        return fullname;
    }

    var name = fnGetName(employee.Candidate_First_Name, employee.Candidate_Middle_Name, employee.Candidate_Last_Name);
    _fnAssignValue('Full_Name', name);

    // render template
    fnView();

    // completed letter
    if ($('#today').prop('readonly')) {
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
        showCompletedOfferLetter('incomplete', 'complete', arrParts);
        showCompletedOfferLetter('incomplete2', 'complete2', arrParts2);
        showCompletedOfferLetter('incomplete3', 'complete3', arrParts3);
    }
    else{
        makeOfferLetter('hidden_pg','offerClause');
        makeOfferLetter('hidden_pg2','offerClause2');
        makeOfferLetter('hidden_pg3','offerClause3');
        makeOfferLetter('hidden_pg4','offerClause4');
    }
});
