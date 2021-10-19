import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  top: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  topCircle: {
    width: 20,
    height: 20,
    background: "transparent",
    border: "3px solid #379683",
    borderRadius: "50px",
  },
  circleLine: {
    position: "relative",
    height: 50,
    width: 2,
    background: "#379683",
  },
});
export default styles;
