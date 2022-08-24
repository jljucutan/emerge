
/* Use this function to run the validation on submit*/
function funcCustomOnSubmitCallback(formobject){
  if(self.Custom_Callback_First_Name){Custom_Callback_First_Name(formobject);}
  if(self.Custom_Callback_Last_Name){Custom_Callback_Last_Name(formobject);}
}
function Custom_Callback_First_Name(formobject){ 
  if(self.eFormRequiredField){ 
    if(eFormRequiredField(GetValue(formobject["First_Name"]),'First_Name','First_Name')==false) 
      bRet = false; 
  }else{ 
   if(self.IsValidationEnabled){ 
     if (IsValidationEnabled()){ 
        var sMessage = 'Error trying to validate against function eFormRequiredField\nFunction not found for validation of'; 
        if (self.AddError) 
           AddError('First_Name',sMessage,''); 
        else 
           alert(sMessage); 
        bRet=false; 
     } 
   } 
  } 
}
function Custom_Callback_Last_Name(formobject){ 
  if(self.eFormRequiredField){ 
    if(eFormRequiredField(GetValue(formobject["Last_Name"]),'Last_Name','Last_Name')==false) 
      bRet = false; 
  }else{ 
   if(self.IsValidationEnabled){ 
     if (IsValidationEnabled()){ 
        var sMessage = 'Error trying to validate against function eFormRequiredField\nFunction not found for validation of'; 
        if (self.AddError) 
           AddError('Last_Name',sMessage,''); 
        else 
           alert(sMessage); 
        bRet=false; 
     } 
   } 
  } 
}
