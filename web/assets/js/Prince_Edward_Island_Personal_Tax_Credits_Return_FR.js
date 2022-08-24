<script>
////////////////////////////////////////////////////
//  PEIFROnBlur
////////////////////////////////////////////////////
function PEIFROnBlur(el){
    return eFormRunValidator('OnBlurPEIFR',el);
}

////////////////////////////////////////////////////
//  PEIFROnFocus
////////////////////////////////////////////////////
function PEIFROnFocus(el){
    return eFormRunValidator('OnFocusPEIFR',el);
}

////////////////////////////////////////////////////
//  PEIFROnChange
////////////////////////////////////////////////////
function PEIFROnChange(el){
    return eFormRunValidator('OnChangePEIFR',el);
}

////////////////////////////////////////////////////
//  PEIFROnClick
////////////////////////////////////////////////////
function PEIFROnClick(el){
    return eFormRunValidator('OnClickPEIFR',el);
}

////////////////////////////////////////////////////
//  PEIFROnChange
////////////////////////////////////////////////////
function PEIFROnChange(el){
    return sumRequests('OnChangePEIFR',el);
}

////////////////////////////////////////////////////
//  OnFocusPEIFRSignature
////////////////////////////////////////////////////
function OnFocusPEIFRSignature(el){
    return openESig('modal','over',this);    
}

////////////////////////////////////////////////////
//  OnChangePEIFRSignature
////////////////////////////////////////////////////
function OnChangePEIFRSignature(el){
    return signatureVerification('sv');    
}

if (window.NodeList && !NodeList.prototype.forEach) {
   NodeList.prototype.forEach = Array.prototype.forEach;
}
////////////////////////////////////////////////////
//  sumRequests
////////////////////////////////////////////////////
const sumRequests = function() {
  "use strict";
  const lesMontants = document.querySelectorAll('.montant');
  let sommeTotale = 0;
  lesMontants.forEach(function(champTotal) {
    let valeur = champTotal.value.replace("$","").replace(",","").replace(" ","");
    if (!champTotal.value.length) {
      valeur = "0";
    }
    valeur = Number(valeur);
    if (isNaN(valeur)) {
      alert("Error in validation, value must be in a valid currency format.");   
      champTotal.value = "";
      return;
    }
    sommeTotale += valeur;
  });
  sommeTotale += "";
  if (sommeTotale.length > 3) {
    sommeTotale = sommeTotale.split('').reverse().join('').replace(/([0-9]{3})/g, "$1 ").split('').reverse().join('');
  }
  document.getElementById('total').value = sommeTotale;

}
document.onreadystatechange = function() {
  sumRequests();
}
</script>
