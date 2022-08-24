/** 
 * /main/SiteGen/Onboarding/Content/UnplacedPages/CanadaRetail/script.js
 * SERVICES-42492 | Carters - Edit Profile Page Validation Request - Canada Retail
 * 2021-02-01: initial creation
 * 2021-02-08: add etime configuration
 * 2021-02-09: updated configuration parser to accomodate multikey config filter
 * 2021-03-23: added PQ as one of provinces
 * 2021-03-25: set selected index for Company field
 * 2021-03-26: add readonly validation; add reports to value copying
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
// multi-purpose configuration extractor
// @param {string} config raw json string configuration
// @param {string} type key for pulling sub config
// @param {object} indices keys enum for filtering sub config
// @return {object} filtered sub config or empty object
const parseConfig = function(config, type, indices) {
  "use strict"
  const parsedConfig = JSON.parse(config)
  const requestedConfig = parsedConfig[type]
  if (!requestedConfig) {
    throw new Error('Configuration does not exist')
  }
  let cfg = {}
  requestedConfig.forEach(function(rcfg) {
    const keys = Object.keys(indices)
    let isMatched = true
    keys.forEach(function(k) {
      if (rcfg[k] != indices[k]) {
        isMatched = false
      }
    })
    if (!!isMatched) {
      cfg = rcfg
    }
  })
  return cfg 
}
const populateLocationSection = function(configStr, keys, isEventBased) {
  "use strict"
  const locationConfig = parseConfig(configStr, 'location', keys)
  if (!locationConfig.hasOwnProperty('locationID')) {
    return
  }
  FORM.querySelector('[name$=".Reporting_Location_ID"]').value = locationConfig.reportingLocationID
  FORM.querySelector('[name$=".Location_Name"]').value = locationConfig.locationName
  FORM.querySelector('[name$=".Location_Region"]').value = locationConfig.locationRegion
  FORM.querySelector('[name$=".Department_ID"]').value = locationConfig.departmentID
  FORM.querySelector('[name$=".Location_State"]').value = locationConfig.locationState
  FORM.querySelector('[name$=".Location_Time_Zone"]').value = locationConfig.locationTimeZone
  FORM.querySelectorAll('#Cost_Center_pseudo, [name$=".Cost_Center"]').forEach(function(cc) {
    cc.value = locationConfig.costCenter
  })
  return locationConfig
}
const populatePositionSection = function(configStr, keys, isEventBased) {
  "use strict"
  const positionConfig = parseConfig(configStr, 'position', keys)
  if (!positionConfig.hasOwnProperty('jobTitleCode')) {
    return
  }
  FORM.querySelector('#min-field').value = positionConfig.salaryMinimum
  FORM.querySelector('#max-field').value = positionConfig.salaryMaximum
  FORM.querySelector('[name$=".Salary_Type"]').value = positionConfig.salaryType
  FORM.querySelectorAll('#Pay_Group_pseudo, [name$=".Pay_Group"]').forEach(function(pg) {
    pg.value = positionConfig.payGroup
  })
  // config might be useful to other sections
  return positionConfig
}
const populatePayGroupSection = function(configStr, keys, isEventBased) {
  "use strict"
  const payGroupConfig = parseConfig(configStr, 'payGroup', keys)
  if (!payGroupConfig.hasOwnProperty('payGroup')) {
    return
  }
  FORM.querySelector('[name$=".Rate_Type"]').value = payGroupConfig.rateType
  FORM.querySelector('[name$=".Comp_Frequency"]').value = payGroupConfig.compFrequency
  return payGroupConfig
}
const populateBenefitsSection = function(configStr, keys, isEventBased) {
  "use strict"
  const benefitsConfig = parseConfig(configStr, 'benefits', keys)
  if (!benefitsConfig.hasOwnProperty('employeeType')) {
    return
  }
  FORM.querySelector('[name$=".Benefits_Code"]').value = benefitsConfig.benefitsCode
  return benefitsConfig 
}
const populateETimeSection = function(configStr, keys, isEventBased) {
  "use strict"
  const eTimeConfig = parseConfig(configStr, 'eTime', keys)
  if (!eTimeConfig.hasOwnProperty('jobCode')) {
    return
  }
  // set person type value based on presence of retrieved config value
  const personType = FORM.querySelector('[name$=".Person_Type"]')
  const personTypePseudo = FORM.querySelector('#Person_Type_pseudo')
  personType.querySelectorAll('option').forEach(function(opt) {
    const reg = new RegExp('^' + eTimeConfig.personType)
    if (reg.test(opt.value)) {
      personType.value = opt.value
      personTypePseudo.value = opt.value
    }
  });
  if (eTimeConfig.personType == 'N/A') {
    personType.value = ''
    personTypePseudo.value = ''
  }
  const payRule = FORM.querySelector('[name$=".PayRule"]')
  const payRulePseudo = FORM.querySelector('#PayRule_pseudo')
  payRule.value = eTimeConfig.payRule
  payRulePseudo.value = eTimeConfig.payRule
  if (eTimeConfig.payRule == 'N/A') {
    payRule.value = ''
    payRulePseudo.value = ''
  }
  // set accrual profile value based on presence of retrieved config value
  const accrualProf = FORM.querySelector('[name$=".AccrualProf"]')
  const accrualProfPseudo = FORM.querySelector('#AccrualProf_pseudo')
  accrualProf.querySelectorAll('option').forEach(function(opt) {
    const reg = new RegExp('^' + eTimeConfig.accrualProfile)
    if (reg.test(opt.value)) {
      accrualProf.value = opt.value 
      accrualProfPseudo.value = opt.value 
    }
  })
  if (eTimeConfig.accrualProfile == 'N/A') {
    accrualProf.value = ''
    accrualProfPseudo.value = ''
  }
  return eTimeConfig
}
loadConfig(CONFIG_PATH)
  .then(function(res) {
    // location id field instance
    const locationIDField = FORM.querySelector('[name$=".Location_ID"]')
    // job title field instance
    // this is needed for job title and location event
    const jobTitleField = FORM.querySelector('[name$=".Job_Title"]')
    // pay group field instance
    const payGroupField = FORM.querySelector('[name$=".Pay_Group"]')
    // location state (province) field instance
    const locationStateField = FORM.querySelector('[name$=".Location_State"]')
    // profile province field instance
    const stateField = FORM.querySelector('[name$=".State"]')

    // location id field event handling
    locationIDField && locationIDField.addEventListener('change', function(e) {
      const locationConfig = populateLocationSection(res, {'locationID': e.target.value})
      locationConfig.hasOwnProperty('locationID') && populateETimeSection(res, {
        'jobCode': jobTitleField.value,
        'employeeType': EMPLOYEE_TYPE,
        'payGroup': payGroupField.value,
        'province': locationConfig.locationState
      })
    })
    // location id field on load
    populateLocationSection(res, {'locationID': locationIDField.value})
    // job title field event handling
    jobTitleField && jobTitleField.addEventListener('change', function(e) {
      const positionConfig = populatePositionSection(res, {'jobTitleCode': e.target.value})
      // also update paygroup section
      positionConfig && positionConfig.hasOwnProperty('payGroup') && populatePayGroupSection(res, {'payGroup': positionConfig.payGroup})
      // also update the POSITION_INFORMATION for validation use
      POSITION_INFORMATION.length = 0
      if (!!positionConfig.jobTitleCode) {
        POSITION_INFORMATION.push({
          'Job_Title': positionConfig.jobTitleCode,
          'Minimum': positionConfig.salaryMinimum,
          'Maximum': positionConfig.salaryMaximum,
        })
      }
      // update eTime section
      populateETimeSection(res, {
        'jobCode': e.target.value,
        'employeeType': EMPLOYEE_TYPE,
        'payGroup': payGroupField.value,
        'province': stateField.value
      })
    })

    locationStateField && locationStateField.addEventListener('change', function(e) {
      // update eTime section
      populateETimeSection(res, {
        'jobCode': jobTitleField.value,
        'employeeType': EMPLOYEE_TYPE,
        'payGroup': payGroupField.value,
        'province': e.target.value
      })
    })

    // job title field on load
    const positionConfigOnLoad = populatePositionSection(res, {'jobTitleCode': jobTitleField.value})
    jobTitleField.value && POSITION_INFORMATION.push({
      'Job_Title': positionConfigOnLoad.jobTitleCode,
      'Minimum': positionConfigOnLoad.salaryMinimum,
      'Maximum': positionConfigOnLoad.salaryMaximum,
    })
    // pay group field event handling
    payGroupField && payGroupField.addEventListener('change', function(e) {
      const payGroupConfig = populatePayGroupSection(res, {'payGroup': e.target.value})
      !!payGroupConfig.hasOwnProperty('payGroup') && populateETimeSection(res, {
        'jobCode': jobTitleField.value,
        'employeeType': EMPLOYEE_TYPE,
        'payGroup': e.target.value,
        'province': locationStateField.value
      })
    })
    // pay group field on load
    populatePayGroupSection(res, {'payGroup': payGroupField.value})
    // benefits field event based and is hidden
    // benefits field on load
    populateBenefitsSection(res, {'employeeType': EMPLOYEE_TYPE})
    // eTime on load pre-population
    populateETimeSection(res, {
      'jobCode': jobTitleField.value,
      'employeeType': EMPLOYEE_TYPE,
      'payGroup': payGroupField.value,
      'province': locationStateField.value
    })
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
  // remove all but canada provices
  const locationStateField = FORM.querySelector('[name$=".Location_State"]')
  if (!!locationStateField) {
    let locationStateFieldValue = locationStateField.value
    locationStateField.querySelectorAll('option').forEach(function(option) {
      if (["", "AB", "BC", "MB", "NB", "NF", "NS", "ON", "PE", "PQ", "QC", "SK"].indexOf(option.value) < 0) {
        locationStateField.removeChild(option)
      }
    })
    locationStateField.value = locationStateFieldValue
  }
  // remove all but canada company
  const companyField = FORM.querySelector('[name$=".Company"]')
  if (!!companyField) {
    let companyFieldValue = companyField.value
    companyField.querySelectorAll('option').forEach(function(option, idx) {
      if (option.value != 'CAN') {
        companyField.removeChild(option)
        return
      }
      option.selectedIndex = idx
    })
  }
  // remove all but >=3k location ids
  const locationIDField = FORM.querySelector('[name$=".Location_ID"]')
  if (!!locationIDField) {
    let locationIDFieldValue = locationIDField.value
    locationIDField.querySelectorAll('option').forEach(function(option) {
      let v = Number(option.value)
      if (v < 3000 || v >= 4000) {
        locationIDField.removeChild(option)
      }
    })
    locationIDField.value = locationIDFieldValue
  }
  (function(fields) {
    fields.forEach(function(f) {
      FORM.querySelector('[name$="' + f + '"]').readOnly = true
    })
  })(READONLY_FIELDS)
  const reportsToField = FORM.querySelector('[name$=".Reports_To"]')
  const reportsToIDField = FORM.querySelector('[name$=".ReportsTo_ID"]')
  const fillReportsTo = function() {
    reportsToIDField.value = reportsToField.value
  }
  fillReportsTo()
  reportsToField.addEventListener('blur', fillReportsTo)
  reportsToField.addEventListener('keyup', fillReportsTo)
}
