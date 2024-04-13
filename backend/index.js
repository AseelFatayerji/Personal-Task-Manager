const express = require("express");
const { connected } = require("./config/db_config");
const userRouter = require("./routes/user_Router");
const authRouter = require("./routes/auth_Router");
const protected = require("./routes/protected_Router");

require("dotenv").config();

connected();

const app = express();

app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/verify", protected);

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
