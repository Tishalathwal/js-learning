// ************Truthy and Falsy values**********

const hasID = []  // empty array is truthy

if(hasID) {
    console.log("You can enter the club.");
} else {
    console.log("You cannot enter the club.");
}

// truthy values are:-  "0", 'false', " "(with spaces), [], {}, function(){}

// falsy values are:-   0, -0,  ""(no spaces), null, undefined, NaN, false, bigint(0), Symbol()



// *******nallish coalescing operator (??)********

// this operator (??) is a logical operator that returns the right-hand side operand when the left-hand side operand is null or undefined


const userInput = null;
const defaultValue = "Default Value";

const result = userInput ?? defaultValue; // if userInput is null or undefined, it will return defaultValue
console.log(result); // Output: "Default Value"

const anotherInput = "Hello";
const anotherResult = anotherInput ?? defaultValue; // if anotherInput is not null or undefined, it will return anotherInput
console.log(anotherResult); // Output: "Hello"


// ************ternary operator*********

//condition? true : false
const age = 18;
const canVote = age >= 18 ? "You can vote." : "You cannot vote.";
console.log(canVote); // Output: "You can vote."