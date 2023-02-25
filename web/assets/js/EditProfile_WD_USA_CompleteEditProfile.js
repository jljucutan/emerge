// SERVICES-43192 
// 2021-06-04 | jjucutan | (SERVICES-43192) initial script creation
// 2022-12-15 | jjucutan | (SERVICES-43192) added US_Perm_Resident for changing Citizenship and Nationality state
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this)
    }
  }
}

// SERVICES-43192 | jjucutan | required field functions factory
['WD_Gender'].forEach(function(fn) {
  this['Custom_Callback_' + fn] = function() {
    const f = document.querySelector('[name$=".' + fn + '"]')
    if (!f) {
      return
    }
    if (f.disabled) {
      return
    }
    if (self.eFormRequiredField) {
      bRet = eFormRequiredField(f.value, f.name, fn)
    } else {
      if (self.IsValidationEnabled) {
        if (IsValidationEnabled()) {
          var sMessage = 'Error trying to validate against function eFormRequiredField\nFunction not found for validation of'
          if (self.AddError)
            AddError(fn, sMessage, '')
          else
            alert(sMessage)
          bRet = false
        }
      }
    }
  }
})

/* Use this function to run the validation on load... if used with LoadCallback(), labels will turn red. */
// function funcCustomOnLoadCallback(formobject){
//   if(self.Custom_Callback_National_ID_Country){Custom_Callback_National_ID_Country(formobject)}
// }

/* Use this function to run the validation on submit*/
function funcCustomOnSubmitCallback(formobject){
  if(self.Custom_Callback_WD_Gender){Custom_Callback_WD_Gender(formobject)}
}

const toggleTargetsState = (fields, enable) => {
  fields.forEach(f => {
    if (!enable) {
      document.querySelector(`[name$="${f}"]`).value = ''
      document.querySelector(`[name$="${f}"]`).disabled = true
      return
    }
    document.querySelector(`[name$="${f}"]`).disabled = false
  })
}

document.onreadystatechange = function() {
  document.querySelectorAll('input[type="text"]').forEach(function(f) {
    f.classList.add('lifesuite__text-input')
  })
  document.querySelectorAll('select').forEach(function(f) {
    f.classList.add('lifesuite__select-input')
  })
  document.querySelectorAll('[id$="_promptx"]').forEach(function(f) {
    const div = document.createElement('div')
    div.id = f.id.replace(/x$/, '')
    div.innerHTML = f.innerHTML.replace(/:/, '')
    document.getElementById('label-container').appendChild(div)
  })
  // toggle disable nationality and citizenship fields
  const usPermResident = document.querySelector('[name$=".US_Perm_Resident"]')
  usPermResident.addEventListener('change', function(evt) {
    if (evt.target.value == 'Yes') {
      toggleTargetsState(['Citizenship_Status', 'Nationality_Primary'], false)
      return
    }
    toggleTargetsState(['Citizenship_Status', 'Nationality_Primary'], true)
  })
  // toggle disable nationality and citizenship fields on load
  if (usPermResident.value == 'Yes') {
    toggleTargetsState(['Citizenship_Status', 'Nationality_Primary'], false)
  }
}
