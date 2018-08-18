<template>
  <h4 class="title is-4 has-text-centered" style="margin-bottom: 50px;">
    <span style="border-bottom: 1px solid; padding-bottom: 5px; color: #1DA08D;">{{ title }}</span>
  </h4>
</template>

<script>
export default {
  name: "SectionTitle",
  props: { title: { type: String, default: "No Title" } }
}
</script>
