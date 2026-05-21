// IIFE (Immediately Invoked Function Expression)

// - it executes immediately after it is defined
// - it creates a new scope, so variables defined inside it do not affect the outside scope



// ******named IIFE (normal function)******
(function welcome(){
    console.log("Welcome to IIFE")
})();
 // heree, ; is must to call the function after declaration of IIFE otherwise next iife will not declare and execute bcz of syntax error



// ******anonymous IIFE (arrow function)******
( () =>{
    console.log("Welcome to IIFE with arrow function")
})();




// *********iife with parameters*********
( (name) =>{
    console.log(`Welcome to IIFE with ${name}`)
})("Tisha")

// why we use IIFE?
// - to avoid polluting the global scope 
// - to create a new scope for variables
// - to execute code immediately without having to call the function separately