/**
 * CHANGE LOGS
 * 2021-02-12 | jjucutan | created initial version ref SERVICES-42570
 */
const render = function(template, markup, data) {
  "use strict"
  // get unescaped html string
  const str = document.getElementById(template).innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  const cleanedStr = str.replace(/>[\n\t ]+</g, "><").replace(/\n\s+|\n/g, "").trim()
  // parse template
  const html = ejs.render(cleanedStr, data)
  // get offerclause instance id
  const tmplID = template[template.length-1]
  document.getElementById(markup).innerHTML = '<div class="offerClause' + tmplID + '">' + html + '</div>'
}

const completeStamp = function(id) {
  "use strict"
  if(id.length) {
    document.getElementById(id).value = 0
  }
}

const focusSigField = function(modalID) {
  "use strict"
  setTimeout(function() {
    document.getElementById(modalID).querySelector('input[type="text"]').focus()
  }, 500)
}

const disableCalButton = function(el) {
    "use strict"
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

$(document).on('ready', function() {
  // fill current date if it hasn't been filled yet
  if (document.getElementById('Current_Date').value.length < 1) {
    document.getElementById('Current_Date').value = moment().locale('ES').format('DD MMMM YYYY')
  }
  data.Current_Date = document.getElementById('Current_Date').value

  // render data
  render('fragment-1', 'markup1', data)
  render('fragment-2', 'markup2', data)
  // populate hidden fields
  makeOfferLetter('hidden_pg1', 'offerClause1')
  makeOfferLetter('hidden_pg2', 'offerClause2')

  // disable dates
  disableCalButton(jQuery('.signDate, .signDate2'))
  // dynamic text highlight not needed for new hires
  if (isNewhire || $('#hidden_pg1').prop('readonly')) { 
    $('.lifesuite__eform-builder--body.fb-render').addClass('deactivate-highlight')
  }
  // When the field is not populated, the form should display a highlighted blank space. 
  $('mark').each(function(x){ 
    if($('mark').eq(x).html().length <= 0){ 
      $('mark').eq(x).html('<span>&nbsp;</span>')
    } 
  })
  // friendly text appearance
  let loadFriendlyTexts = function() { 
    if (!isNewhire) { 
      !$('#hidden_pg1').prop('readonly') && setTimeout(function() { 
        $('.marked', '.offer-letter-body').each(function(k,v) {
          const popoverContainer = $(v).find('[data-toggle="popover"]')
          popoverContainer.popover({ 
            'container': '#' + popoverContainer.prop('id'),
            'placement': 'top',
            'trigger': 'manual'
          }).popover('show')
        })
        $('.popover-content').css({'color': '#b3dbff'}) 
      }, 500)
    } 
  } 
  loadFriendlyTexts() 

  $(window).on('resize', function() { 
    loadFriendlyTexts()
  })

  let init = function() {
    if($('#RecruiterStamp').prop('readonly')) {
      $('#signature, #signature2, .startDate, #recruiter_name').prop('onfocus',null).css('background','#ccc')
      return false
    }

    if (isEmployee && parseInt($('#EmployeeStamp').val()) === 0) {
      $('#signature, #sv').val('')
      $('#EmployeeStamp').val(1)
      setTimeout(function() {
        $('.signDate').val('')
      }, 400)
    }
  }
  setTimeout(init(),800)

  // frontend validation
  $(thisForm).on('change', 'input:visible:not(#signature):not(:button):not(disabled):not(readonly), select:visible', function() {
    validateField($(this))
  })

  $('#modal').on('click', 'input.lifesuite__button', function() {
    validateField($('#signature'))
  })

  $('#modal2').on('click', 'input.lifesuite__button', function() {
    validateField($('#signature2'))
  })
  
  if ($('.calendar_button').length < 1) { 
    //Create an array of info to pass to complete the offer letter 
    //0 for images sending an image tag, 1 for sections of text sneding the ID of the field that holds the HTML. 
    let arrParts = [ 
      [1,'hidden_pg1'],
    ]
    //Send (ID of the div to hide,ID of the div to show,Parts to get the offer letter) 
    showCompletedOfferLetter('incomplete','complete',arrParts)
    arrParts = [ 
      [1,'hidden_pg2'],
    ]
    showCompletedOfferLetter('incomplete2','complete2',arrParts)
  }
  $(".modal").hide()
})
