import classes from "./ProfileForm.module.css";
import { useSelector } from "react-redux";
import product_requests from "../Requests/data";
const ProfileForm = () => {
  const auth = useSelector((state) => state);
  return (
    <div className={classes.profile_form}>
      <h2> User Profile</h2>
      {auth.isLoggedIn && (
        <table>
          <tr>
            <th>User Name</th>
            <td>{auth.userName}</td>
          </tr>
          <tr>
            <th>User Email</th>
            <td>{auth.email}</td>
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
