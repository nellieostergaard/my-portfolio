<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/project-1">project 1</router-link>
      <router-link to="/project-2">project 2</router-link>
    </div>
    <router-view class="content" />
  </div>
</template>
