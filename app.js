// const NAME = "uddhav";
// console.log(NAME);

// globals no window

/* 
__dirname -- path to current dir
__filename -- file name
require -- function to use modules (file)
module -- info about current module (file)
process -- info about env where prog is executed
*/
// console.log(__dirname);
// console.log(__filename);
// //console.log(process);
// //console.log(require);
// //console.log(module);
// // setInterval(() => { // repeat whole process within after specified time
// //     console.log("time");
// // }, 100);
// setTimeout(() => { // delay function
//     console.log("time");
// }, 1000);


//using an external dependency
const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newarr = _.flattenDeep(items);
console.log(newarr);