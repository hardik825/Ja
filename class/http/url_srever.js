//import http module
//http module, used to create the http server
const http = require("http");

//import url module
//url module is the "predefined" module
//url module, used to parse the url's
//http://localhost:8989/?uname=admin&upwd=admin
const url = require("url");

//create the http server
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const q = url.parse(req.url, true).query;
    console.log(req.url);
    console.log(q);
    if (q.uname == "admin" && q.upwd == "admin") {
        res.write("<h1>Login Success</h1>");
        console.log("success")
    } else {
        res.write("<h1>Login Fail</h1>");
        console.log("fail")
    }
    res.end();
});
console.log(server);

//assign the port number
server.listen(8989, () => {
    console.log("server listening the port number 8989");
});