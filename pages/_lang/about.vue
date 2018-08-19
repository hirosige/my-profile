<template>
  <section>
    <title-hero :title="$t('about.title')"/>
    <div class="main-contents">
      <section-title :title="$t('about.title')" />
      <section class="fix-width">
        <nav class="level">
          <div class="level-item">
            <article class="message is-primary">
              <div class="message-body positive">
                <p>バンコクを拠点に<strong class="underline">フルスタックエンジニア</strong>として企業、<br>フリーランス開業しました。</p>
                <br>
                <p><strong class="underline">バンコク</strong>に滞在しているものの、<strong class="underline">日本からの仕事依頼</strong>も受けてます。<br>よろしくお願いします。</p>
                <br>
                <p>以前まで、バンコクを拠点にタイ人を管理して、開発する企業におりましたが、<br>BtoB特有のメジャーな技術しか使えなく、自分の好きな技術にフォーカス出来ない状況に嫌気が指し、<br>企業兼、フリーランスになる事に決めました。</p>
                <br>
                <p>基本的には、<strong class="underline">WEB系のフルスタックエンジニア</strong>ですが、<br><strong class="underline">モバイル系等々、幅広い分野</strong>で活躍して行きたいので、ご相談大歓迎です。</p>
                <br>
              </div>
            </article>
          </div>
        </nav>
      </section>
      <section-title :title="$t('about.title')" style="margin-top: 50px;" />
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

const client = createClient()

export default {
  transition: "bounce",
  head() {
    return { title: this.$t("about.title") }
  },
  components: {
    SkillChart
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
