import { defineComponent } from "vue";
import styles from "./Project.style";
import ProjectDate from "./ProjectDate/ProjectDate.vue";
import ProjectInfo from "./ProjectInfo/ProjectInfo.vue";
export default defineComponent({
	name: "Project",
	props: {
		date: String,
		side: Boolean,
	},
	components: {
		ProjectDate,
		ProjectInfo,
	},
	setup() {
		const classes = styles();
		return {
			classes,
		};
	},
});
