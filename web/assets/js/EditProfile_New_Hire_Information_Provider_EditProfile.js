if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this)
        }
    }
}

document.querySelectorAll('input, textarea, select').forEach(function(field) {
    switch(field.type) {
        case 'text':
        field.classList.add('lifesuite__text-input')
        break
        case 'textarea':
        field.classList.add('lifesuite__textarea-input')
        break
        case 'select-one':
        field.classList.add('lifesuite__select-input')
        break
    }
})

document.onreadystatechange = function() {
    'use strict'
}