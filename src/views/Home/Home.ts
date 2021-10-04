import { defineComponent } from "vue";
import styles from "./Home.style";
import gql from "graphql-tag";
import MainContent from "@/components/MainContent/MainContent.vue";
export default defineComponent({
	name: "Home",
	components: {
		MainContent,
	},
	setup() {
		const classes = styles();
		return {
			classes,
		};
	},
});
