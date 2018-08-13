<template>
  <section class="hero is-primary is-large">
    <div class="hero-body is-right is-bold">
      <div class="container has-text-left">
        <p class="title is-1">
          {{ person.fields.name }}
        </p>
        <p class="subtitle is-4">
          Hiros.io
        </p>
      </div>
    </div>

    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li class="is-active">
              <a>{{ $t('about.title') }}</a>
            </li>
            <li>
              <a>{{ $t('service.title') }}</a>
            </li>
            <li>
              <a>{{ $t('blog.title') }}</a>
            </li>
            <li>
              <a>{{ $t('contact.title') }}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import { createClient } from "~/plugins/contentful.js"
const client = createClient()

export default {
  head() {
    return { title: this.$t("home.title") }
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
