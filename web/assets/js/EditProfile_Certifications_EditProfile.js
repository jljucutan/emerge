if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict'
    if (search instanceof RegExp) {
      throw TypeError('first argument must not be a RegExp')
    }
    if (start === undefined) { start = 0 }
    return this.indexOf(search, start) !== -1
  }
}

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window
        for (let i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this)
        }
    }
}

const fetchConfig = function() {
    'use strict'
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', JOB_LICENSE_CONF)
        xhr.onload = function() {
            if (xhr.status >= xhr.DONE && xhr.status < 300) {
                resolve(xhr.response)
            }
            else {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                })
            }
        }
        xhr.onerror = function() {
            reject({
                status: xhr.status,
                statusText: xhr.statusText
            })
        }
        xhr.send(null)
    })
}

const licenseCertNameField = document.querySelector('[name$=".License_Cert_Name"]')
const jobNamePseudoField = document.querySelector('#Job_Name_pseudo')
const addedJobsOptions = new Map()
const repopulateLicenses = function(jobName) {
    'use strict'
    const options = document.createDocumentFragment()
    if (!jobName) {
        const optionDefault = document.createElement('option')
        options.appendChild(optionDefault)
    }
    if (jobName) {
        addedJobsOptions.get(jobName).forEach(function(opt) {
            const option = document.createElement('option')
            option.value = LICENSES_OPTIONS.get(opt)
            option.innerText = opt
            options.appendChild(option)
        })
    }
    // update licenses
    licenseCertNameField.innerHTML = ''
    licenseCertNameField.appendChild(options)
}

fetchConfig().then(function(res) {
    // prepopulate job name
    if (!document.querySelector('[name$=".Job_Name"]').value.length) {
        console.log(EVENT_JOB_NAME)
        document.querySelector('[name$=".Job_Name"]').value = EVENT_JOB_NAME
    }
    const jobLicenseConfig = JSON.parse(res)
    // all created doprdown options
    // fake job name field
    // create dropdown
    jobLicenseConfig.jobLicense.forEach(function(cfg) {
        if (addedJobsOptions.has(cfg.jobName)) {
            const arr = addedJobsOptions.get(cfg.jobName)
            arr.push(cfg.licenses)
            addedJobsOptions.set(cfg.jobName, arr)
            return
        }
        const option = document.createElement('option')
        option.value = cfg.jobName
        option.innerText = cfg.jobName
        if (cfg.jobName == document.querySelector('[name$=".Job_Name"]').value) {
            option.selected = 'selected'
        }
        jobNamePseudoField.append(option)
        // add to list of created job name options
        addedJobsOptions.set(cfg.jobName, [cfg.licenses])
        
    })
    // set aside license options
    licenseCertNameField.querySelectorAll('option').forEach(function(opt) {
        if (opt.value.length) {
            LICENSES_OPTIONS.set(opt.innerText, opt.value)
            licenseCertNameField.removeChild(opt)
        }
    })
    // display form when ready
    document.querySelector('[name="frmExtendedUserProfile"]').style.display = 'block'
})
.finally(function() {
    jobNamePseudoField.addEventListener('change', function(e) {
        // update job name real field
        document.querySelector('[name$=".Job_Name"]').value = e.target.value
        repopulateLicenses(e.target.value)
    })
    repopulateLicenses(document.querySelector('[name$=".Job_Name"]').value)
})
.catch(function(err) {
    console.warn(err)
})
