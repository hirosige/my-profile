<template>
  <div class="main-contents">
    <div class="container">
      <p>{{ post.fields.title }}</p>
      <p>{{ post.fields.heroImage.fields.file.url }}</p>
      <p>{{ post.fields.description }}</p>
      <div v-html="$md.render(post.fields.body)" />
      <p>{{ post.fields.author.fields.name }}</p>
      <p>{{ post.fields.tags[0].fields.name }}</p>
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
        console.log(post.items)
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
  data() {
    return {
      model: "# test ```php <?php echo 'hello'; ```"
    }
  }
}
</script>
