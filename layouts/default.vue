<template>
  <div>
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <nuxt-link to="/" class="nav-item title is-5">
            Hiros.io
          </nuxt-link>
        </div>
        <div class="nav-right">
          <nuxt-link active-class="is-active" to="/" class="nav-item is-tab" exact>Home</nuxt-link>
          <nuxt-link active-class="is-active" to="/about" class="nav-item is-tab" exact>About</nuxt-link>
          <nuxt-link active-class="is-active" to="/service" class="nav-item is-tab" exact>Services</nuxt-link>
          <nuxt-link active-class="is-active" to="/blog" class="nav-item is-tab" exact>Blog</nuxt-link>
          <nuxt-link active-class="is-active" to="/contact" class="nav-item is-tab" exact>Contact</nuxt-link>
        </div>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>

