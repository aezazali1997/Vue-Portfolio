import { defineComponent } from "vue";
import styles from "./Home.style";
import gql from "graphql-tag";
import MainContent from "@/components/MainContent/MainContent.vue";
export default defineComponent({
	name: "Home",
	components: {
		MainContent,
	},
	apollo: {
		data: gql`
			query {
				data: UI__getAllProjects {
					id
					title
					subtitle
					summary
					projectType
					start
					end
					role
					challenge
					technologies
					thumbnail
					url
					images
				}
			}
		`,
	},

	setup() {
		const classes = styles();
		return {
			classes,
		};
	},
});
