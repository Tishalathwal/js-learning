// **********map*********

const num = [1,2,3,4,5,6,7,8,9,10]

// const result = num.map( (item)=> item *2)
// console.log(result)   


// ********chaining of map and filter**********

const reult = num
                .map( (item)=> item *2)
                .map( (item) => item + 1)
                // .filter( (item) => item >10 )
console.log(reult)


//  **basically map is used to transform the data and filter is used to filter the data based on some condition