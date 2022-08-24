/**
 * script for rendering offer letter
 */

 if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

const formatCurrency = function(data) {
  "use strict"
  if (!data) {
    return 0
  }
  const rawNumber = Number(data)
  if (isNaN(rawNumber)) {
    return 0
  }
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rawNumber)
}

const render = function(template, markup, data) {
  "use strict"
  // get unescaped html string
  let cstr = document.getElementById(template).cloneNode(true)
  let str = cstr.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  let cleanedStr = str.replace(/>[\n\t ]+</g, "><").replace(/\n\s+|\n/g, "").trim()
  // parse template
  let html = ejs.render(cleanedStr, data)
  // append to vdom
  const offerClause = document.createElement('div')
  offerClause.classList.add('offerClause')
  offerClause.innerHTML = html
  const frag = document.createDocumentFragment()
  frag.appendChild(offerClause)
  // display parsed template
  document.getElementById(markup).innerHTML = ''
  document.getElementById(markup).appendChild(frag)
}

$(document).on('ready', function() {

  // display numbers as valid currency
  if (data.Visa_Type.length) {
    data.Approx_Cost = formatCurrency(VISA_CONFIG[data.Visa_Type].cost)
    data.TIMING = VISA_CONFIG[data.Visa_Type].timing
  }

  // set green card renewal if yes and not completed
  const Green_Card_Renewal_Field = document.getElementById('Green_Card_Renewal')
  if (!Green_Card_Renewal_Field.readonly) {
    Green_Card_Renewal_Field.value = GREEN_CARD_RENEWAL
  }

  // show green card paragraph if green card reviewal is yes
  data.Green_Card_Renewal = Green_Card_Renewal_Field.value

  // set completed variables
  if (!jQuery('#ButtonSaveAndComplete').length) {
    data.readonly = true
  }

  // render data
  render('fragment-1', 'markup', data)

  // change event to update hidden fields
  thisForm.querySelectorAll('.date-month, .date-year').forEach(function(dpicker) {
    if (!dpicker) {
      return
    }
    let changeMonth = Number(dpicker.dataset.changeMonth)
    let changeYear = Number(dpicker.dataset.changeYear)
    $(dpicker).datepicker({
      dateFormat: dpicker.dataset.dateformat,
      changeMonth: (changeMonth > 0),
      changeYear: (changeYear > 0),
      onSelect: function() {
        thisForm.querySelector(dpicker.dataset.targetdate).value = this.value
      }
    })
  })

  $('#ButtonPrint, #ButtonSaveAndComplete', thisForm).on('click', function() {
    // fields should be readonly on print
    // set readonly fields if not yet set
    if (!data.readonly && g_HT.size() < 1) {
      data.Green_Card_Renewal_Month = document.getElementById('Green_Card_Renewal_Month').value
      data.Green_Card_Renewal_Year = document.getElementById('Green_Card_Renewal_Year').value
      data.readonly = true
      render('fragment-1', 'markup', data)
      // repopulate offer hidden fields
      makeOfferLetter('hidden_pg1', 'offerClause')
    }
    // then print it
    switch($(this).prop('id')) {
      case "ButtonPrint":
        funcPrint()
      break
      case "ButtonSaveAndComplete":
        funcSaveAndComplete()
      break
    }
  })

  makeOfferLetter('hidden_pg1', 'offerClause')
  if (!jQuery('#ButtonSaveAndComplete').length) { 
    // fields should be readonly on complete
    // set readonly fields if not yet set
    if (!data.readonly && g_HT.size() < 1) {
      data.Green_Card_Renewal_Month = document.getElementById('Green_Card_Renewal_Month').value
      data.Green_Card_Renewal_Year = document.getElementById('Green_Card_Renewal_Year').value
      data.readonly = true
      render('fragment-1', 'markup', data)
    }
    //Create an array of info to pass to complete the offer letter 
    //0 for images sending an image tag, 1 for sections of text sneding the ID of the field that holds the HTML. 
    let arrParts = [ 
      [1,'hidden_pg1'],
    ]
    //Send (ID of the div to hide,ID of the div to show,Parts to get the offer letter) 
    showCompletedOfferLetter('incomplete','complete',arrParts)
  }
  $(".modal").hide()
})
