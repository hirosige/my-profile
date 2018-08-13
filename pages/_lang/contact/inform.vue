<template>
  <div>
    <title-hero :title="$t('contact.inform.title')"/>
    <div class="main-contents">
      <div class="columns is-mobile is-centered">
        <div class="column is-three-quarters">
          <div class="field">
            <div class="control">
              <input :placeholder="$t('contact.inform.name')" class="input is-primary" type="text">
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input :placeholder="$t('contact.inform.company_name')" class="input is-primary" type="text">
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input :placeholder="$t('contact.inform.email')" class="input is-primary" type="text">
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input :placeholder="$t('contact.inform.subject')" class="input is-primary" type="text">
            </div>
          </div>

          <div class="field">
            <div class="control">
              <textarea :placeholder="$t('contact.inform.description')" class="textarea is-primary sharped" />
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary">{{ $t('contact.inform.submit') }}</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  methods: {
    submit: async function() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(res)
    }
  }
}
</script>

<style>
.sharped {
  border-radius: 0;
}

input::placeholder {
  color: var(--green);
}

textarea::placeholder {
  color: var(--green);
}
</style>
