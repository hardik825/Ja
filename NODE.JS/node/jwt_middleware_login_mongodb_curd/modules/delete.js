const express = require("express");
const deleteUser = new express.Router();
const User = require("../models/user");

//delete
deleteUser.delete(
  "/:id",
  require("../middleware/middleware"),
  async (req, res) => {
    try {
      const delUser = await User.findByIdAndDelete(req.params.id);
      if (req.params.id) {
        return res.status(400).send();
      }
      res.send(delUser);
    } catch (e) {
      res.status(400).send(e);
    }
  }
);

module.exports = deleteUser;
