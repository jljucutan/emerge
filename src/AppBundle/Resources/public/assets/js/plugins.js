// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
// Place any jQuery/helper plugins in here.
(function($) {
    $.fn.makeRadio = function() {
        var container = $(this);
        container.on('change', '[data-radio]', function(e) {
            (e.preventDefault) ? e.preventDefault() : e.returnValue = false;
            var radio = $(this);
            $.each(container.find('input[data-radio="' + radio.attr('data-radio') +'"]'), function(k, radioSiblings) {
                if ($(radioSiblings).val() == radio.val()) {
                    $(radioSiblings).prop('checked', false)
                }
            });
            // For some reason the IE8 too slow to loop through elements so we delay setting radio button to checked
            setTimeout(function() {
                radio.prop('checked', true);
            }, 200);
        });
    };
})( jQuery );
