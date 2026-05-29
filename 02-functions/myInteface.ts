interface userInterface {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    //trial: () => string // this is a method that returns a string
    trial(): string // this is another way to define a method that returns a string
    getCoupon(couponname: string): number // this is a method that takes a string argument and returns a number
}//interface, more like is lose form of class

const me: userInterface = {
    dbId: 12345,
    email: "me@gmail.com",
    userId: 1234,
    trial: () => {
        return "trial ended"
    },
    getCoupon: (name: "Sabastine") => {
        return 37; // Example return value
    }
}