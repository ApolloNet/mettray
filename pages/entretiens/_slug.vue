<template>
  <div>
    <Content :content="content" />
  </div>
</template>

<script>
import Content from '@/components/Content.vue'

export default {
  components: {
    Content
  },
  async asyncData({ params, $content }) {
    return {
      content: await $content('entretiens', params.slug).fetch()
    }
  }
};
</script>
