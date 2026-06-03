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
    _courseCount = 1; //this is a protected property that can be accessed within the class and its subclasses. It is initialized with a default value of 1.
    //protected is available in this class an any inherited class, but it is not available outside of these classes. It is a way to allow access to certain properties or methods for subclasses while keeping them hidden from the outside world.
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
class subUser extends User {
    family = true;
    changeFamilySize() {
        this._courseCount = 2; //i cant access the private property _courseCount here because it is private to the User class, and it can only be accessed within the User class. If I want to access it in the subUser class, I would need to change its visibility to protected in the User class, which would allow it to be accessed in the subUser class and any other subclasses of User. what i can do is change the _courseCount from private to protected in the User class, and then i can access it here in the subUser class. However, if I want to keep it private, I can use the getter and setter methods that are defined in the User class to access and modify the _courseCount property indirectly.
    }
}
const Seb = new User("seb@example.com", "Sebastian"); //thid is an instance of the User class
// Seb.city = "Bamenda";//i cannot asign a readonly property after it has been initialized
//Seb.city //with the readonly i can just read it
//Seb.city //now i cant access the city property because it is private, it can only be accessed within the class
//# sourceMappingURL=index.js.map