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
      <nuxt />
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
