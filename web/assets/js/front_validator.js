var validateField = function(field) {
    var isValid = false;
    // please add data-title="field name" on form field
    var fieldName = field.data("title") ? field.data("title") : field.prop("title");
    // validate checkbox or radio 
    // this field request data-label attribute that
    // targets id of label
    if (field.is(':checkbox') || field.is(':radio')) {
      var checkboxGroup = $('[name="' + field.prop('name') + '"]'),
        checked = false;
      $.each(checkboxGroup, function(key, val) {
        if ($(val).is(':checked')) {
          checked = true;
        }
      });
      // validate if required
      if (!checked) {
        $(field.data("label")).addClass('label-has-error')
        isValid = false;
      } else {
        $(field.data("label")).removeClass('label-has-error')
        isValid = true;
      }
    }
    // validate input fields
    else {
        // validate if required
        if (field.val().length > 0) {
            isValid = true;
            field.removeClass('input-error')
        } else {
            isValid = false;
            field.addClass('input-error')
        }
        var errorContainer = $('[data-error-id="' + field.prop("name") + '"]');
        var errorContainerTemplate = $('<span class="text-error" data-error-id="' + field.prop("name") + '" />');
        var inputContainer = field.closest("div");
        if (!isValid) {
            if (errorContainer.length) {
                errorContainer.html(fieldName + " is required.").css({'display': 'inline-block'});
            } else {
                inputContainer.append(errorContainerTemplate.html(fieldName + " is required.").css({'display': 'inline-block'}));
            }
        } else {
            if (errorContainer.length) {
                errorContainer.css({'display': 'none'});
            } 
        }
    }

    return isValid;
}
