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

type user ={
    name: string,
    email: string,
    isPaid: boolean
}//when ever there are methods in the object we use type instead of interface

function createUser(user: user):user {
    return{name: user.name, email: user.email, isPaid: user.isPaid }
}
export {}