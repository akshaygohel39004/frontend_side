/* generic function printArray */
function printArray<T>(arr: T[]): void {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

/* call generic with number */
printArray<number>([1, 2, 3])
/* output 1 */
/* output 2 */
/* output 3 */

/* call generic with string */
printArray<string>(["a", "b", "c"])
/* output a */
/* output b */
/* output c */

/* generic type alias */
type Pair<T, U> = {
    first: T
    second: U
}

var p: Pair<number, string> = { first: 10, second: "ten" }
console.log(p.first)
/* output 10 */
console.log(p.second)
/* output ten */

/* generic with default type */
function showValue<T = string>(val: T): void {
    console.log(val)
}

showValue("hello")
/* output hello */

showValue<number>(100)
/* output 100 */

/* generic constraint */
interface HasLength {
    length: number
}

function logLength<T extends HasLength>(item: T): void {
    console.log(item.length)
}

logLength("text")
/* output 4 */
logLength([10, 20, 30])
/* output 3 */

/* generic interface */
interface Repository<T> {
    getAll(): T[]
    getOne(id: number): T
}

type User = { id: number; name: string }

var userRepo: Repository<User> = {
    getAll(): User[] {
        return [
            { id: 1, name: "Akshay" },
            { id: 2, name: "Rahul" }
        ]
    },
    getOne(id: number): User {
        return { id: id, name: "Unknown" }
    }
}

var allUsers = userRepo.getAll()
console.log(allUsers)
/* output [object array] */
console.log(userRepo.getOne(1))
/* output { id: 1, name: "Unknown" } */

/* generic class */
class Box<T> {
    value: T
    constructor(val: T) {
        this.value = val
    }
    getValue(): T {
        return this.value
    }
}

var numBox = new Box<number>(123)
console.log(numBox.getValue())
/* output 123 */

var strBox = new Box<string>("abc")
console.log(strBox.getValue())
/* output abc */

/* generic with multiple type parameters */
function makePair<A, B>(x: A, y: B): Pair<A, B> {
    return { first: x, second: y }
}

var gPair = makePair<boolean, number>(true, 42)
console.log(gPair.first)
/* output true */
console.log(gPair.second)
/* output 42 */
