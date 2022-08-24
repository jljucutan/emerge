/**
 * EditProfile.html script
 * intended for use in /Onboarding/UnplacedPages/EditProfile.html only
 * 05.17.2020 | jjucutan | initial creation
 * 06.15.2020 | jjucutan | added non-blank field logic
 * 09.01.2020 | jjucutan | update office value selector; added staff group to hide toggle logic
 */
(function() {
  "use strict"
  // for each poly
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function(callback, thisArg) {
      thisArg = thisArg || window
      for (let i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this)
      }
    }
  }
  // closest poly
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
  }
  if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
      var el = this
      do {
        if (Element.prototype.matches.call(el, s)) return el
        el = el.parentElement || el.parentNode
      } while (el !== null && el.nodeType === 1)
      return null
    }
  }
  // event poly
  if ( typeof window.CustomEvent === "function" ) return false
  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: null }
    var evt = document.createEvent( 'CustomEvent' )
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail )
    return evt
   }
  window.CustomEvent = CustomEvent
})()
const tbl = document.getElementById('wilkins')
tbl.querySelectorAll('.cal_and_button').forEach(function(dt) {
  dt.setAttribute('cellpadding', 0)
  dt.setAttribute('cellspacing', 0)
})
tbl.querySelectorAll('input[type="radio"][value=""]').forEach(function(radio) {
  radio.checked = false
  radio.closest('.horizontal_radio_item').style.display = 'none'
})

// office license section heading
const legalGroups = ["Advisor", "Associate", "Consultant Advisor", "Consultant Attorney", "Fall Associate", "Law Clerk", "Of Counsel", "Partner", "Senior Advisor", "Special Counsel", "Staff Attorney", "Summer Associate"]
if (legalGroups.indexOf(OFFICE) >= 0) {
  tbl.querySelectorAll('.legal-group').forEach(function(lg) {
   lg.style.display = 'table-row'
  })
}
if (legalGroups.indexOf(OFFICE) < 0) {
  tbl.querySelectorAll('.staff-group').forEach(function(lg) {
   lg.style.display = 'table-row'
  })
}
// special case under legal group
if (["Consultant Advisor", "Consultant Attorney"].indexOf(OFFICE) >= 0) {
  tbl.querySelectorAll('.consultant-group').forEach(function(lg) {
   lg.style.display = 'none'
  })
}

const getConfig = function(url) {
  "use strict"
  return new Promise(function(resolve, reject) {
    const xhttp = new XMLHttpRequest()
    xhttp.overrideMimeType('application/json')
    xhttp.open('GET', url, true)
    xhttp.onload = resolve
    xhttp.onerror = reject
    xhttp.send(null)
  })
}
const editprofileReq = getConfig(EDITPROFILE_CFG)
let editprofileCfg = {}
editprofileReq.then(function(e) {
  editprofileCfg = JSON.parse(e.target.responseText)
})

const radioChecked = function(radioName) {
  "use strict"
  const radios = tbl.querySelectorAll('[name="' + radioName + '"]')
  let vals = {
    checked: false,
    value: ''
  }
  radios.forEach(function(rdo) {
    if (rdo.checked == true && rdo.value != "") {
      vals.checked = true
      vals.value = rdo.value
    }
  })
  return vals
}

const clearRadio = function(name) {
  tbl.querySelectorAll('[name$="' + name + '"]').forEach(function(rdo) {
    rdo.checked = false
  })
}

const toggleDisplayFields = function(f, deps) {
  "use strict"
  let controlVal = f.value
  // do not fire if not visible
  if (f.offsetParent == null) {
    return
  }
  if (f.type == 'radio' && radioChecked(f.name).checked) {
    controlVal = radioChecked(f.name).value
  }
  deps.forEach(function(dep) {
    const depField = tbl.querySelector('[name$="' + dep.name + '"]')
    if (dep.logic == 'includes') {
      if (dep.dependsValue.indexOf(controlVal) >= 0) {
        depField.closest('.field-group').style.display = 'table-row'
        return
      }
      if (['radio', 'checkbox'].indexOf(depField.type) >= 0) {
        clearRadio(dep.name)
      }
      if (['text', 'select-one', 'select-multiple'].indexOf(depField.type) >= 0) {
        depField.value = ''
      }
      depField.closest('.field-group').style.display = 'none'
      if (jQuery('[name$="' + dep.name + '_display"]').length) {
        jQuery('[name$="' + dep.name + '_display"]').val('')
      }
    }
    if (dep.logic == 'equal') {
      if (controlVal == dep.dependsValue) {
        depField.closest('.field-group').style.display = 'table-row'
        return
      }
      if (['radio', 'checkbox'].indexOf(depField.type) >= 0) {
        clearRadio(dep.name)
      }
      if (['text', 'select-one', 'select-multiple'].indexOf(depField.type) >= 0) {
        depField.value = ''
      }
      tbl.querySelector('[name$="' + dep.name + '"]').closest('.field-group').style.display = 'none'
      if (jQuery('[name$="' + dep.name + '_display"]').length) {
        jQuery('[name$="' + dep.name + '_display"]').val('')
      }
    }
    // evaluate non-block text fields
    if (dep.logic == 'notBlank') {
      if (controlVal.length > 0) {
        depField.closest('.field-group').style.display = 'table-row'
        return
      }
      if (['radio', 'checkbox'].indexOf(depField.type) >= 0) {
        clearRadio(dep.name)
      }
      if (['text', 'select-one', 'select-multiple'].indexOf(depField.type) >= 0) {
        depField.value = ''
      }
      tbl.querySelector('[name$="' + dep.name + '"]').closest('.field-group').style.display = 'none'
      if (jQuery('[name$="' + dep.name + '_display"]').length) {
        jQuery('[name$="' + dep.name + '_display"]').val('')
      }
    }
  })
}

const changeEvent = new CustomEvent('change')
Promise.all([editprofileReq])
  .then(function() {
    const fields = editprofileCfg.fields
    
    for(let name in fields) {
      tbl.querySelectorAll('[name$="' + name + '"]').forEach(function(f) {
        f.addEventListener('change', function(e) {
          // get name again since IE has mysterious behavior using for in loop
          let nameArr = this.getAttribute('name').split('.')
          toggleDisplayFields(this, fields[nameArr[nameArr.length - 1]].dependents)
        })
        toggleDisplayFields(f, fields[name].dependents)
      })
    }
  })
  .catch(function(err) {
    throw err
  })
