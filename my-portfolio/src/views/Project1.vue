<template>
  <div class="project-1">
    <clock-component />
    <weather-component />
  </div>
</template>
<script>
import ClockComponent from "../components/ClockComponent.vue";
import WeatherComponent from "../components/WeatherComponent.vue";

export default {
  components: {
    "clock-component": ClockComponent,
    "weather-component": WeatherComponent
  }
};
</script>
