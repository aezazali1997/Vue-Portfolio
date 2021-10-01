import { defineComponent } from "vue";
import styles from "./Portfolio.style";
export default defineComponent({
	name: "Portfolio",
	props: {},
	components: {},
	setup() {
		const classes = styles();
		return {
			classes,
		};
	},
});
