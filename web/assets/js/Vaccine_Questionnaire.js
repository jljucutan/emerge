if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window
        for (let i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this)
        }
    }
}

const sectionsConfig = {
    "IsVaccinated": [
        {
            section: "vaccine-type",
            showOn: "Yes"
        },
        {
            section: "upload",
            showOn: "Yes"
        }
    ]
}

const toggleSection = function(field) {
    'use strict'
    let nem = field.name.split('.')
    let name = nem[nem.length-1]
    if(!sectionsConfig[name]) {
        return
    }
    const cfg = sectionsConfig[name]
    if (!cfg) {
        return
    }
    cfg.forEach(function(c) {
        const section = document.getElementById(c.section)
        if (c.showOn != field.value) {
            section.querySelectorAll('input, select').forEach(function(f) {
                if (f.type == 'button') {
                    return
                }
                f.value = ''
            })
            section.style.display = 'none'
            return 
        }
        section.style.display = 'flex'
    })
}

document.onreadystatechange = function() {
    const isVaccinated = document.querySelector('[name$=".IsVaccinated"]')
    isVaccinated.addEventListener('change', function() {
        toggleSection(this)
    })
    setInterval(function() {
        const uploadContainer = document.getElementById('upload-container')
        const imgUrl = document.querySelector('[name$=".UploadDocument"]').value
        uploadContainer.innerHTML = ''
        if (!imgUrl.length) {
            return
        }
        const img = document.createElement('img')
        img.classList.add('img-fluid', 'img-thumbnail')
        const urlPadding = (imgUrl.indexOf('eprise') >= 0) ? '/..' : '/eprise'
        img.src = window.location.origin+urlPadding+imgUrl
        uploadContainer.appendChild(img)
    }, 1000)
    toggleSection(isVaccinated)
}
