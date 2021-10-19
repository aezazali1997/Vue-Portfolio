import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  pipeLeft: {
    width: 100,
    height: 50,
    borderBottom: "2px solid #379683",
    borderLeft: "2px solid #379683",
    left: -100,
    bottom: 75,
    position: "absolute",
  },
  pipeRight: {
    width: 100,
    height: 50,
    borderTop: "2px solid #379683",
    borderRight: "2px solid #379683",
    right: -100,
    top: 75,
    position: "absolute",
  },
});
export default styles;
