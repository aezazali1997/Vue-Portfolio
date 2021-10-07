import { defineComponent, watch, ref } from "vue";
import styles from "./Timeline.style";
import Project from "./Project/Project.vue";
import TimelineBottom from "./TimelineBottom/TimelineBottom.vue";
import TimelineTop from "./TimelineTop/TimelineTop.vue";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import { TimelineModel } from "@/models/Timeline.model";
import { projectYear } from "@/interfaces/ProjectsYear.interface";
export default defineComponent({
  name: "Timeline",
  props: {},
  components: {
    Project,
    TimelineBottom,
    TimelineTop,
  },
  setup() {
    const Projects = ref<projectYear[]>([]);
    const classes = styles();
    const { result, loading, error } = useQuery(gql`
      query {
        Projects: UI__getAllProjects {
          title
          summary
          thumbnail
          technologies
          start
        }
      }
    `);
    watch(result, (value) => {
      const timelineObj = TimelineModel.deserializeList(value);
      Projects.value = timelineObj;
      console.log(Projects.value);
    });
    return {
      classes,
      loading,
      error,
      Projects,
    };
  },
});
