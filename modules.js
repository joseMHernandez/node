
//commonJS every file is a module by default
// Module encapsulated code {only share minimum code}


const names = require('./names')
const sayHi = require('./utils.js')
const data = require('./data')
console.log(data.singlePerson)
console.log(data.arr)

/* const {john, peter} = names


sayHi('noel')
sayHi(john)
sayHi(peter)  */