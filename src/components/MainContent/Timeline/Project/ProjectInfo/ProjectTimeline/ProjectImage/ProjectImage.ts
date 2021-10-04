import { defineComponent } from "vue";
import styles from "./ProjectImage.style";
export default defineComponent({
	name: "ProjectImage",
	props: {},
	components: {},
	setup() {
		const classes = styles();
		return {
			classes,
		};
	},
});
