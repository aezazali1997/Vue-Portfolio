import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 3rem",
    background: "#379683",
  },
  link: {
    color: "#05386b",
    textDecoration: "none",
    textTransform: "capitalize",
    margin: "0 .8rem",
  },
});
export default styles;
