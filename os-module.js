
// info for current user
const os = require('os')

console.log(os.userInfo())


// method returns the system in seconds

console.log(` the system uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)
