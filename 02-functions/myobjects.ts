// const User = {
//     name: "Alice",
//     email: "alice@example.com",
//     isActive: true
// }

// function createUser({name:string, isActive:boolean}) {
// }

// // createUser({name: "Bob", isActive: true})
// let newUser = {name: "Bob", isActive: true, email: "bob@email.com"}

// function createCourse(): {name: string, price: number} {
//     return {name: "js", price: 3000}
// }

// type user ={
//     name: string,
//     email: string,
//     isPaid: boolean
// }//when ever there are methods in the object we use type instead of interface

// function createUser(user: user):user {
//     return{name: user.name, email: user.email, isPaid: user.isPaid }
// }


type User = {
    readonly _id: string,
    name: string,
    email: string,
    isPaid: true,
    creditCardDetails?: number //optional property
}

type cardNumber = {
    cardnumber: number
}
type cardDate = {
    cardDate: number
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}; // this is an intersection type that combines the properties of cardNumber, cardDate, and an object with a cvv property. The resulting type will have all the properties of cardNumber, cardDate, and the cvv property. This allows us to create a more complex type that includes all the necessary information for a credit card.

let myUser:User = {
    _id: "1234",
    name: "Alice",
    email: "alice@example.com",
    isPaid: true
}

myUser.name = "Brian";
//myUser._id = "4321"; // Error: Cannot assign to '_id' because it is a read-only property.

export {}