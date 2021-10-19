import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  dateWrapper: {
    background: "white",
    "& div": {
      padding: ".5em 1.5em",
      color: "black",
      width: "max-content",
      margin: "0 auto",
      fontSize: "1.5rem",
    },
    none: {
      display: "none",
    },
  },
});
export default styles;
