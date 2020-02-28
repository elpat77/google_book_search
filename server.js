const express = require("express");
const app = express();
const logger = require("morgan");
const PORT = process.env.PORT || 6000;
const colors = require("colors");


const mongoose = require("mongoose");
const connection = mongoose.connection;
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", () => {
  console.log("connected to database".magenta);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger("dev"));

const apiRoutes = require("./routes/api-routes");
app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log("-----------------------------------".rainbow);
  console.log(`listening at: http://localhost:${PORT}`.cyan);
  console.log("-----------------------------------".rainbow);
});
