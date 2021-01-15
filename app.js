const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

app.use(cors());
app.use(bodyParser.json());

const postRoute = require("./routes/posts");
app.use("/posts", postRoute);

app.get("/", (req, res) => {
  res.send("we are home");
});

//connect db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connect to db")
);

app.listen(3000);
