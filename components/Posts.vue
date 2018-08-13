<template>
  <section class="main-content" style="padding: 40px;">
    <div class="container">
      <div class="columns is-multiline">
        <div v-for="(post, index) in posts" :key="index" class="column is-one-third">
          <div class="card">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{ post.title }}</p>
                    <p class="subtitle is-6">{{ post.summary }}</p>
                  </div>
                </div>

                <div class="content">
                  {{ post.author }}
                  <br>
                  <time datetime="2016-1-1">{{ post.published }}</time>
                </div>
                <footer class="card-footer">
                  <nuxt-link :to="$i18n.path(`post/${ post.id }`)" class="card-footer-item">
                    Read More
                  </nuxt-link>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import posts from "~/posts.json"

export default {
  name: "Posts",
  data() {
    return { posts }
  }
}
</script>
