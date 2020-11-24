<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="wavy-name">
      <h3
        v-for="item in $store.state.fullName"
        :key="item.style"
        :style="item.style"
      >
        {{ item.letter }}
      </h3>
    </div>
    <p>
      Please feel free to check out some of my projects in the navigation above
      <br />
      or to know more about me you can click on this link
      <router-link to="/About">about me</router-link>
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
