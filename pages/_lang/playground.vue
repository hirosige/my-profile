<template>
  <div>
    <p>
      <button @click="increment">{{ counter }}</button><br>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  fetch({ store }) {
    // store.commit('increment')
  },
  computed: mapState([
    'counter'
  ]),
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>