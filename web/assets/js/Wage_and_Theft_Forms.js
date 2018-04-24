(function($) {
  $.fn.checkOne = function() {
    var checkbox = $(this),
        group = checkbox.data('checkbox-group');
    $.each($('[data-checkbox-group="' + group + '"]'), function(k, v) {
      $(v).prop('checked', false);
    });
    checkbox.prop('checked', true);
  }
}(jQuery));

function hideSection(lang) {
  $('section').addClass('hidden');
  $(document.getElementById(lang)).removeClass('hidden');
}

function toggleActiveLink(elem) {
    elem.addClass('active');
}

