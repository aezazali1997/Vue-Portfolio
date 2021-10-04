import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
	dateWrapper: {
		background: "white",
		"& div": {
			padding: "1em 1.5em",
			color: "black",
			width: "max-content",
			margin: "auto",
		},
	},
});
export default styles;
