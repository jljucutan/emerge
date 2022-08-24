/*
 * Heavily customized offer letter specifically requested for Precise
 * copy this script to your project and modify to fit your needs.
 * 2020-07-13 | jjucutan | created script
 * 2020-07-15 | jjucutan | added article detector
 * 2020-07-16 | jjucutan | added currency formatter
 */

const LONG_DATE = 'MMMM DD, YYYY'
const IS_COMPLETED = true

// config file reader
const fetchConfig = function(file, callback) {
  "use strict"
  const rawFile = new XMLHttpRequest()
  rawFile.overrideMimeType("application/json")
  rawFile.open("GET", file, true)
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText)
    }
  }
  rawFile.send(null)
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
// Copy rendered html contents to hidden paragraph field
const populateContents = function(config, completed) {
  "use strict"
  JSON.parse(config).fields.forEach(function(item) {
    if (completed) {
      let contents = thisForm.querySelector('[name$="' + item.targetField + '"]').value
      // replace html line breaks with c style line break
      if (/[\n\r]/g.test(contents)) {
        contents = contents.replace(/[\n\r]/g, '<br>')
      }
      document.getElementById(item.content).innerHTML = contents
      return
    }
    let contents = document.getElementById(item.content).innerHTML.trim()
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

const formatCurrency = function(containerClass, cb) {
  "use strict"
  const elems = thisForm.querySelectorAll(containerClass)
  elems.forEach(function(item) {
    // get unformatted text
    let content = Number(item.innerText.replace(/[,$]/g, ''))
    // if currency is invalid, 0
    if (isNaN(content)) {
      content = 0
    }
    content = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(content)
    // run optional callback
    if (cb) {
      content = cb(content)
    }
    // replace elem with (parsed) currency
    item.parentNode.replaceChild(document.createTextNode(content), item)
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

// detects if value starts with vowel and prepend proper articles
const articleDetect = function(containerClass, cb) {
  "use strict"
  const elems = thisForm.querySelectorAll(containerClass)
  elems.forEach(function(item) {
    // get unformatted text
    let content = item.innerText
    // default article to consonant
    let article = 'a'
    // if has vowel, change article
    if (content.length && /^[aeiouAEIOU].*/.test(content)) {
      article = 'an'
    }
    // append article to word
    content = article + ' ' + content
    // run optional callback
    if (cb) {
      content = cb(content)
    }
    // replace elem with (parsed) date
    item.parentNode.replaceChild(document.createTextNode(content), item)
  })
}

$(window).on('load', function() {
  // set heading date if not form not yet completed
  if (!$('#today').prop('readonly')) {
    $('#today').val(moment().format(LONG_DATE))
  }
  $('#todays-date').text($('#today').val())

  // parse dates to long format
  formatDateContents('.long-date', LONG_DATE)

  // update article by vowel
  articleDetect('.article-content', function(str) {
    return dotTrimmer(str)
  })

  // format long currencies
  formatCurrency('.currency')

  // get fields config from config path and populate hidden fields
  fetchConfig(CONFIG_PATH, function(config) {
    // readonly hidden today's field indicates completed
    if ($('#today').prop('readonly')) {
      populateContents(config, IS_COMPLETED)
      return
    }
    populateContents(config)
  })
  $('.modal').hide()
})
