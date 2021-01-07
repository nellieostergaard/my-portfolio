<template>
  <span>
    <p class="drag-item-text" v-if="!showInput" @click="showInput = true">
      {{ item.name }}
    </p>
    <input
      class="input"
      v-else
      type="text"
      v-model="newName"
      @change="changeName(item)"
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
    changeName(item) {
      item.name = this.newName;
      this.showInput = false;
      this.newName = "";
    }
  }
};
</script>
