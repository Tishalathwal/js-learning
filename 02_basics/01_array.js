// **********************Array**********************

// Array is a data structure that can hold multiple values at once. 

const myArr1 = [1, 2, 3, 4, 5];
const myArr2 = new Array('Hello', 'World', 'JavaScript'); // another way to create an array

// console.log(myArr1[1]);

// array methods
/*
myArr1.push(6); // adds an element to the end of the array
myArr1.pop(); // removes the last element from the array
*/
/*
myArr1.unshift(0); // adds an element to the beginning of the array
myArr1.shift(); // removes the first element from the array
*/

 
console.log(myArr1.indexOf(3)); // returns the index of the first occurrence of a specified value in the array, or -1 if it is not found
console.log(myArr1.includes(9)); // checks if the array includes a certain element, returns true or false

// slice and splice methods

const myArr3 = [1, 2, 3, 4, 5];
console.log(myArr3.slice(1,3)); //slice includes starting index and excludes ending
console.log(myArr3); //slice copy the original array without modifying it

console.log(myArr3.splice(1,3)); //splice includes starting index and excludes ending, but it modifies the original array by removing the elements
console.log(myArr3); // splice only returns the removed elements, and the original array is modified by removing those elements
