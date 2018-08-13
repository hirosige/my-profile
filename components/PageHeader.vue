<template>
  <nav class="nav header-fixed">
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

      <span :class="{ 'is-active': menuActive }" class="nav-toggle" @click="menuToggle">
        <span/>
        <span/>
        <span/>
      </span>

      <div id="nav-menu" :class="{ 'is-active': menuActive }" class="nav-right nav-menu">
        <my-link :to="$i18n.path('about')" :caption="$t('links.about')"/>
        <my-link :to="$i18n.path('service')" :caption="$t('links.services')"/>
        <my-link :to="$i18n.path('blog')" :caption="$t('links.blog')"/>
        <my-link :to="$i18n.path('contact')" :caption="$t('links.contact')"/>
        <my-link :to="$i18n.path('playground')" :caption="$t('links.playground')"/>
      </div>
    </div>
  </nav>
</template>

<script>
import MyLink from "~/components/MyLink.vue"

export default {
  name: "PageHeader",
  components: {
    MyLink
  },
  data() {
    return {
      menuActive: false
    }
  },
  methods: {
    menuToggle() {
      this.$emit("toggle-menu")
      this.menuActive = !this.menuActive
    }
  }
}
</script>
