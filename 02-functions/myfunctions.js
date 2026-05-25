// function addTwo(num) {
//     return num + 2;
// } // The above function is not type-safe because it does not specify the type of the parameter `num`. This means that it can accept any type of argument, which can lead to unexpected behavior and potential bugs in the code.
function addTwo(num) {
    return num + 2;
}
//function getUpper(val) { //the type being any causes issues as the method to uppercase is supposed to work on strings and the any type allows any type of value.
//    return val.toUpperCase();
//}
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("hello"); // returns "HELLO"
// getUpper(123); // This would cause a type error because the function expects a string, not a number.
addTwo(3); // returns 5
// addTwo("3"); // This would cause a type error because the function expects a number, not a string.
function signUpUser(name, email, password) { }
signUpUser("michael", "mike@example.com", "password123"); // all arguments are of the correct type, so this call is valid.
// var loginUser = (name:string, email:string, isPaid:boolean ) => { 
// }
let loginUser = (name, email, isPaid = false) => {
};
// loginUser("mike","mike@example.com"); without the third argument, i get an error because the function expects three arguments, and the third argument is missing. This helps catch potential issues early and ensures that the function is called with the correct number of arguments, which can prevent runtime errors and improve code reliability.
loginUser("mike", "mike@example.com");
export {};
