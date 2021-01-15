<template>
  <div class="timeline-container">
    <span v-for="(item, i) in $store.state.timelineData" :key="i">
      <time>{{ item.datetime }}</time>
      <p>{{ item.company }}</p>
      <p>{{ item.event }}</p>
    </span>
  </div>
</template>
