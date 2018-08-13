<template>
  <section class="main-content">
    <div class="container">
      <h1 class="title has-text-centered">
        Recent Posts.
      </h1>
      <div class="columns is-multiline">
        <div v-for="(post, index) in posts" :key="index" class="column is-half">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                {{ post.title }}
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                {{ post.summary }}
                <br>
                <small>
                  by <strong>{{ post.author }}</strong> 
                  \\ {{ post.published }}
                </small>
              </div>
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
