// every file is module by default
// module is encapsulated code (we can share the part we want)

const names = require('./module-names');
const sayhii = require('./module-print');
require('./module-add') // function invoked in imported file/module itself
console.log(names);
sayhii(names.persona);
// sayhii(names.b);
