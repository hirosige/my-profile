<template>
  <nav class="nav header-fixed has-shadow">
    <div class="container">
      <div class="nav-left">
        <nuxt-link :to="$i18n.path('')" class="title">
          <img src="~/assets/logo.png" class="image" style="height: 50px; margin-left: 10px;">
        </nuxt-link>
      </div>

      <div class="nav">
        <div class="nav-item">
          <a href="mailto: hirosige1@gmail.com" class="tag is-primary" style="border-radius: 0;">
            hirosige1@gmail.com
          </a>
        </div>
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
        <my-link :to="$i18n.path('about')" :caption="$t('links.about')" @click.native="clickLink"/>
        <my-link :to="$i18n.path('service')" :caption="$t('links.services')" @click.native="clickLink"/>
        <my-link :to="$i18n.path('blog')" :caption="$t('links.blog')" @click.native="clickLink"/>
        <my-link :to="$i18n.path('contact')" :caption="$t('links.contact')" @click.native="clickLink"/>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      menuActive: false
    }
  },
  methods: {
    menuToggle() {
      this.$emit("toggle-menu")
      this.menuActive = !this.menuActive
    },
    inactivateMenu() {
      this.menuActive = false
    },
    clickLink() {
      this.inactivateMenu()
    }
  }
}
</script>
