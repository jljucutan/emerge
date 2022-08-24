<script>
//=================================================================
//  Do not customize this block. It will be overwritten.
//=================================================================

////////////////////////////////////////////////////
//  WTFOnBlur
////////////////////////////////////////////////////
function WTFOnBlur(el){
    return eFormRunValidator('OnBlurWTF',el);
}

////////////////////////////////////////////////////
//  WTFOnFocus
////////////////////////////////////////////////////
function WTFOnFocus(el){
    return eFormRunValidator('OnFocusWTF',el);
}

////////////////////////////////////////////////////
//  WTFOnChange
////////////////////////////////////////////////////
function WTFOnChange(el){
    return eFormRunValidator('OnChangeWTF',el);
}

////////////////////////////////////////////////////
//  WTFOnClick
////////////////////////////////////////////////////
function WTFOnClick(el){
    return eFormRunValidator('OnClickWTF',el);
}

////////////////////////////////////////////////////
//  OnFocusWTFEmployee_signature
////////////////////////////////////////////////////
function OnFocusWTFEmployee_signature(el){
    return openESig('modal','over',this);    
}

////////////////////////////////////////////////////
//  OnChangeWTFEmployee_signature
////////////////////////////////////////////////////
function OnChangeWTFEmployee_signature(el){
    return signatureVerification('sv');    
}

////////////////////////////////////////////////////
//  OnFocusWTFEmployer_signature
////////////////////////////////////////////////////
function OnFocusWTFEmployer_signature(el){
    return openESig('modal2','over',this);    
}

////////////////////////////////////////////////////
//  OnChangeWTFEmployer_signature
////////////////////////////////////////////////////
function OnChangeWTFEmployer_signature(el){
    return signatureVerification('sv2');    
}

////////////////////////////////////////////////////
//  OnLoadState_Withholding_WTF
////////////////////////////////////////////////////
function OnLoadMinnesota_Wage_Theft_Form(){
    readOnlySig('signature');
    if (!IS_NEW_HIRE) {
        toggleTargets(
            document.querySelector('[name$=".WTF_Employee_Status_exempt"]'),
            [
                document.querySelector('[name$=".WTF_Employee_Exempt_From_minimum_wage"]'),
                document.querySelector('[name$=".WTF_Employee_Exempt_From_overtime"]'),
                document.querySelector('[name$=".WTF_Employee_Exempt_From_other"]'),
                document.querySelector('[name$=".WTF_Legal_basis_for_exemption"]')
            ]
        );
        toggleTargets(
            document.querySelector('[name$=".WTF_Paid_by_Other_method"]'),
            [document.querySelector('[name$=".WTF_Other_Method"]')]
        );
    }
}

// enable legacy browser support for closest node
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || 
                              Element.prototype.webkitMatchesSelector;
}
if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

(hideUncheckedEPP = function() {
    let EPPs = document.querySelectorAll('[data-epp-group="WTF_Deductions"]');
    for (i = 0; i < EPPs.length; i++) {
        if (EPPs[i].checked === false && EPPs[i].getAttribute('type')==='checkbox') {
            EPPs[i].closest('table').parentElement.style['display'] = 'none';
        }
        if (document.querySelector('[name$=".WTF_Deductions_Other"]').checked === false) {
            document.querySelector('[name$=".WTF_Deductions_Other_text"]').style['display'] = 'none';
        }
    }
})();

// Field specific functions
// toggle fields dependent on checkboxes
const toggleTargets = function(controller, targets) {
    "use strict";
    if (!controller.checked) {
        targets.forEach(function(f) {
            switch(f.type) {
                case "text":
                case "textarea":
                f.value = '';
                f.disabled = true;
                break;
                case "checkbox":
                f.checked = false;
                f.disabled = true;
                break;
            }
        });
        return false;
    }
    targets.forEach(function(f) {
        switch(f.type) {
            case "text":
            case "textarea":
            f.disabled = false;
            break;
            case "checkbox":
            f.disabled = false;
            break;
        }
    });
    return true;
}

const toggleExempts = function(e) {
    toggleTargets(
        document.querySelector('[name$=".WTF_Employee_Status_exempt"]'),
        [
            document.querySelector('[name$=".WTF_Employee_Exempt_From_minimum_wage"]'),
            document.querySelector('[name$=".WTF_Employee_Exempt_From_overtime"]'),
            document.querySelector('[name$=".WTF_Employee_Exempt_From_other"]'),
            document.querySelector('[name$=".WTF_Legal_basis_for_exemption"]')
        ]
    );
}
document.querySelector('[name$=".WTF_Employee_Status_exempt"]').addEventListener('change', toggleExempts);
document.querySelector('[name$=".WTF_Employee_Status_non_exempt"]').addEventListener('change', function(e) {
    setTimeout(function() {
        toggleExempts(e);
    }, 500);
});
document.querySelector('[name$=".WTF_Paid_by_Other_method"]').addEventListener('change', function(e) {
    toggleTargets(e.target, [document.querySelector('[name$=".WTF_Other_Method"]')]);
});
document.querySelector('[name$=".WTF_Deductions_Other"]').addEventListener('change', function(e) {
    toggleTargets(e.target, [document.querySelector('[name$=".WTF_Deductions_Other_text"]')]);
});
</script>
