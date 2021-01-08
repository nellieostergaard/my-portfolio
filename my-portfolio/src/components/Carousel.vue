<template>
  <div class="carousel-view">
    <transition-group class="carousel" tag="div">
      <div v-for="slide in slides" class="slide" :key="slide.id">
        <div class="carousel-controls">
          <span class="carousel-controls previous" @click="previous"></span>
          <span class="carousel-controls next" @click="next"></span>
        </div>
        <img
          class="slide-image"
          :src="require('../assets/images/' + slide.img)"
        />
        <h4>{{ slide.title }}</h4>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          title: "I am Slide A",
          img: "test-image.jpg",
          id: 1
        },
        {
          title: "I am Slide B",
          img: "test2.jpg",
          id: 2
        },
        {
          title: "I am Slide C",
          img: "test-image.jpg",
          id: 3
        },
        {
          title: "I am Slide D",
          img: "test2.jpg",
          id: 4
        },
        {
          title: "I am Slide E",
          img: "test-image.jpg",
          id: 5
        }
      ]
    };
  },
  methods: {
    next() {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);
    },
    previous() {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
    }
  }
};
</script>
