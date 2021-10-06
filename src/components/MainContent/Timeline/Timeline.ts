import { defineComponent, watch, ref } from "vue";
import styles from "./Timeline.style";
import Project from "./Project/Project.vue";
import TimelineBottom from "./TimelineBottom/TimelineBottom.vue";
import TimelineTop from "./TimelineTop/TimelineTop.vue";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import { TimelineModel } from "@/models/Timeline.model";
import moment from "moment";
export default defineComponent({
  name: "Timeline",
  props: {},
  components: {
    Project,
    TimelineBottom,
    TimelineTop,
  },
  setup() {
    let Projects: TimelineModel[] = [];
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
      Projects = timelineObj;
      console.log(Projects);
    });

    const dateComputed = (date: string) => {
      return moment(date).format("YYYY");
    };
    return {
      classes,
      loading,
      error,
      dateComputed,
      Projects,
    };
  },
});
