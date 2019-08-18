<template>
  <div
    class="hamburguer"
    :class="{ active: isMenuOpen }"
    @click="$emit('toggle-menu')"
  >
    <div class="tile one" />
    <div class="tile two" />
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
