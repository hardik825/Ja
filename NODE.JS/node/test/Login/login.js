const express=require("express")
const jwt=require("jwt-simple")
const loginModule=express.Router();
const tokenObj=require("../Token/token")

loginModule.post("/",(req,res)=>{
    const uname=req.body.uname;
    const upwd=req.body.upwd;
    if(uname==="admin" && upwd==="admin"){
        const token=jwt.encode({uname:uname,upwd:upwd},"skill@1234")
        tokenObj.token=token;
        res.json({msg:"Login success...."})
    }else{
        res.json({msg:"Login Fail....."})
    }

})

module.exports=loginModule