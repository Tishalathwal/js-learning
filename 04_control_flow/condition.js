// **********conditionals**********

// if statement
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}

if (age < 18) console.log("You are a minor."); // can write if statement without curly braces if it's a single line

// if-else statement
let time = 10;
if (time < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!");
}

// else-if ladder

let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}



const logedIn = true;
const debitCard = true;

if (logedIn && debitCard) {  // both should be true
    console.log("You can make a purchase.");
}

const hasID = false;
const hasTicket = true;
if (hasTicket || hasID) { // either one should be true
    console.log("You can enter the club.");
}