import { createUseStyles } from "vue-jss";
import sprite from "@/assets/sprite.svg";
const styles = createUseStyles({
  formContainer: {
    margin: "0 auto",
  },
  formWrapper: {
    display: "flex",
    padding: "7rem 0",
    justifyContent: "center",
    "& div": {
      margin: "0 1rem",
    },
  },
  containerInfo: {
    display: "flex",
    width: "auto",
    flexDirection: "column",
    paddingRight: "3rem",
    borderRight: "1px solid gray",
    "& a": {
      textDecoration: "none",
      color: "#333",
      fontWeight: 500,
      fontSize: "1.1rem",
      cursor: "pointer",
    },
    "& div p": {
      textAlign: "left",
      textTransform: "capitalize",
      fontFamily: "Arial",
      fontWeight: 600,
      margin: ".9rem 0",
    },
    "& div span": {
      marginRight: ".5rem",
    },
  },
  title: {
    fontFamily: "Arial",
    textTransform: "capitalize",
    margin: ".8rem 0",
  },
  title__extend: {
    fontFamily: "Arial",
    textTransform: "capitalize",
    textAlign: "center",
  },
  form: {
    padding: ".75rem 1rem",
    display: "flex",
    flexDirection: "column",
    "& div": {
      margin: "1rem 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& label": {
        textAlign: "left",
        textTransform: "capitalize",
        fontWeight: 500,
        fontFamily: "Arial",
      },
      "& input": {
        width: "80%",
        padding: ".45rem .75rem",
        fontSize: "1rem",
        borderRadius: 20,
        paddingLeft: 20,
        outline: "none",
        border: "1px solid gray",
        color: "#595959",
      },
      "& textarea": {
        width: "80%",
        resize: "none",
        padding: ".35rem .75rem",
        fontSize: "1rem",
        borderRadius: ".7rem",
        outline: "none",
        border: "1px solid gray",
        color: "#595959",
      },
    },
  },
  messageContainer: {
    width: "35%",
  },
  submitBtn: {
    padding: "1rem 3rem",
    width: "max-content",
    textAlign: "center",
    borderRadius: 40,
    border: "1px solid #333",
    color: "black",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    margin: "1rem auto",
    background: "transparent",
    transition: "all .3s ease-in-out",
    "&:hover": {
      background: "#333",
      color: "#fff",
      "box-shadow": "3px 3px 5px rgba(0,0,0,.5)",
    },
  },
  iconTxtContainer: {
    margin: "0px !important",
    display: "flex",
    alignItems: "center",
  },
  office: {
    height: 50,
    width: 50,
    background: `url(${sprite})`,
    backgroundRepeat: "no-repeat",
    display: "inline-block",
    backgroundPosition: "-150px 0",
    transform: "scale(.5)",
  },
  phone: {
    transform: "scale(.4,.6)",
    backgroundRepeat: "no-repeat",
    height: 60,
    width: 50,
    background: `url(${sprite})`,
    display: "inline-block",
    backgroundPosition: "0 -40px",
  },
  email: {
    backgroundRepeat: "no-repeat",
    height: 60,
    width: 50,
    background: `url(${sprite})`,
    display: "inline-block",
    backgroundPosition: "-50px -45px",
    transform: "scale(.6)",
  },
  twitter: {
    backgroundRepeat: "no-repeat",
    height: 40,
    width: 50,
    background: `url(${sprite})`,
    display: "inline-block",
    backgroundPosition: "-50px 0",
    transform: "scale(.6)",
  },
  linkedin: {
    backgroundRepeat: "no-repeat",
    height: 40,
    width: 50,
    background: `url(${sprite})`,
    display: "inline-block",
    backgroundPosition: "-100px 0",
    transform: "scale(.6)",
  },
  github: {
    backgroundRepeat: "no-repeat",
    height: 40,
    width: 50,
    background: `url(${sprite})`,
    display: "inline-block",
    backgroundPosition: "0 0",
    transform: "scale(.6)",
  },
});
export default styles;
