// *******************reduce()*******************
// reduce is used to reduce the array to a single value

const arr = [1, 2, 3, 4, 5]


const sum = arr.reduce( (accumulator, currentValue) => {
    return accumulator + currentValue
}, 0)   // here 0 is the initial value of accumulator

console.log(sum)    
// here we are adding all the values of the array and getting the sum of the array



// we can also use reduce to get the product of the array

const product = arr.reduce( (acc, curval) =>  acc * curval, 1)   // here 1 is the initial value of accumulator

console.log(product)    
// here we are multiplying all the values of the array and getting the product of the array


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce( (acc, curval) => acc + curval.price, 0 )
console.log(totalPrice)