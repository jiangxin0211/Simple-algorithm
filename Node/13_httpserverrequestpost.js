var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req, res) {
    var post = '';
    req.on('data', function(chunk) {// 通过req的data事件监听函数，每当接受到请求体的数据， 就累加到post变量中
        post += chunk;
    });
    req.on('end', function() {
        post = querystring.parse(post);// 解析为真正的POST请求格式
        res.end(util.inspect(post));
    });
}).listen(3000);

// 访问http://localhost:3000/user?name=byvoid&email=byvoid@byvoid.com