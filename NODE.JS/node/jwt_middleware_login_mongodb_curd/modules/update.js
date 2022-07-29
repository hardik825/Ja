const express = require("express");
const updateUser = new express.Router();
const User = require("../models/user");

//update the students by it id
updateUser.patch("/:id", require("../middleware/middleware"), async (req, res) => {
  try {
    const UapdateStudent = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.send(UapdateStudent);
  } catch (e) {
    res.status(400).send(e);
  }
});
module.exports = updateUser;
