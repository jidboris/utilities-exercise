var http = require('http');
var larg = require('./file1.js');
let arr = [2,4.5,10,6,15,22,60]

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The largest number in the array is: " + larg.firstMethod());
    res.end();
}).listen(8081);