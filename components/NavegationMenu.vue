<template>
  <div class="nav-main-wrapper">
    <menu-opener
      :is-menu-open="isMenuOpen"
      @toggle-menu="isMenuOpen = !isMenuOpen"
    />
    <transition :css="false" @enter="enterMenu" @leave="leaveMenu">
      <ul v-show="isMenuOpen" class="menu-wrapper">
        <div class="svg-wrapper">
          <svg
            id="line-svg"
            xmlns:dc="http://purl.org/dc/elements/1.1/"
            xmlns:cc="http://creativecommons.org/ns#"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns:svg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            width="100%"
            height="120mm"
            viewBox="0 -12 290 292"
            inkscape:version="0.92.4 (5da689c313, 2019-01-14)"
            sodipodi:docname="path.svg"
          >
            <defs id="defs2" />
            <sodipodi:namedview
              id="base"
              pagecolor="#ffffff"
              bordercolor="#666666"
              borderopacity="1.0"
              inkscape:pageopacity="0.0"
              inkscape:pageshadow="2"
              inkscape:zoom="0.55940476"
              inkscape:cx="490.03489"
              inkscape:cy="436.91682"
              inkscape:document-units="mm"
              inkscape:current-layer="layer1"
              showgrid="false"
              inkscape:pagecheckerboard="true"
              inkscape:window-width="1920"
              inkscape:window-height="1057"
              inkscape:window-x="1592"
              inkscape:window-y="-8"
              inkscape:window-maximized="1"
            />
            <metadata id="metadata5">
              <rdf:RDF>
                <cc:Work rdf:about="">
                  <dc:format>image/svg+xml</dc:format>
                  <dc:type
                    rdf:resource="http://purl.org/dc/dcmitype/StillImage"
                  />
                  <dc:title></dc:title>
                </cc:Work>
              </rdf:RDF>
            </metadata>
            <g
              id="layer1"
              inkscape:label="Capa 1"
              inkscape:groupmode="layer"
              transform="translate(0,-87)"
            >
              <path
                id="path847"
                style="fill:#241f1c;stroke:#000000;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                d="m 107.83664,84.955712 c 0,0 -107.87726152,-14.10211 -68.14394,139.179218 12.714331,49.04874 25.652831,22.05518 48.421755,24.14095 22.605645,2.0708 1.85055,66.25915 41.493085,59.86519 39.64254,-6.39396 26.88006,15.85757 47.34072,26.08791 20.46067,10.23033 49.54765,-30.34781 40.16204,-62.587 -10.36101,-35.58968 66.892,-79.11025 66.892,-79.11025 C 320.93094,164.47671 260.30893,68.557535 107.83664,84.955712 Z"
                inkscape:connector-curvature="0"
                sodipodi:nodetypes="csssssccc"
              />
            </g>
          </svg>
        </div>
        <div class="container">
          <div class="information">
            <h3 class="title md">
              Contact Details:
            </h3>
            <a href="mailto:manuel.22.lamas@gmail.com">
              manuel.22.lamas@gmail.com
            </a>
            <a href="tel: +57 305 3648811">
              +57 305 3648811
            </a>
          </div>
          <div class="links-wrapper">
            <li
              v-for="(link, i) in links"
              :key="i"
              class="mr-6 link lg"
              @click="toggleMenu"
            >
              <nuxt-link
                class="text-blue-500 hover:text-blue-800"
                :to="link.path"
                exact
              >
                {{ link.text }}
              </nuxt-link>
            </li>
          </div>
        </div>
      </ul>
    </transition>
  </div>
</template>

<script>
import Scene from 'scenejs'
import { links } from '../config'
import MenuOpener from './MenuOpener'

export default {
  name: 'NavegationMenu',
  components: {
    'menu-opener': MenuOpener
  },
  data: () => ({
    links,
    isMenuOpen: false
  }),
  computed: {
    menuOpenerStyles() {
      if (this.isMenuOpen) {
        return 'background: white; font-size: 20px;'
      } else return ''
    }
  },
  watch: {
    isMenuOpen(isOpen) {
      if (isOpen) this.enterLink()
    }
  },
  mounted() {
    document.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        this.isMenuOpen = false
      }
    })
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    enterMenu(el, done) {
      new Scene(
        {
          '.menu-wrapper': {
            0: {
              transform: 'translateY(-100%)',
              opacity: 0
            },
            1: {
              transform: 'translateY(0)',
              opacity: 1
            },
            2: 1,
            options: {
              delay: 0.1
            }
          }
        },
        {
          playSpeed: 2,
          selector: true,
          easing: 'ease-in'
        }
      ).playCSS()
    },
    leaveMenu(el, done) {
      new Scene(
        {
          '.menu-wrapper': {
            0: {
              transform: 'translateY(0)',
              opacity: 1
            },
            1: {
              transform: 'translateY(-100%)',
              opacity: 0
            },
            2: 1,
            options: {
              delay: 0.2
            }
          }
        },
        {
          playSpeed: 3,
          selector: true,
          easing: 'ease-in-out'
        }
      ).playCSS()
    },
    enterLink() {
      new Scene(
        {
          '.link': i => ({
            0: {
              transform: {
                translateY: '100%'
              }
            },
            1: {
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
          easing: 'ease',
          selector: true,
          direction: 'alternate',
          iterationCount: 1
        }
      ).playCSS()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/navegation-menu.scss';
</style>
