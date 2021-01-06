<template>
  <div class="home">
    <WavyText :text="$store.state.bigHello" />
    <br />
    <div class="welcome-text-container">
      <h2>Welcome to my portfolio</h2>
      <div class="text-container">
        <p>
          My name is Nellie Östergaard and this is a website I have created
          entirely in Vue.js.
          <br />
          Please feel free to check out some small but fun projects in the
          navigation above
          <br />
          or to know more about me you can click on
          <router-link to="/About">about me.</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import WavyText from "../components/WavyText.vue";
export default {
  name: "Home",
  components: {
    WavyText
  }
};
</script>
