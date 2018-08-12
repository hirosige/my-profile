
<template>
  <div>
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <nuxt-link :to="$i18n.path('')" class="nav-item title is-5">
            Hiros.io
          </nuxt-link>
        </div>
        <div class="nav-right">
          <nuxt-link v-if="$i18n.locale === 'ja'" 
            :to="`/en` + $route.fullPath" 
            class="nav-item is-tab" 
            active-class="none" 
            exact
          >
            {{ $t('links.english') }}
          </nuxt-link>

          <nuxt-link v-else 
            :to="$route.fullPath.replace(/^\/[^\/]+/, '')" 
            class="nav-item is-tab" 
            active-class="none" 
            exact
          >
            {{ $t('links.japanese') }}
          </nuxt-link>

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
        </div>
      </div>
    </nav>
    <nuxt/>
    <PageFooter />
    <div class="test">
      Test
    </div>
  </div>
</template>

<script>
  import PageFooter from '~/components/PageFooter.vue'

  export default {
    components: {
      PageFooter
    },
  }
</script>
