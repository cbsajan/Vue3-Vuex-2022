import { createApp } from "vue";
import App from "./App.vue";

import Header_footer from "./components/header_footer/Header_Footer_Comp.vue";
import Router from "./routes";

import { createStore } from "vuex";

const app = createApp(App);

const store = createStore({
  state() {
    return {
      counter: 7,
    };
  },
  mutations: {
    add(state, payload) {
      if (payload) {
        state.counter = state.counter + payload.value;
      } else {
        state.counter++;
      }
    },
    subtract(state, payload) {
      if (payload) {
        state.counter = state.counter - payload.value;
      } else {
        state.counter--;
      }
    },
  },
});

app.component("app-header-footer", Header_footer);
app.use(Router);
app.use(store);
app.mount("#app");
