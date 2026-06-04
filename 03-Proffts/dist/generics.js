"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const score = [];
const name = [];
function identity1(val) {
    return val;
}
function identity2(val) {
    return val;
}
function identity3(val) {
    return val;
} // this is different from the any return (indetity2) in the any type that is passed in is locked in and the return type is the same as the type that is passed in
// identity3("ngam")
function identity4(val) {
    return val;
} // better way of writing generic functions
// identity4<Car>({company: "BMW", model:"M5"})
function getUserdetails(info) {
    const myIndex = 3;
    return info[myIndex];
}
const getMoreUserDetails = (info) => {
    const myIndex = 5;
    return info[myIndex];
};
// function multipleFunction<T, U>(val1: T, val2: U):object {
//     return {
//         val1,
//         val2
//     }
// }
// multipleFunction(3, "ngam")
// function multipleFunction<T extends string, U extends number>(val1: T, val2: U):object {
//     return {
//         val1,
//         val2
//     }
// }
// multipleFunction("ngam", 5)
function multipleFunction(val1, val2) {
    return {
        val1,
        val2
    };
}
multipleFunction(3, { connection: "localhost", username: "ngam", password: "1234" });
class Results {
    person = [];
    addToList(info) {
        this.person.push(info);
    }
}
//# sourceMappingURL=generics.js.map