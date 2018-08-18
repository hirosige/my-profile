<template>
  <div class="card">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://normalblog.net/system/wp-content/uploads/2017/10/react.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="tags" style="margin-bottom: 20px;">
          <span v-for="(tag, index) in post.fields.tags" :key="index" class="tag is-primary cloud" style="border-radius: 0;">
            {{ tag.fields.name }}
          </span>
        </div>
        <div class="media">
          <div class="media-content">
            <p class="title is-5">{{ post.fields.title }}</p>
          </div>
        </div>
        <div class="content">
          {{ post.author }}
          <br>
          <time datetime="2016-1-1" style="font-size: 0.6rem;">UPDATED: {{ $store.state.locale, post.sys.updatedAt | moment }}</time>
        </div>
        <footer class="card-footer">
          <nuxt-link :to="$i18n.path(`post/${ post.fields.slug }`)" class="card-footer-item">
            Read More
          </nuxt-link>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment"

export default {
  name: "Posts",
  filters: {
    moment: (locale, date) => {
      moment.locale(locale)
      return moment(date).format("LL")
    }
  },
  props: { post: { type: Object, default: () => {} } }
}
</script>

<style>
span.tag.cloud + span.tag.cloud {
  margin-left: 5px;
}
</style>
