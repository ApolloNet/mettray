<template>
  <div>
    <header>
      <div class="sitename"><nuxt-link to="/">METTRAY</nuxt-link></div>
      <nav class="main-nav">
        <ul>
          <li><nuxt-link to="/revue">La revue</nuxt-link></li>
          <li><nuxt-link to="/livres">Les livres</nuxt-link></li>
          <li><nuxt-link to="/pages/contact">Contact</nuxt-link></li>
        </ul>
      </nav>
    </header>
    <main class="wrapper">
      <article>
        <h1 v-if="page.h1">{{page.title}}</h1>
        <div class="content" v-html="page.html"></div>
      </article>
    </main>
    <footer>
      <nav class="footer-nav">
        <ul>
          <li><nuxt-link to="/">Accueil</nuxt-link></li>
          <li><nuxt-link to="/revue">La revue</nuxt-link></li>
          <li><nuxt-link to="/livres">Les livres</nuxt-link></li>
          <li><nuxt-link to="/pages/contact">Contact</nuxt-link></li>
          <li>© Didier Morin</li>
        </ul>
      </nav>
    </footer>
    <script defer src="/js/google-analytics.js"></script>
  </div>
</template>

<script>
export default {
  validate ({params, store}) {
    const path = '/' + params.pathMatch.replace(/\/$/, '')
    const page = store.state.pages.all[path]
    return !!page
  },
  computed: {
    page () {
      const path = '/' + this.$route.params.pathMatch.replace(/\/$/, '')
      const page = this.$store.state.pages.all[path]
      return page
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description
        }
      ]
    }
  }
};
</script>
