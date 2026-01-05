/* basic tuple */
var user: [number, string] = [1, "Akshay"];

/* access tuple values */
console.log(user[0]);
console.log(user[1]);

/* tuple with different types */
var product: [string, number, boolean] = ["Book", 200, true];

/* tuple with optional element */
var employee: [number, string?];
employee = [101];
employee = [102, "Rahul"];

/* tuple with readonly */
var readonlyTuple: readonly [number, string] = [1, "Admin"];

/* tuple with push allowed */
var tuple1: [number, string] = [1, "A"];
tuple1.push("extra");
console.log(tuple1);

/* tuple length changes */
console.log(tuple1.length);

/* tuple with rest elements */
var marks: [string, ...number[]];
marks = ["Math", 90, 80, 70];

/* nested tuple */
var address: [string, [number, string]] = ["Street", [12, "City"]];

/* tuple array */
var users: [number, string][] = [
    [1, "A"],
    [2, "B"],
    [3, "C"]
];

/* tuple destructuring */
var person: [number, string] = [10, "Ram"];
var id = person[0];
var name1 = person[1];

/* tuple in function parameter */
function printUser(data: [number, string]) {
    console.log(data[0]);
    console.log(data[1]);
}

printUser([5, "Kiran"]);

/* tuple as function return */
function getUser(): [number, string] {
    return [9, "Shyam"];
}

var result = getUser();

/* tuple with union types */
var value: [number | string, boolean];
value = [10, true];
value = ["Ten", false];

/* tuple reassignment */
var pair: [number, number];
pair = [2, 3];
pair = [5, 6];

/* tuple with enum */
enum Status {
    ACTIVE,
    INACTIVE
}

var state: [number, Status];
state = [1, Status.ACTIVE];

/* tuple with null and undefined */
var data1: [number, string | null];
data1 = [1, null];
data1 = [2, "Ok"];

/* tuple inside object */
var obj: { info: [number, string] } = {
    info: [7, "Inside"]
};

/* readonly tuple in function */
function showTuple(t: readonly [number, string]) {
    console.log(t[0]);
    console.log(t[1]);
}

showTuple([3, "Read"]);
