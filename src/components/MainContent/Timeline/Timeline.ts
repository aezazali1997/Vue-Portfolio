import { defineComponent, watch, ref, onMounted } from "vue";
import styles from "./Timeline.style";
import Project from "./Project/Project.vue";
import TimelineBottom from "./TimelineBottom/TimelineBottom.vue";
import TimelineTop from "./TimelineTop/TimelineTop.vue";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import { TimelineModel } from "@/models/Timeline.model";
import { IProjectYear } from "@/interfaces/ProjectsYear.interface";
import { useStore } from "vuex";
import { key } from "@/store";
export default defineComponent({
  name: "Timeline",
  props: {},
  components: {
    Project,
    TimelineBottom,
    TimelineTop,
  },
  setup() {
    const store = useStore(key);
    const Projects = ref<IProjectYear[]>([]);
    const classes = styles();
    const { result, loading, error } = useQuery(gql`
      query {
        Projects: UI__getAllProjects {
          id
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
      Projects.value = store.state.projects;
      store.dispatch("projects", timelineObj);
    });
    onMounted(() => {
      Projects.value = store.state.projects;
    });
    return {
      classes,
      loading,
      error,
      Projects,
    };
  },
});
