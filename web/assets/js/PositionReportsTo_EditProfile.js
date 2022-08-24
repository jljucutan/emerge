/**
 * Created for SERVICES-42816
 * JHUAPL: LOE for Validation Request - Position ID/Code & Description
 * 2021-05-05 | jjucutan | initial creation
 * 2021-05-19 | jjucutan | added None to configuration
 * 2021-06-09 | jjucutan | add validation for number and description field
 */

if (!Element.prototype.matches) {
    Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector
}

if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        let el = this

        do {
            if (Element.prototype.matches.call(el, s)) return el
            el = el.parentElement || el.parentNode
        } 
        while (el !== null && el.nodeType === 1)
        return null
    }
}

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window
        for (let i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this)
        }
    };
}

const updateByValue = function(val, target) {
    'use strict'
    target.value = val
}

const loadConfig = function (configPath) {
    'use strict'
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

const displayElem = function(elName) {
    'use strict'
    const f = $thisForm.querySelector('[name$=".' + elName + '"]')
    f.closest('tr').style.display = 'table-row'
    return f
}

const bindEventToTarget = function(elName, target) {
    'use strict'
    $thisForm.querySelector(elName).addEventListener('keyup', function(e) {
        updateByValue(e.target.value, $thisForm.querySelector(target))
    })
    $thisForm.querySelector(elName).addEventListener('blur', function(e) {
        updateByValue(e.target.value, $thisForm.querySelector(target))
    })
}

const disableCompleted = function(el, isCompleted) {
    'use strict'
    if (!!isCompleted) {
        const c = document.createElement('div')
        c.classList.add('cover')
        el.parentElement.appendChild(c)
    }
}

document.onreadystatechange = function () {
    loadConfig(CONFIG_PATH).then(function(res) {
        const levels = JSON.parse(res).levels
        const lineMgrLevel = $thisForm.querySelector('[name$=".Line_Mgr_Level"]').value
        const levelValue = levels[lineMgrLevel]
        if (lineMgrLevel && levelValue) {
            if (!!levelValue.positionID) {
                disableCompleted(displayElem('PositionID'), (sTaskComplete.length > 0))
            }
            if (!!levelValue.positionIDDesc) {
                displayElem('Position_Desc')
            }
            if (!!levelValue.reportsTo) {
                disableCompleted(displayElem('ReportsToID'), (sTaskComplete.length > 0))
            }
            if (!!levelValue.reportsToDesc) {
                displayElem('ReportsToID_Desc')
            }
        }
    })
    .catch(function(err) {
        console.warn(err)
    })

    bindEventToTarget('[name$=".PositionID"]', '[name$=".Position_Desc"]')
    bindEventToTarget('[name$=".ReportsToID"]', '[name$=".ReportsToID_Desc"]')
}

// arbitrary required fields
const rf = [
    {field: 'ReportsToID', desc: 'ReportsToID_Desc'},
    {field: 'PositionID', desc: 'Position_Desc'}
]
rf.forEach(function(reqField) {
    this['Custom_Callback_' + reqField.field] = function(formobject) {
        // input field
        const f = document.querySelector('[name$=".' + reqField.field + '"]')
        // the description field
        const d = document.querySelector('[name$=".' + reqField.desc + '"]')
        if(self.eFormRequiredField){
            // make sure that the field is visible to be validated
            if (f.offsetParent != null) {
                if(eFormRequiredField(f.value, f.name, reqField.field)==false) {
                    bRet = false
                } 
                else {
                    let hasTheOption = false
                    d.querySelectorAll('option').forEach(function(fd) {
                        if (f.value == fd.value) {
                            hasTheOption = true
                        }
                    })
                    // validate that the input value exists in corresponding *desc field
                    if (!hasTheOption) {
                        AddError(reqField.field, 'Error in validation, invalid value for', '')
                        bRet = false
                    }
                }
            }
        }
        else {
            if(self.IsValidationEnabled) {
                var sMessage = 'Error trying to validate against function eFormRequiredField\nFunction not found for validation of'
                if (self.AddError) {
                    AddError(reqField.field,sMessage,'')
                }
                else {
                    alert(sMessage)
                }
                bRet=false
            }
        }
    }
})

function funcCustomOnSubmitCallback(formobject){
  if(self.Custom_Callback_ReportsToID){Custom_Callback_ReportsToID(formobject)}
  if(self.Custom_Callback_PositionID){Custom_Callback_PositionID(formobject)}
}
