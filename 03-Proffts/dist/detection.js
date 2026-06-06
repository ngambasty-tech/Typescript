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
//# sourceMappingURL=detection.js.map