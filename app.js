// this will handle all express related code
const express = require("express");
const router = require("./routes/employeeRoute");
const app = express();
app.use(express.json());

app.use("/api/v1/employees", router);
module.exports = app;
