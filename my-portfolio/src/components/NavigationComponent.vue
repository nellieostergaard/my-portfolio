<template>
  <div class="nav">
    <HamburgerMenu />
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/project-1">Project 1</router-link>
      <router-link to="/project-2">Project 2</router-link>
      <router-link to="/about">About me</router-link>
    </div>
  </div>
</template>
<script>
import HamburgerMenu from "./HamburgerMenu.vue";
export default {
  components: {
    HamburgerMenu
  }
};
</script>
