// *********for each*************
//for each is a callback fxn which means a fsn without name 
// it is used to iterate over an array and objects but it is not used to iterate over maps and sets

// in array--
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item){    // for eache using normal fxn
//     // console.log(item);
// } )

coding.forEach( (item) => {    // for each using arrow fxn
    console.log(item);
} )


function print(item){    // for each using named fxn
    console.log(item);
}

coding.forEach(print)



// obj insid array

const users = [
    {name: 'Tisha', age: 22},
    {name: 'Isha', age: 21},
    {name: 'Shorya', age: 23}
]

users.forEach( (user) => {
    console.log(`Name: ${user.name}, Age: ${user.age}`)
} )