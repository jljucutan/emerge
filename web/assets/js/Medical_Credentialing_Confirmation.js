document.onreadystatechange = function() {
  if (!FORM_COMPLETED.length) {
    for (const field in FIELDS_PREPOPULATION) {
      if (FIELDS_PREPOPULATION[field].length) {
        document.querySelector(`[name$=".${field}"]`).value = FIELDS_PREPOPULATION[field]
      }
    }
  }
}
