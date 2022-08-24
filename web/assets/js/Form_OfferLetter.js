function makeOfferLetter(sField,sClauseClass) 
{ 
  "use strict";

//Only proceed if form is not completed 

if (strFormCompleted != "") 

  { 

  return true; 

  } 

  

//Most times sField will be hidden_pg  
const hiddentextfield=document.querySelector('[name$=".' + sField + '"]'); 

let letterClauses = ""; 

  

//Get all the DIVs 

const  divArray = document.getElementsByClassName(sClauseClass); 

//Go through the DIVs 

for (let i=0;i<divArray.length;i++) 

  { 

      //Get display value of the DIV 

      let strVisible = divArray[i].style.display; 

      //If it is not display:none put the HTML in 'letterClauses' 

      if (strVisible != 'none') 

      { 

        letterClauses += divArray[i].innerHTML; 

      } 

  } 

  

//Put the HTML of the display:block divs in hidden_pg 
hiddentextfield.value=letterClauses; 

} 

  

function showCompletedOfferLetter(sDivHide,sDivShow,aParts) 

{ 

  
  "use strict";

  //Initilize a HTML holder 

  let sOfferHTML = ""; 

  //Hide the Incomplete DIV 

  document.getElementById(sDivHide).style.display = "none"; 

   

  //Loop throuhg the parts sent in 

      for (i=0;i<aParts.length;i++) 

        { 

            

        switch (aParts[i][0]){ 

                 //Check if the 'part' is an image put the HTML in. 

                 case 0: 

                   sOfferHTML += aParts[i][1]; 

                   break; 

                 //If the part is not an image, get the value of the field. 

                 default: 

                   sOfferHTML += getElementById(aParts[i][1]).value; 

                   break; 

           } 

        }   

  

  //Put the result in the inner HTML of the show div 

  document.getElementById(sDivShow).innerHTML=sOfferHTML; 

  //Show the Complete DIV 

  document.getElementById(sDivShow).style.display = "block"; 

  

} 

  

function SetImageOnOfferLetter(sField) 

{ 
  "use strict";

  let imgFieldID = sField + "_img"; 

  const imgField=document.getElementById(imgFieldID); 

  const linkField=document.getElementById(sField); 

   

  imgField.src = linkField.value; 

  

} 

  

function SetOfferLetterImageField(sField,sPath) 

{ 

  document.getElementById(sField).value=sPath; 

} 
