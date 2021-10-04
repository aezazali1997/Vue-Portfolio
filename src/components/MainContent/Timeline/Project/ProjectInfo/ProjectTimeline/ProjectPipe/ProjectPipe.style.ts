import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
	pipeLeft: {
		width: 100,
		height: 50,
		borderBottom: "2px solid black",
		borderLeft: "2px solid black",
		left: -100,
		bottom: 75,
		position: "absolute",
	},
	pipeRight: {
		width: 100,
		height: 50,
		borderTop: "2px solid black",
		borderRight: "2px solid black",
		right: -100,
		top: 75,
		position: "absolute",
	},
});
export default styles;
