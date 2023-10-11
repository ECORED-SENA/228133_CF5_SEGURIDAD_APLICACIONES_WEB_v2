<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1(data-aos="fade-right") Fases para la adopción de un Plan Estratégico de Seguridad en Aplicaciones Web

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Figura 1.
      span Fases para la adopción de un Plan Estratégico de Seguridad en Aplicaciones Web

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img01.svg', alt='')

    p A continuación, se describe el objetivo de cada fase, los artefactos de entrada, de salida y actividades a ejecutar para cumplir cada uno de ellos.

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 2.1 Identificación del estado actual de la Seguridad en Aplicaciones Web

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img02.png', alt='')
      .col-lg-9(data-aos="fade-left")
        p <b>El primer paso para generar un plan estratégico consiste en identificar el estado actual en el que se encuentra la seguridad en aplicaciones web; para ello es posible utilizar dos enfoques:</b> a partir de un modelo de madurez o por los niveles ASVS que verifican la seguridad en sistemas web. El enfoque por madurez requiere de un proyecto base que permita generar el contraste y el punto de partida, por ello el enfoque basado en los niveles permite iniciar el plan a partir del esfuerzo en conjunto de la dirección general y los equipos relacionados con TI siguiendo el marco de referencia ofrecido por el OWASP y sus comunidades. Para ello se tienen los siguientes artefactos de entrada, salida y las actividades en esta fase:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").color3
      .row.justify-content-center(titulo="Artefactos de Entrada")
        .col-md-7.mb-4.mb-md-0
          ul.lista-ul.mb-4
            li
              i.fas.fa-check-circle
              span Inventario de activos <em>software</em>, licencias y <em>hardware</em>.
            li
              i.fas.fa-check-circle
              span Inventario de activos de información.
            li
              i.fas.fa-check-circle
              span Inventario de Personal especializado o con potencial técnico.

          h3 Actividades
          ul.lista-ul
            li
              i.fas.fa-check-circle
              span Reunir todos los artefactos de entrada solicitados, documentación de las actuales estrategias de la organización e iniciativas sobre este tema.
            li
              i.fas.fa-check-circle
              span Recopilar las mejores prácticas externas de expertos en la materia.

        .col-md-4
          figure
            img.img-t.m-auto(src='@/assets/curso/tema2/img03.svg', alt='Texto que describa la imagen')

      .row.justify-content-center(titulo="Artefactos de Salida")
        .col-md-7.mb-4.mb-md-0
          ul.lista-ul.mb-4
            li
              i.fas.fa-check-circle
              span Análisis del estado actual de los sistemas.
            li
              i.fas.fa-check-circle
              span Lista de chequeo de requisitos de seguridad específica para su aplicación basado en los niveles ASVS.

          h3 Actividades
          ul.lista-ul
            li
              i.fas.fa-check-circle
              span Realizar una validación de todo el inventario recogido y comparar con los niveles de verificación de seguridad ASVS.
            li
              i.fas.fa-check-circle
              span Identificar el nivel de verificación de seguridad ASVS.
            li
              i.fas.fa-check-circle
              span Generar los artefactos de salida a partir del análisis realizado en la actividad anterior.

        .col-md-4
          figure
            img.img-t.m-auto(src='@/assets/curso/tema2/img04.svg', alt='Texto que describa la imagen')

    .row.mb-4(data-aos="fade-right")
      .col-lg-5.col-xl-6.col-xxl-5
        .bg_2.p-2
          p.text-bold.m-0.ms-3 Niveles de verificación de seguridad de aplicaciones web

    p.mb-5 El ASVS ha definido tres niveles de verificación en los cuales se aumenta la profundidad de los conceptos con cada nivel superado y estos contienen una lista de requisitos intrínsecos que garantizan la ciberseguridad correspondiendo a una funcionalidad o un grupo de ellas orientadas netamente al tema en cuestión, las cuales deben ser implementadas por los equipos de desarrollo de <em>software</em>. Los niveles son los siguientes:

    .d-flex.flex-wrap.align-items-stretch
      .col-12.col-md-6.col-lg-4.px-md-3.d-flex.content-tj-hover
        .tarjeta-hover-up.p-4.p-xl-5(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img.img-t.mb-4(src="@/assets/curso/tema2/img05.svg")
          .bg_5.p-2.mb-4
            h4.text-white.m-0 Nivel 1 (Oportunista)
          p.mb-0 El nivel base no distingue <em>software,</em> puesto que sirve para todos los sistemas.
      .col-12.col-md-6.col-lg-4.px-md-3.d-flex.content-tj-hover
        .tarjeta-hover-up.p-4.p-xl-5
          img.img-t.mb-4(src="@/assets/curso/tema2/img06.svg")
          .bg_5.p-2.mb-4
            h4.text-white.m-0 Nivel 2 (Estándar)
          p.mb-0 Se encuentra conducido para aplicaciones que dentro de su operación manejan datos sensibles que requieren un nivel de protección.
      .col-12.col-md-6.col-lg-4.px-md-3.d-flex.content-tj-hover
        .tarjeta-hover-up.p-4.p-xl-5
          img.img-t.mb-4(src="@/assets/curso/tema2/img07.svg")
          .bg_5.p-2.mb-4
            h4.text-white.m-0 Nivel 3 (Avanzado)
          p.mb-0 Este nivel es para sistemas críticos encargados de realizar transacciones de alto valor o dentro de su información existen datos personales sensibles y confidenciales, que son el más alto nivel de confianza.

    p.mb-5 A continuación se profundiza en qué consiste cada nivel:

    .row.justify-content-center.mb-5
      .col-md-5.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img.img-t.mx-auto(src='@/assets/curso/tema2/img08.svg')
      .col-md-7.mb-5.mb-md-0(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          p.mt-3(numero="1" titulo="Nivel 1 (Oportunista)") Para una organización, el nivel oportunista es muy apropiado si tiene sistemas donde la información capturada requiere de un nivel bajo de confiabilidad e integridad, donde la falta o pérdida de algunos de estos datos no impacte inminentemente el proceso o flujo de la aplicación.<br><br> Este nivel proporciona a la gerencia un análisis rápido al ecosistema de aplicaciones que posean o les permite elaborar una lista de requerimientos en seguridad de aplicaciones que hacen parte de un plan estratégico de seguridad realizado en fases.

          p.mt-3(numero="2" titulo="Nivel 2 (Estándar) ") El nivel dos del ASVS tiene como premisa asegurar que dentro de las organizaciones se conozcan y existan controles de seguridad en las aplicaciones ubicados en lugar correspondiente y con el mayor porcentaje de efectividad.<br><br> Las aplicaciones que deben estar a este nivel por lo general realizan transacciones comerciales entre organizaciones conocidas como <b>negocio a negocio (business-to-business, B2B)</b>, sistemas de gestión de información del área de la salud, aplicaciones que implementan operaciones sensibles para el negocio o mantienen otros activos sensibles de terceros.

          p.mt-3(numero="3" titulo="Nivel 3 (Avanzado) ") Las aplicaciones a este nivel deben estar modularizadas considerablemente buscando facilitar la respuesta rápida ante fallos, la escalabilidad y una defensa coral construida de varias capas de seguridad. Cada módulo podría estar separado físicamente o en diferente conexión de red, a fin de lograr que por sí mismos se responsabilicen por la seguridad, estando todo debidamente documentado.<br><br> Dentro de las responsabilidades obligatoriamente se incluyen controles que certifican la confidencialidad a través del cifrado de los datos, la integridad transaccional, la validación de entradas, el manejo de auditorías en capa de persistencia, entre otros.

    .row.mb-4(data-aos="fade-right")
      .col-lg-3.col-xl-4.col-xxl-3
        .bg_2.p-2
          p.text-bold.m-0.ms-3 Ejemplos en la Industria

    p Como se apreció anteriormente las diferentes amenazas son motivadas por distintos factores y propósitos, puesto que existen algunos sectores en la industria con activos de información únicos y valiosos para los atacantes, los cuales podrían causar gran conmoción con su revelación o simplemente a partir de ellos es podrían obtener beneficios de cualquier índole, obligando explícitamente a estas organizaciones a cumplir con regulaciones y normas específicas.

    .row.justify-content-center.align-items-center
      .col-lg-8(data-aos="fade-left")
        p No obstante, es claro que cada sector posee criterios únicos y bien diferenciados en cuanto a las amenazas y vulnerabilidades presentes, es común en todos los segmentos de la industria encontrar ataques oportunistas. En este tipo se busca cualquier sistema que se encuentre en un estado vulnerable para explotar sus debilidades de una manera rápida y sencilla. Por lo que el rango oportunista se recomienda para todas las aplicaciones y debe ser el punto base para manejar las amenazas más habituales de encontrar. A continuación, se identifican algunas recomendaciones para cada nivel en diferentes sectores de la industria:
        a.anexo(:href="obtenerLink('downloads/anexos/Anexo1_EjemplosSectorIndustria_Tabla1_PDF.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.m-0 Ejemplos por sector de la industria
      .col-lg-4
        figure(data-aos="fade-right")
          img.img-t.mx-auto(src='@/assets/curso/tema2/img09.png')

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 2.2 Definición de los objetivos de la Seguridad en Aplicaciones Web

    .row.justify-content-center.mb-0.mb-md-4.mb-lg-4
      .col-lg-3.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img.img-t.mx-auto(src='@/assets/curso/tema2/img10.svg')
      .col-lg-9.mb-5.mb-md-0(data-aos="fade-left")
        p La segunda fase en el plan estratégico consiste en definir y acordar el alcance a través de unos objetivos claros alineados a los objetivos de la organización. Puesto que, la compañía actúa como <em>stakeholder</em> buscando que el plan presentado satisfaga las necesidades establecidas por la gerencia y permitan mejorar sustancialmente sus procesos con un nivel de verificación superior en sus aplicaciones. En seguida se aprecian los artefactos de entrada, salida y las actividades en esta fase:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").color3
      .row.justify-content-center(titulo="Artefactos de Entrada")
        .col-md-7.mb-4.mb-md-0
          ul.lista-ul.mb-4
            li
              i.fas.fa-check-circle
              span Plan estratégico institucional.
            li
              i.fas.fa-check-circle
              span Lista de chequeo fase anterior.
            li
              i.fas.fa-check-circle
              span Limitaciones de negocio o de recursos de TI que afecten el logro de los objetivos.
            li
              i.fas.fa-check-circle
              span ASVS, OWASP y otras listas similares.

          h3 Actividades
          ul.lista-ul
            li
              i.fas.fa-check-circle
              span Realizar talleres entre las partes interesadas para establecer los objetivos del plan estratégico y la meta a la que se anhela llegar en el nivel de verificación en seguridad de las aplicaciones web.
            li
              i.fas.fa-check-circle
              span Generar listas de chequeo de requerimientos de seguridad sobre los niveles ASVS.
        .col-md-4
          figure
            img.img-t.m-auto(src='@/assets/curso/tema2/img12.svg', alt='Texto que describa la imagen')

      .row.justify-content-center(titulo="Artefactos de Salida")
        .col-md-7.mb-4.mb-md-0
          ul.lista-ul.mb-4
            li
              i.fas.fa-check-circle
              span Objetivos del plan estratégico de seguridad en aplicaciones web.
            li
              i.fas.fa-check-circle
              span Listas de chequeo de los niveles de verificación ASVS.

          h3 Actividades
          ul.lista-ul
            li
              i.fas.fa-check-circle
              span Identificar que herramientas  y talento humano requieren para completar la lista de chequeo de los niveles de verificación en ASVS.
            li
              i.fas.fa-check-circle
              span Generar los artefactos de salida a partir del análisis realizado en las actividades anteriores.

        .col-md-4
          figure
            img.img-t.m-auto(src='@/assets/curso/tema2/img13.svg', alt='Texto que describa la imagen')

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 2.3 Determinación del estado deseado de la Seguridad en Aplicaciones Web

    .row.justify-content-center.mb-0.mb-md-4.mb-lg-4
      .col-lg-3.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img.img-t.mx-auto(src='@/assets/curso/tema2/img11.svg')
      .col-lg-9.mb-5.mb-md-0(data-aos="fade-left")
        p.mt-4 En esta fase del plan estratégico se establece el nivel de verificación al que se aspira llegar en cuanto a seguridad de las aplicaciones web. Teniendo presente las listas de chequeo recopiladas en el paso previo, los objetivos definidos plenamente por las partes interesadas, las limitaciones a las que se enfrenta la organización y el análisis del estado actual en materia de seguridad en aplicaciones web. A continuación, se presentan los siguientes artefactos de entrada, salida y las actividades en esta fase:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").color3
      .row.justify-content-center(titulo="Artefactos de Entrada")
        .col-md-7.mb-4.mb-md-0
          ul.lista-ul.mb-4
            li
              i.fas.fa-check-circle
              span Listas de chequeo fase anterior.
            li
              i.fas.fa-check-circle
              p.m-0 Objetivos del plan estratégico de la seguridad en aplicaciones web.
            li
              i.fas.fa-check-circle
              span Limitaciones de negocio o de recursos de TI que imposibiliten llegar al nivel de verificación deseado.

          h3 Actividades
          ul.lista-ul
            li
              i.fas.fa-check-circle
              span Recopilar datos de otros sistemas para realizar procesos comparativos.
            li
              i.fas.fa-check-circle
              span Mesas de trabajo para validar las listas de chequeo de la fase anterior.

        .col-md-4
          figure
            img.img-t.m-auto(src='@/assets/curso/tema2/img14.svg', alt='Texto que describa la imagen')

      .row.justify-content-center(titulo="Artefactos de Salida")
        .col-md-7.mb-4.mb-md-0
          ul.lista-ul.mb-4
            li
              i.fas.fa-check-circle
              span Meta establecida del nivel de verificación ASVS.

          h3 Actividades
          ul.lista-ul
            li
              i.fas.fa-check-circle
              span Generar los artefactos de salida a partir del análisis realizado en las actividades anteriores.

        .col-md-4
          figure
            img.img-t.m-auto(src='@/assets/curso/tema2/img15.svg', alt='Texto que describa la imagen')

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 2.4 Definición de los Indicadores en Aplicaciones Web

    .row.justify-content-center.mb-0.mb-md-4.mb-lg-4
      .col-lg-3.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img.img-t.mx-auto(src='@/assets/curso/tema2/img16.svg')
      .col-lg-9.mb-5.mb-md-0(data-aos="fade-left")
        p.mt-4 Esta fase es vital en el plan estratégico de seguridad en aplicaciones web debido a que le proporciona a los interesados la manera correcta de cuantificar el rendimiento real del sistema después de realizar un plan estratégico de seguridad en aplicaciones web; permitiéndole a la gerencia un punto de referencia en la toma de decisiones, en las oportunidades de mejora o en el proceso de pivotar la dirección de los objetivos trazados por la corporación para lograr ventajas competitivas.
        p Dentro de esta etapa se definen cuatro importantes actividades que al final permiten gestar un paquete de métricas para implementar. Para este paso se establecen los siguientes artefactos de entrada, salida y las actividades:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").color3
      .row.justify-content-center.align-items-center(titulo="Artefactos de Entrada")
        .col-md-7.mb-4.mb-md-0
          ul.lista-ul.ms-3
            li
              i.fas.fa-check-circle
              span Meta establecida del nivel de verificación ASVS.
            li
              i.fas.fa-check-circle
              span Objetivos del plan estratégico de la seguridad en aplicaciones web.
        .col-md-4.mb-4.mb-lg-0
          figure
            img.img-t.m-auto(src='@/assets/curso/tema2/img17.svg', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-lg-11
            h3 Actividades
            ul.lista-ul
              li
                i.fas.fa-check-circle
                span Recopilar las mejores prácticas de expertos en la temática.
              li
                i.fas.fa-check-circle
                span Realizar mesas de trabajo que permitan obtener una lista de chequeo con los elementos que generen valor agregado al cliente de las aplicaciones.
              li
                i.fas.fa-check-circle
                span Evaluar los indicadores y métricas existentes contra la lista de valor agregado e identificar las falencias, lagunas y hallazgos.


      .row.justify-content-center.align-items-center(titulo="Artefactos de Salida")
        .col-md-7.mb-4.mb-md-0
          ul.lista-ul.ms-3
            li
              i.fas.fa-check-circle
              span Análisis de brechas encontradas.
            li
              i.fas.fa-check-circle
              span Listado del estado actual de los indicadores y métricas.
            li
              i.fas.fa-check-circle
              span Paquete final de indicadores y métricas para el plan estratégico de seguridad de las aplicaciones web.
        .col-md-4.mb-4.mb-lg-0
          figure
            img.img-t.m-auto(src='@/assets/curso/tema2/img18.svg', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-lg-11
            h3 Actividades
            ul.lista-ul
              li
                i.fas.fa-check-circle
                span Realizar pruebas <b><em>benchmark</em></b> al sistema para analizar las brechas en materia de indicadores y métricas.
              li
                i.fas.fa-check-circle
                span Desarrollar un diccionario de indicadores y métricas que detalle la definición y el cálculo de la misma.
              li
                i.fas.fa-check-circle
                span Validar y asegurar que los indicadores y métricas preliminares se alinean con el objetivo del plan estratégico de la seguridad en aplicaciones web para su posterior aprobación por todos los <b><em>stakeholders.</em></b>
              li
                i.fas.fa-check-circle
                span Generar los artefactos de salida a partir del análisis realizado en las actividades anteriores.


    .row.justify-content-center.mb-5
      .col-md-5.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img.img-t.mx-auto(src='@/assets/curso/tema2/img19.svg')
      .col-md-7.mb-5.mb-md-0(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          p.mt-3(numero="a" titulo="Lista de Chequeo Requisitos de seguridad en Aplicaciones Web") Para conseguir los indicadores y sus métricas es necesario conocer los requisitos de seguridad que se pretenden verificar en una aplicación web, es por ello que se presenta a continuación una lista de estos, basado en la propuesta del <b>ASVS</b> en su versión 4.0. (OWASP. 2021).

          .row(numero="b" titulo="Arquitectura, Diseño y Modelado de amenazas")
            .col-12.mt-2.mb-lg-0
              p  Se coloca al inicio de todos los requisitos por analizar debido al papel fundamental que juega el diseño, el modelado y la arquitectura para cualquier sistema <em>software</em>, puesto que, este define la estructuras que componen la aplicación y la forma como se comunican entre ellas, para tener la capacidad de satisfacer los atributos de calidad del sistema. Es por ello que para este elemento se debe asegurar que se cumplan estos requisitos:
              a.anexo(:href="obtenerLink('downloads/anexos/Anexo2_LC_ArquitecturaDisenio_Tabla2.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.m-0 Lista de Chequeo: Arquitectura, Diseño y Modelado de Amenazas

          .row(numero="c" titulo="Autenticación")
            .col-12
              p El siguiente requisito en ser verificado es el mecanismo de inicio y control del estado de la sesión de un usuario a través del método de autenticación. Este proceso es el punto de entrada a la aplicación en consecuencia asegurar este componente es la principal tarea del equipo de TI. Por este motivo, para la autenticación se debe controlar que:
              a.anexo(:href="obtenerLink('downloads/anexos/Anexo3_LC_Autenticacion_Tabla3_PDF.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.m-0 Lista de Chequeo: Autenticación

          .row(numero="d" titulo="Control de acceso")
            .col-12
              p Este requisito consiste en el mecanismo que autoriza el acceso y uso de los recursos acorde con los permisos del solicitante. Teniendo en cuenta esto, es obligatorio que se valide que:
              a.anexo(:href="obtenerLink('downloads/anexos/Anexo4_LC_ControlAcceso_Tabla4_PDF.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.m-0 Lista de Chequeo: Control de Acceso

          .row(numero="e" titulo="Manejo de entrada de datos maliciosos")
            .col-12
              p Otro requisito sensible en la seguridad de las aplicaciones web consiste en la validación de entrada de datos maliciosos al sistema provenientes de ataques oportunistas desde el mismo usuario de la aplicación. Esta debilidad permite la ejecución de distintos ataques al sistema de ficheros, ataques como inyección de intérprete, <em><b>cross-site scripting (XSS)</b></em>, ataques <em><b>locale/Unicode</b></em>, inyección de SQL y desbordamientos de búferes. Por lo cual es necesario validar que para este elemento se validan que:
              a.anexo(:href="obtenerLink('downloads/anexos/Anexo5_LC_ManejoEntradaDatosMaliciosos_Tabla5_PDF..pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.m-0 Lista de Chequeo: Manejo de entrada de datos maliciosos

    .row.justify-content-center.mb-5
      .col-md-7.mb-5.mb-md-0(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          .row(numero="f" titulo="Criptografía en el almacenamiento")
            .col-12
              p Esta verificación hace referencia a la importancia del encriptamiento de los datos más sensible dentro de una aplicación; es por ello que el sistema debe asegurar que se cumplan con:
              a.anexo(:href="obtenerLink('downloads/anexos/Anexo6_LC_CriptografiaAlmacenamiento_Tabla6_PDF.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.m-0 Lista de Chequeo: Criptografía en el almacenamiento

          .row(numero="g" titulo="Gestión y registro de errores")
            .col-12
              p La gestión y registro de errores en log, tiene como objetivo proporcionar un mecanismo reactivo de respuesta a incidentes para los usuarios, administradores y equipos de TI, creando registros de log bastante significativos para los desarrolladores proporcionando datos útiles y sin agregar ruido innecesario. Los datos almacenados en el log deben presentar una cobertura acorde a las reglamentaciones y leyes dispuestas por el país ante los temas de privacidad de la información o directivas similares y se debe garantizar que se gestiona de forma segura. Es por ello que la aplicación debe contar con:
              a.anexo(:href="obtenerLink('downloads/anexos/Anexo7_LC_GestionRegistroErrores_Tabla7_PDF.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.m-0 Lista de Chequeo: Gestión y registro de errores

          .row(numero="h" titulo="Protección de Datos")
            .col-12
              p Este requisito de verificación se centra en la confidencialidad, integridad y disponibilidad de los datos, teniendo presente que esto se aplica en un servidor de aplicaciones, lo que permite asumir que posee protecciones confiables y suficientes. Sin embargo, un sistema debe comprender que todos los dispositivos de los usuarios pueden comprometer la seguridad de alguna forma en el proceso de transmisión de información, por lo que es responsabilidad de la aplicación que los datos persistidos en algún dispositivo esté cifrado y sea complicado o imposible obtenerlo, alterarlo o divulgarlo. A continuación, se identifican los pormenores que debe cumplir en temas de protección de datos:
              a.anexo(:href="obtenerLink('downloads/anexos/Anexo8_LC_ProteccionDatos_Tabla8_PDF.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.m-0 Lista de Chequeo: Protección de Datos

          .row(numero="i" titulo="Seguridad de las Comunicaciones")
            .col-12
              p Para el elemento de seguridad de las comunicaciones es obligatorio que se cubran los requisitos siguientes:
              a.anexo(:href="obtenerLink('downloads/anexos/Anexo9_LC_SeguridadComunicaciones_Tabla9_PDF.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.m-0 Lista de Chequeo: Seguridad de las Comunicaciones

          .row(numero="j" titulo="Configuración de seguridad HTTP")
            .col-12
              p La configuración de seguridad HTTP necesita asegurar lo siguiente:
              a.anexo(:href="obtenerLink('downloads/anexos/Anexo10_LC_ConfiguracionSeguridad HTTP_Tabla10_PDF.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.m-0 Lista de Chequeo: Configuración de seguridad HTTP

      .col-md-5.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img20.svg')


    .row.justify-content-center.mb-5
      .col-md-5.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img21.svg')
      .col-md-7.mb-5.mb-md-0(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          .row(numero="k" titulo="Controles Maliciosos")
            .col-12
              p El requisito de control malicioso es susceptible de no ser detectado con facilidad, puesto que debe ser revisado minuciosamente el código fuente por un experto en el tema de forma manual para detectar bombas lógicas alojadas en alguna línea indetectable a simple vista. Por ello, en este se deben satisfacer los elementos de alto nivel presentados a continuación:
              a.anexo(:href="obtenerLink('downloads/anexos/Anexo11_LC_ControlesMaliciosos_Tabla11_PDF.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.m-0 Lista de Chequeo: Controles Maliciosos

          .row(numero="l" titulo="Lógica de negocios")
            .col-12
              p Para este requisito de verificación se necesita satisfacer las siguientes características:
              a.anexo(:href="obtenerLink('downloads/anexos/Anexo12_LC_LogicaNegocios_Tabla12_PDF.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.m-0 Lista de Chequeo: Lógica de negocios

          .row(numero="m" titulo="Archivos y recursos")
            .col-12
              p Para los archivos y recursos se deben remediar los requisitos tales como:
              a.anexo(:href="obtenerLink('downloads/anexos/Anexo13_LC_Archivos y recursos_Tabla13_PDF.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.m-0 Lista de Chequeo: Archivos y recursos

          .row(numero="n" titulo="Servicios Web")
            .col-12
              p Es necesario que la aplicación verifique que al utilizar servicios web REST o SOAP mantenga:
              a.anexo(:href="obtenerLink('downloads/anexos/Anexo14_LC_ServiciosWeb_Tabla14_PDF.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p.m-0 Lista de Chequeo: Servicios Web

    .bg_6.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-auto(data-aos="fade-left")
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema1/img06.svg', alt='')
        .col-10.col-md-12.col-lg-10(data-aos="fade-right")
          p.m-0 A partir de los anteriores requisitos, el equipo TI puede plantear la selección de ciertos KPI y métricas que luego serán validadas y aprobadas por los interesados; que le permitan posteriormente a la gerencia identificar si el plan estratégico de la seguridad en aplicaciones web ha impactado positivamente los procesos y los sistemas aportando a los objetivos del negocio.

    .row.mb-4(data-aos="fade-right")
      .col-lg-6.col-xl-7.col-xxl-6
        .bg_2.p-2
          p.text-bold.m-0.ms-3 Indicadores Claves de Rendimiento (KPI, #[em Key Performance Indicator])

    .row.justify-content-center.mb-5
      .col-lg-3.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img.img-t.mx-auto(src='@/assets/curso/tema2/img22.png')
      .col-lg-9(data-aos="fade-left")
        p Para afirmar que un proceso, servicio o producto mejora durante la ejecución de un plan, es necesario que existan mediciones que permitan evaluar, comparar y contrastar resultados a fin de respaldar esta declaración (G. V. Ríos, John A. Bohada e I. A. Delgado, 2018). Por esta razón, el área de TI durante la fase de “Definición de los Indicadores y Métricas de la Seguridad en Aplicaciones Web”, del plan estratégico, debe centrar sus esfuerzos en identificar los KPI y las métricas asociadas a ellos para brindar a los stakeholders un conjunto de herramientas e información puntual que les permitirá tomar decisiones y realizar acciones proactivas/reactivas frente a los objetivos del negocio y el direccionamiento estratégico de la organización.
        p Ahora bien, antes de identificarlos es importante entender y diferenciar un KPI de una métrica para que el proceso de establecer ambos elementos sea exitoso:

    .row.justify-content-center.mb-5
      .col-lg-5.mb-5.mb-lg-0
        .bg_7.p-4
          .row.justify-content-center
            .col-lg-4
              img.img-t.mx-auto.mb-4(src='@/assets/curso/tema2/img23.svg')
            .row.justify-content-center
              .col-lg-8.mb-4.mb-lg-0
                .bg_8.p-2
                  h4.text-center.m-0 Métrica
        .bg_10.p-4
          .row.justify-content-center
            .col-lg-11
              p Se define como cualquier concepto que pueda valorarse cuantitativamente; por ejemplo, el número de intentos de acceso a una aplicación o el número de transacciones completadas, etc. Es decir, la métrica representa el dato primitivo o valor atómico medido como respuesta a una pregunta concreta.
      .col-lg-5
        .bg_9.p-4
          .row.justify-content-center
            .col-lg-4
              img.img-t.mx-auto.mb-4.mt-3(src='@/assets/curso/tema2/img24.svg')
            .row.justify-content-center
              .col-lg-8
                .bg_8.p-2
                  h4.text-center.m-0 KPI
        .bg_11.p-4
          .row.justify-content-center
            .col-lg-11
              p Está relacionado al éxito de cada uno de los objetivos propuestos por una organización. En concreto un indicador se alinea al plan propuesto por la alta gerencia, por ejemplo, la tasa de crecimiento de los ingresos, el porcentaje de disponibilidad de la aplicación, o el tiempo de respuesta después de un fallo, entre otros.

    p Para establecer los KPI para el plan estratégico de seguridad en aplicaciones web que se van a estar monitoreando se pueden seguir algunos consejos simples que lo facilitan:

    .row
      .col-lg-12
        .bg_slyder.p-5
          SlyderA(tipo="b")
            .row.justify-content-around
              .col-lg-5.mb-4.mb-lg-0
                h4 Seleccionar del listado de requisitos por componente los criterios básicos a medir basados en el nivel de verificación en el plan estratégico en la fase tres
                p Tener presente que los KPI deben ser muy concretos y específicos, apuntando a un solo objetivo y midiendo un solo parámetro y sin tener múltiples aristas.
                p.mb-4 Por ejemplo:
                .row
                  .col-auto
                    a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
                      span Ver más
                      .indicador--click(v-if="mostrarIndicador")
              .col-lg-6(data-aos="fade-right")
                figure
                  img.img-t.mx-auto(src='@/assets/curso/tema2/img25.png', alt='AvatarTop')

            .row.justify-content-around
              .col-lg-5.mb-4.mb-lg-0
                h4 Seleccionar el requisito y la medida a realizar
                p Después de seleccionado el requisito y la medida a realizar se debe validar contra qué factor se va a comparar.
                p.mb-4 Por ejemplo:
                .row
                  .col-auto
                    a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                      span Ver más
                      .indicador--click(v-if="mostrarIndicador1")
              .col-lg-6
                figure.mb-4
                  img.img-t.mx-auto(src='@/assets/curso/tema2/img26.png', alt='AvatarTop')

            .row.justify-content-around
              .col-lg-5
                h4 Tener la capacidad de decisión con respecto a los resultados positivos o negativos
                p Por último, es necesario que el equipo de TI tenga la capacidad de decisión con respecto a los resultados positivos o negativos en el tiempo, puesto que, los KPI se usan para plantear estrategias que puedan mitigar problemas que ocurren o que podrían suceder.
                p No basta solo con medir, sino que se debe tener plena confianza en las oportunidades de mejora que brindan los indicadores y sus respectivas métricas.
              .col-lg-6
                figure.mb-4
                  img.img-t.mx-auto(src='@/assets/curso/tema2/img27.png', alt='AvatarTop')

          ModalA(:abrir-modal.sync="modal2")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                h5.mb-4 Requisito de verificación de Arquitectura, Diseño y Modelado de amenazas.
                ul.lista-ul--color.mb-4
                  li.ms-2
                    i.fas.fa-check-circle
                    | Identificar información sensible de código que es visible del lado del cliente.
                  li.ms-2
                    i.fas.fa-check-circle
                    | Contar el número de llamadas a librerías externas o programas de terceros, potencialmente inseguros.

          ModalA(:abrir-modal.sync="modal1")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                h5.mb-4 Requisito de verificación de Arquitectura, Diseño y Modelado de amenazas.
                ul.lista-ul--color.mb-4
                  li.ms-2
                    i.fas.fa-check-circle
                    | Disminuir a cero la información sensible de código visible del lado del cliente.
                  li.ms-2
                    i.fas.fa-check-circle
                    | Llevar el código a solo realizar un 10 % de llamadas a librerías externas o programas de terceros.

    separador

    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 2.5 Definición de Métricas de Seguridad en Aplicaciones Web

    p Como se indicó anteriormente, los KPI necesitan de ciertas métricas para su confección y refinamiento; sin embargo, está claro que se puede seleccionar cualquier variable de la gran cantidad que pueden generar una programa sobre el ecosistema de temas en seguridad; por esta razón, es pertinente aclarar cómo se debe establecer si una métrica está acorde a lo que se necesita para el plan estratégico de seguridad de las aplicaciones web. Así, las características más sobresalientes de las métricas son:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
      .tarjeta-avatar
        img.img102(src='@/assets/curso/tema2/img30.svg' alt='AvatarTop')
        .tarjeta.color-acento-botones
          .row.justify-content-center.p-4
            .col-lg-10.col-xl-12.col-xxl-10
              .bg_8.p-2
                h4.text-center.m-0 Dependencia del proceso
          .bg_12.p-4
              .row.justify-content-lg-center
                .col-12.col-lg-11
                  p Estas deben ser derivadas específicamente del resultado del proceso para garantizar que tengan un impacto significativo y sean fácilmente evaluables.

      .tarjeta-avatar
        img.img102(src='@/assets/curso/tema2/img31.svg' alt='AvatarTop')
        .tarjeta.color-acento-contenido
          .row.justify-content-center.p-4
            .col-lg-8
              .bg_8.p-2
                h4.text-center.m-0 Confiable
          .bg_13.p-4
            .row.justify-content-lg-center
              .col-12.col-lg-11
                p Si los datos que puede tomar la métrica no son precisos ni verificables, se dice que son aleatorios y arbitrarios, por tanto, no debería plantearse como una métrica a tener en cuenta.

      .tarjeta-avatar
        img.img102(src='@/assets/curso/tema2/img32.svg' alt='AvatarTop')
        .tarjeta.color-acento-botones
          .row.justify-content-center.p-4
            .col-lg-8
              .bg_8.p-2
                h4.text-center.m-0 Cuantificable
          .bg_12.p-4
            .row.justify-content-lg-center
              .col-12.col-lg-11
                p Estas deben ser concretas y cuantificables, con una facilidad para expresarse en unidades relevantes y nunca deben ser ponderadas en conceptos como “bueno” o “bonito”, etc.

      .tarjeta-avatar
        img.img117(src='@/assets/curso/tema2/img28.svg' alt='AvatarTop')
        .tarjeta.color-acento-contenido
          .row.justify-content-center.p-4
            .col-lg-10.col-xl-12.col-xxl-10
              .bg_8.p-2
                h4.text-center.m-0 Alineación a los objetivos
          .bg_13.p-4
            .row.justify-content-lg-center
              .col-12.col-lg-11
                p La información que proporcione una métrica debe apoyar el cumplimiento de los objetivos de la organización.

      .tarjeta-avatar
        img.img107(src='@/assets/curso/tema2/img29.svg' alt='AvatarTop')
        .tarjeta.color-acento-botones
          .row.justify-content-center.p-4
            .col-lg-10.col-xl-12.col-xxl-10
              .bg_8.p-2
                h4.text-center.m-0 En curso y comparable
          .bg_12.p-4
            .row.justify-content-lg-center
              .col-12.col-lg-11
                p La métrica debe proporcionar un valor que permita su comparación en función del tiempo y no en indicadores de rendimiento de una sola ocasión.

    .bg_1.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-auto.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema2/img33.svg', alt='')
        .col-10.col-md-12.col-lg-10(data-aos="fade-right")
          p.m-0 Si las métricas seleccionadas poseen estas características, permitirán a la corporación comprender de mejor forma los riesgos a los que se pueden enfrentar, las amenazas y problemas emergentes, identificar y aislar las debilidades y tener una evaluación más acertada del desempeño de los controles implementados en materia de seguridad en aplicaciones web; del mismo modo, se crearán oportunidades de mejora y actualización en procesos, herramientas y tecnologías en comparación a los actuales evidenciando el incremento y evolución de la cultura organizacional en materia de seguridad en sistemas. Las métricas en la temática de ciberseguridad pueden clasificarse de la siguiente manera:

    .bg_slyder.p-5
      SlyderA(tipo="b")
        .row.justify-content-around
          .col-lg-5.mb-4.mb-lg-0
            h4 Métricas en Procesos de Seguridad
            p Estas métricas tienen como objetivo medir los procesos y procedimientos implicados en las políticas de seguridad de la organización, buscando que los indicadores se relacionen con el nivel de seguridad a través del abordaje de las normas y estándares del gobierno en seguridad.
          .col-lg-6(data-aos="fade-right")
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema2/img34.png', alt='AvatarTop')

        .row.justify-content-around
          .col-lg-5.mb-4.mb-lg-0
            h4 Métricas de Red
            p Las métricas de red están dirigidas o impulsadas por productos tales como firewalls, sistemas de detección de intrusos, etc. Las cuales están ampliamente disponibles y utilizadas para conseguir los objetivos y brindar a la organización la sensación de control, inclusive teniendo interfaces de usuarios con gráficos que permiten una lectura sencilla.
          .col-lg-6
            figure.mb-4
              img.img-t.mx-auto(src='@/assets/curso/tema2/img35.png', alt='AvatarTop')

        .row.justify-content-around
          .col-lg-5.mb-4.mb-lg-0
            h4 Métricas de <em>software</em>
            p Las métricas que tienen como finalidad el <em>software</em> tienen una dependencia directa del ciclo de vida de la construcción de aplicaciones y la arquitectura, el diseño y el modelado del <em>software</em>. Las organizaciones deben documentar sus métricas en un formato estándar para asegurar la aplicación del modelo, adaptación, recopilación y presentación de informes.
            p Ver ejemplo de documentación de un indicador para prevenir código malicioso y el respectivo proceso de cálculo de su métrica asociada:
            a.anexo(:href="obtenerLink('downloads/anexos/Anexo15_Documentaciontabla_Tabla15.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p.m-0 Documentación Tabla
          .col-lg-6
            figure.mb-4
              img.img-t.mx-auto(src='@/assets/curso/tema2/img36.png', alt='AvatarTop')




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    mostrarIndicador1: true,
    modal2: false,
    modal1: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
