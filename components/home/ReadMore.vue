<template>
  <nav class="level" style="margin-top: 40px;">
    <p class="level-item has-text-centered">
      <nuxt-link :to="to" active-class="is-active" class="button is-primary" style="border-radius: 0;" exact>
        Read More
      </nuxt-link>
    </p>
  </nav>
</template>

<script>
export default {
  name: "ReadMore",
  props: {
    to: { type: String, default: "/" }
  }
}
</script>
