<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1(data-aos="fade-right") Introducción

    p.mb-4 Le damos la bienvenida al componente formativo denominado “Artefactos de seguridad para el monitoreo de seguridad orientada a aplicaciones web”, el cual hace parte del programa de formación Técnico en “Seguridad de aplicaciones web”, para lo cual se invita a observar el siguiente video:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/B4b2zI6DSFk?si=0QKRxgJXdUVHHJXm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Artefactos de seguridad para el monitoreo de seguridad orientada a aplicaciones web

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
