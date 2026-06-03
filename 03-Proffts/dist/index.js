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
    city = "Kom";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const Seb = new User("seb@example.com", "Sebastian"); //thid is an instance of the User class
// Seb.city = "Bamenda";//i cannot asign a readonly property after it has been initialized
//Seb.city //with the readonly i can just read it
//Seb.city //now i cant access the city property because it is private, it can only be accessed within the class
//# sourceMappingURL=index.js.map