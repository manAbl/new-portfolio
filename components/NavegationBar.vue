<template>
  <nav class="nav-main-wrapper absolute w-full" role="main-navegation">
    <nuxt-link id="logo" to="/" exact-active-class="anlk">
      <img src="/logo-2.png" alt="logo-image" />
    </nuxt-link>
    <menu-opener :is-menu-open="isMenuOpen" @toggle-menu="toggleMenu" />
  </nav>
</template>

<script>
import debounce from '../helpers/debounce'
import MenuOpener from './MenuOpener'

export default {
  name: 'NavegationBar',
  components: {
    'menu-opener': MenuOpener
  },
  computed: {
    isMenuOpen() {
      return this.$store.state.isMenuOpen
    }
  },
  methods: {
    toggleMenu: debounce(function() {
      this.$store.dispatch('toggleMenu')
    }, 120)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/navegation-menu.scss';
</style>
