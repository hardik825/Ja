const mongoose = require("mongoose");



const studentSchema = new mongoose.Schema({
  sno: {
    type: Number,
    required: true,
  },
  sname: {
    type: String,
    required: true,
    minlength: 3,
  },
  fees: Number,
  course: String,
});

const Student = new mongoose.model("studs",studentSchema)

module.exports=Student