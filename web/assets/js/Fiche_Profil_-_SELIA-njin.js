if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function(callback, thisArg) {
        thisArg = thisArg || window
        for (let i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this)
        }
    }
}

const DROPDOWNS = {
    Bureau_distributeur: new Map(),
    No_INSEE_commune: new Map()
}

const displayedSections = function(sections) {
    'use strict'
    let hidden = 0
    sections.forEach(function(s) {
        if (s.offsetParent === null) {
            hidden++
        }
    })
    return {
        hidden: hidden,
        total: sections.length,
    }
}

const toggleControllers = function(adder, remover, targets, marker) {
    'use strict'
    if (marker.value >= displayedSections(targets).total) {
        adder.style.display = 'none'
    }
    if (displayedSections(targets).hidden > 0) {
        remover.style.display = 'block'
    }
    if (displayedSections(targets).hidden >= displayedSections(targets).total) {
        remover.style.display = 'none'
    }
    if (marker.value < displayedSections(targets).total) {
        adder.style.display = 'block'
    }
    if (marker.readonly) {
        remover.style.display = 'none'
        adder.style.display = 'none'
    }
}

const addSections = function(adder, remover, targets, marker) {
    'use strict'
    const sections = displayedSections(targets)
    if (sections.hidden > 0) {
        targets[sections.total-sections.hidden].style.display = 'table-row'
        marker.value = (displayedSections(targets).total-displayedSections(targets).hidden)
    }
    toggleControllers(adder, remover, targets, marker)
}

const removeSections = function(remover, adder, targets, marker) {
    'use strict'
    const sections = displayedSections(targets)
    if (sections.hidden < sections.total) {
        const targetSection = targets[marker.value]
        targetSection.style.display = 'none'
        targetSection.querySelectorAll('input, select').forEach(function(f) {
            if(f.type == 'hidden') {
                return
            }
            if(f.type == 'radio') {
                f.checked = false
                return
            }
            f.value = ''
        })
    }
    toggleControllers(adder, remover, targets, marker)
}

const showFilledSections = function(section, marker) {
    'use strict'
    section.forEach(function(section, idx) {
        if (marker.value > 0 && idx < marker.value) {
            section.style.display = 'table-row'
        }
    })
}

const populateDropdownByReference = function(controller, field, list, callback) {
    'use strict'
    const dropdownTexts = list.get(controller.value)
    if (!dropdownTexts) {
        return
    }
    const frag = document.createDocumentFragment()
    dropdownTexts.forEach(function(opt) {
        const option = document.createElement('option')
        option.value = opt.value
        option.innerText = opt.text
        frag.appendChild(option)
    })
    field.appendChild(frag)
    if (callback) {
        callback()
    }
}

const resetDropdown = function(field) {
    'use strict'
    // clear dropdown options
    const frag = document.createDocumentFragment()
    const option = document.createElement('option')
    frag.appendChild(option)
    field.innerHTML = ''
    field.appendChild(frag)
}

$.getJSON(CONFIG_PATH, function(configData) {
    configData.fieldAttrs.forEach(function(f) {
        const field = document.querySelector('[name$=".' + f.name + '"]')
        if (!!field && (f.readonlyTo && ROLES[f.readonlyTo] == NEW_HIRE)) {
            if (document.querySelector('[name$=".' + f.name + '_display"]')) {
                document.querySelector('[name$=".' + f.name + '_display"]').parentElement.querySelectorAll('input').forEach(function(dt) {
                    dt.disabled = true
                })
            }
            field.disabled = true
        }
        if (!!field && f.default) {
            field.value = f.default
        }
        if (!!field && f.excludedOptions) {
            field.querySelectorAll('option').forEach(function(opt) {
                if (opt.value.length && f.excludedOptions.indexOf(opt.value) >= 0) {
                    opt.remove()
                }
            })
        }
        if (!!field && f.typeaheadSrc) {
            const arr = []
            const select = document.querySelector('[name$=".' + f.typeaheadSrc + '"]')
            select.querySelectorAll('option').forEach(function(opt) {
                if (opt.innerText.length > 0) {
                    arr.push(opt.innerText)
                }
            })
            const engine = new Bloodhound({
                local: arr,
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                datumTokenizer: Bloodhound.tokenizers.whitespace
            })
            $(field).typeahead({
                highlight: true,
                limit: 10,
                classNames: {
                    input: 'w-100',
                    menu: 'mt-1 p-1 bg-light w-100',
                    suggestion: 'py-2',
                    highlight: 'bg-blue-dark text-none',
                    cursor: 'bg-blue-light text-none'
                }
            }, 
            { source: engine })
        }
        if (!!field && f.listPrefixDependsOn) {
            const defaultVal = DEFAULTS[f.defaultEUP]
            field.querySelectorAll('option').forEach(function(opt) {
                if (!opt.value.length) {
                    return
                }
                // dropdown value as reference to next field
                const dValue = opt.value.split("_")
                // if dropdown map not set
                if (!DROPDOWNS[f.name].get(dValue[0])) {
                    // set dropdown map and array of values
                    DROPDOWNS[f.name].set(dValue[0], [{
                        value: dValue[1],
                        text: opt.innerText
                    }])
                    return
                }
                // get current dropdowns
                const arr = DROPDOWNS[f.name].get(dValue[0])
                // merge dropdown texts
                arr.push({
                    value: dValue[1],
                    text: opt.innerText
                })
                // update dropdown texts
                DROPDOWNS[f.name].set(dValue[0], arr)
            })

            resetDropdown(field)
            
            // change event of controller field
            const controller = document.querySelector('[name$=".' + f.listPrefixDependsOn + '"]')
            const events = ['change', 'keyup']
            events.forEach(function(evtType) {
                controller.addEventListener(evtType, function(e) {
                    resetDropdown(field)
                    populateDropdownByReference(controller, field, DROPDOWNS[f.name])
                })
            })
            populateDropdownByReference(controller, field, DROPDOWNS[f.name], function() {
                let hasTheValue = false
                field.querySelectorAll('option').forEach(function(opt) {
                    if (opt.value == defaultVal) {
                        hasTheValue = true
                    }
                })
                if (hasTheValue) {
                    field.value = defaultVal
                }
            })
        }
    })
    const primary = document.querySelectorAll('[name$=".contact_primary_1"], [name$=".contact_primary_2"]')
    primary.forEach(function(c) {
        let checked = c.checked
        c.addEventListener('change', function() {
            primary.forEach(function(cb) {
                cb.checked = false
            })
            c.checked = !checked
        })
    })
    // toggle dependents sections
    // show filled out sections
    const dependentSections = document.querySelectorAll('.additional-dependent')
    const dependentSectionMarker = document.querySelector('[name$=".dependent_sections"]')
    showFilledSections(dependentSections, dependentSectionMarker)
    
    // add dependent section controls
    toggleControllers(document.getElementById('add-dependent'), 
        document.getElementById('remove-dependent'), 
        dependentSections, 
        dependentSectionMarker)
    // add dependent section toggling
    document.getElementById('add-dependent').addEventListener('click', function(e) {
        const marker = document.querySelector('[name$=".dependent_sections"]')
        marker.value = marker.value + 1
        addSections(this, 
            document.getElementById('remove-dependent'), 
            document.querySelectorAll('.additional-dependent'), 
            marker)
        
    })
    // remove dependent section toggling
    document.getElementById('remove-dependent').addEventListener('click', function(e) {
        const marker = document.querySelector('[name$=".dependent_sections"]')
        marker.value = marker.value - 1
        removeSections(this,
            document.getElementById('add-dependent'),
            document.querySelectorAll('.additional-dependent'),
            marker)
    })
}).done(function() {
    $(".modal").hide()
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
})

const requireIndicate = function(f) {
    'use strict'
    f.classList.add('ng-invalid')
    if (f.parentNode.className.indexOf('twitter-typeahead') >= 0) {
        f.parentNode.querySelectorAll('input')[0].classList.add('ng-invalid')
    }
}

const unrequireIndicate = function(f) {
    'use strict'
    if (f.parentNode.className.indexOf('twitter-typeahead') >= 0) {
        f.parentNode.querySelectorAll('input')[0].classList.remove('ng-invalid')
    }
    f.classList.remove('ng-invalid')
}

const requireWhenBlankDep = function(controller, dependents) {
    'use strict'
    dependents.forEach(function(f) {
        if (!controller.value) {
            requireIndicate(f)
            return
        }
        unrequireIndicate(f)
    })
}

const requireWhenBlankFilled = function(controller, dependents) {
    'use strict'
    dependents.forEach(function(f) {
        if (controller.value) {
            requireIndicate(f)
            return
        }
        unrequireIndicate(f)
    })
}

document.onreadystatechange = function() {
    // fields with required indicator
    const frenchAddresses = document.querySelectorAll('[name$=".Tax_Address_Pays"], [name$=".No_de_la_voie"], [name$=".Type_de_voie"], [name$=".Nom_de_la_voie"], [name$=".Code_postal"], [name$=".Bureau_distributeur"], [name$=".No_INSEE_commune"]')
    const intlAddresses = document.querySelectorAll('[name$=".etranger_adresse1"], [name$=".etranger_ville"], [name$=".etranger_zip"]')
    // field that controls fields with indicator
    const estrangerCountry = document.querySelector('[name$=".etranger_country"]')
    // toggle indicator on change event
    estrangerCountry.addEventListener('change', function(e) {
        requireWhenBlankDep(e.target, frenchAddresses)
        requireWhenBlankFilled(e.target, intlAddresses)
    })
    // toggle indicator on load
    requireWhenBlankDep(estrangerCountry, frenchAddresses)
    requireWhenBlankFilled(estrangerCountry, intlAddresses)

    // store schools for later use
    const ecoleField = document.querySelector('[name$=".Ecole"]')
    ecoleField.querySelectorAll('option').forEach(function(opt) {
        if (opt.value == '') {
            return
        }
        const v = ('country' + opt.value).split('_')
        const countryVal = v[0] + '_' + v[1]
        if (!SCHOOLS.get(countryVal)) {
            SCHOOLS.set(countryVal, [])
        }
        const countryValOptions = SCHOOLS.get(countryVal)
        countryValOptions.push({
            value: opt.value,
            description: opt.innerText
        })
        SCHOOLS.set(countryVal, countryValOptions)
    })
    const toggleSchools = function(country, school) {
        'use strict'
        const schoolOptions = document.createDocumentFragment()
        const option = document.createElement('option')
        const prevVal = school.value
        option.value = ''
        schoolOptions.append(option)
        let hasOldVal = false
        if (country.length) {
            const schoolsArr = SCHOOLS.get(country)
            if (schoolsArr) {
                schoolsArr.forEach(function(opt) {
                    const schoolOption = document.createElement('option')
                    schoolOption.value = opt.value
                    schoolOption.innerText = opt.description
                    if (opt.value == prevVal) {
                        hasOldVal = true
                    }
                    schoolOptions.append(schoolOption)
                })
            }
        }
        school.innerHTML = ''
        school.append(schoolOptions)
        if (hasOldVal) {
            school.value = prevVal
        }
    }
    // filter schools by country
    document.querySelector('[name$=".diplome_pays_1"]').addEventListener('change', function(e) {
        toggleSchools(e.target.value, ecoleField)
    })
    toggleSchools(document.querySelector('[name$=".diplome_pays_1"]').value, ecoleField)

    // clear no insee commune if code postal is empty
    document.querySelector('[name$=".Code_postal"]').addEventListener('keyup', function(e) {
        if (!e.target.value) {
            resetDropdown(document.querySelector('[name$=".No_INSEE_commune"]'))
        }
    })
}

angular.element(window).on('load', function() {
    setTimeout(function() {
        angular.element('#divLoader').hide()
    }, 800)
})
