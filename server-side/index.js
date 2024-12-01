const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", routes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(process.env.PORT || 3005);
  })
  .catch(() => {
    console.error("Connection failed!");
  });
