<template>
  <div class="weather-container">
    <h1>{{ weather.name }}</h1>
    <h3>{{ weather.description }}</h3>
    <h3>{{ weather.temp }} Celcius</h3>
  </div>
</template>
<script>
export default {
  name: "WeatherComponent",
  data() {
    return {
      weather: {}
    };
  },
  beforeCreate() {
    this.$http
      .get('http://api.openweathermap.org/data/2.5/find?q=malmoe&type=like&appid=1d2b7517b2bbac162d8e5c7db6d7e8c6&units=metric').then((data) => {
        let weatherData = data.body.list[0];
        this.weather.name = weatherData.name;
        this.weather.description = weatherData.weather[0].description;
        this.weather.temp = weatherData.main.temp;
      });
  }
};
</script>
