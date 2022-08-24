/**
 * CHANGE LOGS
 * 2021-02-08 | jjucutan | created initial version ref SERVICES-42563
 * 2021-06-29 | jjucutan | created initial version ref SERVICES-42563
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
    "use strict";
    el.parent().find('input').prop('disabled', 'disabled');
}

const makeid = function() {
    "use strict";
    const CHAR_LENGTH = 16;
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( var i = 0; i < CHAR_LENGTH; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

$(document).on('ready', function() {
  // render data
  render('fragment-1', 'markup', data)
  render('fragment-2', 'markup2', data)
  // populate hidden fields
  makeOfferLetter('hidden_pg1', 'offerClause1')
  makeOfferLetter('hidden_pg2', 'offerClause2')

  // disable dates
  disableCalButton(jQuery('.signDate, .signDate2'))
  // dynamic text highlight not needed for new hires
  if (isNewhire) { 
    $('.lifesuite__eform-builder--body.fb-render').addClass('deactivate-highlight')
  }
  // When the field is not populated, the form should display a highlighted blank space. 
  $('mark').each(function(x){ 
    if($('mark').eq(x).html().length <= 0){ 
      $('mark').eq(x).html('&nbsp;')
    } 
  })
  // friendly text appearance
  let loadFriendlyTexts = function() { 
    if (!isNewhire) { 
      setTimeout(function() { 
        $('.marked > [data-toggle="popover"]').popover({ 
          'placement': 'top',
          'trigger': 'manual'
        }).popover('show')
        $('.popover-content').css({'color': '#b3dbff'}) 
      }, 500)
    } 
  } 
  loadFriendlyTexts() 

  $(window).on('resize', function() { 
    loadFriendlyTexts()
  })

  let init = function() {
    if (!isEmployee && !$('#hidden_pg1').prop('readonly')) { 
      $('#signature, #sv, #full_name').val('')
      setTimeout(function() {
        $('.signDate').datepicker('setDate', null)
      }, 800)
    }

    if (isEmployee && parseInt($('#EmployeeStamp').val()) === 0 && !$('#hidden_pg1').prop('readonly')) {
      $('#signature, #sv').val('')
      $('#EmployeeStamp').val(1)
      setTimeout(function() {
        $('.signDate').datepicker('setDate', null)
      }, 800)
    }
  }
  setTimeout(init(),500)

  // frontend validation
  $(thisForm).on('change', 'input:visible:not(#signature):not(:button):not(disabled):not(readonly), select:visible', function() {
    validateField($(this))
  })

  $('#modal').on('click', 'input.lifesuite__button', function() {
    validateField($('#signature'))
  })

  $('#ButtonPrint, #buttonPrint, #ButtonSaveAndComplete, #buttonSaveAndComplete', thisForm).on('click', function(e) {
    let formIsValid = true
    const btn = $(this)
    e.preventDefault()
    $('input:visible:not(:button), select:visible', thisForm).each(function(k, v) {
      if (!$("input.calendar_button").length) formIsValid = true
      else{
        if(false == validateField($(v)) && $(v).is(':visible')) {
          formIsValid = false
        }
      }
    })
    if (formIsValid) {
      switch (btn.attr('id')) {
        case 'ButtonPrint':
          // remove friendly text from print
          $('.marked').popover('hide')
          $('.popover').remove()
          funcPrint()
        break
        case 'ButtonSaveAndComplete':
          completeStamp(EmployeeStamp)
          $('.marked').popover('hide')
          $('.popover').remove()
          funcSaveAndComplete()
        break
      }
    }
    else {
        $("html, body").animate({ scrollTop: 0 }, "slow")
    }
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

})
