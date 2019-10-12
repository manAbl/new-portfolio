<template>
  <div class="container mx-auto grid hero">
    <div class="container description">
      <h1 class="title lg">Manuel Blanco</h1>
      <p class="subtitle text-2xl font-thin">
        Software developer passionate about coding, VR, writing && did I said
        coding?
      </p>
    </div>
    <div class="svg-wrapper">
      <c-svg name="dashboard" />
    </div>
  </div>
</template>

<script>
import DashboardSVG from '../components/DashboardSVG'

export default {
  components: {
    'c-svg': DashboardSVG
  },
  head: {
    title: 'Vue Developer - Manuel Blanco - Colombia'
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/pages/main-page.scss';
</style>
