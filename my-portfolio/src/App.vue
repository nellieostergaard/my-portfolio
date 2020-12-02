<template>
  <div id="app">
    <div id="nav">
      <HamburgerMenu />
      <div id="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/project-1">project 1</router-link>
        <router-link to="/project-2">project 2</router-link>
      </div>
    </div>
    <router-view class="content" />
  </div>
</template>

<script>
import HamburgerMenu from "./components/HamburgerMenu.vue";

export default {
  name: "App",
  components: {
    HamburgerMenu
  }
};
</script>
