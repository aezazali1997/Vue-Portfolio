import { defineComponent } from "vue";
import styles from "./Home.style";
export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
