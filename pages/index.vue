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
  async asyncData({ $content }) {
    return {
      content: await $content('index').fetch()
    }
  }
};
</script>
