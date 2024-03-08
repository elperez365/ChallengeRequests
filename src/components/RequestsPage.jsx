import RequestsContainer from "./RequestsContainer";
import { DUMMYDATA } from "../data/dummyData";
import { useState } from "react";
import { useCallback } from "react";
import SendRequest from "./SendRequest";
import { myID } from "../data/dummyData";
import { filterRequests } from "../data/functions";

export default function RequestsPage() {
  const [requests, setRequests] = useState(DUMMYDATA);

  const handleRequestChange = useCallback(
    (idRequester, idReceiver, timestamp, status) => {
      setRequests((prevRequests) => {
        return prevRequests.map((request) => {
          if (
            request.requester._id === idRequester &&
            request.receiver._id === idReceiver &&
            request.timestamp === timestamp
          ) {
            return { ...request, status: status };
          }
          return request;
        });
      });
    },
    []
  );
  return (
    <>
      <div style={{ display: "flex" }}>
        <RequestsContainer
          requests={filterRequests(requests, "received")}
          handle={handleRequestChange}
          action={"Received"}
        />
        <RequestsContainer
          requests={filterRequests(requests, "sent")}
          handle={handleRequestChange}
          action={"Sent"}
        />
      </div>
      <SendRequest setRequests={setRequests} myID={myID} />
    </>
  );
}
