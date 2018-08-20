<template>
  <section>
    <title-hero :title="$t('about.title')"/>
    <div class="main-contents">
      <about-me />
      <section-title title="Skills" style="margin-top: 50px;" />
      <div class="container">
        <div class="fix-width">
          <skill-chart :skills="frontend" category="Frontend" /><br>
          <skill-chart :skills="backend" category="Backend" /><br>
          <skill-chart :skills="middleware" category="Middleware" /><br>
          <skill-chart :skills="mobile" category="Mobile" /><br>
          <skill-chart :skills="serverSide" category="Server Site" /><br>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { createClient } from "~/plugins/contentful.js"
import SkillChart from "~/components/SkillChart.vue"
import AboutMe from "~/components/AboutMe.vue"

const client = createClient()

export default {
  transition: "bounce",
  head() {
    return { title: this.$t("about.title") }
  },
  components: {
    SkillChart,
    AboutMe
  },
  asyncData() {
    let getSkills = searchKeyword => {
      return client.getEntries({
        content_type: "skills",
        "fields.category.sys.contentType.sys.id": "skillCategories",
        "fields.category.fields.name": searchKeyword,
        order: "-sys.updatedAt"
      })
    }

    return Promise.all([
      getSkills("Frontend"),
      getSkills("Backend"),
      getSkills("Middleware"),
      getSkills("Mobile"),
      getSkills("Server Side")
    ])
      .then(([frontend, backend, middleware, mobile, serverSide]) => {
        return {
          frontend: frontend.items,
          backend: backend.items,
          middleware: middleware.items,
          mobile: mobile.items,
          serverSide: serverSide.items
        }
      })
      .catch(console.error)
  }
}
</script>

<style>
.message-body.positive > * {
  color: #1da08d;
}

.box.param {
  margin-bottom: 0;
}

strong.underline {
  text-decoration: underline;
}

.media-left.cap {
  width: 125px;
  border-right: 1px solid var(--green);
  margin-top: 0;
}

@media screen and (min-width: 0px) and (max-width: 1000px) {
  .fix-width {
    margin-right: 10px;
    margin-left: 10px;
  }
}
</style>
