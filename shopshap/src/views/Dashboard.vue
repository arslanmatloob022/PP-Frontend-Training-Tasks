<template>
  <AppHeader></AppHeader>
  <AppSidebar></AppSidebar>
  <div id="main">
    <h2>jelloooooo dashboard</h2>
    <h2>jelloooooo dashboard</h2>
    <h2>jelloooooo dashboard</h2>
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppSidebar from "@/components/AppSidebar.vue";
export default {
  name: "dashboard",
  components: {
    AppSidebar,
  },
};
</script>

<style>
#main {
  margin-left: 85px;
  transition: width 0.6s;
  transition: marging-left 0.6s;
  transition: marging-right 0.6s;
}
</style>
