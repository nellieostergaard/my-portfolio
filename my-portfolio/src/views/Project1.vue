<template>
  <div class="project-1">
    <h1>This is a test page</h1>
    <clock-component />
  </div>
</template>
<script>
import ClockComponent from "../components/ClockComponent.vue";
export default {
components: {
  'clock-component' : ClockComponent 
 }
};
</script>
