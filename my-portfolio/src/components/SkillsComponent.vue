<template>
  <div class="skills">
    <div class="shell" v-for="item in $store.state.skills" :key="item.name">
      <div class="bar" :style="{ width: item.precent + '%' }">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
