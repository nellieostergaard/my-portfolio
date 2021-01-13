<template>
  <div class="project-2 flex">
    <Carousel />
    <div class="commerce-text flex">
      <h3 class="title flex">
        Seamless tanktop<i
          :class="heartClass"
          aria-hidden="true"
          @click="heartClicked()"
        />
      </h3>
      <p class="price">200Kr</p>
      <p class="description">
        En figurnära, croppad tanktop i ribbad trikå konstruerad med minimalt
        antal sömmar för en sömlös, behaglig känsla mot huden. Toppen är smalt
        skuren upptill.
      </p>
      <p class="available small">only available online</p>
      <label for="size">Choose a size:</label>
      <select id="size" name="size">
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
    </div>
  </div>
</template>
<script>
import Carousel from "../components/Carousel.vue";

export default {
  components: {
    Carousel
  },
  data() {
    return {
      heartClass: "fa fa-heart-o",
      heartActive: false
    };
  },
  methods: {
    heartClicked() {
      this.heartActive = !this.heartActive;
      if (this.heartActive) {
        this.heartClass = "fa fa-heart";
      } else {
        this.heartClass = "fa fa-heart-o";
      }
    }
  }
};
</script>
