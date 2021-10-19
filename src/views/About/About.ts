import { defineComponent } from "vue";
import styles from "./About.style";
export default defineComponent({
  name: "About",
  props: {},
  components: {},
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
