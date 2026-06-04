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
identity4({ company: "BMW", model: "M5" });
//# sourceMappingURL=generics.js.map