<template>
  <div>
    <section v-if="$device.isMobile" class="hero is-primary is-bold" />
    <section v-else class="hero is-primary is-bold">
      <div class="hero-body mobile">
        <div class="container has-text-centered">
          <h1 class="title">
            {{ title }}
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TitleHero",
  props: { title: { type: String, default: "No Title" } }
}
</script>
