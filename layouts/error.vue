<template>
  <div class="error-page grid my-16 p-6">
    <img
      src="/empty_404.svg"
      alt="404"
      title="Page not found"
      class="svg-not-found"
    />
    <div class="button-wrapper fit-content p-4">
      <p>
        Woops! Seems like there is nothing here ...
      </p>
      <nuxt-link class="hover:underline" to="/">
        Take me home
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Page not found - Manuel Blanco'
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/layouts/404.scss';
</style>
