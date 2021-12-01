import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HighlightedRequest from "./HighlightedRequest";
const RequestDetails = () => {
  const params = useParams();
  const { requestReducer: requests } = useSelector((state) => state);
  const request = requests.find(
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
