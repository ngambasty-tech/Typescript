"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function typesDetect(val) {
    if (typeof val === "number") {
        return val.toFixed(2);
    }
    return val.toLowerCase();
}
function providedId(id) {
    if (!id) {
        console.log("Please provide an ID");
        return;
    }
    return id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    //the in operator is used to check if the property isAdmin exists in the account object
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
function logValue(x) {
    if (x instanceof Date) { //this returns a true and from there we can access the date methods like toUTCString
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function getAnimal(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (getAnimal(pet)) {
        pet;
        return "fish food";
    }
    else {
        return "bird food";
    }
}
//# sourceMappingURL=detection.js.map