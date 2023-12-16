const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const data = items.flat(Infinity)

console.log(data)