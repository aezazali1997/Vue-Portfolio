import { defineComponent } from "vue";
import styles from "./Timeline.style";
import Project from "./Project/Project.vue";
import TimelineBottom from "./TimelineBottom/TimelineBottom.vue";
import TimelineTop from "./TimelineTop/TimelineTop.vue";
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
		return {
			classes,
		};
	},
});
