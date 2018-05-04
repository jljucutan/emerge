//=================================================================
//  Do not customize this block. It will be overwritten.
//=================================================================

////////////////////////////////////////////////////
//  W4SPOnBlur
////////////////////////////////////////////////////
function W4SPOnBlur(el){
    return eFormRunValidator('OnBlurW4SP',el);
}

////////////////////////////////////////////////////
//  W4SPOnFocus
////////////////////////////////////////////////////
function W4SPOnFocus(el){
    return eFormRunValidator('OnFocusW4SP',el);
}

////////////////////////////////////////////////////
//  W4SPOnChange
////////////////////////////////////////////////////
function W4SPOnChange(el){
    return eFormRunValidator('OnChangeW4SP',el);
}

////////////////////////////////////////////////////
//  W4SPOnClick
////////////////////////////////////////////////////
function W4SPOnClick(el){
    return eFormRunValidator('OnClickW4SP',el);
}

////////////////////////////////////////////////////
//  OnChangeW4SPNonResidentAlien
////////////////////////////////////////////////////
function OnClickW4SPNonResidentAlien(el){
   return nraClicked(el);
}
//////////////////////////////////////////////////
////////////////////////////////////////////////////
//  OnChangeW4SPExempt
////////////////////////////////////////////////////
function OnChangeW4SPExempt(el){
   return exemptChanged(el);
 }
////////////////////////////////////////////////////
//  OnChangeW4SPddNRA
////////////////////////////////////////////////////
function OnChangeW4SPddNRA(el){
    return ValidateNRA(el);
}

////////////////////////////////////////////////////
//  OnFocusW4SPSignature
////////////////////////////////////////////////////
function OnFocusW4SPSignature(el){
    return openESig('modal','over',this);    
}

////////////////////////////////////////////////////
//  OnChangeW4SPSignature
////////////////////////////////////////////////////
function OnChangeW4SPSignature(el){
    return signatureVerification('sv');    
}

////////////////////////////////////////////////////
//  OnLoadFederal_W_4
////////////////////////////////////////////////////
function OnLoadFederal_W_4_SP(){
    if('<$client.env.SetReadOnly>'!='1'){
        var el=document.getElementById('exempt');
        exemptChanged(el, false);
        el=document.getElementById('nonresidentalien');
        // nraClicked(el);
        readOnlySig('signature');
    }
}

////////////////////////////////////////////////////
//  W4SPEnableDisable
////////////////////////////////////////////////////
function W4SPEnableDisable(sFld, bDisable) {
    if(sFld=='filingstatus'){
        for(i=0;i<document.frmForm.filingstatus.length;i++){ document.frmForm.filingstatus[i].disabled=bDisable; }
    }else{
        var sBackgroundColor = (bDisable) ? "#DBDBDB" : "#FFFFFF";
        oElement = document.getElementById(sFld);
        if(oElement != null){
            oElement.readOnly = bDisable;
            oElement.disabled = bDisable;
            if(bDisable) { try {oElement.value = "";}catch(e){} }
                xbStyleObj(oElement.id).backgroundColor = sBackgroundColor;
        }
    }
}

////////////////////////////////////////////////////
//  exemptChanged
////////////////////////////////////////////////////
function exemptChanged(el, hasAlert){
    if(el.selectedIndex==1){
       W4SPEnableDisable('allowances',true);
       W4SPEnableDisable('additionalwithholding',true);
       if (hasAlert) {
            alert("You have selected exempt. therefore, your values in Total Exemptions and Additional Withholding section of Fields 1 and 2 have been removed. If you wish to claim Exemptions or Additional amount, remove your exempt selection ");
       }
    }
    else{
       W4SPEnableDisable('allowances',false);
       W4SPEnableDisable('additionalwithholding',false);
    }
    return true;
}

////////////////////////////////////////////////////
//  nraClicked
////////////////////////////////////////////////////
function nraClicked(el){
    var chkStatus=el.checked;
    if(chkStatus == true){
        W4SPEnableDisable('exempt',true);
        var obj=document.getElementById('exempt');
        for(i=0;i<document.frmForm.filingstatus.length;i++){
            if(document.frmForm.filingstatus[i].value=='S'){ document.frmForm.filingstatus[i].checked=true; }
        }
        W4SPEnableDisable('filingstatus',true);
        return exemptChanged(obj, true);
    }else{
        W4SPEnableDisable('exempt',false);
        W4SPEnableDisable('filingstatus',false);
        return true;
    }
}
/////////////////////////////////////
////////////////////////////////////////////////////
//  xbStyleObj
////////////////////////////////////////////////////
function xbStyleObj(el){
    if(document.getElementById){ return document.getElementById(el).style; }
    else if(document.all){ return document.all[el].style; }
    else if(document.layers){ return document.layers[el]; }
    else{ return false; }
}

////////////////////////////////////////////////////
//  ValidateNRA
////////////////////////////////////////////////////
function ValidateNRA(el){
   sVal=el.value;
 if(sVal=="Nonresident Alien"){
     alert("This value should only be selected if you are a Nonresident Alien.");
                                                      }   
}

////////////////////////////////////////////////////
//  onBlurW4SPAllowance
////////////////////////////////////////////////////
function onBlurW4SPAllowance(el){
    var a = document.getElementById('paworksheeta').value;
    var b = document.getElementById('paworksheetb').value;
    var c = document.getElementById('paworksheetc').value;
    var d = document.getElementById('paworksheetd').value;
    var e = document.getElementById('paworksheete').value;
    var f = document.getElementById('paworksheetf').value;
    var g = document.getElementById('paworksheetg').value;
    var h = document.getElementById('paworksheeth');
    var fieldArray = [a,b,c,d,e,f,g];
    var i = fieldArray.length;
    var sum = 0;
    while(i--){
        if(fieldArray[i] % 1 == 0){
            sum += +fieldArray[i];
        }
    }
    h.value = sum;
}
