import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
	imgContainerLeft: {
		border: "2px solid black",
		width: 350,
		height: 350,
		left: -400,
		top: 20,
		position: "absolute",
		zIndex: 10,
	},
	imgContainerRight: {
		border: "2px solid black",
		width: 350,
		height: 350,
		right: -400,
		bottom: 20,
		position: "absolute",
		zIndex: 10,
	},
	image: {
		width: "100%",
		display: "block",
		height: "80%",
	},
	title: {
		height: "20%",
		width: "100%",
	},
});
export default styles;
