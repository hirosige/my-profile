<template>
  <div>
    <title-hero :title="$t('blog.title')"/>
    <posts />
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js"
import Posts from "~/components/Posts.vue"

const client = createClient()

export default {
  head: {
    title: "Blog"
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
