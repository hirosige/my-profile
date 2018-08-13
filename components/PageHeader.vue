<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <nuxt-link :to="$i18n.path('')" class="nav-item title is-5">
          Hiros.io
        </nuxt-link>
      </div>

      <div class="nav-center">
        <div v-if="$i18n.locale === 'ja'" class="nav-item">
          <nuxt-link :to="`/en` + $route.fullPath" class="button is-danger is-small" active-class="none" exact>
            {{ $t('links.english') }}
          </nuxt-link>
        </div>
        <div v-else class="nav-item">
          <nuxt-link :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="button is-primary is-small" active-class="none" exact>
            {{ $t('links.japanese') }}
          </nuxt-link>
        </div>
      </div>

      <span id="nav-toggle" class="nav-toggle">
        <span/>
        <span/>
        <span/>
      </span>

      <div id="nav-menu" class="nav-right nav-menu">
        <nuxt-link 
          :to="$i18n.path('about')" 
          active-class="is-active" 
          class="nav-item is-tab" 
          exact
        >
          {{ $t('links.about') }}
        </nuxt-link>

        <nuxt-link 
          :to="$i18n.path('service')" 
          active-class="is-active" 
          class="nav-item is-tab" 
          exact
        >
          {{ $t('links.services') }}
        </nuxt-link>

        <nuxt-link 
          :to="$i18n.path('blog')" 
          active-class="is-active" 
          class="nav-item is-tab" 
          exact
        >
          {{ $t('links.blog') }}
        </nuxt-link>

        <nuxt-link 
          :to="$i18n.path('contact')" 
          active-class="is-active" 
          class="nav-item is-tab" 
          exact
        >
          {{ $t('links.contact') }}
        </nuxt-link>

        <nuxt-link 
          :to="$i18n.path('playground')" 
          active-class="is-active" 
          class="nav-item is-tab" 
          exact
        >
          {{ $t('links.playground') }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "PageHeader"
}
</script>
