const express = require("express");
const insert = new express.Router();
const User = require("../models/user");

//insert student
insert.post("/", require("../middleware/middleware"), async (req, res) => {
  try {
    const user = new User(req.body);
    const creatUser = await user.save();
    res.status(201).send(creatUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = insert;
