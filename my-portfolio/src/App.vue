<template>
  <div id="app" :class="{ 'hamburger-open': $store.state.hamburgerIsClicked }">
  <div class="bg"></div>
  <div class="bg bg2"></div>
  <div class="bg bg3"></div>
    <div id="nav">
      <HamburgerMenu />
      <div id="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/project-1">Project 1</router-link>
        <router-link to="/project-2">Project 2</router-link>
        <router-link to="/about">About me</router-link>
      </div>
    </div>
    <router-view id="page-content" />
    <footer>Copyright Nellie Östergaard</footer>
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
