import { Request, Requester, Receiver } from "../data/classes";

export default function SendRequest({ setRequests, myID }) {
  const addNewRequest = (userTosend) => {
    const idMOCK = Math.random().toString(36).substr(2, 9);
    const requester = new Requester(
      myID,
      "Vasco Ceti",
      "https://notaboobucket.s3.eu-north-1.amazonaws.com/149071.png"
    );
    const receiver = new Receiver(
      idMOCK,
      userTosend,
      "https://notaboobucket.s3.eu-north-1.amazonaws.com/1709568527765-65e4e50857ea775fe628ae2b-profilePic-5dnpdr.jpg"
    );
    const newRequest = new Request(
      requester,
      receiver,
      "pending",
      new Date().toISOString()
    );
    setRequests((prevRequests) => [...prevRequests, newRequest]);
  };

  return (
    <div>
      <h2>Send request</h2>
      <input type="text" id="user-toSend" />
      <button
        onClick={() => {
          const value = document.getElementById("user-toSend").value;
          if (value === "") {
            alert("Please, insert a name");
            return;
          }
          addNewRequest(value);
        }}
      >
        Send request
      </button>
    </div>
  );
}
