import { defineComponent } from "vue";
import styles from "./Timeline.style";
import Project from "./Project/Project.vue";
import TimelineBottom from "./TimelineBottom/TimelineBottom.vue";
import TimelineTop from "./TimelineTop/TimelineTop.vue";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
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
		const classes = styles();
		const { result, loading, error } = useQuery(gql`
			query {
				allProjects: UI__getAllProjects {
					title
					summary
					thumbnail
					technologies
					start
				}
			}
		`);
		return {
			result,
			classes,
			loading,
			error,
		};
	},
	methods: {
		dateComputed(date: any) {
			return moment(date).format("YYYY");
		},
	},
});
