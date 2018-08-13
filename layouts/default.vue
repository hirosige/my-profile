
<template>
  <div>
    <page-header @toggle-menu="clickToggle" />
    <nuxt/>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from "~/components/PageHeader.vue"
import PageFooter from "~/components/PageFooter.vue"

export default {
  components: {
    PageHeader,
    PageFooter
  },
  methods: {
    clickToggle() {}
  }
}
</script>
