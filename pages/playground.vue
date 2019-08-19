<template>
  <div class="container mx-auto grid">
    <svg
      id="line-bg-svg"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      width="1122.5197"
      height="793.70081"
      viewBox="0 0 296.99998 210.00001"
    >
      <g transform="translate(0,-86.999992)">
        <path
          style="fill:none;stroke:#ecebeb;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
          d="m 104.43465,88.556951 c 0,0 52.43046,153.881269 7.24649,107.844759 -45.183973,-46.03649 -96.761904,-47.74155 -67.349695,-2.98384 29.412207,44.75771 46.889029,81.84267 7.246485,75.02244 -39.642541,-6.82022 -61.3819994,-11.50912 -61.3819994,-11.50912 v 0 -1.27879"
        />
      </g>
    </svg>
    <div class="description">
      <h2 class="text-gray text-base">
        Just for fun
      </h2>
      <h1 class="text-5xl text-black font-bold">
        Playground <span class="text-red">:</span>
      </h1>
    </div>
    <div class="cards-wrapper">
      <div v-for="(item, i) in projects" :key="i" class="card transition">
        <img :src="item" class="project-img" />
      </div>
    </div>

    <div id="work-reminder">
      <div class="title-wrapper inline-flex">
        <h1 class="title lg font-bold font-black">Recent work</h1>
        <nuxt-link
          to="/work"
          class="button-link border-gray-100 text-center font-semibold"
        >
          All work
          <fa
            :icon="['fas', 'arrow-right']"
            class="transition text-gray-400 icon-halo"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Scene from 'scenejs'

export default {
  head: {
    title: 'Playground - Manuel Blanco'
  },
  data: () => ({
    projects: ['/klea.jpg', '/pavel.jpg', 'keyboard-2.jpg', 'keyboard.jpg']
  }),
  mounted() {
    this.enterCards()
  },
  methods: {
    enterCards() {
      new Scene(
        {
          '.card': i => ({
            0: {
              opacity: 0,
              transform: {
                translateY: '100%'
              }
            },
            1: {
              opacity: 1,
              transform: {
                translateY: '0%'
              }
            },
            options: {
              delay: i * 0.2
            }
          })
        },
        {
          easing: 'ease-in-out',
          selector: true,
          direction: 'alternate'
        }
      ).playCSS()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/pages/playground';
</style>
