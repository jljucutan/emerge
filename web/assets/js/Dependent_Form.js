const getConfig = function() {
    'use strict'
    return new Promise(function(resolve, reject) {
        const xmlReq = new XMLHttpRequest()
        xmlReq.open('GET', SECTION_CONFIG_PATH, true)
        xmlReq.onreadystatechange  = function() {
            if (xmlReq.readyState == 4) {
                if (xmlReq.status == 200) {
                    resolve(JSON.parse(xmlReq.responseText))
                }
                else {
                    reject(Error(xmlReq.statusText))
                }
            }
        }
        xmlReq.onerror = function() {
            reject(Error('network error'))
        }
        xmlReq.send(null)
    })
}

const clearSection = function(section) {
    'use strict'
    section.querySelectorAll('input, select').forEach(function(f) {
        switch(f.type) {
            case 'text':
                f.value = ''
            break
            case 'select-one':
                f.value = ''
            break
            case 'radio':
                f.checked = false
            break
        }
    })
}

const toggleAddressSection = function(currentIdx) {
    'use strict'
    document.querySelectorAll('.address').forEach(function(addr, idx) {
        if (currentIdx >= 0 && idx <= currentIdx) {
            addr.style.display = 'block'
        }
        if (currentIdx < 0 || idx > currentIdx) {
            clearSection(addr)
            addr.style.display = 'none'
        }
    })
}

const updateAddressControllers = function(idx) {
    const MIN_HIDDEN_SECTIONS = 0
    const MAX_HIDDEN_SECTIONS_INDEX = 8
    if (idx < MIN_HIDDEN_SECTIONS) {
        document.getElementById('remove-dependent').style.display = 'none'
    }
    if (idx >= MAX_HIDDEN_SECTIONS_INDEX) {
        document.getElementById('add-dependent').style.display = 'none'
    }
    if (idx >= MIN_HIDDEN_SECTIONS) {
        document.getElementById('remove-dependent').style.display = 'block'
    }
    if (idx < MAX_HIDDEN_SECTIONS_INDEX) {
        document.getElementById('add-dependent').style.display = 'block'
    }
}

getConfig().then(function(res) {
    res.addressSections.forEach(function(config) {
        document.querySelectorAll('[name$=".' + config.field + '"]').forEach(function(inpt) {
            inpt.addEventListener('change', function(e) {
                if (e.target.value != 'No') {
                    return
                }
                config.dependents.forEach(function(name) {
                    const field = document.querySelector('[name$=".' + name + '"]')
                    if (!field.value.length) {
                        field.value = field.dataset.default
                    }
                })
            })
        })
    })
    const dependents = document.querySelector('[name$=".dependents"]')
    toggleAddressSection(new Number(dependents.value))
    updateAddressControllers(new Number(dependents.value))
    document.getElementById('add-dependent').addEventListener('click', function() {
        let depVal = new Number(dependents.value)
        depVal++
        dependents.value = depVal
        toggleAddressSection(depVal)
        updateAddressControllers(depVal)
    })
    document.getElementById('remove-dependent').addEventListener('click', function() {
        let depVal = new Number(dependents.value)
        depVal--
        dependents.value = depVal
        toggleAddressSection(depVal)
        updateAddressControllers(depVal)
    })
})
.catch(function(err) {
    console.warn(err)
})
