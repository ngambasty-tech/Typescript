let greetings = "Hello, TypeScript!";
//greetings = 6; // This will cause a type error because 'greetings' is declared as a string
console.log(greetings);
//number type
// let age: number = 30;
let age = 30; // TypeScript can infer the type as number based on the assigned value. typescipt is smart enough to infer the type of 'age' as number based on the assigned value. This is called type inference.
//age = "thirty"; // This will cause a type error because 'age' is declared as a number
age.toFixed();
console.log(age);
//boolean type
let isStudent = true;
//isStudent = "yes"; // This will cause a type error because 'isStudent' is declared as a boolean
console.log(isStudent);


export {};
