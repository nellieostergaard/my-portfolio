<template>
  <div id="app">
    <NavigationComponent />
    <transition name="fade" mode="out-in">
      <router-view class="page-wrapper" />
    </transition>
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
