const path = require('path')
console.log(path.sep)

const pathJoin = path.join('/content', 'subfolder', 'test.txt')
console.log(pathJoin)

const pathBaseName = path.basename(pathJoin)
console.log(pathBaseName)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
