// Brazil_-_Employment_Contract - SERVICES-42128
//by cdy
function fnView() {
    $("#markup1").html("").append(
            $('<div class="offerClause"/>').append(
                $('<p class="text-center"/>').html('&nbsp;'),
                $('<p class="text-center"/>').append(
                    '<strong><u>CONTRATO DE TRABALHO</u></strong>'),

                $('<p/>').html('Pelo presente instrumento, <strong>' + employee.Legal_Entity +'</strong> com sede na <strong>' + employee.SMC_Work_Location + '</strong>, inscrita no CNPJ sob nº <strong>' + employee.SMC_Legal_Entity_Tax_ID + '</strong>, doravante denominada <strong>EMPRESA</strong>, uma subsidiária do UBS AG ("<strong>UBS</strong>") e ' + employee.Legal_First_Name + ' ' + employee.Legal_Middle_Name + employee.Legal_Last_Name + ' (i) ' + employee.MaritalStatus + ', (ii) ' + employee.SMC_RG + ' (Registro Geral)  (iii) ' + employee.SMC_CPF + ' (Cadastro de Pessoas Físicas), e (iv) ' + employee.Address1 + ' ' + employee.Address2 + ' ' + employee.City + ' ' + employee.State + ' ' + employee.Zip + ' doravante denominado <strong>EMPREGADO</strong>, firmam este <strong>CONTRATO DE TRABALHO</strong> (“<strong>CONTRATO DE TRABALHO</strong>”), conforme cláusulas e condições seguintes mutuamente aceitas pelas partes:'),

                
                (employee.SMC_Exempt == 'Exempt') &&
                $('<p/>').html('<strong>1.</strong> O <strong>EMPREGADO</strong> trabalhará para a <strong>EMPRESA</strong> no cargo de ' + employee.Business_Title + ', comprometendo-se a executar todo e qualquer serviço inerente a esse cargo, além de outros que sejam compatíveis com sua condição pessoal, enquadrando-se no inciso II do art. 62 da CLT.'),

                (employee.SMC_Exempt == 'Exempt') &&
                $('<p/>').html('<strong>2.</strong> Em razão do enquadramento no inciso II do art. 62 da CLT, o <strong>EMPREGADO</strong> não estará sujeito a controle e fiscalização de horário de trabalho, nem terá direito a horas extras.'),
            

                
                (employee.SMC_Exempt == 'Non-Exempt') &&
                $('<p/>').html('<strong>1.</strong> O <strong>EMPREGADO</strong> trabalhará para a <strong>EMPRESA</strong> no cargo ' + employee.Business_Title + ', comprometendo-se a executar todo e qualquer serviço inerente a este cargo, além de outros que sejam compatíveis com sua condição pessoal.'),

                (employee.SMC_Exempt == 'Non-Exempt') &&
                $('<p/>').html('<strong>2.</strong> O horário a ser cumprido pelo <strong>EMPREGADO</strong> será o seguinte:'),

                (employee.SMC_Rank == 'EE' || employee.SMC_Rank == 'AO') &&
                $('<p/>').html('Segunda à sexta-feira, das <strong>' + employee.SMC_Hourly_Schedule_Start +'</strong> horas às <strong>' + employee.SMC_Hourly_Schedule_End + '</strong> horas, com 1 hora de intervalo para repouso e alimentação.'),
    

                $('<p/>').html('<strong>3.</strong> A <strong>EMPRESA</strong> está autorizada pelo <strong>EMPREGADO</strong> a transferir ou mudar o <strong>EMPREGADO</strong> para outro departamento, filial ou <strong>EMPRESA</strong> de seu grupo econômico, a qualquer momento, seja de forma temporária, seja definitiva.'),

                $('<p/>').html('<strong>4.</strong> A prestação de serviço a mais de uma empresa do grupo econômico, já existente ou que venha a ser constituída, durante a mesma jornada de trabalho, <strong><u>não</u></strong> caracteriza a coexistência de mais de um contrato de trabalho.'),

                $('<p/>').append(

                    $('<span/>').html('<strong>5.</strong> Para todos os serviços prestados à <strong>EMPRESA</strong> ou para qualquer <strong>EMPRESA</strong> do mesmo grupo econômico, o <strong>EMPREGADO</strong> receberá um salário mensal fixo bruto de R$' + employee.Monthly_Salary),

                    // (employee.Legal_Entity_Code == 'D186' || employee.Legal_Entity_Code == '4052' || employee.Legal_Entity_Code == '4054' || employee.Legal_Entity_Code == '4050' ) &&
                    $('<span/>').html(' e gratificação bruta de R$' + employee.SMC_Gross_Bonus),

                    $('<span/>').html(', que podem ser pagos diretamente ao <strong>EMPREGADOM</strong> ou podem ser depositados em uma conta bancária em seu nome.')
                ),

                $('<p/>').html('<strong>5.1.</strong> O <strong>EMPREGADO</strong> autoriza a <strong>EMPRESA</strong> a efetuar deduções de sua remuneração em relação a (i) seguro de vida, (ii) transporte, (iii) assistência médica ou odontológica, (iv) alimento, incluindo, por exemplo, vale-refeição ou alimentação; (v) medicamentos, (vi) plano de aposentadoria, (vii) cesta básica etc., quando esses forem concedidos ao <strong>EMPREGADO</strong> a critério da <strong>EMPRESA</strong>, por lei ou por acordo coletivo.'),

                $('<p/>').html('<strong>5.2.</strong> Em caso de danos causados pelo <strong>EMPREGADO</strong>, por culpa ou dolo, seja qual for a sua natureza e origem, à <strong>EMPRESA</strong> é facultado o desconto, não só nos salários, como, igualmente, na gratificação natalina, incentivos discricionários, férias, aviso prévio, bem como em todas as demais parcelas laborais.'),

                $('<p/>').html('<strong>6.</strong> O <strong>EMPREGADO</strong> pode ter direito a incentivos discricionários de várias naturezas, por diferentes razões e visando a diferentes propósitos em montantes determinados a critério da <strong>EMPRESA</strong>, desde que nem o <strong>EMPREGADO</strong> nem a <strong>EMPRESA</strong> tenham fornecido notificação de término do <strong>CONTRATO DE TRABALHO</strong> antes da data de pagamento de incentivos, conforme previsto nos instrumentos de concessão em questão. A concessão ou não de incentivos discricionários e seu valor, prazos e condições serão determinados de acordo com o exclusivo critério do <strong>UBS</strong> e serão comunicados ao <strong>EMPREGADO</strong> quando da concessão. O recebimento de incentivos estará sujeito às leis e regulamentos aplicáveis, bem como às políticas do <strong>UBS</strong> e da <strong>EMPRESA</strong>, que podem ser alteradas ou retiradas a qualquer momento, a critério único e exclusivo do <strong>UBS</strong> e da <strong>EMPRESA</strong>.'),

                $('<p/>').html('<strong>6.1.</strong> Como os incentivos são discricionários, a concessão de um incentivo ao <strong>EMPREGADO</strong> por alguma razão particular não garante o direito a um incentivo futuro. A concessão de um determinado tipo de incentivo ao <strong>EMPREGADO</strong> também não garante o direito à concessão do mesmo tipo de incentivo no futuro, ainda que o motivo ou o propósito da concessão de tal incentivo sejam os mesmos. Montantes de incentivos, se e quando concedidos, podem variar em cada caso, uma vez que são determinados pela <strong>EMPRESA</strong> a seu critério único e exclusivo e, portanto, podem ser maiores ou menores do que os concedidos no passado ou no futuro.'),

                $('<p/>').html('<strong>6.2.</strong> Incentivos discricionários podem ser concedidos por meio de um pagamento em dinheiro ou em instrumentos diferidos (que podem incluir, sem limitação, ações restritas, pagamentos condicionais futuros ou instrumentos de dívida). Quando os incentivos discricionários forem concedidos por meio de instrumentos diferidos, eles podem estar sujeitos a determinadas condições de aquisição de direito e/ou caducidade, que podem ser vinculadas e condicionadas a uma variedade de fatores, incluindo, sem limitação, fatores relacionados ao <strong>EMPREGADO</strong>, à <strong>EMPRESA</strong> ou ao <strong>UBS</strong>, incluindo a continuidade de contratação do <strong>EMPREGADO</strong> pela <strong>EMPRESA</strong> ou o <strong>UBS</strong>, conforme detalhado nos documentos para a concessão em questão e estarão sujeitos aos termos e condições de qualquer plano de incentivo, conforme a <strong>EMPRESA</strong> ou o <strong>UBS</strong> possa implementar, de tempos em tempos, a seu critério único e exclusivo.  Para dirimir quaisquer dúvidas, os incentivos concedidos em instrumentos diferidos não são obtidos até que eles sejam adquiridos por direito e somente no caso de não nenhuma disposição de caducidade sob as regras aplicáveis do plano ter sido acionada.'),

                $('<p/>').html('<strong>7.</strong> Vigorará o presente <strong>CONTRATO DE TRABALHO</strong> pelo prazo determinado de 45 dias, a título de experiência, na forma do art. 443, parágrafo 2º, alínea c, da CLT, sem prejuízo de todas as cláusulas e condições aqui ajustadas, que permanecerão em vigor até a rescisão do vínculo empregatício.'),

                $('<p/>').html('<strong>7.1.</strong> Caso não haja manifestação das partes em contrário, o período de experiência será prorrogado, automaticamente, por mais 45 dias.'),

                $('<p/>').html('<strong>7.2.</strong> As hipóteses de auxílio-doença ou acidente do trabalho <u>não</u> interrompem a contagem dos dias correspondentes ao período de experiência, facultado à <strong>EMPRESA</strong>, assim, considerar extinto o presente <strong>CONTRATO DE TRABALHO</strong>, após o decurso do período total da experiência, ainda que o <strong>EMPREGADO</strong> esteja afastado pelos motivos mencionados. Se, entretanto, após os 45 dias a que se refere a cláusula 7 não houver manifestação em contrário de ambas as partes, prorrogar-se-á o presente <strong>CONTRATO DE TRABALHO</strong> por prazo indeterminado.'),

                $('<p/>').html('<strong>8.</strong> O <strong>EMPREGADO</strong> declara estar ciente de que deverá agir em estrita obediência às leis aplicáveis, regras e regulamentos, normas, políticas, procedimentos e diretrizes internas do <strong>UBS</strong>, ou das demais pessoas jurídicas de seu grupo econômico, dentre as quais, exemplificativamente, o Manual de Compliance, o Regulamento Interno, o Código de Conduta e Ética (Code of Business Conduct and Ethics), as políticas do Compliance, o Manual do Funcionário (Employee Handbook) a Política de Presentes (Gift Policy) e outras constantes da Intranet do <strong>UBS</strong> e do endereço UBS Policies On-Line (“<strong>POLO</strong>”), que se compromete a cumprir. A violação a qualquer uma delas por parte do <strong>EMPREGADO</strong> implicará sanção disciplinar, podendo culminar na rescisão do contrato de trabalho por justa causa, além de sua responsabilização nas esferas competentes pelos prejuízos causados. Independentemente dos eventuais treinamentos a ser ministrados relativamente a tais documentos, é dever do <strong>EMPREGADO</strong> se informar a respeito de tais normas internas, e eventuais dúvidas devem ser encaminhadas em tempo ao seu superior e ao Departamento de Compliance ou Departamento de Recursos Humanos, conforme o caso.'),

                $('<p/>').html('<strong>8.1.</strong> O <strong>EMPREGADO</strong> está ciente de que a <strong>EMPRESA</strong> e <strong>UBS</strong> poderão instituir a qualquer tempo novas regras e regulamentos, de observância obrigatória, que serão informadas por e-mail ou mediante publicação na Intranet ou por qualquer outro meio, aplicando-se a elas o disposto na cláusula 8 acima. '),

                $('<p/>').html('<strong>8.2.</strong> O <strong>EMPREGADO</strong>, neste ato, toma ciência da proibição de utilização de aparelhos celulares em mesa de operações, bem como de quaisquer procedimentos de gravação de ligações telefônicas do UBS e monitoramento do e-mail corporativo e programas de mensagem instantânea, mantida pela <strong>EMPRESA</strong> para segurança de seus empregados, de seus clientes e de seus negócios; das normas internas relacionadas ao Manual do Funcionário e das normas internas relativas a Compliance (normas de conduta relacionadas a integridade e comportamento).'),

                $('<p/>').html('<strong>8.3.</strong> O <strong>EMPREGADO</strong> reconhece que investimentos em instrumentos financeiros privados novos e existentes, incluindo aqueles investimentos envolvendo valores mobiliários listados ou não ou registrados publicamente ou não, e quaisquer derivativos relacionados, incluindo ações cotadas ou não, investimentos em fundos, parcerias privadas e investimento em empresas constituídas sob qualquer forma jurídica, devem ser comunicados pelo <strong>EMPREGADO</strong> à <strong>EMPRESA</strong> e previamente aprovados pelo Compliance.'),

                $('<p/>').html('<strong>8.4.</strong> O <strong>EMPREGADO</strong> reconhece que as políticas da <strong>EMPRESA</strong> exigem prévia aprovação pelo Compliance para o exercício de quaisquer outras atividades ou funções externas. O <strong>EMPREGADO</strong> reconhece, ainda, que o exercício de funções de consultoria e a participação do <strong>EMPREGADO</strong> como membro de conselhos em empresas de capital aberto é, em geral, proibido.'),

                $('<p/>').html('<strong>8.5.</strong> O <strong>EMPREGADO</strong> reconhece que a continuidade do presente contrato de trabalho depende de o <strong>EMPREGADO</strong> cumprir com os requisitos de licenciamento, autorizações e certificações relacionadas às funções por ele exercidas junto aos órgãos responsáveis, conforme exigido pelos órgãos de regulação e de autorregulação.'),

                $('<p/>').html('<strong>8.6.</strong> O <strong>EMPREGADO</strong> reconhece e concorda em cumprir com as políticas aplicáveis em relação ao trading de valores mobiliários pessoais, incluindo os requisitos para:'),

                $('<ul/>').append(
                    $('<p/>').html('a) divulgar todas as contas pessoais (inclusive todas as contas dos membros da família) no prazo de 7 dias da execução deste <strong>CONTRATO DE TRABALHO</strong>;'),
                    $('<p/>').html('b) obter aprovação prévia do Compliance de todas as operações com valores mobiliários (antes da colocação da ordem pelo <strong>EMPREGADO</strong>) e da realização de todas as negociações por meio da <strong>EMPRESA</strong>; e'),
                    $('<p/>').html('(c) fornecer ao Compliance cópia das confirmações e extratos mensais de conta se necessário.')
                
                ),

                $('<p/>').html('<strong>9.</strong> Fica expressamente proibida ao <strong>EMPREGADO</strong> a utilização ou a instalação de qualquer software que não seja de propriedade da <strong>EMPRESA</strong> ou de empresa contratada, bem como a reprodução/cópia de qualquer software e sua respectiva documentação, salvo autorização escrita da <strong>EMPRESA</strong>, do fabricante ou do fornecedor.'),

                $('<p/>').html('<strong>9.1.</strong> O uso pelo <strong>EMPREGADO</strong> dos recursos da <strong>EMPRESA</strong> para fins particulares ou a reprodução de qualquer software ou sua documentação, caracteriza falta grave para a rescisão deste contrato de trabalho, independentemente de outras medidas legais cabíveis.'),

                $('<p/>').html('<strong>10.</strong> O <strong>EMPREGADO</strong> concorda em proteger todos os pins e senhas pelos quais o <strong>EMPREGADO</strong> é responsável contra a divulgação não autorizada ou uso indevido, de acordo com as normas internas da <strong>EMPRESA</strong>.'),

                $('<p/>').html('<strong>11.</strong> O <strong>EMPREGADO</strong> está ciente de que os equipamentos e meios de comunicação colocados à sua disposição pela <strong>EMPRESA</strong> destinam-se exclusivamente ao desempenho de suas atribuições na <strong>EMPRESA</strong>.'),

                $('<p/>').html('<strong>11.1.</strong> A <strong>EMPRESA</strong> poderá monitorar e gravar o conteúdo de e-mails, mensagens trocadas via MSN e outros mensageiros ou qualquer outra forma de comunicação disponibilizada pela <strong>EMPRESA</strong>, bem como manter gravação de todas as conversas telefônicas mantidas no interior da <strong>EMPRESA</strong> e usar o resultado de tal monitoração e gravação.'),

                $('<p/>').html('<strong>11.2.</strong> O <strong>EMPREGADO</strong> está ciente de que não há privacidade nos telefonemas, mensagens enviadas através de correio eletrônico (e-mail) corporativo, sistema de mensagem instantâneo e demais meios de comunicação similares disponibilizado pela <strong>EMPRESA</strong>.'),

                $('<p/>').html('<strong>12.</strong> O <strong>EMPREGADO</strong> consente com o tratamento de seus dados pessoais (inclusive sensíveis), pela <strong>EMPRESA</strong>, a fim de possibilitar o cumprimento de obrigações legais e regulatórias, bem como para viabilizar a execução do presente <strong>CONTRATO DE TRABALHO</strong>.'),

                $('<p/>').html('<strong>12.1.</strong> O <strong>EMPREGADO</strong> reconhece que o <strong>UBS</strong> opera em todo o mundo por meio de filiais, grupos comerciais, empresas afiliadas e subsidiárias, podendo o compartilhamento de dados ocorrer:'),

                $('<ul/>').append(
                    $('<p/>').html('a) com grupos filiais, grupos comerciais, empresas afiliadas e subsidiárias em todo o mundo;'),
                    $('<p/>').html('b) com terceiros desempenhando funções, em todo o mundo, em nome do <strong>UBS</strong>;'),
                    $('<p/>').html('c) com empresas contratadas;'),
                    $('<p/>').html('d) com órgãos e entidades governamentais.')
                
                ),

                $('<p/>').html('<strong>12.2.</strong> O <strong>EMPREGADO</strong> reconhece que, com este <strong>CONTRATO DE TRABALHO</strong>, teve acesso à Nota de Privacidade disponibilizada pelo <strong>UBS</strong> com explicações acerca da coleta, tratamento e armazenagem de dados pessoais em vista dos aspectos aplicáveis sob a LGPD, bem como acerca das motivações e as bases legais para o uso de dados e controles de segurança de dados em vigor, informações sobre direitos individuais e seu exercício'),

                $('<p/>').html('<strong>12.2.1.</strong> O <strong>EMPREGADO</strong> toma ciência de que a Nota de Privacidade poderá ser consultada pelo link <a href="https://intranet.ubs.net/en/corporate-center/human-resources/inside-hr/hr-service-management/hr-information-security-and-data-protection/privacy-notices.html" target="_blank">goto/privacy-notice</a> e que, em caso de dúvidas ou questões relacionadas à proteção de dados, o Escritório de Proteção de Dados poderá ser contactado através do e-mail <a href="mailto:dpo-americas@ubs.com" target="_blank">dpo-americas@ubs.com</a>'),

                $('<p/>').html('<strong>13.</strong> O desenvolvimento de novos produtos ou aperfeiçoamento dos já existentes, bem como novos processos, softwares e invenções em geral, feitos pelo <strong>EMPREGADO</strong>, enquanto a serviço da <strong>EMPRESA</strong>, isoladamente ou em grupo, pertencerão exclusivamente à <strong>EMPRESA</strong>, nos termos da Lei de Propriedade Industrial Brasileira (Lei Federal nº 9279/96) e da Lei Brasileira de Software (Lei Federal nº 9609/98).'),

                $('<p/>').html('<strong>13.1.</strong> Conforme previsto com mais detalhes no Contrato Relativo ao Tratamento de Informações Confidenciais e de Cessão de Invenções do <strong>EMPREGADO</strong>, anexado a este como “Anexo A” para assinatura do <strong>EMPREGADO</strong>, o EMPREGADO reconhece e concorda que todo e qualquer direito de propriedade intelectual relacionado a ou do produto de seu trabalho, criado durante o período de vigência do <strong>CONTRATO DE TRABALHO</strong> e/ou qualquer prorrogação deste, incluindo, mas não limitado a qualquer documento, material, informações, processo interno, programa e/ou sistema, pertencerá à <strong>EMPRESA</strong>.'),

                $('<p/>').html('<strong>13.2.</strong> O <strong>EMPREGADO</strong> concorda em não questionar, disputar ou contestar, durante ou após o prazo do contrato de trabalho, a propriedade de todo e qualquer direito de propriedade intelectual.'),

                $('<p/>').html('<strong>14.</strong> O <strong>EMPREGADO</strong> compromete-se, durante todo o contrato de trabalho e após seu término a manter em segredo e a não usar, em prejuízo da <strong>EMPRESA</strong>, informações sobre os negócios desta, de qualquer empresa do mesmo grupo econômico, de clientes e de outras pessoas que fazem negócios com a <strong>EMPRESA</strong>, de fornecedores de bens ou de prestadores de serviços para a <strong>EMPRESA</strong>, bem como demais informações das quais venha a tomar conhecimento em virtude deste Contrato.'),

                $('<p/>').html('<strong>14.1.</strong> O <strong>EMPREGADO</strong> reconhece que as informações de que trata a Cláusula 14 acima podem incluir informações relativas à propriedade intelectual, a informações financeiras, pessoais ou não, projeções, informações relativas a planejamento estratégico, assim como quaisquer informações não públicas, produtos de trabalho etc., as quais serão, em sua integralidade, tratadas como informações confidenciais (“<strong>INFORMAÇÕES CONFIDENCIAIS</strong>”).'),

                $('<p/>').html('<strong>14.2.</strong> O <strong>EMPREGADO</strong> compromete-se a não revelar a qualquer funcionário ou pessoa ligada à <strong>EMPRESA</strong>, eventuais <strong>INFORMAÇÕES CONFIDENCIAIS</strong> ou segredos de negócios a que tenha tido acesso em razão de suas anteriores relações de emprego.'),

                $('<p/>').html('<strong>14.3.</strong> O <strong>EMPREGADO</strong> reconhece que, durante a vigência deste contrato de trabalho e mesmo após sua rescisão, deverá devolver à <strong>EMPRESA</strong> todas as cópias de <strong>INFORMAÇÕES CONFIDENCIAIS</strong> que estejam em sua posse. A obrigação aqui prevista aplica-se independentemente de solicitação expressa da <strong>EMPRESA</strong> quanto à devolução de tais informações e do meio ou forma de seu armazenamento.'),

                $('<p/>').html('<strong>14.4.</strong> O <strong>EMPREGADO</strong> compromete-se a não usar ou divulgar as <strong>INFORMAÇÕES CONFIDENCIAIS</strong> da <strong>EMPRESA</strong>, qualquer que seja o motivo, exceto se exigido por lei. Adicionalmente, se um tribunal, agência governamental, autarquia ou autoridade regulatória vier a solicitar a divulgação de qualquer <strong>INFORMAÇÃO CONFIDENCIAL</strong> da <strong>EMPRESA</strong>, o <strong>EMPREGADO</strong> compromete-se, desde já, a imediatamente notificá-la, por escrito, para que a <strong>EMPRESA</strong> tenha a oportunidade de responder a tal solicitação. Esta cláusula será aplicável inclusive após o término da vigência deste contrato de trabalho.'),

                $('<p/>').html('<strong>14.5.</strong> O <strong>EMPREGADO</strong>, reconhecendo que terá acesso a <strong>INFORMAÇÕES CONFIDENCIAIS</strong> e, portanto, reconhecendo ser razoável e necessário à <strong>EMPRESA</strong> protegê-las, compromete-se, durante a vigência deste contrato de trabalho, e inclusive, em caso de seu desligamento, por sua iniciativa ou por iniciativa da <strong>EMPRESA</strong>, durante período de aviso prévio trabalhado  a cumprir todos os deveres e responsabilidades estabelecidos pela <strong>EMPRESA</strong>, dedicando suas habilidades, energias e trabalho para os negócios desta.'),

                $('<p/>').html('<strong>15.</strong> É vedado ao <strong>EMPREGADO</strong> prestar informações internas da <strong>EMPRESA</strong>, bem como de seus clientes a quaisquer veículos de comunicação, especialmente, rádio, televisão, jornal, sem a prévia autorização por escrito da diretoria da <strong>EMPRESA</strong>.'),

                $('<p/>').html('<strong>16.</strong> Desde que ocupante do cargo de “Director” (DI), “Executive Director” (ED), “Managing Director” (MD) ou “Membro do Comitê Executivo”, o <strong>EMPREGADO</strong> que deseje rescindir o <strong>CONTRATO DE TRABALHO</strong> deverá informar previamente a <strong>EMPRESA</strong> com a antecedência indicada no item 16.1, período este em que o <strong>EMPREGADO</strong> permanecerá afastado do exercício de suas atribuições, mantida a remuneração, assumindo, porém, o compromisso de não competir, não podendo prestar, direta ou indiretamente (pessoalmente, mediante participação em sociedade ou por meio de terceiros), a qualquer empresa concorrente, serviço relacionado com o objeto social da <strong>EMPRESA</strong>, de suas controladoras, controladas e/ou demais entidades integrantes do Grupo UBS.'),

                $('<p/>').html('<strong>16.1.</strong> As obrigações acima subsistem para os cargos e durante os prazos especificados abaixo, devendo a contagem do período de interrupção do <strong>CONTRATO DE TRABALHO</strong> se dar a partir da manifestação de intenção do <strong>EMPREGADO</strong>, verbal ou escrita, de encerrar o <strong>CONTRATO DE TRABALHO</strong>:')




        )//end of offerClause
    );
 // End markup1 append

$("#markup2").html("").append(
        $('<div class="offerClause2"/>').append(
                $('<p/>').html('<strong>16.2.</strong> O <strong>EMPREGADO</strong> está ciente de que, na eventualidade de ser promovido, estará sujeito à aplicação do prazo correspondente ao novo cargo alcançado.'),

                $('<p/>').html('<strong>16.3.</strong> A rescisão do <strong>CONTRATO DE TRABALHO</strong>, a contagem do aviso prévio e demais obrigações relacionadas ao término da relação contratual serão efetivadas após o cumprimento integral dos prazos estipulados no item 16.1.'),

                $('<p/>').html('<strong>16.4.</strong> Dada a natureza das atividades da <strong>EMPRESA</strong>, as obrigações acima devem ser cumpridas dentro e fora do território nacional.'),

                $('<p/>').html('<strong>16.5.</strong> Pelo cumprimento das obrigações acima, enquanto perdurarem os prazos do item 16.1, a <strong>EMPRESA</strong> manterá o pagamento da remuneração do <strong>EMPREGADO</strong> (assim considerados o último salário-base e, quando houver, gratificação de função, excluídos quaisquer adicionais e parcelas variáveis, como, por exemplo, PLR, bônus e prêmios), bem como demais benefícios aplicáveis, permanecendo o <strong>EMPREGADO</strong> na folha de pagamentos da <strong>EMPRESA</strong>. '),

                $('<p/>').html('<strong>16.6.</strong> Caso o <strong>EMPREGADO</strong> venha descumprir, total ou parcialmente, as obrigações listada no item 16.1, os valores pagos com base no item 16.5 deverão ser imediatamente devolvidos à <strong>EMPRESA</strong>, observada a correção pela variação do INPC/IGBE do período, acrescidos de cláusula penal equivalente a 100% (cem por cento) do montante recebido pelo <strong>EMPREGADO</strong> conforme item 16.5, além do dever de arcar com os danos que causar à <strong>EMPRESA</strong>, sem prejuízo das penalidades estabelecidas na lei brasileira de natureza penal e administrativa.'),

                $('<p/>').html('<strong>16.7.</strong> Havendo descumprimento das obrigações, a parte prejudicada poderá requerer a sua execução específica.'),

                $('<p/>').html('<strong>17.</strong> O <strong>EMPREGADO</strong> se compromete, na vigência deste <strong>CONTRATO DE TRABALHO</strong> e após a sua extinção, pelo prazo de 12 (doze) meses a contar da rescisão, a:'),

                $('<ul/>').append(
                    $('<p/>').html('a) não praticar, direta ou indiretamente, qualquer ato de aliciamento, isto é, abordar, oferecer emprego ou contratar pessoa física que seja ou tenha sido empregada, contratada ou que preste serviços à <strong>EMPRESA</strong> ou qualquer de suas controladas ou controladoras;'),
                    $('<p/>').html('b) não abordar, direta ou indiretamente, clientes da <strong>EMPRESA</strong>, ou de outra pessoa jurídica pertencente ao mesmo grupo econômico, inclusive no exterior, com o objetivo de terminar ou descontinuar relacionamento ou os negócios mantidos com a <strong>EMPRESA</strong>, a exemplo de abrir ou transferir as contas, recursos ou posições para o <strong>EMPREGADO</strong>, em um futuro empregador, ou para qualquer empresa de que ele seja sócio, consultor, representante ou agente.')
                
                ),

                $('<p/>').html('<strong>17.1.</strong> Dada a natureza das atividades da <strong>EMPRESA</strong>, as obrigações previstas no item 17 também devem ser cumpridas dentro e fora do território nacional.'),

                $('<p/>').html('<strong>17.2.</strong> Havendo descumprimento total ou parcial das obrigações previstas no item 17, a <strong>EMPRESA</strong> poderá requerer a sua execução específica, sem prejuízo da responsabilidade do <strong>EMPREGADO</strong> por perdas e danos e da aplicação de penalidades nas esferas penal e administrativa.'),

                $('<p/>').html('<strong>18.</strong> O <strong>EMPREGADO</strong> reconhece e declara ter conhecimento das obrigações determinadas nas Cláusulas 16 e 17, concordando que tais previsões se mostram razoáveis e essenciais à preservação e ao funcionamento dos negócios da <strong>EMPRESA</strong>, bem como de suas informações confidenciais.'),

                $('<p/>').html('<strong>19.</strong> O <strong>EMPREGADO</strong>, neste ato, garante e declara à <strong>EMPRESA</strong> que não está sujeito a qualquer restrição ou obrigação de evitar qualquer assinatura deste <strong>CONTRATO DE TRABALHO</strong> e que salvo os termos e condições estabelecidos neste <strong>CONTRATO DE TRABALHO</strong> ou de uma carta oferta que possa ter sido apresentada, nenhuma outra declaração foi feita pela <strong>EMPRESA</strong> em relação ao trabalho que será executado. '),

                $('<p/>').html('<strong>20.</strong> No curso de eventual período de cumprimento de aviso prévio, o <strong>EMPREGADO</strong> continuará a receber seus salários, com as deduções exigidas por lei ou autorizadas pelo próprio <strong>EMPREGADO</strong>, tendo o direito de continuar participando dos planos e programas de benefícios dos quais o <strong>EMPREGADO</strong> participava antes do aviso de sua rescisão. No caso do aviso prévio indenizado, o direito acima mencionado cessará na data da retirada efetiva do <strong>EMPREGADO</strong>, com exceção dos planos e benefícios do programa dos quais o <strong>EMPREGADO</strong> participe antes da notificação de término, que será fornecida até o último dia do aviso prévio.'),

                $('<p/>').html('<strong>21.</strong> O <strong>EMPREGADO</strong> autoriza a utilização de seu nome, identidade, informação biográfica, imagem e marcas, conforme o caso, na elaboração, publicação e/ou comercialização de produtos e serviços, bem como em materiais promocionais e de marketing da <strong>EMPRESA</strong>.'),

                $('<p/>').html('<strong>22.</strong> Acordam as partes, na forma e para os efeitos do § 4º do art. 477 da CLT, no sentido de que as verbas decorrentes de rescisão contratual poderão ser depositadas em conta bancária, no prazo legal.'),

                $('<p/>').html('<strong>23.</strong> Caso qualquer termo, cláusula, disposição ou condição deste instrumento seja considerado nulo, inválido ou inexequível de acordo com uma ordem judicial, as disposições restantes permanecerão em pleno vigor e efeito, e não serão, portanto, afetadas ou invalidadas.'),

                $('<p/>').html('<strong>24.</strong> Os documentos referentes às rotinas trabalhistas poderão ser assinados digitalmente ou eletronicamente, mediante uma das ferramentas disponíveis no mercado, entre as quais a SilkRoad. As partes reconhecem a validade da assinatura digital e/ou eletrônica.'),

                $('<p/>').html('<strong>25.</strong> Este <strong>CONTRATO DE TRABALHO</strong> será regido, interpretado e executado de acordo com as leis do Brasil.'),

                $('<p/>').html('<strong>26.</strong> Qualquer litígio decorrente da relação de emprego será decidido por arbitragem, realizada em conformidade com o “Anexo B” deste <strong>CONTRATO DE TRABALHO</strong>.'),

                $('<p/>').html('E por estarem assim justos e acertados, firmam o presente <strong>CONTRATO DE TRABALHO</strong> em duas vias de igual teor e para um só efeito diante das duas testemunhas abaixo assinadas.'),                

                $('<p/>').html('<strong>São Paulo ('+ employee.Portugese_Start_Date + '):</strong>'),

                $('<p/>').html('&nbsp;')

        )


); 

$("#markup5").html("").append(
    $('<div/>').append(
        $('<div class="offerClause5"/>').append(
        	    $('<span class="text-left" />').html('_________________________________<br>'),
        		$('<span class="text-left" />').html('Deborah Toledo<br>Diretor Executivo<br>Recursos Humanos'),
                $('<p />').html('&nbsp;' )
            )
        )
    ); 

$("#markup6").html("").append(
    $('<div/>').append(
        $('<div class="offerClause6"/>').append(
        	    $('<span class="text-left" />').html('_________________________________<br>'),
        		$('<span class="text-left" />').html('Leila Campos<br>Diretor Associado<br>Recursos Humanos'),
                $('<p />').html('&nbsp;' )
            )
        )
    ); 



$("#markup3").html("").append(
        $('<div class="offerClause3"/>').append(
        		$('<p/>').html(employee.Legal_First_Name + ' ' + employee.Legal_Middle_Name + employee.Legal_Last_Name),

                $('<p/>').html('Anexo A'),

                $('<p class="text-center"/>').html('<strong>CONTRATO RELATIVO AO TRATAMENTO DE INFORMAÇÕES CONFIDENCIAIS E PROPRIEDADE DE INVENÇÕES DO EMPREGADO E CESSÃO DE DIREITOS AUTORAIS</strong>'),

                $('<p class="text-center"/>').html('<strong>INVENÇÕES DO EMPREGADO E CONFIDENCIALIDADE</strong>'),

                $('<p/>').html('<strong>1. INTRODUÇÃO</strong>'),

                $('<p/>').html('A relação entre empregados e seu empregador é consideravelmente mais complexa do que uma simples troca de trabalho por salários. Ambos têm determinadas obrigações.'),

                $('<p/>').html('Este Contrato visa estabelecer suas obrigações como empregado no tratamento de informações confidenciais, propriedade de invenções e na cessão de direitos autorais em trabalhos que você possa efetuar como funcionário do Grupo UBS. Estes tópicos são de extrema importância para o Grupo UBS.'),

                $('<p/>').html('Para que o Grupo UBS conduza seus negócios, é necessário e desejável que seus funcionários tenham acesso a determinadas informações proprietárias e confidenciais e segredos comerciais. Dessa forma, este Contrato é celebrado por consequência do emprego e/ou continuação do contrato de trabalho com o Grupo UBS e da remuneração regularmente recebida do Grupo UBS, e você concorda com as questões especificadas neste Contrato, sem nenhuma compensação adicional a sua remuneração regular.'),

                $('<p/>').html('Como empregado do Grupo UBS, você pode ter acesso a informações proprietárias e segredos comerciais do (1) Grupo UBS, (2) dos clientes e de terceiros fazendo negócios com o Grupo UBS (coletivamente, “Clientes”), e (3) fornecedores de bens e serviços para o Grupo UBS (“Fornecedores”). Como funcionário do Grupo UBS, você é obrigado a manter a confidencialidade das informações proprietárias e segredos comerciais de todas estas entidades.'),

                $('<p/>').html('Adicionalmente, você reconhece que a atividade de criação pode ser parte ou o resultado de suas atividades como empregado do Grupo UBS.'),

                $('<p/>').html('Conforme utilizado neste Contrato, o termo “Grupo UBS” inclui a empresa que é seu empregador direto, além da UBS AG, e todas as suas subsidiárias, divisões e empresas afiliadas. A empresa do Grupo UBS que é seu empregador direto, nos termos de seu Contrato de Trabalho, será aqui referida como “Empregador”.'),

                $('<p/>').html('<strong>2. SEGREDOS COMERCIAIS E INFORMAÇÕES CONFIDENCIAIS</strong>'),

                $('<p/>').html('É impossível relacionar todos os tipos de informação confidencial e segredos comerciais que estão sujeitos a este Contrato. Entretanto, uma das mais importantes é a tecnologia e <em>know-how</em> usados pelo Grupo UBS em relação a suas próprias atividades de <em>trading</em> e de seus Clientes. Esta tecnologia e <em>know-how</em> que estão sendo continuamente desenvolvidos e refinados são referidos neste Contrato como “Tecnologia”. A Tecnologia inclui todos os sistemas usados pelo Grupo UBS ou fornecidos pelo Grupo UBS aos Clientes para os propósitos de: <em>trading</em>, avaliação e monitoração de carteira (particularmente, os métodos de visualização de risco e controle de risco do Grupo UBS, incluindo suas definições de parâmetros de risco, métodos para cálculo de parâmetros de risco e outras técnicas e metodologias proprietárias relacionadas à visualização e controle de risco); precificação e avaliação de diversos valores mobiliários, <em>commodities</em>, <em>commodities</em> futuras e opções e outras participações que o Grupo UBS e seus Clientes negociem; e a contabilidade e desempenho de outras funções de retaguarda com relação a atividades de <em>trading</em> do Grupo UBS. Para todos esses sistemas, o termo inclui modelos matemáticos, técnicas estatísticas e bases de dados de computador; todos os programas de computador e códigos-fonte, sistemas de computador, processos, métodos, fórmulas, algoritmos, técnicas, fluxogramas e diagramas lógicos relacionados a ou incorporados aos modelos matemáticos, técnicas estatísticas e bases de dados de computador, telas e relatórios gerados por tais programas de computador, <em>know-how</em> associado ao desenvolvimento e emprego do supracitado.'),

                $('<p/>').html('Outros exemplos de informações confidenciais e segredos comerciais do Grupo UBS, dos Fornecedores e de Clientes que estão sujeitos a este Contrato incluem informações com relação a: resultados financeiros; posições, resultados de empreendimentos específicos, planos e estratégias de marketing, estratégias de <em>trading</em> e métodos de desenvolvimento de estratégias de <em>trading</em>; identidades de Clientes; métodos e materiais de treinamento interno, programas de computador e sistemas fornecidos por Fornecedores, e técnicas especiais ou métodos de qualquer tipo próprios do Grupo UBS ou de qualquer Cliente ou Fornecedor. O Grupo UBS pode, de tempos em tempos, alertá-lo sobre os requisitos de confidencialidade particulares que tiver acordado com Clientes ou Fornecedores ou que tiver desenvolvido para sua própria informação. Informações sujeitas a qualquer requisito de confidencialidade também são informações confidenciais e segredos comerciais para os propósitos deste Contrato.'),

                $('<p/>').html('Geralmente, um segredo comercial pode consistir em qualquer fórmula, padrão, dispositivo ou compilação de informações que seja usado no próprio negócio e que propicie ao negócio uma oportunidade de obter uma vantagem por não ser conhecido ou usado pela concorrência. A combinação singular de elementos que sejam separadamente de domínio público pode configurar um segredo comercial. Por exemplo, cada elemento de uma determinada tela de computador pode ser de alguma forma de domínio público, mas se a tela exibir esses elementos em uma combinação e ordem singular, e, portanto, criar uma vantagem, a tela contém um segredo comercial a ser protegido. Mesmo que um determinado tipo de informação não possa tecnicamente constituir um segredo comercial, as informações devem, contudo, ser mantidas confidenciais, se as informações forem comercialmente valiosas para outros concorrentes do Grupo UBS ou a um Cliente ou Fornecedor.'),

                $('<p/>').html('O Grupo UBS continua desenvolvendo e melhorando a Tecnologia a um alto custo. A Tecnologia é extremamente valiosa para o Grupo UBS. Da mesma forma, outras informações confidenciais e segredos comerciais do Grupo UBS, dos Clientes e Fornecedores são extremamente valiosos. Proteger todas as informações confidenciais é crítico para o sucesso futuro do Grupo UBS e, portanto, para seu bem-estar como empregado.'),

                $('<p/>').html('<strong>3. TRATAMENTO DE SEGREDOS COMERCIAIS E INFORMAÇÕES CONFIDENCIAIS</strong>'),

                $('<p/>').html('Quando você aceita o emprego no Grupo UBS – ou qualquer outra empresa no que diz a esse respeito – você aceita uma obrigação ética e jurídica de não usar ou divulgar, para o benefício de qualquer outra pessoa que não seja seu empregador, qualquer informação confidencial ou segredos comerciais do empregador, mesmo se você posteriormente terminar o vínculo com a empresa. Os tribunais reconhecem essas informações como sendo de propriedade do empregador e para proteger este direito de propriedade eles têm reconhecido a relação de confiança e probidade que existe entre uma empresa e seus funcionários. Você também aceita a obrigação de não incorrer em condutas previstas no Artigo 195 da Lei Federal n. 9279/96, que trata de crimes de concorrência desleal. A situação torna-se especialmente crítica se um ex-funcionário do Grupo UBS for trabalhar para outra empresa ou fornecer, direta ou indiretamente, serviços de consultoria ou sistemas para uma empresa que seja um concorrente do Grupo UBS ou que forneça, direta ou indiretamente, serviços de consultoria ou sistemas para tal empresa. Em tal caso, é possível que segredos comerciais do Grupo UBS possam ser usados ou divulgados, ainda que inadvertidamente.'),

                $('<p/>').html('Da mesma forma, se você já trabalhou anteriormente, você tem obrigação para com seu empregador anterior de evitar a divulgação ao Grupo UBS de informações confidenciais ou segredos comerciais de seu empregador anterior. Isso não significa que você não possa usar as habilidades e conhecimentos gerais – não representando informações confidenciais ou segredos comerciais – adquiridos durante seu emprego anterior. O Grupo UBS envida esforços para não colocar seus empregados em um dilema com base em suas obrigações de confidencialidade para com seus antigos empregadores. Se uma atribuição criar problemas deste tipo a você, discuta suas preocupações com seu gerente de departamento.'),

                $('<p/>').html('Eis algumas diretrizes que o auxiliarão a lidar com situações que envolvam questões confidenciais ou segredos comerciais.'),

                $('<p/>').html('Uma boa regra geral é considerar todas as informações sobre o negócio do Grupo UBS e qualquer Cliente ou Fornecedor como confidenciais até que você saiba que são de domínio público. Quando você estiver encarregado de material confidencial, a divulgação acidental desse material pode ser tão prejudicial quanto a divulgação intencional. O caminho mais seguro é simplesmente não discutir qualquer informação de ou sobre o Grupo UBS ou de qualquer Cliente ou Fornecedor com ninguém, exceto outros funcionários do Grupo UBS e do Cliente ou Fornecedor pertinente que precisem conhecê-la para a boa condução do negócio do Grupo UBS. Obviamente, você também deve manter confidenciais todos os bens tangíveis associados a esta informação, como notas, desenhos, cartas, imagens, fluxogramas, diagramas lógicos, códigos-fonte, fitas e materiais de qualquer tipo. Muitos de nossos Fornecedores, e até mesmo alguns de nossos Clientes, são obrigados a assinar contratos de não divulgação. Entretanto, mesmo se você tiver certeza de que um determinado Fornecedor ou Cliente assinou um contrato de não divulgação, suas conversas com o pessoal do Cliente ou do Vendedor devem limitar-se aos assuntos específicos dos negócios em questão.'),

                $('<p/>').html('Evite conversas em locais públicos. A comunicação inadvertida de informações a alguém que ouve por acaso uma conversa pode ser tão prejudicial quanto qualquer outra perda de informações confidenciais.'),

                $('<p/>').html('Pode haver procedimentos específicos para proteger informações confidenciais em relação a seu trabalho. Você deve estar plenamente consciente desses procedimentos e deve usá-los. Seu gerente de departamento explicará e discutirá esses procedimentos com você caso ainda haja alguma dúvida.'),

                $('<p/>').html('<strong>4. PROPRIEDADE DE INVENÇÕES DO EMPREGADO E TRABALHOS DE AUTORIA</strong>'),

                $('<p/>').html('O Grupo UBS envida esforços e valores consideráveis para proporcionar um ambiente favorável à inovação e criatividade, e incentiva seus empregados a desenvolver novas soluções para problemas e novas abordagens para o desempenho do trabalho. Ele fornece instalações, pessoal de apoio, suprimentos, direção de gestão e estímulo à inovação. A remuneração do funcionário e promoções levam em conta todas as contribuições dos funcionários, incluindo invenções.'),
                
                $('<p/>').html('4.1. INVENÇÕES ANTERIORES E TRABALHOS DE AUTORIA<br>Anexada a este instrumento como Anexo A, segue uma lista descrevendo todas as invenções, trabalhos originais de autoria, desenvolvimentos, melhorias e segredos comerciais que você fez antes de ser contratado pelo Grupo UBS (coletivamente referidos como “Invenções e Trabalhos Anteriores), que pertencem a você, relacionam-se de alguma forma ao negócio do Grupo UBS, e que não pertencem nem são atribuídos ao Grupo UBS; ou se tal lista não estiver anexada, você declara por meio deste que não existem tais Invenções e Trabalhos Anteriores. Você não deverá usar nenhuma Invenção e Trabalho Anterior enquanto for funcionário do Grupo UBS, sem obter autorização prévia por escrito do Grupo UBS. Não limitado aos direitos do Grupo UBS, caso você viole esta obrigação, o Grupo UBS, por meio deste, reserva-se o direito a uma licença não exclusiva, livre de royalties, irrevogável, perpétua, em nível mundial, de usar, a seu critério, qualquer Invenção e Trabalho Anterior que você tenha usado sem obter autorização prévia por escrito do Grupo UBS.'),

                $('<p/>').html('4.2. DIVULGAÇÃO DE PRODUTO DE TRABALHO CRIADO ENQUANTO EMPREGADO NO GRUPO UBS<br>Você concorda em divulgar ao Grupo UBS pronta e totalmente, e por escrito, todas as invenções, trabalhos originais de autoria, descobertas, aplicações, propostas, métodos, programas de software, processos, documentação ou produto de trabalho em qualquer meio doravante conhecido ou criado ou desenvolvido no todo ou em parte por você durante seu emprego no Grupo UBS e de qualquer forma relacionado com o negócio real ou previsto do Grupo UBS.'),

                $('<p/>').html('4.3. PROPRIEDADE DAS INVENÇÕES PELO GRUPO UBS<br>Você concorda que, nos termos dos Artigos 88 e 121 da Lei Federal n. 9.279/96, todas e quaisquer invenções, modelos de utilidade, desenhos industriais e quaisquer melhorias que sejam desenvolvidas por você durante ou como resultado do desempenho de suas atividades como funcionário do Grupo UBS pertencem exclusivamente ao Empregador, e que você não terá direito a qualquer consideração, remuneração ou qualquer pagamento adicional em relação ao desenvolvimento de quaisquer invenções, modelos de utilidade ou desenhos industriais, seja a qualquer título, incluindo para propósitos de indenização.'),

                $('<p/>').html('4.4. Cessão de Trabalhos de Autoria ao Grupo UBS<br>Você, por este instrumento, cede ao Empregador todos e quaisquer direitos econômicos e para todos e quaisquer trabalhos protegidos por direitos autorais que você possa criar durante seu emprego com o Empregador, seja ou não durante suas horas de trabalho regulares que, por qualquer motivo, ou de qualquer forma (i) afetem ou estejam relacionados aos negócios do Grupo UBS, (ii) estejam sujeitos a ser usados no contexto dos negócios do Grupo UBS, ou (iii) de outra forma relacionem-se a suas tarefas como funcionário do Grupo UBS. Esta cessão refere-se a todo e qualquer trabalho criado por você no período de 5 (cinco) anos contados a partir da data deste Contrato e será válida por todo o período de proteção de tais trabalhos, de modo que o Empregador possa usar livremente esses direitos, a seu critério, em qualquer lugar do mundo, incluindo o direito de ceder e/ou transferir tais direitos. Para dirimir quaisquer dúvidas, você reconhece e concorda por meio deste que a compensação paga pelo Empregador a você de acordo com seu contrato de trabalho será considerada como boa consideração para a cessão dos direitos estabelecidos neste Parágrafo.'),

                $('<p/>').html('Você concorda, a cada quinquênio (5º) deste Contrato, em fazer uma cessão de direitos econômicos nos mesmos termos conforme previstos no Parágrafo anterior, com relação a todo e qualquer trabalho protegido por direitos autorais que você possa criar durante os 5 (cinco) anos contados a partir da data de cada aniversário deste instrumento.'),

                $('<p/>').html('Você reconhece que o Grupo UBS pode, periodicamente, por meio de seu sistema eletrônico ao qual você terá acesso, como resultado de seu contrato de trabalho com o Empregador, exigir que você confirme qualquer cessão efetuada nos termos dos Parágrafos anteriores, ou faça novas cessões nos mesmos termos, para trabalhos criados nos mesmos períodos ou períodos inferiores, e você concorda, por meio deste, em confirmar e/ou fazer qualquer cessão conforme exigido pelo Grupo UBS.'),

                $('<p/>').html('4.5. DETENÇÃO DE OUTROS DIREITOS DE PROPRIEDADE INDUSTRIAL E INTELECTUAL<br>Você também concorda que todos e quaisquer outros materiais ou trabalhos que você possa criar durante ou relacionados a seu contrato de trabalho com o Grupo UBS, que não estejam cobertos pelos termos de qualquer um dos parágrafos 4.3 ou 4.4 acima, tornar-se-ão e permanecerão propriedade única e exclusiva do Empregador.'),

                $('<p/>').html('4.6. APERFEIÇOAMENTO DE PROPRIEDADE<br>Se e quando for necessário assim fazê-lo pelo Empregador (ou por qualquer outra empresa do Grupo UBS), seja durante seu contrato de trabalho, seja após seu término, por qualquer motivo, você se compromete a assinar tais documentos e agir conforme o Empregador (ou qualquer outra empresa do Grupo UBS) possa exigir para permitir ao Empregador (ou qualquer outra empresa do Grupo UBS) ou seu representante:'),

                $('<ul/>').append(
                    $('<p/>').html('(a) Candidatar-se a patente, marca comercial ou outra proteção de marca no Brasil e/ou em qualquer outra parte do mundo em relação a quaisquer direitos de propriedade intelectual referidos nos parágrafos 4.3 a 4.5 acima.'),
                    $('<p/>').html('(b) Adquirir qualquer patente, marca comercial ou outro direito de propriedade intelectual referido nos parágrafos 4.3 a 4.5 acima, no Brasil e/ou em qualquer outra parte do mundo.'),
                    $('<p/>').html('(c) Fazer valer e defender qualquer patente, marca comercial ou outro direito de propriedade intelectual referido nos parágrafos 4.3 a 4.5 acima, no Brasil e/ou em qualquer outra parte do mundo.')
                
                ),

                $('<p/>').html('4.7. Para efeitos do Parágrafo 4.6 acima, você, irrevogavelmente, por meio deste, nomeia o Empregador como seu bastante procurador, com poderes para assinar qualquer documento com o propósito de garantir os direitos do Grupo UBS conforme estabelecido no Parágrafo 4.6, caso você não faça conforme solicitado pelo Empregador (ou qualquer outra empresa do Grupo UBS) no prazo de 10 (dez) dias a partir da data de recebimento do pedido do Empregador (ou qualquer outra empresa do Grupo UBS) a esse respeito.'),

                $('<p/>').html('<strong>5. SAÍDA DE EMPREGADOS</strong>'),

                $('<p/>').html('Se você terminar o contrato de trabalho com o Grupo UBS, por qualquer motivo, o Grupo UBS reterá todos os bens tangíveis que forneceu a você ou que foi preparado por você que se relacionem de alguma maneira com o negócio real ou previsto do Grupo UBS, ou sua pesquisa e desenvolvimento reais ou previstos ou sugeridos por ou resultantes de qualquer tarefa atribuída a você ou trabalho executado por você em nome do Grupo UBS. Se você quiser manter determinada propriedade, como material relacionado com sociedades profissionais ou outros materiais não confidenciais, você deve pedir a seu gerente de departamento. Se tal pedido não colocar informações confidenciais do Grupo UBS ou de um Cliente ou Fornecedor em risco, normalmente o pedido será deferido.'),

                $('<p/>').html('As informações confidenciais que você necessariamente levar em sua memória não podem ser divulgadas, mesmo após término de seu contrato de trabalho com o Grupo UBS. É possível a apropriação indevida de um segredo comercial ou de outras informações confidenciais pela recriação do segredo ou informação a partir da memória, mesmo que você não tenha qualquer material escrito. Você não poderá recriar a partir da memória qualquer projeto ou sistema que tenha sido usado ou desenvolvido por você enquanto era empregado do Grupo UBS se o projeto ou sistema consistir ou incluir segredos comerciais ou outras informações confidenciais.'),

                $('<p/>').html('Ao sair do Grupo UBS, o empregado tem o direito de usar as habilidades e conhecimentos gerais que ele adquiriu como empregado do Grupo UBS, incluindo habilidades e conhecimentos gerais relativos aos programas e sistemas de computador e ao <em>trading</em>, desde que ele não use ou divulgue informações confidenciais ou segredos comerciais.'),

                $('<p/>').html('Sua obrigação de manter a confidencialidade da Tecnologia e outras informações que abranjam informações confidenciais e segredos comerciais do Grupo UBS, dos Fornecedores e Clientes permanecerá em vigor após o término de seu emprego com o Grupo UBS em todo o mundo, dada a natureza global das atividades do Grupo UBS e dos mercados em que o Grupo UBS participa, e permanecerá em vigor até que a informação se torne de domínio público não por meio de uma falha sua. Você concorda, se um tribunal de outra forma determinar, que essas obrigações serão efetivas sob lei aplicável somente se modificadas para limitar seu alcance geográfico ou duração no tempo, que estas obrigações aplicar-se-ão somente na maior área geográfica e pelo maior período de tempo que o tribunal determinar conforme lei aplicável.'),

                $('<p/>').html('Sua obrigação de assinar documentos e tomar medidas razoáveis solicitadas pelo Empregador (ou qualquer outra empresa do Grupo UBS) em relação à cessão ao Empregador de direitos em trabalhos de autoria também permanecerá em vigor após o término de seu emprego com o Grupo UBS.'),

                $('<p/>').html('Você pode contatar o Departamento Jurídico sobre quaisquer questões que possa haver sobre a abrangência dessas obrigações.'),

                $('<p/>').html('<strong>6. EXEQUIBILIDADE</strong>'),

                $('<p/>').html('Tendo em vista a natureza altamente confidencial da Tecnologia e de outras informações confidenciais e segredos comerciais que estão sujeitos a este Contrato, será impossível mensurar em dinheiro os danos que serão sofridos pelo Grupo UBS caso o empregado não cumpra suas obrigações nos termos deste Contrato. Assim, o Grupo UBS terá direito à reparação justa considerada adequada para proibir qualquer violação adicional deste Contrato, bem como a indenização em dinheiro para compensar o Grupo UBS por quaisquer danos sofridos pelo Grupo UBS em função de uma violação deste Contrato. Caso um tribunal considere que você violou este Contrato, você também poderá ser responsável por quaisquer despesas de litígio (incluindo honorários advocatícios razoáveis) que o Grupo UBS incorrer no curso da exequibilidade deste Contrato.'),

                $('<p/>').html('<strong>7. RESUMO</strong>'),

                $('<p/>').html('Em resumo, o tratamento de informações confidenciais, a propriedade de invenções do empregado e a cessão de direitos do funcionário para trabalhos de autoria são questões de vital interesse que afetam tanto o empregado quanto o Grupo UBS. Este Contrato visa estabelecer e descrever suas obrigações e responsabilidades nesta área. Não é intenção do Grupo UBS impedir qualquer ex-funcionário do Grupo UBS de exercer uma atividade assalariada no setor de serviços financeiros, com base no uso de habilidades e conhecimento gerais do empregado. Ao contrário, o objetivo deste Contrato é garantir que o Grupo UBS, seus Clientes e Fornecedores e seus respectivos funcionários estejam protegidos contra o uso indevido de propriedade e de informações confidenciais e segredos comerciais. Se a qualquer momento, durante ou após o contrato de trabalho com o Grupo UBS, você não tiver certeza se determinada informação compreende um segredo comercial ou se você estiver sob a obrigação de proteger determinadas informações confidenciais, ou tiver alguma dúvida não respondida neste documento sobre o tratamento de informações confidenciais ou a cessão de direito de invenções do empregado, você deve contatar o gerente de departamento ou o Departamento Jurídico para orientação.'),

                $('<p/>').html('<strong>RECONHECIMENTO E CONCORDÂNCIA DO EMPREGADO</strong>'),

                $('<p/>').html('Recebi uma cópia, li e compreendi este Contrato Relativo ao Tratamento de Informações Confidenciais, Propriedade de Invenções do Empregado e Cessão de Direitos Autorais, e concordo em cumprir com este Contrato.')


        )


); 

$("#markup4").html("").append(
        $('<div class="offerClause4"/>').append(
        	$('<p/>').html(employee.Legal_First_Name + ' ' + employee.Legal_Middle_Name + employee.Legal_Last_Name),

          	$('<p/>').html('Anexo B'),

            $('<p class="text-center"/>').html('<strong>CLÁUSULA COMPROMISSÓRIA DE ARBITRAGEM</strong>'),

            $('<p/>').html('<strong>1.</strong> Nos termos dos arts. 507-A da CLT, 4º, caput, § 1º, e 5º da Lei n. 9.307/1996, e de <strong>comum</strong> acordo, <strong>EMPREGADO</strong> e <strong>EMPRESA</strong> convencionam que todo litígio decorrente do presente <strong>CONTRATO DE TRABALHO</strong> não dirimido amigavelmente será resolvido por meio de arbitragem.'),

            $('<p/>').html('<strong>2.</strong> As partes elegem a <strong>AMCHAM – American Chamber of Commerce for Brazil – São Paulo</strong>, inscrita no CNPJ sob o n. <strong>62.044.151/0001-71</strong>, com sede em <strong>São Paulo/SP</strong>, para administrar e resolver, definitivamente, a arbitragem a ser instalada, conforme seu regulamento interno.'),

            $('<p/>').html('<strong>3.</strong> O Tribunal Arbitral poderá ser constituído de árbitro único, que será escolhido de comum acordo entre as partes. As partes poderão, ainda, nomear mais árbitros, sempre em número ímpar. Caberá a cada uma das partes a escolha de um árbitro. Os árbitros indicados, em sua maioria, elegerão, em conjunto, o árbitro que presidirá o Tribunal Arbitral. Caso não haja consenso, será escolhido presidente o árbitro mais idoso.'),

            $('<p/>').html('<strong>4.</strong> A Arbitragem será conduzida em língua portuguesa, idioma oficial brasileiro.'),

            $('<p/>').html('<strong>5.</strong> Serão aplicados ao processo arbitral o art. 507-A da CLT, a Lei n. 9.307/1996, e o regulamento de arbitragem da AMCHAM.'),

            $('<p/>').html('<strong>6.</strong> A sentença arbitral constituirá título executivo vinculante entre as partes.'),

            $('<p/>').html('<strong>7.</strong> Todo o processo arbitral será confidencial e sigiloso. A parte que descumprir tal preceito responderá por perdas e danos.'),

            $('<p/>').html('<strong>8.</strong> As partes elegem o foro de São Paulo/SP para quaisquer medidas judiciais necessárias, incluindo a execução da sentença arbitral.'),

            $('<p/>').html('<strong>9.</strong> A eventual propositura de medidas judiciais pelas partes deverá ser imediatamente comunicada à AMCHAM e não implica nem deverá ser interpretada como renúncia à arbitragem, nem afetará a existência, validade e eficácia do presente anexo.'),

            $('<p/>').html('<strong>10.</strong> A sentença arbitral definirá a responsabilidade das partes pelas despesas, custos administrativos, honorários de árbitros, de peritos e advogados, bem como o respectivo rateio.'),

            $('<p/>').html('&nbsp;')



        )
);

$("#markup7").html("").append(
    $('<div/>').append(
        $('<div class="offerClause7"/>').append(
                $('<p />').html(employee.Legal_First_Name + ' ' + employee.Legal_Middle_Name + employee.Legal_Last_Name )
            )
        )
    ); 



 /*$("#markup5").html("").append(
    $('<div/>').append(
        $('<div class="offerClause5"/>').append(
                $('<p style="margin-bottom:0px;"/>').html('&nbsp;' ),
                $('<span/>').html( employee.Gender ),
                $('<p style="margin-bottom:0px;"/>').html('&nbsp;' ),
                $('<span class="hideEform" />').html('Employee Signature'),
                $('<p  class="hideEform"  style="margin-bottom:0px;"/>').html('&nbsp;' ),
                $('<span  class="hideEform" />').html('______________________________________'),
                $('<p  class="hideEform"  style="margin-bottom:0px;"/>').html('&nbsp;' ),
                $('<span class="hideEform" />').html( employee.Full_Legal_Name),
                $('<p  class="hideEform" style="margin-bottom:0px;"/>').html('&nbsp;' )
            )
        )
    ); */
}


//////////////// translate ////////////////////////
// google.load("language", "1");
// function fninitializeTranslate(Nstring) {
//     var text = Nstring.value;
//     google.language.translate(text, 'en', 'es', function(result) {
//         if (result.translation) {
//             var translated = result.translation;
//             return translated;
//         }
//     });
// }

/////////////////// end translate //////////////////
function fnConvertDate(eventDate) {

    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    var year = d.getFullYear(),
        month = d.getMonth(),
        n_date = d.getDate(),
        day = d.getDay();

    return months[month] + ' ' + parseInt(n_date) + ', ' + year;

}


function fnConvertFullDate(eventDate) {

    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var year = d.getFullYear(),
        month = d.getMonth(),
        n_date = d.getDate(),
        day = d.getDay();

    return days[parseInt(day)] + ', ' + months[month] + ' ' + parseInt(n_date) + ', ' + year;

}

function fnConvertFullDateViaTZone(eventDate) {

    var d = new Date(eventDate);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var localoffset = -(d.getTimezoneOffset()/60);
    var destoffset = +4; 
    var offset = destoffset-localoffset;
    var e = new Date( new Date(eventDate).getTime() + offset * 3600 * 1000)

    var year = e.getFullYear(),
        month = e.getMonth(),
        n_date = e.getDate(),
        day = e.getDay();

    return days[parseInt(day)] + ', ' + months[month] + ' ' + parseInt(n_date) + ', ' + year;

}


function fnTime_And_Half(amount, rate) {
    amount = (amount.indexOf(',') != -1) ? amount.split(',').join('') : amount;
    var total = (parseFloat(amount) + parseFloat((parseFloat(amount) * rate)));
    return formatCurrency(total);
}

function returnDate() {
  var dt = new Date();
  var mon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dys = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var rdt = dt.setDate(dt.getDate() + 3);
  var drt = new Date(rdt);
  var mm = drt.getMonth(),
      dd = drt.getDate(),
      yyyy = drt.getFullYear();
      day = drt.getDay();

  return dys[parseInt(day)] + ', ' + mon[mm] + ' ' + parseInt(dd) + ', ' + yyyy;
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

$(function() {
    function _fnAssignValue(targetElement, value) {
        document.getElementById(targetElement).value = value;
        $("#" + targetElement).attr("value", value);
    }

    function fnGetName(first, middlename, last) {

        var middle_inital = ((middlename) ? middlename.substring(0, 1) + ' ' : '');
        var fullname = first + " " + middle_inital + last;
        return fullname;
    }

     var name = fnGetName(employee.Legal_First_Name, employee.Legal_Middle_Name, employee.Legal_Last_Name);
    _fnAssignValue('Full_Name', name);


    // render template
    fnView();


    // completed letter
    if (!$("input.calendar_button").length) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

var imgHeader = "<img src='' />";
var imgDISignature = "<img src='' />";
var imgASSSignature = "<img src='' />";

//Create an array of info to pass to complete the offer letter
//0 for images sending an image tag, 1 for sections of text sneding the ID of the field that holds the HTML.
var arrParts = [
  [0,imgHeader],
  [1,'hidden_pg']
];
var arrParts2 = [
  [0,imgHeader],
  [1,'hidden_pg2']
];
var arrParts3 = [
  [0,imgHeader],
  [1,'hidden_pg3']
];
var arrParts4 = [
  [0,imgHeader],
  [1,'hidden_pg4']
];
var arrParts5 = [
  [0,imgHeader],
  [1,'hidden_pg5']
];
var arrParts6 = [
  [0,imgHeader],
  [1,'hidden_pg6']
];
var arrParts7 = [
  [0,imgHeader],
  [1,'hidden_pg7']
];
        //showCompletedOfferLetter('incomplete', 'complete', arrParts);
    }
});
