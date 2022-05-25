import { createRouter, createWebHistory } from "vue-router";
import Counter from "./components/Counter/counter_comp.vue";
import Admin from "./components/Admin/admin_comp.vue";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    { part: "/", component: Counter },
    { path: "/admin", component: Admin },
  ],
});

export default routes;
