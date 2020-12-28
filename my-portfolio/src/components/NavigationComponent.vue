<template>
  <nav class="menu">
    <ol>
      <li class="menu-item"><router-link to="/">Home</router-link></li>
      <li class="menu-item">
        <a>Projects</a>
        <ol class="sub-menu">
          <li class="menu-item">
            <router-link to="/project-1">Dashboard</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/project-2">Drag and Drop</router-link>
          </li>
        </ol>
      </li>
      <li class="menu-item"><router-link to="/about">About me</router-link></li>
    </ol>
  </nav>
</template>
