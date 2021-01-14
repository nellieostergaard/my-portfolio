<template>
  <nav role="navigation" class="primary-navigation">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li>
        <a href="#">Projects &dtrif;</a>
        <ul class="dropdown">
          <li><router-link to="/project-1">Dashboard</router-link></li>
          <li><router-link to="/project-2">TBA</router-link></li>
        </ul>
      </li>
      <li><router-link to="/about">About me</router-link></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</template>
