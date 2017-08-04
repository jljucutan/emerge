$(function() {
    $('[data-radio="medical-plan"]').on('change', 'input[type="radio"]', function() {
        if ($(this).val() == 1) {
            $('#medical-plan-join, #medical-plan-already').removeClass('hide');
        } else {
            $('#medical-plan-join, #medical-plan-already').addClass('hide');
        }
    });
    $('[data-radio="medical-join"]').on('change', 'input[type="radio"]', function() {
        if ($(this).val() == 1) {
            $('#medical-plan-join, #medical-plan-already').removeClass('hide');
        } else {
            $('#medical-plan-join, #medical-plan-already').addClass('hide');
        }
        if ($(this).val() == 1 && $('#medical-plan-already').find('input[type="radio"]').val() == 2) {
            $('#discovery-enrollment').removeClass('hide');
        } else {
            $('#discovery-enrollment').addClass('hide');
        }
    });
    $('[data-radio="medical-plan-already"]').on('change', 'input[type="radio"]', function() {
        if ($(this).val() == 1) {
            $('#medical-proof, #discovery-plan').removeClass('hide');
        } else {
            $('#medical-proof, #discovery-plan').addClass('hide');
        }
        if ($(this).val() == 2 && $('#medical-plan-join').find('input[type="radio"]').val() == 1) {
            $('#discovery-enrollment').removeClass('hide');
        } else {
            $('#discovery-enrollment').addClass('hide');
        }
    });
    $('[data-radio="discovery-plan"]').on('change', 'input[type="radio"]', function() {
        if ($(this).val() == 1) {
            $('#discovery-transfer').removeClass('hide');
        } else {
            $('#discovery-transfer').addClass('hide');
        }
    });
});
