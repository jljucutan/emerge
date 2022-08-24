/**
 * CHANGE LOGS
 * 07/29/2019 | jjucutan | (SERVICES-38555) Apple - German (DE) Retail Contract
 * 02/18/2020 | jjucutan | (SERVICES-38555) switched italics to english instead of german contents
 * 02/18/2020 | jjucutan | (SERVICES-38555) removed breaklines and replace with pipeline on headings
 * 08/20/2020 | jjucutan | (SERVICES-38555) created version 3
 */

const renderOfferLetter = function() {
  "use strict";
  $("#markup").html("").append(
    $('<div class="offerClause"/>').append(
      $('<div id="srt_eform_logo" class="pull-right"/>').html(
        '<img class="img-responsive" alt="Apple Logo" src="<$link;/map_images/main/RedCarpet/FormTemplates/DE_Retail_Contract/img/logo_black.png>"/>'
      )
    ),
    $('<div class="offerClause"/>').append(
      $('<p/>').append(
        $('<strong/>').append(
          (EMPLOYEE.DE_Retail_Offer_Type.indexOf("Fixed Term") >= 0) &&
          "Befristeter ",
          "Arbeitsvertrag",
          "<br>",
          (EMPLOYEE.DE_Retail_Offer_Type.indexOf("Fixed Term") >= 0) &&
          $('<em/>').append(
            "Fixed Term ",
            "Employment Contract"
          )
        )
      )
    ),
    $('<div class="offerClause"/>').append(
      $('<p/>').append(
        "zwischen",
        "<br>",
        $('<em/>').append(
          "between"
        )
      ),
      $('<p/>').append(
        "Apple Retail Germany B.V. &amp; Co. KG",
        "<br>",
        "Thurn-und-Taxis-Platz 6",
        "<br>",
        "60313 Frankfurt am Main",
        "<br>",
        "Deutschland"
      ),
      $('<p/>').append(
        "(im Folgenden \"<strong>Arbeitgeber</strong>\")",
        "<br>",
        $('<em/>').append(
          "(hereinafter referred to as \"<strong>Employer</strong>\")"
        )
      ),
      $('<p/>').append(
        "und",
        "<br>",
        $('<em/>').append(
          "and"
        )
      ),
      $('<p/>').append(
        EMPLOYEE.First_Name,
        " ",
        EMPLOYEE.Last_Name,
        "<br>",
        EMPLOYEE.Full_Address
      ),
      $('<p/>').append(
        "(im Folgenden \"<strong>Arbeitnehmer</strong>\")",
        "<br>",
        $('<em/>').append(
          "(hereinafter referred to as \"<strong>Employee</strong>\")"
        )
      ),
      $('<p/>').append(
        "wird folgender Arbeitsvertrag geschlossen:",
        "<br>",
        $('<em/>').append(
          "the following Employment Contract shall be concluded:"
        )
      ),
      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          "Gültigkeitserfordernis",
            " | ",
          $('<em/>').append(
            "Condition Precedent"
          )
        )
      ),
      $('<p/>').append(
          "Der Arbeitsvertrag steht unter der suspensiven Bedingung, dass die von den zuständigen Behörden erteilten notwendigen Aufenthalts- und/oder Arbeitsbewilligungen vorhanden sind.",
        "<br>",
        $('<em/>').append(
          "The Employment Agreement is conditional on the grant of all necessary work permits by the competent authorities."
        ),
      ),

      // Insert if DE_Retail_Offer_Type is standard
      (EMPLOYEE.DE_Retail_Offer_Type === "Standard") &&
      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          "Beginn und Dauer des Arbeitsverhältnisses",
          " | ",
          $("<em/>").append(
            "Commencement and terms of the employment relationship"
          )
        )
      ),
      (EMPLOYEE.DE_Retail_Offer_Type === "Standard") &&
      $('<p/>').append(
        "Der Arbeitsvertrag beginnt am ",
        EMPLOYEE.getStartDate('de'),
        " und ist unbefristet.",
        "<br>",
        $('<em/>').append(
          "The Employment Contract starts on ",
          EMPLOYEE.getStartDate('en'),
          " for an unlimited period."
        ),
      ),
      // End insert if DE_Retail_Offer_Type is standard

      // Insert if DE_Retail_Offer_Type is fixed term
      (EMPLOYEE.DE_Retail_Offer_Type.indexOf("Fixed Term") >= 0) &&
      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          "Beginn des Arbeitsverhältnisses, Befristung",
          " | ",
          $("<em/>").append(
            "Commencement of Employment, Fixed-term"
          ),
        )
      ),
      (EMPLOYEE.DE_Retail_Offer_Type.indexOf("Fixed Term") >= 0) &&
      $('<p/>').append(
        "Der Arbeitsvertrag beginnt am ",
        EMPLOYEE.getStartDate('de'),
        ".",
        "<br>",
        $('<em/>').append(
          "The Employment Contract begins on ",
          EMPLOYEE.getStartDate('en')
        ),
        "."
      ),
      (EMPLOYEE.DE_Retail_Offer_Type.indexOf("Fixed Term") >= 0) &&
      $('<p/>').append(
        "Der Arbeitsvertrag ist befristet und endet, ohne dass hierfür eine Kündigung notwendig ist (wenn er nicht vorher gemäß den restlichen Regelungen in diesem Vertrag früher gekündigt wurde), am ",
        EMPLOYEE.getEndDate('de'),
        ".",
        "<br>",
        $('<em/>').append(
          "This is a fixed-term contract that will end automatically (unless terminated earlier in accordance with the remainder of this contract) without the need for further notice on ",
          EMPLOYEE.getEndDate("en")
        ),
        "."
      ),
      // End insert if DE_Retail_Offer_Type is fixed term

      // Insert if DE_Retail_Offer_Type is FWE Seasonal
      (EMPLOYEE.DE_Retail_Offer_Type === "Fixed Term Seasonal") &&
      $('<p/>').append(
        "Der Befristungsgrund ist der zusätzlichen kurzfristigen Personalbedarf während des saisonbedingten erhöhten Kun-denaufkommens (insbesondere Vorweih-nachts- und Weihnachtszeit) im Apple Store in ",
        EMPLOYEE.DE_Retail_Location,
        ".",
        '<br>',
        $("<em/>").append(
          "The reason for the fixed term is additional short-term staffing needs for the expected higher volume of customers (especially during the pre-Christmas and Christmas period) in the Apple Store in ",
          EMPLOYEE.DE_Retail_Location,
        ),
        "."
      ),
      // End insert if DE_Retail_Offer_Type is FWE Seasonal

      // Insert if DE_Retail_Offer_Type is Fixed Term Fixed Purpose
      (EMPLOYEE.DE_Retail_Offer_Type === "Fixed Term Fixed Purpose") &&
      $('<p/>').append(
          "Der Befristungsgrund ist ",
          EMPLOYEE.DE_FT_FP,
          ".",
        '<br>',
        $("<em/>").append(
          "The reason for the fixed term is ",
          EMPLOYEE.DE_FT_FP,
        ),
        "."
      ),
      (EMPLOYEE.DE_Retail_Offer_Type === "Fixed Term Fixed Purpose") &&
      $('<p/>').append(
      ),
      // End insert if DE_Retail_Offer_Type is Fixed Term Fixed Purpose

      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          'Personalfragebögen / Angaben des Arbeitnehmers',
          ' | ',
          $('<em/>').append(
            'Personal data sheets / Employee\'s data'
          )
        )
      ),
      $('<p/>').append(
        'Die diesem Arbeitsvertrag anliegenden Personalfragebögen sind wesentliche Grundlage des Arbeitsvertrags. Unrichtige oder unvollständige Angaben des Arbeitnehmers in diesen Unterlagen oder anlässlich der Anstellung gegenüber dem Arbeitgeber berechtigen den Arbeitgeber zur Anfechtung oder außerordentlichen Kündigung des Arbeitsvertrages.',
        '<br>',
        $('<em/>').append(
          'The information in the personal information sheets attached to this Employment Contract is a material basis of this Employment Contract. The Employer shall be entitled to revoke or summarily terminate the employment, if the information submitted by the Employee in the data sheet or to the Employer during the employment procedure is false or incomplete.'
        )
      ),
      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          'Arbeitszeit / Mehrarbeit, Überstunden',
          ' | ',
          $('<em/>').append(
             'Working time / Extra hours, overtime'
          )
        )
      ),

      // If Retail Job Title is not Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader
      (["Flag leader", "General Manager", "Manager", "Market Leader", "Senior Manager", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) < 0) &&
      $('<p/>').append(
        'Die Arbeitszeit und die Pausen regeln sich nach den gesetzlichen und betrieblichen Bestimmungen. Die Dauer der Arbeitszeit beträgt ',
        EMPLOYEE.EMEIA_Standard_Weekly_Hours,
        ' Stunden pro Woche. Bei betrieblichen Erfordernissen kann sich im Einzelfall auch eine längere Arbeitszeit ergeben. Soweit nichts anderes vereinbart ist, werden Anfang und Ende der Arbeitszeit einseitig vom Arbeitgeber im Rahmen seines Direktionsrechtes unter Berücksichtigung des gültigen Ladenschlussgesetzes und den diesbezüglichen Ausnahmevorschriften festgelegt.',
        '<br>',
        $('<em/>').append(
          'Working time and break times shall be governed by the statutory and by the company regulations. The Employee’s weekly working time is ',
          EMPLOYEE.EMEIA_Standard_Weekly_Hours,
          ' hours. At times the Employee may be required to work more to meet the needs of the business.  Unless otherwise agreed upon, the Employer may fix start and end of working hours at its sole discretion, based on its right to issue instructions and under consideration of the applicable Shop Closing Act (Ladenschlussgesetz) and of the relevant exception provisions.'
        )
      ),

      (["Flag leader", "General Manager", "Manager", "Market Leader", "Senior Manager", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) < 0) &&
      $('<p/>').append(
        'Der Arbeitnehmer ist verpflichtet, Mehrarbeit, sowie Nacht-, Sonntags-, und Feiertagsarbeit im rechtlich zulässigen Rahmen zu leisten, wenn es die Belange des Betriebes erfordern. Ansprüche hierfür bestehen nur, wenn die Arbeiten vom Arbeitgeber angeordnet oder nachträglich ausdrücklich genehmigt wurde.',
        '<br>',
        $('<em/>').append(
          'If required for business reasons, the Employee shall be obliged to work extra time, night, Sunday and holiday hours within the frame permitted by law. The Employee only has claims for such hours worked if the work was instructed by the Employer or subsequently expressly approved by the Employer. '
        )
      ),
      (["Flag leader", "General Manager", "Manager", "Market Leader", "Senior Manager", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) < 0) &&
      $('<p/>').append(
        'Angeordnete oder genehmigte Überstunden werden durch eine anteilige Überstundenvergütung wie folgt ausgeglichen:',
        '<br>',
        'Jede Stunde, die in der Woche zusätzlich zur vereinbarten Arbeitszeit geleistet wird:',
        '<br>',
        'Bis (einschließlich) 40 Stunden gilt der entsprechende Bruttostundenlohn gem. § 6 dieses Arbeitsvertrags.',
        '<br>',
        'Über 40 Stunden wird darüber hinaus ein Zuschlag in Höhe von 25 % gewährt.',
        '<br>',
        $('<em/>').append(
          'Requested or approved overtime hours are compensated by a proportionate overtime payment based on the following:',
          '<br>',
          'In one working week, any hours of work in addition to the agreed working time:',
          '<br>',
          'Up to (and including) 40 hours will be paid at the gross hourly rate according to § 6 of this Employment Contract.',
          '<br>',
          'Over 40 hours will be paid at the gross hourly rate plus a premium of 25%.'
        )
      ),
      // End if Retail Job Title is not Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader

      // If Retail Job Title is any of Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader
      (["Flag leader", "General Manager", "Manager", "Market Leader", "Senior Manager", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
        'Der Arbeitnehmer ist als Vollzeitkraft eingestellt und verpflichtet sich, seine ganze Arbeitskraft im Interesse von Apple einzusetzen. Die wöchentliche Arbeitszeit beträgt 40 Stunden.',
        '<br>',
        $('<em/>').append(
          'The Employee is employed as a full-time employee and is therefore required to devote the Employee’s full time and attention to the interests of Apple. Apple’s normal full-time working week is 40 hours.'
        )
      ),
      (["Flag leader", "General Manager", "Manager", "Market Leader", "Senior Manager", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
        'Der Arbeitnehmer ist verpflichtet, bei Bedarf Nacht-, Sonn- und Feiertagsarbeit sowie Mehrarbeit und Überstunden zu leisten, soweit dies rechtlich zulässig ist.',
        '<br>',
        $('<em/>').append(
          'If necessary, the Employee is obliged to work at night, on Sundays and Public Holidays and to perform excess work and work overtime, to the extent that this is legally permissible.'
        )
      ),
      // End if f Retail Job Title is any of Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader

      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          'Tätigkeit, Änderungsvorbehalt, Lernpflicht, Dienstort, Versetzung',
          ' | ',
          $('<em/>').append(
            'Activity, reservation for amending the contract, duty of learning, place of employment, relocation'
          )
        )
      ),

      // If Retail Job Title any of Flag Leader, Market Leader, Store Leader
      (["Flag Leader", "Market Leader", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
        'Aufgrund seiner Arbeitsaufgaben und seiner maßgeblichen Einflussmöglichkeit auf Entscheidungen gehört der Arbeitnehmer zu den leitenden Angestellten im Sinne von § 5 Abs. 3 Betriebsverfassungsgesetz. ',
        '<br>',
        $('<em/>').append(
          'Because of the Employee’s duties and substantial decision-making powers, the Employee is a managerial employee according to section 5 para. 3 of the German Works Constitution Act.'
        )
      ),
      // End if Retail Job Title any of Flag Leader, Market Leader, Store Leader

      $('<p/>').append(
        'Das Arbeitsverhältnis bezieht sich auf eine Tätigkeit als ',
        EMPLOYEE.EMEIA_Job_Title,
        '.',
        '<br>',
        $('<em/>').append(
          'The activities shall include work as ',
          EMPLOYEE.EMEIA_Job_Title,
          '.'
        )
      ),
      $('<p/>').append(
        'Der Arbeitgeber behält sich das Recht vor, dem Arbeitnehmer eine andere oder zusätzliche gleichwertige Tätigkeit – auch an einem anderen Ort – zu übertragen, soweit dies dem Arbeitnehmer nach seinen Kenntnissen und Fähigkeiten zumutbar ist.',
        '<br>',
        $('<em/>').append(
          'The Employer reserves the right to assign to the Employee a different or an additional employment duty of equal value, including at one of its other locations, provided they are reasonable, taking into account his skills and knowledge.',
          '<br>'
        )
      ),
      $('<p/>').append(
        'Ändern sich, insbesondere aus technisch-organisatorischen und/oder Wettbewerbsgründen, die Anforderungen des Arbeitsplatzes an den Arbeitnehmer, so ist dieser verpflichtet, sich die notwendigen zusätzlichen Kenntnisse und Fertigkeiten anzueignen, wenn und soweit er hierzu in der Lage ist. Soweit rechtlich vorgeschrieben, werden die erforderlichen Schulungsmaßnahmen während der Arbeitszeit und auf Kosten des Arbeitgebers  durchgeführt.',
        '<br>',
        $('<em/>').append(
          'If the Employee’s job requirements change, particularly due to technical-organisational and/or competition reasons, the Employee is then obliged to acquire the necessary additional knowledge and skills if and in so far as he is capable of doing so. If prescribed by law, the necessary training will take place during working hours at the Employer’s expense.'
        )
      ),

      // If Retail Job Title is Flag Leader or Market Leader
      (["Flag Leader", "Market Leader"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
        'Der Dienstort ist bis auf Weiteres der Wohnsitz des Arbeitnehmers. Der Arbeitnehmer wird jedoch auf Wunsch von Apple im großen Umfang reisen müssen, insbesondere zu den Apple Stores im räumlichen Zuständigkeitsbereich des Arbeitnehmers.',
        '<br>',
        $('<em/>').append(
          'The place of employment is the Employee’s home until further notice. However, the Employee shall travel upon Apple\'s request to a great extent, in particular to the Apple Stores in the Employee\’s local area of responsibility.'
        )
      ),
      // End if Retail Job Title is Flag Leader or Market Leader

      // If Retail Job Title is not any of Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader
      (["Flag leader", "General Manager", "Manager", "Market Leader", "Senior Manager", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) < 0) &&
      $('<p/>').append(
        'Dienstort ist ',
        EMPLOYEE.DE_Retail_Location,
        '.',
        '<br>',
        $('<em/>').append(
          'The place of employment is ',
          EMPLOYEE.DE_Retail_Location,
          '.'
        )
      ),
      // End if Retail Job Title is not any of Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader

      // If Retail Job Title is any of General Manager, Manager, Senior Manager, Store Leader
      (["General Manager", "Manager", "Senior Manager", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
        'Dienstort ist bis auf Weiteres ',
        EMPLOYEE.DE_Retail_Location,
        '.',
        '<br>',
        $('<em/>').append(
          'The place of employment is ',
          EMPLOYEE.DE_Retail_Location,
          ' until further notice.'
        )
      ),
      // End if Retail Job Title is any of General Manager, Manager, Senior Manager, Store Leader

      $('<p/>').append(
        'Der Arbeitgeber behält sich das Recht vor, den Arbeitnehmer unter Wahrung seiner Interessen innerhalb des Konzerns in ein anderes Konzernunternehmen zu versetzen.',
        '<br>',
        'Die dem Arbeitnehmer in einem Konzernunternehmen zugewiesene Stelle muss dessen Kenntnissen und Fähigkeiten entsprechen und darf sich in keiner Weise vergütungsmindernd auswirken.',
        '<br>',
        $('<em/>').append(
          'The Employer reserves the right, while maintaining the Employee\'s interests, to transfer the Employee to another company within the corporate group. ',
          '<br>',
          'The position assigned to the Employee in the other company must accord with his knowledge and skills and may in no way whatsoever result in a lower amount of remuneration.'
        )
      ),

      // If Retail Job Title is any of Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader
      (["Flag leader", "General Manager", "Manager", "Market Leader", "Senior Manager", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
        'Obwohl das Aufgabengebiet des Arbeitnehmers ein generell selbständiges und innovatives Arbeiten erfordert, gehört es zu den Pflichten des Arbeitnehmers, die Festlegung der Dringlichkeit von Arbeiten nicht ohne Zustimmung vom Line Manager vorzunehmen und den Line Manager über beabsichtigte Vorhaben und den Stand von Arbeiten in regelmäßigen Abständen unaufgefordert zu unterrichten.',
        '<br>',
        $('<em/>').append(
          'Even though the scope of the Employee duties is generally of an independent and innovative nature, the Employee is obliged to refrain from determining the priority (urgency) of specific tasks without the consent of the Line Manager. The Employee is also obliged to inform the Line Manager unsolicited and in regular intervals, of any anticipated projects and the status of development of any specific projects.'
        )
      ),
      // End if Retail Job Title is any of Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader

      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          'Arbeitsentgelt',
          ' | ',
          $('<em/>').append(
            'Remuneration'
          )
        )
      ),

      // If Retail Job Title is not any of Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader
      (["Flag leader", "General Manager", "Manager", "Market Leader", "Senior Manager", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) < 0) &&
      $('<p/>').append(
        'Der Arbeitnehmer erhält eine monatliche Bruttovergütung in Höhe von Euro ',
        $('<strong/>').append(
          EMPLOYEE.DE_Salary_Amount
        ),
        '. Dies entspricht einem Bruttostundenlohn in Höhe von Euro ',
        $('<strong/>').append(
          EMPLOYEE.DE_Hourly_Salary_Amount
        ),
        '.',
        '<br>',
        $('<em/>').append(
          'The Employee receives a monthly gross salary in the amount of Euro ',
          $('<strong/>').append(
            EMPLOYEE.DE_Salary_Amount
          ),
          '. This corresponds to a gross hourly rate in the amount of Euro ',
          $('<strong/>').append(
            EMPLOYEE.DE_Hourly_Salary_Amount
          ),
          '.'
        )
      ),
      // End if Retail Job Title is not any of Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader

      // If Retail Job Title is any of Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader
      (["Flag leader", "General Manager", "Manager", "Market Leader", "Senior Manager", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
        'Der Arbeitnehmer erhält eine jährliche Bruttovergütung in Höhe von Euro ',
        $('<strong/>').append(
          EMPLOYEE.DE_Salary_Amount
        ),
        '- zahlbar anteilig in 12 gleichen Monatsgehältern.',
        '<br>',
        $('<em/>').append(
          'The Employee receives an annual gross salary in the amount of Euro ',
          $('<strong/>').append(
            EMPLOYEE.DE_Salary_Amount
          ),
          'payable pro rata in 12 equal monthly salaries.'
        )
      ),
      // End if Retail Job Title is any of Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader

      // If Retail Job Title is any of Flag Leader, Market Leader, Store Leader
      (["Flag leader", "Market Leader", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
        'Mit dieser Vergütung ist sämtliche Über- und Mehrarbeit, einschließlich eventuell im Einzelfall anfallender Nacht-, Sonntags-, und Feiertagsarbeit abgegolten.',
        '<br>',
        $('<em/>').append(
          'This remuneration is deemed to cover any additional and overtime hours, including, if relevant, any night work, Sunday work, or public holiday work.'
        )
      ),
      // End if Retail Job Title is any of Flag Leader, Market Leader, Store Leader

      // If Retail Job Title is any of General Manager, Manager, Senior Manager, Store Leader
      (["General Manager", "Manager", "Senior Manager", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
        'Mit dieser Vergütung ist erforderliche Über- und Mehrarbeit, einschließlich eventuell im Einzelfall anfallender Nacht-, Sonntags-, und Feiertagsarbeit bis zu einem zeitlichen Aufwand in Höhe von 10% über der vertraglich geschuldeten wöchentlichen Arbeitszeit gemäß Absatz 1 der Klausel „Arbeitszeit / Mehrarbeit, Überstunden“ dieses Vertrages abgegolten.',
        '<br>',
        'Angeordnete oder genehmigte Überstunden, die über 10% der vertraglich geschuldeten wöchentlichen Arbeitszeit gemäß Absatz 1 der Klausel „Arbeitszeit / Mehrarbeit, Überstunden“ dieses Vertrages hinausgehen, werden wie folgt ausgeglichen:',
        '<br>',
        'Für Vollzeitler:',
        '<br>',
        'Bei Überschreitung von 44 Stunden pro Woche wird Über- oder Mehrarbeit mit 125% des jeweils anfallenden Stundenlohns vergütet. ',
        '<br>',
        'Für Teilzeitler:',
        '<br>',
        'Bis zu einer Arbeitszeit von 40 Stunden pro Woche wird Über- oder Mehrarbeit mit 100% des jeweils anfallenden Stundenlohns vergütet. ',
        '<br>',
        'Bei Überschreitung von 40 Stunden pro Woche wird Über- oder Mehrarbeit mit 125% des jeweils anfallenden Stundenlohns vergütet.',
        '<br>',
        $('<em/>').append(
          'This remuneration includes any additional and overtime hours, including, if relevant, any night work, Sunday work, or public holiday work of up to 10% of the standard weekly hours per paragraph 1 of the clause Working time / Extra hours, overtime of this contract.',
          '<br>',
          'Mandated or approved overtime hours exceeding 10% of the standard weekly hours per paragraph 1 of the clause Working time / Extra hours of this contract are compensated as follows:',
          '<br>',
          'For Fulltime working:',
          '<br>',
          'Over 44 hours per week any additional overtime will be paid at 125% of the gross hourly rate.',
          '<br>',
          'Part time',
          '<br>',
          'Up to 40 hours per week any additional overtime will be paid at 100% of the gross hourly rate.',
          '<br>',
          'Over 40 hours per week any additional overtime will be paid at 125% of the gross hourly rate.'
        )
      ),
      // End if Retail Job Title is any of General Manager, Manager, Senior Manager, Store Leader

      $('<p/>').append(
        'Die Zahlung erfolgt durch Banküberweisung und ist  spätestens am Monatsletzten des Abrechnungsmonats auszuzahlen.',
        '<br>',
        $('<em/>').append(
          'Payment shall be made by bank transfer, at the latest on the last day of the accounting month.'
        )
      ),

      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          'Allgemeine Pflichten',
          ' | ',
          $('<em/>').append(
            'General duties'
          )
        )
      ),

      $('<p/>').append(
        'Der Arbeitnehmer verpflichtet sich, alle ihm übertragenen Aufgaben sorgfältig und gewissenhaft auszuführen und in jeder Hinsicht die Interessen des Arbeitgebers zu wahren.',
        '<br>',
        $('<em/>').append(
          'The Employee is obliged to perform the tasks assigned to him with diligence and prudence and to safeguard Employer\'s interests in any respect.'
        )
      ),

      $('<p/>').append(
        'Die internen Verhaltensregeln von Apple Deutschland sind Bestandteil dieses Vertrages und der Arbeitnehmer verpflichtet sich, diese zu beachten. Die Apple Retail Deutschland HR Web und Apple Retail Website enthalten weiterhin die jeweils geltenden verschiedenen Apple Firmenordnungen und -verfahren, die der Arbeitnehmer beachten muss. Diese Ordnungen und Verfahren können von Apple in alleinigem billigen Ermessen ohne Ankündigungsfrist verändert oder aufgehoben werden. ',
        '<br>',
        $('<em/>').append(
          'The internal code of conduct of Apple Germany is considered to be part of this Employment Contract and the Employee pledges him-/herself to observe them. The Apple Retail Germany HR Web and Apple Retail Web also contain statements of various Apple policies and procedures in force from time to time which the Employee is required to comply. These policies and procedures may be amended or withdrawn at the Employer’s absolute reasonable discretion without prior notice.'
        )
      ),

      $('<p/>').append(
        'Der Arbeitnehmer verpflichtet sich, seine ganze Arbeitskraft ausschließlich dem Arbeitgeber zu widmen. Während der Dauer des Arbeitsvertrages ist jede Nebenbeschäftigung, gleich ob entgeltlich oder unentgeltlich, anzuzeigen und nur mit vorheriger schriftlicher Zustimmung des Arbeitgebers zulässig. Die Zustimmung ist zu erteilen, wenn die Interessen des Arbeitgebers und der Arbeitsvertrag durch die Nebentätigkeit nicht beeinträchtigt werden. Die Zustimmung ist jederzeit, gegebenenfalls unter Einhaltung einer angemessenen Frist, widerruflich, sofern eine Beeinträchtigung des Arbeitsvertrages eintritt. Das Gleiche gilt für sonstige Tätigkeiten, welche die Interessen des Arbeitgebers berühren können.',
        '<br>',
        $('<em/>').append(
        'The Employee shall be obliged to devote the Employee’s entire working power exclusively to the Employer. For the term of the Employment Contract, the Employee must immediately notify the Employer of any secondary work, whether this be paid or unpaid, and is only permitted to perform such work with the prior written consent of the Employer. Consent must be granted if the interests of the Employer and the provisions of the Employment Contract are not adversely affected by the secondary work. The consent can be revoked at any time, with a reasonable notice period if applicable, if adverse effects on the Employment Contract arise. The same applies to other activities that can affect the Employer\'s interests.'
        )
      ),

      $('<p/>').append(
        'Während der Dauer des Arbeitsvertrages gilt das gesetzliche Wettbewerbsverbot der §§ 60, 61 HGB.',
        '<br>',
        $('<em/>').append(
        'The statutory prohibition on competition as defined under sections 60, 61 of the German Commercial Code applies during the entire term of the Employment Contract.'
        )
      ),

      $('<p/>').append(
        'Der Arbeitnehmer verpflichtet sich, nach Weisung des Arbeitgebers an beruflichen und gesetzlichen Weiterbildungs- und Informationsmaßnahmen auch außerhalb des regulären Betriebes teilzunehmen. ',
        '<br>',
        $('<em/>').append(
        'The Employee shall be obliged to participate in professional and statutory education and information measures also outside of the regular business.'
        )
      ),

      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          'Arbeitsverhinderung, Erkrankung',
          ' | ',
          $('<em/>').append(
          'Absence from work, sick leave'
          )
        )
      ),

      $('<p/>').append(
        'Jede Arbeitsverhinderung und deren voraussichtliche Dauer ist dem Arbeitgeber unverzüglich unter Angabe der Gründe mitzuteilen; wenn möglich ist die Arbeitsverhinderung telefonisch und nicht später als zwei Stunden vor Arbeitsbeginn bekannt zu geben. Ist die Arbeitsverhinderung vorher bekannt, so muss diese rechtzeitig dem Arbeitgeber mitgeteilt werden.',
        '<br>',
        $('<em/>').append(
        'The Employer shall be notified immediately about each incapacity to work, its prospective duration and the reasons for such incapacity. If possible, the information shall be given via telephone and not later than two hours before start of work. If the absence is known beforehand, the Employer shall be informed in due time.  '
        )
      ),

      $('<p/>').append(
        'Der Arbeitnehmer verpflichtet sich im Krankheitsfalle spätestens am dritten Kalendertag nach Eintritt der Erkrankung eine ärztliche Arbeitsunfähigkeitsbescheinigung mit Angaben über die voraussichtliche Dauer der Erkrankung unaufgefordert unverzüglich vorzulegen. Die Übersendung der Arbeitsunfähigkeitsbescheinigung ist vorab per E-Mail an die jeweilige Filiale des Arbeitgebers zu senden.',
        '<br>',
        'Dauert die Arbeitsunfähigkeit länger als in der Bescheinigung angegeben, sind eine oder mehrere Folgebescheinigungen vorzulegen. Die Pflicht zur Vorlage einer Folgebescheinigung besteht auch nach Ablauf des sechswöchigen Entgeltfortzahlungszeitraums. Der Arbeitgeber kann jederzeit von einzelnen Arbeitnehmern auch bei eintägiger Erkrankung die Vorlage einer Arbeitsunfähigkeitsbescheinigung bereits am ersten Tag der Erkrankung verlangen.',
        '<br>',
        $('<em/>').append(
        'In the event of sickness, the Employee shall be obliged to submit not later than three days after commencement of sickness and without special request a medical certificate confirming unfit for work and stating the prospective duration of sick leave without delay. The unfit-for-work certificate shall be submitted beforehand via email to the respective branch office of the Employer.',
        '<br>',
        'If this absence lasts longer than indicated in the certificate, one of more follow-up certificates shall be presented to the employer. The obligation to provide with a follow-up certificate continues after the end of the 6 weeks salary payment period. The Employer is entitled to demand from any employee the presentation of an doctor’s certificate already on the first day of sick leave at any time.'
        )
      ),

      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          'Dienstkleidung',
          ' | ',
          $('<em/>').append(
          'Service clothing'
          )
        )
      ),

      $('<p/>').append(
        'Der Arbeitnehmer ist verpflichtet, während seiner Arbeitszeit Dienstkleidung zu tragen, die ihm vom Arbeitgeber unentgeltlich zur Verfügung gestellt wird.',
        '<br>',
        $('<em/>').append(
        'The Employee is obliged to wear during the working time service clothing, that is made available by the Employer free of charge.'
        )
      ),

      $('<p/>').append(
        'Der Arbeitgeber trägt die Kosten einer Ersatzbeschaffung der Dienstkleidung.',
        '<br>',
        $('<em/>').append(
        'The Employer bears the costs for the substitution of the service clothing.'
        )
      ),

      $('<p/>').append(
        'Der Arbeitnehmer verpflichtet sich, die ihm überlassene Dienstkleidung regelmäßig zu reinigen; eventuell anfallende Kosten gelten als mit dem gezahlten Gehalt als abgegolten.',
        '<br>',
        $('<em/>').append(
        'The Employee shall be obliged to clean the working clothing at regular intervals. Possibly incurred costs shall be considered as remunerated with the payment of salary.'
        )
      ),

      $('<p/>').append(
        'Der Arbeitnehmer hat die Dienstkleidung pfleglich zu behandeln und es ist ihm untersagt, diese in seiner Freizeit zu verwenden.',
        '<br>',
        $('<em/>').append(
        'The Employee shall look after the service clothing carefully and it is forbidden to wear it in their free time.'
        )
      ),

      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          'Rückgabepflicht ',
          ' | ',
          $('<em/>').append(
          'Return of Property'
          )
        )
      ),

      $('<p/>').append(
        'Der Arbeitnehmer hat auf die jederzeitige Aufforderung des Arbeitgebers und in jeglichem Falle der Beendigung des Arbeitsverhältnisses sämtliche in seinem Besitz befindlichen Gegenstände, die im Eigentum des Arbeitgebers oder eines anderen Unternehmens des Apple Konzerns stehen, einschließlich und ohne Beschränkung: Apple T-Shirt oder sonstige Dienstkleidung, Ausbildungsmaterialien, Schlüssel, Mobiltelefone, Sicherheitsausweise, Kreditkarten und Ausrüstungsgegenstände, sämtliche DVDs, CDs, Disketten, Dokumente und Aufzeichnungen jeder Art, einschließlich etwaiger Abschriften oder Kopien, an den Arbeitgeber unverzüglich herauszugeben.',
        '<br>',
        $('<em/>').append(
        'The Employee shall whenever requested by the Employer and in any event upon termination of the employment relationship, return to the Employer without undue delay all property in his possession belonging to the Employer or any other member of the Apple group, including without limitation:, Apple T-shirt or other work clothing, training materials, keys, mobile phones, security passes, credit cards, equipment, all DVDs, CDs,  discs, documents and drawings of all types, including reproductions and copies.'
        )
      ),

      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          'Urlaub  ',
          ' | ',
          $('<em/>').append(
          'Vacation'
          )
        )
      ),

      // Insert if Retail Job Title is not Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader
      (["Flag leader", "General Manager", "Manager", "Market Leader", "Senior Manager", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) < 0) &&
      $('<p/>').append(
        "Als Urlaubsanspruch werden 30 Arbeitstage im Kalenderjahr vereinbart, für deren Berechnung von einer 5-Tage-Woche ausgegangen wird. Diese werden entsprechend Ihrer Standardarbeitsstunden anteilig aufgeteilt. Hat der Arbeitnehmer zum Zeitpunkt seines Ausscheidens mehr Urlaub erhalten, als ihm zusteht, so hat er das hierfür gezahlte Urlaubsentgelt zurückzuzahlen. Dies gilt nicht hinsichtlich des gesetzlichen Mindesturlaubs, wenn die Überzahlung darauf beruht, dass der Arbeitnehmer nach erfüllter gesetzlicher Wartezeit in der ersten Hälfte des Kalenderjahres ausscheidet.",
        '<br>',
        $("<em/>").append(
        'Annual (calendar year) vacation shall amount to 30 working days, taking account of a 5-day working week. These should be pro-rated on your standard working hours. The Employee shall pay back the surplus of vacation pay, should the Employee at the time of its leaving the company have received more leave than it is entitled to. This provision shall not apply to the statutory minimum leave, if the overpay is due to the Employee’s leaving the company during the first half of the calendar year after expiry of the statutory waiting time.'
        )
      ),
      // End insert if Retail Job Title is not Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader

      // Insert if DE Retail Offer Type is Fixed Term 
      (EMPLOYEE.DE_Retail_Offer_Type.indexOf("Fixed Term") >= 0) &&
      $('<p/>').append(
        "Für jeden vollen Monat des Bestehens dieses Arbeitsverhältnisses hat der Arbeitnehmer einen Anspruch auf einen Zwölftel dieses Jahresurlaubs.",
        '<br>',
        $("<em/>").append(
        "For each full month of this fixed term employment, the Employee can claim one twelfth of this annual calendar year vacation."
        )
      ),
      // End insert if DE Retail Offer Type is Fixed Term 

      // Insert if Retail Job Title is not Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader
      (["Flag leader", "General Manager", "Manager", "Market Leader", "Senior Manager", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) < 0) &&
      $('<p/>').append(
        "Ist zum Zeitpunkt nach der Kündigung dieses Arbeitsvertrags der Urlaubsanspruch noch nicht erfüllt, ist der Urlaub, soweit dies dienstlich oder betrieblich möglich ist, während der Kündigungsfrist zu gewähren und zu nehmen. Soweit der Urlaub nicht gewährt werden kann oder die Kündigungsfrist nicht ausreicht, ist der Urlaub abzugelten.",
        '<br>',
        $("<em/>").append(
        "Should the Employee be entitled to any leave at the time after termination of the Employment Contract, such leave shall be granted and taken during the termination notice period as far as it is possible in the frame of company duties and operations. The leave shall be remunerated by way of payment, should granting of leave not be possible or should the termination period not be long enough."
        )
      ),
      // End insert if Retail Job Title is not Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader

      // Insert if Retail Job Title is any of Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader
      (["Flag leader", "General Manager", "Manager", "Market Leader", "Senior Manager", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
          "Arbeitnehmer erhalten bei Vollzeittätigkeit im Kalenderjahr 30 Arbeitstage Urlaub, für deren Berechnung von einer 5-Tage-Woche ausgegangen wird; bei Teilzeittätigkeit erfolgt die Berechnung zeitanteilig.",
        $("<em/>").append(
        "Employees working full-time receive 30 working days leave in the calendar year, calculated on the basis of a 5-day working week; in case of part-time work the Employee’s entitlement shall be calculated on a pro rata basis."
        )
      ),
      (["Flag leader", "General Manager", "Manager", "Market Leader", "Senior Manager", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
          "Der Urlaub ist in Abstimmung mit dem Line Manager zu nehmen.",
        $("<em/>").append(
        "The leave shall be taken after consulting with the Line Manager."
        )
      ),
      (["Flag leader", "General Manager", "Manager", "Market Leader", "Senior Manager", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
        "Hat der Arbeitnehmer zum Zeitpunkt seines Ausscheidens mehr Urlaub erhalten, als ihm zusteht, so hat er das hierfür gezahlte Urlaubsentgelt zurückzuzahlen. Dies gilt nicht hinsichtlich des gesetzlichen Mindesturlaubs, wenn die Überzahlung darauf beruht, dass der Arbeitnehmer nach erfüllter gesetzlicher Wartezeit in der ersten Hälfte des Kalenderjahres ausscheidet.",
        $("<em/>").append(
        "The Employee shall pay back any surplus of vacation pay, if the Employee at the time of termination of the employment have received more leave than it is entitled to. This provision shall not apply to the statutory minimum leave, if the overpayment is due to Employee’s leaving Apple during the first half of the calendar year after expiry of the statutory waiting time."
        )
      ),
      (["Flag leader", "General Manager", "Manager", "Market Leader", "Senior Manager", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
        "Ist zum Zeitpunkt nach der Kündigung dieses Arbeitsvertrags der Urlaubsanspruch noch nicht erfüllt, ist der Urlaub, soweit dies dienstlich oder betrieblich möglich ist, während der Kündigungsfrist zu gewähren und zu nehmen. Soweit der Urlaub nicht gewährt werden kann oder die Kündigungsfrist nicht ausreicht, ist der Urlaub abzugelten.",
        $("<em/>").append(
        "If the Employee has any outstanding leave entitlements at the time of notice of termination, such leave shall be granted and taken during the termination notice period as far as possible in the frame of Apple’s duties and operations. If this is not possible or the notice is too short, the remaining leave shall be paid out."
        )
      ),
      // End insert if Retail Job Title is any of Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader

      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          'Urheberrechte',
          ' | ',
          $('<em/>').append(
          'Copyrights'
          )
        )
      ),

      $('<p/>').append(
        "Soweit Computerprogramme von dem Arbeitnehmer in Wahrnehmung seiner Aufgaben oder nach den Anweisungen des Arbeitgebers geschaffen werden, gilt § 69b Urhebergesetz, mit der Folge, dass ausschließlich der Arbeitgeber zur Ausübung aller vermögensrechtlichen Befugnisse an dem Computerprogramm berechtigt ist.",
        '<br>',
        $('<em/>').append(
        "To the extent that computer programmes have been created by the Employee in the performance of his duties or in accordance with the instructions given by the Employer, section 69b of the German Copyright Act applies, thereby entitling the Employer exclusively to make use of all proprietary rights with regard to the respective computer programme."
        )
      ),

      $('<p/>').append(
        "In allen übrigen Fällen gelten die nachfolgenden Vorschriften.",
        '<br>',
        $('<em/>').append(
        "In all other cases the following provisions apply."
        )
      ),

      $('<p/>').append(
        "Der Arbeitnehmer überträgt dem Arbeitgeber das ausschließliche, zeitlich, räumlich und inhaltlich unbeschränkte Nutzungs- und Verwertungsrecht für alle derzeit bekannten Nutzungsarten, für alle etwaigen nach Urheber-, oder einem anderen Schutzgesetz schutzfähigen Arbeitsergebnisse, die der Arbeitnehmer, während der Dauer des Arbeitsvertrages während der Arbeitszeit oder, sofern der Arbeitnehmer Bezug zu seinen arbeitsvertraglichen Aufgaben haben, auch außerhalb seiner Arbeitszeit erstellt.",
        '<br>',
        $('<em/>').append(
        "The Employee transfers to the Employer the exclusive, unrestricted (with regard to time and content; as well as applying worldwide) right to use and exploit, in all currently known exploitation methods and manners of use, all work results that can be protected under copyright or any other protection law, and which he achieves during the term of the Employment Contract, during his working time, as well as, if and to the extent they are related to his duties under the Employment Contract, off-time."
        )
      ),

      $('<p/>').append(
        "Die Übertragung des Nutzungs- und Verwertungsrechts umfasst insbesondere auch die Erlaubnis zur Bearbeitung und Lizenzvergabe sowie die Übertragung des Nutzungsrechts an Dritte, im In- und Ausland.",
        '<br>',
        $('<em/>').append(
        "The transfer of the right to use and exploit especially also comprises the permission to adapt and to license, as well as to reassign the right of use to third parties, at home and abroad."
        )
      ),

      $('<p/>').append(
        "Der Arbeitgeber ist zur Nutzung und Verwertung der übertragenen Rechte nicht verpflichtet.",
        '<br>',
        $('<em/>').append(
        "The Employer is not obliged to make use or to exploit the rights assigned."
        )
      ),

      $('<p/>').append(
        "Der Arbeitnehmer verzichtet ausdrücklich auf sonstige dem Arbeitnehmer etwa als Urheber oder sonstigen Schutzrechtsinhaber zustehende Rechte an den Arbeitsergebnissen, insbesondere auf das Recht auf Namensnennung, auf Bearbeitung und auf Zugänglichmachung des Werkes. Der Arbeitnehmer versichert, dass er über die Rechte, die er der Gesellschaft übertragen hat, nicht bereits anderweitig – zu eigenem oder fremden Nutzen – verfügt hat und auch nicht verfügen wird.",
        '<br>',
        $('<em/>').append(
        "The Employee explicitly renounces to any right as to the results of his work, assigned to him in his capacity as author or other intellectual property right owner, especially to the right of being named, to adapt and to publish the work. The Employee guarantees that he has not assigned the rights transferred to the Company otherwise, for his own purposes or those of a third party, yet, and that he will not do so either in the future."
        )
      ),

      $('<p/>').append(
          "Die Einräumung von Rechten und der Verzicht auf Rechte sind grundsätzlich mit der allgemeinen Arbeitsvergütung abgegolten und zwar unabhängig davon, ob die Nutzung und Verwertung der Rechte durch den Arbeitgeber erfolgt. Soweit die allgemeine Arbeitsvergütung keine angemessene Beteiligung an der tatsächlichen Nutzung der Urheberrechte darstellt, wird der Arbeitgeber auf das Verlangen des Arbeitnehmers die Differenz zum angemessenen Betrag an diesen zahlen.",
        '<br>',
        $('<em/>').append(
        "The salary in general covers the assignment of rights and the waiver of rights, independently of whether the Employer actually makes use of or exploits the rights. To the extent that the general salary is not adequate with regard to the benefits resulting from the actual use of the copyrights, the Employer will pay, at Employee's request, the difference between the actual salary and the adequate share."
        )
      ),

      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          "Arbeitnehmererfindungen",
          ' | ',
          $('<em/>').append(
          "Employees\' inventions"
          )
        )
      ),

      $('<p/>').append(
        "Soweit von dem Arbeitnehmer Arbeitsergebnisse geschaffen werden, die Erfindungen darstellen, bleiben die Vorschriften des Arbeitnehmererfindungsgesetzes unberührt. Gemäß diesen gesetzlichen Vorschriften gilt insbesondere Folgendes:",
        '<br>',
        $('<em/>').append(
        "If the Employee achieves work results that qualify as inventions, the provisions of the German Act on Employee\'s Inventions remain unaffected. In accordance with these provisions, especially the following applies."
        )
      ),

      $('<p/>').append(
        "Soweit der Arbeitnehmer in Ausführung des Arbeitsvertrags eine Erfindung macht, muss er diese dem Arbeitgeber unverzüglich, spätestens innerhalb von 10 Arbeitstagen, unter Angabe der technischen Aufgabe, der Lösung und des Zustandekommens der Erfindung schriftlich melden. Vorhandene Aufzeichnungen sollen beigefügt werden. Die Meldung soll hervorheben, was der Arbeitnehmer als seinen Anteil an der Erfindung ansieht.",
        '<br>',
        $('<em/>').append(
        "To the extent that the Employee invents an invention in the proper course of the performance of his duties under the Employment Contract, he must notify the Employer in writing without undue delay of this fact, at the latest within ten working days, stating the technical task, the solution and the way in which the invention arose. Eventual notes shall be joined. The notification shall underline what the Employee considers to be his share in the invention."
        )
      ),

      $('<p/>').append(
        "Der Arbeitgeber erklärt dem Arbeitnehmer schriftlich innerhalb von drei Monaten nach Zugang der Meldung, ob er die Diensterfindung unbeschränkt oder beschränkt in Anspruch nehmen will. Mit Zugang der Erklärung der unbeschränkten Inanspruchnahme gehen alle Rechte an der Diensterfindung auf den Arbeitgeber über; mit Zugang der Erklärung der beschränkten Inanspruchnahme erwirbt der Arbeitgeber ein nichtausschließliches Recht zur Benutzung der Diensterfindung. Der Arbeitgeber ist verpflichtet und allein berechtigt, eine gemeldete Diensterfindung im Inland zur Erteilung eines Schutzrechts unverzüglich anzumelden.",
        '<br>',
        $('<em/>').append(
        "Within three months after receipt of the notification, the Employer must declare in writing whether it wants to make use of the invention, in a restricted or unrestricted way. In case the Employer declares to make use of the invention in an unrestricted way, all rights in the invention are transferred to the Employer; in case the Employer declares to make use of the invention in a restricted way, the Employer obtains a non-exclusive right to use the invention. The Employer is obliged and exclusively entitled to register, without undue delay, any invention notified to it in order to obtain an intellectual property right. "
        )
      ),

      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          "Verschwiegenheitspflicht",
          ' | ',
          $('<em/>').append(
          "Duty of confidentiality"
          )
        )
      )
    ),

    // Insert if Retail Job Title is not Flag leader, Market Leader, Store Leader
    (["Flag leader", "Market Leader", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) < 0) &&
    $('<div class="offerClause" />').append(
      $('<p/>').append(
        "Der Arbeitnehmer willigt ein, während der Dauer seines Arbeitsverhältnisses und nach dessen Beendigung über alle ihm anvertrauten oder bekannt gewordenen Betriebs- und Geschäftsgeheimnisse des Arbeitgebers oder eines mit dem Arbeitgeber verbundenen Unternehmens strenges Stillschweigen gegenüber Dritten zu bewahren und solche Betriebs- und Geschäftsgeheimnisse auch nicht selbst auszuwerten. Als „Betriebs- und Geschäftsgeheimnisse“ gelten alle geschäftlichen, betrieblichen, organisatorischen und technischen Kenntnisse, Vorgänge und Informationen, die nur einem beschränkten Personenkreis zugänglich sind und nach dem Willen der Geschäftsleitung nicht der Allgemeinheit bekannt werden sollen.",
        '<br>',
        $("<em/>").append(
        "For the duration of his employment relationship and following the termination thereof, the Employee agrees to keep strictly confidential from third parties all business and trade secrets of the Employer or of business enterprises affiliated with the Employer that have been entrusted to him or that he has gained knowledge of, and to refrain from exploiting such business and trade secrets himself. “Business and trade secrets” comprise all business, operational, organizational, and technical knowledge processes, and information that is/are accessible only to a restricted group of persons and, as expressly intended by management, is not to be disclosed to the general public."
        )
      ),
      $('<p/>').append(
        "Geschäfts- und Betriebsgeheimnisse sind insbesondere Herstellungs- und Versuchsverfahren, Vertriebswege, Bezugsquellen, Kalkulationen und Geschäftsabschlüsse. Im Zweifel ist der Arbeitnehmer verpflichtet, eine Auskunft der Geschäftsleitung einzuholen, ob eine bestimmte Angelegenheit als vertraulich zu behandeln ist oder nicht.",
        '<br>',
        $("<em/>").append(
        "Business and trade secrets include in particular production and experimental/testing processes, distribution channels, supply sources, calculations, and conclusions of transactions. If uncertain, the Employee is obliged to obtain information from management as to whether a specific matter is confidential or not."
        )
      ),
      $('<p class="content-heading"/>').append(
        "\"Geschäfts- und Betriebsgeheimnisse\" umfassen nicht Informationen,"
      ),
      $('<ul class="margin-bottom"/>').append(
        $('<li/>').append(
          "die zum Zeitpunkt der Überlassung bereits öffentlich bekannt oder öffentlich zugänglich waren oder zu einem späteren Zeitpunkt werden, ohne dass dies auf einer Verletzung dieses Vertrages beruht;"
        ),
        $('<li/>').append(
          "deren Bekanntgabe an Dritte dem Arbeitnehmer von dem Arbeitgeber zuvor ausdrücklich schriftlich erlaubt worden ist; oder"
        ),
        $('<li/>').append(
          "von denen der Arbeitnehmer nachweislich Kenntnis hatte, bevor diese Informationen ihm im Rahmen seiner Tätigkeit für den Arbeitgeber zugänglich gemacht oder bekannt gegeben wurden."
        )
      ),
      $('<p/>').append(
        "Im letztgenannten Fall ist der Arbeitnehmer verpflichtet, diese Vorkenntnis zu Beweiszwecken zu dokumentieren und dem Arbeitgeber unverzüglich mitzuteilen."
      ),
      $('<p class="content-heading"/>').append(
        $('<em/>').append(
        "\"Business and trade secrets\" do not comprise information"
        )
      ),
      $('<ul class="margin-bottom"/>').append(
        $('<li/>').append(
          $('<em/>').append(
            "that, at the time the information is disclosed, has been publicly known or accessible or becomes publicly known or accessible at a later point in time without this being due to a breach of this Employment Contract;"
          )
        ),
        $('<li/>').append(
          $('<em/>').append(
            "where the disclosure to third parties has been explicitly allowed in writing to the Employee by the Employer; or"
          )
        ),
        $('<li/>').append(
          $('<em/>').append(
            "that has demonstrably been known to the Employee before this information was made available to him or disclosed to him in the context of his activities for the Employer."
          )
        )
      ),
      $('<p/>').append(
        $('<em/>').append(
          "In this last mentioned case the Employee is obliged to document his previous knowledge and to inform the Employer without delay."
        )
      ),
      $('<p/>').append(
        "Die Verpflichtung zur Verschwiegenheit gilt auch nach Beendigung des Arbeitsverhältnisses. Sollte die nachvertragliche Verschwiegenheitspflicht den Arbeitnehmer in seinem beruflichen Fortkommen unangemessen behindern, hat der Arbeitnehmer das Recht, vom Arbeitgeber die Freistellung von dieser Pflicht zu fordern.",
        '<br>',
        $("<em/>").append(
        "The duty of confidentiality continues even after termination of the employment relationship. Should the post-contractual duty of confidentiality unreasonably hinder the Employee’s professional development, the Employee may demand that the Employer release him from this duty."
        )
      )
    ),
    // End insert if Retail Job Title is not Flag leader, Market Leader, Store Leader

    $('<div class="offerClause" />').append(
      // Insert if Retail Job Title is General Manager, Manager, Senior Manager
      (["General Manager", "Manager", "Senior Manager"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
        "Die Regelungen des Gesetzes zum Schutz von Geschäftsgeheimnissen (GeschGehG) bleiben hiervon unberührt.",
        $("<em/>").append(
        "The provisions of the German Trade Secret Law (Gesetz zum Schutz von Geschäfts¬geheimnissen – GeschGehG) remain unaffected. "
        )
      ),
      // End insert if Retail Job Title is General Manager, Manager, Senior Manager

      // Insert if Retail Job Title is Flag leader, Market Leader, Store Leader
      (["General Manager", "Manager", "Senior Manager"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
        "Der Arbeitnehmer verpflichtet sich, während und nach Beendigung des Arbeitsverhältnisses über alle (im nachfolgenden Absatz näher bestimmten) ihm während seiner Tätigkeit bekannt werdenden vertraulichen oder geschäftlichen Angelegenheiten von Apple und der mit Apple verbundenen Unternehmen, seiner Händler und Kunden, unabhängig davon, wie er Kenntnis von solchen Angelegenheiten erlangt hat, striktes Stillschweigen zu bewahren und diese Informationen nicht an Dritte weiterzuleiten. Dies gilt nicht für die Weitergabe von Informationen in Wahrnehmung der Pflichten als Arbeitnehmer und für die Weitergabe von Informationen, die für die ordnungsgemäße Erfüllung der Aufgaben als Arbeitnehmer erforderlich ist. Abgesehen davon ist eine Weiterleitung solcher Informationen nur mit vorheriger schriftlicher Zustimmung oder nach Maßgabe gesonderter Geheimhaltungsrichtlinien von Apple zulässig.",
        $("<em/>").append(
        "During and after the employment relationship, the Employee will keep strictly confidential and not make available to third parties any confidential or business matters (as specified in the below paragraph) pertaining to Apple or its affiliated companies, dealers and customers of which the Employee becomes aware during the employment, regardless of how the Employee obtains knowledge of such matters. This shall not apply to any information passed on in the course of fulfilling the Employee's duties to Apple or as required to correctly perform the Employee's tasks. Other than in such cases, such information may only be passed on with Apple’s prior written agreement or in accordance with Apple’s specific confidentiality policies."
        )
      ),
      (["General Manager", "Manager", "Senior Manager"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
        "Der Begriff „vertrauliche und geschäftliche Angelegenheiten“ bezieht sich unter anderem auf Geschäfts- und Betriebsgeheimnisse, sowie sämtliche geschäftlichen, betrieblichen, organisatorischen und technischen Kenntnisse und Informationen, (z. B. Herstellungsverfahren, Produktstrategien und neue Produkte die noch nicht auf dem Markt sind, Informationen über Forschung und Entwicklung, Preise, Entwicklungsprogramme, Entwicklungsplanungen, Forschungsprojekte, Forschungsergebnisse, Kundenlisten, Kalkulationsgrundlagen, Produktinformationen, Lieferanten, Strategien, Kosten, Marketingstrategien, Vertragsdetails, Preisermittlungsmethoden, Finanzierungsmethoden, Investitionen, Finanzdaten, etc.), die aus deren Inhalt bzw. Übergabemodalitäten, nach Wunsch oder gemäß den Interessen von Apple oder eines verbundenen Unternehmens oder im Hinblick auf die Art der Informationen Dritten und/oder der Öffentlichkeit nicht zugänglich gemacht werden sollen oder für die sich aus anderen Gründen ein Geheimhaltungsbedürfnis für Apple, mit Apple verbundene Unternehmen, Apples Händler oder Kunden ableiten lässt. Der Begriff \"vertrauliche oder geschäftliche Angelegenheiten\" umfasst insbesondere alle Informationen, die von Apple als \"vertraulich\", \"confidential\", \"for Apple eyes only\" oder in ähnlicher Weise gekennzeichnet sind. Diese Regelung gilt für alle vorgenannten Informationen, unabhängig davon, ob sie mündlich vorliegen oder in Plänen, Zeichnungen, Skizzen, Entwürfen, Akten oder sonstigen Schriftstücken, auf elektronischen oder sonstigen Datenträgern gleich welcher Art oder anderweitig verkörpert sind.",
        $("<em/>").append(
        "\"Confidential or business matters\" includes without limitation business and trade secrets as well as all business, operational, organizational and technical know-how and information (e.g. manufacturing processes, product strategies and new products which have not yet been launched on the market, information on research and development, prices, development programs, development plans, research projects, research results, customer lists, estimates, product information, suppliers, strategies, costs, marketing strategies, contract details, pricing methods, financing methods, investments, financial data, etc.) which in terms of content or the form of its transfer, on request or in accordance with Apple’s interests or one of its affiliated companies, or with regard to the type of information should not be disclosed to third parties and/or the public or which it may be assumed that Apple or its affiliated companies, dealers or customers need to keep secret for any other reasons. \"Confidential or business matters\" includes but is not limited to all information marked as \"vertraulich\", \"confidential\", \"for Apple eyes only\" or in any similar ways. These obligations apply to all information referred to above, regardless of whether it is made available orally or in plans, drawings, sketches, drafts, files or other correspondence or documents, on electronic or other data carriers of whatever type, or in any other form."
        )
      ),
      (["General Manager", "Manager", "Senior Manager"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
        "Diese Geheimhaltungsregelung umfasst nicht Informationen,",
        $("<em/>").append(
        "This confidentiality obligation does not apply to information which:"
        )
      ),
      (["General Manager", "Manager", "Senior Manager"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
        "die zum Zeitpunkt der Überlassung bereits öffentlich bekannt oder öffentlich zugänglich waren oder zu einem späteren Zeitpunkt werden, ohne dass dies auf einer Verletzung dieses Vertrages beruht;",
        $("<em/>").append(
        "was already public knowledge or publically available at the time of its transfer or became so at a later date without any breach of this contract;"
        )
      ),
      (["General Manager", "Manager", "Senior Manager"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
        "von denen der Arbeitnehmer nachweislich vor ihrer Bekanntgabe durch Apple oder ein verbundenes Unternehmen Kenntnis hatte. In diesem Fall ist der Arbeitnehmer verpflichtet, diese Vorkenntnis zu Beweiszwecken zu dokumentieren und Apple unverzüglich mitzuteilen; oder",
        $("<em/>").append(
        "the Employee can demonstrate was in the Employee’s possession prior to its disclosure by Apple or one of its affiliated companies. In the latter case the Employee shall document evidence of such prior knowledge and notify Apple of the same without delay; or"
        )
      ),
      (["General Manager", "Manager", "Senior Manager"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
        "deren Bekanntgabe an Dritte dem Arbeitnehmer von Apple zuvor ausdrücklich schriftlich erlaubt worden ist.",
        $("<em/>").append(
        "Apple gave the Employee prior express written permission to disclose to third parties."
        )
      ),
      (["General Manager", "Manager", "Senior Manager"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
        "Die Verpflichtung zur Verschwiegenheit gilt auch nach Beendigung des Arbeitsverhältnisses. Sollte die nachvertragliche Verschwiegenheitspflicht den Arbeitnehmer in seinem beruflichen Fortkommen unangemessen behindern, hat der Arbeitnehmer das Recht, von Apple die Freistellung von dieser Pflicht zu fordern.",
        $("<em/>").append(
        "The duty of confidentiality continues even after termination of the employment relationship. Should the post-contractual duty of confidentiality unreasonably hinder the Employee’s professional development, the Employee may demand that Apple releases the Employee from this duty."
        )
      ),
      (["General Manager", "Manager", "Senior Manager"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
      $('<p/>').append(
        "Die Regelungen des Gesetzes zum Schutz von Geschäftsgeheimnissen (GeschGehG) bleiben hiervon unberührt.",
        $("<em/>").append(
        "The provisions of the German Trade Secret Law (Gesetz zum Schutz von Geschäfts¬geheimnissen – GeschGehG) remain unaffected."
        )
      )
      // End insert if Retail Job Title is Flag leader, Market Leader, Store Leader
    ),

    // Insert if DE Retail Offer Type is Standard
    (EMPLOYEE.DE_Retail_Offer_Type === "Standard") &&
    $('<div class="offerClause"/>').append(
      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          "Probezeit, Kündigung, Beendigung des Arbeitsverhältnisses, Freistellung",
          ' | ',
          $("<em/>").append(
          "Probation time, termination, end of employment, release from work"
          )
        )
      ),
      $('<p/>').append(
        "Die ersten sechs Monate gelten als Probezeit. In der Probezeit kann der Arbeitsvertrag beiderseits mit einer Frist von zwei Wochen jederzeit gekündigt werden.",
        '<br>',
        $("<em/>").append(
        "The first six months are a probation period. During the probation period, this Employment Contract may be terminated by either side on two weeks’ notice at any time."
        )
      )
    ),
    $('<div class="offerClause"/>').append(
      (EMPLOYEE.DE_Retail_Offer_Type === "Standard") &&
      $('<p/>').append(
        "Das Arbeitsverhältnis kann beiderseits unter Einhaltung einer Kündigungsfrist von einem Monat zum Monatsende gekündigt werden. Darüber hinaus gelten die gesetzlichen Kündigungsfristen des § 622 BGB. Sofern sich die Kündigungsfrist für den Arbeitgeber verlängert, gilt diese Verlängerung auch für die Kündigung durch den Arbeitnehmer.",
        '<br>',
        $("<em/>").append(
        "Either party may terminate the employment relationship with a notice period of one month to the end of a month.  In all other respects, the termination notice periods are extended in accordance with section 622 of the German Civil Code. If the notice period for termination by the Employer is extended, this extension also applies with regard to termination by the Employee."
        )
      ),
      (EMPLOYEE.DE_Retail_Offer_Type === "Standard") &&
      $('<p/>').append(
        "Das Arbeitsverhältnis endet mit Ablauf des Monats, in dem der Mitarbeiter das jeweils für ihn anwendbare gesetzliche Regel-Rentenalter erreicht hat. Der Mitarbeiter ist verpflichtet, die Firma umgehend über alle Angelegenheiten in diesem Zusammenhang zu informieren.",
        '<br>',
        $("<em/>").append(
        "The employment relationship shall end upon expiry of the month during which the Employee attains the applicable standard legal age of retirement. The Employee is obliged to immediately inform the Company fully in relation to this issue."
        )
      ),
      (EMPLOYEE.DE_Retail_Offer_Type === "Standard") &&
      $('<p/>').append(
        $("<em/>").append(
          "Des Weiteren endet das Arbeitsverhältnis mit Ablauf des Monats, in dem die nicht nur vorübergehende Berufs- oder Erwerbsunfähigkeit im Sinne der Vorschriften des Sozialversicherungs¬rechts rechtskräftig durch Bescheid festgestellt ist. Der Mitarbeiter ist verpflichtet, die Firma umgehend über alle Angelegenheiten in diesem Zusammenhang zu informieren."
        ),
        '<br>',
        "In addition, the employment relationship shall end upon expiry of the month during which the occupational incapacity (other than merely temporary) within the meaning of the provisions of the German social security laws has been legally established by notice. The Employee is obliged to immediately inform the Company fully in relation to this issue."
      ),
      (EMPLOYEE.DE_Retail_Offer_Type === "Standard") &&
      $('<p/>').append(
        "Der Arbeitgeber ist im Fall der Kündigung – gleichgültig von welcher Seite und aus welchem Rechtsgrund – berechtigt, den Arbeitnehmer bei Vorliegen eines sachlichen Grundes mit sofortiger Wirkung widerruflich oder unwiderruflich von der Erbringung seiner Arbeitsleistung unter Fortzahlung der Vergütung freizustellen. Ein sachlicher Grund liegt z.B. vor, wenn aus betrieblichen und/oder organisatorischen Gründen für den Arbeitnehmer kein Beschäftigungsbedarf mehr besteht, wenn aus Gründen im Verhalten oder in der Person des Arbeitnehmers das Vertrauensverhältnis gestört ist, zum Schutz des Betriebsfriedens, zum Schutz anderer Arbeitnehmer, zum Schutz von Kundenbeziehungen oder zur Wahrung und Sicherung von Betriebs- und Geschäftsgeheimnissen. Im Fall der unwiderruflichen Freistellung geschieht dies unter Anrechnung auf etwaige Ansprüche auf Urlaub und sonstigen Freizeitausgleich. Der Arbeitnehmer muss sich während der Freistellung anderweitigen Verdienst auf die geschuldete Vergütung anrechnen lassen. Das Wettbewerbsverbot gemäß §§ 60, 61 HGB bleibt unberührt.",
        '<br>',
        $("<em/>").append(
        "In the event of termination – no matter by whom or for which legal reason – the Employer is entitled to temporarily or irrevocably release the Employee from his obligation to perform his duties with immediate effect, provided that an objective reason exists and that the Employer continues to pay the agreed remuneration. Such objective reason exists, for example, if there is no further need to employ the Employee due to operational and/or organizational reasons, if mutual trust has been lost due to reasons related to the Employee or his conduct, or to ensure a calm work environment, to protect other Employees or relationships with customers or to protect business and operational secrets. In the event of irrevocable release, the Employee shall be credited with any income, which the Employee has been released of outstanding vacation entitlement or other time off to which the he may be entitled. The Employer is entitled to offset any income Employee derives from other activities against any remuneration owed by the Employer period in which the Employee is released from his duties. The obligation to observe the prohibition against competition pursuant to sections 60 and 61 of the German Commercial Code remains in effect by such a period of release."
        )
      )
    ),
    // End insert if DE Retail Offer Type is Standard

    // Insert if Retail Job Title is Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader
    (["Flag leader", "General Manager", "Manager", "Market Leader", "Senior Manager", "Store Leader"].indexOf(EMPLOYEE.Retail_Job_Title) >= 0) &&
    $('<div class="offerClause"/>').append(
      $('<p/>').append(
        "Wird durch den zuständigen Rentenversicherungsträger rechtskräftig festgestellt, dass der auf Dauer voll erwerbsgemindert ist und die versicherungsrechtlichen Voraussetzungen gemäß § 43 SGB VI erfüllt sind, endet der Arbeitsvertrag mit Ablauf des Monats, in dem der Bescheid zugestellt wird. Beginnt die Rente wegen voller Erwerbsminderung erst nach der Zustellung des Rentenbescheids, endet der Arbeitsvertrag mit Ablauf des dem Rentenbeginn vorhergehenden Tages. ",
        '<br>',
        $("<em/>").append(
        "If the competent pension insurance fund establishes in a legally binding way that the earning capacity of the Employee is permanently and totally impaired and the insurance law preconditions pursuant to section 43 of Book VI of the German Social Security Code are fulfilled, the Employment Contract terminates upon expiry of the month in which the official order is served. If a pension due to full impairment of earning capacity is only drawn for the first time after notice of the entitlement to a pension has been delivered, the Employment Contract ends on expiry of the day preceding the day upon which the pension begins. "
        )
      )
    ),
    // End insert if Retail Job Title is Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader

    // Insert if Retail Job Title is Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader
    (EMPLOYEE.DE_Retail_Offer_Type.indexOf("Fixed Term") >= 0) &&
    $('<div class="offerClause"/>').append(
      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          "Kündigung, Beendigung des Arbeitsverhältnisses, Freistellung",
          ' | ',
          $("<em/>").append(
          "Termination, end of employment, release from work"
          )
        )
      ),
      $('<p/>').append(
        "Der Arbeitsvertrag kann auch vor Ende der Befristung unter Einhaltung einer Kündigungsfrist von einer Woche von beiden Parteien gekündigt werden.",
        '<br>',
        $("<em/>").append(
        "This Employment Contract may also be terminated by either party before the end of the fixed term by giving a notice of one week."
        )
      ),
      $('<p/>').append(
        "Apple ist im Fall der Kündigung – gleichgültig von welcher Seite und aus welchem Rechtsgrund – berechtigt, den Arbeitnehmer bei Vorliegen eines sachlichen Grundes mit sofortiger Wirkung widerruflich oder unwiderruflich von der Erbringung seiner Arbeitsleistung unter Fortzahlung der Vergütung freizustellen. Ein sachlicher Grund liegt z.B. vor, wenn aus betrieblichen und/oder organisatorischen Gründen für den Arbeitnehmer kein Beschäftigungsbedarf mehr besteht, wenn aus Gründen im Verhalten oder in der Person des Arbeitnehmers das Vertrauensverhältnis gestört ist, zum Schutz des Betriebsfriedens, zum Schutz anderer Arbeitnehmer, zum Schutz von Kundenbeziehungen oder zur Wahrung und Sicherung von Betriebs- und Geschäftsgeheimnissen. Im Fall der unwiderruflichen Freistellung geschieht dies unter Anrechnung auf etwaige Ansprüche auf Urlaub und sonstigen Freizeitausgleich. Der Arbeitnehmer muss sich während der Freistellung anderweitigen Verdienst auf die geschuldete Vergütung anrechnen lassen. Das Wettbewerbsverbot gemäß §§ 60, 61 HGB bleibt unberührt.",
        "<br>",
        $("<em/>").append(
        "In the event of termination – no matter by whom or for which legal reason – Apple is entitled to temporarily or irrevocably release the Employee from the Employee’s obligation to perform the Employee’s duties with immediate effect, provided that an objective reason exists and that Apple continues to pay the agreed remuneration. Such objective reason exists, for example, if there is no further need to employ the Employee due to operational and/or organisational reasons, if mutual trust has been lost due to reasons related to the Employee or the Employee’s conduct, or to ensure a calm work environment, to protect other Employees or relationships with customers or to protect business and operational secrets. In the event of irrevocable release, the Employee shall be credited with any income, which the Employee has been released of outstanding vacation entitlement or other time off to which the Employee may be entitled. Apple is entitled to offset any income Employee derives from other activities against any remuneration owed by Apple during the period in which the Employee is released from the Employee’s duties. The obligation to observe the prohibition against competition pursuant to sections 60 and 61 of the German Commercial Code remains in effect by such a period of release."
        )
      )
    ),
    // End insert if Retail Job Title is Flag leader, General Manager, Manager, Market Leader, Senior Manager, Store Leader

    $('<div class="offerClause"/>').append(
      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          "Vertragsstrafen",
          " | ",
          $("<em/>").append(
          "Contractual penalties"
          )
        )
      ),
      $('<p class="content-heading"/>').append(
        "Der Arbeitnehmer ist verpflichtet, dem Arbeitgeber eine Vertragsstrafe zu zahlen, wenn: "
      ),
      $('<ul class="margin-bottom"/>').append(
        $('<li/>').append(
          "er schuldhaft die Arbeit nicht antritt;"
        ),
        $('<li/>').append(
          "er das Arbeitsverhältnis vertragswidrig beendet;  "
        ),
        $('<li/>').append(
          "er den Arbeitgeber durch ein schuldhaft vertragswidriges Verhalten zur Kündigung veranlasst soweit das vertragswidrige Verhalten die wirtschaftlichen Interessen des Arbeitgebers (insbesondere dessen Eigentum oder Vermögen) berührt; oder"
        ),
        $('<li/>').append(
          "er Straftaten gegen den Arbeitgeber begeht, die die Vermögensinteressen des Arbeitgebers berühren."
        )
      ),
      $('<p class="content-heading"/>').append(
        $("<em/>").append(
          "The Employee is obliged to pay to the Employer a contractual penalty in the event of:"
        )
      ),
      $('<ul class="margin-bottom"/>').append(
        $('<li/>').append(
          $("<em/>").append(
            "failing to commence the employment on the agreed date, "
          )
        ),
        $('<li/>').append(
          $("<em/>").append(
          "terminating the employment in breach of contract,"
          )
        ),
        $('<li/>').append(
          $("<em/>").append(
          "initiating the Employer to terminate the Employment Contract by acting in breach of contract with intent or negligence, as far as the breach of contract strikes the economic interests of the Employer (such as his properties or his assets), or"
          )
        ),
        $('<li/>').append(
          $("<em/>").append(
          "committing criminal action against the Employer."
          )
        )
      ),
      $('<p/>').append(
        "Die Vertragsstrafe beträgt für jeden Verstoß ein Bruttomonatsgehalt. Beträgt die Kündigungsfrist für den Arbeitnehmer bei Verwirkung der Vertragsstrafe zum Zeitpunkt der vertragswidrigen Beendigung des Arbeitsverhältnisses weniger als einen Monat, ist die Vertragsstrafe auf die Höhe des für die Kündigungsfrist maßgebliche Bruttovergütung anteilig zu kürzen.",
        "<br>",
        $('<em/>').append(
        "The contractual penalty amounts to a monthly gross instalment for each breach of contract. If the Employee's period of notice amounts to less than one month at the time of terminating the employment relationship in breach of contract, the contractual penalty shall be reduced to the remuneration amount that is due for the period of notice."
        )
      ),
      $('<p/>').append(
        "Die Vertragsstrafe ist sofort fällig und kann gegen Lohnforderungen, soweit sie pfändbar sind, aufgerechnet werden.",
        "<br>",
        $('<em/>').append(
        "The contractual penalty shall be due immediately and may be set of against salary claims as far as these are seizable."
        )
      ),

      $('<p/>').append(
        "Dem Arbeitnehmer steht der Nachweis eines geringeren Schadens offen.",
        "<br>",
        $('<em/>').append(
        "The Employee is entitled to prove that lesser damage has been caused."
        )
      ),

      $('<p/>').append(
        "Der Arbeitgeber kann weitergehenden Schaden geltend machen.",
        "<br>",
        $('<em/>').append(
        "The Employer reserves the right to enforcement of further damages."
        )
      ),

      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          "Ausschlussfristen",
          " | ",
          $('<em/>').append(
          "Time limit on claims"
          )
        )
      ),

      $('<p/>').append(
        "Alle Ansprüche aus dem Arbeitsverhältnis sind beiderseitig in Textform innerhalb von drei Monaten nach deren Fälligkeit geltend zu machen; eine Geltendmachung nach Ablauf dieser Frist ist ausgeschlossen. Das gilt nicht bei Ansprüchen aus unerlaubter Handlung und bei vorsätzlichen Pflichtverletzungen.",
        "<br>",
        $('<em/>').append(
        "For enforcement of any and all claims resulting from the Employment Contract, both parties must make a claim in any written form within three months of such claims arising. Enforcement of any claims after expiry of such limitation period shall be excluded. This does not apply in case of tortious liability and of wilful breach of duty."
        )
      ),

      $('<p/>').append(
        "Lehnt die Gegenseite den Anspruch ab oder erklärt sie sich nicht innerhalb von drei Wochen nach der Geltendmachung des Anspruchs, so verfällt dieser, wenn er nicht innerhalb von drei Monaten nach der Ablehnung oder dem Fristablauf gerichtlich geltend gemacht wird.",
        "<br>",
        $('<em/>').append(
        "If the opposing party refuses the recognition of the asserted claim or does not respond within three weeks after the claim has been asserted, the claim lapses if it is not asserted to court within three months after the refusal or the mentioned expiry date."
        )
      ),

      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          "Datenschutz und Informationspflicht",
          " | ",
          $('<em/>').append(
          "Data protection and duty of information"
          )
        )
      ),

      $('<p/>').append(
        "Der Arbeitgeber speichert und verarbeitet personenbezogene Daten auf elektronische Weise und im Papierform im Rahmen des Arbeitsverhältnisses. ",
        "<br>",
        $('<em/>').append(
        "The Employer stores and processes employee personal data electronically and in paper form in the scope of employment relationship."
        )
      ),

      $('<p/>').append(
        "Der Mitarbeiter bestätigt dem Erhalt vom Arbeitnehmerdatenschutzerklärung („Employee Privacy Notice“), die die Grundlage darstellt, wie der Arbeitgeber im Einklang mit der jeweils gültigen Arbeitnehmerdatenschutzerklärung persönliche Daten verarbeitet, speichert und übermittelt. Die jeweils aktuellste und gültige Fassung wird im HRWeb verfügbar sein.",
        "<br>",
        $('<em/>').append(
        "The Employee acknowledges receipt of Apple’s Employee Privacy Notice which sets out the basis on which the Employer processes, stores and transfers personal data in accordance with the Employee Privacy Notice, as in force from time to time. The most up to date version in force from time to time will be available on HRWeb.",
        "<br>",
        "The Employer is the data controller for the purpose of the Employee Privacy Notice."
        )
      ),

      $('<p/>').append(
          "Der Arbeitnehmer verpflichtet sich zur Wahrung des Datengeheimnisses im Sinne von § 53 Bundesdatenschutzgesetz. Verständnis des entsprechenden Gesetzes bestätigt der Arbeitnehmer durch seine Unterschrift unter diesen Vertrag. Dem Arbeitnehmer ist es untersagt, geschützte personenbezogene Daten unbefugt zu erheben, zu verarbeiten, bekannt zu geben, zugänglich zu machen oder sonst zu nutzen (Datengeheimnis); d.h. eine Verarbeitung ist nur zu dem der jeweiligen rechtmäßigen Aufgabenerfüllung gehörenden Zweck zulässig. Dem Arbeitnehmer ist bekannt, dass Verstöße gegen den Inhalt und Sinn dieser Vorschrift nach §§ 42, 43 Bundesdatenschutzgesetz und anderen Rechtsvorschriften mit Geld- oder Freiheitsstrafe geahndet werden kann.",
        "<br>",
        $('<em/>').append(
        "The Employee undertakes to maintain data secrecy in compliance with Section 53 of the Federal Data Protection Act (BDSG). The Employee's signature of this contract also confirms that the Employee understands the obligations under the BDSG. The Employee shall not collect, process, publish, disclose or make any other use of protected personal data (data confidentiality); such data may only be processed in the course of performing the Employee's legitimate duties. The Employee is aware that any infringements of the meaning and contents of these regulations may be prosecuted under Sections 42, 43 of the Federal Data Protection Act (BDSG) and other legal regulations leading to the imposition of fines or imprisonment."
        )
      ),

      $('<p/>').append(
        "Änderungen von Personenstand oder Anschrift des Arbeitnehmers sind dem Arbeitgeber unverzüglich und unaufgefordert schriftlich anzuzeigen.",
        "<br>",
        $('<em/>').append(
        "The Employee must proactively inform the Employer immediately and in writing of any changes of Employee's civil status or address."
        )
      ),

      $('<p class="content-heading"/>').append(
        $('<strong/>').append(
          "Vertragsänderungen, Schriftform, salvatorische Klausel, anwendbares Recht, anwendbare Version",
          " | ",
          $('<em/>').append(
          "Amendments of contract, written form, partial invalidity clause, applicable law, binding version"
          )
        )
      ),

      $('<p/>').append(
        "Änderungen oder Ergänzungen dieses Arbeitsvertrags bedürfen für ihre Wirksamkeit der Schriftform, sofern sie nicht auf einer individuell ausgehandelten Abrede beruhen. Auch die Änderung der Schriftformklausel bedarf der Schriftform.",
        "<br>",
        $('<em/>').append(
        "Any amendments and supplements to this Employment Contract must be in writing to be effective unless based on an arrangement individually negotiated between the parties. This shall also apply to any amendment to this written form clause."
        )
      ),

      $('<p/>').append(
        "Mündliche Nebenabreden sind nicht getroffen.",
        "<br>",
        $('<em/>').append(
        "Verbal side agreements do not exist."
        )
      ),

      $('<p/>').append(
        "Sollten einzelne Bestimmungen dieses Arbeitsvertrages rechtswidrig, nichtig oder undurchführbar sein oder werden oder sollte der Arbeitsvertrag eine Lücke enthalten, wird die Gültigkeit des Arbeitsvertrags im Übrigen hiervon nicht berührt. An Stelle der unwirksamen Bestimmung und zur Ausfüllung der Lücke tritt diejenige wirksame Bestimmung, die dem von den Parteien wirtschaftlich Gewollten am nächsten kommt.",
        "<br>",
        $('<em/>').append(
        "The validity of the remaining provisions of this Employment Contract shall not be affected, should any individual provision of the Employment Contract be or become illegal, void or unenforceable or should the Employment Contract have a gap. An invalid provision is replaced and a gap filled by the reasonable valid provision that comes from an economic view closest to what the parties would have agreed had they considered this point."
        )
      ),

      $('<p/>').append(
        "Auf diesen Arbeitsvertrag und alle daraus resultierenden Rechtsstreitigkeiten findet das Recht der Bundesrepublik Deutschland Anwendung.",
        "<br>",
        $('<em/>').append(
        "This Employment Contract and all legal disputes arising out of it are governed by the laws of the Federal Republic of Germany."
        )
      ),

      $('<p/>').append(
        "Der Begriff \"Arbeitnehmer \” wird nur aus Gründen der besseren Lesbarkeit verwendet, aber umfasst grundsätzlich Männer, Frauen und Diverse.",
        "<br>",
        $('<em/>').append(
        "The term \"Employee\“ / he is used for ease of readability, but includes men, women and diverse. "
        )
      ),

      $('<p/>').append(
        "Die Parteien vereinbaren, dass die deutsche Version dieses Arbeitsvertrages bindend ist.",
        "<br>",
        $('<em/>').append(
          "The parties agree that the German version of this Employment Contract is binding."
        )
      ),

      $('<p/>').append(
        "__________________________________________",
        "<br>",
        "Apple Retail Germany B.V. &amp; Co. KG",
        "<br>",
        "Name: ", EMPLOYEE.Hiring_Manager,
        "<br>",
        "Job Title: Store Leader"
      ),

      $('<p/>').append(
        EMPLOYEE.First_Name,
        " ",
        EMPLOYEE.Last_Name,
        "<br>",
        "__________________________________________",
        "<br>",
        "Mitarbeiter Name / Employee name"
      ),

      $('<p/>').append(
        "AES Signature",
        "<br>",
        "__________________________________________",
        "<br>",
        "Mitarbeiter Unterschrift / Employee Signature",
        "<br>",
        "__________________________________________",
        "<br>",
        "Ort / Place ",
        "<br>",
        "__________________________________________",
        "<br>",
        "Datum / Date"
      )

    )

  );
} 

const hourlySalary = function(amountRaw, weeklyHours, currencyLocale) {
  "use strict";
  let amount = Number(amountRaw);
  let locale = 'en-US';
  if (!!currencyLocale) {
    locale = currencyLocale;
  }
  if (amount == NaN) {
    return 0;
  }
  let hourlySalary = amount * 12 / 52 / weeklyHours;
  return new Intl.NumerFormat(locale, {style: 'currency'}).format(amount);
}

$(window).on('load', function() {
  "use strict";
  renderOfferLetter();
  if ($('#hidden_pg').prop('readonly')) {
    $("#ButtonSaveAndComplete").remove();
    $("input[type=text]").prop('onfocus', false).prop("disabled", "disabled");
    let arrParts = [
        [1, 'hidden_pg'],
    ];
    showCompletedOfferLetter('incomplete', 'complete', arrParts);
  }
});
