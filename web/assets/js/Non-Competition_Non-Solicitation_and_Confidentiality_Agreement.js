/**
 * CHANGE LOGS
 * 12/05/2019 | jjucutan | created initial version ref SERVICES-39675
 * 12/09/2019 | jjucutan | changed to pluggable template model
 */
const loadOfferLetter = function() {
    "use strict";
    const markup = $('#markup').html('');
    const promise = $.get(offerLetterData.templatePath, function(htmlTmpl){
        let rendered  = ejs.compile(htmlTmpl, {client: true})(offerLetterData);
        markup.append(rendered.trim().replace(/^\s+|\r\n|\n|\r|(>)\s+(<)|\s+$/gm, '$1$2').replace(/\t/g, ' '));
    });
    return promise;
}

angular.element(document).ready(function() {
    angular.element('#divLoader').remove();
});

$(document).on('ready', function() {
    // load the offer letter
    loadOfferLetter().done(function() {
        if ($('#inventions').prop('readonly')) { 
            //Create an array of info to pass to complete the offer letter 
            //0 for images sending an image tag, 1 for sections of text sneding the ID of the field that holds the HTML. 
            let arrParts = [ 
                [1,'hidden_pg1']
            ]; 
            //Send (ID of the div to hide,ID of the div to show,Parts to get the offer letter) 
            showCompletedOfferLetter('incomplete','complete',arrParts); 
        } else { 
            //If the offer letter is not complete
            makeOfferLetter('hidden_pg1', 'offerClause');
        }
        // form is ready
        $(".modal").hide();
    });
});
