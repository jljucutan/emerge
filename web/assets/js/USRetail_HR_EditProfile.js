/** 
 * /main/SiteGen/Onboarding/Content/UnplacedPages/CanadaRetail/script.js
 * SERVICES-42492 | Carters - Edit Profile Page Validation Request - Canada Retail
 * 2021-02-01: initial creation
 */
function loadConfig(configPath) {
  "use strict"
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', configPath)
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response)
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        })
      }
    }
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      })
    }
    xhr.send()
  })
}
const parseConfig = function(config, type, index) {
  "use strict"
  const parsedConfig = JSON.parse(config)
  const requestedConfig = parsedConfig[type]
  const cfg = requestedConfig.filter(function(cfg) {
    switch(type) {
      case "location":
        if (cfg.locationID == index) {
          return cfg
        }
      break
      case "position":
        if (cfg.jobTitleCode == index) {
          return cfg
        }
      break
      case "payGroup":
        if (cfg.payGroup == index) {
          return cfg
        }
      break
      case "benefits":
        if (cfg.employeeType == index) {
          return cfg
        }
      break
    }
  })
  return (cfg.length > 0 ? cfg[0] : "")
}
const populateLocationSection = function(configStr, val, isEventBased) {
  "use strict"
  const locationConfig = parseConfig(configStr, 'location', val)
  FORM.querySelector('[name$=".Reporting_Location_ID"]').value = locationConfig.reportingLocationID
  FORM.querySelector('[name$=".Location_Name"]').value = locationConfig.locationName
  FORM.querySelector('[name$=".Location_Region"]').value = locationConfig.locationRegion
  FORM.querySelector('[name$=".Department_ID"]').value = locationConfig.departmentID
  FORM.querySelector('[name$=".Location_State"]').value = locationConfig.locationState
  FORM.querySelector('[name$=".Location_Time_Zone"]').value = locationConfig.locationTimeZone
}
const populatePositionSection = function(configStr, val, isEventBased) {
  "use strict"
  const positionConfig = parseConfig(configStr, 'position', val)
  FORM.querySelector('[name$=".Salary_Type"]').value = positionConfig.salaryType
  FORM.querySelector('[name$=".Pay_Group"]').value = positionConfig.payGroup
  // config might be useful to other sections
  return positionConfig
}
const populatePayGroupSection = function(configStr, val, isEventBased) {
  "use strict"
  const payGroupConfig = parseConfig(configStr, 'payGroup', val)
  FORM.querySelector('[name$=".Rate_Type"]').value = payGroupConfig.rateType
  FORM.querySelector('[name$=".Comp_Frequency"]').value = payGroupConfig.compFrequency
}
const populateBenefitsSection = function(configStr, val, isEventBased) {
  "use strict"
  const benefitsConfig = parseConfig(configStr, 'benefits', val)
  FORM.querySelector('[name$=".Benefits_Code"]').value = benefitsConfig.benefitsCode
}
loadConfig(CONFIG_PATH)
  .then(function(res) {
    // location id field event handling
    const locationIDField = FORM.querySelector('[name$=".Location_ID"]')
    locationIDField && locationIDField.addEventListener('change', function(e) {
      populateLocationSection(res, e.target.value)
    })
    // location id field on load
    populateLocationSection(res, locationIDField.value)
    // job title field event handling
    const jobTitleField = FORM.querySelector('[name$=".Job_Title"]')
    jobTitleField && jobTitleField.addEventListener('change', function(e) {
      const positionConfig = populatePositionSection(res, e.target.value)
      // also update paygroup section
      populatePayGroupSection(res, positionConfig.payGroup)
      // also update the POSITION_INFORMATION for validation use
      POSITION_INFORMATION.length = 0;
      if (!!positionConfig.jobTitleCode) {
        POSITION_INFORMATION.push({
          'Job_Title': positionConfig.jobTitleCode,
          'Minimum': positionConfig.salaryMinimum,
          'Maximum': positionConfig.salaryMaximum,
        })
      }
    })
    // job title field on load
    const positionConfigOnLoad = populatePositionSection(res, jobTitleField.value)
    POSITION_INFORMATION.push({
      'Job_Title': positionConfigOnLoad.jobTitleCode,
      'Minimum': positionConfigOnLoad.salaryMinimum,
      'Maximum': positionConfigOnLoad.salaryMaximum,
    })
    // pay group field event handling
    const payGroupField = FORM.querySelector('[name$=".Pay_Group"]')
    payGroupField && payGroupField.addEventListener('change', function(e) {
      populatePayGroupSection(res, e.target.value)
    })
    // pay group field on load
    populatePayGroupSection(res, payGroupField.value)
    // benefits field event based and is hidden
    // benefits field on load
    populateBenefitsSection(res, FORM.querySelector('[name="employee-type"]').value)
  })
  .catch(function(err) {
    console.error(err)
  })

document.onreadystatechange = function() {
  "use strict"
  // default country to Canada
  const locationCountryField = FORM.querySelector('[name$=".Location_Country"]')
  if (!!locationCountryField) {
    locationCountryField.value = DEFAULT_COUNTRY
    locationCountryField.querySelectorAll('option').forEach(function(option) {
      if (option.value != DEFAULT_COUNTRY) {
        locationCountryField.removeChild(option)
      }
    })
  }
  // weed out irrelevant options for job title
  const jobTitleField = FORM.querySelector('[name$=".Job_Title"]')
  if (!!jobTitleField) {
    let jobTitleFieldValue = jobTitleField.value
    jobTitleField.querySelectorAll('option').forEach(function(option) {
      if (option.value == "") {
        return
      }
      if (!/^CR/.test(option.value)) {
        jobTitleField.removeChild(option)
      }
    })
    jobTitleField.value = jobTitleFieldValue
  }
  // weed out irrelevant options for paygroup
  const payGroupField = FORM.querySelector('[name$=".Pay_Group"]')
  if (!!payGroupField) {
    let payGroupFieldValue = payGroupField.value
    payGroupField.querySelectorAll('option').forEach(function(option) {
      if (["","@CN","@CE"].indexOf(option.value) < 0) {
        payGroupField.removeChild(option)
      }
    })
    payGroupField.value = payGroupFieldValue
  }
}
