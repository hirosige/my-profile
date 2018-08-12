<template>
  <section class="hero is-medium is-primary is-bold">
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
    props: ['title'],
    name: 'TitleHero'
  }
</script>