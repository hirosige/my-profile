<template>
  <div>
    <title-hero :title="$t('contact.title')"/>
    <div class="container">
      <div class="content has-text-centered">
        <h1>Hello World</h1>
        <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
        <button type="sumbit" class="button is-primary" @click.prevent="iAgree">I Agree</button>
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
