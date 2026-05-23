// ***********for in***************


// **for in in objects**

const myObj ={
    name : 'Tisha',
    age: 22,
    city: 'Sonipat'
}

for(let key in myObj){
    // console.log(key)  // here we are getting only the keys of the object
    // console.log(`${key}: ${myObj[key]}`)    // {key} is variable and {myObj[key]} is the value of that key in the object
}



//**for in in arrays**

const arr = ["js", "python", "java", "c++"]

for(let key in arr){
    // console.log(key)  // here we are getting the index of the array
    // console.log(`${key}: ${arr[key]}`)    // here we are getting the index and the value of that index in the array
}


// map in for-in will not work bcz map is not an obj
const map = new Map()

map.set('name', 'Tisha')
map.set('age', 22)
map.set('city', 'Sonipat')

// for (const key in map) {    // here we are getting the keys of the map but not the values because map is not an object
//     console.log(key)
// }