import { defineComponent } from "vue";
import styles from "./Project.style";
import ProjectDate from "./ProjectDate/ProjectDate.vue";
import ProjectInfo from "./ProjectInfo/ProjectInfo.vue";
import { projectYear } from "@/interfaces/ProjectsYear.interface";
export default defineComponent({
  name: "Project",
  props: {
    date: Number,
    projects: {
      type: Array,
      required: true,
    },
    side: Boolean,
  },
  components: {
    ProjectDate,
    ProjectInfo,
  },
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
