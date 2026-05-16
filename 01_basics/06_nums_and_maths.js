/********************NUMBERS***********************/

const score = 400
// console.log(score);

const balance = new Number(505)
// console.log(balance);

// console.log(balance.toString().length); // toString() method converts a number to a string and then we can use length property to find the length of the string.
// console.log(balance.toFixed(1)); 

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // toPrecision() method formats a no. to a specified length & includes the decimal point. It rounds the number if necessary.

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); 


/********************MATHS***********************/

console.log(typeof Math);
console.log(Math.PI);
console.log(Math.E);

console.log(Math.abs(-7));
console.log(Math.round(7.6)); // rounds to the nearest integer
console.log(Math.floor(7.6)); // rounds down to the lowest integer
console.log(Math.ceil(7.2)); // rounds up to the greatest integer

console.log(Math.min(3,5,1,8,2));
console.log(Math.max(3,5,1,8,2));

console.log(Math.random()); // generates a random number between 0 and 1
console.log(Math.floor(Math.random() * 10)); // generates a random number between 0 and 9
console.log(Math.floor(Math.random()*10) + 1); //sometime 0 comes, so we add 1 to make it between 1 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // generates a random number between min and max (inclusive)
