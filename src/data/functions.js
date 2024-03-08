import { myID } from "./dummyData";

export const filterRequests = (requests, filter) => {
  return requests.filter((request) => {
    if (filter === "received") {
      return request.receiver._id === myID;
    } else if (filter === "sent") {
      return request.requester._id === myID;
    }
  });
};
