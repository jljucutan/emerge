/**
 * THIS SCRIPT CONCERNS ONLY WITH WORK LOCATION LOGIC
 * DO NOT PUT OTHER FIELDS LOGIC UNLESS RELATED
 * SERVICES-41355
 * 2020-09-09 | jjucutan | initial creation
 */
const WORKSITES = new Map()
document.onreadystatechange = function() {
  "use strict"
  MOU.querySelectorAll('[name$=".Worksite_Primary"] option').forEach(function(wp) {
    WORKSITES.set(wp.value, wp.innerText)
  })
  if (WORKSITES.has(WORK_LOCATION)) {
    let worksitesList = WORKSITES.get(WORK_LOCATION).split(',').map(function(addr) {
      return addr.trim()
    })
    MOU.querySelector('[name$=".Worksite_Primary_Address1"]').value = worksitesList[0]
    // without address 2
    if (worksitesList.length == 4) {
      MOU.querySelector('[name$=".Worksite_Primary_City"]').value = worksitesList[1]
      jQuery('[name$=".Worksite_Primary_State"]').val(worksitesList[2])
      MOU.querySelector('[name$=".Worksite_Primary_Zipcode"]').value = worksitesList[3]
    }
    // with address 2
    if (worksitesList.length == 5) {
      MOU.querySelector('[name$=".Worksite_Primary_Address2"]').value = worksitesList[1]
      MOU.querySelector('[name$=".Worksite_Primary_City"]').value = worksitesList[2]
      jQuery('[name$=".Worksite_Primary_State"]').val(worksitesList[3])
      MOU.querySelector('[name$=".Worksite_Primary_Zipcode"]').value = worksitesList[4]
    }
  }
}
