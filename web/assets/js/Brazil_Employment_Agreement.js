//Brazil Employment Agreement
function fnView() {
    $("#markup").html("").append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p class="margin-bottom-25"/>').html(
                $('<mark/>').append(employee.Current_Date)
            )
        ),
        $('<div class="offerClause">').append(
            $('<p class="margin-bottom"/>').append(
                //$('<span/>').html(employee.Full_Legal_Name + '<br>'),
                $('<mark/>').html($("#printed-employee-name").val().length > 0 ? $("#printed-employee-name").val() : ''), '<br>',
                $('<mark/>').html(employee.Address_Line_1 ? employee.Address_Line_1 + '<br>' : ''),
                $('<mark/>').html(employee.Address_Line_2 ? employee.Address_Line_2 + '<br>' : ''),
                $('<mark/>').html((employee.City ? employee.City + ', ' : '') + (employee.State ? employee.State + ', ' : '') + employee.Postal_Code)
                )
            ),
        $('<div class="offerClause">').append(
            $('<p class="margin-bottom text-center"/>').append(
                $('<span/>').html('<strong>CONTRATO DE TRABALHO</strong>' + '<br>')
            )
        )
    );
    
    $("#markup2").html("").append(
        $('<div class="offerClause2">').append(
            $('<div class="withInput">').append(
                $('<span class="margin-bottom-25"/>').append(
                    'PayPal do Brasil Serviços de Pagamentos Ltda., sociedade brasileira, estabelecida na Cidade de São Paulo, Estado de São Paulo, na Alameda Santos, 787 - 8º. Andar, conj. 81, inscrita no Cadastro Nacional das Pessoas Jurídicas (CNPJ/MF) sob o nº 10878448/0001-66, neste ato representada pelo Sr. Mario Mello abaixo assinado, (doravante designada "EMPREGADORA" ou a “Empresa”), e, do outro lado, ',
                    $('<mark/>').append(
                        ($("#printed-employee-name").val().length > 0 ? $("#printed-employee-name").val() : '')
                    ),
                    ', portador da Carteira de Trabalho e Previdência Social nº ',
                    $('<mark/>').append(
                        $("#ssno-fld").val()
                    ),
                    ', série ',
                    $('<mark/>').append(
                        $("#series-fld").val()
                    ),
                    ', (doravante designado "EMPREGADO"), têm entre si justo e contratado o seguinte:'),
                    $('<p/>').html('')
                )
            )
         // end append
         );
         
    $("#markup3").html("").append(
        $('<div class="offerClause3 margin-bottom-25"/>').append(
            $('<p/>').append(
                $('<ol/>').append(
                    $('<li class="margin-bottom-25"/>').append(
                        $('<span/>').html('A EMPREGADORA, pelo presente, contrata os serviços do EMPREGADO por um prazo de experiência de 90 dias, findo o qual o Contrato passará a vigorar por prazo indeterminado. '),
                        $('<p/>').html(''), 
                        $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">1.1</span> <span class="inl-block-2"> O EMPREGADO é contratado para atuar na posição de <mark>'+ employee.Job_Title +'</mark>.</span>'),
                        $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">1.2</span> <span class="inl-block-2"> O local de trabalho do EMPREGADO será na Cidade de São Paulo, Estado de São Paulo.</span>'),
                        $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">1.3</span> <span class="inl-block-2"> Inobstante a especificação de função acima, poderá a EMPREGADORA alterá-la para outra a seu critério, atendida a condição de melhor capacidade de adaptação do EMPREGADO, bem como a compatibilidade com sua condição pessoal.</span>')
                        ),
                    $('<p class="zero-btm"/>').html(''), 
                    $('<li class="margin-bottom-25"/>').append(
                        $('<span/>').html('Durante a vigência deste Contrato, o EMPREGADO dedicará todo seu tempo de trabalho e atenção durante seu horário de trabalho exclusivamente aos negócios e interesses da EMPREGADORA, desempenhará os seus deveres à satisfação total da EMPREGADORA e fará o máximo para desenvolver os negócios e interesses da EMPREGADORA.')
                        ),
                    $('<p class="zero-btm"/>').html(''),
                    $('<li class="margin-bottom-25"/>').append(
                        $('<span/>').html('Como remuneração pelos serviços prestados sob este Contrato, a EMPREGADORA pagará ao EMPREGADO o salário bruto de <mark>' + employee.Pay_Rate_Amount + employee.Salary_Currency + '</mark> por mês. O EMPREGADO receberá 13º salário conforme previsto em lei.'),
                        $('<p/>').html(''), 
                        $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">3.1</span> <span class="inl-block-2"> O EMPREGADO terá direito aos seguintes benefícios: (i) vale-transporte; (ii) vale-refeição; (iii) plano de saúde e odontológico de acordo com a política interna da EMPREGADORA.</span>'),
                        (employee.CSIncentivePlan.length > 0 || employee.CSIncentivePlan_Fixed.length > 0 ) &&
                        $('<p/>').append(
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block">3.2</mark> <mark class="inl-block-2"> O EMPREGADO será elegível a participar do Plano de Incentivo da EMPREGADORA para empregados da área de atendimento ao Cliente e Operações (“CS & Ops Incentive Plan”). Os termos e condições do Plano serão disponibilizados ao EMPREGADO no CS & Ops Incentive Plan. Esse incentivo poderá ser incluído em um plano participação nos lucros ou resultados, nos termos da Lei 10.101/2000. </mark>')
                            ),
                        ((employee.CSIncentivePlan.length <= 0 && employee.CSIncentivePlan_Fixed.length <= 0 ) && employee.AIP_Target_Pct.length > 0)&&
                        $('<p/>').append(
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block">3.2</mark> <mark class="inl-block-2"> O EMPREGADO será elegível a participar do Plano de Incentivo Anual (AIP) da PayPal Holdings, Inc.. Os termos e condições do Plano serão disponibilizados ao EMPREGADO em política interna da EMPREGADORA. Esse incentivo poderá ser incluído em um plano participação nos lucros ou resultados, nos termos da Lei 10.101/2000.</mark>')
                            ),
                        (employee.SignOn_Bonus == 'Yes')&&
                        $('<p/>').append(
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block">3.3</mark> <mark class="inl-block-2"> O EMPREGADO receberá um bônus de contratação único no valor de ' + employee.Signing_Bonus_Amount + employee.Signing_Bonus_Currency +', menos as retenções aplicáveis, a ser pago nos 30 dias iniciais de trabalho contínuo com a EMPREGADORA. Na hipótese de o EMPREGADO rescindir voluntariamente o seu contrato de trabalho com a EMPREGADORA ou se o EMPREGADO for dispensado pela EMPREGADORA por justa causa antes do primeiro aniversário de seu contrato de trabalho (antes de doze meses completos contados da data da sua contratação), a EMPREGADORA poderá descontar o bônus de contratação, de forma pro rata, das verbas rescisórias devidas ao EMPREGADO até o limite permitido por lei, e, caso esse valor não seja suficiente, o EMPREGADO deverá restituir o bônus de contratação, proporcionalmente.</mark>')
                            ),
                        (employee.Hours_Per_Week == '40' && employee.Manager == 'No' && employee.SignOn_Bonus == 'Yes')&&
                        $('<p/>').append(
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block">3.4</mark> <mark class="inl-block-2"> A jornada de trabalho do EMPREGADO será de 40 (quarenta) horas semanais, de segunda-feira à sábado, sempre com intervalo para refeição e descanso de pelo menos 1 (uma) hora. O período para descanso e refeição não é considerado como parte das horas de trabalho semanais. As horas de trabalho de sábado serão compensadas durante os dias da semana. No entanto, quando necessário, a EMPREGADORA poderá solicitar que o EMPREGADO trabalhe aos sábados sempre limitado a 40 horas semanais. O EMPREGADO deverá cumprir a escala de horários de trabalho definidos pela EMPREGADORA. </mark>'),
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block"></span> <span class="inl-block-2"> A duração do horário de trabalho diário poderá ser prorrogada por mais 2 (duas) horas, consideradas extraordinárias e que, caso não compensadas por sistema de banco de horas válido, deverão ser pagas com acréscimo conforme previsto em lei e nas disposições aplicáveis.</mark>')

                            ),
                        (employee.Hours_Per_Week == '40' && employee.Manager == 'No' && employee.SignOn_Bonus != 'Yes')&&
                        $('<p/>').append(
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block">3.3</mark> <mark class="inl-block-2"> A jornada de trabalho do EMPREGADO será de 40 (quarenta) horas semanais, de segunda-feira à sábado, sempre com intervalo para refeição e descanso de pelo menos 1 (uma) hora. O período para descanso e refeição não é considerado como parte das horas de trabalho semanais. As horas de trabalho de sábado serão compensadas durante os dias da semana. No entanto, quando necessário, a EMPREGADORA poderá solicitar que o EMPREGADO trabalhe aos sábados sempre limitado a 40 horas semanais. O EMPREGADO deverá cumprir a escala de horários de trabalho definidos pela EMPREGADORA. </mark>'),
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block"></mark> <mark class="inl-block-2"> A duração do horário de trabalho diário poderá ser prorrogada por mais 2 (duas) horas, consideradas extraordinárias e que, caso não compensadas por sistema de banco de horas válido, deverão ser pagas com acréscimo conforme previsto em lei e nas disposições aplicáveis.</mark>')

                            ),
                        (employee.Hours_Per_Week == '40' && employee.Manager == 'Yes' && employee.SignOn_Bonus == 'Yes')&&
                        $('<p/>').append(
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block">3.4</mark> <mark class="inl-block-2"> Considerando que os serviços a serem prestados pelo EMPREGADO correspondem àqueles definidos pelo artigo 62 da Consolidação das Leis do Trabalho (CLT), sendo, portanto, incompatíveis com a fixação de jornada de trabalho, o EMPREGADO não estará sujeito à fiscalização ou controle de jornada pelo EMPREGADOR.</mark>')
                            ),
                        (employee.Hours_Per_Week == '40' && employee.Manager == 'Yes' && employee.SignOn_Bonus != 'Yes')&&
                        $('<p/>').append(
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block">3.3</mark> <mark class="inl-block-2"> Considerando que os serviços a serem prestados pelo EMPREGADO correspondem àqueles definidos pelo artigo 62 da Consolidação das Leis do Trabalho (CLT), sendo, portanto, incompatíveis com a fixação de jornada de trabalho, o EMPREGADO não estará sujeito à fiscalização ou controle de jornada pelo EMPREGADOR.</mark>')
                            ),
                        (employee.Hours_Per_Week == '36' && employee.SignOn_Bonus == 'Yes')&&
                        $('<p/>').append(
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block">3.4</mark> <mark class="inl-block-2"> A jornada de trabalho do EMPREGADO será de 36 (trinta e seis) horas semanais, de segunda-feira à sexta-feira, sempre com intervalo para refeição e descanso de pelo menos 1 (uma) hora. O período para descanso e refeição não é considerado como parte das horas de trabalho semanais. O EMPREGADO deverá cumprir a escala de horários de trabalho definidos pela EMPREGADORA.</mark>'),
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block"></mark> <mark class="inl-block-2"> A duração do horário de trabalho diário poderá ser prorrogada por mais 2 (duas) horas, consideradas extraordinárias e que, caso não compensadas por sistema de banco de horas válido, deverão ser pagas com acréscimo conforme previsto em lei e nas disposições aplicáveis.</mark>')
                            
                            ),
                        (employee.Hours_Per_Week == '36' && employee.SignOn_Bonus != 'Yes')&&
                        $('<p/>').append(
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block">3.3</mark> <mark class="inl-block-2"> A jornada de trabalho do EMPREGADO será de 36 (trinta e seis) horas semanais, de segunda-feira à sexta-feira, sempre com intervalo para refeição e descanso de pelo menos 1 (uma) hora. O período para descanso e refeição não é considerado como parte das horas de trabalho semanais. O EMPREGADO deverá cumprir a escala de horários de trabalho definidos pela EMPREGADORA.</mark>'),
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block"></mark> <mark class="inl-block-2"> A duração do horário de trabalho diário poderá ser prorrogada por mais 2 (duas) horas, consideradas extraordinárias e que, caso não compensadas por sistema de banco de horas válido, deverão ser pagas com acréscimo conforme previsto em lei e nas disposições aplicáveis.</mark>')
                            )
                        ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('O EMPREGADO concorda em prestar serviços a outras sociedades do mesmo grupo da EMPREGADORA, dentro do horário normal de trabalho, sem qualquer remuneração adicional.')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('O EMPREGADO concorda em realizar viagens dentro e fora do território nacional sempre que solicitado pela EMPREGADORA, bem como ser transferido a outros lugares do território nacional ou de outros países, em caráter temporário ou definitivo.'),
    $('<p/>').html(''), 
    $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">5.1</span> <span class="inl-block-2">De acordo com as necessidades da EMPREGADORA e dentro do escopo de suas atribuições, o EMPREGADO concorda, ainda, que a EMPREGADORA poderá transferi-lo para outras empresas do mesmo grupo econômico da EMPREGADORA.</span>')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('A EMPREGADORA fica, pelo presente, autorizada a deduzir da remuneração mensal do EMPREGADO as quantias necessárias para cobrir eventuais danos causados pelo EMPREGADO, sejam ou não resultantes de dolo, bem como valores relativos à participação do EMPREGADO no custeio de benefícios mantidos pela EMPREGADORA.')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('O EMPREGADO, por meio desta, reconhece e concorda que todos os equipamentos, computadores e softwares que venha a usar no exercício de suas atividades são exclusivamente de propriedade da EMPREGADORA, incluindo sua conta de correio eletrônico, e que não terá qualquer privacidade ou confidencialidade no acesso à intranet ou à internet da EMPREGADORA, e que poderá ser constantemente inspecionado em tudo o que produzir ou receber por correio eletrônico ou por internet, ou no uso dos softwares da EMPREGADORA.'),
    $('<p/>').html(''),
    $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">7.1</span> <span class="inl-block-2"> Em caso de rescisão deste Contrato ou mediante solicitação antecipada da EMPREGADORA, o EMPREGADO deverá restituir à EMPREGADORA todas e quaisquer propriedades da EMPREGADORA, incluindo propriedades contendo Informações Confidenciais.</span>'),
    $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">7.2</span> <span class="inl-block-2"> Informações Confidenciais são definidas, para fins deste Contrato, como toda e qualquer informação ou conhecimento técnico, administrativo ou comercial, relativo à organização interna da EMPREGADORA, sua clientela, serviços realizados, métodos de trabalho desenvolvidos e tudo o mais que se relacione aos negócios da EMPREGADORA.</span>'),
    $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">7.3</span> <span class="inl-block-2"> No caso de rescisão de contrato de trabalho, o EMPREGADO concorda que, em hipótese nenhuma, após a rescisão, apresentar-se-á como ainda mantendo alguma conexão com a Empresa ou com alguma empresa do mesmo grupo da EMPREGADORA, salvo se como ex-empregado somente para fins de comunicação com futuros empregadores ou conformidade com exigências de lei aplicável.</span>')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('O EMPREGADO autoriza desde já a EMPREGADORA a compartilhar com as demais empresas pertencentes ao mesmo grupo econômico informações pessoais do EMPREGADO que, de alguma forma, estão relacionadas ao seu contrato de trabalho e histórico profissional, como, apenas a título de exemplo, salário, formação acadêmica, histórico profissional, outras informações curriculares, estado civil, etc.. Tais informações pessoais do EMPREGADO também poderão ser compartilhadas com terceiros que tenham a necessidade de ter acesso a elas, tais como empresas de folha de pagamento, administradora do plano de saúde etc..')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('O EMPREGADO concorda em cumprir com todas as leis, regulamentos e normas governamentais do Brasil e dos Estados Unidos da América, durante a vigência deste contrato de trabalho, relacionadas com sua relação de emprego com a EMPREGADORA.'),
    $('<p/>').html(''),
    $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">9.1</span> <span class="inl-block-2"> O EMPREGADO confirma que leu e entendeu as disposições do Acordo de Propriedade das Informações & Invenções (“PIIA”) e concorda em cumprir os termos do referido Acordo. </span>'),
    $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">9.2</span> <span class="inl-block-2"> O EMPREGADO confirma que leu e entendeu as disposições do Código de Conduta de Negócios da PayPal e concorda em cumprir os termos do referido Código.</span>'),
    $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">9.3</span> <span class="inl-block-2">Sem limitar o âmbito de incidência o EMPREGADO afirma e garante que não fez ou fará, a qualquer momento durante a vigência do contrato de trabalho com EMPREGADORA, pagamentos, doações, ofertas ou promessas de pagamento ou doação, de dinheiro ou qualquer outro bem de valor, direta ou indiretamente, para, ou em benefício de: (i) qualquer agente público, partido político ou candidatos a cargos públicos; ou (ii) qualquer outra pessoa, empresa, corporação ou outra entidade com conhecimento de que parte ou o todo do dinheiro ou outro bem de valor será pago, doado, oferecido ou prometido a um agente público, partido político ou candidato a cargo público, a fim de obter ou manter um negócio, ou obter qualquer outra vantagem indevida, relacionados com os negócios da EMPREGADORA.</span>')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('O EMPREGADO reconhece que os produtos da EMPREGADORA e todas as informações técnicas relacionadas a tais produtos, estão sujeitos ao controle de exportação sob as leis e regulamentos do Brasil e dos Estados Unidos da América, incluindo os Regulamentos de Administração de Exportações (“Export Administration Regulations”), “15 C.F.R. Partes 730-774”.'),
    $('<p/>').html(''),
    $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">10.1</span> <span class="inl-block-2">Durante a vigência do Contrato, o EMPREGADO cumprirá estritamente com todos os controles de exportação citados e, sem limitar o âmbito de incidência das mencionadas leis e regulamentos, o EMPREGADO não exportará, reexportará, transferirá ou desviará quaisquer dos produtos da EMPREGADORA, bem como informações técnicas relacionadas a tais produtos, ou qualquer produto direto mencionado, para qualquer destino, uso final ou usuário final que seja proibido ou restrito, à luz das leis e regulamentos de controle de exportação dos Estados Unidos da América, exceto se especificamente autorizado pelo Departamento de Comércio dos Estados Unidos (“United States Department of Commerce”).  </span>')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('O EMPREGADO reconhece e concorda que o desrespeito a quaisquer das provisões contidas neste Contrato de trabalho, sobretudo às cláusulas, nas cláusulas “09, 09.1, 09.2, 10, 10.1”, poderão resultar em ações disciplinares incluindo rescisão do Contrato por justa causa pelo EMPREGADOR.')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('A remuneração devida por qualquer invento ou melhorias desenvolvidas pelo EMPREGADO limitar-se-á aos valores dispostos neste Contrato, salvo disposição em contrário pelas Partes.')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('As partes concordam que, caso qualquer cláusula ou disposição deste Contrato seja declarada ilegal ou sem efeito, tal fato de nenhum modo afetará as demais cláusulas, as quais continuarão em pleno vigor.')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('O presente Contrato será regido pela legislação brasileira, e quaisquer litígios dele decorrentes serão dirimidos perante os foros da Comarca de São Paulo, Cidade de São Paulo, Brasil.')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('O presente Contrato está preparado conjuntamente em português e inglês. Qualquer controvérsia referente a este instrumento deverá ser interpretada na versão em português.')
    ),
$('<p class="zero-btm"/>').html('')



                    )//ol end
)
)
        // end append
        );

$("#markup4").html("").append(
        $('<div class="offerClause4">').append(
        $('<p class="margin-bottom"/>').append(
            $('<p/>').html('E, estando assim ajustadas e contratadas, as partes assinam este Contrato em duas vias, na presença de duas testemunhas.'),
            $('<p class="margin-top-40"/>').html('<span class="margin-right-30 inl-block-1-1">São Paulo, </span><mark class="inl-block-3">'+ $(".date01").eq(0).val() +'</mark>'),
            $('<p class="margin-bottom"/>').html(''),
            $('<p class="margin-top-40"/>').html('<strong>PayPal do Brasil Serviços de Pagamentos Ltda. </strong>'),
$('<p class="margin-top-40"/>').html('')
            )
         )// end append
        );
$("#markup5").html("").append(
    $('<div class="offerClause5">').append(
        $('<p class="margin-bottom margin-top-40 text-center"/>').append(
            $('<span/>').html('<strong>EMPLOYMENT AGREEMENT</strong>' + '<br>')
            )


         // end append
         )
         // end append
    );

$("#markup6").html("").append(
        $('<div class="offerClause6">').append(
            $('<div class="withInput margin-bottom-25">').append(
                $('<span class="margin-bottom-25"/>').html('PayPal do Brasil Serviços de Pagamentos Ltda., a Brazilian company with head offices in the City of Sao Paulo, State of São Paulo, at Alameda Santos, 787 - 8º. Andar, conj. 81, enrolled with the National Taxpayers&#39; Registry under number 10878448/0001-66, represented herein by its undersigned Mr. Mario Mello (hereinafter referred to as the "EMPLOYER" or the “Company”), and, on the other hand, <mark>' + ($("#printed-employee-name").val().length > 0 ? $("#printed-employee-name").val() + ', ' : '') + '</mark>  bearer of the labor booklet nº  <mark>' + $("#ssno-fld2").val() + '</mark>, series <mark>'+ $("#series-fld2").val() +'</mark>-SP (hereinafter referred to as the "EMPLOYEE"), have agreed and contracted the following:')
                )
            )
         // end append
         );

$("#markup7").html("").append(
        $('<div class="offerClause7"/>').append(
            $('<p class="margin-bottom-25"/>').append(
                $('<ol/>').append(
                    $('<li class="margin-bottom-25"/>').append(
                        $('<span/>').html('The EMPLOYER hereby contracts the services of the EMPLOYEE for a trial period of 90 days. At the end of this period, the Agreement shall be in effect for an indefinite period. '),
                        $('<p/>').html(''), 
                        $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">1.1</span> <span class="inl-block-2"> The EMPLOYEE is hired to act as <mark>'+ employee.Job_Title +'</mark>.</span>'),
                        $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">1.2</span> <span class="inl-block-2"> The place of work of the EMPLOYEE will be the City of São Paulo, State of São Paulo. </span>'),
                        $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">1.3</span> <span class="inl-block-2"> Notwithstanding the specification of the position above, EMPLOYER may change it to another one, at its sole discretion, to meet the condition of better adaptation of the EMPLOYEE and compatibility with his or her individual condition.</span>')
                        ),
                    $('<p class="zero-btm"/>').html(''), 
                    $('<li class="margin-bottom-25"/>').append(
                        $('<span/>').html('During the term of this Agreement, the EMPLOYEE shall devote his entire time and attention during his work hours exclusively to the business and interests of the EMPLOYER, shall perform his duties to the entire satisfaction of the EMPLOYER and shall do his utmost to develop the business and interest of the EMPLOYER.')
                        ),
                    $('<p class="zero-btm"/>').html(''),
                    $('<li class="margin-bottom-25"/>').append(
                        $('<span/>').html('As compensation for the services rendered hereunder, the EMPLOYER shall pay to the EMPLOYEE the gross amount of <mark>' + employee.Pay_Rate_Amount + employee.Salary_Currency + '</mark> per month. In addition, the Employee will receive a 13th salary as established by law. '),
                        $('<p/>').html(''), 
                        $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">3.1</span> <span class="inl-block-2"> The EMPLOYEE will be entitled to the following benefits: (i) commute voucher; (ii) meal ticket; (iii) health and dental care in accordance with the EMPLOYER’S internal policy.</span>'),
                        (employee.CSIncentivePlan.length > 0 || employee.CSIncentivePlan_Fixed.length > 0 )&&
                        $('<p/>').append(
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block">3.2</mark> <mark class="inl-block-2"> The EMPLOYEE will be eligible to participate in the EMPLOYER Customer Support & Operations Incentive Plan. The terms and conditions of the Plan will be disclosed to the EMPLOYEE in the CS & Ops Incentive Plan. This target incentive may be included in a profit/result sharing plan under the terms of Law 10.101/2000 </mark>')
                            ),
                        ((employee.CSIncentivePlan.length <= 0 && employee.CSIncentivePlan_Fixed.length <= 0 ) && employee.AIP_Target_Pct.length > 0)&&
                        $('<p/>').append(
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block">3.2</mark> <mark class="inl-block-2"> The EMPLOYEE will be eligible to participate in the PayPal Holdings, Inc. Annual Incentive Plan (AIP). The terms and conditions of the Plan will be disclosed to the EMPLOYEE in the EMPLOYER’s internal policy. This target incentive may be included in a profit/result sharing plan under the terms of Law 10.101/2000.</mark>')
                            ),
                        (employee.SignOn_Bonus == 'Yes')&&
                        $('<p/>').append(
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block">3.3</mark> <mark class="inl-block-2">  The EMPLOYEE will receive a one-time sign-on bonus of  ' + employee.Signing_Bonus_Amount + employee.Signing_Bonus_Currency +', less applicable withholding, to be paid within the EMPLOYEE’s first 30 days of consecutive employment with the EMPLOYER. Should the EMPLOYEE voluntarily terminate his employment with the EMPLOYER, or if the EMPLOYEE is terminated from the EMPLOYER for cause, prior to his first anniversary (before twelve complete months counted as of your hiring date), the EMPLOYER may deduct the sign-on bonus, on a prorated basis, from the EMPLOYEE’s final paycheck, up to the limit authorized by law, and if not sufficient, the EMPLOYEE will be required to repay the sign-on bonus, on a prorated basis.</mark>')
                            ),
                        (employee.Hours_Per_Week == '40' && employee.Manager == 'No' && employee.SignOn_Bonus == 'Yes')&&
                        $('<p/>').append(
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block">3.4</mark> <mark class="inl-block-2"> The working hours of the EMPLOYEE will be 40 (forty) hours per week, from Monday to Saturday, always with time-off for lunch and rest of at least 1 (one) hour, per day. The lunch and rest period is not considered as part of the weekly working hours. The hours that were supposed to be worked on Saturdays will be offset during the week days. However, if needed the EMPLOYER may request to the EMPLOYEE to perform work on Saturdays always limited to the 40 hours work per week. The  EMPLOYEE should comply with the time schedule determined by the EMPLOYER. </mark>'),
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block"></mark> <mark class="inl-block-2"> The daily work-shift may be extended for 2 (two) additional hours, considered as extraordinary hours and which, if not offset against periods of rest as per a valid offsetting system, shall be paid with the increases provided for in the applicable law and applicable provisions.</mark>')

                            ),
                        (employee.Hours_Per_Week == '40' && employee.Manager == 'No' && employee.SignOn_Bonus != 'Yes')&&
                        $('<p/>').append(
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block">3.3</mark> <mark class="inl-block-2"> The working hours of the EMPLOYEE will be 40 (forty) hours per week, from Monday to Saturday, always with time-off for lunch and rest of at least 1 (one) hour, per day. The lunch and rest period is not considered as part of the weekly working hours. The hours that were supposed to be worked on Saturdays will be offset during the week days. However, if needed the EMPLOYER may request to the EMPLOYEE to perform work on Saturdays always limited to the 40 hours work per week. The  EMPLOYEE should comply with the time schedule determined by the EMPLOYER. </mark>'),
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block"></mark> <mark class="inl-block-2"> The daily work-shift may be extended for 2 (two) additional hours, considered as extraordinary hours and which, if not offset against periods of rest as per a valid offsetting system, shall be paid with the increases provided for in the applicable law and applicable provisions.</mark>')

                            ),
                        (employee.Hours_Per_Week == '40' && employee.Manager == 'Yes' && employee.SignOn_Bonus == 'Yes')&&
                        $('<p/>').append(
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block">3.4</mark> <mark class="inl-block-2"> As per the fact that the activities to be performed by the EMPLOYEE are classified under article 62 of the Consolidated Labor Laws (CLT), thus being incompatible with the establishment of work hours, the EMPLOYEE shall not be subjected to have his worked hours controlled by the EMPLOYER.</mark>')
                            ),
                        (employee.Hours_Per_Week == '40' && employee.Manager == 'Yes' && employee.SignOn_Bonus != 'Yes')&&
                        $('<p/>').append(
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block">3.3</mark> <mark class="inl-block-2"> As per the fact that the activities to be performed by the EMPLOYEE are classified under article 62 of the Consolidated Labor Laws (CLT), thus being incompatible with the establishment of work hours, the EMPLOYEE shall not be subjected to have his worked hours controlled by the EMPLOYER.</mark>')
                            ),
                        (employee.Hours_Per_Week == '36' && employee.SignOn_Bonus == 'Yes')&&
                        $('<p/>').append(
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block">3.4</mark> <mark class="inl-block-2"> The working hours of the EMPLOYEE will be 36 (thirty-six) hours per week, from Monday to Friday, always with time-off for lunch and rest of at least 1 (one) hour per day. The lunch and rest period is not considered as part of the weekly working hours. The EMPLOYEE should comply with the time schedule determined by the EMPLOYER.</mark>'),
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block"></mark> <mark class="inl-block-2"> The daily work-shift may be extended for 2 (two) additional hours, considered as extraordinary hours and which, if not offset against periods of rest as per a valid offsetting system, shall be paid with the increases provided for in the applicable law and applicable provisions.</mark>')
                            
                            ),
                        (employee.Hours_Per_Week == '36' && employee.SignOn_Bonus != 'Yes')&&
                        $('<p/>').append(
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block">3.3</mark> <mark class="inl-block-2"> The working hours of the EMPLOYEE will be 36 (thirty-six) hours per week, from Monday to Friday, always with time-off for lunch and rest of at least 1 (one) hour per day. The lunch and rest period is not considered as part of the weekly working hours. The EMPLOYEE should comply with the time schedule determined by the EMPLOYER.</mark>'),
                            $('<p/>').html('<mark class="margin-right-15 margin-left-15 inl-block"></mark> <mark class="inl-block-2"> The daily work-shift may be extended for 2 (two) additional hours, considered as extraordinary hours and which, if not offset against periods of rest as per a valid offsetting system, shall be paid with the increases provided for in the applicable law and applicable provisions.</mark>')
                            )
                        ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('The EMPLOYEE agrees to render services to other companies of the same group of the EMPLOYER, during the usual working hours, with no right to any additional remuneration.')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('The EMPLOYEE agrees to travel inside or outside Brazil whenever so requested by the EMPLOYER, as well as to be transferred to other places within the Brazilian territory or other countries whether temporarily or permanently.'),
    $('<p/>').html(''), 
    $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">5.1</span> <span class="inl-block-2">According to the needs of EMPLOYER and within the scope of his/her responsibilities, EMPLOYEE also agrees that EMPLOYER may transfer the EMPLOYEE for other companies from the same economic group of EMPLOYER.</span>')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('The EMPLOYER is hereby authorized to deduct from the EMPLOYEE&#39;s compensation the amount necessary to cover possible damages caused by the  EMPLOYEE, whether or not caused by willful misconduct ("dolo"), as well as the amounts corresponding to the participation of the EMPLOYEE in the payment of benefits granted by the EMPLOYER.')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('The EMPLOYEE hereby acknowledges and agrees that all the equipment, computers and software that he may use in connection with his activities are exclusively owned by the EMPLOYER, including his e-mail, and that he will have no privacy or confidentiality when he accesses the EMPLOYER’s intranet or the Internet, and that he may be constantly subject to inspections regarding everything that he produces or receives through e-mail or the Internet, or by using the EMPLOYER’s software.'),
    $('<p/>').html(''),
    $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">7.1</span> <span class="inl-block-2"> Upon the termination of this Agreement or upon the EMPLOYER’s earlier request, the EMPLOYEE will return to the EMPLOYER any and all the EMPLOYER property, including property containing Confidential Information.</span>'),
    $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">7.2</span> <span class="inl-block-2"> For purposes of this Agreement, Confidential Information are defined as any information or technical, administrative or commercial data related to the internal organization of the EMPLOYER, its clients, services provided, working methods developments and everything else which is related to the business of the EMPLOYER.</span>'),
    $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">7.3</span> <span class="inl-block-2"> In the event of termination of your employment hereunder, the Employee agrees that he/she will not at any time after such termination represent himself/herself as still having any connection with the Company or any other company of the same group of the EMPLOYER save as a former employee for the purposes only of communicating with prospective employers or complying with any applicable statutory requirements. </span>')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('The EMPLOYEE authorizes the EMPLOYER to share with the other companies that belong to the same economic group, personal information of the EMPLOYEE that, in some way, is related to his employment agreement and professional history, such as, for instance, salary, education, prior jobs, other curricular information, marital status, etc.. The disclosure of such information may also be made to third parties that need to have access to such information, such as the payroll provider and the health care management company.')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('The EMPLOYEE agrees to comply with all applicable laws, regulations, and governmental orders of Brazil and the United States, now or hereafter in effect, relating to his employment by the EMPLOYER.'),
    $('<p/>').html(''),
    $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">9.1</span> <span class="inl-block-2"> The EMPLOYEE confirms that he has read and understood the provisions of the Proprietary Information & Inventions Agreement (“PIIA”), and agrees to fully comply with the PIIA.</span>'),
    $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">9.2</span> <span class="inl-block-2"> The EMPLOYEE confirms that he has read and understands the provisions of the PayPal Code of Business Conduct and Ethics, and agrees to fully comply with the Code.</span>'),
    $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">9.3</span> <span class="inl-block-2"> Without limiting the generality of the foregoing, the EMPLOYEE represents and warrants that he has not, and shall not at any time during his employment with the EMPLOYER, pay, give, or offer or promise to pay or give, any money or any other thing of value, directly or indirectly, to, or for the benefit of: (i) any government official, political party or candidate for political office; or (ii) any other person, firm, corporation or other entity, with knowledge that some or all of that money or other thing of value will be paid, given, offered or promised to a government official, political party or candidate for political office, for the purpose of obtaining or retaining any business, or to obtain any other unfair advantage, in connection with the EMPLOYER’s business. </span>')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('The EMPLOYEE acknowledges that the EMPLOYER’s products, and all technical data pertaining to those products, are subject to export controls under the laws and regulations of Brazil, and the United States, including the Export Administration Regulations, 15 C.F.R. Parts 730-774.'),
    $('<p/>').html(''),
    $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">10.1</span> <span class="inl-block-2">During his employment with the EMPLOYER, the EMPLOYEE shall comply strictly with all such export controls, and, without limiting the generality of this Clause, the EMPLOYEE shall not export, reexport, transfer or divert any of the Company products, and technical data pertaining to such EMPLOYER products, or any direct product thereof to any destination, end-use or end-user that is prohibited or restricted under United States of America export control laws and regulations, except as specifically authorized by the United States Department of Commerce. </span>')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('The EMPLOYEE acknowledges and agrees that breach of any provisions of this employment agreement, particularly the provisions of the clauses “09, 09.1, 09.2, 10, 10.1”, may result in disciplinary action up to and including termination with cause of the employment agreement by the EMPLOYER.')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('The remuneration due in consideration for any invention or improvements developed by the EMPLOYEE will be limited to the amounts established in this Agreement, unless agreed otherwise by the Parties.')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('The parties agree that, in the event any clause or provision of this Agreement shall be deemed illegal or ineffective, such event shall not in any way affect the remaining clauses, which shall continue in full force.')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('Brazilian laws will govern this Agreement, and any disputes arising therefrom shall be settled in the Courts of São Paulo, City of São Paulo, Brazil.')
    ),
$('<p class="zero-btm"/>').html(''),
$('<li class="margin-bottom-25"/>').append(
    $('<span/>').html('This Agreement is made in both Portuguese and English. Should there be any inconsistencies due to difference of language interpretation, the Portuguese version shall prevail. ')
    ),
$('<p class="zero-btm"/>').html('')



                    )//ol end
)
)
        // end append
        );

$("#markup8").html("").append(
        $('<div class="offerClause8">').append(
        $('<p class="margin-bottom"/>').append(
            $('<p/>').html('And being thus agreed and contracted, the parties sign this Agreement in two copies, in the presence of two witnesses. '),
            $('<p class="margin-top-40"/>').html('<span class="margin-right-30 inl-block-1-1">São Paulo, </span><span class="inl-block-4"><mark>'+ $(".date02").eq(0).val() +'</mark></span>'),
            $('<p class="margin-bottom"/>').html(''),
            $('<p class="margin-top-40"/>').html('<strong>PayPal do Brasil Serviços de Pagamentos Ltda. </strong>'),
$('<p class="zero-btm"/>').html('')
            )
         )// end append
        );


    }

    $(function() {
    // render template
    fnView();

    // completed letter
    if (!$("input.calendar_button").length) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");
/*
        var arrParts = [
        [1, 'hidden_pg'],
        [1, 'hidden_pg2'],
        [1, 'hidden_pg3'],
        [1, 'hidden_pg4'],
        [1, 'hidden_pg5'],
        [1, 'hidden_pg6'],
        [1, 'hidden_pg7'],
        [1, 'hidden_pg8']

        ];

        showCompletedOfferLetter('incomplete', 'complete', arrParts);
*/
    }
});
