//Mexico Employment Agreement
function fnView() {
  var addr2 = (employee.Address_Line_2.length > 0 ? '<span class="dynamic">' + employee.Address_Line_2 + '</span><br>' : '');
    $("#markup").html("").append(
        // OfferClause 1
        $('<div class="offerClause">').append(
            $('<p class="margin-bottom-25 text-center"/>').append(
                $('<span/>').html('<strong><u>CONTRATO DE TRABAJO</u></strong>' + '<br>')
                )
            ),

        $('<div class="offerClause">').append(
            $('<p class="margin-bottom-25"/>').append(
                $('<span/>').html('CONTRATO INDIVIDUAL DE TRABAJO POR TIEMPO INDETERMINADO QUE CELEBRAN POR UNA PARTE PAYPAL MEXICO S DE RL DE CV A LA QUE EN LO SUCESIVO SE LE DENOMONINARÁ LA “EMPRESA”, REPRESENTADA EN ESTE ACTO POR Blas Enrique Caraballo EN SU CALIDAD DE REPRESENTANTE LEGAL Y POR LA OTRA PARTE <span class="dynamic">' + employee.Full_Legal_Name + '</span> A QUIEN EN LO SUCESIVO SE LE DENOMINARÁ EL “EMPLEADO”, CONFORME A LAS SIGUIENTES DECLARACIONES Y CLÁUSULAS:')
                )
            ),
        $('<div class="offerClause">').append(
            $('<p class="margin-bottom-25"/>').append(
                $('<span/>').html('<strong>DECLARACIONES</strong>')
                )
            ),
        $('<div class="offerClause margin-bottom-25"/>').append(
            $('<p/>').append(
                $('<ol/>').append(
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('La EMPRESA manifiesta:'),
                      $('<p/>').html(''), 
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">1.1</span> <span class="inl-block-2"> Ser una sociedad mercantil debidamente organizada y existente conforme a las leyes de los Estados Unidos Mexicanos, teniendo como registro federal de contribuyentes el número PME091029BY5.</span>'),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">1.2</span> <span class="inl-block-2"> Tener su domicilio en Mariano Escobedo 476 piso 14 Anzures Distrito Federal 11590, Mexico.</span>'),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">1.3</span> <span class="inl-block-2"> Requerir los servicios del EMPLEADO como <span class="dynamic">' + employee.Job_Title_Mx + '</span> para desarrollar los deberes y actividades que en forma enunciativa más no limitativa se establecen en este contrato (“Contrato”).</span>'),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">1.4</span> <span class="inl-block-2"> Que de conformidad a sus estatutos, actualmente se dedica, entre otras actividades a pagar y recibir pagos en línea de una forma segura y rápida.</span>'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ), 
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('El EMPLEADO declara:'),
                      $('<p/>').html(''), 
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">2.1</span> <span class="inl-block-2"> Llamarse <span class="dynamic">'+ employee.Full_Legal_Name +'</span>, ser de nacionalidad mexicana, de <span class="dynamic">' + employee.Age_Spanish + '</span> años de edad, de sexo <span class="dynamic">' + employee.Gender_Mx + '</span>, <span class="dynamic">' + employee.Marriage_Status_Mx + '</span>, con Registro Federal de Contribuyente (“RFC”) número <span class="dynamic">' + employee.Tax_Payer_ID + '</span>.</span>'),
                      $('<p class="zero-btm"/>').html('<span class="margin-right-15 margin-left-15 inl-block">2.2</span> <span class="inl-block-2"> Tener su domicilio en</span>'), 
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block-indent"></span><span class="inl-block-indent-2"><span class="dynamic">'+ employee.Address_Line_1 + '</span><br>' + addr2 + '<span class="dynamic">' + employee.City + '</span>, <span class="dynamic">' + employee.State + '</span> <span class="dynamic">' + employee.Postal_Code + '</span></span><br>'), 
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">2.3</span> <span class="inl-block-2"> Que cuenta con todos los requisitos que exige el Gobierno de México para prestar sus servicios en el País.</span>'), 
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">2.4</span> <span class="inl-block-2"> Que tiene la capacidad y experiencia necesaria para prestar sus servicios personales subordinados a la EMPRESA con respecto al cargo de <span class="dynamic">' + employee.Job_Title_Mx + '</span>, para el cual se le contrata.</span>'), 
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">2.5</span> <span class="inl-block-2"> Que tiene los conocimientos y habilidades para proporcionar capacitación y adiestramiento al personal actual y futuro de la EMPRESA en los asuntos relacionados con su cargo.</span>'), 
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">2.6</span> <span class="inl-block-2"> Que a la fecha del presente contrato no detenta más del 1% del total de las acciones o de otra manera participa o tiene interés alguno, o trabaja para, cualquier sociedad o EMPRESA que compita directa o indirectamente con la EMPRESA.</span>'), 
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">2.7</span> <span class="inl-block-2"> Que está de acuerdo y reconoce que derivado de las actividades de la EMPRESA, prestará sus servicios sujeto al control y subordinación de la EMPRESA en los domicilios señalados y en cualesquiera otro solicitado por la EMPRESA.</span>'),
                      $('<p/>').html('<span>Una vez manifestado lo anterior, las partes otorgan las siguientes:</span>'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      )
                    ) //end of ol
                ) //end of p
        ),// end of div 
        $('<div class="offerClause">').append(
            $('<p class="margin-bottom-25"/>').append(
                $('<span/>').html('<strong>C L Á U S U L A S</strong>')
                )
            ),
        $('<div class="offerClause margin-bottom-25"/>').append(
            $('<p/>').append(
                $('<ol class="ol-bold"/>').append(
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>RELACIÓN DE TRABAJO</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>En este acto la EMPRESA contrata al EMPLEADO, quien acepta, prestar sus servicios profesionales subordinados como <span class="dynamic">' + employee.Job_Title_Mx + '</span>. Tales servicios consistirán en las labores señaladas en forma enunciativa más no limitativa en el presente contrato.</span>'), 
                      $('<p/>').html('<span>El EMPLEADO está de acuerdo que dentro de sus deberes y obligaciones, en consideración al pago de su salario y prestaciones y sujeto al control y subordinación de la EMPRESA, está obligado a prestar servicios a aquellas entidades con las cuales la EMPRESA tenga relación comercial.</span>'),
                      $('<p/>').html('<span>Las partes pactan que este documento cancela y substituye cualquier otro contrato previo, ya sea verbal o escrito, que hayan celebrado en el pasado  por virtud de la relación de trabajo sujeta a este Contrato y al desarrollo de los servicios aquí pactados.</span>'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>LUGAR DE TRABAJO</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>El EMPLEADO está de acuerdo en prestar sus servicios como parte de cualquier departamento de la EMPRESA y en cualesquiera otro centro, lugar de trabajo o establecimiento designado por la EMPRESA y en el que opere la misma, actualmente o en el futuro, o en cualesquiera otro establecimiento que la EMPRESA designe a no más de 50 Km del lugar de trabajo actual, ya sea en esta ciudad o en cualesquiera otra, o en las instalaciones pertenecientes a cualquier cliente de la EMPRESA, EMPRESA relacionada o cualesquiera otra entidad indicada por la EMPRESA, para el apropiado desarrollo del trabajo que se requiera.</span>'), 
                      $('<p/>').html('<span>En caso de que el EMPLEADO en cumplimiento de sus obligaciones, se vea obligado a viajar a otros lugares dentro o fuera de la República Mexicana, y a incurrir por lo mismo en gastos de transporte, hospedaje y alimentos, lo realizará sobre la base de gastos razonables de conformidad con la política que tenga vigente la EMPRESA. En todos los casos el EMPLEADO deberá comprobar los gastos realizados durante dichos viajes con las facturas y otros documentos que cumplan con los requisitos exigidos por las leyes fiscales para su deducción por la Empresa, ya que de no hacerlo así, no les serán reembolsados.</span>'),
                      $('<p class="zero-btm"/>').html('')
                      ),  
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>CONDICIONES</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>El EMPLEADO declara y manifiesta estar capacitado y tener los conocimientos específicos necesarios para desempeñar el trabajo para el cual se le contrata; y se obliga a desempeñar con cuidado y esmero todas las actividades inherentes o relacionadas con dicho trabajo. El EMPLEADO proporcionará sus servicios conforme a las instrucciones que al efecto reciba de la EMPRESA, comprometiéndose al efecto a cumplir diligentemente con tales instrucciones de la EMPRESA y/o de sus superiores, así como con las órdenes que contenga toda circular o disposición que dicte la EMPRESA, comprometiéndose, además a cumplir con las obligaciones que le impone este Contrato y la Ley Federal del Trabajo (la “Ley”). </span>'), 
                      $('<p/>').html('<span>De conformidad a lo anterior, el EMPLEADO está de acuerdo en someterse a las políticas internas de la EMPRESA en vigor o a aquellas que pueda establecer en el futuro, como, en forma enunciativa más no limitativa, confidencialidad, reporte de gastos o cualquier otra política aplicable al EMPLEADO en cualquier tiempo y sus posibles modificaciones en cualquier tiempo, y que se refieran a los servicios acordado en este documento, sales como el Código de Conducta de Negocios y Ética de PayPal. </span>'),
                      (employee.Manager == 'Yes') &&
                      $('<p/>').html('<span class="dynamic">Así mismo, las partes reconocen que las funciones generales y específicas del Empleado son funciones de confianza, según el Artículo 9 de la Ley y, por lo tanto, en los términos del Artículo 185 de la citada Ley, será causa especial de rescisión del presente contrato, el hecho de que la Empresa le pierda confianza al Empleado.</span>'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>TÉRMINO</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>La relación de trabajo del EMPLEADO con la EMPRESA empezará el <span class="dynamic">' + employee.Start_Date_Spanish + '</span> (independientemente de la fecha de celebración del presente contrato) y continuará por tiempo indeterminado. La EMPRESA podrá rescindir este Contrato sin responsabilidad alguna dentro de los primeros treinta (30) días contados a partir de la fecha en que el EMPLEADO empiece a prestar sus servicios, en caso que el EMPLEADO haya engañado a la EMPRESA con certificados o referencias en los que se le atribuya capacidad, entrenamiento o habilidades de las cuales carezca, y podrá rescindirlo en cualquier momento sin responsabilidad alguna por cualquiera de las demás causas estipuladas en los Artículos 47 y 185 de la Ley y otras disposiciones aplicables o relacionadas contenidas en la misma. </span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                      $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>SALARIO</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>La EMPRESA pagará al EMPLEADO por los servicios establecidos en este Contrato, un salario mensual bruto de <span class="dynamic">' + fnFormatCurrency(employee.Salary_Offered)  + '</span> <span class="dynamic">' + employee.Salary_Currency + '</span> salario que incluye el pago de días de descanso semanal y obligatorio, mismo que estará sujeto a las deducciones aplicables en términos de las leyes laborales y fiscales o cualesquiera otra disposición aplicable. El salario se pagará al EMPLEADO los días 15 y últimos de cada mes mediante dos pagos iguales que se realizarán en el lugar donde el  EMPLEADO presta sus servicios o en cualquier otro lugar determinado por las partes de común acuerdo.</span>'), 
                      $('<p/>').html('<span>A la recepción de su salario, el Empleado firmará y entregará a la Empresa el recibo correspondiente.</span>'),
                      $('<p/>').html('<span>Adicionalmente el EMPLEADO tendrá derecho a recibir una compensación variable de <span class="dynamic">' + employee.Variable_Bonus_Percentage + '</span>% de acuerdo a los términos y condiciones del Plan Anual de Incentivos de PayPal (el “AIP” o el “Plan”), según sea revisado por la EMPRESA a su entera discreción. El EMPLEADO reconoce y está de acuerdo con todos los términos y condiciones establecidos en el Plan.</span>'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>JORNADA DE TRABAJO; HORAS EXTRAS</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>El EMPLEADO trabajará el número máximo de horas estipulado en el Artículo 61 de la Ley, por lo que trabajará cuarenta y ocho (48) horas por semana, la cual de conformidad a su puesto será distribuida libre e independientemente de acuerdo a la mayor conveniencia del trabajo pactado y a los intereses de la EMPRESA.</span>'), 
                      $('<p/>').html('<span>Las partes pactan que el EMPLEADO no podrá prestar sus servicios en un horario diario de trabajo que exceda los máximos previstos en la Ley.</span>'), 
                      $('<p/>').html('<span>En base a lo anterior, el EMPLEADO expresamente acuerda que no prestará sus servicios en tiempo extraordinario, y de requerirse, deberá contar con la debida autorización por escrito de un representante de la EMPRESA de un nivel jerárquico superior. Este requisito es absolutamente necesario para efectos del pago de dicho tiempo extraordinario.</span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>CAPACITACIÓN Y ADIESTRAMIENTO</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>El EMPLEADO se obliga a cumplir las instrucciones que reciba relativas a la capacitación y adiestramiento en la forma y términos que la EMPRESA determine. Asimismo, el EMPLEADO se obliga a capacitar y/o a proveer capacitación y adiestramiento a aquellos compañeros de trabajo que la EMPRESA indique, bajo los términos y condiciones estipulados en los programas de capacitación y adiestramiento, aprobados por la EMPRESA. </span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>DÍAS FESTIVOS / DÍAS DE DESCANSO</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>El EMPLEADO gozará de los días de descanso obligatorios y días de descanso semanales que establece la Ley y recibirá su salario íntegro correspondiente a dichos días. </span>'), 
                      $('<p/>').html('<span>El EMPLEADO disfrutará los días de descanso obligatorios establecidos en el Artículo 74 de la Ley, cuyo pago está incluido en el salario pactado en la Cláusula 5 de este Contrato. </span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>VACACIONES</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>El EMPLEADO gozará de un período de doce (12) días laborables de vacaciones por el primer año completo de servicios y por los años siguientes, en términos de la Ley. Dichas vacaciones deben ser usadas dentro de los 18 meses después de que el EMPLEADO haya tenido derecho a disfrutarlas. Los días que no sean usados, se perderán. </span>'),
                      $('<p/>').html('<span>La prima vacacional pagada será del 50% de los días de vacaciones a que el EMPLEADO tenga derecho. </span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>AGUINALDO</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>Las partes acuerdan que el pago del aguinaldo anual será equivalente a 30 días del salario mencionado en la cláusula quinta del presente contrato, en términos del Artículo 87 de la Ley.</span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>SEGURO SOCIAL</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>El EMPLEADO será dado de alta con el Instituto Mexicano del Seguro Social (“IMSS”), en los términos estipulados en la Ley del Seguro Social (“LSS”). La EMPRESA y el EMPLEADO serán responsables por el pago de las contribuciones al IMSS de acuerdo con lo estipulado en la LSS. Ambas partes se comprometen a cumplir con todo lo relativo a la Ley del Seguro Social y sus Reglamentos.</span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>CONFIDENCIALIDAD; DERECHOS DE AUTOR</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>El EMPLEADO reconoce que por virtud de su posición, durante su relación de trabajo tendrá acceso a “Información Confidencial” y a “Secretos Industriales,” que incluyen, entre otros, información respecto a la comercialización, mercadeo, u otros planes de negocios, métodos de negocios, precios, compras, licencias, contratos, Ejecutivos, proveedores, clientes, información financiera, desarrollos tecnológicos, procesos de producción, programas de cómputo, y cualquier producto, aparato o proceso producido, utilizado, desarrollado o sujeto a investigación por parte de la EMPRESA, sus matrices, subsidiarias o empresas relacionadas, sus ejecutivos o representantes, durante la relación de trabajo, así como cualquier otra información confidencial o información que no se encuentra públicamente disponible a otras personas. El EMPLEADO está consciente que toda la Información Confidencial y Secretos Industriales son de la exclusiva propiedad de la EMPRESA. El EMPLEADO se obliga a utilizar los Secretos Industriales e Información Confidencial de la EMPRESA y de sus matrices, subsidiarias o empresas relacionadas exclusivamente en el desempeño de su relación de trabajo con la EMPRESA y conviene, además, en no utilizar o revelar, directa o indirectamente, dichos Secretos Industriales e Información Confidencial para su propio beneficio o para el beneficio de terceras personas, en cualquier tiempo o lugar, aún después de terminada su relación de trabajo por cualquier causa, o para cualquier otro propósito, en cualquier tiempo, a menos que el EMPLEADO obtenga autorización por escrito de la EMPRESA para tales efectos. </span>'),
                      $('<p/>').html('<span>El EMPLEADO reconoce y está de acuerdo en que la Información Confidencial y Secretos Industriales incluye información que constituye (i) un secreto industrial en los términos de la Ley de la Propiedad Industrial de México y (ii) un secreto y/o un secreto industrial conforme a los Artículos 210 y 211 del Código Penal Federal así como a los Artículos correspondientes de los Códigos Penales de los Estados de los Estados Unidos Mexicanos. Al término de la relación de trabajo del EMPLEADO con la EMPRESA, el EMPLEADO se obliga a entregar a la EMPRESA todos los materiales en su posesión que contengan Secretos Industriales e Información Confidencial, así como cualesquiera otros documentos y medios proporcionados por la EMPRESA o desarrollados por el EMPLEADO en conexión con su relación de trabajo con la EMPRESA.</span>'),
                      $('<p/>').html('<span>El EMPLEADO se obliga a revelar a la EMPRESA todos los conceptos, mejoras, derechos de autor, marcas, nombres comerciales, diseños, invenciones, descubrimientos, artículos u obras creativas que pudiera concebir o poner en práctica durante su relación de trabajo con la EMPRESA y que se relacionen con los negocios actuales o planes de negocios futuros de la EMPRESA, sus matrices, subsidiarias o empresas relacionadas. Asimismo, el EMPLEADO reconoce que cualesquier conceptos, mejoras, derechos de autor, marcas, nombres comerciales, diseños, invenciones, descubrimientos, artículos u obras creativas que pudiera concebir o poner en práctica durante su relación de trabajo con la EMPRESA y que se relacionen con los negocios actuales o futuros de la EMPRESA, sus matrices, subsidiarias o empresas relacionadas son y continuarán siendo de la única y exclusiva propiedad de la EMPRESA y que el EMPLEADO no tendrá ningún derecho patrimonial o de propiedad en las obras o trabajos desarrollados, conviniéndose expresamente que el EMPLEADO no tendrá derecho al pago de regalías u otro derecho derivado de tales obras. Además, el EMPLEADO expresamente autoriza la modificación, adaptación, transporte, traducción, representación, exhibición y cualquier otro uso, total o parcial, de la obra o trabajo desarrollados, con la única excepción de sus derechos no-patrimoniales o derechos morales. Cuando la EMPRESA así lo solicite durante la vigencia de la relación de trabajo o una vez concluida esta, el EMPLEADO se obliga a realizar las acciones que sean necesarias, a costa y cargo de la EMPRESA y sin recibir compensación adicional alguna por parte de la misma, para celebrar y ceder cualesquier instrumento que le permita a la EMPRESA o a sus representantes el obtener los derechos de autor, marcas, o patentes en cualquier parte del mundo o el proporcionar a la EMPRESA o sus representantes el derecho único y exclusivo, título e interés en dichos derechos de autor, marcas, mejoras, invenciones, descubrimientos o patentes. El EMPLEADO asimismo se obliga a asistir a la EMPRESA en cualquier forma posible en los procedimientos legales relacionados con las invenciones, conceptos, marcas, derechos de autor, solicitudes de patentes y patentes respecto de los cuales el EMPLEADO tenga conocimiento. Además el EMPLEADO acuerda que todo derecho de propiedad vinculado a la EMPRESA, sociedad controlante, subsidiarias o compañías vinculadas que por ley no pueden ser consideradas propiedad de dichas entidades, serán asignadas por el EMPLEADO a la EMPRESA o cualquier otra persona o entidad que la EMPRESA designe. Para ese propósito, el EMPLEADO tomará los recaudos necesarios para asignar todos los derechos de propiedad a la EMPRESA y derivará los costos de asignación a la EMPRESA, si compensación extraordinaria para el EMPLEADO.</span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>CUMPLIMIENTO CON LAS LEYES APPLICABLES</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>El EMPLEADO esta de acuerdo en cumplir con todas las leyes, reglamentos, regulaciones y ordenes gubernamentales aplicables en México y en los Estados Unidos de América, vigentes o futuras, derivadas de su relación laboral con la EMPRESA.<br/> El EMPLEADO confirma que ha leído y entendido los términos del Código de Conducta de Negocios de la EMPRESA, el cual prohíbe la corrupción y pagos ilegales estipulando el estricto cumplimiento con la Ley denominada  “United States Foreign Corrupt Practices Act (“FCPA”), y se obliga a cumplir los términos del código así como las estipulaciones del FCPA.</span>'), 
                      $('<p/>').html('<span>De manera enunciativa más no limitativa, EL EMPLEADO se obliga y garantiza que durante la duración de su relación laboral con la EMPRESA no ha realizado ni realizará, pagos, dadivas, ofertas o promesas de pago de dinero en efectivo o en especie de manera directa o indirecta para obtener algún beneficio por parte de: (i) algún oficial gubernamental, partido político o candidato a puesto oficial dentro del gobierno; así como a (ii) cualquier otra persona, firma, corporación o sociedad, con conocimiento de que el total de la cantidad o bien el pago en especie sería entregado, pagado, ofrecido o prometido a algún oficial gubernamental, partido político o candidato a puesto oficial, con el propósito de obtener o retener cualquier negocio, o bien para obtener cualquier otra forma de ventaja desleal en relación con el negocio de la EMPRESA.</span>'),
                      $('<p/>').html('<span>El EMPELADO reconoce que los productos, tecnología y la información tecnológica relevante de la EMPRESA, pueden ser materia de exportación la cual se encuentra regulada bajo leyes y regulaciones de México, así como de los Estados Unidos de América, incluyendo la los reglamentos de exportación “Export Administration Regulations, 15 C.F.R. Parts 730-774”. Durante su relación laboral con la EMPRESA, el EMPLEADO cumplirá estrictamente con dichos controles de exportación, así como de manera enunciativa más no limitativa con la presente cláusula. El EMPLEADO no podrá exportar, reexportar, transferir o redirigir cualquiera de los productos, directos o indirectos, o información tecnológica de la EMPRESA, así como cualquier producto directo dirigido a cualquier destino o destinatario ya sea destino final o destinatario final que se encuentre prohibido o restringido por las leyes, regulaciones y controles de exportación de los Estados unidos de América, con excepción de lo específicamente autorizado por el Departamento de Comercio de los estados Unidos de América “United States Department of comerse”. Las obligaciones contraídas a través de la presente cláusula seguirán vigentes aún después de la terminación o conclusión del presente contrato.</span>'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>PRIVACIDAD DE DATOS</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>El EMPLEADO autoriza expresamente el procesamiento (incluyendo recolección, uso y transmisión local e internacional a bases de datos de la EMPRESA o contratistas que almacenen tales datos a nombre de EMPRESA) de sus datos personales. El Empleado podrá solicitar y tener  acceso a sus datos personales (siempre que hayan sido obtenidos) y de corregir o borrar tales datos (siempre que sea adecuado).</span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>OTRAS PRESTACIONES</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>El EMPLEADO gozará de las prestaciones extralegales que se describen en el “Anexo A” del presente Contrato.  </span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>En el Caso de Terminación</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>En el caso de terminación de su empleo en lo sucesivo, cualquiera que sea su causa, el Empleado acuerda que él/ella no declarará en ningún momento, tras dicha terminación, que sigue teniendo una relación con la Compañía o con una Compañía Asociada, excepto en calidad de antiguo empleado con el único objetivo de comunicarse con empleadores potenciales o de cumplir con cualquier requisito legal aplicable.</span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>AVISOS</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>El EMPLEADO conviene y se obliga a notificar por escrito cualquier cambio de domicilio, número de teléfono o cualquier otra información personal similar, dentro de las cuarenta y ocho (48) horas siguientes a que sucedan dichos cambios. </span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>CONTRATO COMPLETO</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>El presente Contrato, junto con sus anexos, constituye una descripción completa y total de todos los términos, condiciones y representaciones del contrato entre la EMPRESA y el EMPLEADO con respecto a la naturaleza del mismo y reemplaza todos los documentos y correspondencia entre las partes celebrados antes esta fecha. </span>'),
                      $('<p/>').html('<span>Lo no establecido en este contrato será regulado de acuerdo con lo establecido en la Ley y en las demás disposiciones aplicables, cancelando y sustituyendo cualquier acuerdo verbal o escrito que las partes hayan celebrado en el pasado.</span>'),
                      $('<p/>').html('<span>Leído que fue el presente Contrato por las partes, ratifican su contenido y obligaciones y lo firman por triplicado, en la Ciudad de México, en los Estados Unidos Mexicanos, el día <span class="dynamic">' + employee.Start_Date_Spanish + '</span>.</span>'), 
                      $('<p/>').html('<span>Las partes acuerdan que la versión en español de este contrato es vinculante y que la traducción al inglés es para facilitar el uso del mismo por ambas partes. </span>'),
                      $('<p class="zero-btm"/>').html('')
                      )         
                    // template
                     
                    ) //end of ol
                ) //end of p
        )// end of div
        //end of append
        );


$("#markup2").html("").append(
        // OfferClause 1
        $('<div class="offerClause2">').append(
            $('<p class="margin-bottom-25 text-center"/>').append(
                $('<span/>').html('<strong><u>EMPLOYMENT AGREEMENT</u></strong>' + '<br>')
                )
            ),

        $('<div class="offerClause2">').append(
            $('<p class="margin-bottom-25"/>').append(
                $('<span/>').html('INDIVIDUAL EMPLOYMENT AGREEMENT FOR INDEFINITE PERIOD OF TIME ENTERED BY AND BETWEEN PAYPAL MEXICO S DE RL DE CV HEREINAFTER REFERRED TO AS THE “COMPANY,” REPRESENTED HEREIN BY Blas Enrique  Caraballo IN HIS/HER CAPACITY OF LEGAL REPRESENTATIVE AND <span class="dynamic">' + employee.Full_Legal_Name + '</span> HEREINAFTER REFERRED TO AS THE “THE EMPLOYEE,” ACCORDING TO THE FOLLOWING RECITALS AND CLAUSES:')
                )
            ),
        $('<div class="offerClause2">').append(
            $('<p class="margin-bottom-25"/>').append(
                $('<span/>').html('<strong>RECITALS</strong>')
                )
            ),
        $('<div class="offerClause2 margin-bottom-25"/>').append(
            $('<p/>').append(
                $('<ol/>').append(
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('The COMPANY declares the following:'),
                      $('<p/>').html(''), 
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">1.1</span> <span class="inl-block-2"> That it is a corporation organized and existing in accordance to the laws of the United States of Mexico, being registered before the Mexican Tax Registry under number PME091029BY5.</span>'),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">1.2</span> <span class="inl-block-2"> That it has its domicile at Mariano Escobedo 476 piso 14 Anzures Distrito Federal 11590, Mexico.</span>'),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">1.3</span> <span class="inl-block-2"> That it requires the personal services of the EMPLOYEE as <span class="dynamic">' + employee.Job_Title + '</span> to perform the duties and activities described in, but not limited to, this employment agreement (“Agreement”).</span>'),
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">1.4</span> <span class="inl-block-2"> That it in accordance with its laws is currently engaged, among others, in the activities of online payments done in a safe and fast way.</span>'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ), 
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('The EMPLOYEE declares the following:'),
                      $('<p/>').html(''), 
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">2.1</span> <span class="inl-block-2"> That EMPLOYEE’S name is <span class="dynamic">'+ employee.Full_Legal_Name +'</span>, of Mexican nationality, of <span class="dynamic">' + employee.Age_English + '</span> years of age, <span class="dynamic">' + employee.Gender + '</span>, <span class="dynamic">' + employee.Marriage_Status + '</span>, with federal taxpayer’s no. <span class="dynamic">' + employee.Tax_Payer_ID + '</span>.</span>'),
                      $('<p class="zero-btm"/>').html('<span class="margin-right-15 margin-left-15 inl-block">2.2</span> <span class="inl-block-2"> That EMPLOYEE has his domicile at</span>'), 
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block-indent"></span><span class="inl-block-indent-2"><span class="dynamic">'+ employee.Address_Line_1 + '</span><br>' + addr2 + '<span class="dynamic">' + employee.City + '</span>, <span class="dynamic">' + employee.State + '</span> <span class="dynamic">' + employee.Postal_Code + '</span></span><br>'), 
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">2.3</span> <span class="inl-block-2"> That EMPLOYEE has met all the requirements by the Mexican Government to render his services in the Country.</span>'), 
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">2.4</span> <span class="inl-block-2"> That EMPLOYEE has the capacity and experience necessary to render his personal subordinated services to the COMPANY with respect to the position of <span class="dynamic">' + employee.Job_Title + '</span>, for which he is hired.</span>'), 
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">2.5</span> <span class="inl-block-2"> That EMPLOYEE has the knowledge and abilities to provide training to the current and future personnel of the COMPANY in the matters related to his position.</span>'), 
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">2.6</span> <span class="inl-block-2"> That as of the date hereof, EMPLOYEE does not hold shares worth more than 1% of, or otherwise participate in, or have any interest in, or work for any company or firm that may compete, directly or indirectly, with the COMPANY.</span>'), 
                      $('<p/>').html('<span class="margin-right-15 margin-left-15 inl-block">2.7</span> <span class="inl-block-2"> That EMPLOYEE agrees and acknowledges that due to the COMPANY’S activities, he will render his services under the COMPANY’S control and subordination at the locations appointed and at any other locations requested by the COMPANY.</span>'),
                      $('<p/>').html('<span>Having made the foregoing recitals, the parties agree to the following:</span>'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ) 
                    ) //end of ol
                ) //end of p
        ),// end of div 
        $('<div class="offerClause2">').append(
            $('<p class="margin-bottom-25"/>').append(
                $('<span/>').html('<strong>CLAUSES</strong>')
                )
            ),
        $('<div class="offerClause2 margin-bottom-25"/>').append(
            $('<p/>').append(
                $('<ol class="ol-bold"/>').append(
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>EMPLOYMENT RELATIONSHIP </strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>The COMPANY hereby hires the EMPLOYEE, and the EMPLOYEE hereby agrees to provide to the COMPANY his professional subordinated services as  <span class="dynamic">' + employee.Job_Title + '</span>. Such services will consist of, among others, the duties set forth in this Agreement.</span>'), 
                      $('<p/>').html('<span>The EMPLOYEE agrees that among his duties and obligations, in consideration of his salary and fringe benefits and subject to the control and subordination of the COMPANY, EMPLOYEE is obligated to perform services to those entities to which the COMPANY may have a commercial relationship.</span>'),
                      $('<p/>').html('<span>The parties agree that this Agreement cancels, supersedes and substitutes any other previous contracts between the parties, either verbal or written, that the parties may have executed in the past in connection with the labor relationship and the performance of the services agreed to herein.</span>'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>WORKPLACE</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>The EMPLOYEE agrees to render his services as part of any department or division of the COMPANY and at any designated site, workplace or  establishment that the COMPANY operates, now or in the future, or at any establishment that the COMPANY may designate within 50km of the current site, whether in this city or elsewhere , or at premises belonging to any client or customer of the COMPANY, to any related COMPANY or to any other entity indicated by the COMPANY, as proper performance of the work may require.</span>'), 
                      $('<p/>').html('<span>Should the EMPLOYEE, in meeting his obligations, need to travel to other places within or outside the Mexican Republic, and to incur in transportation, lodging and meal expenses, he shall incur them on the basis of reasonable expenditures in accordance with the policies that the COMPANY has in place at that time. In all cases the Employee must evidence the expenses made through such travels with invoices and such other documents that meet the requirements set forth in the tax laws for their deduction by the COMPANY, otherwise these will not be reimbursed.</span>'),
                      $('<p class="zero-btm"/>').html('')
                      ),  
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>CONDITIONS</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>The EMPLOYEE states and represents that he is qualified and has the specific knowledge necessary to perform the work for which he is being hired; and he agrees and undertakes to perform with care and diligence all activities inherent in or related to the work for which he is hired. The EMPLOYEE shall perform his services pursuant to the instructions that he receives from the COMPANY and shall promptly comply with all such instructions from the COMPANY and/or his superiors, and those contained in any circular or instruction of the COMPANY, and comply with the obligations imposed upon him by this Agreement and by the Federal Labor Law (the “Law”).</span>'), 
                      $('<p/>').html('<span>In accordance with the above, the EMPLOYEE agrees to submit himself to the Internal Policies of the COMPANY currently in effect or those which it may enact in the future, including but not limited to confidentiality, expenses or any other policies that apply to him from time to time and as amended from time to time, and that may apply to the services agreed to herein, such as the PayPal Code of Business Conduct and Ethics.</span>'),
                      (employee.Manager == 'Yes') &&
                      $('<p/>').html('<span class="dynamic">Likewise, the Parties acknowledge that the duties of the Employee are duties of a position of trust in accordance with Article 9 of the Law and therefore, in terms of Article 185 of such Law, it will be a special cause of recession the fact that the Company loses its confidence in the Employee.</span>'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>TERM</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>The EMPLOYEE’s employment with the COMPANY shall commence on <span class="dynamic">' + employee.Start_Date_English + '</span> (notwithstanding the date of execution of this Agreement) and shall continue for an indefinite period thereafter. The COMPANY may terminate this Agreement without incurring any liability whatsoever, within the first thirty (30) days of the date on which the EMPLOYEE begins to perform his services, if the EMPLOYEE has deceived the COMPANY with certificates or references relating to his capacity, training or skills that he lacks, and may terminate this Agreement at any time without liability for any of the other causes set forth in Articles 47 and 185 of the Law and other related and/or applicable provisions thereof. </span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                      $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>SALARY</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>The EMPLOYEE shall receive for his services stated in this Agreement a monthly gross base salary of <span class="dynamic">' +  fnFormatCurrency(employee.Salary_Offered) + '</span> <span class="dynamic">' + employee.Salary_Currency + '</span> Mexican pesos. Such salary includes payment of the weekly and mandatory days of rest, and will be subject to the corresponding deductions as applicable in terms of labor, tax and any other applicable provision. The salary shall be paid on the 15th and last day of each month by means of two (2) equal payments. The salary shall be paid to the EMPLOYEE at the place where he renders his services or at any other place agreed upon by the parties.</span>'), 
                      $('<p/>').html('<span>Upon payment of his salary, the Employee shall sign and deliver to the COMPANY the corresponding receipt.</span>'),
                      $('<p/>').html('<span>In addition, the EMPLOYEE will be entitled to receive a variable compensation of <span class="dynamic">' + employee.Variable_Bonus_Percentage + '</span>% in accordance with the terms and conditions of the PayPal Annual Incentive Plan (the “AIP” or the “Plan”), as revised by the COMPANY at its sole discretion. The EMPLOYEE acknowledges and agrees with all the terms and conditions established in the Plan.</span>'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>WORK WEEK; OVERTIME  </strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>The EMPLOYEE will work the maximum number of hours set forth in Article 61 of the Law, and therefore will work forty-eight (48) hours per  week, which will be freely and independently distributed by him in accordance with the best convenience of the work agreed and in the interests of the COMPANY.</span>'), 
                      $('<p/>').html('<span>The parties agree that the EMPLOYEE cannot perform his services in a daily working schedule in excess to the maximum provided in the Law.</span>'), 
                      $('<p/>').html('<span>In accordance with the above, it is expressly agreed that the EMPLOYEE will not perform overtime, and if so required, he shall be duly authorized in writing by a representative of the COMPANY of a higher position. This requirement is absolutely necessary for coverage of the extraordinary overtime period.</span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>TRAINING AND INSTRUCTION </strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>The EMPLOYEE shall follow the instructions that he receives for workrelated training in the manner and on the terms that the COMPANY instructs and shall give job training and/or instruction to fellow workers as instructed, in the manner prescribed by the COMPANY’s training and instruction programs. </span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>HOLIDAYS; DAYS OF REST  </strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>The EMPLOYEE shall enjoy the legal holidays and weekly days of rest established by the Law and shall receive payment of his full salary corresponding thereto.</span>'), 
                      $('<p/>').html('<span>The EMPLOYEE shall have as mandatory days of rest those days indicated in Article 74 of the Law. Payment for these days of rest is included in the salary stated in Clause 5 of this agreement. </span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>VACATIONS </strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>EMPLOYEE shall enjoy an annual period of vacation of twelve (12) working days for the first complete year of services, and for subsequent years in accordance with the Law. Such vacations must be taken within 18 months after the EMPLOYEE has earned the vacation. Unused days will be forfeited thereafter.  </span>'),
                      $('<p/>').html('<span>For each vacation day, employees will receive a vacation bonus of 50% of the vacation day’s salary.  </span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>CHRISTMAS BONUS  </strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>The parties agree that the payment of the annual Christmas Bonus shall be equivalent to thirty days of the salary mentioned in Clause 5 of this Agreement, in accordance with Article 87 of the Law.</span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>SOCIAL SECURITY  </strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>The EMPLOYEE will be registered with the Mexican Social Security Institute (“IMSS”) as provided in the Social Security Law (“SSL”). The COMPANY and the EMPLOYEE will be responsible for paying the applicable contributions to the IMSS pursuant to the SSL. Both Parties agree to comply with all matters relative to the Social Security Law and its Regulations.</span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>CONFIDENTIALITY; COPYRIGHT </strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>The EMPLOYEE recognizes that by virtue of his position, during his employment he will have access to “Confidential Information” and “Trade Secrets,” which shall include, but is not limited to, marketing, merchandising, or other business plans, business methods, pricing, purchasing, licensing, contracts, executive, supplier and customer information, financial data, technological developments, manufacturing processes, software, and any product, apparatus or process manufactured, used, developed or investigated by the COMPANY, its parent company, subsidiaries or related companies, its executives or agents, or any other proprietary or other information that is not publicly available to others. The EMPLOYEE understands that all Confidential Information and Trade Secrets are the COMPANY’s exclusive property. The EMPLOYEE agrees to use the COMPANY’s Trade Secrets and Confidential Information as well as Trade Secrets and Confidential Information of its parent company, subsidiaries or related companies, exclusively in the performance of his employment with the COMPANY and agrees not to use or disclose, directly or indirectly, the Trade Secrets or Confidential Information of the COMPANY, its parent company, subsidiaries or related companies to his own benefit or for the benefit of third parties, at any time or place, even after the termination of the labor relationship, whatever its cause, or for any other purpose, at any time, unless the EMPLOYEE obtains the COMPANY’s written consent to do so.</span>'),
                      $('<p/>').html('<span>The EMPLOYEE acknowledges and agrees that the Confidential Information and Trade Secrets include information that constitutes (i) an industrial secret under the Mexican Industrial Property Law and (ii) an industrial and trade secret under Articles 210 and 211 of the Penal Code for the Federal District of Mexico, and the corresponding articles of the penal codes of the Mexican States. When the EMPLOYEE’s employment with the COMPANY ends, he agrees to deliver to the COMPANY all materials in his possession that contain Trade Secrets and Confidential Information, as well as all other documents and other tangible items provided to him by the COMPANY or developed by the EMPLOYEE in connection with his employment with the COMPANY.</span>'),
                      $('<p/>').html('<span>The EMPLOYEE agrees to disclose to the COMPANY, its parent company, subsidiaries, or related companies, any and all concepts, improvements, copyrights, trademarks, trade names, designs, inventions, discoveries, articles or creative works that he may conceive or reduce to practice during his employment with the COMPANY and that relate to the COMPANY’s current business or future business plans. The EMPLOYEE further agrees that any concepts, improvements, copyrights, trademarks, trade names, designs, inventions, discoveries, articles or creative works that he may conceive or reduce to practice during his employment with the COMPANY and that relate to the COMPANY’s current or future business are and shall be the COMPANY’s sole and exclusive property and that the EMPLOYEE shall not have any patrimonial or other ownership rights in the work developed, expressly agreeing that he will not be entitled to the payment of royalties or any other right derived from such work. In addition, the EMPLOYEE expressly authorizes the modification, adaptation, transport, translation, representation, exhibition and any use, total or partial, of the developed work, with the sole exception of his noneconomic or moral rights. Upon request during the employment of the EMPLOYEE with the COMPANY or thereafter, the EMPLOYEE will take all necessary steps, at the COMPANY’s expense, but without further compensation to the EMPLOYEE, to execute and assign any instruments to enable the COMPANY or its nominee to obtain copyright, trademark or patent protection anywhere in the world to give the COMPANY, its parent company, subsidiaries or related companies, or its nominee the sole and exclusive right, title and interest in such copyrights, trademarks, improvements, inventions, discoveries, applications and patents. The EMPLOYEE also agrees to help the COMPANY in every way possible in any legal proceedings pertaining to inventions, concepts, trademarks, copyrights, patent applications and patents of which the EMPLOYEE has knowledge. Furthermore, the EMPLOYEE agrees that any property right, related to the COMPANY, its parent company, subsidiaries or related companies, which under law may not be deemed as property of such entities, shall be assigned by the EMPLOYEE to the COMPANY or any other person or entity that the COMPANY may designate. For this purpose, the EMPLOYEE will take all necessary steps to assign any property right to the COMPANY at the COMPANY’s expense, but without further compensation to the EMPLOYEE.</span>'), 
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>COMPLIANCE WITH APPLICABLE LAWS  </strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>The EMPLOYEE agrees to comply with all applicable laws, regulations, and governmental orders of Mexico and the United States of America, now or hereafter in effect, relating to the EMPLOYEE’s employment by the COMPANY.</span>'), 
                      $('<p/>').html('<span>The EMPLOYEE confirms that he has read and understood the provisions of the PayPal Code of Business Conduct and Ethics prohibiting foreign bribery and improper payments and requiring strict compliance with the United States Foreign Corrupt Practices Act (“FCPA”), and agrees to fully comply with those provisions and the FCPA.</span>'),
                      $('<p/>').html('<span>Without limiting the generality of the foregoing, the EMPLOYEE represents and warrants that he has not, and shall not at any time during his employment with the COMPANY, pay, give, or offer or promise to pay or give, any money or any other thing of value, directly or indirectly, to, or for the benefit of: (i) any government official, political party or candidate for political office; or (ii) any other person, firm, corporation or other entity, with knowledge that some or all of that money or other thing of value will be paid, given, offered or promised to a government official, political party or candidate for political office, for the purpose of obtaining or retaining any business, or to obtain any other unfair advantage, in connection with the COMPANY’s business.</span>'),
                      $('<p/>').html('<span>The EMPLOYEE acknowledges that the COMPANY’s products, and all technical data pertaining to those products, are subject to export controls under the laws and regulations of Mexico, and the United States of America, including the Export Administration Regulations, 15 C.F.R. Parts 730-774. During the employment with the COMPANY, the EMPLOYEE shall comply strictly with all such export controls, and, without limiting the generality of this Clause, the EMPLOYEE shall not export, reexport,  transfer or divert any of the COMPANY products, and technical data pertaining to such COMPANY products, or any direct product thereof to any destination, end-use or end-user that is prohibited or restricted under United States export control laws and regulations, except as specifically authorized by the United States Department of Commerce. The obligations under this Clause shall survive the expiration or termination of this Agreement.</span>'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>DATA PRIVACY </strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>The EMPLOYEE expressly consents to the processing (including collection, use, and local and international transmission to databases within the COMPANY’s group or third-party contractors storing such data on the COMPANY’s behalf) of his personal data. The EMPLOYEE may request and obtain access to his own personal data (where collected), and correct or delete such data (where appropriate).</span>'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>OTHER BENEFITS  </strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>The EMPLOYEE shall enjoy the extralegal benefits described in “Exhibit A” hereto. </span>'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>POST TERMINATION </strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>In the event of termination of your employment hereunder, however arising, the Employee agrees that he/she will not at any time after such termination represent himself/herself as still having any connection with the Company or any Associated Company save as a former employee for the purposes only of communicating with prospective employers or complying with any applicable statutory requirements.</span>'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>NOTICES </strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>The EMPLOYEE shall notify the COMPANY in writing of any change of address, telephone number, or any other similar personal information within forty-eight (48) hours following such change. </span>'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      ),
                    $('<li class="margin-bottom-25"/>').append(
                      $('<span/>').html('<span><strong>ENTIRE AGREEMENT</strong></span>'),
                      $('<p/>').html(''),
                      $('<p/>').html('<span>This Agreement, together with any exhibits, constitutes the complete and entire statement of all terms, conditions and representations of the  agreement between the COMPANY and the EMPLOYEE with respect to its subject matter and supersedes all documents and correspondence between the parties prior to the date hereof. </span>'),
                      $('<p/>').html('<span>What has not been foreseen in this agreement will be regulated in accordance with the provisions of the Law and other applicable dispositions, canceling and substituting any previous written or verbal agreements that the parties may have executed in the past.</span>'),
                      $('<p/>').html('<span>Both parties, after having read this Agreement and with a full understanding of its contents and the extent of the obligations thereunder, sign it in the city of Mexico City, Mexico, on  <span class="dynamic">' + employee.Start_Date_English + '</span>.</span>'), 
                      $('<p/>').html('<span>The parties agree that the Spanish version of this Agreement shall govern and that the English translation is just for ease of use for the parties. </span>'),
                      $('<p/>').html(''),
                      $('<p class="zero-btm"/>').html('')
                      )         
                    // template
                     
                    ) //end of ol
                ) //end of p

        )// end of div
        //end of append
        );

$("#markup3").html("").append(
    $('<div class="offerClause3 margin-bottom-25"/>').append(
  $('<p/>').html(''),
            $('<p/>').html('Del Contrato Individual de Trabajo celebrado entre PAYPAL MEXICO, S. DE R.L. DE C.V. y <span class="dynamic inline">' + employee.Full_Legal_Name + '</span>, el <span class="dynamic inline">' + employee.Start_Date_Spanish + '</span>.'),
            $('<p/>').html(''),
            $('<p/>').html('Of the Individual Employment Agreement entered into by and between PAYPAL MEXICO, S. de R.L. de C.V. and <span class="dynamic inline">' + employee.Full_Legal_Name + '</span>, on <span class="dynamic inline">' + employee.Start_Date_English + '</span>.'),
            $('<p/>').html('')
            )
  );


}

function formatCurrency(total) {
  console.log(parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString())
    return parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
}

function fnFormatCurrency(total) {
  console.log(total)
    if (total) {
      console.log('fun')
        total = (total.indexOf(',') != -1) ? total.split(',').join('') : total;
        return formatCurrency(total);
    } else {
        return '0.00';
    }
}


$(function() {
    // render template
    fnView();

    // completed letter
    if (!$("input.calendar_button").length) {
        $("#ButtonSaveAndComplete").remove();
        $("input[type=text]").removeAttr('onfocus').attr("disabled", "disabled");

        var arrParts = [
            [1,'hidden_pg']
        ];
        var arrParts2 = [
            [1,'hidden_pg2']
        ];
        var arrParts3 = [
            [1,'hidden_pg3']
        ];

        //Send (ID of the div to hide,ID of the div to show,Parts to get the offer letter)
        showCompletedOfferLetter('incomplete','complete',arrParts);
        showCompletedOfferLetter('incomplete2','complete2',arrParts2);
        showCompletedOfferLetter('incomplete3','complete3',arrParts3);
    }
});
