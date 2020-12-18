<template>
  <div class="about">
    <h1>About me</h1>
    <br />
    <div class="about-content">
      <div class="picture-me" />
      <p class="text-me">{{ $store.state.textMe }}</p>
      <button class="toggle-button" @click="$store.commit('toggleAbout')">
        Show {{ $store.state.aboutToggleText }}
      </button>
      <div class="toggle-content-container">
        <SkillsComponent v-if="!$store.state.showTimeline" />
        <TimelineComponent v-if="$store.state.showTimeline" />
      </div>
    </div>
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
      timelineIsHidden: false
    };
  }
};
</script>
