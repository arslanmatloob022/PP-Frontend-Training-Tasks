<template>
  <header id="header" class="header">
    <nav class="nav">
      <div class="logo-div">
        <h1 href="#" class="nav_logo">Dot Shop</h1>
      </div>

      <ul class="nav_items">
        <li class="nav_item">
          <a href="#" class="nav_link">Home</a>
          <!-- <a href="#" class="nav_link">Dashboard</a>
          <a href="#" class="nav_link">Configuration</a>
          <a href="#" class="nav_link">Members</a> -->
          <a href="#" class="nav_link">Contact</a>
        </li>
      </ul>

      <button @click="showLoginForm = true" class="login-button">Login</button>
      <LoginForm v-if="showLoginForm" @close="showLoginForm = false" />
    </nav>
  </header>
  <WelcomeDisplay />
</template>

<script>
import LoginForm from "./components/loginForm.vue";
import WelcomeDisplay from "./components/welcomedisp.vue";

export default {
  name: "App",
  components: {
    WelcomeDisplay,
    LoginForm,
  },
  data() {
    return {
      showLoginForm: false,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Poppins", sans-serif;
  background-image: url("../src/assets/feather-3010848.jpg");
}

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
