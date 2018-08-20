<template>
  <footer class="footer footer-body" style="padding: 20px;">
    <nav class="level">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item">
          <div>
            <p class="title">Hiros.io</p>
            <p class="heading">Fullstack engineer & freelancer in BKK</p>
          </div>
        </div>
      </div>

      <!-- Right side -->
      <div class="level-right links">
        <p class="level-item link">
          <nuxt-link :to="$i18n.path('')" active-class="is-active" exact>
            {{ $t('links.home') }}
          </nuxt-link>
          <nuxt-link :to="$i18n.path('about')" active-class="is-active" exact>
            {{ $t('links.about') }}
          </nuxt-link>
          <nuxt-link :to="$i18n.path('service')" active-class="is-active" exact>
            {{ $t('links.services') }}
          </nuxt-link>
          <nuxt-link :to="$i18n.path('blog')" active-class="is-active" exact>
            {{ $t('links.blog') }}
          </nuxt-link>
          <nuxt-link :to="$i18n.path('contact')" active-class="is-active" exact>
            {{ $t('links.contact') }}
          </nuxt-link>
        </p>
      </div>
    </nav>
    <nav class="level" />
    <nav class="level">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item">
          <p class="heading">Hiros.io all rights reserves</p>
        </div>
      </div>

      <!-- Right side -->
      <div class="level-right">
        <div class="level-item">
          <a href="https://twitter.com/hirosige_rancid">
            <i class="fab fa-twitter-square" style="font-size: 3rem;" />
          </a>
          <a href="mailto: hirosige1@gmail.com">
            <i class="fas fa-envelope-square" style="font-size: 3rem;" />
          </a>
          <a href="https://line.me/ti/p/_viBTFK_qn">
            <i class="fab fa-line" style="font-size: 3rem;" />
          </a>
          <a href="https://github.com/hirosige">
            <i class="fab fa-github-square" style="font-size: 3rem;" />
          </a>
        </div>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "PageFooter"
}
</script>

<style>
.vertial-top {
  display: flex;
  justify-content: center;
}

.footer > * {
  color: #ffffff;
}

.footer p {
  color: #ffffff;
}

.level-item.link a {
  color: #ffffff;
}

.level-item.link a:link {
  color: #ffffff;
}

.level-item.link a:visited {
  color: #ffffff;
}

.level-item.link a:hover {
  color: #ffffff;
  text-decoration: underline;
}

.level-item.link a:active {
  color: #ffffff;
}

.level-item.link a {
  color: #ffffff;
}

.level-item a:link {
  color: #ffffff;
}

.level-item a:visited {
  color: #ffffff;
}

.level-item a:hover {
  color: #ffffff;
  text-decoration: underline;
}

.level-item a:active {
  color: #ffffff;
}

div.level-right.links {
  padding: 0;
}

.level-item > a + a {
  margin-left: 10px;
}

.level-item.link > a + a {
  margin-left: 10px;
}
</style>
