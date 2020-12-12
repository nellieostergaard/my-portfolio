<template>
  <div class="weather-container">
    <h1>{{ $store.state.weather.name }}</h1>
    <h3>{{ $store.state.weather.description }}</h3>
    <h3>{{ $store.state.weather.temp }} Celcius</h3>
  </div>
</template>
<script>
export default {
  name: "WeatherComponent",
  mounted() {
    this.$store.dispatch("getWeatherData");
  }
};
</script>
