const tokenObj=require("../Token/token")
const express=require("express")
const jwt = require("jwt-simple");

const LoginModule = express.Router();
LoginModule.post("/",(req,res)=>{
    const uname=req.body.uname;
    const upwd =req.body.upwd;
    if(uname==="admin" && upwd==="admin123"){
        const token =jwt.encode({uname:uname ,uped:upwd},"skill@123")
        tokenObj.token=token;
        res.json({msg:"Login success....",token:token})
    }else{
        res.json({msg:"Login fail..."})
    }
})

module.exports=LoginModule


// LoginModule.post("/", (req, res) => {
//   const uname = req.body.uname;
//   const upwd = req.body.upwd;

//   if (uname === "admin" && upwd === "admin123") {
//     const token = jwt.encode({ uname: uname, upwd: upwd }, "skill@123");
//     tokenObj.token = token;
//     res.json({ mag: "Login success....", token: token });
//   } else {
//     res.json({ msg: "login fail..." });
//   }
// });


