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

identity4<Car>({company: "BMW", model:"M5"})