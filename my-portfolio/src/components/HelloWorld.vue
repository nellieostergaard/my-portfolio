<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="wavy-name">
      <h2
        v-for="item in $store.state.fullName"
        :key="item.style"
        :style="item.style"
      >
        {{ item.letter }}
      </h2>
    </div>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>
