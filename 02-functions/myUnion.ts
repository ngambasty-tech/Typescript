let average: number | string = 30; // this variable can hold either a number or a string value, which allows for more flexibility in the types of data that can be assigned to it. This is useful in situations where the value of average may not always be a number, such as when it is used to represent a grade or a rating that may be expressed as a string (e.g., "A", "B", "C", etc.). By using a union type, we can ensure that the variable can accommodate both types of values without causing type errors.
average = "30"; // this is valid because average can hold a string value as well.

type User ={
    name: string,
    email: string,
    id: number
}

type Admin = {
    userName: string,
    id: number
}

let newUser: User | Admin = {
    userName: "admin1",
    id: 1
}//admin type is assigned to newUser, which is valid because newUser can hold either a User or an Admin type. This allows for flexibility in the types of objects that can be assigned to newUser, as it can represent either a regular user or an admin user depending on the context in which it is used.

newUser = {
    name: "user1",
    email: "user1@example.com",
    id: 2
}//User type is assigned to newUser, which is also valid because newUser can hold either a User or an Admin type. This allows for flexibility in the types of objects that can be assigned to newUser, as it can represent either a regular user or an admin user depending on the context in which it is used.

function getDbId(id: number | string) {
    //id.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'.
    // To fix this error, we need to check the type of id before calling the toUpperCase method. We can use a type guard to determine if id is a string or a number, and then call the appropriate method based on the type.
    if (typeof id === "string") {
        return id.toUpperCase(); // This will work because we have confirmed that id is a string before calling the toUpperCase method.
    }
    return id;
}

//array

const data: number[] = [1,2,3,4,5]
const datas: string[] = ["a","b","c"]
//const data1: number[] | string[] = [1,3,4,"5"] //this is not valid because data1 is defined as a union type that can hold either an array of numbers or an array of strings, but not both at the same time. In this case, data1 is assigned an array that contains both numbers and a string, which violates the type definition and results in a type error. To fix this error, we need to ensure that data1 is assigned either an array of numbers or an array of strings, but not a mix of both. For example, we could assign data1 to [1, 3, 4] if we want it to be an array of numbers, or ["a", "b", "c"] if we want it to be an array of strings.
const data1: (number | string | boolean)[] = [1,3,4,"5", false] // this is valid because data1 is defined as an array of union types, which means that each element in the array can be either a number or a string. In this case, data1 is assigned an array that contains both numbers and a string, which is allowed by the type definition and does not result in a type error. This allows for flexibility in the types of values that can be stored in the array, as it can accommodate both numbers and strings without causing type errors.
export {}