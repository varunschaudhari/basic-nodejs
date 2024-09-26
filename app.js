// destructuring the sum and x from the sum.js file
const {sum, x} = require("./sum");

let str = "Hello World";
console.log(str);

console.log(sum(1, 2));
console.log(x);

// This logs the global object of Node.js and its methods
// console.log(globalThis);

// globalThis is the same as global
// console.log(globalThis === globalThis);