(function ( $ ) {
    $.fn.traverseStage = function() {
        var errors = [];

        if ($(this).data('stage') == 1) {
           $.merge(errors, $(this).requireAll());
           $.merge(errors, $(this).validateFields());
        } else {
            $.each($(this).children('table:visible'), function(k, table) {
                if ($(table).sectionIsRequired()) {
                    $.merge(errors, $(table).requireAll());
                    $.merge(errors, $(table).validateFields());
                }
            });
        }

        // If form has errors show it
        if (errors.length > 0) {
            alert(errors);
            errors = [];
            return false;
        }
        return true;
    };

    $.fn.sectionIsRequired = function() {
        var isRequired = false;
        $.each($(this).find('input, select, textarea'), function(k, field) {
            if ($(field).val().length > 0) {
                isRequired = true;
            }
            if ($(field).attr('data-required') == 'yes') {
                isRequired = true;
            }
        });
        return isRequired;
    };

    $.fn.validateFields = function() {
        var fields = $(this).find('input, select, textarea');
        var errors = [];

        $.each(fields, function(k, field) {
            var maxlength = $(field).attr('maxlength');
            if (typeof maxlength !== typeof undefined && maxlength !== false && maxlength > 0) {
                if ($(field).val().length > maxlength) {
                    errors.push('\nField ' + $(field).attr('data-title') + ' should not exceed more than ' + maxlength + ' characters.');
                }
            }
            var validationType = $(field).attr('data-validation');
            var emailReg       = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var dateReg        = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
            var numericReg     = /^\d+$/;
            switch (validationType) {
                case 'email':
                    if (!emailReg.test($(field).val()) && $(field).val().length > 0) {
                        errors.push('\nField ' + $(field).attr('data-title') + ' is not a valid email.');
                    }
                break;
                case 'date':
                    if (!dateReg.test($(field).val()) && $(field).val().length > 0) {
                        errors.push('\nField ' + $(field).attr('data-title') + ' is not a valid date.');
                    }
                break;
                case 'numeric':
                    if (!numericReg.test($(field).val()) && $(field).val().length > 0) {
                        errors.push('\nField ' + $(field).attr('data-title') + ' should contain only numbers.');
                    }
                break;
            }
        });
        return errors;
    };

    $.fn.requireAll = function() {
        var fields       = $(this).find('input, select, textarea'),
            errors       = [];
        $.each(fields, function(k, field) {
            var required = $(field).attr('data-required');
            if (typeof required !== typeof undefined && required !== false) {
                if ((required == 'yes' && $(field).val() == '') || (required == 'maybe' && $(field).val() == '')) {
                    errors.push('\nField ' + $(field).attr('data-title') + ' is a required field.');
                }
            }
        });
        return errors;
    };
}( jQuery ));

$(function() {
    $('#buttonPrint, #buttonPreviewSave').addClass('hidden');
    
   /* Previous events */
   $('#previous1').click(function(e) {
        e.preventDefault();
        var visibleStage;
        $('[data-stage]:visible').each(function(k, v) {
            visibleStage = v;
        });
        if ($(visibleStage).prev('div[data-stage]').length < 1) {
            return;
        }
        $(visibleStage).addClass('hidden').prev('div[data-stage]').removeClass('hidden');
   });


   /* Continue events */
   $('#continue2').click(function(e) {
        e.preventDefault();
        var visibleStage;
        $('[data-stage]:visible').each(function(k, v) {
            visibleStage = v;
        });
        if ($(visibleStage).next('div[data-stage]').length < 1) {
            return;
        }
        if ($(visibleStage).traverseStage()) {
            $('#buttonPrint, #buttonPreviewSave').removeClass('hidden');
            $(visibleStage).addClass('hidden').next('div[data-stage]').removeClass('hidden');
        }
   });

   /* add form section event */
   $('[data-addsection]').click(function(e) {
        e.preventDefault();
        var visibleForm = $(this).closest('[data-stage]').find('table:visible').last().next('table').removeClass('hidden');
        if ($(this).closest('[data-stage]').find('table:visible').last().next('table').length < 1) {
            $(this).addClass('hidden');
        }
   });
});
