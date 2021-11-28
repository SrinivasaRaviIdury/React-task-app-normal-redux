import React, { useState } from "react";
import classes from "./Requests.module.css";
import product_requests from "./data";
import { Link } from "react-router-dom";
const Requests = () => {
  const [requests, setRequests] = useState(product_requests);

  return (
    <div className={classes.requests}>
      <table>
        <tr>
          <th>request title</th>
          <th>request date</th>
        </tr>
        {requests.map((request) => {
          return (
            <tr key={request.id}>
              <td>
                <Link to={`/request/${request.id}`} className={classes.link}>
                  {request.title}
                </Link>
              </td>

              <td>{request.date}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Requests;
