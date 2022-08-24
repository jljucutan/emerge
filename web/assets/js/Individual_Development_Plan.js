$(window).on('load', function() {
  "use strict";
  $('#view-development-examples').on('click', function(e) {
    e.preventDefault();
    $('#development-objective').fadeIn(500);
    $(this).prop('disabled', true);
  });
  $('#add-plan-1, #add-plan-2').on('click', function(e) {
    e.preventDefault();
    $('#development-plan').fadeIn(500);
    $(this).prop('disabled', true);
  });
});
