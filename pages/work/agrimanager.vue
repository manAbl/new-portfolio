<template>
  <div class="main-wrapper">
    <header class="text-center font-medium header-wrapper">
      <nuxt-link to="/work" class="hover:underline font-base"
        >My work</nuxt-link
      >
      <div class="divider small bg-gray-500" />
      <span class="font-sm">Agrimanager</span>
    </header>

    <div class="grid">
      <div class="left">
        <div class="information">
          <h1 class="title xl">
            Agrimanager
            <br />
            <small class="text-red">Web App</small>
          </h1>
          <button
            role="button"
            class="more-info transition bg-black text-white p-6 rounded margin-top-2rem"
          >
            More Info
            <fa
              :icon="['fas', 'arrow-down']"
              class="icon-md transition margin-left-1rem text-gray-600"
            />
          </button>
        </div>
      </div>

      <div class="right relative w-full h-full">
        <img src="/keyboard.jpg" class="absolute image-description" />
      </div>
    </div>

    <main class="bg-white">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolorum.
        Similique tempore, aliquam odit ducimus iste consequuntur eos? Unde
        voluptatem consequuntur doloribus debitis deleniti tempora omnis velit
        aliquam perspiciatis tempore!
      </p>
    </main>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Agrimanager - Manuel Blanco'
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/pages/work-description.scss';
</style>
