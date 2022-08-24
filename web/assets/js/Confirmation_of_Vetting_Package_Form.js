$.when($.getJSON(VETTING_PATH)).then(function(data) {
  const VETS = data.config
  let isDone = false
  VETS.forEach(function(vet) {
    // is package is already set the we're done
    if (isDone) {
      return
    }
    let isVet = true
    if (vet.division && vet.division.indexOf(DIVISION) < 0) {
      isVet = false
    }
    if (vet.legalEntity && vet.legalEntity != LEGAL_ENTITY) {
      isVet = false
    }
    if (vet.registered && vet.registered != REGISTERED_ROLE) {
      isVet = false
    }
    if (vet.highlyPrivilegedUser && vet.highlyPrivilegedUser != HIGHLY_PRIVILEGED_USER) {
      isVet = false
    }
    if (vet.sensitiveDataAccess && vet.sensitiveDataAccess != SENSITIVE_DATA_ACCESS) {
      isVet = false
    }
    if (vet.rankDesc && vet.rankDesc.indexOf(RANK_DESC) < 0) {
      isVet = false
    }
    if (vet.hireType && vet.hireType.indexOf(HIRE_TYPE) < 0) {
      isVet = false
    }
    
    if (isVet) {
      $('[name$=".Vetting_Package"]').val(vet.package)
      // it's over and done
      isDone = true
    }
  })
  $(".modal").hide();
})
