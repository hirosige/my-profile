<template>
  <div>
    <title-hero :title="$t('contact.title')"/>
    <div class="main-contents">
      <section-title :title="$t('contact.clause.notice')" />
      <div class="fix-width">
        <nav class="level">
          <div class="level-item">
            <article class="message is-warning">
              <div class="message-header">
                <p>お問い合わせの前に</p>
              </div>
              <div class="message-body">
                <p>こちら本当にソフトウェア開発が好きで、本気で取り組んでおります。<br><strong>以下のような方</strong>は<strong>お互い時間の無駄</strong>になりますので、<strong>お問い合わせはご遠慮</strong>願います。</p>
                <br>
                <div>
                  <p><a href="">1. 会社からお願いされて、嫌々開発ベンダーを探している方。</a></p>
                  <p><a href="">2. 無難な技術で安全にささっと終わらせたい方。</a></p>
                  <p><a href="">3. ITを勉強する気がない方 (関係者全員で協力しないといいアプリは出来ません)</a></p>
                  <p><a href="">4. 失敗したら開発者に責任を押し付ければ良いと思っている方。</a></p>
                  <p><a href="">5. 融通が利きそうなベンダーへ丸投げしようとしている方。</a></p>
                </div>
                <br>
                <p>逆に<strong>下のような方は大歓迎</strong>ですので是非ご連絡ください。本気で取り組ませて頂きます。</p>
                <br>
                <div>
                  <p><a href="">1. 良いものを作りたいと思っていて信頼できるパートナーを探してる方。</a></p>
                  <p><a href="">2. マイナーな技術が関連するプロジェクトで開発者が見つからない方。</a></p>
                  <p><a href="">3. タイ人やベトナム人のクオリティの低さに疲弊している方。</a></p>
                  <p><a href="">4. 本気でビジネスを起こしたくパートナーをお探しの方。</a></p>
                </div>
                <br>
                <p>ソフトウェア開発は<strong>非常に難しい取り組み</strong>です。お互い嫌々ではビジネスも成功しませんので、ご理解頂けたら幸いです。</p>
                <br>
                <p>※ 上の規約に同意頂けれる場合は「I AGREE」をクリックください。<br>問い合わせフォームが表示されます。</p>
                <p>
                  <button type="sumbit" class="button is-warning" style="margin-top: 30px;" @click.prevent="iAgree">I Agree</button>
                </p>
              </div>
            </article>
          </div>
        </nav>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return { title: this.$t("contact.title") }
  },
  methods: {
    iAgree: function() {
      this.$router.push(this.$i18n.path("contact/inform"))
    }
  }
}
</script>

<style>
@media screen and (min-width: 0px) and (max-width: 930px) {
  .fix-width {
    margin-right: 40px;
    margin-left: 40px;
  }
}
</style>
