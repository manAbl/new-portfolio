<template>
  <div>
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
  </div>
</template>
<script>
import NavegationMenu from '../components/NavegationMenu'
import { socialLinks } from '../config'

export default {
  components: {
    'c-navbar': NavegationMenu
  },
  data: () => ({
    socialLinks
  })
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/layouts/default.scss';
</style>
