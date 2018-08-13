<template>
  <div>
    <title-hero :title="$t('contact.title')"/>
    <div class="main-contents">
      <div class="columns is-mobile is-centered">
        <div class="column is-8">
          <h1 class="has-text-centered">Hello World</h1>

          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub works as well!</p>
            <ul>
              <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
              <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
              <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
              <li>Ut non enim metus.</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub works as well!</p>
            <ul>
              <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
              <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
              <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
              <li>Ut non enim metus.</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub works as well!</p>
          </div>
          
          <div class="content is-center">
            <button type="sumbit" class="button is-primary" style="margin-top: 30px;" @click.prevent="iAgree">I Agree</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    iAgree: function() {
      this.$router.push(this.$i18n.path("contact/inform"))
    }
  }
}
</script>
