const {readFileSync, writeFileSync} = require('node:fs');

// const fs = require('node:fs');
// fs.readFileSync
// fs.writeFileSync similar to above single line , line 1 is just destructured
console.log("Start Task");

//reading a file
const firstfile = readFileSync('./content/first.txt','utf8');
console.log(firstfile);

const secondfile = readFileSync('./content/second.txt','utf8');
console.log(secondfile);

//writing a file
writeFileSync('./content/result-file.txt',`Result file is: ${firstfile}, ${secondfile}`);
const resfile = readFileSync('./content/result-file.txt','utf8');
console.log(resfile);


//append to a existing file
writeFileSync('./content/result-file.txt',` This is appended text `,{flag:'a'});
const resfilea = readFileSync('./content/result-file.txt','utf8');
console.log(resfilea);

console.log("Ready for next task");
