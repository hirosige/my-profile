<template>
  <div>
    <h4 class="title is-4" style="color: #1da08d;">{{ category }}</h4>
    <div v-for="(skill, index) in skills" :key="index">
      <div class="box param" style="border-radius: 0; background: #1da08d; color: #ffffff;">
        <article class="media">
          <div class="media-left cap">
            {{ skill.fields.name }}
          </div>
          <div class="media-content" style="padding-top: 5px;">
            <progress :value="skill.fields.proficiency" class="progress is-primary" max="100" />
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillChart",
  props: {
    skills: {
      type: Array,
      default: () => []
    },
    category: {
      type: String,
      default: "No Category"
    }
  }
}
</script>
