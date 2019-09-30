// const gzip = require('@gfx/zopfli').gzip
// const TerserJSPlugin = require('terser-webpack-plugin')
// const CompressionPlugin = require('compression-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

require('dotenv').config()

const glob = require('glob')
const pkg = require('./package')
const files = glob.sync('**/*.md', { cwd: 'articles' })

function getSlugs(post, _) {
  const slug = post.substr(0, post.lastIndexOf('.'))
  return `/blog/post/${slug}`
}

module.exports = {
  mode: 'universal',
  generate: {
    routes: () => files.map(getSlugs)
  },
  // performance: {
  //   gzip: {
  //     threshold: -1
  //   }
  // },
  router: {
    middleware: 'pages'
  },
  server: {
    port: 3002 || process.env.PORT,
    host: 'localhost'
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Merriweather:400,900|Roboto+Slab&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Blinker:600,700&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    ['@nuxtjs/eslint-module', { fix: true }],
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    [
      'storyblok-nuxt',
      { accessToken: process.env.STORYBLOK_KEY, cacheProvider: 'memory' }
    ],
    '@nuxtjs/pwa',
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],
  // render: {
  //   compressor: {
  //     level: 9,
  //     threshold: 14290,
  //     chunkSize: 120,
  //     minRatio: 0.8
  //   }
  // },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    devtools: true,
    plugins: [
      // new CompressionPlugin({
      //   compressionOptions: { level: 11 },
      //   threshold: 1250,
      //   minRatio: 0.8,
      //   algorithm(input, compressionOptions, callback) {
      //     return gzip(input, compressionOptions, callback)
      //   }
      // }),
      // new MiniCssExtractPlugin({
      //   filename: '[name].css',
      //   chunkFilename: '[id].css',
      //   ignoreOrder: false
      // })
    ],
    // optimization: {
    //   minimizer: [
    //     new TerserJSPlugin({
    //       test: /\.(js)$/
    //     }),
    //     new OptimizeCSSAssetsPlugin({
    //       preset: ['default', { discardComments: { removeAll: true } }]
    //     })
    //   ],
    //   splitChunks: {
    //     cacheGroups: {
    //       styles: {
    //         name: 'styles',
    //         test: /\.(css|vue)$/,
    //         chunks: 'all',
    //         enforce: true
    //       }
    //     }
    //   }
    // },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: ['raw-loader']
      })
    }
  }
}
