<template>
  <div>
    <title-hero :title="$t('service.title')"/>
    <div class="main-contents">
      <div class="container">
        <section-title :title="$t('service.title')" />

        <div class="columns is-multiline" style="margin-left: 20px; margin-right: 20px;">
          <div v-for="(service, index) in services" :key="index" class="column is-half">
            <div class="card">
              <div class="card-content" style="background: #00d1b2">
                <div class="content" style="color: #ffffff;">
                  <div class="columns">
                    <div class="column">
                      <p style="font-size: 1.3rem;">{{ service.fields.name }}</p>
                      <p style="min-height: 100px; margin-bottom: 20px;">{{ service.fields.description }}</p>
                      <div class="columns">
                        <div class="column is-half">
                          <article class="media">
                            <figure class="media-left">
                              <p v-if="typeof service.fields.toolImage !== 'undefined'" class="image is-64x64">
                                <img :src="service.fields.toolImage.fields.file.url">
                              </p>
                            </figure>
                            <div class="media-content">
                              <div class="content">
                                <p>
                                  <strong style="color: #fff;">{{ service.fields.tool }}</strong>
                                </p>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div class="column is-half">
                          <p><time datetime="2016-1-1" style="font-size: 0.8rem;">UPDATED: {{ $store.state.locale, service.sys.updatedAt | moment }} </time></p>
                          <nuxt-link :to="$i18n.path('contact')" class="button is-medium is-fullwidth" style="color: #00d1b2; border-radius: 0;" active-class="none" exact>
                            {{ $t('links.contact') }}
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span style="margin-top: 20px;">※ 詳細ページは準備中です。</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js"
import moment from "moment"

const client = createClient()

export default {
  head() {
    return { title: this.$t("service.title") }
  },
  filters: {
    moment: (locale, date) => {
      moment.locale(locale)
      return moment(date).format("LL")
    }
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
