import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./MainNavigation.module.css";
import { Fragment } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { authAction } from "../../store/auth-slice";
const MainNavigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => {
    return state.auth.isLoggedIn;
  });
  const logoutHandler = () => {
    dispatch(authAction.logoutHandler());
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Thomson & Thomson</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login / Signup</Link>
            </li>
          )}

          {isLoggedIn && (
            <Fragment>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">
                  <AccountCircleIcon style={{ fontSize: 40, marginTop: 10 }} />
                </Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
