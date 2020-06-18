async function routes () {
  const { $content } = require('@nuxt/content')
  const files = await $content('', { deep: true }).fetch()
  return files.map((file) => (file.path === '/index' ? '/' : file.path))
}

export default {
  mode: 'universal',
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
  loading: { color: '#fff' },
  css: [
    '@/static/css/reset.css',
    '@/static/css/styles.css'
  ],
  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],
  generate: {
    dir: 'public',
    routes
  },
  sitemap: {
    hostname: 'https://mettray.com/',
    gzip: true,
    routes
  }
}
