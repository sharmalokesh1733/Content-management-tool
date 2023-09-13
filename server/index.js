const mongoose = require("mongoose");
const express = require("express");
const router = require("./Routes/TodoRoute");
const cors = require("cors");
const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/task_management")
  .then(() => {
    console.log("connected to mongodb..");
  })
  .catch((err) => {
    console.log(err.message);
  });
app.use(router);

app.listen(PORT, () => {
  console.log("server started");
});
