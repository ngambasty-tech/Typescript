class User {
            email: string
        name: string
        readonly city: string = ""
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const Seb = new User("seb@example.com", "Sebastian");
// Seb.city = "Bamenda";