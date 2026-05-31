/*
- Getter: Runs when a property is read.
- Setter: Runs when a property is updated.

Syntax:

get propertyName() {}
set propertyName(value) {}
*/


class User {
    constructor(email) {
        this._email = email;
    }

    // Getter
    get email() {
        return this._email.toUpperCase();
    }

    // Setter
    set email(value) {
        this._email = value;
    }
}

const user1 = new User("tisha@gmail.com");

console.log("Example 1");
console.log(user1.email);   // TISHA@GMAIL.COM

user1.email = "chai@gmail.com";

console.log(user1.email);  // CHAI@GMAIL.COM