<template>
  <div class="container mx-auto px-4">
    <nav role="main-navegation">
      <div class="inner-wrapper">
        <div id="logo">
          MB
        </div>
        <span class="md-icon hover-bg-blue icon-sm">
          <fa :icon="['fas', 'grip-lines']" />
        </span>
      </div>
      <ul class="flex flex-row nav-items-wrapper hidden">
        <li v-for="(link, i) in links" :key="i" class="mr-6">
          <nuxt-link
            :to="link.path"
            class="text-blue-500 hover:text-blue-800"
            exact
          >
            {{ link.text }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { links } from '../config'

export default {
  name: 'NavegationMenu',
  data: () => ({
    links
  })
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/navegation-menu.scss';
</style>
