import { defineComponent } from "vue";
import styles from "./ProjectTimeline.style";
import ProjectImage from "./ProjectImage/ProjectImage.vue";
import ProjectPipe from "./ProjectPipe/ProjectPipe.vue";
import { TimelineModel } from "@/models/Timeline.model";
export default defineComponent({
  name: "ProjectTimeline",
  props: {
    side: Boolean,
    project: TimelineModel,
  },
  components: { ProjectImage, ProjectPipe },
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
