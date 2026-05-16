// console.log(2>1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2"==2);  // == only checks value not type
// console.log("2"===2); // === checks value and type both

/*
console.log(null > 0);  
console.log(null == 0); // false
console.log(null < 0); 
console.log(null>=0); // null<=0);
console.log(null<=0); // null>=0);
console.log(null==undefined);  // null is only equal to undefined and not equal to any other value
console.log(null===undefined); // false because they are of different types
*/

console.log(undefined==0); // false
console.log(undefined<0); // false
console.log(undefined>=0); // false because undefined is not converted to any value and it is considered as NaN and any comparison with NaN is false
console.log(undefined<=0); // false
