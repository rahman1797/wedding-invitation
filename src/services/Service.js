import firebase from "../firebase";
const db = firebase.ref("/messages");

class Service {
  getAll() {
    return db;
  }
  create(data) {
    return db.push(data);
  }
}
export default new Service();