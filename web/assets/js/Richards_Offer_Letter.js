/**
 * CHANGE LOGS
 * 2022-11-04 | jjucutan | created initial version ref SERVICES-45468
 */
const fetchTemplate = (templatePath) => {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', templatePath)
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.responseText)
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

const render = function(templateStr, markup, data) {
  'use strict'
  // get unescaped html string
  const str = templateStr.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  const cleanedStr = str.replace(/>[\n\t ]+</g, "><").replace(/\n\s+|\n/g, "").trim()
  // parse template
  try {
    const html = ejs.render(cleanedStr, data)
    document.getElementById(markup).innerHTML = html
  } catch (err) {
    console.warn(err)
  }
}

const focusSigField = function(modalID) {
  'use strict'
  setTimeout(function() {
    document.getElementById(modalID).querySelector('input[type="text"]').focus()
  }, 500)
}

const disableCalButton = function(el) {
    'use strict'
    el.parent().find('input').prop('disabled', 'disabled')
}

const makeid = function() {
    "use strict"
    const CHAR_LENGTH = 16
    let result = ''
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let charactersLength = characters.length
    for ( var i = 0; i < CHAR_LENGTH; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

const ANNUAL_SALARY_MULTIPLIERS = {
  'hourly': 2080,
  'daily': 260,
  'weekly': 52,
  'bi-weekly': 26,
  'monthly': 12,
  'bi-monthly': 6,
  'annually': 1,
}

var TEMPLATE_STR = ''

$(document).on('ready', function() {
  // fill current date if it hasn't been filled yet
  if (document.getElementById('Current_Date').value.length < 1) {
    document.getElementById('Current_Date').value = moment().format('MM/DD/YYYY')
  }
  data.Current_Date = document.getElementById('Current_Date').value
  // get annual salary
  data.Annual_Salary = data.Salary_Amount * ANNUAL_SALARY_MULTIPLIERS[data.Salary_Type]

  // render data
  fetchTemplate(TEMPLATE_PATH1).then(res => {
    TEMPLATE_STR = res
    render(TEMPLATE_STR, 'markup1', data)
  })
  
  // populate hidden fields
  if (typeof makeOfferLetter != 'undefined') {
    makeOfferLetter('hidden_pg1', 'offerClause1')
  }

  if ($('.calendar_button').length < 1) { 
    //Create an array of info to pass to complete the offer letter 
    //0 for images sending an image tag, 1 for sections of text sneding the ID of the field that holds the HTML. 
    let arrParts = [ 
      [1,'hidden_pg1'],
    ]
    //Send (ID of the div to hide,ID of the div to show,Parts to get the offer letter) 
    try {
      showCompletedOfferLetter('incomplete','complete',arrParts)
    } catch(err) {
      console.warn(err)
    }
  }

  setTimeout(function() {
    $(".modal").hide()
  }, 1000)

  try {
    angular.element(window).on('load', function() {
        setTimeout(function() {
            angular.element('#divLoader').hide();
        }, 500);
    })
  } catch(err) {
    console.warn(err)
  }
})
