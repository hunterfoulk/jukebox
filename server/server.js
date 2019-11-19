const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

//CONNECT TO MONGODB
const uri =
  "mongodb+srv://hunterfoulk:Murphy01@cluster0-sexjr.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected successfully");
});

//ROUTES
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

const playlistRouter = require("./routes/playlist");
app.use("/playlist", playlistRouter);

//SERVER PORT LISTENER
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
