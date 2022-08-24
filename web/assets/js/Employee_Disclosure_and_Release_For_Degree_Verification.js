const populateFullName = function(first, mid, last) {
    try {
        document.querySelector('[name$=".FullName"]').value = first.trim() + ' ' + mid.trim() + ' ' + last.trim()
    }
    catch(err) {
        console.warn(err)
    }
}
const loadUniversities = function(cfg) {
    const xReq = new XMLHttpRequest()
    let selectedIdx = 0
    xReq.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const options = document.createDocumentFragment()
            const schools = JSON.parse(this.responseText)
            schools.list.forEach(function(school, idx) {
                const option = document.createElement('option')
                option.value = school.value
                option.innerText = school.text
                if (document.querySelector('[name$=".SchoolCode"]').value == school.value) {
                    option.setAttribute('selected', 'selected')
                }
                options.append(option)
            })
            document.getElementById('school-dropdown').append(options)
        }
    }
    xReq.open('GET', cfg)
    xReq.send(null)
}
loadUniversities(UNIVERSITIES)

document.onreadystatechange = function() {
    const fullNameFields = document.querySelectorAll('[name$=".FirstName"], [name$=".Middle"], [name$=".LastName"]')
    fullNameFields.forEach(function(f) {
        ['keyup', 'blur', 'paste'].forEach(function(e) {
            f.addEventListener(e, function() {
                populateFullName(fullNameFields[0].value, fullNameFields[1].value, fullNameFields[2].value)
            })
        })
    })
    populateFullName(fullNameFields[0].value, fullNameFields[1].value, fullNameFields[2].value)
    document.getElementById('school-dropdown').addEventListener('change', function(e) {
        const schoolDropdown = document.getElementById('school-dropdown')
        document.querySelector('[name$=".SchoolCode"]').value = e.target.value
        document.querySelector('[name$=".SchoolName"]').value = schoolDropdown.options[schoolDropdown.selectedIndex].text
    })
}
