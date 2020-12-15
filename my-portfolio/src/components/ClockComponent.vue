<template>
  <div class="clock">
    <div class="clock__second"></div>
    <div class="clock__minute"></div>
    <div class="clock__hour"></div>
    <div class="clock__axis"></div>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
    <section class="clock__indicator"></section>
  </div>
</template>
<script>
export default {
  name: "ClockComponent",
  mounted() {
    setInterval(this.setDate, 1000);
    this.setDate();
  },
  methods: {
    getSecondsToday() {
      let now = new Date();
      let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      let diff = now - today;
      return Math.round(diff / 1000);
    },
    setTime(left, hand) {
      const handElement = document.getElementsByClassName("clock__" + hand)[0];
      if (handElement) {
        handElement.style.animationDelay = "" + left * -1 + "s";
      }
    },
    setDate() {
      var currentSec = this.getSecondsToday();

      var seconds = (currentSec / 60) % 1;
      var minutes = (currentSec / 3600) % 1;
      var hours = (currentSec / 43200) % 1;

      this.setTime(60 * seconds, "second");
      this.setTime(3600 * minutes, "minute");
      this.setTime(43200 * hours, "hour");
    }
  }
};
</script>
