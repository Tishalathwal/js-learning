const user ={
    username: "Tisha",
    age: 22,
    about: function(){
        console.log(this.username, this.age); // can access username and age bcz of this keyword
    },
    
    // aboutArrow: () => {
    //     console.log(this.username, this.age); // can't access username and age bcz of this keyword in arrow function
    // }
}

// user.about();
// user.aboutArrow();



 function chai(){
    let username = "Tisha"
    console.log(this.username); // can't access username bcz of this keyword in normal function
}

// chai()

const chai1 = function () {
    let username = "Tisha"
    console.log(this.username); // can't access username bcz of this keyword in normal function
}


// *********arrow function*********

const chai2 = (num1, num2) => {      //way1 to write arrow function
    return num1 + num2
}
console.log(chai2(2, 3)); 

const chai3 = (num1, num2) => num1 + num2   // way2 to write arrow fxn in one line without return 
console.log(chai3(4, 5)); 

const chai4 = (num1, num2) => (num1 + num2)  // way3 to write arrow fxn in one line without return and with parenthesis
console.log(chai4(6, 7));

const chai5 = () => ({username: "Tisha", age: 22}) // way4 to return object in arrow function
console.log(chai5());     // parenthesis is must to return object in arrow function
