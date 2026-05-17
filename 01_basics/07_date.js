// *******************Date**************

let now = new Date();
// console.log(now);

/*
 let date = new Date(2020, 11, 31); // month is 0-indexed, so 11 represents December
console.log(date);
*/

date = new Date(2020, 11, 31, 23, 59, 59); // year, month, day, hours, minutes, seconds
console.log(date);
console.log(typeof date);

/*
date = new Date('11/31/2020 23:59:59'); // date string
console.log(date);
*/

console.log(date.getFullYear());
console.log(date.toDateString()); 
console.log(date.toTimeString()); 
console.log(date.toLocaleString()); //returns a string with date and time 
console.log(date.getTime()); // returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
