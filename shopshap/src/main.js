import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import main from "../src/assets/main.css";

createApp(App).use(store).use(main).use(router).mount("#app");
