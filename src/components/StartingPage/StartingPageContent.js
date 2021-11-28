import { useSelector } from "react-redux";
import Requests from "../Requests/Requests";
import classes from "./StartingPageContent.module.css";

const StartingPageContent = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.auth.userName);

  return (
    <section className={classes.starting}>
      <div>
        <h2>Welcome {username}</h2>
        {!isLoggedIn && <p>Please Login / SignUp</p>}
      </div>
      <div>
        <Requests />
      </div>
    </section>
  );
};

export default StartingPageContent;
