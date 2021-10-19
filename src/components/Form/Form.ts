import { defineComponent, ref } from "vue";
import styles from "./Form.style";
import { IContact } from "@/interfaces/ContactForm.interface";
export default defineComponent({
  name: "Form",
  props: {},
  components: {},
  setup() {
    const formInfo = ref<IContact>({
      company: "",
      description: "",
      email: "",
      name: "",
      subject: "",
    });
    const drawCanvas = () => {
      const cnv: HTMLCanvasElement = document.getElementById(
        "canvas"
      ) as HTMLCanvasElement;
      const ctx = cnv.getContext("2d");
      ctx?.beginPath();
      ctx?.moveTo(41, 29);
      ctx?.lineTo(77, 38);
      ctx?.lineTo(41, 50);
      ctx?.lineTo(52, 39);
      ctx?.fill();
    };
    const formSubmitted = () => {
      console.log(formInfo.value);
      drawCanvas();
    };
    const classes = styles();
    return {
      classes,
      formInfo,
      formSubmitted,
    };
  },
});
