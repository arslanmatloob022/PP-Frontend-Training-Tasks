<template>
  <header id="header" class="header">
    <nav class="nav">
      <div class="logo-div">
        <h1 href="#" class="nav_logo">Dot Shop</h1>
      </div>

      <ul class="nav_items">
        <li class="nav_item">
          <router-link to="/">
            <a href="#" class="nav_link"
              ><span><i class="uil uil-home"></i></span>Home</a
            ></router-link
          >
          <router-link to="/dashboard">
            <a href="#" class="nav_link"
              ><span><i class="uil uil-home"></i></span>Dashboard</a
            ></router-link
          >
          <a href="#" class="nav_link"
            ><span><i class="uil uil-fast-mail-alt"></i></span> Contact</a
          >
        </li>
      </ul>

      <button @click="showLoginForm = true" class="login-button">Login</button>
      <LoginForm v-if="showLoginForm" @close="showLoginForm = false" />
    </nav>
  </header>
</template>
<script>
import LoginForm from "./LoginForm.vue";
export default {
  name: "AppHeader",
  components: {
    LoginForm,
    // RegisterUser,
  },
  data() {
    return {
      showLoginForm: false,
      //   showRegisterUser: false,
    };
  },
};
</script>
<style scoped>
/* Header STyle*/
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

a {
  text-decoration: none;
}

a:hover {
  color: white;
}

.header {
  box-sizing: border-box;
  margin: 0;
  height: 60px;
  width: 100%;
  z-index: 100;
  padding: 0 10px;
  background-color: #0f0a0a;
}
.nav {
  width: 100%;
  height: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
}
.nav_item {
  height: 100%;
  column-gap: 20px;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.nav_link {
  color: #ffff;
  text-decoration: none;
}
.nav_link:hover {
  font-weight: 600;
  transition: ease-in-out 0.4ms;
  color: white;
  text-decoration: none;
}
.button {
  height: 100%;
  color: white;
}

.login-button {
  padding: 6px 24px;
  color: white;
  border: 2px solid rgba(18, 216, 121, 1);
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
}

/* logo */
.logo-div {
  width: 18%;
  display: flex;
}
.nav_logo {
  font-family: "Pacifico", cursive;
  font-size: 35px;
  text-decoration: none;
  color: rgba(18, 216, 121, 1);
}
.nav_logo:hover {
  font-size: 37px;
  text-decoration: none;
  color: rgb(20, 179, 47);
  transition: all 0.4s ease-in-out;
}
.button {
  padding: 6px 24px;
  border: 2px solid rgb(255, 255, 255);
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
}
.button:active {
  transform: scale(0.98);
}
</style>
