<template>
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
</template>

<script>
import moment from "moment"

export default {
  name: "ServiceCard",
  filters: {
    moment: (locale, date) => {
      moment.locale(locale)
      return moment(date).format("LL")
    }
  },
  props: {
    service: { type: Object, default: () => {} }
  }
}
</script>
