import { defineComponent } from "vue";
import styles from "./MainContent.style";
import Timeline from "./Timeline/Timeline.vue";
export default defineComponent({
	name: "MainContent",
	props: {},
	components: {
		Timeline,
	},
	setup() {
		const classes = styles();
		return {
			classes,
		};
	},
});
