import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import product_requests from "./data";
import HighlightedRequest from "./HighlightedRequest";
const RequestDetails = () => {
  const params = useParams();
  const request = product_requests.find(
    (request) => request.id === Number(params.requestId)
  );
  console.log(request);
  if (!request) {
    return <h2>No Request Found</h2>;
  }
  return (
    <Fragment>
      <HighlightedRequest
        id={request.id}
        date={request.date}
        description={request.description}
        title={request.title}
      />
    </Fragment>
  );
};
export default RequestDetails;
