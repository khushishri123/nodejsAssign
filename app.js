// this will handle all express related code
const express = require("express");
const app = express();
app.use(express.json());
app.get("/", () => {
  console.log("Got handled ");
});
module.exports = app;
