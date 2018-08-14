<template>
  <section class="hero is-small is-primary is-bold">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          {{ title }}
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TitleHero",
  props: { title: { type: String, default: "No Title" } }
}
</script>
