import { createApp } from "vue";
import App from "./App.vue";

import Header_footer from "./components/header_footer/Header_Footer_Comp.vue";
import Store from "./components/Store";
import Router from "./routes";


const app = createApp(App);




app.component("app-header-footer", Header_footer);
app.use(Router);
app.use(Store)

app.mount("#app");
