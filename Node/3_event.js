var EventEmitter = require ('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event', function () {// 注册了一个事件监听器
    console.log('some_event occured.');
})

setTimeout(function () {
    event.emit('some_event');
}, 1000)
// 1秒后输出了 some_event occured