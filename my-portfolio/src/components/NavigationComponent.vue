<template>
  <nav role="navigation" :class="$store.state.atPage">
    <input class="nav-btn" type="checkbox" id="nav-btn" />
    <label class="nav-icon" for="nav-btn"><span class="navicon"></span></label>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li>
        <a>Projects</a>
        <ul class="dropdown">
          <li><router-link to="/project-1">Dashboard</router-link></li>
          <li><router-link to="/project-2">TBA</router-link></li>
        </ul>
      </li>
      <li><router-link to="/about">About me</router-link></li>
    </ul>
  </nav>
</template>
