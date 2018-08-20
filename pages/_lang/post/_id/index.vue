<template>
  <div>
    <div :style="{ 'background-image': 'url(' + post.fields.heroImage.fields.file.url + ')' }" class="contents-bg">
      <div class="contents">
        <h1 class="title">{{ post.fields.title }}</h1>
      </div>
    </div>
    <div class="main-contents">
      <div class="fix-width">
        <div class="content">
          <div v-html="$md.render(post.fields.body)" />
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
        console.log(post.items[0].fields.heroImage.fields.file.url)
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
.contents-bg {
  background-size: cover;
  background-position: center;
  height: 500px;
  margin-top: 0;
}

.contents {
  margin-top: 0;
  background-color: rgba(0, 209, 178, 0.7);
  height: 500px;
}

.contents h1 {
  color: #fff;
  margin: 0;
  line-height: 500px;
  text-align: center;
  font-size: 2.3rem;
}

.content pre {
  padding: 0;
}

.content h3 {
  color: var(--deep-green);
  padding-left: 10px;
  border-bottom: 1px solid var(--deep-green);
  border-top: 1px solid var(--deep-green);
  border-left: 5px solid var(--deep-green);
  line-height: 40px;
  letter-spacing: 1px;
}

pre {
  font-size: 0.8rem;
}
code {
  margin: 0;
  border: 0;
}

.fix-width {
  margin-right: 40px;
  margin-left: 40px;
}

@media screen and (min-width: 0px) and (max-width: 1000px) {
  .fix-width {
    margin-right: 10px;
    margin-left: 10px;
  }
  .fix-width pre {
    margin-right: 0;
    margin-left: 0;
  }
}
</style>
