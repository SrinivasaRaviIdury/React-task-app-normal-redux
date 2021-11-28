import classes from "./HighlightedRequest.module.css";
const HighlightedRequest = (props) => {
  return (
    <div className={classes.request}>
      <h2>Request Details</h2>
      <table>
        <tr>
          <th>Request Id</th>
          <td>{props.id}</td>
        </tr>
        <tr>
          <th>Request Title</th>
          <td>{props.title}</td>
        </tr>
        <tr>
          <th>Request Description</th>
          <td>{props.description}</td>
        </tr>
        <tr>
          <th>Request Date</th>
          <td>{props.date}</td>
        </tr>
      </table>
    </div>
  );
};
export default HighlightedRequest;
