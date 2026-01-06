/* base interface */
interface Person {
    name: string
    age: number
    location?: string
}

//something is optional if we use partial

/* Partial */
var partialPerson: Partial<Person> = {}
partialPerson.name = "Akshay"
console.log(partialPerson)
/* output { name: "Akshay" } */

/* Required */
var fullPerson: Required<Person> = {
    name: "Ram",
    age: 30,
    location: "Delhi"
}
console.log(fullPerson)
/* output { name: "Ram", age: 30, location: "Delhi" } */

/* Record */
var nameAgeMap: Record<string, number> = {
    Alice: 21,
    Bob: 25
}
console.log(nameAgeMap)
/* output { Alice: 21, Bob: 25 } */

/* Omit */
var bob: Omit<Person, "age" | "location"> = {
    name: "Bob"
}
console.log(bob)
/* output { name: "Bob" } */

/* Pick */
var anna: Pick<Person, "name"> = {
    name: "Anna"
}
console.log(anna)
/* output { name: "Anna" } */

/* Exclude */
type Primitive = string | number | boolean
var ex: Exclude<Primitive, string> = true
console.log(ex)
/* output true */

/* ReturnType */
function makePoint() {
    return { x: 10, y: 20 }
}

type Point = ReturnType<typeof makePoint>
var pt: Point = { x: 10, y: 20 }
console.log(pt)
/* output { x: 10, y: 20 } */
