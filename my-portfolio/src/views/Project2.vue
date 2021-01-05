<template>
  <div class="project-2">
    <h3>
      Drag and Drop - Move one or multiple items between the different columns
    </h3>
    <label for="name">Add new item (2 to 8 characters): </label>
    <input
      type="text"
      id="name"
      name="name"
      required
      minlength="2"
      maxlength="8"
      size="10"
      v-model="newItemName"
      @change="$store.commit('addNewItem', newItemName)"
    />
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
      options: {
        dropzoneSelector: ".drag-inner-list",
        draggableSelector: ".drag-item"
      }
    };
  }
};
</script>
