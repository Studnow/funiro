import { createApp } from "vue";

import VueTouchScroll from "vue-touch-scroll";

import App from "./App.vue";
import "windi.css";

const app = createApp(App);

app.use(VueTouchScroll);

app.mount("#app");
