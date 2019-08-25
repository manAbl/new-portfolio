<template>
  <div class="container mx-auto main-wrapper grid">
    <div class="info-wrapper">
      <h3 class="text-gray uppercase">
        Portfolio
      </h3>
      <h1 class="title xxl font-bold">
        My work
        <span class="text-red">:</span>
      </h1>
      <p class="text-gray font-light text-lg">
        Stuff I have done for fun:
        <br />
        <nuxt-link to="/playground" class="underline text-red-400 font-bold">
          Right here
        </nuxt-link>
      </p>
    </div>
    <ul class="work-links-wrapper flex">
      <li class="work-link">
        <router-link to="/work/agrimanager">
          <work-card :info="work" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import WorkCard from '../../components/WorkCard'

export default {
  head: {
    title: 'My work - Manuel Blanco'
  },
  components: {
    'work-card': WorkCard
  },
  data: () => ({
    work: {
      title: 'Agrimanager',
      type: 'Web Application',
      url: '/work/agrimanager'
    }
  })
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/work.scss';
</style>
