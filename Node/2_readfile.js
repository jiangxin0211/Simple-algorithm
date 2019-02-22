var fs = require('fs');

fs.readFile('file', 'utf-8', function(err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});
console.log('end.');
// 上面是异步读取文件，返回结果是end.  file content

var fs = require('fs');
var data = fs.readFileSync('file', 'utf-8');
console.log(data);
console.log('end.');
// 这段是同步读取文件，返回是file content  end.