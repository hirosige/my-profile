<template>
  <div>
    <button type="sumbit" @click.prevent="submit">メール</button>
  </div>
</template>

<script>
  export default {
    methods: {
      submit: function() {
        console.log('test');
      }
    }
  }
</script>