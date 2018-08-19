<template>
  <div>
    <title-hero :title="$t('blog.title')"/>
    <div class="main-contents" style="padding: 40px;">
      <div class="columns">
        <div class="column is-3">
          <nav class="panel">
            <p class="panel-heading" style="background: var(--green); color: #ffffff;">
              Filter by Tags
            </p>
            <p class="panel-tabs">
              <nuxt-link :to="$i18n.path('blog')" class="is-active">
                All
              </nuxt-link>
            </p>
            <p v-for="(category, index) in categories" :key="index" :class="{ 'is-active': checkCategory($route.params.keyword, category.fields.name) }" class="panel-block">
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
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    checkCategory(keyword, category) {
      return keyword == category
    }
  },
  asyncData({ env, params }) {
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
        let newPosts = posts.items.filter(post => {
          let check = false

          if (typeof post.fields.tags === "undefined") return false

          post.fields.tags.forEach(tag => {
            if (tag.fields.name === params.keyword) check = true
          })
          return check
        })
        return {
          person: entries.items[0],
          posts: newPosts,
          categories: categories.items
        }
      })
      .catch(console.error)
  }
}
</script>
