<template>
  <link
    rel="stylesheet"
    href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
  />
  <header id="header" class="header">
    <nav class="nav">
      <div class="logo-div">
        <h1 href="#" class="nav_logo">Dot Shop</h1>
      </div>

      <ul class="nav_items">
        <li class="nav_item">
          <a href="#" class="nav_link"
            ><span><i class="uil uil-home"></i></span>Home</a
          >
          <a href="#" class="nav_link"
            ><span><i class="uil uil-fast-mail-alt"></i></span> Contact</a
          >
          <RegisterUser
            v-if="showRegisterUser"
            @close="showRegisterUser = false"
          />

          <!-- <SignupForm /> -->
        </li>
      </ul>

      <button @click="showLoginForm = true" class="login-button">Login</button>
      <LoginForm v-if="showLoginForm" @close="showLoginForm = false" />
    </nav>
  </header>
</template>

<script lang="en">
export default {
  name: "Header",
  data() {
    return {
      showLoginForm: false,
    };
  },
};
</script>
<style></style>
