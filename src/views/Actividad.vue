<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/Arrastrar_Soltar.svg", alt="")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Relacionar conceptos
        p.mb-4 #[b Objetivo] Relación de conceptos de artefactos de seguridad para el monitoreo de seguridad orientada a aplicaciones <em>web</em>.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Relacionar términos
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/Actividad1/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/Falso_Verdadero.svg", alt="")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Verdadero y Falso
        p.mb-4 #[b Objetivo] Identificación de conceptos de artefactos de seguridad para el monitoreo de seguridad orientada a aplicaciones <em>web</em>.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Cuestionario
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/Actividad2/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
