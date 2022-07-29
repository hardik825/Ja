const express = require("express");
require("./db/conn");
const User = require("./models/user");
const LoginModule = require("./Login/login");
const insert = require("./modules/insert");
const getUser = require("./modules/get");
const updateUser = require("./modules/update");
const deleteUser = require("./modules/delete");

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use("/login", LoginModule);
app.use("/user", insert);
app.use("/user", getUser);
app.use("/user", updateUser);
app.use("/user", deleteUser);

app.listen(port, () => {
  console.log(`server is ${port} runing...`);
});
