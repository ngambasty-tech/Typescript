"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class twitter {
    cameraMode;
    filter;
    burst;
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    createStory() {
        console.log("Story created");
    }
    deleteStory() {
        console.log("Story deleted");
    }
}
class TikTok {
    cameraMode;
    filter;
    burst;
    short;
    constructor(cameraMode, filter, burst, short //this is allowed because i can add additional properties or methods in the class that implements the interface, as long as i implement all the properties defined in the interface.
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
}
//# sourceMappingURL=second.js.map