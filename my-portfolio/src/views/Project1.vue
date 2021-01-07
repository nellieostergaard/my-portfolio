<template>
  <div class="project-1">
    <div class="time-container flex">
      <clock-component />
      <time-component />
    </div>
    <drag-component />
  </div>
</template>
<script>
import ClockComponent from "../components/ClockComponent.vue";
import DragDrop from "../components/DragDrop.vue";
import TimeComponent from "../components/TimeComponent.vue";

export default {
  components: {
    "clock-component": ClockComponent,
    "drag-component": DragDrop,
    "time-component": TimeComponent
  }
};
</script>
