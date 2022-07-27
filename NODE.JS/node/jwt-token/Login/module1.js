const express = require("express");
const tokenObj = require("../Token/token");

const module1 = express.Router();

module1.get("/", (req, res) => {
  const reqHeaders = req.headers;
  console.log("module1 :", tokenObj.token);
  if (reqHeaders.token == tokenObj.token) {
    res.json({ msg: "welcome to module 1...." });
  } else {
    res.json({ msg: "Unauthorized user..." });
  }
});

module.exports=module1