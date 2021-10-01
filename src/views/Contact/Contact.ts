import { defineComponent } from "vue";
import styles from "./Contact.style";
export default defineComponent({
	name: "contact",
	props: {},
	components: {},
	setup() {
		const classes = styles();
		return {
			classes,
		};
	},
});
