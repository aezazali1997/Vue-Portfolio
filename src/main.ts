import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import apolloClient from "@/services/Apollo/apolloClient";
import App from "./App.vue";
import router from "./router";
import { key, store } from "@/store";
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});
app.use(router);
app.use(store, key);
app.mount("#app");
