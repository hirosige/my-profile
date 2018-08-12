<template>
    <title-hero :title="$t('about.title')"/>
</template>

<script>
  import TitleHero from '~/components/TitleHero.vue'

  export default {
    components: {
      TitleHero
    },
    head() {
      return { title: this.$t('about.title') }
    }
  }
</script>