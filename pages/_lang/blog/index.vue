<template>
  <div>
    <title-hero :title="$t('blog.title')"/>
    <div class="main-contents" style="padding-right: 40px; padding-left: 40px;">
      <section-title :title="$t('blog.title')" /> 
      <div class="columns">
        <div class="column is-3">
          <nav class="panel">
            <p class="panel-heading" style="background: var(--green); color: #ffffff;">
              Filter by Tags
            </p>
            <p class="panel-tabs">
              <a class="is-active">ALL</a>
            </p>
            <p v-for="(category, index) in categories" :key="index" class="panel-block">
              <nuxt-link :to="$i18n.path(`blog/search/${ category.fields.name }`)">
                <span class="panel-icon">
                  <i class="fas fa-tag" aria-hidden="true" />
                </span>
                {{ category.fields.name }}
              </nuxt-link>
            </p>
            <div class="panel-block">
              <button class="button is-link is-outlined is-fullwidth">
                reset all filters
              </button>
            </div>
          </nav>
        </div>
        <div class="column">
          <div class="columns is-multiline">
            <div v-for="(post, index) in posts" :key="index" class="column is-half">
              <posts :post="post" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createBlogClient } from "~/plugins/contentful.js"
import Posts from "~/components/Posts.vue"

const client = createBlogClient()

export default {
  head() {
    return { title: this.$t("blog.title") }
  },
  components: {
    Posts
  },
  asyncData({ env }) {
    return Promise.all([
      client.getEntries({
        "sys.id": env.key.CTF_BLOG_PERSON_ID
      }),
      client.getEntries({
        content_type: "blogPost",
        order: "-sys.createdAt"
      }),
      client.getEntries({
        content_type: "postCategories",
        order: "-sys.createdAt"
      })
    ])
      .then(([entries, posts, categories]) => {
        return {
          person: entries.items[0],
          posts: posts.items,
          categories: categories.items
        }
      })
      .catch(console.error)
  }
}
</script>
