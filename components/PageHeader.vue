<template>
  <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
         <nuxt-link :to="$i18n.path('')" class="nav-item title is-5">
            Hiros.io
          </nuxt-link>
        </div>

        <div class="nav-right">
          <div class="nav-item" v-if="$i18n.locale === 'ja'">
            <nuxt-link  :to="`/en` + $route.fullPath" class="button is-danger" active-class="none" exact>
              {{ $t('links.english') }}
            </nuxt-link>
          </div>
          <div class="nav-item" v-else>
            <nuxt-link :to="$route.fullPath.replace(/^\/[^\/]+/, '')" class="button is-primary" active-class="none" exact>
              {{ $t('links.japanese') }}
            </nuxt-link>
          </div>
        </div>

        <span id="nav-toggle" class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div id='nav-menu' class="nav-right nav-menu">
          <nuxt-link 
            active-class="is-active" 
            :to="$i18n.path('about')" 
            class="nav-item is-tab" 
            exact
          >
            {{ $t('links.about') }}
          </nuxt-link>

          <nuxt-link 
            active-class="is-active" 
            :to="$i18n.path('service')" 
            class="nav-item is-tab" 
            exact
          >
            {{ $t('links.services') }}
          </nuxt-link>

          <nuxt-link 
            active-class="is-active" 
            :to="$i18n.path('blog')" 
            class="nav-item is-tab" 
            exact
          >
            {{ $t('links.blog') }}
          </nuxt-link>

          <nuxt-link 
            active-class="is-active" 
            :to="$i18n.path('contact')" 
            class="nav-item is-tab" 
            exact
          >
            {{ $t('links.contact') }}
          </nuxt-link>

          <nuxt-link 
            active-class="is-active" 
            :to="$i18n.path('playground')" 
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
    name: 'PageHeader'
  }
</script>