<template>
  <div class="project-2">
    <h3>
      Drag and Drop - Move one or multiple items between the different columns
    </h3>
    <div class="form__group">
      <input
        type="text"
        class="form__input"
        id="name"
        :placeholder="formPlaceholder"
        v-model="newItemName"
        @change="addNewItem(newItemName)"
      />
    </div>
    <div class="drag-container" v-drag-and-drop:options="options">
      <ul class="drag-list">
        <li
          class="drag-column"
          v-for="group in $store.state.dragGroups"
          :key="group.id"
        >
          <span class="drag-column-header">
            <h2>{{ group.name }}</h2>
          </span>
          <vue-draggable-group
            v-model="group.items"
            :groups="$store.state.dragGroups"
            :data-id="group.id"
          >
            <ul
              class="drag-inner-list"
              :data-id="group.id"
              :class="group.class"
            >
              <li
                class="drag-item"
                v-for="item in group.items"
                :key="item.id"
                :data-id="item.id"
              >
                <div class="drag-item-text">{{ item.name }}</div>
              </li>
            </ul>
          </vue-draggable-group>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newItemName: "",
      formPlaceholder: "Add new todo",
      options: {
        dropzoneSelector: ".drag-inner-list",
        draggableSelector: ".drag-item"
      }
    };
  },
  methods: {
    addNewItem(name) {
      this.$store.commit("addNewItem", name);
      this.newItemName = "";
    }
  }
};
</script>
