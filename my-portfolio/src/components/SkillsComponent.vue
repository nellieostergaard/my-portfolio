<template>
  <div class="skills-container">
    <ul
      v-for="(item, i) in $store.state.skills"
      :key="i"
      class="skills-list"
    ></ul>
  </div>
</template>
<script>
export default {};
</script>
