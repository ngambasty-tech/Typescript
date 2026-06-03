abstract class takePicture { //declaring this class as abstract means that it cannot be instantiated directly, and it is meant to be extended by other classes that will provide implementations for its properties and methods. This is useful when we want to define a common structure or behavior for a group of related classes, but we don't want to create instances of the abstract class itself.
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}

    abstract getScreenTime(): void
    getReelTime(): number {
        return 15;
    }
}


//const Ngam = new takePicture("portrait", "sepia", 3); //an object cannot be created from an abstract class so this produces an error.

class Instagram extends takePicture {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter, burst) //when a class extends an abstract class, it must call the constructor of the abstract class using the super keyword, and pass the required parameters to it. This is necessary to properly initialize the properties defined in the abstract class.
    }
    getScreenTime(): void {
        console.log("Instagram screen time");
    }
}


const Ng = new Instagram("portrait", "sepia", 3); //this is allowed because the Instagram class extends the abstract class takePicture, which means that it inherits its properties and methods, and it can be instantiated to create objects.
Ng.getReelTime
// class Twitter extends takePicture {

// }
//const Ngam = new Twitter("portrait", "sepia", 3); //this is allowed because the Twitter class extends the abstract class takePicture, which means that it inherits its properties and methods, and it can be instantiated to create objects.