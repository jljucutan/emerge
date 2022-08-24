if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this)
    }
  }
}

const loadfile = function(tmpl) {
  'use strict'
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', tmpl, true)

    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText)
      }
      else {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        })
      }
    }
    xhr.onerror = function() {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        })
    }
    xhr.send(null)
  })
}

const applyAttributes = function(field, attrs) {
  'use strict'
  field.setAttribute('data-title', attrs.label)
  if (field.type == 'radio') {
    field.setAttribute('data-targetlabel', '#' + attrs.label)
  }
  if (attrs.validation) {
    field.setAttribute('data-validation', attrs.validation)
  }
}

const checkDisplayState = function(attrs) {
  'use strict'
  if (attrs.hideByEventCountry && attrs.hideByEventCountry.indexOf(EVENT_COUNTRY) < 0) {
    return false
  }
  return true
}

document.onreadystatechange = function() {
  loadfile(TEMPLATE_PATH).then(function(templateStr) {
    loadfile(FIELDS_CONFIG_PATH).then(function(fieldsConfig) {
      const sections = JSON.parse(fieldsConfig).sections
      const frag = document.createDocumentFragment()
      sections.forEach(function(section) {
        let isHidden = false
        let garbage = []
        // single line input and select fields
        if (section.type == 'single-field') {
          isHidden = !checkDisplayState(section)
          const field = document.querySelector('[name$=".' + section.fieldName + '"]')
          applyAttributes(field, section)
          section['field'] = field.outerHTML
          garbage.push(field)
        }
        // single line radio fields
        if (section.type == 'single-field-radio') {
          isHidden = !checkDisplayState(section)
          const field = document.querySelector('[name$=".' + section.fieldName + '"]')
          const section = field.closest('.horizontal_radio_group')
          applyAttributes(field, section)
          section['field'] = field.outerHTML
          garbage.push(field)
        }
        // two column fields section
        if (section.type == 'double-field') {
          isHidden = !checkDisplayState(section)
          section.fields.forEach(function(f) {
            const field = document.querySelector('[name$=".' + f.fieldName + '"]')
            applyAttributes(field, f)
            f['field'] = field.outerHTML
            garbage.push(field)
          })
        }
        if (isHidden) {
          return
        }
        // cleanup rendered fields leftover
        garbage.forEach(function(g) {
          g.remove()
        })
        const html = ejs.render(templateStr, { section: section })
        const div = document.createElement('div')
        div.innerHTML = html
        frag.append(div)
      })
      document.getElementById('provider-contents').append(frag)
    })
    .then(function() {
      document.getElementById('provider-contents').querySelectorAll('input[type="text"], select').forEach(function(f) {
        focusInputLabel($(f))
      })
    })
    .finally(function() {
        // load form when all set
        jQuery('#EditProfile_wrapper').fadeIn();
    })
    .catch(function(err) {
      console.warn(err)
    })
  })
}
