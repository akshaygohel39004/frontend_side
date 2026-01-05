/* simple function without return type */
function greet() {
    console.log("hello world")
}

greet()
/* output hello world */

/* function with return type number */
function add(a: number, b: number): number {
    return a + b
}

var sum = add(5, 10)
console.log(sum)
/* output 15 */

/* function with string return */
function getMessage(name: string): string {
    return "Hi " + name
}

console.log(getMessage("Akshay"))
/* output Hi Akshay */

/* function with optional parameter */
function printId(id: number | undefined) {
    if (id === undefined) {
        console.log("no id")
    } else {
        console.log(id)
    }
}

printId(10)
/* output 10 */
printId(undefined)
/* output no id */

/* function with default parameter */
function multiply(a: number, b: number = 2): number {
    return a * b
}

console.log(multiply(5))
/* output 10 */
console.log(multiply(5, 3))
/* output 15 */

/* function with rest parameters */
function sumAll(...nums: number[]): number {
    var total = 0
    for (var i = 0; i < nums.length; i++) {
        total = total + nums[i]
    }
    return total
}

console.log(sumAll(1, 2, 3))
/* output 6 */
console.log(sumAll(10, 20, 30, 40))
/* output 100 */

/* function type as variable */
var greetFunc: (msg: string) => void

greetFunc = function (msg: string) {
    console.log(msg)
}

greetFunc("hi there")
/* output hi there */

/* function overload (same name different type) */
function combine(a: number, b: number): number
function combine(a: string, b: string): string

function combine(a: any, b: any): any {
    return a + b
}

console.log(combine(2, 3))
/* output 5 */
console.log(combine("hi", " world"))
/* output hi world */
