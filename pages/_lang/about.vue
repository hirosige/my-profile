<template>
  <section>
    <title-hero :title="$t('about.title')"/>
    <div class="main-contents">
      <section-title :title="$t('about.title')" />
      <section class="fix-width">
        <nav class="level">
          <div class="level-item">
            <article class="message is-primary">
              <div class="message-body">
                <p>バンコクを拠点にフルスタックエンジニアとして企業、<br>フリーランス開業しました。</p>
                <br>
                <p>バンコクに滞在しているものの、日本からの仕事依頼も募集しております。<br>よろしくお願いします。</p>
                <br>
                <p>以前まで、バンコクを拠点にタイ人を管理して、開発する企業におりましたが、<br>BtoB特有のメジャーな技術しか使えなく、自分の好きな技術にフォーカス出来ない状況に嫌気が指し、<br>企業兼、フリーランスになる事に決めました。</p>
                <br>
                <p>基本的には、WEB系のフルスタックエンジニアですが、<br>モバイル系等々、幅広い分野で活躍して行きたいので、ご相談大歓迎です。</p>
                <br>
              </div>
            </article>
          </div>
        </nav>
      </section>
      <section-title :title="$t('about.title')" style="margin-top: 50px;" />
      <div class="container">
        <skill-chart :skills="frontend" category="Frontend" /><br>
        <skill-chart :skills="frontend" category="Backend" /><br>
        <skill-chart :skills="frontend" category="Middleware" /><br>
        <skill-chart :skills="frontend" category="Mobile" /><br>
        <skill-chart :skills="frontend" category="Server Site" /><br>
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
    return Promise.all([
      client.getEntries({
        content_type: "skills",
        "fields.category.sys.contentType.sys.id": "skillCategories",
        "fields.category.fields.name": "Frontend",
        order: "-sys.updatedAt"
      })
    ])
      .then(([frontend]) => {
        console.log(frontend.items)
        return {
          frontend: frontend.items
        }
      })
      .catch(console.error)
  }
}
</script>

<style>
.message-body > * {
  color: #1da08d;
}

.box.param {
  margin-bottom: 0;
}

.media-left.cap {
  width: 90px;
  border-right: 1px solid var(--green);
  margin-top: 0;
}
</style>
