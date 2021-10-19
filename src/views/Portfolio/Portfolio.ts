import { defineComponent } from "vue";
import styles from "./Portfolio.style";
import MainContent from "@/components/MainContent/MainContent.vue";
export default defineComponent({
  name: "Portfolio",
  props: {},
  components: {
    MainContent,
  },
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
