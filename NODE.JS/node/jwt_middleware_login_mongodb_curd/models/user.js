const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
     email:String,
     pwd:String
    });

const User = new mongoose.model("studs", userSchema);

module.exports = User;
