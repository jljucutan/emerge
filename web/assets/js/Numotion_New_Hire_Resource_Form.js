const getConfig = function() {
    'use strict'
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', CONFIG_PATH, true)
        xhr.onreadystatechange = function() {
            if (xhr.readyState == xhr.DONE) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText))
                }
                else {
                    reject(Error(xhr.statusText))
                }
            }
        }
        xhr.onerror = function() {
            reject(Error('network error'))
        }
        xhr.send(null)
    })
}

document.onreadystatechange = function() {

    getConfig().then(function(res) {
        res.jobTitleList.forEach(function(cfg) {
            cfg.targetFields.forEach(function(f) {
                const field = document.querySelector('[name$=".' + f.field + '"]')
                if (EVENT_JOB_TITLE.indexOf(cfg.jobTitleCat) >= 0) {
                    switch(field.type) {
                        case "text":
                            if (field.value) {
                                return
                            }
                            field.value = f.value
                        break
                        case "textarea":
                            if (field.value) {
                                return
                            }
                            field.value = f.value
                        break
                        case "select-one":
                            if (field.value) {
                                return
                            }
                            field.value = f.value
                        break
                        case "checkbox":
                            field.checked = f.checked
                        break
                    }
                }
            })
        })
    })
    .catch(function(err) {
        console.warn(err)
    })
}
