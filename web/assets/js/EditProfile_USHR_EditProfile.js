const payGroupHuors = [
	{
		"payGroup": "C&M Monthly",
		"hours": "162.5"
	},
	{
		"payGroup": "C&M Quarterly",
		"hours": "162.5"
	},
	{
		"payGroup": "C&M Semi-Monthly",
		"hours": "81.25"
	},
	{
		"payGroup": "C&M Weekly",
		"hours": "40"
	},
	{
		"payGroup": "C&M Intl Monthly",
		"hours": "162.5"
	},
	{
		"payGroup": "C&M Intl Semi-Monthly",
		"hours": "81.25"
	},
	{
		"payGroup": "C&M NY & CHI Monthly",
		"hours": "151.6667"
	},
	{
		"payGroup": "Brussels Non-Paid",
		"hours": "162.5"
	},
	{
		"payGroup": "China Non-Paid",
		"hours": "162.5"
	},
	{
		"payGroup": "Doha Non-Paid",
		"hours": "173.33"
	},
	{
		"payGroup": "London Non-Paid",
		"hours": "162.5"
	},
	{
		"payGroup": "Non-Paid Singapore",
		"hours": "173.3333"
	},
	{
		"payGroup": "C&M NY & CHI Semi-Monthly",
		"hours": "75.8333"
	},
	{
		"payGroup": "Temporary Employees",
		"hours": "37.5"
	}
]

const FIELDS_DEFAULTS = [
	{
		"field": "Seniority_Date_display",
		"value": EVENT_START_DATE
	}
]

const updateHours = function() {
	'use strict'
	$('[name$=".Pay_Group"] option').each(function(_, pg) {
		payGroupHuors.forEach(function(pgh) {
			if ($(pg).is(':selected') && pg.innerText == pgh.payGroup) {
				$('[name$=".Scheduled_Hours"]').val(pgh.hours)
			}
		})
	})
}

const DATE_FORMAT = 'MM/DD/YYYY'

$(function() {
	const startDate = moment(EVENT_START_DATE)
	const startDateDep = $('[name$=".Seniority_Date_display"], [name$=".Benefits_Seniority_Date_display"], [name$=".Adjusted_Service_Date_display"], [name$=".Performance_Review_Date_display"]')
	startDateDep.each(function(_, f) {
		if (!$(f).val().length) {
			$(f).datepicker('setDate', startDate.format(DATE_FORMAT))
		}
	})
    const startDateField = $('[name$=".Start_Date_display"]')
    // start date default to event start date
    if (!startDateField.val().length) {
	    $('[name$=".Start_Date_display"]').datepicker('setDate', startDate.format(DATE_FORMAT))
    }
    // start date and salary review date defaults to event start date
    if(!$('[name$=".Salary_Review_Date_display"]').val().length) {
	    $('[name$=".Salary_Review_Date_display"]').datepicker('setDate', startDate.format(DATE_FORMAT))
    }
	// set years of experience
	$('[name$=".Years_Experience"]').val(moment().diff(EVENT_START_DATE, 'years'))
	startDateField.on('change', function() {
		const thisValue = $(this).datepicker('getDate')
		if (thisValue) {
			startDateDep.datepicker('setDate', moment(thisValue).format(DATE_FORMAT))
			const firstOfThaMonth = moment(thisValue).startOf('month')
			$('[name$=".Billable_Hour_Date_display"]').datepicker('setDate', firstOfThaMonth.format(DATE_FORMAT))
		}
	})
	if (!$('[name$=".Billable_Hour_Date_display"]').val()) {
		const firstOfThaMonth = startDate.startOf('month')
		$('[name$=".Billable_Hour_Date_display"]').datepicker('setDate', firstOfThaMonth.format(DATE_FORMAT))
	}
	$('[name$=".Pay_Group"]').on('change', function(e) {
		updateHours()
	})
	updateHours()
})
