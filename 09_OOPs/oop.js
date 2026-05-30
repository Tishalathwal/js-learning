
const user = {
    username: "Tisha",
    Age: 22,
    loggedIn: true,

    getUserDetails: function(){
        console.log(`usename: ${this.username}`);  //this is a keyword that refers to the object that is currently executing the function
    }
}

console.log(user.username);
console.log(user.getUserDetails);
console.log(this);


function User(username, age, loggedIn){
    this.username = username;
    this.age = age;
    this.loggedIn = loggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
}

//The new keyword is used to create a new object from a constructor function or class
// if we don't create new object js overwrite the constructor
const userOne = new User("Tisha",22,true);
const userTwo = new User("Shorya",20, false);
console.log(userOne);
