<template>
  <div class="hamburguer" @click="$emit('click')">
    <span />
  </div>
</template>

<script>
export default {
  name: 'MenuOpener'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/components/menu-opener.scss';
</style>
