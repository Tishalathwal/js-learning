// Stack(Primitives) and Heap(Objects) are two different memory areas in JavaScript.

// stack copy the value and store it in a new memory location
let a = 10;
let b = a; // b gets a copy of the value of a
b = 20; // changing b does not affect a
console.log(a); // 10
console.log(b); // 20



// heap copy the reference to the same memory location
let obj1 = { name: "Tisha" };
let obj2 = obj1; // obj2 gets a reference to the same object in memory
obj2.name = "Deepak"; // changing obj2 also changes obj1 because they reference the same object
console.log(obj1.name); // Deepak
console.log(obj2.name); // Deepak
