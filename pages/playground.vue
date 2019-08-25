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

    <div class="actions-wrapper">
      <button class="btn next" role="next-action">
        <fa :icon="['fas', 'arrow-left']" class="icon" />
      </button>
      <button class="btn previous" role="previous-action">
        <fa :icon="['fas', 'arrow-right']" class="icon" />
      </button>
    </div>

    <div class="cards-wrapper">
      <div class="proxy-wrapper">
        <div
          v-for="(item, i) in projects"
          :key="i"
          class="project-card transition"
        >
          <p
            class="codepen"
            data-height="500"
            data-theme-id="dark"
            data-default-tab="result"
            data-user="manAbl"
            :data-slug-hash="item.hash"
            style="height: 100%; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
            :data-pen-title="item.title"
          >
            <span>
              See the Pen
              <a :href="item.pen">{{ item.title }}</a>
              by manAbl(
              <a href="https://codepen.io/manAbl">@manAbl</a>
              ) on <a href="https://codepen.io">CodePen</a>.
            </span>
          </p>
          <script async src="https://static.codepen.io/assets/embed/ei.js" />
        </div>
      </div>
    </div>

    <div id="work-reminder">
      <div class="title-wrapper inline-flex">
        <h1 class="title lg font-bold font-black">Recent work</h1>
        <btn-outline :options="buttonOutline" />
      </div>
      <work-card :info="work" class="work-card" />
    </div>
  </div>
</template>

<script>
import Scene from 'scenejs'
import WorkCard from '../components/WorkCard'
import ButtonOutline from '../components/ButtonOutline'
import projects from '../config/projects'

export default {
  components: {
    'work-card': WorkCard,
    'btn-outline': ButtonOutline
  },
  head: {
    title: 'Playground - Manuel Blanco'
  },
  data: () => ({
    projects,
    buttonOutline: {
      icon: ['fas', 'arrow-right'],
      link: '/work',
      label: 'All work'
    },
    work: {
      title: 'Agrimanager',
      type: 'Web Application',
      url: '/work/agrimanager'
    }
  }),
  mounted() {
    this.enterCards()
    this.createObserver()
  },
  methods: {
    enterCards() {
      new Scene(
        {
          '.project-card': i => ({
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
    },
    createObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
      }

      const handleObserver = (entries, observer) => {
        entries.forEach(entry => console.log(entry))
      }

      // eslint-disable-next-line
      const observer = new IntersectionObserver(handleObserver, options)
      observer.observe(document.querySelector('.proxy-wrapper'))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/pages/playground';
</style>
