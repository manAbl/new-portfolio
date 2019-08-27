/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    container: {
      padding: '1.2rem'
    },
    fontWeight: {
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      'extra-bold': 800,
      black: 900
    },
    fontFamily: false
  },
  variants: {
    display: ['responsive', 'hover', 'focus'],
    fontSmoothing: ['responsive', 'hover', 'focus']
  },
  plugins: []
}
