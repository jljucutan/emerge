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
            showOn: ['1','2']
        },
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
        if (c.showOn.indexOf(field.value) < 0) {
            section.querySelectorAll('input, select').forEach(function(f) {
                if (f.type == 'button' || f.type == 'hidden') {
                    return
                }
                if (f.type == 'checkbox') {
                    f.checked = false
                    return
                }
                f.value = ''
            })
            section.style.display = 'none'
            return 
        }
        section.style.display = 'flex'
        return
    })
}

document.onreadystatechange = function() {
    const isVaccinated = document.querySelector('[name$=".IsVaccinated"]')
    isVaccinated.addEventListener('change', function() {
        toggleSection(this)
    })
    toggleSection(isVaccinated)
    setInterval(function() {
        const uploadContainer = document.getElementById('upload-container')
        const imgUrl = document.querySelector('[name$=".UploadDocument"]').value
        // update image url flag if new one is uploaded
        if (uploadContainer.dataset.imgUrl == imgUrl) {
            return
        }
        // set image url flag if not set
        if (!uploadContainer.dataset.imgUrl) {
            uploadContainer.dataset.imgUrl = imgUrl
        }
        // update image url flag if new one is uploaded
        // if (uploadContainer.dataset.imgUrl == imgUrl) {
            // return
        // }
        uploadContainer.dataset.imgUrl = imgUrl
        uploadContainer.innerHTML = ''
        if (!imgUrl.length) {
            return
        }
        const obj = document.createElement('object')
        obj.style.width = '100%'
        obj.style.height = '100%'
        obj.style.display = 'block'
        const fileArr = imgUrl.split('.')
        const ext = fileArr[fileArr.length-1]
        console.log(ext)
        if (ext == 'pdf') {
            obj.style.height = '800px'
        }
        const urlPadding = (imgUrl.indexOf('eprise') >= 0) ? '/..' : '/eprise'
        obj.data = window.location.origin+urlPadding+imgUrl
        uploadContainer.appendChild(obj)
    }, 1000)
}
