<template>
  <div class="container mx-auto main-wrapper grid">
    <div class="info-wrapper">
      <h3 class="text-gray uppercase">
        Portfolio
      </h3>
      <h1 class="title xxl font-bold">
        My work
        <span>:</span>
      </h1>
      <p class="text-gray font-light text-lg">
        Stuff I have done for fun:
        <br />
        <nuxt-link to="/playground" class="underline text-red-400 font-bold">
          Right here
        </nuxt-link>
      </p>
    </div>
    <ul class="work-links-wrapper flex">
      <li class="work-link">
        <router-link to="/work/agrimanager">
          <div class="card flex cursor-pointer">
            <img class="image" src="/pavel.jpg" />
            <!-- :style="{ backgroundImage: `url(${item.url})` }" -->
            <div class="description text-left">
              <h1 class="title text-base-color lg font-medium">
                Agrimanager
              </h1>
              <h3 class="title text-red font-semibold">
                Web Application
              </h3>
            </div>
            <footer role="card-footer" aria-describedby="card-footer">
              <fa :icon="['fas', 'arrow-right']" class="icon-md transition" />
              <p class="text-gray transition">
                View
              </p>
            </footer>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  head: {
    title: 'My work - Manuel Blanco'
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/pages/work.scss';
</style>
