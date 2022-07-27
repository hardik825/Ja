//http server

//http is the predefined module
//http module used to create the http server
//no need to download http module by using either "npm" tool or "yarn" tool
//http module is inbuilt module in NodeJS

// extra
//http module:- Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP). To include the HTTP module, use the require () method: The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

//require() is the predefined function, used to import the modules

// extra
//require:- Node.js follows the CommonJS module system, and the builtin require function is the easiest way to include modules that exist in separate files. The basic functionality of require is that it reads a JavaScript file, executes the file, and then proceeds to return the exports object. An example module: So if you run var example = require ...


// var http = require("http");
// // console.log(http);
// var server = http.createServer((request, response) => {
//   // response.setHeader("Content-type", "text/html");
//   // response.writeHead(200, { "Content-Type": "text/html" });
//   response.write("<h1>Greeting Hello...</h1>");
//   console.log(" request rec.. ");
//   response.end();
// });
// server.listen(2308, () => {
//   console.log("Listning 2308");
// });
// const os = require("os");

// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.tmpdir());
// console.log(os.type());

// const freeMemory = os.freemem();
// // console.log(freeMemory);
// console.log(`${freeMemory/1024/1024/1024}`);

// const totalMemory =os.totalmem();
// console.log(`${totalMemory/1024/1024/1024}`);



// const os = require("os");

// CPU arch
// console.log(os.arch());                         // x64

// // Platform
// console.log(os.platform());                     // win32

// //CPU core Info
// console.log(os.cpus());

// // console.log(os.hostname());
// console.log(os.type());                         // Windows_NT

// //Free memory
// const fm = os.freemem();
// console.log(`${fm / 1024/1024/1024}`);

// //Total memory
// const tm = os.totalmem();
// console.log(`${tm / 1024/1024/1024}`);

// //Home dir
// console.log(os.homedir())                       // C:\Users\HP

// //Uptime
// console.log(os.uptime())  

//.............Path Modul..................................

// The path module provides utilities for working with file and directory paths. it can be accessed using.

// const path = require("path");

// console.log(path.dirname('E:/Node/home/node/os/osmod.js'))

// console.log(path.extname('E:/Node/home/node/os/osmod.js'));

// console.log(path.basename('E:/Node/home/node/os/osmod.js'));

// console.log(path.parse('E:/Node/home/node/os/osmod.js'));