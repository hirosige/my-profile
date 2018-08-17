<template>
  <div>
    <title-hero :title="$t('blog.title')"/>
    <div class="main-contents" style="padding: 40px;">
      <div class="columns">
        <div class="column is-narrow">
          <nav class="panel">
            <p class="panel-heading is-primary">
              repositories
            </p>
            <div class="panel-block">
              <p class="control has-icons-left">
                <input class="input is-small" type="text" placeholder="search">
                <span class="icon is-small is-left">
                  <i class="fas fa-search" aria-hidden="true" />
                </span>
              </p>
            </div>
            <p class="panel-tabs">
              <a class="is-active">all</a>
              <a>public</a>
              <a>private</a>
              <a>sources</a>
              <a>forks</a>
            </p>
            <a class="panel-block is-active">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true" />
              </span>
              bulma
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true" />
              </span>
              marksheet
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true" />
              </span>
              minireset.css
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true" />
              </span>
              jgthms.github.io
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-code-branch" aria-hidden="true" />
              </span>
              daniellowtw/infboard
            </a>
            <a class="panel-block">
              <span class="panel-icon">
                <i class="fas fa-code-branch" aria-hidden="true" />
              </span>
              mojs
            </a>
            <label class="panel-block">
              <input type="checkbox">
              remember me
            </label>
            <div class="panel-block">
              <button class="button is-link is-outlined is-fullwidth">
                reset all filters
              </button>
            </div>
          </nav>
        </div>
        <div class="column">
          <posts />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js"
import Posts from "~/components/Posts.vue"

const client = createClient()

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
        "sys.id": env.CTF_PERSON_ID
      }),
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: "-sys.createdAt"
      })
    ])
      .then(([entries, posts]) => {
        return {
          person: entries.items[0],
          posts: posts.items
        }
      })
      .catch(console.error)
  }
}
</script>
