const express=require("express");
const loginModule = require("./Login/login");
const port = process.env.PORT||4000;

const app=express()

app.use("/login",loginModule)

app.listen(port,()=>{
    console.log(`server is running por no is ${port}`)
})