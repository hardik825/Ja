const express = require("express");
const Student =require("./models/students")
require("./db/conn")
const app = express();
const port = process.env.PORT || 6006;

app.use(express.json());

//get student

app.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.status(200).send(studentsData);
  } catch (e) {
    res.status(400).send(e);
  }
});

//insert student
app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const creatUser = await user.save();
    res.status(201).send(creatUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

//get students by id

app.get("/students/:id", async (req, res) => {
  try {
    const studentData = await Student.findById(req.params.id);
    if (!studentData) {
      res.status(404).send();
    } else {
      res.send(studentData);
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

//update the students by it id

app.patch("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const UapdateStudent = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(UapdateStudent);
  } catch (e) {
    res.status(400).send(e);
  }
});

//delete

app.delete("/students/:id", async (req, res) => {
  try {
    const deleteStudent = await Student.findByIdAndDelete(req.params.id);
    if (req.params.id) {
      return res.status(400).send();
    }
    res.send(deleteStudent);
  } catch (e) {
    res.status(400).send(e);
  }
});

//listen

app.listen(port, () => {
  console.log(`connect thew port : ${port}...`);
});
