class User {
            email: string
        name: string// readonly properties can only be assigned once, either at the time of declaration or within the constructor
        readonly city: string = ""
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const Seb = new User("seb@example.com", "Sebastian");//thid is an instance of the User class
// Seb.city = "Bamenda";