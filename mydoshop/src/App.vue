<!-- <template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template> -->

<script>
import { RouterLink, RouterView } from "vue-router";
// import Header from "./components/Header.vue";
</script>

<template>
  <h1>THis is App view</h1>
  <Header />
  <RouterView />
</template>
