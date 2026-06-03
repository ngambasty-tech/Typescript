"use strict";
//class User {
//       public email: string
//     name: string// readonly properties can only be assigned once, either at the time of declaration or within the constructor
//   private readonly city: string = ""
//constructor(email: string, name: string) {
//  this.email = email;
//this.name = name;
//this.city // i can use it here as it is within the constructor, but i cannot assign it a value here because it is already initialized with an empty string
//}
//}
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    email;
    name;
    _courseCount = 1; //this is a private property that can only be accessed within the class. It is initialized with a default value of 1.
    city = "Kom";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get courseCount() {
        return this._courseCount;
    }
    //get is used to get any property, and set to set any property, nott necessaily private properties.
    //these getters and setters anre designed so that these private properties can be exposed outside with additional logic or restrictions.
    //and the have no return type, because they are not regular methods, they are accessed like properties, so we dont need to specify a return type for them.
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
    get getAppleEmail() {
        return `apple${this.email}`; //this is a getter method that returns a string that combines the word "apple" with the user's email. It allows us to access this computed value as if it were a property, without needing to call it like a regular method. For example, we can access it using `Seb.getAppleEmail` instead of `Seb.getAppleEmail()`.
    }
}
const Seb = new User("seb@example.com", "Sebastian"); //thid is an instance of the User class
// Seb.city = "Bamenda";//i cannot asign a readonly property after it has been initialized
//Seb.city //with the readonly i can just read it
//Seb.city //now i cant access the city property because it is private, it can only be accessed within the class
//# sourceMappingURL=index.js.map