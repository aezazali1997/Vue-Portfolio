import { defineComponent } from "vue";
import styles from "./Contact.style";
import Form from "@/components/Form/Form.vue";
export default defineComponent({
  name: "contact",
  props: {},
  components: { Form },
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
