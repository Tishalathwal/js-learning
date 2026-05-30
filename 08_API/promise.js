// **********promise********************
// A Promise is an object that represents the eventual completion (success) or failure of an asynchronous operation and its resulting value.
// promise states: 1. pending, 2. fulfilled(resolved), 3. rejected

// Promise = A JavaScript object for handling async operations
//fetch() = A function that makes an HTTP request and gives you a Promise


// way 1
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is complete');
    },1000)
    resolve();   //necessary for calling then
});

promiseOne.then(function(){   // then for resolve
    console.log('async consumed');
})


//way 2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async 2 is complete');
        resolve();
    },2000)
}).then(function(){
    console.log('async 2 comsumed');
});


// way 3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Tisha", age: "22"});
    },1000)
});

promiseThree.then(function(user){
    console.log(user);
    
})


// way 4
const promiseFour = new Promise(function(reslove, rejecct){
    let error = true;
    if(!error){
        resolve({username: "Tisha", passward: "987"})
    }else{
        console.log("ERROR: Something went wrong");
    }
})
promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(username);  
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))


//way 5
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


// using async, await
async function consumePromiseFive(){   //The async keyword allows the use of await inside the function
    try {
        const response = await promiseFive  //await pauses the execution of the function until the Promise settles (either resolves or rejects)
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()  // calling fxn

/*
async function getAllUsers(){
         try {
            // ****fetch() is a built-in JavaScript function used to make HTTP requests to a server or API
        const response = await fetch('https://jsonplaceholder.typicode.com/users')  // API id

        const data = await response.json()   // converting response to JSON
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

//getAllUsers()
*/

/* syntax of fetch
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });
*/

fetch('https://api.github.com/users/Tishalathwal')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error) => console.log(error))


/*
   Q-  Does fetch() reject on a 404 error?

   A-   No, fetch() does not reject for HTTP errors like 404 or 500.

        It only rejects when there is a network-level failure, such as:

        - No internet connection
        - DNS lookup failure
        - Network timeout (in some cases)
        - Request blocked before reaching the server
*/
