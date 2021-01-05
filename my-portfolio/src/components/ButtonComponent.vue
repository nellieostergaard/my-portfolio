<template>
  <div class="btn-container">
    <a @click="$store.commit('toggleAbout')">
      <span class="text">{{ text }}</span>
      <span class="line -right" />
      <span class="line -top" />
      <span class="line -left" />
      <span class="line -bottom" />
    </a>
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
