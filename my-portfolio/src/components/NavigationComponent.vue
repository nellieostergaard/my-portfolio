<template>
  <nav
    class="menu"
    :class="{ 'dropdown-active': $store.state.showDropDownMenu }"
  >
    <div class="menu-hamburger" @click="$store.commit('toggleMobileMenu')" />
    <ol>
      <li class="menu-item"><router-link to="/">Home</router-link></li>
      <li class="menu-item"><router-link to="/about">About me</router-link></li>
      <li class="menu-item">
        <a>Projects</a>
        <ol class="sub-menu">
          <li class="menu-item">
            <router-link to="/project-1">Dashboard</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/project-2">TBA</router-link>
          </li>
        </ol>
      </li>
    </ol>
  </nav>
</template>
