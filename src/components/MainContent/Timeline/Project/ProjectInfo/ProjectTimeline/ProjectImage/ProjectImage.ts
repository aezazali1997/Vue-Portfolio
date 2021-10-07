import { defineComponent } from "vue";
import styles from "./ProjectImage.style";
export default defineComponent({
  name: "ProjectImage",
  props: {
    side: Boolean,
    thumbnail: String,
    title: String,
    description: String,
  },
  components: {},
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
