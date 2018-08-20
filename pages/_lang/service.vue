<template>
  <div>
    <title-hero :title="$t('service.title')"/>
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
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js"
import ServiceCard from "~/components/service/ServiceCard.vue"

const client = createClient()

export default {
  head() {
    return { title: this.$t("service.title") }
  },
  components: {
    ServiceCard
  },
  asyncData() {
    return Promise.all([
      client.getEntries({
        content_type: "services",
        order: "-sys.createdAt"
      })
    ])
      .then(([services]) => {
        return {
          services: services.items
        }
      })
      .catch(console.error)
  }
}
</script>
