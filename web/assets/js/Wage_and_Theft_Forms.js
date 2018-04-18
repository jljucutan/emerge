function hideSection(lang) {
  $('section').addClass('hidden');
  $(document.getElementById(lang)).removeClass('hidden');
}

function toggleActiveLink(elem) {
    elem.addClass('active');
}

$('a[data-lang]').on('click', function(e) {
  e.preventDefault();
  $('[data-lang]').removeClass('active');
  toggleActiveLink($(this));
  hideSection($(this).data('lang'));
});
