// function 

// function add(x, y) {
//     console.log(x + y);
// }   

// add(5, 10); // calling the function with arguments

function add(x, y) {
    return x + y; // returning the sum of x and y
}

console.log(add(5, 10));

function loggedinUser(username) {
    if (username === undefined) {
        console.log("Please log in to continue.");
    } else {
        console.log(`Welcome, ${username}!`);
    }
}

loggedinUser("Tisha"); // calling the function with a username
loggedinUser(); // calling the function without a username to trigger the undefined case