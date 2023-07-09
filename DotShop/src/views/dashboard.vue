<script lang="ts">
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";
import UsersVue from "../components/UsersVue.vue";

export default {
  name: "dashboard",
  components: {
    Sidebar,
    Header,
    UsersVue,
  },
};
</script>

<template>
  <Sidebar />
  <div id="main">
    <UsersVue></UsersVue>
    <h2>jelloooooo dashboard</h2>
    <h2>jelloooooo dashboard</h2>
    <h2>jelloooooo dashboard</h2>
  </div>
</template>

<style>
.main {
  padding: 0;
  margin: 0;
  width: auto;
}
</style>
