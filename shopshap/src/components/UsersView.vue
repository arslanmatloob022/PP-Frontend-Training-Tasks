<template>
  <div>
    <div v-for="user in users" :key="user._id" class="profile-card">
      <h2>user profile</h2>
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
  name: "UsersView",
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
          "https://champagne-bandicoot-hem.cyclic.app/user/profile",
          {
            headers: {
              Authorization: "Bearer ${token}",
            },
          }
        );
        const data = await response.json();
        this.users = data;
        console.log(this.users);
      } catch (error) {
        console.error(" Error fetching products", error);
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
  display: flex;
  justify-content: center;
}
.profile-card h2 {
  height: 40px;
  color: black;
}
</style>
