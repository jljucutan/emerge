$(function() {
    $('[data-radio="true"]').on('click', 'input[type="checkbox"]', function(e) {
        var checkbox = $(this);
        var container = checkbox.closest('[data-radio="true"]');
        $.each(container.find('input[type="checkbox"]'), function(k, v) {
            if ($(v).val() == checkbox.val()) {
                return;
            }
            v.checked = false;
        });
    });
});
