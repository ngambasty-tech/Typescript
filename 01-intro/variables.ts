let greetings: string = "Hello, TypeScript!";

//greetings = 6; // This will cause a type error because 'greetings' is declared as a string
console.log(greetings);

//number type
// let age: number = 30;
let age = 30; // TypeScript can infer the type as number based on the assigned value. typescipt is smart enough to infer the type of 'age' as number based on the assigned value. This is called type inference.
//age = "thirty"; // This will cause a type error because 'age' is declared as a number
age.toFixed()
console.log(age);

//boolean type
let isStudent: boolean = true;
//isStudent = "yes"; // This will cause a type error because 'isStudent' is declared as a boolean
console.log(isStudent); 

//let meal; // TypeScript infers the type of 'meal' as 'any' because it is declared without an initial value. The 'any' type allows 'meal' to hold any type of value, which can lead to potential issues if not used carefully.
let meal: string; // By explicitly declaring 'meal' as a string, we can ensure that it can only hold string values, which helps prevent type-related errors and improves code safety.

function orderMeal() {
    return "Pizza"; //now if i try to return a number or boolean, i automatically get an error because the return type of the function is inferred as string based on the returned value. This helps catch potential issues early and ensures that the function's return type is consistent with the expected type of 'meal'.
}
meal = orderMeal(); // 'meal' can be assigned a string value returned by the 'orderMeal' function without any type errors because it is of type 'any'.
// the function ordermeal returns a string "pizza" but nothing stops it from returning a boolean or a number because 'meal' is of type 'any'. This can lead to potential issues if the function's return type is not consistent with the expected type of 'meal' which is a string.

export {}; // This line is added to make this file a module, preventing global scope pollution.