import { createApp } from "vue";
/* import { apolloProvider } from "./services/Apollo/apolloClient";
 */ import App from "./App.vue";
import router from "./router";
const app = createApp(App);
app.use(router);
/* app.use(apolloProvider);
 */ app.mount("#app");
