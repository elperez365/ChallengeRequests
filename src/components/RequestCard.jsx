export default function RequestCard({ request, handle, action }) {
  const pointOfView = action === "Received" ? "requester" : "receiver";

  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
    >
      <img
        src={request[pointOfView].profilePic}
        alt="profilePic"
        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
      />
      <div style={{ marginLeft: "10px" }}>
        <p>{request[pointOfView].fullName}</p>
        <p>{request.status}</p>
      </div>
      <button
        onClick={() =>
          handle(
            request.requester._id,
            request.receiver._id,
            request.timestamp,
            "granted"
          )
        }
      >
        Accept
      </button>
      <button
        onClick={() =>
          handle(
            request.requester._id,
            request.receiver._id,
            request.timestamp,
            "rejected"
          )
        }
      >
        Reject
      </button>
    </div>
  );
}
