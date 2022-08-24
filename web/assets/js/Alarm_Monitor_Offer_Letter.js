/*
 * Heavily customized offer letter specifically requested for Precise
 * copy this script to your project and modify to fit your needs.
 * 2021-04-27 | jjucutan | development
 */

const LONG_DATE = 'MMMM DD, YYYY'
const IS_COMPLETED = true

// displays the contents with parsed merge strings
// @param element template - where the raw content to be parsed
// @param element targetContainer - where the parsed contents are displayed
// @param object data - variables that template uses
const render = function(template, targetContainer, data) {
  "use strict"
  // get unescaped html string
  const str = template.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  const cleanedStr = str.replace(/>[\n\t ]+</g, "><").replace(/\n\s+|\n/g, "").trim()
  // parse template
  const html = ejs.render(cleanedStr, data)
  // display parsed template
  targetContainer.innerHTML = html
}

const getFactor = function(multiplicant, multiplier) {
  "use strict"
  const multiplicantNum = Number(multiplicant)
  if (multiplicantNum == NaN) {
    return 0
  }
  return multiplicantNum * multiplier
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
  const elems = offerContainer.querySelectorAll(containerClass)
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
    // replace elem with new text
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

const offerContainer = thisForm.querySelector('#offer-container')

$(window).on('load', function() {
  // set heading date if not form not yet completed
  const headingDate = thisForm.querySelector('[name$=".a01_Date"]')
  if (!headingDate.readOnly) {
    headingDate.value = moment().format(LONG_DATE)
  }
  DATA['todate'] = headingDate.value
  render(
    thisForm.querySelector('#fragment-1'),
    offerContainer,
    DATA
  )

  // format numbers to 2 decimal places
  offerContainer.querySelectorAll('.is-currency').forEach(function(rate) {
    formatFloat(rate)
  })

  // parse dates to long format
  formatDateContents('.long-date', LONG_DATE)

  // update article by vowel
  articleDetect('.article-content', function(str) {
    return dotTrimmer(str)
  })

  // field map with dynamic contents (incomplete)
  if (!headingDate.readOnly) {
    offerContainer.querySelectorAll('[data-mergestring]').forEach(function(v) {
      thisForm.querySelector('[name$=".' + v.dataset.mergestring + '"]').value = v.innerText
    });
  }
  else { // field map with dynamic contents (completed)
    offerContainer.querySelectorAll('[data-mergestring]').forEach(function(v) {
      v.innerText = thisForm.querySelector('[name$=".' + v.dataset.mergestring + '"]').value
    });
  }
  $('.modal').hide()
})
