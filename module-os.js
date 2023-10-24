const os = require('node:os');

//info about current user
const userinfo = os.userInfo();
// console.log(userinfo);

// info about uptime of system
console.log(`System Uptime: ${os.uptime} seconds.`);

//info about currentOS

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
    cpuinfo: os.cpus(),
    hostname: os.hostname(),
    networkInterfaces: os.networkInterfaces(),
    parallelism: os.availableParallelism(),
    cpuarch: os.arch(),
    loadavg: os.loadavg(),
    platform: os.platform()
};

console.log(currentOS);