// Created for New Hire Associate provider page
// 2022-09 | jjucutan | created script
// 2022-09-21 | jjucutan | added dynamic validation with config

const loadDynamicValidationsConfig = async (path) => {
    'use strict'
    const res = await fetch(path)
    return res.json()
}

// required fields validation
const VALIDATION_FUNCS = {}

document.onreadystatechange = function() {
    'use strict'

    // set default value for car stipend frequency
    const Car_Stipend_Frequency = document.querySelector('[name$=".Car_Stipend_Frequency"]')
    if (CAR_STIPEND_ELIGIBILITY == 'Yes' && !Car_Stipend_Frequency.value.length) {
        Car_Stipend_Frequency.value = '1st Check of Month'
    }

    // set default value onload
    for (let name in FIELDS_DEFAULT_VALUE) {
        const field = document.querySelector(`[name$=".${name}"]`)
        if (!field.value.length) {
            field.value = FIELDS_DEFAULT_VALUE[name]
        }
    }

    // make require or optional fields
    const updateFuncs = (fieldName, remove) => {
        if (remove) {
            delete VALIDATION_FUNCS[fieldName]
            return
        }
        const field = document.querySelector(`[name$="${fieldName}"]`)
        VALIDATION_FUNCS[fieldName] = function () { 
            if(self.eFormRequiredField){ 
                if(eFormRequiredField(GetValue(field), fieldName, fieldName)==false) 
                window['bRet'] = false 
            } else {  
                if(self.IsValidationEnabled){ 
                    if (IsValidationEnabled()){ 
                        var sMessage = 'Error trying to validate against function eFormRequiredField\nFunction not found for validation of' 
                        if (self.AddError) 
                            AddError(fieldName,sMessage,'') 
                        else 
                            alert(sMessage) 
                        window['bRet']=false 
                    } 
                } 
            } 
        }
        // run validation upon submit
        window['funcCustomOnSubmitCallback'] = function () { 
            for (let [_, fn] of Object.entries(VALIDATION_FUNCS)) {
                fn()
            }
        }
    }

    // walk fields and create validation for each
    REQUIRED_FIELDS.forEach(function (fieldName) {
        updateFuncs(fieldName)
    })

    // toggle validation depends on another field
    loadDynamicValidationsConfig(VALIDATION_CONFIG).then(res => {
        const toggleFieldConfig = () => {
            const config = res.config
            for (let thisField in config) {
                if (config[thisField].require && config[thisField].require.AND) {
                    let isRequired = true
                    config[thisField].require.AND.forEach(fieldConf => {
                        // check each field controller that this field depends on
                        for (let field in fieldConf) {
                            const fieldDepends = document.querySelector(`[name$="${field}"]`)
                            // if any field doesn't satisfy 'and' logic, unrequire
                            if (fieldDepends.value != fieldConf[field]) {
                                isRequired = false
                            }
                        }
                    })
                    if (isRequired) {
                        // require this field
                        updateFuncs(thisField)
                    } else {
                        // unrequire this field
                        updateFuncs(thisField, true)
                    }
                }
                if (config[thisField].require && config[thisField].require.NOR) {
                    let isRequired = true
                    config[thisField].require.NOR.forEach(fieldConf => {
                        // check each field controller that this field depends on
                        for (let field in fieldConf) {
                            const fieldDepends = document.querySelector(`[name$="${field}"]`)
                            // if neither field equals, unrequire
                            if (fieldDepends.value == fieldConf[field]) {
                                isRequired = false
                            }
                        }
                    })
                    if (isRequired) {
                        // require this field
                        updateFuncs(thisField)
                    } else {
                        // unrequire this field
                        updateFuncs(thisField, true)
                    }
                }
                if (config[thisField].visible && config[thisField].visible.AND) {
                    let isVisible = true
                    config[thisField].visible.AND.forEach(fieldConf => {
                        // check each field controller that this field depends on
                        for (let field in fieldConf) {
                            const fieldDepends = document.querySelector(`[name$="${field}"]`)
                            // if any field doesn't satisfy 'and' logic, unrequire
                            if (fieldDepends.value != fieldConf[field]) {
                                isVisible = false
                            }
                        }
                    })
                    const thisFieldContainer = document.querySelector(`[name$="${thisField}"]`).closest('tr')
                    if (isVisible) {
                        thisFieldContainer.style.display = 'table-row'
                    } else {
                        thisFieldContainer.style.display = 'none'
                    }
                }
                if (config[thisField].readonly && config[thisField].readonly.OR) {
                    let isReadonly = false
                    config[thisField].readonly.OR.forEach(fieldConf => {
                        // check each field controller that this field depends on
                        for (let field in fieldConf) {
                            const fieldDepends = document.querySelector(`[name$="${field}"]`)
                            // if any field equals, make read only
                            if (fieldDepends.value == fieldConf[field]) {
                                isReadonly = true
                            }
                        }
                    })
                    const thisFieldContainer = document.querySelector(`[name$="${thisField}"]`).closest('tr')
                    thisFieldContainer.style.position = 'relative'
                    const coverlay = document.createElement('div')
                    coverlay.classList.add('cover')
                    if (isReadonly) {
                        thisFieldContainer.appendChild(coverlay)
                    } else {
                        thisFieldContainer.querySelectorAll('.cover').forEach(c => {
                            thisFieldContainer.removeChild(c)
                        })
                    }
                }
            }
        }
        toggleFieldConfig()
        document.querySelector('[name$=".Shift_Differential_Eligibility"]').addEventListener('change', function() {
            toggleFieldConfig()
        })
        document.querySelector('[name$=".Entitlement_Option"]').addEventListener('change', function() {
            toggleFieldConfig()
        })
    })
    .catch(err => {
        console.warn(err)
    })
}
