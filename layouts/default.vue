<template>
  <div :class="{ 'bg-gray-100': $route.path === '/work/agrimanager' }">
    <c-menu />
    <c-navbar />
    <nuxt />
    <div class="contact-links">
      <a
        v-for="(socialLink, i) in socialLinks"
        :key="i"
        :href="socialLink.url"
        target="_blank"
      >
        <fa :icon="socialLink.icon" />
      </a>
    </div>
    <div class="contact-icon">
      <button
        aria-describedby="contact-button"
        role="button"
        class="icon icon-sm circle"
        @click="goToContactRoute"
      >
        <fa :icon="['fas', 'inbox']" />
      </button>
    </div>
  </div>
</template>
<script>
import NavegationBar from '../components/NavegationBar'
import { socialLinks } from '../config'
import Menu from '../components/Menu'

export default {
  components: {
    'c-navbar': NavegationBar,
    'c-menu': Menu
  },
  data: () => ({
    socialLinks
  }),
  methods: {
    goToContactRoute() {
      if (this.$route !== '/contact') {
        this.$router.push('/contact')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/layouts/default.scss';
</style>
