if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function(callback, thisArg) {
        thisArg = thisArg || window
        for (let i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this)
        }
    }
}

const displayedSections = function(sections) {
    'use strict'
    let hidden = 0
    sections.forEach(function(s) {
        if (s.offsetParent === null) {
            hidden++
        }
    })
    return {
        hidden: hidden,
        total: sections.length,
    }
}

const toggleControllers = function(adder, remover, targets, marker) {
    'use strict'
    if (marker.value >= displayedSections(targets).total) {
        adder.style.display = 'none'
    }
    if (displayedSections(targets).hidden > 0) {
        remover.style.display = 'block'
    }
    if (displayedSections(targets).hidden >= displayedSections(targets).total) {
        remover.style.display = 'none'
    }
    if (marker.value < displayedSections(targets).total) {
        adder.style.display = 'block'
    }
}

const addSections = function(adder, remover, targets, marker) {
    'use strict'
    const sections = displayedSections(targets)
    if (sections.hidden > 0) {
        targets[sections.total-sections.hidden].style.display = 'block'
        marker.value = (displayedSections(targets).total-displayedSections(targets).hidden)
    }
    toggleControllers(adder, remover, targets, marker)
}

const removeSections = function(remover, adder, targets, marker) {
    'use strict'
    const sections = displayedSections(targets)
    if (sections.hidden < sections.total) {
        const targetSection = targets[marker.value]
        targetSection.style.display = 'none'
        targetSection.querySelectorAll('input, select').forEach(function(f) {
            let hasNone = false
            if(f.type == 'select-one') {
                f.querySelectorAll('option').forEach(function(opt) {
                    if (opt.value == 'Z') {
                        hasNone = true
                    }
                })
            }
            if (hasNone) {
                f.value = 'Z'
                return
            }
            f.value = ''
        })
    }
    toggleControllers(adder, remover, targets, marker)
}

const showFilledSections = function(section, marker) {
    'use strict'
    section.forEach(function(section, idx) {
        if (marker.value > 0 && idx < marker.value) {
            section.style.display = 'block'
        }
    })
}

document.onreadystatechange = function() {
    // show filled out sections
    const educSections = document.querySelectorAll('.additional-education')
    const educSectionMarker = document.querySelector('[name$=".education_sections"]')
    showFilledSections(educSections, educSectionMarker)
    
    // add education section controls
    toggleControllers(document.getElementById('add-education'), 
        document.getElementById('remove-education'), 
        educSections, 
        educSectionMarker)
    // add education section toggling
    document.getElementById('add-education').addEventListener('click', function(e) {
        const marker = document.querySelector('[name$=".education_sections"]')
        marker.value = marker.value + 1
        addSections(this, 
            document.getElementById('remove-education'), 
            document.querySelectorAll('.additional-education'), 
            marker)
        
    })
    // remove education section toggling
    document.getElementById('remove-education').addEventListener('click', function(e) {
        const marker = document.querySelector('[name$=".education_sections"]')
        marker.value = marker.value - 1
        removeSections(this,
            document.getElementById('add-education'),
            document.querySelectorAll('.additional-education'),
            marker)
    })
    // show filled employment sections
    const empSections = document.querySelectorAll('.additional-employment')
    const empSectionMarker = document.querySelector('[name$=".employment_sections"]')
    showFilledSections(empSections, empSectionMarker)
    // previous employement section controls
    toggleControllers(document.getElementById('add-employment'), 
        document.getElementById('remove-employment'), 
        empSections, 
        empSectionMarker)
    // add employment section toggling
    document.getElementById('add-employment').addEventListener('click', function(e) {
        const marker = document.querySelector('[name$=".employment_sections"]')
        marker.value = marker.value + 1
        addSections(this, 
            document.getElementById('remove-employment'), 
            document.querySelectorAll('.additional-employment'), 
            marker)
        
    })
    // remvoe employment section toggling
    document.getElementById('remove-employment').addEventListener('click', function(e) {
        const marker = document.querySelector('[name$=".employment_sections"]')
        marker.value = marker.value - 1
        removeSections(this,
            document.getElementById('add-employment'),
            document.querySelectorAll('.additional-employment'),
            marker)
    })
}
