const express=require("express")
const app=express();
const port=5491;

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log("Listening port 5491")
})