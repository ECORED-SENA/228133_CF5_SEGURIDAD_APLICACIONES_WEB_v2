<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1(data-aos="fade-right") Ejecución del Plan Estratégico de la Seguridad en Aplicaciones <em>Web</em>

    p La última fase del plan estratégico de la seguridad consiste en su ejecución. Para ello se tiene los siguientes artefactos de entrada, salida y las actividades en esta fase:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Artefactos de Entrada" :icono="require('@/assets/curso/tema3/img01.svg')")
        .row.justify-content-center.align-items-center.color4
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4.mb-4 Artefactos de Entrada
            ul.lista-ul--color.mb-4
              li.ms-2
                i.fas.fa-check-circle
                p.m-0 Paquete final de indicadores y métricas para el plan estratégico de seguridad de las aplicaciones <em>web</em>.
              li.ms-2
                i.fas.fa-check-circle
                p.m-0 Objetivos del plan estratégico de seguridad en aplicaciones <em>web</em>.
              li.ms-2
                i.fas.fa-check-circle
                | Meta establecida del nivel de verificación ASVS.        
          .col-md-12.col-lg-4
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema3/img04.png', alt='Texto que describa la imagen')
        
      .py-4.py-md-5(titulo="Actividades" :icono="require('@/assets/curso/tema3/img02.svg')")
        .row.justify-content-center.align-items-center.color4
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4.mb-4 Actividades
            ul.lista-ul--color.mb-4
              li.ms-2
                i.fas.fa-check-circle
                | Estimar los recursos requeridos y los costos para la implementación por cada una de las acciones definidas en el plan estratégico.
              li.ms-2
                i.fas.fa-check-circle
                p.m-0 Definir un programa continuo de sensibilización y capacitación en seguridad de aplicaciones <em>web</em>, que facilite al equipo de TI la adopción del plan estratégico de manera eficaz. 
              li.ms-2
                i.fas.fa-check-circle
                p.m-0 Establecer planes de acción y futuros proyectos para tratar de minimizar la brecha y pensar en llegar a un estado superior de nivel de verificación en seguridad de aplicaciones <em>web</em>.
              li.ms-2
                i.fas.fa-check-circle
                | Generar los artefactos de salida a partir del análisis realizado en las actividades anteriores.        
          .col-md-12.col-lg-4
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema3/img05.png', alt='Texto que describa la imagen')
      
      .py-4.py-md-5(titulo="Herramientas de calidad de código" :icono="require('@/assets/curso/tema3/img03.svg')")
        .row.justify-content-center.align-items-center.color4
          .col-md-12.col-lg-7.mb-4.mb-md-0
            h4.mb-4 Herramientas de calidad de código
            ul.lista-ul--color.mb-4
              li.ms-2
                i.fas.fa-check-circle
                p.m-0 Hoja de ruta correspondiente al plan de acción para la implementación de la seguridad en aplicaciones <em>web</em>, en la cual se priorizan las iniciativas que se deben llevar a cabo para cerrar la brecha y alcanzar el estado deseado.
              li.ms-2
                i.fas.fa-check-circle
                | Plan de uso y apropiación de la Estrategia.
              li.ms-2
                i.fas.fa-check-circle
                p.m-0 Paquete final de indicadores y métricas para el plan estratégico de seguridad de las aplicaciones <em>web</em>.
        
          .col-md-12.col-lg-4
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema3/img06.png', alt='Texto que describa la imagen')

    .bg_1.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-auto.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema2/img33.svg', alt='')
        .col-10.col-md-12.col-lg-10(data-aos="fade-right")
          p.text-bold A recordar: 
          p.m-0 Los indicadores <b>claves de rendimiento</b>, las <b>métricas</b>, los <b>niveles de verificación de ASVS</b> y los <b>requisitos de verificación detallada</b> para la seguridad en aplicaciones <em>web</em>, permiten construir un plan estratégico de seguridad que conduce a una organización a la apropiación y ejecución de una hoja de ruta en su intención de lograr que las aplicaciones que hacen parte de su ecosistema y el núcleo del funcionamiento del negocio que se encuentren en el nivel de verificación adecuado según los estándares recomendados por los marcos de trabajo mencionados en el OWASP y el ASVS para su sector dentro de la industria; permitiendo que estos sistemas puedan escalar en un futuro y responder ante los constantes cambios que presenta el <em>software</em> en el mundo actual.

    .row.justify-content-center.align-items-center
      .col-lg-9(data-aos="fade-right") 
        p El plan estratégico propuesto será para las compañías una herramienta de gran utilidad para prevenir atacantes y vulnerabilidades asociadas a las aplicaciones <em>web</em>, gracias a que la implementación de este plan permitirá a los equipos de desarrollo tomar decisiones oportunas ante eventualidades y de esta forma perfeccionar gradualmente los mecanismos de seguridad y de control de los sistemas de las organizaciones.
        p En el siguiente capítulo se proponen algunas herramientas que brindan al equipo de desarrollo opciones para el monitoreo automatizado de las aplicaciones en temas de seguridad <em>web</em>.
      .col-lg-3(data-aos="fade-left") 
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img07.svg', alt='')

    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 3.1 Herramientas de Monitoreo de Seguridad en Aplicaciones <em>Web</em>

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right") 
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img08.svg', alt='')
      .col-lg-9(data-aos="fade-left") 
        p En el capítulo anterior se introdujo el estándar de verificación en seguridad en aplicaciones ASVS, el cual puede convertirse para las organizaciones en una hoja de ruta para la verificación de sus sistemas en conjunto con los proyectos abiertos y sin restricciones aprovechándose de su documentación, su código fuente y el manejo de la autenticación al sistema, particularmente para los niveles de verificación estándar y avanzado.
        p En la gran mayoría de ejercicios de revisión de código y test de penetración todos los hallazgos presentados en el informe que recibe la dirección general se componen exclusivamente de defectos de seguridad; no obstante es necesario incluir cuál es el alcance de la verificación, el resumen detallado de los resultados del nivel de verificación anexando a éste las pruebas que se completaron, las pruebas exitosas y las fallidas, estableciendo además una posible solución a las erradas.

    p Es por ello que las organizaciones promueven prácticas que mantengan la documentación asociada a las pruebas en formato electrónico, usando imágenes, videos, registros <em>logs</em>, o <em>scripts</em> entre otros, puesto que, esta serie de archivos sirven de hallazgos para los desarrolladores cuando tengan dudas en sus procesos. 

    .row.justify-content-center.mb-5.mb-lg-0(data-aos="fade-up-right") 
      .col-lg-11.ms-3.ms-lg-5.ps-0.ps-lg-3
        .bg_14.p-5
          .row.justify-content-center
            .col-lg-6.col-xl-8.col-xxl-6.mb-4.mb-lg-0
              p La comunidad OWASP en su afán de perfeccionar estos procesos han planteado una serie de herramientas automatizadas que intentan brindar una gran cobertura y ejecución de gran cantidad de parámetros a los equipos de desarrollo con múltiples formas de ataques y entradas maliciosas. No obstante, ASVS indica que no es suficiente con solo ejecutar una herramienta y confiar en un único informe de fallas, puesto que, esta sola herramienta no proporciona la evidencia necesaria para abordar todos los problemas de un nivel de verificación para indicar que está comprobado completamente. 
            .col-lg-4
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema3/img09.svg', alt='')

    .bg_3.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-auto(data-aos="fade-left")
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema1/img06.svg', alt='')
        .col-10.col-md-12.col-lg-10(data-aos="fade-right")
          p.m-0 En este caso se debe tener presente que la industria <em>software</em> madura a un ritmo acelerado y en materia de seguridad en aplicaciones la diferencia entre pruebas manuales y asistidas por herramientas es significativamente mínima. Es por ello, que es importante aclarar que estas herramientas automatizadas simplemente se adaptan para realidades puntuales y no tienen la capacidad de cubrir todos los requerimientos que a día de hoy existen. 

    p A continuación se presentan algunos proyectos de OWASP que utilizan ASVS y proveen una herramienta para los equipos de desarrollo:
            
    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 3.2 El marco de conocimiento de seguridad <em>(Security Knowledge Framework)</em>

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right") 
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img10.svg', alt='')
      .col-lg-9(data-aos="fade-left") 
        p La experiencia de la comunidad de OWASP permite identificar que el nivel de seguridad en las aplicaciones <em>web</em> no es significativamente alto para garantizar tranquilidad a las organizaciones. Esto debido a que muchos equipos de desarrollo no dimensionan el riesgo y las vulnerabilidades que pueden ser explotados por los piratas informáticos. Razón por la cual, se decantan por desarrollar un <em>framework</em> utilizando ASVS como guía para crear un sistema que sirva como hoja de ruta desde el primer paso para el desarrollo de aplicaciones seguras.  

    .bg_1.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-10.col-md-12.col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          p.m-0 El <b>OWASP-SKF</b> es una aplicación <em>web</em> de código abierto escrita en el lenguaje de programación <b><em>python</em></b> usando el <em>framework</em> <b><em>Flask</em></b> que le proporciona a los desarrolladores de <em>software</em> una potente herramienta para que aprendan los principios de codificación segura en múltiples lenguajes de programación; entrenándolos en la escritura de código seguro desde la concepción, diseño e implementación de un sistema. La premisa es plantar la semilla de la seguridad en el desarrollador desde el diseño hasta la última etapa del ciclo de vida, a través de una serie de listas de verificación como por ejemplo <b>OWASP- ASVS, OWASP-MASVS</b> y la ejecución de laboratorios y prácticas que permiten explorar los niveles de verificación de seguridad <em>(<b>Security Knowledge <em>Framework</em>, 2022</b>)</em>.
        .col-lg-3(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img11.svg', alt='')

    .row.mb-4(data-aos="fade-right")
      .col-lg-3.col-xl-4.col-xxl-3
        .bg_2.p-2
          p.text-bold.m-0.ms-3 OWASP ZAP (Zed Attack Proxy)      

    .row.justify-content-center.mb-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right") 
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img12.svg', alt='')
      .col-auto(data-aos="fade-down") 
        .verticalLine.d-none.d-lg-block   
      .col-lg-8(data-aos="fade-left") 
        p ZAP es una herramienta de código abierto de fácil uso, flexible, extensible y gratuita mantenida por el esfuerzo conjunto del OWASP, que permite realizar pruebas de penetración para aplicaciones <em>web</em>. La aplicación actúa como un proxy ubicándose entre el navegador y el sistema a testear para la búsqueda de vulnerabilidades; con el fin de interceptar e inspeccionar los mensajes enviados entre estos dos y con la disponibilidad de realizar cambios en el contenido de este y re-enviarlo al destino. 
        p Además ofrecen la opción de escaneo automatizado para una gran variedad de niveles de verificación ASVS y contiene otras herramientas para encontrar vulnerabilidades de seguridad manualmente. Esta aplicación ofrece al público versiones para los distintos sistemas operativos y también se puede usar a través de <em>docker</em>; otras opciones adicionales y complementos son posible descargarlos gratuitamente desde el <b>ZAP <em>Marketplace</em>.</b> Por último, la herramienta permite a los desarrolladores usarla como aplicación independiente o como un proceso que corre en <em>background</em> en el sistema operativo. (OWASP <em>Zed Attack Proxy</em>, 2022).

    .bg_15.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-auto(data-aos="fade-left")
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema1/img06.svg', alt='')
        .col-10.col-md-12.col-lg-10(data-aos="fade-right")
          p.m-0 Otro punto importante que vale la pena resaltar es que este proyecto al ser de código abierto permite a los desarrolladores examinarlo sin inconvenientes; dándoles la posibilidad de identificar cómo se implementa alguna funcionalidad. Además ZAP, brinda la opción de trabajar en su proyecto en la corrección de errores, aditamento de funciones o funcionalidades, o creación de complementos para situaciones especiales requeridas. 

    .row.mb-4(data-aos="fade-right")
      .col-lg-3.col-xl-4.col-xxl-3
        .bg_2.p-2
          p.text-bold.m-0.ms-3 OWASP Juice Shop 

    .row.justify-content-between.mb-4
      .col-lg-8.order-last.order-lg-first(data-aos="fade-right") 
        p Este proyecto de OWASP consiste en la exposición de una aplicación <em>web</em> moderna y sofisticada que usa tecnologías actuales como <b>Node.js, Express</b> y <b>Angular,</b> pero que presenta una gran cantidad de vulnerabilidades en materia de seguridad; esto con el fin de realizar capacitación en esta materia, demostraciones de fallos y concientización para la comunidad <em>software</em> en general. Además sirve también como ejemplo para las otras herramientas como <b>OWASP ZAP,</b> entre otras.
        p <b>Juice Shop</b> contiene todas las vulnerabilidades del <b>OWASP Top Ten,</b> junto a otro gran número de falencias en temas de seguridad que se basan en todos los hallazgos encontrados en aplicaciones <em>web</em> en la comunidad global. Dentro de ella se pueden descubrir gran variedad de ejemplos y desafíos de piratería informática de dificultad variable que el usuario debe explotar; a medida que se avanza con estas dinámicas el progreso se aprecia en un tablero de puntuación.
      .col-auto(data-aos="fade-down") 
        .verticalLine.d-none.d-lg-block      
      .col-lg-3.mb-4.mb-lg-0.order-first.order-lg-last(data-aos="fade-left") 
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img13.svg', alt='')

    .bg_6.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-auto(data-aos="fade-left")
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema1/img06.svg', alt='')
        .col-10.col-md-12.col-lg-10(data-aos="fade-right")
          p.m-0 Como se mencionó anteriormente esta herramienta le puede ayudar a los expertos en el área de seguridad y a los equipos de <em>software</em> como aplicación para adiestrarse y comprobar qué tan bien sus herramientas se adaptan a las interfaces de aplicaciones con gran cantidad de código <b>JavaScript y API REST.</b> (OWASP Juice Shop 2022).

    .row.mb-4(data-aos="fade-right")
      .col-lg-4.col-xl-5.col-xxl-4
        .bg_2.p-2
          p.text-bold.m-0.ms-3 Demos herramientas Juice Shop y OWASP ZAP

    p A continuación, en el siguiente video se presenta una demostración del uso de estas aplicaciones. Antes de empezar con las herramientas es necesario instalar algunos paquetes en el sistema referenciados en este documento (NodeJs, 2022) y (Git, 2022).

    figure
    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/eLapa2odw7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .bg_3.p-4
      .row.justify-content-center.align-items-center
        .col-auto(data-aos="fade-left")
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema1/img06.svg', alt='')
        .col-10.col-md-12.col-lg-10(data-aos="fade-right")
          p.m-0 Es importante tener presente que en el mercado existe una gran variedad de estas tanto libres y gratuitas como pagadas y de terceros; todas con características especiales que se adaptan a las necesidades de los expertos y las condiciones de las vulnerabilidades a medir dentro de las aplicaciones <em>web</em>.

    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 3.3 Medición de tráfico de red

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right") 
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img14.svg', alt='')
      .col-lg-9(data-aos="fade-left") 
        p Actualmente es casi imposible para la sociedad pensar en su día a día sin la conexión al internet. La red mundial creció en las últimas décadas a un ritmo increíblemente rápido, lo que produjo un aumento sustancial en el tráfico de datos e información en la red, proveniente en gran medida de los servicios de transmisión, las redes sociales y las aplicaciones <em>web</em> en general (Pries, R, 2009).
        p Con este panorama las redes deben soportar un aumento en el promedio de carga de tráfico y un cambio errático en los patrones de los datos. Por tanto, las organizaciones y sus equipos de desarrollo necesitan contar con una supervisión y análisis efectivo de todo el tránsito de datos de información; debido a que detectar eventos externos, cuellos de botella, patrones erráticos, actividades maliciosas y/o procesos poco usuales en la red, permite anticiparse de manera oportuna y efectiva a potenciales problemas cuando ocurren o antes de que sucedan. De modo que, los servicios y/o aplicaciones no presenten interrupciones, indisponibilidad, intermitencia o suspensión durante ráfagas o durante largos periodos de tiempo (Xinyu, X., S. Mishra, 2009).

    .bg_1.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-auto.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img15.svg', alt='')
        .col-10.col-md-12.col-lg-10(data-aos="fade-right")
          p.m-0 La medición de tráfico es una técnica que supervisa y notifica de manera constante el flujo de datos de la red al equipo de gestión y administración de las aplicaciones y/o servicios cada vez que ocurre un evento. Para realizar dicho monitoreo es posible encontrar en el mercado distintas herramientas que utilizan múltiples técnicas para analizar el tráfico total. 

    p.mb-5 A continuación, se exponen algunos enfoques de monitoreo de red y se presentan algunas herramientas para dicha tarea:

    .row.mb-4(data-aos="fade-right")
      .col-lg-2.col-xl-3.col-xxl-2
        .bg_2.p-2
          p.text-bold.m-0.ms-3 Wireshark

    .row.justify-content-center.mb-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right") 
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img16.svg', alt='')
      .col-auto(data-aos="fade-down") 
        .verticalLine2.d-none.d-lg-block   
      .col-lg-8(data-aos="fade-left") 
        p Este proyecto inició su desarrollo en el año 2007 y continúa aún en vigencia exhibiendo una librería de información amplia y con múltiples protocolos de red, permitiendo su ejecución en diferentes sistemas operativos nativos, tales como linux, MacOs o Windows (Dabir, A., A. Matrawy, 2007). 
        p <em>Wireshark</em> captura todos los paquetes del flujo de la red para luego exponerlos completamente en una interfaz gráfica de usuario con metainformación de cada dato analizado, brindándole a los administradores la oportunidad de identificar qué equipo o dispositivo está tratando de interactuar con otro, ofreciendo, además, corroborar si un paquete tiene una estructura correcta o no (Shaoqiang, W., X. DongSheng, y Y. ShiLiang, 2010). 

    .bg_16.p-5
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-5(data-aos="fade-right") 
          p Esta herramienta posee una función de línea de comandos que recopila paquetes de transmisión, que posteriormente son archivados en disco para un análisis y presentación en la interfaz mencionada anteriormente. La aplicación debe ser ejecutada con un usuario administrador o en su defecto con privilegios, o en consecuencia no será capaz de visualizar las interfaces de red disponibles para análisis y monitoreo. 
        .col-lg-5(data-aos="fade-left") 
          figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img17.png', alt='')

    .bg_17.mb-5.mb-lg-0
      .row.align-items-center.mb-4
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right") 
          figure
            img.img-t.mx-auto.m_bottom1.m_left2(src='@/assets/curso/tema3/img18.png', alt='')
        .col-lg-7(data-aos="fade-left") 
          .row
            .col-lg-12.m_left1
              p.m_right1.mb-4 La herramienta en la interfaz provee una opción de filtrado por las distintas columnas que presenta directamente; como por ejemplo fuente, destino, protocolo, etc. Es importante detener la captura de paquetes, puesto que si no se realiza <em>Wireshark</em> seguirá analizando el tráfico en modo silencioso, incurriendo en consumo de memoria del sistema. 
              p.m_right1 Si se hace clic en cualquier paquete, se mostrará información detallada sobre el paquete capturado en la mitad inferior de vista.
    
    .row.mb-4.m_top1(data-aos="fade-right")
      .col-auto
        .bg_2.p-2.px-4
          p.text-bold.m-0 NTOP

    p Esta herramienta ofrece una solución para monitorear el tráfico con un nivel sustancialmente alto de visibilidad de los datos, permitiendo realizar un análisis detallado de los protocolos de red y los paquetes transmitidos.

    p.mb-5 A continuación, se podrá conocer detalles de esta herramienta: 

    .bg_slyder.p-5.mb-4
      SlyderA(tipo="b")
        .row.justify-content-around
          .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right") 
            h4.mb-4 Tablero NTOP 
            p El tablero NTOP provee al administrador la oportunidad de conocer qué está sucediendo con el flujo de información entre dos dispositivos a través de los puertos TCP o UDP. Esta imagen no es estática, sino que se actualiza cada cierto espacio de tiempo especificado por NTOP; mostrando los diferentes dispositivos conectados a la red y la cantidad de datos que recibe de otros dispositivos en particular, representando cada tipo de tráfico con un color diferente.
          .col-lg-6(data-aos="fade-right") 
            figure
              img.img-t.mx-auto(src='@/assets/curso/tema3/img21.png', alt='AvatarTop')

        .row.justify-content-around
          .col-lg-5.mb-4.mb-lg-0
            h4.mb-4 Segregación en términos de su tipo y sus dimensiones
            p Además de las segregaciones, también posee una librería que brinda un proceso de inspección profundo del flujo de información, a través de la captura, análisis y flujos de paquetes, como, por ejemplo, obtener en un marco de tiempo de hasta un año los resultados de un protocolo en particular.
          .col-lg-6
            figure.mb-4
              img.img-t.mx-auto(src='@/assets/curso/tema3/img22.png', alt='AvatarTop')            

        .row.justify-content-around
          .col-lg-5
            h4.mb-4 Librería <em>libcap</em> de NOTP
            p NTOP usa la librería <em><b>libcap</b></em> que permite la captura de paquetes en distintos sistemas operativos, logrando que su código fuente sea el mismo haciendo que la herramienta sea portable. Además, el almacenamiento en <em>búfer</em> de los paquetes reduce la pérdida en caso de ráfagas de tráfico lo que brinda fiabilidad al momento de analizar los datos; los cuales son procesados una a la vez. La metainformación de los dispositivos se almacena en las tablas <em>hash</em> como datos de entrada y salida ordenados acorde con los protocolos de red; por último, NTOP presenta una gran cantidad de filtros almacenados y se aplican directamente al tráfico capturado.
          .col-lg-6
            figure.mb-4
              img.img-t.mx-auto(src='@/assets/curso/tema3/img23.png', alt='AvatarTop')

        .row.justify-content-around
          .col-lg-5
            h4.mb-4 Lista de <em>host</em> detectados por el <em>software</em>
            p Esta imagen muestra la lista de <em><b>host</b></em> detectados por el <em>software</em>, los cuales son reconocidos cada vez que reciben tráfico proveniente de algún otro dispositivo. 
            p NTOP tiene la capacidad de decodificar los paquetes HTTP, por lo que logrará identificar el sistema operativo del servidor en el cual se está ejecutando. Además es posible apreciar el desglose del tráfico en términos de datos entrantes/salientes y la aplicación proporciona la descarga de un objeto JSON con estos datos, para que se pueda manipular o almacenar en una base de datos.

          .col-lg-6
            figure.mb-4
              img.img-t.mx-auto(src='@/assets/curso/tema3/img24.png', alt='AvatarTop')

    .row.mb-4(data-aos="fade-right")
      .col-lg-3.col-xl-4.col-xxl-3
        .bg_2.p-2
          p.text-bold.m-0.ms-3 Microsoft Message Analyzer

    p.mb-4.mb-lg-0 Esta herramienta creada para el sistema operativo Microsoft contiene entre sus características principales el rastreo en vivo (<em><b>Live Trace</b></em>) que logra capturar y rastrear el flujo de tráfico de los dispositivos, HTTPS sin cifrar, el tráfico de la capa de enlace local de NDIS, las interfaces remotas de red, el tráfico IPSEC sin cifrado, VPN y acceso directo a red.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-5.mb-lg-0
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema3/img25.png')
      .col-lg-4.mt-4.mt-lg-0
        .bg_18.pe-0.pe-lg-5.mb-5.mb-lg-0
          p.text-bold Características de Microsoft Message Analyzer
          p Permite la captura del tráfico de máquinas remotas usando para ello una sesión desde el menú, realizando una transferencia de los datos de dicha máquina al dispositivo local, para realizar un análisis a los registros de texto y paquetes.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mt-5.mt-lg-0.mb-4.mb-lg-0
        .bg_19.px-0.px-lg-4.mb-5.mb-lg-0
          p.text-bold Nivel de trabajo
          p En esta figura se detalla el flujo a un alto nivel de trabajo presentando los mensajes de varios archivos de registro, ordenados y clasificados por tiempo, basado en la información de la sesión en curso, brindando detalles sobre dicho mensaje a través de la ventana de herramientas.
      .col-lg-6.mt-5.mt-lg-0
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema3/img26.png')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-xl-5.col-xxl-6.mb-4.mb-lg-0
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema3/img27.png')
      .col-lg-4.col-xl-5.col-xxl-4.mt-4.mt-lg-0
        .bg_20.px-0.px-lg-4
          p.text-bold Organización de registros 
          p Los registros pueden ser organizados por sus propiedades tales como módulo, fuente y destino. La vista de los datos muestra texto, imágenes y permite verlos también en formato xml. Cuando se inicia la herramienta, esta permite seleccionar una sesión de todas las detectadas en la lista, presentando el número total de mensajes entrantes y proporcionando una funcionalidad que abre varias ventanas de análisis a la vez acoplables entre ellas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-xl-5.col-xxl-4.mb-4.mb-lg-0
        .bg_21.px-0.px-lg-2
          p.text-bold.mt-4 Aplicación de Microsoft
          p Permite a los usuarios una serie de filtros que le permiten aislar y centrarse en datos específicos para su posterior análisis. Algunos de los filtros que posee son:
          ul.lista-ul--color
            li.ms-2.m-0
              i.fas.fa-check-circle
              | Filtro rápido.
            li.ms-2.m-0
              i.fas.fa-check-circle
              | Palabras clave.
            li.ms-2.m-0
              i.fas.fa-check-circle
              | Filtro de sesión.
            li.ms-2.m-0
              i.fas.fa-check-circle
              | Filtro de vista.
          p Cada uno de estos realiza una tarea única y la herramienta brinda al usuario la opción de descifrar datos con los protocolos Transport Layer Security (TLS) y Secure Sockets Layer (SSL).

      .col-lg-6.col-xl-5.col-xxl-6.mb-5.mb-lg-0
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema3/img28.png')

    .row.mb-4(data-aos="fade-right")
      .col-lg-4.col-xl-5.col-xxl-4
        .bg_2.p-2
          p.text-bold.m-0.ms-3 <em>Paessler Router Traffic Grapher</em> (PRTG)

    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img.img-t.mx-auto(src='@/assets/curso/tema3/img29.svg')
      .col-lg-8(data-aos="fade-left")   
        p Esta herramienta de análisis y rastreo de red que identifica el tráfico que más congestiona el flujo de datos permite prevenir eventos y problemas que se generen por consecuencia de ello. PRTG provee características avanzadas en el descubrimiento automatizado de la red, con un énfasis en la seguridad ya que alerta al usuario ante eventuales fallos o emergencias a través del envío de correo o mensaje de texto.
        p La aplicación tiene compatibilidad con navegadores, interfaces de usuario de windows y iphone, permitiendo el acceso en cualquier momento y desde cualquier ubicación. Además, le brinda al usuario el monitoreo del ancho de banda de la red y los clientes conectados a la misma, con el plus de indicar con qué propósito se conectan (PRTG, 2022).

    .bg_1.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-auto(data-aos="fade-left")
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema1/img06.svg', alt='')
        .col-lg-10.px-5.px-md-3.px-lg-0(data-aos="fade-right")
          p.m-0 PRTG posee más de 200 tipos de sensores para todos los servicios de red comunes, incluidos HTTP, SMTP/POP3 y FTP; admitiendo diferentes protocolos de red para la recolección de la información, tales como: SNMP y WMI, Packet Sniffing, NetFlow, IPFIX, JFlow y SFlow. A continuación, se podrá conocer las características de esta herramienta: 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").color3
      .row.justify-content-center(titulo="Interfaz de usuario accedida desde la <em>web</em>")
        .col-12.col-lg-8.mb-4.mb-md-0
          p En la imagen se precisa la interfaz de usuario accedida desde la <em>web</em> con gráficos de datos en tiempo real; esta interfaz es alimentada por los sensores HTTP que constantemente monitorean el tiempo de respuesta, sino hay respuesta o se recibe un estado 404, dicho sensor entra en estado de inactividad. La herramienta presenta los <em>bytes</em> de entrada, el tiempo de descarga, la velocidad y el tiempo del primer paquete entrante para cada uno de los sensores; con lo cual, el administrador puede establecer ciertos parámetros a modo de umbral que disparan las alarmas previstas. La herramienta presenta al usuario la posibilidad de descargar informes detallados en formato HTML o en PDF acorde a los parámetros seleccionados.
        .col-12.col-lg-3
          figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img31.png', alt='Texto que describa la imagen')
      
      .row.justify-content-center(titulo="Sensores a partir de transacciones")
        .col-12.col-lg-8.mb-4.mb-md-0
          p Esta imagen presenta algunos de los sensores que ofrece la herramienta permitiendo a los administradores de la red simular una transacción completa en su aplicación <em>web</em> mediante una serie de hasta 10 enlaces que ayudan a comprobar la accesibilidad y el contenido específico de cada una de estas páginas. PRTG ofrece a los usuarios analizar el flujo completo de una aplicación ejecutada en un servidor incluyendo servicios específicos como: monitoreo pasivo de sensores, rendimiento y tiempo de conexión TCP entre otros (PRTG, 2022).
        .col-12.col-lg-3
          figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img30.png', alt='Texto que describa la imagen')

    .bg_22.mb-5.mb-lg-0
      .row.align-items-center.mb-4
        .col-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right") 
          figure
            img.img-t.m_bottom2.m_left3(src='@/assets/curso/tema3/img32.png', alt='')
        .col-12.col-lg-7(data-aos="fade-left") 
          .row
            .col-lg-12.m_left4
              p.m_right2.mb-0.mb-lg-4 En esta sección se presentan algunas herramientas que permiten analizar y monitorear el tráfico y el flujo de red, puesto que la carga en promedio de las redes ha aumentado con el paso del tiempo, convirtiendo sus patrones y comportamiento en impredecibles para los administradores; por lo cual, se hace necesario supervisar y rastrear el tráfico para solucionar y resolver problemas de manera efectiva cuando suceden o antes de que puedan ocurrir, de modo que los servicios y aplicaciones no se detengan por largos períodos de tiempo.
        
      

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
