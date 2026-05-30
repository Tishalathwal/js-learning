function setUserName(username){
    this.username = username;
}

function userInfo(username, age, email){
    //The call() method invokes a function with a specified value of this
    setUserName.call(this, username);   // here this, make its this equal to the current this
    this.age = age;
    this.email = email;
}

const user = new userInfo("Tisha","22","tisha@google.com");
console.log(user);
