/**
 * CREATED 2022-04-20
 * CHANGE LOGS
 * 
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

var isAnyPrivacyStatementLinksChecked = function() { 
    var isValid = true; 
    var message = "At least one (1) PayPal Acknowledgement of Venmo FTC Consent Order must be reviewed";

    if (!$('input[type="checkbox"][name$="_Chk"]:checked').length) {
      isValid = false; 
    }
    return { 
        "isValid": isValid, 
        "message": message 
    } 
}; 

$(document).on('ready', function() {
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
      [1,'hidden_pg1']
    ]
    let arrParts2 = [ 
      [1,'hidden_pg2']
    ]
    document.getElementById('signature').style.background = '#ccc'
    $(".fancyBox").each(function(index, object){
      object.onclick = null;
    });
    //Send (ID of the div to hide,ID of the div to show,Parts to get the offer letter) 
    showCompletedOfferLetter('incomplete','complete',arrParts)
    showCompletedOfferLetter('incomplete2','complete2',arrParts2)
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
      });
      if (false == validateField($('input[type="checkbox"][name$="FTC_English_Chk"]'), false, isAnyPrivacyStatementLinksChecked)) {
        formIsValid = false
      }
      if (formIsValid) {
        switch (btn.attr('id')) {
          case 'ButtonPrint':
            // remove friendly text from print
            // $('.marked', '#offer-letter-body').popover('hide')
            $('.popover', '#offer-letter-body').remove()
            funcPrint()
          break
          case 'ButtonSaveAndComplete':
            // $('.marked', '#offer-letter-body').popover('hide')
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
        angular.element('#divLoader').hide();
    }, 500);
})
