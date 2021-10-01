import { defineComponent } from "vue";
import styles from "./Timeline.style";
import Project from "./Project/Project";
export default defineComponent({
	name: "Timeline",
	props: {},
	components: {
		Project,
	},
	setup() {
		const classes = styles();
		return {
			classes,
		};
	},
});
