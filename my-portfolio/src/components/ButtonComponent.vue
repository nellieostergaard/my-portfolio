<template>
  <div
    class="button-container"
    align="center"
    @click="$store.commit('toggleAbout')"
  >
    <span class="button-text"> {{ text }}</span>
  </div>
</template>
<script>
export default {
  name: "ButtonComponent",
  props: {
    text: {
      type: String,
      required: false
    }
  }
};
</script>
