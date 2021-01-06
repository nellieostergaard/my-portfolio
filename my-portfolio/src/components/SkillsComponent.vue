<template>
  <div class="skills-container">
    <div
      v-for="(item, i) in $store.state.skillsData"
      :key="i"
      class="skills-content"
    >
      <div class="skills-text">
        <h3>{{ item.name }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
