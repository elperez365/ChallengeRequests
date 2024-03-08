export class Requester {
  constructor(_id, fullName, profilePic) {
    this._id = _id;
    this.fullName = fullName;
    this.profilePic = profilePic;
  }
}

export class Receiver {
  constructor(_id, fullName, profilePic) {
    this._id = _id;
    this.fullName = fullName;
    this.profilePic = profilePic;
  }
}

export class Request {
  constructor(requester, receiver, status, timestamp) {
    this.requester = requester;
    this.receiver = receiver;
    this.status = status;
    this.timestamp = timestamp;
  }
}
