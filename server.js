// it will contain db connection code
const dotenv = require("dotenv");
const app = require("./app");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then((conn) => {
  console.log("DB connection successful");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Application is running on port: ${port}...`);
});
