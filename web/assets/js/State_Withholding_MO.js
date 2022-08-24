$(window).on('load', function() {
    $.each($('.copy-prev-height'), function() {
        $(this).height($(this).prev().height());
    });
});
