<template>
  <div>
    <p>
      <button @click="increment">{{ counter }}</button><br>
      <span class="flag-icon flag-icon-gr" />
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
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
