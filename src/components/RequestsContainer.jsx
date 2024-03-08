import RequestCard from "./RequestCard";

export default function RequestsContainer({ requests, handle, action }) {
  return (
    <>
      <div style={{ flex: "1" }}>
        {" "}
        <h2>{action}</h2>
        {requests.map((request) => (
          <RequestCard
            key={
              request.requester._id + request.receiver._id + request.timestamp
            }
            request={request}
            handle={handle}
            action={action}
          />
        ))}
      </div>
    </>
  );
}
