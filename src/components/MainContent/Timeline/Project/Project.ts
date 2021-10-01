import { defineComponent } from "vue";
import styles from "./Project.style";
export default defineComponent({
	name: "Project",
	props: {},
	components: {},
	setup() {
		const classes = styles();
		return {
			classes,
		};
	},
});
