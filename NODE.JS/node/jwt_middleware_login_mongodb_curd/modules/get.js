const express = require("express");
const getUser = new express.Router();
const User = require("../models/user");

getUser.get("/", require("../middleware/middleware"), async (req, res) => {
  try {
    const usersData = await User.find();
    res.status(200).send(usersData);
  } catch (e) {
    res.status(400).send(e);
  }
});

//get students by id
getUser.get("/:id", require("../middleware/middleware"), async (req, res) => {
  try {
    let _id = req.params.id;
    const userData = await User.findById(_id);
    if (!userData) {
      res.status(404).send();
    } else {
      res.send(userData);
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = getUser;
