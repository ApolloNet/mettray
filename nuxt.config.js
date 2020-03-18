import contents from './static/contents.json'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mettray, Didier Morin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'verify-v1', content: '3xQ1oLDoT6ISF9unFMjV8y9tTJvjRo5seuUOY6hhm0M=' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=EB+Garamond:400,400i,600,600i' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/static/css/reset.css',
    '@/static/css/styles.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/sitemap'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  /*
  ** Generate configuration
  */
  generate: {
    dir: 'public',
    routes: Object.keys(contents)
  },
  /*
   * Router
   */
  router: {
    middleware: ['pages']
  },
  /**
   * Sitemap
   */
  sitemap: {
    hostname: 'https://mettray.com/',
    gzip: true,
    routes: Object.keys(contents)
  }
}
