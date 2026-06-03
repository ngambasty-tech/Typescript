"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class takePicture {
    cameraMode;
    filter;
    burst;
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getReelTime() {
        return 15;
    }
}
//const Ngam = new takePicture("portrait", "sepia", 3); //an object cannot be created from an abstract class so this produces an error.
class Instagram extends takePicture {
    cameraMode;
    filter;
    burst;
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter, burst); //when a class extends an abstract class, it must call the constructor of the abstract class using the super keyword, and pass the required parameters to it. This is necessary to properly initialize the properties defined in the abstract class.
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getScreenTime() {
        console.log("Instagram screen time");
    }
}
const Ng = new Instagram("portrait", "sepia", 3); //this is allowed because the Instagram class extends the abstract class takePicture, which means that it inherits its properties and methods, and it can be instantiated to create objects.
Ng.getReelTime;
// class Twitter extends takePicture {
// }
//const Ngam = new Twitter("portrait", "sepia", 3); //this is allowed because the Twitter class extends the abstract class takePicture, which means that it inherits its properties and methods, and it can be instantiated to create objects.
//# sourceMappingURL=abstractClass.js.map