let myName = "tisha     "
let mychannel = "chai     "
// console.log(myName.length); //10
// console.log(myName.trim().length);  // op- 5 // trim() use for trimming the length ie exclude the spaces

// console.log(myName.trueLength);  


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// noe this tisha method added to array, string, function 
Object.prototype.tisha = function(){
    console.log(`tisha is present in all objects`);
}

//but this heyTisha only added to array
Array.prototype.heyTisha = function(){
    console.log(`tisha says hello`);
}

// heroPower.tisha()
// myHeros.tisha()
// myHeros.heytisha()
// heroPower.heytisha()

// inheritance

const User = {
    name: "tisha",
    email: "tisha@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

//Old Style Inheritance
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"tisha".trueLength()
"iceTea".trueLength()