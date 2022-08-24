const getConfig = function() {
    'use strict'
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', SECTION_CONFIG_PATH, true)
        xhr.onreadystatechange = function() {
            if (xhr.readyState == xhr.DONE) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText))
                }
                else {
                    reject(Error(xhr.statusText))
                }
            }
        }
        xhr.onerror = function() {
            reject(Error('network error'))
        }
        xhr.send(null)
    })
}

const toggleSections = function(field, dependsOnConfig) {
    'use strict'
    let checkedValue = null
    // all section control radio fields
    const depends = document.querySelectorAll('[name$=".' + dependsOnConfig.name + '"]')
    // scan radio button group if checked
    depends.forEach(function(r) {
        if (r.checked) {
            // get value if checked
            checkedValue = r.value
        }
    })
    // if section controller radio fields are not checked
    // or not the expected value
    // show if equal to expected value
    if (checkedValue && checkedValue == dependsOnConfig.value) {
        field.closest('fieldset').style.display = 'block'
        return
    }
    // hide the whole section
    field.closest('fieldset').style.display = 'none'
    // clear hidden fields
    if (field.classList.contains('hasDatepicker')) {
        jQuery(field).datepicker('setDate', null)
    }
    field.value = ''
}

document.onreadystatechange = function() {
    'use strict'
    getConfig().then(function(res) {
        res.sectionFields.forEach(function(f) {
            const field = document.querySelector('[name$=".' + f.name + '"]')
            // get dependent controller value
            // expects only radio types for now
            const depends = document.querySelectorAll('[name$=".' + f.dependsOn.name + '"]')
            // run config on section controllers change event
            depends.forEach(function(r) {
                r.addEventListener('change', function(e) {
                    toggleSections(field, f.dependsOn)
                })
            })
            // run config on load on load
            toggleSections(field, f.dependsOn)
        })
    })
    .catch(function(err) {
        console.warn(err)
    })
    document.querySelectorAll('.policy-link').forEach(function(link) {
        link.addEventListener('click', function() {
            this.parentElement.querySelector('input[type="checkbox"]').checked = true
        })
    })
}
