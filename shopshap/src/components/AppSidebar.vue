<template>
  <div
    class="Sidebar"
    id="mySidebar"
    onmouseover="toggleSidebar()"
    onmouseout="toggleSidebar()"
  >
    <div class="side-nav" id="mySidebar">
      <div class="user">
        <img src="" class="user-img" />
        <div>
          <h2>Arslan Matloob</h2>
          <p>@raoarslanmatloob</p>
        </div>
        <img src="images/Hecta.png" class="star-img" />
      </div>
      <ul class="lists">
        <li>
          <i class="uil uil-users-alt"></i>
          <p>Members</p>
        </li>
        <li @click="showSignupForm = true">
          <i class="uil uil-user-plus"></i>
          <p>Add Members</p>
        </li>
        <SignupForm
          v-if="showSignupForm"
          @close="showSignupForm = false"
        ></SignupForm>

        <li>
          <i class="uil uil-book-medical"></i>
          <p>Manage Products</p>
        </li>
        <li>
          <i class="uil uil-setting"></i>
          <p>Configurations</p>
        </li>
        <li>
          <i class="uil uil-signout"></i>
          <p>Logout</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import SignupForm from "@/components/RegisterUser.vue";
export default {
  components: {
    SignupForm,
  },
  data() {
    return {
      showSignupForm: false,
    };
  },
  mounted() {
    // Add the script dynamically to the DOM
    const script = document.createElement("script");
    script.innerHTML = `
      var mini = true;

      function toggleSidebar() {
        if (mini) {
          console.log("opening sidebar");
          document.getElementById("mySidebar").style.width = "250px";
          document.getElementById("main").style.marginLeft = "255px";
          mini = false;
        } else {
          console.log("closing sidebar");
          document.getElementById("mySidebar").style.width = "80px";
          document.getElementById("main").style.marginLeft = "85px";
          mini = true;
        }
      }
    `;

    document.body.appendChild(script);
  },
};
</script>

<style scoped>
.Sidebar {
  width: 100%;
  transition: marging-left 0.4s;
  z-index: 1;
}
.side-nav {
  width: 50px;
  height: 90%;
  position: fixed;
  top: 60px;
  left: 0;
  padding: 30px 15px;
  background: #0f0a0a;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transition: width 0.6s;
  z-index: 1000;
}
.user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  font-size: 12px;
  padding: 10px;
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  z-index: 1000;
}
.user div {
  display: none;
  z-index: 1000;
}
.user h2 {
  color: whitesmoke;
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  z-index: 1000;
}
.user-img {
  width: 40px;
  border-radius: 50%;
  margin: auto;
  z-index: 1000;
  background-color: black;
}
.star-img {
  width: 20px;
  display: none;
  z-index: 1000;
}
.lists {
  list-style: none;
  padding: 0 15px;
  z-index: 1000;
}
.lists li {
  margin: 60px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.lists li i {
  font-size: 22px;
  color: rgb(255, 255, 255);
  width: 30px;
  margin-right: 0px;
}
.lists li p {
  white-space: nowrap;
  display: none;
  color: white;
  font: bold;
}
.side-nav:hover {
  width: 220px;
}
.side-nav:hover .user div {
  display: block;
}

.side-nav:hover .user {
  width: 90%;
  background: rgba(18, 216, 121, 1);
}
.side-nav:hover .star-img {
  display: block;
}
.side-nav:hover .user-img {
  margin: 0;
}
.side-nav:hover ul li p {
  margin-top: 10px;
  display: block;
}
.side-nav:hover ul li i {
  color: rgb(234, 235, 234);
  margin-right: 10px;
}
.side-nav:hover ul li {
  margin: 40px 0;
  justify-content: flex-start;
  transition: 0.3s;
}
</style>
