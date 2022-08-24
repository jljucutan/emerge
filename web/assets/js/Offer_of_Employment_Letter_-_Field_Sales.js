// Offer of Employment Letter - Field Sales
function fnView() {
	// Offer of Employment Letter - Field Sales Content
	$("#markup").html("").append(
		// OfferClause
		$('<div class="offerClause"/>').append(
			$('<div/>').append(
				$('<p/>').html(
					'&nbsp;'
				),
				$('<p/>').html(
					$('<span/>').html(employee.Today_Date)
				),
				$('<p/>').append(
					$('<span/>').html(employee.Name + '<br>'),
					$('<span/>').html(employee.Address + '<br>'),
					$('<span/>').html(employee.City + ', '),
					$('<span/>').html(employee.State + ', '),
					$('<span/>').html(employee.Zip)
				),
				$('<p/>').html(
					'On behalf of ITG Brands, I am pleased to confirm our offer of employment to you for the position of ' + employee.Position + ' in our ' + employee.Division_Name + ' Division, reporting to ' + employee.Reporting_To + ' with a start date of ' + employee.Start_Date + '.'
				),
				$('<p/>').html(
					'Your compensation package includes the following –'
				),
				$('<p/>').append(
					$('<ul/>').append(
						$('<li/>').append(
							$('<div/>').html(
								'Annual salary of $ ' + employee.Annual_Salary + ' paid over 26 bi-weekly pay periods.'
							),
							$('<p/>').html('')
						),
						$('<li/>').append(
							$('<div/>').html(
								'16 days of paid time off in your first full calendar year (pro-rated to ' + employee.Pro_Rated_To + ' day(s) in 2019) and 14 annual Company holidays.'
							),
							$('<p/>').html('')
						),
						$('<li/>').append(
							$('<div/>').html(
								'Medical, dental, and vision benefits that are effective on your first day of employment.'
							),
							$('<p/>').html('')
						),
						$('<li/>').append(
							$('<div/>').html(
								'You will be eligible to participate in the 401(k) plan the first of the month coinciding with or following one month of service.  The 401(k) plan includes a dollar for dollar company match for employee contributions up to 6% of eligible pay.   In addition, you are eligible for a 5% annual Company contribution after completion of one year of service.'
							),
							$('<p/>').html('')
						)
					)
				),
				$('<p/>').html(
					'This offer is contingent upon the satisfactory completion of pre-employment background verification which could include criminal, education, a drug screen, and verification of your right to work in the United States. Any background check will be conducted in accordance with the laws of appropriate jurisdiction for your position.'
				),
				$('<p/>').html(
					'As a Company employee, you will be expected to become familiar with and abide by Company policies and procedures, which will be provided to you upon employment. These policies and procedures may be changed from time to time by the Company.  Upon notice of any such changes, you will be expected to become familiar with and abide by any such changes.'
				),
				$('<p/>').html(
					'Over the course of your employment, you may come into possession of confidential and proprietary information relating to the Company or third parties to whom the Company owes a duty to keep information confidential. To help the Company maintain the confidentiality of such information, you will be required to sign one or more confidentiality agreements over the course of your employment.'
				),
				$('<p/>').html(
					'Your employment with our company is at-will.  This means that you may terminate your employment with the Company for any reason at any time, and the Company retains the right to do the same. While I sincerely hope that you have a long and satisfying career here, this letter does not constitute an employment contract between you and the Company.'
				),
				$('<p/>').html(
					'We are glad to have you join ITG Brands – we have an exciting and challenging future ahead of us, and look forward to the key role you will play in our organization.'
				),
				$('<p/>').html(
					'Congratulations, and welcome to ITG Brands!'
				),
				$('<p/>').html(
					'&nbsp;'
				),
				$('<p/>').html(
					'Sincerely,'
				),
				$('<p/>').html(
					employee.Hiring_Manager
				),
				$('<p/>').html(
					'&nbsp;'
				)
			)
		)
		// end append
	);
}

$(function() {	
    // render template
    fnView();

    // completed letter
    if (!$("input.calendar_button").length) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

        var arrParts = [
            [1, 'hidden_pg1']
        ];

        showCompletedOfferLetter('incomplete', 'complete', arrParts);
    }
});
