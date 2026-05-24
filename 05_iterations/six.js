
const arr = ["js", "python", "java", "c++"]

const result = arr.forEach( (item) => {
    // console.log(item);
    return item
})

// console.log(result)    // o/p = undefined
// for each does not return anything , only used for iterations
// for returning something we use map, filter, reduce etc.


// *******filter*********

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filteredNum = num.filter( (item)=>{
    return item > 5
})

const filteredNum2 = num.filter( (item) => item < 5 )
// here happen if we use parenthesis then we have to use return word for returning the value otherwisee we can directly return the value without using return word and parenthesis

// console.log(filteredNum)
// console.log(filteredNum2)


// basic example

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const book = books.filter( (bk) => bk.publish>2000)
// console.log(book)

const book2 = books.filter( (bk) => bk.genre === 'Fiction' && bk.edition > 2000 )
console.log(book2)