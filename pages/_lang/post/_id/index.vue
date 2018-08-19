<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <p>{{ post.fields.title }}</p>
          </h1>
        </div>
      </div>
    </section>
    <div class="main-contents">
      <div class="container">
        <div class="fix-width">
          <div class="content">
            <div v-html="$md.render(post.fields.body)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createBlogClient } from "~/plugins/contentful.js"
const client = createBlogClient()

export default {
  asyncData({ env, params }) {
    return Promise.all([
      client.getEntries({
        "sys.id": env.key.CTF_BLOG_PERSON_ID
      }),
      client.getEntries({
        content_type: "blogPost",
        "fields.slug": params.id
      })
    ])
      .then(([entries, post]) => {
        return {
          person: entries.items[0],
          post: post.items[0]
        }
      })
      .catch(console.error)
  },
  head() {
    return {
      title: "test"
    }
  },
  methods: {
    embedImage(url) {
      return `background-image: url('${url}'');`
    }
  }
}
</script>

<style>
pre {
  padding: 0;
  font-size: 0.8rem;
  magin: 0;
}
code {
  margin: 0;
}

@media screen and (min-width: 0px) and (max-width: 1000px) {
  .fix-width {
    margin-right: 40px;
    margin-left: 40px;
  }
}
</style>
