// var mongoose = require("mongoose");
// // var StudSchema = new mongoose.Schema({
// //   sno: Number,
// //   sname: String,
// //   fees: Number,
// //   course: String,
// // });
// // var StudentModel = mongoose.model("stud", StudSchema);

// // mongoose.connect("mongodb://localhost/newskill", {
// //   // useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });
// // var conn = mongoose.connection;
// // conn.on("connected", function () {
// //   console.log("database is connected successfully");
// // });

// // // mongoose.connect("mongodb://localhost:27017/newskill");

// // StudentModel.find({ fees: { $eq: 35000 } }, afterDataRetrieved);
// // function afterDataRetrieved(error, data) {
// //   if (error == null) {
// //     console.log("data : ", data);
// //     for (var i = 0; i < data.length; i++) {
// //       console.log(data[i].sno);
// //       console.log(data[i].sname);
// //       console.log(data[i].fees);
// //       console.log(data[i].course);
// //       console.log("...............");
// //     }
// //   } else {
// //     console.log(error);
// //   }
// //   mongoose.disconnect();
// // }

// // // db.stud.find({ fees: { $eq: 35000 } })

// db.studs.insertOne({sno:111,sname:"Ram",fees:37500,course:"Node"})
// db.studs.insertOne({sno:112,sname:"Raj",fees:45000,course:"FullStack"})
// db.studs.insertOne({sno:113,sname:"a",fees:65000,course:"Django"})
// db.studs.insertOne({sno:114,sname:"b",fees:45000,course:"Node"})
// db.studs.insertOne({sno:115,sname:"c",fees:65000,course:"Flutter"})
// db.studs.insertOne({sno:116,sname:"d",fees:25000,course:"Python"})

// // [
// //   { sno: 111, sname: "Ram", fees: 37500, course: "Node" },
// //   { sno: 112, sname: "Raj", fees: 45000, course: "FullStack" },
// //   { sno: 113, sname: "a", fees: 65000, course: "Django" },
// //   { sno: 114, sname: "b", fees: 45000, course: "Node" },
// //   { sno: 115, sname: "c", fees: 65000, course: "Flutter" },
// //   { sno: 116, sname: "d", fees: 25000, course: "Python" },
// // ]

// // const main =() => {
// //   //   await
// //   mongoose.connect("mongodb://localhost:27017/test");

// //   const productSchema = mongoose.Schema({
// //     // name: String,
// //     // email: String,
// //     // password: Number,
// //     sno: Number,
// //     sname: String,
// //     fees: Number,
// //     course: String,
// //   });
// // }
// //   const productsModel = mongoose.model("stud",productSchema);

// //   let data = productsModel.find({ fees: { $eq: 35000 } }, (err, da) => {
// //     console.log(da);
// //   });
// //   //   let result = await data.find();
// //   //   console.log(result);

// // main();
// // ---------------------------------------Second---------------------------------------------------------------------
// const main =()=>{

// mongoose.connect("mongodb://localhost:27017/tast");

// const productSchema = new mongoose.Schema({
//   //    name:String,
//   //    email:String,
//   //    password:Number
//   sno: Number,
//   sname: String,
//   fees: Number,
//   course: String,
// });
// const productsModel = mongoose.model("stud", productSchema);

// let data = productsModel.find({ sno: 114, sname: "b", fees: 45000, course: "Node" } , (d, e) => {
//   console.log(e);
// })

// console.log(data)
// }
// main();

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/tast")
  .then(() => console.log("sucsess"))
  .catch((err) => console.log(err));

const prSchema = new mongoose.Schema({
  sno: Number,
  sname: String,
  fees: Number,
  course: String,
});

const Playlist = new mongoose.model("studs", prSchema);

// const getDocument=async ()=>{await
    const result=  Playlist.find({}).then((err,data)=>{console.log(err)})
    // console.log(result);
// }
// getDocument();