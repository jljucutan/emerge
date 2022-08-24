// Brazil Offer Letter
function fnView() {
    $("#markup").html("").append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                $('<mark/>').append(
                    fnConvertFullDateBrazil(employee.Current_Date)
                )
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<mark/>').html(employee.Full_Legal_Name + '<br>'),
                $('<mark/>').html(employee.Address_Line_1 ? employee.Address_Line_1 + '<br>' : ''),
                $('<mark/>').html(employee.Address_Line_2 ? employee.Address_Line_2 + '<br>' : ''),
                $('<mark/>').html((employee.City ? employee.City + ', ' : '') + (employee.State ? employee.State + ', ' : '') + employee.Postal_Code)
            )
        ),
        
        
        $('<div class="offerClause" style="line-height: 0px;"/>').append(
            $('<p/>').html('&nbsp;')
        ),
        $('<div class="offerClause"/>').append(
            $('<p/>').append(
                $('<mark/>').append(
                    (employee.Preferred_First_Name ? employee.Preferred_First_Name : employee.First_Name)
                ),
                ','
            )
        ),
        // Paragraph 1
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Dando sequência às nossas conversações, temos a satisfação de lhe estender uma oferta de trabalho com a PayPal Brazil.'
            )
        ),
        // Paragraph 2
        $('<div class="offerClause"/>').append(
            $('<p/>').append(
                'Os termos essenciais do seu contrato são de que você deve participar de nossa equipe de trabalho na condição de ',
                $('<mark/>').append(
                    employee.Job_Title
                ),
                ' (Título do Sistema: ',
                $('<mark/>').append(
                    employee.System_Title
                ),
                '), reportando-se para ',
                $('<mark/>').append(
                    employee.Manager_Name
                ),
                ', Team Leader a partir de ',
                $('<mark/>').append(
                    fnConvertFullDateBrazil(employee.Start_Date)
                ),
                ' com um salário mensal de ',
                $('<mark/>').append(
                    fnFormatCurrency(employee.Salary_Amount)
                ),
                ' ',
                $('<mark/>').append(
                    employee.Salary_Currency
                ),
                ' menos todas as retenções e deduções estatutárias.'
            )
        ),
        // Paragraph 3

        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'O saldo dos termos e as condições do seu emprego estão contidos no Contrato de Trabalho em anexo, o qual você deverá assinar quando iniciar o emprego na empresa.'
            )
        ),
 
        $('<div class="offerClause"/>').append(
            $('<p/>').append(
                'Por favor, indique sua aceitação desta proposta assinando e devolvendo até ',
                $('<mark/>').append(
                    fnConvertFullDateBrazil(employee.Start_Date)
                ),
                '. Estamos ansiosos a sua participação em nossa equipe e pedimos que, caso tenha alguma dúvida, não hesite em contatar ',
                $('<mark/>').append(
                    employee.Recruiter_Name
                ),
                ' em ',
                $('<mark/>').append(
                    employee.Recruiter_Email
                ),
                '.'
            )
        ),

        // Paragraph 6
        
         $('<div class="offerClause"/>').append(
            $('<p/>').html('<strong>(English)</strong>')
        ),
        
        
        $('<div class="offerClause"/>').append(
            $('<p/>').append( 
                'Dear ',
                $('<mark/>').append(
                    (employee.Preferred_First_Name ? employee.Preferred_First_Name : employee.First_Name)
                ),
                ','
            )
        ),
        
        // Paragraph 7
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Further to our discussions, we are pleased to offer you employment with PayPal Brazil.'
            )
        ),
        // Paragraph 2
        $('<div class="offerClause"/>').append(
            $('<p/>').append(
                'The essential terms of your employment are that you are to join our workforce in the capacity of ',
                $('<mark/>').append(
                    employee.Job_Title
                ),
                ' (System Title: ',
                $('<mark/>').append(
                    employee.System_Title
                ),
                '), reporting to ',
                $('<mark/>').append(
                    employee.Manager_Name
                ),
                ', Team Leader effective ',
                $('<mark/>').append(
                    employee.Start_Date
                ),
                ' at a monthly salary of ',
                $('<mark/>').append(
                    fnFormatCurrency(employee.Salary_Amount)
                ),
                ' ',
                $('<mark/>').append(
                    employee.Salary_Currency
                ),
                ', less all applicable withholdings and statutory deductions.'
            )
        ),
        // Paragraph 3

        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'The balance of the terms and conditions of your employment are those contained in the attached Employment Agreement, which you will be required to sign when you begin employment with the company.'
            )
        ),
        // Paragraph 4
 
        $('<div class="offerClause"/>').append(
            $('<p/>').append(
                'Please indicate your acceptance of this proposal by signing and returning by ',
                $('<mark/>').append(
                    employee.Start_Date
                ),
                '. We very much look forward to your joining our team and ask if you have any questions you do not hesitate to contact ',
                $('<mark/>').append(
                    employee.Recruiter_Name
                ),
                ' at ',
                $('<mark/>').append(
                    employee.Recruiter_Email
                ),
                '.'
            )
        ),
        $('<div class="offerClause"/>').append(
            $('<p/>').html(
                'Sincerely,'
            )
        ),
        $('<div class="offerClause">').append(
            $('<p/>').append(
                $('<span/>').append(
                    $('<mark/>').append(
                        employee.Recruiter_Name
                    ),
                    '<br>'),
                $('<span/>').html('Recruiter')
            )
        ),
        
         $('<div class="offerClause" style="line-height: 0px;"/>').append(
            $('<p/>').html('&nbsp;')
        ),
        
        $('<div class="col-lg-2 offerClause hide"/>').append(
            $('<p class="hide"/>').html(
               '&nbsp;'
            )
        ),
        
        $('<div class="col-lg-10 offerClause hide"/>').append(
            $('<p class="hide"/>').append(
                'Nome do candidato: <mark><u>'+ employee.Full_Legal_Name +'</u></mark>'
            ),
            $('<p class="hide"/>').html(
                'Assinatura: ______________________________'
            ),
            $('<p class="hide"/>').html(
                'Data: ______________________________'
            )
        )
        
        
        // end append
    );

    

   
}

function formatCurrency(total) {
    return parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
}

function fnFormatCurrency(total) {
    if (total) {
        total = (total.indexOf(',') != -1) ? total.split(',').join('') : total;
        return formatCurrency(total);
    } else {
        return '0.00';
    }
}

function fnConvertFullDateBrazil(eventDate) {

    var d = new Date(eventDate);
    console.log(d);
    var months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    

    var year = d.getFullYear(),
        month = d.getMonth(),
        n_date = d.getDate(),
        day = d.getDay();

    return parseInt(n_date) + ' de ' + months[month] + ' de ' + year;
}


$(function() {
    // render template
    fnView();

    // completed letter
    if (!$("input.calendar_button").length) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

        var arrParts = [
            [1, 'hidden_pg']
        ];
        showCompletedOfferLetter('incomplete', 'complete', arrParts);
    }
});
