import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

const app = admin.initializeApp();
const firestore = app.firestore();
const dataCollection = firestore.collection("data");

export const api = functions.https.onRequest((request, response) => {
  console.log("user-agent", request.headers["user-agent"]);
  console.log("body", request.body);
  dataCollection.add(request.body);
  response.send("ok");
});
