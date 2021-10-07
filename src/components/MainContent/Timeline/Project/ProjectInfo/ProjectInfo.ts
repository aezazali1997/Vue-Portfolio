import { defineComponent } from "vue";
import styles from "./ProjectInfo.style";
import ProjectTimeline from "./ProjectTimeline/ProjectTimeline.vue";
import { TimelineModel } from "@/models/Timeline.model";
export default defineComponent({
  name: "ProjectInfo",
  props: {
    side: Boolean,
    project: TimelineModel,
  },
  components: { ProjectTimeline },
  setup() {
    const classes = styles();
    return {
      classes,
    };
  },
});
