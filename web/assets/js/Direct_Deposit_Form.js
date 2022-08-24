/**
 * custom script for this form functionality
 * jjucutan | 2020-10-15 | initial creation
 */
const checkOne = function(cb, group) {
  "use strict"
  let checked = cb.checked
  group.prop('checked', false)
  cb.checked = !!checked
}
const hideAndClear = function(section) {
  "use strict"
  section.find('input[type="text"], select, textarea').val('')
  section.find('input[type="radio"], input[type="checkbox"]').prop('checked', false)
  section.hide()
}
const toggleCheckboxDeps = function(selected) {
  "use strict"
  console.log(selected)
  const directDepositSection = jQuery('#direct-deposit-section')
  const cashCardSection = jQuery('#cash-card-section')
  switch(selected) {
    case 'Direct Deposit':
    directDepositSection.show()
    populateDirectDepositForm()
    hideAndClear(cashCardSection)
    break
    case 'Cash Card':
    cashCardSection.show()
    populateCashCardForm()
    hideAndClear(directDepositSection)
    break
    default:
    hideAndClear(cashCardSection)
    hideAndClear(directDepositSection)
  }
}
const payrollOption = jQuery('.payroll-option')
let selected = ''
payrollOption.each(function() {
  if (!!this.checked) {
    selected = this.value
  }
})
payrollOption.on('change', function() {
  checkOne(this, payrollOption)
  if (!!this.checked) {
    selected = this.value
  }
  toggleCheckboxDeps(selected)
})
// show direct deposit or cash card by default
toggleCheckboxDeps(selected)
