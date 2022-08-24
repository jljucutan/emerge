/**
 * offer letter script version 2
 */

const showOfferLetter = function() {
  "use strict";
  const offerClause = $('<div class="offerClause"/>');
  offerClause.append(
    $('<div class="col-lg-12"/>').append(
      $('<p/>').append(moment().format('MMMM D, YYYY'))
    ),
  );
  offerClause.append(
    $('<div class="col-lg-12"/>').append(
      $('<p/>').append(
        EMPLOYEE.Full_Name,
        '<br>',
        EMPLOYEE.Full_Address,
        '<br>',
        EMPLOYEE.City_State_Zip
      )
    )
  );
  offerClause.append(
    $('<div class="col-lg-12"/>').append(
      $('<p/>').append(
        'Dear ',
        EMPLOYEE.First_Name,
        ': '
      ),
      $('<p/>').append(
        $('<strong class="text-red"/>').append(
          'Congratulations!'
        )
      ),
      (EMPLOYEE.HireType == 'Internal Transfer') &&
      $('<p/>').append(
        'I am pleased to offer you the position of ',
        EMPLOYEE.Conifer_Positions2,
        ' with Conifer Health. At Conifer, our promise is to be Better Together, and we believe that your unique skills, experience and passion strengthen our team.'
      ),
      $('<p class="text-red"/>').append(
        $('<strong/>').append(
          'It\'s all in the details...'
        )
      ),
      $('<p/>').append(
        'This letter memorializes the terms and conditions of this employment offer. Should you accept this offer, the effective date will be ',
        EMPLOYEE.EffectiveDate,
        ' and you will be eligible to receive the following:'
      ),
      (['FTNONEXEMPT', 'PT1 Non-Exempt', 'PT2N Non-Exempt'].indexOf(EMPLOYEE.EmployeeTypeCode) >= 0) &&
      $('<p/>').append(
        $('<strong/>').append(
          'Base Compensation:'
        ),
        '  Your base compensation will be $',
        EMPLOYEE.Rate_Pay,
        ', minus withholdings, payable bi-weekly in a non-exempt classification status.  Your paycheck will be issued via direct deposit or paper checks on Fridays designated by Conifer as paydays. Your salary will be reviewed annually according to company policy.'
      ),
      (EMPLOYEE.EmployeeTypeCode == 'FTEXEMPT') &&
      $('<p/>').append(
        $('<strong/>').append(
          'Base Compensation:'
        ),
        '  Your base compensation will be $',
        EMPLOYEE.Rate_Pay,
        ', minus withholdings, payable bi-weekly in an exempt classification status.  Your paycheck will be issued via direct deposit or paper checks on Fridays designated by Conifer as paydays. Your salary will be reviewed annually according to company policy.'
      ),
      (['FTNONEXEMPT', 'PT1 Non-Exempt', 'FTEXEMPT'].indexOf(EMPLOYEE.EmployeeTypeCode) >= 0) &&
      $('<p/>').append(
        $('<strong/>').append(
          'Benefits:'
        ),
        ' At Conifer, we care about your total well-being! With this position, you are eligible to receive all standard team member benefits according to Conifer plans.'
      ),
      (EMPLOYEE.Conifer_Shift_Differential == 'Yes' || EMPLOYEE.Conifer_Shift_Differential_IM == 'Yes') &&
      $('<p/>').append(
        $('<strong/>').append(
          'Shift Differential:'
        ),
        ' Your position is eligible for shift differentials in accordance with company standards.'
      ),
      (['FTNONEXEMPT', 'PT1 Non-Exempt', 'FTEXEMPT'].indexOf(EMPLOYEE.EmployeeTypeCode) >= 0) &&
      $('<p/>').append(
        $('<strong/>').append(
          'Time Off:'
        ),
        ' Conifer cares about providing a work-life balance.  Time away from work is important to your total well-being! In addition to ten paid company holidays, you are eligible to paid time off according to Conifer plans and accrual rates. '
      ),
      (EMPLOYEE.HireType != 'Internal Transfer') &&
      $('<p/>').append(
        'So, what do you say? We hope you’re just as excited as we are! If you accept this offer and agree to the terms and conditions contained above and below, please hand-sign and date this copy of the letter and upload all pages to our onboarding portal.  Please note that this offer is contingent upon satisfactory completion of a pre−work drug screen, a satisfactory background investigation, and satisfactory reference checks as needed.  We encourage you to keep a copy of this letter for your records. If you have any questions, please contact ',
        EMPLOYEE.Conifer_Recruiters,
        ' at <a href="mailto:careers@coniferhealth.com">careers@coniferhealth.com</a>. We’re here to support you every step of the way!'
      ),
      (EMPLOYEE.HireType == 'Internal Transfer') &&
      $('<p/>').append(
        'So, what do you say? We hope you’re just as excited as we are! If you accept this offer and agree to the terms and conditions contained above and below, please hand-sign and date this copy of the letter and upload all pages to our onboarding portal. We encourage you to keep a copy of this letter for your records. If you have any questions, please contact ',
        EMPLOYEE.Conifer_Recruiters,
        ' at <a href="mailto:careers@coniferhealth.com">careers@coniferhealth.com</a>.We’re here to support you every step of the way!'
      ),
      $('<p/>').append(
        $('<strong class="text-red"/>').append(
          'Our future is brighter because of you!'
        )
      ),
      (EMPLOYEE.HireType != 'Internal Transfer') &&
      $('<p/>').append(
        'From your health and wellbeing to your professional goals, we’re committed to your future. I’m excited about what we will accomplish together as you begin your Conifer story!'
      ),
      (EMPLOYEE.HireType == 'Internal Transfer') &&
      $('<p/>').append(
        'From your health and wellbeing to your professional goals, we’re committed to your future. I’m excited about what we will accomplish together as you continue your Conifer story. Once again, congratulations on this new opportunity!'
      ),
      $('<p/>').append(
        'Sincerely,'
      ),
      $('<p/>').append(
        EMPLOYEE.Conifer_Recruiters,
        '<br>Conifer Recruitment'
      ),
      (EMPLOYEE.HireType != 'Internal Transfer') &&
      $('<div/>').append(
        $('<p/>').append(
          $('<strong/>').append('Additional Terms and Conditions of Employment:')
        ),
        $('<ol class="mb-20" />').append(
          $('<li/>').append(
            $('<strong/>').append(
              'Employment Status: '
            ),
            ' Unless otherwise defined by state law, your employment with Conifer will be on an at-will basis, which means that either you or the company may terminate the employment relationship, with or without notice and with or without cause at any time. A termination for “cause,” as used above, involves: dishonesty; fraud; willful misconduct; breach of fiduciary duty; conflict of interest; commission of a felony; material failure or refusal to perform job duties in accordance with Conifer’s policies; a material violation of Conifer policy that causes harm to Conifer or an affiliate; sustained unsatisfactory performance which is not improved after a reasonable opportunity to improve has been provided in accordance with Conifer’s standard policies and procedures; or other wrongful conduct of a similar nature and degree.'
          ),
          $('<li/>').append(
            $('<strong/>').append(
              'Former Employers: '
            ),
            'By accepting employment with Conifer and signing below, you represent that you are not subject to any non-competition, non-solicitation, or confidentiality agreements that your employment and activities at Conifer would violate. You also represent and agree that you will not disclose to Conifer, or induce Conifer to use, any proprietary, confidential, or trade secret information belonging to any of your former employers or to others.'
          ),
          $('<li/>').append(
            $('<strong/>').append(
              'Compliance with Conifer Policies, Rules and Regulations:'
            ),
            ' By signing this letter below, you agree to abide by all Conifer Human Resources and other policies, procedures, rules and regulations currently in effect or that may be adopted from time to time, including the Conifer Performance Management policy and the Conifer Standards of Conduct. To the extent that any such policies, rules or regulations, or any benefit plans in which you are a participant, conflict with the terms of this letter, the actual terms of those policies or plans shall control.'
          ),
          $('<li/>').append(
            $('<strong/>').append(
              'Ethics &amp; Compliance: '
            ),
            'All Conifer employees are required to attend Ethics & Compliance Classes within established Conifer policy guidelines, as well as a refresher course every year. Please contact your Human Resources representative or access the company intranet site (iCon) for additional information.'
          ),
          $('<li/>').append(
            $('<strong/>').append(
              'Conflict Resolution:'
            ),
            ' As a condition of employment, you agree to abide by Conifer\'s Fair Treatment Process with includes final and binding Arbitration as a resolution to any grievance that results out of your employment or termination of employment with Conifer.'
          ),
          $('<li/>').append(
            $('<strong/>').append(
              'Standards of Conduct:'
            ),
            ' As an employee of Conifer, you agree to continue to abide by Conifer\'s Standards of Conduct, which reflect Conifer\'s basic values of high-quality, cost-effective health services; honest, trustworthiness, and reliability in all relationships; leadership in the development of partnership arrangements with providers of health services; good corporate citizenship of the communities where Conifer provides services; pursuit of fiscal responsibility and growth; and fair treatment of employees.'
          )
        ),
        $('<p/>').append(
          $('<strong/>').append(
            'Conifer Health Solutions:'
          ),
          ' As used in this offer letter, the terms “Conifer” and “Conifer Health Solutions” include Conifer Health Solutions, LLC, Conifer Holdings, Inc., and/or their respective affiliates, subsidiaries, and/or other related entities.'
        ),
        $('<p/>').append(
          'Please note that this offer is contingent upon satisfactory completion of a pre−work drug screen, a satisfactory background investigation, and satisfactory reference checks as needed.'
        )
      ),
      (EMPLOYEE.HireType == 'Internal Transfer') &&
      $('<div class="mb-20"/>').append(
        $('<p/>').append(
          $('<strong/>').append(
            'Additional Terms and Conditions of Employment:'
          )
        ),
        $('<p/>').append(
          'You acknowledge and agree that the “Terms and Conditions of Employment,” which were set forth in your original Conifer offer letter and which you previously agreed to abide by, remain in full force and effect. By signing below, you reaffirm your acknowledgement of the Terms and Conditions of Employment (including, but not limited to, your status as an at-will employee) and agreement to abide. Except as described herein, the terms of this offer letter supersede the terms set forth in any other Conifer offer letter that you previously accepted.'
        ),
        $('<p/>').append(
          'A termination for “cause,” as used above, involves: dishonesty; fraud; willful misconduct; breach of fiduciary duty; conflict of interest; commission of a felony; material failure or refusal to perform job duties in accordance with Conifer’s policies; a material violation of Conifer policy that causes harm to Conifer or an affiliate; sustained unsatisfactory performance which is not improved after a reasonable opportunity to improve has been provided in accordance with Conifer’s standard policies and procedures; or other wrongful conduct of a similar nature and degree.'
        )
      ),
      $('<p class="mb-30"/>').append(
        $('<strong/>').append(
          'Acknowledged and accepted:'
        )
      )
    )
  );
  $('#markup', thisForm).html(offerClause);
}

$(window).on('load', function() {
  showOfferLetter();
  // completed letter
  if ($("#hidden_pg", thisForm).prop('disabled')) {
      $("#ButtonSaveAndComplete", thisForm).remove();
      $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");
      let arrParts = [
          [1, 'hidden_pg']
      ];
      showCompletedOfferLetter('incomplete', 'complete', arrParts);
  }
});
