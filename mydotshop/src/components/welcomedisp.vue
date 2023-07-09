<template>
  <div class="mainDiv">
    <div class="wellcomeTile">
      <div class="Text">
        <h1 class="welcomeText">Welcome to CRM Application</h1>
        <h2 class="welcomeTextp">To See all the Statistics</h2>
        <h2 class="welcomeTextp">To see all the Members</h2>
        <h2 class="welcomeTextp">to see all the Operations,</h2>
        <h2 class="welcomeTextp">Please Login</h2>
      </div>

      <div class="images">
        <img
          class="imgOne"
          src="../assets/feather-3010848.jpg"
          alt=""
          srcset=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WelcomeDisplay",
};
</script>

<style>
.mainDiv {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 580px;
}
.wellcomeTile {
  display: flex;
  align-items: center;
  border: 2px solid #16db65;
  border-radius: 15px;
  backdrop-filter: blur(8px);
  width: 80%;
  height: 80%;
}
.Text {
  margin-top: 60px;
  padding: 30px;
  width: 50%;
  height: 100%;
}
.images {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
}
.welcomeText {
  margin-bottom: 20px;
  font-weight: 700;
  transition: color 0.4s ease-out;
  color: #0f0a0a;
  display: inline-block;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.welcomeText:hover {
  color: black;
  font-weight: bold;
  cursor: pointer;
}
.welcomeTextp {
  margin-bottom: 20px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  transition: color 0.4s ease-out;
  color: #0f0a0a;
}
.welcomeTextp:hover {
  font-weight: bolder;
  cursor: pointer;
  color: black;
}
.images img {
  border: 1px solid #16db65;
  border-radius: 20px;
  width: 400px;
  height: 380px;
}
.Text button {
  float: right;
  padding: 7px 20px;
  border-radius: 10px;
  border: 3px solid #16db65;
  color: orangered;
}
</style>
