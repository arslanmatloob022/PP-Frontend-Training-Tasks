<template>
  <header class="header">
    <nav class="nav">
      <div class="logo-div">
        <div class="logo-brackets"><h3>{</h3></div>
        <a href="#" class="nav_logo">Programmers Force</a>
        <div class="logo-brackets"><h3>}</h3></div>
      </div>

      <ul class="nav_items">
        <li class="nav_item">
          <a href="#" class="nav_link">Home</a>
          <a href="#" class="nav_link">Dashboard</a>
          <a href="#" class="nav_link">Configuration</a>
          <a href="#" class="nav_link">Members</a>
          <a href="#" class="nav_link">Contact</a>
        </li>
      </ul>

      <button
        class="login-button"
        onclick="window.location.href='loginPage.html'"
      >
        Logout
      </button>
    </nav>
  </header>
</template>
<script>
export default {
  name: "header";
    path: "./components/header";
}
</script>

<style></style>
