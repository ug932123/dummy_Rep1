const path = require('node:path');

//seperator for platform
console.log(path.sep);

//joining the file path
const filePath = path.join('/content','subcontent','test.txt');
console.log(filePath);

//getting basename
const base = path.basename(filePath);
console.log(base);

//absolute path
const absolute = path.resolve(__dirname,"content","subcontent","test.txt");
console.log(absolute);
