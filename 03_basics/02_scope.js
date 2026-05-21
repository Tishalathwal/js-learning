if(true){
    let a = 1 // block scope
    const b = 2 // block scope
    var c = 3 
}

// console.log(a); //can't access bcz let is block scope
// console.log(b); //can't access bcz const is block scope
console.log(c); // can access c bcz var is function scope


function one(){
    const username = "Tisha"

    function two(){
        const age = 22
        console.log(username); // can access username bcz of lexical scope
        console.log(age); // can access age bcz age is in two function scope
    }
    // console.log(age); // can't access age bcz age is in two function scope

    two();
}
// console.log(username); // can't access username bcz username is in one function scope

one();


if(true){
    let a = 1
    if(true){
        let name = "Tisha"
        console.log(a); // can access a bcz of lexical scope
    }
    // console.log(name); // can't access name bcz name is in inner block scope
}



// ******************about hoisying******************

first(); // can call first bcz of hoisting
function first(){
    console.log("I am first");
}

// second(); // can't call second bcz of hoisting
const second = function(){
    console.log("I am second");
}
second(); // can call second after declaration