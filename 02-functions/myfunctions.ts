// function addTwo(num) {
//     return num + 2;
// } // The above function is not type-safe because it does not specify the type of the parameter `num`. This means that it can accept any type of argument, which can lead to unexpected behavior and potential bugs in the code.

function addTwo(num: number): number { // the 2nd :number specifies the return type.
    return num + 2;
   // return "hello"; // with a return type of number, this would cause a type error.
}

//function getUpper(val) { //the type being any causes issues as the method to uppercase is supposed to work on strings and the any type allows any type of value.
//    return val.toUpperCase();
//}

function getUpper(val: string) {
    return val.toUpperCase();
}

getUpper("hello"); // returns "HELLO"
// getUpper(123); // This would cause a type error because the function expects a string, not a number.

addTwo(3); // returns 5
// addTwo("3"); // This would cause a type error because the function expects a number, not a string.

function signUpUser(name: string, email: string, password: string) {}

signUpUser("michael", "mike@example.com", "password123");// all arguments are of the correct type, so this call is valid.



// var loginUser = (name:string, email:string, isPaid:boolean ) => { 

// }
let loginUser = (name:string, email:string, isPaid:boolean = false) => { // the ispaid parameter now has a default value of false, which means that if the caller does not provide a value for isPaid, it will default to false. This allows the function to be called with only two arguments (name and email) without causing a type error, while still providing the option to specify the isPaid value if needed.

}

// loginUser("mike","mike@example.com"); without the third argument, i get an error because the function expects three arguments, and the third argument is missing. This helps catch potential issues early and ensures that the function is called with the correct number of arguments, which can prevent runtime errors and improve code reliability.
loginUser("mike","mike@example.com");

// function getValue(myVal: number) {
//     if (myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }// this function will return 2 different types so handling the return type is different.

const getGreetings =(s: string): string =>{
    return "" 
}

const heros =["spiderman","ironman","thor"];
//typescript is smart enough to automatically infer the type of the array.
heros.map((hero): string => {
    return `hero is ${hero}`;
}) // the map function is used to create a new array by applying a function to each element of the original array. In this case, we are using an arrow function to transform each hero name into a string that says "hero is [hero name]". The return type of the arrow function is specified as string, which means that the resulting array will be an array of strings.

function consoleError(erroeMsg: string): void {//return type void indicates that the function returns nothing.
    console.log(erroeMsg);
}

const handleError = (errorMsg: string): never => {// the never type indicates that the function will never return a value, either because it always throws an error or because it contains an infinite loop.
    throw new Error(errorMsg);
}

export {};