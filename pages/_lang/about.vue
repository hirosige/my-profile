<template>
  <title-hero :title="$t('about.title')"/>
</template>

<script>
export default {
  transition: "bounce",
  head() {
    return { title: this.$t("about.title") }
  }
}
</script>
