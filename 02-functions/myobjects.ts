const User = {
    name: "Alice",
    email: "alice@example.com",
    isActive: true
}

function createUser({name:string, isActive:boolean}) {
}

// createUser({name: "Bob", isActive: true})
let newUser = {name: "Bob", isActive: true, email: "bob@email.com"}

function createCourse(): {name: string, price: number} {
    return {name: "js", price: 3000}
}

export {}