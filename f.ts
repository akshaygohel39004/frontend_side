/* basic object type */
type Person = {
    name: string
    age: number
    city: string
}

/* keyof gets all keys as union */
type PersonKeys = keyof Person
/* PersonKeys is "name" | "age" | "city" */

/* use keyof in function */
function getProperty(obj: Person, key: keyof Person) {
    return obj[key]
}

var p: Person = { name: "Akshay", age: 21, city: "Ahmedabad" }

console.log(getProperty(p, "name"))
/* output Akshay */

console.log(getProperty(p, "age"))
/* output 21 */

console.log(getProperty(p, "city"))
/* output Ahmedabad */

/* keyof with another object */
type Product = {
    id: number
    price: number
    title: string
}

type ProductKeys = keyof Product
/* ProductKeys is "id" | "price" | "title" */

function printProductValue(obj: Product, key: keyof Product) {
    console.log(obj[key])
}

var prod: Product = { id: 101, price: 499, title: "Book" }

printProductValue(prod, "id")
/* output 101 */

printProductValue(prod, "price")
/* output 499 */

printProductValue(prod, "title")
/* output Book */

/* use keyof with generic */
function getValue<T>(obj: T, key: keyof T) {
    return obj[key]
}

var o = { a: 1, b: 2, c: 3 }

console.log(getValue(o, "a"))
/* output 1 */
console.log(getValue(o, "b"))
/* output 2 */
console.log(getValue(o, "c"))
/* output 3 */
