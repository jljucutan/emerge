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
            .datepicker({'dateFormat': config.regions[config.countries[countryCode]]})
            .bind('change.formatDatePicker', function() {
                var d = (field.val().length) ? field.datepicker('getDate').toLocaleDateString() : null;
                field.data('realdate', d);
            });
        if (field.val().length > 0) {
            field.data('realdate', field.datepicker('getDate').toLocaleDateString());
        }
        return field;
    }
    $.fn.setFormattedDate = function(date) {
        var field = $(this);
        var d = (date !== null) ? date.toLocaleDateString() : null; console.log(d);
        field.datepicker('setDate', date)
        field.data('realdate', d);
        return field;
    }
})(jQuery);
$(document).on('ready', function() {
    $('form').on('click', '.date-wrapper', function() {
        $(this).find('input:not(disabled)').datepicker('show');
    });
});
$(function() {
    $('#NationalID_Country').on('change', function() {
        if ($(this).val() === "IND") {
            $('#NationalID_Type option:not([value="IND-PAN"])').remove();
        }
    });
});
