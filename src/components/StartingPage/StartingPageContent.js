import { useSelector } from "react-redux";
import Requests from "../Requests/Requests";
import classes from "./StartingPageContent.module.css";

const StartingPageContent = () => {
  const { authReducer: auth } = useSelector((state) => state);

  return (
    <section className={classes.starting}>
      <div>
        <h2>Welcome {auth.userName}</h2>
        {!auth.isLoggedIn && <p>Please Login / SignUp</p>}
      </div>
      <div>
        <Requests />
      </div>
    </section>
  );
};

export default StartingPageContent;
