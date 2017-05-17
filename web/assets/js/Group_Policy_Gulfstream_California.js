$(function() {
    'use strict';
    $('#policy-list input[type="checkbox"]').click(function(e) {e.preventDefault()});
    $('#policy-list').on('click', 'a', function(e) {
        e.preventDefault();
        $(this).parent().find('input[type="checkbox"]').attr('checked', true);
    });
});
