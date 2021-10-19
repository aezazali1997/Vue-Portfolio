import { defineComponent } from "vue";
import styles from "./TimelineBottom.style";
export default defineComponent({
  name: "TimelineBottom",
  props: {},
  components: {},
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
