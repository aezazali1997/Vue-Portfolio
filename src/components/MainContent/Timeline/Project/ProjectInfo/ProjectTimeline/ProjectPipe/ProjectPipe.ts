import { defineComponent } from "vue";
import styles from "./ProjectPipe.style";
export default defineComponent({
	name: "ProjectPipe",
	props: {},
	components: {},
	setup() {
		const classes = styles();
		return {
			classes,
		};
	},
});
