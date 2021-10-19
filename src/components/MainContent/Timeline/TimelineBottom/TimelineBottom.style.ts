import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  bottom: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  circleLine: {
    height: 50,
    width: 2,
    background: "#379683",
  },
  bottomCircle: {
    width: 20,
    height: 20,
    background: "transparent",
    border: "3px solid #379683",
    borderRadius: "50px",
  },
});
export default styles;
/* 	topCircle: {

} */
