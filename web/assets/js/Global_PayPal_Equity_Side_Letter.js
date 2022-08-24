/**
 * CHANGE LOGS
 * For date localization see https://en.wikipedia.org/wiki/Language_localisation
 * 2021-09-09 | jjucutan | created initial version ref SERVICES-43596
 */
const render = function(template, markup, data) {
  'use strict'
  // get unescaped html string
  const str = template.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  const cleanedStr = str.replace(/>[\n\t ]+</g, "><").replace(/\n\s+|\n/g, "").trim()
  // parse template
  const html = ejs.render(cleanedStr, data)
  // get offerclause instance id
  const tmplID = template.id[template.id.length-1]
  document.getElementById(markup).innerHTML = '<div class="offerClause' + tmplID + '">' + html + '</div>'
}

const completeStamp = function(id) {
  'use strict'
  if(id.length) {
    document.getElementById(id).value = 0
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
    'use strict'
    const CHAR_LENGTH = 16
    let result = ''
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let charactersLength = characters.length
    for ( var i = 0; i < CHAR_LENGTH; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

const cfgPromise = $.getJSON(CONFIG)
const tmplPromise = $.get(BASEPATH + '/js/templates/' + EventLocationField.value + '.ejs')

$(document).on('ready', function() {
  // fill current date if it hasn't been filled yet
  if (document.getElementById('Current_Date').value.length < 1) {
    document.getElementById('Current_Date').value = moment().format('YYYY-MM-DD')
  }

  data.Current_Date = moment(document.getElementById('Current_Date').value).format('YYYY MMMM DD')
  $.when(cfgPromise)
    .fail(function() {
      console.warn('failed loading config')
    })
    .then(function(cfg) {
      let locale = 'en-US'
      if (cfg[EventLocationField.value]) {
        locale = cfg[EventLocationField.value].locale
      }
      data.Current_Date_Intl = moment(document.getElementById('Current_Date').value).locale(locale).format('YYYY MMMM DD')
      // render data
      render(document.getElementById('fragment-1'), 'markup1', data)
      render(document.getElementById('fragment-2'), 'markup2', data)
      render(document.getElementById('fragment-3'), 'markup3', data)
      render(document.getElementById('fragment-4'), 'markup4', data)
    })
    .done(function() {
      // populate hidden fields
      makeOfferLetter('hidden_pg1', 'offerClause1')
      makeOfferLetter('hidden_pg2', 'offerClause2')
      makeOfferLetter('hidden_pg3', 'offerClause3')
      makeOfferLetter('hidden_pg4', 'offerClause4')
    })

  $.when(tmplPromise)
    .fail(function() {
      console.warn('failed to load template')
      document.getElementById('hidden_pg5').value = ''
    })
    .then(function(tmpl) {
      let tmplStr = ''
      const intlTmpl = document.createElement('div')
      intlTmpl.id = 'fragment-5'
      if (tmpl.length) {
        tmplStr = tmpl
      }
      intlTmpl.innerHTML = tmplStr
      render(intlTmpl, 'markup5', data)
    })
    .done(function() {
      makeOfferLetter('hidden_pg5', 'offerClause5')
    })

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
        $('.marked', '#offer-letter-body').each(function(k,v) {
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
      $('#signature,startDate, #recruiter_name').prop('onfocus',null).css('background','#ccc')
      return false
    }

    if (!isRecruiter && isCoordinator && parseInt($('#CoordinatorStamp').val()) === 0) { 
      $('#signature, #sv, #full_name, #recruiter_name').val('')
      $('#CoordinatorStamp').val(1)
      setTimeout(function() {
        $('.signDate, .signDate2').val('')
      }, 500)
    }

    if (isRecruiter && parseInt($('#RecruiterStamp').val()) == 0) { 
      $('#recruiter_name').val( $('#SignerMan').val())
      $('#signature, #sv, #full_name').val('')
      $('#RecruiterStamp').val(1)
      setTimeout(function() {
        $('.signDate, .signDate2').val('')
      }, 500)
    }

    if (isEmployee && parseInt($('#EmployeeStamp').val()) ==0) {
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
            $('.marked', '#offer-letter-body').popover('hide')
            $('.popover', '#offer-letter-body').remove()
            funcPrint()
          break
          case 'ButtonSaveAndComplete':
            isCoordinator && completeStamp('CoordinatorStamp')
            isRecruiter && completeStamp('RecruiterStamp')
            isEmployee && completeStamp('EmployeeStamp')
            $('.marked', '#offer-letter-body').popover('hide')
            $('.popover', '#offer-letter-body').remove()
            funcSaveAndComplete()
          break
        }
      }
      else {
          $("html, body").animate({ scrollTop: 0 }, "slow")
      }
  })
  setTimeout(function() {
    $(".modal").hide()
  }, 1000)
})
angular.element(window).on('load', function() {
    setTimeout(function() {
        angular.element('#divLoader').hide()
    }, 500)
})
