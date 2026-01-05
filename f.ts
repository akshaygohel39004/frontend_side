/* basic casting using as */
var value: any = "hello"

var len: number = (value as string).length
console.log(len)
/* output 5 */

/* angle bracket casting */
var other: any = "typescript"

var size: number = (<string>other).length
console.log(size)
/* output 10 */

/* casting union type */
function show(val: number | string) {
    if ((val as string).toUpperCase) {
        console.log((val as string).toUpperCase())
    } else {
        console.log(val)
    }
}

show("hi")
/* output HI */

show(20)
/* output 20 */

/* object casting */
var data: any = { name: "Akshay", age: 25 }

var person = data as { name: string; age: number }
console.log(person.name)
/* output Akshay */
console.log(person.age)
/* output 25 */

/* array value casting */
var arr: any[] = [10, "ten", true]

var first: number = arr[0] as number
console.log(first)
/* output 10 */

/* force casting using unknown */
var x = "hello"

var forced = ((x as unknown) as number).length
console.log(forced)
/* output undefined */

/* force casting explanation */
console.log(typeof x)
/* output string */
