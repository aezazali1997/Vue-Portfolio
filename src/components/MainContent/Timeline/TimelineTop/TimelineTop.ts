import { defineComponent } from "vue";
import styles from "./TimelineTop.style";
export default defineComponent({
  name: "TimelineTop",
  props: {},
  components: {},
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
