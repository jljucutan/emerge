$(document).ready(function () {
  function fnView() {

    $("#markup").html("").append(
      $('<div class="row"/>').append(
        $('<div class="col-xs-12 col-sm-12 col-md-12" style="padding:0 !important"/>').append(
          $('<div class=""/>').append(
            $('<div class="offerClause"/>').append(
              $('<p style="padding-top:15px"/>').html('Welcome to <b>'+compName(employee.Company_Name)+'</b>. As a new employee, you are required to undergo a mandatory pre‐placement/pre‐employment evaluation. Following your appointment, Occupational Health will contact you if there are any questions regarding your clearance. Depending on the results of your visit, you may be asked to return to complete additional clearance steps. If the results are acceptable, Occupational Health will clear you electronically. In the case that you are given a medical clearance form, you must return this form to the Talent Acquisition office.'
                )
              ),

            (['LMC','SPH'].indexOf(employee.Company_Name)>=0) &&
            $('<div class="offerClause"/>').append(
              $('<p/>').html('<br><b>Please Note:</b> Based upon the position you are applying for, you MAY be required to complete a Urine Drug/Toxicology Screen at Quest Laboratories. Your Human Resources recruiter will inform you if this test is necessary and will either order the test or provide you with any required forms. You must complete the testing as soon as possible, since it takes a minimum of 48 hours for the results to be received at Occupational Health Services (OHS). Results of your urine drug screen must be available to OHS prior to scheduling an appointment for your evaluation.'
                )
              ),

            (['LMC','SPH'].indexOf(employee.Company_Name)>=0) &&
            $('<div class="offerClause"/>').append(
              $('<ul style="padding-left:30px;list-style-type:disc"/>').append(
                $('<li/>').html('<u>DO NOT</u> drink water for 2 hours prior to your urine drug screen test.'
                  ),
                $('<li/>').html('If you are taking a diuretic/water pill, <u>DO NOT</u> take it for at least 3 hours prior to the test.'
                  )
                )
              ),

            $('<div class="offerClause"/>').append(
              $('<p/>').html('For the health and safety of our patients and staff, and in accordance with law and regulation, you must meet certain pre‐placement employee health and infection control requirements. These include:'
                )
              ),

            (employee.Company_Name != 'LMC') &&
            $('<div class="offerClause hidden-xs hidden-md hidden-lg hidden-sm"/>').append(
              $('<p class="hidden-p"/>').html('&nbsp;'
                ),
              $('<p class="hidden-p"/>').html('&nbsp;'
                ),
              $('<p class="hidden-p"/>').html('&nbsp;'
                ),
              $('<p class="hidden-p"/>').html('&nbsp;'
                )
              )
          )//content
        ) //col-md-12
      ) //row
    ); //markup1


    $("#markup2").html("").append(
      $('<div class="row"/>').append(
       $('<div class="col-xs-12 col-sm-12 col-md-12"/>').append(
         $('<div class=""/>').append(
           $('<div class="offerClause2"/>').append(
            $('<ol style="padding-left:30px"/>').append(
              $('<li/>').html('<span>A physical examination by a physician, nurse practitioner, or physician assistant within the past year.</span>'
                ),
              $('<li/>').html('<span>Proof of immunity to measles, mumps, and rubella ‐ documentation of two (2) MMR vaccinations or blood test results that document immunity.</span>'
                ),
              $('<li/>').html('<span>Proof of immunity to varicella (chicken pox) ‐ documentation of two (2) Varivax vaccinations or blood test results that document immunity.</span>'
                ),
              $('<li/>').html('<span>Proof of Tdap vaccination– provide a copy of the tetanus‐diphtheria acellular pertussis vaccination.</span>'
                ),
              $('<li/>').html('<span>Proof of Flu Vaccination during Flu season (September – May)</span>'
                ),
              $('<li/>').html('<span>Tuberculosis  Screening Requirement - completed by either testing method – PPD or IGRA (Quantiferon or T-Spot)</span>').append(
                $('<ol style="padding-left:30px"/>').append(
                 $('<span class="listStyle"/>').html('a. &nbsp; Require a TB Screen (PPD or IGRA) if unable to provide proof of a prior negative TB screen test within the current calendar year. (Note: You may be required to have a second TB Screen test within the same year to align with the NYU Annual Health Assessment birth month schedule.)')
                 ),

                $('<ol style="padding-left:30px"/>').append(
                 $('<span class="listStyle"/>').html('b. &nbsp; 2 TB skin tests (PPD) required: If you have a documented prior positive TB Screen (PPD must be resulted in mm of induration only), and documented treatment, you must provide a CXR, completed within 1 year of the pre-employment visit, or you will be required to have a baseline chest x-ray completed prior to starting.')          
                 ),

                $('<ol style="padding-left:30px"/>').append(
                 $('<span class="listStyle"/>').html('c. &nbsp; If you have a documented prior positive TB Screen and NO documentation of treatment for Latent TB Infection (LTBI), you will require an IGRA (QFT or T-Spot) test prior to starting. If IGRA results are positive, you will require a CXR and be offered treatment or referred for treatment for LTBI.')
                 ),

                $('<ol style="padding-left:30px"/>').append(
                 $('<span class="listStyle"/>').html('d. &nbsp; TB screening may be required annually depending on job title, location and risk assessment.')
                 )
                ),


              $('<li/>').html('<span>For all employees who have any chance, in the course of their routine assigned duties, to be exposed to a patient’s blood or infectious body fluids, we ask for evidence of immunity to Hepatitis B including antibody titers (Hepatitis B surface Antibody ‐ HBsAb). A Hepatitis B surface Antigen (HBsAg) may also be required if you do not have evidence of immunity to Hepatitis B. Please provide proof of Hepatitis B vaccination series if possible.</span><br>'
                ),
              $('<li class=""/>').html('<span>Based upon the position you are applying for, you MAY be required to undergo <u>N95 Respiratory Mask Fit testing</u>. Please complete the questionnaire that is included in the information you receive from Human Resources. <b>NOTE: MALES</b> need to be clean-shaven in order to be fit tested.</span><br>'
                )
              )
            )


       )//content
      ) //col-md-12
     ) //row
    ); //markup2

$("#markup3").html("").append(
  $('<div class="row"/>').append(
   $('<div class="col-xs-12 col-sm-12 col-md-12"/>').append(
     $('<div class=""/>').append(

           (employee.Company_Name != 'NLF' && employee.Company_Name != 'NLN') &&
           $('<div class="offerClause3"/>').append(
            $('<p class="center"/>').html('<b>If  you don’t have the above documentation, OHS will do the necessary testing. There is no need to fast or give a urine sample at the time of your visit.</b><br>'
              )
            ),

           (employee.Company_Name == 'NLF') &&
           $('<div class="offerClause3"/>').append(
            $('<p class="center"/>').html('<b>If  you don’t have the above documentation, your Primary Care Clinician or a Clinician at MDNow can perform the required testing.</b><br>'
              )
            ),

           (employee.Company_Name == 'NLN') &&
           $('<div class="offerClause3"/>').append(
            $('<p class="center"/>').html('<b>If  you don’t have the above documentation, your Primary Care Clinician or a Clinician at Care Now can perform the required testing.</b><br>'
              )
            ),

           (employee.Company_Name != 'NLN') &&
           $('<div class="offerClause3 hidden-xs hidden-md hidden-lg hidden-sm"/>').append(
            $('<p/>').html('&nbsp;'
              )
            ),


       $('<div class="offerClause3"/>').append(
        $('<p/>').html('In accordance with Public Health Law Section 2803 Part 405, I understand that individuals whose blood tests indicate a susceptibility to Measles (Rubeola) and to Rubella (German Measles) are required as a pre‐condition of employment (or continued employment if already working), to be vaccinated with the MMR (Measles Mumps Rubella) vaccine as a preventive measure against the disease.'
          )
        ),

       $('<div class="offerClause3"/>').append(
        $('<p/>').append('I understand that NYU Langone Health’s immunization policy, which ', 
          (['NLF', 'NLN'].indexOf(employee.Company_Name) < 0) &&
          $('<span/>').append(
            nysLaw(employee.Company_Name)
          ),
          ' requires that all employees be immunized against influenza, whether they have direct patient contact or not.'
          )
        ),

       $('<div class="offerClause3"/>').append(
        $('<p/>').html('Please type your name in “Signature” which represents your electronic signature, and select today’s date. By electronically signing this form, you attest to the receipt of the above documents, to adhere to the policies referenced herein and online and that the acknowledgments and representations made herein are true and accurate.'
          )
        )
       )//content
      ) //col-md-12
     ) //row
    ); //markup3


$("#markup4").html("").append(
  $('<div class="row"/>').append(
    $('<div class="offerClause4 col-xs-12 col-sm-12 col-md-12" style="padding:0 !important"/>').append(
      $('<div class="hidden-xs hidden-sm hidden-md hidden-lg"/>').append(
        $('<div class="left"/>').html('<img id="headerpg1_img" src='+ company.Logo +' style="width:915px"><br><br>')
        ),

      (employee.Company_Name == 'HJD' || employee.Company_Name == 'HOS' || employee.Company_Name == 'HSI' || employee.Company_Name == 'AUG' || employee.Company_Name == 'CHA' || employee.Company_Name == 'CCO' || employee.Company_Name == 'LMC' || employee.Company_Name == 'SOM' || employee.Company_Name == 'NLF' || employee.Company_Name == 'WUH' || employee.Company_Name == 'NLN') &&
      $('<div class=""/>').append(
        $('<div class="respImg" style="text-align: right"/>').html('<img src="resp1new.png" style="width:200px;margin:10px 0 0 10px"><br><br>')
        ),

      (employee.Company_Name == 'SPH') &&
      $('<div class=""/>').append(
        $('<div class="respImg" style="text-align: right"/>').html('<img src="resp3new.png" style="width:200px;margin:10px 0 0 10px"><br><br>')
        ),
        $('<p class="fb-size8 text-right"/>').text('Last Revision: 1/13/2021')
        ) //col-md-12
      ) //row
    ); //markup4

}


function compName(companyName) {
  if (companyName =="SPH") {
    compName = "Family Health Centers at NYU Langone";
    return compName;
  } if (companyName =="WUH") {
    compName = "NYU Winthrop Hospital";
    return compName;
  } if (companyName =="NLF") {
    compName = "NYU Langone Florida";
    return compName;
  } if (companyName =="NLN") {
    compName = "NYU Langone Nevada";
    return compName;
  } else {
    return "NYU Langone Health";
  }
}

function nysLaw(companyName){
    if (companyName !="NLF" && companyName !="NLN") {
    compName = "supersedes NYS law,";
    return compName;
  } else {
    return "";
  }
}

$(function() {
    // render template
    fnView();

    // completed letter
    if (FORM_COMPLETED!='') {
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

    }
    else {
      pickDivisionLogo();
      SetImageOnOfferLetter('headerpg1');
    }
  });

});
