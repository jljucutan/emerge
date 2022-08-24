// SERVICES-43194
// 2021-06-04 | jjucutan | (SERVICES-43194) initial script creation
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this)
    }
  }
}

// SERVICES-43194 | jjucutan | required field functions factory
['National_ID_Country', 'National_ID_Type_CAN', 'National_ID_Number', 'WD_Gender', 'Ethnicity_CAN', 'Citizenship_Status', 'Nationality_Primary', ].forEach(function(fn) {
  this['Custom_Callback_' + fn] = function() {
    const f = document.querySelector('[name$=".' + fn + '"]')
    if (!f) {
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
  if(self.Custom_Callback_National_ID_Country){Custom_Callback_National_ID_Country(formobject)}
  if(self.Custom_Callback_National_ID_Type_CAN){Custom_Callback_National_ID_Type_CAN(formobject)}
  if(self.Custom_Callback_National_ID_Number){Custom_Callback_National_ID_Number(formobject)}
  if(self.Custom_Callback_WD_Gender){Custom_Callback_WD_Gender(formobject)}
  if(self.Custom_Callback_Ethnicity_CAN){Custom_Callback_Ethnicity_CAN(formobject)}
  if(self.Custom_Callback_Citizenship_Status){Custom_Callback_Citizenship_Status(formobject)}
  if(self.Custom_Callback_Nationality_Primary){Custom_Callback_Nationality_Primary(formobject)}
}

document.onreadystatechange = function() {
  document.querySelectorAll('input[type="text"]').forEach(function(f) {
    f.classList.add('lifesuite__text-input')
  })
  document.querySelectorAll('select').forEach(function(f) {
    f.classList.add('lifesuite__select-input')
  })
  document.querySelectorAll('textarea').forEach(function(f) {
    f.classList.add('lifesuite__textarea-input')
  })
  document.querySelectorAll('[id$="_promptx"]').forEach(function(f) {
    const div = document.createElement('div')
    div.id = f.id.replace(/x$/, '')
    div.innerHTML = f.innerHTML.replace(/:/, '')
    document.getElementById('label-container').appendChild(div)
  })
}
