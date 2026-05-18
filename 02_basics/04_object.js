//singleton object
const user = new Object(); // creating an empty object using the Object constructor
const user2 = {}; // creating an empty object using object literal syntax

user.name = "Tisha"; // adding properties to the object
user.age = 22;
user.city = "Sonipat";
user.hobbies = ['reading', 'traveling', 'cooking'];
user.email = "tisha@yahoo.com"

// console.log(user);

const user3 ={
    city: "Sonipat",
    fullName:{
        userName:{
            firstName: "Tisha",
            lastName: "Lathwal"
        }
    }
}

// console.log(user3.fullName.userName.firstName); // accessing nested object properties

const a1={1: "one", 2: "two", 3: "three"};
const a2={4: "four", 5: "five", 6: "six"};

//merging methods
// const a3= Object.assign({}, a1, a2); // using Object.assign() method to merge two objects into a new object
const a3={...a1, ...a2}; // using spread operator to merge two objects into a new object

// console.log(a3);

// console.log(Object.keys(a1)); 
// console.log(Object.values(a1));
// console.log(Object.entries(a1)); // this access the key-value pairs of an object

// console.log(a1.hasOwnProperty("1")); // this checks if the object has a specific property

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
const {courseInstructor} = course // only extracting the value of the property 'courseInstructor' from the object and creating a new variable with the same name to store that value
const {courseInstructor: instructor} = course // object destructuring to extract the value of the property 'courseInstructor' and assign it to a new variable 'instructor'

// console.log(courseInstructor);
console.log(instructor);
