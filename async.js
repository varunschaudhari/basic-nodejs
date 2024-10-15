const fs = require('fs');
const a = 100;

setImmediate(() => console.log('setImmediate'));

Promise.resolve('Promise').then(() => console.log('promise'));

fs.readFile('file.txt', 'utf8', (err, data) => {
    console.log('File Reading CB');
});

// it depends on the what is the timer value is provided, if it is 0 then it gets executed immediately otherwise it gets executed after the timer expires
setTimeout(() => console.log('Timer Expired'), 0);

process.nextTick(() => console.log('Process.nextTick'));

// it will store in heap memoryb before getting called
function printA() {
    console.log('A:', a);
}

// when this function is called then it gets added in callstack
printA();

console.log('Last line of the file');