<template>
  <div
    class="carousel-wrapper transition"
    :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')' }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    dataLength: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    windowSize: 3,
    currentOffset: 0,
    paginationFactor: 520
  }),
  computed: {
    atEndOfList() {
      // eslint-disable-next-line
      let result = this.currentOffset <= (this.paginationFactor * -1)
        * (this.dataLength + 0.5 - this.windowSize)
      this.$emit('end-tale', result)
      return result
    },
    atHeadOfList() {
      const result = this.currentOffset === 0
      this.$emit('end-head', result)
      return result
    }
  },
  methods: {
    moveCarousel(direction) {
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor
      }
    }
  }
}
</script>
