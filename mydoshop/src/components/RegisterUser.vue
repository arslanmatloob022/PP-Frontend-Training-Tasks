<template>
  <link
    rel="stylesheet"
    href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
  />
  <div class="form_container">
    <i @click="showSignupForm = false" class="uil uil-times form_close"></i>
    <!-- Login From -->
    <div class="form login_form">
      <form action="#">
        <h2>Register User</h2>
        <div class="input_box">
          <input type="text" placeholder="Enter Name" required />
          <i class="uil uil-user-md name"></i>
        </div>
        <div class="input_box">
          <input type="email" placeholder="Enter Email" required />
          <i class="uil uil-envelope-alt email"></i>
        </div>
        <div class="input_box">
          <input type="password" placeholder="Enter Password" required />
          <i class="uil uil-lock password"></i>
          <i class="uil uil-eye-slash pw_hide"></i>
        </div>
        <div class="input_box">
          <input type="role" placeholder="Enter Role" required />
          <i class="uil uil-user-exclamation name"></i>
        </div>
        <div class="input_box">
          <input type="array" placeholder="Enter Permissions" required />
          <i class="uil uil-user-check name"></i>
        </div>
        <button class="button">Register</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "SignupForm",
  //   closeSignup() {
  //     this.$emit("close");
  //   },
  data() {
    return {
      showSignupForm: true,
      showLoginForm: false,
    };
  },
  components: {},
};
</script>

<style scoped>
.form_container {
  position: fixed;
  max-width: 280px;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2);
  z-index: 101;
  background: #0f0a0a;
  padding: 20px;
  border-radius: 28px 0px;
  border: 2px solid black;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-out;
}
.form_close {
  position: absolute;
  top: 10px;
  right: 20px;
  color: #16db65;
  font-size: 22px;
  opacity: 0.8;
  cursor: pointer;
}
.form_close:hover {
  border-radius: 5px 0px;
  background-color: #16db65;
  color: white;
  opacity: 1;
  cursor: pointer;
}
.form_container h2 {
  font-size: 22px;
  color: #16db65;
  text-align: center;
}
.input_box {
  position: relative;
  box-sizing: border-box;
  margin-top: 10px;
  width: 100%;
  height: 40px;
}
.input_box input {
  left: 0;
  position: absolute;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  padding: 0 20px;
  background-color: #0f0a0a;
  color: rgb(236, 228, 228);
  transition: all 0.2s ease;
  border-bottom: 1.5px solid #aaaaaa;
}
.input_box input:focus {
  border-color: #16db65;
}
.input_box i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #16db65;
}
.input_box i.email,
.input_box i.name {
  left: 0;
}
.input_box i.password {
  left: 0;
}
.input_box input:focus ~ i.email,
.input_box input:focus ~ i.password {
  color: #16db65;
}
.input_box i.pw_hide {
  color: #16db65;
  right: 0;
  font-size: 18px;
  cursor: pointer;
}

/* Options or Links*/
.option_field {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form_container a {
  text-decoration: none;
  color: #16db65;
  font-size: 12px;
}
.form_container a:hover {
  text-decoration: underline;
}
.checkbox {
  display: flex;
  column-gap: 8px;
  white-space: nowrap;
}
.checkbox input {
  accent-color: #16db65;
}
.checkbox label {
  font-size: 12px;
  cursor: pointer;
  user-select: none;
  color: #16db65;
}
.form_container .button {
  background: #0f0a0a;
  border: 2px solid #16db65;
  margin-top: 30px;
  width: 100%;
  padding: 7px 0;
  border-radius: 10px 0px;
  color: #16db65;
  font-size: 16px;
}

.login_signup {
  font-size: 12px;
  text-align: center;
  margin-top: 15px;
  color: #16db65;
}

.signup_form {
  display: none;
}
</style>
