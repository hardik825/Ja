const express = require("express");
const port = process.env.PORT || 5151;
const loginModule = require("./Login/login");
const module1 = require("./Login/module1");

const app = express();

app.use(express.json());

app.use("/login", loginModule);
app.use("/module1", module1);

app.listen(port, () => {
  console.log(`server is port no is ${port} running....`);
});
