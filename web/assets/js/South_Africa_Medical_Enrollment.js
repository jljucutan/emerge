$(function() {
    var showMedicalPlans = function(param) {
        var input_val = (typeof param !== 'undefined') ? param : $('[data-radio="medical-plan"] input[type="radio"]:checked').val();
        if (input_val == 1) {
            $('#medical-plan-join, #medical-plan-already').removeClass('hide');
        } else {
            $('#medical-plan-join, #medical-plan-already').addClass('hide');
        }
    }

    var showAllOrNone = function(param) {
        var input_val = (typeof param !== 'undefined') ? param : $('[data-radio="medical-plan"] input[type="radio"]:checked').val();
        if (input_val == 1) {
            showMedicalPlans(input_val)
        } else {
           $('.main p').addClass('hide');
            var siblings = $('[data-radio="medical-plan"]').parent().siblings();
            siblings.addClass('hide');
            siblings
                .find('input[type="radio"]')
                .prop('checked', false); 
        }
    }

    var showDiscoveryProof = function(param) {
        var input_val = (typeof param !== 'undefined') ? param : $('[data-radio="medical-plan-already"] input[type="radio"]:checked').val();
        if (input_val == 1) {
            $('#medical-proof, #discovery-plan').removeClass('hide');
        } else {
            $('#medical-proof, #discovery-plan')
                .addClass('hide')
                .find('input[type="radio"]')
                .prop('checked', false); 
        }
    }

    var showDiscoveryEnrollment = function(param0, param1) {
        var input_val0 = (typeof param !== 'undefined') ? param : $('#medical-plan-join input[type="radio"]:checked').val();
        var input_val1 = (typeof param !== 'undefined') ? param : $('#medical-plan-already input[type="radio"]:checked').val();
        if (input_val0 == 1 && input_val1 == 2) {
            $('#discovery-enrollment').removeClass('hide');
        } else {
            $('#discovery-enrollment').addClass('hide');
        }
    }
    showMedicalPlans();
    showDiscoveryProof();
    showDiscoveryEnrollment();

    var showDiscoveryTransfer = function(param) {
        var input_val = (typeof param !== 'undefined') ? param : $('[data-radio="discovery-plan"] :input[type="radio"]:checked').val();
        if (input_val == 1) {
            $('#discovery-transfer').removeClass('hide');
        } else {
            $('#discovery-transfer').addClass('hide');
        }
    }

    $('[data-radio="medical-plan"]').on('change', 'input[type="radio"]', function() {
       showAllOrNone($(this).val()); 
    });
    $('[data-radio="medical-plan-join"]').on('change', 'input[type="radio"]', function() {
        showDiscoveryEnrollment($(this).val(), $('#medical-plan-already input[type="radio"]:checked').val());
    });
    $('[data-radio="medical-plan-already"]').on('change', 'input[type="radio"]', function() {
        showDiscoveryProof($(this).val());
        showDiscoveryEnrollment($('#medical-plan-join input[type="radio"]:checked').val(), $(this).val());
    });
    $('[data-radio="discovery-plan"]').on('change', 'input[type="radio"]', function() {
        showDiscoveryTransfer($(this).val());
    });
});
