(function($) {
    $.fn.formatDatePicker = function(config, countryCode) {
        $(this)
            .wrap('<div class="date-wrapper"></div>')
            .datepicker({'dateFormat': config.regions[config.countries[countryCode]]})
            .parent()
            .append('<span class="calendar-btn-container formDate"><i class="fa fa-calendar"></i></span>');
        return $(this);
    }
})(jQuery);
$(document).on('ready', function() {
    $('.form-group').on('click', '.date-wrapper', function() {
        $(this).find('input').datepicker('show');
    });
});
