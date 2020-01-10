import * as functions from "firebase-functions";

export const api = functions.https.onRequest((request, response) => {
  console.log("method", request.method);
  console.log("headers", request.headers);
  console.log("body", request.body);
  response.send("ok");
});
