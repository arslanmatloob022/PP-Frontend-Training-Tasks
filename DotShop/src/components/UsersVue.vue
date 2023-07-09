<template>
  <div>
    <div v-for="user in users" :key="user._id" class="profile-card">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
      <p>{{ user.role }}</p>
      <p>{{ user.permissions }}</p>
      <p>{{ user.isAdmin }}</p>
    </div>
  </div>
  <!-- https://champagne-bandicoot-hem.cyclic.app/ -->
</template>
<script>
export default {
  name: "UsersVue",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.fetchUserProfiles();
  },
  methods: {
    async fetchUserProfiles() {
      try {
        const response = await fetch(
          "${https://champagne-bandicoot-hem.cyclic.app}user/profile"
        );
        const data = await response.json();
        this.users = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
.profile-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
