let user = {
    name: "Alice",
    age: 30
};  

console.log("Alice");
console.log(user.name);
console.log(user.email);// This will cause an error because 'email' does not exist on type '{ name: string; age: number; }'