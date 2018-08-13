<template>
  <section>
    <title-hero :title="$t('about.title')"/>
    <div class="main-contents">
      test
    </div>
  </section>
</template>

<script>
export default {
  transition: "bounce",
  head() {
    return { title: this.$t("about.title") }
  }
}
</script>
