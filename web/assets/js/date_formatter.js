/**
 * CHANGE LOGS
 * SERVICES-35528 | jjucutan | update datepicker config to display month and year chooser in datepicker
 * ldalangin | 2018-09-20: Fixed date difference when converting to ISO Format.
 */
 
(function($) {
    $.fn.formatDatePicker = function(config, countryCode) {
        var field = $(this);
        if (field.data('date-enabled') !== false) {
            field
                .wrap('<div class="date-wrapper"></div>')
                .parent()
                .append('<span class="calendar-btn-container formDate"><i class="fa fa-calendar"></i></span>');
        }
        field
            .datepicker({
                'dateFormat': config.regions[config.countries[countryCode]],
                changeMonth: true,
                changeYear: true,
                yearRange: "-100:+100"
            })
            .bind('change.formatDatePicker', function() {
                //var d = (field.val().length) ? field.datepicker('getDate').toISOString().substring(0,10) : null;
                var d = (field.val().length) ? field.datepicker('getDate') : null;
                if (d) {
                    var d_adjusted = new Date(d);
                    d_adjusted.setMinutes(d_adjusted.getMinutes() - d_adjusted.getTimezoneOffset());
                    d = d_adjusted.toISOString().substring(0,10);
                }
                field.data('realdate', d);
            });
        if (field.val().length > 0) {
            //field.data('realdate', field.datepicker('getDate').toISOString().substring(0,10));
            var field_date = new Date(field.datepicker('getDate'));
            field_date.setMinutes(field_date.getMinutes() - field_date.getTimezoneOffset());
            field.data('realdate', field_date.toISOString().substring(0,10));
        }
        return field;
    }
    $.fn.setFormattedDate = function(date) {
        var field = $(this);
        //var d = (date !== null) ? date.toISOString().substring(0,10) : null;
        var d = (date !== null) ? date : null;
        if (d) {
            var d_adjusted = new Date(d);
            d_adjusted.setMinutes(d_adjusted.getMinutes() - d_adjusted.getTimezoneOffset());
            d = d_adjusted.toISOString().substring(0,10);
        }
        field.datepicker('setDate', date)
        field.data('realdate', d);
        return field;
    }
    $.fn.updateMapped = function(el) {
        var field = $(this);
        el.val(field.data('realdate'));
        return field;
    }
})(jQuery);
$(document).on('ready', function() {
    $('form').on('click', '.date-wrapper', function() {
        $(this).find('input:not(disabled)').datepicker('show');
    });
});
