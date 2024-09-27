// destructuring the sum and x from the sum.js file
// const {sum, x} = require("./calculate/sum");
const {sum, multiply} = require("./calculate");

let str = "Hello World";
console.log(str);

console.log(sum(1, 2));
console.log(multiply(1, 2));

// This logs the global object of Node.js and its methods
// console.log(globalThis);

// globalThis is the same as global
// console.log(globalThis === globalThis);

console.log(module);
console.log(module.exports);
console.log(exports);
console.log(exports === module.exports);
