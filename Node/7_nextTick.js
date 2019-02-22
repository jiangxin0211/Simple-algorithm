function doSomething(args, callback) {
    somethingComplicated(args);
    callback();
}
doSomething(function onEnd() {
    compute();
});

// 使用process.nextTick(callback)改写上面程序
function doSomething(args, callback) {
    somethingComplicated(args);
    process.nextTick(callback);
}
doSomething(function onEnd() {
    compute();
});
//改写后的程序会把上面耗时的操作拆分为两个事件，减少每个事件的执行时间，提高事件响应速度。