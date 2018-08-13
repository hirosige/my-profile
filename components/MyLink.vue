<template>
  <nuxt-link :to="to" active-class="is-active" class="nav-item is-tab" exact>
    {{ caption }}
  </nuxt-link>
</template>

<script>
export default {
  name: "MyLink",
  props: {
    to: { type: String, default: "/" },
    caption: { type: String, default: "no title" }
  }
}
</script>
