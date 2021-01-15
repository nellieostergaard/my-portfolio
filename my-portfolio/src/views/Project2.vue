<template>
  <div class="project-2">
    <Carousel
      :slides="productImages"
      @nextSlide="nextSlide()"
      @previousSlide="previousSlide()"
    />
    <div class="images-container">
      <div v-for="image in productImages" class="product-image" :key="image.id">
        <img :src="require('../assets/images/' + image.img)" />
      </div>
    </div>
    <div class="commerce-text">
      <h3 class="title flex">
        Air Jordan 1 - Satin Red
        <i :class="heartClass" aria-hidden="true" @click="heartClicked()" />
      </h3>
      <p class="price">200$</p>
      <p class="description">
        The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering fans of
        Jordan retros a chance to follow in the footsteps of greatness. Fresh
        colour trims the clean, classic materials, injecting some newness into
        the familiar design.
      </p>
      <p class="available small">only available online</p>
      <label for="size">Choose a size:</label>
      <select id="size" name="size">
        <option value="39"> EU 39</option>
        <option value="40">EU 40</option>
        <option value="41">EU 41</option>
        <option value="42" disabled>EU 42</option>
      </select>
      <button>Add to cart</button>
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
      heartActive: false,
      productImages: [
        {
          img: "jordans1.jpg",
          id: 1
        },
        {
          img: "jordans2.jpg",
          id: 2
        },
        {
          img: "jordans3.jpg",
          id: 3
        }
      ]
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
    },
    nextSlide() {
      const first = this.productImages.shift();
      this.productImages = this.productImages.concat(first);
    },
    previousSlide() {
      const last = this.productImages.pop();
      this.productImages = [last].concat(this.productImages);
    }
  }
};
</script>
