var validateFormField = function(fields) {
    $.each(fields, function(k, v) {
        var field = $(v),
            isValid = false;
        // validate date field
        if (field.hasClass("dateField") && field.val().length > 0) {
            isValid = true;
            field.addClass('input-error')
        }
        // validate checkbox or radio requires data-checkbox-group attribute
        // and grouped as their name
        if (field.is(':checkbox') || field.is(':radio')) {
          var checkboxGroup = $('[data-checkbox-group="' + field.data('checkbox-group') + '"]'),
            checked = false;
          $.each(checkboxGroup, function(key, val) {
            if (isRequired && $(val).is(':checked')) {
              checked = true;
            }
          });
          if (!checked) {
            field.addClass('input-error')
            isValid = true;
          } 
        }
        // validate input fields
        if (field.is(":text") && field.val().length > 0) {
            isValid = true;
        }
    });
    if (isValid) {
        $(field.data("error-container")).hide();
    } else {
        $(field.data("error-container")).show();
    }
    return isValid;
}
