// ************for loop************

/*
for (let i = 0; i < 5; i++) {
    const element = 3;
    if(i === element) {
        console.log("Element found at index: " + i);
    }
    console.log(i);
}
    */


// **************nested for loop***************
/*
for (let i = 1; i <= 3; i++) {
    console.log(`value of i is ${i}`);
    
    for (let j = 1; j <= 3; j++) {
        console.log(`value of j is ${j} and value of i is ${i}`);
        
    }
}
*/


// **********break and continue statement************

for (let i = 0; i < 15; i++) {           // break statement

    if(i === 6){
        console.log(`detect is over here ${i}`);
        break
    }
    console.log(i);
}

for (let i = 0; i < 15; i++) {           // continue statement

    if(i === 6){
        console.log(`detect is over here ${i}`);
        continue
    }
    console.log(i);
}
