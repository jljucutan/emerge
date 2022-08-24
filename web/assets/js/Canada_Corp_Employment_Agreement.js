// Contrat d’Emploi | Employment Agreement

function fnView() {
    $("#markup").html("").append(
        // Company Logo
        $('<div class="col-lg-12"/>').append(
            $('<div class="offerClause"/>').append(
                $('<div id="srt_eform_logo" class="text-right"/>').html('<img src=' + company.Logo + '>')
            )
        ),

       (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<h2 class="hOne"/>').html('<strong>Contrat de travail | Employment Agreement</strong><br> ')
        ),
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') &&
            $('<h2 class="hOne"/>').html('<strong>Employment Agreement</strong><br> ')
        ),
        
        $('<div class="offerClause">').append(
            $('<p/>').html(' ')
        ),

        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('LE PRÉSENT CONTRAT est conclu en date du ' + fnDateNowFrench() + '.'),
            $('<p/>').html('ENTRE : Apple Canada Inc. (« Apple » ou la « Société »), une société de l’Ontario ayant des bureaux au 120, boulevard Bremner, bureau 1600, Toronto (Ontario) M5J 0A8, Canada'),
            $('<p/>').html('ET : ' + employee.First_Name + ', ' + employee.Last_Name + '  (« vous » ou la « Personne employée »)<br>' + employee.Address1 + '<br>' + ((employee.City!='')? employee.City + ', ':'') + ((employee.Province!='')? employee.Province :'') + '<br>' + ((employee.Zip!='')? employee.Zip :''))
        ),
        // (employee.Work_Location_Quebec == 'False') && 
        $('<div class="offerClause">').append(
            $('<p/>').html('THIS AGREEMENT is made as of the ' + fnDateNow() + '.'),
            $('<p/>').html('BETWEEN:    Apple Canada Inc. (“Apple” or “Company”), an Ontario company having offices at 120 Bremner Boulevard, Suite 1600, Toronto, Ontario, Canada M5J 0A8'),
            $('<p/>').html('AND : ' + employee.First_Name + ', ' + employee.Last_Name + ' (“You” or “Employee”)<br>' + employee.Address1 + '<br>' + ((employee.City!='')? employee.City + ', ':'') + ((employee.Province!='')? employee.Province :'') + '<br>' + ((employee.Zip!='')? employee.Zip :''))
        ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            //((employee.CAN_Work_Location_Code == 'Montreal') || (employee.CAN_Work_Location_Code == 'R207') || (employee.CAN_Work_Location_Code == 'R248') || (employee.CAN_Work_Location_Code == 'R392') || (employee.CAN_Work_Location_Code == 'R412') || (employee.CAN_Work_Location_Code == 'R512')) &&
            $('<p/>').html('Le présent contrat établit les conditions selon lesquelles Apple convient d’embaucher la Personne employée et la Personne employée accepte d’être embauchée par Apple. Moyennant une contrepartie à titre onéreux et valable dont la réception et la suffisance sont reconnues par les présentes, les parties conviennent de ce qui suit :')
            //((employee.CAN_Work_Location_Code == 'Montreal') || (employee.CAN_Work_Location_Code == 'R207') || (employee.CAN_Work_Location_Code == 'R248') || (employee.CAN_Work_Location_Code == 'R392') || (employee.CAN_Work_Location_Code == 'R412') || (employee.CAN_Work_Location_Code == 'R512')) &&
            //$('<p/>').html('Moyennant une contrepartie à titre onéreux et valable dont la réception et la suffisance sont reconnues par les présentes, les parties conviennent de ce qui suit : ')
        ),
        // (employee.Work_Location_Quebec == 'False') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('This Agreement sets forth the terms upon which Apple agrees to employ the Employee and upon which Employee agrees to be employed by Apple. For good and valuable consideration, the receipt and sufficiency of which are hereby acknowledged, the parties agree as follows:')
            //$('<p/>').html('For good and valuable consideration, the receipt and sufficiency of which are hereby acknowledged, the parties agree as follows: ')
        ),
        
        //((employee.CAN_Work_Location_Code == 'Montreal') || (employee.CAN_Work_Location_Code == 'R207') || (employee.CAN_Work_Location_Code == 'R248') || (employee.CAN_Work_Location_Code == 'R392') || (employee.CAN_Work_Location_Code == 'R412') || (employee.CAN_Work_Location_Code == 'R512')) &&
        ((employee.Work_Location_Quebec == 'True') && (employee.Canada_EA_Types_Code != 'CACRAS' && employee.Canada_EA_Types_Code != 'CACASCM' && employee.Canada_EA_Types_Code != 'ASC Sales Specialist' && employee.Canada_EA_Types_Code != 'CACASCS' && employee.Canada_EA_Types_Code != 'CACASCA' && employee.Canada_EA_Types_Code != 'CACAHA')) &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Désignation et fonctions du poste | Job Title and Job Duties</strong><br>',
                'Vous occupez le poste de ',
                 employee.Job_Title,
                 ' et relevez de ',
                 employee.Hiring_Manager,
                 ' ou de toute autre personne que la Société peut désigner à l’occasion. Vos fonctions correspondent aux responsabilités de votre poste dont nous pourrions raisonnablement vous demander de vous acquitter, y compris, sans s’y limiter :'
            ),
            //$('<p/>').html('Vous occupez le poste de ' + employee.Job_Title_Retail + ' et relevez de ' + employee.Hiring_Manager + ' ou de toute autre personne que la Société peut désigner à l’occasion.  '),
            //$('<p/>').html('Vos fonctions correspondent aux responsabilités de votre poste dont nous pourrions raisonnablement vous demander de vous acquitter, y compris, sans s’y limiter : '),
            $('<ul class="lowerAlpha"/>').append(
                $('<li/>').html('respect de l’ensemble des règles, réglementations et politiques applicables d’Apple;'),
                $('<li/>').html('préservation et entretien de l’ensemble des Biens d’Apple se trouvant en votre possession ou sous votre garde, contrôle ou direction; et'),
                $('<li/>').html('exécution de toutes les tâches et responsabilités vous étant attribuées à l’occasion par Apple.')
            ),
            $('<p/>').html(''),
            $('<p/>').html('Vous reconnaissez qu’Apple peut de temps à autre redéfinir la désignation, la description, les fonctions et/ou les responsabilités du poste, ainsi qu’y rattacher des fonctions et des responsabilités supplémentaires, sans modifier les droits et obligations des parties aux présentes et sans préavis ni autre obligation, et vous donnez à la Société le droit d’agir en ce sens. ')
        ),
        (employee.Canada_EA_Types_Code != 'CACRAS' && employee.Canada_EA_Types_Code != 'CACASCM' && employee.Canada_EA_Types_Code != 'ASC Sales Specialist' && employee.Canada_EA_Types_Code != 'CACASCS' && employee.Canada_EA_Types_Code != 'CACASCA' && employee.Canada_EA_Types_Code != 'CACAHA') &&
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').append(
                '<strong>Job Title and Job Duties</strong><br>',
                'You will be employed in the position of ',
                 employee.Job_Title,
                 ' and will report to ',
                 employee.Hiring_Manager,
                 ' or any other person that the Company may designate from time to time. Your duties will consist of those duties consistent with such position that we may reasonably request you to perform and will include, but are not limited to:'
            ),
            //$('<p/>').html('You will be employed in the position of ' + employee.Job_Title_Retail + ' and will report to ' + employee.Hiring_Manager + ' or any other person that the Company may designate from time to time.  '),
            //$('<p/>').html('Your duties will consist of those duties consistent with such position that we may reasonably request you to perform and will include, but are not limited to: '),
            $('<ul class="lowerAlpha"/>').append(
                $('<li/>').html('observation of all applicable rules, regulations and policies of Apple;'),
                $('<li/>').html('preservation and maintenance of all Apple property in your custody, possession or control or under your direction; and'),
                $('<li/>').html('performance of all of the duties and responsibilities assigned to you from time to time by Apple.')
            ),
            $('<p/>').html(''),
            $('<p/>').html('You acknowledge that Apple may from time to time redefine the job title, description, functions and/or responsibilities of the position, as well as assign further duties and responsibilities, without changing any rights or obligations of the parties hereto, without advance notice or other obligation and you consent to the Company’s right to do so.')
        ),
        (employee.Canada_EA_Types_Code == 'CACRAS') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('You are employed as a full-time Retail Account Specialist (RAS). Specifically, your duties include, but are not limited to:'),        
            $('<ul class="lowerAlpha"/>').append(
                $('<li/>').html('developing Apple business within the territory by building a strong, influential, collaborative business relationship with the reseller’s management and sales team;'),
                $('<li/>').html('training the reseller’s store team members on selling Apple hardware, software, and accessories;'),
                $('<li/>').html('delivering optimal customer service through professionalism and product knowledge;'),
                $('<li/>').html('working with the store staff to maintain merchandising and visual standards according to Apple and reseller standards;'),
                $('<li/>').html('timely transmission of complete and accurate reports and information pertaining to the operations of the ASC Program;'),
                $('<li/>').html('observation of all applicable rules, regulations and policies of Apple;'),
                $('<li/>').html('preservation and maintenance of all Apple property in your custody, possession or control or under your direction; and'),
                $('<li/>').html('performance of all of the duties and responsibilities assigned to you from time to time by Apple.')
            )
        ),
        (employee.Canada_EA_Types_Code == 'CACASCM') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('You are employed as an ASC Manager. Under the general direction and supervision of Apple, as an ASC Manager, you shall be responsible for the general operation and profitable management of the ASC Program at Apple Canada. Specifically, your duties include, but are not limited to:'),        
            $('<ul class="lowerAlpha"/>').append(
                $('<li/>').html('effective management and operation of your region including recruiting, hiring, training, promotion, discipline, demotion and supervision of the ASC employees;'),
                $('<li/>').html('development and implementation of new and existing products or store promotions;'),
                $('<li/>').html('increasing Apple sales at stores in assigned region;'),
                $('<li/>').html('establishing and maintaining outstanding relationship with in-store management;'),
                $('<li/>').html('timely transmission of complete and accurate reports and information pertaining to the operations of the ASC Program;'),
                $('<li/>').html('observation of all applicable rules, regulations and policies of Apple;'),
                $('<li/>').html('preservation and maintenance of all Apple property in your custody, possession or control or under your direction; and'),
                $('<li/>').html('performance of all of the duties and responsibilities assigned to you from time to time by Apple.')
            )
        ),
        (employee.Canada_EA_Types_Code == 'CACASCS') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('You are employed as an ASC Supervisor. Specifically, your duties include, but are not limited to:'),        
            $('<ul class="lowerAlpha"/>').append(
                $('<li/>').html('growing sales of Apple-based complete solutions;'),
                $('<li/>').html('increasing the customer base purchasing Apple products from all retailer locations in the Supervisor’s assigned territory;'),
                $('<li/>').html('supervising and developing ASCs in multiple store locations within an assigned territory;'),
                $('<li/>').html('establishing communication between ASCs and in-store general and regional management;'),
                $('<li/>').html('merchandising Apple and related 3rd party products in the AppleShop, according to Apple and the retailer partner’s standards;'),
                $('<li/>').html('timely transmission of complete and accurate reports and information pertaining to the operations of the ASC Program;'),
                $('<li/>').html('observation of all applicable rules, regulations and policies of Apple;'),
                $('<li/>').html('preservation and maintenance of all Apple property in your custody, possession or control or under your direction; and'),
                $('<li/>').html('performance of all of the duties and responsibilities assigned to you from time to time by Apple.')
            )
        ),
        (employee.Canada_EA_Types_Code == 'CACASCA') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('You are employed as a ' + employee.Canada_EA_Types_Value + ' ' + employee.Job_Title + '. Specifically, your duties include, but are not limited to:'),        
            $('<ul class="lowerAlpha"/>').append(
                $('<li/>').html('growing sales of Apple-based complete solutions;'),
                $('<li/>').html('training the reseller’s store team members on selling Apple hardware, software, and accessories;'),
                $('<li/>').html('developing the store’s Apple business by building a strong, influential, collaborative business relationship with the reseller’s management and sales team;'),
                $('<li/>').html('maintaining merchandising and visual standards according to Apple and reseller standards;'),
                $('<li/>').html('delivering optimal customer service through professionalism and product knowledge; '),
                $('<li/>').html('timely transmission of complete and accurate reports and information pertaining to the operations of the ASC Program;'),
                $('<li/>').html('observation of all applicable rules, regulations and policies of Apple;'),
                $('<li/>').html('preservation and maintenance of all Apple property in your custody, possession or control or under your direction; and'),
                $('<li/>').html('performance of all of the duties and responsibilities assigned to you from time to time by Apple.')
            )
        ),
        (employee.Canada_EA_Types_Code == 'ASC Sales Specialist') &&
        $('<div class="offerClause">').append(
            $('<p/>').html('You are employed as a ' + employee.Canada_EA_Types_Value + ' ' + employee.Job_Title + '. Specifically, your duties include, but are not limited to:'),        
            $('<ul class="lowerAlpha"/>').append(
                $('<li/>').html('growing sales of Apple-based solutions;'),
                $('<li/>').html('maintaining merchandising and visual standards according to Apple and reseller standards;'),
                $('<li/>').html('delivering optimal customer service through professionalism and product knowledge;'),
                $('<li/>').html('timely transmission of complete and accurate reports and information pertaining to the operations of the ASC Program'),
                $('<li/>').html('assist the Retail Account Specialist (RAS), who will be the primary support for the store for training, larger merchandising changes, and Masters engagement, in executing training and merchandising;'),
                $('<li/>').html('observation of all applicable rules, regulations and policies of Apple;'),
                $('<li/>').html('preservation and maintenance of all Apple property in your custody, possession or control or under your direction; and'),
                $('<li/>').html('performance of all of the duties and responsibilities assigned to you from time to time by Apple.')
            )
        ),

        $('<div class="offerClause">').append(
           (employee.Canada_EA_Types_Code == 'CACAHA') &&
           $('<p class="disNo"/>').html(''),
            (employee.Canada_EA_Types_Code == 'CACAHA') &&
            $('<span/>').html('<strong>Job Title and Job Duties</strong> '),

        (employee.Canada_EA_Types_Code == 'CACAHA') &&
            $('<p/>').html('You are employed as an AppleCare At Home Advisor (“AHA”). The duties of this position include customer service and any other duties assigned to you from time to time by Apple.'),    
        (employee.Canada_EA_Types_Code == 'CACAHA') &&    
            $('<p/>').html('Apple may from time to time redefine the job title, description, functions and/or responsibilities of the position without changing any rights or obligations of the parties hereto.')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' ')
        ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Début de l’emploi | Commencement of Employment</strong><br>',
                'Votre emploi débute le ',
                 fnConvertDateFrench(employee.Start_Date),
                 ' et se poursuivra jusqu’à sa cessation en vertu du présent contrat.'
            )
        ),
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').append(
                '<strong>Commencement of Employment</strong><br>',
                'Your employment will begin on ', 
                fnConvertDate(employee.Start_Date), 
                ' and shall continue until terminated pursuant to this Agreement.  '
            )
        ),
        ((employee.Work_Location_Quebec == 'True') && (employee.Reason_Code != 'Transfer')) &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Période d’essai | Probation Period</strong><br>',
                'Votre nouveau poste de ',
                 employee.Job_Title,
                 ' au sein d’Apple est assujetti à une période d’essai de quatre-vingt-dix (90) jours. À tout moment pendant cette période d’essai, vous ou Apple pouvez mettre fin à cet emploi sans préavis ni autre obligation envers l’autre partie, exception faite du préavis minimum ou d’une indemnité compensatrice de préavis et de tout autre bénéfice exigé en vertu des lois sur les normes du travail applicables. '
            )
        ),
        $('<div class="offerClause">').append(
            ((employee.Work_Location_Quebec == 'False') && (employee.Reason_Code != 'Transfer') && (employee.Canada_EA_Types_Code != 'CACAHA')) &&
            $('<p class="disNo"/>').html(''),
            ((employee.Work_Location_Quebec == 'False') && (employee.Reason_Code != 'Transfer') && (employee.Canada_EA_Types_Code != 'CACAHA')) &&
            $('<p/>').append(
                '<strong>Probation Period</strong><br>',
                ((employee.Reason_Code != 'Transfer') && (employee.Canada_EA_Types_Code != 'CACAHA')) &&
                'Your new role as ',
                 employee.Job_Title,
                 ' with Apple is subject to a ninety (90) day probationary period. At any time during your probationary period, either you or Apple may terminate your employment without notice or any other obligation to the other party, except the minimum notice or pay in lieu of notice and any other entitlements required by the applicable employment standards legislation.  '
            )
        ),
        $('<div class="offerClause">').append(
            ((employee.Work_Location_Quebec == 'False') && (employee.Reason_Code != 'Transfer') && (employee.Canada_EA_Types_Code == 'CACAHA')) &&
            $('<p class="disNo"/>').html(''),
            ((employee.Work_Location_Quebec == 'False') && (employee.Reason_Code != 'Transfer') && (employee.Canada_EA_Types_Code == 'CACAHA')) &&
            $('<p/>').append(
                '<strong>Probation Period and Initial Training Requirements</strong><br>',
                ((employee.Reason_Code != 'Transfer') && (employee.Canada_EA_Types_Code == 'CACAHA')) &&
                'Your employment with Apple is subject to a ninety (90) day probationary period during which time you will be trained on the essential functions and skills required for your role. You will be required to attend or take any training and exams provided by Apple and must achieve a minimum score in order to be able to continue your employment. At any time and for any reason during your probationary period, either you or Apple may terminate your employment without notice or any other obligation to the other party, except the minimum notice or pay in lieu of notice and any other entitlements required by the applicable employment standards statute.  '
            )
        ),
        ((employee.Work_Location_Quebec == 'True') && (employee.Reason_Code != 'Transfer')) &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Offre conditionnelle d’emploi | Conditional Offer of Employment</strong><br>',
                'Votre emploi au sein d’Apple est conditionnel à une vérification des renseignements que vous avez fournis lors du processus de postulation, à une vérification de vos antécédents (y compris des antécédents criminels), ainsi qu’à la réception de références fournies par les personnes désignées par vous et d’une preuve documentaire de votre droit de travailler au Canada, chacun de ces éléments devant être jugé satisfaisant par Apple. Il vous incombe de maintenir votre droit de travailler au Canada. '
            )
        ),
        $('<div class="offerClause">').append(
            ((employee.Work_Location_Quebec == 'False') && (employee.Reason_Code != 'Transfer')) &&
            $('<p class="disNo"/>').html(''),
            ((employee.Work_Location_Quebec == 'False') && (employee.Reason_Code != 'Transfer')) &&
            $('<p/>').append(
                '<strong>Conditional Offer of Employment </strong><br>',
                (employee.Reason_Code != 'Transfer') &&
                'Your employment with Apple is conditional upon verification satisfactory to Apple of the information you provided to it during the job application process, completion satisfactory to Apple of applicable background checks (including criminal background checks), the receipt of references satisfactory to Apple from those nominated by you, and the receipt of documentary evidence satisfactory to Apple of your continued right to work in Canada. It is your responsibility to maintain your legal right to work in Canada. '
            )
        ),

        
        ((employee.Work_Location_Quebec == 'True') && (employee.Canada_EA_Types_Code != 'CACAHA' && employee.Canada_EA_Types_Code != 'CACASCA') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Lieu de travail | Place of Work</strong><br>',
                'Bien que votre lieu de travail habituel soit',
                 ((employee.Canada_EA_Types_Code == 'CACRM')?' la boutique ':' '),
                 employee.CAN_Work_Location_Value,
                 ', Apple peut, à son entière discrétion, vous muter dans n’importe quel autre lieu de travail situé au Québec, à titre provisoire ou permanent, sans pour autant contrevenir au présent contrat ni à une quelconque condition de votre emploi. '
            )
        ),

//Home Office
        (employee.CAN_Work_Location_Value == 'Home Office - Quebec') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Lieu de travail | Place of Work</strong><br>',
                'Votre lieu de travail habituel sera votre bureau à domicile. Vous reconnaissez qu’il vous incombe de prendre connaissance et de respecter les conditions de la Accounting and Finance Policy d’Apple. '
            ),
            $('<p/>').html('You will be eligible to maintain a home office in accordance to Apple’s Accounting and Finance Policy. Apple may, at its sole discretion, require you to relocate to any other location within a reasonable geographic area, either temporarily or permanently, without thereby breaching this Agreement or any terms of your employment.')
        ),

//Home Office

       (employee.CAN_Work_Location_Value == 'Home Office - Non-Quebec') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Place of Work</strong><br>',
                'You will be eligible to maintain a home office in accordance to Apple’s Accounting and Finance Policy. Apple may, at its sole discretion, require you to relocate to any other location within a reasonable geographic area, either temporarily or permanently, without thereby breaching this Agreement or any terms of your employment.'
            )
        ),

        $('<div class="offerClause">').append(
            ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code != 'CACAHA') && (employee.Canada_EA_Types_Code != 'CACASCA') && (employee.Canada_EA_Types_Code != 'CACRAS') && (employee.Canada_EA_Types_Code != 'CACASCM') && (employee.Canada_EA_Types_Code != 'CACASCS') && (employee.Canada_EA_Types_Code != 'ASC Sales Specialist') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
            $('<p class="disNo"/>').html(''),
            ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code != 'CACAHA') && (employee.Canada_EA_Types_Code != 'CACASCA') && (employee.Canada_EA_Types_Code != 'CACRAS') && (employee.Canada_EA_Types_Code != 'CACASCM') && (employee.Canada_EA_Types_Code != 'CACASCS') && (employee.Canada_EA_Types_Code != 'ASC Sales Specialist') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
            $('<p/>').append(
                '<strong>Place of Work </strong><br>',
                ((employee.Canada_EA_Types_Code != 'CACAHA') && (employee.Canada_EA_Types_Code != 'CACASCA') && (employee.Canada_EA_Types_Code != 'CACRAS') && (employee.Canada_EA_Types_Code != 'CACASCM') && (employee.Canada_EA_Types_Code != 'CACASCS') && (employee.Canada_EA_Types_Code != 'ASC Sales Specialist') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
                $('<span/>').append(
                    'While your usual place of work is ',
                    employee.CAN_Work_Location_Value,
                    ', Apple may, at its sole discretion, require you to relocate to any other location within the Greater City area, either temporarily or permanently, without thereby breaching this Agreement or any terms of your employment. '
                )
            )
        ),
        $('<div class="offerClause">').append(
            ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code == 'CACRAS' || employee.Canada_EA_Types_Code == 'CACASCS') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
            $('<p class="disNo"/>').html(''),
            ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code == 'CACRAS' || employee.Canada_EA_Types_Code == 'CACASCS') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
            $('<p/>').append(
                '<strong>Place of Work </strong><br>',
                ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code == 'CACRAS' || employee.Canada_EA_Types_Code == 'CACASCS') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
                $('<span/>').html('While your usual place of work will be across multiple locations within ' + employee.ASC_Region + ', at a reseller store, Apple may, at its sole discretion, require you to relocate to any other reseller’s location within a reasonable geographic area, either temporarily or permanently, without thereby breaching this Agreement or any terms of your employment. ')
            ),
            ((employee.Canada_EA_Types_Code == 'CACRAS' || employee.Canada_EA_Types_Code == 'CACASCS') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
            $('<p/>').html('You will be required to adhere to the workplace rules when working at any reseller\’s location where you are placed, in addition to Apple\’s workplace policies.')
        ),
        $('<div class="offerClause">').append(
            ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code == 'CACASCA' || employee.Canada_EA_Types_Code == 'ASC Sales Specialist') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
            $('<p class="disNo"/>').html(''),
            ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code == 'CACASCA' || employee.Canada_EA_Types_Code == 'ASC Sales Specialist') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
            $('<p/>').append(
                '<strong>Place of Work </strong><br>',
                ((employee.Canada_EA_Types_Code == 'CACASCA' || employee.Canada_EA_Types_Code == 'ASC Sales Specialist') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
                $('<span/>').html('While your usual place of work is a reseller store location in ' + employee.ASC_Region + ', Apple may, at its sole discretion, require you to relocate to any other reseller\’s location within a reasonable geographic area, either temporarily or permanently, without thereby breaching this Agreement or any terms of your employment. ')
            ),
            ((employee.Canada_EA_Types_Code == 'CACASCA' || employee.Canada_EA_Types_Code == 'ASC Sales Specialist') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
            $('<p/>').html('You will be required to adhere to the workplace rules when working at any reseller’s location where you are placed, in addition to Apple’s workplace policies.')
        ),
        $('<div class="offerClause">').append(
            ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code == 'CACASCM') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
            $('<p class="disNo"/>').html(''),
            ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code == 'CACASCM') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
            $('<p/>').append(
                '<strong>Place of Work </strong><br>',
                ((employee.Canada_EA_Types_Code == 'CACASCM') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
                $('<span/>').html('You will be eligible to maintain a home office in accordance to Apple’s Accounting and Finance Policy. Apple may, at its sole discretion, require you to relocate to any other location within a reasonable geographic area, either temporarily or permanently, without thereby breaching this Agreement or any terms of your employment.')
            ),
            ((employee.Canada_EA_Types_Code == 'CACASCM') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
            $('<p/>').html('When visiting reseller locations, you are required to adhere to the reseller workplace rules.')
        ),
        $('<div class="offerClause">').append(
             ((employee.Canada_EA_Types_Code == 'CACAHA') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
            $('<p class="disNo"/>').html(''),
            ((employee.Canada_EA_Types_Code == 'CACAHA') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
            $('<p/>').append(
                '<strong>Place of Work; Equipment; Safety; Monitoring. </strong><br>',
                ((employee.Canada_EA_Types_Code == 'CACAHA') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
                $('<span/>').html('<strong>Office location.</strong> Your usual place of work is your home office location identified above. On occasion you may be asked to attend meetings or training at another location, in which case you will be notified in advance and reimbursed, if necessary for related expenses in accordance with Apple’s Finance policies.'),
                ((employee.Canada_EA_Types_Code == 'CACAHA') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
                $('<span/>').html('<strong>Equipment provided by Apple.</strong> To facilitate your working as an AHA, Apple will provide certain equipment for use in your home office. The equipment provided will remain the property of Apple and must be returned to Apple upon request. You agree to maintain the equipment in good working order and follow applicable Apple procedures if maintenance and repairs are required. In the event of equipment or system malfunction, you will immediately notify your manager who will decide whether replacement equipment or an alternative system should be used. You understand that use of the equipment and related systems is restricted to you and for Apple-designated work only, and not any personal use, and that no other member of your household or guests are permitted to use the equipment. Use of the equipment and related systems, as well as the data stored or accessible by means of the equipment and systems, will remain subject to Apple policies, including, but not limited to, the “Employee Use of Electronic Systems and Communications” and “Confidential Information” policies referenced in the <a href="<$link;/eprise/main/SiteGen/Contract_English/Content/Uploads/Documents/document_library/Policies_and_Guidelines/AppleCare_AHA_Program_Guidelines.pdf>" target="_blank"><u>AHA Program Guidelines</u></a>. You agree to immediately return at your expense any Apple owned equipment and/or property if and when the AHA Program is discontinued or your employment with Apple is terminated.'),
                ((employee.Canada_EA_Types_Code == 'CACAHA') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
                $('<span/>').html('<strong>Equipment provided by Employee.</strong> You agree to provide the necessary equipment, services and home office location as set out in the AHA Program Guidelines at your own expense, and to notify your manager immediately of any changes to such.'),
                ((employee.Canada_EA_Types_Code == 'CACAHA') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
                $('<span/>').html('<strong>Safety.</strong> You understand that claims associated with the theft, loss or damage of Apple-owned equipment in your home is not covered by Apple’s insurance program and that replacement and repair expenses related to these areas will be applied to your department’s budget. You also understand that claims and costs associated with the theft, loss or damage to your personal equipment or property is your sole responsibility and that the Company assumes no responsibility for injuries you incur in your workspace during non-working hours or for injury to non-business related guests at any time. You understand and acknowledge that Apple or its designated representatives shall have right of access, on reasonable notice, to the premises to conduct safety inspections, audits or investigations.'),
                ((employee.Canada_EA_Types_Code == 'CACAHA') && (employee.CAN_Work_Location_Value != 'Home Office - Quebec') && (employee.CAN_Work_Location_Value != 'Home Office - Non-Quebec')) &&
                $('<span/>').html('<strong>Monitoring.</strong> You understand that Apple reserves the right to monitor your calls, e-mails, chat conversations and computer desktop while working as an AHA and that Apple will exercise this right from time to time in its sole discretion.')
            )
        ),

        ((employee.Work_Location_Quebec == 'True') && (employee.Canada_EA_Types_Code != 'CACASCM' && employee.Canada_EA_Types_Code != 'CACRAS' && employee.Canada_EA_Types_Code != 'ASC Sales Specialist')) &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Voyages d’affaires | Business Travel</strong><br>',
                'Dans le cadre de vos fonctions, vous pourriez devoir voyager à l’occasion au Canada, aux États-Unis ou ailleurs. Le cas échéant, les dépenses encourues vous seront remboursées conformément à la politique comptable et financière applicable d’Apple. Si, pour une raison quelconque, vous ne pouvez voyager à l’extérieur du Canada, vous devez nous en aviser avant l’embauche.'
            )
        ),

        $('<div class="offerClause">').append(
            ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code != 'CACASCM' && employee.Canada_EA_Types_Code != 'CACRAS' && employee.Canada_EA_Types_Code != 'ASC Sales Specialist' && employee.Canada_EA_Types_Code != 'CACASCA')) &&
            $('<p class="disNo"/>').html(''),
            ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code != 'CACASCM' && employee.Canada_EA_Types_Code != 'CACRAS' && employee.Canada_EA_Types_Code != 'ASC Sales Specialist' && employee.Canada_EA_Types_Code != 'CACASCA')) &&
            $('<p/>').append(
                '<strong>Business Travel  </strong><br>',
                (employee.Canada_EA_Types_Code != 'CACASCM' && employee.Canada_EA_Types_Code != 'CACRAS' && employee.Canada_EA_Types_Code != 'ASC Sales Specialist' && employee.Canada_EA_Types_Code != 'CACASCA') &&
                $('<span/>').html('As part of your job duties, you may be required from time to time to travel within Canada and to the United States or elsewhere and will be reimbursed in accordance with Apple’s Accounting and Finance Policy for such travel. If there is any reason why you cannot travel outside Canada, you must advise us prior to hire. ')
            ),
        ),

        $('<div class="offerClause">').append(
            ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code == 'CACASCM' || employee.Canada_EA_Types_Code == 'CACRAS')) &&
            $('<p class="disNo"/>').html(''),
            ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code == 'CACASCM' || employee.Canada_EA_Types_Code == 'CACRAS')) &&
            $('<p/>').append(
                '<strong>Business Travel  </strong><br>',
                (employee.Canada_EA_Types_Code == 'CACASCM' || employee.Canada_EA_Types_Code == 'CACRAS') &&
                $('<span/>').html('As part of your job duties, you are required to have a vehicle to travel to different reseller locations. You will only be reimbursed for travel within the geographic area that you are responsible for, as set out in this Agreement, and in accordance with Apple\'s travel and expense policies.'),
                (employee.Canada_EA_Types_Code == 'CACASCM' || employee.Canada_EA_Types_Code == 'CACRAS') &&
                $('<span/>').html('You may additionally be required from time to time to travel to the United States or elsewhere and will be reimbursed in accordance with Apple’s travel and expense policies for such travel. If there is any reason why you cannot operate a vehicle or travel outside Canada, you must advise us prior to hire. ')
            )
        ),
        $('<div class="offerClause">').append(
            ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code == 'CACASCA' || employee.Canada_EA_Types_Code == 'ASC Sales Specialist')) &&
            $('<p class="disNo"/>').html(''),
            ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code == 'CACASCA' || employee.Canada_EA_Types_Code == 'ASC Sales Specialist')) &&
            $('<p/>').append(
                '<strong>Business Travel  </strong><br>',
                (employee.Canada_EA_Types_Code == 'CACASCA' || employee.Canada_EA_Types_Code == 'ASC Sales Specialist') &&
                $('<span/>').html('As part of your job duties, you may be required from time to time to travel to the United States or elsewhere and will be reimbursed in accordance with Apple’s travel and expense policies for such travel. If there is any reason why you cannot travel outside Canada, you must advise us prior to hire. ')
            )
        ),


//Work Permitt

        ((employee.Work_Location_Quebec == 'True') && (employee.Apple_Sponsored_Visa == 'Yes')) && 
                $('<div class="offerClause"/>').append( 
                $('<p class="disNo"/>').html(''),
                $('<p/>').append(
                        '<strong>Permis de travail | Work Permit</strong><br>',
                        $('<span/>').html('Apple se fera un plaisir de vous aider à obtenir votre permis de travail en vous donnant accès à des conseillers juridiques approuvés par Apple. Dans le cas de la cessation de votre emploi avant que votre statut soit en règle, Apple s’engage à débourser tous les frais encourus jusqu’à la date de cessation. Vous serez responsable de toutes mesures supplémentaires. Apple ne sera plus identifiée comme étant votre répondant ou votre employeur pour toutes autres démarches concernant votre statut. ' )
                    )
                ),

                $('<div class="offerClause"/>').append( 
        ((employee.Work_Location_Quebec == 'False') && (employee.Apple_Sponsored_Visa == 'Yes')) && 
            $('<p class="disNo"/>').html(''),
            ((employee.Work_Location_Quebec == 'False') && (employee.Apple_Sponsored_Visa == 'Yes')) && 
            $('<p/>').append(
                '<strong>Work Permit</strong><br>',
                (employee.Apple_Sponsored_Visa == 'Yes') && 
                $('<span/>').html('Apple would be pleased to assist you in applying for your Status by providing use of Apple approved legal counsel for that purpose. Should your employment be terminated before your Status is complete, Apple will pay for any fees incurred up to the date of termination and you will be responsible for any further action on your own. Apple will no longer be listed as a sponsor or employer for the purposes of your Status. ' )
                )
            ),


        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Jours et heures de travail | Days and Hours of Work</strong><br>',
                (employee.WD_Time_Type_Code == 'Full Time') &&
                $('<span/>').html('Vous occupez un emploi à temps plein. Vos heures de travail hebdomadaires habituelles sont de ' + (employee.FRCA_Weekly_Hours) + ' par semaine à l’exclusion des pauses (vos « Heures de base »). Vos jours et heures de travail réels sont déterminés par votre directeur ou directrice, qui vous indiquera au début de chaque semaine votre horaire pour cette semaine. Vous reconnaissez et convenez toutefois qu’en raison de vos fonctions de ' +employee.Job_Title + ', vous pourriez devoir travailler à différentes heures, selon les besoins d’affaires.'),
                (employee.WD_Time_Type_Code == 'Part Time') &&
                $('<span/>').html('Vous occupez un emploi à temps partiel. Vos heures de travail hebdomadaires habituelles sont de vingt (20) heures par semaine à l’exclusion des pauses (vos « Heures de base »). Vous reconnaissez et convenez toutefois qu’en raison de vos fonctions de ' +  employee.Job_Title + ', vous pourriez devoir travailler à différentes heures, selon les besoins d’affaire.'),
                $('<span/>').html('Apple se réserve le droit de vous demander de travailler soit un nombre raisonnable d’heures supplémentaires, soit un nombre d’heures inférieur à vos Heures de base, selon ses besoins d’affaires. Apple peut modifier ainsi vos heures sans préavis, sous réserve des lois sur les normes du travail applicables de votre province d’emploi, et sans pour autant contrevenir à une quelconque condition du présent contrat ou de votre emploi au sein d’Apple. ')
            )
        ),
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False')  &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False')  &&
            $('<p/>').append(
                '<strong>Days and Hours of Work  </strong><br>',
                (employee.WD_Time_Type_Code == 'Full Time') &&
                $('<span/>').html('You are employed on a full-time basis. Your usual weekly hours are ' + (employee.CAC_Weekly_Hours) + ' per week exclusive of breaks (your “Basic Hours”). Your actual working days and hours will be determined by your manager who will notify you in advance, at the beginning of each week, what your working schedule will be for that week. You acknowledge and agree, however, that the duties of this position ' + employee.Job_Title + ', may require you to work at different hours at various times during the day as the business may require. '),
                (employee.WD_Time_Type_Code == 'Part Time') &&
                $('<span/>').html('You are employed on a part-time basis. Your usual weekly hours are Twenty hours (20) per week exclusive of breaks (your “Basic Hours”). You acknowledge and agree, however, that the duties of ' + employee.Job_Title + ', may require you to work at different hours at various times during the day as the business may require.  '),
                $('<span/>').html('Apple reserves the right to have you work either a reasonable number of additional hours or fewer hours than your Basic Hours as its business requires. Apple may implement these changes to your hours without prior notice, except as may be required by the applicable employment standards legislation of the Province in which you are employed, and without thereby breaching any term of this Agreement or your employment with Apple. ')
            )
        ),

        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Rémunération | Compensation</strong><br>',
                (employee.CAN_Compensation_Types_Code == "CACSR") &&
                $('<span/>').html('Apple vous verse un salaire annuel de ' + fnFormatCurrency(employee.Salary_Amount) + ' $ CA, payable aux deux semaines, en paiements différés d’une semaine et assujettis à toutes les retenues applicables, conformément à ses pratiques courantes en matière de paie. Vous reconnaissez que votre salaire annuel tient lieu de rémunération pour toutes les heures travaillées et que, par conséquent, vous n’êtes pas admissible à la rémunération des heures travaillées excédant votre semaine de travail normale ou 40 heures par semaine. Vous comprenez et convenez que le nombre d’heures travaillées chaque semaine peut varier en fonction des besoins de la Société et peut, compte tenu de votre poste, dépasser quarante (40) heures par semaine.'),
                (employee.CAN_Compensation_Types_Code == "CACHR") &&
                $('<span/>').html('Votre taux horaire de base est de ' + fnFormatCurrency(employee.Salary_Amount) + ' $ CA. Vous recevez votre paie conformément aux pratiques courantes d’Apple en matière de paie, à savoir par versements aux deux semaines différés d’une semaine et assujettis à toutes les retenues applicables. Compte tenu de votre poste, vous êtes admissible à la rémunération des heures supplémentaires. Les heures travaillées au-delà de 40 heures au cours d’une semaine donnée sont rémunérées à titre d’heures supplémentaires, conformément à la Loi sur les normes du  travail du Québec. Avant de faire des heures supplémentaires, toutefois, vous devez obtenir l’approbation de votre responsable.'),
                // (employee.CAN_Compensation_Types_Code == "CACHR") &&
            // $('<p/>').html('Vous êtes admissible à des commissions et/ou à des primes de rendement conformément au régime de rémunération incitative. Vous recevrez le document sur le régime de rémunération incitative d’Apple Canada séparément. Nonobstant toute indication contraire dans le régime de rémunération incitative d’Apple Canada (le « Régime »), votre emploi au sein d’Apple doit être effectif pour que vous soyez admissible à des commissions et/ou à des primes de rendement, et aucun préavis qui a été donné ou qui aurait dû être donné ne prolonge la durée de votre emploi aux fins de la détermination de vos droits en vertu du Régime, sous réserve des lois sur les normes du travail applicables de votre province d’emploi.'),
                //((employee.CAC_Commission != '') && (employee.Canada_EA_Types_Code == 'CACASCA' && employee.Canada_EA_Types_Code == 'CACASCS' && employee.Canada_EA_Types_Code == 'CACASCM' && employee.Canada_EA_Types_Code == 'CACRAS' && employee.Canada_EA_Types_Code == 'ASC Sales Specialist')) &&
                (employee.CAC_Commission != '') && 
                $('<span/>').html('Vous êtes admissible à des commissions et/ou à des primes de rendement conformément au régime de rémunération incitative en vigueur à l’occasion. Pour l’exercice en cours, votre rémunération variable annuelle cible est de ' + fnFormatCurrency(employee.CAC_Commission) + ' $ au taux de réalisation cible de ' + employee.CAN_Target_Mix + ' . Votre revenu total cible (salaire annuel + rémunération variable cible) est basé sur une composition de la rémunération de composition (p. ex., 70/30). Vous recevrez le document sur le régime de rémunération incitative d’Apple Canada séparément. Nonobstant toute indication contraire dans le régime de rémunération incitative d’Apple Canada (le « Régime »), votre emploi au sein d’Apple doit être effectif pour que vous soyez admissible à des commissions et/ou à des primes de rendement, et aucun préavis qui a été donné ou qui aurait dû être donné ne prolonge la durée de votre emploi aux fins de la détermination de vos droits en vertu du Régime. La Société se réserve le droit de modifier son régime de rémunération incitative à tout moment, avec ou sans préavis.'),
                            //((employee.CAC_Commission != '') && (employee.Canada_EA_Types_Code == 'CACASCA' && employee.Canada_EA_Types_Code == 'CACASCS' && employee.Canada_EA_Types_Code == 'CACASCM' && employee.Canada_EA_Types_Code == 'CACRAS' && employee.Canada_EA_Types_Code == 'ASC Sales Specialist')) &&
                            (employee.CAC_Commission != '') &&
                $('<span/>').html('Vous reconnaissez et convenez que la rémunération, les paiements et les avantages prévus dans le présent contrat sont assujettis à toutes les déductions et retenues obligatoires applicables, conformément aux pratiques générales d’Apple en matière de paie.')
            )
        ),

        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').append(
                '<strong>Compensation </strong><br>',
                (employee.CAN_Compensation_Types_Code == "CACSR") &&
                $('<span/>').html('Apple shall pay you an annual salary of (CAD) $' + fnFormatCurrency(employee.Salary_Amount) + ' payable in accordance with its normal payroll practices, which currently is every other week, one week in arrears, subject to the withholding of all applicable deductions. As an exempt employee, you acknowledge that your annual salary compensates you for all hours worked and as such you will not be eligible for overtime for any hours worked in excess of the regular workweek or in excess of the overtime threshold in the Province in which you are employed. You understand and agree that the number of hours worked in a given week may vary depending on the needs of the Company, and taking into account your position, may exceed the overtime threshold in the Province in which you are employed. '),
                (employee.CAN_Compensation_Types_Code == "CACHR") &&
                $('<span/>').html('Your basic rate of pay is (CAD) $' + fnFormatCurrency(employee.Salary_Amount) + ' per hour. You will be paid in accordance with Apple’s normal payroll practices, which is currently every two weeks, one week in arrears, subject to the withholding of all applicable deductions. In your position, you are eligible for overtime. ' + ((employee.CAN_Work_Location_Code == 'Montreal') || (employee.CAN_Work_Location_Code == 'R207') || (employee.CAN_Work_Location_Code == 'R248') || (employee.CAN_Work_Location_Code == 'R392') || (employee.CAN_Work_Location_Code == 'R412') || (employee.CAN_Work_Location_Code == 'R512')?'Overtime will be paid for any time worked over 40 hours in a given week in accordance with the Quebec Act respecting Labour Standards.':'Overtime will be paid for any time worked over the overtime threshold in the Province in which you are employed.') + ' However before working any such additional time, you must first get approval from your supervisor.'),
                // ((employee.CAN_Compensation_Types_Code == "CACHR") && (employee.Canada_EA_Types_Code == 'CACRM')) &&
            // $('<p/>').html('You will be eligible for Commissions and/or Performance Incentives according to the terms of the Incentive Compensation Plan. You will receive Apple Canada’s Incentive Compensation Plan document separately. Notwithstanding anything to the contrary in the Apple Canada’s Incentive Compensation Plan (the “Plan”), you must be actively employed with Apple to receive any Commissions and/or Performance Incentives and no period of notice that was given or that ought to have been given shall extend the term of your employment for the purposes of determining any entitlements under the Plan, except as required by the applicable employment standards legislation in the Province in which you are employed. '),
                        // ((employee.CAC_Commission != '') && (employee.Canada_EA_Types_Code == 'CACASCA' && employee.Canada_EA_Types_Code == 'CACASCS' && employee.Canada_EA_Types_Code == 'CACASCM' && employee.Canada_EA_Types_Code == 'CACRAS' && employee.Canada_EA_Types_Code == 'ASC Sales Specialist')) &&
                (employee.CAC_Commission != '') && 
                $('<span/>').html('You will be eligible for Commissions and/or Performance Incentives according to the terms of the Incentive Compensation Plan in effect from time-to-time. Your annual target variable compensation for this fiscal year is $' + fnFormatCurrency(employee.CAC_Commission) + ' at ' + employee.CAN_Target_Mix + ' target achievement. Your total on target earnings (annual salary + target variable) is based on a job mix of job mix percentage (ie 70/30). You will receive Apple Canada’s Incentive Compensation Plan document separately. Notwithstanding anything to the contrary in Apple Canada’s Incentive Compensation Plan (the “Plan”), you must be actively employed with Apple to receive any Commissions and/or Performance Incentives and no period of notice that was given or that ought to have been given shall extend the term of your employment for purposes of determining any entitlements under the Plan. The Company reserves the right to amend its Incentive Compensation Plan at any time, with or without advance notice to you.'),
                (employee.CAC_Commission != '') &&
                $('<span/>').html('You acknowledge and agree that all compensation, payments and benefits provided in this agreement will be subject to all applicable statutory deductions and withholdings in a manner consistent with the general payroll practice of Apple.')
            )
        ),


        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Programmes d’avantages sociaux | Benefits Programs</strong><br>',
                $('<span/>').html('Vous pourriez être admissible à divers programmes d’avantages sociaux offerts par Apple à l’occasion, y compris au régime d’épargne-retraite ainsi qu’aux régimes d’assurance maladie, d’assurance vie et d’assurance invalidité offerts par Apple aux membres de son personnel. Vous reconnaissez et convenez que tout programme d’avantages sociaux en vigueur à l’occasion est offert sous réserve de sa disponibilité, des autres exigences d’Apple ou de l’assureur concerné, et des modalités écrites dudit programme, et qu’Apple ne garantit pas votre admissibilité ni votre droit aux avantages et n’assume aucune responsabilité si une couverture vous est refusée. La Société se réserve le droit de modifier ou d’abandonner ses programmes d’avantages sociaux à tout moment, avec ou sans préavis. ')
            )
        ),

        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False')  &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False')  &&
            $('<p/>').append(
                '<strong>Benefits Programs </strong><br>',
                $('<span/>').html('You may be eligible to participate in various benefit plans offered by Apple from time to time, including Retirement Savings Plan, and health, life and disability insurance plans offered by Apple to its employees. You acknowledge and agree that any benefit plan in effect from time to time is subject to availability and other requirements of Apple or the applicable insurer and the written terms and conditions contained in each plan and that Apple makes no promise about your eligibility for, or entitlement to, benefits and will have no liability or responsibility in the event you are denied coverage. The Company reserves the right to amend or discontinue its benefits programs at any time, with or without advance notice to you.  ')
            )
        ),

//Car Allowance

        ((employee.Work_Location_Quebec == 'False') && (employee.CAC_Car_Allowance == 'Yes')) && 
                $('<div class="offerClause"/>').append( 
                    $('<p class="disNo"/>').html(''),
                    $('<p/>').append(
                        '<strong>Allocation d’automobile | Car Allowance</strong><br>',
                        $('<span/>').html('Votre rôle vous rend admissible à une allocation d’automobile, conformément à la politique mondiale d’Apple relative au programme d’allocation d’automobile et à la politique relative au programme d’allocation d’automobile d’Apple Canada (le « programme d’allocation d’automobile »). Vous reconnaissez qu’il vous incombe de prendre connaissance et de respecter les conditions du programme d’allocation d’automobile. Si vous participez au programme d’allocation d’automobile, vous confirmez plus particulièrement que vous répondez à toutes les exigences du programme, notamment que vous êtes titulaire d’un permis de conduire valide et que vous respectez toutes les lois fédérales et provinciales quant à l’utilisation d’un véhicule automobile. Vous confirmez également que vous signalerez immédiatement à votre directeur ainsi qu’au service des finances tout changement éventuel à votre admissibilité. Si vous cessez d’être admissible au programme d’allocation d’automobile (p. ex. si les exigences relatives au véhicule ou aux assurances, le statut de votre permis de conduire ou de votre emploi, ou encore votre emploi, votre rôle ou vos responsabilités changent), votre participation au programme prendra fin. ' )
                    )
                ),

                $('<div class="offerClause"/>').append( 
                ((employee.Work_Location_Quebec == 'False') && (employee.CAC_Car_Allowance == 'Yes')) && 
                $('<p class="disNo"/>').html(''),
                ((employee.Work_Location_Quebec == 'False') && (employee.CAC_Car_Allowance == 'Yes')) &&
                $('<p/>').append(
                    '<strong>Car Allowance</strong><br>',
                    (employee.CAC_Car_Allowance == 'Yes') && 
                    $('<span/>').html('Your role is eligible for a car allowance in accordance with Apple’s Global Car Program Policy and <a href="<$link;/eprise/main/SiteGen/Contract_English/Content/Uploads/Unplaced_Documents/CAC_Car_Program_Policy.pdf>" target="_blank"><u>Apple Canada’s Car Program Policy</u></a> ("Car Program"). You acknowledge that you are responsible for reviewing and abiding by the terms of the Car Program. You specifically confirm that if you participate in the Car Program you meet all the requirements of the Car Program including holding a valid driver’s license, abiding by all federal and provincial laws surrounding operating an automotive vehicle, and reporting immediately to your manager and Finance if there are any changes to your eligibility. If you are no longer eligible for the Car Program (e.g. vehicle and/or insurance requirements, driver license status, employment status, job/role/responsibility change), your participation in the program will be terminated.' )
                )
                ),


        ((employee.Work_Location_Quebec == 'True') && (employee.Canada_EA_Types_Code != "CACAHA")) &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Vacances | Vacation</strong><br>',
                (employee.WD_Time_Type_Code == 'Full Time') && 
                $('<span/>').html('À titre de membre du personnel, vous pouvez accumuler des jours de vacances et une indemnité de vacances conformément aux politiques d’Apple. La politique de vacances d’Apple peut être modifiée à l’occasion par Apple à son entière discrétion. Toutefois, en aucun cas le nombre de jours de vacances auquel vous avez droit ne peut être inférieur au minimum prévu par la Loi sur les normes du travail du Québec. '),
                (employee.WD_Time_Type_Code == 'Part Time') && 
                $('<span/>').html('L’indemnité de vacances est indiquée sur chaque bordereau de paie conformément aux dispositions applicables de la Loi sur les normes du travail du Québec.  ')
            )
        ),
        $('<div class="offerClause">').append(
            ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code != "CACAHA")) &&
            $('<p class="disNo"/>').html(''),
            ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code != "CACAHA")) &&
            $('<p/>').append(
                '<strong>Vacation </strong><br>',
                ((employee.Canada_EA_Types_Code != "CACAHA") && (employee.WD_Time_Type_Code == 'Full Time')) &&
                $('<p/>').html('As an employee, you are eligible to accrue vacation days and vacation pay in accordance with Apple’s policies. Apple’s vacation policy may be amended or modified from time to time by Apple at its sole discretion. At no time, however, shall you be entitled to less than the applicable requirements of the ' + ((employee.Work_Location_Quebec == 'True')?'Quebec Act respecting Labour Standards':'employment standards legislation in the Province in which you are employed') + '. '),
                ((employee.Canada_EA_Types_Code != "CACAHA") && (employee.WD_Time_Type_Code == 'Part Time')) &&
                $('<p/>').html('Vacation pay will be added to each paycheque in accordance with the applicable requirements of the ' + ((employee.CAN_Work_Location_Code == 'Montreal') || (employee.CAN_Work_Location_Code == 'R207') || (employee.CAN_Work_Location_Code == 'R248') || (employee.CAN_Work_Location_Code == 'R392') || (employee.CAN_Work_Location_Code == 'R412') || (employee.CAN_Work_Location_Code == 'R512')?'Quebec Act respecting Labour Standards':'employment standards legislation in the Province in which you are employed') + '. ')
            )
        ),
        $('<div class="offerClause">').append(
            ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code == "CACAHA")) &&
            $('<p class="disNo"/>').html(''),
            ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code == "CACAHA")) &&
            $('<p/>').append(
                '<strong>Vacation </strong><br>',
                (employee.Canada_EA_Types_Code == "CACAHA") &&
                $('<span/>').html('As an employee you are eligible for 120 hours of vacation per calendar year. For the current year you will be entitled to ten (10) hours per full calendar month worked to a maximum of 120 hours. You agree to plan your vacation time in advance with your manager, and you understand that Apple may impose “blackout periods” during peak business periods when vacation may not be scheduled. '),
                (employee.Canada_EA_Types_Code == "CACAHA") &&
                $('<span/>').html('Apple makes your vacation time available at the start of each year, however, should you leave the Company during that year, you acknowledge that you will be required to repay Apple for any time taken but not yet accrued, and you hereby provide consent for Apple to withhold such payment from your final pay or from any other amounts owing from Apple to you. ')
            )
        ),

        (employee.Work_Location_Quebec == 'True') && 
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Primes | Bonus </strong><br>',
                $('<span/>').html('Vous pourriez être admissible à un ou plusieurs des programmes de primes et d’incitatifs d’Apple en vigueur à l’occasion, au sujet desquels votre directeur ou directrice vous renseignera. ')
            )
        ),
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') && 
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False') && 
            $('<p/>').append(
                '<strong>Bonus </strong><br>',
                $('<span/>').html('You may be eligible to participate in any of Apple’s bonus and incentive schemes in place from time to time, details of which will be provided by your manager. ')
            )
        ),
        
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            ((employee.Annual_Bonus_Cat == 'Discretionary Bonus') && (employee.Job_Level_Code =='SUP' || employee.Job_Level_Code =='SUP2' || employee.Job_Level_Code =='IC3' || employee.Job_Level_Code =='ICT3')) &&
            $('<p/>').html('De plus, vous pourriez être admissible à une prime discrétionnaire en fonction de votre rendement et de la performance globale d’Apple.'),
            ((employee.Annual_Bonus_Cat == 'Discretionary Bonus') && (employee.Job_Level_Code =='MGR1' || employee.Job_Level_Code =='IC4' || employee.Job_Level_Code =='ICT4') && (employee.Reason_Code != 'Transfer')) &&
            $('<p/>').html('De plus, vous pourrez être admissible à une prime annuelle totalisant jusqu’à 10 % de votre salaire de base. Les primes sont discrétionnaires et accordées en fonction de votre rendement, de la performance globale d’Apple et du moment de l’exercice où votre embauche a eu lieu. Par conséquent, la prime accordée au cours de la première année d’emploi représente généralement de 5 % à 10 % du salaire de base.'),
            ((employee.Annual_Bonus_Cat == 'Discretionary Bonus') && (employee.Job_Level_Code =='MGR2' || employee.Job_Level_Code =='IC5' || employee.Job_Level_Code =='ICT5') && (employee.Reason_Code != 'Transfer')) &&
            $('<p/>').html('De plus, vous pourrez être admissible à une prime annuelle totalisant jusqu’à 15 % de votre salaire de base. Les primes sont discrétionnaires et accordées en fonction de votre rendement, de la performance globale d’Apple et du moment de l’exercice où votre embauche a eu lieu. Par conséquent, la prime accordée au cours de la première année d’emploi représente généralement de 5 % à 15 % du salaire de base.'),
            ((employee.Annual_Bonus_Cat == 'Discretionary Bonus') && (employee.Job_Level_Code =='MGR3' || employee.Job_Level_Code =='IC6' || employee.Job_Level_Code =='ICT6') && (employee.Reason_Code != 'Transfer')) &&
            $('<p/>').html('De plus, vous pourrez être admissible à une prime annuelle totalisant jusqu’à 20 % de votre salaire de base. Les primes sont discrétionnaires et accordées en fonction de votre rendement, de la performance globale d’Apple et du moment de l’exercice où vous avez pris vos fonctions. Par conséquent, la prime accordée au cours de la première année d’emploi représente généralement de 10 % à 20 % du salaire de base.'),

            $('<p/>').html('Tous les programmes de primes et d’incitatifs auxquels vous pourriez être admissible sont discrétionnaires et peuvent être modifiés ou abandonnés à tout moment, sans qu’il y ait contravention à une condition du présent contrat ou de votre emploi au sein d’Apple. Pour que vous soyez admissible à une prime ou à un programme incitatif, votre emploi doit être effectif à la date de versement de la prime ou de la rémunération incitative. Aux fins du présent contrat, on ne considère plus votre emploi comme effectif à compter de la date de réception d’un avis écrit de cessation d’emploi ou de la date de remise d’un avis de démission, sauf si la Loi sur les normes du travail prévoit expressément un préavis plus important. Le cas échéant, votre emploi cesse d’être effectif à la fin de la période minimale prescrite par cette loi. Autrement dit, la période d’emploi effectif n’inclut pas tout préavis de cessation d’emploi prévu par contrat, par la common law ou autrement, sous réserve de la Loi sur les normes du travail.')
        ),

        $('<div class="offerClause">').append(
            ((employee.Annual_Bonus_Cat == 'Discretionary Bonus') && (employee.Job_Level_Code =='SUP' || employee.Job_Level_Code =='SUP2' || employee.Job_Level_Code =='IC3' || employee.Job_Level_Code =='ICT3')) &&
            $('<p/>').html('Additionally you may be eligible to receive a discretionary bonus based on your individual performance and Apple’s overall performance.'),
            ((employee.Annual_Bonus_Cat == 'Discretionary Bonus') && (employee.Job_Level_Code =='MGR1' || employee.Job_Level_Code =='IC4' || employee.Job_Level_Code =='ICT4') && (employee.Reason_Code != 'Transfer')) &&
            $('<p/>').html('Additionally you will be eligible to receive an annual cash bonus with a target bonus amount up to 10% of your base salary. Bonuses are discretionary and awarded based on your individual performance, Apple’s overall performance, and when your employment begins during the fiscal year. As a result, bonuses awarded in the first year of employment typically range between up to 5% and 10% of the base salary.'),
            ((employee.Annual_Bonus_Cat == 'Discretionary Bonus') && (employee.Job_Level_Code =='MGR2' || employee.Job_Level_Code =='IC5' || employee.Job_Level_Code =='ICT5') && (employee.Reason_Code != 'Transfer')) &&
            $('<p/>').html('Additionally you will be eligible to receive an annual cash bonus with a target bonus amount up to 15% of your base salary. Bonuses are discretionary and awarded based on your individual performance, Apple’s overall performance, and when your employment begins during the fiscal year. As a result, bonuses awarded in the first year of employment typically range between up to 5% and 15% of the base salary.'),
            ((employee.Annual_Bonus_Cat == 'Discretionary Bonus') && (employee.Job_Level_Code =='MGR3' || employee.Job_Level_Code =='IC6' || employee.Job_Level_Code =='ICT6') && (employee.Reason_Code != 'Transfer')) &&
            $('<p/>').html('Additionally you will be eligible to receive an annual cash bonus with a target bonus amount up to 20% of your base salary. Bonuses are discretionary and awarded based on your individual performance, Apple’s overall performance, and when your employment begins during the fiscal year. As a result, bonuses awarded in the first year of employment typically range between up to 10% and 20% of the base salary.'),

            $('<p/>').html('All bonus and incentive schemes in which you may be eligible to participate are discretionary and may be amended or withdrawn at any time without breaching a term of this Agreement or your employment with Apple. In order to be eligible to receive a bonus or participate in an incentive scheme, you must be actively employed on the date that the bonus or other incentive is paid. For the purposes of this Agreement, you are no longer considered actively employed as of the date you receive written notice of termination or provide notice of resignation except where any greater period is expressly required by the employment standards legislation of the Province in which you are employed, in which case being actively employed ceases following the minimum prescribed period under that legislation. For greater clarity, active employment does not include any period of notice that arises upon termination of employment, whether by contract, common law or otherwise, except where the applicable employment standards legislation requires otherwise.')
        ),

// Regular hire on bonus
        
        ((employee.Work_Location_Quebec == 'True') && (employee.Bonus != '')  && (employee.Second_Bonus == '')) &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Prime d’embauche | Hire-On Bonus</strong><br>',
                ((employee.Bonus != '')  && (employee.Second_Bonus == '')) &&
                $('<span/>').html('Vous êtes admissible à une prime d’embauche unique de ' + fnFormatCurrency(employee.Bonus) + '  $ CA (moins les déductions prévues par la loi), sous réserve des conditions suivantes :')
            ),
            ((employee.Bonus != '')  && (employee.Second_Bonus == '')) &&
            $('<ul/>').append(
                $('<li/>').html('Pour que vous soyez admissible à la prime, votre emploi au sein d’Apple doit demeurer effectif durant les douze (12) mois suivant votre date d’entrée en service. Apple vous fera un paiement anticipé de la prime au cours du cycle de paie suivant vos trente (30) premiers jours d’emploi effectif.'),
                $('<li/>').html('Si vous démissionnez ou faites l’objet d’un licenciement motivé par Apple dans les douze (12) mois suivant le début de votre emploi et que, par conséquent, vous ne répondez pas aux conditions de la prime, vous devez rembourser le paiement anticipé, en totalité ou au prorata, à la seule discrétion d’Apple.')
            ),
            ((employee.Bonus != '')  && (employee.Second_Bonus == '')) &&
            $('<p/>').html('En apposant votre signature ci-dessous, vous autorisez Apple à déduire de votre dernière paie toute prime non acquise ayant fait l’objet d’un paiement anticipé. '),
            ((employee.Bonus != '')  && (employee.Second_Bonus == '')) &&
            $('<p/>').html('Aux fins du présent contrat, le terme « emploi effectif » désigne le fait de vous acquitter de vos fonctions en continu et sans interruption, et exclut toute absence (exception faite des vacances et des congés autorisés), tout préavis de cessation d’emploi ou de démission ainsi que toute indemnité compensatrice de préavis. '),
            ((employee.Bonus != '')  && (employee.Second_Bonus == '')) &&
            $('<p/>').html('La prime d’embauche ne fait pas partie de votre rémunération standard et n’est pas considérée dans le calcul du droit aux vacances, des avantages sociaux, du préavis de cessation d’emploi, de l’indemnité compensatrice de préavis ou de tout autre paiement prévu par le présent contrat ou par une loi ou un contrat applicable.')
        ),

        $('<div class="offerClause">').append(
            ((employee.Work_Location_Quebec == 'False') && (employee.Bonus != '')  && (employee.Second_Bonus == '')) &&
            $('<p class="disNo"/>').html(''),
            ((employee.Work_Location_Quebec == 'False') && (employee.Bonus != '')  && (employee.Second_Bonus == '')) &&
            $('<p/>').append(
                '<strong>Hire-On Bonus</strong><br>',
                ((employee.Bonus != '')  && (employee.Second_Bonus == '')) &&
                $('<span/>').html('You will be eligible to receive a one time hire-on bonus of (CAD) $' + fnFormatCurrency(employee.Bonus) + ' (less deductions required by law), subject to the following terms and conditions:'),
            ),
            ((employee.Bonus != '')  && (employee.Second_Bonus == '')) &&
            $('<ul/>').append(
                $('<li/>').html('In order to earn the bonus you must be actively employed by Apple for twelve (12) months following your start date. Apple will advance you payment of the bonus in the next regular payroll cycle following your first thirty (30) days of active employment.'),
                $('<li/>').html('Should you voluntarily terminate your employment or be terminated for cause with Apple within twelve (12) months of your start date, and thus fail to meet the conditions to earn your bonus, you will be responsible for reimbursing all or a prorated amount of the advance bonus payment at Apple’s sole discretion.')
            ),
            ((employee.Bonus != '')  && (employee.Second_Bonus == '')) &&
            $('<p/>').html('By your signature below, you authorize Apple to deduct any unearned bonus advance from your final paycheque.'),
            ((employee.Bonus != '')  && (employee.Second_Bonus == '')) &&
            $('<p/>').html('For the purposes of this Agreement, “actively employed” means actively performing your duties continuously and without interruption and excludes any period of leave (except for authorized vacation or authorized leave of absence), any period of notice of termination, any period of notice of resignation or payment in lieu of notice.  '),
            ((employee.Bonus != '')  && (employee.Second_Bonus == '')) &&
            $('<p/>').html('This sign-on bonus will not form part of your standard compensation and will not be considered for the purpose of calculating any entitlements to vacation, benefits, notice of termination or payment in lieu of notice or any other payments provided under this Agreement or required by any applicable law or contract.')
        ),


// Hire-On bonus for 2 year split

        ((employee.Work_Location_Quebec == 'True') && (employee.Bonus != '') && (employee.Second_Bonus != '')) &&
        $('<div class="offerClause">').append(
             $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Prime d’embauche | Hire-On Bonus</strong><br>',
                ((employee.Bonus != '') && (employee.Second_Bonus != '')) &&
                $('<span/>').html('Vous êtes admissible à une prime d’embauche de ' + fnFormatCurrency(employee.Bonus) + ' $ CA (moins les déductions prévues par la loi), sous réserve des conditions suivantes.'),
                ((employee.Bonus != '') && (employee.Second_Bonus != '')) &&
                $('<span/>').html('Pour vous prévaloir de la prime, votre emploi au sein d’Apple doit demeurer effectif durant les 12 mois suivant votre date d’entrée en service. Apple vous versera la prime par anticipation au cours du cycle de paie suivant vos 30 premiers jours d’emploi effectif. Si toutefois vous démissionnez dans les 12 mois suivant le début de votre emploi et que, par conséquent, vous ne remplissez pas les conditions de la prime, vous devrez rembourser le paiement anticipé en totalité ou en partie, à la seule discrétion d’Apple. '),
                ((employee.Bonus != '') && (employee.Second_Bonus != '')) &&
                $('<span/>').html('Vous êtes également admissible à une deuxième prime de ' + fnFormatCurrency(employee.Second_Bonus) + ' $ CA (moins les déductions prévues par la loi), sous réserve des conditions suivantes. Pour vous prévaloir de cette seconde prime, votre emploi au sein d’Apple doit demeurer effectif durant les 24 mois suivant votre date d’entrée en service. Apple vous versera la prime par anticipation au cours du cycle de paie suivant vos 12 premiers mois d’emploi effectif. Si toutefois vous démissionnez dans les 24 mois suivant le début de votre emploi et que, par conséquent, vous ne remplissez pas les conditions de la prime, vous devrez rembourser le paiement anticipé en totalité ou en partie, à la seule discrétion d’Apple.'),
                ((employee.Bonus != '') && (employee.Second_Bonus != '')) &&
                $('<span/>').html('En apposant votre signature ci-dessous, vous autorisez Apple à déduire de votre dernière paie un montant correspondant aux versements anticipés de toute prime non acquise.')
            )
        ),

        $('<div class="offerClause">').append(
            ((employee.Work_Location_Quebec == 'False') && (employee.Bonus != '') && (employee.Second_Bonus != '')) &&
            $('<p class="disNo"/>').html(''),
            ((employee.Work_Location_Quebec == 'False') && (employee.Bonus != '') && (employee.Second_Bonus != '')) &&
            $('<p/>').append(
                '<strong>Hire-On Bonus</strong><br>',
                ((employee.Bonus != '') && (employee.Second_Bonus != '')) &&
                $('<span/>').html('You will be eligible to receive a hire-on bonus of (CAD) $' + fnFormatCurrency(employee.Bonus) + ' (less deductions required by law), subject to the following terms and conditions:'),
                ((employee.Bonus != '') && (employee.Second_Bonus != '')) &&
                $('<span/>').html('In order to earn the bonus you must be actively employed by Apple for 12 months following your start date. Apple will advance you payment of the bonus in the next regular payroll cycle following your first 30 days of active employment. However, should you voluntarily terminate your employment with Apple within 12 months of your start date, and thus fail to meet the conditions to earn your bonus, you will be responsible for reimbursing all or part of the advance bonus payment at Apple’s sole discretion.'),
                ((employee.Bonus != '') && (employee.Second_Bonus != '')) &&
                $('<span/>').html('You will additionally be eligible to receive a second bonus of (CAD) $' + fnFormatCurrency(employee.Second_Bonus) + ' (less deductions required by law), subject to the following terms and conditions. In order to earn the second bonus you must be actively employed by Apple for 24 months following your start date. Apple will advance you payment of the bonus in the next regular payroll cycle following your first 12 months of active employment. However, should you voluntarily terminate your employment with Apple within 24 months of your start date, and thus fail to meet the conditions to earn your bonus, you will be responsible for reimbursing all or part of the advance bonus payment at Apple’s sole discretion. '),
                ((employee.Bonus != '') && (employee.Second_Bonus != '')) &&
                $('<span/>').html('By your signature below, you authorize Apple to deduct any unearned bonus advances from your final paycheque. ')
            )
        ),

// Marketing Manager bonus


        ((employee.Work_Location_Quebec == 'True') && (employee.CAC_Bonus1 != '')) &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Régime de primes des responsables marketing | Marketing Manager Bonus Plan</strong><br>',
                (employee.CAC_Bonus1 == 'Marketing Mgr 1- 5%') &&
                $('<span/>').html('Vous êtes admissible au régime de primes des directeurs du marketing (« régime ») pour cet exercice. Le régime offre des primes variables calculées selon l’atteinte des objectifs de revenus et de bénéfices d’exploitation. Si les objectifs définis d’un trimestre sont atteints, votre prime pourrait s’élever à 5 % de votre salaire de base trimestriel. L’admissibilité et la participation sont assujetties aux conditions stipulées dans le régime. Veuillez consulter le document concernant le régime, qui vous sera envoyé séparément, pour en savoir davantage sur les critères d’admissibilité.'),
                (employee.CAC_Bonus1 == 'Marketing Mgr 2- 10%') &&
                $('<span/>').html('Vous êtes admissible au régime de primes des directeurs du marketing (« régime ») pour cet exercice. Le régime offre des primes variables calculées selon l’atteinte des objectifs de revenus et de bénéfices d’exploitation. Si les objectifs définis d’un trimestre sont atteints, votre prime pourrait s’élever à 10 % de votre salaire de base trimestriel. L’admissibilité et la participation sont assujetties aux conditions stipulées dans le régime. Veuillez consulter le document concernant le régime, qui vous sera envoyé séparément, pour en savoir davantage sur les critères d’admissibilité. '),
                (employee.CAC_Bonus1 == 'Marketing Mgr 3- 15%') &&
                $('<span/>').html('Vous êtes admissible au régime de primes des directeurs du marketing (« régime ») pour cet exercice. Le régime offre des primes variables calculées selon l’atteinte des objectifs de revenus et de bénéfices d’exploitation. Si les objectifs définis d’un trimestre sont atteints, votre prime pourrait s’élever à 15 % de votre salaire de base trimestriel. L’admissibilité et la participation sont assujetties aux conditions stipulées dans le régime. Veuillez consulter le document concernant le régime, qui vous sera envoyé séparément, pour en savoir davantage sur les critères d’admissibilité.')
            )
        ),

        $('<div class="offerClause">').append(
        ((employee.Work_Location_Quebec == 'False') && (employee.CAC_Bonus1 != '')) &&
            $('<p class="disNo"/>').html(''), 
            ((employee.Work_Location_Quebec == 'False') && (employee.CAC_Bonus1 != '')) &&
            $('<p/>').append(
                '<strong>Marketing Manager Bonus Plan</strong><br>',
                (employee.CAC_Bonus1 == 'Marketing Mgr 1- 5%') &&
                $('<span/>').html('You are eligible for participation in this year’s Marketing Manager Bonus Plan (“Plan”). The Plan provides for varying levels of payout based on revenue achievement and operating profit achievement. If specific quarterly performance targets are achieved, your bonus may range up to 5% of your quarterly base salary. Eligibility and participation is subject to the written terms and conditions contained in the Plan. Please review the Plan document, which will be sent to you separately, for more specific details including eligibility criteria.'),
                (employee.CAC_Bonus1 == 'Marketing Mgr 2- 10%') &&
                $('<span/>').html('You are eligible for participation in this year’s Marketing Manager Bonus Plan (“Plan”). The Plan provides for varying levels of payout based on revenue achievement and operating profit achievement. If specific quarterly performance targets are achieved, your bonus may range up to 10% of your quarterly base salary. Eligibility and participation is subject to the written terms and conditions contained in the Plan. Please review the Plan document, which will be sent to you separately, for more specific details including eligibility criteria. '),
                (employee.CAC_Bonus1 == 'Marketing Mgr 3- 15%') &&
                $('<span/>').html('You are eligible for participation in this year’s Marketing Manager Bonus Plan (“Plan”). The Plan provides for varying levels of payout based on revenue achievement and operating profit achievement. If specific quarterly performance targets are achieved, your bonus may range up to 15% of your quarterly base salary. Eligibility and participation is subject to the written terms and conditions contained in the Plan. Please review the Plan document, which will be sent to you separately, for more specific details including eligibility criteria.')
            )
        ),


// end of bonus clauses 



        ((employee.Work_Location_Quebec == 'True') && (employee.CAN_Relocation != 'No')) &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Programme de réinstallation | Relocation Package</strong><br>',
                (employee.Work_Location_Quebec == 'True') &&
                $('<span/>').html('Les détails de vos indemnités de déménagement sont décrits dans un accord de déménagement séparé.')
            )
        ),
        
        ((employee.Work_Location_Quebec == 'False') && (employee.CAN_Relocation != 'No')) &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Relocation Package</strong><br>',
                (employee.Work_Location_Quebec == 'False') && 
                $('<p/>').html('The details of your relocation benefits are described in a separate relocation agreement.')
            )
        ),


        ((employee.Work_Location_Quebec == 'True') && (employee.Canada_EA_Types_Code == 'CACRM')) &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
        ((employee.Work_Location_Quebec == 'True') && (employee.Canada_EA_Types_Code == 'CACRM')) &&
            $('<p/>').append(
                '<strong>Travail de fin de semaine, jours fériés et quarts de travail | Saturday-Sunday work/Statutory Holiday/Shift Work </strong><br>',
        ((employee.Work_Location_Quebec == 'True') && (employee.Canada_EA_Types_Code == 'CACRM')) &&
            $('<span/>').html('Vous comprenez que votre poste est affecté à la division de la vente au détail d’Apple et que, la boutique étant un commerce de détail ouvert le samedi, le dimanche et les jours fériés, vous pourriez devoir travailler la fin de semaine ou un jour férié. Vous convenez de faire vos quarts de travail prévus la fin de semaine ou un jour férié et de ne pas y opposer de refus. '),
        ((employee.Work_Location_Quebec == 'True') && (employee.Canada_EA_Types_Code == 'CACRM')) &&
            $('<span/>').html('De plus, vous reconnaissez que vos quarts de travail pourraient différer (p. ex., l’avant-midi, l’après-midi ou le soir) et changer à l’occasion.')
            )
        ),
        
        $('<div class="offerClause">').append(
        ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code == 'CACRM')) &&
            $('<p class="disNo"/>').html(''),
            ((employee.Work_Location_Quebec == 'False') && (employee.Canada_EA_Types_Code == 'CACRM')) &&
            $('<p/>').append(
                '<strong>Saturday-Sunday work/Statutory Holiday/Shift Work</strong><br>',
                (employee.Canada_EA_Types_Code == 'CACRM') &&
                $('<span/>').html('You understand that your position is with Apple’s Retail division and that because the Store is a retail operation, which is open on Saturday, Sundays and statutory holidays, you may be scheduled to work on weekends and statutory holidays. ' + ((employee.Work_Location_Quebec == 'True')?'You':'In accordance the employment standards legislation in the Province in which are employed, you') + ' agree that you will work on weekends and statutory holidays if a weekend or statutory holiday shift is assigned to you and you will not refuse to do so. '),
                (employee.Canada_EA_Types_Code == 'CACRM') &&
                $('<span/>').html('You also acknowledge that you may be scheduled to work on different shifts (eg. morning, afternoon or evening) and that your shift schedule may change from time to time.  ')
            )
        ),



        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Absence et maladie | Absence and Sickness</strong><br>',
                $('<span/>').html('Si vous n’êtes pas en mesure de vous présenter au travail pour une raison quelconque, vous devez aviser Apple et suivre ses politiques et procédures standards en matière d’absence et de maladie.')
            )
        ),
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').append(
                '<strong>Absence and Sickness</strong><br>',
                $('<span/>').html('If you are unable to attend work for any reason you must provide notice to Apple and otherwise follow Apple’s standard policies and procedures with respect to absences and sickness. ')
            )
        ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Service auprès d’Apple | Service to Apple</strong><br>',
                $('<span/>').html('Pendant la durée de votre emploi au sein d’Apple, vous respectez en tous points les directives et politiques d’Apple, notamment son Code de déontologie, joint à l’annexe A, et toute autre politique d’emploi standard d’Apple fournie au personnel d’Apple ou mise à sa disposition, effectuez toutes les tâches qui vous sont à l’occasion attribuées par Apple au mieux de vos compétences et aptitudes, servez Apple avec loyauté et diligence, faites de votre mieux pour favoriser les intérêts d’Apple et renforcer sa réputation, et consacrez toutes vos heures de travail, votre attention et votre énergie aux activités d’Apple. ')
            )
        ),
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').append(
                '<strong>Service to Apple  </strong><br>',
                $('<span/>').html('During your employment with Apple, you will in all respects conform to and comply with the directions and policies of Apple, including ' + ((employee.Canada_EA_Types_Code == 'CACAHA')?'<a href="' + employee.program_guidelines_link + '" target="_blank"><u>AppleCare AHA Program Guidelines</u></a>,':'') + ' <a href="' + employee.business_policy_link + '" target="_blank"><u>Apple’s Business Conduct Policy</u></a>, and any other standard Apple employment policies that are provided to or accessible by Apple employees, perform each of the duties assigned from time to time by Apple to the best of your skill and ability, faithfully and diligently serve Apple, use your best efforts to promote the interests and reputation of Apple, and devote your full working time, attention and energies to the business of Apple.')
            )
        ),

        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Renseignements personnels | Personal Information</strong><br>',
                $('<span/>').html('Vos renseignements personnels sont recueillis, traités, transmis et protégés par Apple conformément à l’Avis sur la protection des renseignements personnels de l’employé.')
            )
        ),
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False')  &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False')  &&
            $('<p/>').append(
                '<strong>Personal Information  </strong><br>',
                $('<span/>').html('Your personal information will be collected, processed, transferred and safeguarded by Apple in accordance with the terms of the Employee Privacy Notice. ')
            )
        ),

        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Cessation d’emploi | Termination of Employment</strong><br>',
                $('<span/>').html('' + ((employee.Reason_Code != 'Transfer')?'Au terme de votre période d’essai susmentionnée, la':'La') + ' cessation de votre emploi peut être décidée comme suit :')
            ),
            $('<ul class="lowerAlpha"/>').append(
                $('<li/>').html('par Apple Canada, avec motif, sans obligation de préavis, d’indemnité compensatrice de préavis ni de quelque autre indemnité que ce soit;'),
                $('<li/>').html('par Apple Canada, sans motif, sur présentation d’un préavis ou offre d’une indemnité compensatrice de préavis, d’avantages sociaux et d’une indemnité de départ, s’il y a lieu, conformément aux lois sur les normes du travail applicables. Cette disposition s’applique quel que soit votre poste lors de la cessation d’emploi. Vous reconnaissez que la présentation d’un préavis ou l’offre d’une indemnité compensatrice de préavis, d’avantages sociaux et d’une indemnité de départ, conformément au présent alinéa, satisfait à tous vos droits en matière de préavis, d’indemnité compensatrice de préavis ou d’indemnité de départ découlant d’une cessation de votre emploi, que ce soit en vertu d’un contrat, d’une loi, notamment la Charte des droits et libertés de la personne et le Code civil du Québec, ou autrement;'),
                $('<li/>').html('par vous, sur présentation à Apple Canada d’un préavis de démission écrit de deux (2) semaines, auquel Apple Canada a le droit de renoncer en totalité ou en partie, sans aucune autre obligation, sous réserve des lois sur les normes du travail applicables.')
             ),   

            $('<p/>').html('En cas de cessation d’emploi, vous recevrez le salaire de base impayé et l’indemnité de vacances accumulée, le cas échéant, jusqu’à votre dernier jour d’emploi effectif auprès d’Apple Canada. Vous reconnaissez et convenez expressément qu’en cas de cessation d’emploi autre qu’avec motif, vous avez uniquement droit au préavis ou à l’indemnité compensatrice de préavis mentionnés ci-dessus, qu’une cessation d’emploi est juste et raisonnable et qu’Apple Canada n’est en aucun cas responsable de fournir quelque autre préavis, indemnité compensatrice de préavis, préavis minimum obligatoire, indemnité de départ ou autre paiement ou dommage du fait de la cessation de votre emploi.'),
            $('<p/>').html('Jamais et en aucune circonstance vos droits en cas de cessation d’emploi ne sauraient être moindres que ceux prévus par la <em>Loi sur les normes du travail </em>du Québec.')
        ),

        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').append(
                '<strong>Termination of Employment</strong><br>',
                $('<span/>').html('' + ((employee.Reason_Code != 'Transfer')?'Upon successful completion of your probationary period referred to above, your':'Your') + ' employment may be terminated as follows:')
            ),
            $('<ul class="lowerAlpha"/>').append(
                $('<li/>').html('by Apple Canada, for cause, with no obligation to provide to you any notice or pay in lieu of notice or any indemnity or severance whatsoever;'),
            (employee.Work_Location_Quebec == 'True') &&
                $('<li/>').html('by Apple Canada, without cause, upon providing notice of termination or pay in lieu thereof, benefits and severance pay, if applicable, in accordance with applicable employment standards legislation. This provision shall continue to apply regardless of what position you occupy at the time that your employment is terminated. You acknowledge that the provision of such notice or pay in lieu thereof, benefits and severance pay in accordance with this paragraph shall satisfy any and all rights or entitlements that you may have to notice, pay in lieu thereof or severance pay, arising from or related to the termination of your employment, whether under contract, statute including the <em>Charter of Human Rights and Freedoms and the Civil Code of Quebec,</em> or otherwise.'),
                (employee.Work_Location_Quebec == 'False') &&
                $('<li/>').html('by Apple, without just cause, by providing you with the notice, or pay in lieu of notice, severance pay, if any, and such other minimum entitlements as required by the employment standards legislation of the Province in which you are employed, or any successor legislation; or'),
                $('<li/>').html('by you, upon giving Apple Canada two (2) weeks’ advance written notice of your intention to resign, in which event Apple Canada has a right to renounce in whole or in part, to such notice without having any further obligations to the extent permitted under applicable employment standards legislation.')
             ),   

            $('<p/>').html('In the event of termination, you will be paid any unpaid base salary and any accrued vacation earned up to your last day of active employment with Apple Canada. You acknowledge and expressly agree that upon the termination of employment for any reason other than for cause, you will only be entitled to the above notice or pay in lieu of notice, and that such termination is fair and reasonable and Apple Canada shall not, in any case, be responsible for any additional notice, pay in lieu of notice, minimum statutory notice, termination pay, or other payment or damage arising from the termination of your employment. '),
            $('<p/>').html('At no time, and in no circumstances, shall your termination entitlements be less than what is required by ' + ((employee.Work_Location_Quebec == 'True')?'the Quebec Act respecting Labour Standards':'the applicable employment standards legislation of the Province in which you are employed') + '.')
        ),
        
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Avis | Notices</strong><br>',
                $('<span/>').html('Tout avis de résiliation du présent contrat ou de cessation de votre emploi sera communiqué en personne, remis en mains propres ou transmis au moyen d’un service canadien de courrier recommandé à vous ou à Apple à l’adresse indiquée ci-dessus. Si votre adresse ou celle d’Apple change pendant la durée du présent contrat, vous ou Apple, selon le cas, fournira rapidement sa nouvelle adresse à l’autre partie.')
            )
        ),
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').append(
                '<strong>Notices </strong><br>',
                $('<span/>').html('Any notice of termination of this Agreement or your employment shall be delivered personally, otherwise by hand delivery or by registered Canadian mail to you or to Apple at the addresses set out above. If the address for you or for Apple as set out above changes during the term of this Agreement, then you or Apple, as applicable, shall promptly provide the new address to the other party. ')
            )
        ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Retour des biens | Return of Property</strong><br>',
                $('<span/>').html('À la cessation de votre emploi ou à la demande d’Apple, vous remettrez rapidement à Apple l’ensemble des documents et du matériel (y compris, sans s’y limiter, le matériel de formation, les clés, les produits Apple, les laissez-passer de sécurité, les cartes de crédit d’entreprise et l’équipement, collectivement les « Biens d’Apple ») relatifs à votre emploi au sein d’Apple, et vous convenez de ne pas conserver de Biens d’Apple, de documents ou de matériel contenant des renseignements exclusifs, ni de copies physiques ou électroniques de ces éléments.')
            )
        ),
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').append(
                '<strong>Return of Property </strong><br>',
                $('<span/>').html('Upon termination of your employment, or at Apple’s request, you will promptly deliver to Apple all documents and materials  (including without limitation all training materials, keys, Apple products, security passes, company credit cards and equipment, “Apple Property") of any kind pertaining to your work at Apple, and you agree that you will not take with you any Apple Property, documents, materials, or copies thereof, whether physical or electronic, containing any Proprietary Information.  ')
            )
        ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Renseignements confidentiels et exclusifs, inventions et autres revenus | Confidential and Proprietary Information, Inventions and Other Income</strong><br>',
                $('<span/>').html('Vous devez vous conformer à l’Entente sur la confidentialité et la propriété intellectuelle ci-jointe, que vous devez retourner dûment signée avec le présent contrat de travail. Toute exception ou approbation requise conformément à l’Entente sur la confidentialité et la propriété intellectuelle doit être approuvée par la vice-présidence de votre division et le service juridique d’Apple avant le début de votre emploi.')
            )
        ),
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').append(
                '<strong>Confidential and Proprietary Information, Inventions and Other Income</strong><br>',
                $('<span/>').html('You must sign and abide by the attached Intellectual Property Agreement and return the signed agreement with this Employment Agreement. Any exceptions or approvals required under the terms of the Intellectual Property Agreement must be approved by your division’s vice president and Apple’s Law Department prior to your beginning work. ')
            )
        ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Contrat exécutoire | Binding Agreement</strong><br>',
                $('<span/>').html('Le présent document constitue un contrat au sens de la loi et a force exécutoire pour Apple et vous.')
            )
        ),
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').append(
                '<strong>Binding Agreement  </strong><br>',
                $('<span/>').html('This is a legal contract that shall be binding on Apple and you. ')
            )
        ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Survie | Survival</strong><br>',
                $('<span/>').html('Vos obligations et engagements en vertu de l’article 20 (Renseignements confidentiels et exclusifs, inventions et autres revenus) demeurent pleinement en vigueur au profit d’Apple au-delà de la cessation de votre emploi, le cas échéant.')
            )
        ),
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').append(
                '<strong>Survival </strong><br>',
                $('<span/>').html('Notwithstanding the termination of your employment, your obligations and covenants under section 20 (Confidential and Proprietary Information, Inventions and Other Income) will survive such termination and continue in full force for the benefit of Apple. ')
            )
        ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Renonciation | Waiver</strong><br>',
                $('<span/>').html('La renonciation d’Apple à exercer un recours si vous violez une disposition du présent contrat ne doit pas constituer ou être interprétée comme une renonciation à exercer un recours pour une violation autre ou subséquente de votre part.')
            )
        ),
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').append(
                '<strong>Waiver  </strong><br>',
                $('<span/>').html('Any waiver by Apple of a breach of any provision of this Agreement by you will not operate or be interpreted as a waiver of any other or subsequent breach by you. ')
            )
        ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Droit applicable | Governing Law</strong><br>',
                $('<span/>').html('Votre contrat de travail est régi par les lois du Québec et interprété conformément à celles-ci. S’il s’avère que les droits décrits dans le présent contrat sont inférieurs aux normes obligatoires applicables, les normes du travail minimales s’appliqueront.')
            )
        ),
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').append(
                '<strong>Governing Law  </strong><br>',
                $('<span/>').html('Your contract of employment will be governed by and interpreted in accordance with the laws of the Province ' + ((employee.Work_Location_Quebec == 'True')?'of Quebec':'in which you are employed') + '. Should any entitlements described in this Agreement be found to be less than the applicable statutory standards, then the minimum employment standards shall apply. ')
            )
        ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Dissociabilité | Severability</strong><br>',
                $('<span/>').html('Chaque disposition du présent contrat constitue une promesse distincte, dissociable de toutes les autres promesses distinctes. La déclaration par un tribunal compétent ou une autre autorité juridique du caractère nul, non exécutoire ou déraisonnable d’une promesse ou d’une disposition, en totalité ou en partie, ne porte pas atteinte à la force exécutoire ni à la validité de toute autre promesse ou disposition du présent contrat ni d’une de ses parties, et le tribunal ou l’autorité juridique en question a le pouvoir de limiter la promesse ou la disposition visée comme il lui semble juste.')
            )
        ),
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').append(
                '<strong>Severability </strong><br>',
                $('<span/>').html('Each provision of this Agreement is declared to be a separate and distinct promise and to be separable from all other such separate and distinct promises. If any promise, provision or part thereof is determined by a court of competent jurisdiction or other constituted legal authority to be void, unenforceable or unreasonable in whole or in part, it will not be deemed to affect or impair the enforceability or validity of any other promise or provision in this Agreement or any part thereof and the said court or other constituted legal authority will have the authority to limit such promise or provision as it deems proper. ')
            )
        ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Cession | Assignment</strong><br>',
                $('<span/>').html('Le présent contrat peut être cédé par Apple. Vous ne pouvez pas céder, sous-traiter ou déléguer vos tâches aux termes du présent contrat sans autorisation écrite préalable d’Apple.')
            )
        ),
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').append(
                '<strong>Assignment </strong><br>',
                $('<span/>').html('This Agreement may be assigned by Apple. You may not assign, subcontract or delegate your duties under this Agreement without the prior written consent of Apple. ')
            )
        ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Intégralité du contrat | Entire Agreement</strong><br>',
                $('<span/>').html('Le présent contrat, y compris toutes ses annexes, constitue l’intégralité de l’entente entre vous et Apple relativement à votre embauche par Apple, et il a préséance sur l’ensemble des assertions, discussions, négociations et ententes, orales ou écrites, simultanées ou antérieures aux présentes. Le présent contrat ne peut être modifié qu’avec le consentement écrit des parties. Toute renonciation ou modification orale sera sans effet, en toutes circonstances.')
            )
        ),
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').append(
                '<strong>Entire Agreement </strong><br>',
                $('<span/>').html('This Agreement, including all Exhibits hereto, constitutes the entire agreement between you and Apple with respect to your employment by Apple and supersedes all prior or simultaneous representations, discussions, negotiations and agreements, whether written or oral, with respect thereto. This Agreement may be amended or modified only with the written consent of the parties. No oral waiver, amendment or modification will be effective under any circumstances. ')
            )
        ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Avis juridique indépendant | Independent Legal Advice</strong><br>',
                $('<span/>').html('Vous admettez et confirmez que vous avez eu l’occasion et qu’on vous a conseillé d’obtenir un avis juridique indépendant avant la signature du présent contrat.')
            )
        ),
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').append(
                '<strong>Independent Legal Advice </strong><br>',
                $('<span/>').html('You confirm and agree that you have had an opportunity and been advised to seek independent legal advice prior to signing this Agreement. ')
            )
        ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Exemplaires | Counterparts</strong><br>',
                $('<span/>').html('Le présent contrat peut être signé en plusieurs exemplaires, chacun de ceux-ci étant réputé constituer un original, et l’ensemble de ces exemplaires constitue un seul et même contrat.')
            )
        ),
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').append(
                '<strong>Counterparts</strong><br>',
                $('<span/>').html('This Agreement may be executed in any number of counterparts, each of which if so executed shall be deemed to be an original, and such counterparts will together constitute but one Agreement. ')
            )
        ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p class="disNo"/>').html(''),
            $('<p/>').append(
                '<strong>Langue | Language</strong><br>',
                $('<span/>').html('Les parties aux présentes confirment qu’elles ont exigé que le présent contrat et tous les documents connexes soient rédigés en anglais.')
            )
        ),
        $('<div class="offerClause">').append(
            (employee.Work_Location_Quebec == 'False') &&
            $('<p class="disNo"/>').html(''),
            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').append(
                '<strong>Language </strong><br>',
                $('<span/>').html('The parties hereto confirm that they have requested that this Agreement and all related documents be drafted in English.  ')
            )
        ),

        $('<div class="offerClause">').append(
            $('<p/>').html('<br><br><br> ')
        )
    );
    $("#markup2").html("").append(  
        $('<div class="offerClause2">').append(
            $('<p/>').html('Signed by Heslie Chua<br>on behalf Apple Canada Inc.')
        ), 
        $('<div class="offerClause2">').append(
            $('<p/>').html(' ')
        ),
        $('<div class="offerClause2">').append(
            $('<p/>').html('I understand and agree to these terms and conditions of employment. ')
        )

    );     
}


function formatCurrency(total) {
    return parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
}

function fnFormatCurrency(total) {
    if (total) {
        total = (total.indexOf(',') != -1) ? total.split(',').join('') : total;
        return formatCurrency(total);
    } 
    else {
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
function fnDateNow() {

    var d = new Date();

    //console.log(d);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var year = d.getFullYear(),
        month = d.getMonth(),
        n_date = d.getDate(),
        day = d.getDay();

    return ordinal_suffix_of(n_date) + ' day of ' + months[month] + ', ' + year;

}
function fnDateNowFrench() {

    var d = new Date();

    //console.log(d);
    var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var year = d.getFullYear(),
        month = d.getMonth(),
        n_date = d.getDate(),
        day = d.getDay();

    return n_date + '  ' + months[month] + ' ' + year;

}
function fnConvertDateFrench(eventDate) {

    var d = new Date(eventDate);
    var months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    var year = d.getFullYear(),
        month = d.getMonth(),
        n_date = d.getDate(),
        day = d.getDay();

    return parseInt(n_date) + ' ' + months[month] + ' ' + year;
    //return months[month] + ' ' + parseInt(n_date) + ', ' + year;

}
function fnTime_And_Half(amount, rate) {
    amount = (amount.indexOf(',') != -1) ? amount.split(',').join('') : amount;
    var total = (parseFloat(amount) + parseFloat((parseFloat(amount) * rate)));
    return formatCurrency(total);
}
/*
function clearField(){
var CSD = document.getElementById('companySignDate');

CSD.value = '';

}

function getDateToday(){

var CSD = document.getElementById('companySignDate');

var event = new Date();
var lang = navigator.language || navigator.userLanguage;
var options = {year: 'numeric', month: '2-digit', day: 'numeric' }; // remove day option if not required
var datetoday = event.toLocaleDateString(lang,options).replace(/[^ -~]/g,'');

clearField();
$("#companySignDate").val(datetoday.trim());

console.log(CSD.value);

}

*/

// function formatCurrency(total) {
//     return parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
// }




// function fnFormatCurrency(total) {
    
    
//     var values = total.split(/[ ,]+/).join(',');
//     var newValue  = values.replace(/\$/g, '');
//     if (newValue) {
        
//         newValue = (newValue.indexOf(',') != -1) ? newValue.split(',').join('') : newValue;
//         return formatCurrency(newValue);
//     } else {
//         return '0.00';
//     }
// }

function fnFormatCurrencys(total) {
    
    
    if (total) {
        
        return formatCurrency(total);
    } else {
        return '0.00';
    }
}

function fnFormatCurrencyWithComputation(total) {
    
    

    var newValue  = total.replace(/\,/g, '');
    return newValue;

}
/*
function fnAssignee(){
     var number = $('.assignee').val();
     return number;
}
*/
function fnAssignee(){
     var n = $('.assignee').val();
     var n2 = " Administrator";
     var emp = employee.First_Name + " " + employee.Last_Name;
     //alert(n2);
     //return n;
     if (n2 != emp){
            if (n2 != " Administrator"){
                    $('.assignee').val(" Administrator");
                    n = " Administrator";
                    //alert(n + "coor");
                    return n;
                    
                }
            else{
                //alert(n + "coor2")
                return n;
                
            }   
     }
     else if (n2 == emp){
        return n;
     }
}

$(function() {
    // function _fnAssignValue(targetElement, value) {
    //     document.getElementById(targetElement).value = value;
    //     $("#" + targetElement).attr("value", value);
    // }

    function fnGetName(first, middlename, last) {

        var middle_inital = ((middlename) ? middlename.substring(0, 1) + ' ' : '');
        var fullname = first + " " + middle_inital + last;
        return fullname;
    }





    // var name = fnGetName(employee.First_Name, employee.Middle_Name, employee.Last_Name);
    // _fnAssignValue('PrintName', name);
    // render template
    
    fnView();

    // completed letter
      if ($("#hidden_pg").prop('readonly')) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

        var arrParts = [
            [1, 'hidden_pg']
        ];
        var arrParts2 = [
            [1, 'hidden_pg2']
        ];
        showCompletedOfferLetter('incomplete', 'complete', arrParts);
        showCompletedOfferLetter('incomplete2', 'complete2', arrParts2);
    }else{

        makeOfferLetter('hidden_pg','offerClause');
        makeOfferLetter('hidden_pg2','offerClause2');
        
       //getDateToday();
       

    }

});
