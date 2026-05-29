interface userInterface {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    //trial: () => string // this is a method that returns a string
    trial(): string // this is another way to define a method that returns a string
    getCoupon(couponname: string): number // this is a method that takes a string argument and returns a number
}//interface, more like is lose form of class

interface userInterface { // this is a duplicate interface declaration, which is allowed in TypeScript. The second declaration will merge with the first one, and the resulting interface will have all the properties and methods from both declarations. In this case, the second declaration adds a new method called getCoupon to the userInterface, which takes a string argument and returns a number. This allows us to define additional functionality for the userInterface without modifying the original declaration.

    gitToken?: string

}

interface Admin extends userInterface {// this is an interface that extends the userInterface, which means that it inherits all the properties and methods from the userInterface. In addition to the inherited properties and methods, the Admin interface also defines a new property called role, which is a string. This allows us to create objects that have all the properties and methods of a userInterface, as well as an additional role property that is specific to admins.
    role: "admin" | "ta" | "learner"

}


const me: Admin = {
    role: "admin",
    dbId: 12345,
    email: "me@gmail.com",
    userId: 1234,
    gitToken: "abc123",
    trial: () => {
        return "trial ended"
    },
    getCoupon: (name: "Sabastine") => {
        return 37; // Example return value
    }
}