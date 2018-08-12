<!--
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

-->

<template>
  <div>
    <header class="Header">
      <div class="container">
        <h1 class="Header__Title">Nuxt i18n</h1>
        <nav class="Header__Menu">
          <nuxt-link :to="$i18n.path('')" class="Header__Link" exact>
            {{ $t('links.home') }}
          </nuxt-link>
          <nuxt-link :to="$i18n.path('about')" class="Header__Link" exact>
            {{ $t('links.about') }}
          </nuxt-link>
          <nuxt-link v-if="$i18n.locale === 'ja'" :to="`/en` + $route.fullPath" class="Header__Link" active-class="none" exact>
            {{ $t('links.english') }}
          </nuxt-link>
          <nuxt-link v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="Header__Link" active-class="none" exact>
            {{ $t('links.japanese') }}
          </nuxt-link>
        </nav>
      </div>
    </header>
    <nuxt/>
  </div>
</template>

<script>
export default {}
</script>
