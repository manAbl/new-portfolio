<template>
  <div class="container mx-auto px-4">
    <nav role="main-navegation">
      <div class="inner-wrapper">
        <nuxt-link id="logo" to="/" exact-active-class="anlk">
          <img src="/logo-2.png" alt="logo-image" />
        </nuxt-link>
        <menu-opener :class="{ active: isMenuOpen }" @click="toggleMenu" />
      </div>
      <transition :css="false" @enter="enterEl" @leave="leaveEl">
        <ul v-show="isMenuOpen" class="menu-wrapper">
          <div class="information container">
            <h3 class="title md">
              Contact Details:
            </h3>
            <a href="mailto:manuel.22.lamas@gmail.com">
              manuel.22.lamas@gmail.com
            </a>
            <a href="tel: +57 305 3648811">
              +57 305 3648811
            </a>
          </div>
          <div class="links-wrapper container">
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
        </ul>
      </transition>
    </nav>
  </div>
</template>

<script>
import Scene from 'scenejs'
import { links } from '../config'
import MenuOpener from './MenuOpener'

export default {
  name: 'NavegationMenu',
  components: {
    'menu-opener': MenuOpener
  },
  data: () => ({
    links,
    isMenuOpen: false
  }),
  computed: {
    menuOpenerStyles() {
      if (this.isMenuOpen) {
        return 'background: white; font-size: 20px;'
      } else return ''
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    enterEl(el, done) {
      // eslint-disable-next-line
      const scene = new Scene({
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
          easing: 'ease-in-out'
        }
      ).playCSS()
    },
    leaveEl(el, done) {
      // eslint-disable-next-line
      const scene = new Scene({
          '.menu-wrapper': {
            0: {
              transform: 'translateY(0)',
              opacity: 1
            },
            1: {
              transform: 'translateY(-100%)',
              opacity: 0
            },
            2: 1,
            options: {
              delay: 0.2
            }
          }
        },
        {
          playSpeed: 2,
          selector: true,
          easing: 'ease'
        }
      ).playCSS()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/navegation-menu.scss';
</style>
