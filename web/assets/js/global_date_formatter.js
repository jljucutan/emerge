/**
 * CHANGE LOGS
 * 05.30.2019 | jjucutan | Created out of necessity for formatting both short and long date formats
 * 06.13.2019 | jjucutan | changed retrieval of country formats
 */
 
(function($) {
    "use strict";
    $.fn.formatDatePicker = function(config, countryCode, long) {
        let field = $(this);
        if (field.data('date-enabled') !== false) {
            field
                .wrap('<div class="date-wrapper"></div>')
                .parent()
                .append('<span class="calendar-btn-container formDate"><i class="fa fa-calendar"></i></span>');
        }
        field
            .datepicker({
                dateFormat: long ? config.countries[countryCode].longFormat : config.countries[countryCode].shortFormat,
                changeMonth: true,
                changeYear: true,
                yearRange: "-100:+100"
            })
            .bind('change.formatDatePicker', function() {
                let d = (field.val().length) ? field.datepicker('getDate') : null;
                if (d) {
                    let d_adjusted = new Date(d);
                    d_adjusted.setMinutes(d_adjusted.getMinutes() - d_adjusted.getTimezoneOffset());
                    d = d_adjusted.toISOString().substring(0,10);
                }
                field.data('realdate', d);
            });
        if (field.val().length > 0) {
            let field_date = new Date(field.datepicker('getDate'));
            field_date.setMinutes(field_date.getMinutes() - field_date.getTimezoneOffset());
            field.data('realdate', field_date.toISOString().substring(0,10));
        }
        return field;
    }
    $.fn.setFormattedDate = function(date) {
        let field = $(this);
        let d = (date !== null) ? date : null;
        if (d) {
            let d_adjusted = new Date(d);
            d_adjusted.setMinutes(d_adjusted.getMinutes() - d_adjusted.getTimezoneOffset());
            d = d_adjusted.toISOString().substring(0,10);
        }
        field.datepicker('setDate', date)
        field.data('realdate', d);
        return field;
    }
})(jQuery);

$(document).on('ready', function() {
    "use strict";
    $('form').on('click', '.date-wrapper', function() {
        $(this).find('input:not(disabled)').datepicker('show');
    });
});
