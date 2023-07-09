<script>
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";

export default {
  name: "dashboard",
  components: {
    Sidebar,
    Header,
  },
};
</script>

<template>
  <div class="dashboard">
    <div id="main">
      <UsersVue></UsersVue>
      <h2>jelloooooo dashboard</h2>
      <h2>jelloooooo dashboard</h2>
      <h2>jelloooooo dashboard</h2>
    </div>
  </div>
</template>

<style>
.main {
  padding: 0;
  margin: 0;
  width: auto;
}
</style>
