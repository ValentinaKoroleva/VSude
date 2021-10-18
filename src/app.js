// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'content-type': 'text/html' })
//   fs.createReadStream('dist/index.html').pipe(res)
// })

// server.listen(22)

// var http = require('http'),

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello Node.js!\n');

// }).listen(process.env.PORT || 22);

const http = require('http')
const host = 'localhost';
const port = 8080;
const fs = require('fs')
const requestListener = function (req, res) {
	res.writeHead(200, { 'content-type': 'text/html' })
    

  	fs.createReadStream('dist/index.html').pipe(res)

    // res.writeHead(200);
    // res.end("My first server!");
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(fs.createReadStream('../dist/index.html').pipe)
    console.log(`Server is running on http://${host}:${port}`);
});
