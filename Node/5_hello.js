function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName; 4
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
};
module.exports = Hello;