<template>
  <div>
    <title-hero :title="$t('contact.title')"/>
    <button type="sumbit" @click.prevent="submit">メール</button>
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
