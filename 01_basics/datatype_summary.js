//two types of datatypes in javascript
//1. primitive datatypes
//2. non-primitive datatypes(Reference datatypes)

//primitive datatypes
//1. number
//2. string
//3. boolean
//4. null
//5. undefined
//6. symbol

/*
const score = 10;
const message = "Hello";
const condition = true;
const value = null;
let undef; // undefined
*/

const symbol1 = Symbol("id");
const symbol2 = Symbol("id");

console.log(symbol1 === symbol2); // false because each symbol is unique even if they have the same description

/*
console.log(typeof score); // number 
console.log(typeof message); // string
console.log(typeof condition); // boolean
console.log(typeof value); // object (this is a known quirk in JavaScript)
console.log(typeof undef); // undefined
*/

//non-primitive datatypes
//1. object
const person = {
    name: "Tisha",
    age: 22
};
console.log(typeof person); // object

//2. array
const numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // object (arrays are a type of object in JavaScript)

//3. function
function greet() {
    console.log("Hello!");
}
console.log(typeof greet); // function (functions have their own type in JavaScript)
