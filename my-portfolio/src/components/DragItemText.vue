<template>
  <span class="drag-item-text-container">
    <p class="drag-item-text" v-if="!showInput" @click="showInput = true">
      {{ item.name }}
    </p>
    <input
      class="input"
      v-else
      type="text"
      v-model="newName"
      @keyup.enter="changeName()"
    />
  </span>
</template>
<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {
      newName: "",
      showInput: false
    };
  },
  methods: {
    changeName() {
      if (this.newName !== "") {
        this.item.name = this.newName;
      }
      this.showInput = false;
    }
  }
};
</script>
