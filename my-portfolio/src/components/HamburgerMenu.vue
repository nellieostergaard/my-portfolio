<template>
  <div
    @click="hamburgerClickEvent()"
    :class="[
      $store.state.hamburgerIsClicked
        ? 'hamburger-container clicked'
        : 'hamburger-container'
    ]"
  >
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
</template>

<script>
export default {
  name: "HamburgerMenu",
  methods: {
    hamburgerClickEvent() {
      this.$store.commit("hamburgerMenuIsClicked");
    }
  }
};
</script>
