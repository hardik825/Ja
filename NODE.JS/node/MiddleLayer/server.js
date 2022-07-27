const express = require("express");
const port = process.env.PORT || 3000;
const LoginModule = require("./Login/login");
const module1 = require("./module1/module1");

const app = express();
app.use(express.json());

app.use("/login", LoginModule);
app.use("/module1", module1);


app.listen(port, () => {
  console.log(`serveris runon ${port}....`);
});
