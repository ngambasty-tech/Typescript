//const user: string[] = ["matter",30,true] // this is not valid because the user variable is defined as an array of strings, but it contains a number and a boolean value. This violates the type definition and results in a type error. To fix this error, we need to ensure that all elements in the user array are of the same type, which in this case should be strings. For example, we could change the array to ["matter", "30", "true"] to make it valid.

const user: (string | number | boolean)[] = ["matter",30,true] // this is valid because the user variable is defined as an array of union types, which means that each element in the array can be either a string, a number, or a boolean. In this case, user is assigned an array that contains a string, a number, and a boolean value, which is allowed by the type definition and does not result in a type error. This allows for flexibility in the types of values that can be stored in the array, as it can accommodate strings, numbers, and boolean values without causing type errors.

const user1: [string, number, boolean] = ["matter",30,true] // this is valid because the user1 variable is defined as a tuple type, which means that it can hold a fixed number of elements with specific types. In this case, user1 is assigned a tuple that contains a string, a number, and a boolean value, which matches the defined types in the tuple. This allows for more precise type checking and ensures that the elements in the tuple are of the expected types.

let rgb: [number, number, number] = [255, 0, 0] // this is valid because the rgb variable is defined as a tuple type that can hold three elements, each of which must be a number. In this case, rgb is assigned a tuple that contains three numbers representing the red, green, and blue color values, which matches the defined types in the tuple. This allows for more precise type checking and ensures that the elements in the tuple are of the expected types.

type User = [number, string]
const newUser:User =[200, "mathew"]
newUser[0] = 698; 

export {}