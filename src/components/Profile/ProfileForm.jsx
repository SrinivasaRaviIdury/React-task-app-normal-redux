import classes from "./ProfileForm.module.css";
import { useSelector } from "react-redux";
import product_requests from "../Requests/data";
const ProfileForm = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userName = useSelector((state) => state.auth.userName);
  const email = useSelector((state) => state.auth.email);
  return (
    <div className={classes.profile_form}>
      <h2> User Profile</h2>
      {isLoggedIn && (
        <table>
          <tr>
            <th>User Name</th>
            <td>{userName}</td>
          </tr>
          <tr>
            <th>User Email</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th>Number of Request</th>
            <td>{product_requests.length}</td>
          </tr>
        </table>
      )}
    </div>
  );
};

export default ProfileForm;
