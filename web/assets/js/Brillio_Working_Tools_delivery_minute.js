document.onreadystatechange = () => {
    'use strict'
    // sync fields input
    CONFIG.fieldPairs.forEach(pairs => {
        ['blur', 'keyup', 'paste'].forEach(evt => {
            const enField = pairs[0]
            const spField = pairs[1]
            document.querySelector(`[name$="${enField}"]`).addEventListener(evt, e => {
                document.querySelector(`[name$="${spField}"]`).value = e.target.value
            })
            document.querySelector(`[name$="${spField}"]`).addEventListener(evt, e => {
                document.querySelector(`[name$="${enField}"]`).value = e.target.value
            })
        })
    })
}
