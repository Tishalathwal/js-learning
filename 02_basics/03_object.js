//object literal syntax

const sym = Symbol('unique'); // creating a symbol with a description 'unique'

let user ={              // non-singleton object
    name: 'Tisha',
    age: 22,
    [sym]: "hello",
    city: "Sonipat",
    hobbies: ['reading', 'traveling', 'cooking'],
    email: "tisha@microsoft.com"
}

// console.log(user["name"]); // imp. - this is the way how we can access the properties of an object using bracket
// console.log(user.name); // this is also a way how we can access the properties of an object using dot notation
// console.log(user.hobbies[1]); // accessing nested array elements
// console.log(user[sym]); // accessing the value of the symbol property using bracket notation

user.email="tisha@example.com"
// console.log(user["email"]);

// Object.freeze(user); // freezing the object to prevent any modifications to it

user.email="tisha@google.com"
// console.log(user["email"]);


user.fun = function() {
    console.log("This is a function inside an object");
}
user.fun(); 


//deleting a property from an object
delete user.city;
console.log(user.city); // this will return undefined as the property 'city' has been deleted from the object
