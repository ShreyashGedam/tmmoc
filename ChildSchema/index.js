const express = require("express");
const connection = require("./config/config");
const userRouter = require("./routes/user.route");
const cityRouter = require("./routes/city.route");
const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/city", cityRouter);

app.listen(8080, () => {
  try {
    connection;
    console.log("Connection to db success");
  } catch (error) {
    console.log(error);
  }
  console.log("app is listening to port 8080");
});
