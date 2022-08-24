////////////////////////////////////////////////////
//  SDDOnBlur
////////////////////////////////////////////////////
function SDDOnBlur(el){
    return eFormRunValidator('OnBlurSDD',el);
}

////////////////////////////////////////////////////
//  SDDOnFocus
////////////////////////////////////////////////////
function SDDOnFocus(el){
    return eFormRunValidator('OnFocusSDD',el);
}

////////////////////////////////////////////////////
//  SDDOnChange
////////////////////////////////////////////////////
function SDDOnChange(el){
    return eFormRunValidator('OnChangeSDD',el);
}

////////////////////////////////////////////////////
//  SDDOnClick
////////////////////////////////////////////////////
function SDDOnClick(el){
    return eFormRunValidator('OnClickSDD',el);
}

// various reusaeable functions for SERVICES-42073
// Forms Library - new form - Direct Deposit

// hide/show add/delete account
const updateAccountToggler = function() {
    "use strict";
    const hiddenAccount = thisForm.querySelectorAll('.additional-account.d-none');
    if (!hiddenAccount.length || hiddenAccount.length >= 2) {
        document.getElementById('remove-account').classList.add('d-none');
    }
    const visibleAccount  = thisForm.querySelectorAll('.additional-account:not(.d-none)');
    if (!!visibleAccount.length) {
        document.getElementById('add-account').classList.remove('d-none');
        document.getElementById('remove-account').classList.remove('d-none');
    }
    if (visibleAccount.length >= 2) {
        document.getElementById('add-account').classList.add('d-none');
    }
}
// remove all values from visible fields
const clearSection = function(section) {
    "use strict";
    section.querySelectorAll('input').forEach(function(f) {
        if (f.offsetParent == null) {
            return;
        }
        switch(f.type) {
            case "text":
            f.value = '';
            break;
            case "checkbox":
            f.checked = false;
            break;
        }
        f.disabled = false;
    });
}
// show alert message for net amount
const alertNetAmount = function(show) {
    "use strict";
    if (!!show) {
        alert('You have chosen Net Amount, therefore, you will not be allowed to enter any subsequent accounts.');
    }
}
// used by net amount checkbox, toggle disable related fields
const toggleDisableSection = function(toggler, section) {
    "use strict";
    if (!!toggler.checked) {
        section.querySelectorAll('input').forEach(function(input) {
            switch(input.type) {
                case "text":
                input.value = '';
                break;
                case "checkbox":
                input.checked = false;
                break;
            }
            input.classList.remove('ng-invalid');
            input.disabled = true;
        });
        return true;
    }
    section.querySelectorAll('input').forEach(function(input) {
        if (input.offsetParent == null) {
            return;
        }
        input.disabled = false;
        if (input.type == 'text') {
            input.classList.add('ng-invalid');
        }
    });
    return false;
}
// check if field is filled
const sectionFilled = function(section) {
    "use strict";
    let isFilled = false;
    section.querySelectorAll('input').forEach(function(input) {
        switch(input.type) {
            case "text":
            if (!!input.value.length) {
                isFilled = true;
            }
            break;
            case "checkbox":
            if (!!input.checked) {
                isFilled = true;
            }
            break;
        }
    });
    return isFilled;
}

// show sections that have at least one field filled
// account #2
const account2 = document.getElementById('account-2');
if (sectionFilled(account2)) {
    account2.classList.remove('d-none')
}
// account #3
const account3 = document.getElementById('account-3');
if (sectionFilled(account3)) {
    account3.classList.remove('d-none')
}

// update account togglers after showing/hiding filled account
updateAccountToggler();

// toggle disable 1st checkbox's dependencies
const netAmount1 = thisForm.querySelector('[name$=".a04_net_amount"]');
toggleDisableSection(netAmount1, document.getElementById('account-3'));
toggleDisableSection(netAmount1, document.getElementById('account-2'));
toggleDisableSection(netAmount1, document.getElementById('deposit-amount-1'));
netAmount1.addEventListener('change', function(e) {
    e.preventDefault();
    toggleDisableSection(e.target, document.getElementById('account-2'));
    toggleDisableSection(e.target, document.getElementById('account-3'));
    toggleDisableSection(netAmount1, document.getElementById('deposit-amount-1'));
    alertNetAmount(this.checked);
});

// toggle disable 2nd checkbox's dependencies
const netAmount2 = thisForm.querySelector('[name$=".a10_net_amount"]');
toggleDisableSection(netAmount2, document.getElementById('account-3'));
toggleDisableSection(netAmount2, document.getElementById('deposit-amount-2'));
netAmount2.addEventListener('change', function(e) {
    e.preventDefault();
    toggleDisableSection(e.target, document.getElementById('account-3'));
    toggleDisableSection(e.target, document.getElementById('deposit-amount-2'));
    alertNetAmount(this.checked);
});

// toggle disable 3rd checkbox's dependency
const netAmount3 = thisForm.querySelector('[name$=".a16_net_amount"]');
toggleDisableSection(netAmount3, document.getElementById('deposit-amount-3'));
netAmount3.addEventListener('change', function(e) {
    e.preventDefault();
    toggleDisableSection(e.target, document.getElementById('deposit-amount-3'));
    alertNetAmount(this.checked);
});

const updateAccountsState = function() {
    "use strict";
    // 3rd account net amount checkbox targets 3nd deposit amount
    toggleDisableSection(netAmount3, document.getElementById('deposit-amount-3'));
    // 2nd account net amount checkbox targets 3rd account section
    toggleDisableSection(netAmount2, document.getElementById('account-3'));
    // 2nd account net amount checkbox targets 2nd account section
    toggleDisableSection(netAmount2, document.getElementById('deposit-amount-2'));
    // 1st account net amount checkbox targets 3rd account section
    toggleDisableSection(netAmount1, document.getElementById('account-3'));
    // 1st account net amount checkbox targets 2nd account section
    toggleDisableSection(netAmount1, document.getElementById('account-2'));
    // 1st account net amount checkbox targets 1st account section
    toggleDisableSection(netAmount1, document.getElementById('deposit-amount-1'));
}

// account addition toggling
document.getElementById('add-account').addEventListener('click', function(e) {
    e.preventDefault();
    const additionalAccount = thisForm.querySelectorAll('.additional-account.d-none');
    if (additionalAccount.length) {
        additionalAccount[0].classList.remove('d-none');
        // update sections are are disabled due to net amount chekcbox
        updateAccountsState();
    }
    updateAccountToggler();
});

// account removal toggling
document.getElementById('remove-account').addEventListener('click', function(e) {
    e.preventDefault();
    const additionalAccount = thisForm.querySelectorAll('.additional-account:not(.d-none)');
    if (additionalAccount.length) {
        // sequence is important here
        // clear section before hiding
        clearSection(additionalAccount[additionalAccount.length - 1]);
        // update sections are are disabled due to net amount chekcbox
        updateAccountsState();
        // finally hide/remove section
        additionalAccount[additionalAccount.length - 1].classList.add('d-none');
    }
    updateAccountToggler();
});

// make checkbox behave like radio buttons
const checkboxGroups = thisForm.querySelectorAll('[data-checkbox-group]')
checkboxGroups.forEach(function(rdo) {
    rdo.addEventListener('change', function() {
        let isChecked = this.checked;
        let dataGroup = this.dataset.checkboxGroup;
        const thisGroup = thisForm.querySelectorAll('[data-checkbox-group="' + dataGroup + '"]')
        thisGroup.forEach(function(cg) {
            cg.checked = false;
        });
        this.checked = !!isChecked;
    });
});

// show additional verbiage if has content
if (!!document.getElementById('AdditionalVerbiage').value.length) {
    document.getElementById('additional-verbiage-section').style.display = 'block';
}

// prepopulate company names on html
thisForm.querySelectorAll('.company-name').forEach(function(span) {
    span.innerText = document.getElementById('co_name').value;
});
