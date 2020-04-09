<template>
  <article>
    <h1 v-if="page.h1">{{page.title}}</h1>
    <div class="content" v-html="page.html"></div>
  </article>
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
          content: this.page.description ? this.page.description : ''
        }
      ]
    }
  }
};
</script>
