import { defineComponent } from "vue";
import styles from "./ProjectDate.style";
export default defineComponent({
  name: "Date",
  props: {
    date: Number,
  },
  components: {},
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
