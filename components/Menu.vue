<template>
  <transition
    :css="false"
    @enter="enterMenu"
    @leave="leaveMenu"
    @before-leave="beforeLeaveMenu"
  >
    <ul v-if="isMenuOpen" class="menu-wrapper">
      <div class="svg-wrapper">
        <svg
          id="line-svg"
          xmlns:dc="http://purl.org/dc/elements/1.1/"
          xmlns:cc="http://creativecommons.org/ns#"
          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          xmlns:svg="http://www.w3.org/2000/svg"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="120mm"
          viewBox="0 -12 290 292"
        >
          <g
            id="layer1"
            inkscape:label="Capa 1"
            inkscape:groupmode="layer"
            transform="translate(0,-87)"
          >
            <path
              id="path847"
              style="fill:#241f1c;stroke:#000000;stroke-width: 0.1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0"
              d="m 107.83664,84.955712 c 0,0 -107.87726152,-14.10211 -68.14394,139.179218 12.714331,49.04874 25.652831,22.05518 48.421755,24.14095 22.605645,2.0708 1.85055,66.25915 41.493085,59.86519 39.64254,-6.39396 26.88006,15.85757 47.34072,26.08791 20.46067,10.23033 49.54765,-30.34781 40.16204,-62.587 -10.36101,-35.58968 66.892,-79.11025 66.892,-79.11025 C 320.93094,164.47671 260.30893,68.557535 107.83664,84.955712 Z"
            />
          </g>
        </svg>
      </div>
      <div class="container">
        <div class="information">
          <h3 class="title lg font-bold">
            Contact Details:
          </h3>
          <a
            href="mailto:manuel.22.lamas@gmail.com"
            class="font-semibold text-md"
          >
            manuel.22.lamas@gmail.com
          </a>
          <a href="tel: +57 305 3648811">
            +57 305 3648811
          </a>
        </div>
        <div class="links-wrapper">
          <li
            v-for="(link, i) in links"
            :key="i"
            class="mr-6 link lg"
            @click="toggleMenu"
          >
            <nuxt-link
              class="text-blue-500 hover:text-blue-800"
              :to="link.path"
              exact
            >
              {{ link.text }}
            </nuxt-link>
          </li>
        </div>
      </div>
    </ul>
  </transition>
</template>

<script>
import Scene from 'scenejs'
import { links } from '../config'

export default {
  name: 'Menu',
  data: () => ({
    links
  }),
  computed: {
    isMenuOpen() {
      return this.$store.state.isMenuOpen
    }
  },
  mounted() {
    document.addEventListener('keydown', this.handleClose)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleClose)
  },
  methods: {
    handleClose(e) {
      if (e.keyCode === 27 && this.$store.state.isMenuOpen) {
        this.toggleMenu()
      }
    },
    toggleMenu(bool) {
      this.$store.dispatch('toggleMenu')
    },
    async animateSVGLeave() {
      await new Scene(
        {
          '#line-svg': {
            0: {
              transform:
                'translateX(150%) translateY(-32%) rotate(-330deg) scale(5)'
            },
            1: {
              transform:
                'translateX(150%) translateY(-32%) rotate(-330deg) scale(12)'
            }
          }
        },
        {
          playSpeed: 1.8,
          selector: true,
          easing: 'cubic-bezier(0.74, 0, 0.42, 1.47)',
          direction: 'alternate',
          fillMode: 'forwards'
        }
      ).play()
    },
    async animateSVGLeaveAlternative() {
      await new Scene(
        {
          '#line-svg': {
            0: {
              transform:
                'translateX(150%) translateY(-32%) rotate(-330deg) scale(5)'
            },
            1: {
              transform:
                'translateX(150%) translateY(-32%) rotate(-330deg) scale(1)'
            }
          }
        },
        {
          playSpeed: 1.8,
          selector: true,
          easing: 'cubic-bezier(0.74, 0, 0.42, 1.47)',
          direction: 'alternate',
          fillMode: 'forwards'
        }
      ).play()
    },
    animateSVGEnter() {
      new Scene(
        {
          '#line-svg': {
            0: {
              transform:
                'translateX(150%) translateY(-32%) rotate(-330deg) scale(1)'
            },
            1: {
              transform:
                'translateX(150%) translateY(-32%) rotate(-330deg) scale(5)'
            },
            options: {
              delay: 0.6
            }
          }
        },
        {
          playSpeed: 1.2,
          selector: true,
          easing: 'cubic-bezier(0.74, 0, 0.42, 1.47)',
          direction: 'alternate'
        }
      ).play()
    },
    enterMenu(el, done) {
      this.animateSVGEnter()
      new Scene(
        {
          '.menu-wrapper': {
            0: {
              transform: 'translateY(-100%)',
              opacity: 0
            },
            1: {
              transform: 'translateY(0)',
              opacity: 1
            },
            2: 1,
            options: {
              delay: 0.1
            }
          }
        },
        {
          playSpeed: 2,
          selector: true,
          easing: 'ease-in'
        }
      ).play()
    },
    async beforeLeaveMenu(el) {
      await this.animateSVGLeaveAlternative()
    },
    async leaveMenu(el, done) {
      const animation = await new Scene(
        {
          '.menu-wrapper': {
            0: {
              opacity: 1,
              transform: 'translateY(0)'
            },
            1: {
              opacity: 0,
              transform: 'translateY(-100%)'
            },
            2: 1,
            options: {
              delay: 1.2
            }
          }
        },
        {
          playSpeed: 2.6,
          selector: true,
          easing: 'cubic-bezier(0.74, 0, 0.42, 1.47)'
        }
      ).play()

      if (animation.ended) {
        done()
      }
    },
    enterLink() {
      new Scene(
        {
          '.link': i => ({
            0: {
              transform: {
                translateY: '100%'
              }
            },
            1: {
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
          easing: 'ease',
          selector: true,
          direction: 'alternate',
          iterationCount: 1
        }
      ).playCSS()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/menu.scss';
</style>
