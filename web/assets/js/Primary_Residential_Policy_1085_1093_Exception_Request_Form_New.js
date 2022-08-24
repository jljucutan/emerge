/**
 * Better and cleaner code
 */

// toggles date if it should be enabled or not
function toggleDateState(el) {
  "use strict";
  var targets = el.dataset.toggleTarget.split(',').map(function(item) {
    return item.trim();
  });
  targets.forEach(function(v, k) {
    var target = document.querySelector('[name$="' + v + '"]');
    if (!el.checked || el.value != "Yes") {
      target.value = '';
      target.disabled = true;
      target.classList.remove('ng-invalid');
      target.classList.add('ng-disabled');
      return false;
    }
    target.disabled = false;
    target.classList.add('ng-invalid');
    target.classList.remove('ng-disabled');
    return true;
  });
}

document.querySelectorAll('ng-disabled').
