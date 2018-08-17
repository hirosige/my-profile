<template>
  <div>
    <title-hero :title="$t('contact.thanks.title')"/>
    <div class="main-contents">
      thanks
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return { title: this.$t("contact.thanks.title") }
  }
}
</script>
