const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),// 入口
    output: {// 出口
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    mo
}
