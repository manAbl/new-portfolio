<template>
  <div class="inline-block">
    <nuxt-link
      v-if="!mail"
      :to="options.link"
      class="button-link border-gray-100 text-center font-semibold"
    >
      {{ options.label }}
      <fa
        :icon="options.icon"
        class="transition text-gray-400 icon margin-left-1rem"
      />
    </nuxt-link>
    <a
      v-else
      :href="options.link"
      :class="{ inverse: inverse }"
      class="button-link border-gray-100 text-center font-semibold"
    >
      {{ options.label }}
      <fa
        :icon="options.icon"
        class="icon margin-left-1rem transition inline-block"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      required: true
    },
    mail: {
      type: Boolean,
      default: () => false
    },
    inverse: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/button-outline.scss';
</style>
