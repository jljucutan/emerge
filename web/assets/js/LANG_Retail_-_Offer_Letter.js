/**
 * CHANGE LOGS
 * 2021-11-19 | jjucutan | created initial version ref SERVICES-43905
 * 2021-11-25 | jjucutan | add new dynamic field in content
 */
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this)
    }
  }
}

const render = function(template, markup, data, readonly) {
  "use strict"
  // get unescaped html string
  const str = document.getElementById(template).innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  const cleanedStr = str.replace(/>[\n\t ]+</g, "><").replace(/\n\s+|\n/g, "").trim()
  // parse template
  const html = ejs.render(cleanedStr, data)

  // get offerclause instance id
  const tmplID = template[template.length-1]
  const offerClause = document.createElement('div')
  offerClause.classList.add(`offerClause${tmplID}`)
  offerClause.insertAdjacentHTML('beforeend', html)
  offerClause.querySelectorAll('input').forEach(function(inpt) {
    // start date is hardcoded for now since there's no other date
    if (inpt.classList.contains('datepicker')) {
      $(inpt).val(data.StartDate)
      $(inpt).datepicker()
      $(inpt).datepicker('option', 'onSelect', function(dateText, _) {
          document.querySelector('[name$=".' + this.dataset.targetInput + '"]').value = dateText
        })
    }
    ['keyup', 'paste', 'blur'].forEach(function(evt) {
      inpt.addEventListener(evt, function() {
        document.querySelector('[name$=".' + this.dataset.targetInput + '"]').value = this.value
      })
    })
  })

  // convert input fields into text if readonly
  if (readonly) {
    offerClause.querySelectorAll('input').forEach(function(inpt) {
      const frag = document.createDocumentFragment()
      frag.append(inpt.value)
      inpt.parentNode.insertBefore(frag, inpt.nextSibling)
      inpt.parentNode.removeChild(inpt)
    })
  }
  document.getElementById(markup).innerHTML = ''
  document.getElementById(markup).appendChild(offerClause)
}

const disableCalButton = function(el) {
    "use strict"
    el.parent().find('input').prop('disabled', 'disabled')
}

$(document).on('ready', function() {
  // fill current date if it hasn't been filled yet
  if (document.getElementById('Current_Date').value.length < 1) {
    document.getElementById('Current_Date').value = moment().format('MM/DD/YYYY')
  }
  data.Current_Date = document.getElementById('Current_Date').value

  let readonly = false
  if (IS_NEW_HIRE) {
    readonly = true
  }
  const IS_COMPLETE = $('#sv').prop('readonly')
  if (IS_COMPLETE) {
    readonly = true
  }

  // render data
  render('fragment-1', 'markup1', data, readonly)

  
  // populate hidden fields
  makeOfferLetter('hidden_pg1', 'offerClause1')

  $('#ButtonPrint').on('click', function() {
    data.StartDate =  document.querySelector('[name$=".StartDate"]').value
    data.Salary_Amount =  document.querySelector('[name$=".Salary_Amount"]').value
    render('fragment-1', 'markup1', data, true)
    makeOfferLetter('hidden_pg1', 'offerClause1')
    funcPrint()
  })

  if (IS_COMPLETE) { 
    //Create an array of info to pass to complete the offer letter 
    //0 for images sending an image tag, 1 for sections of text sneding the ID of the field that holds the HTML. 
    let arrParts = [ 
      [1,'hidden_pg1'],
    ]
    //Send (ID of the div to hide,ID of the div to show,Parts to get the offer letter) 
    showCompletedOfferLetter('incomplete','complete',arrParts)
    arrParts = [ 
      [1,'hidden_pg1'],
    ]
    showCompletedOfferLetter('incomplete2','complete2',arrParts)
  }
  else {
    document.querySelector('[name$=".date"]').value = moment().format('MM/DD/YYYY')
  }
  
  setTimeout(function() {
    $(".modal").hide()
  }, 1000)
})
