import { defineComponent } from "vue";
import styles from "./ProjectInfo.style";
import ProjectTimeline from "./ProjectTimeline/ProjectTimeline.vue";
export default defineComponent({
	name: "ProjectInfo",
	props: {},
	components: { ProjectTimeline },
	setup() {
		const classes = styles();
		return {
			classes,
		};
	},
});
