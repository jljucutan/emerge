/**
 * script for rendering offer letter
 */

const render = function(template, markup, data) {
  "use strict"
  // get unescaped html string
  let str = document.getElementById(template).innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  let cleanedStr = str.replace(/>[\n\t ]+</g, "><").replace(/\n\s+|\n/g, "").trim()
  // parse template
  let html = ejs.render(cleanedStr, data)
  // display parsed template
  document.getElementById(markup).innerHTML = html
}

$(document).on('ready', function() {
  // render data
  render('fragment-1', 'markup', data)
  render('fragment-2', 'markup2', data)
  // render('fragment-2', 'markup2', data)
  // populate hidden fields
  makeOfferLetter('hidden_pg1', 'offerClause')
  makeOfferLetter('hidden_pg2', 'offerClause2')
  // makeOfferLetter('hidden_pg2', 'offerClause2')
  if (strFormCompleted != "") { 
    //Create an array of info to pass to complete the offer letter 
    //0 for images sending an image tag, 1 for sections of text sneding the ID of the field that holds the HTML. 
    let arrParts = [ 
      [1,'hidden_pg1'],
    ]
    //Send (ID of the div to hide,ID of the div to show,Parts to get the offer letter) 
    showCompletedOfferLetter('incomplete','complete',arrParts)
    showCompletedOfferLetter('incomplete2','complete2',arrParts)
    arrParts = [ 
      [1,'hidden_pg2'],
    ]
  }
  $(".modal").hide()
})