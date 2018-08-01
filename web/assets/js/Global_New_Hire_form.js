/**
 * SERVICES-34919 | PayPal- RC- Update Date Format on Global New Hire Form
 */
var localizeDate = function (locale, fields) {
    var format = 'mm/dd/yy';
    switch(locale) {
        case 'USA':
        case 'CAN':
            format = 'mm/dd/yy';
        break;
        default:
            format = 'dd/mm/yy';
    }
    $(fields).datepicker({
        dateFormat: format
    });
    return format;
}
$(function() {
    if($(this).hasClass('dateField')) {
        $($(this).data('date-mapped')).val($(this).val());
    }
    if ($.fn.datepicker) {
        $('.dateField').each(function(k, v) {
            $($(v).data('date-mapped')).val($(v).val());
        })
    }
});
