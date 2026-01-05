/* numeric enum default */
enum Direction {
    Up,
    Down,
    Left,
    Right
}

var d: Direction;
d = Direction.Up;
console.log(d);
/* output 0 */

/* numeric enum with values */
enum StatusCode {
    Success = 200,
    NotFound = 404,
    Error = 500
}

var code: StatusCode;
code = StatusCode.NotFound;
console.log(code);
/* output 404 */

/* reverse lookup */
var codeName = StatusCode[500];
console.log(codeName);
/* output Error */

/* string enum */
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

var c: Color;
c = Color.Green;
console.log(c);
/* output GREEN */

/* enum in function */
function printStatus(s: StatusCode) {
    console.log(s);
}

printStatus(StatusCode.Success);
/* output 200 */

/* enum in switch */
function printColor(col: Color) {
    switch (col) {
        case Color.Red:
            console.log("red color");
            break;

        case Color.Green:
            console.log("green color");
            break;

        case Color.Blue:
            console.log("blue color");
            break;
    }
}

printColor(Color.Blue);
/* output blue color */

/* heterogeneous enum */
enum MixedEnum {
    No = 0,
    Yes = "YES"
}

var m: MixedEnum;
m = MixedEnum.Yes;
console.log(m);
/* output YES */

/* enum used in object */
var response: { status: StatusCode } = {
    status: StatusCode.Success
};

console.log(response.status);
/* output 200 */

/* enum array */
var colors: Color[] = [
    Color.Red,
    Color.Green,
    Color.Blue
];

console.log(colors);
/* output RED,GREEN,BLUE */

/* enum comparison */
var current: StatusCode;
current = StatusCode.Error;

if (current === StatusCode.Error) {
    console.log("error state");
}
/* output error state */
