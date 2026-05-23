// ************for of**************

/*
const arr = [1,2,3,4,5]

for (let i of arr){
    console.log(i)
}
*/

const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}


// ***********map***************

const map = new Map()

map.set('name', 'Tisha')
map.set('age', 22)
map.set('city', 'Sonipat')
/*
for (const key of map) {    // here key is an array of [key, value] that's why we are getting both key and value in the output
    console.log(key)
}
*/

for (const [key, value] of map) {    // here we are destructuring the array to get key and value separately
    console.log(`${key}: ${value}`)
}


// ******for of objects********
// for of loop doesn't work with objects because objects are not iterable.

/*
const obj = {
    name: 'Tisha',
    age: 22,
    city: 'Sonipat'
}

for(const key of obj){
    console.log(`${key}: ${obj[key]}`)
}
*/