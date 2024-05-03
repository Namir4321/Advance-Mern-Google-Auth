require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;
const pack=require("./Routes/Package")
const auth=require("./Routes/Auth");
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("connected");
});
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/pack",pack)
app.use("/auth",auth);

app.listen(port, () => {
  console.log(`listning on port ${port}`);
});
