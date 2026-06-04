const score: Array<number> = []
const name: Array<string> = [] 

function identity1(val: number | boolean): boolean | number {
    return val

}

function identity2(val: any): any {
    return val
}


function identity3<Type>(val: Type): Type {
    return val
} // this is different from the any return (indetity2) in the any type that is passed in is locked in and the return type is the same as the type that is passed in

// identity3("ngam")

function identity4<T>(val: T): T {
    return val
}// better way of writing generic functions

interface Car{
    company: string,
    model: string
}

// identity4<Car>({company: "BMW", model:"M5"})

function getUserdetails<T>(info: T[]): T | undefined{

    const myIndex = 3
    return info[myIndex]
}

const getMoreUserDetails = <T>(info: T[]): T | undefined=> {
    const myIndex = 5
    return info[myIndex]
}


interface Database {
    connection: string,
    username: string,
    password: string
}

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

function multipleFunction<T, U extends Database>(val1: T, val2: U):object {
    return {
        val1,
        val2
    }
}
multipleFunction(3, { connection: "localhost", username: "ngam", password: "1234" })


interface GCE{
    subject: string,
    marks: number
}

class Results<T>{
    public person: T[] = []

    addToList(info: T) {
        this.person.push(info)
    }
}