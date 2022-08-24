$(document).ready(function () {
  function fnView() {

    $("#markup").html("").append(
      $('<div class="row"/>').append(
        $('<div class="col-xs-12 col-sm-12 col-md-12" style="padding:0 !important"/>').append(
          $('<div class=""/>').append(
            $('<div class="offerClause"/>').append(
              $('<p/>').append(
                'I understand that the at will position for which I am being hired at ',
                $('<strong/>').append(compName(employee.Company_Name)),
                ' is terminable at the Health System’s discretion and is also intended to be ',
                (employee.Statement_Grant== '1.') && 'subject to affiliation contract renewal',
                (employee.Statement_Grant== '4.') && 'subject to affiliation contract renewal and ',
                (employee.Statement_Grant== '2.' || employee.Statement_Grant== '3.' || employee.Statement_Grant== '4.') &&
                'temporary for a period not to exceed 6 months to perform work on a special project, for vacation relief, or while an employee is on a leave of absence. My temporary employment also may be terminated earlier if the project is completed or if the regular employee returns from the leave. My temporary employment may also be extended at NYU Langone Health’s discretion if the project completion date is extended or if the regular employee remains absent longer than expected',
                '.'
              )
            ),

            $('<div class="offerClause"/>').append(
              $('<p/>').html('I further understand that my employment is subject to all NYU Langone requirements and that this statement of understanding is neither a guarantee of continued employment nor a contract of employment. Temporary employees whose employment terminates are not eligible for severance benefits.'
              )
            ),

            $('<div class="offerClause"/>').append(
              $('<p/>').html('Please type your name in “Signature” which represents your electronic signature, and select today’s date. By electronically signing this form, you attest to the receipt of the above documents, that you will adhere to the policies referenced herein and online and that the acknowledgments and representations made herein are true and accurate.'
              )
            ),

            $('<div class="offerClause"/>').append(
              $('<p/>').html('&nbsp;')
            )
          ) //content
        ) //col-md-12
      ) //row
    ); //markup1

    $("#markup2").html("").append(
      $('<div class="row"/>').append(
        $('<div class="offerClause2 col-xs-12 col-sm-12 col-md-12" style="padding:0 !important"/>').append(
          $('<div class="hidden-xs hidden-sm hidden-md hidden-lg"/>').append(
            $('<div class="left"/>').html('<img id="headerpg1_img" src='+ company.Logo +' style="width:915px"><br><br>')
          ),

          (employee.Company_Name == 'HJD' || employee.Company_Name == 'HOS' || employee.Company_Name == 'HSI' || employee.Company_Name == 'AUG' || employee.Company_Name == 'CHA' || employee.Company_Name == 'CCO' || employee.Company_Name == 'LMC' || employee.Company_Name == 'SOM' || employee.Company_Name == 'NLF' || employee.Company_Name == 'WUH') &&
          $('<div class=""/>').append(
            $('<div class="respImg" style="text-align: right"/>').html('<img src="resp1new.png" style="width:200px;margin:10px 0 0 10px"><br><br>')
          ),

          (employee.Company_Name == 'SPH') &&
          $('<div class=""/>').append(
            $('<div class="respImg" style="text-align: right"/>').html('<img src="resp3new.png" style="width:200px;margin:10px 0 0 10px"><br><br>')
          )
        ) //col-md-12
      ) //row
    ); //markup2
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
    } else {
      return "NYU Langone Health";
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
