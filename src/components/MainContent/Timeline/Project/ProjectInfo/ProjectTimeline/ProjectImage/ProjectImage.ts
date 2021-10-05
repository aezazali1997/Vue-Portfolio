import { defineComponent } from "vue";
import styles from "./ProjectImage.style";
export default defineComponent({
	name: "ProjectImage",
	props: {
		side: Boolean,
	},
	components: {},
	setup() {
		const classes = styles();
		return {
			classes,
		};
	},
});
