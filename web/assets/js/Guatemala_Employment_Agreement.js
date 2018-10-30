/**
 * SERVICES-35831 | jjucutan | PayPal: Create Guatemala Employment Agreement
 */
function fnView() {
    $("#markup").html("").append(
        // OfferClause 1
        $('<div class="offerClause"/>').append(
            $('<p/>').html(GEAOfferLetter.employee.Current_Date)
        ),
        $('<div class="offerClause">').append(
            $('<p class="mb-60"/>').append(
                $('<span/>').append('<strong>' + GEAOfferLetter.employee.Full_Name + '</strong><br>'),
                $('<span/>').append(GEAOfferLetter.employee.Address1 ? GEAOfferLetter.employee.Address1 + '<br>' : ''),
                $('<span/>').append(GEAOfferLetter.employee.Address2 ? GEAOfferLetter.employee.Address2 + '<br>' : ''),
                $('<span/>').append(GEAOfferLetter.employee.City ? GEAOfferLetter.employee.City + ', ' : ''),
                $('<span/>').append(GEAOfferLetter.employee.State ? GEAOfferLetter.employee.State + ', ' : ''),
                $('<span/>').append(GEAOfferLetter.employee.Zip ? '<strong>' + GEAOfferLetter.employee.Zip + '</strong><br>' : '')
            )
        ),
        $('<div class="offerClause" />').append(
            $('<p/>').append(
                $('<strong/>').text('CONTRATO DE TRABAJO INDIVIDUAL POR TIEMPO INDEFINIDO')
            )
        ),
        $('<div class="offerClause" />').append(
            $('<p/>').text('Contrato de Trabajo Individual POR TIEMPO INDEFINIDO celebrado entre:')
        ),
        $('<div class="offerClause" />').append(
            $('<ol class="list-indented" type="a"/>').append(
                $('<li/>').append('SOLUCIONES  BK, SOCIEDAD  ANÓNIMA representada aquí por Juan  José  ALVARADO, único director y representante, en lo sucesivo denominado “el Empleador”, <strong>de la primera parte.</strong><br>'),
                $('<li/>').append(GEAOfferLetter.employee.Full_Name + ', en lo sucesivo denominado “el Empleado”, <strong>de la segunda parte.</strong><br>')
            )
        ),
        $('<div class="offerClause" />').append(
            $('<p/>').append('Por medio del presente y bajo juramento ambas partes')
        ),
        $('<div class="offerClause" />').append(
            $('<p/>').append(
                $('<strong/>').html("DECLARAN"),
            ),
            $('<p/>').append(
                '<strong>I. Declaración de las partes</strong><br>El representante de SOLUCIONES  BK, SOCIEDAD ANÓNIMA, declara que tiene ' + GEAOfferLetter.employee.RepAgeYear + ' años de edad, es un ' + GEAOfferLetter.employee.RepMaritalStatusSpanish + ' ' + GEAOfferLetter.employee.RepGenderSpanish + ', ciudadano ' + GEAOfferLetter.employee.RepNationalitySpanish + ', ' + GEAOfferLetter.employee.RepJobTitleSpanish + ', de sexo ' + GEAOfferLetter.employee.RepGenderSpanish + ', residente en ' + GEAOfferLetter.employee.RepCountry + ', portador del Documento Personal de Identificación (DPI) código único de identificación –CUI - ' + GEAOfferLetter.employee.RepSoleIdentificationCode + ' emitido por el Registro Nacional de las Personas de Guatemala.  Además, ' + GEAOfferLetter.employee.RepFullLegalName + ' declara que su mandante es una sociedad anónima constituida conforme a las leyes de Guatemala, con domicilio comercial principal en ' + GEAOfferLetter.employee.RepAddress1 + ' ' + GEAOfferLetter.employee.RepAddress2 + ' ' + GEAOfferLetter.employee.RepCity + ', ' + GEAOfferLetter.employee.RepState + ', ' + GEAOfferLetter.employee.RepPostalCode + ' y que tiene por objeto proporcionar servicios legales y rentables en conexión con el objeto social y otros.'
            )
        ),
        $('<div class="offerClause" />').append(
            $('<p/>').html('El Empleado declara: que tiene ' + GEAOfferLetter.employee.AgeYears + ' años de edad, (estado civil), ' + GEAOfferLetter.employee.MaritalStatusSpanish + ', ciudadano/a  guatemalteco/a, (ocupación) ' + GEAOfferLetter.employee.OccupationSpanish + ',  de sexo ' + GEAOfferLetter.employee.GenderSpanish + ', residente en ' + GEAOfferLetter.employee.Address1 + ' ' + GEAOfferLetter.employee.Address2 + ' ' + GEAOfferLetter.employee.CityStateZip + '; portador(a) del Documento Personal de Identificación (DPI) Código Único de Identificación –CUI - ' + GEAOfferLetter.employee.SoleIdentificationNumber + ' emitido por el Registro Nacional de las Personas de Guatemala. El Empleado se compromete a informar de cualquier cambio en estas declaraciones.')
        ),
        $('<div class="offerClause" />').append(
            $('<p/>').append(
                $('<strong/>').html('II. Requisitos del Empleador'),
                $('<br/>'),
                'SOLUCIONES BK, SOCIEDAD ANÓNIMA, a través de su representante, declara que para poder llevar a cabo sus actividades, requiere personal capacitado para ocupar el puesto de ' + GEAOfferLetter.employee.Business_Title_Spanish + ' cuyas funciones, deberes, remuneración y otras condiciones específicas de trabajo se enumeran a continuación, y que ha seleccionado a ' + GEAOfferLetter.employee.Full_Name + ' para ocupar dicho puesto. '
            )
        ),
        $('<div class="offerClause" />').append(
            $('<p/>').append(
                $('<strong/>').html('III. Declaración del Empleado'),
                $('<br/>'),
                'El Empleado declara que cuenta con el conocimiento y la experiencia necesarios para ocupar el puesto de ' + GEAOfferLetter.employee.Business_Title_Spanish + ' requerido por el Empleador; por lo tanto, antes de este acto, solicitó su asignación.'
            )
        ),
        $('<div class="offerClause" />').append(
            $('<p/>').append(
                $('<strong/>').html('IV. Contrato de trabajo'),
                $('<br/>'),
                'Según las declaraciones anteriores, ambas partes acuerdan firmar un CONTRATO DE TRABAJO INDIVIDUAL POR TIEMPO INDEFINIDO sujeto a los siguientes términos y condiciones contractuales:'
            )
        ),
        $('<div class="offerClause" />').append(
            $('<p/>').append(
                $('<strong/>').html('UNO.  Exclusividad, confidencialidad y no divulgación:'),
                $('<br/>'),
                'El Empleado se compromete a acatar las disposiciones descritas en el Acuerdo con el empleado sobre inventos e información confidencial, adjunto como Anexo A a este contrato, que rige la confidencialidad y la no divulgación.'
            )
        ),
        $('<div class="offerClause" />').append(
            $('<p/>').append('El Empleado deberá proporcionar servicios bajo la dirección, subordinación y dependencia económica continua de SOLUCIONES BK, SOCIEDAD ANÓNIMA, y llevará a cabo todas las órdenes y las instrucciones impartidas en relación con el empleo. De conformidad con el Artículo 18 del Código de Trabajo, el Empleado acepta no trabajar para una empresa en una actividad igual o similar a la del Empleador mientras esté trabajando para el Empleador.  El Empleado mantendrá en estricto secreto todas las instrucciones de capacitación, así como todas las estrategias e información de producción y comercialización de la Empresa y toda la demás información confidencial sobre cuestiones de producción o administración conocidos por el Empleado.')
        ),
        $('<div class="offerClause" />').append(
            $('<p/>').append('Este compromiso de no divulgación tendrá vigencia "durante" el empleo y después de la "terminación" del mismo. En caso de que la divulgación de ese conocimiento o información confidencial ocurra "durante" el empleo, eso constituirá motivo suficiente adicional para rescindir el contrato, sin responsabilidad alguna por parte del Empleador, independientemente de que el Empleador decida emprender acciones judiciales para reparar el daño causado por la divulgación de dicha información.')
        ),
        $('<div class="offerClause" />').append(
            $('<p/>').append('Con respecto a todos los asuntos relacionados con el desempeño ordinario de las funciones del Empleado, el Empleado hablará sobre esas cuestiones con otros Empleados que suministran servicios al Empleador o con Empleados de otros clientes que conocen dichos asuntos, incluyendo conversaciones sobre información confidencial, si es necesario. ')
        ),
        $('<div class="offerClause" />').append(
            $('<p/>').append('Esta confidencialidad y compromiso de no divulgación se mantendrán en vigencia por un período indefinido, incluso después de la terminación del empleo, independientemente de que cualquier divulgación por parte del Empleado después de la rescisión del contrato faculte al Empleador para emprender las acciones legales que considere convenientes para la reparación de los daños causados. ')
        ),
        $('<div class="offerClause" />').append(
            $('<p/>').append('Las partes acuerdan que, para efectos del presente, se entenderá como "información confidencial no divulgada o secreta" toda información verbal o escrita conocida por el Empleado en relación con los servicios prestados y que, cuando es divulgada o utilizada para beneficio personal del Empleado o de cualquier tercero que no sea el Empleador, puede causar daños al Empleador, sus representantes, accionistas o clientes o personas comercialmente vinculadas con el Empleador.')
        ),
        $('<div class="offerClause" />').append(
            $('<p/>').append(
                $('<strong/>').html('DOS.  Servicios:'),
                $('<br/>'),
                'El Empleado ocupará el puesto de ' + GEAOfferLetter.employee.Business_Title_Spanish + '.  Los servicios que el Empleado prestará al Empleador se describen a continuación, incluyendo, entre otros, funciones como ' + GEAOfferLetter.employee.Business_Title_Spanish + ' de Soluciones BK, Sociedad Anónima con responsabilidad por el desempeño de todas y cada una de las funciones generalmente asociadas con el desempeño de dicho puesto y la prestación de los servicios requeridos para su puesto, relacionados con este o resultantes del mismo, y los determinados por el Empleador.'
            )
        ),
        $('<div class="offerClause" />').append(
            $('<p/>').append(
                'El Empleado deberá cumplir todos los servicios y deberes indicados por el Empleador, tanto de forma escrita como oral, así como todas aquellas funciones incluidas, relacionadas o compatibles con el puesto y todas las demás funciones que puedan surgir ocasionalmente y estar incluidas en la descripción del puesto. El Empleado deberá cumplir con todo lo incluido en las Normas laborales corporativas del Empleador, el manual del Empleado, el Código de conducta y ética empresarial, los Manuales técnicos y otras políticas corporativas. El Empleador asignará al Empleado un nuevo lugar de trabajo, siempre y cuando esto esté dentro de sus capacidades, en igualdad de condiciones y en el curso de las actividades comerciales del Empleador, pero no se considerará un cambio en las condiciones de trabajo, porque así es como queda expresamente convenido.'
            )
        ),
        $('<div class="offerClause" />').append(
            $('<p/>').append(
                'El hecho de que el Empleado realice actividades que puedan beneficiar a terceros que no son las partes involucradas en el presente, y que dichos terceros tengan una relación civil, comercial o mercantil con el Empleador, no significa que el Empleado esté trabajando para dichos terceros.  La remuneración por dichos servicios está incluida en el sueldo acordado con el Empleador.'
            )
        ),
        $('<div class="offerClause" />').append(
            $('<p/>').append(
                'El Empleado deberá cumplir con todas las responsabilidades de conformidad con la ley y las normas laborales corporativas, pero especialmente:.'
            )
        ),
        $('<div class="offerClause" />').append(
            $('<ol class="list-indented mb-20" type="a"/>').append(
                $('<li/>').append('Acatar todo lo relacionado con el trabajo, las disposiciones, las instrucciones o los procedimientos incluidos en las normas, las políticas, los manuales, las comunicaciones o las órdenes impartidas por el Empleador o su representante para el cumplimiento de sus funciones.  Como declaración preliminar a lo dispuesto en el presente, el Empleado declara que ha recibido, conocido y aceptado acatar las normas del Empleador que establecen las directrices que el Empleado debe cumplir para llevar a cabo sus funciones.  Además, es obligación del Empleado mantenerse informado sobre las normas del Empleador, las cuales el Empleador pondrá a su disposición por cualquier medio a su alcance.<br>'
                ),
                $('<li/>').append('En el ejercicio de sus obligaciones y responsabilidades, el Empleado deberá contribuir al logro de la visión y la misión establecidas por el Empleador, y demostrará un comportamiento moral, corrección, responsabilidad y discreción absolutas de manera que no ponga en riesgo la seguridad y los intereses del Empleador.  El Empleado se compromete a prestar sus servicios con un máximo de integridad y buena fe.<br>'
                ),
                $('<li/>').append('El Empleado es responsable de los activos, los materiales y los bienes del Empleador que tiene a su cargo; por lo tanto, debe vigilar su integridad, conservación y mantenimiento, evitando su pérdida, extravío o maltrato.  En caso de pérdida o daño prevalecerán las disposiciones estipuladas en el Artículo 99 del Código de Trabajo.<br>'
                ),
                $('<li/>').append('El Empleado deberá identificar y garantizar que se apliquen prácticas, proyectos y planes de acción óptimos para generar resultados positivos.<br>'
                ),
                $('<li/>').append('El Empleado deberá mantener y proteger el nombre del Empleador, su empresa, productos, servicios, prácticas, procesos, políticas, valoraciones, directores, directivos, empleados, agentes, socios, inversores o empresas relacionadas y se abstendrá de actividades, críticas o manifestaciones que amenacen o afecten sus nombres, negocios o relaciones con los clientes, los proveedores o los empleados actuales o potenciales, inclusive fuera de Guatemala.<br>'
                ),
                $('<li/>').append('El Empleado deberá demostrar puntualidad en todas las cuestiones relacionadas con el desempeño de sus funciones y responsabilidades.<br>'
                ),
                $('<li/>').append('El Empleado no participará en discusiones ni negociaciones verbales o escritas con proveedores, competidores o clientes sobre ningún tema que tenga como objetivo, busque o tienda a afectar a la competencia, tales como acuerdos de precios, repartición de mercados o de clientes, fijación de precios o reventa de productos o convenios de precios o productos para participar en licitaciones.<br>'
                ),
                $('<li/>').append('El Empleado deberá dar igualdad de trato a todos los clientes en las mismas circunstancias, que deberán evaluarse según criterios objetivos, evitando actos de discriminación contra ellos, pero siempre cumpliendo con los procedimientos de crédito y seguridad establecidos por el Empleador.<br>'
                ),
                $('<li/>').append('El Empleado deberá defender de forma preferencial todos los negocios e intereses del Empleador.<br>'
                ),
                $('<li/>').append('El Empleado deberá utilizar las contraseñas y acceso al software o sistemas proporcionados por el Empleador solo para realizar sus funciones dentro de las autorizaciones otorgadas. Está estrictamente prohibido usar estas herramientas, accesos y contraseñas para cualquier transacción o uso no autorizados expresamente por el Empleador.<br>'
                ),
                $('<li/>').append('El Empleado debe informar todo conflicto de intereses que pueda tener y el cumplimiento de las obligaciones y las responsabilidades adquiridas con el Empleador, tan pronto como se entere de su existencia.<br>'
                ),
                $('<li/>').append('El Empleado tiene estrictamente prohibido recibir incentivos financieros, regalos, propinas y cualquier otro beneficio de clientes, subdistribuidores, competidores o proveedores del Empleador, ya sean actuales o potenciales.  En caso de que le entreguen o envíen cualquiera de los anteriores, el Empleado deberá avisar de inmediato al Gerente General.<br>'
                ),
                $('<li/>').append('El Empleado se compromete a no emprender acciones directas o indirectas o competencia desleal en perjuicio del Empleador. Para ello, no llevará a cabo en forma directa o indirecta ninguna de las siguientes acciones:  adquirir, administrar, operar, participar o controlar como dueño, director, empleado, socio, asesor o consultor de ningún negocio, empresa, organización con o sin fines de lucro; prestar servicios o realizar de cualquier otra forma actividades que estén en el curso normal de las actividades comerciales del Empleador, o cualquier actividad definida en el presente, con cualquier persona natural o jurídica que, de forma directa o indirecta, compita, preste servicios similares, complementarios o alternativos (indistintamente "los Competidores potenciales") a quien el Empleador en el territorio de Guatemala o en el extranjero, o individuos o corporaciones que presten servicios a los potenciales competidores por el empleo.<br>El Empleado acepta no hacerse cargo de empleos o actividades comerciales externas que compitan de forma directa o indirecta con el Empleador. Para ello, el Empleado no llevará a cabo en forma directa o indirecta ninguna de las siguientes acciones:  (1) adquirir, administrar, operar, participar o controlar como dueño, director, empleado, socio, asesor o consultor ningún negocio, empresa u organización con o sin fines de lucro que compita con el Empleador; y (2) prestar servicios o realizar de cualquier otra forma actividades que estén en el curso normal de las actividades comerciales del Empleador, o cualquier actividad definida en ellas, con cualquier persona natural o jurídica que, de forma directa o indirecta, compita o preste servicios similares, complementarios o alternativos (indistintamente "los Competidores potenciales") a los del Empleador en el territorio de Guatemala o en el extranjero, o personas naturales o jurídicas que presten servicios a Competidores potenciales.<br>'
                ),
                $('<li/>').append('El Empleado no deberá recibir y se compromete a no recibir incentivos económicos, regalos, propinas o cualquier otro beneficio de clientes, subdistribuidores, competidores o proveedores actuales o potenciales, del Empleador.  En caso de que le entreguen o envíen cualquiera de los anteriores, el Empleado deberá avisar de inmediato al Gerente General.<br>'
                ),
                $('<li/>').append('El Empleado deberá salvaguardar y no revelar a terceros o hacer uso en su propio beneficio o en beneficio de terceros, de los documentos, correos, fórmulas, recetas, procedimientos, técnicas o cualquier información del Empleador o de sus clientes o usuarios o de cualquier tercero conocido debido a la prestación de servicios y especialmente aquellos con los que el Empleador tiene obligación de confidencialidad, así como los asuntos administrativos cuya divulgación podría perjudicarles, siendo civil y penalmente responsable de su incumplimiento. La información confidencial incluye, entre otras, información relacionada con "Secretos comerciales" del Empleador a disposición del Empleado o recibida como resultado directo o indirecto de la prestación de servicios. Los secretos comerciales considerados como protegidos en el presente, sin limitación alguna incluyen: fórmulas, información técnica, planes estratégicos, planes de negocios, planes de marketing y publicidad, productos, servicios, procesos de fabricación, planes de capacitación, manuales de capacitación, procedimientos y de otro tipo, toda lista de clientes, proveedores, empleados, cuentas de clientes, información estadística con respecto al negocio, su relación con los clientes y estadísticas de procesos y actividades internas. Además, Secreto comercial será toda información de marketing o publicidad dirigida a los clientes, informes enviados a y por los clientes, información de ventas, métodos, precios y presupuestos, datos de marketing, investigación, técnicas de ventas; nombres, direcciones, números de teléfono y de fax, operaciones, hábitos de compra y prácticas de clientes, distribuidores, representantes, empleados o clientes potenciales del Empleador o de sus clientes; información sobre métodos de compras y proveedores, incluyendo nombres y cualquier otra forma de identificación de los vendedores y proveedores, costos de materiales y precios a los que dichos materiales, productos o servicios han sido obtenidos o vendidos; información contable, financiera, fiscal, de impuestos y legal del Empleador; información sobre negocios y relaciones laborales; toda información no divulgada y de propiedad del Empleador que pueda ser utilizada en cualquier actividad productiva, industrial, comercial o de servicio y estar sujeta a ser transmitida a un tercero y toda información privada de otra índole que no esté disponible libremente a terceros y obtenida como resultado de la prestación de servicios comprados, en relación con cualquier actividad relacionada de manera directa o indirecta con el negocio realizado por el Empleador y que no está disponible libremente a terceros. Para que un documento impreso o electrónico sea considerado confidencial, no será necesario que esté marcado como tal. La información puede ser oral, escrita o en un medio tangible.  El incumplimiento de esta obligación se considera una infracción muy grave. La obligación de confidencialidad se mantendrá incluso si termina la relación laboral por un período indefinido.<br>'
                ),
                $('<li/>').append('Mantener en buenas condiciones, salvo el desgaste normal, instrumentos, muebles o elementos suministrados para el cumplimiento de sus funciones, e informar de inmediato a sus superiores toda observación que considere necesaria para evitar daños al Empleador y ofrecer toda la asistencia que requieran las circunstancias en caso de que ocurra un desastre.<br>'
                ),
                $('<li/>').append('Mantener su área de trabajo limpia y ordenada;<br>'),
                $('<li/>').append('Asegurar el correcto mantenimiento y el uso apropiado de instalaciones, aparatos, materiales y equipos del Empleador.<br>'),
                $('<li/>').append('Comportarse en todo momento en el lugar de trabajo con el lenguaje y el respeto apropiado hacia los demás compañeros, clientes y hacia el Empleador y sus representantes, y toda persona con quien tenga contrato por el trabajo realizado.<br>'),
                $('<li/>').append('No llevar alimentos ni bebidas al lugar de trabajo y utilizar únicamente el área designada para ese fin.<br>'),
                $('<li/>').append('Si el Empleado recibe anticipos por gastos a ser incurridos para la prestación de servicios o de otro tipo, deberá cancelar dicho anticipo, según las políticas del Empleador, las cuales el Empleador declara conocer y entender en su totalidad.<br>'),
                $('<li/>').append(
                    'Al finalizar el contrato por cualquier motivo, el Empleado deberá entregar de inmediato al Empleador o a la persona designada por este, los bienes propiedad del Empleador, incluidos:<br><br>',
                    $('<ul class="list-indented"/>').append(
                        $('<li/>').html('activos tales como registros de datos, contraseñas de programas o software, acceso a software de información fiscal, software de administración de bancos, productos, bases de datos, compilaciones hechas por sí mismo o que le hayan sido entregadas en el transcurso de su trabajo con el Empleador, así como copias, resúmenes, sinopsis con información del Empleador o de clientes o proveedores del Empleador, sean o no confidenciales;'),
                        $('<li/>').html('Todos y cada uno de los originales y las copias de los resultados del trabajo realizado por el Empleado en beneficio del Empleador y que estén en su posesión, incluyendo todo trabajo en curso y la información y los documentos relacionados con el mismo;'),
                        $('<li/>').html('Todos y cada uno de los originales y las copias entregados por el Empleador, obtenidos o desarrollados por el Empleado, de toda la información clasificada como confidencial.  '),
                        $('<li/>').html('Si posteriormente el Empleado tiene en su posesión cualquier objeto de valor, información o documento mencionado antes propiedad del Empleador, deberá entregarlo en un plazo de tres días. ')
                    )
                ),
                $('<li/>').append('El Empleado declara que el sueldo acordado en el presente es reconocimiento suficiente para aceptar y estar de acuerdo con todas las funciones y responsabilidades del mismo.<br>')
            )
        ),
        $('<div class="offerClause" />').append(
            $('<p/>').append(
                $('<strong/>').append('TRES. Propiedad intelectual:<br>'),
                'El Empleado se compromete a acatar las disposiciones descritas en el Acuerdo con el empleado sobre inventos e información confidencial, adjunto como Anexo A a este contrato, donde se rigen los derechos de propiedad intelectual y la asignación de los mismos.'
            ),
            $('<p/>').append(
                'Las partes declaran que, debido a los servicios que serán prestados por el Empleado, este, ocasionalmente y de conformidad con los requisitos del Empleador, deberá desarrollar "nuevos trabajos" o "inventos" que pueden constar de contribuciones e inventos, descubrimientos, creaciones, desarrollos, mejoras, obras de autor e ideas (ya sean patentables o registrables o cualquier otro resultado de trabajo), sujetos a protección de las leyes vigentes de propiedad intelectual en Guatemala, o que puedan estar protegidos en virtud de las normas de derecho común, por lo tanto, en tales eventos, el Empleado por el presente cede al Empleador todos los derechos económicos resultantes del desarrollo de dichos trabajos o inventos, por consiguiente, el EMPLEADOR puede ejercer todos los derechos en conformidad con la ley, y el Empleado no revelará ni contribuirá de otra forma al desarrollo de inventos o trabajos similares de terceros y mantendrá dicho desarrollo en estricta confidencialidad.'
            ),
            $('<p/>').append(
                'El Empleado acepta expresamente cooperar con el Empleador para llevar a cabo toda formalidad, incluido el registro de la obra o el invento, para lograr una protección efectiva de los derechos que el Empleador podría ostentar.'
            ),
            $('<p/>').append(
                'Este compromiso de cesión de derechos también se aplicará a todo desarrollo del Empleado como consecuencia del empleo o de información obtenida como resultado del desarrollo del mismo, incluso si el desarrollo no está relacionado directamente con los servicios prestados al Empleador, y por consiguiente, deberá informar al Empleador sobre el desarrollo de todo trabajo o invento.'
            ),
            $('<p/>').append(
                $('<strong/>').append('CUATRO. Ausencia de intermediaries:<br>'),
                'El Empleado afirmó que al principio de este trabajo, ninguna persona natural o jurídica participó en lo que puede considerarse un intermediario, y que de ser reportado en el futuro, solo la presentación judicial o extrajudicial del presente será prueba suficiente para eliminar o excluir a estos o a este de toda reclamación contra el Empleador, lo cual el Empleado por este medio acepta y ratifica al firmar el presente contrato.'
            ),
            $('<p/>').append(
                $('<strong/>').html('SEIS. Sueldo y prima de incentive:<br>'),
                'El salario mensual del Empleado será ' + GEAOfferLetter.employee.SalaryOffered + ' ' + GEAOfferLetter.employee.SALARY_CURRENCY  + '; además, como prima de incentivo, el Empleado recibirá ' + GEAOfferLetter.employee.Comp_Target_Amount + ' ' + GEAOfferLetter.employee.Comp_Currency + ' al mes, conforme al Decreto 37-2001 del Congreso de Guatemala.  Además, el Empleado recibirá una prima de incentivo por productividad y eficiencia, conforme al Decreto 78-89 del Congreso de Guatemala, pagadera según las metas y objetivos de la empresa. Los sueldos y las primas se pagarán a más tardar el último día hábil del mes por depósito en la cuenta del Empleado o por cualquier otro medio de pago autorizado por la ley.  Para el pago mediante créditos bancarios, deberá efectuarse el pago de los montos  directamente en cada fecha o período de pago, por consiguiente, se acuerda expresamente que los estados de cuenta y otros documentos que acrediten el dinero en efectivo, depósito o pago por cualquier otro medio autorizado por la ley, hecho al Empleado por el Empleador serán prueba válida y suficiente de que se hicieron los pagos respectivos.'
            ),
            $('<p/>').append(
                'Las Partes acuerdan que dicho sueldo mensual puede pagarse al Empleado por adelantado, proporcionalmente, cada dos semanas, quincenalmente o semanalmente y esto no implica ningún cambio en la condición.'
            ),
            $('<p/>').append(
                'El día libre semanal y los días festivos se pagarán conforme a los Artículos 126 y 127 del Código de Trabajo.  8. Se entiende que, en conformidad con el Artículo 122 del Código de Trabajo, la jornada regular y las horas extras de un Empleado no excederán las 12 horas.  En conformidad con el Artículo 118 del Código de Trabajo, las horas del Empleado podrán aumentarse por dos horas al día sin exceder los límites semanales de 44 horas (para la jornada diurna), 42 horas (para la jornada mixta) y 36 horas (para la jornada nocturna).  La suma de todas las horas de trabajo no será superior a 12 horas diarias.'
            ),
            $('<p/>').append(
                $('<strong/>').html('SIETE. Otros beneficios:<br>'),
                'Las vacaciones y la prima anual del Decreto 42- 92 del Congreso de Guatemala y la prima navideña deberán pagarse al Empleado según lo establece la ley.'
            ),
            $('<p/>').append(
                $('<strong/>').html('OCHO.  Lugar de trabajo:<br>'),
                'El Empleado prestará sus servicios en la sede central de SOLUCIONES BK, SOCIEDAD ANÓNIMA, Ruta 3 4-59 zona 4, Ciudad de Guatemala, Departamento de Guatemala. También se acuerda que el Empleado deberá prestar sus servicios en cualquier otra parte según se le indique por escrito o por vía oral, tanto en Guatemala como en el extranjero. El Empleado, por el presente, da su consentimiento claro y explícito al firmar este contrato.'
            ),
            $('<p/>').append(
                $('<strong/>').html('NUEVE. Comienzo del empleo:<br>'),
                'Incluso si el empleo se documenta el día de hoy, se certifica que el empleo empezó el ' + GEAOfferLetter.event.StartDateSP + '; por lo tanto, en un posible cese del empleo, esa fecha será considerada para el pago de beneficios.'
            ),
            $('<p/>').append(
                $('<strong/>').html('DIEZ. Causas de rescisión del contrato:<br>'),
                'Además de otras causas de rescisión del contrato, sin ninguna responsabilidad para el Empleador, dentro de lo previsto por las leyes o normativas laborales corporativas, las siguientes son causas suficientes para la rescisión del contrato por parte de SOLUCIONES BK, SOCIEDAD ANÓNIMA, sin previa orden judicial o demanda o emprendimiento de acciones por incumplimiento de lo dispuesto en el presente contrato:  incumplimiento de las disposiciones, términos y condiciones acordados ahora o en el futuro.'
            ),
            $('<p class="mb-0"/>').append(
                'Además de las responsabilidades del Empleado establecidas en el presente, el Empleado deberá:'
            ),
            $('<ul class="list-indented mb-20"/>').append(
                $('<li/>').html('Cumplir todos los requisitos de salud y seguridad en el trabajo, indicados por el Empleador en el momento adecuado;'),
                $('<li/>').html('El incumplimiento por parte del Empleado de cualquiera de las responsabilidades mencionadas arriba y de cualquier otra estipulada en el presente y en el Código de Trabajo será considerado una FALTA GRAVE que dará la posibilidad de rescindir el contrato por causa y sin responsabilidad alguna del Empleador, según lo dispuesto en el párrafo "k" del Artículo 77 del Código de Trabajo. En el caso de terminación de su empleo en lo sucesivo, cualquiera que sea su causa, el Empleado acuerda que él/ella no declarará en ningún momento, tras dicha terminación, que sigue teniendo una relación con la Compañía o con una Compañía Asociada, excepto en calidad de antiguo empleado con el único objetivo de comunicarse con empleadores potenciales o de cumplir con cualquier requisito legal aplicable.')
            ),
            $('<p/>').append(
                $('<strong/>').html('ONCE. Leyes pertinentes:<br>'),
                'El Empleado acepta que todos los derechos y obligaciones establecidos por la Constitución de Guatemala y las leyes vigentes están incorporados, y ningún otro beneficio adicional a los establecidos por la ley están disponibles en los lugares de trabajo, o beneficios más allá de los establecidos en el presente o en las políticas autorizadas por escrito por el Empleador.'
            ),
            $('<p/>').append(
                'Las leyes de Guatemala se aplicarán a este empleo, tanto las normas jurídicas sustantivas como las normas jurídicas procesales, a menos que, durante la vigencia de este contrato, las partes convengan que el Empleado preste sus servicios en forma definitiva y no transitoria fuera de este territorio. En este último caso, las normas jurídicas sustantivas y las normas jurídicas procesales a ser aplicadas a este empleo serán aquellas en plena vigencia en el país o en cualquier sitio determinado. '
            ),
            $('<p/>').append(
                $('<strong/>').html('DOCE. Modificaciones al contrato de trabajo:<br>'),
                'El Empleador y el Empleado acuerdan que en cualquier momento, por mutuo acuerdo, pueden cambiar los términos y las condiciones de empleo convenidos por ambas partes, con fundamento en los términos establecidos en el Artículo 20 del Código de Trabajo. No será necesario documentar todos los cambios en las condiciones que mejoren las condiciones establecidas en el presente.'
            ),
            $('<p class="mb-60" />').append(
                $('<strong/>').html('TRECE. Aceptación:<br>'),
                'Ambas partes por este medio expresan su acuerdo con todas y cada una de las cláusulas y los términos en este documento, y suscriben mediante firma y sello el presente contrato en la Ciudad de Guatemala este ' + GEAOfferLetter.event.StartDateDay + ' día de ' + GEAOfferLetter.event.StartDateMonthSP + ', ' + GEAOfferLetter.event.StartDateYear + ', en ___ páginas escritas por un solo lado. Este contrato es firmado en tres ejemplares, uno para el Empleado, uno para el Empleador y uno que se envía a la División Administrativa Laboral del Ministerio de Trabajo y Seguro Social.'
            )
        )
        // end append
    );

    $("#markup3").html("").append(
        // OfferClause 3
        $('<div class="offerClause3">').append(
            $('<p/>').append(
                $('<strong/>').text('INDEFINITE INDIVIDUAL EMPLOYMENT AGREEMENT')
            ),
            $('<p/>').text(
                'INDEFINITE Individual Employment Agreement by and between:'
            ),
            $('<ol type="a"/>').append(
                $('<li/>').append('SOLUCIONES  BK, SOCIEDAD  ANONIMA represented herein by Juan  José  ALVARADO, Sole Director and Representative, hereinafter referred to as “the Employer”, <strong>of the first part</strong>,<br>'),
                $('<li/>').append(GEAOfferLetter.employee.Full_Name + 'hereinafter referred to as “the Employee”, <strong>of the second part</strong>,<br>')
            ),
            $('<p/>').text(
                'Both parties under oath to tell the truth do hereby '
            ),
            $('<p/>').append(
                $('<strong/>').append('DECLARE')
            ),
            $('<p/>').append(
                $('<strong/>').append('I. Statements of the Parties<br>'),
                'The representative of SOLUCIONES  BK, SOCIEDAD ANONIMA, declares that he is ' + GEAOfferLetter.employee.RepAgeYear + ' years old, a ' + GEAOfferLetter.employee.RepMaritalStatus + ' ' + GEAOfferLetter.employee.RepGender + ', a ' + GEAOfferLetter.employee.RepNationality + ' citizen, ' + GEAOfferLetter.employee.RepJobTitle + ', ' + GEAOfferLetter.employee.RepGender + ', resident of ' + GEAOfferLetter.employee.RepCountry + ', bearer of ID (DPI - Spanish acronym) Sole Identification Code –SIC- ' + GEAOfferLetter.employee.RepSoleIdentificationCode + ' issued by the National Office of Vital Statistics of Guatemala.  Furthermore, ' + GEAOfferLetter.employee.RepFullLegalName + ' declares that his principal is a corporation organized under the laws of Guatemala, with principal place of business at ' + GEAOfferLetter.employee.RepAddress1 + ' ' + GEAOfferLetter.employee.RepAddress2 + ' ' + GEAOfferLetter.employee.RepCity + ', ' + GEAOfferLetter.employee.RepState + ', <strong>' + GEAOfferLetter.employee.RepPostalCode + '</strong> and the object thereof is to engage in providing any legal and profitable services in connection with the corporate object and others.'
            ),
            $('<p/>').append(
                'The Employee declares: that he/she is ' + GEAOfferLetter.employee.AgeYears + ' years old, (marital status), ' + GEAOfferLetter.employee.MaritalStatus + ', a ' + GEAOfferLetter.employee.Nationality + ' citizen, (occupation) ' + GEAOfferLetter.employee.Occupation + ',  sex ' + GEAOfferLetter.employee.Gender + ', resident at ' + GEAOfferLetter.employee.Address1 + ' ' + GEAOfferLetter.employee.Address2 + ' ' + GEAOfferLetter.employee.CityStateZip + '; bearer of ID (DPI - Spanish acronym) Sole Identification Code –SIC- ' + GEAOfferLetter.employee.SoleIdentificationNumber + ' issued by the National Office of Vital Statistics of Guatemala. The Employee agrees to inform any change in these statements.'
            ),
            $('<p/>').append(
                $('<strong/>').append('II. Employer’s Requirements<br>'),
                '<strong>SOLUCIONES BK, SOCIEDAD ANONIMA</strong>, through its representative, declares that in order to develop its activities, it requires trained personnel to fill the position of ' + GEAOfferLetter.employee.Business_Title + ' whose roles, duties, compensation, and other specific conditions of employment are listed below, has selected ' + GEAOfferLetter.employee.Full_Name + ' to fill this position.'
            ),
            $('<p/>').append(
                $('<strong/>').append('III. Statement of the Employee<br>'),
                'The Employee declares that has the know-how and experience needed to fill the position of ' + GEAOfferLetter.employee.Business_Title + ' required by the Employer; consequently, prior to this act, requested the allocation thereof.'
            ),
            $('<p/>').append(
                $('<strong/>').append('IV. Employment Agreement:<br>'),
                'According to the above statements, both parties agree to enter into an INDEFINITE INDIVIDUAL EMPLOYMENT AGREEMENT subject to the following contractual terms and conditions:'
            ),
            $('<p/>').append(
                $('<strong/>').append('ONE.  Exclusivity, Confidentiality and Non-Disclosure:<br>'),
                'The Employee agrees to abide by the provisions outlined in the Employee Proprietary Information and Inventions Agreement, attached as Exhibit A to this agreement, governing confidentiality and non-disclosure.'
            ),
            $('<p/>').append(
                'The Employee shall provide services under the direction, subordination and continued economic dependence of SOLUCIONES BK, SOCIEDAD ANONIMA, and shall carry out all orders and instructions given in connection with the employment. Under Section 18 of the Labor Code, the Employee agrees not work for a Company in the same or similar activity to that of the Employer while the Employee is employed by the Employer.  The Employee shall keep in strict secrecy any training instructions given, as well as all strategies and information of production and marketing of the Company, or any other confidential information on administrative or production issues known by the Employee.'
            ),
            $('<p/>').append(
                'This non-disclosure commitment shall be effective “during” employment and “upon termination” thereof. If the disclosure of that confidential information or knowledge occurs “during” employment, it shall be adequate additional cause to terminate employment without any responsibility to the Employer, regardless that the Employer may bring court actions to repair the damage caused by the disclosure of such information.'
            ),
            $('<p/>').append(
                'With respect to all matters in connection with the regular performance of the duties of the Employee, the Employee shall discuss issues with other employees providing their services to the Employer or employees from other customers who are aware of such matters, including discussions on confidential information, if required.'
            ),
            $('<p/>').append(
                'This confidentiality and non-disclosure commitment shall be kept in effect for an indefinite period, even after termination of employment, regardless that any disclosure by the Employee after the termination of employment shall empower the Employer to bring any legal actions deemed appropriate to repair of any damages caused.'
            ),
            $('<p/>').append(
                'The Parties agree that for the purposes hereof, “secret or undisclosed confidential information” shall be construed as any verbal or written information known to the Employee in connection with the services rendered and that, when disclosed or used for personal benefit of the Employee or any third party other than the Employer, may cause damages to the Employer, its representatives, shareholders or customers or people commercially linked to it.'
            ),
            $('<p/>').append(
                $('<strong/>').append('TWO. Services:<br>'),
                'The Employee shall fill the position of ' + GEAOfferLetter.employee.Business_Title + '. The services to be provided by the Employee to the Employer are described below, including, but not limited to performing duties as ' + GEAOfferLetter.employee.Business_Title + ' of Soluciones BK, Sociedad Anónima with responsibility for the performance of any and all duties usually associated with the performance of such position and providing the services required of his/her position, related to or resulting from and those determined by the Employer.'
            ),
            $('<p/>').append(
                'The Employee shall fulfill all services and duties instructed by the Employer both written and oral, as well as all those duties included, related or compatible with the position, and all other duties as may arise from time to time and included in the job description. The Employee shall comply with all Employer’s Corporate Employment Regulations, Employee Handbook, Code of Business Conduct and Ethics, technical manuals and other corporate policies. The Employer shall assign the Employee a new workplace, provided, however, this is within his/her abilities, under equal conditions, and within the Employer’s course of business, but shall not be considered a change of working conditions, because this is how it is expressly agreed.'
            ),
            $('<p/>').append(
                'The fact that the Employee performs activities in which third parties other than the parties involved herein may benefit, and that such third parties are linked to the Employer in civil, business or commercial matters, does not mean that the Employee is employed by them.  Compensation for such services is included in the salary agreed with the Employer.'
            ),
            $('<p/>').append(
                'The Employee shall fulfill all the responsibilities under the law and the Corporate Employment Regulations, but particularly:'
            ),
            $('<ol type="a"/>').append(
                $('<li/>').append(
                        'Abide by anything about the job, provisions, instructions or procedures included in regulations, policies, manuals, communications or orders given by the Employer or its representative for the execution of his/her duties.  As preliminary statement to the provisions hereof, the Employee declares that has received, learned, and agreed to comply with the rules of the employer, establishing the guidelines the Employee must satisfy to carry out his/her duties.  In addition, it is the duty of the Employee to keep informed of the regulations of the Employer, which will be made available by the Employer by any means at its disposal.<br>'
                ),
                $('<li/>').append(
                        'In the exercise of his/her duties and responsibilities, the Employee shall contribute to achieving the vision and mission established by the Employer, and has moral behavior, absolute correctness, responsibility and discretion, as not to compromise the safety and interests of the Employer.  The Employee agrees to render his/her services with a maximum of integrity and good faith.<br>'
                ),
                $('<li/>').append(
                        'The Employee is responsible for any assets, materials and property of the Employer under his/her responsibility; therefore, he must see to their integrity, conservation and maintenance, preventing its loss, misplacement or misuse.  In case of loss or damage, the provisions provided for in Section 99 of the Labor Code shall prevail.<br>'
                ),
                $('<li/>').append(
                    'The Employee shall identify and ensure that best practices, projects and plans of action are applied to generate positive results.<br>'
                ),
                $('<li/>').append(
                    'The Employee shall maintain and protect the name of the Employer, its business, products, services, practices, processes, policies, valuations, directors, officers, employees, agents, partners, investors or related companies, and shall refrain from performing any activity, criticism or demonstration that threatens or causes damage to their names, businesses or relationships with current or potential clients, suppliers or employees, including outside Guatemala.<br>'
                ),
                $('<li/>').append(
                    'The Employee shall observe punctuality in all matters regarding the performance of his/her duties and responsibilities.<br>'
                ),
                $('<li/>').append(
                    'The Employee shall not be part in any arguments or verbal or written negotiations with suppliers, competitors or customers on any topic that aim at, seek or tend to affect competition, such as price agreements, sharing markets or customers, pricing or resale of products or price or products agreements to participate in biddings.<br>'
                ),
                $('<li/>').append(
                    'The Employee shall give equal treatment to all customers under the same circumstances, which should be assessed on the basis of objective criteria, avoiding discriminatory acts against them, but always fully complying with credit and safety procedures set by the Employer.<br>'
                ),
                $('<li/>').append(
                    'The Employee shall defend preferentially all businesses and interests of the Employer.<br>'
                ),
                $('<li/>').append(
                    'The Employee shall use any passwords and access to software or system provided by the Employer only to perform his/her duties within the authorizations given. These tools, accesses and passwords to make any transactions or any use not expressly authorized by the Employer are strictly forbidden.<br>'
                ),
                $('<li/>').append(
                    'The Employee must inform any conflict of interest he may have and the fulfillment of the duties and responsibilities acquired with the Employer, as soon as he becomes aware of it.<br>'
                ),
                $('<li/>').append(
                    'The Employee is strictly prohibited and shall not receive any financial incentives, gifts, gratuities or any other benefits from customers, sub-distributors, competitors or suppliers, whether current or potential, of the Employer.  If given or delivered any of the above, the Employee shall immediately give notice to the General Manager.<br>'
                ),
                $('<li/>').append(
                    'The Employee agrees not to bring actions directly or indirectly or unfair competition to the detriment of the Employer. To this end, it shall not directly or indirectly carry out any of the following actions:  acquire, manage, operate, participate or control as owner, director, employee, partner, advisor, or consultant of any business, Company, profit or nonprofit organization, render services or otherwise carry out activities within the ordinary course of business of the Employer, or any activities defined therein, with any individual or corporation that directly or indirectly competes, provide similar, complementary or alternative services (indistinctly  “The Potential Competitors”) to whom the Employer in the territory of Guatemala or abroad, or individuals or corporations providing services to the Potential Competitors for employment.<br><br>',
                    'The Employee agrees not to undertake any outside employment or business activities that directly or indirectly compete with the Employer. To this end, the Employee shall not directly or indirectly carry out any of the following actions:  (1) acquire, manage, operate, participate or control as owner, director, employee, partner, advisor, or consultant any business, company, profit or nonprofit organization that competes with the Employer; and (2) render services or otherwise carry out activities that are within the ordinary course of business of the Employer, or any activities defined therein, with any individual or corporation that directly or indirectly competes, or provides similar, complementary or alternative services (indistinctly  “The Potential Competitors”) as the Employer in the territory of Guatemala or abroad, or individuals or corporations providing services to the Potential Competitors.<br>'
                ),
                $('<li/>').append(
                    'The Employee shall not and agrees not to receive any economic incentives, gifts, gratuities or any other benefit from clients, sub-distributors, competitors or suppliers, current or potential, of the Employer.  If any of the above is sent or delivered, the Employee shall immediately give notice to the General Manager.<br>'
                ),
                $('<li/>').append(
                    'The Employee shall safeguard and not disclose to a third party or make use in his/her own advantage or the advantage of a third party, any document, mail, formula, prescription, procedure, technique or any information of the Employer or of its customers or users or any third party acquaintance because of the provision of services, and especially those against whom the Employer has duty of confidentiality, as well as administrative matters whose disclosure could harm to them, being civilly and criminally liable for noncompliance. Confidential information includes, among others, information related to “Trade Secrets” of the Employer made available to the Employee or received as a direct or indirect result of the delivery of services. Trade Secrets considered protected hereby, without any limitation include: formulas, technical information, strategic plans, business plans, marketing and advertising plans, products, services, manufacturing processes, training plans, training manuals, procedures, and otherwise, any list of customers, suppliers, employees, customer accounts, statistical information regarding business, its relationship with customers, and statistics of processes and internal activities. Furthermore, Trade Secret shall be any marketing or advertising information to customers, reports sent to and by customers, sales information, methods, prices and any estimates, marketing data, research, sales techniques; names, addresses and phone and fax numbers and operations, buying habits and practices of customers, potential customers, distributors, representatives or employees of the Employer or its customers; information regarding buying methods and suppliers, including names and any other form of identification of sellers, and suppliers, costs of materials, and prices for which such materials, products or services have been obtained or sold; accounting, financial, fiscal, tax and legal information of the Employer; information on business and labor relationships; any information not disclosed and owned by the Employer that may be used in any productive, industrial, commercial or service activity, and be subject to be transmitted to a third party, and, any other proprietary information that is not freely available to third parties and obtained as a result of rendering purchased services, regarding any activity directly or indirectly in connection with the business done by the Employer and that is not freely available to a third party. In order that a printed or electronic document is considered confidential, it shall not be necessary to be marked as such. The information may be oral, written or in a tangible medium.  The violation to this obligation is considered a very serious offense. The obligation of confidentiality shall remain even if the employment relationship ends for an indefinite period.<br>'
                ),
                $('<li/>').append(
                    'Keep and restore, in good conditions, wear and tear excepted, any instruments, furniture or elements provided for the fulfillment of his/her duties, and promptly inform his/her superiors any comments deemed necessary to avoid damages to the Employer and give any assistance required by the circumstances in the occurrence of a disaster.<br>'
                ),
                $('<li/>').append(
                    'Keep his/her work area clean and orderly;<br>'
                ),
                $('<li/>').append(
                    'Ensure proper maintenance of facilities, equipment, materials and Employer\’s equipment, and its proper use.<br>'
                ),
                $('<li/>').append(
                    'Conduct himself at all times in the workplace with appropriate language and respect for others colleagues, customers and the Employer and\/or its representatives, and anyone with whom he has contract because of the work performed.<br>'
                ),
                $('<li/>').append(
                    'Not bring food and drinks to his\/her workplace, and shall only use the designated area for this purpose.<br>'
                ),
                $('<li/>').append(
                    'If the Employee receives advance payments of expenses to be incurred for the provision of services or otherwise, Employee shall cancel such advance payment, according to the Employer’s policies, which the Employee declares to know and understand in full.<br>'
                ),
                $('<li/>').append(
                    'The Employee shall, upon termination of the agreement, for whichever reason, immediately surrender the Employer or designee, any assets owned by the Employer, including:<br><br>',
                    $('<ul class="list-indented"/>').append(
                        $('<li/>').text(
                            'Assets such as data records, passwords to programs or software, access to tax information software, bank management software, products, database, compilations made by him or delivered to him during employment with the Employer, as well as copies, summaries, abstracts containing Employer’s or Employer’s clients, customers or suppliers information, whether or not confidential;'
                        ),
                        $('<li/>').text(
                            'Each and every one of the originals and/or copies of the results of the work performed by the Employee in benefit of the Employer and that are in his/her possession, including any work in progress and any information and documents related thereto;'
                        ),
                        $('<li/>').text(
                            'Each and every one of the originals and/or copies provided by the Employer, or obtained or developed by the Employee, of all information classified as confidential.'
                        ),
                        $('<li/>').text(
                            'If subsequently the Employee is in possession of any of the above valuables, information or documents owned by the Employer, shall deliver them within three days.'
                        )
                    )
                ),
                $('<li/>').append(
                    'The Employee declares that the salary agreed herein is sufficient recognition to accept and agree with all the roles and responsibilities accepted herein.<br>'
                )
            ),
            $('<p/>').append(
                $('<strong/>').append('THREE. Intellectual Property:<br>'),
                'The Employee agrees to abide by the provisions outlined in the Employee Proprietary Information and Inventions Agreement, attached as Exhibit A to this agreement, governing intellectual property ownership rights and assignment of the same.'
            ),
            $('<p/>').append(
                'The Parties declare that, due to the services to be given by the Employee, the Employee from time to time and pursuant to the requirements of the Employer, shall develop “new works” or “inventions” which may consist of contributions and inventions, discoveries, creations, developments, improvements, Works of authorship and ideas (whether patentable or recordable or any other result of work), subject to protection by the current Intellectual Property laws in Guatemala, or which may be protected under common law rules, therefore, in such events, the Employee hereby assigns to the EMPLOYER all economic rights resulting from the development of such work or invention, therefore, the EMPLOYER may exercise all rights available under the law, and the Employee shall not disclose or otherwise contribute to the development of similar inventions or works by third parties, and shall keep such development strictly confidential.'
            ),
            $('<p/>').append(
                'The Employee expressly agrees to cooperate with the Employer to carry out any formality, including the registration of the work or invention, to achieve an effective protection of the rights the Employer may be entitled.'
            ),
            $('<p/>').append(
                'This commitment of assignment of rights shall also apply to any development of the Employee as a result of the employment or information obtained as a result of the development thereof, even if the development is not directly related to services provided to the Employer, and therefore, shall inform the Employer the development of any determined work or invention. '
            ),
            $('<p/>').append(
                $('<strong/>').append('FOUR. Absence of Intermediaries:<br>'),
                'The Employee said that at the beginning of this employment, no individual or corporation was involved which may be regarded as intermediary, and if reported in the future, only with the submission hereof in or out of court, shall be sufficient evidence to remove or exclude these or this of any claim against him, which the Employee hereby accepts and ratifies upon the execution hereof.'
            ),
            $('<p/>').append(
                $('<strong/>').append('FIVE. Regular Working Hours:<br>'),
                'As the Employee is a representative of the Employer and/or Reliable Employee, the Employee is not subject to hour limits, and shall work at least the basic weekly hours generally established for regular administrative employees, which shall not exceed the maximum limit established in Section 124 of the Labor Code, and the regulations thereof. The working hours shall vary according to the needs of the job.  The Employee shall have one-hour lunch break, which shall not be computed as actual working time.  The weekly day off may be given any day of the week. It is expressly agreed that the Employee shall work any weekly days off or holidays as determined by the Employer under the law.   These regular working hours may be changed by the Employer to its needs and those of the job, and this cannot mean any change in working conditions, as it is expressly agreed.'
            ),
            $('<p/>').append(
                $('<strong/>').append('SIX. Salary and Bonus-Incentive:<br>'),
                'The monthly Employee’s salary shall be ' + GEAOfferLetter.employee.SalaryOffered  + ' <strong>' + GEAOfferLetter.employee.SALARY_CURRENCY  + '</strong>; furthermore, as Bonus-Incentive, the Employee shall be paid ' + GEAOfferLetter.employee.Comp_Target_Amount  + ' ' + GEAOfferLetter.employee.Comp_Currency  + ' each month, under Decree 37-2001 of the Congress of Guatemala.  In addition, the Employee shall receive a bonus-incentive for productivity and efficiency, pursuant to Decree 78-89 of the Congress of Guatemala, payable according to the goals and objectives of the Company. The salary and bonuses shall be paid not later than the last working day of the month by deposit in employee’s account and/or any other means of payment authorized under the law.  If paid by bank credit, payment of the amounts shall be made directly in each period or payment date, therefore, it is expressly agreed that the statements of account and other documents that prove the cash, deposit or payment by any other means authorized by law made by the Employer to Employee shall be valid and sufficient proof that the respective payments have been made. '
            ),
            $('<p/>').append(
                'It is agreed between the Parties that such monthly salary may be paid in advance to the Employee, on a pro rata basis, every two weeks, biweekly, or weekly, and this shall not imply any change in condition.'
            ),
            $('<p/>').append(
                'The weekly day-off and holidays shall be paid in accordance with Sections 126 and 127 of the Labor Code.  8. It is understood that in accordance with Section 122 of the Labor Code, the regular working day and overtime of an Employee shall not exceed 12 hours.  Under Section 118 of the Labor Code, the Employee’s hours may be increased by two hours per day without exceeding the weekly limits of 44 hours (for day shift), 42 hours (for mixed shift), and 36 hours (for night shift).  The sum of all working hours shall not exceed 12 hours per day.'
            ),
            $('<p/>').append(
                $('<strong/>').append('SEVEN. Other Benefits:<br>'),
                'Vacation, annual bonus of Decree 42- 92 of the Congress of Guatemala and Christmas bonus shall be paid to the Employee as established by law.'
            ),
            $('<p/>').append(
                $('<strong/>').append('EIGHT.  Workplace:<br>'),
                'The Employee shall render his/her services at the headquarters of <strong>SOLUCIONES BK, SOCIEDAD ANONIMA</strong>, Ruta 3 4-59 zona 4, Guatemala City, Department of Guatemala. It is also agreed that the Employee shall provide his/her services anywhere else instructed in writing or orally, both in and out of Guatemala. '
            ),
            $('<p/>').append(
                'The Employee hereby gives its clear and explicit consent when signing this agreement.'
            ),
            $('<p/>').append(
                $('<strong/>').append('NINE. Beginning of Employment:<br>'),
                'Even if the employment is documented today, it is hereby certified that the employment began ' + GEAOfferLetter.event.StartDate + '; therefore, in a possible termination of employment, that date shall be considered for payment of benefits.'
            ),
            $('<p/>').append(
                $('<strong/>').append('TEN. Causes for Termination of Employment:<br>'),
                'In addition to other causes of termination of employment, without any responsibility whatsoever for the Employer, included in or envisioned by the laws or corporate employment regulations, the following are sufficient causes for the termination of employment by <strong>SOLUCIONES BK, SOCIEDAD ANONIMA</strong> without prior court order or suing or bringing any actions for the violation to the provisions herein:  nonperformance of the provisions, terms and conditions agreed now or in the future.'
            ),
            'In addition to the responsibilities of the Employee established herein, the Employee shall:',
            $('<ul class="list-indented mb-20"/>').append(
                $('<li/>').append('Satisfy all safety and health requirements at work given by the Employer at the appropriate time;'),
                $('<li/>').append('Failure to comply by the Employee of any of the aforementioned responsibilities, and any other established herein and in the Labor Code shall be SERIOUS MISCONDUCT which shall give the power to terminate the employment for cause and without any responsibility whatsoever of the Employer as provided for in Section 77, paragraph “k” of the Labor Code. In the event of termination of your employment hereunder, however arising, the Employee agrees that he/she will not at any time after such termination represent himself/herself as still having any connection with the Company or any Associated Company save as a former employee for the purposes only of communicating with prospective employers or complying with any applicable statutory requirements.')
            ),
            $('<p/>').append(
                $('<strong/>').append('ELEVEN. Applicable Laws:<br>'),
                'The Employee agrees that all rights and obligations established by the Constitution of Guatemala and the current laws are incorporated, and no other additional benefits than those established by law are available in the workplaces, or benefits beyond those established herein or the policies authorized in writing by the Employer.',
                $('<p/>').append(
                    'The laws of Guatemala shall be applicable to this employment, both substantive and procedural laws, unless during the term of this agreement the parties agree that the Employee renders his/her services on a definitive and non-transitory basis outside this territory. In this last case, the substantive and procedural laws to be applied to this employment shall be those in full force and effect in the country or any determined site.'
                )
            ),
            $('<p/>').append(
                $('<strong/>').append('TWELVE. Amendments to the Employment Agreement:<br>'),
                'The Employer and the Employee hereby agree that at any time, by mutual agreement, they may change the employment terms and conditions agreed by both parties, based on the terms established in Section 20 of the Labor Code. It shall be unnecessary to document any change of conditions improving the conditions established herein.'
            ),
            $('<p class="mb-60"/>').append(
                $('<strong/>').append('THIRTEEN. Acceptance:<br>'),
                'Both parties hereby express their agreement with each and every one of the sections and terms herein, and have hereunto set their hands and seals at the City of Guatemala this ' + GEAOfferLetter.event.StartDateDay + ' day of ' + GEAOfferLetter.event.StartDateMonth + ',  ' + GEAOfferLetter.event.StartDateYear + ', on ___ pages written on one side only. This agreement is executed in three counterparts, one for the Employee, one for the Employer, and one to be delivered to the Ministry of Labor and Social Security, Administrative Labor Division.'
            )

        )
        // end append
    );

}

$(document).on('ready', function() {
    
    // render template
    fnView();

    // completed letter
    if ($("#sv").prop('disabled')) {
        $("#ButtonSaveAndComplete").remove();
        var arrParts = [
            [1, 'hidden_pg']
        ];
        var arrParts2 = [
            [1, 'hidden_pg2']
        ];
        var arrParts3 = [
            [1, 'hidden_pg3']
        ];
        var arrParts4 = [
            [1, 'hidden_pg4']
        ];
        showCompletedOfferLetter('incomplete', 'complete', arrParts);
        showCompletedOfferLetter('incomplete2', 'complete2', arrParts2);
        showCompletedOfferLetter('incomplete3', 'complete3', arrParts3);
        showCompletedOfferLetter('incomplete4', 'complete4', arrParts4);
    }
    else {
        makeOfferLetter('hidden_pg','offerClause');
        makeOfferLetter('hidden_pg2','offerClause2');
        makeOfferLetter('hidden_pg3','offerClause3');
        makeOfferLetter('hidden_pg4','offerClause4');
    }
});
