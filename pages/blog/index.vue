<template>
  <div class="container mx-auto bg-white grid blog-variant">
    <div class="header">
      <h1 class="title lg text-center">Articles</h1>
      <div class="tags-wrapper">
        <div
          v-for="tag in tags"
          :key="tag"
          class="items-center transition cursor-pointer flex justify-center rounded-lg w-20 h-8 m-4 text-base font-semibold bg-gray-300 hover:bg-gray-400"
          @click="filterPostsByTag(tag)"
        >
          {{ tag }}
        </div>
      </div>
      <div class="searcher">
        <form class="w-full">
          <div
            class="flex flex-grow-0 items-center border-b border-b-2 border-blue-300 py-2 active:border-blue-600"
          >
            <input
              class="appearance-none bg-white border-blue-300 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Type here to filter posts..."
              aria-label="Search for a post"
            />
            <button
              class="transition w-40 flex-shrink-0 bg-blue-300 hover:bg-blue-500 border-blue-200 hover:border-blue-500 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Filter posts
            </button>
          </div>
        </form>
      </div>
    </div>

    <div
      class="right flex items-center flex-wrap flex-row content-start justify-center"
    >
      <div
        v-for="(card, i) in posts"
        :key="i"
        class="box-post m-2 hover:shadow cursor-pointer p-4 border-solid border border-gray-200"
        @click="$router.push(card.url)"
      >
        <div
          class="mb-4 w-full h-48 bg-center bg-no-repeat bg-cover"
          style="background-image: url('/bundo.jpg')"
        />
        <div
          class="border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
        >
          <div class="mb-8 mt-10">
            <div class="text-gray-900 title md">{{ card.title }}</div>
            <p class="text-gray-700 text-base">{{ card.description }}</p>
          </div>
          <div class="flex items-center">
            <div class="text-sm">
              <p class="text-gray-600">{{ card.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Scene from 'scenejs'

export default {
  head: {
    title: 'Blog - Manuel Blanco'
  },
  data: () => ({
    tags: ['All', 'Code', 'Design', 'Personal', 'Popular', 'Tools'],
    currentTab: 'All',
    posts: [
      {
        title: 'Writing your first bash script',
        description:
          'Bash scripting is an extremely useful and powerful part of system administration and development. It might seem scary the first time you do it as it was for me but bear with me as this is not meant to be an extensive guide to bash scripting, but just a straightforward guide to getting started with making your first script and learning some basic bash syntax.',
        date: 'Aug 28',
        url: '/blog/Writing-your-first-bash-script'
      }
    ]
  }),
  mounted() {
    this.enterCards()
  },
  methods: {
    filterPostsByTag(tag) {
      this.currentTab = tag
    },
    enterCards() {
      new Scene(
        {
          '.box-post': i => ({
            0: {
              opacity: 0,
              transform: {
                translateY: '100%'
              }
            },
            1: {
              opacity: 1,
              transform: {
                translateY: '0%'
              }
            },
            options: {
              delay: i * 0.2
            }
          })
        },
        {
          selector: true,
          easing: 'ease-out',
          direction: 'alternate'
        }
      ).play()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/pages/blog.scss';
</style>
