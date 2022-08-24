/*
 * Heavily customized offer letter specifically requested for Precise
 * copy this script to your project and modify to fit your needs.
 * 2020-07-13 | jjucutan | created script
 * 2020-07-15 | jjucutan | added article detector
 * 2020-10-01 | jjucutan | strip i tags as these are not rendered properly on pdf
 * 2020-12-01 | jjucutan | added float parser for number formating
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
    // strip italic tags
    contents = contents.replace(/<\s*[\/]?i>/gi, '')
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

const getEpsilon = function() {
  "use strict"
  let e = 1.0;
  while ( ( 1.0 + 0.5 * e ) !== 1.0 )
    e *= 0.5;
  return e;
}

const formatFloat = function(el) {
  "use strict"
  let num = Number(el.innerText.replace(/[$]+/g, ''))
  if (num == NaN) {
    el.innerText = '$0.00'
    return
  }
  num = (Math.round((num + (Number.EPSILON || getEpsilon())) * 100) / 100).toFixed(2)
  el.innerText = '$' + num
  return
}

$(window).on('load', function() {
  // set heading date if not form not yet completed
  if (!$('#today').prop('readonly')) {
    $('#today').val(moment().format(LONG_DATE))
  }
  $('#heading-date').text($('#today').val())

  // parse dates to long format
  formatDateContents('.long-date', LONG_DATE)

  // format numbers to 2 decimal places
  thisForm.querySelectorAll('#hourly-rate-1, #hourly-rate-2, #hourly-rate-3').forEach(function(rate) {
    formatFloat(rate)
  })

  // update article by vowel
  articleDetect('.article-content', function(str) {
    return dotTrimmer(str)
  })

  // get fields config from config path and populate hidden fields
  fetchConfig(CONFIG_PATH, function(config) {
    if (!$('#today').prop('readonly')) {
      populateContents(config)
      return
    }
    populateContents(config, IS_COMPLETED)
  })
  $('.modal').hide()
})
