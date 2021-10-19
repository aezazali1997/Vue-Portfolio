import { useRoute } from "vue-router";
import { defineComponent, watch, ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { IProject } from "@/interfaces/Project.interface";
import { Project } from "@/models/Project.model";
import { gql } from "graphql-tag";
import styles from "./Project.style";
type Props = {
  Project: IProject;
};
export default defineComponent({
  name: "Project",
  props: {},
  components: {},
  setup() {
    const projectState = ref<Project>(new Project());
    const router = useRoute();
    const { id } = router.params;
    const classes = styles();
    const { result, error, loading } = useQuery<Props>(
      gql`
        query getByID($id: ID!) {
          Project: UI__getProjectByID(id: $id) {
            title
            subtitle
            client {
              name
              logo
            }
            projectType
            start
            end
            role
            summary
            challenge
            solution
            technologies
            url
            images
          }
        }
      `,
      {
        id,
      }
    );
    watch(result, (value) => {
      projectState.value = value?.Project ? value.Project : new Project();
      /* any operations to perform on data or assiging it to the states */
    });
    return {
      classes,
      error,
      loading,
      result,
      projectState,
    };
  },
});
