const express = require("express");
const tokenObj = require("../Token/token");
const jwt = require("jwt-simple");
const LoginModule = express.Router();

LoginModule.post("/", (req, res) => {
  const uname = req.body.uname;
  const upwd = req.body.upwd;

  if (uname === "admin" && upwd === "admin123") {
    const token = jwt.encode({ uname: uname, upwd: upwd }, "skill@123");
    tokenObj.token = token;
    res.json({ msg: "login success...", token: token });

    const decode = jwt.decode(token, "skill@123");
    console.log(decode);
  } else {
    res.json({ msg: "login fail...." });
  }
});

module.exports = LoginModule;
