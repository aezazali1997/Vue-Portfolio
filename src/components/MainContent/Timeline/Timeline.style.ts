import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
	timeline: {
		background: "#333",
		width: "5px",
		top: "50%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		minHeight: "100%",
		marginTop: 100,
		display: "flex",
		flexDirection: "column",
		position: "relative",
		"&::before": {
			content: '""',
			position: "absolute",
			top: -22,
			left: -10,
			width: 20,
			height: 20,
			background: "transparent",
			borderRadius: 500,
			border: "2px solid black",
		},
		"&::after": {
			content: '""',
			position: "absolute",
			bottom: -22,
			left: -10,
			width: 20,
			height: 20,
			background: "transparent",
			borderRadius: 500,
			border: "2px solid black",
		},
	},
});
export default styles;
