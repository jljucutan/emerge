/**
 * GENERAL PURPOSE SCRIPT
 * SERVICES-41675
 * 2020-09-10 | jjucutan | initial creation
 */
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector || 
    Element.prototype.webkitMatchesSelector
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this
    do {
      if (Element.prototype.matches.call(el, s)) return el
      el = el.parentElement || el.parentNode
    } while (el !== null && el.nodeType === 1)
    return null
  }
}

const loadConfig = function(config) {
  "use strict"
  const xhr = new XMLHttpRequest()
  return new Promise(function(resolve, reject) {
    xhr.onreadystatechange = function() {
      if (this.readyState != 4) {
        return
      }
      if (this.status >= 200 || this.status < 300) {
        resolve(xhr)
      }
      else {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        })
      }
    }
    xhr.open('GET', config, true)
    xhr.send(null)
  })
}

const toggleDependencies = function(el, cfg) {
  "use strict"
  if (el.value == cfg.requiredValue) {
    cfg.dependencies.forEach(function(dep) {
      MOU.querySelector('[name$=".' + dep + '"]').closest('tr').removeAttribute('hidden')
    })
    return
  }
  cfg.dependencies.forEach(function(dep) {
    const dependency = MOU.querySelector('[name$=".' + dep + '"]')
    dependency.value = ''
    dependency.closest('tr').setAttribute('hidden', 'hidden')
  })
}

loadConfig(MOU_CONFIG).then(function(res) {
  const config = JSON.parse(res.response)
  const cf = 
  config.fields.forEach(function(field) {
    const controller = MOU.querySelector('[name$=".' + field.name + '"]')
    if (!controller) {
      return
    }
    controller.addEventListener('change', function() {
      toggleDependencies(this, field)
    })
    toggleDependencies(controller, field)
  })
}).catch(function(err) {
  console.error(err)
})
