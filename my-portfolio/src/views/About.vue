<template>
  <div class="about">
    <h1>About me</h1>
    <br />
    <div class="about-content">
      <div class="me-content-container">
        <img class="picture-me" src="../assets/images/me.png" />
        <p class="text-me">{{ $store.state.textMe }}</p>
        <br />
      </div>
      <ButtonComponent :text="$store.state.aboutToggleText" />
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
import ButtonComponent from "../components/ButtonComponent.vue";

export default {
  components: {
    TimelineComponent,
    SkillsComponent,
    ButtonComponent
  }
};
</script>
