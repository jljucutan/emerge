$(function() {
    $('[data-radio-group]').makeRadio();
    $('#first_name, #last_name').on('change paste keyup', function() {
        $('#full_name').val($('#first_name').val() + ' ' + $('#last_name').val());
    });
});
