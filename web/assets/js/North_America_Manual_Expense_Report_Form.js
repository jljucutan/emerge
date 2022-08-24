/**
 * SERVICES-40482 | 03.26.2020 | jjucutan | separated script from html for simplicity
 * SERVICES-40482 | 03.27.2020 | jjucutan | new version without employer signature
 * SERVICES-40482 | 04.06.2020 | jjucutan | add reimbursement amount to expense type dependent; add calculation for miles vs reimbursement
 */
const completeStamp = function(id) {
    "use strict";
    if(id.length) {
        document.getElementById(id).value = 0;
    }
}

const disableCalButton = function(el) {
    "use strict";
    el.parent().find('input').prop('disabled', 'disabled');
}

const MAX_EXPENSES = 14;
const MIN_EXPENSES = 1;

const reloadTogglers = function() {
    "use strict";
    let hiddenExpenses = $('[data-expense-section]:hidden', sectionsRoot);
    let visibleExpenses = $('[data-expense-section]:visible', sectionsRoot);
    $('#add-expense').show();
    $('#delete-section').show();
    if (visibleExpenses.length >= MAX_EXPENSES) {
        $('#add-expense').hide();
    }
    if (visibleExpenses.length <= MIN_EXPENSES) {
        $('#delete-section').hide();
    }
}

const makeid = function() {
    "use strict";
    const CHAR_LENGTH = 16;
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( var i = 0; i < CHAR_LENGTH; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const calculateReimburse = function() {
    "use strict";
    const MILES_FACTOR = 0.585;
    const target = $(this).data('calculate-reimburse');
    const targetField = thisForm.find('[name$="' +  target + '"]');
    let miles = Number(this.value);
    if (isNaN(miles) || this.value.length < 1) {
        targetField.val('');
        return;
    }
    let reimbursement = (miles * MILES_FACTOR).toFixed(2);
    targetField.val(new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(reimbursement));
    return;
}

let sectionFields;
$.getJSON(document.getElementById('config-path').value).done(function(data) {
    sectionFields = data.sections;
    loadSections();
});

const iterateFields = function(sectionID) {
    "use strict";
    return function(field) {
        let displayField = thisForm.find('[name$=".' + field.name + '"]');
        let attrs = {};
        if (field.fieldType && field.fieldType == 'date') {
            displayField = $('<input class="is-date-field lifesuite__text-input" readonly/>')
                .attr({
                    'name': field.name + '_pseudo_date',
                    'data-title': field.prompt,
                    'data-target-date-field': field.name
                });
        }
        if (field.fieldType && field.fieldType == 'text') {
            attrs = {
                'data-title': field.prompt,
                'id': field.name
            };
            displayField = displayField.attr(attrs).detach();
        }
        if (field.fieldType && field.fieldType == 'multiple') {
            attrs = {
                'data-title': field.prompt,
                'id': field.name
            };
            displayField = displayField.attr(attrs).detach();
        }
        if (field.fieldType && field.fieldType == 'checkbox') {
            displayField = $('<label/>').append(displayField.attr('data-title', field.prompt).detach());
        }
        if (field.validation) {
            displayField.attr('data-validation', field.validation);
        }
        if (field.requireFilled) {
            displayField.attr('data-require-filled', field.requireFilled);
        }
        if (field.disabled) {
            displayField.prop('disabled', 'disabled');
        }
        if (field.calculateReimburse) {
            displayField
                .attr('data-calculate-reimburse', field.calculateReimburse)
                .on('keyup paste blur', calculateReimburse);
        }
        let row = $('<div class="row mb-15" />').append(
            $('<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 padding-top"/>').append(
                $('<label class="control-label lifesuite__input-label lifesuite__input—block"/>').attr('for', field.name).append(field.prompt,':')
            ),
            $('<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12"/>').append(displayField)
        );
        if (field.displayParent) {
            row.attr('data-display-parent', field.displayParent);
        }
        sectionsRoot.find('[data-expense-section="' + sectionID + '"]').append(row);
    }
}

const iterateSections = function(section) {
    "use strict";
    let sectionID = makeid(16);
    const expenseSection = $('<section/>').attr({'data-expense-section': sectionID});
    if (section.sectionTitle.length) {
        expenseSection.append(
            $('<div class="row"/>')
                .append(
                    $('<h5 class="form-heading"/>').append(
                        $('<span/>').append(section.sectionTitle)
                    )
                )
        )
        sectionsRoot.append(expenseSection);
    }
    section.sectionFields.forEach(iterateFields(sectionID));
}

const loadSections = function() {
    "use strict";
    sectionFields.forEach(iterateSections);
    // show all expenses filled out
    sectionsRoot.find('input, select').each(function(k, v) {
        if (v.type == 'checkbox') {
            v.checked && $(v).closest('[data-expense-section]').show();
            return true;
        }
        if (v.value.length > 0) {
            $(v).closest('[data-expense-section]').show();
        }
    });
    // show first expense if nothing is filled yet
    if (sectionsRoot.find('[data-expense-section]:visible').length < 1) {
        sectionsRoot.find('[data-expense-section]').first().show();
    }
    // instantitate datepickers
    $('.is-date-field', thisForm).each(function() {
        let realDateName = $(this).prop('name').replace('_pseudo_date', '');
        let realDate = $('[name$=".' + realDateName + '"]').val();
        const pseudoDate = $(this).formatDatePicker(dateConfig, "USA")
        if (realDate.length) {
            pseudoDate.datepicker('setDate', new Date(realDate));
        }
    });
    // set date defaults
    if($('[name$=".c60_Date"]').val().length) {
        $('[name="c60_Date_pseudo_date"]').datepicker('setDate', new Date($('[name$=".c60_Date"]').val())).datepicker('disable');
    }
    // toggle from to fields
    sectionsRoot.find('[data-display-parent]').each(function() {
        toggleOptionalFields($(this).data('display-parent'));
    });
    reloadTogglers();
    // lazy disable of buttons when form is completed
    if ($('#ButtonSaveAndComplete').length < 1) {
        $('#add-expense, #delete-section, #signature').prop('disabled', true);
        $('.hasDatepicker').datepicker('disable');
        thisForm.find('input:disabled').css('background', '#fff');
    }
    // last event to occur
    $(".modal").hide();
}

// toggleable optional display fields
const arrayHasTheValueOf = function(arr, field) {
    "use strict";
    const EXPENSE_DICT = {
        "Miles_Drive": "Mileage",
        "Reimbursement_Amount": "Mileage",
        "Airfair": "Airfare",
        "Car_Rental_Total": "Car Rental",
        "Hotel_Total": "Hotel",
        "Parking_Total": "Parking",
        "Meals": "Meals",
        "Cellular": "Cellular",
        "Employee_Relations": "Employee Relations",
        "Team_Staff_Events": "Team Staff Events",
        "Business_Meals": "Business Meals",
        "Other": "Other"
    }
    let nem = field.prop('name').split('.');
    let name = nem[nem.length-1].substring(4);
    let expense = EXPENSE_DICT[name]
    if (!expense) {
        return false;
    }
    if (arr.indexOf(expense) < 0) {
        return false;
    }
    return true;
}

const toggleOptionalFields = function(name, voluntary) {
    "use strict";
    const displayController = sectionsRoot.find('[name$=".' + name + '"]');
    const optionalDisplaySection = sectionsRoot.find('[data-display-parent="' + name + '"]');
    // expense types
    if (displayController.prop('multiple') && displayController.val().length > 0) {
        optionalDisplaySection.hide();
        optionalDisplaySection.find('input').each(function() {
            if (arrayHasTheValueOf(displayController.val(), $(this))) {
                $(this).closest('[data-display-parent]').show();
                return;
            }
            if (voluntary) {
                let nem = $(this).val('').prop('name').split('.')
                let eupName = nem[nem.length-1];
                toggleOptionalFields(eupName);
            }
            // finally clear errors on hide
            validateField($(this), true);
        });
        return;
    }
    // show optional from to dates and checkboxes
    if (displayController.is(':text')) {
        if (displayController.val().length < 1) {
            optionalDisplaySection.hide('fast', function() {
                $(this).find('input').each(function(k, v) {
                    if ($(v).hasClass('hasDatepicker')) {
                        const dateField = $(v).datepicker('setDate', null);
                        thisForm.find('[name$=".' + dateField.data('target-date-field') + '"]').val('');
                    }
                    if ($(v).is(':checkbox')) {
                        $(v).prop('checked', false);
                    }
                    if ($(v).prop('type') == 'text') {
                        $(v).val('');
                    }
                    validateField($(v), true);
                });
            });
            return;
        }
        optionalDisplaySection.show();
    }
}

// require when control field is filled
const requireByController = function(el) {
    "use strict";
    if (sectionsRoot.find('[name$=".' + el.data('require-filled') + '"]').val().length < 1) {
        validateField(el.data('validation', null), true);
        return false;
    }
    el.data('validation', 'required');
    return true;
}

$(window).on('load', function() {
    // set default value
    const currentDatePseudo = $('[name="a03_Current_Date_pseudo_date"]').formatDatePicker(dateConfig, "USA");
    // current date
    if ($('[name$=".a03_Current_Date"]').val().length < 1) {
        $('[name$=".a03_Current_Date"]').val(moment().format('YYYY-MM-DD'));
    }
    currentDatePseudo.datepicker('setDate', new Date($('[name$=".a03_Current_Date"]').val())).prop('readonly', true);
    // delete sections
    $('#delete-section').on('click', function(e) {
        let sections = $('[data-expense-section]:visible', sectionsRoot);
        if (sections.length > 0) {
            sections.last().slideUp(function() {
                $(this).find('input,select').each(function(k, v) {
                    if (v.type == "checkbox") {
                        v.checked = false
                        return;
                    }
                    v.value = '';
                    validateField($(v), true);
                });
                // clear real date fields
                $(this).find('input.is-date-field').each(function(k,v) {
                    thisForm.find('[name$=".' + $(v).data('target-date-field') + '"]').val('');
                });
                // hide from to dates
                $(this).find('[data-display-parent]').hide();
                reloadTogglers();
            });
        }
    });
    // add section
    $('#add-expense').on('click', function(e) {
        let sections = $('[data-expense-section]:hidden', sectionsRoot);
        if (sections.length > 0) {
            sections.first().slideDown(reloadTogglers);
        }
    });

    // form input fields change events
    thisForm.on('keyup blur paste', 'input:visible:not(#signature)', function() {
        let name = $(this).prop('name').split('.');
        let eupName = name[name.length-1];
        // toggle validation of to - from fields
        if (sectionsRoot.find('[data-display-parent="' + eupName + '"]').length) {
            toggleOptionalFields(eupName, true);
        }
        // check if field has a validation controller
        if ($(this).data('require-filled')) {
            requireByController($(this));
        }
        // also run from controller end
        if (/_Miles_Drive$/.test(eupName)) {
            requireByController(sectionsRoot.find('[data-require-filled="' + eupName + '"]'));
        }
    });

    // regular fields
    thisForm.on('blur paste keyup', 'input:visible:not(.hasDatepicker):not(:disabled)', function() {
        validateField($(this));
    });
    // select fields
    thisForm.on('change', 'select:visible:not(:disabled)', function() {
        validateField($(this));
    });
    // datepicker fields
    thisForm.on('change click', 'input.hasDatepicker', function() {
        let target = $(this).data('target-date-field');
        const targetField = thisForm.find('[name$=".' + target + '"]');
        let thisDate = $(this).datepicker('getDate');
        let dateVal;
        if (thisDate != null) {
            dateVal = moment(thisDate).format('YYYY-MM-DD');
        }
        targetField.val(dateVal);
        validateField($(this));
    });
    // select fields
    sectionsRoot.on('change', 'select[multiple]', function() {
        let name = $(this).prop('name').split('.');
        let eupName = name[name.length-1];
        toggleOptionalFields(eupName, true);
    });

    // new hire sign form
    $('#sign-form').on('click', function() {
        document.getElementById('eSignature1').focus();
        if (validateSignature('signature','eSignature1','full-name','modal','over','sv')) {
            thisForm.find('[name="c60_Date_pseudo_date"]').datepicker('setDate', new Date());
            thisForm.find('[name$=".c60_Date"]').val(moment().format('YYYY-MM-DD'));
        }
        xbObj('eSignature1').value='';
    });
    // clear form
    $('#clear-form').on('click', function() {
        xbObj('signature').value='';
        showHide('modal');
        showHide('over');
        xbObj('eSignature1').value=''; 
        if (typeof targetdatecheckCLEAR == 'function' ){
            thisForm.find('[name="c60_Date_pseudo_date"]').datepicker('setDate', null);
            thisForm.find('[name$=".c60_Date"]').val('');
        }
    })
    // signature validation
    $('#modal').on('click', 'input', function() {
        validateField($('#signature'));
    });

    thisForm.on('click', '#ButtonPrint, #buttonPrint, #ButtonSaveAndComplete, #buttonSaveAndComplete', function(e) {
        let formIsValid = true; 
        e.preventDefault();
        $.each($('input:visible:not(:button):not(:disabled), select:visible', thisForm), function(k, v) {
            if(strFormCompleted != "") {
                return;
            }
            if(false == validateField($(v)) && $(v).is(':visible')) {
              formIsValid = false;
            }
        });
        if (!formIsValid) {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return;
        }
        const btn = $(this);
        switch (btn.attr('id')) {
        case 'ButtonPrint':
          funcPrint();
        break;
        case 'ButtonSaveAndComplete':
          completeStamp(employeeStamp);
          funcSaveAndComplete();
        break;
        }
    });

    let init = function() {
        if($('#EmployeeStamp').prop('readonly')) {
            $('#signature').prop('onfocus',null).css('background','#ccc');
            return false;
        }

        if (isEmployee && $('#EmployeeStamp').val() == "0") {
            $('#signature, #sv').val('');
            $('[name$=".c60_Date"], [name="c60_Date_pseudo_date"]').val('');
            // mark as modified
            $('#EmployeeStamp').val(1);
        }
    }
    setTimeout(init(),3000);

    // focus to modal field fix
    let focusSigFields = setInterval(function(){ 
        if(document.getElementById('modal').style.display=='block') {
            document.getElementById('ButtonSaveAndComplete').focus();
            document.getElementById('eSignature1').focus();
            clearInterval(focusSigFields);
        }
    }, 500);
});
