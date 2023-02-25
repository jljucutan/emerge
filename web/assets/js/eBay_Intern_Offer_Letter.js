const fnView = function() {
  'use strict'
  const markupRoot = $("#markup").html("")
  const offerClause = $('<div class="offerClause"/>')
  offerClause.append(
    $('<p/>').append(
      moment().format('MM/DD/YYYY')
    ),
    $('<p/>').append(
      '&nbsp;'
    )
  )
  offerClause.append(
    $('<p/>').append(
      employee.First_Name,
      ' ',
      `${employee.Middle_Name} `,
      employee.Last_Name,
      '<br>',
      `${employee.Address1} `,
      `${employee.Address2}, `,
      '<br>',
      employee.City ? `${employee.City}, ` : '',
      employee.State ? `${employee.State} ` : '',
      employee.Zip
    ),
    $('<p/>').append(
      '&nbsp;'
    )
  )

  offerClause.append(
    $('<p/>').append(
      `Dear ${employee.First_Name},`,
    )
  )

  if (employee.Exempt == 'E') {
    offerClause.append(
      $('<p/>').append(
        $('<mark/>').append(employee.EnityName),
        ' (\'',
        $('<mark/>').append(employee.EnityName),
        '\';  or the \'The Company\') is pleased to offer you the exempt position of ',
        $('<mark/>').append(employee.Business_Title),
        ' (System Title: ',
        $('<mark/>').append(employee.SystemTitle),
        '), at a bi-weekly salary of $',
        $('<mark/>').append(employee.SalaryOffered),
        ' during your internship.  Your bi-weekly salary is based on a work week of approximately ',
        $('<mark/>').append(employee.HoursPerWeek),
        ' hours per week. The Company may adjust your work week and your bi-weekly salary from time to time in its sole discretion.  As an intern, you will be eligible for Holiday pay but you will not be eligible for other Company sponsored benefits.'
      )
    )
  }

  if (employee.Exempt == 'N') {
    offerClause.append(
      $('<p/>').append(
        $('<mark/>').append(employee.EnityName),
        ' (\'',
        $('<mark/>').append(employee.EnityName),
        '\'  or the \'The Company\') is pleased to offer you the non-exempt position of ',
        $('<mark/>').append(employee.Business_Title),
        ' (System Title: ',
        $('<mark/>').append(employee.SystemTitle),
        ') at a rate of $',
        $('<mark/>').append(employee.SalaryOffered),
        ' per hour, payable bi-weekly during your internship.  As an intern, you will be eligible for Holiday pay but you will not be eligible for other Company sponsored benefits.'
      )
    )
  }

  offerClause.append(
    $('<p/>').append(
      'Your immediate supervisor during your internship will be ',
      $('<mark/>').append(employee.Hiring_Manager),
      ', ',
      $('<mark/>').append(employee.MngrBsnssTitle),
      '.  Your internship is anticipated to continue for no more than ',
      $('<mark/>').append(employee.InternshipLength),
      ' weeks (provided that your engagement remains “at-will” as described below).'
    )
  )

  if (employee.InternStipend.length && employee.InternStipend > 0) {
    offerClause.append(
      $('<p/>').append(
        'The Company will provide you with a special $',
        $('<mark/>').append(employee.InternStipend),
        ' stipend for you to use towards expenses you may incur.  This stipend will be payable within two payroll periods of your start date.'
      )
    )
  }

  if (employee.Relocation == 'Y') {
    offerClause.append(
      $('<p/>').append(
        'The Company will assist with many expenses associated with your relocation from ',
        $('<mark/>').append(employee.RelocationFrom),
        ' to ',
        $('<mark/>').append(employee.PayAreaCity),
        '. Details regarding your relocation and the terms of our assistance will be provided under separate cover by our relocation services provider.'
      )
    )
  }

  offerClause.append(
    $('<p/>').append(
      'All interns are subject to eBay’s Intern Insider Trading Agreement, which outlines the procedures and guidelines governing securities trades by company interns. Attached is a copy of eBay’s Intern Insider Trading Agreement.  Please review the Agreement carefully, execute the certification and submit it to eBay’s human resources department.'
    )
  )

  if (employee.Immigration == 'Yes') {
    offerClause.append(
      $('<p/>').append(
        'We have included a Non-US Citizen/Permanent Residence Non-Immigrant Checklist with other instructions and documentation for the processing of your visa. So that we may move forward with your visa application, please mail photocopies of the documents on the checklist to our immigration attorney as soon as possible. Any delay in the forwarding of these documents may affect your start date with eBay.'
      )
    )
  }

  offerClause.append(
    $('<p/>').append(
      'Under federal immigration laws, the Company is required to verify an individual’s identity and legal authority to work in the United States. Accordingly, please be prepared to furnish appropriate documents satisfying those requirements; this offer is conditioned on submission of satisfactory documentation. Attached is a list of the required documents.'
    )
  )

  offerClause.append(
    $('<p/>').append(
      'Your internship is “at will” and as such may be terminated at any time, with or without cause, should you or the Company deems such termination necessary or appropriate. The at-will nature of our relationship can only be changed by written agreement signed by eBay’s SVP of Human Resources. The terms and conditions of your internship may be adjusted by eBay from time to time in its sole discretion.'
    )
  )

  offerClause.append(
    $('<p/>').append(
      'All of us at ',
      $('<mark/>').append(employee.EnityName),
      ' are very excited about you joining our intern program and look forward to a beneficial and fruitful relationship. However, should any dispute arise with respect to your internship or the termination thereof, we both agree that such dispute shall be conclusively resolved by final, binding and confidential arbitration rather than by a jury court or administrative agency. The Company will bear those expenses unique to arbitration. Please review the enclosed Mutual Arbitration Agreement carefully.'
    )
  )

  offerClause.append(
    $('<p/>').append(
      'As a condition of your internship, you must complete both the Intern Arbitration Agreement and the enclosed Intern Proprietary Information and Inventions Agreement prior to commencing the intern program. In part, the Intern Proprietary Information and Inventions Agreement require that you refrain from unauthorized use or disclosure of the Company’s confidential information (as defined in that Agreement). This Agreement does not prevent you from using know-how and expertise in any new field or position. If you should have any questions about the Intern Proprietary Information and Inventions Agreement, please call me.'
    )
  )

  offerClause.append(
    $('<p/>').append(
      'This offer letter, the Intern Arbitration Agreement, and the Intern Proprietary Information and Inventions Agreement contain the entire agreement with respect to your internship. Should you have any questions with regard to any of the items indicated above, please call me. Kindly indicate your consent to this agreement by signing a copy of this letter within 90 days after you have received this offer. All other documents requiring your signature must be submitted prior to your start date, including but not limited to the Intern Arbitration Agreement, the Intern Proprietary Information and Inventions Agreement and the Intern Insider Trading Agreement certification.'
    )
  )

  offerClause.append(
    $('<p/>').append(
      'By signing this offer letter, you are committed to joining eBay on the start date agreed upon with eBay and will cease ongoing interviews and will immediately withdraw all outstanding outside applications. Acceptance  of this role is contingent upon your background and educational verification. Upon your signature below, this will become our binding agreement with respect to your role and its terms merging and superseding in their entirety all other or prior offers, agreements and communications, whether written or oral, by you and the Company as to the specific subjects of this letter.'
    )
  )

  offerClause.append(
    $('<p/>').append(
      '&nbsp;'
    )
  )

  offerClause.append(
    $('<p/>').append(
      'Sincerely,'
    )
  )

  offerClause.append(
    $('<p/>').append(
      $('<mark/>').append(employee.Recruiter),
      '<br>Recruiter'
    )
  )

  offerClause.append(
    $('<p/>').append(
      '&nbsp;'
    )
  )

  offerClause.append(
    $('<p/>').append(
      'Signature area indicating acceptance of the above terms and conditions to follow'
    )
  )

  offerClause.append(
    $('<p/>').append(
      '&nbsp;'
    )
  )
  markupRoot.append(offerClause)

  const markupRoot2 = $("#markup2").html("")
  const offerClause2 = $('<div class="offerClause2"/>')
  offerClause2.append(
    $('<p/>').append(
      '&nbsp;'
    )
  )
  offerClause2.append(
    $('<p/>').append(
      'A mutually agreeable start date for University hires to be determined by candidate and recruiter three months in advance of beginning employment with eBay Inc.'
    )
  )

  markupRoot2.append(offerClause2)
  $('[data-toggle="popover"]', markupRoot).each(function(_,v) {
    let id = makeid()
    $('<div/>').prop('id', id).insertBefore($(v).data('container', '#' + id))
  })
}

const makeid = function() {
  'use strict'
  const CHAR_LENGTH = 16
  let result           = ''
  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let charactersLength = characters.length
  for ( var i = 0; i < CHAR_LENGTH; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

$(function() {
  fnView()
  makeOfferLetter('hidden_pg1','offerClause')
  makeOfferLetter('hidden_pg2','offerClause2')

  if (!$('input.calendar_button').length) {
    $("#ButtonSaveAndComplete").remove()
    $("input[type=text]").removeAttr('onfocus').attr('disabled', 'disabled')
    let arrParts = [
      [1, 'hidden_pg1']
    ]
    let arrParts2 = [
      [1, 'hidden_pg2']
    ]
    showCompletedOfferLetter('incomplete', 'complete', arrParts)
    showCompletedOfferLetter('incomplete2', 'complete2', arrParts2)
  }

  // highlighting
  if (!FORM_COMPLETED && true) {
    $('mark').addClass('highlight')
  } else {
    $('mark').removeClass('highlight')
    $('.marked').popover('hide')
  }
})
