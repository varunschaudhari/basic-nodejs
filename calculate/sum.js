// by default, node.js will not allow us to use variables from other files
// we need to export the variables we want to use in other files

const x = 10;
console.log("sum.js", x);

function sum(a, b) {
  return a + b;
}
// we can also export the variables as an object
// this object literal is a special object that node.js will understand
// we can use old syntax for objects like module.exports = {x, sum};
// old syntax is not recommended for use which is {x: x, sum: sum};
module.exports = {x, sum};