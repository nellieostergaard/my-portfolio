<template>
  <div class="wavy-text-container">
    <h1
      v-for="item in this.text"
      :key="item.style"
      :style="item.style"
      class="wavy-text"
    >
      {{ item.letter }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "WavyText",
  props: {
    text: Array
  }
};
</script>
