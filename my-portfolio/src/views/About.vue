<template>
  <div class="about">
    <h1>About me</h1>
    <br />
    <div class="about-content">
      <div class="picture-me" />
      <p class="text-me">{{ $store.state.textMe }}</p>
    </div>
    <span class="toggle-text" @click="skillsIsHidden = !skillsIsHidden">
      <p>Toggle skills</p>
    </span>
    <SkillsComponent v-if="skillsIsHidden" />
    <span class="toggle-text" @click="timelineIsHidden = !timelineIsHidden">
      <p>Toggle timeline</p>
    </span>
    <TimelineComponent v-if="timelineIsHidden" />
  </div>
</template>
<script>
import TimelineComponent from "../components/TimelineComponent.vue";
import SkillsComponent from "../components/SkillsComponent.vue";

export default {
  components: {
    TimelineComponent,
    SkillsComponent
  },
  data: function() {
    return {
      timelineIsHidden: false,
      skillsIsHidden: false
    };
  }
};
</script>
