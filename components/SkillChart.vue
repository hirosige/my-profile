<template>
  <div>
    <h4 class="title is-4" style="color: #1da08d;">{{ category }}</h4>
    <div v-for="(skill, index) in skills" :key="index">
      <div class="box param" style="border-radius: 0; background: #1da08d; color: #ffffff;">
        <article class="media">
          <div class="media-left cap">
            {{ skill.fields.name }}<br>
            <span class="tag is-primary" style="font-size: 0.6rem; border-radius: 3px; margin-top: 5px;">
              UP: {{ $store.state.locale, skill.sys.updatedAt | moment }}
            </span>
          </div>
          <div class="media-content" style="padding-top: 17px;">
            <progress :value="skill.fields.proficiency" class="progress is-primary" max="100" />
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment"

export default {
  name: "SkillChart",
  filters: {
    moment: (locale, date) => {
      moment.locale(locale)
      return moment(date).format("LL")
    }
  },
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
