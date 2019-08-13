<template>
  <div class="container mx-auto px-4">
    <nav role="main-navegation">
      <div class="inner-wrapper">
        <nuxt-link id="logo" to="/" exact-active-class="anlk">
          <img src="/logo-2.png" alt="logo-image" />
        </nuxt-link>
        <div
          class="hamburguer"
          :class="{ active: isMenuOpen }"
          @click="$emit('toggle-menu')"
        >
          <div class="tile one" />
          <div class="tile two" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MenuOpener',
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/menu-opener.scss';
</style>
