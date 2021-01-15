<template>
  <div class="carousel-view">
    <transition-group class="carousel" tag="div">
      <div v-for="slide in slides" class="slide" :key="slide.id">
        <img
          class="slide-image"
          :src="require('../assets/images/' + slide.img)"
        />
      </div>
    </transition-group>
    <div class="carousel-controls">
      <span
        class="carousel-controls previous"
        @click="$emit('previousSlide')"
      ></span>
      <span class="carousel-controls next" @click="$emit('nextSlide')"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array
    }
  }
};
</script>
