/* type alias for simple primitive */
type ID = number

var userId: ID
userId = 10
console.log(userId)

/* type alias for union */
type Status = "active" | "inactive" | "banned"
var s: Status
s = "active"
console.log(s)

/* type alias for object shape */
type PersonAlias = {
    id: number
    name: string
    age: number
}

var personA: PersonAlias = {
    id: 1,
    name: "Akshay",
    age: 25
}
console.log(personA)

/* type alias for array */
type NumArray = number[]
var arr: NumArray = [1, 2, 3]
console.log(arr)

/* alias for tuple */
type Mixed = [string, number]
var x: Mixed = ["Hi", 100]
console.log(x)

/* interface for object */
interface PersonInterface {
    id: number
    name: string
    email?: string
}

var personB: PersonInterface = {
    id: 2,
    name: "Rahul"
}
console.log(personB)

/* interface extension */
interface Employee extends PersonInterface {
    salary: number
}

var emp: Employee = {
    id: 3,
    name: "Suman",
    salary: 50000
}
console.log(emp)

/* using alias in function */
function printPerson(p: PersonAlias) {
    console.log(p.id)
    console.log(p.name)
    console.log(p.age)
}

printPerson(personA)

/* using interface in function */
function showUser(u: PersonInterface) {
    console.log(u.id)
    console.log(u.name)
    console.log(u.email)
}

showUser(personB)


//difference between alias and interface

// type alias lets you give a name to a type, including primitives, unions, arrays, tuples, and object types. 
// w3schoolsua.github.io

// interface defines the shape of an object type and supports extension