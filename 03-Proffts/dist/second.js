"use strict";
// interface TakePicture {
//     cameraMode: string
//     filter: string
//     burst: number
// }//interface doesnt containg the definition of properties but what must be implemented in the class that implements this interface, it is a way to define a contract that a class must follow
Object.defineProperty(exports, "__esModule", { value: true });
// interface Story {
//     createStory(): void
//     deleteStory(): void
// }
// class twitter implements TakePicture, Story {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ){//this is me making sure i follow the protocol to make use of the takePicture interface, which means that i have to implement all the properties defined in the takePicture interface, and i can also add additional properties or methods if i want to.
//     }
//     createStory(): void {
//         console.log("Story created");
//     }
//     deleteStory(): void {
//         console.log("Story deleted");
//     }
// }
// class TikTok implements TakePicture {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number,
//         public short: string //this is allowed because i can add additional properties or methods in the class that implements the interface, as long as i implement all the properties defined in the interface.
//     ){}
// }
//# sourceMappingURL=second.js.map