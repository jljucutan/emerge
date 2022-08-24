const extract = function(name) {
  'use strict'
  const choices = $('[name$=".' + name + '"]')
  let checked = false
  let val = ''
  $.each(choices, function(k, v) {
    if ($(v).is(':checked')) {
      val = $(v).val()
      checked = true
    }
  })
  return {
    "isChecked": checked,
    "checkVal": val,
  }
}

const process = function(attrType, attrs) {
  'use strict'
  let show = false
  switch (attrType) {
    // requires that all options should match
    case 'all':
      show = true
      // get all required radio or checkboxes
      $.each(attrs, function(kreqs, reqs) {
        // get each of required checkboxes or radio
        $.each(reqs, function(kreq, vreq) {
          // break if one of the checkboxes is not checked
          if (!extract(kreq).isChecked) {
            show = false
          }
          if (extract(kreq).isChecked && extract(kreq).checkVal != vreq) {
            show = false
          }
        })
      })
      break
      // will pass if any options meet the requirements
    case 'any':
      show = false
      // get all required radio or checkboxes
      $.each(attrs, function(kreqs, reqs) {
        // get each of required checkboxes or radio
        $.each(reqs, function(kreq, vreq) {
          if (extract(kreq).isChecked && extract(kreq).checkVal == vreq) {
            show = true
          }
        })
      })
      break
  }
  return show
}

const toggleSections = function(config, cb) {
  'use strict'
  $.each(config, function(id, attrs) {
    const show = process(attrs.requireType, attrs.requires)
    if (show) {
      $(document.getElementById(id)).removeClass('hide')
      return
    } 
    $(document.getElementById(id)).addClass('hide')
  })
  if (!!cb) {
    cb()
  }
}
