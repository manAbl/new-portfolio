<template>
  <div>
    <c-navbar />
    <nuxt />
  </div>
</template>
<script>
import NavegationMenu from '../components/NavegationMenu'

export default {
  components: {
    'c-navbar': NavegationMenu
  }
}
</script>

<style></style>
