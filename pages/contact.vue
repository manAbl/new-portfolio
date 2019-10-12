<template>
  <div class="main-wrapper no-padding">
    <div class="left">
      <h3 class="text-gray font-thin uppercase">Contact</h3>
      <h1 class="title xl">
        Get in touch
        <span class="text-red">:</span>
      </h1>
      <div class="information">
        <h3 class="text-base text-red">Contact Details:</h3>
        <a
          href="mailto:manuel.22.lamas@gmail.com"
          class="font-thin text-md block margin1 hover:underline"
          >manuel.22.lamas@gmail.com</a
        >
        <a
          href="tel: +57 305 3648811"
          class="font-thin text-md block margin-top-half-rem hover:underline"
          >+57 305 3648811</a
        >
        <footer>© {{ year }} Manuel Blanco</footer>
      </div>
    </div>
    <div class="right">
      <div id="backgroundBlack" class="absolute" />
      <!-- <img src="https://media.giphy.com/media/3o7TKo69Ajc6LuzOs8/giphy.gif" /> -->
      <div id="gifWrapper" class="text-center">
        <img src="https://media.giphy.com/media/3o7bukPWLMVsRz38J2/giphy.gif" />
        <h1 class="title lg text-white">
          Say hi.
          <span class="text-red">Like this guy.</span>
        </h1>
        <btn-outline
          class="margin-top-2rem"
          :options="buttonOutline"
          mail
          inverse
        />
      </div>
    </div>
  </div>
</template>

<script>
import Scene from 'scenejs'
import ButtonOutline from '../components/ButtonOutline'

export default {
  head: {
    title: 'Contact - Manuel Blanco'
  },
  components: {
    'btn-outline': ButtonOutline
  },
  data: () => ({
    buttonOutline: {
      icon: ['fas', 'arrow-right'],
      link: 'mailto:manuel.22.lamas@gmail.com',
      label: 'manuel.22.lamas@gmail.com'
    }
  }),
  computed: {
    year() {
      // eslint-disable-next-line
      const d = new Date()
      return d.getFullYear()
    }
  },
  mounted() {
    this.enterAnimation()
  },
  methods: {
    enterAnimation() {
      const r = new Scene(
        {
          '#backgroundBlack': i => ({
            0: {
              opacity: 0,
              transform: {
                translateY: '-200%'
              }
            },
            1: {
              opacity: 1,
              transform: {
                translateY: '0%'
              }
            }
          })
        },
        {
          easing: 'ease',
          selector: true,
          direction: 'forwards'
        }
      ).playCSS()
      if (r.isEnded) this.giftEntrance()
    },
    giftEntrance() {
      new Scene(
        {
          '#gifWrapper': i => ({
            0: {
              opacity: 0
            },
            1: {
              opacity: 1,
              display: 'block'
            }
          })
        },
        {
          delay: 1,
          easing: 'ease',
          selector: true,
          direction: 'forwards'
        }
      ).playCSS()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/pages/contact.scss';
</style>
