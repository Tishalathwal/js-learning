const myArr1 = [1, 2, 3, 4, 5];
const myArr2 = [6, 7, 8, 9, 10];

/*
console.log(myArr1.concat(myArr2));   // concatenates two arrays and returns a new array
console.log(myArr1.join('-'));   // joins all elements of an array into a string, separated by the specified separator
*/

console.log(...myArr1,...myArr2); // spread operator is used to expand an array into individual elements.

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
console.log(another_array[3][1]); // accessing nested array elements
console.log(another_array[5][2][0]); // accessing nested array elements

const real_another_array = another_array.flat(Infinity) // flat method flattens nested arrays into a single array. The argument Infinity is used to flatten all levels of nesting.
console.log(real_another_array);
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Array.of() method creates a new Array from a variable number of arguments

console.log(Array.isArray("Tisha")); // Array.isArray() method checks if a value is an array
console.log(Array.from("Tisha")) // Array.from() method creates a new with individual characters from a string
console.log(Array.from({name: "Tisha", age: 25}));  