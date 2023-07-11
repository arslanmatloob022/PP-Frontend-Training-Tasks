<template>
  <div class="form_container" v-show="showLoginForm">
    <i class="uil uil-times form_close" @click="closeForm"></i>
    <!-- Login From -->
    <div class="form login_form">
      <form action="#">
        <h2>Login</h2>
        <div class="input_box">
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            v-model="email"
            required
          />
          <i class="uil uil-envelope-alt email"></i>
        </div>
        <div class="input_box">
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
          <i class="uil uil-lock password"></i>
          <i class="uil uil-eye-slash pw_hide"></i>
        </div>
        <div class="option_field">
          <span class="checkbox">
            <input type="checkbox" id="check" />
            <label for="check">Remember me</label>
          </span>
          <a href="#" id="forgetpswrd" class="forgot_pw">Forgot password?</a>
        </div>

        <button @click="login" class="button">Login</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLoginForm: true,
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      // const apiUrl = "https://champagne-bandicoot-hem.cyclic.app";
      const url = `https://champagne-bandicoot-hem.cyclic.app/user/login`;
      const body = {
        email: this.email,
        password: this.password,
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ${token}",
          },
          body: JSON.stringify(body),
        });
        alert("Authenticating...");
        const data = await response.json();

        if (response.ok) {
          // Login successful
          const token = data.Token;

          // Store the token or use it for subsequent API requests
          console.log("Login successful");
          console.log("Token:", token);

          this.$router.push("/dashboard");
        } else {
          window.alert("Wrong Username or Password!");
          console.log("No user Login failed:", data.error);
        }
      } catch (error) {
        alert("Error ", error);
        console.error("Error:", error);
      }
    },
    closeForm() {
      this.showLoginForm = false;
    },
  },
};
</script>

<style scoped>
.form_container {
  position: fixed;
  max-width: 320px;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2);
  z-index: 101;
  background: #0f0a0a;
  padding: 25px;
  border-radius: 28px 0px;
  border: 2px solid black;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1);
  /*opacity: 0;
  pointer-events: none;*/
  transition: all 0.4s ease-out;
}
.form_close {
  position: absolute;
  top: 10px;
  right: 20px;
  color: rgba(18, 216, 121, 1);
  font-size: 22px;
  opacity: 0.8;
  cursor: pointer;
}
.form_close:hover {
  border-radius: 5px 0px;
  background-color: rgba(18, 216, 121, 1);
  color: white;
  opacity: 1;
  cursor: pointer;
}
.form_container h2 {
  font-size: 22px;
  color: rgba(18, 216, 121, 1);
  text-align: center;
}
.input_box {
  position: relative;
  background-color: #0f0a0a;
  box-sizing: border-box;
  margin-top: 30px;
  width: 100%;
  height: 40px;
}
.input_box input {
  box-sizing: border-box;
  position: absolute;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  padding: 0 30px;
  background-color: #0f0a0a;
  color: rgb(236, 228, 228);
  transition: all 0.2s ease;
  border-bottom: 1.5px solid #aaaaaa;
}
.input_box input:focus {
  background-color: #0f0a0a;
  border-color: rgba(18, 216, 121, 1);
}
.input_box i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: rgba(18, 216, 121, 1);
}
.input_box i.email,
.input_box i.password {
  left: 0;
}
.input_box input:focus ~ i.email,
.input_box input:focus ~ i.password {
  color: rgba(18, 216, 121, 1);
}
.input_box i.pw_hide {
  color: rgba(18, 216, 121, 1);
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
  color: rgba(18, 216, 121, 1);
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
  accent-color: rgba(18, 216, 121, 1);
}
.checkbox label {
  font-size: 12px;
  cursor: pointer;
  user-select: none;
  color: rgba(18, 216, 121, 1);
}
.form_container .button {
  background: #0f0a0a;
  border: 2px solid rgba(18, 216, 121, 1);
  margin-top: 30px;
  width: 100%;
  padding: 7px 0;
  border-radius: 10px 0px;
  color: rgba(18, 216, 121, 1);
  font-size: 16px;
}

.login_signup {
  font-size: 12px;
  text-align: center;
  margin-top: 15px;
  color: rgba(18, 216, 121, 1);
}

.signup_form {
  display: none;
}
</style>
