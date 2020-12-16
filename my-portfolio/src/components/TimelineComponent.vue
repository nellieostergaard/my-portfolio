<template>
  <div class="timeline">
    <div
      v-for="(item, i) in $store.state.timelineData"
      v-bind:key="i"
      :class="i % 2 ? 'timeline-item left' : 'timeline-item right'"
    >
      <div class="content">
        <h2>{{ item.datetime }}</h2>
        <p>{{ item.event }}</p>
      </div>
    </div>
  </div>
</template>
