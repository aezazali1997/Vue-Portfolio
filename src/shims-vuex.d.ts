import { Store } from "vuex";
import { ComponentCustomProperties } from "vue";
import { Route } from "vue-router";
declare module "@vue/runtime-core" {
  interface State {
    count: number;
  }
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
