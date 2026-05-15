const accountId = 1345 //can't change
let accountEmail = "Tisha@google.com"
var accountCity = "jaipur"
accountPassword = "1234"  //can also be this 
let accountState;

// prefer let instead of var bcz of block and functional scope

accountEmail = "tisha@tl.com"
accountCity = "sonipat"
accountPassword = "0987"

console.log(accountId);
console.table([accountId,accountCity,accountEmail,accountPassword,accountState])
