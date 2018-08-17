<template>
  <div>
    <title-hero :title="$t('playground.title')"/>
    <div class="main-contents">
      <p>
        <button @click="increment">{{ counter }}</button><br>
        <span class="flag-icon flag-icon-gr" />
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  head() {
    return { title: this.$t("playground.title") }
  },
  fetch({ store }) {
    store.commit("increment")
  },
  computed: mapState(["counter"]),
  methods: {
    increment() {
      this.$store.commit("increment")
    }
  }
}
</script>
