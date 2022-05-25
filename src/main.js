import { createApp } from "vue";
import App from "./App.vue";
import Header from "./components/header_footer/Header_Comp.vue";
import Footer from "./components/header_footer/Footer_Comp.vue";
import Router from "./routes";

import { createStore } from "vuex";

const app = createApp(App);

const store = createStore({
  state() {
    return {
      counter: 7,
    };
  },
});

app.component("app-header", Header);
app.component("app-footer", Footer);
app.use(Router);
app.use(store);
app.mount("#app");
