import { createUseStyles } from "vue-jss";
const styles = createUseStyles({
  imgContainerLeft: {
    border: "2px solid #379683",
    width: 350,
    height: 350,
    left: -400,
    top: 20,
    position: "absolute",
    zIndex: 10,
    overflow: "hidden",
    cursor: "pointer",
    "&:hover $mainTxt": {
      opacity: 1,
    },
    "&:hover $image": {
      transform: "scale(1.1)",
      opacity: ".5",
    },
  },
  imgContainerRight: {
    cursor: "pointer",
    border: "2px solid #379683",
    width: 350,
    height: 350,
    right: -400,
    bottom: 20,
    position: "absolute",
    zIndex: 10,
    overflow: "hidden",
    "&:hover $mainTxt": {
      opacity: 1,
    },
    "&:hover $image": {
      transform: "scale(1.1,1)",
      opacity: ".5",
    },
  },
  image: {
    width: "100%",
    display: "block",
    height: "80%",
    transition: "all .3s ease-in-out",
    overflow: "hidden",
  },
  mainTxt: {
    position: "absolute",
    fontSize: "1.5rem",
    padding: ".5rem",
    color: "#000",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    border: "1px solid black",
    opacity: 0,
    width: "max-content",
    transition: "opacity .3s ease-in-out",
  },
  desc: {
    textAlign: "center",
    margin: "1rem auto",
    height: "auto",
    width: "100%",
    position: "relative",
    "&:after": {
      content: '"read more"',
      textAlign: "center",
      color: "#333",
      textTransform: "capitalize",
    },
  },
});
export default styles;
