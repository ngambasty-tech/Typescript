"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    email;
    name;
    city = "";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const Seb = new User("seb@example.com", "Sebastian");
// Seb.city = "Bamenda";
//# sourceMappingURL=index.js.map