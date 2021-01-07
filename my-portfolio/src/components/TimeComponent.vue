<template>
  <span class="time-text"> Good {{ currentTime }} !</span>
</template>
<script>
export default {
  name: "TimeComponent",
  computed: {
    currentTime() {
      const time = new Date().toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "numeric"
      });
      const hours = parseInt(time.substring(0, 2));
      if (hours > 3 && hours < 12) {
        return "Morning";
      } else if (hours > 12 && hours < 18) {
        return "Afternoon";
      }
      return "Evening";
    }
  }
};
</script>
