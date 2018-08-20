<template>
  <div>
    <section class="hero is-primary is-fullheight mega-hero-bg">
      <div class="hero-body is-right is-bold contents">
        <div class="container has-text-left">
          <p class="title is-1">
            Hiros.io
          </p>
          <p class="subtitle is-4">
            Fullstack engineer & freelancer in BKK
          </p>
        </div>
      </div>
    </section>
    <div class="main-contents">
      <about-me />
      <read-more :to="$i18n.path('about')" />
      <div class="main-contents">
        <div class="container">
          <section-title :title="$t('service.title')" />

          <div class="columns is-multiline" style="margin-left: 20px; margin-right: 20px;">
            <div v-for="(service, index) in services" :key="index" class="column is-half">
              <service-card :service="service" />
            </div>
            <span style="margin-top: 20px;">※ 詳細ページは準備中です。</span>
          </div>
        </div>
      </div>
      <read-more :to="$i18n.path('services')" />
      <contact-me />
      <read-more :to="$i18n.path('contact')" />
    </div>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js"
import AboutMe from "~/components/AboutMe.vue"
import ReadMore from "~/components/home/ReadMore.vue"
import ContactMe from "~/components/ContactMe.vue"
import ServiceCard from "~/components/service/ServiceCard.vue"

const client = createClient()

export default {
  head() {
    return { title: this.$t("home.title") }
  },
  components: {
    AboutMe,
    ReadMore,
    ServiceCard,
    ContactMe
  },
  asyncData({ env }) {
    return Promise.all([
      client.getEntries({
        "sys.id": env.CTF_PERSON_ID
      }),
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: "-sys.createdAt"
      }),
      client.getEntries({
        content_type: "services",
        order: "-sys.createdAt"
      })
    ])
      .then(([entries, posts, services]) => {
        return {
          person: entries.items[0],
          posts: posts.items,
          services: services.items
        }
      })
      .catch(console.error)
  }
}
</script>

<style>
.mega-hero-bg {
  background-image: url("http://4.bp.blogspot.com/-Y3flK6DqzzI/UoThIbMw_WI/AAAAAAAACAQ/Ldl3Ivfa5l8/s1600/bkkgf01b201305090200.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin-top: 0;
}

.contents {
  margin-top: 0;
  background-color: rgba(0, 209, 178, 0.6);
  height: 100vh;
}
</style>
