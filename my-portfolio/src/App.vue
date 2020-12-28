<template>
  <div id="app">
    <div class="bg" />
    <div class="bg bg2" />
    <div class="bg bg3" />
    <NavigationComponent />
    <router-view class="page-wrapper" />
    <footer>Copyright Nellie Östergaard</footer>
  </div>
</template>

<script>
import NavigationComponent from "./components/NavigationComponent.vue";
export default {
  name: "App",
  components: {
    NavigationComponent
  }
};
</script>
