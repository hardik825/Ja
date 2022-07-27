const express = require("express");
const jwt = require("jwt-simple");
const bcrypt =require("bcryptjs")
const tokenObj = require("../Token/token");
const LoginModule = express.Router();

LoginModule.post("/", (req, res) => {
  const uname = req.body.uname;
  const upwd = req.body.upwd;

  if (uname === "admin" && upwd === "admin123") {
  //  ...... 2 methode....
      // const token=  bcrypt.hashSync(upwd,1)
      // console.log(token)
      // const token1= bcrypt.compareSync(upwd,token)
      // console.log(token1)

   
 //..... 1 methoed...
    const token = jwt.encode({ uname: uname, upwd: upwd }, "skill@123");
    tokenObj.token = token;
    res.json({ mag: "Login success....", token: token });
  } else {
    res.json({ msg: "login fail..." });
  }
});

module.exports = LoginModule;
