// 创建一个HTTP服务器
var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Node.js</h1>');
    res.end('<p>Hello World</p>');
}).listen(3000);

console.log("HTTP server is listening at port 3000.");
/*
listen函数中创建了事件监听器，使得helloworld不会执行后就退出事件循环
 */