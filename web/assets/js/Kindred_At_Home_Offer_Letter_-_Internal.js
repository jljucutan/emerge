// Kindred At Home Offer Letter - Internal
function fnView() {
  $("#markup").html("").append(
    $('<div class="offerClause">').append(
      $('<p/>').append(
        $('<mark/>').html(employee.Todays_Date + '<br>'),
        $('<p/>').html('')
        )
      ),
    $('<div class="offerClause">').append(
      $('<p/>').append(
        $('<mark/>').html(employee.First_Name + ' ' + employee.Last_Name + '<br>'),
        $('<mark/>').html(employee.Address1? employee.Address1+ '<br>' : '&nbsp;<br>'),
        (employee.Address2) && $('<mark/>').html(employee.Address2 + '<br>'),
        $('<mark/>').html(employee.City ? employee.City: ''),
        $('<span/>').html(employee.City ? ', ' : ', '),
        $('<mark/>').html(employee.State ? employee.State: ''),
        $('<span/>').html(employee.Zip ? ' ' : ' '),
        $('<mark/>').html(employee.Zip)
        )
      ),
 //UPDATED TEXT FROM CLIENT UAT 20200923 CMADEWELL
 $('<div class="offerClause"/>').append(
  $('<p/>').html(
    'Dear <mark>' + employee.First_Name + '</mark> <mark>' + employee.Last_Name + '</mark>,'
    )
  ),
  //
  (employee.Job_Custom_Field1 != 'Non-Exempt Per Diem Weekly -  Hourly' && employee.Job_Custom_Field1 != 'Non-Exempt Per Diem Bi-weekly - Hourly' && employee.Job_Custom_Field1 != 'Non-Exempt Per Diem Bi-weekly - Visits' && employee.Status == 'FT') &&
  $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class is FT and not a Per Diem position "/>').append(
    $('<p/>').html(
      'It is a pleasure to confirm our offer of employment as <mark>' + employee.Position + '</mark>. This is a full-time position reporting directly to <mark>' + employee.Hire_Offer_Custom_Field1 + '</mark>, <mark>' + employee.Hire_Offer_Custom_Field2 + '</mark>. Subject to all conditions imposed in this offer letter, your target start date will be as of <mark>' + employee.Start_Date + '</mark>.'
      )
    ),
  (employee.Job_Custom_Field1 != 'Non-Exempt Per Diem Weekly -  Hourly' && employee.Job_Custom_Field1 != 'Non-Exempt Per Diem Bi-weekly - Hourly' && employee.Job_Custom_Field1 != 'Non-Exempt Per Diem Bi-weekly - Visits' && employee.Status == 'PT') &&
  $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class is PT and not a Per Diem position "/>').append(
    $('<p/>').html(
      'It is a pleasure to confirm our offer of employment as <mark>' + employee.Position + '</mark>. This is a part-time position reporting directly to <mark>' + employee.Hire_Offer_Custom_Field1 + '</mark>, <mark>' + employee.Hire_Offer_Custom_Field2 + '</mark>. Subject to all conditions imposed in this offer letter, your target start date will be as of <mark>' + employee.Start_Date + '</mark>.'
      )
    ),
  (employee.Job_Custom_Field1 == 'Non-Exempt Per Diem Weekly -  Hourly' || employee.Job_Custom_Field1 == 'Non-Exempt Per Diem Bi-weekly - Hourly' || employee.Job_Custom_Field1 == 'Non-Exempt Per Diem Bi-weekly - Visits') &&
  $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class = a Per Diem position"/>').append(
    $('<p/>').html(
      'It is a pleasure to confirm our offer of employment as <mark>' + employee.Position + '</mark>. This is a per diem position reporting directly to <mark>' + employee.Hire_Offer_Custom_Field1 + '</mark>, <mark>' + employee.Hire_Offer_Custom_Field2 + '</mark>. Subject to all conditions imposed in this offer letter, your target start date will be as of <mark>' + employee.Start_Date + '</mark>.'
      )
    ),

  (['Non-Exempt Per Diem Weekly - Hourly', 'Non-Exempt Per Diem Bi-weekly - Hourly', 'Non-Exempt Per Diem Bi-weekly - Visits'].indexOf(employee.Job_Custom_Field1) < 0 && employee.Position_Type == 'part-time') &&
  $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class = a Per Diem position"/>').append(
    $('<p/>').append(
      'Welcome to Kindred at Home!  On behalf of the entire team, I would like to thank you for choosing us as your place of employment and hope that your relationship with our company will be rewarding for you.  It is a pleasure to confirm our offer of employment as ',
      $('<mark/>').append(employee.Position),
      '. This is a part-time position reporting directly to gentiva_hmname, gentiva_HMTitle.  Subject to all conditions imposed in this offer letter, your target start date will be as of ',
      $('<mark/>').append(employee.Start_Date),
      '.'
      )
    ),

 (employee.Job_Custom_Field1 == 'Exempt Weekly Non-Clinical' && employee.Work_Location == 'California') &&
 $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class = Exempt Weekly Non-Clinical Work Location = California"/>').append(
  $('<p/>').html(
    'You will receive an annual gross salary of $<mark>' + employee.Hire_Offer_Custom_Field15 + '.00</mark>, less any payroll deductions and all required withholdings.  You will be paid weekly in accordance with the Company’s standard payroll practice.  We strive to provide quality care to the patients we serve.  As such, the number of hours in a normal day may fluctuate based on the needs of those in our care, but your weekly salary will remain the same.  As an exempt employee, you will not be eligible for overtime wages.'
    )
  ),

    (employee.Job_Custom_Field1 == 'Exempt Bi-Weekly Non-Clinical') &&
    $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class = Exempt Bi-Weekly Non-Clinical"/>').append(
      $('<p/>').html(
        'You will receive an annual gross salary of $<mark>' + employee.Hire_Offer_Custom_Field15 + '.00</mark>, less any payroll deductions and all required withholdings.  You will be paid bi-weekly in accordance with the Company’s standard payroll practice.  We strive to provide quality care to the patients we serve.  As such, the number of hours in a normal day may fluctuate based on the needs of those in our care, but your bi-weekly salary will remain the same.  As an exempt employee, you will not be eligible for overtime wages.'
        )
      ),

  (employee.Job_Custom_Field1 == 'Exempt Bi-Weekly Clinical' && employee.JobCode != '09701236' && employee.JobCode != '09701301') &&
  $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class = Exempt Bi-Weekly Clinical & Job Code != 09701236 & Job Code != 09701301"/>').append(
    $('<p/>').html(
      'You will receive an annual gross salary of $<mark>' + employee.Hire_Offer_Custom_Field15 + '.00</mark>, less any payroll deductions and all required withholdings.  You will be paid bi-weekly in accordance with the Company’s standard payroll practice.  We strive to provide quality care to the patients we serve.  As such, the number of hours in a normal day may fluctuate based on the needs of those in our care, but your bi-weekly salary will remain the same.  As an exempt employee, you will not be eligible for overtime wages.' 
      ),
    $('<p/>').html(
      'In addition, you will have a bi-weekly productivity target of <mark>' + employee.Hire_Offer_Custom_Field9 + '</mark> based on your scheduled hours, territory, and the number of visits typically completed in the territory.  You will be expected to deliver excellent care and complete an expected volume of work – work volume will be measured by the performance points (or weight) associated with each visit type.  Each visit type has been assigned a standardized weight according to the level of complexity of the type of visit and the skills and decision-making required for completion of the visit.  However, your salary will not be reduced or varied based on quality or quantity of work, including exceeding or the failure to meet your bi-weekly productivity target.'
      ),
    $('<p/>').html(
      'The five primary visit types and their performance points are listed below:'
      ),
    $('<ul class="offer_UL"/>').append(
      $('<li/>').append(
        'Visit type: Routine - Performance Points: 0.90'
        ),
      $('<li/>').append(
        'Visit type: Non-OASIS ROC/Recert - Performance Points: 1.50'
        ),
      $('<li/>').append(
        'Visit type: OASIS ROC/Recert - Performance Points: 1.75'
        ),
      $('<li/>').append(
        'Visit type: Discharge - Performance Points: 1.75'
        ),
      $('<li/>').append(
        'Visit type: SOC - Performance Points: 2.50'
        )
      )
    ),

  (employee.Job_Custom_Field1 == 'Exempt Bi-Weekly Clinical' && (employee.JobCode == '09701236' || employee.JobCode == '09701301') && employee.Work_Location != 'California') &&
  $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class = Exempt Bi-Weekly Clinical and Job Code = 09701236 or Job Code = 09701301 & Excludes California"/>').append(
    $('<p/>').html(
      'You will receive an annual gross salary of $<mark>' + employee.Hire_Offer_Custom_Field15 + '.00</mark>, less any payroll deductions and all required withholdings.  You will be paid bi-weekly in accordance with the Company’s standard payroll practice.  We strive to provide quality care to the patients we serve.  As such, the number of hours in a normal day may fluctuate based on the needs of those in our care, but your bi-weekly salary will remain the same.  As an exempt employee, you will not be eligible for overtime wages. ' 
      ),
    $('<p/>').html(
      'As a Clinical Assessment Advisor, you will have sole responsibility for Start of Care (SOC) visits within your branch – your primary focus will be to to complete and oversee the development of the plan of treatments, as approved by physicians, to ensure optimal clinical assessment generation, while maintaining a focus on quality and 60-day hospitalization.  You will be assigned a Bi-weekly SOC Visit Target of <mark>' + employee.Hire_Offer_Custom_Field14 + '</mark>, which is the count or number of SOC visits you are expected to perform each pay period. '
      ),
    $('<p/>').html(
      'You will earn an SOC Bonus for all SOC visits performed above and beyond your Bi-weekly SOC Visit Target. The SOC Bonus is calculated by multiplying your base rate of $<mark>' + employee.Hire_Offer_Custom_Field7 + '</mark> times 2.5 performance points for each SOC visit that exceeds your Bi-weekly SOC Visit Target. '
      ),
    $('<p/>').html(
      'In addition to your Bi-weekly SOC Visit Target, you will have a bi-weekly productivity target of <mark>' + employee.Hire_Offer_Custom_Field9 + '</mark> based on your scheduled hours, territory, and the number of visits typically completed in the territory.  You will be expected to deliver excellent care and complete an expected volume of work – work volume will be measured by the performance points (or weight) associated with each visit type.  Each visit type has been assigned a standardized weight according to the level of complexity of the type of visit and the skills and decision-making required for completion of the visit. You will not be compensated based on the performance points you earn or for exceeding your bi-weekly productivity target.'
      ),
    $('<p/>').html(
      'The five primary visit types and their performance points are listed below:'
      ),
    $('<ul class="offer_UL"/>').append(
      $('<li/>').append(
        'Visit type: Routine - Performance Points: 0.90'
        ),
      $('<li/>').append(
        'Visit type: Non-OASIS ROC/Recert - Performance Points: 1.50'
        ),
      $('<li/>').append(
        'Visit type: OASIS ROC/Recert - Performance Points: 1.75'
        ),
      $('<li/>').append(
        'Visit type: Discharge - Performance Points: 1.75'
        ),
      $('<li/>').append(
        'Visit type: SOC - Performance Points: 2.50'
        )
      )
    ),

    (employee.Job_Custom_Field1 == 'Non-Exempt Bi-Weekly Non-Clinical' && employee.Work_Location != 'California') &&
    $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class = Non-Exempt Bi-Weekly Non-Clinical & Work Location does not = California"/>').append(
      $('<p/>').html(
        'Your rate of pay will be $<mark>' + employee.Hire_Offer_Custom_Field6 + '</mark> per hour, less any payroll deductions and all required withholdings.  You will be paid bi-weekly in accordance with the Company’s standard payroll practice.  You will be paid an hourly rate for each hour that you work.  Also, you will be eligible for overtime, paid in accordance with state and/or federal law.  We strive to provide quality care to the patients we serve.  As such, the number of hours in a normal day may fluctuate based on the needs of those in our care.'
        ),
      $('<p/>').html(
        'You must record the exact time you begin and end work each day.  You must also record the exact time that you begin and end your meal period each day.  To ensure that overtime is paid as required by law and to determine your employee benefits eligibility, you must record all work time.'
        )
      ),


  (employee.Job_Custom_Field1 == 'Non-Exempt Bi-Weekly Clinical' && employee.Work_Location != 'California') &&
  $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class = Non-Exempt Bi-Weekly Clinical & Work Location does not = California"/>').append(
    $('<p/>').html(
      'Your rate of pay will be $<mark>' + employee.Hire_Offer_Custom_Field6 + '</mark> per hour, less any payroll deductions and all required withholdings.  You will be paid bi-weekly in accordance with the Company’s standard payroll practice.  You will be paid an hourly rate for each hour that you work.  Also, you will be eligible for overtime, paid in accordance with state and/or federal law.  We strive to provide quality care to the patients we serve.  As such, the number of hours in a normal day may fluctuate based on the needs of those in our care.'
      ),
    $('<p/>').html(
      'You must record the exact time you begin and end work each day.  You must also record the exact time that you begin and end your meal period each day.  To ensure that overtime is paid as required by law and to determine your employee benefits eligibility, you must record all work time.'
      ),
    $('<p/>').html(
      'In addition, you will have a bi-weekly productivity target of <mark>' + employee.Hire_Offer_Custom_Field9 + '</mark> based on your scheduled hours, territory, and the number of visits typically completed in the territory.  You will be expected to deliver excellent care and complete an expected volume of work – work volume will be measured by the performance points (or weight) associated with each visit type.  Each visit type has been assigned a standardized weight according to the level of complexity of the type of visit and the skills and decision-making required for completion of the visit.  However, you will not be compensated based on the performance points you earn.' 
      ),
    $('<p/>').html(
      'The five primary visit types and their performance points are listed below:'
      ),
    $('<ul class="offer_UL"/>').append(
      $('<li/>').append(
        'Visit type: Routine - Performance Points: 0.90'
        ),
      $('<li/>').append(
        'Visit type: Non-OASIS ROC/Recert - Performance Points: 1.50'
        ),
      $('<li/>').append(
        'Visit type: OASIS ROC/Recert - Performance Points: 1.75'
        ),
      $('<li/>').append(
        'Visit type: Discharge - Performance Points: 1.75'
        ),
      $('<li/>').append(
        'Visit type: SOC - Performance Points: 2.50'
        )
      )
    ),


    (employee.Job_Custom_Field1 == 'Non-Exempt Bi-Weekly Clinical' && employee.Work_Location == 'California') &&
    $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class= Non-Exempt Bi-Weekly Clinical & Work Location = California"/>').append(
      $('<p/>').html(
        'Your rate of pay will be $<mark>' + employee.Hire_Offer_Custom_Field6 + '</mark> per hour, less any payroll deductions and all required withholdings.  You will be paid bi-weekly in accordance with the Company’s standard payroll practice.  You will be paid an hourly rate for each hour that you work.  Also, you will be eligible for overtime, paid in accordance with state and/or federal law.  We strive to provide quality care to the patients we serve.  As such, the number of hours in a normal day may fluctuate based on the needs of those in our care.'
        ),
      $('<p/>').html(
        'You must record all worked time, including travel time between work locations.  You must record the exact time you begin and end work each day.  You must also record the exact time that you begin and end your meal period each day.  To ensure that overtime is paid as required by law and to determine your employee benefits eligibility, you must record all work time.'
        ),
      $('<p/>').html(
        'You will be provided with and expected to take an unpaid duty-free meal period each day, before completing five hours of work for not less than 30 uninterrupted minutes.  You will also be provided with at least a 10 minute uninterrupted, paid, duty-free rest break for each four hours you work, or major portion thereof.'
        )
      ),
    

    (employee.Job_Custom_Field1 == 'Non-Exempt Weekly Clinical' && employee.Work_Location == 'California') &&
    $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class= Non-Exempt Weekly Clinical & Work Location = California"/>').append(
      $('<p/>').html(
        'Your rate of pay will be $<mark>' + employee.Hire_Offer_Custom_Field6 + '</mark> per hour, less any payroll deductions and all required withholdings.  You will be paid weekly in accordance with the Company’s standard payroll practice.  You will be paid an hourly rate for each hour that you work.  Also, you will be eligible for overtime, paid in accordance with state and/or federal law.  We strive to provide quality care to the patients we serve.  As such, the number of hours in a normal day may fluctuate based on the needs of those in our care.'
        ),
      $('<p/>').html(
        'You must record all worked time, including travel time between work locations.  You must record the exact time you begin and end work each day.  You must also record the exact time that you begin and end your meal period each day.  To ensure that overtime is paid as required by law and to determine your employee benefits eligibility, you must record all work time.'
        ),
      $('<p/>').html(
        'You will be provided with and expected to take an unpaid duty-free meal period each day, before completing five hours of work for not less than 30 uninterrupted minutes.  You will also be provided with at least a 10 minute uninterrupted, paid, duty-free rest break for each four hours you work, or major portion thereof.'
        )
      ),

  //UPDATED TO EXCLUDE JOB CODES 20210224 CMADEWELL
  (employee.Job_Custom_Field1 == 'Exempt Fee Based Pay' && employee.JobCode != '09701236' && employee.JobCode != '09701301' && employee.Work_Location != 'California') &&
  $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class = Exempt Fee Based Pay, Job Codes not equal to 09701236 or 09701301 and Work Location is not equal to California"/>').append(
    $('<p/>').html(
      'You will be compensated as an exempt employee under our Fee-based Pay Program.  As an exempt employee you are not eligible for overtime pay.  Your pay will be less any payroll deductions and all required withholdings. You will be paid bi-weekly in accordance with the Company’s standard payroll practice.'
      ),
    $('<p/>').html(
      'The Fee-Based Pay Program is a pay plan that consists of a visit rate that is used to compensate a clinician for all visit-related and non-visit activity, an hourly rate that is used to compensate for paid time off, and an Administrative Fee.'
      ),
    $('<p/>').html(
      'You will receive a visit rate for each visit you perform that is determined by the level of complexity of the visit and not based on the amount of time each visit may take.  Your visit rate compensates you for all time and activities associated with the patient visit, regardless of the amount of time you spend during the visit and completing associated activities, including but not limited to: preparation time, participation in developing the plan of treatment, travel to the patient’s home or place of residence and return, the actual patient contact, all charting and related paperwork, telephone time and conferences with the patient’s family or other individuals concerning the patient, and other visit-related activities.'  
      ),  
    $('<p/>').html(
      'Each visit type has been assigned standardized performance points (or weight) according to the level of complexity of the type of visit and the skills and decision-making required for completion of the visit.  The visit rate for each visit is determined by multiplying your base rate of $<mark>' + employee.Hire_Offer_Custom_Field7 + '</mark> times the performance points (or weight) associated with each visit type.  You will also receive a visit rate for all worked non-visit activity.'
      ),  
    $('<p/>').html(
      'The five primary visit types and their performance points are listed below:'
      ),      
    $('<ul class="offer_UL"/>').append(
      $('<li/>').append(
        'Visit type: Routine - Performance Points: 0.90'
        ),
      $('<li/>').append(
        'Visit type: Non-OASIS ROC/Recert - Performance Points: 1.50'
        ),
      $('<li/>').append(
        'Visit type: OASIS ROC/Recert - Performance Points: 1.75'
        ),
      $('<li/>').append(
        'Visit type: Discharge - Performance Points: 1.75'
        ),
      $('<li/>').append(
        'Visit type: SOC - Performance Points: 2.50'
        )
      ),
    $('<p/>').html(
      'You will be given a bi-weekly productivity target of <mark>' + employee.Hire_Offer_Custom_Field9 + '</mark> based on your scheduled hours, territory, and the number of visits typically completed in the territory.  You will be expected to deliver excellent care and complete an expected volume of work – work volume will be measured by the performance points (or weight) associated with each visit type or non-visit activity.'
      ),  
    $('<p/>').html(
      'In addition, you will receive a flat, weekly Administrative Fee of $75 that will be paid automatically for each week you have productive, worked hours.  The Administrative Fee will compensate you for case conferences, chart reviews, and other non-visit related administrative activity not specifically reported in another manner.  The Administrative Fee will cover these activities regardless of the amount of time it takes you to complete the activity.'
      ),  
    $('<p/>').html(
     'Lastly, you will have an hourly benefit rate of $<mark>' + employee.Hire_Offer_Custom_Field28 + '</mark> for all non-worked, paid time off including, but not limited to, paid time off (PTO), sick time off, paid sick leave, holiday time off, and bereavement time off.'
     )
    ),
  //UPDATED TO INCLUDE JOB CODES 20210224 CMADEWELL 
  (employee.Job_Custom_Field1 == 'Exempt Fee Based Pay' && employee.JobCode == '09701236' && employee.Work_Location != 'California') &&
  $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class = Exempt Fee Based Pay and Job Code = 09701236 and Work Location is not equal to California"/>').append(
    $('<p/>').html(
      'You will be compensated as an exempt employee under our Clinical Assessment Advisor Fee-based Pay Program.  As an exempt employee you are not eligible for overtime pay.  Your pay will be less any payroll deductions and all required withholdings. You will be paid bi-weekly in accordance with the Company’s standard payroll practice.'
      ),
    $('<p/>').html(
      'The Fee-Based Pay Program is a pay plan that consists of a visit rate that is used to compensate a clinician for all visit-related and non-visit activity, an hourly rate that is used to compensate for paid time off, and an Administrative Fee.'
      ),
    $('<p/>').html(
      'You will receive a visit rate for each visit you perform that is determined by the level of complexity of the visit and not based on the amount of time each visit may take.  Your visit rate compensates you for all time and activities associated with the patient visit, regardless of the amount of time you spend during the visit and completing associated activities, including but not limited to: preparation time, participation in developing the plan of treatment, travel to the patient’s home or place of residence and return, the actual patient contact, all charting and related paperwork, telephone time and conferences with the patient’s family or other individuals concerning the patient, and other visit-related activities.'  
      ),  
    $('<p/>').html(
      'Each visit type has been assigned standardized performance points (or weight) according to the level of complexity of the type of visit and the skills and decision-making required for completion of the visit.  The visit rate for each visit is determined by multiplying your base rate of $<mark>' + employee.Hire_Offer_Custom_Field7 + '</mark> times the performance points (or weight) associated with each visit type.  You will also receive a visit rate for all worked non-visit activity.'
      ),  
    $('<p/>').html(
      'The five primary visit types and their performance points are listed below:'
      ),      
    $('<ul class="offer_UL"/>').append(
      $('<li/>').append(
        'Visit type: Routine - Performance Points: 0.90'
        ),
      $('<li/>').append(
        'Visit type: Non-OASIS ROC/Recert - Performance Points: 1.50'
        ),
      $('<li/>').append(
        'Visit type: OASIS ROC/Recert - Performance Points: 1.75'
        ),
      $('<li/>').append(
        'Visit type: Discharge - Performance Points: 1.75'
        ),
      $('<li/>').append(
        'Visit type: SOC - Performance Points: 2.50'
        )
      ),
    $('<p/>').html(
      'You will be given a bi-weekly productivity target of <mark>' + employee.Hire_Offer_Custom_Field9 + '</mark> based on your scheduled hours, territory, and the number of visits typically completed in the territory.  You will be expected to deliver excellent care and complete an expected volume of work – work volume will be measured by the performance points (or weight) associated with each visit type or non-visit activity.'
      ),  
    $('<p/>').html(
      'As a Clinical Assessment Advisor, you will have sole responsibility for Start of Care (SOC) visits within your branch – your primary focus will be to complete and oversee the development of the plan of treatments, as approved by physicians, to ensure optimal clinical assessment generation, while maintaining a focus on quality and 60-day hospitalization.  In addition to your bi-weekly productivity target, you will also be assigned a Weekly SOC Visit Target of <mark>' + employee.Hire_Offer_Custom_Field14 + '</mark>, which is the count or number of SOC visits you are expected to perform each week. '
      ), 
    $('<p/>').html(
      'You will earn an SOC Bonus for all SOC visits performed above and beyond your Weekly SOC Visit Target. The SOC Bonus is calculated by multiplying your base rate times 2.5 performance points for each SOC visit that exceeds your Weekly SOC Visit Target - this will be paid in addition to your normal SOC visit rate. '
      ),
    $('<p/>').html(
      'In addition, you will receive a flat, weekly Administrative Fee of $75 that will be paid automatically for each week you have productive, worked hours.  The Administrative Fee will compensate you for case conferences, chart reviews, and other non-visit related administrative activity not specifically reported in another manner.  The Administrative Fee will cover these activities regardless of the amount of time it takes you to complete the activity.'
      ),  
    $('<p/>').html(
     'Lastly, you will have an hourly benefit rate of $<mark>' + employee.Hire_Offer_Custom_Field28 + '</mark> for all non-worked, paid time off including, but not limited to, paid time off (PTO), sick time off, paid sick leave, holiday time off, and bereavement time off.'
     )
    ),

  (employee.Job_Custom_Field1 == 'Non-Exempt Full Time PPV'&& employee.Work_Location != 'California') &&
  $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class = Non-Exempt Full Time PPV and Work Location does not equal California "/>').append(
    $('<p/>').html(
      'You will be compensated as a non-exempt employee under our Pay Per Visit Program.  Your pay will be less any payroll deductions and all required withholdings.  You will be paid bi-weekly in accordance with the Company’s standard payroll practice.'
      ),
    $('<p/>').html(
      'The Pay Per Visit Program is a pay plan that consists of a visit rate that is used to compensate a clinician for all visit-related activity, as well as an hourly rate that is used to compensate for any applicable overtime, non-visit activity and paid time off.'
      ),
    $('<p/>').html(
      'You will receive a visit rate for each visit you perform.  The visit rate compensates you for all time and activities associated with the patient visit, including but not limited to: preparation time, participation in developing the plan of treatment, travel to the patient’s home or place of residence and return, the actual patient contact, all charting and related paperwork, telephone time and conferences with the patient’s family or other individuals concerning the patient, and other visit-related activities.'
      ),
    $('<p/>').html(
      'Each visit type has been assigned standardized performance points (or weight) according to the level of complexity of the type of visit and the skills and decision-making required for completion of the visit.  The visit rate for each visit is determined by multiplying your base rate of $<mark>' + employee.Hire_Offer_Custom_Field7 + '</mark> times the performance points (or weight) associated with each visit type.'
      ),
    $('<p/>').html(
      'The five primary visit types and their performance points are listed below:'
      ),
    $('<ul class="offer_UL"/>').append(
      $('<li/>').append(
        'Visit type: Routine - Performance Points: 0.90'
        ),
      $('<li/>').append(
        'Visit type: Non-OASIS ROC/Recert - Performance Points: 1.50'
        ),
      $('<li/>').append(
        'Visit type: OASIS ROC/Recert - Performance Points: 1.75'
        ),
      $('<li/>').append(
        'Visit type: Discharge - Performance Points: 1.75'
        ),
      $('<li/>').append(
        'Visit type: SOC - Performance Points: 2.50'
        )
      ),
    $('<p/>').html(
      'You will receive your hourly rate of $<mark>' + employee.Hire_Offer_Custom_Field6 + '</mark> for all non-visit activities, including but not limited to: attendance at meetings and conferences, traveling for work that is not included in the visit rate (i.e. not to and/or from a visit) required training, orientation, and all paid time off , including but not limited to, paid time off (PTO), sick time off, paid sick leave, holiday time off, and bereavement time off.  '
      ),  
    $('<p/>').html(
      'You are classified as a non-exempt employee, meaning you qualify for overtime under the Fair Labor Standards Act.  As such, you must record all worked time, including travel time between work locations, and the exact time you begin and end work each day.  You will earn overtime for all time-worked that exceeds 40 hours in a work week.  Overtime is calculated by totaling all visit rates and hourly compensation that has been earned in a single workweek, divided by the total hours worked in the week, then multiplied by 0.5 times the number of overtime hours worked in the workweek.  The applicable overtime calculation will then be added to the original compensation for the week.'
      ),  
    $('<p/>').html(
     'Lastly, you will be given a bi-weekly productivity target of <mark>' + employee.Hire_Offer_Custom_Field9 + '</mark> based on scheduled hours, territory, and the number of visits typically completed in the territory.  You will be expected to deliver excellent care and complete an expected volume of work – work volume will be measured by the performance points (or weight) associated with each visit type.'
     )
    ),


  (employee.Job_Custom_Field1 == 'Exempt Bi-Weekly Salary Plus' && employee.Work_Location != 'California') &&
  $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class = Exempt Bi-Weekly Salary Plus and Work Location does not equal California"/>').append(
    $('<p/>').html(
      'You will be compensated as an exempt employee under our Salary Plus Pay Program.  As an exempt employee you are not eligible for overtime pay.  Your pay will be less any payroll deductions and all required withholdings.  You will be paid bi-weekly in accordance with the Company’s standard payroll practice.'
      ),
    $('<p/>').html(
      'Salary Plus is a pay plan that consists of a base salary plus a bonus when your bi-weekly productivity target is exceeded.   Your salary will be $<mark>' + employee.Hire_Offer_Custom_Field17 + '.00</mark>, which compensates you for all work performed, including but not limited to: all care/treatment visits to patients and work related to visits (such as calls to physicians), time spent documenting patient care, attendance at meetings and conferences, travel time, required training, orientation, and all paid time off, including but not limited to, paid time off (PTO), sick time off, paid sick leave, holiday time off, and bereavement time off.  '
      ),
    $('<p/>').html(
      'You will be assigned a bi-weekly productivity target of <mark>' + employee.Hire_Offer_Custom_Field9 + '</mark> based on scheduled hours, territory, and the number of visits typically completed in the territory.'
      ),
    $('<p/>').html(
      'You will be expected to deliver excellent care and complete an expected volume of work – work volume will be measured by the performance points (or weight) associated with each visit type.  Each visit type has been assigned a standardized weight according to the level of complexity of the type of visit and the skills and decision-making required for completion of the visit.  Your salary will not be reduced or varied based on quality or quantity of work, including the failure to meet your bi-weekly productivity target.  However, the number of performance points you earn will be used to measure your bi-weekly job performance.'
      ),
    $('<p/>').html(
      'As stated above, work volume will be measured by the performance points (or weight) associated with each visit type. Bonus points are earned for all visits performed above and beyond your bi-weekly productivity target and equate to the performance point value of the visit.  Earned bonus points will be calculated using your Bonus Point Rate of $<mark>' + employee.Hire_Offer_Custom_Field12 + '</mark> and will be in addition to your salary.'
      ),
    $('<p/>').html(
      'The five primary visit types and their performance points are listed below.'
      ),
    $('<ul class="offer_UL"/>').append(
      $('<li/>').append(
        'Visit type: Routine - Performance Points: 0.90'
        ),
      $('<li/>').append(
        'Visit type: Non-OASIS ROC/Recert - Performance Points: 1.50'
        ),
      $('<li/>').append(
        'Visit type: OASIS ROC/Recert - Performance Points: 1.75'
        ),
      $('<li/>').append(
        'Visit type: Discharge - Performance Points: 1.75'
        ),
      $('<li/>').append(
        'Visit type: SOC - Performance Points: 2.50'
        )
      )
    ),


  (employee.Job_Custom_Field1 == 'Exempt Weekly Salary Plus' && employee.Work_Location == 'California') &&
  $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class = Exempt Weekly Salary Plus and Work Location = California"/>').append(
    $('<p/>').html(
      'You will be compensated as an exempt employee under our Salary Plus Pay Program.  As an exempt employee you are not eligible for overtime pay.  Your pay will be less any payroll deductions and all required withholdings.  You will be paid weekly in accordance with the Company’s standard payroll practice.'
      ),
    $('<p/>').html(
      'Salary Plus is a pay plan that consists of a base salary plus a bonus when your weekly productivity target is exceeded.   Your salary will be $<mark>' + employee.Hire_Offer_Custom_Field17 + '.00</mark>, which compensates you for all work performed, including but not limited to: all care/treatment visits to patients and work related to visits (such as calls to physicians), time spent documenting patient care, attendance at meetings and conferences, travel time, required training, orientation, and all paid time off, including but not limited to, paid time off (PTO), sick time off, paid sick leave, holiday time off, and bereavement time off.  '
      ),
    $('<p/>').html(
      'You will be assigned a weekly productivity target of <mark>' + employee.Hire_Offer_Custom_Field9 + '</mark> based on scheduled hours, territory, and the number of visits typically completed in the territory.'
      ),
    $('<p/>').html(
      'You will be expected to deliver excellent care and complete an expected volume of work – work volume will be measured by the performance points (or weight) associated with each visit type.  Each visit type has been assigned a standardized weight according to the level of complexity of the type of visit and the skills and decision-making required for completion of the visit.  Your salary will not be reduced or varied based on quality or quantity of work, including the failure to meet your weekly productivity target.  However, the number of performance points you earn will be used to measure your weekly job performance.'
      ),
    $('<p/>').html(
      'As stated above, work volume will be measured by the performance points (or weight) associated with each visit type. Bonus points are earned for all visits performed above and beyond your weekly productivity target and equate to the performance point value of the visit.  Earned bonus points will be calculated using your Bonus Point Rate of $<mark>' + employee.Hire_Offer_Custom_Field12 + '</mark> and will be in addition to your salary.'
      ),
    $('<p/>').html(
      'The five primary visit types and their performance points are listed below.'
      ),
    $('<ul class="offer_UL"/>').append(
      $('<li/>').append(
        'Visit type: Routine - Performance Points: 0.90'
        ),
      $('<li/>').append(
        'Visit type: Non-OASIS ROC/Recert - Performance Points: 1.50'
        ),
      $('<li/>').append(
        'Visit type: OASIS ROC/Recert - Performance Points: 1.75'
        ),
      $('<li/>').append(
        'Visit type: Discharge - Performance Points: 1.75'
        ),
      $('<li/>').append(
        'Visit type: SOC - Performance Points: 2.50'
        )
      )
    ),
  

(employee.Job_Custom_Field1 == 'Non-Exempt Per Diem Bi-weekly - Hourly' && employee.Work_Location != 'California') &&
$('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class= Per Diem Bi-Weekly  Hourly and Work Location does not= California"/>').append(
  $('<p/>').html(
    'Your rate of pay will be $<mark>' + employee.Hire_Offer_Custom_Field6 + '</mark> per hour, less any payroll deductions and all required withholdings.  You will be paid bi-weekly in accordance with the Company’s standard payroll practice.  '
    ),
  $('<p/>').html(
    'In your position as a per-diem/assignment employee, you will not be assigned a set weekly schedule, set number of hours, or assignments as your employment will be based upon operational needs and an appropriate match to your skills, abilities, and availability.  Assignments given may be short or long-term.  Your leader will discuss any performance and productivity expectations with you after your start date.'
    ),
  $('<p/>').html(
    'You will be expected to record your actual start and end times each day, as well as the start and end times of your meal periods.'
    )
  ),


(employee.Job_Custom_Field1 == 'Non-Exempt Per Diem Weekly -  Hourly' && employee.Work_Location == 'California') &&
$('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class= Per Diem Weekly – Hourly and Work Location = California"/>').append(
  $('<p/>').html(
   'Your hourly  rate of pay will be $<mark>' + employee.Hire_Offer_Custom_Field6 + '</mark>, less any payroll deductions and all required withholdings.  You will be paid weekly in accordance with the Company’s standard payroll practice.'
   ),
  $('<p/>').html(
   'In your position as a per-diem/assignment employee, you will not be assigned a set weekly schedule, set number of hours, or assignments as your employment will be based upon operational needs and an appropriate match to your skills, abilities, and availability.  Assignments given may be short or long-term.  Your leader will discuss any performance and productivity expectations with you after your start date.'
   ),
  $('<p/>').html(
   'You will be expected to record your actual start and end times each day, as well as the start and end times of your meal periods.'
   ),
  $('<p/>').html(
   'You must record all worked time, including travel time between work locations.  You must record the exact time you begin and end work each day.  You must also record the exact time that you begin and end your meal period each day.  To ensure that overtime is paid as required by law and to determine your employee benefits eligibility, you must record all work time.'
   ),
  $('<p/>').html(
   'You will be provided with and expected to take an unpaid duty-free meal period each day, before completing five hours of work for not less than 30 uninterrupted minutes.  You will also be provided with at least a 10 minute uninterrupted, paid, duty-free rest break for each four hours you work, or major portion thereof.'
   )
  ),
//Non-Exempt Per Diem Weekly -  Hourly and MO CC Facilities UPDATED 20210309 to be weekly pay
(employee.Job_Custom_Field1 == 'Non-Exempt Per Diem Weekly -  Hourly' && (employee.FacilityCode == '2268' || employee.FacilityCode == '2270' || employee.FacilityCode == '2277' || employee.FacilityCode == '2278' || employee.FacilityCode == '2279' || employee.FacilityCode == '2281') && employee.Work_Location != 'California') &&
$('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class= Per Diem Weekly – Hourly and Work Location is not California but is in MO CC Facility"/>').append(
  $('<p/>').html(
   'Your rate of pay will be $<mark>' + employee.Hire_Offer_Custom_Field6 + '</mark> per hour, less any payroll deductions and all required withholdings.  You will be weekly in accordance with the Company’s standard payroll practice.'
   ),
  $('<p/>').html(
   'In your position as a per-diem/assignment employee, you will not be assigned a set weekly schedule, set number of hours, or assignments as your employment will be based upon operational needs and an appropriate match to your skills, abilities, and availability.  Assignments given may be short or long-term.  Your leader will discuss any performance and productivity expectations with you after your start date.'
   ),
  $('<p/>').html(
   'You will be expected to record your actual start and end times each day, as well as the start and end times of your meal periods.'
   )
  ),

(employee.Job_Custom_Field1 == 'Non-Exempt Per Diem Bi-weekly - Hourly' && employee.Work_Location == 'California') &&
$('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class= Per Diem Bi-Weekly  Hourly and Work Location = California"/>').append(
  $('<p/>').html(
   'Your rate of pay will be $<mark>' + employee.Hire_Offer_Custom_Field6 + '</mark> per hour, less any payroll deductions and all required withholdings.  You will be paid bi - weekly in accordance with the Company’s standard payroll practice.'
   ),
  $('<p/>').html(
   'In your position as a per-diem/assignment employee, you will not be assigned a set weekly schedule, set number of hours, or assignments as your employment will be based upon operational needs and an appropriate match to your skills, abilities, and availability.  Assignments given may be short or long-term.  Your leader will discuss any performance and productivity expectations with you after your start date.'
   ),
  $('<p/>').html(
   'You must record all worked time, including travel time between work locations.  You must record the exact time you begin and end work each day.  You must also record the exact time that you begin and end your meal period each day.  To ensure that overtime is paid as required by law and to determine your employee benefits eligibility, you must record all work time.'
   ),
  $('<p/>').html(
   'You will be provided with and expected to take an unpaid duty-free meal period each day, before completing five hours of work for not less than 30 uninterrupted minutes.  You will also be provided with at least a 10 minute uninterrupted, paid, duty-free rest break for each four hours you work, or major portion thereof.'
   )
  ),


(employee.Job_Custom_Field1 == 'Non-Exempt Per Diem Bi-weekly - Visits' && employee.Work_Location != 'California') &&
$('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Employee Class = Per Diem Bi-Weekly – Visits and Excludes California"/>').append(
  $('<p/>').html(
   'You will be compensated as a non-exempt employee under our per diem Pay Per Visit Program.  Your pay will be less any payroll deductions and all required withholdings.  You will be paid bi-weekly in accordance with the Company’s standard payroll practice.'
   ),
  $('<p/>').html(
   'You will receive a visit rate for each visit you perform.  The visit rate compensates you for all time and activities associated with the patient visit, including but not limited to: preparation time, participation in developing the plan of treatment, travel to the patient’s home or place of residence and return, the actual patient contact, all charting and related paperwork, telephone time and conferences with the patient’s family or other individuals concerning the patient, and other visit-related activities.  '
   ),
  $('<p/>').html(
   'Each visit type has been assigned standardized performance points (or weight) according to the level of complexity of the type of visit and the skills and decision-making required for completion of the visit.  The visit rate for each visit is determined by multiplying your base rate of $<mark>' + employee.Hire_Offer_Custom_Field7 + '</mark> times the performance points (or weight) associated with each visit type.'  
   ),
  $('<p/>').html(
      'The five primary visit types and their performance points are listed below:'
      ),
    $('<ul class="offer_UL"/>').append(
      $('<li/>').append(
        'Visit type: Routine - Performance Points: 0.90'
        ),
      $('<li/>').append(
        'Visit type: Non-OASIS ROC/Recert - Performance Points: 1.50'
        ),
      $('<li/>').append(
        'Visit type: OASIS ROC/Recert - Performance Points: 1.75'
        ),
      $('<li/>').append(
        'Visit type: Discharge - Performance Points: 1.75'
        ),
      $('<li/>').append(
        'Visit type: SOC - Performance Points: 2.50'
        )
      ),
    $('<p/>').html(
   'In your position as a per-diem/assignment employee, you will not be assigned a set weekly schedule, set number of hours, or assignments as your employment will be based upon operational needs and an appropriate match to your skills, abilities, and availability.  Assignments given may be short or long-term.  Your leader will discuss any performance and productivity expectations with you after your start date. '
   ),
    $('<p/>').html(
   'You will be expected to record your actual start and end times each day, as well as the start and end times of your meal periods.   '
   )
  ),

  (employee.Job_Custom_Field1 == 'Non-Exempt Weekly Non-Clinical' && employee.Work_Location == 'California') &&
  $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Work Location and Employee Class = California and Non-Exempt Weekly Non-Clinical"/>').append(
    $('<p/>').html(
      'Your rate of pay will be $<mark>' + employee.Hire_Offer_Custom_Field6 + '</mark> per hour, less any payroll deductions and all required withholdings.  You will be paid weekly in accordance with the Company’s standard payroll practice.  You will be paid an hourly rate for each hour that you work.  Also, you will be eligible for overtime, paid in accordance with state and/or federal law.  We strive to provide quality care to the patients we serve.  As such, the number of hours in a normal day may fluctuate based on the needs of those in our care.'
      ),
    $('<p/>').html(
      'You must record the exact time you begin and end work each day.  You must also record the exact time that you begin and end your meal period each day.  To ensure that overtime is paid as required by law and to determine your employee benefits eligibility, you must record all work time.'
      ),
    $('<p/>').html(
      'You will be provided with and expected to take an unpaid duty-free meal period each day, before completing five hours of work for not less than 30 uninterrupted minutes.  You will also be provided with at least a 10 minute uninterrupted, paid, duty-free rest break for each four hours you work, or major portion thereof.'
      )
    ),


  (employee.Job_Custom_Field1 == 'Non-Exempt Bi-Weekly Non-Clinical' && employee.Work_Location == 'California') &&
  $('<div class="offerClause marked" data-toggle="popover" data-placement="top" data-content="Work Location and Employee Class = California and Bi-Weekly Non-Clinical"/>').append(
    $('<p/>').html(
      'Your rate of pay will be $<mark>' + employee.Hire_Offer_Custom_Field6 + '</mark> per hour, less any payroll deductions and all required withholdings.  You will be paid bi-weekly in accordance with the Company’s standard payroll practice.  You will be paid an hourly rate for each hour that you work.  Also, you will be eligible for overtime, paid in accordance with state and/or federal law.  We strive to provide quality care to the patients we serve.  As such, the number of hours in a normal day may fluctuate based on the needs of those in our care.'
      ),
    $('<p/>').html(
      'You must record the exact time you begin and end work each day.  You must also record the exact time that you begin and end your meal period each day.  To ensure that overtime is paid as required by law and to determine your employee benefits eligibility, you must record all work time.'
      ),
    $('<p/>').html(
      'You will be provided with and expected to take an unpaid duty-free meal period each day, before completing five hours of work for not less than 30 uninterrupted minutes.  You will also be provided with at least a 10 minute uninterrupted, paid, duty-free rest break for each four hours you work, or major portion thereof.'
      )
    ),

  $('<div class="offerClause">').append(
    $('<p/>').html(
      'This offer is contingent upon successful completion of certain employment screens.  Kindred at Home’s company policy requires that employees who are transferring from one state to another be subject to new screenings as required by state and federal law and/or any site at which you may be assigned to work.  If required by state law, such screenings may include a background check, drug screen, physical exam and/or fingerprinting.  If you are in need of an accommodation to participate in the drug testing process, please let us know as soon as possible.  If you fail to comply with or do not successfully meet the employment requirements within the time frame established by the Company, your offer may be rescinded.'
      ),
    $('<p/>').html(
      'This letter, along with the Employee Handbook and Code of Conduct are intended to outline certain terms and conditions of your employment with the Company; however, none of them create a contract of employment.  Any different representations or agreements that may have been made to you, whether verbal or written, are superseded by this offer.  This letter may not be modified or amended except by written agreement, signed by the Chief Executive Officer of Kindred at Home or his designee and you.  Your employment with the Company is for no specified period of time and constitutes at-will-employment, meaning that either you or the Company will be entitled to end your employment at any time and for any reason, with or without cause.  You will also be subject to Company policies and procedures, including those set forth in the Company’s Employee Handbook and Code of Conduct.'
      )
    ),
    (employee.Work_Location == 'South Carolina') &&
      $('<p/>').html(
        'Your employment with the Company is At-Will.  Pursuant to S.C. Code Ann. 41-1-110, this letter shall not create an express or implied contract of employment.'
      ),

    (['32-01Promotion-2','41-02Promotion-2'].indexOf(employee.Transfer_Reason) >= 0) &&
    $('<div/>').append(
        $('<p/>').html(
          'You are eligible to participate in benefits once certain eligibility requirements are satisfied.  You will have 30 days from your start date as a Full-time employee to enroll in benefits.  If you cover any dependents on your medical, dental, and/or vision plan, you will have 30 days from your start date as a Full-time employee to submit dependent verification documentation.  If you enroll in the medical plan, please review the annual Healthy Steps Wellness program requirements to learn how to retain the discounted Healthy Rewards Rate.  Eligibility for other benefits, including life, disability, 401(k), tuition reimbursement and voluntary benefits will be available per company policy. '
        ),
        $('<p/>').append(
          'You will receive additional information from the Benefitfocus Benefits Center with details on how to register for the Kindred at Home benefits enrollment portal (mykahbenefits.hrintouch.com) where you can view your benefit options and enroll. (',
          $('<strong/>').append('IMPORTANT NOTE'),
          ': All benefits related information is available for review on the benefits enrollment portal, so you do not have to wait to receive mailed or emailed benefits information in order to enroll. As the timing of your benefit elections may impact premium deduction withholding and result in premiums being owed (“arrears”), we suggest that you immediately make enrollment decisions by accessing the enrollment portal or contacting the benefits service center.) '
        ),
        $('<p/>').append(
          'If you have any questions or need assistance to enroll, you may call the Benefitfocus Benefits Center at 833-KAH-BENE (833-524-2363). For questions regarding the 401(k) plan, you may contact T. Rowe Price (800-922-9945 or rps.troweprice.com), as they will be providing the 401(k) enrollment information.'
        )
      ),

    (['32-03LatMove-4','41-10PRN-2'].indexOf(employee.Transfer_Reason) >= 0) &&
    $('<div/>').append(
        $('<p/>').html(
          'You are eligible to participate in benefits once certain eligibility requirements are satisfied.  You will have 30 days from your start date as a Part-time employee to enroll in benefits.  If you cover any dependents on your dental and/or vision plan, you will have 30 days from your start date as a Part-time employee to submit dependent verification documentation.  Eligibility for other benefits, including voluntary life, 401(k), tuition reimbursement and voluntary benefits will be available per company policy.'
        ),
        $('<p/>').append(
          'You will receive additional information from the Benefitfocus Benefits Center with details on how to register for the Kindred at Home benefits enrollment portal (mykahbenefits.hrintouch.com) where you can view your benefit options and enroll. (',
          $('<strong/>').append('IMPORTANT NOTE'),
          ': All benefits related information is available for review on the benefits enrollment portal, so you do not have to wait to receive mailed or emailed benefits information in order to enroll. As the timing of your benefit elections may impact premium deduction withholding and result in premiums being owed (“arrears”), we suggest that you immediately make enrollment decisions by accessing the enrollment portal or contacting the benefits service center.)'
        ),
        $('<p/>').append(
          'If you have any questions or need assistance to enroll, you may call the Benefitfocus Benefits Center at 833-KAH-BENE (833-524-2363). For questions regarding the 401(k) plan, you may contact T. Rowe Price (800-922-9945 or rps.troweprice.com), as they will be providing the 401(k) enrollment information.'
        )
      ),

    (['32-03LatMove-2', '41-10PRN'].indexOf(employee.Transfer_Reason) >= 0) &&
    $('<div/>').append(
        $('<p/>').html(
          'Per Diem employees are eligible to maintain enrollment in the Transit/Commuter spending account and the 401(k) retirement plan.'
        ),
        $('<p/>').append(
          'If you are currently enrolled in a medical plan and have not met the measurement period yet to be considered lookback eligible under the ACA guidelines, your medical coverage will cancel on the last day of the month in which the status change occurs. This is a COBRA qualifying event and information will be mailed to your home address.'
        ),
        $('<p/>').append(
          'Employees transitioning to a Per Diem status who are identified by Benefitfocus as meeting the lookback eligibility requirements under the ACA guidelines will remain enrolled in the medical coverage. If you do not want to continue the medical coverage, you must contact Benefitfocus and actively cancel coverage. The effective date of cancellation for the medical coverage will be the last day of the month in which the cancellation request occurs. '
        ),
        $('<p/>').append(
          'Please note, employees who are ACA lookback eligible and whose benefits continue, may cancel the benefits at any time. Benefits are cancelled prospectively, based on date of cancellation request. Employees who do not cancel benefits (ACA), will have benefits continue through the end of the plan year. To retain benefits under ACA in the following year, employees must meet the measurement period, which is reviewed annually. '
        ),
        $('<p/>').append(
          'Dental and vision coverage will cancel on the last day of the month in which the status change to Per Diem occurs. All other voluntary elected benefits will cancel on the effective date of the status change.'
        ),
        $('<p/>').append(
          'If you have questions or wish to cancel benefits due to your employment status change, please contact the Benefitfocus Benefits Center at 833.524.2363 or email KindredatHomeBenefits@benefitfocus.com. (NOTE: Retirement plan enrollment or general retirement inquiries should be directed to T. Rowe Price at 1-800-922-9945.)'
        )
      ),

    (['32-01Promotion', '32-02Demotion', '32-03LatMove-5', '32-03LatMove-3', '32-03LatMove', '41-02Promotion', '41-03Demotion', '41-04LatMove-3', '41-04LatMove-2', '41-04LatMove'].indexOf(employee.Transfer_Reason) >= 0) &&
    $('<div/>').append(
        $('<p/>').html(
          'If you are currently enrolled in any of the KAH benefit plans, coverage will continue with no changes or disruption based on elections on record. The Division transfer is not an eligible event that allows for an enrollment opportunity or the ability to make changes to your current elections.'
        )
      ),
  
  $('<div class="offerClause/">').append(
    $('<p/>').html(
    'Employees who transfer between Kindred at Home companies may experience a change to eligible benefits.  Please refer to the Kindred at Home benefits portal (<a href="https://www.mykahbenefits.hrintouch.com" target="_blank" class="custom-links">mykahbenefits.hrintouch.com</a>) for additional information.'
    )
    ),

$('<div class="offerClause"/>').append(
  $('<p/>').html(
    'We are pleased with your decision to further your career with Kindred at Home!  If you require any additional information, you may reach <mark>' + employee.Hire_Offer_Custom_Field1 + '</mark> at <mark>' + employee.Hire_Offer_Custom_Field5 + '</mark>.'
    ),
  $('<p/>').html(
    'Once you have accepted this offer, additional tasks will be assigned to you in order to complete the necessary screenings and paperwork, if applicable.  Please complete the tasks as soon as you are able to ensure you are ready for your first day.'
    )
  )
//end append
);
}

function fnShowAccepted(index) {
  $("#markup2").html("").append(
    (index == 'acc') &&
    $('<div class="offerClause2">').append(
      $('<p/>').append(
        'Thank you for your acceptance.'
        )
      ),
    (index == 'dec') &&
    $('<div class="offerClause2">').append(
      $('<p/>').append(
        'I, '+ employee.First_Name + ' ' + employee.Last_Name +', DO NOT accept the above offer and/or terms and conditions made by Kindred at Home.'
        )
      ),
    $('<p/>').html('')
    )
}

function fnShowDeclined(index) {
  $("#markup3").html("").append(
    (index == 'dec') &&
    $('<div class="offerClause3">').append(
      $('<p/>').append(
        'We appreciate the time and effort you have taken to explore career opportunities with Kindred at Home.  We are sorry to hear you have decided not to accept our offer of employment.'
        ),
      $('<p/>').append(
        'We believe that your background and experience are quite impressive and reflect significant accomplishments in your field.  We would like the opportunity to connect in the future, please keep us in mind should things change.'
        ),
      $('<p/>').append(
        'To help us better understand your decision, please provide a reason for your declination:  <strong class="hidden"><u>' + employee.Reason + '</u></strong>'
        ),
      $('<p/>').html('')
      )
    )
}

$(function() {
    //$("#state").val(employee.State);
    //employee.State = $("#state option:selected").text();
    //employee.Recruiter_Name = $("#recruiter_signature").val();
    
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
      [1, 'hidden_pg2']
      ];
      var arrParts3 = [
      [1, 'hidden_pg3']
      ];

      showCompletedOfferLetter('incomplete', 'complete', arrParts);
      showCompletedOfferLetter('incomplete2', 'complete2', arrParts2);
      showCompletedOfferLetter('incomplete3', 'complete3', arrParts3);
    }
  });
