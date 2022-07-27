const express=require("express")
const app=express()
const port=9987
app.get("/",(req,res)=>{
    res.send("<h1>Welcome</h1>")
})
app.listen(port,()=>{
    console.log("listening 9987")
})