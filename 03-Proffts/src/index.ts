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

class User {
    readonly city: string = "Kom";
    constructor(
        public email: string,
        public name: string,
        // private readonly userId: string,
    ) {//better way of declaring and initializing properties in the constructor is to use parameter properties, which allows us to declare and initialize properties directly in the constructor parameters, reducing boilerplate code

    }
}

const Seb = new User("seb@example.com", "Sebastian");//thid is an instance of the User class
// Seb.city = "Bamenda";//i cannot asign a readonly property after it has been initialized
//Seb.city //with the readonly i can just read it
//Seb.city //now i cant access the city property because it is private, it can only be accessed within the class


