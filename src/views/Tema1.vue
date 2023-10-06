<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1(data-aos="fade-right") Seguridad en Aplicaciones Web

    .bg_fondo1
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8.order-last.order-lg-first(data-aos="fade-right")
          p Las últimas décadas presenciaron la masificación de internet y los dispositivos inteligentes, trayendo consigo el estallido de las aplicaciones sociales y la era de la conexión total, esta revolución, generó un sinnúmero de acontecimientos que modificaron la forma como las personas ven los dispositivos o herramientas tecnológicas; puesto que, ahora se le da mayor prioridad a las cuentas, usuarios y contactos por encima del <em>hardware</em>, dado que este, es fácil de cambiar o mejorar por un nuevo dispositivo.
          p Esto indica que para las personas el activo más importante es su información personal y esta premisa es un común denominador que se extiende a las organizaciones y empresas, puesto que, dicha información es sensible y vital para el buen desarrollo de las actividades diarias, de los procesos pertinentes y en la prestación de sus servicios. Esto claramente indica la innegable dependencia de la tecnología y del activo informático, siendo los soportes claros de los sistemas de una organización. No obstante, no ha sido siempre de esta manera.
        .col-lg-4.mb-4.mb-lg-0.order-first.order-lg-last(data-aos="fade-left")
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema1/img02.png', alt='')

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema1/img03.svg', alt='')
        .col-lg-11(data-aos="fade-right")
          p Años atrás para las empresas era más sencillo proteger sus activos, ya que las grandes plataformas de datos se encontraban aisladas e independientes de conectividad a la red, usando arquitecturas centralizadas con terminales con capacidades de procesamiento muy limitadas. Empero, actualmente, la diversificación de las redes de telecomunicaciones y la masiva creación de plataformas externas hacen que la información organizacional quede cada vez más expuesta a todas las ciberamenazas y ataques informáticos (V. Mouli and K. P. Jevitha, 2016), en vista de que cualquier dispositivo conectado a internet es un foco sensible al ataque por las latentes vulnerabilidades, como un diseño inicial inadecuado, la ejecución de programas que pueden presentar rutinas de código realizadas con desidia y descuido, escasa implementación de medidas de control de acceso, falta de validación y verificación de datos de ingreso o inclusive el riesgo más latente originado por el error humano que es la ingeniería social (M. Seyyar, F. Çatak and E. Gül, 2018).

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img04.png')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            p.mb-0 En (OWASP. Top Ten, 2022) es posible apreciar con mayor claridad las amenazas y vulnerabilidades más importantes a día de hoy para las organizaciones y sus aplicaciones web; a través del esfuerzo colaborativo global conocido como el <b>Proyecto Abierto de Seguridad en Aplicaciones Web</b> (OWASP, <em>Open Web Application Security Project</em>), que busca concientizar a los equipos de desarrollo y los gerentes de proyectos la importancia de proteger sus activos informáticos con la generación de procesos que estimen el nivel de seguridad de sus sistemas, de manera que sea posible tomar decisiones y medidas preventivas ante una ciberamenaza o una eventualidad.

    .bg_1.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-auto(data-aos="fade-left")
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema1/img05.svg', alt='')
        .col-10.col-md-12.col-lg-10(data-aos="fade-right")
          p.text-bold Es así como:
          p.m-0 En toda entidad las políticas e instrumentos de ciberseguridad son de carácter obligatorio y deben garantizar que se valoren los riesgos alineados con las tecnologías como amenazas reales a los procesos y servicios de la compañía, sin desestimar su impacto o sus consecuencias a corto, mediano y largo plazo para los objetivos trazados por la gerencia. Para ello, las organizaciones deben contar con procedimientos y personal especializado encargados de mitigar y reaccionar a las afectaciones que son producto de los riesgos en ciberseguridad.

    p.mb-4 El área de ciberseguridad, como eje transversal a la empresa debe crear o fortalecer los procesos de control y protección a todas las demás áreas de la organización, a fin de garantizar integridad, confidencialidad y la seguridad de su información y la de sus clientes. <b>(A. Pineda, John A. Bohada y M. L. Pineda, 2018).</b>

    .row.mb-5(data-aos="fade-right")
      .col-lg-5.col-xl-6.col-xxl-5
        .bg_2.p-2
          p.text-bold.m-0 Plan Estratégico de Seguridad en Aplicaciones Web

    .bg_3.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-auto(data-aos="fade-left")
          figure
            img.img-t.mx-auto(src='@/assets/curso/tema1/img06.svg', alt='')
        .col-10.col-md-12.col-lg-10(data-aos="fade-right")
          p En #[span.text-bold.color1 (R. Rodriguez, H. Alberto, 2019)] se describe el concepto de estrategia corporativa como: #[strong “el patrón de decisiones en una compañía, que determina y revela sus objetivos, propósitos o metas; que genera las principales políticas y planes para alcanzar dichas metas y define el rango de negocio que debe perseguir la compañía, el tipo de organización económica y humana que es o pretende ser y la naturaleza de la contribución tanto económica, como no económica, que pretende hacer a sus accionistas, empleados, clientes y comunidades”].Y en parte, esta idea puede ser transferida al contexto de un plan estratégico de seguridad en aplicaciones web.

    .row.justify-content-center.mb-5
      .col-lg-11.ms-3.ms-lg-5.ps-0.ps-lg-4
        .bg_4.p-5
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b El objetivo de un plan estratégico de seguridad en aplicaciones web], estriba en la definición específica de una ruta de trabajo que le permita a la organización llegar a la obtención de unas métricas reales capaces de establecer el rendimiento de manera cuantitativa; con el objetivo de lograr que las aplicaciones web lleguen a un estado de madurez y nivel deseado en materia de seguridad.
            .col-lg-3(data-aos="fade-left")
              figure
                img.img-t.mx-auto(src='@/assets/curso/tema1/img08.svg', alt='')

    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.mx-auto(src='@/assets/curso/tema1/img09.png', alt='')
      .col-lg-8(data-aos="fade-right")
        p El trazado de una estrategia debe estar definido y alineado a un alto nivel con los objetivos de la organización y la operación del negocio. Por tanto, las pautas que se presentan a continuación son de común acuerdo entre la alta dirección y el equipo TI o los encargados del área de ciberseguridad; determinando el nivel de verificación de seguridad de aplicaciones al que desean llevar el sistema. Para ello, esta estrategia establece la base del plan de acción a ejecutar, permitiendo llevar el proceso de seguridad de las aplicaciones web desde el nivel actual hasta el nivel de madurez deseado. Dentro del plan de acción es apremiante conocer el personal y los recursos <em>hardware</em> y <em>software</em> disponibles, además de identificar las limitaciones existentes a nivel de conocimiento, posibilidad de adquisiciones, alcance y considerando un apartado para los requerimientos legales y regulatorios. Además, el plan estratégico debe establecer mecanismos de monitoreo y métricas bien definidas para determinar al final si el cambio en el nivel de verificación representa un éxito o un fracaso en el proceso.
        p El plan estratégico de seguridad en aplicaciones web debe establecer como mínimo los siguientes elementos abordados a continuación:

    .row.justify-content-center.mb-5
      .col-lg-10
        .row
          .col-lg-6(data-aos="fade-right")
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.color2.border.border-primary
                .p-4
                  p.m-0 <b>Un objetivo:</b> lo que se busca alcanzar a través de la ejecución de la estrategia.

          .col-lg-6(data-aos="fade-left")
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img11.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.color2.border.border-primary
                .p-4
                  p.m-0 <b>Indicadores:</b> una forma de medir y proporcionar una evaluación a los resultados.

          .col-lg-6(data-aos="fade-right")
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img12.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.color2.border.border-primary
                .p-4
                  p.m-0 <b>Acciones:</b> actividades a ejecutar para cumplir con lo definido en la estrategia.

          .col-lg-6(data-aos="fade-left")
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img13.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.color2.border.border-primary
                .p-4
                  p.m-0 <b>Métricas:</b> el rendimiento real medido por los datos de manera cuantitativa.

          .col-lg-6(data-aos="fade-right")
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img14.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.color2.border.border-primary
                .p-3
                  p.m-0 <b>Resultados:</b> lo que se espera obtener de esas acciones que permiten cumplir con el objetivo propuesto.

          .col-lg-6(data-aos="fade-left")
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img15.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.color2.border.border-primary
                .p-4
                  p.m-0 <b>Niveles:</b> el estado del sistema antes y después de la ejecución de la estrategia.

          .col-lg-6(data-aos="fade-right")
            .tarjeta-avatar-b.mb-4
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema1/img16.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul.color2.border.border-primary
                .p-4
                  p.m-0 <b>Tiempos:</b> periodo en el cual se debe ejecutar la estrategia.




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
