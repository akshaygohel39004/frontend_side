/* union type with number or string */
var value: number | string

value = 10
console.log(value)
/* output 10 */

value = "ten"
console.log(value)
/* output ten */

/* union type with more than two types */
var data: number | string | boolean

data = 100
console.log(data)
/* output 100 */

data = "hello"
console.log(data)
/* output hello */

data = true
console.log(data)
/* output true */

/* union type with array */
var arr: (number | string)[] = [1, "two", 3, "four"]
console.log(arr)
/* output 1,two,3,four */

/* union type in function parameter */
function printId(id: number | string) {
    console.log(id)
}

printId(5)
/* output 5 */

printId("five")
/* output five */

/* union type in function return */
function getResult(x: number): number | string {
    if (x > 0) {
        return x
    }
    return "zero or negative"
}

console.log(getResult(3))
/* output 3 */

console.log(getResult(-1))
/* output zero or negative */

/* union and type checking */
function showValue(val: number | string) {
    if (typeof val === "number") {
        console.log("number", val)
    } else {
        console.log("string", val)
    }
}

showValue(7)
/* output number 7 */

showValue("seven")
/* output string seven */

/* union type with null */
var maybe: string | null

maybe = null
console.log(maybe)
/* output null */

maybe = "not null"
console.log(maybe)
/* output not null */

/* union type with undefined */
var maybe2: string | undefined

maybe2 = undefined
console.log(maybe2)
/* output undefined */

maybe2 = "defined"
console.log(maybe2)
/* output defined */

/* union type with object */
var obj: { name: string } | null

obj = { name: "Akshay" }
console.log(obj)
/* output object with name Akshay */

obj = null
console.log(obj)
/* output null */
