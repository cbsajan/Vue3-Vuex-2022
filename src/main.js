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
      prizes: ["Car", "Baby", "Coffee", "Guitar", "Nothing :*("],
      attempts: 0,
      auth: false,
    };
  },
  getters: {
    getCount(state) {
      return state.counter;
    },
    getAttempts(state) {
      return state.attempts;
    },
    getPrize(state, getters) {
      let prize = "";
      state.attempts++;

      for (let step = 0; step < state.counter; step++) {
        prize = state.prizes[Math.floor(Math.random() * state.prizes.length)];
      }
      return {
        prize,
        attempts: getters.getAttempts,
      };
    },
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
    setAuth(state, payload) {
      state.auth = payload.value;
    },
  },
  actions: {
    authUser(context) {
      console.log(context);
      setTimeout(() => {
        context.commit("setAuth", { value: true });
        context.dispatch("analytics", { username: "Francis" });
      }, 500);
    },
    signOut(context, payload) {
      context.commit("setAuth", { value: payload });
    },
    analytics(context, payload) {
      console.log({
        title: "Ne sign in",
        username: payload.username,
      });
    },
  },
});

app.component("app-header-footer", Header_footer);
app.use(Router);
app.use(store);
app.mount("#app");
