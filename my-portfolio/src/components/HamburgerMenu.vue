<template>
  <div
    @click="hamburgerClickEvent()"
    :class="[
      hamburgerIsClicked ? 'hamburger-container clicked' : 'hamburger-container'
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
  data: function() {
    return {
      hamburgerIsClicked: false
    };
  },
  methods: {
    hamburgerClickEvent() {
      this.hamburgerIsClicked = !this.hamburgerIsClicked;
    }
  }
};
</script>
