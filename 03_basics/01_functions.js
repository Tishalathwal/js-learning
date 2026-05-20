// *************function ***********************

// function add(x, y) {
//     console.log(x + y);
// }   

// add(5, 10); // calling the function with arguments

function add(x, y) {
    return x + y; // returning the sum of x and y
}

// console.log(add(5, 10));

function loggedinUser(username) {
    if (username === undefined) {
        console.log("Please log in to continue.");
    } else {
        console.log(`Welcome, ${username}!`);
    }
}

// loggedinUser("Tisha");   // calling the function with a username
// loggedinUser();   // calling the function without a username to trigger the undefined case


// *************if wee want to take more parameters in the fxn but we are not sure how many parameters***********

function sum(...numbers) { // using rest parameter
    return numbers
}

// console.log(sum(1, 2, 3, 4, 5,6)); // calling the function with multiple arguments


//  ******************calling a fxn with obj as an argument****************

const user = {
    name: "Tisha",
    age: 22,
    city: "Sonipat",
}

function displayUserInfo(anyObject) {
    console.log(`Name: ${anyObject.name} and age: ${anyObject.age} and city: ${anyObject.city}`);
}
displayUserInfo(user); // calling the function with an object as an argument


// ********calling a fxn with an array as an argument********

const numbers = [1, 2, 3, 4, 5];

function calculateSum(anyArr) {
    return anyArr[3]
}

console.log(calculateSum(numbers)); // calling the function with an array as an argument