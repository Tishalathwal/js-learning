let str1 = "Tisha"
let str2 = "Lathwal"

//console.log(str1 + str2); ==> concatenation of strings(older way)

console.log(`my name is ${str1} and surname is ${str2}`)

const name = new String(`Tisha_Lathwal`); // another way to create a string
console.log(name);

// console.log(name.toLowerCase());
// console.log(name.toUpperCase());

// console.log(name.length);
// console.log(name.charAt(7));
// console.log(name.indexOf(`L`));

console.log(name.substring(0,6));
console.log(name.slice(-2,2));

const newString="    Tisha         "
console.log(newString.trim()); // removes whitespace from both ends of the string
console.log(newString.replace('s','ss'));
console.log(newString.includes('m'));
console.log(newString.split('s'));
