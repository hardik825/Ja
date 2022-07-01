const http = require("http");

const srever = http.createServer((req,res)=>{
    res.setHeader("content-type","text/html");
    res.write("<h1>Welcome to http server !!! </h1>");
    res.write("requst url"+req.url);
    res.write("requst method"+req.method);

})

srever.listen(5454,()=>{
    console.log("server listening the port number 3030");
})

// const url = require("url");

