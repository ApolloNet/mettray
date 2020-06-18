<template>
  <article>
    <h1 v-if="content.h1 != false">{{ content.title }}</h1>
    <nuxt-content :document="content" />
  </article>
</template>

<script>
export default {
  props: {
    content: {
      type: [Object, Array],
      default: {}
    }
  },
  head () {
    return {
      title: this.content.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.content.description ? this.content.description : ''
        }
      ]
    }
  }
}
</script>
