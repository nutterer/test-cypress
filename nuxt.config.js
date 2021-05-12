/* eslint-disable */

const changeLoaderOptions = (loaders) => {
  if (loaders) {
    for (const loader of loaders) {
      if (loader.loader === 'sass-loader') {
        Object.assign(loader.options, {
          includePaths: ['./assets'],
        })
      }
    }
  }
}

module.exports = {
  /*
  ** Headers of the page
  */
  mode: 'spa',
  server: {
    SERVICE_URL: process.env.SERVICE_URL,
    port: process.env.PORT, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  env: {
    SERVICE_URL: process.env.SERVICE_URL,
    VAT: process.env.VAT,
  },
  head: {
    title: 'BEHIND',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: `/img/behind-logo.jpg` },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Prompt&display=swap' },
    ],
    bodyAttrs: {
      class: 'sidebar-lg-show'
    }
  },
  router: {
    middleware: 'i18n'
  },
  axios: {
    baseURL: process.env.SERVICE_URL,
  },

  /*
  ** Customize the progress bar color
  */
  loading: '~/components/Preloading.vue',

  /**
   * Import CSS
   */
  css: [
    /* Import Font Awesome Icons Set */
    '~/node_modules/flag-icon-css/css/flag-icon.min.css',
    /* Import Font Awesome Icons Set */
    '~/node_modules/font-awesome/css/font-awesome.min.css',
    /* Import Simple Line Icons Set */
    '~/node_modules/simple-line-icons/css/simple-line-icons.css',
    /* Import Bootstrap Vue Styles */
    '~/node_modules/bootstrap-vue/dist/bootstrap-vue.css',
    /* Import Core SCSS */
    { src: '~/assets/scss/style-behind.scss', lang: 'scss' },
    /* Import Vue multiselect Styles */
    { src: '~/node_modules/vue-multiselect/dist/vue-multiselect.min.css'}
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    '~/plugins/i18n.js',
    '~/plugins/canDoIt.js',
    '~/plugins/setTokenCookie.js',
    '~/plugins/loadingModalButton.js',
    '~/plugins/dateTime.js',
    '~/plugins/formatNumber.js',
    '~/plugins/base64toBlob.js',
    { src: '~/plugins/autocomplete.js', ssr: false },
    { src: '~/plugins/autocomplete-vue.js', ssr: false },
    '~/plugins/barcode.js',
    '~/plugins/THBText.js',
    { src:  '~/plugins/downloadExcel.js', ssr: false },
    { src:  '~/plugins/cryptr.js', ssr: false },
    { src: '~/plugins/datePicker.js', ssr: false },
    { src: '~/plugins/countTo.js', ssr: false },
    '~/plugins/vueUploadMultipleImage.js',
    '~/plugins/base64toBlob.js',
    '~/plugins/vee-validate',
    { src: '~/plugins/vueClipboard.js', ssr: false },
    '~/plugins/formatAddress.js',
    '~/plugins/stringify.js',
    '~/plugins/replaceSpecialCharacter.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://github.com/bootstrap-vue/bootstrap-vue
    'bootstrap-vue/nuxt',
    '@nuxtjs/auth',
    'cookie-universal-nuxt',
    [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ],
    '@nuxtjs/sentry'
  ],
  /*
  ** sentry module configuration
  ** See https://github.com/nuxt-community/sentry-module
  */
  sentry: {
    dsn: process.env.SENTRY_DSN, // Enter your project's DSN here
    publishRelease: true,
    sourceMapStyle: 'source-map',
    disableServerSide: true,
    config: {
      environment: process.env.NODE_ENV
    }
  },
  /*
  ** Style resources configuration
  */
  styleResources: {
    scss: './assets/scss/style.scss',
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })

        const vueLoader = config.module.rules.find(
          ({ loader }) => loader === 'vue-loader',
        )
        const { options: { loaders } } = vueLoader || { options: {} }

        if (loaders) {
          for (const loader of Object.values(loaders)) {
            changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
          }
        }

        config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
      }
    },
    babel: {
      presets() {
        return [
          [
            '@nuxt/babel-preset-app',
            {
              corejs: {
                version: 3,
              },
            },
          ],
        ];
      },
    }
  },
}
