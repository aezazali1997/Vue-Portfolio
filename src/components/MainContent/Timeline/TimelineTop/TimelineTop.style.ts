import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
	top: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	topCircle: {
		width: 20,
		height: 20,
		background: "transparent",
		border: "3px solid black",
		borderRadius: "50px",
	},
	circleLine: {
		position: "relative",
		height: 50,
		width: 2,
		background: "black",
	},
});
export default styles;
