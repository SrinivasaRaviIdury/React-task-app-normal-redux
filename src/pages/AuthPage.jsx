import AuthForm from "../components/Auth/AuthForm";
import image from "../../public/static/43022.jpg";
import classes from "./AuthPage.module.css";

const AuthPage = () => {
  return (
    <div className={classes.auth}>
      <div className={classes.img}>
        <img src={image} alt="banner" />
      </div>
      <div className={classes.form}>
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;
