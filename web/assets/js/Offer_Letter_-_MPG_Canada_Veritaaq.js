/*
 * Heavily customized offer letter specifically requested for Precise
 * copy this script to your project and modify to fit your needs.
 * 2020-07-27 | jjucutan | created script
 */

const LONG_DATE = 'MMMM DD, YYYY'
const SHORT_DATE = 'MM/DD/YYYY'
const IS_COMPLETED = true

let fieldsConfig = {}

// config file reader
const fetchConfig = function(file, callback) {
  "use strict"
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.overrideMimeType("application/json")
    xhr.open("GET", file, true)
    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.responseText)
      }
      else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        })
      }
    }
    xhr.onerror = function() {
      reject({
        status: this.status,
        statusText: xhr.statusText
      })
    }
    xhr.send(null)
  })
}
// foreach poly
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window
        for (let i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this)
        }
    }
}

// parse element to simple text value
const nodeToString = function(el) {
  "use strict"
  let input = el.querySelector('input')
  if (input) {
    el.parentNode.replaceChild(document.createTextNode(input.value.trim()), el)
    return
  }
  el.parentNode.replaceChild(document.createTextNode(el.innerText.trim()), el)
}

// Copy rendered html contents to hidden paragraph field
const populateContents = function(config) {
  "use strict"
  config.fields.forEach(function(item) {
    let container = document.getElementById(item.content).cloneNode(true)
    container.querySelectorAll('span').forEach(function(c) {
      nodeToString(c)
    })
    let contents = container.innerHTML.replace(/\t/, '').replace(/\r?\n|\r/, '').trim()
    // replace html line breaks with c style line break
    if (/<br\s*[\/]?>/gi.test(contents)) {
      let c = contents.split('<br>')
      // clean up spacing for each line
      contents = c.map(function(i) {
        return i.trim()
      })
      // put back together as formatted line breaks
      contents = contents.join('\r\n')
    }
    thisForm.querySelector('[name$="' + item.targetField + '"]').value = contents
  })
}

const formatDateContents = function(containerClass, format) {
  "use strict"
  // select all containing dates
  const elems = thisForm.querySelectorAll(containerClass)
  elems.forEach(function(item) {
    // get unformatted text
    let textDate = item.innerText
    // if has text content, format it
    if (textDate.length) {
      textDate = moment(textDate).format(format)
    }
    // replace elem with (parsed) date
    item.parentNode.replaceChild(document.createTextNode(textDate), item)
  })
}

const dotTrimmer = function(str) {
  "use strict"
  let s = str
  if (/\.$/.test(str)) {
    s = str.replace(/\.$/, '')
  }
  return s
}

const mockFields = function(config, cb) {
  "use strict"
  config.mergeFields.forEach(function(item) {
    const el = document.createElement('input')
    el.setAttribute('type', item.type)
    el.setAttribute('data-realfield', item.realField)
    el.setAttribute('class', 'lifesuite__text-input')
    el.value = thisForm.querySelector('[name$=".' + item.realField + '"]').value
    if (config.disableFields) {
      el.disabled = true
    }
    if (item.readonly) {
      el.readOnly = true
    }
    if (thisForm.querySelectorAll('.calendar_button').length < 1) {
      el.disabled = true
    }
    if (item.isDateField) {
      jQuery(el).datepicker({
        onSelect: function() {
          jQuery('[name$=".' + jQuery(this).data('realfield') + '"]').val(jQuery(this).val())
        }
      })
    }
    const frag = document.createDocumentFragment()
    frag.appendChild(el)
    const dataField = thisForm.querySelector('[data-field="' + item.dataField + '"]')
    dataField.innerHTML = ''
    dataField.appendChild(frag)
  })
  if (cb) {
    cb()
  }
}

const updateRealFields = function() {
  "use strict"
  const name = this.dataset.realfield
  const realField = thisForm.querySelector('[name$=".' + name + '"]')
  realField.value = this.value
}

$(window).on('load', function() {

  fetchConfig(FIELDS_CONFIG_PATH).then(function(data) {
    fieldsConfig = JSON.parse(data)
    if (IS_NEWHIRE) {
      fieldsConfig.disableFields = true
    }
    mockFields(fieldsConfig, function() {
      // mock fields event update real field
      thisForm.querySelectorAll('[data-realfield]').forEach(function(field) {
        field.addEventListener('keyup', updateRealFields)
        field.addEventListener('blur', updateRealFields)
      })
    })
  }).catch(function(err) {
    console.log(err)
  })
  disableCalButton($('.disable-date'))
  $('.modal').hide()
  thisForm.querySelector('#ButtonPrint').addEventListener('click', function() {
    if($('.calendar_button').length>0) {
      populateContents(fieldsConfig)
    }
    funcPrint()
  })
  if($('#ButtonSaveAndComplete').length>0){
    thisForm.querySelector('#ButtonSaveAndComplete').addEventListener('click', function() {
      populateContents(fieldsConfig)
      funcSaveAndComplete()
    })
  }
  if($('#ButtonSave').length>0){
    thisForm.querySelector('#ButtonSave').addEventListener('click', function() {
      populateContents(fieldsConfig)
      void(funcSave())
    })
  }
})
