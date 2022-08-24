const toggleTarget = function(controller, target) {
  "use strict"
  if (!!controller.checked) {
    target.value = ''
    target.disabled = true
    return true
  }
  target.disabled = false
  return false
}
const middleNameCheckbox = document.querySelector('[name$=".Middle_Name_Check"]')
const middleName = document.querySelector('[name="Middle_Name"]')
middleNameCheckbox.addEventListener('change', function() {
  toggleTarget(this, middleName)
})
toggleTarget(middleNameCheckbox, middleName)
