import { defineComponent } from "vue";
import styles from "./App.style";
import { key } from "@/store";
import { useStore } from "vuex";
export default defineComponent({
  name: "App",
  props: {},
  components: {},
  setup() {
    // const store = useStore(key);
    const classes = styles();
    // const increment = () => {};
    return {
      classes,
      // increment,
    };
  },
});
