import { useRef } from "react";
import { useDispatch } from "react-redux";
import classes from "./RequestsForm.module.css";

const RequestsForm = () => {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const requestSubmitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDate = dateRef.current.value;
    dispatch({
      type: "ADD_REQUEST",
      payload: {
        id: new Date().getUTCMilliseconds(),
        title: enteredTitle,
        description: enteredDescription,
        date: enteredDate
      }
    });
  };
  return (
    <div className={classes.requestForm}>
      <h2>Add Requests Here</h2>
      <form onSubmit={requestSubmitHandler}>
        <table>
          <tr>
            <th>
              <label>Request Title</label>
            </th>
            <td>
              <input ref={titleRef} type="text" />
            </td>
          </tr>
          <tr>
            <th>
              <label>Request Description</label>
            </th>
            <td>
              <input ref={descriptionRef} type="text" />
            </td>
          </tr>
          <tr>
            <th>
              <label>Request Date</label>
            </th>
            <td>
              <input ref={dateRef} type="date" />
            </td>
          </tr>
        </table>
        <button type="submit">Add Request</button>
      </form>
    </div>
  );
};
export default RequestsForm;
