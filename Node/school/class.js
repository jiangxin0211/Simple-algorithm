var student = require('./student')
var teacher = require('./teacher')

teacher.add('sort')

function add (teacherName, students) {
    teacher.add(teacherName)

    students.forEach(function (item, index) {
        student.add(item)
    })
}

exports.add = add // 传统的模块实例； 是module.exports下的一个方法

module.exports = add // 特别的对象类型；module.exports是真实存在的东西
