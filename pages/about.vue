<template>
  <div class="w-fit-full flex column justify-content-center align-items-center">
    <div class="inner-wrapper flex row nowrap">
      <div class="svg-wrapper">
        <about-svg id="about-svg" />
      </div>
      <div class="description p7">
        <header class="w-fit-full">
          <h3 class="title xl text-left">
            About me:
          </h3>
        </header>
        <p class="inline-block text-2xl m0 p0 text-justify">
          Born and raised in Venezuela. Since November 2018 I'm living in
          Medellín, Colombia. I took interest in software development
          {{ years }} years ago when I wanted to create my own personal Tumblr
          profile on raw HTML/CSS and ever since I first tried coding I
          instantly loved it and the passion for creating things on my own has
          only grown.
        </p>
      </div>
    </div>
    <i-map class="map w-fit-full" />
  </div>
</template>

<script>
export default {
  components: {
    'i-map': () => import('../components/Map'),
    'about-svg': () => import('../components/AboutSvg')
  },
  head: {
    title: 'About',
    head: {
      link: [
        {
          src: 'https://api.tiles.mapbox.com/mapbox-gl-js/v1.3.1/mapbox-gl.css',
          rel: 'stylesheet'
        }
      ]
    }
  },
  computed: {
    years() {
      const currentYear = new Date().getFullYear()
      return currentYear - 2017
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/pages/about.scss';
</style>
