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

        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        //((employee.CAN_Work_Location_Code == 'Montreal') || (employee.CAN_Work_Location_Code == 'R207') || (employee.CAN_Work_Location_Code == 'R248') || (employee.CAN_Work_Location_Code == 'R392') || (employee.CAN_Work_Location_Code == 'R412') || (employee.CAN_Work_Location_Code == 'R512')) &&  
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<p/>').html('LE PRÉSENT CONTRAT est conclu en date du ' + fnDateNowFrench()),
            $('<p/>').html('ENTRE : Apple Canada Inc. (« Apple » ou la « Société »), une société de l’Ontario ayant des bureaux au 120, boulevard Bremner, bureau 1600, Toronto (Ontario) M5J 0A8, Canada'),
            $('<p/>').html('ET : ' + employee.First_Name + ', ' + employee.Last_Name + '  (« vous » ou la « Personne employée »)<br>' + employee.Address1 + '<br>' + ((employee.City!='')? employee.City + ', ':'') + ((employee.Province!='')? employee.Province :'') + '<br>' + ((employee.Zip!='')? employee.Zip :''))
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        // (employee.Work_Location_Quebec == 'False') && 
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<p/>').html('THIS AGREEMENT is made as of the ' + fnDateNow()),
            $('<p/>').html('BETWEEN :    Apple Canada Inc. (“Apple” or “Company”), an Ontario company having offices at 120 Bremner Boulevard, Suite 1600, Toronto, Ontario, Canada M5J 0A8'),
            $('<p/>').html('AND : ' + employee.First_Name + ', ' + employee.Last_Name + ' (“You” or “Employee”)<br>' + employee.Address1 + '<br>' + ((employee.City!='')? employee.City + ', ':'') + ((employee.Province!='')? employee.Province :'') + '<br>' + ((employee.Zip!='')? employee.Zip :''))
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            //((employee.CAN_Work_Location_Code == 'Montreal') || (employee.CAN_Work_Location_Code == 'R207') || (employee.CAN_Work_Location_Code == 'R248') || (employee.CAN_Work_Location_Code == 'R392') || (employee.CAN_Work_Location_Code == 'R412') || (employee.CAN_Work_Location_Code == 'R512')) &&
            $('<p/>').html('Le présent contrat établit les conditions selon lesquelles Apple convient d’embaucher la Personne employée et la Personne employée accepte d’être embauchée par Apple. '),
            //((employee.CAN_Work_Location_Code == 'Montreal') || (employee.CAN_Work_Location_Code == 'R207') || (employee.CAN_Work_Location_Code == 'R248') || (employee.CAN_Work_Location_Code == 'R392') || (employee.CAN_Work_Location_Code == 'R412') || (employee.CAN_Work_Location_Code == 'R512')) &&
            $('<p/>').html('Moyennant une contrepartie à titre onéreux et valable dont la réception et la suffisance sont reconnues par les présentes, les parties conviennent de ce qui suit : ')
        ),
        
        // (employee.Work_Location_Quebec == 'False') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<p/>').html('This Agreement sets forth the terms upon which Apple agrees to employ the Employee and upon which Employee agrees to be employed by Apple. '),
            $('<p/>').html('For good and valuable consideration, the receipt and sufficiency of which are hereby acknowledged, the parties agree as follows: ')
        ),
        //((employee.CAN_Work_Location_Code == 'Montreal') || (employee.CAN_Work_Location_Code == 'R207') || (employee.CAN_Work_Location_Code == 'R248') || (employee.CAN_Work_Location_Code == 'R392') || (employee.CAN_Work_Location_Code == 'R412') || (employee.CAN_Work_Location_Code == 'R512')) &&
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Désignation et fonctions du poste | Job Title and Job Duties</strong><br> '),
            $('<p/>').html('Vous occupez le poste de ' + employee.Job_Title_Retail + ' et relevez de ' + employee.Hiring_Manager + ' ou de toute autre personne que la Société peut désigner à l’occasion.  '),
            $('<p/>').html('Vos fonctions correspondent aux responsabilités de votre poste dont nous pourrions raisonnablement vous demander de vous acquitter, y compris, sans s’y limiter : '),
            $('<ul class="lowerAlpha"/>').append(
                $('<li/>').html('respect de l’ensemble des règles, réglementations et politiques applicables d’Apple;'),
                $('<li/>').html('préservation et entretien de l’ensemble des Biens d’Apple se trouvant en votre possession ou sous votre garde, contrôle ou direction; et'),
                $('<li/>').html('exécution de toutes les tâches et responsabilités vous étant attribuées à l’occasion par Apple.')
            ),
            $('<p/>').html(''),
            $('<p/>').html('Vous reconnaissez qu’Apple peut de temps à autre redéfinir la désignation, la description, les fonctions et/ou les responsabilités du poste, ainsi qu’y rattacher des fonctions et des responsabilités supplémentaires, sans modifier les droits et obligations des parties aux présentes et sans préavis ni autre obligation, et vous donnez à la Société le droit d’agir en ce sens. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Job Title and Job Duties</strong><br> '),
            $('<p/>').html('You will be employed in the position of ' + employee.Job_Title_Retail + ' and will report to ' + employee.Hiring_Manager + ' or any other person that the Company may designate from time to time.  '),
            $('<p/>').html('Your duties will consist of those duties consistent with such position that we may reasonably request you to perform and will include, but are not limited to: '),
            $('<ul class="lowerAlpha"/>').append(
                $('<li/>').html('observation of all applicable rules, regulations and policies of Apple;'),
                $('<li/>').html('preservation and maintenance of all Apple property in your custody, possession or control or under your direction; and'),
                $('<li/>').html('performance of all of the duties and responsibilities assigned to you from time to time by Apple.')
            ),
            $('<p/>').html(''),
            $('<p/>').html('You acknowledge that Apple may from time to time redefine the job title, description, functions and/or responsibilities of the position, as well as assign further duties and responsibilities, without changing any rights or obligations of the parties hereto, without advance notice or other obligation and you consent to the Company’s right to do so. ')
        ),
        
        ((employee.WD_Employee_Type_Code == 'Standard') && (employee.Work_Location_Quebec == 'True')) &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Début de l’emploi | Commencement of Employment</strong><br> '),
            $('<p/>').html('Votre emploi débute le ' + fnConvertDateFrench(employee.Start_Date) + ' et se poursuivra jusqu’à sa cessation en vertu du présent contrat. ')
        ),
        
        $('<div class="offerClause">').append(
            (employee.WD_Employee_Type_Code == 'Standard') &&
            $('<p/>').html(' '),
            ((employee.WD_Employee_Type_Code == 'Standard') && (employee.Work_Location_Quebec == 'False')) &&
            $('<span/>').html('<strong>Commencement of Employment</strong><br> '),
            (employee.WD_Employee_Type_Code == 'Standard') &&
            $('<p/>').html('Your employment will begin on ' + fnConvertDate(employee.Start_Date) + ' and shall continue until terminated pursuant to this Agreement. ')
        ),
        ((employee.WD_Employee_Type_Code == 'Fixed Term') && (employee.Work_Location_Quebec == 'True')) &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Début de l’emploi | Commencement of Employment</strong><br> '),
            $('<p/>').html('Votre emploi débute le ' + fnConvertDateFrench(employee.Start_Date) + ' et se poursuivra jusqu’à sa cessation le ' + fnConvertDateFrench(employee.Term_Dt) + ' en vertu du présent contrat. ')
        ),
        $('<div class="offerClause">').append(
            (employee.WD_Employee_Type_Code == 'Fixed Term') &&
            $('<p/>').html(' '),
            ((employee.WD_Employee_Type_Code == 'Fixed Term') && (employee.Work_Location_Quebec == 'False')) &&
            $('<span/>').html('<strong>Commencement of Employment</strong><br> '),
            (employee.WD_Employee_Type_Code == 'Fixed Term') && 
            $('<p/>').html('Your employment will begin on ' + fnConvertDate(employee.Start_Date) + ' and shall continue until terminated on ' + fnConvertDate(employee.Term_Dt) + ' pursuant to this Agreement. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        ((employee.Reason_Code != 'Transfer') && (employee.Work_Location_Quebec == 'True')) &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Période d’essai | Probation Period</strong><br> '),
            $('<p/>').html('Votre nouveau poste de ' + employee.Job_Title_Retail + ' au sein d’Apple est assujetti à une période d’essai de quatre-vingt-dix (90) jours. À tout moment pendant cette période d’essai, vous ou Apple pouvez mettre fin à cet emploi sans préavis ni autre obligation envers l’autre partie, exception faite du préavis minimum ou d’une indemnité compensatrice de préavis et de tout autre bénéfice exigé en vertu des lois sur les normes du travail applicables.  ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            (employee.Reason_Code != 'Transfer') &&
            $('<p/>').html(' '),
            ((employee.Reason_Code != 'Transfer') && (employee.Work_Location_Quebec == 'False')) &&
            $('<span/>').html('<strong>Probation Period</strong><br> '),
            (employee.Reason_Code != 'Transfer') &&
            $('<p/>').html('Your new role as ' + employee.Job_Title_Retail + ' with Apple is subject to a ninety (90) day probationary period. At any time during your probationary period, either you or Apple may terminate your employment without notice or any other obligation to the other party, except the minimum notice or pay in lieu of notice and any other entitlements required by the applicable employment standards legislation.   ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        ((employee.Reason_Code != 'Transfer') && (employee.Work_Location_Quebec == 'True')) &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Offre conditionnelle d’emploi | Conditional Offer of Employment</strong><br> '),
            $('<p/>').html('Votre emploi au sein d’Apple est conditionnel à une vérification des renseignements que vous avez fournis lors du processus de postulation, à une vérification de vos antécédents (y compris des antécédents criminels), ainsi qu’à la réception de références fournies par les personnes désignées par vous et d’une preuve documentaire de votre droit de travailler au Canada, chacun de ces éléments devant être jugé satisfaisant par Apple. Il vous incombe de maintenir votre droit de travailler au Canada. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            (employee.Reason_Code != 'Transfer') &&
            $('<p/>').html(' '),
            ((employee.Reason_Code != 'Transfer') && (employee.Work_Location_Quebec == 'False')) &&
            $('<span/>').html('<strong>Conditional Offer of Employment</strong><br> '),
            (employee.Reason_Code != 'Transfer') &&
            $('<p/>').html('Your employment with Apple is conditional upon verification satisfactory to Apple of the information you provided to it during the job application process, completion satisfactory to Apple of applicable background checks (including criminal background checks), the receipt of references satisfactory to Apple from those nominated by you, and the receipt of documentary evidence satisfactory to Apple of your continued right to work in Canada. It is your responsibility to maintain your legal right to work in Canada. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Lieu de travail | Place of Work</strong><br> '),
            $('<p/>').html('Bien que votre lieu de travail habituel soit la boutique ' +  employee.CAN_Work_Location_Value + ', Apple peut, à son entière discrétion, vous muter dans n’importe quel autre lieu de travail situé au Québec, à titre provisoire ou permanent, sans pour autant contrevenir au présent contrat ni à une quelconque condition de votre emploi.')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Place of Work</strong><br> '),
            $('<p/>').html('While your usual place of work is the ' +  employee.CAN_Work_Location_Value + ', Apple may, at its sole discretion, require you to relocate to any other location within the ' + ((employee.Work_Location_Quebec=='True')?'Province of Quebec':'Greater City area') + ', either temporarily or permanently, without thereby breaching this Agreement or any terms of your employment. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Jours et heures de travail | Days and Hours of Work</strong><br> '),
            (employee.WD_Time_Type_Code == 'Full Time') &&
            $('<p/>').html('Vous occupez un emploi à temps plein. Vos heures de travail hebdomadaires habituelles sont de quarante heures (40 heures) par semaine à l’exclusion des pauses (vos « Heures de base »). Vos jours et heures de travail réels sont déterminés par votre directeur ou directrice, qui vous indiquera au début de chaque semaine votre horaire pour cette semaine. Vous reconnaissez et convenez toutefois qu’en raison de vos fonctions de ' + employee.Job_Title_Retail + ', vous pourriez devoir travailler à différentes heures, selon les besoins d’affaires. '),
            (employee.WD_Time_Type_Code == 'Part Time') &&
            $('<p/>').html('Vous occupez un emploi à temps partiel. Vos heures de travail hebdomadaires habituelles sont de ' + employee.FRCA_Weekly_Hours + ' heures par semaine à l’exclusion des pauses (vos « Heures de base »). Vous reconnaissez et convenez toutefois qu’en raison de vos fonctions de ' + employee.Job_Title_Retail + ', vous pourriez devoir travailler à différentes heures, selon les besoins d’affaire. '),
            $('<p/>').html('Apple se réserve le droit de vous demander de travailler soit un nombre raisonnable d’heures supplémentaires, soit un nombre d’heures inférieur à vos Heures de base, selon ses besoins d’affaires. Apple peut modifier ainsi vos heures sans préavis, sous réserve des lois sur les normes du travail applicables de votre province d’emploi, et sans pour autant contrevenir à une quelconque condition du présent contrat ou de votre emploi au sein d’Apple. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Days and Hours of Work</strong><br> '),
            (employee.WD_Time_Type_Code == 'Full Time') &&
            $('<p/>').html('You are employed on a full-time basis. Your usual weekly hours are forty hours (40 hours) per week exclusive of breaks (your “Basic Hours”). Your actual working days and hours will be determined by your manager who will notify you in advance, at the beginning of each week, what your working schedule will be for that week. You acknowledge and agree, however, that the duties of this position ' + employee.Job_Title_Retail + ', may require you to work at different hours at various times during the day as the business may require. '),
            (employee.WD_Time_Type_Code == 'Part Time') &&
            $('<p/>').html('You are employed on a part-time basis. Your usual weekly hours are ' + employee.CAC_Weekly_Hours + ' hours per week exclusive of breaks (your “Basic Hours”). You acknowledge and agree, however, that the duties of ' + employee.Job_Title_Retail + ', may require you to work at different hours at various times during the day as the business may require.'),
            $('<p/>').html('Apple reserves the right to have you work either a reasonable number of additional hours or fewer hours than your Basic Hours as its business requires. Apple may implement these changes to your hours without prior notice, except as may be required by the applicable employment standards legislation of the Province in which you are employed, and without thereby breaching any term of this Agreement or your employment with Apple. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Rémunération | Compensation</strong><br> '),
            //(employee.CAN_Compensation_Types_Code == 'CACSR') &&
            //$('<p/>').html('Apple vous verse un salaire annuel de '+ fnFormatCurrency(employee.Salary_Amount) + ' $ CA, payable aux deux semaines, en paiements différés d’une semaine et assujettis à toutes les retenues applicables, conformément à ses pratiques courantes en matière de paie. Vous reconnaissez que votre salaire annuel tient lieu de rémunération pour toutes les heures travaillées et que, par conséquent, vous n’êtes pas admissible à la rémunération des heures travaillées excédant votre semaine de travail normale ou 40 heures par semaine. Vous comprenez et convenez que le nombre d’heures travaillées chaque semaine peut varier en fonction des besoins de la Société et peut, compte tenu de votre poste, dépasser quarante (40) heures par semaine. '),
            //(employee.CAN_Compensation_Types_Code == 'CACHR') &&
            //$('<p/>').html('Votre taux horaire de base est de '+ fnFormatCurrency(employee.Salary_Amount) + ' $ CA. Vous recevez votre paie conformément aux pratiques courantes d’Apple en matière de paie, à savoir par versements aux deux semaines différés d’une semaine et assujettis à toutes les retenues applicables.  '),
           //(employee.CAN_Compensation_Types_Code == 'CACHR') &&
            //$('<p/>').html('Compte tenu de votre poste, vous êtes admissible à la rémunération des heures supplémentaires. Les heures travaillées au-delà de 40 heures au cours d’une semaine donnée sont rémunérées à titre d’heures supplémentaires, conformément à la Loi sur les normes du travail du Québec. Avant de faire des heures supplémentaires, toutefois, vous devez obtenir l’approbation de votre responsable. '),
            //(employee.CAN_Compensation_Types_Code == 'CACHR') &&
            //$('<p/>').html('Vous êtes admissible à des commissions et/ou à des primes de rendement conformément au régime de rémunération incitative. Vous recevrez le document sur le régime de rémunération incitative d’Apple Canada séparément. Nonobstant toute indication contraire dans le régime de rémunération incitative d’Apple Canada (le « Régime »), votre emploi au sein d’Apple doit être effectif pour que vous soyez admissible à des commissions et/ou à des primes de rendement, et aucun préavis qui a été donné ou qui aurait dû être donné ne prolonge la durée de votre emploi aux fins de la détermination de vos droits en vertu du Régime, sous réserve des lois sur les normes du travail applicables de votre province d’emploi. '),

             //Added by ALondot. Client noted that there are no longer salary and hourly distinctions. Requested to remove the validation.
            $('<p/>').html('Votre taux horaire de base est de '+ fnFormatCurrency(employee.Salary_Amount) + ' $ CA. Vous recevez votre paie conformément aux pratiques courantes d’Apple en matière de paie, à savoir par versements aux deux semaines différés d’une semaine et assujettis à toutes les retenues applicables.  '),

            $('<p/>').html('Compte tenu de votre poste, vous êtes admissible à la rémunération des heures supplémentaires. Les heures travaillées au-delà de 40 heures au cours d’une semaine donnée sont rémunérées à titre d’heures supplémentaires, conformément à la Loi sur les normes du travail du Québec. Avant de faire des heures supplémentaires, toutefois, vous devez obtenir l’approbation de votre responsable. '),

(employee.WD_Employee_Type_Code != 'Fixed Term') &&
            $('<p/>').html('Vous êtes admissible à des commissions et/ou à des primes de rendement conformément au régime de rémunération incitative. Vous recevrez le document sur le régime de rémunération incitative d’Apple Canada séparément. Nonobstant toute indication contraire dans le régime de rémunération incitative d’Apple Canada (le « Régime »), votre emploi au sein d’Apple doit être effectif pour que vous soyez admissible à des commissions et/ou à des primes de rendement, et aucun préavis qui a été donné ou qui aurait dû être donné ne prolonge la durée de votre emploi aux fins de la détermination de vos droits en vertu du Régime, sous réserve des lois sur les normes du travail applicables de votre province d’emploi. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Compensation</strong><br> '),
            //(employee.CAN_Compensation_Types_Code == 'CACSR') &&
           //$('<p/>').html('Apple shall pay you an annual salary of (CAD) $'+ fnFormatCurrency(employee.Salary_Amount) + ' payable in accordance with its normal payroll practices, which currently is every other week, one week in arrears, subject to the withholding of all applicable deductions. As an exempt employee, you acknowledge that your annual salary compensates you for all hours worked and as such you will not be eligible for overtime for any hours worked in excess of the regular workweek or in excess of the overtime threshold in the Province in which you are employed. You understand and agree that the number of hours worked in a given week may vary depending on the needs of the Company, and taking into account your position, may exceed the overtime threshold in the Province in which you are employed.'),
            //(employee.CAN_Compensation_Types_Code == 'CACHR') &&
            //$('<p/>').html('Your basic rate of pay is (CAD) $'+ fnFormatCurrency(employee.Salary_Amount) + ' per hour. You will be paid in accordance with Apple’s normal payroll practices, which is currently every two weeks, one week in arrears, subject to the withholding of all applicable deductions.  '),
            //((employee.CAN_Compensation_Types_Code == 'CACHR') && (employee.Work_Location_Quebec == 'True')) &&
            //$('<p/>').html('In your position, you are eligible for overtime. Overtime will be paid for any time worked over 40 hours in a given week in accordance with the Quebec Act respecting Labour Standards. However before working any such additional time, you must first get approval from your supervisor.'),
            //((employee.CAN_Compensation_Types_Code == 'CACHR') && (employee.Work_Location_Quebec == 'False')) &&
            //$('<p/>').html('In your position, you are eligible for overtime.  Overtime will be paid for any time worked over the overtime threshold in the Province in which you are employed. However before working any such additional time, you must first get approval from your supervisor. '),
            //(employee.CAN_Compensation_Types_Code == 'CACHR') &&
           //$('<p/>').html('You will be eligible for Commissions and/or Performance Incentives according to the terms of the Incentive Compensation Plan. You will receive Apple Canada’s Incentive Compensation Plan document separately. Notwithstanding anything to the contrary in the Apple Canada’s Incentive Compensation Plan (the “Plan”), you must be actively employed with Apple to receive any Commissions and/or Performance Incentives and no period of notice that was given or that ought to have been given shall extend the term of your employment for the purposes of determining any entitlements under the Plan, except as required by the applicable employment standards legislation in the Province in which you are employed. '),

             //Added by ALondot. Client noted that there are no longer salary and hourly distinctions. Requested to remove the validation.
            $('<p/>').html('Your basic rate of pay is (CAD) $'+ fnFormatCurrency(employee.Salary_Amount) + ' per hour. You will be paid in accordance with Apple’s normal payroll practices, which is currently every two weeks, one week in arrears, subject to the withholding of all applicable deductions.  '),

            (employee.Work_Location_Quebec == 'True') &&
            $('<p/>').html('In your position, you are eligible for overtime. Overtime will be paid for any time worked over 40 hours in a given week in accordance with the Quebec Act respecting Labour Standards. However before working any such additional time, you must first get approval from your supervisor.'),

            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').html('In your position, you are eligible for overtime.  Overtime will be paid for any time worked over the overtime threshold in the Province in which you are employed. However before working any such additional time, you must first get approval from your supervisor. ')

           // UAT0027 Remove for retail hourly, fixed term, etc. 
           // $('<p/>').html('You will be eligible for Commissions and/or Performance Incentives according to the terms of the Incentive Compensation Plan. You will receive Apple Canada’s Incentive Compensation Plan document separately. Notwithstanding anything to the contrary in the Apple Canada’s Incentive Compensation Plan (the “Plan”), you must be actively employed with Apple to receive any Commissions and/or Performance Incentives and no period of notice that was given or that ought to have been given shall extend the term of your employment for the purposes of determining any entitlements under the Plan, except as required by the applicable employment standards legislation in the Province in which you are employed. ')

        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Programmes d’avantages sociaux | Benefits Programs</strong><br> '),
            $('<p/>').html('Vous pourriez être admissible à divers programmes d’avantages sociaux offerts par Apple à l’occasion, y compris au régime d’épargne-retraite ainsi qu’aux régimes d’assurance maladie, d’assurance vie et d’assurance invalidité offerts par Apple aux membres de son personnel. Vous reconnaissez et convenez que tout programme d’avantages sociaux en vigueur à l’occasion est offert sous réserve de sa disponibilité, des autres exigences d’Apple ou de l’assureur concerné, et des modalités écrites dudit programme, et qu’Apple ne garantit pas votre admissibilité ni votre droit aux avantages et n’assume aucune responsabilité si une couverture vous est refusée. La Société se réserve le droit de modifier ou d’abandonner ses programmes d’avantages sociaux à tout moment, avec ou sans préavis.  ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Benefits Programs</strong><br> '),
            $('<p/>').html('You may be eligible to participate in various benefit plans offered by Apple from time to time, including Retirement Savings Plan, and health, life and disability insurance plans offered by Apple to its employees. You acknowledge and agree that any benefit plan in effect from time to time is subject to availability and other requirements of Apple or the applicable insurer and the written terms and conditions contained in each plan and that Apple makes no promise about your eligibility for, or entitlement to, benefits and will have no liability or responsibility in the event you are denied coverage. The Company reserves the right to amend or discontinue its benefits programs at any time, with or without advance notice to you. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Vacances | Vacation </strong><br> '),
            (employee.WD_Time_Type_Code == 'Full Time') &&
            $('<p/>').html('À titre de membre du personnel, vous pouvez accumuler des jours de vacances et une indemnité de vacances conformément aux politiques d’Apple. La politique de vacances d’Apple peut être modifiée à l’occasion par Apple à son entière discrétion. Toutefois, en aucun cas le nombre de jours de vacances auquel vous avez droit ne peut être inférieur au minimum prévu par la Loi sur les normes du travail du Québec. '),
            (employee.WD_Time_Type_Code == 'Part Time') &&
            $('<p/>').html('L’indemnité de vacances est indiquée sur chaque bordereau de paie conformément aux dispositions applicables de la <em>Loi sur les normes du travail</em> du Québec ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Vacation </strong><br> '),
            (employee.WD_Time_Type_Code == 'Full Time') &&
            $('<p/>').html('As an employee, you are eligible to accrue vacation days and vacation pay in accordance with Apple’s policies. Apple’s vacation policy may be amended or modified from time to time by Apple at its sole discretion. At no time, however, shall you be entitled to less than the applicable requirements of the ' + ((employee.Work_Location_Quebec == 'True')?'Quebec Act respecting Labour Standards. ':'employment standards legislation in the Province in which you are employed. ')),
            (employee.WD_Time_Type_Code == 'Part Time') &&
            $('<p/>').html('Vacation pay will be added to each paycheque in accordance with the ' + ((employee.Work_Location_Quebec == 'True')?'applicable requirements of the Quebec Act respecting Labour Standards. ':'employment standards legislation in the Province in which you are employed.'))
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),

        ((employee.Work_Location_Quebec == 'True') && (employee.WD_Employee_Type_Value == 'Standard')) &&
        $('<div class="offerClause">').append(
            $('<span/>').html('<strong>Primes | Bonus </strong><br> '),
            $('<p/>').html('Vous pourriez être admissible à un ou plusieurs des programmes de primes et d’incitatifs d’Apple en vigueur à l’occasion, au sujet desquels votre directeur ou directrice vous renseignera. '),
            $('<p/>').html('Tous les programmes de primes et d’incitatifs auxquels vous pourriez être admissible sont discrétionnaires et peuvent être modifiés ou abandonnés à tout moment, sans qu’il y ait contravention à une condition du présent contrat ou de votre emploi au sein d’Apple. Pour que vous soyez admissible à une prime ou à un programme incitatif, votre emploi doit être effectif à la date de versement de la prime ou de la rémunération incitative. Aux fins du présent contrat, on ne considère plus votre emploi comme effectif à compter de la date de réception d’un avis écrit de cessation d’emploi ou de la date de remise d’un avis de démission, sauf si la Loi sur les normes du travail prévoit expressément un préavis plus important. Le cas échéant, votre emploi cesse d’être effectif à la fin de la période minimale prescrite par cette loi. Autrement dit, la période d’emploi effectif n’inclut pas tout préavis de cessation d’emploi prévu par contrat, par la common law ou autrement, sous réserve de la Loi sur les normes du travail.')
        ),

        $('<div class="offerClause">').append(
            ((employee.Work_Location_Quebec == 'False') && (employee.WD_Employee_Type_Value == 'Standard')) &&
            $('<span/>').html('<strong>Bonus </strong><br> '),
            (employee.WD_Employee_Type_Value == 'Standard') &&
            $('<p/>').html('You may be eligible to participate in any of Apple’s bonus and incentive schemes in place from time to time, details of which will be provided by your manager. '),
            (employee.WD_Employee_Type_Value == 'Standard') &&
            $('<p/>').html('All bonus and incentive schemes in which you may be eligible to participate are discretionary and may be amended or withdrawn at any time without breaching a term of this Agreement or your employment with Apple. In order to be eligible to receive a bonus or participate in an incentive scheme, you must be actively employed on the date that the bonus or other incentive is paid. For the purposes of this Agreement, you are no longer considered actively employed as of the date you receive written notice of termination or provide notice of resignation except where any greater period is expressly required by the employment standards legislation of the Province in which you are employed, in which case being actively employed ceases following the minimum prescribed period under that legislation. For greater clarity, active employment does not include any period of notice that arises upon termination of employment, whether by contract, common law or otherwise, except where the applicable employment standards legislation requires otherwise. ')
        ),

        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Travail de fin de semaine, jours fériés et quarts de travail | Saturday-Sunday work/Statutory Holiday/Shift Work </strong><br> '),
            $('<p/>').html('Vous comprenez que votre poste est affecté à la division de la vente au détail d’Apple et que, la boutique étant un commerce de détail ouvert le samedi, le dimanche et les jours fériés, vous pourriez devoir travailler la fin de semaine ou un jour férié. Vous convenez de faire vos quarts de travail prévus la fin de semaine ou un jour férié et de ne pas y opposer de refus. '),
            $('<p/>').html('De plus, vous reconnaissez que vos quarts de travail pourraient différer (p. ex., l’avant-midi, l’après-midi ou le soir) et changer à l’occasion.  ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Saturday-Sunday work/Statutory Holiday/Shift Work </strong><br> '),
            $('<p/>').html('You understand that your position is with Apple’s Retail division and that because the Store is a retail operation, which is open on Saturday, Sundays and statutory holidays, you may be scheduled to work on weekends and statutory holidays. ' + ((employee.Work_Location_Quebec == 'False')?'In accordance the employment standards legislation in the Province in which are employed, you':'You') +' agree that you will work on weekends and statutory holidays if a weekend or statutory holiday shift is assigned to you and you will not refuse to do so. '),
            $('<p/>').html('You also acknowledge that you may be scheduled to work on different shifts (eg. morning, afternoon or evening) and that your shift schedule may change from time to time. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Absence et maladie | Absence and Sickness </strong><br> '),
            $('<p/>').html('Si vous n’êtes pas en mesure de vous présenter au travail pour une raison quelconque, vous devez aviser Apple et suivre ses politiques et procédures standards en matière d’absence et de maladie.  ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Absence and Sickness </strong><br> '),
            $('<p/>').html('If you are unable to attend work for any reason you must provide notice to Apple and otherwise follow Apple’s standard policies and procedures with respect to absences and sickness. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Service auprès d’Apple | Service to Apple </strong><br> '),
            $('<p/>').html('Pendant la durée de votre emploi au sein d’Apple, vous respectez en tous points les directives et politiques d’Apple, notamment son Code de déontologie, joint à l’annexe A, et toute autre politique d’emploi standard d’Apple fournie au personnel d’Apple ou mise à sa disposition, effectuez toutes les tâches qui vous sont à l’occasion attribuées par Apple au mieux de vos compétences et aptitudes, servez Apple avec loyauté et diligence, faites de votre mieux pour favoriser les intérêts d’Apple et renforcer sa réputation, et consacrez toutes vos heures de travail, votre attention et votre énergie aux activités d’Apple.  ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Service to Apple </strong><br> '),
            $('<p/>').html('During your employment with Apple, you will in all respects conform to and comply with the directions and policies of Apple, including Apple’s Business Conduct Policy, attached as Exhibit A, and any other standard Apple employment policies that are provided to or accessible by Apple employees, perform each of the duties assigned from time to time by Apple to the best of your skill and ability, faithfully and diligently serve Apple, use your best efforts to promote the interests and reputation of Apple, and devote your full working time, attention and energies to the business of Apple. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Renseignements personnels | Personal Information </strong><br> '),
            $('<p/>').html('Vos renseignements personnels sont recueillis, traités, transmis et protégés par Apple conformément à l’Avis sur la protection des renseignements personnels de l’employé.  ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Personal Information </strong><br> '),
            $('<p/>').html('Your personal information will be collected, processed, transferred and safeguarded by Apple in accordance with the terms of the Employee Privacy Notice. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Cessation d’emploi | Termination of Employment </strong><br> '),
            $('<p/>').html('Au terme de votre période d’essai susmentionnée, la cessation de votre emploi peut être décidée comme suit : '),
            $('<ul class="lowerAlpha"/>').append(
                $('<li/>').html('par Apple Canada, avec motif, sans obligation de préavis, d’indemnité compensatrice de préavis ni de quelque autre indemnité que ce soit;'),
                $('<li/>').html('par Apple Canada, sans motif, sur présentation d’un préavis ou offre d’une indemnité compensatrice de préavis, d’avantages sociaux et d’une indemnité de départ, s’il y a lieu, conformément aux lois sur les normes du travail applicables. Cette disposition s’applique quel que soit votre poste lors de la cessation d’emploi. Vous reconnaissez que la présentation d’un préavis ou l’offre d’une indemnité compensatrice de préavis, d’avantages sociaux et d’une indemnité de départ, conformément au présent alinéa, satisfait à tous vos droits en matière de préavis, d’indemnité compensatrice de préavis ou d’indemnité de départ découlant d’une cessation de votre emploi, que ce soit en vertu d’un contrat, d’une loi, notamment la <em>Charte des droits et libertés de la personne et le Code civil du Québec,</em> ou autrement;'),
                $('<li/>').html('par vous, sur présentation à Apple Canada d’un préavis de démission écrit de deux (2) semaines, auquel Apple Canada a le droit de renoncer en totalité ou en partie, sans aucune autre obligation, sous réserve des lois sur les normes du travail applicables.')
            ),
            $('<p/>').html(''),
            $('<p/>').html('En cas de cessation d’emploi, vous recevrez le salaire de base impayé et l’indemnité de vacances accumulée, le cas échéant, jusqu’à votre dernier jour d’emploi effectif auprès d’Apple Canada. Vous reconnaissez et convenez expressément qu’en cas de cessation d’emploi autre qu’avec motif, vous avez uniquement droit au préavis ou à l’indemnité compensatrice de préavis mentionnés ci-dessus, qu’une cessation d’emploi est juste et raisonnable et qu’Apple Canada n’est en aucun cas responsable de fournir quelque autre préavis, indemnité compensatrice de préavis, préavis minimum obligatoire, indemnité de départ ou autre paiement ou dommage du fait de la cessation de votre emploi. '),
            $('<p/>').html('Jamais et en aucune circonstance vos droits en cas de cessation d’emploi ne sauraient être moindres que ceux prévus par la <em>Loi sur les normes du travail du Québec.</em> ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Termination of Employment </strong><br> '),
            $('<p/>').html('Upon successful completion of your probationary period referred to above, your employment may be terminated as follows:'),
            $('<ul class="lowerAlpha"/>').append(
                $('<li/>').html('by Apple Canada , for just cause, with no obligation to provide to you any notice or pay in lieu of notice or any indemnity or severance whatsoever; ' + ((employee.Work_Location_Quebec == 'False')? 'except as may be required by the applicable employment standards legislation of the Province in which you are employed;':'')),
                (employee.Work_Location_Quebec == 'False') &&
                $('<li/>').html('by Apple, without just cause, by providing you with the notice, or pay in lieu of notice, severance pay, if any, and such other minimum entitlements as required by the employment standards legislation of the Province in which you are employed, or any successor legislation; or'),
                (employee.Work_Location_Quebec == 'True') &&
                $('<li/>').html('by Apple Canada, without cause, upon providing notice of termination or pay in lieu thereof, benefits and severance pay, if applicable, in accordance with applicable employment standards legislation. This provision shall continue to apply regardless of what position you occupy at the time that your employment is terminated. You acknowledge that the provision of such notice or pay in lieu thereof, benefits and severance pay in accordance with this paragraph shall satisfy any and all rights or entitlements that you may have to notice, pay in lieu thereof or severance pay, arising from or related to the termination of your employment, whether under contract, statute including the <em>Charter of Human Rights and Freedoms and the Civil Code of Quebec,</em> or otherwise. '),
                (employee.Work_Location_Quebec == 'False') &&
                $('<li/>').html('by you, upon giving Apple two (2) weeks advance written notice.'),
                (employee.Work_Location_Quebec == 'True') &&
                $('<li/>').html('by you, upon giving Apple Canada two (2) weeks’ advance written notice of your intention to resign, in which event Apple Canada has a right to renounce in whole or in part, to such notice without having any further obligations to the extent permitted under applicable employment standards legislation.')
            ),
            $('<p/>').html(''),
            (employee.Work_Location_Quebec == 'False') &&
            $('<p/>').html('In the event of termination, you will be paid any unpaid wages earned up to the date of termination, and beneﬁts will be continued to the extent required by applicable legislation. You acknowledge and expressly agree that upon the termination of employment for any reason other than for cause you will only be entitled to the above notice, pay in lieu of notice, severance pay, beneﬁts and other minimum entitlements which apply under then current employment standards legislation, and Apple shall not, in any case, be responsible for any additional notice, pay in lieu of notice, severance pay, termination pay, or other indemnity or damage arising from the termination of your employment.  At no time, and in no circumstances, shall your termination entitlements be less than what is required by the applicable employment standards legislation of the Province in which you are employed. '),
            (employee.Work_Location_Quebec == 'True') &&
            $('<p/>').html('In the event of termination, you will be paid any unpaid base salary and any accrued vacation earned up to your last day of active employment with Apple Canada. You acknowledge and expressly agree that upon the termination of employment for any reason other than for cause, you will only be entitled to the above notice or pay in lieu of notice, and that such termination is fair and reasonable and Apple Canada shall not, in any case, be responsible for any additional notice, pay in lieu of notice, minimum statutory notice, termination pay, or other payment or damage arising from the termination of your employment.'),
            (employee.Work_Location_Quebec == 'True') &&
            $('<p/>').html('At no time, and in no circumstances, shall your termination entitlements be less than what is required by the Quebec Act respecting Labour Standards.')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Avis | Notices </strong><br> '),
            $('<p/>').html('Tout avis de résiliation du présent contrat ou de cessation de votre emploi sera communiqué en personne, remis en mains propres ou transmis au moyen d’un service canadien de courrier recommandé à vous ou à Apple à l’adresse indiquée ci-dessus. Si votre adresse ou celle d’Apple change pendant la durée du présent contrat, vous ou Apple, selon le cas, fournira rapidement sa nouvelle adresse à l’autre partie.  ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Notices </strong><br> '),
            $('<p/>').html('Any notice of termination of this Agreement or your employment shall be delivered personally, otherwise by hand delivery or by registered Canadian mail to you or to Apple at the addresses set out above. If the address for you or for Apple as set out above changes during the term of this Agreement, then you or Apple, as applicable, shall promptly provide the new address to the other party. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Retour des biens | Return of Property </strong><br> '),
            $('<p/>').html('À la cessation de votre emploi ou à la demande d’Apple, vous remettrez rapidement à Apple l’ensemble des documents et du matériel (y compris, sans s’y limiter, le matériel de formation, les clés, les produits Apple, les laissez-passer de sécurité, les cartes de crédit d’entreprise et l’équipement, collectivement les « Biens d’Apple ») relatifs à votre emploi au sein d’Apple, et vous convenez de ne pas conserver de Biens d’Apple, de documents ou de matériel contenant des renseignements exclusifs, ni de copies physiques ou électroniques de ces éléments.  ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Return of Property </strong><br> '),
            $('<p/>').html('Upon termination of your employment, or at Apple’s request, you will promptly deliver to Apple all documents and materials  (including without limitation all training materials, keys, Apple products, security passes, company credit cards and equipment, “Apple Property") of any kind pertaining to your work at Apple, and you agree that you will not take with you any Apple Property, documents, materials, or copies thereof, whether physical or electronic, containing any Proprietary Information.  ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Renseignements confidentiels et exclusifs, inventions et autres revenus | Confidential and Proprietary Information, Inventions and Other Income </strong><br> '),
            $('<p/>').html('Vous devez vous conformer à l’Entente sur la confidentialité et la propriété intellectuelle ci-jointe, que vous devez retourner dûment signée avec le présent contrat de travail. Toute exception ou approbation requise conformément à l’Entente sur la confidentialité et la propriété intellectuelle doit être approuvée par la vice-présidence de votre division et le service juridique d’Apple avant le début de votre emploi.  ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Confidential and Proprietary Information, Inventions and Other Income </strong><br> '),
            $('<p/>').html('You must sign and abide by the attached Intellectual Property Agreement and return the signed agreement with this Employment Agreement. Any exceptions or approvals required under the terms of the Intellectual Property Agreement must be approved by your division’s vice president and Apple’s Law Department prior to your beginning work. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Contrat exécutoire | Binding Agreement </strong><br> '),
            $('<p/>').html('Le présent document constitue un contrat au sens de la loi et a force exécutoire pour Apple et vous.  ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Binding Agreement </strong><br> '),
            $('<p/>').html('This is a legal contract that shall be binding on Apple and you. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Survie | Survival </strong><br> '),
            $('<p/>').html('Vos obligations et engagements en vertu de l’article 20 (Renseignements confidentiels et exclusifs, inventions et autres revenus) demeurent pleinement en vigueur au profit d’Apple au-delà de la cessation de votre emploi, le cas échéant.  ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Survival </strong><br> '),
            $('<p/>').html('Notwithstanding the termination of your employment, your obligations and covenants under section 20 (Confidential and Proprietary Information, Inventions and Other Income) will survive such termination and continue in full force for the benefit of Apple. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Renonciation | Waiver </strong><br> '),
            $('<p/>').html('La renonciation d’Apple à exercer un recours si vous violez une disposition du présent contrat ne doit pas constituer ou être interprétée comme une renonciation à exercer un recours pour une violation autre ou subséquente de votre part.  ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Waiver </strong><br> '),
            $('<p/>').html('Any waiver by Apple of a breach of any provision of this Agreement by you will not operate or be interpreted as a waiver of any other or subsequent breach by you. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Droit applicable | Governing Law </strong><br> '),
            $('<p/>').html('Votre contrat de travail est régi par les lois du Québec et interprété conformément à celles-ci. S’il s’avère que les droits décrits dans le présent contrat sont inférieurs aux normes obligatoires applicables, les normes du travail minimales s’appliqueront.  ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Governing Law </strong><br> '),
            $('<p/>').html('Your contract of employment will be governed by and interpreted in accordance with the laws of the Province ' + ((employee.Work_Location_Quebec == 'True')? 'of Quebec':'in which you are employed') + '. Should any entitlements described in this Agreement be found to be less than the applicable statutory standards, then the minimum employment standards shall apply. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Dissociabilité | Severability </strong><br> '),
            $('<p/>').html('Chaque disposition du présent contrat constitue une promesse distincte, dissociable de toutes les autres promesses distinctes. La déclaration par un tribunal compétent ou une autre autorité juridique du caractère nul, non exécutoire ou déraisonnable d’une promesse ou d’une disposition, en totalité ou en partie, ne porte pas atteinte à la force exécutoire ni à la validité de toute autre promesse ou disposition du présent contrat ni d’une de ses parties, et le tribunal ou l’autorité juridique en question a le pouvoir de limiter la promesse ou la disposition visée comme il lui semble juste.  ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Severability </strong><br> '),
            $('<p/>').html('Each provision of this Agreement is declared to be a separate and distinct promise and to be separable from all other such separate and distinct promises. If any promise, provision or part thereof is determined by a court of competent jurisdiction or other constituted legal authority to be void, unenforceable or unreasonable in whole or in part, it will not be deemed to affect or impair the enforceability or validity of any other promise or provision in this Agreement or any part thereof and the said court or other constituted legal authority will have the authority to limit such promise or provision as it deems proper. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Cession | Assignment </strong><br> '),
            $('<p/>').html('Le présent contrat peut être cédé par Apple. Vous ne pouvez pas céder, sous-traiter ou déléguer vos tâches aux termes du présent contrat sans autorisation écrite préalable d’Apple.  ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Assignment </strong><br> '),
            $('<p/>').html('This Agreement may be assigned by Apple. You may not assign, subcontract or delegate your duties under this Agreement without the prior written consent of Apple. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Intégralité du contrat | Entire Agreement </strong><br> '),
            $('<p/>').html('Le présent contrat, y compris toutes ses annexes, constitue l’intégralité de l’entente entre vous et Apple relativement à votre embauche par Apple, et il a préséance sur l’ensemble des assertions, discussions, négociations et ententes, orales ou écrites, simultanées ou antérieures aux présentes. Le présent contrat ne peut être modifié qu’avec le consentement écrit des parties. Toute renonciation ou modification orale sera sans effet, en toutes circonstances.  ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Entire Agreement  </strong><br> '),
            $('<p/>').html('This Agreement, including all Exhibits hereto, constitutes the entire agreement between you and Apple with respect to your employment by Apple and supersedes all prior or simultaneous representations, discussions, negotiations and agreements, whether written or oral, with respect thereto. This Agreement may be amended or modified only with the written consent of the parties. No oral waiver, amendment or modification will be effective under any circumstances. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Avis juridique indépendant | Independent Legal Advice </strong><br> '),
            $('<p/>').html('Vous admettez et confirmez que vous avez eu l’occasion et qu’on vous a conseillé d’obtenir un avis juridique indépendant avant la signature du présent contrat.  ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Independent Legal Advice  </strong><br> '),
            $('<p/>').html('You confirm and agree that you have had an opportunity and been advised to seek independent legal advice prior to signing this Agreement. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Exemplaires | Counterparts </strong><br> '),
            $('<p/>').html('Le présent contrat peut être signé en plusieurs exemplaires, chacun de ceux-ci étant réputé constituer un original, et l’ensemble de ces exemplaires constitue un seul et même contrat.  ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Counterparts </strong><br> '),
            $('<p/>').html('This Agreement may be executed in any number of counterparts, each of which if so executed shall be deemed to be an original, and such counterparts will together constitute but one Agreement. ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        (employee.Work_Location_Quebec == 'True') &&
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            $('<span/>').html('<strong>Langue | Language </strong><br> '),
            $('<p/>').html('Les parties ont exigé que le présent contrat et tous les documents connexes soient rédigés en anglais.  ')
        ),
        // $('<div class="offerClause">').append(
        //     $('<p/>').html(' ')
        // ),
        $('<div class="offerClause">').append(
            $('<p/>').html(' '),
            (employee.Work_Location_Quebec == 'False') &&
            $('<span/>').html('<strong>Language </strong><br> '),
            $('<p/>').html('The parties hereto confirm that they have requested that this Agreement and all related documents be drafted in English.  ')
        ),
        $('<div class="offerClause">').append(
            $('<p/>').html('<br><br><br> ')
        )
    );
    $("#markup2").html("").append(  
        $('<div class="offerClause2">').append(
            $('<p/>').html('Signed by Heslie Chua<br>on behalf Apple Canada Inc.<br>')
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
      if ($('#hidden_pg').prop('readonly')) {
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
