<!--
<template>
  <div>
    <h1>{{ person.fields.name }}</h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        {{ post.fields.title }}
      </li>
    </ul>
  </div>
</template>
-->

<!--
<template>
  <section class="hero is-primary is-large">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
    </nav>
  </div>

  <div class="hero-body">
    <div class="container has-text-centered">
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
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</section>
  
</template>
-->

<script>
  import Index from '~/pages/_lang/index'
  export default Index
</script>

<!--
<script>
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()

  export default {
    head: {
      title: 'Home'
    },
    // `env` is available in the context object
    asyncData ({env}) {
      return Promise.all([
        // fetch the owner of the blog
        client.getEntries({
          'sys.id': env.CTF_PERSON_ID
        }),
        // fetch all blog posts sorted by creation date
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt'
        })
      ]).then(([entries, posts]) => {
        // return data that should be available
        // in the template
        return {
          person: entries.items[0],
          posts: posts.items
        }
      }).catch(console.error)
    }
  }
</script>
-->