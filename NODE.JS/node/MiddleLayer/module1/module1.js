const express = require("express");
// const token = require("../Token/token");

const module1 = express.Router();

module1.get("/", require("../middleware/moddlewaer"), (req, res) => {
  res.json({ msg: "Welcome to Module 3 using middleware..." });
});

module.exports = module1;
