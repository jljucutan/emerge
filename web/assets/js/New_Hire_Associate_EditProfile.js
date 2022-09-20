// Created for New Hire Associate provider page
// 2022-09 | jjucutan 

document.onreadystatechange = function() {
    'use strict'
    // set default value for car stipend frequency
    const Car_Stipend_Frequency = document.querySelector('[name$=".Car_Stipend_Frequency"]')
    if (CAR_STIPEND_ELIGIBILITY == 'Yes' && !Car_Stipend_Frequency.value.length) {
        Car_Stipend_Frequency.value = '1st Check of Month'
    }
    // display cooper union section
    if (JOBCODE_UNION == 'Yes' && OPCO == 'Cooper Electric') {
        document.querySelectorAll('.cooper-section').forEach((cs) => {
            cs.style.display = 'table-row'
        })
    }
    // calculate base pay based on compensation type
    const perPayMultiplied = function() {
        const basePayNum = Number(document.querySelector('[name$=".Annual_Salary"]').value)
        switch(document.querySelector('[name$=".Compensation_Type"]').value) {
            // only salaried has multiplier for now
            case 'Salaried':
                document.querySelector('[name$=".Per_Pay_Amount"]').value = basePayNum * 26
            break
        }
    }
    // calculate per pay on load
    perPayMultiplied()
    // calculate per pay on compensation type change
    document.querySelector('[name$=".Compensation_Type"]').addEventListener('change', function() {
        perPayMultiplied()
    })
    // calculate per pay on pay amount input
    document.querySelector('[name$=".Salary_Amount"]').addEventListener('change', function() {
        perPayMultiplied()
    })
}

const VALIDATION_FUNCS = {}

REQUIRED_FIELDS.forEach(function (fieldName) {
    VALIDATION_FUNCS['func_'+fieldName] = function (formobject){ 
        if(self.eFormRequiredField){ 
            if(eFormRequiredField(GetValue(document.querySelector(`[name$="${fieldName}"]`)), fieldName, fieldName)==false) 
            bRet = false 
        } else {  
            if(self.IsValidationEnabled){ 
                if (IsValidationEnabled()){ 
                    var sMessage = 'Error trying to validate against function eFormRequiredField\nFunction not found for validation of' 
                    if (self.AddError) 
                        AddError(fieldName,sMessage,'') 
                    else 
                        alert(sMessage) 
                    bRet=false 
                } 
            } 
        } 
    }

})

function funcCustomOnSubmitCallback(formobject){ 
    for (let [_, fn] of Object.entries(VALIDATION_FUNCS)) {
        fn(formobject)
    }
}