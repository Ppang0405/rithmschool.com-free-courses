const fs = require('fs')

fs.readFile("data.txt", (err, data) => { // default is bytes when you not have utf-8 encoding
	console.log(data.toString())
})


fs.appendFile('data.txt', `${process.argv[2]}\n`, function(err) {
  fs.readFile('data.txt', function(err, data) {
    console.log(data.toString());
  });
});


const path = require("path");

// Normalize a path
console.log(path.normalize("/test/test1//2slashes/1slash/tab/..")); // /test/test1/2slashes/1slash

// Join multiple paths together
console.log(path.join("/first", "second", "something", "then", "..")); // /first/second/something

// Resolve a path (find the absolute path)
console.log(path.resolve("first.js"));

// Find the extention of a filename
console.log(path.extname("main.js")); // .js




const http = require("http");
// notice below, the first parameter to createServer is a callback function!
const server = http.createServer(function(req, res, next) {
  // sending some header info in my response
  res.writeHead(200, { "Content-type": "text/html" });
  // send some data to the client
  res.write("<h1>Hello World!</h1>");
  // end the response
  return res.end();
});
// notice below, another callback function!
server.listen(3000, function() {
  console.log("Go to localhost:3000");
});
